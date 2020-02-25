import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";


const useStyles = makeStyles(theme => ({
    root:{
        width: '100vW',
        display: 'flex',
        flexDirection: 'row' ,
        justifyContent: "left",
        paddingLeft: 15,
        margin: '5px 0px'
    },
    input: {
        width: '90vW',
        padding: 'Opx 10px',
        fontWeight: 'bold'
    }
}));

function SeachBar(props) {
    const {searchSate, setSearchState} = props;
    const classes = useStyles();

    const onchange = (value: string) => {
        setSearchState(value);
    };

    const onClear = () => {
        setSearchState('');
    };

    return (
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
        <TextField
            className={classes.input}
            id="outlined"
            variant="outlined"
            onChange={(event : object) => onchange(event.target.value)}
            value={searchSate}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                            {searchSate ? <ClearIcon onClick={() => onClear()}/> : <SearchIcon /> }
                    </InputAdornment>
                    ),
            }}
        />

</div>
        </ThemeProvider>
    );
}

export default React.memo(SeachBar);
