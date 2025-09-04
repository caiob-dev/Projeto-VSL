import React from "react";
import { Link } from "react-router-dom";

export default function Main() {

  return (
    <main className="flex-grow bg-gray-50 px-4 py-10 flex flex-col items-center">
      <h2
        className="text-2xl md:text-3xl font-bold text-center
             text-gray-800 max-w-2xl leading-snug mb-6"
      >
        Fórmula natural para quem quer resultados reais.
      </h2>

      <div className="w-full max-w-3xl aspect-video">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/QUhceRjR4AU?si=4Fi5aZPjCg3HdTgl"
          title="VSL Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <a
        href="#produtos"
        className="mt-6 bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition"
      >
        Quero começar agora!
      </a>
    </main>
  );
}
