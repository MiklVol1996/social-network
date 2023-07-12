import { instance } from "./apiSettings";
import { ResponseType, UserType, UsersFilter } from "../types/types";


export const apiUsers = {
   
    async removeFriend(id: number) {
        const response = await instance.delete<ResponseType>('follow/' + id);
        return response.data;
    },
    async addFriend(id: number) {
        const response = await instance.post<ResponseType>('follow/' + id);
        return response.data;
    },
    async getUsers(currentPage: number, pageSize: number, filter: UsersFilter) {
        const response = await instance.get<UsersResponseDataType>(
            `users?page=${currentPage}&count=${pageSize}&term=${filter.filter}&friend=${filter.selectValue}`  
            );
        return response.data;
    },
}

type UsersResponseDataType = {
    items: Array<UserType>
    totalCount: number,
    error: string,
}



