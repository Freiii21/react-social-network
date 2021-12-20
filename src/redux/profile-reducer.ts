import { ActionsTypes } from "./redux-store";

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
    newPostText: string
    profile: ProfileType | null
}
const initialState:InitialStateProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
    ],
    newPostText: '',
    profile: null
}


const profileReducer = (state:InitialStateProfilePageType = initialState,action: ActionsTypes):InitialStateProfilePageType => {

    switch (action.type) {
        case 'ADD_POST': {
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };

        }
        case 'UPDATE_NEW_POST_TEXT': {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            };
        }
        default:
            return state;
    }
}

export type AddPostActionType = {
    type:'ADD_POST'
}
export type UpdateNewPostTextActionType = {
    type:'UPDATE_NEW_POST_TEXT',
    newText: string
}
export type AddUserProfileAT = {
    type:'SET_USER_PROFILE',
    profile: ProfileType | null
}

export const addPostActionCreator = ():AddPostActionType => {
    return {
        type:'ADD_POST'
    }
};
export const updateNewPostTextActionCreator = (text:string):UpdateNewPostTextActionType => {
    return {
        type:'UPDATE_NEW_POST_TEXT',
        newText:text
    }
};
export const setUserProfile = (profile:ProfileType | null):AddUserProfileAT => {
    return {
        type:'SET_USER_PROFILE',
        profile
    }
};

export default profileReducer;