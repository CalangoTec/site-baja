import bgestrutura from "../Estrutura/bgestrutura.png"
import foto1 from "../Estrutura/foto1.png"

import SubsistemaGenerico from "../SubsistemaGenerico"
import fotomilena from "../../../assets/Subsistemas/Estrutura/milena.png"
import fotoigor from "../../../assets/Subsistemas/Estrutura/igor.png"
import fotodaniel from "../../../assets/Subsistemas/Estrutura/daniel.png"
import fotoisis from "../../../assets/Subsistemas/Estrutura/isis.png"
import fotomalu from "../../../assets/Subsistemas/Estrutura/malu.png"
import fotothiago from "../../../assets/Subsistemas/Estrutura/thiago.png"
import Footer from "../../../Elements/Footer.tsx";

const membros = [
    {nome: "Milena Reis", cargo: "Gerente", foto: fotomilena},
    {nome: "Isis Raquel", cargo: "Líder", foto: fotoisis},
    {nome: "Igor Palma", cargo: "Membro", foto: fotoigor},
    {nome: "Thiago Rocha", cargo: "Membro", foto: fotothiago},
    {nome: "Daniel Gouveia", cargo: "Membro", foto: fotodaniel},
    {nome: "Maria Luiza", cargo: "Membro", foto: fotomalu},
]

export default function Freio() {
    return (
        <>
            <SubsistemaGenerico banner={bgestrutura} foto1={foto1} foto2={""} texto1={"No subsistema de estrutura do Baja SAE, o objetivo principal é garantir que o projeto do chassi e da gaiola ofereçam segurança, conforto e funcionalidade para o piloto, seguindo as normas exigidas pela competição. A ideia é otimizar a interação entre o piloto e o veículo, garantindo que a condução seja segura e eficiente, mesmo em terrenos difíceis e condições extremas. Um dos pontos mais importantes é a posição do piloto, que precisa ser pensada de forma a reduzir a fadiga durante as provas, permitindo que o piloto acesse rapidamente e com facilidade os controles do veículo. Para isso, é necessário levar em conta as características físicas do piloto, como altura, peso e mobilidade. Além disso, a estrutura do cockpit deve ser feita para proteger o piloto em caso de impacto ou capotamento, assegurando a segurança nessas situações, de acordo com as especificações de diâmetro e espessura dos tubos exigidos pelo regulamento."} 
            texto2={"Outro aspecto importante é a acessibilidade: o piloto deve conseguir entrar e sair do veículo rapidamente, especialmente em emergências. Por isso, testes práticos de entrada e saída são realizados durante o desenvolvimento para garantir que o design atenda aos requisitos de segurança da SAE. No design, estética e funcionalidade precisam estar equilibradas, tornando o veículo aerodinâmico e prático. A visibilidade também é uma prioridade, sendo planejada para proporcionar uma boa visão ao piloto, mesmo em terrenos acidentados. Todo o desenvolvimento envolve testes de validação, como simulações ergonômicas e ensaios práticos, para ajustes conforme o feedback do piloto e os resultados obtidos. "} membros={membros} />
            <Footer/>
        </>
    )
}