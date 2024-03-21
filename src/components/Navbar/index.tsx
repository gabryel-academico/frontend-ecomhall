//Esse arquivo constrói um componente de NavBar

//Importando Link
import { Link } from "react-router-dom";
//importando arquivo css
import "./style.css"
import { FaCartShopping, } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
function Navbar(){
return(
    <header>
        <Link to="/"><h2>Ecomhall</h2></Link>
        
        <div className="menu">
            <nav>
           <ul>
            <li><Link to="#end">Contato</Link></li>
            <li><Link to="/login">Conta</Link></li>
           </ul>
            
            
            <input type="text"/>
            <button>{<IoSearchSharp size={24}/>}</button>
            <p>R$0,00</p>
            <Link to="/carrinho"><button id="shop">{<FaCartShopping size={24}/>}</button></Link>
            
           
            </nav>
            
            
            
        </div>
    </header>
)
}

export default Navbar;