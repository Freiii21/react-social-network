import React from 'react';
import Header from './Header';
import {setAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {usersAPI} from '../../api/api';

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        usersAPI.authUser()
            .then(data => {
                if (data.resultCode === 0){
                    const {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
        return (
            <Header isAuth={this.props.isAuth} login={this.props.login}/>
        )
    }
}
type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchToPropsType = {
    setAuthUserData: (userId:number, email:string, login:string) => void;
}
type HeaderContainerPropsType = MapStateToPropsType & MapDispatchToPropsType;

const mapStateToProps = (state: AppStateType):MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);