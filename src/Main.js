//@Flow

import React, {useState} from 'react';
import { mario, zelda, games, starWars, dragonBall, divers } from "./Constant"
import SoundExpensionPanel from "./SoundExpensionPanel"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: 50,
    },
}));

const Main = (props: Props) => {
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
    }

    return(
    <div className={classes.root} >
        <SoundExpensionPanel title='Mario' sounds={mario} setOnExpanded={setOnExpanded} panelOpened={panelOpened}/>
        <SoundExpensionPanel title='Zelda' sounds={zelda} setOnExpanded={setOnExpanded} panelOpened={panelOpened}/>
        <SoundExpensionPanel title='Dragon Ball' sounds={dragonBall} setOnExpanded={setOnExpanded}panelOpened={panelOpened} />
        <SoundExpensionPanel title='Jeux' sounds={games} setOnExpanded={setOnExpanded}panelOpened={panelOpened} />
        <SoundExpensionPanel title='Star Wars' sounds={starWars} setOnExpanded={setOnExpanded} panelOpened={panelOpened}/>
        <SoundExpensionPanel title='Divers' sounds={divers} setOnExpanded={setOnExpanded} panelOpened={panelOpened}/>
    </div>
    );
}
export default Main;
