import React from 'react'
import { Grid } from '@material-ui/core';

import LeftPane from './LeftPane';
import CenterPane from './CenterPane';
import RightPane from './RightPane';
import LeftToolBar from '../ToolBars/LeftToolBar'
const Dashboard = props => {
  return (
    <Grid container>
      <Grid item sm={2}>
        <LeftPane >
          <LeftToolBar/>
        </LeftPane>
      </Grid>
      <Grid item sm={8}>
        <CenterPane />
      </Grid>
      <Grid item sm={2}>
        <RightPane />
      </Grid>
    </Grid>
  )
}

export default Dashboard;