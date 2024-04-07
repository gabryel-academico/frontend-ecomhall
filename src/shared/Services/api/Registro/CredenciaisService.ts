import { Api } from "../axios-config"; 

export interface ICredenciais 
{
    email: string;
    senha: string;
    nome: string;
}

const create = async (credenciais: any) =>
{
    try {

        const { data } = await Api.post(`Credenciais`, credenciais);

        if (data) {
            return data;
        }

        return new Error('Erro ao cadastrar credenciais');
    } catch (error) {
        console.error(error);

        //mostrar a mensagem que o back end retornou, caso não tenha retorna uma mensagem padrão
        return new Error((error as { message: string }).message || 'Erro ao cadastrar credenciais');
    }
}

export const CredenciaisService = 
{
    create
}