import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReactAudioPlayer from 'react-audio-player';
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        fontSize: 'x-small',
        color: 'white',
        width: 100,
        height: 100,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },

    avatar: {
        color: 'IndianRed',
        borderColor: 'IndianRed',
        border: 'solid 4px',
        width: 90,
        height: 90,
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    avatarPlaying: {
        color: 'IndianRed',
        width: '90%',
        height: '90%',
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    progressBar: {
        width: 80,
        height: 80,
    },

    miniProgressBar: {
        width: 20,
        height: 20,
    },
    info: {
        color: 'black',
    }
}));

function AudioButton(props) {

    const [audio, setAudio] = useState(undefined);
    const [isPlaying, setIsPlaying] = useState(false);
    const [percentage, setPercentage] = useState(0);

    const playAudio = () => {
        setPercentage(0);
        audio.audioEl.play();
        props.setSoundPlaying(props.label);
        setInterval(function(){
            setPercentage(Math.trunc(audio.audioEl.currentTime/audio.audioEl.duration *100));
        },100);
    }

    const stopAudio = () => {
        audio.audioEl.pause();
        audio.audioEl.currentTime = 0;
        setPercentage(0);
    };

    useEffect(() => {
        if (isPlaying && props.soundPlaying !== props.label) {
            stopAudio();
            setIsPlaying(false);
        }
    }, [props.soundPlaying]);

    const handler = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            props.setSoundPlaying(undefined);
            stopAudio();
        } else {
            playAudio();
        }

    };

    const onEnded = () => {
        setPercentage(100);
        setIsPlaying(false);
        props.setSoundPlaying(undefined);
    };

    const classes = useStyles();
    return (
        <>
            {props.visible && <div className={classes.root}>
                {!isPlaying && <Avatar
                    src={props.image}
                    alt={props.label}
                    onClick={() => handler()}
                    className={classes.avatar}
                    variant='square'
                >
                    {props.label.charAt(0)}
                </Avatar>}
                {isPlaying &&
                <>
                <CircularProgressbarWithChildren
                    value={percentage}
                    className={classes.progressBar}
                    strokeWidth={15}
                    styles={buildStyles({
                        pathTransition:
                            percentage === 0 ? "none" : "stroke-dashoffset 0.0s ease 0s",
                        pathColor: 'IndianRed',
                        trailColor: 'grey',
                        backgroundColor: 'grey',
                        strokeLinecap: "butt"
                    })}
                >

                <Avatar
                    src={props.image}
                    alt={props.label}
                    onClick={() => handler()}
                    className={classes.avatarPlaying}
                    variant='circle'
                    />
                </CircularProgressbarWithChildren>
                {/*<CircularProgressbar*/}
                {/*    value={percentage}*/}
                {/*    className={classes.miniProgressBar}*/}
                {/*    strokeWidth={50}*/}
                {/*    styles={buildStyles({pathTransition:*/}
                {/*            percentage === 0 ? "none" : "stroke-dashoffset 0.0s ease 0s",*/}
                {/*        pathColor: 'IndianRed',*/}
                {/*        trailColor: 'grey',*/}
                {/*        backgroundColor: 'grey',*/}
                {/*        strokeLinecap: "butt"*/}
                {/*    })}*/}
                {/*/>*/}
                </>
                }
            </div>}
            <ReactAudioPlayer
                className="audio-element"
                ref={(element) => setAudio(element)}
                src={props.soundFile}
                volume={props.volume === undefined ? 1.0 : props.volume}
                onEnded={() => onEnded()}
                loop={props.repeat}
            />
        </>
    )
}

export default AudioButton;
