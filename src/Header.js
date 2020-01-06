import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    root: {
        height: 30,
        color: 'white',
        fontWeight: 'bolder',
        textAlign: 'start',
        fontSize: 'x-large',
        width: '100%',
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 10,
    }
}));

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            Sound Machine
        </div>
    );
}
export default Header;
