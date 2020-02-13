//@Flow

import React, {useState} from 'react';
import {playlist2} from '../public/playlist2'
import makeStyles from "@material-ui/core/styles/makeStyles";
import AudioButton from "./AudioButton";
import removeAccents from "remove-accents";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflowY: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'start',
        width: '100%',
        height: '100%',

    },
}));

const MainAll = (props) => {
    const { search } = props;
    const [soundPlaying, setSoundPlaying] = useState(undefined);
    const classes = useStyles();

    const cleanWord = ( word: String) => removeAccents(word).toLowerCase();

    const isDisplay = (label: string, tags: []) => {
        if (!search || search.length < 2 || search === '' || search === ' '){
            return true;
        }
        const cleanSearch = cleanWord(search);
        if (cleanWord(label).includes(cleanSearch)) {
            return true;
        }
        return tags && tags.some((tag) => cleanWord(tag).includes(cleanSearch));
    };

    return (
        <div className={classes.root}>
            {playlist2.map(item => {
                const { label, image, soundFile, tags, volume } = item;
                const enabled = isDisplay(label, tags);
                return (
                    enabled && <AudioButton
                    id={label}
                    label={label}
                    soundFile={soundFile}
                    image={image}
                    key={label}
                    soundPlaying={soundPlaying}
                    setSoundPlaying={setSoundPlaying}
                    volume={volume}
                />)
            })}
        </div>
    );
};
export default MainAll;
