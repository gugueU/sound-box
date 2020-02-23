import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Main from "./Mains";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
}));

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
