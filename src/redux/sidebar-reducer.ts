import {ActionsTypes} from './store';

export type FriendsType = {
    id: number
    name: string
    avatar: string
}

let initialState = {
    friends: [
        {id: 1, name: 'Keanu', avatar: '/images/Redux/State/friends/Keanu.jpg'},
        {id: 2, name: 'Scarlett', avatar: '/images/Redux/State/friends/Scarlett.jpg'},
        {id: 3, name: 'Johnny', avatar: '/images/Redux/State/friends/Johnny.jpg'},
        {id: 4, name: 'Rachel', avatar: '/images/Redux/State/friends/Rachel.jpg'},
        {id: 5, name: 'Ross', avatar: '/images/Redux/State/friends/Ross.jpg'},
    ] as Array<FriendsType>
}

export type InitialStateSidebarType = typeof initialState;

const sidebarReducer = (state:InitialStateSidebarType = initialState,action:ActionsTypes):InitialStateSidebarType => {
    return state;
}

export default sidebarReducer;