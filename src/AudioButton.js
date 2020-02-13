import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {soundContext} from "../public/config";
import ReactAudioPlayer from 'react-audio-player';
const useStyles = makeStyles(theme => ({
    root: {
        margin: 5,
        // marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
        fontWeight: 'bold',
        fontSize: 'x-small',
        color: 'white',
        width: 100,
        height: 120,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    label: {
        color: 'crimson',
        width: 80,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    label2: {
        color: 'grey',
        width: 80,
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    avatar: {
        color: 'IndianRed',
        borderColor: 'IndianRed',
        borderStyle: 'solid',
        width: 80,
        height: 80,
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    avatar2: {
        color: 'grey',
        borderColor: 'grey',
        borderStyle: 'solid',
        width: 80,
        height: 80,
        backgroundColor: 'white',
        cursor: 'pointer',
    }
}));

function AudioButton(props) {

    let [audio, setAudio] = useState(undefined);
    let [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
            props.setSoundPlaying(props.label);
            audio.audioEl.play();
    };

    const stopAudio = () => {
        audio.audioEl.pause();
        audio.audioEl.currentTime = 0;
    };

    useEffect(() => {
        if (isPlaying && props.soundPlaying !== props.label) {
            stopAudio();
            setIsPlaying(false);
        }
    });

    const handler = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? stopAudio() : playAudio();
    };

    const onEnded = () => {
        setIsPlaying(false);
        props.setSoundPlaying(undefined);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={isPlaying ? classes.label2 : classes.label}>{props.label}</div>
            <Avatar src={'./static/media/' +  props.image} alt={props.label} onClick={() => handler()}
                    className={isPlaying ? classes.avatar2 : classes.avatar}>
                {props.label.charAt(0)}
            </Avatar>

            <ReactAudioPlayer
                className="audio-element"
                ref={(element) => setAudio(element)}
                src={soundContext + props.soundFile}
                volume={props.volume === undefined ? 1.0 : props.volume}
                onEnded={() => onEnded()}
            />
        </div>
    )
}

export default AudioButton;
