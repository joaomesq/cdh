import React from 'react';
import { BiArrowBack, BiArrowFromLeft, BiArrowToRight, BiSolidArrowToLeft } from 'react-icons/bi';

export default function NossaHistoria() {
  return (
    <section id="historia" className="bg-white rounded-lg shadow-sm p-6 w-full">

<main className='h-[500px] flex md:flex-row flex-col items-center md:justify-around w-full h-full'>
  <main className='h-full'>
    <img src='img/cdh/cirilo.png' className='w-full md:w-[90%] rounded-3xl'/>
  </main>
  <main className='text-start h-full mt-24'>
      <h1 className="text-2xl md:text-4xl font-bold text-start text-orange-400">Nossa História</h1>
      <p className="mt-3 text-gray-700 text-start max-w-prose mx-auto">
        A <strong className='text-orange-400'>CDH</strong> nasceu da inquietação de três jovens visionários — 
        <strong className='text-orange-400'>Adriano Chilundulo</strong>, <strong className='text-orange-400'>Cirilo Canganjo</strong> 
        e <strong className='text-orange-400'>Mariano Quessongo</strong> — diante da ausência de espaços inclusivos 
        para formação tecnológica e conexão entre talentos da área digital.
      </p>
      <p className="mt-4 text-start text-gray-700 max-w-prose mx-auto">
        De uma simples chama de ansiedade de servir aos outros, hoje revela-se como uma das
        mais vibrantes iniciativas juvenis na área digital da província, sob um forte compromisso
        de reunir toda uma comunidade de profissionais, entusiastas e simpatizantes das
        Tecnologias de Informação e Comunicação da cidade, visando alargar o nível de
        exposição dos talentos locais no uso e produção de soluções tecnológicas emergentes,
        reforçar à aproximação destes, bem como garantir que empresas locais, nacionais e
        internacionais capitalizem os talentos locais para dentro de seus ambientes corporativos.
        
    </p>
    <p className="mt-4 text-left text-orange-400 max-w-prose mx-auto">
        <strong>Somos uma comunidade unida pelo propósito de aprender,
        ensinar, criar e impactar.</strong>
    </p>
    </main>
    
</main>

      <div className="mt-28 bg-[color:var(--cdh-teal)/6] p-4 rounded-lg border border-orange-100 flex justify-between">
        <div>
  <h3 className="font-semibold text-lg mb-2 text-orange-400">Por que existimos?</h3>
        <ul className="list-inside space-y-1 text-gray-700">
          <li className='flex items-center'> <BiArrowToRight className='text-orange-400'/> Empoderar jovens através da programação e inovação tecnológica</li>
          <li className='flex items-center'><BiArrowToRight className='text-orange-400'/> Conectar talentos locais às empresas e oportunidades emergentes</li>
          <li className='flex items-center'><BiArrowToRight className='text-orange-400'/> Combater a exclusão digital com acesso, formação e mentoria</li>
          <li className='flex items-center'><BiArrowToRight className='text-orange-400'/> Construir uma cultura de partilha, disciplina e propósito</li>
        </ul>

        </div>

    <div className='z-10'>
			 <div style={{zIndex:"auto", backgroundImage: `url(img/cdh/iconePNG.png)`, backgroundSize: "Cover", backgroundPosition: "center",animationDuration:"3s"}} class="mt-4 relative w-[100px] h-[100px] animate-spin"></div>
		</div>
      
      </div>

      <h3 className="mt-6 text-2xl text-center font-semibold text-orange-400">Membros fundadores</h3>

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
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-orange-400 text-white">
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
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-orange-400 text-white">
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
              <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-orange-400 text-white">
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
