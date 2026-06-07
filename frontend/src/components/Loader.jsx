function Loader({ text }) {
  return (
    <div className="flex flex-col items-center py-6">

      <div
        className="
          animate-spin
          rounded-full
          h-12
          w-12
          border-b-4
          border-blue-600
        "
      />

      <p className="mt-4 text-gray-600">
        {text}
      </p>

    </div>
  );
}

export default Loader;