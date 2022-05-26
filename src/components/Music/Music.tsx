import React from 'react';
import track1 from "../../assets/music/intro.mp3"
import track2 from "../../assets/music/ATB_-_Ecstasy.mp3"
import track3 from "../../assets/music/Sting - Desert Rose (feat. Cheb Mami).mp3"
import cover1 from "../../assets/music/covers/cover1.jpg"
import s from "./Music.module.css"
import defaultCover from './../../assets/music/covers/defaultMusicCover.jpg'
import {AudioPlayer} from './AudioPlayer/AudioPlayer';
import {AppStateType} from '../../redux/redux-store';
import {useSelector} from 'react-redux';
import { Navigate } from 'react-router-dom';


export type trackType = {
    title: string
    artist: string
    audioSrc: string
    image: string
    durationTime: string
}
export type tracksType = Array<trackType>

export const Music = () => {
    const isAuth = useSelector<AppStateType, boolean>(state => state.auth.isAuth);

    const tracks = [
        {
            title: "Intro",
            artist: "The XX",
            audioSrc: track1,
            image: cover1,
            durationTime: "02:07"
        },
        {
            title: "Ecstasy",
            artist: "ATB",
            audioSrc: track2,
            image: defaultCover,
            durationTime: "04:08"
        },
        {
            title: "Desert Rose",
            artist: "Sting",
            audioSrc: track3,
            image: defaultCover,
            durationTime: "04:08"
        }
    ]

    if (!isAuth) return <Navigate to="/login"/>

    return (
        <div className={s.musicTab}>
            <AudioPlayer tracks={tracks}/>
        </div>
    )
}
// const audioElement = new Audio(track1);
// audioElement.play();
// audioElement.pause();
//
// const currentTime = audioElement.currentTime;
// const ended = audioElement.ended;
// const duration = audioElement.duration;

// <div>
//     <audio controls controlsList="nodownload">
//         <source src={track1} type="audio/mp3" />
//     </audio>
//     <br/>
//     <button onClick={() => audioElement.play()}>play</button>
//     <br/>
//     <button onClick={() => audioElement.pause()}>pause</button>
// </div>