import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    CircularProgressbar,
    buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import theme from "./theme";


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
        margin: 1
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

function AudioButton2(props) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handler = () => {
        setIsPlaying(!isPlaying);
        if (isPlaying) {
            props.setSoundPlaying(undefined);
            props.stopAudio();
        } else {
            props.playAudio(props.soundFile);
        }
    };

    const classes = useStyles();
    return (
        <>
            {props.visible &&
            <div className={classes.root}>
                <Avatar
                    src={props.image}
                    alt={props.label}
                    onClick={() => handler()}
                    className={classes.avatar}
                    variant='square'
                >
                    {props.label}
                </Avatar>
                {isPlaying && <CircularProgressbar
                    value={props.percentage}
                    className={classes.miniProgressBar}
                    strokeWidth={40}
                    styles={buildStyles({
                        pathTransition:
                            props.percentage === 0 ? "none" : "stroke-dashoffset 0.0s ease 0s",
                        trailColor: theme.palette.primary.main,
                        pathColor: 'black',
                        strokeLinecap: "butt"
                    })}
                />}
            </div>}
        </>
    )
}

export default React.memo(AudioButton2);
