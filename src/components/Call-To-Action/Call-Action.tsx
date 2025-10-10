import React from "react";

interface ActionProps{
    texto: string;
    link: string;
    background: string;
}

export default function CallAction({texto, link, background = ''}: ActionProps){
    return(
        <a href={`${link}`} target="_blank" className={`text-white text-center mb-2 p-2 px-6 rounded ${background !== ''? background: "bg-call-action"} font-samll w-full`}>{texto}</a>
    );
}