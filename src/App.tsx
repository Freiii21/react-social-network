import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {NavbarContainer} from './components/Navbar/NavbarContainer';

// export type NewStoreType = {
//     getState: () => StateType
//     dispatch: (action: ActionsTypes) => void
// }

export type AppPropsType = {
    // store: StoreType
}

const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            {/*<Navbar store={props.store}/>*/}
            <NavbarContainer />
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
