import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPageType} from '../../redux/store';

type DialogsPropsType = {
    updateNewMessageBody: (text:string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} owner={m.owner}
                                                                    avatar={m.avatar}/>);
    let textField = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => props.sendMessage();

    const omMessageChange = () => {
        if (textField.current) {
            const text = textField.current.value
            props.updateNewMessageBody(text);
            textField.current.value = '';
        }
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.answerField}>
                    <div>
                        <textarea className={s.inputField}
                                  placeholder={'Type a message...'}
                                  ref={textField}
                                  onChange={omMessageChange}
                                  value={props.dialogsPage.newMessageText}></textarea>
                    </div>
                    <div>
                        <button className={s.sendMessage} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}