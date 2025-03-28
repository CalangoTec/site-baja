import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import CardGenerico from "./Card";
import eletronicaCard from '../assets/imgCards/eletronicaCard.png';
import estrutCard from '../assets/imgCards/estrutCard.png';
import suspCard from '../assets/imgCards/suspCard.png';
import freioCard from '../assets/imgCards/freioCard.png';
import pwtCard from '../assets/imgCards/pwtCard.png';
import gestaoCard from '../assets/imgCards/gestaoCard.png';
import calcCard from '../assets/imgCards/calcCard.png';

// Configuração do carrossel
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1000 },
        items: 3,
        slidesToSlide: 1, // Quantidade de slides por rolagem
    },
    tablet: {
        breakpoint: { max: 1000, min: 925 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 925, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

export default function CarroselGenerico() {
    const [cards, setCards] = useState<any[]>([]);

    useEffect(() => {
        const cardsExemplo = [
            { id: "1", titulo: "CÁLCULO ESTRUTURAl", descricao: "O cálculo estrutural no Baja SAE é uma etapa essencial para garantir que a estrutura do veículo suporte às exigências", imagem: calcCard, link: "/subsistemas/calculo" },
            { id: "2", titulo: "ELETRÔNICA", descricao: "O subsistema de eletrônica desempenha um papel crucial no desempenho e na segurança do veículo Baja, sendo responsável pelo monitoramento em tempo real de diversas condições operacionais do carro...", imagem: eletronicaCard, link: "/subsistemas/eletronica" },
            { id: "3", titulo: "ESTRUTURA", descricao: "No subsistema de estrutura do Baja SAE, o objetivo principal é garantir que o projeto do chassi e da gaiola ofereçam segurança, conforto", imagem: estrutCard, link: "/subsistemas/estrutura" },
            { id: "4", titulo: "FREIOS", descricao: "No subsistema de freios de um veículo Baja SAE, o foco é projetar, desenvolver e validar um sistema de frenagem eficiente e seguro", imagem: freioCard, link: "/subsistemas/freio" },
            { id: "5", titulo: "GESTÃO", descricao: "A Gestão da equipe no Baja é realizada para o bom andamento de todas as demais atividades dos outros subsistemas. Esse subsistema", imagem: gestaoCard, link: "/subsistemas/gestao" },
            { id: "6", titulo: "POWERTRAIN", descricao: "O subsistema de powertrain em um veículo Baja SAE é fundamental para a transmissão e tração, garantindo eficiência e robustez em", imagem: pwtCard, link: "/subsistemas/powertrain" },
            { id: "7", titulo: "SUSPENSÃO", descricao: "O subsistema de suspensão e direção é a área responsável pela dinâmica do veículo, consistindo em buscar a melhor resposta do carro frente às inconformidades", imagem: suspCard, link: "/subsistemas/suspensao" },
        ];
        setCards(cardsExemplo);
    }, []);

    return (
        <div className="relative w-[80%] mx-auto">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={false}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                itemClass="px-4 md:px-9" // Ajuste do espaçamento para mobile e desktop
                removeArrowOnDeviceType={["mobile"]} // Remove as setas em telas móveis
            >
                {cards.map((card) => (
                    <CardGenerico
                        key={card.id}
                        titulo={card.titulo}
                        descricao={card.descricao}
                        imagem={card.imagem}
                        link={card.link}
                        id={card.id}
                    />
                ))}
            </Carousel>
        </div>
    );
}