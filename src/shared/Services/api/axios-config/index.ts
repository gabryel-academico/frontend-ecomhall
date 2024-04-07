import axios from 'axios';

import { Environment } from '../../../environment';
import { responseInterceptor, errorInteceptor } from './interceptors';

// export interface IPaginacao {
//     totalCount: number,
//     pageSize: number,
//     currentPage: number,
//     totalPages: number,
//     hasNext: boolean,
//     hasPrevious: boolean
// }

const Api = axios.create({
    baseURL: Environment.URL_API,//URL base
});

////@ts-expect-error
// Api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(localStorage.getItem("ACESS_TOKEN"))}`

Api.interceptors.response.use(
    (response) => responseInterceptor(response),
    (error) => errorInteceptor(error),
);

export { Api };