import { useState } from "react";

const WavyTextButton = () => {
  const [hovered, setHovered] = useState(false);
  const text = "Login";

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="px-4 py-2 bg-orange-500 text-white font-semibold rounded"
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          className={`inline-block ${hovered ? "animate-waveChar" : ""}`}
          style={{
            animationDelay: `${i * 80}ms`,
            display: "inline-block",
          }}
        >
          {char}
        </span>
      ))}
    </button>
  );
};

export default WavyTextButton;
