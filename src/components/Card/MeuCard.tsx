import React from "react";
import { FaLaptopCode, FaPenFancy, FaChartLine, FaPalette } from "react-icons/fa";

const departamentos = [
  {
    title: "Departamento de Programação & Suporte Técnico",
    icon: <FaLaptopCode size={30} />,
    link: "#programacao",
  },
  {
    title: "Departamento de Redação & Revisão Textual",
    icon: <FaPenFancy size={30} />,
    link: "#redacao",
  },
  {
    title: "Departamento de Social Media & Marketing",
    icon: <FaChartLine size={30} />,
    link: "#marketing",
  },
  {
    title: "Departamento de Design & Imagem",
    icon: <FaPalette size={30} />,
    link: "#design",
  },
];

export default function CardDepartamentos() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {departamentos.map((dep, index) => (
        <a
          key={index}
          href={dep.link}
          className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ease-in-out text-center transform hover:scale-105 cursor-pointer">

          <div className="text-indigo-500 mb-4">{dep.icon}</div>
          <h3 className="text-lg font-semibold">{dep.title}</h3>
        </a>
      ))}
    </div>
  );
}
