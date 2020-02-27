//@Flow

import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import LoopIcon from "@material-ui/icons/Loop";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import StopIcon from '@material-ui/icons/Stop';
import {buildStyles, CircularProgressbar} from "react-circular-progressbar";
import theme from "./theme";

const useStyles = makeStyles(theme => ({
    player: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5px 0px',
        justifyContent: 'start',
        alignContent: 'center'
    },
    repeatButtonOn: {
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 32,
    },
    repeatButtonOff: {
        color: 'grey',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 32,
    },
    iconHp: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 5,
    },
    iconStop: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 15,
    },
    soundPlaying: {
        display: 'flex',
        alignItems: 'center',
        width: '50%'
    },
    soundPlayingText: {
        color: theme.palette.primary.main,
        maxWidth: '500px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 'bold',
    },
    progressBarWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginLeft: 15,
    },
    progressBar:{
        width: 22,
        height: 22,
    }
}));

function Players(Props) {
    const classes = useStyles();

    const { repeat, setRepeat, soundPlaying, stopAudio, percentage} = Props;

    const onStop = () => {
        stopAudio();
    }

    return (
        <div className={classes.player}>
            <LoopIcon className={repeat ? classes.repeatButtonOn : classes.repeatButtonOff} onClick={() => setRepeat(!repeat)} />
            {soundPlaying && <div className={classes.progressBarWrapper}>
                <CircularProgressbar
                value={percentage}
                className={classes.progressBar}
                strokeWidth={40}
                styles={buildStyles({
                    pathTransition:
                        percentage === 0 ? "none" : "stroke-dashoffset 0.0s ease 0s",
                    trailColor: theme.palette.primary.main,
                    pathColor: 'black',
                    strokeLinecap: "butt"
                })}
            />
            </div>}
            {soundPlaying && <StopIcon className={classes.iconStop} onClick={()=> onStop()}/>}
            {soundPlaying && <VolumeDownRoundedIcon className={classes.iconHp}/>}
            {soundPlaying && <div className={classes.soundPlaying}>
                <div className={classes.soundPlayingText}>{soundPlaying}</div>
            </div>}
        </div>
    );
};
export default React.memo(Players);
