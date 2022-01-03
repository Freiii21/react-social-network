import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavbarContainer />
            <div className="app-wrapper-content">
                <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/users" render={() => <UsersContainer />}/>
            </div>
        </div>
    );
}

export default App;
