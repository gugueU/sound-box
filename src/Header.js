import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        height: 50,
        color: 'IndianRed',
        fontWeight: 'bolder',
        textAlign: 'start',
        fontSize: 'x-large',
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1,
        paddingLeft: 15,
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                Sound Machine
            </div>
        </div>
    );
}
export default Header;
