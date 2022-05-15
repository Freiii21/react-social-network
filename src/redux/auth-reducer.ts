import {ActionsTypes} from './redux-store';
import {Dispatch} from 'redux';
import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA" as const;
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS" as const;

export type AuthType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    captchaUrl: string
};
const initialState:AuthType = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captchaUrl: ""
}

export const authReducer = (state: AuthType = initialState, action: ActionsTypes): AuthType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}

export type SetUserDataAT = ReturnType<typeof setAuthUserData>;
export type GetCaptchaUrlSuccessAT = ReturnType<typeof getCaptchaUrlSuccess>;

export const setAuthUserData = (userId:number | null, email:string | null, login:string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export const getCaptchaUrlSuccess = (url: string) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {
            captchaUrl:url
        }
    }
}

export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.me();

    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captcha?: string): any => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
        dispatch(getCaptchaUrlSuccess(""));
    } else {
        if (response.data.resultCode === 10){
            dispatch(getCaptchaUrl());
        }
        const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: message}));
    }
}


export const logout = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.logout();

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export const getCaptchaUrl = () => async (dispatch: Dispatch<ActionsTypes>) => {
    const response = await securityAPI.getCaptchaUrl();
    const captcha = response.url;
    dispatch(getCaptchaUrlSuccess(captcha));
}
