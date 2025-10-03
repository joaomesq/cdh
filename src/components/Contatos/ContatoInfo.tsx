import { FaLinkedin } from "react-icons/fa6";
import {
  FaGithub,
  FaTiktok,
  FaFacebook,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";

export default function ContatoInfo() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 max-w-3xl mx-auto flex flex-col gap-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left leading-tight">
        Ainda não achou o que procura?
      </h1>

      <p className="text-gray-600 text-base md:text-lg text-center md:text-left">
        Tem dúvidas ou sugestões? Fale connosco pelo formulário ou através dos
        nossos canais oficiais.
      </p>

      {/* Redes sociais */}
      <div className="flex overflow-x-auto gap-6 justify-start md:justify-center py-2">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/g/16uintnTJE/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 "
        >
          <FaFacebook className="text-4xl text-gray-600 hover:text-[#1877F2]" />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/cdh.community/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 "
        >
          <FaInstagramSquare className="text-4xl text-gray-600 hover:text-[#E4405F]" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/cdh-community"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 "
        >
          <FaLinkedin className="text-4xl text-gray-600 hover:text-[#0A66C2]" />
        </a>

        {/* TikTok */}
        <a
          href="https://www.tiktok.com/@cdh.community"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 "
        >
          <FaTiktok className="text-4xl text-gray-600 hover:text-[#010101]" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/cdh-community-ao"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125"
        >
          <FaGithub className="text-4xl text-gray-600 hover:text-[#181717]" />
        </a>

        {/* YouTube */}
        <a
          href="https://www.youtube.com/@cdh.community"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125 "
        >
          <IoLogoYoutube className="text-4xl text-gray-600 hover:text-[#FF0000]" />
        </a>

        {/* Discord */}
        <a
          href="https://discord.gg/HH4szPQ5"
          target="_blank"
          rel="noopener noreferrer"
          className="transition transform hover:scale-125"
        >
          <BsDiscord className="text-4xl text-gray-600 hover:text-[#5865F2]" />
        </a>
      </div>
    </div>
  );
}
