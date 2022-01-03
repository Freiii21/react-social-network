import React from 'react';
import { connect } from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {
    followSuccess,
    getUsers,
    setCurrentPageAC,
    toggleFollowingProgressAC, unfollowSuccess,
    UserType
} from '../../redux/users-reducer';

type MapStateToPropsType = {
    users:UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    followAC: (userId: number) => void
    unfollowAC: (userId: number) =>void
    setCurrentPageAC: (currentPage: number) => void
    toggleFollowingProgressAC: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage:number, pageSize:number) => void
}

export type UsersPropsType = {
    users:UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    followAC: (userId: number) => void
    unfollowAC: (userId: number) =>void
    setCurrentPageAC: (currentPage: number) => void
    toggleFollowingProgressAC: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage:number, pageSize:number) => void
}

class UsersContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (pageNumber:number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render(){
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                followAC={this.props.followAC}
                unfollowAC={this.props.unfollowAC}
                toggleFollowingProgressAC={this.props.toggleFollowingProgressAC}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {},AppStateType >(mapStateToProps,{
    followAC: followSuccess, unfollowAC: unfollowSuccess,
    setCurrentPageAC,
    toggleFollowingProgressAC, getUsers
})(UsersContainer)