import { ActionsTypes } from "./redux-store";
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
}
type ContactsType = {
    facebook: string
    website: null
    vk: string
    twitter: string
    instagram: string
    youtube: null
    github: string
    mainLink: null
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type InitialStateProfilePageType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
}
const initialState:InitialStateProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
    ],
    profile: null,
    status: ""
}


const profileReducer = (state:InitialStateProfilePageType = initialState,action: ActionsTypes):InitialStateProfilePageType => {

    switch (action.type) {
        case 'ADD_POST': {
            let newPost: PostType = {
                id: 5,
                message: action.newPostBody,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        case 'SET_STATUS': {
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export type AddPostActionType = {
    type:'ADD_POST'
    newPostBody: string
}
export type AddUserProfileAT = {
    type:'SET_USER_PROFILE',
    profile: ProfileType | null
}
export type SetStatusAT = {
    type:'SET_STATUS',
    status: string
}

export const addPostActionCreator = (newPostBody: string):AddPostActionType => {
    return {
        type:'ADD_POST',
        newPostBody
    }
};
export const setUserProfile = (profile:ProfileType | null):AddUserProfileAT => {
    return {
        type:'SET_USER_PROFILE',
        profile
    }
};
export const setStatus = (status:string):SetStatusAT => {
    return {
        type:'SET_STATUS',
        status
    }
};

export const getUserProfile = (userId:number) => {
    return (dispatch:Dispatch) => {
        usersAPI.getUserProfile(+userId)
            .then(data => {
                dispatch(setUserProfile(data));
            })
    }
}

export const getStatus = (userId:number) => {
    return (dispatch:Dispatch) => {
        profileAPI.getStatus(+userId)
            .then(data => {
                dispatch(setStatus(data));
            })
    }
}
export const updateStatus = (status: string) => {
    return (dispatch:Dispatch) => {
        profileAPI.updateStatus(status)
            .then(data => {
                if(data.resultCode === 0){
                    dispatch(setStatus(status));
                }
            })
    }
}
export default profileReducer;