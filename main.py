import asyncio
import json
import logging

from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate

from llm import get_llm_instance
from prompt import PPTX_ELEMENT_PROMPT

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

llm = get_llm_instance()
FONT_MAPPING = {
    "Vietnamese": "Times New Roman",
    "Japanese": "Yu Mincho",
    "English": "Helvetica Neue"
}
def normalize_pptx_json_content(pptx_json: dict) -> dict:
    """
    Normalizes the content array in pptx_json.
    """
    if not pptx_json or not isinstance(pptx_json, dict):
        return pptx_json

    elements = pptx_json.get('elements', [])
    if not isinstance(elements, list):
        return pptx_json

    for element in elements:
        if not isinstance(element, dict):
            continue

        if element.get('type') == 'text' and 'content' in element:
            content = element['content']
            if isinstance(content, list):
                normalized = []
                for item in content:
                    if isinstance(item, str):
                        normalized.append({'text': item, 'options': {}})
                    elif isinstance(item, dict):
                        normalized.append(item)
                element['content'] = normalized

    return pptx_json

async def generate_slide_elements(slide_data, language="English"):
    slide_index = slide_data.get("slide_index")
    slide_title = slide_data.get("slide_title", "")
    slide_description = slide_data.get("slide_description", "")

    prompt = PromptTemplate(template=PPTX_ELEMENT_PROMPT, input_variables=["slide_title", "slide_description", "language", "font_name"])
    chain = prompt | llm | JsonOutputParser()
    font_name = FONT_MAPPING.get(language, "Helvetica Neue")
    try:
        slide_content = await chain.ainvoke({"slide_title": slide_title, "slide_description": slide_description, "language": language, "font_name": font_name})
        pptx_data = normalize_pptx_json_content(slide_content)
        return slide_index, pptx_data
    except Exception as e:
        logger.error(f"Error generating slide {slide_index}: {e}")
        # Return a basic fallback structure in case of error
        return slide_index, {
            "slide_title": slide_title,
            "elements": [{
                "type": "text",
                "content": f"Error generating content: {str(e)}",
                "props": {"x": 1, "y": 1, "w": 8, "h": 1}
            }]
        }

async def generate_content_json(structure_path: str, output_path: str, language: str = "English"):
    """
    Reads structure.json, generates content using LLM, and writes to output.json
    """
    # Initialize base PPTX structure
    pptx_json = {
        "slideConfig": {
            "title": "Generated Presentation",
            "layout": {
                "name": "CUSTOM_LAYOUT",
                "width": 13.33,
                "height": 7.50
            }
        },
        "slides": {}
    }

    try:
        with open(structure_path, "r", encoding="utf-8") as f:
            slide_structures = json.load(f)

        # Ensure it's a list
        if isinstance(slide_structures, dict) and "slides" in slide_structures:
            slide_structures = slide_structures["slides"]

        tasks = [generate_slide_elements(structure, language) for structure in slide_structures[1:]]
        results = await asyncio.gather(*tasks)

        for slide_index, pptx_data in results:
            pptx_json["slides"][str(slide_index)] = pptx_data
        pptx_json["slides"]["0"] = slide_structures[0]
        with open(output_path, "w", encoding="utf-8") as f:
            json.dump(pptx_json, f, ensure_ascii=False, indent=2)

        return True, "Content generated successfully"
    except Exception as e:
        logger.error(f"Fatal error in generate_content_json: {e}")
        return False, str(e)

# For backward compatibility / CLI usage
if __name__ == '__main__':
    asyncio.run(generate_content_json("structure/04d890bf-88cd-49fc-98a9-6aae6ce02706.json", "output/04d890bf-88cd-49fc-98a9-6aae6ce02706.json"))
    print("OK")
