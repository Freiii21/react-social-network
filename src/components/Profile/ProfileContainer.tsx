import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getStatus, getUserProfile, ProfileType, setUserProfile, updateStatus} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-store';
// import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useLocation,useNavigate,useParams} from "react-router-dom";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

//@ts-ignore
function withRouter(Component) {
    //@ts-ignore
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}
//@ts-ignore
class ProfileContainer extends React.Component<ProfilePropsType2> {
    componentDidMount() {
        let userId;
        if(this.props.router.params.userId){
            userId = this.props.router.params.userId;
        } else if (this.props.authorizedUserId){
            userId = this.props.authorizedUserId.toString();
        } else {
            this.props.history.push("/login");
        }
        this.props.getUserProfile(+userId);
        this.props.getStatus(+userId)
    }

    render() {
        return (
            <Profile /*{...this.props}*/
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean

}
type MapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType | null) => void
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
export type OwnPropsType = MapStateToPropsType & MapDispatchToPropsType;

type PathParamsType = {
    userId: string
}
// export type ProfilePropsType2 = RouteComponentProps<PathParamsType> & OwnPropsType;

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
const WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {setUserProfile, getUserProfile})(WithUrlDataContainerComponent)*/
