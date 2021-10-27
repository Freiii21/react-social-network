import React from 'react';
import s from "./Post.module.css"
import {findAllByDisplayValue} from "@testing-library/react";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <div className={s.messageBlock}>
                <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
                <span>{props.message}</span>
            </div>
            <div>
                <span className={s.likes}>
                    <img src="https://android-soft.org/uploads/posts/2014-06/android-soft_241_likesvk-logo.png"/>
                    {props.likesCount}
                </span>
            </div>
        </div>
    )
}
export default Post;