import bg from "../../assets/bg.jpg"
import { useNavigate } from 'react-router-dom';

import banner from "../../assets/banner.jpg"

import "./style.css"
import CardProduct from '../../components/Produtos';

import { produtoItem } from "../../context/carrinhoContext";


// substituir por requisição do banco de dados
export const produtosData : produtoItem[] = [
  {id: 1, nome: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 2, nome: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 3, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 4, nome: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 5, nome: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 6, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 7, nome: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 8, nome: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 9, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 10, nome: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 11, nome: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 12, nome: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 10, nome: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
]


function Home() {
    const navigate = useNavigate()
    function handleCardLinkClick(){
        navigate('/login')
    }

    function handleClick(){
      
    }
    return(
        <>
        <div className='area'>
        <div className='banner'><img src={banner} alt="banner" /></div>
        <h1>Recomendações</h1>
        <article className='cards'>
          
            {produtosData.map(item =>(
              <section key={item.id}><CardProduct imgSrc={item.capa} productName={item.nome} productLink={item.link} price={item.valor} id={item.id}/></section>
            ))}
          
          
        </article>
        
        </div>
        </>
        
    )
}

export default Home;