import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import './Map.css';
import axios from 'axios';
import Table from './Table'; // Import your Table component

mapboxgl.accessToken =
  'pk.eyJ1Ijoibml0aW5uZWdpMjciLCJhIjoiY2xweDJ6b2tpMG13eDJyazdhaXR6YWhhaSJ9.C5HWmqTda2O9AohKMN6REQ';

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(5);
  const [lat, setLat] = useState(34);
  const [zoom, setZoom] = useState(1.5);
  const [tableData, setTableData] = useState([]); // State to hold table data

  const handleGeocoderResult = useCallback((event) => {
    const { center } = event.result.geometry;

    if (center && center.length === 2 && !isNaN(center[0]) && !isNaN(center[1])) {
      const [lng, lat] = center;

      setLng(lng);
      setLat(lat);
      setZoom(12);

      // Make a POST request with latitude in the request body
      axios.post('https://solar-plus.onrender.com/calculate', { latitude: lat }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        // Handle the response and set the table data
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error making the POST request:', error);
      });
    } else {
      console.error('Invalid geocoder result:', event.result);
    }
  }, []);

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
      countries: '',
    });

    map.addControl(geocoder);

    geocoder.on('result', handleGeocoderResult);

    map.on('mousemove', (event) => {
      const { lng, lat } = event.lngLat;
      setLng(lng);
      setLat(lat);

      // Make a POST request with latitude in the request body
      axios.post('https://solar-plus.onrender.com/calculate', { latitude: lat }, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(response => {
        // Handle the response and set the table data
        setTableData(response.data);
      })
      .catch(error => {
        console.error('Error making the POST request:', error);
      });
    });

    map.on('move', () => {
      const center = map.getCenter();
      setLng(center.lng.toFixed(4));
      setLat(center.lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  }, [handleGeocoderResult]);

  return (
    <div className='container'>
      <div className='map-wrapper' style={{ height: '100vh', width: '50vw' }}>
        <div className='map-container' ref={mapContainerRef}>
          <div className='sidebarStyle'>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
      </div>
      <div className='table-wrapper'>
        <Table data={tableData} />
      </div>
    </div>
  );
};

export default Map;
