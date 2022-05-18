import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
    message: string
    owner: string
    myAvatar: string
    friendAvatar: string
}

export const Message = (props: MessagePropsType) => {
    const message = props.message.replace(
        /\b(https?\:\/\/\S+)/mg,
        '<a href="$1">$1</a>'
    );


    return (
        <div className={s.message}>
            <div className={s[props.owner]}>
                {props.owner !== "me" ? <img src={props.friendAvatar} alt='ava'/> : false}
                <div className={s.messageTextFiled}>
                    {message}
                    {/*{props.message}*/}
                </div>
                {props.owner === "me" ? <img src={props.myAvatar} alt='ava'/> : false}
            </div>
        </div>
    )
}
