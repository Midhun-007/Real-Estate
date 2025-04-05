import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const slides = [
  {
    id: 1,
    title: "Nature",
    description: "Explore the beauty of nature with stunning landscapes.",
    image: "https://picsum.photos/800/500?random=1",
  },
  {
    id: 2,
    title: "Travel",
    description: "Discover new places and exciting destinations.",
    image: "https://picsum.photos/800/500?random=2",
  },
  {
    id: 3,
    title: "Technology",
    description: "Dive into the world of innovation and progress.",
    image: "https://picsum.photos/800/500?random=3",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full flex items-center justify-center transition-all duration-700 transform 
          ${index === current ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-3/4 h-3/4 object-cover rounded-xl shadow-2xl"
          />
          <div className="absolute bottom-10 left-10 text-white">
            <h2 className="text-5xl font-bold uppercase font-['League Gothic']">{slide.title}</h2>
            <p className="text-lg text-gray-300 max-w-md mt-2">{slide.description}</p>
          </div>
        </div>
      ))}
      <div className="absolute bottom-5 flex space-x-3">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${idx === current ? "bg-yellow-400" : "bg-gray-600"}`}
            onClick={() => setCurrent(idx)}
          ></div>
        ))}
      </div>
    </div>
  );
}
