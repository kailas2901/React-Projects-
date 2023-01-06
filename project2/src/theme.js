import {createTheme} from '@material-ui/core/styles';

export default function Theme() {

const THEME = createTheme({
    typography: {
     "fontFamily": `"Roboto", "Argentum Sans"`,
     "fontSize": 14,
     "fontWeightLight": 300,
     "fontWeightRegular": 400,
     "fontWeightMedium": 500
    }
 });

}