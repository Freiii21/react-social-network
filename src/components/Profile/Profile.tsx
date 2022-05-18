import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';
import s from "./Profile.module.css"


export type ProfilePropsType = {
    isOwner:boolean
    savePhoto:(photo: File)=>void
    profile:ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div className={s.profilePage}>
            <ProfileInfo
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            {props.isOwner && <MyPostsContainer />}
            {!props.isOwner && <div className={s.emptyPostsField}>There are no user`s posts...</div>}
        </div>
    )
}

export default Profile;