import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinGraph from './LinGraph';
import {bob, bob2, bob3} from 'sampleData';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#F4F4F4',
  },
}));

export default function DefaultGrid() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><LinGraph customData={bob}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><LinGraph customData={bob2}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><LinGraph customData={bob3}/></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
