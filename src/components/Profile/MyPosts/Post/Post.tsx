import React from 'react';
import s from "./Post.module.css"
import ava from './../../../../assets/users/user1.jpg'
import like from './../../../../assets/profile/like.svg'
import like0 from './../../../../assets/profile/like0.svg'
import deleteIcon from './../../../../assets/deleteIcon.svg'

type PostPropsType = {
    message: string
    id: number
    avatar: string | undefined
    likeStatus: boolean
    handleLike:(postId:number, status:boolean) => void
    showModalOnDeletePost:(status: boolean, postId: number)=>void
    likesCount: number
}

const Post = (props: PostPropsType) => {
    const likesIcon = props.likesCount > 0 ? like : like0;
    const onLikeClick = () => {
        props.handleLike(props.id, !props.likeStatus)
    }
    const showModalOnDeletePost = () => {
        props.showModalOnDeletePost(true, props.id)
    }
    return (
        <div className={s.item}>
            <div className={s.messageBlock}>
                <img className={s.avatar} src={props.avatar ? props.avatar : ava} alt=""/>
                <span>{props.message}</span>
                <img src={deleteIcon} alt="" className={s.delete} onClick={showModalOnDeletePost}/>
            </div>
            <div>
                <span className={s.likes} onClick={onLikeClick}>
                    <img src={likesIcon} alt=""/>
                    {props.likesCount}
                </span>
            </div>
        </div>
    )
}
export default Post;