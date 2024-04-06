import { useContext } from "react";
import { CartContext } from "../../context/carrinhoContext";
import { produtosData } from "../Home";



function Carrinho(){
    
    const { carrinho, adicionarProduto, removerProduto } = useContext(CartContext);
    
    function handleCardClick() {
        
    }
    return(
        <div>
         
          {carrinho.map(item => (
            
            <ul key={item.produto.id}>
                <li>{item.produto.nome}</li>
                <li>{item.produto.valor}</li>
                <li>{item.quantidade}</li>
            </ul>
            
            
          ))}      
             
        </div>
        
    )
    
}


export default Carrinho;