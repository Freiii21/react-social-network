import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, {
    AddPostActionType,
    AddUserProfileAT,
    SetStatusAT
} from './profile-reducer';
import dialogsReducer, {SendMessageActionType} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
    FollowAT,
    SetCurrentPageAT,
    ToggleIsFetchingAT,
    SetTotalUsersCountAT,
    SetUsersAT,
    UnfollowAT, ToggleFollowingProgressAT
} from './users-reducer';
import {authReducer, SetUserDataAT} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'
import {appReducer, SetInitializedAT} from './app-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ActionsTypes = AddPostActionType
    | SendMessageActionType | FollowAT | UnfollowAT | SetUsersAT
    | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT | AddUserProfileAT | SetUserDataAT
    | ToggleFollowingProgressAT | SetStatusAT | SetInitializedAT


export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, ActionsTypes>

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

//we can what contain the store in Console, just type "store.getState()"