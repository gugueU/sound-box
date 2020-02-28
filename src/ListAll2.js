//@Flow

import React, {useEffect, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import AudioButton2 from "./AudioButton2";
import removeAccents from "remove-accents";
import {useParams} from "react-router";
import SearchBar from "./SearchBar";
import Topics from "./Topics";
import Players from "./Players";
import ReactAudioPlayer from "react-audio-player";


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

function ListAll2(props) {
    const [searchSate, setSearchState] = useState(undefined);
    const [repeat, setRepeat] = useState(false);
    const [soundPlaying, setSoundPlaying] = useState(undefined);
    const [activeChip, setActiveChip] = useState(undefined);

     const [audio, setAudio] = useState(undefined);
     const [percentage, setPercentage] = useState(0);

    const playAudio = (label: string, src: string) => {
        setSoundPlaying(label);
        setPercentage(0);
        audio.audioEl.src = src;
        audio.audioEl.play();

        setInterval(function () {
            setPercentage(Math.trunc(audio.audioEl.currentTime / audio.audioEl.duration * 100));
        }, 150);
    };

    const stopAudio = () => {
        setSoundPlaying(undefined);
        audio.audioEl.src = undefined;
        audio.audioEl.pause();
        audio.audioEl.currentTime = 0;
        setPercentage(0);
    };

    const onEnded = () => {
        // setPercentage(0);
        setSoundPlaying(undefined);
    };


    const classes = useStyles();

    const {search, value} = useParams();

    useEffect(() => {
        if (search && value) {
            setSearchState(value);
        }
    }, [search, value]);


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

    const IsMatchTopic = (activeChip: string, tags: []) => {
        if(!activeChip) {
            return true;
        }
        return tags && tags.some((tag) => cleanWord(tag).includes(cleanWord(activeChip)));
    };


    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <SearchBar classNane={classes.search} searchSate={searchSate} setSearchState={setSearchState} s/>
                <Topics activeChip={activeChip} setActiveChip={setActiveChip}/>
                <Players repeat={repeat} setRepeat={setRepeat} soundPlaying={soundPlaying} stopAudio={stopAudio} percentage={percentage}/>
            </div>

            <div className={classes.itemContainer}>
                {props.data.playlist.map(item => {
                    const {label, image, soundFile, tags, volume, id} = item;
                     const visible = isVisible(label, tags);
                     const matchTopic = IsMatchTopic(activeChip, tags);
                    const isPlaying = soundPlaying && label && soundPlaying === label;

                    return (
                        <AudioButton2
                            id={id}
                            label={label}
                            soundFile={soundFile}
                            image={image}
                            key={id+label}
                            soundPlaying={soundPlaying}
                            setSoundPlaying={setSoundPlaying}
                            volume={volume}
                            repeat={repeat}
                            visible={visible && matchTopic}
                            percentage={percentage}
                            playAudio={playAudio}
                            stopAudio={stopAudio}
                            isPlaying={isPlaying}
                        />)
                })}
            </div>
            <ReactAudioPlayer
                className="audio-element"
                ref={(element) => setAudio(element)}
                onEnded={() => onEnded()}
                loop={repeat}
                preload='none'
            />
        </div>
    );
}
export default ListAll2;
