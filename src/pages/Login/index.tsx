
import { OutlinedInput, InputLabel, FormControl, FormHelperText, Input, Button, TextField   } from '@mui/material';
import logo2 from "../../assets/logo.svg"
import "./style.css"
import { useState } from 'react';
import { ILogin, LoginService } from '../../shared/Services/api/Login/LoginService';


function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const onSubimit = (event : React.FormEvent<HTMLFormElement>) =>
        {
            event.preventDefault();

            console.log("massa");
    
            const credenciais : ILogin = 
            {
                email,
                senha
            }
    
            LoginService.login(credenciais).then((result) => 
            {
                if(result instanceof Error)
                {
                    console.error(result.message);
                    return;
                }
    
                localStorage.setItem("ACESS_TOKEN", result );
                console.log(result);

            });
        }

    return(

        


        <div className='container'>
        
        <div className='loginFormulario'>
                <div id='cabecalhoLogin'>
                <img src={logo2} alt="logo" />
                <h2>Faça seu Login</h2>
                </div>
                
                
                    <div>
                        <form onSubmit={(event: React.ChangeEvent<HTMLFormElement>) => onSubimit(event)}>

                            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' margin='dense' onChange={(e) => setEmail(e.target.value)} sx={{
                                width: "100%",
                            }}/>
                            <TextField  id="outlined-basic" label="Senha" variant="outlined" size='small' margin='dense' type="password" onChange={(e) => setSenha(e.target.value) } sx={{
                                width: "100%",
                            }}/>

                            <Button type= "submit" variant="contained" color='inherit'  sx={{
                                width: "100%",
                            }}>
                            Realizar Login
                            </Button>

                        </form>
                    </div>
                
                    <h4>Ainda não possui uma conta? Crie agora.</h4>
                    
                    <div className="registro">
                    <Button variant="contained" color='inherit' href='/registro/cliente' size='small' sx={{
                      width: "40%",
                    }}>Cliente</Button>
                    <Button variant="contained" color='inherit' href='/registro/varejista' size="small" sx={{
                        width: "40%",
                    }}>Varejista</Button>
                    </div>
                </div>
                
            </div>
        
    )
}

export default Login;