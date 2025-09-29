import React from "react";

export default function Organogram() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="bg-indigo-600 text-white py-8 px-6 rounded-t-2xl mb-4">
            <h1 className="text-4xl font-bold mb-2">
              Diagrama Estrutural da CDH
            </h1>
            <p className="text-lg opacity-80">
              Compreender de maneira visual a estrutura funcional da CDH
            </p>
          </div>

          <div className="bg-gray-100 text-gray-800 py-4 px-6 rounded-b-2xl shadow-lg">
            <p className="text-lg font-semibold">DESDE 27 DE JULHO | 2024</p>
          </div>
        </header>

        {/* Estrutura */}
        <div className="space-y-8 bg-gray-50 p-8 rounded-2xl">
          {/* Administração */}
          <div className="flex justify-center">
            <div className="bg-[#545454] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
              ADMINISTRAÇÃO
            </div>
          </div>

          {/* Linha */}
          <div className="flex justify-center">
            <div className="w-px h-12 bg-gray-400"></div>
          </div>

          {/* Coordenadores */}
          <div className="flex justify-center items-center gap-8">
            <div className="bg-[#545454] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
              COORDENADOR EXECUTIVO
            </div>
            <div className="w-16 h-px bg-gray-400"></div>
            <div className="bg-[#545454] text-white px-6 py-3 rounded-full font-semibold shadow-lg text-center">
              VICE-COORDENADOR EXECUTIVO
            </div>
          </div>

          {/* Linha */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-px h-8 bg-gray-400"></div>
              <div className="absolute top-8 left-0 w-64 h-px bg-gray-400 transform -translate-x-32"></div>
              <div className="absolute top-8 left-0 w-px h-8 bg-gray-400 transform -translate-x-32"></div>
              <div className="absolute top-8 right-0 w-px h-8 bg-gray-400 transform translate-x-32"></div>
            </div>
          </div>

          {/* Core Team */}
          <div className="flex justify-center">
            <div className="bg-[#545454] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
              CORE TEAM
            </div>
          </div>

          {/* Linha */}
          <div className="flex justify-center">
            <div className="w-px h-12 bg-gray-400"></div>
          </div>

          {/* Departamentos */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Redação */}
            <div className="space-y-4">
              <div className="bg-[#EF615D] text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg transition-transform hover:scale-105">
                REDAÇÃO
              </div>
              <div className="space-y-2">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm text-center">
                  Secretário
                </div>
                <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm text-center">
                  Vice-Secretário
                </div>
                <div className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm text-center">
                  Pessoal
                </div>
              </div>
            </div>

            {/* Imagem */}
            <div className="space-y-4">
              <div className="bg-[#EF615D] text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg transition-transform hover:scale-105">
                IMAGEM
              </div>
              <div className="space-y-2">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm text-center">
                  Secretário
                </div>
                <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm text-center">
                  Vice-Secretário
                </div>
                <div className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm text-center">
                  Pessoal
                </div>
              </div>
            </div>

            {/* Suporte */}
            <div className="space-y-4">
              <div className="bg-[#EF615D] text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg transition-transform hover:scale-105">
                SUPORTE
              </div>
              <div className="space-y-2">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm text-center">
                  Secretário
                </div>
                <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm text-center">
                  Vice-Secretário
                </div>
                <div className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm text-center">
                  Pessoal
                </div>
              </div>
            </div>

            {/* Marketing */}
            <div className="space-y-4">
              <div className="bg-[#EF615D] text-white px-6 py-3 rounded-full font-semibold text-center shadow-lg transition-transform hover:scale-105">
                MARKETING
              </div>
              <div className="space-y-2">
                <div className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm text-center">
                  Secretário
                </div>
                <div className="bg-gray-600 text-white px-4 py-2 rounded-full text-sm text-center">
                  Vice-Secretário
                </div>
                <div className="bg-gray-500 text-white px-4 py-2 rounded-full text-sm text-center">
                  Pessoal
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
