from fastapi import APIRouter
from pydantic import BaseModel
from services.gemini_service import generate_quiz

router = APIRouter()

class QuizRequest(BaseModel):
    text: str

@router.post("/quiz")
async def quiz(request: QuizRequest):

    result = generate_quiz(
        request.text
    )

    return {
        "quiz": result
    }