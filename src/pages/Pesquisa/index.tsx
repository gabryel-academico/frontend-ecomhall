import "./style.css"
import CardProduct from "../../components/CardProduct";
import { useParams } from "react-router-dom";


import { produtosData } from "../Home";

function Pesquisa() {
  const {id} = useParams()
  
  //trocar po requisição do banco de dados
  const produtosdata = produtosData;



  return (
    <div className="containerSearch">
      <div className="headerSearch">
        <span>Resultados para: {id}</span>
      </div>
      <hr />
        
        <article className="productsSearch">
          {produtosdata.map(item => (
            <section key={item.id}><CardProduct imgSrc={item.capa} productName={item.nome} productLink={item.id.toString()} price={item.preco} id={item.id} /></section>
          ))}
        </article>
      
      
    </div>
  )
}

export default Pesquisa;