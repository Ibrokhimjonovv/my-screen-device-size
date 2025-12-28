"use client"
import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./ip-checker.scss";

// Leaflet icons fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import('./MapWithNoSSR'), { ssr: false });

const IpChecker = () => {
    const [ipData, setIpData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [ipv6, setIpv6] = useState(null);



    useEffect(() => {
        fetchIpData();
    }, []);

    const fetchIpData = async () => {
        try {
            setError(null)
            setLoading(true);

            // IPv4 ni olish
            const ipv4Response = await fetch('https://api.ipify.org?format=json');
            const ipv4Result = await ipv4Response.json();
            const userIpv4 = ipv4Result.ip;

            // IPv6 ni olish
            let userIpv6 = null;
            try {
                const ipv6Response = await fetch('https://api64.ipify.org?format=json');
                const ipv6Result = await ipv6Response.json();
                if (ipv6Result.ip !== userIpv4) {
                    userIpv6 = ipv6Result.ip;
                }
            } catch (ipv6Error) {
                console.log('IPv6 not available');
            }

            // ✅ HTTPS versiyasini ishlatish
            const ipInfoResponse = await fetch(`https://ipapi.co/${userIpv4}/json/`);
            const ipInfoResult = await ipInfoResponse.json();

            if (ipInfoResult.ip) {
                setIpData({
                    userIp: userIpv4,
                    isp: ipInfoResult.org,
                    country: ipInfoResult.country_name,
                    countryCode: ipInfoResult.country_code,
                    city: ipInfoResult.city,
                    regionName: ipInfoResult.region,
                    timezone: ipInfoResult.timezone,
                    lat: ipInfoResult.latitude,
                    lon: ipInfoResult.longitude
                });
                setIpv6(userIpv6);
            } else {
                throw new Error('Failed to fetch IP information');
            }
        } catch (err) {
            setError('Error loading data');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    // IPv6 formatini tekshirish funksiyasi
    const isIPv6 = (ip) => {
        return ip && ip.includes(':');
    };
    return (
        <div id='ip-checker'>
            <div className="ad">
            </div>
            {loading && (
                <div className="ip-check-container">
                    <div className="loading">Loading data...</div>
                </div>
            )}

            {error ? (
                <div className="ip-check-container">
                    <div className="error">{error}</div>
                    <button onClick={fetchIpData} className="retry-btn">
                        Try Again
                    </button>
                </div>
            ) : (
                !loading && ipData && (
                    <div className="ip-check-container">
                        <div className="ip-datas">
                            <div className="ip-info">
                                <h3>My IP Address:</h3>
                                <div className="ip-address-nm">
                                    IPv4: <a href={`/ip-address-checker/ip/${ipData.userIp}`} className="ip-address">{ipData.userIp}</a>
                                </div>
                                <div className="ip-address-nm">
                                    IPv6: {ipv6 ? (
                                        <a href={ipv6} className="ip-address ipv6-address">{ipv6}</a>
                                    ) : (
                                        <span className="not-detected">Not detected</span>
                                    )}
                                </div>
                            </div>
                            <div className="ip-location-info">
                                <h3>My IP Information:</h3>
                                <div className="ip-address-loc">
                                    <p><span>ISP:</span> <span>{ipData.isp}</span></p>
                                    <p><span>Country:</span> <span>{ipData.country}</span></p>
                                    <p><span>Country Code:</span> <span>{ipData.countryCode}</span></p>
                                    <p><span>City:</span> <span>{ipData.city}</span></p>
                                    <p><span>Region:</span> <span>{ipData.regionName}</span></p>
                                    <p><span>Timezone:</span> <span>{ipData.timezone}</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="map">
                            <div className="mapp">
                                {ipData.lat && ipData.lon && (
                                    <MapWithNoSSR
                                        lat={ipData.lat}
                                        lon={ipData.lon}
                                        country={ipData.country}
                                        isp={ipData.isp}
                                    />
                                )}
                            </div>
                            <div className="click-for-more">
                                <a href={`/ip-address-checker/ip/${ipData.userIp}`}>
                                    Click for more your IP information
                                </a>
                            </div>
                        </div>
                    </div>
                )
            )}

            <div className="ad">
            </div>

            <div className="more-text-informations">
                <h1>Frequently Asked Questions</h1>
                <h2>Whats my IP address?</h2>
                <p id='txt1'>Wondering "how can I check my IP?" You're not alone. Your IP address is a unique number linked to your online activity, somewhat like a return address on a letter.</p>
                <p id="txt2">
                    Whether you're checking emails, shopping, or chatting online, your IP address works tirelessly behind the scenes. It's assigned by your Internet Service Provider (ISP), allowing you to connect to the Internet through a network, whether at home, work, or on the go. Your IP address can change, especially when you switch networks while traveling. If you’re curious to know what is my IP, scroll to the top of the page to see your digits!
                </p>
                <h2>What is a public IP address?</h2>
                <p id="txt1">A public IP address is a unique numerical label assigned to each device connected to the Internet, allowing for the identification and communication between devices on a global scale.</p>
                <p id="txt2">
                    Think of it as your digital home address that enables you to send and receive data over the Internet. This address is assigned by your Internet Service Provider (ISP) and is visible to the wider Internet, distinguishing your device from the billions of others connected worldwide.
                </p>
                <h2>
                    How does my public IP address affect me?
                </h2>

                <p>
                    Your public IP address plays a crucial role in your online experience. It is essential for:
                </p>

                <ul>
                    <li>
                        <span>Online Communication:</span> It allows you to access websites, send emails, and connect to various online services by directing the data you request back to your device.
                    </li>
                    <li>
                        <span>Security and Privacy:</span> Understanding your public IP can help you take measures to protect your online privacy and security, as it can be used to determine your general IP location and potentially other personal information.
                    </li>
                    <li>
                        <span>Remote Access and Online Gaming:</span> A public IP address enables you to set up remote access to your home network, participate in online gaming, and use VoIP services more efficiently.
                    </li>
                    <li>
                        <span>Website Hosting:</span> If you're hosting a website or server, your public IP address allows users from around the globe to find and connect to your site or service.
                    </li>
                </ul>
                <div className="ad"></div>
                <h2>
                    Should I change my IP address?
                </h2>
                <p>Changing your IP address can be beneficial for several reasons:</p>
                <ul>
                    <li>
                        <span>Enhanced Privacy and Anonymity:</span> By changing your IP address, your online activities become hidden from third parties, including websites, cybercriminals, and even your Internet Service Provider (ISP). This ensures that your browsing, streaming, and gaming remain private.
                    </li>
                    <li>
                        <span>Dedicated IP Benefits:</span> Obtaining a Dedicated IP can streamline your online interactions. You'll face fewer dreaded CAPTCHAs, enjoy secure access to business servers and online payments, and maintain a consistent virtual location in select countries. This is particularly advantageous for those requiring stable access for work or personal use.
                    </li>
                    <li>
                        <span>Concealed Location:</span> A changed IP address masks your physical location by connecting you to a private, encrypted VPN server. This level of privacy ensures that not even your ISP can monitor your online activities, offering peace of mind and additional security.
                    </li>
                    <li>
                        <span>Secure Public Wi-Fi Use:</span> Changing your IP address through a VPN provides a secure and private connection, even on unsecured public Wi-Fi networks. This allows you to safely browse, shop, and bank on the go without risking your personal information.
                    </li>
                </ul>

                <div className="square-ad">
                </div>
            </div>
        </div>
    )
}

export default IpChecker;