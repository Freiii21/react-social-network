import {ActionsTypes} from './redux-store';
import Dimych from './../assets/messages/Dimych.jpg'
import Andrey from './../assets/messages/Andrey.jpg'
import Sveta from './../assets/messages/Sveta.jpg'
import Sasha from './../assets/messages/Sasha.jpg'
import Viktor from './../assets/messages/Viktor.jpg'
import Valera from './../assets/messages/Valera.jpg'
import me from './../assets/messages/me.jpg'
import you from './../assets/messages/you.jpg'


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
export type InitialStateDialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

let initialState:InitialStateDialogsPageType = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: Dimych},
        {id: 2, name: 'Andrey', avatar: Andrey},
        {id: 3, name: 'Sveta', avatar: Sveta},
        {id: 4, name: 'Sasha', avatar: Sasha},
        {id: 5, name: 'Viktor', avatar: Viktor},
        {id: 6, name: 'Valera', avatar: Valera},
    ],
    messages: [
        {id: 1, message: 'hi', owner: 'me', avatar: me},
        {id: 2, message: 'Yo', owner: 'you', avatar: you},
        {id: 3, message: 'How is your it-kamasutra?', owner: 'me', avatar: me},
        {id: 4, message: 'Good enough, dude!', owner: 'you', avatar: you},
    ]
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
                messages: [...state.messages, newMessage],
            };
        }
        default:
            return state;
    }
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE',
    newMessageBody: string
}

export const sendMessageActionCreator = (newMessageBody: string):SendMessageActionType => {
    return {
        type:'SEND-MESSAGE',
        newMessageBody
    }
};

export default dialogsReducer;