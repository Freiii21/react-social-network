import { ActionsTypes } from "./redux-store";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type InitialStateProfilePageType = {
    posts: PostType[]
    newPostText: string
}
const initialState:InitialStateProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
    ],
    newPostText: '',
}


const profileReducer = (state:InitialStateProfilePageType = initialState,action: ActionsTypes):InitialStateProfilePageType => {

    switch (action.type) {
        case 'ADD-POST': {
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
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }
}

//method #1
export type AddPostActionType = ReturnType<typeof addPostActionCreator>
export type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextActionCreator>

//method #1 (without return type because it has been created above as: ReturnType<typeof addPostActionCreator>)
export const addPostActionCreator = () => {
    return {
        type:'ADD-POST'
    } as const //important addition that says using ADD-POST as a fixed value not as any string
};
export const updateNewPostTextActionCreator = (text:string) => {
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    } as const
};

export default profileReducer;