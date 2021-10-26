import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';

export const Dialogs = () => {
    //BLL (Data)
    let dialogs = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"},
    ]

    let messages = [
        {id:1, message: "Hi"},
        {id:2, message: "How is your it-kamasutra?"},
        {id:3, message: "Yo"},
    ];

    const dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    const messagesElements = messages.map(m => <Message message={m.message}/>);

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