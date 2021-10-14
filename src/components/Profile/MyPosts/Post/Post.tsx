import React from 'react';
import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.pinimg.com/originals/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"/>
            post1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}

export default Post;