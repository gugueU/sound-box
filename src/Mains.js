import React, {useEffect, useState} from 'react';

import ListAll from "./ListAll";
import makeStyles from "@material-ui/core/styles/makeStyles";

import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100vH',
        flexGrow: '1',
    },
}));

function Main() {
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
        <div className={classes.root}>
            <HashRouter>
                <Switch>
                    <Route path="/:search?/:value?" children={<ListAll data={data}/>}/>
                </Switch>
            </HashRouter>

        </div>
    );
}

export default Main;
