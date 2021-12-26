import {ActionsTypes} from './redux-store';

export type AuthType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
};

const initialState:AuthType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
}

export type SetUserDataAT = {
    type: 'SET_USER_DATA',
    data: {
        userId: number
        email: string
        login: string
    }
}

export const setAuthUserData = (userId:number, email:string, login:string):SetUserDataAT => {
    return {
        type: 'SET_USER_DATA',
        data: {
            userId,
            email,
            login
        }
    }
}