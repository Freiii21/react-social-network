import {ActionsTypes} from './store';

export type DialogsType = {
    id: number
    name: string
    avatar: string
}
export type MessagesType = {
    id: number
    message: string
    owner: string
    avatar: string
}

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych', avatar: '/images/Redux/State/dialogs/Dimych.jpg'},
        {id: 2, name: 'Andrey', avatar: '/images/Redux/State/dialogs/Andrey.jpg'},
        {id: 3, name: 'Sveta', avatar: '/images/Redux/State/dialogs/Sveta.jpg'},
        {id: 4, name: 'Sasha', avatar: '/images/Redux/State/dialogs/Sasha.jpg'},
        {id: 5, name: 'Viktor', avatar: '/images/Redux/State/dialogs/Viktor.jpg'},
        {id: 6, name: 'Valera', avatar: '/images/Redux/State/dialogs/Valera.jpg'},
    ] as Array<DialogsType>,
    messages: [
        {id: 1, message: 'hi', owner: 'me', avatar: '/images/Redux/State/messages/me.jpg'},
        {id: 2, message: 'Yo', owner: 'you', avatar: '/images/Redux/State/messages/you.jpg'},
        {id: 3, message: 'How is your it-kamasutra?', owner: 'me', avatar: '/images/Redux/State/messages/me.jpg'},
        {id: 4, message: 'Good enough, dude!', owner: 'you', avatar: '/images/Redux/State/messages/you.jpg'},
    ] as Array<MessagesType>,
    newMessageText: '',
}
export type InitialStateDialogsPageType = typeof initialState;

const dialogsReducer = (state:InitialStateDialogsPageType = initialState, action: ActionsTypes):InitialStateDialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            let newMessage: MessagesType = {
                id: 99,
                message: state.newMessageText,
                owner: 'me',
                avatar: '/images/Redux/State/messages/me.jpg',
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

//method #2
export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newText: string
}

//method #2 (with return type that created above as: SendMessageActionType)
export const sendMessageActionCreator = ():SendMessageActionType => {
    return {
        type:'SEND-MESSAGE'
    }
};
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newText: text
    }
};

export default dialogsReducer;