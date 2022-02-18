import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';
import defaultUserPhoto from '../../../assets/users/user1.jpg';
import {ProfileStatus} from './ProfileStatus';

type ProfileInfoPropsType = {
    profile:ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small ? props.profile.photos.small : defaultUserPhoto}/><br/>
                <span>{props.profile.fullName}</span><br/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;