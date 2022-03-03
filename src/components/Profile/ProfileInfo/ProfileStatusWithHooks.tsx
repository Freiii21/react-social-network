import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>("")

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    // componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: StateType) {
    //     if(prevProps.status !== this.props.status){
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    return (
        <div>
            {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode}>{props.status || 'Set your status...'}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus
                       onBlur={deactivateEditMode}
                       value={status}
                       onChange={onStatusChange}
                />
            </div>}
        </div>
    )
}