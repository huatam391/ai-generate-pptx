import os
from typing import Any

from langchain_core.callbacks import BaseCallbackHandler
from langchain_core.outputs import LLMResult
from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
load_dotenv()
MODEL_ID = os.getenv("MODEL_ID", "gemini-3-pro-preview")
GOOGLE_API_KEY = os.getenv("GOOGLE_API_KEY", None)
cached_llm = None



class PrintTokenUsageCallback(BaseCallbackHandler):
    def on_llm_end(self, response: LLMResult, **kwargs: Any) -> None:
        if response.llm_output:
            token_usage = response.llm_output.get("token_usage")
            if token_usage:
                input_tokens = token_usage.get("prompt_tokens", "N/A")
                output_tokens = token_usage.get("completion_tokens", "N/A")
                print(f"\n[Token Usage] Input: {input_tokens}, Output: {output_tokens}")
            else:
                print(f"\n[Token Usage] {response.llm_output}")


def get_llm_instance() -> ChatGoogleGenerativeAI:
    global cached_llm
    if cached_llm is None:
        if GOOGLE_API_KEY is None:
            raise Exception("Need GOOGLE_API_KEY for run Tool")
        cached_llm = ChatGoogleGenerativeAI(
            model=MODEL_ID,
            api_key=GOOGLE_API_KEY,
            thinking_budget=2048,
            response_mime_type="application/json",
            callbacks=[PrintTokenUsageCallback()]
        )
        return cached_llm
    return cached_llm
