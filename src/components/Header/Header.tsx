import React from 'react';
import s from './Header.module.css';
import reactLogo from './../../assets/header/logo.png'
import underwaterLogo1 from './../../assets/header/underwater1.png'
import {NavLink} from 'react-router-dom';
import {appLogoType} from '../../redux/app-reducer';
import {useSelector} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    const appLogo = useSelector<AppStateType, appLogoType>(state => state.app.appLogo)

    return (
        <header className={s.header}>
            <NavLink to={'/profile'}>
                {appLogo === "react" && <img src={reactLogo} alt="logo" className={s.reactLogo}/>}
                {appLogo === "underwater" && <img src={underwaterLogo1} alt="logo" className={s.underwaterLogo}/>}
            </NavLink>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.authorizedUser}>
                        <div className={s.username}>Hello, {props.login}</div>
                        <div className={s.logout}>
                            <span onClick={props.logout}>Sign out</span>
                        </div>
                    </div>
                    : null
                }
            </div>
        </header>
    )
}

export default Header;