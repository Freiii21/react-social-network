import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const Profile = () => {
    let posts:PostsType[] = [
        {id: 1, message: 'hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post!', likesCount: 11},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;