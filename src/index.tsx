import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import './index.css';
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F2YXNxdWV6IiwiYSI6ImNsY3prNWY4ZjA2OHUzcHBmeDY2ZjhudW0ifQ.vTWtskcjVNj6xIB6sqQg_A';

if (!navigator.geolocation) {
  alert('Tu navegar no tiene opción de geolocation');
  throw new Error('Tu navegar no tiene opción de geolocation');
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
