import {ActionsTypes} from './redux-store';
import {usersAPI} from '../api/api';
import {Dispatch} from 'redux';

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
    followingInProgress: Array<number>
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
    followingInProgress: [],
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
        case 'TOGGLE_IS_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
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
export type ToggleIsFetchingAT = {
    type: 'TOGGLE_IS_FETCHING'
    isFetching: boolean
}
export type ToggleFollowingProgressAT = {
    type: 'TOGGLE_IS_FOLLOWING_PROGRESS'
    isFetching: boolean
    userId: number
}

export const followSuccess = (userId: number):FollowAT => {
    return {
        type: 'FOLLOW',
        userId
    }
};
export const unfollowSuccess = (userId: number):UnfollowAT => {
    return {
        type: 'UNFOLLOW',
        userId
    }
};
export const setUsers = (users: UserType[]):SetUsersAT => {
    return {
        type: 'SET_USERS',
        users
    }
};
export const setCurrentPage = (currentPage: number):SetCurrentPageAT => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage
    }
};
export const setTotalUsersCount = (totalUsersCount: number):SetTotalUsersCountAT => {
    return {
        type: 'SET_TOTAL_USERS_COUNT',
        totalUsersCount
    }
};
export const toggleIsFetching = (isFetching: boolean):ToggleIsFetchingAT => {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    }
};
export const toggleFollowingProgress = (isFetching: boolean, userId: number):ToggleFollowingProgressAT => {
    return {
        type: 'TOGGLE_IS_FOLLOWING_PROGRESS',
        isFetching,
        userId
    }
};

export const getUsers = (currentPage:number, pageSize:number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}
export const follow = (userId: number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId: number) => {
    return (dispatch:Dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0){
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}

export default usersReducer;