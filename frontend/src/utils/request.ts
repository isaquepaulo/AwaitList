import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.jikan.moe/v4"
})

export const SlideApi = axios.create({
    baseURL: "./info.json"
})

export default api;