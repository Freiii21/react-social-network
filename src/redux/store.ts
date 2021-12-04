import profileReducer, {AddPostActionType, UpdateNewPostTextActionType} from './profile-reducer';
import dialogsReducer, { SendMessageActionType, UpdateNewMessageTextActionType } from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType | SendMessageActionType | UpdateNewMessageTextActionType

type PostsType = {
    id: number
    message: string
    likesCount: number
}
type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
type DialogsType = {
    id: number
    name: string
    avatar: string
}
type MessagesType = {
    id: number
    message: string
    owner: string
    avatar: string
}
type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
}
type FriendsType = {
    id: number
    name: string
    avatar: string
}
type SidebarType = {
    friends: FriendsType[]
}
type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
type StoreType = {
    _state: StateType
    _callSubscriber: (_state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionsTypes) => void
}


const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post!', likesCount: 11},
            ],
            newPostText: '',
        },
        dialogsPage: {
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
                {id: 3, message: 'How is your it-kamasutra?', owner: 'me', avatar: '/images/Redux/State/messages/me.jpg'},
                {id: 4, message: 'Good enough, dude!', owner: 'you', avatar: '/images/Redux/State/messages/you.jpg'},
            ],
            newMessageText: '',
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}
