import { AxiosError } from 'axios';

//Tratamento de erros:
export const errorInteceptor = (error: AxiosError) => {

  if (error.message == 'Network Error') {// erro de conexão
    return Promise.reject(new Error('Erro ao se comunicar com o servidor, verifique sua conexão com a internet, caso persista entrar em contato com o suporte da Zdoc.'));
  }
  if (error.response?.status == 400) {// erro 400 (algo informado errado)
    return Promise.reject(new Error((error.response?.data) as string));
  }
  if (error.response?.status == 401) {// erro de autenticação
    return Promise.reject(new Error('Tempo excedido, é necessário refazer o login'));
  }
  if (error.response?.status == 403) {// está autenticado mas não tem permissão
    return Promise.reject(new Error('Você não possuí permissão para realizar essa função'));
  }
  if (error.response?.status == 404) {// erro 404
    return Promise.reject(new Error((error.response?.data) as string));
  }
  if (error.response?.status == 500) {// erro 500
    return Promise.reject(new Error('Erro interno do servidor'));
  }

  //se o erro não passar por nenhuma das condições vai ter a resposta no service
  return Promise.reject(error);
}