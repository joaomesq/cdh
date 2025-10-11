import React from 'react';

interface CardProps{
    titulo: string;
    descricao: string;
    background: string;
}

export default function Card({titulo, descricao, background = ''}: CardProps){
    return(
        <div className={`flex items-center justify-center hover:shadow flex-col rounded-lg h-[300px] p-4 text-center m-2 ${background !== ''? background: "bg-white border"}`}>
            <h4 className='font-semibold text-2xl text-gray-700 mb-2'>{titulo}</h4>
            <p className="text-gray-400 text-lg mt-6">{descricao}</p>
        </div>
    )
}