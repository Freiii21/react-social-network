import {ActionsTypes, PostsType, ProfilePageType} from './store';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
    ],
    newPostText: 'default text from state...',
}


const profileReducer = (state:ProfilePageType = initialState,action: ActionsTypes) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            return state;
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