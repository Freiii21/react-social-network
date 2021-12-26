import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css';

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src="/images/Header/logo.png" alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.username}>Hello, {props.login}</div>
                    : <div className={s.login}>
                        <NavLink to={'/login'}>Login</NavLink>
                      </div>
                }
            </div>
        </header>
    )
}

export default Header;