import React from 'react';
import Profile from './Profile';
import axios from 'axios';
import {connect} from 'react-redux';
import {ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';


class ProfileContainer extends React.Component<ProfilePropsType2> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile /*{...this.props}*/ profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
}
export type ProfilePropsType2 = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)