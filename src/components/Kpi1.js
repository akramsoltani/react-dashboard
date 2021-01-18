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

import {LinGraph} from './LinGraph';
import {bob, bob2, bob3} from 'sampleData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    backgroundColor: '#061218',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  details2: {
    display: 'flex',
    flexDirection: 'row',
  },
  content: {
    marginBottom: '-10px',
    marginTop: '-10px',
    color: 'white',
  },
  cover: {
    width: 151,
    height: 151,
    borderRadius: '50%',
  },
  controls: {
    display: 'flex',
  },
  playIcon: {
    height: 38,
    width: 38,
    align: 'center'
  },
  name: {
    fontWeight: 'bold',
    alignItems: 'left'
  }
}));

//Testing Data
const TestAverage = "39/100";
const TestChange = "3% per 1 year";

export default function KpiLine() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div>
        <CardContent className={classes.content}>
          <Typography noWrap component='subtitle1' variant='subtitle1'>
            Pavement Condition Index (PCI)
          </Typography>
        </CardContent>
      </div>
      
      <div className={classes.details2}>
        <CardContent className={classes.content}>
          <Typography noWrap style={{fontWeight: 'bold', fontSize: '33px', paddingRight: '28px'}}>
            {TestAverage}
          </Typography>
          <Typography noWrap variant="subtitle1" color='white'>
            {TestChange}
          </Typography>
        </CardContent>
        <LinGraph customData={bob}/>
      </div>    
    </Card>
  );
}
