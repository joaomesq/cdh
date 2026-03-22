import React from 'react';
import { BiArrowBack, BiArrowFromLeft, BiArrowToRight, BiSolidArrowToLeft } from 'react-icons/bi';

export default function Historia(){
  return (
    <section className='px-6 py-16'>
      <article className='historia'>
        <h2 className='text-3xl text-center font-bold text-gray-700 mt-6 mb-6'>Nossa História</h2>
        <div className='text-gray-500 text-xl flex flex-col gap-4 items-center justify-center md:px-12'>
          <p>Fundada em 2024, a CDH nasceu da necessidade de criar um espaço onde desenvolvedores, designers, empreendedores e entusiastas da tecnologia pudessem colaborar, aprender e crescer juntos.</p>

          <p>
            Começamos como um pequeno grupo de amigos apaixonados por tecnologia que se reuniam 
            regularmente para discutir projetos, compartilhar conhecimento e apoiar-se mutuamente 
            no desenvolvimento profissional.
          </p>
        
          <p>
            De uma simples chama de ansiedade de servir aos outros, hoje revela-se como uma das mais vibrantes iniciativas juvenis na área digital da província, sob um forte compromisso
            de reunir toda uma comunidade de profissionais, entusiastas e simpatizantes das Tecnologias de Informação e Comunicação da cidade, visando alargar o nível de
            exposição dos talentos locais no uso e produção de soluções tecnológicas emergentes, reforçar à aproximação destes, bem como garantir que empresas locais, nacionais e
            internacionais capitalizem os talentos locais para dentro de seus ambientes corporativos.
          </p>
        </div>
      </article>

      {/**Fundadores - mais tarde */}
    </section>
  );
}