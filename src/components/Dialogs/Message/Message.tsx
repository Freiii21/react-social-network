import React from 'react';
import s from './../Dialogs.module.css';

type MessagePropsType = {
    message: string
    owner: string
    avatar: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s[props.owner]}>
                {props.owner !== "me" ? <img src={props.avatar}/> : false}
                {props.message}
                {props.owner === "me" ? <img src={props.avatar}/> : false}
            </div>
        </div>
    )
}
