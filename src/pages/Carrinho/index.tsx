import { useContext } from "react";
import { CartContext } from "../../context/carrinhoContext";

import { FaTrash } from "react-icons/fa";
import { IoMdAddCircle } from "react-icons/io";



import { Box, Button, FormControl, InputLabel, MenuItem, } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "./style.css"
import React from "react";
import { useState } from "react";

import { EnderecoService, IEndereco } from "../../shared/Services/api/Endereco/EnderecoService";



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



function Carrinho(){
  
  //dropdown
  const [age, setAge] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);

  };
  //pop-up
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  //adicionar endereço
  const [rua, setRua] = useState('')
  const [numero, setNumero] = useState(0)
  const [cep, setCep] = useState('')
  const [complemento, setComplemento] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [bairro, setBairro] = useState('')

  //formas de pagamento
  

  const [idEndereco, setIdEndereco] = useState(0)
  function  handleClickAdress(){
    const endereco: IEndereco = {
      rua,
      numero,
      complemento,
      cep,
      cidade,
      estado,
      bairro
    }
    console.log(endereco)
    EnderecoService.Create(endereco).then((result) => {
      
      if(result instanceof Error)
      {
        alert(result.message)
      }
      else
      {
         setIdEndereco(result)
         console.log(result)
      }
    })

    
    setOpen(false);
  }

  function handleClickFinal(){
      
  }

    //contexxto
    const { adicionarQuantidade,carrinho,removerProduto } = useContext(CartContext);
    
    
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
                  <span>Valor: R$ {item.produto.preco}</span>
                  <span>Quantidade: {item.quantidade}</span>
                </div>
                
                <div id="itemButtons">
                  <button onClick={()=>{adicionarQuantidade(item.produto.id)}}><IoMdAddCircle size={20}/></button>
                  <button onClick={()=>{removerProduto(item.produto.id)}}><FaTrash size={20}/></button>
                </div>
                
            </section>
            
            
          ))} 
          
          <div className="cartTotal">
          
            <div id="carTotalValor">
              <span>Valor total:</span>
              <span>R$ {carrinho.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0)}</span>
            </div>
          </div>
          <div className="formaPagamento">
            <h4>FORMA DE PAGAMENTO</h4>
            <hr />  
            <div id="pedidosbotoes1">
                
                  <Box sx={{ width: "40%", margin: "1rem" }}>
                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" size="small" >Pagamento</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Pagamento"
                      onChange={handleChange}
                      size="small"
                    >
                      <MenuItem value={10}>Pix</MenuItem>
                      <MenuItem value={20}>Débito</MenuItem>
                      <MenuItem value={30}>Crédito</MenuItem>
                    </Select>
                  </FormControl>
                  </Box>
                
                <Button variant="contained" color="inherit" size="small" sx={{
                  margin: "1rem"
                }}
                onClick={handleClickOpen}
                >Adicionar Endereço</Button>

              {/*POP-UP */}
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Endereço</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="rua"
                    label="Rua"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setRua(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="numero"
                    label="Número"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setNumero(Number(e.target.value))}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="complemento"
                    label="Complemento"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setComplemento(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="bairro"
                    label="Bairro"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setBairro(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="cep"
                    label="CEP"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setCep(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="cidade"
                    label="Cidade"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setCidade(e.target.value)}
                  />
                  
                  <TextField
                    autoFocus
                    margin="dense"
                    id="estado"
                    label="Estado"
                    type="text"
                    size="small"
                    fullWidth
                    onChange={(e) => setEstado(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button color="inherit" onClick={handleClose}>Cancelar</Button>
                  <Button  onClick={handleClickAdress}>Salvar</Button>
                </DialogActions>
              </Dialog>


            </div>
            <Button
            variant="contained" 
            color="inherit" 
            size="small"
            sx={{
              width: "45%",
              margin: "auto",
              marginBottom: "1rem",
            }}
            onClick={handleClickFinal}
            >Finalizar Pedido</Button>

          </div>
          
         </article>
        
             
        </div>
        
    )
    
}


export default Carrinho;