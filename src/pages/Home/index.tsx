import bg from "../../assets/bg.jpg"
import { useNavigate } from 'react-router-dom';

import banner from "../../assets/banner.jpg"

import "./style.css"
import CardProduct from "../../components/CardProduct";

import { produtoItem } from "../../context/carrinhoContext";
import { useEffect, useState } from "react";
import { ProdutoService } from "../../shared/Services/api/Produto/ProdutoService";
import { Environment } from "../../shared/environment";


// substituir por requisição do banco de dados
export const produtosData : produtoItem[] = [
]


function Home() {

    const navigate = useNavigate()
    function handleCardLinkClick(){
        navigate('/login')
    }
    
    const [produtosData, setProdutosData] = useState<produtoItem[]>([]);

    // Listagens de produtos
    useEffect(() => {
      ProdutoService.listagemProdutos().then((result) => {
        if(result instanceof Error)
        {
          console.error(result);
        }
        else
        {
          setProdutosData(result);
        }

        
      });
    }, []);


    return(
        <>
        <div className='area'>
        <div className='banner'><img src={banner} alt="banner" /></div>
        
        <h1>Recomendações</h1>

          <div className="area">

                <article className='cards'>
                  
                    {produtosData.map(item =>(
                      <section key={item.id}><CardProduct imgSrc={Environment.URL_API+"images/"+item.id+".jpeg"} productName={item.nome} productLink={`produto/${item.id.toString()}`} price={item.valor} id={item.id}/></section>
                    ))}
                  
                  
                </article>
          </div>
        </div>
        </>
        
    )
}

export default Home;