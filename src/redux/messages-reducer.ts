import {ActionsTypes, MessagesPageType, MessagesType} from './state';

const messagesReducer = (state:MessagesPageType,action: ActionsTypes) => {

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

export default messagesReducer;