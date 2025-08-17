#!/usr/bin/env python

import argparse
import asyncio
import logging
import json
from os import path
from time import time
import yaml

from web_libs import WebLibs
from generator import Generator, CallMethod
from validator import Validator
from web_libs import WebLibs
from browser import Browser
from static_http_server import StaticHTTPServer
from openrouter import OpenRouterClient


def parse_args():
    parser = argparse.ArgumentParser(description="Run LLM web design evaluation harness.")
    parser.add_argument('--tests', type=str, default='all', help='Comma-separated list of test names, or "all".')
    parser.add_argument('--models', type=str, default='all', help='Comma-separated list of model names, or "all".')
    parser.add_argument('--parallel', type=int, default=2, help='Number of parallel tasks to run.')
    parser.add_argument('--retries', type=int, default=2, help='Number of repair retries.')
    parser.add_argument('--timeout', type=int, default=60*5, help='Timeout for model API calls.')
    parser.add_argument('--openrouter-base-url', type=str, default='https://openrouter.ai/api/v1', help='OpenRouter API base URL.')
    parser.add_argument('--debug', action='store_true', help='Enable debug logging.')
    parser.add_argument('--dry-run', action='store_true', help='Show plan without executing.')
    return parser.parse_args()

def _normalize_models(models):
    norm = []
    for m in models:
        if isinstance(m, str):
            norm.append({"name": m, "call": "tools"})
        elif isinstance(m, dict):
            name = m.get("name") or m.get("model")
            call = m.get("call") or "tools"
            if not name:
                continue
            norm.append({"name": name, "call": call})
    return norm


def get_selected_tests_and_models(args, tasks, models):
    if args.tests == 'all':
        selected_tests = tasks
    else:
        test_names_to_run = [s.strip() for s in args.tests.split(',') if s.strip()]
        selected_tests = [t for t in tasks if t['name'] in test_names_to_run]

    all_models = _normalize_models(models)
    if args.models == 'all':
        selected_models = all_models
    else:
        model_names_to_run = [s.strip() for s in args.models.split(',') if s.strip()]
        selected_models = [m for m in all_models if m['name'] in model_names_to_run]

    return selected_tests, selected_models

async def run_test(client, task, model_info, web_libs, args):
    model_name = model_info["name"]
    call_method = model_info.get("call", "json").upper()

    generator = Generator(client, task, model_name, CallMethod[call_method])
    validator = Validator(task, web_libs)
    
    attempts = 0
    generation_time = 0.0
    generated_files = None
    validation_result = None

    while attempts <= args.retries:
        attempts += 1
        logging.info(f"Attempt {attempts}/{args.retries + 1} for {task['name']} with {model_name}")
        
        try:
            start_time = time()
            if generated_files is None: # First attempt
                generated_files = await generator.generate()
            else: # Repair attempt
                generated_files = await generator.repair(
                    generated_files,
                    validation_result.console_messages,
                    validation_result.structure.missing_sections
                )
            generation_time += time() - start_time

            validation_result = await validator.validate(generated_files)

            if validation_result.passed:
                logging.info(f"Test passed on attempt {attempts}")
                break
            
            logging.info(f"Test failed on attempt {attempts}. Retrying...")

        except Exception as e:
            logging.error(f"An exception occurred during generation/repair on attempt {attempts}: {e}")
            if attempts > args.retries:
                raise Exception(f"Final attempt failed for {task['name']} with {model_name}. No more retries left.")

    logging.info(f"Final result for {task['name']} with {model_name}: Score={validation_result.score}")
    logging.debug(f"Console messages: {validation_result.console_messages}")

    # Convert openrouter model name to directory-friendly format
    model_dir_name = model_name.split("/")[-1]
    result_dir = path.join("result", task["name"], model_dir_name)
    generated_files.save(result_dir)
    web_libs.save_libs(path.join(result_dir, "lib"))
    
    # Make screenshots in different viewports
    # Start static http server
    static_http_server = StaticHTTPServer(result_dir)
    static_http_server.start()

    # Start browser
    async with Browser() as browser:
        page = await browser.open(static_http_server.get_url())
        await page.save_viewport_screenshots(path.join(result_dir, "screenshots"))

    static_http_server.stop()

    # Save json report
    with open(path.join(result_dir, "report.json"), "w") as f:
        report = validation_result.to_dict()
        report["generation_time"] = generation_time
        report["attempts"] = attempts
        json.dump(report, f, default=str, indent=2)


async def main():
    args = parse_args()
    log_level = logging.DEBUG if args.debug else logging.INFO
    logging.basicConfig(level=log_level, format='%(asctime)s - %(levelname)s - %(message)s')

    with open("config.yaml", "r") as f:
        config = yaml.safe_load(f)
    tasks = config["tasks"]
    models = config["models"]

    selected_tests, selected_models = get_selected_tests_and_models(args, tasks, models)

    if args.dry_run:
        logging.info("Dry Run: Planned actions")
        logging.info("========================")
        logging.info(f"Tests to run: {[t['name'] for t in selected_tests]}")
        logging.info(f"Models to use: {[m['name'] for m in selected_models]}")
        logging.info(f"Parallelism: {args.parallel}")
        logging.info(f"Retries: {args.retries}")
        logging.info("========================")
        return

    web_libs = WebLibs()
    await web_libs.download()

    client = OpenRouterClient(base_url=args.openrouter_base_url, timeout=args.timeout)
    semaphore = asyncio.Semaphore(args.parallel)

    tasks_to_run = []
    for task in selected_tests:
        for model in selected_models:
            async def task_with_semaphore(task=task, model=model):
                async with semaphore:
                    try:
                        await run_test(client, task, model, web_libs, args)
                    except Exception as e:
                        logging.exception(f"Task {task['name']} with {model['name']} failed: {e}")
            tasks_to_run.append(task_with_semaphore())
            
    
    logging.info(f"Starting generation for {len(tasks_to_run)} tasks...")
    await asyncio.gather(*tasks_to_run)
    logging.info("All tests complete.")


if __name__ == '__main__':
    asyncio.run(main())
