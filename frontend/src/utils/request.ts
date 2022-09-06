import axios, { AxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL: "https://api.jikan.moe/v4"
})


export const BASE_URL = "https://api.jikan.moe/v4";


export const SlideApi = axios.create({
    baseURL: "./info.json"
})

export const requestBackend = (config: AxiosRequestConfig) => {

    return axios({ ...config, baseURL: BASE_URL })
}




export default api;