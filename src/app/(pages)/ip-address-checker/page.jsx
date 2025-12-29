// app/ip-address-checker/page.jsx
import { Suspense } from 'react'
import IpChecker from './ip-checker'

export const metadata = {
  title: 'My IP Address Checker - Find Your Public IP Instantly | м17',
  description: 'Free IP address checker - instantly check your public IPv4 and IPv6 addresses. See your IP location, ISP, country, city, and view on interactive map. Find your IP address in seconds.',
  keywords: 'my ip address, ip checker, what is my ip, public IP address, ipv4, ipv6, ip location, find my ip, ip lookup, internet protocol, ip address finder, whats my ip address, check my ip',
  authors: [{ name: 'м17' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://mydevicesize.uz/ip-address-checker',
    siteName: 'My Device Size | м17',
    title: 'Free IP Address Checker - Find Your Public IP Instantly | м17',
    description: 'Instantly check your public IP address and location. See your ISP, country, city, and view your location on interactive map.',
    images: ['https://mydevicesize.uz/preview-ip.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mydevicesize',
    title: 'My IP Address Checker - Find Your IP Instantly | м17',
    description: 'Check your IPv4 and IPv6 addresses, ISP, and location. Simple and private IP checker tool.',
    images: ['https://mydevicesize.uz/preview-ip.png'],
  },
  alternates: {
    canonical: 'https://mydevicesize.uz/ip-address-checker',
  },
  other: {
    'geo.region': 'global',
    'geo.placename': 'Global',
  },
};

export default function IpCheckerPage() {
  return (
    <Suspense fallback={<div style={{padding: '20px', textAlign: 'center'}}>Loading IP checker...</div>}>
      <IpChecker />
    </Suspense>
  )
}