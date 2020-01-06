import React from 'react';

import Header from "./Header";
import Main from "./Main";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        height: '100vh',
        minWidth: 300,
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',

    },


}));

function App() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
                <Header/>
                <Main />
        </div>
    );
}
export default App;
