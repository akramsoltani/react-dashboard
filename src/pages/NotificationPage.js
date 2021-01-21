import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationMap from 'components/Maps/NotificationMap';
import KpiCard from "components/Cards/KpiCard";
import FilteredTable from 'components/FilteredTable';
import { useQuery } from '@apollo/client';
import { NOTIF_BYID } from "API/queries";
//Import Notification Page ID
import { useParams } from 'react-router-dom';
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


function Notification() {
  const classes = useStyles();
  const {id} = useParams();
  console.log(id);
  const { loading, error, data } = useQuery(NOTIF_BYID, {
    variables: {id: Number(id)}
  });
  if (loading) return <p>Loading...</p>;
  if (error) {console.log(error);
    return `${error}`;}
  const measurementTable = data.notification[0].measurement.map((item, index) => {
    return {id: item.id , cells:[item.name, item.value, item.date]}
  })
  const markersList = data.notification.map((item, index) => {
    return {label: item.type, location: [item.location.lat, item.location.lon]}
  })
  console.log(data);
    return (
      <div className={classes.root}>
        <p style={{color: '#F4F4F4', alignSelf: 'center',  fontSize: '22px'}}>Notification ID #: {id}</p>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard graphType kpiData={data.notification[0].kpis[0]}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard graphType kpiData={data.notification[0].kpis[1]}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard graphType kpiData={data.notification[0].kpis[1]}/></Paper>
        </Grid>
        <Grid item xs={7}>
          <NotificationMap markersList={markersList}/>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}>
            <FilteredTable tableName={"Past Measurements"} columnNames={["Instrument", "Measurement", "Date"]} rows={measurementTable}/>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Notification;