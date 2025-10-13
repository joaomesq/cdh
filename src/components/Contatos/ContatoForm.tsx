export default function ContatoForm() {
  return (
    <div className="bg-white shadow-lg rounded-xl p-6 md:p-10 w-full max-w-4xl mx-auto flex flex-col gap-8">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center md:text-left">Envie sua mensagem</h2>

      <form action="https://formsubmit.co/cdh.community.ao@outlook.com" method="POST" className="flex flex-col gap-4">
        <input type="text" name="name" placeholder="Seu nome" required className="border border-gray-300 rounded-lg p-4 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"/>
        
        <input type="email" name="email" placeholder="Seu email" required className="border border-gray-300 rounded-lg p-4 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"/>
        
        <textarea name="message" placeholder="Escreva sua mensagem..." rows={6} required className="border border-gray-300 rounded-lg p-4 text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none">
        </textarea>

        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition transform hover:scale-105 text-lg">
          Enviar
        </button>
      </form>
    </div>
  );
}
