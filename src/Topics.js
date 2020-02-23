//@Flow

import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
    topics: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        overflowX: 'auto',
        paddingLeft: 15,
        margin: '5px 0px'
    },

    chip: {
        marginRight: 2,
    },
}));

function Topics() {
    const classes = useStyles();

    return (
        <div className={classes.topics}>
            <Chip label="Série" className={classes.chip}/>
            <Chip label="Films"className={classes.chip}/>
            <Chip label="Politique"className={classes.chip}/>
            <Chip label="Emissions"className={classes.chip}/>
            <Chip label="Pubs"className={classes.chip}/>
            <Chip label="Jeux-vidéos"className={classes.chip}/>
        </div>
    );
};

export default Topics;
