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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import {Link} from 'react-router-dom';

import Notifications from 'pages/Notifications';
import Homepage from 'pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;


//Arbitrary Width, to be changed later
const drawerWidth = 250;

const BGImage = "https://www.digthischick.net/wp-content/uploads/2012/09/sidebar-background-e1349887026985.jpg";

//Styling
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'gray',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundImage: `url(${BGImage})`,
    backgroundSize: '100%',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const HomeLink = props => <Link to={"/"} {...props} />;
  const NotifLink = props => <Link to={"/notifications"} {...props} />;

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
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
            <ListItemIcon><InboxIcon /></ListItemIcon>
            <ListItemText primary={'Homepage'} />
          </ListItem>
          <ListItem button component={NotifLink}>
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Notifications'} />
          </ListItem>
        </List>
        <Divider />
          <List>
            {['My account', 'Some other thing', 'YEAAAAAAAAAH'].map((text, index) => (
              <ListItem button key={text} component={NotifLink}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
      </main>
    </div>
      </Router>
  );
}