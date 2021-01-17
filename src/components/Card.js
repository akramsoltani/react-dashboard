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
    width: 110,
    height: 110,
    borderRadius: '50%',
    margin: '30px'
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

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography noWrap component='subtitle1' variant='subtitle1'>
            Account Details
          </Typography>
          <Typography className={classes.name} component='h5' variant='h5'>
            Akram Soltani
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Customer: @address
          </Typography>
        </CardContent>
        <IconButton aria-label="Email">
            <MailIcon className={classes.playIcon} />
          </IconButton>
      </div>
      <CardMedia
        className={classes.cover}
        image="https://res.cloudinary.com/aw0696/image/upload/v1610752617/IMG_20210108_121041_-_Copie.jpg"
        title="Live from space album cover"
      />
      

    </Card>
  );
}
