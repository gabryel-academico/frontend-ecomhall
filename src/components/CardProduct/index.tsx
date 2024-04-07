
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


import "./style.css"
import { useContext } from 'react';
import { CartContext } from '../../context/carrinhoContext';



type CardProps = {
    imgSrc: string;
    productName: string;
    productLink: string;
    price: number; // price is optional
    id: number;
};

function CardProduct({ imgSrc, productName, productLink, price, id }: CardProps) {
    const { carrinho, adicionarProduto, removerProduto } = useContext(CartContext);
    const navigate = useNavigate();

    function handleCardClick(){
        adicionarProduto(id)
        
    }

    function handleCardLinkClick(){
        navigate(productLink);
    }

    return (
        <section className='card'>
            <img src={imgSrc} alt="Product" className='product-img' />
            <div className='product-info'>
                <h3>{productName}</h3>
                {price && <p>R$ {price}</p>} 
                <div className='product-btn'>
                        <Button variant="contained" color='inherit' onClick={handleCardLinkClick} sx={{
                            fontSize: "11px",
                            }}>
                            Ver Produto
                        </Button>
                        <Button variant="contained" color='inherit' onClick={handleCardClick} sx={{
                            margin: "auto",
                            backgroundColor: "black",
                            color: "white",
                            fontSize: "11px",
                            }}>
                            Adicionar ao Carrinho
                        </Button>
                    
                    
                </div>
            </div>
        </section>
    );
}

export default CardProduct;