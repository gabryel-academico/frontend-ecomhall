
import { OutlinedInput, InputLabel, FormControl, FormHelperText, Input, Button, TextField   } from '@mui/material';
import logo2 from "../../assets/logo.svg"
import "./style.css"
function Login() {
    return(
        <div className='container'>
        
        <div className='loginFormulario'>
                <div id='cabecalhoLogin'>
                <img src={logo2} alt="logo" />
                <h2>Faça seu Login</h2>
                </div>
                
                
                    <div>
                        <form action="">
                            <TextField id="outlined-basic" label="Email" variant="outlined" size='small' margin='dense' sx={{
                                width: "100%",
                            }}/>
                            <TextField  id="outlined-basic" label="Senha" variant="outlined" size='small' margin='dense' sx={{
                                width: "100%",
                            }}/>
                        </form>
                    </div>
                    <Button variant="contained" color='inherit' href="#contained-buttons" sx={{
                        width: "100%",
                    }}>
                    Realizar Login
                    </Button>
                
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