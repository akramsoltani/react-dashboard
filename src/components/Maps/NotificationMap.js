import React from 'react';
import 'App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.907, 4.3998]

function NotificationMap({markersList}) {
  
  return (
    <div className="leaflet-container" >
      <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markersList.map((item, index) => {
        return(
        <Marker key={index} position={item.location}>
          <Popup>
            {item.label}
          </Popup>
        </Marker>)
      })}
    
  </MapContainer>
    </div>
  ); 
}

export default NotificationMap;