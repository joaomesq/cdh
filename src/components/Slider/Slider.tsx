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
        titulo: "Comunidade de desenvolvimento do Huambo",
        descricao: "Promovendo o desenvolvendo tecnológico e a inovação em Angola através da colaboração entre desenvolvedores, capacitação e partilha de conhecimento."
    },
    {
        imagem: "/img/2.jpg",
        titulo: "Conectando mentes, Desenvolvendo soluçoões através da tecnologia.",
        descricao: "Unidos pela paixão em tecnologia, criamos um ambiente onde o conhecimento flue livremente e cada membro contribui para o crescimento coletivo da nossa comunidade."
    },
    {
        imagem: "/img/2.jpg",
        titulo: "Huambo no mapa!",
        descricao: "Trabalhamos para posicionar Haumbo e Angola como referência em inovação tecnológica, desenvolvendo soluções que transformam vidas e impulsionam o progresso nacional."
    },
]; 

export default function Slider(){
    const [current, setCurrent] = useState(0);
    
    //Troca de slide
    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev +1) % slides.length);
        }, 3500);
        
        return () => clearInterval(interval);
    }, []);

    const { imagem, titulo, descricao } = slides[current];
    
    return (
        <section className="relative w-full h-[500px] py-6" style={{ backgroundImage: `url(${imagem})`, backgroundSize: "Cover", backgroundPosition: "center"}}>         
            {/*Escurecendot o fundo */}
            <div className="absolute inset-0 bg-white bg-opacity-10"></div>
            
            <div className="relative z-10">
                <div className="flex items-center justify-center text-center">
                    {/*Textos*/}
                    <div className="max-w-4xl p-4 py-3 flex flex-col items-center justify-center">
                        <h2 className="text-5xl font-bold mb-4 mt-12">{titulo}</h2>
                        <p className="text-lg text-gray-300 mb-4 mt-4">{descricao}</p>
                    </div>
                </div>

                <div className="flex items-center justify-center w-full ">
                    {/*Controllers*/}
                    <div>
                        {slides.map((_, index)=> (
                            <button key={index} onClick={()=> setCurrent(index)} className={`w-3 h-3 m-2 rounded-full ${current === index ? "bg-orange-600": "bg-orange-200"}`} />
                        ))}
                    </div>
                </div>

                <div className="flex items-center mb-4 h-[5%] justify-center mt-10 w-full ">
                    <CallAction texto="Junte-se a nós" link="https://www.facebook.com/groups*sdh.community.group/permalink/3980161625462870"/>
                </div>
            </div>
        </section>
    );
}