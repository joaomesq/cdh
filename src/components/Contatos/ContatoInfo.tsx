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
    <section className="flex w-full flex-col gap-6 p-20 md:p-32 text-center justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-400">Ainda não achou o que procura?</h2>
          
          <p className="text-lg text-gray-600 w-full ">
            <strong className="text-2xl">Tem dúvidas ou sugestões?</strong><br></br> Fale connosco pelo formulário ou atravésdos nossos canais oficiais.
          </p>

          {/* Ícones das redes sociais */}
          <div className="flex gap-4 text-center w-full items-center justify-center text-2xl md:text-7xl text-orange-400">
            <a href="https://www.facebook.com/share/g/16uintnTJE/?mibextid=wwXIfr" target="_blank" className="hover:text-blue-600 transition">
              <FaFacebook />
            </a>
            
            <a href="https://www.instagram.com/cdh.community/" target="_blank" className="hover:text-pink-500 transition">
              <FaInstagramSquare />
            </a>

            <a href="https://www.tiktok.com/@cdh.community" target="_blank" className="hover:text-blue-700 transition">
              <FaLinkedin />
            </a>

            <a href="https://www.tiktok.com/@cdh.community" target="_blank" className="hover:text-[#010101] transition">
              <FaTiktok />
            </a>
            
            <a href="https://github.com/cdh-community-ao" target="_blank" className="hover:text-gray-800 transition">
              <FaGithub />
            </a>

            <a href="https://www.youtube.com/@cdh.community" target="_blank" className="hover:text-red-600 transition">
              <IoLogoYoutube />
            </a>

            <a href="https://discord.gg/HH4szPQ5" className="hover:text-[#5865F2] transition">
              <BsDiscord />
            </a>
          </div>
    </section>
  );
}
