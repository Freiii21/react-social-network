import React from 'react';
import { connect } from 'react-redux';
import { Users } from './Users';
import {AppStateType} from '../../redux/redux-store';
import {Dispatch} from 'redux';
import {
    followAC,
    setCurrentPageAC,
    SetTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';

export type MapStateToPropsType = {
    users:UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUserCount: number) => void
}
export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUserCount: number) => {
            dispatch(SetTotalUsersCountAC(totalUserCount))
        },
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)