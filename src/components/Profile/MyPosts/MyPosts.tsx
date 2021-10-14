import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                <Post message={'hi, how are you?'} likescount={15}/>
                <Post message={"It's my first post!"} likescount={20}/>
            </div>
        </div>
    )
}

export default MyPosts;