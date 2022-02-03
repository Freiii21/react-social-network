import {ActionsTypes} from './redux-store';

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
    ]
}


const dialogsReducer = (state:InitialStateDialogsPageType = initialState, action: ActionsTypes):InitialStateDialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage: MessageType = {
                id: 99,
                message: action.newMessageBody,
                owner: 'me',
                avatar: '/images/Redux/State/messages/me.jpg',
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