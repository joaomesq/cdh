import { FaLinkedin } from "react-icons/fa6";
import {
  FaGithub,
  FaTiktok,
  FaFacebook,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { IoLogoYoutube } from "react-icons/io";



export default function Contatos() {
  return (
    <main className="min-h-screen flex flex-col gap-16 bg-gray-50 md:p-10  flex-wrap w-full justify-center items-center">
      {/* Grid principal */}
      <section className="flex flex-col gap-10 md:w-[80%] w-full">
        {/* Coluna Esquerda */}
        <div className="flex w-full flex-col gap-6 p-20 md:p-32 text-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
            Ainda não achou o que procura?
          </h1>
          <p className="text-lg text-gray-600 w-full ">
            <strong className="text-2xl">Tem dúvidas ou sugestões?</strong><br></br> Fale connosco pelo formulário ou através
            dos nossos canais oficiais.
          </p>

          {/* Ícones das redes sociais */}
          <div className="flex gap-4 text-center w-full items-center justify-center text-2xl md:text-7xl text-orange-400">
            <a 
            href="https://www.facebook.com/share/g/16uintnTJE/?mibextid=wwXIfr"
              target="_blank"
              className="hover:text-blue-600 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/cdh.community/
"
              target="_blank"
              className="hover:text-pink-500 transition"
            >
              <FaInstagramSquare />
            </a>

            <a
              href="https://www.tiktok.com/@cdh.community"
              target="_blank"
              className="hover:text-blue-700 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.tiktok.com/@cdh.community"
              target="_blank"
              className="hover:text-[#010101] transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://github.com/cdh-community-ao"
              target="_blank"
              className="hover:text-gray-800 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.youtube.com/@cdh.community"
              target="_blank"
              className="hover:text-red-600 transition"
            >
              <IoLogoYoutube />
            </a>

            <a
              href="https://discord.gg/HH4szPQ5"
              className="hover:text-[#5865F2] transition"
            >
              <BsDiscord />
            </a>
          </div>
        </div>

        {/* Coluna Direita (Formulário) */}
        <div className="bg-white shadow-lg rounded-xl p-8  ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Envie sua mensagem
          </h2>
          <form
            action={`https://formsubmit.co/cdh.community.ao@outlook.com`}
            method="POST"
            className="flex flex-col spacing-y-6 gap-3 h-300"
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              placeholder="Seu email"
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Escreva sua mensagem..."
              rows={5}
              required
              className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            ></textarea>           

            <button
              type="submit"              
              className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition cursor-pointer"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>

      {/* Mapa Google */}
      <section className="w-full h-[400px] overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.5369853288116!2d15.7002041!3d-12.7698859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb775b4dbf6dfdb%3A0x43a78822d1399cdb!2sHuambo%2C%20Angola!5e0!3m2!1sen!2sus!4v0000000000000"
          width="100%"
          height="100%"
          allowFullScreen={true}
          loading="lazy"
          className="border-0"
        ></iframe>
      </section>
    </main>
  );
}
