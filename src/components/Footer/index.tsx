import "./style.css"
import logo2 from "../../assets/logo2.png"

import { Link } from "react-router-dom";
function Footer(){
    return(
        <div className="container-footer">
            <div className="conteudo-container">
                <Link to="/"><span>Home</span></Link>
                <Link to="/conta"><span>Minha Conta</span></Link>

                <span>Contato: suporte.ecomhall@exemplo.com</span>
            </div>
            <div className="imagem-container"><img src={logo2} alt="logo" /></div>
        </div>
        
    )
}

export default Footer;