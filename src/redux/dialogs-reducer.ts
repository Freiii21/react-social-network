import {ActionsTypes} from './redux-store';
import Dimych from './../assets/messages/Dimych.jpg'
import Ignat from './../assets/messages/Andrey.jpg'
import Sveta from './../assets/messages/Sveta.jpg'
import Natalia from './../assets/messages/Sasha.jpg'
import Viktor from './../assets/messages/Viktor.jpg'
import me from './../assets/users/user1.jpg'
import Keanu from './../assets/sidebarFriends/Keanu.jpg'
import Scarlett from './../assets/sidebarFriends/Scarlett.jpg'
import Johnny from './../assets/sidebarFriends/Johnny.jpg'
import Rachel from './../assets/sidebarFriends/Rachel.jpg'
import Ross from './../assets/sidebarFriends/Ross.jpg'
import Phoebe from './../assets/sidebarFriends/Phoebe.jpg'

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
        {id: 5, name: 'Keanu', avatar: Keanu},
        {id: 6, name: 'Scarlett', avatar: Scarlett},
        {id: 7, name: 'Johnny', avatar: Johnny},
        {id: 8, name: 'Rachel', avatar: Rachel},
        {id: 9, name: 'Ross', avatar: Ross},
        {id: 10, name: 'Phoebe', avatar: Phoebe},
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
            {id: 2, message: 'I`m Ignat!', owner: 'you', avatar: Ignat},
        ],
        2:[], 3:[], 4:[], 5:[], 6:[], 7:[], 8:[], 9:[], 10:[]
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
        case 'CHANGE-COMPANION': {
            return {
                ...state,
                activeInterlocutor: action.companionId
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
export type ChangeActiveCompanionAT = {
    type: 'CHANGE-COMPANION',
    companionId: number
}

export const sendMessageActionCreator = (newMessageBody: string, userId: number):SendMessageActionType => {
    return {
        type:'SEND-MESSAGE',
        newMessageBody,
        userId
    }
};
export const changeActiveCompanionAC = (companionId: number):ChangeActiveCompanionAT => {
    return {
        type:'CHANGE-COMPANION',
        companionId
    }
};

export default dialogsReducer;