import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';
import { AppStateType } from '../../redux/redux-store';
import {appLogoType, backgroundModeType, setAppSettingsTC} from '../../redux/app-reducer';
import s from './Settings.module.css'

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
        <div className={s.settingsTab}>
            <div className={s.title}>Global settings</div>
            <div className={s.line}/>
            <div className={s.singleSetting}>
                <span className={s.singleSettingTitle}>Background mode:</span>
                <div className={s.singleSettingOptionsFiled}>
                    <label>
                        <input type="radio"
                               name="backgroundMode"
                               value={backgroundModeOptions[0]}
                               checked={backgroundModeOptions[0] === backgroundMode}
                               className={s.radioButton}
                               onChange={onBackgroundModeChange}/>
                        White (default)
                    </label>
                    <label>
                        <input type="radio"
                               name="backgroundMode"
                               value={backgroundModeOptions[1]}
                               checked={backgroundModeOptions[1] === backgroundMode}
                               className={s.radioButton}
                               onChange={onBackgroundModeChange}/>
                        Dark
                    </label>
                </div>
            </div>
            <div className={s.singleSetting}>
                <span className={s.singleSettingTitle}>Logo mode:</span>
                <div className={s.singleSettingOptionsFiled}>
                    <label>
                        <input type="radio"
                               name="logoMode"
                               value={appLogoOptions[0]}
                               checked={appLogoOptions[0] === appLogo}
                               className={s.radioButton}
                               onChange={onLogoModeChange}/>
                        React (default)
                    </label>
                    <label>
                        <input type="radio"
                               name="logoMode"
                               value={appLogoOptions[1]}
                               checked={appLogoOptions[1] === appLogo}
                               className={s.radioButton}
                               onChange={onLogoModeChange}/>
                        Underwater
                    </label>
                </div>
            </div>
        </div>
    )
}