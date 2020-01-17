import React from 'react';
import AudioButton from "./AudioButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },

    Panel: {
        width: '100%',
    },

    PanelSummary: {
        color: 'grey',
        fontWeight: 'bold',
    },

    PanelDetails: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignContent: 'start',
        width: '100%',
        height: '100%',
    },
}));

function SoundExpenseionPanel({ title, sounds, setOnExpanded, panelOpened }: Props) {
    const classes = useStyles();

    const onClick = () => {
            setOnExpanded(title);
    };

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
                        (
                            <AudioButton
                            id={label}
                            label={label}
                            soundFile={soundFile}
                            image={image}
                            key={label}
                        />
                        ))}
                </div>
            </ExpansionPanelDetails>}
        </ExpansionPanel>
        </div>
    );
}
export default SoundExpenseionPanel;
