 import { Button } from "@mui/material";
import "./style.css";
 import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/carrinhoContext";
import { ProdutoService } from "../../shared/Services/api/Produto/ProdutoService";

import { produtoItem } from "../../context/carrinhoContext";

 function Produto() {


  const {id} = useParams()
  const { carrinho, adicionarProduto, } = useContext(CartContext);

  function handleProductClick(){
    adicionarProduto(Number(id))
    
  }
  const [produtosData, setProdutoData] = useState<produtoItem[]>([])

  useEffect(() => {
    ProdutoService.listagemProdutos().then((result) => {
      if(result instanceof Error)
      {
        console.error(result);
      }
      else
      {
        setProdutoData(result);
        
          
        
        
      }

      
    });
  }, []);
  const produto = produtosData.find(produto => produto.id === Number(id));
  return (
    <div className="containerProduto">
      <div id="imagemProduto"><img src="" alt="imagem" /></div>
      <div id="detalhesProduto">
        <h1>Produt{produto?.nome}</h1>
        <h4>Varejista x</h4>
        <h2>R$ 0,00</h2>
        <section>
          <h4>Descrição:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga accusamus quibusdam. Nobis ut voluptate quibusdam, voluptatem totam ipsa libero a numquam facere qui at, asperiores possimus quidem esse iusto.</p>
        </section>      
        <Button variant="contained" color='inherit' size="small" onClick={handleProductClick}
        sx={{
          width: "60%",
          margin: "auto"
        }}>
        Adicionar ao Carrinho
        </Button>
      </div>
    </div>
  )
}
export default Produto;