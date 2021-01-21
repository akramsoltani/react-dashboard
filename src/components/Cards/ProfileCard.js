import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#061218',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    color: 'white'
  },
  cover: {
    width: 110,
    height: 110,
    borderRadius: '50%',
    margin: '40px'
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
    align: 'center',
    color: 'white'
  },
  name: {
    fontWeight: 'bold',
  }
}));

export default function ProfileCard(props) {
  const classes = useStyles();
  const {name, email, id, photo} = props.profileData;
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography noWrap component='subtitle1' variant='subtitle1'>
            Account Details
          </Typography>
          <Typography className={classes.name} component='h5' variant='h5'>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {email}
          </Typography>
          <IconButton aria-label="Email">
            <MailIcon className={classes.playIcon} />
          </IconButton>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={photo}
        title="Live from space album cover"
      />
    </Card>
  );
}
