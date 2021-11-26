import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {NewStoreType} from '../../App';

type ProfilePropsType = {
    // store: StoreType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            {/*<MyPostsContainer store={props.store}/>*/}
            <MyPostsContainer />
        </div>
    )
}

export default Profile;