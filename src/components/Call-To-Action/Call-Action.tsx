import React from "react";

interface ActionProps{
    texto: string;
    link: string;
}

export default function CallAction({texto, link}: ActionProps){
    return(
        <a href={`${link}`} className="rounded bg-call-action p-1 uppercase font-bold">{texto}</a>
    );
}