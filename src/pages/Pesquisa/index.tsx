import "./style.css"
import CardProduct from "../../components/CardProduct";



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
            <section key={item.id}><CardProduct imgSrc={item.imagem} productName={item.nome} productLink={item.id.toString()} price={item.preco} id={item.id} /></section>
          ))}
        </article>
      
      
    </div>
  )
}

export default Pesquisa;