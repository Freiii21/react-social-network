import {ActionsTypes} from './redux-store';
import Dimych from './../assets/messages/Dimych.jpg'
import Ignat from './../assets/messages/Andrey.jpg'
import Sveta from './../assets/messages/Sveta.jpg'
import Natalia from './../assets/messages/Sasha.jpg'
import Viktor from './../assets/messages/Viktor.jpg'
import Valera from './../assets/messages/Valera.jpg'
import me from './../assets/users/user1.jpg'

export type DialogType = {
    id: number
    name: string
    avatar: string
}
export type MessageType = {
    id: number
    message: string
    owner: string
    avatar: string
}
export type Conversation = {
    [id: number]: MessageType[]
}
export type InitialStateDialogsPageType = {
    activeInterlocutor: number
    myAvatar: string
    dialogs: DialogType[]
    messages: Conversation
    // messages: Array<MessageType[]>
}

let initialState:InitialStateDialogsPageType = {
    activeInterlocutor: 0,
    myAvatar: me,
    dialogs: [
        {id: 0, name: 'Dimych', avatar: Dimych},
        {id: 1, name: 'Ignat', avatar: Ignat},
        {id: 2, name: 'Sveta', avatar: Sveta},
        {id: 3, name: 'Natalia', avatar: Natalia},
        {id: 4, name: 'Viktor', avatar: Viktor},
        {id: 5, name: 'Valera', avatar: Valera},
    ],
    messages:{
        0: [
            {id: 1, message: 'hi', owner: 'me', avatar: me},
            {id: 2, message: 'Yo', owner: 'you', avatar: Dimych},
            {id: 3, message: 'How is your it-kamasutra?', owner: 'me', avatar: me},
            {id: 4, message: 'Good enough, dude!', owner: 'you', avatar: Dimych},
        ],
        1: [
            {id: 1, message: 'hi', owner: 'me', avatar: me},
            {id: 2, message: 'I`m Ignat!', owner: 'you', avatar: Dimych},
        ]
    }
}

const dialogsReducer = (state:InitialStateDialogsPageType = initialState, action: ActionsTypes):InitialStateDialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage: MessageType = {
                id: 99,
                message: action.newMessageBody,
                owner: 'me',
                avatar: me,
            };
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.userId]: [...state.messages[action.userId], newMessage]
                }
                // messages: [...state.messages, newMessage],
            };
        }
        case 'SET_USER_PROFILE': {
            if(action.profile){
                return {
                    ...state,
                    myAvatar: action.profile.photos.small
                };
            }
            return state;
        }
        case 'SAVE_PHOTO': {
            return {
                ...state,
                // messages: state.messages.map(m => m.owner !== 'me' ? m
                //     // @ts-ignore
                //     : {...m, avatar: action.photo})
            }
        }
        default:
            return state;
    }
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE',
    newMessageBody: string,
    userId: number
}

export const sendMessageActionCreator = (newMessageBody: string, userId: number):SendMessageActionType => {
    return {
        type:'SEND-MESSAGE',
        newMessageBody,
        userId
    }
};

export default dialogsReducer;