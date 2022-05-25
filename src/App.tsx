import React, {useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import {Settings} from './components/Settings/Settings';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {NavbarContainer} from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {PageNotFound} from './components/NotFound/PageNotFound';
// import space from "./assets/space.jpg"

const Dialogs = React.lazy(() => import('./components/Dialogs/DialogsContainer'));


const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    useEffect(() => {
        dispatch(initializeApp())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const initialized = useSelector<AppStateType, boolean>(store => store.app.initialized);
    const isAuth = useSelector<AppStateType, boolean>(store => store.auth.isAuth);
    const appWrapperClass = isAuth ? 'app-wrapper' : `${'app-wrapper'} ${'withoutNavbar'}`;


    if(!initialized){
        return <Preloader />
    }

    return (
        // <div style={{backgroundImage: `url(${space})`,backgroundSize: "Cover", backgroundPosition: "center",padding:"2vh 0"}}>
        <div style={{padding:"2vh 0"}}>
            <div className={appWrapperClass} >
                <HeaderContainer/>
                {isAuth && <NavbarContainer/>}
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<ProfileContainer/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/dialogs" element={
                            <React.Suspense fallback={<div className="preloader"><Preloader/></div>}>
                                <Dialogs/>
                            </React.Suspense>
                        }/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/404" element={<PageNotFound/>}/>
                        <Route path="*" element={<Navigate to={'/404'}/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
