import CardGenerico from "./Card.tsx";
import eletronicaCard from '../assets/imgCards/eletronicaCard.png';
import estrutCard from '../assets/imgCards/estrutCard.png';
import suspCard from '../assets/imgCards/suspCard.png';
import freioCard from '../assets/imgCards/freioCard.png';
import pwtCard from '../assets/imgCards/pwtCard.png';
import gestaoCard from '../assets/imgCards/gestaoCard.png';
import calcCard from '../assets/imgCards/calcCard.png';

const cards = [
    { id: "1", titulo: "CÁLCULO ESTRUTURAL", descricao: "Análise e modelagem estrutural.", imagem: calcCard, link: "/subsistemas/calculo" },
    { id: "2", titulo: "ELETRÔNICA", descricao: "Monitoramento em tempo real.", imagem: eletronicaCard, link: "/subsistemas/eletronica" },
    { id: "3", titulo: "ESTRUTURA", descricao: "Esqueleto do veículo.", imagem: estrutCard, link: "/subsistemas/estrutura" },
    { id: "4", titulo: "FREIOS", descricao: "Frenagem e Segurança.", imagem: freioCard, link: "/subsistemas/freio" },
    { id: "5", titulo: "GESTÃO", descricao: "Organização e gestão de pessoas.", imagem: gestaoCard, link: "/subsistemas/gestao" },
    { id: "6", titulo: "POWERTRAIN", descricao: "Coração do veículo.", imagem: pwtCard, link: "/subsistemas/powertrain" },
    { id: "7", titulo: "SUSPENSÃO", descricao: "Sustentação e Amortecimento.", imagem: suspCard, link: "/subsistemas/suspensao" },
];

function CardsGrid() {
    return (
        <div className="flex flex-col items-center w-full pt-2">
            <div className="font-[Inter] flex flex-col w-full items-center">
                <div className="flex flex-wrap justify-center items-center gap gap-20 py-4 w-4/5">
                    {cards.map((card) => (
                        <div key={card.id} className="flex flex-col items-center">
                            <CardGenerico {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CardsGrid;
