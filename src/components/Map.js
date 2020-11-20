import React, { useRef, useEffect } from 'react';

// Local imports
import '../styles/Map.css';

const Map = props => {
  const mapRef = useRef();

  const { center } = props;

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: 16
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center]);

  return <div ref={mapRef} className="map"></div>;
};

export default Map;
