import React from 'react';
import 'App.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const position = [51.505, -0.09]

function MapTest() {
  return (
    <div className="leaflet-container" >
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A NEW customer is right here! <br /> Congrats mate!
      </Popup>
    </Marker>
  </MapContainer>
    </div>

  ); 
}

export default MapTest;