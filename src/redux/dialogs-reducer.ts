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
            {id: -1, message: 'Hi', owner: 'me', avatar: me},
            {id: -2, message: 'Yo', owner: 'you', avatar: Dimych},
            {id: -3, message: 'How is your it-kamasutra?', owner: 'me', avatar: me},
            {id: -4, message: 'Good enough, dude', owner: 'you', avatar: Dimych},
            {id: -5, message: 'If you are ready, then come to my course!', owner: 'you', avatar: Dimych},
        ],
        1: [
            {id: -6, message: 'Hello', owner: 'you', avatar: Ignat},
            {id: -7, message: 'Hey, what`s up?', owner: 'me', avatar: me},
            {id: -8, message: 'Did you do all my tasks?', owner: 'you', avatar: Ignat},
            {id: -9, message: 'Yes, sure', owner: 'me', avatar: me},
        ],
        2:[
            {id: -10, message: 'Good afternoon, Sveta', owner: 'me', avatar: me},
            {id: -11, message: "I finally made my portfolio, yahoooo. Thanks for your lessons!", owner: 'me', avatar: me},
            {id: -12, message: 'Checked it. Looks nice and modern. Well done.', owner: 'you', avatar: Sveta},
        ],
        3:[
            {id: -13, message: 'Just a reminder, the next English class is on Monday at 19:00. Don\'t forget to get ready.', owner: 'you', avatar: Natalia},
            {id: -14, message: 'I will be on time, thank you!', owner: 'me', avatar: me},
        ],
        4:[],
        5:[],
        6:[
            {id: -15, message: 'It was a hot night, honey.', owner: 'you', avatar: Scarlett},
            {id: -16, message: 'Call me!', owner: 'you', avatar: Scarlett},
        ],
        7:[
            {id: -17, message: 'Man, that was a hefty heap on that bed...', owner: 'you', avatar: Johnny},
        ],
        8:[],
        9:[
            {id: -18, message: 'Hey Ross, how are your dinosaurs?', owner: 'me', avatar: me},
        ],
        10:[]
    }
}
let messageId = 0;
const dialogsReducer = (state:InitialStateDialogsPageType = initialState, action: ActionsTypes):InitialStateDialogsPageType => {
    switch (action.type) {
        case 'SEND-MESSAGE': {
            let newMessage: MessageType = {
                id: messageId,
                message: action.newMessageBody,
                owner: 'me',
                avatar: me,
            };
            messageId++;
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