import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';


const useStyles = makeStyles(theme => ({

    root: {
        margin: 20,
        width: '70%',
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
        <TextField
            className={classes.root}
            id="outlined-basic"
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
    );
}
