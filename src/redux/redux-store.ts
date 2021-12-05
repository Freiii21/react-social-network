import {combineReducers, createStore } from "redux";
import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from './profile-reducer';
import dialogsReducer, {SendMessageActionType, UpdateNewMessageTextActionType} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer, {FollowAT, SetUsersAC, UnfollowAT} from './users-reducer';

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>;

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
    | SendMessageActionType | UpdateNewMessageTextActionType | FollowAT | UnfollowAT | SetUsersAC

export const store = createStore(rootReducer);