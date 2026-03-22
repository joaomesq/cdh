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
        imagem: "/img/5.jpg",
        titulo: "Comunidade de Desenvolvedores do Huambo",
        descricao: "Promovendo o desenvolvendo tecnológico e a inovação em Angola através da colaboração entre desenvolvedores, capacitação e partilha de conhecimento."
    },
    {
        imagem: "/img/5.jpg",
        titulo: "Conectando mentes, Desenvolvendo soluçoões através da tecnologia.",
        descricao: "Unidos pela paixão em tecnologia, criamos um ambiente onde o conhecimento fluí livremente e cada membro contribui para o crescimento colectivo da nossa comunidade."
    },
    {
        imagem: "/img/5.jpg",
        titulo: "Huambo no mapa!",
        descricao: "Trabalhamos para posicionar o Huambo e Angola como referência em inovação tecnológica, desenvolvendo soluções que transformam vidas e impulsionam o progresso nacional."
    },
]; 

export default function Slider(){
    const [current, setCurrent] = useState(0);
    
    //Troca de slide
    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev +1) % slides.length);
        }, 5500);
        
        return () => clearInterval(interval);
    }, []);

    const { imagem, titulo, descricao } = slides[current];
    
    return (
        <section className="relative w-full h-[700px] py-6 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${imagem})`, backgroundSize: "Cover", backgroundPosition: "left"}}>         
            {/*Escurecendot o fundo */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            
            <div className="relative z-10">
                <div className="lg:w-1/2">
                    {/*Textos*/}
                    <div className="p-3">
                        <h2 className="text-4xl text-gray-700 lg:text-6xl font-bold mb-4 mt-4">{titulo}</h2>
                        <p className="text-2xl text-gray-100 mb-4">{descricao}</p>
                    </div>
                </div>

                <div className="flex items-center md:hidden justify-center w-full mb-2">
                    {/*Controllers*/}
                    <div>
                        {slides.map((_, index)=> (
                            <button key={index} onClick={()=> setCurrent(index)} className={`w-3 h-3 m-2 rounded-full ${current === index ? "bg-orange-600": "bg-orange-200"}`} />
                        ))}
                    </div>
                </div>

                <div className="mb-4 h-[5%] w-full flex flex-col items-center gap-2 px-4 md:flex-row md:w-1/2 md:mt-8 lg:gap-4">
                    <CallAction target="_self" texto="Conhecer a CDH  ->" link="/quem-somos" background="bg-cdh-blue"/>
                    <CallAction background="bg-call-action" target="_blank" texto="Junte-se a nós" link="https://www.facebook.com/groups*sdh.community.group/permalink/3980161625462870"/>
                </div>
            </div>
        </section>
    );
}