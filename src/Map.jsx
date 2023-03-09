import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
 
function Map() {
  // const mapContainerStyle = {
  //   width: 'auto',
  //   height: '30 em',
  // };
 
  // const center = {
  //   lat: 51.5074,
  //   lng: 0.1278
  // };
 
  return (
    // <LoadScript googleMapsApiKey="AIzaSyA2Dpmfh0ydx5L5U6TIJCtx6dlLOcpIxeo">
    //   <GoogleMap
    //     mapContainerStyle={mapContainerStyle}
    //     zoom={10}
    //     center={center}
    //   >
    //     <Marker
    //       position={center}
    //     />
    //   </GoogleMap>
    // </LoadScript>
    <div className=''>
      <iframe className='w-full'
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.088776960761!2d75.77365361488289!3d26.90067748313278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db59e54a6e2b9%3A0x9781ff1d59d9fd54!2sSthapna%20architects!5e0!3m2!1sen!2sin!4v1678376307468!5m2!1sen!2sin" 
      width="1390 rem" 
      height="400 rem" 
      style={{ border:0 }} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
}
 
export default Map;