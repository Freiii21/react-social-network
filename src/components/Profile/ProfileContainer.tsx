import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, ProfileType, setUserProfile} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component<ProfilePropsType2> {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = "2";
        }
        this.props.getUserProfile(+userId);
    }

    render() {
        if(!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <Profile /*{...this.props}*/ profile={this.props.profile}/>
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
    getUserProfile: (userId: number) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;

type PathParamsType = {
    userId: string
}
export type ProfilePropsType2 = RouteComponentProps<PathParamsType> & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent)