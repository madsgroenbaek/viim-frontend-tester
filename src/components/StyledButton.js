import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

export default styled(({ color, ...otherProps }) => (
  <Button {...otherProps} classes={{ disabled: "disabled", label: "label" }} />
))`
  color: ${props => props.color};
  & .label {
    background-color: orange;
  }
  &.disabled {
    color: black;
    background-color: orange;
    .label {
      background-color: green;
    }
  }
`;