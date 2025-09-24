import React, {useState, useEffect} from "react";
import CallAction from "../Call-To-Action/Call-Action";

//Dados para cada slide
interface Slide{
    imagem: string;
    titulo: string;
    descricao: string;
}

const slides: Slide[] = [
    {
        imagem: "/img/2.jpg",
        titulo: "CDH - Comunidade de desenvolvimento do Huambo",
        descricao: "Somos a maior comunidade de programadores e codificadores da cidade do Huambo, Angoa. Na CDH, acredita-se no poder da colaboração e do compatilhamento de conhecimento"
    },
    {
        imagem: "/img/2.jpg",
        titulo: "CONECTANDO MENTES, DESENVOLVENDO SOLUÇÕES",
        descricao: "Muito mais que um grupo: somos uma comunidade unida pelo propósito de aprender, ensinar,impactar e criar soluções para problemas reais"
    },
    {
        imagem: "/img/2.jpg",
        titulo: "HUAMBO NO MAPA!",
        descricao: "Juntos vamos elevar o nível da tecnologia na nossa região, colocando o Huambo e Angola no mapa."
    },
]; 

export default function Slider(){
    const [current, setCurrent] = useState(0);
    
    //Troca de slide
    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev +1) % slides.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const { imagem, titulo, descricao } = slides[current];
    return (
        <>
        <section className="w-full  md:mt-32 p-3 h-[600px] md:h-[500px] flex flex-col items-center justify-around text-black" 
        // style={{ backgroundImage: `url(${imagem})`, backgroundSize: "Cover", backgroundPosition: "center"}}
        >
            {/*escurecendo o fundo*/}
        <main className="flex items-center h-[100%] justify-center  text-black text-center">
            {/*Textos*/}
            <div className="max-w-4xl p-4 py-3 flex flex-col items-center justify-center">
                <h2 className="text-5xl text-orange-400 font-bold mb-2">{titulo}</h2>
                <p className="text-lg text-gray-500 mb-4">{descricao}</p>

            </div>
       </main>

  <main className="flex items-center h-[20%] justify-center w-full bg-white">
              {/*Call to action */}
                <div className="">
                {slides.map((_, index)=> (
                    <button key={index} onClick={()=> setCurrent(index)} className={`w-3 h-3 m-2 rounded-full ${current === index ? "bg-orange-600": "bg-orange-200"}`} />
                ))}
            </div>
          </main>

      {/*Controllers*/}
          <main className="flex items-center justify-center mt-10 w-full bg-white">
              <CallAction 
                texto="Junte-se a nós" 
                link="https://www.facebook.com/groups*sdh.community.group/permalink/3980161625462870"/>
          </main>

        </section>
       </>
    );
}