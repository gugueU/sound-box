import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReactAudioPlayer from 'react-audio-player';
import {
    CircularProgressbar,
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
        position: 'relative',
        border : 'solid 1px black',
    },

    avatar: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        color: 'grey'
    },

    avatarDisable: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        color: 'grey',
        filter: 'opacity(.2)'
    },

    miniProgressBar: {
        width: '20%',
        height: '20%',
        position: 'absolute',
        bottom: '8%',
        right: '8%',
        zIndex: 1
    },
}));

function AudioButton(props) {

    const [audio, setAudio] = useState(undefined);
    const [isPlaying, setIsPlaying] = useState(false);
    const [percentage, setPercentage] = useState(0);
    const [canPlay, setCanPlay] = useState(false);

    const playAudio = () => {
        setPercentage(0);
        audio.audioEl.play();
        props.setSoundPlaying(props.label);
        setInterval(function () {
            setPercentage(Math.trunc(audio.audioEl.currentTime / audio.audioEl.duration * 100));
        }, 100);
    };

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

    if(audio && audio.audioEl){
        audio.audioEl.onloadedmetadata =() =>  {setCanPlay(true)}
    }

    const onEnded = () => {
        setPercentage(100);
        setIsPlaying(false);
        props.setSoundPlaying(undefined);
    };

    const classes = useStyles(props.width / 3);
    console.log(props.width);
    return (
        <>
            <ReactAudioPlayer
                className="audio-element"
                ref={(element) => setAudio(element)}
                src={props.soundFile}
                volume={props.volume === undefined ? 1.0 : props.volume}
                onEnded={() => onEnded()}
                loop={props.repeat}
                onCanPlayThrough={() => setCanPlay(true)}S
            />
            {props.visible &&
            <div className={classes.root}>
                <Avatar
                    src={props.image}
                    alt={props.label}
                    onClick={() => canPlay && handler()}
                    className={canPlay ? classes.avatar: classes.avatarDisable}
                    variant='square'
                >
                    {props.label}
                </Avatar>
                {isPlaying && <CircularProgressbar
                    value={percentage}
                    className={classes.miniProgressBar}
                    strokeWidth={40}
                    styles={buildStyles({
                        pathTransition:
                            percentage === 0 ? "none" : "stroke-dashoffset 0.0s ease 0s",
                        trailColor: 'orange',
                        pathColor: 'black',
                        strokeLinecap: "butt"
                    })}
                />}
            </div>}
        </>
    )
}

export default AudioButton;
