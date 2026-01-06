import asyncio
import logging
import json
import os
import sqlite3
import uuid

import gradio as gr
from langchain_core.output_parsers import JsonOutputParser
from langchain_core.prompts import PromptTemplate

from main import generate_content_json
from llm import get_llm_instance
# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize LLM
llm = get_llm_instance()

# Database setup
DB_PATH = "jobs.db"

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS jobs (
            job_id TEXT PRIMARY KEY,
            file_path TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

# --- STEP 1: STRUCTURE GENERATION ---

STRUCTURE_PROMPT = """
You are an expert in creating presentation structures.
Based on the user's request, generate a JSON structure for a presentation.
The output should be a list of slide objects.
User Request: {user_request}
Requirements:
slide_index: Integer, starting from 0.
Index 0 is reserved for the Title Slide / Introduction.
Subsequent slides start from 1.
slide_title: A concise title for the slide.
slide_description: A detailed description of the slide content. This description will be used by another AI to generate the actual slide elements (text, charts, shapes). Include specific details about what should be on the slide (e.g., "A bar chart showing revenue growth", "Bullet points listing key benefits", "A diagram showing the process flow").
Example of a slide object (Title Slide):
{{
    "slide_index": 0,
    "slide_title": "Project Alpha: Execution Strategy",
    "slide_description": "Title Slide. Large, bold text displaying the project name 'Project Alpha'. Subtitle: 'Q3 2024 Strategic Overview'. Includes the presenter's name and company logo in the footer."
}}
Example of a slide object (Content Slide):
{{
    "slide_index": 1,
    "slide_title": "Current Market Situation",
    "slide_description": "Bối cảnh khách hàng: Khách hàng đang vận hành hoạt động kinh doanh dựa trên mô hình Order Management... Các khó khăn hiện tại: 1. Quy trình nhập liệu thủ công... Mục tiêu phát triển hệ thống: 1. Xây dựng nền tảng Order Management tập trung..."
}}
Output Format:
[
{{
    "slide_index": 0,
    "slide_title": "Presentation Title",
    "slide_description": "Description for the cover slide..."
}},
{{
    "slide_index": 1,
    "slide_title": "First Content Slide",
    "slide_description": "Detailed Description..."
}},
...
]
"""

async def generate_structure(user_input, progress=gr.Progress()):
    if not user_input:
        return [], "Please enter a description."

    progress(0.1, desc="Initializing...")
    await asyncio.sleep(0.5)

    progress(0.2, desc="Analyzing request...")
    prompt = PromptTemplate(template=STRUCTURE_PROMPT, input_variables=["user_request"])
    chain = prompt | llm | JsonOutputParser()

    try:
        progress(0.4, desc="Generating structure with LLM (this may take a few seconds)...")
        structure = await chain.ainvoke({"user_request": user_input})

        progress(0.9, desc="Processing response...")
        if isinstance(structure, list):
            return structure, "Structure generated successfully!"
        elif isinstance(structure, dict) and "slides" in structure:
            return structure["slides"], "Structure generated successfully!"
        else:
            logger.warning(f"Unexpected structure format: {type(structure)}")
            return [], "Error: Unexpected format from LLM."
    except Exception as e:
        logger.error(f"Error generating structure: {e}")
        return [], f"Error: {str(e)}"

def save_structure(slides_data):
    try:
        if not isinstance(slides_data, list) or not slides_data:
             return "Error: No slides to save."

        # Re-index slides just in case
        for i, slide in enumerate(slides_data):
            slide["slide_index"] = i + 1

        job_id = str(uuid.uuid4())
        file_name = f"{job_id}.json"
        file_path = os.path.join("structure", file_name)

        os.makedirs("structure", exist_ok=True)

        with open(file_path, "w", encoding="utf-8") as f:
            json.dump(slides_data, f, indent=2, ensure_ascii=False)

        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute("INSERT INTO jobs (job_id, file_path) VALUES (?, ?)", (job_id, file_path))
        conn.commit()
        conn.close()

        return f"Success! Job ID: {job_id}, Saved to: {file_path}"
    except Exception as e:
        return f"Error saving file: {str(e)}"

# Helper functions for state updates
def update_slide_title(new_title, index, slides):
    if 0 <= index < len(slides):
        slides[index]['slide_title'] = new_title

def update_slide_desc(new_desc, index, slides):
    if 0 <= index < len(slides):
        slides[index]['slide_description'] = new_desc

def delete_slide(index, slides):
    if 0 <= index < len(slides):
        slides.pop(index)
        for i, slide in enumerate(slides):
            slide["slide_index"] = i + 1
    return slides

def add_new_slide(slides):
    new_index = len(slides) + 1
    slides.append({
        "slide_index": new_index,
        "slide_title": "New Slide",
        "slide_description": ""
    })
    return slides

# --- STEP 2 & 3: CONTENT & PPTX GENERATION ---

def get_jobs():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT job_id, created_at FROM jobs ORDER BY created_at DESC")
    jobs = cursor.fetchall()
    conn.close()
    # Format for Dropdown: "timestamp - job_id"
    return [f"{job[1]} - {job[0]}" for job in jobs]

async def process_job(selected_job_str, language, progress=gr.Progress()):
    if not selected_job_str:
        return None, None, "Please select a job."

    job_id = selected_job_str.split(" - ")[-1]

    # Get file path from DB
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT file_path FROM jobs WHERE job_id = ?", (job_id,))
    result = cursor.fetchone()
    conn.close()

    if not result:
        return None, None, "Job not found."

    structure_path = result[0]
    if not os.path.exists(structure_path):
        return None, None, f"Structure file not found: {structure_path}"

    # Define output paths
    os.makedirs("output", exist_ok=True)
    content_json_path = os.path.join("output", f"{job_id}_content.json")
    pptx_path = os.path.join("output", f"{job_id}.pptx")

    # Step 2: Generate Content JSON
    progress(0.1, desc="Step 2/3: Generating slide content with LLM...")
    success, msg = await generate_content_json(structure_path, content_json_path, language)

    if not success:
        return None, None, f"Error generating content: {msg}"

    # Read generated content for preview
    try:
        with open(content_json_path, "r", encoding="utf-8") as f:
            content_preview = json.load(f)
    except:
        content_preview = {"error": "Could not read content JSON"}

    # Step 3: Generate PPTX using TypeScript
    progress(0.6, desc="Step 3/3: Creating PowerPoint file...")

    try:
        # Run ts-node command
        # Ensure we are in the project root
        process = await asyncio.create_subprocess_shell(
            f"npx tsx index.ts \"{content_json_path}\" \"{pptx_path}\"",
            stdout=asyncio.subprocess.PIPE,
            stderr=asyncio.subprocess.PIPE
        )

        stdout, stderr = await process.communicate()

        if process.returncode != 0:
            error_msg = stderr.decode()
            logger.error(f"PPTX Gen Error: {error_msg}")
            return None, f"Error generating PPTX: {error_msg}"

        progress(1.0, desc="Done!")
        return pptx_path, f"Presentation created successfully! Saved to {pptx_path}"

    except Exception as e:
        logger.error(f"Execution Error: {e}")
        return None, f"System Error: {str(e)}"

def refresh_jobs_ui():
    return gr.Dropdown(choices=get_jobs())

# --- UI ---

with gr.Blocks(title="Rikai Slide Maker") as demo:
    with gr.Tabs():
        # TAB 1: DESIGN STRUCTURE
        with gr.Tab("Design Slide Structure") as tab_design:
            gr.Markdown("# Structure Generator")
            gr.Markdown("Describe the presentation you want to create.")

            slides_state = gr.State([])

            with gr.Row():
                user_input = gr.Textbox(
                    label="Presentation Description",
                    placeholder="Example: Create a 10-slide pitch deck...",
                    lines=4
                )

            generate_btn = gr.Button("Generate Structure", variant="primary")

            gr.Markdown("### Slides Preview & Edit")

            @gr.render(inputs=slides_state)
            def render_slides(slides):
                if not slides:
                    gr.Markdown("*No slides generated yet.*")
                    return

                for i, slide in enumerate(slides):
                    with gr.Group():
                        with gr.Row(variant="panel"):
                            with gr.Column(scale=1, min_width=50):
                                gr.Markdown(f"## {i + 1}")
                            with gr.Column(scale=20):
                                title = gr.Textbox(
                                    label="Slide Title",
                                    value=slide.get("slide_title", ""),
                                    interactive=True
                                )
                                desc = gr.Textbox(
                                    label="Description",
                                    value=slide.get("slide_description", ""),
                                    lines=3,
                                    interactive=True
                                )
                            with gr.Column(scale=1, min_width=80):
                                delete_btn = gr.Button("Delete", variant="stop", size="sm")

                        title.input(lambda t, s, idx=i: update_slide_title(t, idx, s), inputs=[title, slides_state], outputs=[])
                        desc.input(lambda d, s, idx=i: update_slide_desc(d, idx, s), inputs=[desc, slides_state], outputs=[])
                        delete_btn.click(lambda s, idx=i: delete_slide(idx, s), inputs=[slides_state], outputs=[slides_state])

            with gr.Row():
                add_btn = gr.Button("Add Slide", variant="secondary")
                save_btn = gr.Button("Save Structure & Create Job", variant="primary")

            status_msg = gr.Textbox(label="Status", interactive=False)

            generate_btn.click(
                fn=lambda: (gr.Button(interactive=False), "Generating..."),
                inputs=None, outputs=[generate_btn, status_msg]
            ).then(
                fn=generate_structure, inputs=user_input, outputs=[slides_state, status_msg]
            ).then(
                fn=lambda: gr.Button(interactive=True), inputs=None, outputs=generate_btn
            )

            add_btn.click(add_new_slide, inputs=slides_state, outputs=slides_state)
            save_btn.click(save_structure, inputs=slides_state, outputs=status_msg)

        # TAB 2: CREATE SLIDE
        with gr.Tab("Create Slide") as tab_create:
            gr.Markdown("# Generate Presentation")
            gr.Markdown("Select a saved structure job to generate the final PowerPoint file.")

            with gr.Row():
                job_dropdown = gr.Dropdown(
                    label="Select Job",
                    choices=get_jobs(),
                    interactive=True
                )
                refresh_btn = gr.Button("Refresh Jobs", size="sm")
            
            with gr.Row():
                language_dropdown = gr.Dropdown(
                    label="Select Language",
                    choices=["Vietnamese", "Japanese", "English"],
                    value="English",
                    interactive=True
                )

            create_btn = gr.Button("Generate PPTX", variant="primary")

            with gr.Row():
                result_file = gr.File(label="Download PPTX")

            process_status = gr.Textbox(label="Status", interactive=False)

            # Auto-refresh when tab is selected
            tab_create.select(refresh_jobs_ui, inputs=None, outputs=job_dropdown)

            refresh_btn.click(refresh_jobs_ui, inputs=None, outputs=job_dropdown)

            create_btn.click(
                fn=lambda: (gr.Button(interactive=False), "Processing..."),
                inputs=None, outputs=[create_btn, process_status]
            ).then(
                fn=process_job,
                inputs=[job_dropdown, language_dropdown],
                outputs=[result_file, process_status]
            ).then(
                fn=lambda: gr.Button(interactive=True),
                inputs=None, outputs=create_btn
            )
if __name__ == "__main__":
    demo.queue()
    demo.launch(server_name="0.0.0.0", server_port=7860)
