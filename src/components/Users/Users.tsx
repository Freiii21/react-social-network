import React from 'react';
import {UsersPropsType} from './UsersContainer';
import s from './users.module.css'
import user1 from './../../assets/users/user1.jpg'
import user2 from './../../assets/users/user2.jpg'
import user3 from './../../assets/users/user3.jpg'
import axios from 'axios';

export const Users = (props: UsersPropsType) => {
    if(props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })

/*        props.setUsers([
            {
                id: 1,
                photo: user1,
                followed: false,
                fullName: 'Dmitry',
                status: 'I`m a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photo: user2,
                followed: true,
                fullName: 'Sasha',
                status: 'I`m a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photo: user3,
                followed: false,
                fullName: 'Andrew',
                status: 'I`m not a boss...',
                location: {city: 'Toronto', country: 'Canada'}
            },
        ])*/
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : user1} className={s.userPhoto}/>
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
                            {"u.location.country"}
                        </div>
                        <div>
                            {"u.location.city"}
                        </div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}