import os
import json
import logging
from typing import Any, Protocol, TypeVar, Generic
from abc import ABC, abstractmethod

import httpx
from dotenv import load_dotenv
from tenacity import retry, stop_after_attempt, wait_random_exponential

load_dotenv()
T = TypeVar("T")
BASE_URL = "https://openrouter.ai/api/v1"

class Tool(Protocol, Generic[T]):
    def name(self) -> str: ...
    def spec(self) -> dict[str, Any]: ...
    def tool_choice(self) -> dict[str, Any] | None: ...
    def parse(self, response: dict[str, Any]) -> T: ...


class FunctionTool(ABC, Generic[T]):
    @abstractmethod
    def name(self) -> str: ...

    def description(self) -> str:
        return ""

    @abstractmethod
    def parameters_schema(self) -> dict[str, Any]:
        """JSON Schema тела arguments."""

    def spec(self) -> dict[str, Any]:
        return {
            "type": "function",
            "function": {
                "name": self.name(),
                "description": self.description(),
                "parameters": self.parameters_schema(),
            },
        }

    def tool_choice(self) -> dict[str, Any] | None:
        return {"type": "function", "function": {"name": self.name()}}

    def extract_args(self, response: dict[str, Any]) -> dict[str, Any]:
        choices = response.get("choices") or []
        msg = (choices[0] or {}).get("message", {})
        tool_calls = msg.get("tool_calls") or []
        for tc in tool_calls:
            fn = tc.get("function", {})
            if fn.get("name") == self.name():
                args = fn.get("arguments")
                if isinstance(args, str):
                    args = json.loads(args)
                if not isinstance(args, dict):
                    raise ValueError(f"{self.name()}: arguments is not an object")
                return args

        logging.debug("Unable to extract tool calling for: %s. Data: %s", self.name(), choices)
        raise ValueError(f"{self.name()}: tool call not found")

    @abstractmethod
    def convert(self, args: dict[str, Any]) -> T:
        pass
        
    def parse(self, response: dict[str, Any]) -> T:
        return self.convert(self.extract_args(response))


class OpenRouterClient:
    def __init__(self, base_url: str = BASE_URL, timeout: int = 60*5, api_key: str | None = None):
        self.base_url = base_url
        self.timeout = timeout
        self.api_key = api_key or os.getenv("OPENROUTER_API_KEY")
        if not self.api_key:
            raise ValueError("OPENROUTER_API_KEY is not set. Provide api_key or set env var.")
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "HTTP-Referer": "https://github.com/yarreg/oss-llm-webdev-test",
            "X-Title": "OSS LLM WebDev Test",
        }

    @retry(wait=wait_random_exponential(min=1, max=60), stop=stop_after_attempt(5))
    async def chat(
        self,
        model: str,
        messages: list[dict[str, Any]],
        *,
        tools: list[dict[str, Any]] | None = None,
        tool_choice: dict[str, Any] | None = None,
        temperature: float = 0.2,
        max_tokens: int = 1024 * 32,
        top_p: float = 0.9,
        **extra: Any,
    ) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "model": model,
            "messages": messages,
            "temperature": temperature,
            "max_tokens": max_tokens,
            "top_p": top_p,
        }
        if tools:
            payload["tools"] = tools
        if tool_choice:
            payload["tool_choice"] = tool_choice
        if extra:
            payload.update(extra)

        async with httpx.AsyncClient() as client:
            logging.info("Sending chat completion request to %s with payload: %s", self.base_url, payload)
            r = await client.post(
                f"{self.base_url}/chat/completions",
                headers=self.headers,
                json=payload,
                timeout=self.timeout,
            )
            logging.info("Chat completion response: %s", r.json())
            r.raise_for_status()
            return r.json()


class Conversation(Generic[T]):
    def __init__(self, client: OpenRouterClient, model: str, system_prompt: str):
        self.client = client
        self.model = model
        self.messages: list[dict[str, Any]] = [{"role": "system", "content": system_prompt}]

    def add_user_message(self, content: str) -> None:
        self.messages.append({"role": "user", "content": content})

    def add_assistant_message(self, response: dict[str, Any]) -> None:
        if response and response.get("choices"):
            response_message = response["choices"][0].get("message", {})
            
            message = {"role": response_message["role"]}

            if "tool_calls" in response_message:
                message["tool_calls"] = response_message["tool_calls"]
                self.messages.append(message)

                tool_call_id = response_message["tool_calls"][0]["id"]
                function_name = response_message["tool_calls"][0]["function"]["name"]
                self.messages.append({"role": "tool", "tool_call_id": tool_call_id, "name": function_name, "content": "true"})
                self.messages.append({"role": "assistant", "content": "Content generated"})
                return
            
            if "content" in response_message:
                message["content"] = response_message["content"]
                self.messages.append(message)
                return
            
        raise ValueError("Response message does not contain content or tool calls")

    async def chat(self, message) -> dict[str, Any]:
        self.add_user_message(message)
        resp = await self.client.chat(self.model, self.messages)
        self.add_assistant_message(resp)
        return resp

    async def call_tool(self, tool: Tool[T], user_prompt: str) -> T:
        self.add_user_message(user_prompt)
        resp = await self.client.chat(
            self.model,
            self.messages,
            tools=[tool.spec()],
            tool_choice=tool.tool_choice(),
        )
        self.add_assistant_message(resp)
        return tool.parse(resp)
