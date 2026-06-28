"use client";

import { useState, useEffect } from "react";

export default function HeroSection() {
  const [visibleCount, setVisibleCount] = useState(0);
  const text = "Scribe: Your AI-Powered Video Assistant";

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleCount(count);
      if (count >= text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="relative overflow-hidden bg-white min-h-[600px] flex items-center justify-center">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green-300/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {text.split("").map((char, i) => (
            <span
              key={i}
              className={`inline-block transition-opacity duration-300 ${
                i < visibleCount ? "opacity-100" : "opacity-0"
              }`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>
        <p className="text-lg text-gray-600">Your subheadline goes here</p>
      </div>
    </div>
  );
}