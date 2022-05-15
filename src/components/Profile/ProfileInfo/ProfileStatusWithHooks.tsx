import React, {ChangeEvent, useEffect, useState} from 'react';

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
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >
                    <span style={{fontWeight:'bold'}}>Status: </span>
                    {props.isOwner ?
                        props.status || 'Set your status...'
                        : props.status || 'user has not set status'
                    }
                </span>
            </div>}
            {editMode &&
            <div>
                <span style={{fontWeight:'bold'}}>Status: </span>
                <input autoFocus
                       onBlur={deactivateEditMode}
                       value={status}
                       onChange={onStatusChange}
                />
            </div>}
        </div>
    )
}