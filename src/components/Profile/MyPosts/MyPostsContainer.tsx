import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {StoreType} from '../../../App';
import StoreContext from '../../../StoreContext';

type MyPostsContainerPropsType = {
    // store: StoreType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    // const state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator())
    // };
    // let onPostChange = (text: string) => {
    //     props.store.dispatch(updateNewPostTextActionCreator(text));
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState();
                    let addPost = () => store.dispatch(addPostActionCreator());
                    let onPostChange = (text: string) => store.dispatch(updateNewPostTextActionCreator(text));
                    return (
                        <MyPosts updateNewPostText={onPostChange}
                                 addPost={addPost}
                                 posts={state.profilePage.posts}
                                 newPostText={state.profilePage.newPostText}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;