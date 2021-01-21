import React from 'react';
import 'App.css';
import MyDrawer from 'components/Navigation/MyDrawer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from 'components/Header';
import SignIn from 'pages/SignInPage';
import Homepage from 'pages/Homepage';
import { makeStyles } from '@material-ui/core/styles';
import Notification from 'pages/NotificationPage';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 3,
    paddingTop: theme.spacing(11),
    paddingLeft: theme.spacing(35),
    paddingRight: theme.spacing(3),
    backgroundColor: '#0A2634',
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div>
        <Header/>
        <MyDrawer />
        <div className={classes.content}>
        <Switch>
          <Redirect from="/" exact to="/signin" /> 
          <Route path="/signin" exact component={SignIn}/>
          <Route path="/dashboard" component={Homepage}/>
          <Route path="/notifications/:id" component={Notification} />
        </Switch>
        </div>
      </div>
    </Router>
  ); 
}

export default App;