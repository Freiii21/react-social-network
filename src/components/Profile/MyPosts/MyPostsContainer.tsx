import {addPostActionCreator, deletePostAC, handleLikeAC, PostType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    posts: PostType[]
    avatar: string | undefined
}
type MapDispatchToPropsType = {
    addPost: (newPostBody: string) => void
    handleLike: (postId:number, status:boolean) => void
    deletePost: (postId:number) => void
}
export type MyPostsPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        avatar: state.profilePage.profile?.photos.large
    }
}
const mapDispatchToProps = (dispatch: Dispatch):MapDispatchToPropsType => {
    return {
        addPost: (newPostBody: string) => {
            dispatch(addPostActionCreator(newPostBody));
        },
        handleLike: (postId:number, status:boolean) => {
            dispatch(handleLikeAC(postId, status));
        },
        deletePost: (postId:number) => {
            dispatch(deletePostAC(postId));
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)