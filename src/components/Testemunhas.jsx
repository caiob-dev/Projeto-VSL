import React from "react";

import testemunhas from "../data/testemunhas";

export default function Testemunhas() {
  return (
    <section className="bg-gray-50 py-12 p-4">
      <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
        O que nossos clientes dizem:
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testemunhas.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
          >
            <img
              src={t.foto}
              alt={t.nome}
              width={80}
              height={80}
              loading="lazy"
              className="w-20 h-20 rounded-full mb-4 object-cover"
            />
            <p className="text-gray-600 italic mb-3">{t.texto}</p>
            <h4 className=" text-gray-800 font-semibold mb-1">{t.nome}</h4>
            <span className="text-sm text-gray-500">{t.idade}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
