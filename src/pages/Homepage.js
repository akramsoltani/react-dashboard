import React from 'react';
import 'App.css';
import DefaultGrid from 'components/Grid';
import Divider from '@material-ui/core/Divider';

function Homepage() {
  return (
    <div>
      <p style={{color: '#F4F4F4', alignSelf: 'center',  fontSize: '22px'}}>Dashboard</p>
      <Divider />
      <DefaultGrid/>
    </div>
  ); 
}

export default Homepage;
