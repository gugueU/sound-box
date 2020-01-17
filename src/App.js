import React, {useState} from 'react';

import Header from "./Header";
import MainAll from "./MainAll";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles(theme => ({
    root: {
        textAlign: 'center',
        minWidth: 300,
        maxWidth: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },

}));

function App() {
    const [search, setSearch] = useState('');

    const classes = useStyles();
    return (
        <div className={classes.root}>
                <Header search={search} setSearch={setSearch}/>
                <MainAll search={search} />
        </div>
    );
}
export default App;
