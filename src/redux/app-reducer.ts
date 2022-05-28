import {ActionsTypes} from './redux-store';
import {getAuthUserData} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';
const SET_BACKGROUND_MODE = 'SET_BACKGROUND_MODE';

export type backgroundModeType = "white" | "dark";

type initialStateType = {
    initialized: boolean
    backgroundMode: backgroundModeType
}
const initialState:initialStateType = {
    initialized: false,
    backgroundMode: "dark"
}

export const appReducer = (state = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        case SET_BACKGROUND_MODE:
            return {
                ...state,
                backgroundMode: action.mode
            }
        default:
            return state;
    }
}
export type SetInitializedAT = ReturnType<typeof initializedSuccessAC>;
export type SetBackgroundModeAT = ReturnType<typeof setBackgroundModeAC>;

const initializedSuccessAC = () => ({type: SET_INITIALIZED} as const);
const setBackgroundModeAC = (mode:backgroundModeType) => ({type: SET_BACKGROUND_MODE, mode} as const);

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(()=>{
            dispatch(initializedSuccessAC())
        })
}
export const setBackgroundModeTC = (mode:backgroundModeType) => (dispatch: any) => {
    dispatch(setBackgroundModeAC(mode))
}