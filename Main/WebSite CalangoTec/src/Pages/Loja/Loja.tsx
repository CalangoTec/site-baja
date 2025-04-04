import loja from '../../assets/loja.png';
import Header2 from "../../Elements/Header2";
import cardLoja from "../../assets/cardLoja.png";
import cardLoja1 from "../../assets/card1Loja.png";
import cardLoja2 from "../../assets/card2Loja.png";
import Footer from "../../Elements/Footer.tsx";

export default function Loja() {
    return (
        <>
            <Header2 />
            <main>
                <img src={loja} alt="fotoLoja" className="w-full" />
            </main>
            <div className="w-full px-4 lg:px-20 flex flex-col justify-center items-center h-fit">
                <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pt-16 mb-4 tracking-wide gap-4">
                    <p className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] text-black font-semibold text-4xl mb-[-15px]">PRODUTOS DO CALANGUINHO</p>
                    <p className="text-[#666666] font-normal text-lg pb-8">Venha dar uma olhada nos nossos produtos!</p>

                    {/* Cards e Botões */}
                    <div className="flex flex-wrap justify-center items-center gap-[90px] rounded-lg pb-20">
                        {/* Card 1 */}
                        <div className="flex flex-col items-center">
                            <img src={cardLoja1} alt="cardLoja" className="rounded-lg" />
                            <a href="#" >
                                <button className="font-[knewave] w-[308px] mt-4 bg-gray-100 border-2 border-black text-black text-lg px-6 py-2 rounded-md hover:bg-gray-400 transition">
                                    ESGOTADO
                                </button>
                            </a>
                        </div>
                        {/* Card 2 */}
                        <div className="flex flex-col items-center">
                            <img src={cardLoja2} alt="cardLoja" className="rounded-lg" />
                            <a href="#" >
                                <button className="font-[knewave] w-[308px] mt-4 bg-gray-100 border-2 border-black text-black text-lg px-6 py-2 rounded-md hover:bg-gray-400 transition">
                                    ESGOTADO
                                </button>
                            </a>
                        </div>
                        {/* Card 3 */}
                        <div className="flex flex-col items-center">
                            <img src={cardLoja} alt="cardLoja" className="rounded-lg" />
                            <a href="#" >
                                <button className="font-[knewave] w-[308px] mt-4 bg-gray-100 border-2 border-black text-black text-lg px-6 py-2 rounded-md hover:bg-gray-400 transition">
                                    EM BREVE
                                </button>
                            </a>
                        </div>
                    
                        {/* Card 4 }
                        <div className="flex flex-col items-center">
                            <img src={cardLoja} alt="cardLoja" className="rounded-lg" />
                            <a href="" target='_blank'>
                                <button className="font-[knewave] w-[308px] mt-4 bg-gray-100 border-2 border-black text-black text-lg px-6 py-2 rounded-md hover:bg-gray-400 transition">
                                    UNIFORME 2
                                </button>
                            </a>
                        </div>
                        {/* Card 5 }
                        <div className="flex flex-col items-center">
                            <img src={cardLoja} alt="cardLoja" className="rounded-lg" />
                            <a href="" target='_blank'>
                                <button className="font-[knewave] w-[308px] mt-4 bg-gray-100 border-2 border-black text-black text-lg px-6 py-2 rounded-md hover:bg-gray-400 transition">
                                    CANECA
                                </button>
                            </a>
                        </div>
                        {/* Card 6 *}
                        <div className="flex flex-col items-center">
                            <img src={cardLoja} alt="cardLoja" className="rounded-lg" />
                            <a href="" target='_blank'>
                                <button className="font-[knewave] font-[knewave] w-[308px] mt-4 bg-gray-100 border-2 border-black text-black text-lg px-6 py-2 rounded-md hover:bg-gray-400 transition">
                                    COMPRAR
                                </button>
                            </a>
                        </div> */}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
