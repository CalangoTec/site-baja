import Header from "../../Elements/Header2";
import timePrincipal2 from '../../assets/timePrincipal2.png'
import Sobre from "../../Elements/Sobre";
import Patrocinadores from "../../Elements/Patrocinadores";
import Carrosel from "../../Elements/Carrosel";
import Footer from "../../Elements/Footer.tsx";
import Subs from "../../Elements/Subs.tsx";

export default function Home() {
    return (
        <>
            <Header/>
            <main>
                <img src={timePrincipal2} alt="fotoEquipe" className="w-full"/>
            </main>

            <Sobre/>

            {/* SUBSISTEMAS */}
            <div className="flex flex-col text-center text-black text-4xl font-semibold font-['Inter'] pt-20 tracking-wide gap-4">
                <p className="text-black font-semibold text-4xl mb-[-15px] drop-shadow-[0_3px_3px_rgba(0,0,0,0.5)]">SUBSISTEMAS</p>
                <p className="text-[#666666] font-normal text-lg">Fique por dentro dos nossos subsistemas!</p>
            </div>
            <Subs/>

            <Patrocinadores/>
            <Footer/>
        </>
    )
}