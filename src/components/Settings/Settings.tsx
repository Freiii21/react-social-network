import React, {ChangeEvent, FormEvent, MouseEventHandler, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import {backgroundModeType, setBackgroundModeTC} from '../../redux/app-reducer';

export const Settings = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
    const backgroundMode = useSelector<AppStateType, backgroundModeType>(state => state.app.backgroundMode);
    const backgroundModeOptions:Array<backgroundModeType> = ["white", "dark"];

    const onBackgroundModeChange = (e:ChangeEvent<HTMLInputElement>) => {
        const mode = e.currentTarget.value;
        //@ts-ignore
        dispatch(setBackgroundModeTC(mode))
    }

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div>
            <span>Background mode:</span><br/>
            <label>
                <input type="radio"
                       name="backgroundMode"
                       value={backgroundModeOptions[0]}
                       checked={backgroundModeOptions[0]===backgroundMode}
                       onChange={onBackgroundModeChange}/>
                White (default)
            </label><br/>
            <label>
                <input type="radio"
                       name="backgroundMode"
                       value={backgroundModeOptions[1]}
                       checked={backgroundModeOptions[1]===backgroundMode}
                       onChange={onBackgroundModeChange}/>
                Dark
            </label>
        </div>
    )
}