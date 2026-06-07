function Card({ children }) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-xl
      p-8
      mb-6
      "
    >
      {children}
    </div>
  );
}

export default Card;