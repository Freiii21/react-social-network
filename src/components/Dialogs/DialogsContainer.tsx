import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {ActionsTypes} from '../../redux/store';
import {AppStateType} from '../../redux/redux-store';

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

const mapStateToProps = (state:AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
};
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
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