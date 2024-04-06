//Esse arquivo é responsável pela configuração do roteamento das páginas

//Importações
//Importando componentes do react-router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

//importando as páginas criadas
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import RegCliente from "./pages/Registro/Cliente";
import RegVarejista from "./pages/Registro/Varejista";
import Pesquisa from "./pages/Pesquisa";
//Importando Navbar
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
            <Route path="/pesquisa" element={ <Pesquisa/> }/>
            <Route path="/carrinho" element={ <Carrinho/> }/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro/cliente" element={<RegCliente/>}/>
            <Route path="/registro/varejista" element={<RegVarejista/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
        
        
    )
}

export default RoutesApp