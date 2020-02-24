//@Flow

import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import AudioButton from "./AudioButton";
import removeAccents from "remove-accents";
import {useParams} from "react-router";
import SearchBar from "./SearchBar";
import Topics from "./Topics";
import Players from "./Players";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        color: 'black',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: 5,
    },

    itemContainer: {
        flexGrow: 1,
        height: 0,
        overflowY: 'auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'start',
        width: '100vW',
        margin: '5px 0px',
    },
}));

function ListAll(props) {
    const [searchSate, setSearchState] = useState('');
    const [repeat, setRepeat] = useState(false);
    const [soundPlaying, setSoundPlaying] = useState(undefined);
    const [activeChip, setActiveChip] = useState('');


    const classes = useStyles();

    const {search, value} = useParams();

    useEffect(() => {
        if (search && value) {
            setSearchState(value);
        }
    }, [value]);


    const cleanWord = (word: String) => removeAccents(word).toLowerCase();

    const isVisible = (label: string, tags: []) => {
        if (!searchSate || searchSate.length < 2 || searchSate === '' || searchSate === ' ') {
            return true;
        }
        const cleanSearch = cleanWord(searchSate);
        if (cleanWord(label).includes(cleanSearch)) {
            return true;
        }
        return tags && tags.some((tag) => cleanWord(tag).includes(cleanSearch));
    };



    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <SearchBar classNane={classes.search} searchSate={searchSate} setSearchState={setSearchState} setActiveChip={setActiveChip}/>
                <Topics setSearchState={setSearchState} activeChip={activeChip} setActiveChip={setActiveChip}/>
                <Players repeat={repeat} setRepeat={setRepeat} soundPlaying={soundPlaying}/>
            </div>

            <div className={classes.itemContainer}>
                {props.data.playlist.map(item => {
                    const {label, image, soundFile, tags, volume, id} = item;
                    const visible = isVisible(label, tags);
                    return (
                        <AudioButton
                            id={id}
                            label={label}
                            soundFile={soundFile}
                            image={image}
                            key={id+label}
                            soundPlaying={soundPlaying}
                            setSoundPlaying={setSoundPlaying}
                            volume={volume}
                            repeat={repeat}
                            visible={visible}
                        />)
                })}
            </div>
        </div>
    );
}
export default ListAll;
