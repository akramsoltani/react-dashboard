import React from 'react';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import NotificationMap from 'components/Maps/NotificationMap';
import ProfileCard from 'components/Cards/ProfileCard';
import KpiCard from "components/Cards/KpiCard";
import FilteredTable from 'components/FilteredTable';
import { useQuery } from '@apollo/client';
import { GET_HOMEPAGEDATA } from "API/homeQueries";

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


function Homepage() {
  const classes = useStyles();
  
  const { loading, error, data } = useQuery(GET_HOMEPAGEDATA);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const notificationTable = data.notifications.map((item, index) => {
    return {id: item.id, cells: [item.street, item.type, item.createdAt]}
  })
  const markersList = data.notifications.map((item, index) => {
    return {label: item.type, location: [item.location.lat, item.location.lon]}
  })
  return (
      <div className={classes.root}>
        <p style={{color: '#F4F4F4', alignSelf: 'center',  fontSize: '22px'}}>Dashboard</p>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard graphType kpiData={data.homeKpis[0]}/></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}><KpiCard kpiData={data.homeKpis[1]} /></Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.card}><ProfileCard profileData={data.me} /></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.paper}><FilteredTable Linkable tableName={"Active Notifications"} columnNames={["Location", "Type", "Date"]} rows={notificationTable}/></Paper>
        </Grid>
        <Grid item xs={7}>
          <NotificationMap markersList={markersList}/>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;