// app/ip-address-checker/ip/[ip]/page.jsx
import { Suspense } from 'react'
import IpDetail from './ip-detail'

export async function generateMetadata({ params }) {
  const { ip } = await params

  return {
    title: `IP Address ${ip} Details - Location, ISP & Info | MyDeviceSize`,
    description: `Detailed information about IP address ${ip}: ISP, country, region, city, timezone, and exact coordinates. Free IP lookup tool.`,
    
    keywords: `${ip}, ip address lookup, ip details, ${ip} location, ${ip} isp, ip checker, ip geolocation, ip tracker`,

    authors: [{ name: 'M17' }],

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `https://my-screen-device-size.vercel.app/ip-address-checker/ip/${ip}`,
      siteName: 'My Device Size | M17',
      title: `IP ${ip} - Location, ISP & Details | MyDeviceSize`,
      description: `Find all information for ${ip}: ISP, organization, timezone, region, city and coordinates.`,
      images: [{
        url: 'https://my-screen-device-size.vercel.app/preview.jpg',
        width: 1200,
        height: 630,
        alt: `IP Address ${ip} Details`,
      }],
    },

    twitter: {
      card: 'summary_large_image',
      site: '@mydevicesize',
      creator: '@mydevicesize',
      title: `IP ${ip} Details | MyDeviceSize`,
      description: `Discover ISP, region, timezone, and location for ${ip} instantly.`,
      images: ['https://my-screen-device-size.vercel.app/preview.jpg'],
    },

    alternates: {
      canonical: `https://my-screen-device-size.vercel.app/ip-address-checker/ip/${ip}`,
    },
  }
}

export default async function Page({ params }) {
  const { ip } = await params

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://my-screen-device-size.vercel.app" },
      { "@type": "ListItem", "position": 2, "name": "IP Checker", "item": "https://my-screen-device-size.vercel.app/ip-address-checker" },
      { "@type": "ListItem", "position": 3, "name": `IP: ${ip}`, "item": `https://my-screen-device-size.vercel.app/ip-address-checker/ip/${ip}` }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>Loading IP details...</div>}>
        <IpDetail ip={ip} />
      </Suspense>
    </>
  )
}