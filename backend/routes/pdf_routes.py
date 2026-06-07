from fastapi import APIRouter, UploadFile, File
import shutil
import os

from services.pdf_service import extract_text_from_pdf

router = APIRouter()

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    extracted_text = extract_text_from_pdf(
        file_path
    )

    return {
        "filename": file.filename,
        "text": extracted_text[:1000]
    }