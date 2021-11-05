import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';


type MyPostsPropsType = {
    posts:PostsType[]
    addPost: (postMessage: string) => void
}

const MyPosts = (props:MyPostsPropsType) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        // props.addPost(newPostElement.current ? newPostElement.current.value : "-----");
        if (newPostElement.current){
            props.addPost(newPostElement.current.value);
        }
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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