import bggestao from "../../../assets/Subsistemas/Gestao/bggestao.png"
import foto1 from "../../../assets/Subsistemas/Gestao/gestao1.png"
import foto2 from "../../../assets/Subsistemas/Gestao/gestao2.jpg"
import SubsistemaGenerico from "../SubsistemaGenerico"
import fotoaug from "../../../assets/Subsistemas/Gestao/augusto.png"
import fotoana from "../../../assets/Subsistemas/Gestao/ana.png"
import fotocarol from "../../../assets/Subsistemas/Gestao/carol1.png"
import fotomarcelo from "../../../assets/Subsistemas/Gestao/marcelo.png"
import fotothiago from "../../../assets/Subsistemas/Gestao/thiago.png"


import Footer from "../../../Elements/Footer.tsx";

const membros = [
    {nome: "Augusto Lima", cargo: "Capitão", foto: fotoaug},
    {nome: "Ana Carolina Gomes", cargo: "Membro", foto: fotocarol},
    {nome: "Ana Júlia", cargo: "Membro", foto: fotoana},
    {nome: "Thiago Andrade", cargo: "Membro", foto: fotothiago},
    {nome: "Marcelo Santos", cargo: "Membro", foto: fotomarcelo},
    
]

export default function Gestao() {
    return (
        <>
        <SubsistemaGenerico banner={bggestao} foto1={foto1} foto2={foto2} texto1={"A Gestão da equipe no Baja é realizada para o bom andamento de todas as demais atividades dos outros subsistemas. Esse subsistema envolve a administração de diversas áreas e recursos necessários para garantir o funcionamento de forma integrada, atendendo aos objetivos e cronogramas estabelecidos. O processo de gestão no Baja engloba a coordenação das seguintes áreas: finanças, recursos humanos, marketing, patrocínios, logística e processos seletivos. No financeiro, o subsistema de Gestão administra o orçamento da equipe, incluindo a captação de recursos, controle de gastos e organização de investimentos. Tudo com o intuito de garantir que o projeto tenha os recursos necessários para a execução das atividades, como compra de peças, materiais e equipamentos. Na área de RH, é de responsabilidade do subsistema gerir a seleção, capacitação e manutenção dos integrantes da equipe (trainees, membros e gerentes). Isso inclui os processos seletivos, treinamento dos novos integrantes, acompanhamento do desempenho e motivação da equipe, além de cuidar da alocação de funções e responsabilidades."} texto2={"O marketing no projeto Baja é essencial para promover a equipe, atrair patrocinadores e engajar o público. Suas funções incluem campanhas em redes sociais, participação em eventos e exposições, além da apresentação do time em competições. A gestão de patrocínios garante o suporte financeiro de empresas interessadas em associar sua imagem ao projeto. Essa área é responsável pela captação de patrocinadores, negociação de contratos e manutenção do relacionamento com as empresas parceiras. A logística organiza o transporte de materiais, equipamentos e deslocamento da equipe para competições, eventos e desenvolvimento do veículo. Suas atividades incluem a coordenação do transporte de peças, ferramentas e do próprio carro."} membros={membros} />
        <Footer/>
        </>
    )
}