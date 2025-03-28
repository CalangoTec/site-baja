import { NavLink } from "react-router-dom"

export default function Subsistemas() {
    return (
        <>
            <h1>Subsistemas</h1>
            <NavLink to="/subsistemas/eletronica">Eletronica</NavLink>
            <NavLink to="/subsistemas/powertrain">Powertrain</NavLink>
            <NavLink to="/subsistemas/suspensao">Suspensao</NavLink>
            <NavLink to="/subsistemas/freio">Freio</NavLink>
            <NavLink to="/subsistemas/gestao">Gestao</NavLink>
            <NavLink to="/subsistemas/estrutura">Estrutura</NavLink>
            <NavLink to="/subsistemas/calculo">Calculo</NavLink>
        </>
    )
}