import React from "react";
import styled from "styled-components";
import { Paper } from "@material-ui/core/";

export default styled(({ backgroundColor, ...otherProps }) => (
  <Paper {...otherProps} />
))`
  
  min-height: 100vh;
  
`;