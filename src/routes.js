//Esse arquivo é responsável pela configuração do roteamento das páginas

//Importações
//Importando componentes do react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importando as páginas criadas
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
//Importando Navbar
import Navbar from "./components/Navbar";
//Configuração das rotas
function RoutesApp(){
    //Essa função retorna o componente das rotas
    //O Route recebe os seguinters parâmetros:
    //path="(caminho da página no browser)"
    //element={(Componente a ser redenizado)}
    return(
        
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/carrinho" element={ <Carrinho/> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
            <Route/>
        </Routes>
        </BrowserRouter>
        
        
    )
}

export default RoutesApp