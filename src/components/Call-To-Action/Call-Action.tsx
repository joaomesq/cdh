import React from "react";

interface ActionProps{
    texto: string;
    link: string;
}

export default function CallAction({texto, link}: ActionProps){
    return(
        <a href={`${link}`} className="text-white text-sm mb-2 rounded bg-call-action p-1 font-samll">{texto}</a>
    );
}