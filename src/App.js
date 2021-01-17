import React from 'react';
import 'App.css';
import ClippedDrawer from 'components/Drawer';
import NotificationTable from 'components/NotificationTable';

function App() {
  return (
      <div>
        <h2>My first Apollo app</h2>
        <ClippedDrawer />
        <NotificationTable />
      </div>
    
  ); 
}

export default App;
