import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/700px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    )
}

export default Profile;