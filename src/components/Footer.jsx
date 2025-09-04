import React from "react";
export default function Footer() {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8 p-4 text-center">
      <p className="text-sm max-w-3xl mx-auto mb-4">
        Este site não oferece aconselhamento médico. Os produtos apresentados
        são nutracêuticos e não substituem uma alimentação equilibrada, prática
        de exercícios ou acompanhamento profissional. Resultados podem variar de
        pessoa para pessoa.
      </p>

      <div className="flex justify-center gap-6 mb-4">
            <a href="#" className="text-sm underline hover:text-green-400 transition">
                Política de Privacidade
            </a>

            <a href="#" className="text-sm underline hover:text-green-400 transition">
                Termos de Uso
            </a>
      </div>

      <p> © {copyrightYear} Grupo Six — Todos os direitos reservados.</p>
    </footer>
  );
}
