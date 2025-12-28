'use client'

import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import "./ip.scss"
import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import('../../../../../components/mapComp/map-component'), { ssr: false });


// Leaflet icons fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const IpDetail = ({ ip }) => {
    const [ipData, setIpData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (ip) {
            fetchIpDetails(ip)
        }
    }, [ip])

    const fetchIpDetails = async (ipAddress) => {
        try {
            setLoading(true);
            setError(null);

            // ✅ ipapi.co dan foydalanish (HTTPS qo'llab-quvvatlaydi)
            const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
            const data = await response.json();

            if (data.error !== true && data.ip) {
                // Ma'lumotlarni formatlash
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

    // IP manzilni decimal formatga o'tkazish
    const ipToDecimal = (ip) => {
        return ip.split('.').reduce((acc, octet, index) => {
            return acc + parseInt(octet) * Math.pow(256, 3 - index)
        }, 0)
    }

    // Koordinatalarni gradus formatga o'tkazish
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
                    <div className="loading">Loading IP details...</div>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div id='ip-detail'>
                <div className="ip-infos">
                    <div className="error">{error}</div>
                    <button onClick={() => fetchIpDetails(ip)} className="retry-btn">
                        Try Again
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div id='ip-detail'>
            <div className="ip-infos">
                <h2>IP Details For: {ip}</h2>
                <div className="infos">
                    <div className="txts">
                        <p>
                            <span>Decimal:</span>
                            <span>{ipToDecimal(ip)}</span>
                        </p>
                        <p>
                            <span>Hostname:</span>
                            <span>{ipData.query}</span>
                        </p>
                        <p>
                            <span>ASN:</span>
                            <span>{ipData.as.split(' ')[0]}</span>
                        </p>
                        <p>
                            <span>ISP:</span>
                            <span>{ipData.isp}</span>
                        </p>
                        <p>
                            <span>Organization:</span>
                            <span>{ipData.org}</span>
                        </p>
                        <p>
                            <span>Services:</span>
                            <span>None detected</span>
                        </p>
                        <p>
                            <span>Country:</span>
                            <span>{ipData.country} ({ipData.countryCode})</span>
                        </p>
                        <p>
                            <span>State/Region:</span>
                            <span>{ipData.regionName} ({ipData.region})</span>
                        </p>
                        <p>
                            <span>City:</span>
                            <span>{ipData.city}</span>
                        </p>
                        <p>
                            <span>ZIP Code:</span>
                            <span>{ipData.zip || 'Not available'}</span>
                        </p>
                        <p>
                            <span>Timezone:</span>
                            <span>{ipData.timezone}</span>
                        </p>
                        <p>
                            <span>Latitude:</span>
                            <span>{ipData.lat} ({formatCoordinate(ipData.lat, true)})</span>
                        </p>
                        <p>
                            <span>Longitude:</span>
                            <span>{ipData.lon} ({formatCoordinate(ipData.lon, false)})</span>
                        </p>
                    </div>
                    <div className="map">
                        {ipData.lat && ipData.lon && (
                                    <MapWithNoSSR
                                        lat={ipData.lat}
                                        lon={ipData.lon}
                                        country={ipData.country}
                                        isp={ipData.isp}
                                    />
                                )}
                    </div>
                </div>
                <p id='war'>
                    Latitude and Longitude are often near the center of population. These values are not precise enough to be used to identify a specific address, individual, or for legal purposes. IP data from IP2Location.
                </p>
            </div>
            <div className="square-ad">
                </div>
        </div>
    )
}

export default IpDetail