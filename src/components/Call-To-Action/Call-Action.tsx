import React from "react";

interface ActionProps{
    texto: string;
    link: string;
    background: string;
    target: string;
}

export default function CallAction({texto, link, background = '', target = '_blank'}: ActionProps){
    return(
        <a href={`${link}`} target={`${target}`} className={`text-white text-center mb-2 p-3 px-6 rounded-lg ${background !== ''? background: "bg-call-action"} font-samll w-full`}>{texto}</a>
    );
}