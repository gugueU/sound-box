import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import {ThemeProvider} from "@material-ui/styles";
import {theme} from "./Theme";


const useStyles = makeStyles(theme => ({

    root: {
        width: 250,
        marginRight: '15px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
}));

export default function SeachBar(props) {
    const {search, setSearch} = props;
    const classes = useStyles();

    const onchange = (value: string) => {
        setSearch(value);
    };

    const onClear = () => {
        setSearch('');
    };

    return (
        <ThemeProvider theme={theme}>
        <TextField
            className={classes.root}
            id="outlined"
            variant="outlined"
            onChange={(event : object) => onchange(event.target.value)}
            value={search}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                            {search ? <ClearIcon onClick={() => onClear()}/> : <SearchIcon /> }
                    </InputAdornment>
                    ),
            }}
        />
        </ThemeProvider>
    );
}
