import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReactAudioPlayer from 'react-audio-player';

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
        borderColor: 'grey',
        border: 'solid 4px',
        width: 80,
        height: 80,
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    info: {
        color: 'black',
    }
}));

function AudioButton(props) {

    let [audio, setAudio] = useState(undefined);
    let [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        audio.audioEl.play();
        props.setSoundPlaying(props.label);

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
        setIsPlaying(false);
        props.setSoundPlaying(undefined);

    };

    const classes = useStyles();
    return (
        <>
            {props.visible && <div className={classes.root}>
                <Avatar
                    src={props.image}
                    alt={props.label}
                    onClick={() => handler()}
                    className={isPlaying ? classes.avatarPlaying : classes.avatar}
                    variant='rounded'
                >
                    {props.label.charAt(0)}
                </Avatar>


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
