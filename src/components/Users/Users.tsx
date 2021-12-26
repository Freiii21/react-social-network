import React from 'react';
import s from './users.module.css';
import user1 from '../../assets/users/user1.jpg';
import {UserType} from '../../redux/users-reducer';
import { NavLink } from 'react-router-dom';
import {usersAPI} from '../../api/api';

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
}

export const Users = (props: UsersPropsType2) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount > 15 ? 15 : pagesCount); i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => <span
                    className={props.currentPage === p ? s.selectedPage : s.usual}
                    onClick={(e) => props.onPageChanged(p)}
                >{p}</span>)}
                {pagesCount > 15 ? <span> ... {pagesCount}</span> : null}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img alt="ava" src={u.photos.small != null ? u.photos.small : user1}
                                className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ?
                            <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.unfollowUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0){
                                            props.unfollow(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                usersAPI.followUser(u.id)
                                    .then(data => {
                                       if (data.resultCode === 0){
                                           props.follow(u.id);
                                       }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {'u.location.country'}
                        </div>
                        <div>
                            {'u.location.city'}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}