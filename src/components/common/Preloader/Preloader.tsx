import React from 'react';
import preloader from '../../../assets/preloader.svg';
import s from './preloader.module.css'

export type PreloaderPropsType = {}

export const Preloader = (props:PreloaderPropsType) => {
    return (
        <div>
            <img src={preloader}
                 alt="spinner"
                 className={s.spinner}/>
        </div>
    )
}