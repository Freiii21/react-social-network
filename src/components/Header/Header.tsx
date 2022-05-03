import React from 'react';
import s from './Header.module.css';
import logo from './../../assets/header/logo.png'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
    logout: () => void
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth ?
                    <div className={s.authorizedUser}>
                        <div className={s.username}>Hello, {props.login}</div>
                        <div className={s.logout}>
                            <span onClick={props.logout}>Sign out</span>
                        </div>
                    </div>
                    : <></>
                    // <div className={s.login}>
                    //     <NavLink to={'/login'}>Sign in</NavLink>
                    //   </div>
                }
            </div>
        </header>
    )
}

export default Header;