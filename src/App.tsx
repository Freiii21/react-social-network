import React from 'react';
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
import { useSelector } from 'react-redux';
import {AppStateType} from './redux/redux-store';


const App = () => {
    const isAuth = useSelector<AppStateType, boolean>(store => store.auth.isAuth);
    const appWrapperClass = isAuth ? "app-wrapper" : `${"app-wrapper"} ${"withoutNavbar"}`;
    return (
        <div className={appWrapperClass}>
            {/*my own part*/}
            {isAuth
                ? <Redirect to="/profile/:userId?"/>
                : <Redirect to="/login"/>
            }
            {/*my own part*/}

            <HeaderContainer/>
            {isAuth && <NavbarContainer />}
            {/*<NavbarContainer />*/}
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
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
