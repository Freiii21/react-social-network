import {ActionsTypes} from './redux-store';
import user1 from './../assets/users/user1.jpg'
import user2 from './../assets/users/user2.jpg'
import user3 from './../assets/users/user3.jpg'
import {stringify} from 'querystring';

type UserLocationType = {
    city: string
    country: string
}

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    location: UserLocationType
}
export type InitialStateUsersType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
};

const initialState: InitialStateUsersType = {
    users: [
       /* {
            id: 1,
            photo: user1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I`m a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },*/
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state: InitialStateUsersType = initialState, action: ActionsTypes): InitialStateUsersType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? ({...u, followed: true}) : u)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? ({...u, followed: false}) : u)
            };
        case 'SET-USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET-TOTAL-USERS-COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        default:
            return state;
    }
}


export type FollowAT = {
    type: 'FOLLOW'
    userId: number
}
export type UnfollowAT = {
    type: 'UNFOLLOW'
    userId: number
}
export type SetUsersAC = {
    type: 'SET-USERS'
    users: UserType[]
}
export type SetCurrentPageAC = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number
}
export type SetTotalUsersCountAC = {
    type: 'SET-TOTAL-USERS-COUNT'
    totalUsersCount: number
}



export const followAC = (userId: number):FollowAT => {
    return {
        type: 'FOLLOW',
        userId
    }
};
export const unfollowAC = (userId: number):UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userId
    }
};
export const setUsersAC = (users: UserType[]):SetUsersAC => {
    return {
        type: 'SET-USERS',
        users
    }
};
export const setCurrentPageAC = (currentPage: number):SetCurrentPageAC => {
    return {
        type: 'SET-CURRENT-PAGE',
        currentPage
    }
};
export const SetTotalUsersCountAC = (totalUsersCount: number):SetTotalUsersCountAC => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        totalUsersCount
    }
};

export default usersReducer;