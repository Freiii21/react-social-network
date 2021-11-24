import React from 'react';
import {FriendsType} from '../../../redux/store';
import s from './Friends.module.css'

type FriendsPropsType = {
    friends: FriendsType[]
}

export const Friends = (props: FriendsPropsType) => {
    const friendsLine = props.friends.map(f => {
        return (
            <span key={f.id}>
                <img src={f.avatar}/>
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