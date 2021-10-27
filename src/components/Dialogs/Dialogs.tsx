import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';
import {MessagesPageType} from '../../redux/state';


type DialogsPropsType = {
    state: MessagesPageType
}

export const Dialogs = (props:DialogsPropsType) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messagesElements = props.state.messages.map(m => <Message message={m.message} owner={m.owner} avatar={m.avatar}/>);

    //UI
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}