import { notFound } from 'next/navigation'
import DeviceDetail from './details'
import { devices } from './devices'

export async function generateMetadata({ params }) {
  const { slug } = await params
  const device = devices.find(d => d.slug === slug)

  // 404
  if (!device) {
    return {
      title: 'Device Not Found | MyDeviceSize',
      description: 'The requested device could not be found.',
      robots: {
        index: false,
        follow: false,
      },
      alternates: {
        canonical: 'https://my-screen-device-size.vercel.app/all-devices-size',
      },
    }
  }

  const pageUrl = `https://my-screen-device-size.vercel.app/all-devices-size/${device.slug}`
  const title = `${device.name} Viewport & Screen Specs | MyDeviceSize`
  const description = `${device.name}: Viewport ${device.viewport}px, Resolution ${device.resolution}, Screen ${device.screen_size}, Pixel Ratio ${device.pixel_ratio}x, PPI ${device.density_ppi}. Full specs for responsive design.`

  return {
    title,
    description,

    keywords: [
      device.name,
      `${device.name} viewport size`,
      `${device.name} screen resolution`,
      `${device.name} pixel ratio`,
      `${device.name} specifications`,
      device.type,
      'viewport size',
      'screen resolution',
      'responsive design',
      'CSS pixels',
      'mobile viewport',
    ].join(', '),

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
      type: 'article',
      locale: 'en_US',
      url: pageUrl,
      siteName: 'My Device Size | M17',
      title,
      description,
      images: [{
        url: 'https://my-screen-device-size.vercel.app/preview-devices.png',
        width: 1200,
        height: 630,
        alt: `${device.name} viewport and screen specifications`,
      }],
    },

    twitter: {
      card: 'summary_large_image',
      site: '@mydevicesize',
      creator: '@mydevicesize',
      title,
      description: `Viewport: ${device.viewport} • Resolution: ${device.resolution} • Screen: ${device.screen_size} • PPI: ${device.density_ppi}`,
      images: ['https://my-screen-device-size.vercel.app/preview-devices.png'],
    },

    alternates: {
      canonical: pageUrl,
    },
  }
}

export default async function DevicePage({ params }) {
  const { slug } = await params
  const device = devices.find(d => d.slug === slug)

  if (!device) notFound()

  const pageUrl = `https://my-screen-device-size.vercel.app/all-devices-size/${device.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": `${device.name} Viewport Size & Screen Specifications`,
    "description": `Complete specifications for ${device.name}: viewport, resolution, pixel ratio and PPI`,
    "url": pageUrl,
    "author": {
      "@type": "Organization",
      "name": "My Device Size",
      "url": "https://my-screen-device-size.vercel.app"
    },
    "about": {
      "@type": "Product",
      "name": device.name,
      "category": device.type,
      "description": `${device.name} with ${device.screen_size} screen`,
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://my-screen-device-size.vercel.app" },
        { "@type": "ListItem", "position": 2, "name": "All Devices", "item": "https://my-screen-device-size.vercel.app/all-devices-size" },
        { "@type": "ListItem", "position": 3, "name": device.name, "item": pageUrl }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DeviceDetail device={device} />
    </>
  )
}