import React from 'react';
import s from "./TrackList.module.css"
import { trackType } from '../Music';

type TracksListPropsType = {
    track: trackType
    trackIndex: number
    index:number
    playTrackFromTheList: (id:number) => void
    isPlaying:boolean
    initialState:boolean
    setIsPlaying: (state:boolean) => void
}

export const TracksList = (props:TracksListPropsType)=> {
    const singleTrackRow = props.index === props.trackIndex && props.initialState ? `${s.main} ${s.activeTrack}` : s.main;

    return (
        <div className={singleTrackRow}>
            <div style={{display:'inline-block',width:"70px"}}>{props.track.title}</div>
            {props.index === props.trackIndex
                ? !props.isPlaying
                    ? <button onClick={()=>props.playTrackFromTheList(props.index)}>play</button>
                        :<button onClick={()=>props.setIsPlaying(false)}>pause</button>
                : null
            }
            {props.index !== props.trackIndex &&
            <button onClick={()=>props.playTrackFromTheList(props.index)}>play</button>
            }
        </div>
    )
}

// <button onClick={()=>props.setIsPlaying(false)}>pause</button>