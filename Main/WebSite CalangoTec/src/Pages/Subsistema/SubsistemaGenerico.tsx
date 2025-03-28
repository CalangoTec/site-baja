import MembrosGenerico, { Membro } from "./MembrosGenerico";
import SobreGenerico from "./SobreGenerico2";


export interface SubsistemaProps {
    banner: string;
    foto1: string;
    foto2: string;
    texto1: string;
    texto2: string;
    membros: Membro[];
}


export default function SubsistemaGenerico(props: SubsistemaProps) {
    return (
        <>
            <div className="flex flex-col gap-8 items-center pb-20">
                <img src={props.banner} alt="" className="w-full"/>
                <div className="w-full flex flex-col justify-start">    
                <div className="drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] flex flex-col text-yellow-300 justify-center text-end items-center bg-black py-4 sm:py-6 px-10 text-2xl sm:text-4xl font-[Inter] font-bold min-w-fit w-1/3 h-20 sm:h-24 rounded-r-3xl">
                    Sobre o Subsistema:
                </div>
                    <div className="mt-[-50px]">
                        <SobreGenerico foto1={props.foto1} foto2={props.foto2} texto1={props.texto1} texto2={props.texto2} />
                        <MembrosGenerico membros={props.membros} />
                    </div>
                </div>
            </div>
        </>
    )
}