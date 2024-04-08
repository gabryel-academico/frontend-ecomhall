import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";
import logo2 from "../../assets/logo2.png";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    
    
    function isLoggedIn(): boolean {
        // Check if access token exists in local storage or memory
        const accessToken = localStorage.getItem('ACESS_TOKEN'); 
    
        
        return accessToken ? false : true;
    }
    

    // Function to handle search
    function handleclicksearch() {
        navigate(`/pesquisa/${search}`);
    }

    return (
        <header>
            <Link to="/">
                <img src={logo2} alt="logomarca" />
            </Link>

            <div className="menu">
                <nav>
                    <ul>
                        {isLoggedIn() ? (
                            <li><Link to="/login">Conta</Link></li>
                        ) : (
                            <li>
                                <Link to="/pedidos/cliente">Conta</Link>
                            </li>
                        )}
                    </ul>

                    <input type="search" onChange={(e) => setSearch(e.target.value)} />
                    <button onClick={handleclicksearch}><IoSearchSharp size={24} /></button>

                    <Link to="/carrinho"><button id="shop"><FaCartShopping size={24} /></button></Link>

                </nav>
            </div>
        </header>
    );
}

export default Navbar;
