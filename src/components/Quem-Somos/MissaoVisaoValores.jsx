import React from 'react';

export default function MissaoVisaoValores() {
  return (
    <section id="missao" className="p-4 py-12">
      <h2 className="text-3xl text-center text-gray-700 font-bold">Missão, Visão e Valores</h2>

      <div className="mt-12 mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-lg border border-l-4 border-l-cdh-pink/90 bg-white/50 hover:shadow-lg">
          <div className="text-xl font-semibold mb-2 text-cdh-pink">Missão</div>
          <p className="text-sm text-gray-700">Ser uma ponte entre o potencial humano nas tecnologias e as oportunidades emergentes.</p>
        </div>

        <div className="p-4 rounded-lg border border-l-4 border-l-cdh-teal bg-white/50 hover:shadow-lg">
          <div className="text-xl font-semibold mb-2 text-cdh-teal">Visão</div>
          <p className="text-sm text-gray-700">Ver o Huambo reconhecido como um polo tecnológico nacional, impulsionado por jovens comprometidos com o futuro.</p>
        </div>

        <div className="p-4 rounded-lg border border-l-4 border-l-cdh-orange bg-white/50 hover:shadow-lg">
          <div className="text-xl font-semibold mb-2 text-cdh-orange">Valores</div>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>• Responsabilidade Social</li>
            <li>• Inclusão de Povos</li>
            <li>• Educação Democratizada</li>
            <li>• Valorização do Capital Humano</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
