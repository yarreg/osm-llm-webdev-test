import httpx
import os
import logging
import asyncio
from tenacity import retry, stop_after_attempt, wait_random_exponential

LIBS = {
    "tailwind.min.js": "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
    "react.production.min.js": "https://unpkg.com/react@18/umd/react.production.min.js",
    "react-dom.production.min.js": "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
}


class WebLibs:
    def __init__(self):
        self._content = {}

    @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(5))
    async def _download_lib(self, client, lib_name, url):
        logging.info(f"Downloading {lib_name} from {url}")
        response = await client.get(url, follow_redirects=True)
        response.raise_for_status()
        self._content[lib_name] = response.content
        logging.info(f"Downloaded {lib_name} from {url}")

    async def download(self):
        logging.info(f"Downloading libraries")
        async with httpx.AsyncClient() as client:
            tasks = []
            for lib_name, url in LIBS.items():
                tasks.append(self._download_lib(client, lib_name, url))
            await asyncio.gather(*tasks)

    def get_content(self, lib_name):
        return self._content.get(lib_name)

    def save_libs(self, dir):
        os.makedirs(dir, exist_ok=True)
        for lib_name, content in self._content.items():
            lib_path = os.path.join(dir, lib_name)
            with open(lib_path, "wb") as f:
                f.write(content)