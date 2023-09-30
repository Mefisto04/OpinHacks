import React from 'react';
import { MapContainer, TileLayer, Marker, Popup,ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './Map.css';

const Map = () => {
    const Coordinates = [21.0846, 79.0505];
    const imageUrl = './pin.png';
    // const imageUrl = 'https://fastly.picsum.photos/id/248/3872/2592.jpg?hmac=_F3LsKQyGyWnwQJogUtsd_wyx2YDYnYZ6VZmSMBCxNI';
    const imageBounds = [[21.0846, 79.0505], [21.0846 + 0.1, 79.0505 + 0.1]];
    return (
      <MapContainer
        center={Coordinates}
        zoom={12}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ImageOverlay url={imageUrl} bounds={imageBounds} />
        <Marker position={Coordinates}>
          <Popup>
            Delhi, India <br />
            The capital city!
          </Popup>
        </Marker>
        <Marker position={[22.5726, 88.3639]}>
          <Popup>
            Kolkata, India <br />
            The city of joy!
          </Popup>
        </Marker>
        <Marker position={[12.9716, 77.5946]}>
          <Popup>
            Bangalore, India <br />
            The IT capital!
          </Popup>
        </Marker>
        <Marker position={[19.0760, 72.8777]}>
          <Popup>
            Mumbai, India <br />
            The financial capital!
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  
  export default Map;

