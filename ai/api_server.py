from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import JSONResponse
import uvicorn
import shutil
import os
from resume_matchmaker2 import analyze, read_file

app = FastAPI()

@app.post("/api/match")
async def match_resume(
    jd: UploadFile = File(...),
    resume: UploadFile = File(...),
    topk: int = Form(35),
    fuzzy: int = Form(85)
):
    # Create a safe temp directory for Windows
    temp_dir = "temp"
    os.makedirs(temp_dir, exist_ok=True)

    # Sanitize filenames and build paths
    jd_path = os.path.join(temp_dir, jd.filename.replace(" ", "_"))
    resume_path = os.path.join(temp_dir, resume.filename.replace(" ", "_"))

    # Save uploaded JD file
    with open(jd_path, "wb") as f:
        shutil.copyfileobj(jd.file, f)

    # Save uploaded Resume file
    with open(resume_path, "wb") as f:
        shutil.copyfileobj(resume.file, f)

    # Read and process
    jd_text = read_file(jd_path)
    resume_text = read_file(resume_path)

    # Run analysis
    result = analyze(jd_text, resume_text, topk, fuzzy)

    # Clean up
    os.remove(jd_path)
    os.remove(resume_path)

    return JSONResponse(result)


if __name__ == "__main__":
    uvicorn.run("api_server:app", host="0.0.0.0", port=8000, reload=True)
