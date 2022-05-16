import React, {ChangeEvent, useEffect, useState} from 'react';
import s from "./ProfileStatusWithHooks.module.css";
import editIcon from "./../../../../assets/editIcon.svg";

type ProfileStatusPropsType = {
    isOwner:boolean
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)
    useEffect(()=>{
        setStatus(props.status);
    },[props.status])

    const activateEditMode = () => {
        if (props.isOwner){
            setEditMode(true);
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const deactivateEditModeByEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter"){
            setEditMode(false);
            props.updateStatus(status);
        }
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span className={s.status}>
                    <span className={s.statusTitle}>Status:</span>
                    {props.isOwner ?
                        props.status || 'Set your status...'
                        : props.status || '...'
                    }
                </span>
                {props.isOwner && <img src={editIcon} alt="" className={s.editImage} onClick={activateEditMode}/>}
            </div>}
            {editMode &&
            <div className={s.status}>
                <span className={s.statusTitle}>Status: </span>
                <input autoFocus
                       onBlur={deactivateEditMode}
                       onKeyPress={deactivateEditModeByEnter}
                       value={status}
                       onChange={onStatusChange}
                       className={s.input}
                />
            </div>}
        </div>
    )
}