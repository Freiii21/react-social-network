import React from 'react';
import "./Profile.css"

const Profile = () => {
    return (
        <div className={"content"}>
            <div>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg/700px-New_York_Midtown_Skyline_at_night_-_Jan_2006_edit1.jpg"/>
            </div>
            <div>
                ava+desc
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className="posts">
                    <div className="item">
                        post1
                    </div>
                    <div className="item">
                        post2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;