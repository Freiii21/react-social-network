import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {ActionsTypes, StateType} from './redux/state';

export type AppPropsType = {
    state: StateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="app-wrapper-content">
                {/*<Route path='/profile' component={Profile}/>*/}
                <Route path="/profile" render={() => <Profile
                    profilePage={props.state.profilePage}
                    dispatch={props.dispatch}
                />
                }/>
                <Route path="/dialogs"
                       render={() => <Dialogs
                           state={props.state.messagesPage}
                           dispatch={props.dispatch}
                       />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
