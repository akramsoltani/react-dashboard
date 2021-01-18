import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MapTest from 'components/MapTest';
import MediaControlCard from 'components/Card';
import KpiLine from 'components/Kpi1';
import KpiArea from 'components/Kpi2';
import FilteredTable from './FilteredTable';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    background: '#061218',
  },
}));

export default function DefaultGrid() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiLine/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiArea/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><MediaControlCard /></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}><FilteredTable /></Paper>
        </Grid>
        <Grid container item xs={7}>
          <MapTest/>
        </Grid>
        
      </Grid>
    </div>
  );
}
