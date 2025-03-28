import bgfreios from "../Freio/bgfreios.png"
import foto1 from "../Freio/foto1.jpg"
import foto2 from "../Freio/freio2.jpg"
import SubsistemaGenerico from "../SubsistemaGenerico"
import fotoclaudio from "../Freio/claudio.png"
import Footer from "../../../Elements/Footer.tsx";

const membros = [
    {nome: "Cláudio Junior", cargo: "Gerente", foto: fotoclaudio},
]

export default function Freio() {
    return (
        <>
            <SubsistemaGenerico banner={bgfreios} foto1={foto1} foto2={foto2} texto1={"No subsistema de freios de um veículo Baja SAE, o foco é projetar, desenvolver e validar um sistema de frenagem eficiente e seguro para atender às exigências das competições. Ele deve garantir a segurança do piloto e uma frenagem eficaz em diferentes terrenos e velocidades, contribuindo para o desempenho do veículo. O sistema envolve a seleção e integração de componentes otimizados para suportar as altas demandas das provas. Os discos de freio dissipam o calor gerado na frenagem, evitando superaquecimento, e são escolhidos com base em material, resistência ao desgaste e dissipação térmica. As pastilhas de freio transformam a energia cinética em calor por atrito, suportando altas temperaturas para um desempenho constante. As pinças aplicam pressão nas pastilhas para garantir frenagem eficiente e controlada, sendo escolhidas considerando peso, resistência e distribuição de força. O cilindro mestre converte a força do pedal em pressão hidráulica, transmitida pelo fluido de freio até as pinças. O uso de fluido de alta qualidade é essencial para uma resposta rápida e precisa na frenagem."} 
            texto2={"Além disso, a precisão do sistema é garantida por meio de cálculos de dimensionamento que asseguram que o veículo possa ser parado de maneira eficaz em diversas condições, como diferentes tipos de terreno (areia, lama, pedras, etc.) e variações de velocidade. Para isso, é necessário considerar a massa do veículo, a distribuição de peso, as características dos pneus e o tipo de suspensão, de modo a otimizar a performance do sistema de freios. Em resumo, o subsistema de freios de um veículo Baja SAE é uma parte crítica da segurança e desempenho do veículo, e seu projeto envolve uma série de considerações técnicas, testes e validações rigorosas. A constante evolução do design e a otimização dos componentes são essenciais para garantir não apenas a conformidade com as exigências da competição, mas também a segurança do piloto em condições extremas de prova."} membros={membros} />
            <Footer/>
        </>
    )
}