import React, { useState, useEffect } from 'react';
import 'App.css';

function NotificationTable() {
  
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch ('https://cat-fact.herokuapp.com/facts');
    const items = await data.json();
    console.log(items);
    setItems(items);
  }

  return (
    <div>
      <h1>Notification API Testing</h1>
      {items.map(item => (
        <h2 key={item._id}>{item.createdAt}</h2>
      ))}
    </div>

  ); 
}

export default NotificationTable;
