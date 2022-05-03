import React from 'react';
import s from './Friends.module.css'
import {FriendType} from '../../../redux/sidebar-reducer';

type FriendsPropsType = {
    friends: FriendType[]
}

export const Friends = (props: FriendsPropsType) => {
    const friendsLine = props.friends.map(f => {
        return (
            <span key={f.id}>
                <img src={f.avatar} alt=""/>
                <div>{f.name}</div>
            </span>
        )
    })

    return (
        <div className={s.friendsBlock}>
            <div className={s.friendsTitle}>Friends</div>
            <div className={s.friendsLine}>
                {friendsLine}
            </div>
        </div>
    )
}