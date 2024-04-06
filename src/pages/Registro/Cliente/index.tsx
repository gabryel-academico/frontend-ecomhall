
import { TextField,Button } from "@mui/material";

import "../style.css"
import logo2 from "../../../assets/logo2.png"

function handleClick(){
    alert("TESTE")
}

function RegCliente(){
    return(
        <div className="container-reg">
           <div className="card-reg">
           <div id="cabecalhoReg">
               <img src={logo2} alt="logo" />
               <h2>Faça seu registro!</h2>
           </div>
           <div id="form-reg">
            
               <form action="">
                   <TextField id="outlined-basic" label="Nome" variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="CPF" variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="Senha" variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   
               </form>
               
           </div>
           <Button variant="contained" color='inherit' href="#contained-buttons" sx={{
            width: "100%",
           }} onClick={handleClick}>
           Realizar Cadastro
           </Button>
            
                
                  
            </div>

        </div>
    )
}


export default RegCliente;