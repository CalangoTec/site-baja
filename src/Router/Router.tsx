import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound";
import Loja from "../Pages/Loja/Loja";
import Contato from "../Pages/Contato/Contato";
import Subsistema from "../Pages/Subsistema/Subsistema";
import Subsistemas from "../Pages/Subsistema/Subsistemas";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/loja" element={<Loja />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/subsistemas" element={<Subsistemas />} />
                <Route path="/subsistemas/:subsistema" element={<Subsistema />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}