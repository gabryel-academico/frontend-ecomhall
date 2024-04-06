import "./style.css"
import CardProduct from "../../components/Produtos";



import { produtosData } from "../Home";

function Pesquisa() {
  //trocar po requisição do banco de dados
  const produtosdata = produtosData;



  return (
    <div className="containerSearch">
      <div className="headerSearch">
        <span>Resultados para: produto y </span>
      </div>
      <hr />
        
        <article className="productsSearch">
          {produtosdata.map(item => (
            <section key={item.id}><CardProduct imgSrc={item.capa} productName={item.nome} productLink={item.link} price={item.valor} id={item.id} /></section>
          ))}
        </article>
      
      
    </div>
  )
}

export default Pesquisa;