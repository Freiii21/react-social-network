import {ActionsTypes} from './redux-store';

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
    isFetching: boolean
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
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.currentPage
            }
        case 'SET_TOTAL_USERS_COUNT':
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
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
export type SetUsersAT = {
    type: 'SET_USERS'
    users: UserType[]
}
export type SetCurrentPageAT = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type SetTotalUsersCountAT = {
    type: 'SET_TOTAL_USERS_COUNT'
    totalUsersCount: number
}
export type SetIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
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
export const setUsersAC = (users: UserType[]):SetUsersAT => {
    return {
        type: 'SET_USERS',
        users
    }
};
export const setCurrentPageAC = (currentPage: number):SetCurrentPageAT => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    }
};
export const setTotalUsersCountAC = (totalUsersCount: number):SetTotalUsersCountAT => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    }
};
export const setIsFetchingAC = (isFetching: boolean):SetIsFetchingAT => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    }
};

export default usersReducer;