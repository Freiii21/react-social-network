import React from 'react';
import {
    changeActiveCompanionAC,
    InitialStateDialogsPageType,
    sendMessageActionCreator
} from '../../redux/dialogs-reducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {compose, Dispatch } from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {getUserProfile} from '../../redux/profile-reducer';

type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsPageType
    authorizedUserId: number | null
}
type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string, userId: number) => void
    getUserProfile: (userId: number) => void
    changeActiveCompanion: (companionId: number) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        authorizedUserId: state.auth.userId
    }
};
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string, userId: number) => {
            dispatch(sendMessageActionCreator(newMessageBody, userId))
        },
        getUserProfile: (userId: number) => {
            //@ts-ignore
            dispatch(getUserProfile(userId))
        },
        changeActiveCompanion: (companionId: number) => {
            dispatch(changeActiveCompanionAC(companionId))
        }
    }
};

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

/*
let AuthRedirectComponent = withAuthRedirect(Dialogs);
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);*/
