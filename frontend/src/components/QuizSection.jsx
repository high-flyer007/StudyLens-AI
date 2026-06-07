import { useState } from "react";
import API from "../api";

function QuizSection({ pdfText }) {
  const [quiz, setQuiz] = useState("");
  const [loading, setLoading] = useState(false);

  const generateQuiz = async () => {
    if (!pdfText) {
      alert("Please upload a PDF first");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/quiz", {
        text: pdfText,
      });

      setQuiz(response.data.quiz);

    } catch (error) {
      console.log(error);
      alert("Quiz generation failed");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6">

      <button
        onClick={generateQuiz}
        className="
          bg-yellow-500
          hover:bg-yellow-600
          text-white
          font-semibold
          px-6
          py-3
          rounded-xl
          shadow-md
          transition
        "
      >
        {loading ? "Generating..." : "Generate Quiz"}
      </button>

      {loading && (
  <LoadingSpinner
    text="Generating Quiz..."
  />
)}

      {quiz && (
        <div
          className="
            bg-white
            rounded-2xl
            shadow-lg
            p-8
            mt-8
            border
          "
        >

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-3xl font-bold">
              🧠 AI Quiz
            </h2>

            <button
              onClick={() =>
                navigator.clipboard.writeText(quiz)
              }
              className="
                bg-gray-800
                hover:bg-gray-900
                text-white
                px-4
                py-2
                rounded-lg
                transition
              "
            >
              📋 Copy
            </button>

          </div>

          <div
            className="
              bg-gray-50
              border
              rounded-xl
              p-6
              whitespace-pre-wrap
              leading-8
              text-gray-800
            "
          >
            {quiz}
          </div>

        </div>
      )}

    </div>
  );
}

export default QuizSection;