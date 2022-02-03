import React from 'react';
import s from './FormsControls.module.css'

type TextareaPropsType = {

}

// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={s.formControl + " " + s.error}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            <span>some error</span>
        </div>
    )
}