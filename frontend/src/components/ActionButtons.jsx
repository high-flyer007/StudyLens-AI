function ActionButtons({ action, setAction }) {
  return (
    <div className="flex gap-4 mt-6 flex-wrap">

      <button
        onClick={() => setAction("summary")}
        className={`
          px-6 py-3 rounded-lg text-white font-semibold transition
          ${
            action === "summary"
              ? "bg-green-700"
              : "bg-green-500 hover:bg-green-600"
          }
        `}
      >
        📝 Summary
      </button>

      <button
        onClick={() => setAction("quiz")}
        className={`
          px-6 py-3 rounded-lg text-white font-semibold transition
          ${
            action === "quiz"
              ? "bg-yellow-700"
              : "bg-yellow-500 hover:bg-yellow-600"
          }
        `}
      >
        🧠 Quiz
      </button>

      <button
        onClick={() => setAction("qa")}
        className={`
          px-6 py-3 rounded-lg text-white font-semibold transition
          ${
            action === "qa"
              ? "bg-purple-700"
              : "bg-purple-500 hover:bg-purple-600"
          }
        `}
      >
        🤖 Ask AI
      </button>

    </div>
  );
}

export default ActionButtons;