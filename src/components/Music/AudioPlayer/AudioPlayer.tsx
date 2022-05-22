import React, { useState, useEffect, useRef } from 'react';
import {tracksType} from '../Music';
import s from "./AudioPlayer.module.css"
import {AudioControls} from './AudioControls/AudioControls';
import {TracksList} from '../TrackList/TrackList';


type AudioPlayerPropsType = {
    tracks: tracksType
}

export const AudioPlayer = (props:AudioPlayerPropsType) => {
    // State
    const [initialState, setInitialState] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    // Destructure for conciseness
    const { title, artist, color, image, audioSrc } = props.tracks[trackIndex];

    // Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;

    const toPrevTrack = () => {
        if (trackIndex - 1 < 0) {
            setTrackIndex(props.tracks.length - 1);
        } else {
            setTrackIndex(trackIndex - 1);
        }
    }

    const toNextTrack = () => {
        if (trackIndex < props.tracks.length - 1) {
            setTrackIndex(trackIndex + 1);
        } else {
            setTrackIndex(0);
        }
    }

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        //@ts-ignore
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                toNextTrack();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, 1000);
    }
    const onScrub = (value: any) => {
        // Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);
    }
    const onScrubEnd = () => {
        // If not already playing, start
        if (!isPlaying) {
            setIsPlaying(true);
        }
        startTimer();
    }
    const playTrackFromTheList = (id:number) => {
        setTrackIndex(id)
        setIsPlaying(true)
        setInitialState(true)
    }
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
    }, []);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);
        setTrackProgress(audioRef.current.currentTime);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
            startTimer();
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true;
        }
    }, [trackIndex]);



    const tracksList = props.tracks.map((t,index) => <div key={index}>
        <TracksList track={t}
                    trackIndex={trackIndex}
                    index={index}
                    playTrackFromTheList={playTrackFromTheList}
                    isPlaying={isPlaying}
                    initialState={initialState}
                    setIsPlaying={setIsPlaying}/>
    </div>)

    const inputStyle = initialState ? {background: trackStyling,cursor:"pointer"} : {background: trackStyling}

    return (
        <div className={s.audioPlayer}>
            <div className={s.trackInfo}>
                <img
                    className={s.artwork}
                    src={image}
                    alt={`track artwork for ${title} by ${artist}`}
                />
                {initialState && <div>
                    <h2 className={s.title}>{title}</h2>
                    <h3 className={s.artist}>{artist}</h3>
                </div>
                }
                <AudioControls isPlaying={isPlaying}
                               onPrevClick={toPrevTrack}
                               onPlayPauseClick={setIsPlaying}
                               initialState={initialState}
                               onNextClick={toNextTrack}/>
                <input
                    disabled={!initialState}
                    type="range"
                    value={trackProgress}
                    step="1"
                    min="0"
                    max={duration ? duration : `${duration}`}
                    className={s.progress}
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    style={inputStyle}
                />
            </div>
            <br/>
            <div>
                {tracksList}
            </div>
        </div>
    );
}