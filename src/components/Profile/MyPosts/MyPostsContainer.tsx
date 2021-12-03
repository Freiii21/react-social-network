import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
// import {NewStoreType} from '../../../App';
import { connect } from 'react-redux';
import {ActionsTypes} from '../../../redux/store';
import {AppStateType} from '../../../redux/redux-store';

// type MyPostsContainerPropsType = {
//     // store: StoreType
// }
//
// const MyPostsContainer = (props: MyPostsContainerPropsType) => {
//     // const state = props.store.getState();
//
//     // let addPost = () => {
//     //     props.store.dispatch(addPostActionCreator())
//     // };
//     // let onPostChange = (text: string) => {
//     //     props.store.dispatch(updateNewPostTextActionCreator(text));
//     // }
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const state = store.getState();
//                     let addPost = () => store.dispatch(addPostActionCreator());
//                     let onPostChange = (text: string) => store.dispatch(updateNewPostTextActionCreator(text));
//                     return (
//                         <MyPosts updateNewPostText={onPostChange}
//                                  addPost={addPost}
//                                  posts={state.profilePage.posts}
//                                  newPostText={state.profilePage.newPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state:AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
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