import {combineReducers, createStore } from "redux";
import profileReducer, {AddPostActionType, AddUserProfileAT, UpdateNewPostTextActionType} from './profile-reducer';
import dialogsReducer, {SendMessageActionType, UpdateNewMessageTextActionType} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {
    FollowAT,
    SetCurrentPageAT,
    SetIsFetchingAT,
    SetTotalUsersCountAT,
    SetUsersAT,
    UnfollowAT
} from './users-reducer';
import {authReducer, SetUserDataAT} from './auth-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
    | SendMessageActionType | UpdateNewMessageTextActionType | FollowAT | UnfollowAT | SetUsersAT
    | SetCurrentPageAT | SetTotalUsersCountAT | SetIsFetchingAT | AddUserProfileAT | SetUserDataAT

export const store = createStore(rootReducer);

//@ts-ignore
window.store = store;

//we can what contain the store in Console, just type "store.getState()"