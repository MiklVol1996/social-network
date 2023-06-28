import axios from "axios";
import type { LoginDataType, ProfileTypeWithoutPhotos } from "../types/types";


let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96067998-bfa9-4b45-ba54-1e9e7135bd4e',
    }, 

})

 type authMeType = {
    data: { 
    id: number,
    login: string,
    email: string,
 },
 fieldsErrors: Array<string>,
 messages: Array<string>,
 resultCode: ResultCodeEnum,
}

type LoginResponceType = {
    resultCode: ResultCodeEnum | ResultCodeWithCaptchaEnum,
    messages: Array<string>,
    data: {
      userId: number,
    }
}

export enum ResultCodeEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeWithCaptchaEnum {
    CaptchaIsRequired = 10,
}

export const api = {
    async authMe(){
        const response = await instance.get<authMeType>(`auth/me`);
        return response.data;
    },
    async getProfile(id: number) {
        const response = await instance.get('profile/' + id);
        return response.data;
    },
    async removeFriend(id: number) {
        const response = await instance.delete('follow/' + id);
        return response.data;
    },
    async addFriend(id: number) {
        const response = await instance.post('follow/' + id);
        return response.data;
    },
    async getUsers(currentPage: number, pageSize: number) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async getStatus(id: number) {
        const response = await instance.get('profile/status/' + id);
        return response.data;
    },
    async updateStatus(status: string) {
        const response = await instance.put('profile/status', { status: status });
        return response.data;
    },
    async login(data: LoginDataType) {
        const response = await instance.post<LoginResponceType>('auth/login', data);
        return response.data;
    },
    async logout() {
        const response = await instance.delete('auth/login');
        return response.data;
    },
    async updateAva(data: any) {
        const formData = new FormData();
        formData.append('image', data);
        const response = await instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    },
    async updatePforileData(data: ProfileTypeWithoutPhotos) {
        const response = await instance.put('profile/', data);
        return response.data;
    },
    async getCaptchaURL() {
        const response = await instance.get('security/get-captcha-url');
        return response.data.url;
    }
}



