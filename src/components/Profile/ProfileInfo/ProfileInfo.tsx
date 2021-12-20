import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileType} from '../../../redux/profile-reducer';

type ProfileInfoPropsType = {
    profile:ProfileType | null
}

const ProfileInfo = (props:ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.image}>
                <img
                    src="/images/Profile/ProfileInfo/image.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/><br/>
                <span>{props.profile.fullName}</span><br/>
                <span>status: {props.profile.aboutMe}</span>
            </div>
        </div>
    )
}

export default ProfileInfo;