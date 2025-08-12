SHELL := /bin/bash

.PHONY: setup run clean clean-gh-pages setup-gh-pages publish-gh-pages

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

PAGES_BRANCH = gh-pages
PAGES_DIR = .gh-pages-worktree
BUILD_DIR = result

# Initialize gh-pages
setup-gh-pages:
	@git fetch origin
	@if ! git show-ref --verify --quiet refs/heads/$(PAGES_BRANCH); then \
		if git show-ref --verify --quiet refs/remotes/origin/$(PAGES_BRANCH); then \
			git branch --track $(PAGES_BRANCH) origin/$(PAGES_BRANCH); \
		else \
			git branch $(PAGES_BRANCH); \
		fi \
	fi
	@if [ ! -d "$(PAGES_DIR)" ]; then \
		git worktree add $(PAGES_DIR) $(PAGES_BRANCH); \
	else \
		echo "$(PAGES_DIR) already exists"; \
	fi

# Cleanup gh-pages branch
clean-gh-pages:
	git worktree remove .gh-pages-worktree
	git branch -D gh-pages
	git push origin --delete gh-pages

# Publish result
publish-gh-pages:
	@if [ ! -d "$(PAGES_DIR)" ]; then \
		echo "Execute: make setup-gh-pages"; \
		exit 1; \
	fi
	rm -rf $(PAGES_DIR)/*
	(cd result && python ../gallery.py --results=. --config=../config.yaml --output=index.html)
	cp -r $(BUILD_DIR)/* $(PAGES_DIR)/
	@cd $(PAGES_DIR) && \
	if ! git diff --quiet || ! git diff --cached --quiet; then \
		git add .; \
		git commit -m "Update site $$(date +'%Y-%m-%d %H:%M:%S')"; \
		git push origin $(PAGES_BRANCH); \
		echo "Published"; \
	else \
		echo "No any changed."; \
	fi