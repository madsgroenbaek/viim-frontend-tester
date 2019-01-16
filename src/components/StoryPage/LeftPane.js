import React from "react";
import StyledPaper from '../StyledPaper'
import { withTheme } from '@material-ui/core/styles';

const LeftPane = (props) => <StyledPaper backgroundColor={props.theme.palette.primary.main} />;

export default withTheme()(LeftPane);
