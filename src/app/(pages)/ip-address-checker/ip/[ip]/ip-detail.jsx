// app/ip-address-checker/ip/[ip]/ip-detail.jsx
'use client'

import React, { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import "./ip.scss"

// Leaflet CSS fayllarini import qilish
import 'leaflet/dist/leaflet.css'

// Leaflet ikonlari uchun component
const LeafletIconsFix = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('leaflet').then((L) => {
        delete L.Icon.Default.prototype._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
        });
      });
    }
  }, []);
  
  return null;
};

// Leaflet komponentlarini dynamic import qilish (faqat brauzerda)
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { 
    ssr: false,
    loading: () => (
      <div className="map-placeholder">
        <div className="loading-spinner"></div>
        <p>Loading map...</p>
      </div>
    )
  }
)
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
)
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
)

const IpDetail = ({ ip }) => {
    const [ipData, setIpData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [mapLoaded, setMapLoaded] = useState(false)

    useEffect(() => {
        if (ip) {
            fetchIpDetails(ip)
        }
    }, [ip])

    const fetchIpDetails = async (ipAddress) => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
            const data = await response.json();

            if (data.error !== true && data.ip) {
                setIpData({
                    query: data.ip,
                    as: data.asn ? `${data.asn} ${data.org || ''}`.trim() : 'Unknown',
                    isp: data.org || data.asn || 'Unknown',
                    org: data.org || 'Unknown',
                    country: data.country_name || 'Unknown',
                    countryCode: data.country_code || 'Unknown',
                    regionName: data.region || 'Unknown',
                    region: data.region_code || 'Unknown',
                    city: data.city || 'Unknown',
                    zip: data.postal || 'Not available',
                    timezone: data.timezone || 'Unknown',
                    lat: data.latitude || 0,
                    lon: data.longitude || 0
                });
                setMapLoaded(true);
            } else {
                throw new Error(data.reason || 'Failed to fetch IP details');
            }
        } catch (err) {
            setError('Error loading IP details');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    const ipToDecimal = (ip) => {
        return ip.split('.').reduce((acc, octet, index) => {
            return acc + parseInt(octet) * Math.pow(256, 3 - index)
        }, 0)
    }

    const formatCoordinate = (coord, isLatitude) => {
        const absCoord = Math.abs(coord)
        const degrees = Math.floor(absCoord)
        const minutes = Math.floor((absCoord - degrees) * 60)
        const seconds = ((absCoord - degrees - minutes / 60) * 3600).toFixed(2)
        const direction = isLatitude ?
            (coord >= 0 ? 'N' : 'S') :
            (coord >= 0 ? 'E' : 'W')

        return `${degrees}° ${minutes}′ ${seconds}″ ${direction}`
    }

    if (loading) {
        return (
            <div id='ip-detail'>
                <div className="ip-infos">
                    <div className="loading-container">
                        <div className="loading-spinner"></div>
                        <p>Loading IP details...</p>
                    </div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div id='ip-detail'>
                <div className="ip-infos">
                    <div className="error-message">
                        <div className="error-icon">⚠️</div>
                        <p>{error}</p>
                        <button onClick={() => fetchIpDetails(ip)} className="retry-btn">
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id='ip-detail'>
            <div className="ad-section top">
                <div className="square-ad">Advertisement Space</div>
            </div>
            <LeafletIconsFix />
            
            <div className="ip-header">
                <h1>IP Address Details</h1>
                <div className="ip-badge">{ip}</div>
            </div>

            <div className="ip-infos">
                <div className="info-grid">
                    <div className="info-section">
                        <h2>Network Information</h2>
                        <div className="info-cards">
                            <div className="info-card">
                                <span className="info-label">Decimal</span>
                                <span className="info-value">{ipToDecimal(ip)}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">Hostname</span>
                                <span className="info-value">{ipData.query}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">ASN</span>
                                <span className="info-value">{ipData.as.split(' ')[0]}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">ISP</span>
                                <span className="info-value">{ipData.isp}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">Organization</span>
                                <span className="info-value">{ipData.org}</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-section">
                        <h2>Location Information</h2>
                        <div className="info-cards">
                            <div className="info-card">
                                <span className="info-label">Country</span>
                                <div className="info-value-with-flag">
                                    <span className="country-flag">{ipData.countryCode}</span>
                                    <span>{ipData.country}</span>
                                </div>
                            </div>
                            <div className="info-card">
                                <span className="info-label">Region</span>
                                <span className="info-value">{ipData.regionName} ({ipData.region})</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">City</span>
                                <span className="info-value">{ipData.city}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">ZIP Code</span>
                                <span className="info-value">{ipData.zip || 'Not available'}</span>
                            </div>
                            <div className="info-card">
                                <span className="info-label">Timezone</span>
                                <span className="info-value">{ipData.timezone}</span>
                            </div>
                        </div>
                    </div>

                    <div className="info-section full-width">
                        <h2>Geographic Coordinates</h2>
                        <div className="coordinates-grid">
                            <div className="coordinate-card">
                                <span className="coordinate-label">Latitude</span>
                                <div className="coordinate-value">
                                    <span className="coordinate-number">{ipData.lat}</span>
                                    <span className="coordinate-dms">({formatCoordinate(ipData.lat, true)})</span>
                                </div>
                            </div>
                            <div className="coordinate-card">
                                <span className="coordinate-label">Longitude</span>
                                <div className="coordinate-value">
                                    <span className="coordinate-number">{ipData.lon}</span>
                                    <span className="coordinate-dms">({formatCoordinate(ipData.lon, false)})</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-section">
                    <h2>Location on Map</h2>
                    <div className="map-container">
                        {mapLoaded && ipData.lat && ipData.lon && (
                            <MapContainer
                                center={[ipData.lat, ipData.lon]}
                                zoom={8}
                                className="leaflet-map"
                                scrollWheelZoom={true}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                />
                                <Marker position={[ipData.lat, ipData.lon]}>
                                    <Popup>
                                        <div className="map-popup">
                                            <h4>{ipData.city}, {ipData.country}</h4>
                                            <p><strong>IP:</strong> {ip}</p>
                                            <p><strong>ISP:</strong> {ipData.isp}</p>
                                            <p><strong>Coordinates:</strong> {ipData.lat.toFixed(4)}, {ipData.lon.toFixed(4)}</p>
                                        </div>
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        )}
                    </div>
                </div>

                <div className="disclaimer">
                    <div className="disclaimer-icon">ℹ️</div>
                    <p>
                        Latitude and Longitude are often near the center of population. These values are not precise enough 
                        to be used to identify a specific address, individual, or for legal purposes. IP data from IP2Location.
                    </p>
                </div>
            </div>

            <div className="ad-section">
                <div className="square-ad">Advertisement Space</div>
            </div>
        </div>
    )
}

export default IpDetail