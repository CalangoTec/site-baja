import bgpowertrain from "../../../assets/Subsistemas/Powertrain/bgpowertrain.png"
import foto1 from "../../../assets/Subsistemas/Powertrain/foto1.png"
import foto2 from "../../../assets/Subsistemas/Powertrain/foto2.png"
import SubsistemaGenerico from "../SubsistemaGenerico"
import fotojuli from "../../../assets/Subsistemas/Powertrain/juli.png"
import fotolucas from "../../../assets/Subsistemas/Powertrain/lucas.png"
import fotobernardo from "../../../assets/Subsistemas/Powertrain/bernardo.png"
import fotopedro from "../../../assets/Subsistemas/Powertrain/pedro.png"
import Footer from "../../../Elements/Footer.tsx";

const membros = [
    {nome: "Juliana Lisboa", cargo: "Gerente", foto: fotojuli},
    {nome: "Pedro Andrade", cargo: "Líder", foto: fotopedro},
    {nome: "Bernardo Queiroz", cargo: "Membro", foto: fotobernardo},
    {nome: "Lucas Matos", cargo: "Membro", foto: fotolucas},
    
   
]

export default function Gestao() {
    return (
        <>
        <SubsistemaGenerico banner={bgpowertrain} foto1={foto1} foto2={foto2} texto1={"O subsistema de powertrain em um veículo Baja SAE é fundamental para a transmissão e tração, garantindo eficiência e robustez em competições off-road. O motor, como principal fonte de energia, deve atender às normas da competição, sendo escolhido por potência, torque e eficiência de combustível, assegurando igualdade entre as equipes para que o foco esteja na engenharia de cada projeto. A integração do motor com com os demais componentes do powertrain influencia diretamente no desempenho e eficiência. A transmissão é responsável por transferir a potência do motor para as rodas, garantindo controle e eficiência ao movimento do veículo. No contexto Baja SAE, a transmissão continuamente variável CVT é amplamente usada, exigindo atenção à relação de transmissão e robustez. Além disso,o diferencial e eixos de tração são essenciais: o dianteiro distribui potência para manobras eficientes, e o traseiro mantém a mesma velocidade das rodas, evitando perda de tração, como em terrenos arenosos ou atolamentos. Os eixos de tração, por sua vez, precisam ser cuidadosamente dimensionados para suportar as forças e torques gerados, garantindo a durabilidade e a segurança do sistema."} 
        texto2={"A integração de todos os componentes do powertrain requer atenção meticulosa para assegurar um funcionamento coordenado. Testes e simulações são etapas indispensáveis no processo de otimização, permitindo validar o desempenho do sistema e identificar oportunidades de melhoria. Após a montagem, realiza-se uma série de testes práticos para avaliar a eficiência e a capacidade do powertrain em condições reais de competição. Entre os ensaios realizados estão aqueles que verificam a aceleração, resistência, consumo de combustível e o comportamento do veículo em diferentes tipos de terreno. Por fim, a manutenção contínua do sistema de powertrain durante as competições é essencial para preservar seu desempenho e prevenir falhas. Logo, o desenvolvimento do powertrain no Baja SAE não se limita ao projeto inicial, mas se estende ao longo de toda a vida útil do veículo, em um processo constante de aprendizado e aprimoramento."} membros={membros} />
        <Footer/>
        </>
    )
}