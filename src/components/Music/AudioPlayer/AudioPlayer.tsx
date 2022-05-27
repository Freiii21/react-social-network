import React, {useState, useEffect, useRef, ChangeEvent} from 'react';
import {tracksType} from '../Music';
import s from './AudioPlayer.module.css'
import {AudioControls} from './AudioControls/AudioControls';
import {TracksList} from '../TrackList/TrackList';
import {faVolumeUp} from '@fortawesome/free-solid-svg-icons';
import {faVolumeMute} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultCover from './../../../assets/music/covers/defaultMusicCover.jpg'

type AudioPlayerPropsType = {
    tracks: tracksType
}

export const AudioPlayer = (props: AudioPlayerPropsType) => {
    // Constants
    const maxVolume = 1;
    const initialVolume = 0.5;

    // State
    const [initialState, setInitialState] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [trackVolume, setTrackVolume] = useState(initialVolume);
    const [showVolume, setShowVolume] = useState<boolean>(false)

    // Destructure for conciseness
    const {title, artist, image, audioSrc} = props.tracks[trackIndex];

    // Refs
    const audioRef = useRef(new Audio(audioSrc));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const {duration} = audioRef.current;

    // Duration and volume inputs styling
    const currentPercentage = duration ? `${(trackProgress / duration) * 100}%` : '0%';
    const currentVolumePercentage = initialVolume ? `${(trackVolume / maxVolume) * 100}%` : '0%';
    const durationBackgroundColor = initialState ? "#fff" : "rgba(255,255,255,0.7)"
    const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, 
    color-stop(${currentPercentage}, #228B22), color-stop(${currentPercentage}, ${durationBackgroundColor}))`;
    const volumeStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%,
     color-stop(${currentVolumePercentage}, #FFA500), color-stop(${currentVolumePercentage}, #fff))`;

    // Volume handling
    //@ts-ignore
    const onVolumeIcon = () => {
        if(initialState){
            setShowVolume(!showVolume)
        }
    }
    const onBlurVolumeInput = () => {
        if(initialState){
            setTimeout(()=>{
                setShowVolume(false)
            },150)
        }
    }
    const onVolumeScrub = (e: ChangeEvent<HTMLInputElement>) => {
        setTrackVolume(Number(e.currentTarget.value));
    }

    // Other player actions
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
    const playTrackFromTheList = (id: number) => {
        setTrackIndex(id)
        setIsPlaying(true)
        setInitialState(true)
    }
    const playTrackBeforeInitializing = (state: boolean) => {
        if(!initialState){
            setTrackIndex(0)
            setIsPlaying(true)
            setInitialState(true)
        } else {
            setIsPlaying(state)
        }
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }
        // eslint-disable-next-line
    }, [isPlaying]);

    useEffect(() => {
        // Set initial track volume
        audioRef.current.volume = trackVolume;

        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        // Update track volume
        audioRef.current.volume = trackVolume;
    }, [trackVolume]);

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
        // eslint-disable-next-line
    }, [trackIndex]);


    const tracksList = props.tracks.map((t, index) => <div key={index}>
        <TracksList track={t}
                    trackIndex={trackIndex}
                    index={index}
                    playTrackFromTheList={playTrackFromTheList}
                    isPlaying={isPlaying}
                    initialState={initialState}
                    setIsPlaying={setIsPlaying}/>
    </div>)

    const inputDurationStyle = initialState ? {background: trackStyling, cursor: 'pointer'} : {background: trackStyling}
    const inputVolumeStyle = {background: volumeStyling, cursor: 'pointer'}
    const volumeClass = initialState ? s.volumeIcon : `${s.volumeIcon} ${s.volumeIconDisabled}`
    const trackCover = initialState ? image : defaultCover;

    return (
        <div className={s.audioPlayerAndTracksField}>
            <div className={s.audioPlayer}>
                <img className={s.trackCover} src={trackCover} alt=""/>
                {!initialState
                    ? <div>
                        <h2 className={s.title}>-</h2>
                        <h3 className={s.artist}>-</h3>
                      </div>
                    : <div>
                        <h2 className={s.title}>{title}</h2>
                        <h3 className={s.artist}>{artist}</h3>
                      </div>
                }
                <AudioControls isPlaying={isPlaying}
                               onPrevClick={toPrevTrack}
                               onPlayPauseClick={playTrackBeforeInitializing}
                               initialState={initialState}
                               onNextClick={toNextTrack}/>
                <div className={s.progressAndVolumeField}>
                    <div>
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
                        style={inputDurationStyle}/>
                    </div>
                    <div className={s.volumeField}>
                        {showVolume &&
                            <input
                                type="range"
                                value={trackVolume}
                                step="0.01"
                                min="0"
                                max={maxVolume}
                                className={s.volumeInput}
                                style={inputVolumeStyle}
                                autoFocus
                                onBlur={onBlurVolumeInput}
                                onChange={onVolumeScrub}
                            />
                        }
                        <FontAwesomeIcon icon={trackVolume===0 ? faVolumeMute : faVolumeUp}
                                         className={volumeClass}
                                         onClick={onVolumeIcon}/>
                    </div>
                </div>
            </div>
            <div className={s.trackListField}>
                {tracksList}
            </div>
        </div>
    );
}