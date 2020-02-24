//@Flow

import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import LoopIcon from "@material-ui/icons/Loop";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";


const useStyles = makeStyles(theme => ({
    player: {
        display: 'flex',
        flexDirection: 'row',
        margin: '5px 0px'
    },
    repeatButtonOn: {
        color: theme.palette.primary.main,
        display: 'flex',
        alignItems: 'center',
        marginLeft: 15,
        fontWeight: 'bold'
    },
    repeatButtonOff: {
        color: 'grey',
        display: 'flex',
        alignItems: 'center',
        marginLeft: 15,
        fontWeight: 'bold'
    },
    iconHp: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 20,
        fontWeight: 'bold'
    },
    soundPlaying: {
        display: 'flex',
        alignItems: 'center',
        width: '50%'
    },
    soundPlayingText: {
        color: theme.palette.primary.main,
        width: '500px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontWeight: 'bold'
    }
}));

function Players(Props) {
    const classes = useStyles();

    const { repeat, setRepeat, soundPlaying} = Props;

    return (
        <div className={classes.player}>
            <div className={repeat ? classes.repeatButtonOn : classes.repeatButtonOff}>
                <LoopIcon onClick={() => setRepeat(!repeat)}/>
            </div>
            {soundPlaying && <div className={classes.iconHp}><VolumeDownRoundedIcon/></div>}
            {soundPlaying && <div className={classes.soundPlaying}>
                <div className={classes.soundPlayingText}>{soundPlaying}</div>
            </div>}
        </div>
    );
};
export default Players;
