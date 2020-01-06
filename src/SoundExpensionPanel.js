import React, {useState} from 'react';
import AudioButton from "./AudioButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: 'IndianRed',
    },

    Panel: {
        width: '100%',
    },

    PanelSummary: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'IndianRed',
    },

    PanelDetails: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'start',
        width: '100%',
        height: '100%',
    },
}));

function SoundExpenseionPanel({ title, sounds, setOnExpanded, panelOpened }: Props) {
    const classes = useStyles();
    let [sound, setSound] = useState(undefined);


    const onClick = () => {
            setOnExpanded(title);
    }

    const isOpened = panelOpened === title;


    return (
        <div className={classes.root}>
        <ExpansionPanel
            square className={classes.Panel}
            expanded={isOpened}

        >
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                className={classes.PanelSummary}
                onClick={() => onClick()}
            >
                {title}
            </ExpansionPanelSummary>
            { <ExpansionPanelDetails
            >
                <div className={classes.PanelDetails} >
                    {sounds.map(({label, soundFile, image}) =>
                        (isOpened && <AudioButton
                            label={label}
                            soundFile={soundFile}
                            image={image}
                            key={label}
                            setSound={setSound}
                        />))}
                </div>
            </ExpansionPanelDetails>}
        </ExpansionPanel>
        </div>
    );
}
export default SoundExpenseionPanel;
