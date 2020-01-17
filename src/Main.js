//@Flow

import React, {useState} from 'react';
import {playlist} from '../public/playlist'
import SoundExpensionPanel from "./SoundExpensionPanel"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowY: 'auto',
    },
}));

const Main = () => {
    const classes = useStyles();
    const [reload, setReload] = useState(false);

    const panelOpened = localStorage.getItem("panelOpened");

    const setOnExpanded = (panel) => {
        if( panelOpened === panel) {
            localStorage.setItem("panelOpened", undefined);
        }
        else {
            localStorage.setItem("panelOpened", panel);

        }
        setReload(!reload);
    };

    return(
    <div className={classes.root} >
        {playlist.map(item =>
            (
                <SoundExpensionPanel key={item.collectionName} title={item.collectionName} sounds={item.medias} setOnExpanded={setOnExpanded} panelOpened={panelOpened}/>
            ))}
    </div>
    );
};
export default Main;
