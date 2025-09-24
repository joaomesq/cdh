import ContatoInfo from "./ContatoInfo";
import ContatoForm from "./ContatoForm";
import ContatoMap from "./ContatosMap";

export default function Contatos() {
  return (
    <main className="min-h-screen flex flex-col gap-16 bg-[#F3F4F6] p-4 md:p-10">
      {/*Section de Componentes */}
      <section className="grid grid-cols-1 gap-10">
        <ContatoInfo />
        <ContatoForm />
        <ContatoMap />
      </section>
    </main>
  );
}
