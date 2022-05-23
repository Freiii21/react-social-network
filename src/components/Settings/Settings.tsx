import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';

export const Settings = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div>
            Settings
            {/*Background color - black with flying elements as in Sveta's portfolio?*/}
            {/*logo - normal and underwater(spanch bob)*/}
        </div>
    )
}