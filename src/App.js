import React from 'react';

import Header from "./Header";
import Main from "./Main";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: 'crimson',
        overflow: 'hidden',
        minWidth: 300,
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    toto: {
        height: '100%',
    },
    MainContainer: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        minWidth: 300,
        maxWidth: 400,
        alignContent: 'start',
        border: 'black',
        borderStyle: 'solid',
        overflow: 'auto',

    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root} >
            <div className={classes.toto}>
                <Header/>


                <Main/>


            </div>
        </div>
    );
}
export default App;
