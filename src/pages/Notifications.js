import React from 'react';
import 'App.css';
import NotificationTable from 'components/NotificationTable';
import FilteredTable from 'components/FilteredTable';

function Notifications() {
  return (
    <div>
      <h1 style={{color: '#F4F4F4'}}>Notifications</h1>
      <FilteredTable />
      <NotificationTable />
    </div>
    
  ); 
}

export default Notifications;
