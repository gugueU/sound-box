import React, {useEffect, useState} from 'react';

import Header from "./Header";
import ListAll from "./ListAll";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";
import Item from "./Item";


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
    const queryString = window.location.hash.split('?')[1];
    const urlParams = new URLSearchParams(queryString);
    const urlSearch = urlParams.get('search');




    const [search, setSearch] = useState(urlSearch);
    const [soundPlaying, setSoundPlaying] = useState(undefined);
    const [repeat, setRepeat] = useState(false);
    const classes = useStyles();

    const [data, setData] = useState({playlist: []});

    useEffect(() => {
        const fetchData = async () => {
            fetch('playlist.json')
                .then((res) => res.json())
                .then((data) => {
                    setData(data);
                })
        };
        fetchData()
    }, []);

    return (
        <HashRouter>
            <div className={classes.root}>
                <Header search={search} setSearch={setSearch} soundPlaying={soundPlaying} setRepeat={setRepeat}
                        repeat={repeat}/>
                <Switch>
                    <Route path="/items/:id"
                           children={<Item data={data} setSoundPlaying={setSoundPlaying}/>}>
                    </Route>
                    <Route children={<ListAll data={data} search={search} soundPlaying={soundPlaying}
                                              setSoundPlaying={setSoundPlaying} repeat={repeat}
                    />}>

                    </Route>
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
