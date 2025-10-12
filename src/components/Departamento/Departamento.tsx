interface DepartamentoProps{
    titulo: string;
    descricao: string;
    colorBorder: string;
    membros: int;
}

export default function Departamento({titulo, descricao, colorBorder, membros}: DepartamentoProps){
    return(
        <section>
            <h1>Tista</h1>
        </section>
    );
}