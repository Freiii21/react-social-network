import React, {ChangeEvent, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}
type StateType = {
    editMode: boolean
    status: string
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    // state = {
    //     editMode: false,
    //     status: this.props.status
    // }
    const [editMode, setEditMode] = useState<boolean>(false)
    // activateEditMode = () => {
    //     this.setState({
    //         editMode: true
    //     })
    // }
    // deactivateEditMode = () => {
    //     this.setState({
    //         editMode: false
    //     })
    //     this.props.updateStatus(this.state.status);
    // }
    // onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     this.setState({
    //         status: e.currentTarget.value
    //     })
    // }
    //
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
                <span onDoubleClick={this.activateEditMode}>{props.status || 'Set your status...'}</span>
            </div>}
            {editMode &&
            <div>
                <input autoFocus
                       onBlur={this.deactivateEditMode}
                       value={state.status}
                       onChange={this.onStatusChange}
                />
            </div>}
        </div>
    )
}