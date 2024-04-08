
import { Button } from "@mui/material";

import { title } from "process";
import { ReactNode, useEffect, useState } from "react";
//import { produtosData } from "../pages/Home";
import { ProdutoService } from "../shared/Services/api/Produto/ProdutoService";
import { Environment } from "../shared/environment";
import React from "react";
 
export interface produtoItem {
    valor: number;
    id: number;
    nome: string;
    preco: number;
    // link: string;
    capa: string;
    descricao: string;
  }

interface CartProviderProps {
    children: ReactNode;
}

interface itemCarrinho {
    produto: produtoItem;
    quantidade: number;
}

interface CartContextType {
    carrinho: itemCarrinho[];
    adicionarProduto: (id: number) => void;
    removerProduto: (id: number) => void;
    adicionarQuantidade: (id: number) => void;
  }





export const CartContext = React.createContext<CartContextType>({
    carrinho: [],
  adicionarProduto: () => {},
  removerProduto: () => {},
  adicionarQuantidade: () => {},
});



export default function CartProvider({children}: CartProviderProps){
    const [carrinho, setCarrinho] = useState<itemCarrinho[]>([]);
    const [produtosData, setProdutosData] = useState<produtoItem[]>([]);
    
    useEffect(() => {
        ProdutoService.listagemProdutos().then((result) => {
            if(result instanceof Error)
            {
                console.error(result);
            }
            else
            {
                setProdutosData(result);
                console.log(result)
            }
        });
    }, [])

    const produtos = produtosData
    
    // adiciona item ao carrinho
    function adicionarProduto(id: number) {
        const copiaCarrinho = [...carrinho]
        
        //substituir por requisição ao bd
        const produto = produtos.find((p) => p.id === id);

        const item = copiaCarrinho.find((product) => product.produto.id === id)
        
        // subistituir por post no bd
        if (produto){
            if(!item){
                copiaCarrinho.push({produto, quantidade:1})
            }else{
                item.quantidade = item.quantidade + 1
            }
        }
        

        setCarrinho(copiaCarrinho)
        
        console.log(item)
    }


    // remover item no carrinho
    function removerProduto(id: number) {
        const copiaCarrinho = [...carrinho]
        const item = copiaCarrinho.find((product) => product.produto.id === id)
        
        if(item){
            item.quantidade = item.quantidade - 1
            if(item.quantidade <= 0){
                copiaCarrinho.splice(copiaCarrinho.indexOf(item), 1)
            }
        }
        setCarrinho(copiaCarrinho)
    }
    // adicionar quantidade
    function adicionarQuantidade(id: number){
        const copiaCarrinho = [...carrinho]
        const item = copiaCarrinho.find((product) => product.produto.id === id)
        if(item){
            item.quantidade = item.quantidade + 1
        }
        setCarrinho(copiaCarrinho)
    }


    
    
    return(
        <CartContext.Provider value={{carrinho, adicionarProduto, removerProduto, adicionarQuantidade}}>
            {children}
        </CartContext.Provider>
    );
}

