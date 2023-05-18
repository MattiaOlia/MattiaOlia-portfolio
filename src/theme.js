import { createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import 'typeface-heebo';
import 'typeface-eb-garamond';

const theme = createTheme({
  palette: {
    primary: {
      main: green[900], // colore verde scuro
    },
    secondary: {
      main: orange[300], // colore arancione chiaro
    },
  },
  typography: {
    fontFamily: {
      h1: 'EB Garamond, serif', // Utilizza EB Garamond per h1
      h2: 'EB Garamond, serif', // Utilizza EB Garamond per h2
      h3: 'EB Garamond, serif', // Utilizza EB Garamond per h3
      h4: 'EB Garamond, serif', // Utilizza EB Garamond per h4
      h5: 'EB Garamond, serif', // Utilizza EB Garamond per h5
      h6: 'EB Garamond, serif', // Utilizza EB Garamond per h6
      body1: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'"
  
    },
  },
});

export default theme;