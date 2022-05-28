import React from 'react';
import s from './users.module.css';
import {UserType} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import {Preloader} from '../common/Preloader/Preloader';

export type UsersPropsType2 = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    isFetching:boolean
}

export const Users = (props: UsersPropsType2) => {
    const usersList = props.users.map(u => <User u={u}
                                                 key={u.id}
                                                 followingInProgress={props.followingInProgress}
                                                 unfollow={props.unfollow}
                                                 follow={props.follow}/>);

    return (
        <div className={s.usersTab}>
            <div>
                <div className={s.usersTitle}>
                    <div>Followers of the Way of the Samurai...</div>
                </div>
                {props.isFetching && <Preloader marginTop={'31px'}/>}
                <div className={s.usersField}>
                    {usersList}
                </div>
            </div>
            <div className={s.paginator}>
                <Paginator totalItemssCount={props.totalUsersCount} pageSize={props.pageSize}
                           currentPage={props.currentPage} isFetching={props.isFetching} onPageChanged={props.onPageChanged}/>
            </div>
        </div>
    )
}