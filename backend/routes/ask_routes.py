from fastapi import APIRouter
from pydantic import BaseModel
from services.gemini_service import answer_question

router = APIRouter()

class AskRequest(BaseModel):
    text: str
    question: str

@router.post("/ask")
async def ask(request: AskRequest):

    result = answer_question(
        request.text,
        request.question
    )

    return {
        "answer": result
    }