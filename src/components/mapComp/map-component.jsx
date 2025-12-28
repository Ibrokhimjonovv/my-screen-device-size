// components/MapWithNoSSR.js
"use client"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapWithNoSSR = ({ lat, lon, country, isp }) => {
    return (
        <MapContainer center={[lat, lon]} zoom={4} style={{ height: '100%', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[lat, lon]}>
                <Popup>
                    <div>
                        <strong>{country}</strong><br />
                        {isp}
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default MapWithNoSSR;
