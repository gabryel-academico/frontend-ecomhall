
import { Button } from "@mui/material";

import { title } from "process";
import { ReactNode, useEffect, useState } from "react";
import { produtosData } from "../pages/Home";

import React from "react";
 
export interface produtoItem {
    id: number;
    nome: string;
    valor: number;
    link: string;
    capa: string;
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
  }





export const CartContext = React.createContext<CartContextType>({
    carrinho: [],
  adicionarProduto: () => {},
  removerProduto: () => {},
});



export default function CartProvider({children}: CartProviderProps){
    const [carrinho, setCarrinho] = useState<itemCarrinho[]>([]);
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

    }

    
    
    return(
        <CartContext.Provider value={{carrinho, adicionarProduto, removerProduto}}>
            {children}
        </CartContext.Provider>
    );
}

