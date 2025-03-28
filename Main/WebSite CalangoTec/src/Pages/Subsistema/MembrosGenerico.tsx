export interface Membro {
    nome: string;
    cargo: string;
    foto: string;
}

export default function MembrosGenerico(props: { membros: Membro[] }) {
    return (
        <div className="flex flex-col items-center w-full pt-16">
            <div className="font-[Inter] flex flex-col w-full items-center">
                <h1 className="text-4xl drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] font-bold text-center pt-10">MEMBROS</h1>
                <p className="text-[#666666] text-center text-xl">Conheça quem faz parte do nosso subsistema:</p>
                <div className="flex flex-wrap justify-center items-center gap-16 py-4 w-11/12 ">
                    {props.membros.map((membro) => (
                        <div key={membro.nome} className="flex flex-col items-center">
                            <img src={membro.foto} alt={membro.nome} className="w-full" />
                            <p className="text-center text-sm pt-1 font-bold">{membro.nome} - {membro.cargo}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
