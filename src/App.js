import React from 'react';
import 'App.css';
import ClippedDrawer from 'components/Drawer';
import Notifications from 'pages/Notifications';
import Homepage from 'pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' ;

function App() {
  return (
    <Router>
    <div className="App">
      <ClippedDrawer />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/notifications" component={Notifications} />
      </Switch>
    </div>
    </Router>
  ); 
}

export default App;
