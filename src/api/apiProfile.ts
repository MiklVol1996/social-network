import type { ProfileTypeWithoutPhotos, ProfileType, ResponseType } from "../types/types";
import { instance } from "./apiSettings";


export const apiProfile = {

    async getProfile(id: number) {
        const response = await instance.get<ProfileType>('profile/' + id);
        return response.data;
    },
    async getStatus(id: number) {
        const response = await instance.get<string>('profile/status/' + id);
        return response.data;
    },
    async updateStatus(status: string) {
        const response = await instance.put<ResponseType>('profile/status', { status: status });
        return response.data;
    },
    async updateAva(data: any) {
        const formData = new FormData();
        formData.append('image', data);
        const response = await instance.put<ResponseType<PhotoDataType>>('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    },
    async updatePforileData(data: ProfileTypeWithoutPhotos) {
        const response = await instance.put<ResponseType>('profile/', data);
        return response.data;
    },
}

type PhotoDataType = {
    photos: {
        small: string,
        large: string,
    }
}



