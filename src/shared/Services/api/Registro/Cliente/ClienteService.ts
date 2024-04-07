import { Api } from "../../axios-config";

export interface ICliente 
{
    CPF: string;
    idCredenciais: number;
}

const create = async (cliente: any) =>
{
    try {

        const { data } = await Api.post(`Cliente`, cliente);

        if (data) {
            return data;
        }

        return new Error('Erro ao cadastrar cliente');
    } catch (error) {
        console.error(error);

        //mostrar a mensagem que o back end retornou, caso não tenha retorna uma mensagem padrão
        return new Error((error as { message: string }).message || 'Erro ao cadastrar cliente');
    }
}

export const ClienteService =
{
    create
}