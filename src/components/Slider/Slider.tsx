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
        <section className="w-full h-[400px] md:h-[500px] flex items-center flex-col justify-center text-white text-center" style={{ backgroundImage: `url(${imagem})`, backgroundSize: "Cover", backgroundPosition: "center"}}>
            {/*escurecendo o fundo*/}

            {/*Textos*/}
            <div className="max-w-xl text-left p-4 py-8 h-[300px]">
                <h2 className="text-3xl font-bold mb-2">{titulo}</h2>
                <p className="text-lg mb-4">{descricao}</p>

                {/*Call to action */}
                <CallAction texto="Junte-se a nós" link="https://www.facebook.com/groups*sdh.community.group/permalink/3980161625462870"/>
            </div>

            {/*Controllers*/}
            <div className="">
                {slides.map((_, index)=> (
                    <button key={index} onClick={()=> setCurrent(index)} className={`w-3 h-3 m-2 rounded-full ${current === index ? "bg-white": "bg-gray-400"}`} />
                ))}
            </div>
        </section>
    );
}