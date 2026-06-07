import { useState } from "react";
import Header from "../components/Header";
import UploadSection from "../components/UploadSection";
import ActionButtons from "../components/ActionButtons";
import SummarySection from "../components/SummarySection";
import QuizSection from "../components/QuizSection";
import AskSection from "../components/AskSection";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
const [pdfText, setPdfText] = useState("");
const [action, setAction] = useState("");

return ( <div className="min-h-screen bg-gray-100"> <Header />


  <div className="max-w-6xl mx-auto px-6 py-10">

    {!pdfText && (
  <div className="bg-white p-8 rounded-2xl shadow-md text-center mt-6">

    <h2 className="text-3xl font-bold">
      Welcome to StudyLens AI 🚀
    </h2>

    <p className="text-gray-600 mt-3">
      Upload your PDF notes and let AI generate
      summaries, quizzes, and answers instantly.
    </p>

  </div>
)}

    <UploadSection setPdfText={setPdfText} />

    
    <Card>

  <h2 className="text-2xl font-bold mb-4">
    Choose Action
  </h2>

  <ActionButtons
    action={action}
    setAction={setAction}
  />

</Card>

    <Card>

  <h2 className="text-xl font-bold">
    Current Mode
  </h2>

  <p
    className="
      mt-3
      text-lg
      font-semibold
      text-blue-600
      capitalize
    "
  >
    {/* {action || "None Selected"} */}
    {pdfText ? (
  <p className="text-green-600 font-semibold">
    PDF Loaded Successfully
  </p>
) : (
  <p className="text-gray-500">
    Upload a PDF to get started
  </p>
)}
  </p>

</Card>

    {action === "summary" && (
      <div className="mt-8">
        <SummarySection pdfText={pdfText} />
      </div>
    )}

    {action === "quiz" && (
      <div className="mt-8">
        <QuizSection pdfText={pdfText} />
      </div>
    )}

    {action === "qa" && (
      <div className="mt-8">
        <AskSection pdfText={pdfText}/>
        </div>
    )}
<Footer />
  </div>
</div>

);
}

export default Home;

