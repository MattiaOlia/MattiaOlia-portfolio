import { createTheme } from '@mui/material/styles';
import { orange, green } from '@mui/material/colors';
import 'typeface-heebo';
import 'typeface-eb-garamond';
import './font/Karla-VariableFont_wght.ttf'


const theme = createTheme({


  palette: {
    primary: {
      main: green[900], // colore verde scuro
      secondary: green[600]
    },
    secondary: {
      main: orange[300], // colore arancione chiaro
    },
  },
  typography: {
    fontFamily: {
      h1:  'Karla-VariableFont_wght, sans-serif', // Utilizza EB Garamond per h1
      h2: 'Karla-VariableFont_wght, sans-serif', // Utilizza EB Garamond per h2
      h3: 'Karla-VariableFont_wght, sans-serif', // Utilizza EB Garamond per h3
      h4: 'Karla-VariableFont_wght, sans-serif', // Utilizza EB Garamond per h4
      h5: 'Karla-VariableFont_wght, sans-serif', // Utilizza EB Garamond per h5
      h6: 'Karla-VariableFont_wght, sans-serif', // Utilizza EB Garamond per h6
      body1: "Karla-VariableFont_wght, sans-serif"
  
    },
  },
});

export default theme;