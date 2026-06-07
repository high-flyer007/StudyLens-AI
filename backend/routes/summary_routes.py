from fastapi import APIRouter
from pydantic import BaseModel

from services.gemini_service import (
    generate_summary
)

router = APIRouter()

class SummaryRequest(BaseModel):
    text: str

@router.post("/summary")
async def summary(
    request: SummaryRequest
):

    result = generate_summary(
        request.text
    )

    return {
        "summary": result
    }