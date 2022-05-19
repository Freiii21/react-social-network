import React from 'react';
import preloader from '../../../assets/preloader.svg';
import s from './preloader.module.css'

export type PreloaderPropsType = {
    marginTop?: string
}

export const Preloader = (props:PreloaderPropsType) => {

    return (
        <div>
            <img src={preloader}
                 alt="spinner"
                 className={s.spinner}
                 style={{marginTop: props.marginTop}}
            />
        </div>
    )
}