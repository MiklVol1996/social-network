import { instance } from "./apiSettings"

export const navBarApi = {
    async getNewMessagesList(){
       const response =  await instance.get<number>('dialogs/messages/new/count');
       return response.data;
    },
}