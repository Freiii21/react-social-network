import React from 'react';
import { connect } from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from '../common/Preloader/Preloader';
import {
    follow,
    getUsers, setCurrentPage,
    toggleFollowingProgress, unfollow, UserType
} from '../../redux/users-reducer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapStateToPropsType = {
    users:UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage:number, pageSize:number) => void
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType;

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
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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

export default compose<React.ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {},AppStateType >(mapStateToProps,{
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)

/*
export default withAuthRedirect(connect<MapStateToPropsType, MapDispatchToPropsType, {},AppStateType >(mapStateToProps,{
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers
})(UsersContainer))*/
