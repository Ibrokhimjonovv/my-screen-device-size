// app/ip-address-checker/page.jsx
import { Suspense } from 'react'
import IpChecker from './ip-checker'

export const metadata = {
  title: 'My IP Address Checker - Find Your Public IP Instantly | M17',
  description: 'Free IP address checker - instantly check your public IPv4 and IPv6 addresses. See your IP location, ISP, country, city, and view on interactive map.',
  keywords: 'my ip address, ip checker, what is my ip, public IP address, ipv4, ipv6, ip location, find my ip, ip lookup, internet protocol, ip address finder, whats my ip address, check my ip',

  authors: [{ name: 'M17' }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },

  openGraph: {
    type: 'website',
    url: 'https://my-screen-device-size.vercel.app/ip-address-checker',
    siteName: 'My Device Size | M17',
    locale: 'en_US',                    // ← qo'shildi
    title: 'Free IP Address Checker - Find Your Public IP Instantly',
    description: 'Instantly check your public IP address and location. See your ISP, country, city, and view your location on interactive map.',
    images: [{
      url: 'https://my-screen-device-size.vercel.app/preview.jpg',
      width: 1200,                      // ← qo'shildi
      height: 630,                      // ← qo'shildi
      alt: 'IP Address Checker Tool',   // ← qo'shildi
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@mydevicesize',
    creator: '@mydevicesize',           // ← qo'shildi
    title: 'My IP Address Checker - Find Your IP Instantly',
    description: 'Check your IPv4 and IPv6 addresses, ISP, and location.',
    images: ['https://my-screen-device-size.vercel.app/preview.jpg'],
  },

  alternates: {
    canonical: 'https://my-screen-device-size.vercel.app/ip-address-checker',
  },
};

export default function IpCheckerPage() {
  return (
    <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading IP checker...</div>}>
      <IpChecker />
    </Suspense>
  )
}