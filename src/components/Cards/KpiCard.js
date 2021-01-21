import React from 'react';
import LineGraph from 'components/Graphs/LineGraph';
import AreaGraph from 'components/Graphs/AreaGraph';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'left',
    backgroundColor: '#061218',
    height: '190px'
  },
  details: {
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
    height: 150,
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

export default function KpiCard(props) {
  const classes = useStyles();
  const graphType = props.graphType;
  const {id, name, avg, data, type, change } = props.kpiData;
  const changeDir = props.changeDir;
  return (
    <Card className={classes.root}>
      <div>
        <CardContent className={classes.content}>
          <Typography noWrap component='subtitle1' variant='subtitle1'>
            {name}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography noWrap style={{fontWeight: 'bold', fontSize: '33px', paddingRight: '28px'}}>
            {avg} {type}
          </Typography>
          <Typography noWrap variant="subtitle2" color='white'>
            {changeDir ? <ArrowUpwardIcon style={{fill: "green"}}/> : <ArrowDownwardIcon style={{fill: "red"}}/>}
              <br/>{change} by 1 year
          </Typography>
        </CardContent>
        {graphType ? <LineGraph key={id} data={data}/> : <AreaGraph key={id} data={data}/>}
      </div>
    </Card>
  );
}

