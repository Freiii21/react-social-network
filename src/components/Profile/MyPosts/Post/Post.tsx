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
            <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
            {props.message}
            <div>
                <span>likes {props.likesCount}</span>
            </div>
        </div>
    )
}
export default Post;