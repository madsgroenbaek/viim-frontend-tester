import React from "react";
import styled from "styled-components";
import { Tabs, Tab } from "@material-ui/core/";

export default styled(({ ...otherProps }) => (
  <Tabs {...otherProps}>
    <StyledTab label ="+" />
    <StyledTab label="Brexit Deal" />
    <StyledTab label="OGS at Man Utd" />
  </Tabs>
))`
  border-left: 1px solid grey;
`;

const StyledTab = styled(Tab)`
  min-width: 0;
`;
