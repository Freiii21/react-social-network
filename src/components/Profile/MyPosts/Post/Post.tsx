import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.messageBlock}>
                <img src="/images/Profile/MyPosts/Post/ava.jpg"/>
                <span>{props.message}</span>
            </div>
            <div>
                <span className={s.likes}>
                    <img src="/images/Profile/MyPosts/Post/like.png"/>
                    {props.likesCount}
                </span>
            </div>
        </div>
    )
}
export default Post;