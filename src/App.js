import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import { ThemeProvider } from '@material-ui/core/styles';
import Main from "./Mains";
import Footer from "./Footer";
import theme from './theme';


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
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
            <Main/>
            <Footer/>
        </div>
        </ThemeProvider>
    );
}

export default App;
