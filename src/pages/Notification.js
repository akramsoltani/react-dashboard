import React from 'react';
import 'App.css';
import SkeletonChildren from 'components/Loader';

function Notification() {
  return (
    <div>
      <h1 style={{color: '#F4F4F4'}}>This is a notification</h1>
      <SkeletonChildren />
    </div>
  ); 
}

export default Notification;