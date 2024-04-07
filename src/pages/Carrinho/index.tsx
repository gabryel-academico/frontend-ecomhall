import { useContext } from "react";
import { CartContext } from "../../context/carrinhoContext";

import { FaTrash } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";



import { Box, Button, FormControl, InputLabel, MenuItem, } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "./style.css"
import React from "react";



function Carrinho(){
  
  //dropdown
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
      setAge(event.target.value as string);
    };
  



    const { carrinho, adicionarProduto, removerProduto } = useContext(CartContext);
    
    function handleCardCspanck() {
        
    }
    return(
        <div className="containerCart">
         <h1>Seu carrinho</h1>
         <hr />
         <article className="cartArea">
          {carrinho.map(item => (
            
            <section key={item.produto.id} className="cartItem">
                <hr />
                
                
                <div id="itemInfo">
                <span id="nomeP">Nome: {item.produto.nome}</span>
                  <span>Valor: R$ {item.produto.valor}</span>
                  <span>Quantidade: {item.quantidade}</span>
                </div>
                
                <div id="itemButtons">
                  <button><IoMdAddCircle size={20}/></button>
                  <button><FaTrash size={20}/></button>
                </div>
                
            </section>
            
            
          ))} 
          
          <div className="cartTotal">
          
            <div id="carTotalValor">
              <span>Valor total:</span>
              <span>R$ {carrinho.reduce((acc, item) => acc + item.produto.valor * item.quantidade, 0)}</span>
            </div>
          </div>
          <div className="formaPagamento">
            <h4>FORMA DE PAGAMENTO</h4>
            <hr />  
            <div id="pedidosbotoes1">
                <div>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>Pix</MenuItem>
                      <MenuItem value={20}>Débito</MenuItem>
                      <MenuItem value={30}>Crédito</MenuItem>
                    </Select>
                  </FormControl>
                  </Box>
                </div>
            </div>
            

          </div>
         </article>
               
             
        </div>
        
    )
    
}


export default Carrinho;