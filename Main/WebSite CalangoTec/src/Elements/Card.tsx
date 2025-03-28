import { Link } from 'react-router-dom';

export interface CardGenericoProps {
    titulo: string;
    descricao: string;
    imagem: string;
    id: string;
    link: string;
}

function CardGenerico(props: CardGenericoProps) {
    return (
        <div
            className="relative w-[250px] h-[240px] rounded-lg shadow-md overflow-hidden bg-gray-900 group"
            style={{
                backgroundImage: `url(${props.imagem})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Camada escura para contraste */}
            <div className="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-40 transition-all duration-300 ease-in-out"></div>

            {/* Conteúdo do card */}
            <div className="absolute inset-0 flex flex-col justify-start p-4 text-white z-10">
                <h3 className="text-lg font-bold uppercase mb-1 ">{props.titulo}</h3>
                <p className="text-xs leading-tight pt-1">{props.descricao}</p>
                
            </div>

            {/* Botão de ação no canto inferior direito */}
            <Link
                to={props.link}
                onClick={() => window.scrollTo(0, 0)}
            >
                <button className="absolute bottom-3 right-3 bg-yellow-500 text-gray-900 py-1 px-3 rounded-md text-xs font-semibold group-hover:bg-yellow-600 transition-transform group-hover:scale-105 z-10">
                    Saber mais
                </button>
            </Link>
        </div>
    );
}

export default CardGenerico;
