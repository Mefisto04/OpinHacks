import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, ImageOverlay, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);

  const imageBounds = [[21.0846, 79.0505], [21.0846 + 0.1, 79.0505 + 0.1]];
  const fetchUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Error fetching user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  useEffect(() => {
    fetchUserLocation();
  }, []);

  const MyMap = () => {
    const map = useMap();
    if (userLocation) {
      map.setView(userLocation, 15);
    }
    return null;
  };

  return (
    <MapContainer
      center={userLocation || [21.190449, 81.284920]}
      zoom={userLocation ? 15 : 7}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MyMap />
      {userLocation && (
        <Marker position={userLocation}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
      {/* <ImageOverlay url={imageUrl} bounds={imageBounds} /> */}
    </MapContainer>
  );
};

export default Map;


