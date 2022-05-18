import { ActionsTypes } from "./redux-store";
import {Dispatch} from 'redux';
import {profileAPI, usersAPI} from '../api/api';

export type PostType = {
    id: number
    message: string
    likesCount: number
    isLikedIt: boolean
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
        large?: string
    }
}
export type InitialStateProfilePageType = {
    posts: PostType[]
    profile: ProfileType | null
    status: string
}
const initialState:InitialStateProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12, isLikedIt: false},
        {id: 2, message: 'It\'s my first post!', likesCount: 77, isLikedIt: false},
    ],
    profile: null,
    status: ""
}
let postId = 2;

const profileReducer = (state:InitialStateProfilePageType = initialState,action: ActionsTypes):InitialStateProfilePageType => {
    switch (action.type) {
        case 'ADD_POST': {
            postId += 1;
            let newPost: PostType = {
                id: postId,
                message: action.newPostBody,
                likesCount: 0,
                isLikedIt: false
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        }
        case 'DELETE_POST':{
            return  {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.postId)]
            }
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
        case 'SAVE_PHOTO': {
            if (state.profile){
                return {
                    ...state,
                    profile: {
                        ...state.profile,
                        photos:{
                            ...state.profile.photos,
                            large: action.photo
                        }}
                }
            }
            return state;
        }
        case 'HANDLE_LIKE': {
            const postsCopy = state.posts.map(p => p.id !== action.postId ? p
                : {...p,
                    likesCount: action.status ? p.likesCount += 1 : p.likesCount -= 1,
                    isLikedIt: action.status}
            );
            return {
                ...state,
                posts: postsCopy
            }
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
export type DeletePostAT = ReturnType<typeof deletePostAC>;
export type SavePhotoAT = ReturnType<typeof savePhotoSuccessAC>;
export type HandleLikeAT = ReturnType<typeof handleLikeAC>;

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
export const deletePostAC = (postId:number) => {
    return {
        type:'DELETE_POST',
        postId
    } as const;
};
export const savePhotoSuccessAC = (photo:string) => {
    return {
        type:'SAVE_PHOTO',
        photo
    } as const;
};
export const handleLikeAC = (postId:number, status:boolean) => {
    return {
        type:'HANDLE_LIKE',
        postId,
        status
    } as const;
};

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await usersAPI.getUserProfile(+userId);
    dispatch(setUserProfile(response));
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(+userId);
    dispatch(setStatus(response));
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (photo: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(photo);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccessAC(response.data.photos.large));
    }
}

export default profileReducer;