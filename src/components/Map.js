import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import photoUnavailable from '../assets/photoUnavailable.png';

const ImageMarker = ({ imageUrl }) => (
  <img className="image is-48x48" src={imageUrl || photoUnavailable} alt="" />
);

const Map = ({ latitude, longitude, imageUrl }) => {
  const defaultProps = {
    center: {
      lat: 41.95158110618014,
      lng: -87.73040048307418,
    },
    zoom: 3.5,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '70vh', width: '50vw' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDQluKwBoqyO4HC3Vte4oS9ZcYDrfLlAVw' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <ImageMarker imageUrl={imageUrl} lat={latitude} lng={longitude} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
