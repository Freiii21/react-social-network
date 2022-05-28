import {ActionsTypes} from './redux-store';
import {getAuthUserData} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';
const SET_APP_SETTINGS = 'SET_APP_SETTINGS';

export type backgroundModeType = "white" | "dark";
export type appLogoType = "react" | "underwater";

type initialStateType = {
    initialized: boolean
    backgroundMode: backgroundModeType
    appLogo: appLogoType
}
const initialState:initialStateType = {
    initialized: false,
    backgroundMode: "white",
    appLogo: "react"
}

export const appReducer = (state = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case SET_APP_SETTINGS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}
export type SetInitializedAT = ReturnType<typeof initializedSuccessAC>;
export type SetBackgroundModeAT = ReturnType<typeof setAppSettingsAC>;

const initializedSuccessAC = () => ({type: SET_INITIALIZED} as const);
const setAppSettingsAC = (payload:{backgroundMode?:backgroundModeType, appLogo?:appLogoType}) =>
    ({type: SET_APP_SETTINGS, payload} as const);


export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(()=>{
            dispatch(initializedSuccessAC())
        })
}
export const setAppSettingsTC = (payload:{backgroundMode?:backgroundModeType, appLogo?:appLogoType}) =>
    (dispatch: any) => {
        dispatch(setAppSettingsAC(payload))
}