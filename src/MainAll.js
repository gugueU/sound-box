//@Flow

import React, {useEffect, useState} from 'react';
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
        paddingTop: '10px',
        paddingBottom: '30px',
    },

}));

const MainAll = (props) => {

    const [data, setData] = useState({ playlist: [] });
    const [init, setInit] = useState(true);

    const  myInit = {
        method: 'GET',
        headers: new Headers({
            "accept": "application/json",
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            const result =fetch('playlist.json')
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                })
        };
        fetchData()
    }, [init]);

    const { search } = props;
    const classes = useStyles();

    const cleanWord = ( word: String) => removeAccents(word).toLowerCase();

    const isVisible = (label: string, tags: []) => {
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
            {data.playlist.map(item => {
                const { label, image, soundFile, tags, volume } = item;
                const visible = isVisible(label, tags);
                return (
                    <AudioButton
                    id={label}
                    label={label}
                    soundFile={soundFile}
                    image={image}
                    key={label}
                    soundPlaying={props.soundPlaying}
                    setSoundPlaying={props.setSoundPlaying}
                    volume={volume}
                    repeat={props.repeat}
                    visible={visible}
                />)
            })}
        </div>
    );
};
export default MainAll;
