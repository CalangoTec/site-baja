import bgeletronica from "../../../assets/Subsistemas/Eletronica/bgeltronica.png"
import SubsistemaGenerico from "../SubsistemaGenerico"
import fotoyan from "../../../assets/Subsistemas/Eletronica/yan.png"
import fotodanilo from "../../../assets/Subsistemas/Eletronica/danilo.png"
import fotorafa from "../../../assets/Subsistemas/Eletronica/rafa.png"
import fotopedro from "../../../assets/Subsistemas/Eletronica/pedro.png"
import fotovini from "../../../assets/Subsistemas/Eletronica/vini.png"
import fotoalva from "../../../assets/Subsistemas/Eletronica/alva.png"
import fotocezim from "../../../assets/Subsistemas/Eletronica/cezim.png"
import Footer from "../../../Elements/Footer.tsx";
import foto1 from "../Eletronica/foto1.jpg"
import foto2 from "../Eletronica/foto2.jpg"

const membros = [
    {nome: "Pedro Lima", cargo: "Gerente", foto: fotopedro},
    {nome: "Lucas Alvarez", cargo: "Líder", foto: fotoalva},
    {nome: "Yan Chagas", cargo: "Membro", foto: fotoyan},
    {nome: "Danilo Garcia", cargo: "Membro", foto: fotodanilo},
    {nome: "Rafael Athaliba", cargo: "Membro", foto: fotorafa},
    {nome: "Vinícius Oliveira", cargo: "Membro", foto: fotovini},
    {nome: "Rafael Cezimbra", cargo: "Membro", foto: fotocezim},

]

export default function Eletronica() {
    return (
        <>
            <SubsistemaGenerico banner={bgeletronica} foto1={foto1} foto2={foto2} texto1={"O subsistema de eletrônica desempenha um papel crucial no desempenho e na segurança do veículo Baja, sendo responsável pelo monitoramento em tempo real de diversas condições operacionais do carro. Ele fornece ao piloto informações essenciais, como a velocidade do veículo, o nível de combustível armazenado no tanque e a temperatura da CVT. Esses dados são obtidos por meio de sensores de alta precisão, dos tipos: capacitivos, indutivos, ultrassônicos, termistores, entre outros. Todos os sensores estão conectados a um microcontrolador, que armazena o código responsável por processar as informações e garantir o correto funcionamento do sistema. Além do monitoramento, o subsistema de eletrônica também é responsável por implementar sistemas de segurança, como as chaves gerais, popularmente conhecidas como \"botões mata\". Esses dispositivos têm a função de desativar a ignição do motor em situações de emergência, prevenindo acidentes. São instalados dois botões mata: um próximo ao piloto, de fácil acesso durante a operação, e outro na parte externa do veículo, permitindo a atuação rápida por membros da equipe ou fiscais durante a competição."} 
            texto2={"Outra atribuição importante do subsistema é o controle da luz de freio, um elemento obrigatório para a segurança do veículo. A luz de freio é posicionada na parte traseira do carro, a uma altura de 1,2 metros, conforme os regulamentos, e tem a função de alertar os competidores e observadores sobre as frenagens, reduzindo os riscos de colisões durante as provas.O objetivo central do subsistema de eletrônica é assegurar a integridade e a eficiência do carro, minimizando falhas e evitando contratempos ou gastos desnecessários. Combinando tecnologia de sensores e controle automatizado, a eletrônica do Baja é uma peça-chave para o sucesso da equipe em competições. "} membros={membros} /> 
            <Footer/>   
        </>
    )
}