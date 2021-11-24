import {ActionsTypes, SidebarType} from './store';

let initialState = {
    friends: [
        {id: 1, name: 'Keanu', avatar: '/images/Redux/State/friends/Keanu.jpg'},
        {id: 2, name: 'Scarlett', avatar: '/images/Redux/State/friends/Scarlett.jpg'},
        {id: 3, name: 'Johnny', avatar: '/images/Redux/State/friends/Johnny.jpg'},
        {id: 4, name: 'Rachel', avatar: '/images/Redux/State/friends/Rachel.jpg'},
        {id: 5, name: 'Ross', avatar: '/images/Redux/State/friends/Ross.jpg'},
    ]
}

const sidebarReducer = (state:SidebarType = initialState,action:ActionsTypes) => {
    return state;
}

export default sidebarReducer;