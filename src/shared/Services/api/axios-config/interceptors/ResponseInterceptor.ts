import { AxiosResponse } from 'axios';

//tratar os dados de sucesso (caso necessário)
export const responseInterceptor = (response: AxiosResponse) => {
  return response;
}
