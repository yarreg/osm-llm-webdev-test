import json
from dataclasses import dataclass
from os import path, makedirs
from enum import Enum
from typing import Any, Mapping
from jinja2 import Template


from openrouter import OpenRouterClient, Conversation, FunctionTool


REQUIRED = ("index.html", "app.js", "styles.css")


@dataclass(frozen=True)
class WebFiles:
    index_html: str
    app_js: str
    styles_css: str

    @classmethod
    def from_dict(cls, data: Mapping[str, Any]) -> "WebFiles":
        missing = [k for k in REQUIRED if k not in data]
        if missing:
            raise ValueError(f"Missing keys: {missing}")
        return cls(
            index_html=str(data["index.html"]),
            app_js=str(data["app.js"]),
            styles_css=str(data["styles.css"]),
        )

    def to_dict(self) -> dict[str, str]:
        return {
            "index.html": self.index_html,
            "app.js": self.app_js,
            "styles.css": self.styles_css,
        }

    def save(self, dir: str) -> None:
        makedirs(dir, exist_ok=True)
        for name, content in self.to_dict().items():
            with open(path.join(dir, name), "w") as f:
                f.write(content)


class EmitWebFilesTool(FunctionTool[WebFiles]):
    def name(self) -> str:
        return "emit_files"

    def description(self) -> str:
        return "Return the three project files: index.html, app.js, styles.css"

    def parameters_schema(self) -> dict[str, Any]:
        return {
            "type": "object",
            "properties": {
                "index.html": {"type": "string"},
                "app.js": {"type": "string"},
                "styles.css": {"type": "string"},
            },
            "required": ["index.html", "app.js", "styles.css"],
            "additionalProperties": False,
        }

    def convert(self, args: dict[str, Any]) -> WebFiles:
        return WebFiles.from_dict(args)


class CallMethod(Enum):
    TOOLS = "tools"
    JSON = "json"

class Generator:
    def __init__(self, client: OpenRouterClient, task: dict[str, Any], model: str, call_method: CallMethod = CallMethod.TOOLS):
        self.client = client
        self.task = task
        self.model = model
        self.call_method = call_method 

        self.system_prompt_template = self._load_prompt_template("system")
        self.user_prompt_template = self._load_prompt_template("user")
        self.failure_prompt_template = self._load_prompt_template("failure")

        self.conversation = Conversation[WebFiles](
            self.client,
            self.model,
            self.system_prompt_template.render(task=self.task, call_method=call_method.value),
        )

    def _load_prompt_template(self, name: str) -> Template:
        with open(path.join("prompts", f"{name}.prompt")) as f:
            return Template(f.read())

    async def generate(self) -> WebFiles:
        user_prompt = self.user_prompt_template.render(task=self.task, call_method=self.call_method.value)
        if self.call_method == CallMethod.TOOLS:
            return await self.conversation.call_tool(EmitWebFilesTool(), user_prompt)
        elif self.call_method == CallMethod.JSON:
            resp = await self.conversation.chat(user_prompt)
            return self._parse_json_response(resp)
        raise ValueError(f"Unknown call method: {self.call_method}")

    async def repair(self, generated_files: WebFiles, console_messages : list = [], missing_required_sections: list = []) -> WebFiles:
        failure_prompt = self.failure_prompt_template.render(
            missing_required_sections=missing_required_sections,
            console_messages=console_messages,
            generated_files=generated_files.to_dict(),
            call_method=self.call_method.value
        )
        if self.call_method == CallMethod.TOOLS:
            return await self.conversation.call_tool(EmitWebFilesTool(), failure_prompt)
        elif self.call_method == CallMethod.JSON:
            resp = await self.conversation.chat(failure_prompt)
            return self._parse_json_response(resp)
        raise ValueError(f"Unknown call method: {self.call_method}") 

    def _parse_json_response(self, resp: dict[str, Any]) -> WebFiles:
        # Extract content and load the first JSON object present
        content = ""
        try:
            content = resp.get("choices", [])[0]["message"]["content"]
        except Exception:
            raise ValueError("Invalid response format while parsing JSON output")
        
        if not content.strip():
            # Content is empty maybe model passed json to reasoning field
            content = resp.get("choices", [])[0]["message"].get("reasoning", "")
            

        # Trim to JSON substring if model adds surrounding text
        start = content.find("{")
        end = content.rfind("}")
        if start == -1 or end == -1 or end < start:
            raise ValueError("No JSON object found in model output")
        raw = content[start:end+1]
        data = json.loads(raw)

        # Accept both underscore and dotted keys
        if set(data.keys()) >= {"index_html", "app_js", "styles_css"}:
            mapped = {
                "index.html": data["index_html"],
                "app.js": data["app_js"],
                "styles.css": data["styles_css"],
            }
        else:
            mapped = {k: v for k, v in data.items() if k in ("index.html", "app.js", "styles.css")}

        return WebFiles.from_dict(mapped)
