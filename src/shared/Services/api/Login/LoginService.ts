import { promises } from "dns";
import { Api } from "../axios-config";

export interface ILogin 
{

    email:String;
    senha:String;

}

const login = async (login:ILogin): Promise< string | Error> => 
    {
        try {
    
            const { data } = await Api.post(`Login`, login);
    
            if (data) {
                return data;
            }
    
            return new Error('Erro ao consultar produtos');
        } catch (error) {
            console.error(error);
    
            //mostrar a mensagem que o back end retornou, caso não tenha retorna uma mensagem padrão
            return new Error((error as { message: string }).message || 'Erro ao consultar produtos');
        }
    }


export const LoginService = 
{
    login
}