import { Api } from "../../axios-config"; 

export interface IVarejista 
{
    cnpj: string;
    idCredenciais: number;
}

const create = async (varejista: IVarejista) =>
{
    try {

        const { data } = await Api.post(`Varejista`, varejista);

        if (data) {
            return data;
        }

        return new Error('Erro ao cadastrar varejista');
    } catch (error) {
        console.error(error);

        //mostrar a mensagem que o back end retornou, caso não tenha retorna uma mensagem padrão
        return new Error((error as { message: string }).message || 'Erro ao cadastrar varejista');
    }
}

export const VarejistaService = 
{
    create
}
