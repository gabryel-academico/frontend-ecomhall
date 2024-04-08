import "./style.css"
import CardProduct from "../../components/CardProduct";
import { useParams } from "react-router-dom";
import { produtoItem } from "../../context/carrinhoContext";

import { produtosData } from "../Home";
import { useState, useEffect } from "react";
import { ProdutoService } from "../../shared/Services/api/Produto/ProdutoService";

function Pesquisa() {
  const {id} = useParams()


  const [produtosData, setProdutosData] = useState<produtoItem[]>([])
  
  // Listagens de produtos
  useEffect(() => {
   
    ProdutoService.listagemProdutosNome(id??"").then((result) => {
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
  //trocar po requisição do banco de dados
  const produtosdata = produtosData;



  return (
    <div className="containerSearch">
      <div className="headerSearch">
        <span>Resultados para:{id}</span>
      </div>
      <hr />
        
        <article className="productsSearch">
          {produtosdata.filter(item => item.nome === id).map(item => (
            <section key={item.id}><CardProduct imgSrc={item.capa} productName={item.nome} productLink={item.id.toString()} price={item.preco} id={item.id} /></section>
          ))}
        </article>
      
      
    </div>
  )
}

export default Pesquisa;