import { Api } from "../axios-config";

const listagemProdutos = async () => 
{
    try {

        const { data } = await Api.get(`Produto/ListagemAleatoria`);

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
const listagemProdutosNome = async (nome: string) => 
    {
        try {
    
            const { data } = await Api.get(`Produto/ListagemAleatoria`);
    
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
    listagemProdutos,
    listagemProdutosNome
    
    
}
