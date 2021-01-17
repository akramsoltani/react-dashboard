import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinGraph from './LinGraph';
import {bob, bob2, bob3} from 'sampleData';
import MapTest from 'components/MapTest';
import MediaControlCard from 'components/Card';
import KpiGraph from 'components/Kpi';
import AccordionTable from './Accordion';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 20,
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
          <Paper className={classes.paper}><KpiGraph/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><MediaControlCard /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><AccordionTable /></Paper>
        </Grid>
        <Grid container item xs={8}>
          <MapTest/>
        </Grid>
        
      </Grid>
    </div>
  );
}
