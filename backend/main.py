from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.pdf_routes import router

from routes.quiz_routes import router as quiz_router
from routes.ask_routes import router as ask_router

from routes.summary_routes import (
    router as summary_router
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)
app.include_router(summary_router)

app.include_router(quiz_router)
app.include_router(ask_router)

@app.get("/")
def home():
    return {
        "message": "AI Study Assistant Running"
    } 