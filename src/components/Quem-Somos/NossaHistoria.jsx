import React from 'react';

export default function NossaHistoria() {
  return (
    <section id="historia" className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center text-cdh-dark">Nossa História</h1>

      <p className="mt-3 text-center text-gray-700 max-w-prose mx-auto">
        A CDH nasceu da inquietação de três jovens visionários — <strong>Adriano Chilundulo</strong>, <strong>Cirilo Canganjo</strong> e <strong>Mariano Quessongo</strong> — diante da ausência de espaços inclusivos para formação tecnológica e conexão entre talentos da área digital.
      </p>

      <p className="mt-4 text-center text-gray-700 max-w-prose mx-auto">
        De uma simples chama de ansiedade de servir aos outros, hoje revela-se como uma das
        mais vibrantes iniciativas juvenis na área digital da província, sob um forte compromisso
        de reunir toda uma comunidade de profissionais, entusiastas e simpatizantes das
        Tecnologias de Informação e Comunicação da cidade, visando alargar o nível de
        exposição dos talentos locais no uso e produção de soluções tecnológicas emergentes,
        reforçar à aproximação destes, bem como garantir que empresas locais, nacionais e
        internacionais capitalizem os talentos locais para dentro de seus ambientes corporativos.
        
    </p>
    <p className="mt-4 text-center text-gray-700 max-w-prose mx-auto">
        <strong>Somos uma comunidade unida pelo propósito de aprender,
        ensinar, criar e impactar.</strong>
    </p>

      <div className="mt-6 bg-[color:var(--cdh-teal)/6] p-4 rounded-lg border border-cdh-teal/20">
        <h3 className="font-semibold text-lg mb-2 text-cdh-teal">Por que existimos?</h3>
        <ul className="list-inside space-y-1 text-gray-700">
          <li>• Empoderar jovens através da programação e inovação tecnológica</li>
          <li>• Conectar talentos locais às empresas e oportunidades emergentes</li>
          <li>• Combater a exclusão digital com acesso, formação e mentoria</li>
          <li>• Construir uma cultura de partilha, disciplina e propósito</li>
        </ul>
      </div>

      <h3 className="mt-6 text-lg font-semibold text-cdh-dark">Membros fundadores</h3>

      <div className="mt-4 space-y-4">
        <article className="flex items-center gap-4 px-3 py-4 bg-white/60 rounded-full shadow-sm">
          <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-4 ring-cdh-pink/20">
            <img src="../src/assets/imagens/Adriano.png" alt="Adriano Chilundulo" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-lg md:text-xl font-bold text-cdh-dark">Adriano Chilundulo</h4>
            </div>

            <div className="mt-2">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-cdh-purple text-white">
                OffSec e Analista de Sistemas
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-700 max-w-prose">
              Graduando em Análise e Desenvolvimento de Sistemas e em Engenharia de Telecomunicações. Envolvido em iniciativas de segurança e formação técnica, com foco em capacitação jovem.
            </p>
          </div>
        </article>

        <article className="flex items-center gap-4 px-3 py-4 bg-white/60 rounded-full shadow-sm">
          <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-4 ring-cdh-coral/20">
            <img src= "../src/assets/imagens/cirilo.png" alt="Cirilo Canganjo" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-lg md:text-xl font-bold text-cdh-dark">Cirilo Canganjo</h4>
            </div>

            <div className="mt-2">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-cdh-purple text-white">
                Desenvolvedor Web
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-700 max-w-prose">
              Graduado em Engenharia Informática. CEO da CLC Tecnologias, Lda. Atua em desenvolvimento web e projetos de integração entre talento local e mercado.
            </p>
          </div>
        </article>

     
        <article className="flex items-center gap-4 px-3 py-4 bg-white/60 rounded-full shadow-sm">
          <div className="flex-shrink-0 w-20 h-20 rounded-full overflow-hidden ring-4 ring-cdh-orange/20">
            <img src="../src/assets/imagens/Mariano.png" alt="Mariano Quessongo" className="w-full h-full object-cover" loading="lazy" />
          </div>

          <div className="flex-1">
            <div className="flex items-center justify-between gap-4">
              <h4 className="text-lg md:text-xl font-bold text-cdh-dark">Mariano Quessongo</h4>
            </div>

            <div className="mt-2">
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-cdh-purple text-white">
                Desenvolvedor de Software
              </span>
            </div>

            <p className="mt-2 text-sm text-gray-700 max-w-prose">
              Desenvolvedor com foco em soluções mobile e backend, comprometido com formação técnica e desenvolvimento de soluções locais.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
