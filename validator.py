import logging
import tempfile
from os import path
from dataclasses import dataclass, asdict
from typing import List, Dict

from browser import Browser
from web_libs import WebLibs
from generator import WebFiles
from static_http_server import StaticHTTPServer

@dataclass
class StructureResult:
    missing_sections: List[str]
    
    @property
    def required_sections_present(self) -> bool:
        return len(self.missing_sections) == 0

@dataclass
class ResponsivenessResult:
    mobile: bool
    laptop: bool
    desktop: bool

@dataclass
class AccessibilityResult:
    pass

@dataclass
class PerformanceResult:
    js_size_kb: float
    css_size_kb: float

@dataclass
class ValidationResult:
    structure: StructureResult
    responsiveness: ResponsivenessResult
    accessibility: AccessibilityResult
    performance: PerformanceResult
    console_messages: List[Dict]

    @property
    def score(self) -> int:
        score = 0
        if not self.console_messages:
            score += 40
        if self.responsiveness.mobile and self.responsiveness.laptop:
            score += 20
        if self.structure.required_sections_present:
            score += 25
        return score

    @property
    def passed(self) -> bool:
        return not self.console_messages and self.structure.required_sections_present
    
    
    def to_dict(self):
        result = asdict(self)
        result["passed"] = self.passed
        result["scrore"] = self.score
        return result

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

class Validator:
    def __init__(self, task: dict, web_libs: WebLibs):
        self.task = task
        self.web_libs = web_libs

    async def validate(self, generated_files: WebFiles) -> ValidationResult:
        with tempfile.TemporaryDirectory() as temp_dir:
            self._setup_environment(temp_dir, generated_files)

            # start static http server
            static_http_server = StaticHTTPServer(temp_dir)
            static_http_server.start()

            async with Browser() as browser:
                page = await browser.open(static_http_server.get_url())

                # Validate using browser
                structure = await self._check_structure(page)
                responsiveness = await self._check_responsiveness(page)
                accessibility = await self._check_accessibility(page)
                console_messages = self._filter_console_messages(page.console_messages)

                # Basic performance check
                performance = self._check_performance(generated_files)
    
                return ValidationResult(
                    structure=structure,
                    responsiveness=responsiveness,
                    accessibility=accessibility,
                    performance=performance,
                    console_messages=console_messages,
                )
            
    def _filter_console_messages(self, messages) -> list[dict[str, str]]:
        # Only include messages that do NOT contain any skip phrase
        skip_phrases = [
            "Tailwind CSS in production",
            # ...add more skip phrases here as needed...
        ]
        filtered_messages = [
            msg for msg in messages
            if not any(skip in msg.get("text", "") for skip in skip_phrases)
        ]
        return filtered_messages

    def _setup_environment(self, temp_dir: str, generated_files: WebFiles) -> None:
        self.web_libs.save_libs(path.join(temp_dir, "lib"))
        generated_files.save(temp_dir)

    async def _check_structure(self, page) -> StructureResult:
        return StructureResult(
            missing_sections=[],
        )

    async def _check_responsiveness(self, page) -> ResponsivenessResult:        
        has_sb = {}
        for name, vp in page.viewports.items():
            await page.set_viewport_size(**vp)
            has_sb[name] = await page.evaluate(
                "document.documentElement.scrollWidth > document.documentElement.clientWidth"
            )
        return ResponsivenessResult(
            mobile=not has_sb['mobile'],
            laptop=not has_sb['laptop'],
            desktop=not has_sb['desktop'],
        )

    def _check_performance(self, generated_files: WebFiles) -> PerformanceResult:
        js_size = len(generated_files.app_js.encode('utf-8')) / 1024
        css_size = len(generated_files.styles_css.encode('utf-8')) / 1024
        return PerformanceResult(
            js_size_kb=js_size,
            css_size_kb=css_size,
        )

    async def _check_accessibility(self, page) -> AccessibilityResult:
        return AccessibilityResult()

