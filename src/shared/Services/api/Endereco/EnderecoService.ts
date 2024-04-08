import { Api } from "../axios-config";
export interface IEndereco {
    rua: string;
    numero: number;
    complemento: string;
    cep: string;
    cidade: string;
    estado : string;
    bairro: string;
}



const Create = async (endereco: IEndereco) => 
{
    try {

        const { data } = await Api.post(`Endereco`, endereco);

        if (data) {
            return data;
        }

        return new Error('Erro ao cadastrar endereço');
    } catch (error) {
        console.error(error);

        //mostrar a mensagem que o back end retornou, caso não tenha retorna uma mensagem padrão
        return new Error((error as { message: string }).message || 'Erro ao cadastrar endereço');
    }
}


export const EnderecoService = 
{
    Create
}
