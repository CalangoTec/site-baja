import bgsuspensao from "../../../assets/Subsistemas/Suspensao/bgsuspensao.png"
import SubsistemaGenerico from "../SubsistemaGenerico"
import fotofernando from "../../../assets/Subsistemas/Suspensao/fernando.png"
import fotodanilo from "../../../assets/Subsistemas/Suspensao/danilo.png"
import fotolari from "../../../assets/Subsistemas/Suspensao/lari.png"
import fotomiguel from "../../../assets/Subsistemas/Suspensao/miguel.png"
import Footer from "../../../Elements/Footer.tsx";
import foto1 from "../../../assets/Subsistemas/Suspensao/foto1.jpg"
import foto2 from "../../../assets/Subsistemas/Suspensao/suspensao2.jpg"

const membros = [
    {nome: "Fernando Pessoa", cargo: "Gerente", foto: fotofernando},
    {nome: "Larissa Dias", cargo: "Líder", foto: fotolari},
    {nome: "Danilo Silva", cargo: "Membro", foto: fotodanilo},
    {nome: "Miguel Cervino", cargo: "Membro", foto: fotomiguel},
    
]


export default function Suspensao() {
    return (
        <>
            <SubsistemaGenerico banner={bgsuspensao} foto1={foto1} foto2={foto2} texto1={"O subsistema de suspensão e direção é a área responsável pela dinâmica do veículo, consistindo em buscar a melhor resposta do carro frente os obstáculos presentes no ambiente em que o mesmo está inserido, aliando conforto e performance. Além disso, o subsistema contribui significativamente para a durabilidade e integridade estrutural do veículo. Ao absorver impactos e distribuir forças de maneira eficiente, ele protege outros componentes contra falhas prematuras. Isso é especialmente crítico em competições BAJA SAE, onde o protótipo é submetido a testes rigorosos de resistência e funcionalidade. Para que este comportamento aconteça na prática, é necessário uma boa engenharia e aprimoramento constante dos componentes que fazem parte do conjunto, são eles: coluna de direção, caixa de direção, cremalheira, braços de direção, mangas de eixo, bandejas de suspensão, kit mola-amortecedor, rodas e pneus. A coluna de direção conecta o volante ao mecanismo de direção. Ela transmite os movimentos giratórios do volante para o sistema de direção. A caixa de direção é responsável por converter o movimento rotacional da coluna de direção em movimento linear, que será transmitido aos braços e às rodas, reduzindo o esforço necessário para girar o volante."} 
        texto2={"A cremalheira é uma barra dentada da caixa de direção em sistemas de cremalheira e pinhão. Trabalha com o pinhão para converter movimento rotacional em linear, permitindo a movimentação das rodas dianteiras. Os braços de direção transferem esse movimento para as rodas, conectando-se à cremalheira ou ao setor da direção e às mangas de eixo, garantindo o ajuste correto do ângulo das rodas. As mangas de eixo suportam os cubos das rodas, conectam os braços de direção ao sistema de suspensão e possibilitam o movimento articulado da direção e suspensão. As bandejas de suspensão ligam o chassi às rodas, garantindo absorção de impactos, controle de altura e estabilidade dinâmica. Assim, o sistema de suspensão e direção é essencial para o alto desempenho de uma equipe de competição automotiva."} membros={membros} />
            <Footer/>
        </>
    )
}