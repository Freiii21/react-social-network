import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';
import {ActionsTypes, MessagesPageType} from '../../redux/store';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/messages-reducer';

type DialogsPropsType = {
    state: MessagesPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar}/>);
    const messagesElements = props.state.messages.map(m => <Message message={m.message} owner={m.owner}
                                                                    avatar={m.avatar}/>);
    let textField = React.createRef<HTMLTextAreaElement>();

    const sendMessage = () => props.dispatch(sendMessageActionCreator())

    const omMessageChange = () => {
        if (textField.current) {
            const text = textField.current.value
            props.dispatch(updateNewMessageTextActionCreator(text));
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
                                  value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button className={s.sendMessage} onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>

        </div>
    )
}