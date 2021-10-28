import React from 'react';
import s from "./Header.module.css";

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://www.technoscore.com/images/services/react-js-icon.png"/>
        </header>
    )
}

export default Header;