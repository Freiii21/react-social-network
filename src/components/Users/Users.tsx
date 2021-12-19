import React from 'react';
import s from './users.module.css';
import user1 from '../../assets/users/user1.jpg';
import {UserType} from '../../redux/users-reducer';

export type UsersPropsType2 = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber:number) => void
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) =>void
}

export const Users = (props:UsersPropsType2) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= (pagesCount > 15 ? 15 : pagesCount); i++){
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
                        <img alt="ava" src={u.photos.small != null ? u.photos.small : user1} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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