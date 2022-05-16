import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p) => <Post message={p.message}
                                                     key={p.id}
                                                     id={p.id}
                                                     avatar={props.avatar}
                                                     likeStatus={p.isLikedIt}
                                                     handleLike={props.handleLike}
                                                     deletePost={props.deletePost}
                                                     likesCount={p.likesCount}/>);

    const [postText, setPostText] = useState<string>("");
    const [error, setError] = useState<string>("");
    const onPostTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
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