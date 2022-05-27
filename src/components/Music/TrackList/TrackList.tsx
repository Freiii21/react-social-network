import React from 'react';
import s from "./TrackList.module.css"
import { trackType } from '../Music';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import {faPause} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
    const singleTrackPlayPauseIcon = props.initialState ? s.playPauseIcons : s.playPassiveIcons;



    const onPlay = () => {props.playTrackFromTheList(props.index)}
    const onPause = () => {props.setIsPlaying(false)}

    return (
        <div className={singleTrackRow}>
            <div className={s.trackInfoField}>
                <div className={s.trackTitleAndArtist}>
                    <span className={s.artist}>{props.track.artist}</span>
                    <span> / </span>
                    {props.track.title}
                </div>
                <div>
                    {props.track.durationTime}
                </div>
            </div>
            {props.index === props.trackIndex
                ? !props.isPlaying
                    ? <FontAwesomeIcon icon={faPlay} className={singleTrackPlayPauseIcon} onClick={onPlay}/>
                    : <FontAwesomeIcon icon={faPause} className={singleTrackPlayPauseIcon} onClick={onPause}/>
                : null
            }
            {props.index !== props.trackIndex &&
            <FontAwesomeIcon icon={faPlay} className={s.playPassiveIcons} onClick={onPlay}/>
            }
        </div>
    )
}
