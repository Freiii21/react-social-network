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
import {Redirect} from 'react-router-dom';
import {ProfilePropsType2} from '../Profile/ProfileContainer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

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
        dialogsPage: state.dialogsPage,
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

let AuthRedirectComponent = withAuthRedirect(Dialogs);
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);