import React, {ChangeEvent, useEffect, useRef, useState} from 'react';
import s from './Dialogs.module.css';
import {Message} from './Message/Message'
import {DialogItem} from './DialogItem/DialogItem';
import {DialogsPropsType} from './DialogsContainer';


export const Dialogs = (props: DialogsPropsType) => {
    const bottomPage = useRef<null | HTMLDivElement>(null);
    const bottomPageRefScroll = () => {
        bottomPage.current && bottomPage.current.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
    useEffect(()=>{
        if(props.authorizedUserId){
            props.getUserProfile(props.authorizedUserId)
        }
        // eslint-disable-next-line
    },[])

    useEffect(()=>{
        bottomPageRefScroll();
        // eslint-disable-next-line
    },[props.dialogsPage.messages, props.dialogsPage.activeInterlocutor])

    const usersList = props.dialogsPage.dialogs.map(d =>
        <DialogItem name={d.name}
                    key={d.id}
                    id={d.id}
                    avatar={d.avatar}
                    changeActiveCompanion={props.changeActiveCompanion}
                    activeInterlocutor={props.dialogsPage.activeInterlocutor}
        />);

    const messagesElementsFromState = props.dialogsPage.messages[props.dialogsPage.activeInterlocutor].map(m =>
        <Message
            message={m.message}
            key={m.id}
            owner={m.owner}
            myAvatar={props.dialogsPage.myAvatar}
            friendAvatar={m.avatar}
        />);
    const messagesElements = messagesElementsFromState.length > 0 ? messagesElementsFromState
        : <div className={s.messagesFiller}>There are no messages yet...</div>

    const [message, setMessage] = useState<string>("")
    const [error, setError] = useState<string>("")
    const omMessageType = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setError("")
        if(e.currentTarget.value[e.currentTarget.value.length-1] === '\n') {
            return addNewMessage();
        }
        setMessage(e.currentTarget.value)
    }

    const addNewMessage = () => {
        if(!message || message === '\n'){
            setError("Message cannot be empty")
        } else {
            props.sendMessage(message, props.dialogsPage.activeInterlocutor);
            setMessage("");
        }
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
                {/*<AddMessageFormRedux onSubmit={addNewMessage}/>*/}
                <div className={s.answerField}>
                    <div className={s.textareaFiled}>
                        <textarea placeholder="Type a message..."
                                 value={message}
                                 onChange={omMessageType}
                                 className={s.inputField}/>
                        {error && <div className={s.error}>{error}</div>}
                    </div>
                    <div ref={bottomPage}>
                        <button className={s.sendMessage} onClick={addNewMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
