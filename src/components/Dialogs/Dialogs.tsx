import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from './DialogsContainer';
import {Field, FormSubmitHandler, InjectedFormProps, reduxForm} from 'redux-form';

export type DialogsFormDataType = {
    newMessageBody: string
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name}
                                                                           key={d.id}
                                                                           id={d.id}
                                                                           avatar={d.avatar}/>);
    const messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}
                                                                          key={m.id}
                                                                          owner={m.owner}
                                                                          avatar={m.avatar}/>);

    const addNewMessage = (values: DialogsFormDataType) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}


const AddMessageForm = (props: InjectedFormProps<DialogsFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.answerField}>
                <div>
                    <Field component="textarea" name="newMessageBody" placeholder="Type a message..." className={s.inputField}/>
                </div>
                <div>
                    <button className={s.sendMessage}>Send</button>
                </div>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm<DialogsFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);