import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/700px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+desc
            </div>
        </div>
    )
}

export default ProfileInfo;