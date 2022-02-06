import React from 'react';
import Header from './Header';
import {getAuthUserData, logout, setAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.authUser();
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
        )
    }
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (userId:number, email:string, login:string, isAuth: boolean) => void;
    authUser: () => void;
    logout: () => void;
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData, authUser: getAuthUserData, logout})(HeaderContainer);