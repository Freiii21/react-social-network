import React from 'react';
import {Route} from 'react-router-dom';
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


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer />
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
