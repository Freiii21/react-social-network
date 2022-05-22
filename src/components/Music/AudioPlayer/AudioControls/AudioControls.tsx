import { ReactComponent as Play } from './../../../../assets/music/player/play.svg';
import { ReactComponent as Pause } from './../../../../assets/music/player/pause.svg';
import { ReactComponent as Next } from './../../../../assets/music/player/next.svg';
import { ReactComponent as Prev } from './../../../../assets/music/player/prev.svg';
import s from "./AudioControls.module.css"

type AudioControlsPropsType = {
    isPlaying: boolean
    onPlayPauseClick: (value:boolean)=>void
    onPrevClick: () => void
    initialState:boolean
    onNextClick: () => void
}

export const AudioControls = (props: AudioControlsPropsType) => {
    const disabledButtons = !props.initialState;
    const buttonsStyle = props.initialState ? {cursor:"pointer"} : {};
    return (
        <div>
            <div className={s.audioControls}>
                <button
                    type="button"
                    className={s.prev}
                    aria-label="Previous"
                    onClick={props.onPrevClick}
                    disabled={disabledButtons}
                    style={buttonsStyle}
                >
                    <Prev />
                </button>
                {props.isPlaying ? (
                    <button
                        type="button"
                        className={s.pause}
                        onClick={() => props.onPlayPauseClick(false)}
                        aria-label="Pause"
                        disabled={disabledButtons}
                        style={buttonsStyle}
                    >
                        <Pause />
                    </button>
                ) : (
                    <button
                        type="button"
                        className={s.play}
                        onClick={() => props.onPlayPauseClick(true)}
                        aria-label="Play"
                        disabled={disabledButtons}
                        style={buttonsStyle}
                    >
                        <Play />
                    </button>
                )}
                <button
                    type="button"
                    className={s.next}
                    aria-label="Next"
                    onClick={props.onNextClick}
                    disabled={disabledButtons}
                    style={buttonsStyle}
                >
                    <Next />
                </button>
            </div>
        </div>
    )
}