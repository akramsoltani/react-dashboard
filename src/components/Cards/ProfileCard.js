import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: '#061218',
    paddingBottom: '-10px',
    height: '190px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    color: 'white',
    paddingLeft: theme.spacing(5),
  },
  cover: {
    width: 120,
    height: 120,
    borderRadius: '50%',
    margin: theme.spacing(5),
  },
  controls: {
    display: 'flex',
    paddingLeft: theme.spacing(1),
  },
  playIcon: {
    height: 40,
    width: 40,
    color: 'white',
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
          <Typography key={id} style={{color: '#059DC0'}} className={classes.name} component='h5' variant='h5'>
            {name}
          </Typography>
          <Typography style={{textDecorationLine: 'underline' }} variant="subtitle1" color="white">
            {email}
          </Typography>
          <Link onClick={()=>{ alert('Please sign-in to your account first'); }}>
            <IconButton aria-label="Email">
              <MailIcon  className={classes.playIcon} />
            </IconButton>
          </Link>
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
