import { Button, TextField } from "@mui/material";

import logo2 from "../../../assets/logo2.png"
import "../style.css"
import { useState } from "react";
import { CredenciaisService, ICredenciais } from "../../../shared/Services/api/Registro/CredenciaisService";
import { IVarejista, VarejistaService } from "../../../shared/Services/api/Registro/Varejista/VarejistaService";


function RegVarejista()
{
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const onSubimit = (event : React.FormEvent<HTMLFormElement>) =>
    {
        event.preventDefault();
        console.log(cnpj)
        console.log(cnpj.length)
        if(cnpj.length !== 14 )
        {
            console.log("Digite um cnpj válido!");
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

            const varejista : IVarejista = 
            {
                cnpj,
                idCredenciais: result
            }

            VarejistaService.create(varejista).then((result) =>
            {
                if(result instanceof Error)
                {
                    console.error(result.message);
                    return;
                }
                limparCampos();
                console.log("Cadastrado com sucesso!");
            })
            
        })

        
    }

    const limparCampos = () =>
    {
        setNome("");
        setCnpj("");
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
                   <TextField id="outlined-basic" label="Nome" value={nome ?? ""} onChange={(e) => setNome(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="CNPJ" value={cnpj ?? ""} onChange={(e) => setCnpj(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="Email" value={email ?? ""} onChange={(e) => setEmail(e.target.value)} variant="outlined" margin="dense" size="small" sx={{
                    width: "100%",
                   }}/>
                   <TextField id="outlined-basic" label="Senha" value={senha ?? ""} onChange={(e) => setSenha(e.target.value)} variant="outlined" margin="dense" size="small" type="password"sx={{
                    width: "100%",
                   }}/>
                   
                    <Button 
                        variant="contained"
                        type="submit" 
                        color='inherit' 
                        sx={{ width: "100%" }} 
                    >
                        Realizar Cadastro
                    </Button>
               </form>
               
           </div>
            
            </div>

        </div>
    )
}

export default RegVarejista;