import { TextField,Button } from "@mui/material";

import "../style.css"
import logo2 from "../../../assets/logo2.png"
import React, { useState } from "react";
import { CredenciaisService } from "../../../shared/Services/api/Registro/CredenciaisService";
import { ICredenciais } from "../../../shared/Services/api/Registro/CredenciaisService";
import { ClienteService, ICliente } from "../../../shared/Services/api/Registro/Cliente/ClienteService";



function RegCliente(){

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const onSubimit = (event : React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();

        if(cpf.length !== 13)
        {
            console.log("Digite um CPF válido!");
            return;
        }
        if(nome === "" || email === "" || senha === "")
        {
            console.log("Preencha todos os campos!");
            return;
        }

        const credenciais : ICredenciais = 
        {
            email,
            senha,
            nome
        }

        CredenciaisService.create(credenciais).then((result) => 
        {
            if(result instanceof Error)
            {
                console.error(result.message);
                return;
            }

            const cliente : ICliente = 
            {
                CPF: cpf,
                idCredenciais: result
            }

            ClienteService.create(cliente).then((result) => 
            {
                if(result instanceof Error)
                {
                    console.error(result.message);
                    return;
                }
                
                limparCampos();
                console.log(result);
            });
        });
    }

    const limparCampos = () =>
    {
        setNome("");
        setCpf("");
        setEmail("");
        setSenha("");
    }

    return(
        <div className="container-reg">
           <div className="card-reg">
           <div id="cabecalhoReg">
               <img src={logo2} alt="logo" />
               <h2>Faça seu registro!</h2>
           </div>
           <div id="form-reg">
            
               <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => onSubimit(event)}>
                   <TextField id="outlined-basic" label="Nome" onChange={(e) => setNome(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="CPF" onChange={(e) => setCpf(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="Email" onChange={(e) => setEmail(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="Senha" onChange={(e) => setSenha(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   
                    <Button 
                        type="submit" 
                        variant="contained"  
                        color='inherit'  
                        sx={{ width: "100%", }}
                        >
                        Realizar Cadastro
                    </Button>
               </form>
               
           </div>
            
                
            </div>

        </div>
    )
}


export default RegCliente;