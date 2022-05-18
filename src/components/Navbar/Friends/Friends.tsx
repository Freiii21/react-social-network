import React from 'react';
import s from './Friends.module.css'
import {FriendType} from '../../../redux/sidebar-reducer';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {changeActiveCompanionAC} from '../../../redux/dialogs-reducer';

type FriendsPropsType = {
    friends: FriendType[]
}

export const Friends = (props: FriendsPropsType) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const navigateToMessages = (id: number) => {
        dispatch(changeActiveCompanionAC(id))
        navigate("/dialogs")
    }

    const friendsLine = props.friends.map(f => {
        return (
            <span key={f.id}>
                <img src={f.avatar} alt="" onClick={()=>navigateToMessages(f.id)}/>
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