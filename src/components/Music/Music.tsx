import React from 'react';
import track1 from "../../assets/music/intro.mp3"
import track2 from "../../assets/music/ATB_-_Ecstasy.mp3"
import s from "./Music.module.css"
import defaultCover from './../../assets/music/covers/defaultMusicCover.jpg'
import {AudioPlayer} from './AudioPlayer/AudioPlayer';


export type trackType = {
    title: string
    artist: string
    audioSrc: string
    image: string
    color: string
}
export type tracksType = Array<trackType>

export const Music = () => {
    const tracks = [
        {
            title: "Intro",
            artist: "The XX",
            audioSrc: track1,
            image: defaultCover,
            color: "green"
        },
        {
            title: "Ecstasy",
            artist: "ATB",
            audioSrc: track2,
            image: defaultCover,
            color: "yellow"
        }
    ]

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

// <div className={s.musicTab}>
//     <audio controls controlsList="nodownload">
//         <source src={track1} type="audio/mp3" />
//     </audio>
//     <br/>
//     <button onClick={() => audioElement.play()}>play</button>
//     <br/>
//     <button onClick={() => audioElement.pause()}>pause</button>
// </div>