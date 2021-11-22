export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type MessagesType = {
    id: number
    message: string
    owner: string
    avatar: string
}
export type MessagesPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type FriendsType = {
    id: number
    name: string
    avatar: string
}
export type SidebarType = {
    friends: FriendsType[]
}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}

//method #1
type AddPostActionType = ReturnType<typeof addPostActionCreator>

//method #2
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    message: string
}

//here we can use ReturnType<typeof addPostActionCreator> instead of AddPostActionType
export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post!', likesCount: 11},
            ],
            newPostText: 'it-kamasutra',
        },
        messagesPage: {
            dialogs: [
                {id: 1, name: 'Dimych', avatar: '/images/Redux/State/dialogs/Dimych.jpg'},
                {id: 2, name: 'Andrey', avatar: '/images/Redux/State/dialogs/Andrey.jpg'},
                {id: 3, name: 'Sveta', avatar: '/images/Redux/State/dialogs/Sveta.jpg'},
                {id: 4, name: 'Sasha', avatar: '/images/Redux/State/dialogs/Sasha.jpg'},
                {id: 5, name: 'Viktor', avatar: '/images/Redux/State/dialogs/Viktor.jpg'},
                {id: 6, name: 'Valera', avatar: '/images/Redux/State/dialogs/Valera.jpg'},
            ],
            messages: [
                {id: 1, message: 'hi', owner: 'me', avatar: '/images/Redux/State/messages/me.jpg'},
                {id: 2, message: 'Yo', owner: 'you', avatar: '/images/Redux/State/messages/you.jpg'},
                {
                    id: 3,
                    message: 'How is your it-kamasutra?',
                    owner: 'me',
                    avatar: '/images/Redux/State/messages/me.jpg'
                },
                {id: 4, message: 'Good enough, dude!', owner: 'you', avatar: '/images/Redux/State/messages/you.jpg'},
            ],
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Keanu', avatar: '/images/Redux/State/friends/Keanu.jpg'},
                {id: 2, name: 'Scarlett', avatar: '/images/Redux/State/friends/Scarlett.jpg'},
                {id: 3, name: 'Johnny', avatar: '/images/Redux/State/friends/Johnny.jpg'},
                {id: 4, name: 'Rachel', avatar: '/images/Redux/State/friends/Rachel.jpg'},
                {id: 5, name: 'Ross', avatar: '/images/Redux/State/friends/Ross.jpg'},
            ]
        },
    },
    _callSubscriber(_state: StateType) {
        console.log('State has changed. ');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE'){
            let newMessage: MessagesType = {
                id: 99,
                message: action.message,
                owner: 'me',
                avatar: '/images/Redux/State/messages/me.jpg',
            };
            this._state.messagesPage.messages.push(newMessage);
            this._callSubscriber(this._state);
        }
    }
}

//method #1 (without return type because it has been created above as: ReturnType<typeof addPostActionCreator>)
export const addPostActionCreator = () => {
    return {
        type:'ADD-POST'
    } as const //important addition that says using ADD-POST as a fixed value not as any string
}

//method #2 (with return type that created above as: UpdateNewPostTextActionType)
export const updateNewPostTextActionCreator = (text:string):UpdateNewPostTextActionType => {
    return {
        type:'UPDATE-NEW-POST-TEXT',
        newText:text
    }
}

export const sendMessageActionCreator = (text:string):SendMessageActionType => {
    return {
        type:'SEND-MESSAGE',
        message:text
    }
}

export default store;
