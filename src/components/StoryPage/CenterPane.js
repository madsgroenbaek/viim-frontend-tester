import React from "react";
import StyledPaper from '../StyledPaper'
import { withTheme } from '@material-ui/core/styles';

const CenterPane = (props) => <StyledPaper backgroundColor={props.theme.palette.secondary.main} />;

export default withTheme()(CenterPane);
