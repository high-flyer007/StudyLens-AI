import { useState } from "react";
import API from "../api";
import Card from "./Card";

function UploadSection({ setPdfText }) {
const [file, setFile] = useState(null);
const [result, setResult] = useState("");
const [loading, setLoading] = useState(false);

const handleUpload = async () => {
if (!file) {
alert("Please select a PDF file first");
return;
}


setLoading(true);

try {
  const formData = new FormData();
  formData.append("file", file);

  const response = await API.post(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  setResult(response.data.text);

  alert("PDF uploaded successfully!");

  if (setPdfText) {
    setPdfText(response.data.text);
  }
} catch (error) {
  console.error(error);
  alert("Error uploading PDF");
}

setLoading(false);


};

return ( 
<Card>
  <h2 className="text-3xl font-bold mb-6">
    Upload PDF Notes
  </h2>

  <div className="flex gap-4 items-center flex-wrap">

    <input
      type="file"
      accept=".pdf"
      onChange={(e) => setFile(e.target.files[0])}
      className="
        flex-1
        border-2
        border-gray-300
        rounded-lg
        p-3
      "
    />

    <button
      onClick={handleUpload}
      className="
        bg-blue-600
        hover:bg-blue-700
        text-white
        px-6
        py-3
        rounded-lg
        font-semibold
        transition
      "
    >
      {loading ? "Uploading..." : "Upload PDF"}
    </button>

  </div>

  {result && (
    <div className="mt-8">

      <h3 className="text-2xl font-bold mb-4">
        Extracted Text
      </h3>

      <div
        className="
          bg-gray-50
          border
          rounded-xl
          p-4
          max-h-80
          overflow-y-auto
        "
      >
        <p className="text-gray-700 whitespace-pre-wrap">
          {result}
        </p>
      </div>

    </div>
  )}
</Card>
);
}

export default UploadSection;
