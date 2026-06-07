import { useState } from "react";
import API from "../api";
import { jsPDF } from "jspdf";

function SummarySection({ pdfText }) {
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);
  
  const downloadPDF = () => {

  const doc = new jsPDF();

  const splitText =
    doc.splitTextToSize(
      summary,
      180
    );

  doc.text(
    splitText,
    10,
    10
  );

  doc.save(
    "AI_Study_Summary.pdf"
  );
};
  const generateSummary = async () => {
    if (!pdfText) {
      alert("Please upload a PDF first");
      return;
    }

    setLoading(true);

    try {
      const response = await API.post("/summary", {
        text: pdfText,
      });

      setSummary(response.data.summary);
    } catch (error) {
      console.log(error);
      alert("Summary generation failed");
    }

    setLoading(false);
  };

  return (
    <div className="mt-6">

      <button
        onClick={generateSummary}
        className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          font-semibold
          px-6
          py-3
          rounded-xl
          shadow-md
          transition
        "
      >
        {loading ? "Generating..." : "Generate Summary"}
      </button>

      

      {summary && (
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
    📝 AI Summary
  </h2>

  <div className="flex gap-3">

    <button
      onClick={() =>
        navigator.clipboard.writeText(summary)
      }
      className="
        bg-gray-800
        hover:bg-gray-900
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      📋 Copy
    </button>

    <button
      onClick={downloadPDF}
      className="
        bg-green-600
        hover:bg-green-700
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      ⬇ Download
    </button>

  </div>

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
            {summary}
          </div>

        </div>
      )}

    </div>
  );
}

export default SummarySection;