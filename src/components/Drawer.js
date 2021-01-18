import React from 'react';
import 'App.css';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

import {Link} from 'react-router-dom';

import Notifications from 'pages/Notifications';
import Homepage from 'pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;
import Notification from 'pages/Notification';

//Arbitrary Width, to be changed later
const drawerWidth = 250;

//const BGImage = "https://www.digthischick.net/wp-content/uploads/2012/09/sidebar-background-e1349887026985.jpg";

//Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: -drawerWidth/3,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: '#061218',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    //backgroundImage: `url(${BGImage})`,
    backgroundColor: '#061218',
  },
  drawerContainer: {
    paddingTop: '5%',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: '#0A2634',
  },
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();
  const HomeLink = props => <Link to={"/"} {...props} />;
  const NotifLink = props => <Link to={"/notifications"} {...props} />;

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" noWrap>
          ROADEO
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />        
        <div className={classes.drawerContainer}>
        <List>
          <ListItem button component={HomeLink}>
            <ListItemIcon style={{color: 'white'}}><HomeIcon /></ListItemIcon>
            <ListItemText style={{color: 'white'}} primary={'Homepage'} />
          </ListItem>
          <ListItem button component={NotifLink}>
            <ListItemIcon style={{color: 'white'}}><NotificationsActiveIcon /></ListItemIcon>
            <ListItemText style={{color: 'white'}} primary={'Notifications'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{color: 'white'}}><SearchIcon /></ListItemIcon>
            <ListItemText style={{color: 'white'}} primary={'Search'} />
          </ListItem>
        </List>
        <Divider />
          <List>
          <ListItem button>
            <ListItemIcon style={{color: '#C8A007'}}><SettingsIcon /></ListItemIcon>
            <ListItemText style={{color: '#C8A007'}} primary={'Settings'} />
          </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar disableGutters={true}	/>
        
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/notifications" exact component={Notifications} />
        <Route path="/notifications/:id" exact component={Notification} />
      </Switch>
      </main>
    </div>
      </Router>
  );
}