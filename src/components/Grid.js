import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MapTest from 'components/MapTest';
import MediaControlCard from 'components/Card';
import KpiCard from "components/Cards/KpiCard";
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
  card: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#061218',
  }
}));

const CONSTONTTT = {
  "id": 0,
        "name": "Pavement Condition Index (PCI)",
        "avg": 0.93,
        "data": [
          0.9,
          0.8,
          0.75,
          0.99,
          0.88
        ]
}

export default function DefaultGrid() {
  const classes = useStyles();
  const fuckThis = [
    {
      "id": 0,
      "street": "Hay el Ourod Alger",
      "type": "Pot Hole",
      "createdAt": "1994-11-05T08:15:30-05:00"
    },
    {
      "id": 1,
      "street": "Hay el Ourod Alger",
      "type": "Cracks",
      "createdAt": "1994-11-05T08:15:30-05:00"
    },
  ]
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard graphType kpiData={CONSTONTTT}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard kpiData={CONSTONTTT} /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.card}><MediaControlCard /></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}><FilteredTable notificationData={fuckThis}/></Paper>
        </Grid>
        <Grid item xs={7}>
          <MapTest/>
        </Grid>
      </Grid>
    </div>
  );
}