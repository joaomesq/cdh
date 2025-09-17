import React from 'react';

export default function LinhaDoTempo({ items = [] }) {
  const accents = ['cdh-pink','cdh-coral','cdh-orange','cdh-teal','cdh-blue','cdh-purple'];

  return (
    <section id="linha-do-tempo" className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-cdh-dark">Linha do Tempo</h2>
      <p className="text-gray-600 mt-2">Eventos marcantes da comunidade</p>

      <div className="mt-4">
        <div className="flex gap-4 overflow-x-auto py-2 snap-x snap-mandatory">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`min-w-[420px] snap-start bg-gray-50 border border-gray-100 rounded-md p-3 shadow-sm`}
              role="article"
            >
              <div style={{height:4, background: accents[i % accents.length], borderRadius:4}} />

              <div className="mt-2 bg-gray-100 rounded-md overflow-hidden flex items-center justify-center" style={{height:380}}>
                <img src={it.img} alt={it.title} className="max-h-full max-w-full object-contain" loading="lazy" />
              </div>
              <div className="mt-3">
                <div className="text-sm text-gray-500">{it.date}</div>
                <h3 className="font-semibold mt-1 text-cdh-dark">{it.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
