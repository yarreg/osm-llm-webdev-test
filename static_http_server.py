import os
import http.server
import socketserver
import multiprocessing
import socket
from contextlib import contextmanager
from typing import Generator


def _run_server(path: str, port: int) -> None:
    os.chdir(path)
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", port), Handler) as httpd:
        httpd.serve_forever()
        

def _find_free_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        s.bind(('', 0))
        return s.getsockname()[1]


class StaticHTTPServer:
    def __init__(self, path: str, port: int | None = None):
        self.path = path
        if port is None:
            self.port = _find_free_port()
        else:
            self.port = port
        self.process = None
        
    @property
    def started(self) -> bool:
        return self.process is not None

    def get_url(self) -> str:
        return f"http://localhost:{self.port}/"

    def start(self) -> None:
        self.process = multiprocessing.Process(target=_run_server, args=(self.path, self.port))
        self.process.daemon = True
        self.process.start()

    def stop(self) -> None:
        self.process.terminate()
        self.process.join()
        self.process = None


@contextmanager
def run(path: str, port: int) -> Generator[StaticHTTPServer, None, None]:
    server = StaticHTTPServer(path, port)
    server.start()
    try:
        yield server
    finally:
        server.stop()
