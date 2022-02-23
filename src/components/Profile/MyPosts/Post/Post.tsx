import React from 'react';
import s from "./Post.module.css"
import ava from './../../../../assets/profile/ava.jpg'
import like from './../../../../assets/profile/like.png'

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.messageBlock}>
                <img src={ava} alt=""/>
                <span>{props.message}</span>
            </div>
            <div>
                <span className={s.likes}>
                    <img src={like} alt=""/>
                    {props.likesCount}
                </span>
            </div>
        </div>
    )
}
export default Post;