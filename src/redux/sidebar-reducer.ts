import {ActionsTypes} from './redux-store';
import Keanu from './../assets/sidebarFriends/Keanu.jpg'
import Scarlett from './../assets/sidebarFriends/Scarlett.jpg'
import Johnny from './../assets/sidebarFriends/Johnny.jpg'
import Rachel from './../assets/sidebarFriends/Rachel.jpg'
import Ross from './../assets/sidebarFriends/Ross.jpg'
import Phoebe from './../assets/sidebarFriends/Phoebe.jpg'

export type FriendType = {
    id: number
    name: string
    avatar: string
}

let initialState:InitialStateSidebarType = {
    friends: [
        {id: 5, name: 'Keanu', avatar: Keanu},
        {id: 6, name: 'Scarlett', avatar: Scarlett},
        {id: 7, name: 'Johnny', avatar: Johnny},
        {id: 8, name: 'Rachel', avatar: Rachel},
        {id: 9, name: 'Ross', avatar: Ross},
        {id: 10, name: 'Phoebe', avatar: Phoebe},
    ]
}
export type InitialStateSidebarType = {
    friends: FriendType[]
}

const sidebarReducer = (state:InitialStateSidebarType = initialState,action:ActionsTypes):InitialStateSidebarType => {
    return state;
}

export default sidebarReducer;