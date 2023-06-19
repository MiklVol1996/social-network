import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96067998-bfa9-4b45-ba54-1e9e7135bd4e',
    },

})

export const api = {
    async authMe() {
        const response = await instance.get(`auth/me`);
        return response.data;
    },
    async getProfile(id) {
        const response = await instance.get('profile/' + id);
        return response.data;
    },
    async removeFriend(id) {
        const response = await instance.delete('follow/' + id);
        return response.data;
    },
    async addFriend(id) {
        const response = await instance.post('follow/' + id);
        return response.data;
    },
    async getUsers(currentPage, pageSize) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },
    async getStatus(id) {
        const response = await instance.get('profile/status/' + id);
        return response.data;
    },
    async updateStatus(status) {
        const response = await instance.put('profile/status', { status: status });
        return response.data;
    },
    async login(data) {
        const response = await instance.post('auth/login', data);
        return response.data;
    },
    async logout() {
        const response = await instance.delete('auth/login');
        return response.data;
    },
    async updateAva(data){
        const formData = new FormData();
        formData.append('image', data);
        const response = await instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        return response.data;
    }
}

