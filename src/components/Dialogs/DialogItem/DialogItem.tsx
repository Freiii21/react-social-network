import React from 'react';
import s from './DialogItem.module.css';

type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
    changeActiveCompanion: (companionId: number) => void
    activeInterlocutor: number
}

export const DialogItem = (props: DialogItemPropsType) => {
    const onCompanionClick = () => {
        props.changeActiveCompanion(props.id)
    }
    const mainClass = props.activeInterlocutor !== props.id ? s.dialog : `${s.dialog} ${s.active}`

    return (
        <div className={mainClass} onClick={onCompanionClick}>
            <img src={props.avatar} alt="" className={s.avatar}/>
            <div className={s.name}>{props.name}</div>
        </div>
    )
}
