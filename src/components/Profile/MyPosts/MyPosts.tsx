import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

const MyPosts = React.memo((props: MyPostsPropsType) => {
    const [showModalWindow, setShowModalWindow] = useState<boolean>(false)
    const [postText, setPostText] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [postIdForDeletion, setPostIdForDeletion] = useState<number>(0);

    const showModalOnDeletePost = (status: boolean, postId: number) => {
        setShowModalWindow(status)
        setPostIdForDeletion(postId);
    }
    const onDeletePost = () => {
        props.deletePost(postIdForDeletion)
        setShowModalWindow(false)
    }
    const onCancelDeletePost = () => {
        showModalOnDeletePost(false, 0)
    }

    let postsElements = props.posts.map((p) => <Post message={p.message}
                                                     key={p.id}
                                                     id={p.id}
                                                     avatar={props.avatar}
                                                     likeStatus={p.isLikedIt}
                                                     handleLike={props.handleLike}
                                                     showModalOnDeletePost={showModalOnDeletePost}
                                                     likesCount={p.likesCount}/>);

    const onPostTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        setError("")
        setPostText(e.currentTarget.value)
    }
    const addNewPost = () => {
        if (postText === ""){
            setError("Post cannot be empty")
        } else {
            props.addPost(postText);
            setPostText("");
        }
    }

    return (
        <div>
            <div className={s.postsBlock}>
                <div className={s.postsTitle}>My posts</div>
                <div className={s.inputAndButtonField}>
                    <div className={s.inputField}>
                    <textarea placeholder="Type a post..."
                              onChange={onPostTextChange}
                              value={postText}
                              className={s.input}/>
                        {error && <div className={s.inputError}>{error}</div>}
                    </div>
                    <div>
                        <button className={s.addPostButton} onClick={addNewPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
            {showModalWindow && <div>
                <div className={s.backgoundForModalWindow}/>
                <div className={s.modalWindowField}>
                    <div className={s.modalWindow}>
                        <div className={s.confirmField}>Delete the post?</div>
                        <div>
                            <button className={s.confirmButton} onClick={onDeletePost}>Yes</button>
                            <button className={s.confirmButton} onClick={onCancelDeletePost}>No</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
})

// const addPostForm = (props: InjectedFormProps<PostsFormDataType>) => {
//     return (
//         <form onSubmit={props.handleSubmit} className={s.inputAndButtonField}>
//             <div>
//                 <Field component={Textarea}
//                        name="newPostBody"
//                        placeholder="Type a post..."
//                        // validate={[required, maxLength]}
//                        className={s.input}
//                 />
//             </div>
//             <div>
//                 <button className={s.addPostButton}>Add post</button>
//             </div>
//         </form>
//     )
// }
//
// const AddPostFormRedux = reduxForm<PostsFormDataType>({form: "ProfileAddPostForm"})(addPostForm);

export default MyPosts;