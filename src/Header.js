import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchBar from "./SearchBar";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import LoopIcon from '@material-ui/icons/Loop';

const useStyles = makeStyles(theme => ({
    first: {
        height: 100,
        color: 'white',
        background: 'IndianRed',
        fontWeight: 'bolder',
        textAlign: 'start',
        fontSize: 'x-large',
        width: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '15px',
        fontSize: 'xx-large'
    },
    tool: {
        height: 30,
        color : 'white',
        backgroundColor : 'IndianRed',
        textAlign : 'left',
        display: 'flex',
        flexDirection: 'row',
        paddingBottom : 5,
    },
    repeatButtonOn: {
        backgroundColor : 'white',
        color: 'IndianRed',
        display: 'flex',
        alignItems: 'center',
        marginLeft : 15,
        border :'solid 2px',
    },

    repeatButtonOff: {
        backgroundColor : 'white',
        color: 'grey',
        display: 'flex',
        alignItems: 'center',
        marginLeft : 15,
        border :'solid 2px',
    },

    iconHp: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 20,
    },
    soundPlaying: {
        display: 'flex',
        alignItems: 'center',
        width:'100%'
    },
    soundPlayingText: {
        width: '50%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    }
}));

function Header(props) {
    const { search, setSearch } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <div className={classes.first}>
            <div className={classes.title}>
                <div>Sound Machine</div>
            </div>
            <SearchBar search={ search } setSearch={ setSearch }/>
        </div>
            <div className={classes.tool} >
                <div className={props.repeat ? classes.repeatButtonOn : classes.repeatButtonOff}>
                    <LoopIcon  onClick={() => props.setRepeat(!props.repeat)}
                    />
                </div>
                {props.soundPlaying && <div className={classes.iconHp}><VolumeDownRoundedIcon /></div>}
                {props.soundPlaying && <div className={classes.soundPlaying}>

                    <div className={classes.soundPlayingText}>{props.soundPlaying}</div>
                </div>}
            </div>
        </div>
    );
}
export default Header;
