import carroSobre from '../assets/carroSobre.png';
import timeSobre2 from '../assets/fotoSobre3.jpg';
import trofeuSobre from '../assets/trofeuSobre.png';
import calango from '../assets/calango.png';

function Sobre() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-2 pt-10 px-4 md:px-10 lg:px-20 relative overflow-x-hidden ">
      {/* Imagem do calango no fundo para telas grandes */}
      <img
        className="hidden md:block size-[40%] absolute right-[-70px] top-[-60px] rotate-[-0deg] z-[-1]"
        src={calango}
        alt="Calango de fundo"
      />

      {/* Header */}
      <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pb-2 tracking-wide mb-10 gap-4 ">
        <p className="text-black font-semibold text-4xl mb-[-15px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">SOBRE NÓS</p>
        <p className="text-[#666666] font-normal text-lg">Conheça um pouco da nossa equipe!</p>
      </div>

      <div className="w-full max-w-screen-lg flex flex-col gap-16">
        {/* Seção 1: Equipe */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="md:w-3/5">
            <img className="w-full h-auto" src={timeSobre2} alt="Equipe no Regional de 2024" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="text-center text-black text-3xl font-semibold font-['Inter'] tracking-wide mb-4">
              <p>Equipe CalangoTec Baja</p>
            </div>
            <div className="text-justify text-black text-lg font-normal font-['Inter'] tracking-tight">
              <p>
                Composta pelos estudantes dos Cursos de Graduação e Cursos Técnicos da instituição de ensino{' '}
                <strong>SENAI CIMATEC</strong>. Desde 2017 participando de competições organizadas pela SAE Brasil,
                buscando sempre proporcionar experiências inesquecíveis e conhecimentos fundamentais para quem passa pelo
                time.
                <br />
                Nossa equipe é dividida em sete subsistemas, sendo eles: <strong>Calculo Estrutural</strong>, <strong>Eletrônica</strong>,{' '}
                <strong>Estrutura</strong>, <strong>Freios</strong>, <strong>Gestão</strong>, <strong>Powertrain</strong> e <strong>Suspensão</strong>.
                <br />
                Cada um dos subsistemas é responsável por componentes específicos do veículo, com exceção de Gestão, que
                cuida da parte de Marketing, Finanças, Patrocínios.
              </p>
            </div>
          </div>
        </div>

        {/* Seção 2: Competição */}
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-20">
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="text-center text-black text-3xl font-semibold font-['Inter'] tracking-wide mb-4">
              <p>Competição Regional 2023</p>
            </div>
            <div className="text-justify text-black text-xl font-normal font-['Inter'] tracking-tight">
              <p>
                Em 2023 ocorreu a 16° do Campeonato Baja SAE BRASIL - Etapa Nordeste.
                <br /> Nossa equipe ficou na 8ª posição da classificação geral. Com destaque na prova de velocidade
                máxima, onde alcançamos a 2ª colocação, ao atingir 38km/h. Um ótimo desempenho, apresentando uma melhora
                de 49,5% em relação ao ano anterior.
                <br /> Outra prova com boa colocação foi a de Aceleração, onde ficamos na 3ª posição, com um tempo de
                5,17 segundos em um deslocamento de 30m. Apresentando também, uma melhora significativa em relação ao ano
                passado, onde o tempo foi de 5,77 segundos.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img className="w-full h-auto rounded-lg" src={trofeuSobre} alt="Troféu no Regional de 2023" />
          </div>
        </div>

        {/* Seção 3: Curiosidades */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-20">
          <div className="md:w-1/2 order-1 md:order-none">
            <img className="w-full h-auto" src={carroSobre} alt="Equipe no Regional de 2024" />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <div className="text-center text-black text-3xl font-semibold font-['Inter'] tracking-wide mb-4">
              <p>Curiosidades</p>
            </div>
            <div className="text-justify text-black text-lg font-normal font-['Inter'] tracking-tight">
              <p>
                A equipe vem apresentando uma melhora gradativa nas competições regionais ao longo dos últimos 6 anos e
                almeja seguir progredindo para os próximos anos.
                <br /> No ano de 2022, nossa equipe foi convidada pela Baja SAE Brasil para desenvolver um MVP de um baja
                totalmente elétrico e em 2023 apresentamos o veículo, na 28ª Competição Nacional BAJA SAE Brasil.
                <br /> Todos os anos a CalangoTec realiza um processo seletivo em busca de novos componentes para a
                equipe, que se forem aprovados ao longo das etapas, são integrados a equipe como Trainees e futuramente
                podendo ser promovidos ou não, para Membros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
