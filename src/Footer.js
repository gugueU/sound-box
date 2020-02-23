//@Flow

import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";

import SearchIcon from '@material-ui/icons/Search';
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AddIcon from '@material-ui/icons/Add';
import FavoriteIcon from "@material-ui/icons/Favorite";
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        color: 'white',
    }
}));

function Footer() {
    const classes = useStyles();

    return (
            <BottomNavigation className={classes.root}>
                <BottomNavigationAction label="Rechercher" value="search" icon={<SearchIcon />} />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Add" value="add" icon={<AddIcon />} />
                <BottomNavigationAction label="Folder" value="folder" icon={<PersonIcon />} />
            </BottomNavigation>
    );
}
export default Footer;
