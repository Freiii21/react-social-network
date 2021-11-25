import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {StoreType} from '../../App';
import {Dialogs} from './Dialogs';

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    const state = props.store.getState().dialogsPage;

    const onSendMessage = () => props.store.dispatch(sendMessageActionCreator())
    const omMessageChange = (text:string) => {
            props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return <Dialogs updateNewMessageBody={omMessageChange} sendMessage={onSendMessage} dialogsPage={state}/>
}