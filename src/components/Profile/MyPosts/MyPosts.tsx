import React, {ChangeEvent, useState} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostsPropsType} from './MyPostsContainer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
// import {maxLengthCreator, required} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

type PostsFormDataType = {
    newPostBody: string
}

// const maxLength = maxLengthCreator(100)

const MyPosts = React.memo((props: MyPostsPropsType) => {
    let postsElements = props.posts.map((p,index) => <Post message={p.message} key={index} likesCount={p.likesCount}/>);

    const [postText, setPostText] = useState<string>("");
    const onPostTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setPostText(e.currentTarget.value)
    }

    const addNewPost = () => {
        props.addPost(postText);
        setPostText("");
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div className={s.inputAndButtonField}>
                <div>
                    <textarea placeholder="Type a post..."
                              onChange={onPostTextChange}
                              value={postText}
                              className={s.input}/>
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