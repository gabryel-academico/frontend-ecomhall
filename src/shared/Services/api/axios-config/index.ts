import axios from 'axios';

import { Environment } from '../../../environment';
import { responseInterceptor, errorInteceptor } from './interceptors';



const Api = axios.create({
    baseURL: Environment.URL_API,//URL base
});

const accessToken = localStorage.getItem("ACESS_TOKEN");
console.log("Access Token from localStorage:", accessToken);

Api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInteceptor(error),
);

export { Api };