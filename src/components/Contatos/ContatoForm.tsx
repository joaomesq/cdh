export default function ContatoForm() {
  return (
    <section className="bg-white shadow-lg rounded-xl p-8 border">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Envie sua mensagem</h2>
          
      <form action={`https://formsubmit.co/cdh.community.ao@outlook.com`} method="POST" className="flex flex-col spacing-y-6 gap-3 h-300">
            
        <input type="text" placeholder="Seu nome" required className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"/>

        <input type="email" placeholder="Seu email" required className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"/>
            
        <textarea placeholder="Escreva sua mensagem..." rows={5} required className="border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"></textarea>           

        <button type="submit" className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg transition cursor-pointer">
          Enviar
        </button>
       </form>
    </section>
  );
}
