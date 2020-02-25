//@Flow

import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import LoopIcon from "@material-ui/icons/Loop";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import StopIcon from '@material-ui/icons/Stop';

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
    }
}));

function Players(Props) {
    const classes = useStyles();

    const { repeat, setRepeat, soundPlaying, setSoundPlaying} = Props;

    return (
        <div className={classes.player}>
            <LoopIcon className={repeat ? classes.repeatButtonOn : classes.repeatButtonOff} onClick={() => setRepeat(!repeat)} />
            {soundPlaying && <StopIcon className={classes.iconStop} onClick={()=> setSoundPlaying(undefined)}/>}
            {soundPlaying && <VolumeDownRoundedIcon className={classes.iconHp}/>}
            {soundPlaying && <div className={classes.soundPlaying}>
                <div className={classes.soundPlayingText}>{soundPlaying}</div>
            </div>}
        </div>
    );
};
export default React.memo(Players);
