import React from 'react';
import 'App.css';
import NotificationTable from 'components/NotificationTable';
import AccordionTable from 'components/Accordion';

function Notifications() {
  return (
    <div>
      <h1 style={{color: '#F4F4F4'}}>Notifications</h1>
      <AccordionTable />
      <NotificationTable />
    </div>
    
  ); 
}

export default Notifications;
