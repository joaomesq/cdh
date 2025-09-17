import React from 'react';

interface CardProps{
    titulo: string;
    descricao: string;
    background: string;
}

export default function Card({titulo, descricao, background = ''}: CardProps){
    return(
        <div className={`rounded p-6 text-center m-2 ${background !== ''? background: "bg-cdh-blue"}`}>
            <h4 className='font-bold mb-2'>{titulo}</h4>
            <p>{descricao}</p>
        </div>
    )
}