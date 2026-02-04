'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import './details.scss';
import { useEffect } from 'react';
import DeviceInnerAd1 from "../../../../components/yan-ads/device-inner-ad/device-size-inner-ad1.jsx";

export default function DeviceDetail({ device }) {
  const router = useRouter();

  // Orqaga qaytish
  const handleBack = () => {
    router.back();
  };

  // Share qilish
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${device.name} Specifications`,
          text: `Check out ${device.name} viewport size and specifications`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  useEffect(() => {
    // Structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": device.name,
      "description": `Viewport size: ${device.viewport}, Resolution: ${device.resolution}, Screen size: ${device.screen_size}`,
      "category": device.type,
      "brand": {
        "@type": "Brand",
        "name": device.name.includes('iPhone') ? 'Apple' :
          device.name.includes('Samsung') ? 'Samsung' :
            device.name.includes('Honor') ? 'Honor' : device.name
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Viewport Size",
          "value": device.viewport
        },
        {
          "@type": "PropertyValue",
          "name": "Resolution",
          "value": device.resolution
        },
        {
          "@type": "PropertyValue",
          "name": "Screen Size",
          "value": device.screen_size
        },
        {
          "@type": "PropertyValue",
          "name": "Pixel Ratio",
          "value": `${device.pixel_ratio}x`
        },
        {
          "@type": "PropertyValue",
          "name": "PPI",
          "value": device.density_ppi.toString()
        }
      ],
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      // Shu yerga qo‘shamiz
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "1"
      }
    };


    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    script.id = 'structured-data-device';

    // Remove existing if exists
    const existingScript = document.getElementById('structured-data-device');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [device]);

  // Qurilma turi ikonkasi
  const getDeviceIcon = () => {
    switch (device.type) {
      case "Phone": return "📱";
      case "Tablet": return "📟";
      case "Watch": return "⌚";
      default: return "📱";
    }
  };

  // Qurilma markasini aniqlash
  const getBrand = () => {
    if (device.name.includes('iPhone')) return 'Apple';
    if (device.name.includes('Samsung')) return 'Samsung';
    if (device.name.includes('Honor')) return 'Honor';
    return device.type;
  };

  return (
    <div className="device-detail-container">
      {/* Orqaga qaytish tugmasi */}
      <button onClick={handleBack} className="back-button">
        ← Back to All Devices
      </button>

      {/* Qurilma sarlavhasi */}
      <div className="device-header">
        <div className="device-title">
          <div className="device-type">
            <span className="device-icon">{getDeviceIcon()}</span>
            <span>{device.type}</span>
          </div>
          <h1>{device.name}</h1>
          <p className="device-brand">{getBrand()}</p>
        </div>

        <button onClick={handleShare} className="share-button">
          📤 Share
        </button>
      </div>

      {/* Asosiy xususiyatlar */}
      <div className="device-specs">
        <div className="device-inner-ad-1">
          <DeviceInnerAd1 />
        </div>
        <h2>Device Specifications</h2>

        <div className="specs-grid">
          <div className="spec-card main-card">
            <h3>📐 Display Information</h3>
            <div className="spec-list">
              <div className="spec-item">
                <span className="spec-label">Viewport Size:</span>
                <span className="spec-value highlight">{device.viewport}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Device Resolution:</span>
                <span className="spec-value">{device.resolution}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Screen Size:</span>
                <span className="spec-value">{device.screen_size}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Pixel Ratio:</span>
                <span className="spec-value badge">{device.pixel_ratio}x</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Density PPI:</span>
                <span className="spec-value">{device.density_ppi}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">CSS PPI:</span>
                <span className="spec-value">{device.css_ppi}</span>
              </div>
            </div>
          </div>

          {/* Viewport tushuntirish */}
          <div className="spec-card info-card">
            <h3>ℹ️ What is Viewport?</h3>
            <p>
              <strong>Viewport size ({device.viewport})</strong> is the CSS pixel dimensions
              used in responsive web design and media queries. This is what developers
              see in browser developer tools.
            </p>
            <p>
              <strong>Device resolution ({device.resolution})</strong> is the actual number
              of physical pixels on the screen.
            </p>
            <p>
              <strong>Pixel ratio ({device.pixel_ratio}x)</strong> means {device.pixel_ratio}
              physical pixels = 1 CSS pixel. Higher ratios provide sharper displays.
            </p>
          </div>

          {/* Responsive breakpointlar */}
          <div className="spec-card breakpoints-card">
            <h3>📱 Media Query Breakpoints</h3>
            <div className="breakpoints-list">
              <div className="breakpoint">
                <code>@media (max-width: {parseInt(device.viewport.split('x')[0])}px)</code>
                <span>Portrait width breakpoint</span>
              </div>
              <div className="breakpoint">
                <code>@media (max-width: {parseInt(device.viewport.split('x')[1])}px)</code>
                <span>Portrait height breakpoint</span>
              </div>
              <div className="breakpoint">
                <code>@media (min-width: {parseInt(device.viewport.split('x')[0]) + 1}px)</code>
                <span>Above this device width</span>
              </div>
            </div>
          </div>

          {/* PPI tushuntirish */}
          <div className="spec-card ppi-card">
            <h3>🔍 PPI Explanation</h3>
            <div className="ppi-info">
              <div className="ppi-item">
                <span className="ppi-label">Density PPI:</span>
                <span className="ppi-value">{device.density_ppi}</span>
                <p>Physical pixels per inch (higher = sharper)</p>
              </div>
              <div className="ppi-item">
                <span className="ppi-label">CSS PPI:</span>
                <span className="ppi-value">{device.css_ppi}</span>
                <p>Effective PPI for web development</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Useful links */}
      <div className="useful-links">
        <h3>Useful Links</h3>
        <div className="links">
          <a
            href={`https://www.google.com/search?q=${encodeURIComponent(device.name + ' specifications')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            🔍 Search {device.name} on Google
          </a>
          <a
            href={`https://www.gsmarena.com/results.php3?sQuickSearch=yes&sName=${encodeURIComponent(device.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            📱 View on GSMArena
          </a>
          <Link href="/all-devices-size" className="link-button secondary">
            📋 Back to Devices List
          </Link>
        </div>
      </div>

      {/* Comparison table */}
      <div className="comparison-section">
        <h3>📊 Viewport Comparison</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Device</th>
              <th>Viewport</th>
              <th>Resolution</th>
              <th>Screen Size</th>
              <th>Pixel Ratio</th>
            </tr>
          </thead>
          <tbody>
            {/* Bu yerda o'xshash qurilmalarni ko'rsatish mumkin */}
            <tr>
              <td>{device.name}</td>
              <td><strong>{device.viewport}</strong></td>
              <td>{device.resolution}</td>
              <td>{device.screen_size}</td>
              <td>{device.pixel_ratio}x</td>
            </tr>
            {/* iPhone X bilan taqqoslash */}
            {device.name !== 'iPhone X' && (
              <tr>
                <td>iPhone X</td>
                <td>375x812</td>
                <td>1125x2436</td>
                <td>5.8"</td>
                <td>3x</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Device notes */}
      <div className="device-notes">
        <h3>💡 Notes for Developers</h3>
        <div className="notes-list">
          <div className="note">
            <strong>Responsive Design:</strong> Use media queries based on viewport width ({device.viewport.split('x')[0]}px) for this device.
          </div>
          <div className="note">
            <strong>Pixel Density:</strong> This device has a {device.pixel_ratio}x pixel ratio, meaning images should be provided in @2x or @3x resolutions.
          </div>
          <div className="note">
            <strong>Touch Targets:</strong> Minimum touch target size should be 44x44px for this screen density.
          </div>
          <div className="note">
            <strong>Typography:</strong> Base font size of 16px will appear at {device.css_ppi} PPI on this device.
          </div>
        </div>
      </div>

      {/* Related devices */}
      <div className="related-devices">
        <h3>🔗 View Other Devices</h3>
        <div className="related-links">
          <Link href="/all-devices-size" className="related-link">
            All Devices List
          </Link>
          <Link href="/all-devices-size/iphone-x" className="related-link">
            iPhone X Details
          </Link>
          <Link href="/all-devices-size/samsung-galaxy-s23-ultra" className="related-link">
            Samsung Galaxy S23 Ultra
          </Link>
        </div>
      </div>
    </div>
  );
}
