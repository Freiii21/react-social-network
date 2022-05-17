import React from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from './DialogsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

export type DialogsFormDataType = {
    newMessageBody: string
}

const maxLength50 = maxLengthCreator(50);

export const Dialogs = (props: DialogsPropsType) => {
    const usersList = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name}
                    key={d.id}
                    id={d.id}
                    avatar={d.avatar}
        />);

    const messagesElements = props.dialogsPage.messages[props.dialogsPage.activeInterlocutor].map(m =>
        <Message
            message={m.message}
            key={m.id}
            owner={m.owner}
            myAvatar={props.dialogsPage.myAvatar}
            friendAvatar={m.avatar}
        />);

    const addNewMessage = (values: DialogsFormDataType) => {
        props.sendMessage(values.newMessageBody, props.dialogsPage.activeInterlocutor);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    {usersList}
                </div>
                <div className={s.line}/>
            </div>
            <div className={s.messagesField}>
                <div className={s.messages}>
                    <div className={s.companion}>
                        <img src={props.dialogsPage.dialogs[props.dialogsPage.activeInterlocutor].avatar} alt=""/>
                        <div>{props.dialogsPage.dialogs[props.dialogsPage.activeInterlocutor].name}</div>
                    </div>
                    {messagesElements}
                </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}



const AddMessageForm = (props: InjectedFormProps<DialogsFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.answerField}>

                    <Field component={Textarea}
                           name="newMessageBody"
                           placeholder="Type a message..."
                           className={s.inputField}
                           validate={[required, maxLength50]}
                    />

                <div>
                    <button className={s.sendMessage}>Send</button>
                </div>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm<DialogsFormDataType>({form: "dialogAddMessageForm"})(AddMessageForm);