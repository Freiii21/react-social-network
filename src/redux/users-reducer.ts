import {ActionsTypes} from './redux-store';

type UserLocationType = {
    city: string
    country: string
}
export type UserType = {
    id: number
    followed: boolean
    fullName: string
    status: string
    location: UserLocationType
}
export type InitialStateUsersType = {
    users: UserType[]
};

const initialState: InitialStateUsersType = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I`m a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Sasha',
            status: 'I`m a boss too',
            location: {city: 'Moscow', country: 'Russia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            status: 'I`m not a boss...',
            location: {city: 'Toronto', country: 'Canada'}
        },
    ]
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

export default usersReducer;