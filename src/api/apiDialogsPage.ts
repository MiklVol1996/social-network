import { instance } from "./apiSettings";
import { Dialog, privateMessage } from "../types/types";

export const apiDialogs = {
    async getDialogs(){
        const response = await instance.get<Array<Dialog>>('/dialogs');
        return response;
    },
    async getMessages(id: number, portion: number | undefined, pageSize: number){
        const response = await instance.get(`dialogs/${id}/messages?page=${portion}&count=${pageSize}`);
        return response.data;
    },
    async sendMessage(id: number, body: string){
        const response = await instance.post(`dialogs/${id}/messages`, {body: body});
        return response;
    }
}