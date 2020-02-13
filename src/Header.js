import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import SearchBar from "./SearchBar";

const useStyles = makeStyles(theme => ({
    root: {
        height: 100,
        color: 'white',
        background: 'IndianRed',
        fontWeight: 'bolder',
        textAlign: 'start',
        fontSize: 'x-large',
        width: '100%',
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'row',
    }
}));

function Header(props) {
    const { search, setSearch } = props;
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                Sound Machine
            </div>
            <SearchBar search={ search } setSearch={ setSearch }/>
        </div>
    );
}
export default Header;
