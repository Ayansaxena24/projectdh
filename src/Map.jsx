import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
 
function Map() {
  const mapContainerStyle = {
    width: 'auto',
    height: '30 em',
  };
 
  const center = {
    lat: 51.5074,
    lng: 0.1278
  };
 
  return (
    <LoadScript googleMapsApiKey="AIzaSyA2Dpmfh0ydx5L5U6TIJCtx6dlLOcpIxeo">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  );
}
 
export default Map;