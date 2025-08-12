SHELL := /bin/bash

.PHONY: setup run clean

setup:
	@echo "Installing dependencies..."
	python -m venv .venv
	@. .venv/bin/activate; pip install -r requirements.txt
	@echo "Installing Playwright browsers..."
	@. .venv/bin/activate; playwright install chromium
	@echo "Setup complete. Activate the virtual environment with: source .venv/bin/activate"

run:
	@. .venv/bin/activate; python run.py

clean:
	@echo "Cleaning up..."
	rm -rf result reports/__pycache__
	find . -type f -name '*.pyc' -delete
	find . -type d -name '__pycache__' -delete
