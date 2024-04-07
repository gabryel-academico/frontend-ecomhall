import bg from "../../assets/bg.jpg"
import { useNavigate } from 'react-router-dom';

import banner from "../../assets/banner.jpg"

import "./style.css"
import CardProduct from '../../components/Produtos';

import { produtoItem } from "../../context/carrinhoContext";
import { useEffect, useState } from "react";
import { ProdutoService } from "../../shared/Services/api/Produto/ProdutoService";
import { Environment } from "../../shared/environment";


// substituir por requisição do banco de dados
export const produtosData : produtoItem[] = [
  {id: 1, nome: "Bola de basquete" , preco: 70.99, imagem:bg},
  {id: 2, nome: "Smartphone genZ", preco: 980.00, imagem:bg},
  {id: 3, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", preco: 53.12, imagem:bg},
  {id: 4, nome: "Bola de basquete" , preco: 70.99, imagem:bg},
  {id: 5, nome: "Smartphone genZ", preco: 980.00, imagem:bg},
  {id: 6, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", preco: 53.12, imagem:bg},
  {id: 7, nome: "Bola de basquete" , preco: 70.99, imagem:bg},
  {id: 8, nome: "Smartphone genZ", preco: 980.00, imagem:bg},
  {id: 9, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", preco: 53.12, imagem:bg},
  {id: 10, nome: "Bola de basquete" , preco: 70.99, imagem:bg},
  {id: 11, nome: "Smartphone genZ", preco: 980.00, imagem:bg},
  {id: 12, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", preco: 53.12, imagem:bg},
  {id: 10, nome: "Bola de basquete" , preco: 70.99, imagem:bg},
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
        <article className='cards'>
          
            {produtosData.map(item =>(
              <section key={item.id}><CardProduct imgSrc={Environment.URL_API+"images/"+item.id+".jpeg"} productName={item.nome} productLink={item.id.toString()} price={item.preco} id={item.id}/></section>
            ))}
          
          
        </article>
        
        </div>
        </>
        
    )
}

export default Home;