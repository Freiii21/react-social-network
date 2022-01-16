import {applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer, {
    AddPostActionType,
    AddUserProfileAT,
    SetStatusAT,
    UpdateNewPostTextActionType
} from './profile-reducer';
import dialogsReducer, {SendMessageActionType, UpdateNewMessageTextActionType} from './dialogs-reducer';
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
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer} from 'redux-form'

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
    | SendMessageActionType | UpdateNewMessageTextActionType | FollowAT | UnfollowAT | SetUsersAT
    | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT | AddUserProfileAT | SetUserDataAT
    | ToggleFollowingProgressAT | SetStatusAT

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

//@ts-ignore
window.store = store;

//we can what contain the store in Console, just type "store.getState()"