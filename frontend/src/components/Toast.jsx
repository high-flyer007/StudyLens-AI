function Toast({ message, type }) {

  return (
    <div
      className={`
        fixed
        top-6
        right-6
        px-6
        py-3
        rounded-lg
        text-white
        shadow-lg
        z-50
        ${
          type === "success"
            ? "bg-green-600"
            : "bg-red-600"
        }
      `}
    >
      {message}
    </div>
  );
}

export default Toast;