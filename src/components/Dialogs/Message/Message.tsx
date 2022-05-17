import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
    message: string
    owner: string
    myAvatar: string
    friendAvatar: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s[props.owner]}>
                {props.owner !== "me" ? <img src={props.friendAvatar} alt='ava'/> : false}
                {props.message}
                {props.owner === "me" ? <img src={props.myAvatar} alt='ava'/> : false}
            </div>
        </div>
    )
}
