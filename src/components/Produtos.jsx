import React from "react";

import combo from "./../assets/combo-2.webp";
import colageno from "./../assets/colageno.webp"
import detox from "./../assets/detox.webp"
import { Link, useLocation } from "react-router-dom";

export default function Produtos() {

    const location = useLocation()
    const query = location.search || ""

  return (
    <section className="bg-white py-12 px-4 text-center" id="produtos">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Escolha o seu produto
      </h3>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="border-0 rounded-xl shadow-md pb-4 flex flex-col items-center">
          <img
            src={detox}
            alt="Detox"
            className="mb-4 object-cover md:w-96"
            width={500}
            height={100}
            loading="lazy"
          />
          <h4 className="text-lg font-semibold mb-2">Suplemento Detox</h4>
          <p className="text-gray-600 mb-4">
            45 cápsulas — mais energia e menos retenção.
          </p>
          <p className="text-xl font-bold text-green-600 mb-4">R$ 97,00</p>
         <Link
            to={`/checkout${query ? `${query}&` : '?'}&produto=Detox`}
            className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Comprar agora
          </Link>
        </div>

        <div className="border-0 rounded-xl shadow-md pb-4 flex flex-col items-center">
          <img
            src={colageno}
            alt="Colageno"
            className="mb-4 object-cover md:w-96"
            width={500}
            height={100}
            loading="lazy"
          />
          <h4 className="text-lg font-semibold mb-2">Colágeno Beauty</h4>
          <p className="text-gray-600 mb-4 px-2">55 cápsulas — Pele firme + unhas mais fortes</p>
          <p className="text-xl font-bold text-green-600 mb-4">R$ 147,00</p>
          <Link to={`/checkout${query ? `${query}&` : '?'}produto=Colageno`} 
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer">
            Comprar agora
          </Link>
        </div>

        <div className="border-0 rounded-xl shadow-md pb-4 flex flex-col items-center">
          <img
            src={combo}
            alt="Combo Detox + Colageno"
            className="mb-4 object-cover md:w-96"
            width={500}
            height={100}
            loading="lazy"
          />
          <h4 className="text-lg font-semibold mb-2">Kit Completo</h4>
          <p className="text-gray-600 mb-4">
            Detox + Colágeno com aquele desconto especial.
          </p>
          <p className="text-xl font-bold text-green-600 mb-4">R$ 197,00</p>
          <Link to={`/checkout${query ? `${query}&` : '?'}produto=KitCompleto`} 
          className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer">
            Comprar agora
          </Link>
        </div>
      </div>
    </section>
  );
}
