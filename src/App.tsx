import React, {useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom';
import './App.css';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import Dialogs from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/redux-store';
import {getAuthUserData} from './redux/auth-reducer';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';


const App = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(initializeApp())
    },[])

    const initialized = useSelector<AppStateType, boolean>(store => store.app.initialized);
    const isAuth = useSelector<AppStateType, boolean>(store => store.auth.isAuth);
    const appWrapperClass = isAuth ? "app-wrapper" : `${"app-wrapper"} ${"withoutNavbar"}`;

    if(!initialized){
        return <Preloader />
    }

    return (
        <div className={appWrapperClass}>
            {!isAuth && <Redirect to="/login"/>}

            <HeaderContainer/>
            {isAuth && <NavbarContainer />}
            <div className="app-wrapper-content">
                <Route exact path={["/profile/:userId?","/"]} render={() => <ProfileContainer />}/>
                <Route path="/dialogs" render={() => <Dialogs />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={() => <UsersContainer />}/>
                <Route path="/login" render={() => <Login />}/>
            </div>
        </div>
    );
}

export default App;
