import React from 'react';
import s from "./Navbar.module.css"
import {NavLink} from 'react-router-dom';
import {Friends} from './Friends/Friends';
import {StoreType} from '../../App';

type NavbarPropsType = {
    store: StoreType
}

const Navbar = (props:NavbarPropsType) => {
    const state = props.store.getState().sidebar;

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <br/>
                <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div>
                <Friends friends={state.friends}/>
            </div>
        </nav>
    )
}

export default Navbar;