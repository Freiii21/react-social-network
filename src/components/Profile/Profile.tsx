import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {StateType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {StoreType} from '../../App';

type ProfilePropsType = {
    store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;