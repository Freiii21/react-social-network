import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {NewStoreType} from '../../App';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';

type DialogsContainerPropsType = {
    // store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {
    // const state = props.store.getState().dialogsPage;

    // const onSendMessage = () => props.store.dispatch(sendMessageActionCreator())
    // const omMessageChange = (text: string) => {
    //     props.store.dispatch(updateNewMessageTextActionCreator(text));
    // }
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage;
                    const onSendMessage = () => store.dispatch(sendMessageActionCreator())
                    const omMessageChange = (text: string) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }
                    return (
                        <Dialogs updateNewMessageBody={omMessageChange}
                                 sendMessage={onSendMessage}
                                 dialogsPage={state}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}