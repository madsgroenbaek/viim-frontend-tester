import React from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core/";

export default styled(({ backgroundColor, ...otherProps }) => (
  <Paper {...otherProps} square />
))`
  background-color: ${props => props.backgroundColor};
  min-height: 100vh;
`;