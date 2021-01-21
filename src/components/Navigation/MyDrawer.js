import React from 'react';
import 'App.css';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import {Link} from 'react-router-dom';

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: -drawerWidth/3,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#061218',
  },
  drawerContainer: {
    paddingTop: '5%',
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
    overflowWrap: 'break-word',
  },
}));

export default function MyDrawer(props) {
  const classes = useStyles();
  const HomeLink = props => <Link to={"/dashboard"} {...props} />;
  const LogOutLink = props => <Link to={"/signin"} {...props} />;
  return (
    <div className={classes.root}>
      <CssBaseline />
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
          <ListItem button component={LogOutLink}>
            <ListItemIcon style={{color: 'white'}}><ExitToAppIcon /></ListItemIcon>
            <ListItemText style={{color: 'white'}} primary={'Log Out'} />
          </ListItem>
          <ListItem button>
            <ListItemIcon style={{color: 'white'}}><SettingsIcon /></ListItemIcon>
            <ListItemText style={{color: 'white'}} primary={'Settings'} />
          </ListItem>
        </List>
        </div>
      </Drawer>
      <main>
        <Toolbar disableGutters={true}	/>
      </main>
    </div>
  );
}