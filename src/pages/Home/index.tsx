import bg from "../../assets/bg.jpg"
import { useNavigate } from 'react-router-dom';

import banner from "../../assets/banner.jpg"

import "./style.css"
import CardProduct from '../../components/Produtos';

import { produtoItem } from "../../context/carrinhoContext";


// substituir por requisição do banco de dados
export const produtosData : produtoItem[] = [
  {id: 1, titulo: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 2, titulo: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 3, titulo: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 4, titulo: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 5, titulo: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 6, titulo: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 7, titulo: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 8, titulo: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 9, titulo: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 10, titulo: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
  {id: 11, titulo: "Smartphone genZ", valor: 980.00, link:"/carrinho", capa:bg},
  {id: 12, titulo: "The Witcher: O Último Desejo: A Saga do Bruxo Geralt de Rívia ", valor: 53.12, link:"/carrinho", capa:bg},
  {id: 10, titulo: "Bola de basquete" , valor: 70.99, link:"/carrinho", capa:bg},
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
              <section key={item.id}><CardProduct imgSrc={item.capa} productName={item.titulo} productLink={item.link} price={item.valor} id={item.id}/></section>
            ))}
          
          
        </article>
        
        </div>
        </>
        
    )
}

export default Home;