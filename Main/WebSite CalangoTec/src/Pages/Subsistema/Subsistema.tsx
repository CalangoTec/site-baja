import { useParams } from "react-router-dom"
import Header from "../../Elements/Header2";
import Eletronica from "./Eletronica/Eletronica";
import Powertrain from "./Powertrain/Powertrain";
import Suspensao from "./Suspensao/Suspensao";
import Freio from "./Freio/Freio";
import Gestao from "./Gestao/Gestao";
import Estrutura from "./Estrutura/Estrutura";
import Calculo from "./Calculo/Calculo";

export default function Subsistema() {
    const subsistema = useParams().subsistema
    let element = <></>
    if (subsistema === "eletronica") element = <Eletronica />
    if (subsistema === "powertrain") element = <Powertrain />
    if (subsistema === "suspensao") element = <Suspensao />
    if (subsistema === "freio") element = <Freio />
    if (subsistema === "gestao") element = <Gestao />
    if (subsistema === "estrutura") element = <Estrutura />
    if (subsistema === "calculo") element = <Calculo />
    return (
        <>
            <Header />
            {element}
        </>
    )
}