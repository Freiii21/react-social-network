import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img
                    src="/images/Profile/ProfileInfo/image.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    )
}

export default ProfileInfo;