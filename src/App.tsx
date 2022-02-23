import React, {useEffect} from 'react';
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom';
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
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    const initialized = useSelector<AppStateType, boolean>(store => store.app.initialized);
    const isAuth = useSelector<AppStateType, boolean>(store => store.auth.isAuth);
    const appWrapperClass = isAuth ? 'app-wrapper' : `${'app-wrapper'} ${'withoutNavbar'}`;

    const navigate = useNavigate();


    if(!initialized){
        return <Preloader />
    }

    return (
        <div className={appWrapperClass}>
            {!isAuth && <Navigate to={'/login'}/>}
            <HeaderContainer/>
            {isAuth && <NavbarContainer/>}
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/" element={<ProfileContainer/>}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                    <Route path="/dialogs" element={<Dialogs/>}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
