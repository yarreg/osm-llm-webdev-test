import logging
import os
from playwright.async_api import async_playwright


class Page:
    viewports = {
        "mobile": {"width": 390, "height": 844},
        "laptop": {"width": 1280, "height": 800},
        "desktop": {"width": 1440, "height": 900},
    }  
    
    def __init__(self, playwright_page, console_messages=[]):
        self.page = playwright_page
        self.console_messages = console_messages

    async def save_screenshot(self, fname):
        """Save a screenshot of the page"""
        await self.page.screenshot(path=fname)
        
    async def save_viewport_screenshots(self, path, fmt: str = "%s_%s.png"):
        os.makedirs(path, exist_ok=True)
        for name, viewport in self.viewports.items():
            await self.set_viewport_size(**viewport)
            await self.save_screenshot(os.path.join(path, fmt % (viewport["width"], viewport["height"])))

    async def set_viewport_size(self, width, height):
        """Set the viewport size of the page"""
        await self.page.set_viewport_size({"width": width, "height": height})

    async def evaluate(self, expression):
        return await self.page.evaluate(expression)


class Browser:
    def __init__(self):
        self.p = None
        self.browser = None

    async def __aenter__(self):
        self.p = await async_playwright().start()
        self.browser = await self.p.chromium.launch()
        return self

    async def __aexit__(self, exc_type, exc_val, exc_tb):
        if self.browser:
            await self.browser.close()
        if self.p:
            await self.p.stop()

    async def open(self, url=None) -> Page:
        """Run browser automation with HTTP server and return Page"""
        if not self.browser:
            raise Exception("Browser not started. Use 'async with Browser() as browser:'")

        console_messages = []
        page = await self.browser.new_page()
        page.on("console", lambda msg: console_messages.append({"type": msg.type, "text": msg.text}))
        page.on("pageerror", lambda exc: console_messages.append({"type": "error", "text": str(exc)}))

        await page.goto(url, wait_until="domcontentloaded")

        try:
            await page.wait_for_load_state('networkidle', timeout=5000)
        except Exception as e:
            logging.warning(f"Timed out waiting for network idle: {e}")

        try:
            # Wait for React root to exist
            await page.wait_for_selector('#root', timeout=5000)
        except Exception as e:
            logging.warning(f"Timed out or failed waiting for React root: {e}")

        return Page(page, console_messages)
