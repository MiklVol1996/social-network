import type { LoginArgumentsType } from "../types/types";
import { instance } from "./apiSettings";
import { ResultCodeEnum, ResultCodeWithCaptchaEnum, ResponseType } from "../types/types";


export const apiLogin = {
    async authMe() {
        const response = await instance.get<ResponseType<AuthMeDataType>>(`auth/me`);
        return response.data;
    },
    async login(data: LoginArgumentsType) {
        const response = await instance.post<ResponseType<LoginDataType, EnumWithCaptcha>>('auth/login', data);
        return response.data;
    },
    async logout() {
        const response = await instance.delete<ResponseType>('auth/login');
        return response.data;
    },
    async getCaptchaURL() {
        const response = await instance.get<CaptchaDataType>('security/get-captcha-url');
        return response.data.url;
    }
}

type AuthMeDataType = {
    id: number,
    login: string,
    email: string,
}

type CaptchaDataType = {
    url: string,
}

type LoginDataType = {
    userId: number,
}

type EnumWithCaptcha = ResultCodeEnum | ResultCodeWithCaptchaEnum;



