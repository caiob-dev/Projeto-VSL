import React, { useState } from "react";
import { IMaskInput } from "react-imask";
import { Link, useLocation, useNavigate} from "react-router-dom";

export default function Checkout() {

  const navigate = useNavigate()

  const inicioNavigate = () => {
    navigate("/")
  }

  const [form, setForm] = useState({
    nome: "",
    email: "",
    cartão: "",
    cvv: "",
    validade: "",
  });
  
  const isFormValid = Object.values(form).every((value) => value.trim() !== "")

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Dados enviados", form);

    navigate("/agradecimento")

    setForm({
      nome: "",
      email: "",
      cartão: "",
      cvv: "",
      validade: "",
    });
  };


  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const produto = params.get("produto") || "Produto não especificado"

  return (
    <main className="flex flex-col items-center justify-start md:justify-center bg-gray-50 p-6">
        <h3 className="text-2xl text-gray-800 font-semibold mb-5">Produto: {produto}</h3>
      <form
        onSubmit={onSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Finalizar compra
        </h1>

        <div className="mb-4">
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            required
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2"
            placeholder="Nome completo"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2"
            placeholder="E-mail"
          />
        </div>

        <div className="mb-4">
          <IMaskInput
            mask="0000 0000 0000 0000"
            value={form.cartão}
            onAccept={(value) => setForm({ ...form, cartão: value })}
            placeholder="Número do cartão"
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2"
            required
            name="cartão"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="cvv"
            value={form.cvv}
            onChange={(e) => setForm({ ...form, cvv: e.target.value })}
            required
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2"
            placeholder="CVV"
            maxLength={3}
          />
        </div>

        <div className="mb-4">
          <IMaskInput
            mask="00/00"
            value={form.validade}
            onAccept={(value) => setForm({ ...form, validade: value })}
            type="text"
            name="validade"
            required
            className="w-full border-gray-300 rounded-lg p-2 focus:ring-2"
            placeholder="MM/AA"
          />
        </div>

        <button
          type="submit"
          className={`w-full py-2 rounded-lg transition ${
            isFormValid ? "bg-gray-800 text-white hover:bg-green-600 cursor-pointer "
              : "bg-gray-400 text-gray-700 cursor-pointer"
          }`}
          >
          Finalizar Compra
        </button>
      </form>

       <button
          type="submit"
          className="w-40 my-[38.5px] bg-gray-800 text-white py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
          onClick={inicioNavigate}
          >
            Voltar
        </button>
    </main>
  );
}
