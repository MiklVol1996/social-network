import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '96067998-bfa9-4b45-ba54-1e9e7135bd4e',
    },

})

export const api = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(id){
        return instance.get('profile/' + id)
        .then(response => {
            return response.data;
        })
    },
    removeFriend(id){
        return instance.delete('follow/' + id)
        .then(response => {
            return response.data;
        })
    },
    addFriend(id){
        return instance.post('follow/' + id)
        .then(response => {
            return response.data;
        })
    },
    getUsers(currentPage, pageSize){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        })
    },
    getStatus(id){
        return instance.get('profile/status/' + id)
        .then(response => response.data);
    },
    updateStatus(status){
        return instance.put('profile/status', {status: status})
        .then(response => response.data);
    }
}

