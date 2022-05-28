import {ActionsTypes} from './redux-store';
import {getAuthUserData} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

export type backgroundModeType = "white" | "dark";

type initialStateType = {
    initialized: boolean
    backgroundMode: backgroundModeType
}
const initialState:initialStateType = {
    initialized: false,
    backgroundMode: "dark"
}
// type initialStateType = typeof initialState;

export const appReducer = (state = initialState, action:ActionsTypes):initialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}
export type SetInitializedAT = ReturnType<typeof initializedSuccessAC>;
const initializedSuccessAC = () => ({type: SET_INITIALIZED} as const);

export const initializeApp = () => (dispatch: any) => {
    dispatch(getAuthUserData())
        .then(()=>{
            dispatch(initializedSuccessAC())
        })

}