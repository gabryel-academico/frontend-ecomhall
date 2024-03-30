
import { OutlinedInput, InputLabel, FormControl, FormHelperText, Input, Button   } from '@mui/material';
import logo2 from "../../assets/logo.svg"
import "./style.css"
function Login() {
    return(
        <div className='container'>
           
                    
                
                <div className='loginFormulario'>
                <img src={logo2} alt="logo" />
                <h2>Realize Seu login</h2>
                    <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" color='info' />
                    </FormControl>
                    <FormControl>
                    <InputLabel htmlFor="email">Senha</InputLabel>
                    <Input id="senha" aria-describedby="my-helper-text" />
                    </FormControl>
                    <Button variant="contained" color='inherit' href="#contained-buttons" id='botao'>
                    Realizar Login
                    </Button>
                    
                </div>
            </div>
        
    )
}

export default Login;