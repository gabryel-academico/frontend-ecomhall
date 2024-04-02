
import { OutlinedInput, InputLabel, FormControl, FormHelperText, Input, Button   } from '@mui/material';
import logo2 from "../../assets/logo.svg"

function Registro() {
    return(
        <div >
           
                    
                
                <div >
                <div >
                    <img src={logo2} alt="logo" />
                    <h2>Faça seu Registro</h2>
                </div>
                
                    <FormControl>
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" aria-describedby="my-helper-text" color='info' />
                    </FormControl>
                    <FormControl>
                    <InputLabel htmlFor="email">Senha</InputLabel>
                    <Input/>
                    </FormControl>
                    <Button variant="contained" color='inherit' href="#contained-buttons">
                    Realizar Login
                    </Button>
                    <span>Ainda não possui uma conta? <a href="">Registre-se</a></span>
                    
                </div>
            </div>
        
    )
}

export default Registro;