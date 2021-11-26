import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {ActionsTypes, StateType} from './redux/store';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

export type StoreType = {
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type AppPropsType = {
    // store: StoreType
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            {/*<Navbar store={props.store}/>*/}
            <Navbar />
            <div className="app-wrapper-content">
                {/*<Route path="/profile" render={() => <Profile store={props.store}/>}/>*/}
                {/*<Route path="/dialogs" render={() => <DialogsContainer store={props.store}/>}/>                */}
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/dialogs" render={() => <DialogsContainer />}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
            </div>
        </div>
    );
}

export default App;
