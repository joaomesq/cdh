"use client"
import Organograma from "./Organograma";
import Membros from "./Membros";
import Departamentos from "./Departamentos";

export default function Equipa() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center gap-12 pb-12">
      {/* Seção de Introdução */}
      <section className="max-w-3xl w-full px-6 text-center">
        <h1 className="text-3xl font-bold mb-3">Estrutura Organizacional</h1>
        
        <p>
          A CDH é uma estrutura organizada e viva, formada por jovens
          apaixonados por inovação, educação e inclusão. Por trás de cada
          projeto, iniciativa e evento, está uma força viva, em vários
          departamentos, que sob unidade de propósito faz tudo acontecer.
        </p>
      </section>

      {/* Seção do Organograma */}
      <section className="w-full flex justify-center px-6">
        <Organograma />
      </section>

      {/* Seção de Membros */}
      <section className=" w-full px-6 mb-12">
        <Membros />
      </section>
      {/* Seção de Departamentos */}
      <section className="max-w-3xl w-full px-6">
        <Departamentos />
      </section>
    </main>
  );
}
