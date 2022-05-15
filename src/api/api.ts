import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY" : "419c229b-43d4-438c-9dc1-973ee316752b",
        // "Access-Control-Allow-Origin": "*"
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
    getUserProfile(userId: number){
        return profileAPI.getUserProfile(userId);
    },
}

export const profileAPI = {
    getUserProfile(userId: number){
        return instance.get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data
            });
    },
    updateStatus(status: string){
        return instance.put(`profile/status`, {status})
            .then(response => {
                return response.data
            });
    },
    savePhoto(photo: File){
        const formData = new FormData();
        formData.append("inage", photo);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response.data
            });
    }
}

export const authAPI = {
    me () {
        return instance.get('auth/me')
            .then(response => response.data)
    },
    login (email: string, password: string, rememberMe: boolean = false, captcha: string | undefined) {
        return instance.post('auth/login', {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete('auth/login')
    },
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get('security/get-captcha-url')
            .then(response => response.data)
    },
}