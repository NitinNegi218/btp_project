// Map.js

import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.css';

mapboxgl.accessToken =
  'pk.eyJ1Ijoibml0aW5uZWdpMjciLCJhIjoiY2xweDJ6b2tpMG13eDJyazdhaXR6YWhhaSJ9.C5HWmqTda2O9AohKMN6REQ';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl,
      countries: '', // Set the country filter (optional)
    });

    map.addControl(geocoder);

    geocoder.on('result', (event) => {
      const { center } = event.result.geometry;

      if (center && center.length === 2 && !isNaN(center[0]) && !isNaN(center[1])) {
        const [lng, lat] = center;

        setLng(lng);
        setLat(lat);
        setZoom(12);

        map.setCenter([lng, lat]);
        map.setZoom(12);
      } else {
        console.error('Invalid geocoder result:', event.result);
      }
    });

    // Add a move event listener to update the state when the map is manually moved
    map.on('move', () => {
      const center = map.getCenter();
      setLng(center.lng.toFixed(4));
      setLat(center.lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='map-wrapper' style={{ height: '100vh', width: '50vw' }}>
      <div className='map-container' ref={mapContainerRef}>
        <div className='sidebarStyle'>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
    </div>
  );
};

export default Map;
