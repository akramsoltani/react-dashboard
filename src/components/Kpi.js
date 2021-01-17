import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import MailIcon from '@material-ui/icons/Mail';

import LinGraph from './LinGraph';
import {bob, bob2, bob3} from 'sampleData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
    borderRadius: '50%',
    margin: '20px'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
    align: 'center'
  },
  name: {
    fontWeight: 'bold',
  }
}));

//Testing Data
const TestAverage = "39/100";
const TestChange = "3% per year";

export default function KpiGraph() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography noWrap component='subtitle1' variant='subtitle1'>
            Predicted KPI cycle
          </Typography>
          <Typography className={classes.name} component='h5' variant='h5'>
            {TestAverage}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {TestChange}
          </Typography>
        </CardContent>
      </div>
      <div>
      <LinGraph customData={bob}/>
      </div>

    </Card>
  );
}
