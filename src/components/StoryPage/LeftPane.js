import React from "react";
import StyledPaper from '../StyledPaper'
import { withTheme } from '@material-ui/core/styles';

const LeftPane = (props) => <StyledPaper style={{display:"block"}} >
{props.children}
</StyledPaper>;

export default withTheme()(LeftPane);
