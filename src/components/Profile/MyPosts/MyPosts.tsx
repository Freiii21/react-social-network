import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {ActionsTypes, PostsType, addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

type MyPostsPropsType = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => props.dispatch(addPostActionCreator());


    let onPostChange = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value;
            props.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;