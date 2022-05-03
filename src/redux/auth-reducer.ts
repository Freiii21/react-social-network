import {ActionsTypes} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

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
                ...action.payload,
            };
        default:
            return state;
    }
}

export type SetUserDataAT = {
    type: 'SET_USER_DATA',
    payload: {
        userId: number | null
        email: string | null
        login: string | null
        isAuth: boolean
    }
}

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth: boolean):SetUserDataAT => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}

export const getAuthUserData = () => {
    return (dispatch:Dispatch<ActionsTypes>) => {
        return authAPI.me()
            .then(data => {
                if (data.resultCode === 0){
                    const {id, email, login} = data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            })
    }
}

// export const login = (email: string, password: string, rememberMe: boolean): AppThunkType => {
export const login = (email: string, password: string, rememberMe: boolean): any => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if (res.data.resultCode === 0){
                   dispatch(getAuthUserData());
                } else {
                    debugger
                    const message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login",{_error: message}));
                }
            })
    }
}

export const logout = () => {
    return (dispatch:Dispatch<ActionsTypes>) => {
        authAPI.logout()
            .then(res => {
                if (res.data.resultCode === 0){
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}