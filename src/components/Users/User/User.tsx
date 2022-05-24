import React from 'react';
import s from './User.module.css';
import user1 from '../../../assets/users/user1.jpg';
import {NavLink} from 'react-router-dom';
import { UserType } from '../../../redux/users-reducer';

export type UserPropsType = {
    u:UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

export const User = (props: UserPropsType) => {
    const avatar = props.u.photos.large != null ? props.u.photos.large : user1;
    const isButtonDisabled = props.followingInProgress.some(id => id === props.u.id);
    const unfollowUser = () => {props.unfollow(props.u.id)};
    const followUser = () => {props.follow(props.u.id)};

    return (
        <div className={s.userField}>
            <div>
                <NavLink to={'/profile/' + props.u.id}>
                    <img alt="ava" src={avatar} className={s.userPhoto}/>
                </NavLink>
            </div>
            <div className={s.userName}>
                {props.u.name}
            </div>
            <div>
                {props.u.followed ?
                    <button disabled={isButtonDisabled} onClick={unfollowUser} className={s.button}>Unfollow</button>
                    : <button disabled={isButtonDisabled} onClick={followUser} className={s.button}>Follow</button>}
            </div>
            <div className={s.descriptionField}>
                <div>
                    <span className={s.attributeName}>Age:</span>
                    <span className={s.attributeValue}>...</span>
                </div>
                <div>
                    <span className={s.attributeName}>Status:</span>
                    <span className={s.attributeValue}>{props.u.status ? props.u.status : '...'}</span>
                </div>
                <div>
                    <span className={s.attributeName}>Country:</span>
                    <span className={s.attributeValue}>...</span>
                </div>
            </div>
        </div>)
}
