import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {soundContext} from "../public/config";

const useStyles = makeStyles(theme => ({
    root: {
        margin: 5,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 'x-small',
        color: 'white',
        maxWidth: 80,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    label: {
        color: 'crimson',
        width: 60,
        fontSize: 10,
        margin: '5 5 4 5',
        textAlign: 'center',
        fontWeight: 'bold',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },

    label2: {
        color: 'grey',
        width: 60,
        fontSize: 10,
        margin: '5 5 4 5',
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
        width: 60,
        height: 60,
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    avatar2: {
        color: 'grey',
        borderColor: 'grey',
        borderStyle: 'solid',
        width: 60,
        height: 60,
        backgroundColor: 'white',
        cursor: 'pointer',
    }
}));


function AudioButton(props) {

    let ref = React.createRef();
    let [isPlaying, setIsPlaying] = useState(false);

    const classes = useStyles();

    const playAudio = () => {
        localStorage.setItem("soundPlaying", props.label);
        ref.current.play();
    };
    const stopAudio = () => {
        localStorage.setItem("soundPlaying", undefined);
        ref.current.pause();
        ref.current.currentTime = 0;
    };

    const isRender = localStorage.getItem("soundPlaying") === props.label;
    const handler = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? stopAudio() : playAudio();
    };

    const onEnded = () => {
        setIsPlaying(false);
    };

    return (
        <div className={classes.root}>
            <div className={isPlaying ? classes.label2 : classes.label}>{props.label}</div>
            <Avatar src={'./static/media/' +  props.image} alt={props.label} onClick={() => handler()}
                    className={isPlaying ? classes.avatar2 : classes.avatar}>
                {props.label.charAt(0)}
            </Avatar>
            <audio className="audio-element" ref={ref} onEnded={() => onEnded()}>
                <source src={soundContext + props.soundFile}/>
            </audio>
        </div>
    )
}


export default AudioButton;