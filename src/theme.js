
import { createMuiTheme } from "@material-ui/core/styles";
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
/**
 *  To customize Material UI component we need to overwrite the style with its name and class. this can be found in the API docs:
 *  https://material-ui.com/api/button/#css 
 **/

export default createMuiTheme({
  
  palette: {
    type:"dark",
    
  background: {
      //"paper": "rgba(239, 158, 158, 1)",
      default: "rgba(255, 0, 255, 1)"

  },
  primary: {
      "light": "#7986cb",
      "main": "#3f51b5",
      "dark": "#303f9f",
      "contrastText": "#fff"
  },
  secondary: {
      "light": "#ff4081",
      "main": "#f50057",
      "dark": "#c51162",
      "contrastText": "#fff"
  },
  "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
  },
  "text": {
      "primary": "rgba(0, 0, 0, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
  },
  
  tonalOffset: 0.8,
  },
  typography: {
    useNextVariants: true, // Migration to new typography. old typography will be removed in v4.0 Q1 2019. 
  }
});