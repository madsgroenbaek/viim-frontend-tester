import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";

import Button from '@material-ui/core/Button';
import theme from './theme';
import StyledButton from "./components/StyledButton";

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  // Define a custom insertion for injecting the JSS styles in the DOM
  insertionPoint: document.getElementById("jss-insertion-point")
});

class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Button variant="outlined">Button styled with MUI theme only</Button>
          <StyledButton variant="outlined">
            Simple button styled with styled-components
          </StyledButton>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default App;