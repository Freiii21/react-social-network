import React from 'react';
import {addPostActionCreator, PostType, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts: PostType[]
    newPostText: string
}
type MapDispatchToPropsType = {
    updateNewPostText: (text:string) => void
    addPost: () => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        updateNewPostText: (text:string)=>{
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)