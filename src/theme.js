
import { createMuiTheme } from "@material-ui/core/styles";

/**
 *
 *  To customize Material UI component we need to overwrite the style with its name and class. this can be found in the API docs:
 *  https://material-ui.com/api/button/#css 
 * 
 **/

export default createMuiTheme({
  typography: {
    useNextVariants: true, // Migration to new typography. old typography will be removed in v4.0 Q1 2019. 
  },
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "#03112a",
        color: "white",
        margin: "10px",
        "&:hover": {
          backgroundColor: "green"
        }
      }
    }
  }
});