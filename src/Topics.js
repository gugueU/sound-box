//@Flow

import { makeStyles } from '@material-ui/core';
import Chip from "@material-ui/core/Chip";
import React from 'react';


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
        fontWeight: 'bold'
    },
}));

function Topics(Props) {
    const classes = useStyles();

    const {activeChip, setActiveChip} = Props;

    const onclick = (label: string) => {
        if (isActive(label)) {
            setActiveChip(undefined);
        } else {
            setActiveChip(label);
        }
    };

    const isActive = (chipLabel: string) => {
        return activeChip && activeChip === chipLabel;
    };

    const topicsList = ['Animé', "Film", 'Street Fighter', 'Générique', 'Star Wars', 'TV', 'Nintendo', "Série", 'Politique', 'Capcom', 'Jeu Vidéo'];

    return (
        <div className={classes.topics}>
            {topicsList.map(topic => {
                return (
            <Chip
                key={topic}
                color={!isActive(topic) ? 'secondary' : 'primary'}
                label={topic} className={classes.chip} onClick={() => onclick(topic)}
            />
            )
            })}
        </div>
    );
}

export default React.memo(Topics);
