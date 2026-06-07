import { useState } from "react";
import API from "../api";

function AskSection({ pdfText }) {

const [question, setQuestion] = useState("");
const [answer, setAnswer] = useState("");
const [loading, setLoading] = useState(false);

const askQuestion = async () => {


if (!question) {
  alert("Enter a question");
  return;
}

setLoading(true);

try {

  const response = await API.post(
    "/ask",
    {
      text: pdfText,
      question: question
    }
  );

  setAnswer(response.data.answer);

} catch (error) {

  console.log(error);
  alert("Failed to get answer");

} finally {

  setLoading(false);
}


};

return ( <div className="mt-6">


  <div className="bg-white rounded-2xl shadow-lg p-8 border">

    <h2 className="text-3xl font-bold mb-6">
      🤖 Ask AI
    </h2>

    <input
      type="text"
      placeholder="Ask anything about your notes..."
      value={question}
      onChange={(e) =>
        setQuestion(e.target.value)
      }
      className="
        w-full
        border
        rounded-xl
        p-4
        mb-4
      "
    />

    <button
      onClick={askQuestion}
      className="
        bg-purple-600
        hover:bg-purple-700
        text-white
        px-6
        py-3
        rounded-xl
        font-semibold
      "
    >
      {loading ? "Thinking..." : "Ask AI"}
    </button>

    {answer && (
      <div className="mt-8">

        <div className="flex justify-between items-center mb-4">

          <h3 className="text-2xl font-bold">
            💡 Answer
          </h3>

          <button
            onClick={() =>
              navigator.clipboard.writeText(answer)
            }
            className="
              bg-gray-800
              text-white
              px-4
              py-2
              rounded-lg
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
          "
        >
          {answer}
        </div>

      </div>
    )}

  </div>

</div>


);
}

export default AskSection;
