from google import genai
from dotenv import load_dotenv
import os

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)

def generate_summary(text):

    prompt = f"""
    Summarize the following study notes.

    Format:

    Main Topics:
    Important Points:
    Easy Explanation:

    Notes:
    {text}
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text

def generate_quiz(text):

    prompt = f"""
    Create 10 multiple choice questions.

    Format:

    Question
    A)
    B)
    C)
    D)

    Correct Answer:

    Notes:
    {text}
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text

def answer_question(text, question):

    prompt = f"""
    Use the notes below to answer.

    Notes:
    {text}

    Question:
    {question}
    """

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    return response.text