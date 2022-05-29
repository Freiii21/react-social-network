import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import {appLogoType, backgroundModeType, setAppSettingsTC} from '../../redux/app-reducer';

export const Settings = () => {
    const dispatch = useDispatch();

    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);
    const backgroundMode = useSelector<AppStateType, backgroundModeType>(state => state.app.backgroundMode);
    const backgroundModeOptions:Array<backgroundModeType> = ["white", "dark"];
    const appLogo = useSelector<AppStateType, appLogoType>(state => state.app.appLogo);
    const appLogoOptions:Array<appLogoType> = ["react", "underwater"];

    const onBackgroundModeChange = (e:ChangeEvent<HTMLInputElement>) => {
        const backgroundMode = e.currentTarget.value;
        //@ts-ignore
        dispatch(setAppSettingsTC({backgroundMode:backgroundMode}))
    }
    const onLogoModeChange = (e:ChangeEvent<HTMLInputElement>) => {
        const logoMode = e.currentTarget.value;
        //@ts-ignore
        dispatch(setAppSettingsTC({appLogo:logoMode}))
    }

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div>
            <div>
                <span>Background mode:</span><br/>
                <label>
                    <input type="radio"
                           name="backgroundMode"
                           value={backgroundModeOptions[0]}
                           checked={backgroundModeOptions[0] === backgroundMode}
                           onChange={onBackgroundModeChange}/>
                    White (default)
                </label>
                <br/>
                <label>
                    <input type="radio"
                           name="backgroundMode"
                           value={backgroundModeOptions[1]}
                           checked={backgroundModeOptions[1] === backgroundMode}
                           onChange={onBackgroundModeChange}/>
                    Dark
                </label>
            </div>
            <br/>
            <div>
                <span>Logo mode:</span><br/>
                <label>
                    <input type="radio"
                           name="logoMode"
                           value={appLogoOptions[0]}
                           checked={appLogoOptions[0] === appLogo}
                           onChange={onLogoModeChange}/>
                    React (default)
                </label>
                <br/>
                <label>
                    <input type="radio"
                           name="logoMode"
                           value={appLogoOptions[1]}
                           checked={appLogoOptions[1] === appLogo}
                           onChange={onLogoModeChange}/>
                    Underwater
                </label>
            </div>
        </div>
    )
}