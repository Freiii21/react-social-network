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
import {backgroundModeType, initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {PageNotFound} from './components/NotFound/PageNotFound';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Dialogs = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeApp())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const initialized = useSelector<AppStateType, boolean>(store => store.app.initialized);
    const isAuth = useSelector<AppStateType, boolean>(store => store.auth.isAuth);
    const backgroundMode = useSelector<AppStateType, backgroundModeType>(store => store.app.backgroundMode);
    const appWrapperClass = isAuth ? 'app-wrapper' : `${'app-wrapper'} ${'withoutNavbar'}`;


    const particlesInit = async (main:any) => {
        await loadFull(main);
    };
    const particlesOptions = {
        fpsLimit: 120,
        interactivity: {
            events: {
                // onClick: {
                //     enable: true,
                //     mode: "push",
                // },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#484848",
            },
            links: {
                color: "#484848",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                    // default: "out",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }


    if(!initialized){
        return <Preloader />
    }

    return (
        <div className="appGlobal">
            {backgroundMode === "dark" &&
                <Particles init={particlesInit} className="particles"
                        // @ts-ignore
                        options={particlesOptions}/>
            }
            <div className={appWrapperClass} >
                <HeaderContainer/>
                {isAuth && <NavbarContainer/>}
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Navigate to={'/profile'}/>}/>
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
