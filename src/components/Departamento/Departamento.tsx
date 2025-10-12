interface DepartamentoProps{
    titulo: string;
    descricao: string;
    colorBorder: string;
    membros: string;
}

export default function Departamento({titulo, descricao, colorBorder, membros = "1"}: DepartamentoProps){
    return(
        <section className={`h-[270px] p-4 border border-t-8 ${colorBorder} rounded-lg hover:shadow flex flex-col justify-center`}>
            <h2 className="text-xl font-bold text-gray-700 mb-4">{titulo}</h2>
            <p className="text-gray-400 mb-4">{descricao}</p>
            <p className="text-sm text-gray-300">{`${membros} membros`}</p>
        </section>
    );
}