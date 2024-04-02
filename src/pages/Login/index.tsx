
import { OutlinedInput, InputLabel, FormControl, FormHelperText, Input, Button, TextField   } from '@mui/material';
import logo2 from "../../assets/logo.svg"
import "./style.css"
function Login() {
    return(
        <div className='container'>
        
        <div className='loginFormulario'>
            
                <img src={logo2} alt="logo" />
                <h2>Faça seu Login</h2>
                
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                    <TextField  id="outlined-basic" label="Senha" variant="outlined" sx={{
                        marginBottom: '1rem',
                        marginTop: '1rem',
                    }}/>
                    <Button variant="contained" color='inherit' href="#contained-buttons" sx={{
                        marginBottom: '1rem',
                    }}>
                    Realizar Login
                    </Button>
                
                    <h4>Ainda não possui uma conta?</h4>
                    <div className="registro">
                    <Button variant="contained" color='inherit'>Cliente</Button>
                    <Button variant="contained" color='inherit' href='/registro'>Varejista</Button>
                    </div>
                </div>
                
            </div>
        
    )
}

export default Login;