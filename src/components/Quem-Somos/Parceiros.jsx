import React from 'react';

export default function Parceiros({ partners = [] }) {
  return (
    <section id="parceiros" className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-cdh-dark">Parceiros e Reconhecimentos</h2>
      <p className="text-gray-600 mt-2">Agradecemos aos nossos parceiros por fortalecerem nossa missão</p>

      <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-4 items-center">
        {partners.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 bg-gray-50 border border-gray-100 rounded-md transform transition hover:scale-[1.02] hover:shadow-md"
            title={p.name}
          >
            <img src={p.logo} alt={`${p.name} logo`} className="max-h-10 object-contain" loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
