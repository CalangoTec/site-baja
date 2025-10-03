import capaContato from "../../assets/capaContato.png";
import Header2 from "../../Elements/Header2";
import timeSobre2 from "../../assets/timeSobre2.png";
import Footer from "../../Elements/Footer.tsx";
import planoBaja from "../../assets/Plano BAJA 2025.pdf";

export default function Contato() {
	return (
		<>
			<Header2 />
			<main>
				<img src={capaContato} alt="PatrocineCalangoTec" className="w-full " />
			</main>

			<h1 className="drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)] mt-10 font-semibold text-center text-4xl md:text-4xl font-['Inter'] tracking-wide shadow-x">
				PATROCINE A NOSSA EQUIPE!
			</h1>

			<div className=" pt-12 flex flex-col md:flex-row justify-center items-center gap-20">
				<div className="md:w-3/5">
					<img
						className="w-full h-auto"
						src={timeSobre2}
						alt="Equipe no Regional de 2024"
					/>
				</div>
				<div className="lg:pr-20 md:w-1/2 flex flex-col justify-center items-center px-6 md:px-0">
					<div className="text-center text-black text-3xl font-semibold font-['Inter'] tracking-wide mb-4">
						<p>Por que nos apoiar?</p>
					</div>
					<div className="text-justify text-black text-lg font-normal font-['Inter'] tracking-tight">
						<p>
							Diversas empresas já reconhecem o valor de apoiar equipes BAJA no
							Brasil, aproveitando a oportunidade de associar sua marca a um
							projeto de grande impacto na formação de futuros profissionais da
							engenharia.
							<br />
							Ao patrocinar nossa equipe, sua marca ganhará visibilidade em um
							ambiente altamente qualificado, composto por acadêmicos e futuros
							engenheiros, além do público que acompanha as competições. Essa
							exposição se estenderá por meio de nossas redes sociais, eventos e
							em todas as ações ligadas à construção e divulgação do nosso
							veículo.
							<br />
							Mais do que um investimento em visibilidade, seu apoio contribuirá
							para o desenvolvimento de talentos e inovação, fortalecendo a
							indústria local e impulsionando a qualificação de profissionais
							preparados para os desafios do mercado.
						</p>
					</div>
				</div>
			</div>

			<div className="flex flex-col items-center bg-white py-8 px-4 md:px-16 lg:px-32 pb-20">
				<div className=" ">
					{/* Descrição e chamadas */}
					<div className="flex flex-col lg:flex-row gap-8 items-center ">
						{/* Texto à esquerda */}
						<div className="mt-5 text-center w-full flex flex-col items-center lg:items-start text-lg md:text-xl lg:text-2xl">
							<p className="mb-8">
								Venha construir o futuro conosco! Entre em contato e descubra
								como sua empresa pode fazer parte desse time vencedor. Acelere
								sua marca junto aos talentos do amanhã!
							</p>
							<div className="flex flex-col md:flex-row md:justify-center gap-4 w-full">
								<a
									href="https://api.whatsapp.com/send?phone=5571981527095&text=Ol%C3%A1!%20Tenho%20interesse%20em%20patrocinar%20a%20CalangoTec%20Baja!"
									target="_blank"
								>
									<button className="font-[knewave] bg-gray-300 border-2 border-black text-black text-lg lg:text-xl w-full md:w-[400px] h-[60px] py-2 px-4 rounded-md hover:bg-gray-400 transition">
										CONTATO PROFISSIONAL
									</button>
								</a>
								<a href={planoBaja} download="Plano BAJA 2025.pdf">
									<button className="font-[knewave] bg-gray-300 border-2 border-black text-black text-lg lg:text-xl w-full md:w-[400px] h-[60px] py-2 px-4 rounded-md hover:bg-gray-400 transition">
										PLANO DE PATROCÍNIO
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
}
