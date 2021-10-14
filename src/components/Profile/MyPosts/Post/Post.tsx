import React from 'react';
import s from "./Post.module.css"

type PostPropsType = {
    message: string
    likescount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
            {props.message}
            <div>
                <span>{props.likescount} likes</span>
            </div>
        </div>
    )
}

export default Post;