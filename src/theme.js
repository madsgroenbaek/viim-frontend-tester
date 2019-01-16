
import { createMuiTheme } from "@material-ui/core/styles";

/**
 *  To customize Material UI component we need to overwrite the style with its name and class. this can be found in the API docs:
 *  https://material-ui.com/api/button/#css 
 **/

export default createMuiTheme({
  palette: {
    primary: { main: '#222a35' },
    secondary: { main: '#546377' }
  },
  typography: {
    useNextVariants: true, // Migration to new typography. old typography will be removed in v4.0 Q1 2019. 
  }
});