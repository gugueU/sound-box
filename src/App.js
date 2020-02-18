import React, {useState} from 'react';

import Header from "./Header";
import MainAll from "./MainAll";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },

}));

function App() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const urlSearch = urlParams.get('search');

    const [search, setSearch] = useState(urlSearch);
    const [soundPlaying, setSoundPlaying] = useState(undefined);
    const [repeat, setRepeat] = useState(false);
    const classes = useStyles();

    return (
        <div className={classes.root}>
                <Header search={search} setSearch={setSearch} soundPlaying={soundPlaying} setRepeat={setRepeat} repeat={repeat}/>
                <MainAll search={search} soundPlaying={soundPlaying} setSoundPlaying={setSoundPlaying} repeat={repeat}/>
        </div>
    );
}

export default App;
