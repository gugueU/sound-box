import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import {red} from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        primary: red,
        secondary: green,
    },
    status: {
        danger: 'orange',
    },
});

