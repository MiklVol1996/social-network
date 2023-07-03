import axios from "axios";


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96067998-bfa9-4b45-ba54-1e9e7135bd4e',
    }, 
})



