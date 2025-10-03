import React from "react";

interface ActionProps{
    texto: string;
    link: string;
}

export default function CallAction({texto, link}: ActionProps){
    return(
        <a href={`${link}`} className="text-white text-sm mb-2 p-3 px-6 rounded bg-call-action font-samll">{texto}</a>
    );
}