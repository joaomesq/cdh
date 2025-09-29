import React from "react";

const membros = [
  {
    title: "Adriano Chilundulo",
    description: "Offsec e Analista de Sistemas",
    bio: "Graduado em Análise e Desenvolvimento de Sistemas & Engenharia de Telecomunicações. Envolvido em iniciativas de segurança e formação técnica, com foco em capacitação jovem.",
    imageUrl: "/img/Adriano.png"
  },
  {
    title: "Cirilo Canganjo",
    description: "Desenvolvedor Web",
    bio: "Graduado em Engenharia Informática CEO da Empresa CLC Tecnólogias, LDA. Atua em desenvolvimento web e projetos de integração entre talento local e mercado.",
    imageUrl: "/img/cirilo.png"
  },
  {
    title: "Mariano Quessongo",
    description: "Desenvolvedor de Software",
    bio: "Desenvolvedor com foco em soluções mobile e backend, comprometido com formação técnica e desenvolvimento de soluções locais",
    imageUrl: "/img/Mariano.png"
  }
];

const Membros: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-block  py-4 px-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Membros da Coordenação Geral</h2>
        </div>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {membros.map((membro, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group"
          >
            <div className="flex flex-col items-center p-6">
              {/* Imagem */}
              <div className="relative w-full max-w-[200px] sm:max-w-[240px] aspect-square mb-4 sm:mb-6 overflow-hidden rounded-xl">
                <img
                  src={membro.imageUrl}
                  alt={membro.title}
                  className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Conteúdo */}
              <h3 className="font-bold text-lg sm:text-xl text-gray-900 text-center">
                {membro.title}
              </h3>

              <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-sm font-medium rounded-full border border-indigo-200 mt-2">
                {membro.description}
              </div>

              <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-center mt-3">
                {membro.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membros;
