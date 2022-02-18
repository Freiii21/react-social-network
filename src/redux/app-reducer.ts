import {ActionsTypes} from './redux-store';
import {Dispatch} from 'redux';
import {getAuthUserData} from './auth-reducer';

const SET_INITIALIZED = 'SET_INITIALIZED';

const initialState = {
    initialized: false
}

type initialStateType = typeof initialState;

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