import React from 'react';
import {
    InitialStateDialogsPageType,
    sendMessageActionCreator,
    updateNewMessageTextActionCreator
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import { Dispatch } from 'redux';

// type DialogsContainerPropsType = {
//     store: StoreType
// }
// export const DialogsContainer = (props: DialogsContainerPropsType) => {
//     // const state = props.store.getState().dialogsPage;
//
//     // const onSendMessage = () => props.store.dispatch(sendMessageActionCreator())
//     // const omMessageChange = (text: string) => {
//     //     props.store.dispatch(updateNewMessageTextActionCreator(text));
//     // }
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const onSendMessage = () => store.dispatch(sendMessageActionCreator())
//                     const omMessageChange = (text: string) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text));
//                     }
//                     return (
//                         <Dialogs updateNewMessageBody={omMessageChange}
//                                  sendMessage={onSendMessage}
//                                  dialogsPage={store.getState().dialogsPage}/>
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsPageType
}
type MapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
};

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);