import { Api } from "../axios-config";
interface IPedido {
    valor: number;
    frete: number;
    idEndereço: number;

}
const criarPedidos = async (pedido: IPedido) => 
{
    try {

        const { data } = await Api.post(`Produto/ListagemAleatoria`);

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


export const ProdutoService = 
{
    criarPedidos,

    
}
