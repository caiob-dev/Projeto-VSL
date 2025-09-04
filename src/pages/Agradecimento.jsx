import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Agradecimento() {
  const [utms, setUtms] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const utmData = {};
    params.forEach((value, key) => {
      utmData[key] = value;
    });

    setUtms(utmData);

    localStorage.setItem("utms", JSON.stringify(utmData));
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6 text-center">
      <h1 className="text-3xl font-bold text-green-700 mb-4">
        🎉 Obrigado pela sua compra!
      </h1>
      <p className="text-gray-700 mb-6">
        Seu pedido foi confirmado. Em breve você receberá mais informações no
        seu e-mail.
      </p>

      {Object.keys(utms).length > 0 && (
        <div className="bg-white shadow-md rounded-lg p-4 text-left">
          <h2 className="font-semibold mb-2">UTMs capturados:</h2>
          <ul className="text-sm text-gray-600">
            {Object.entries(utms).map(([key, value]) => (
              <li key={key}>
                <strong>{key}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      <Link
        to={Object.keys(utms).length > 0
          ? `/checkout?${new URLSearchParams(utms).toString()}`
          : "/"
        }
        className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Ir para o Início
      </Link>
    </main>
  );
}
