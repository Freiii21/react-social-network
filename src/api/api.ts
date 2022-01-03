import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "419c229b-43d4-438c-9dc1-973ee316752b"
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },
    unfollowUser (userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },
    followUser (userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    authUser () {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    getUserProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    }
}