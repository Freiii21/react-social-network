import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css';

type DialogItemPropsType = {
    id: number
    name: string
    avatar: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog}>
            <img src={props.avatar}/>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    )
}
