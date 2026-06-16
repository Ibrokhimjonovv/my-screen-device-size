import Devices from "./devices";

export const metadata = {
  title: 'Device Viewport Sizes & Screen Resolution Database | M17',
  description: 'Complete database of device viewport sizes, screen resolutions, pixel ratios, and PPI for responsive web design. Find iPhone, Samsung, Google Pixel, tablet, and laptop viewport dimensions.',
  
  keywords: 'device viewport sizes, screen resolution database, responsive design, pixel ratio, CSS PPI, mobile viewport, tablet dimensions, iPhone viewport, Samsung viewport, responsive breakpoints, device dimensions, viewport meta tag, device-width',
  
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
    locale: 'en_US',                          // ← qo'shildi
    url: 'https://my-screen-device-size.vercel.app/all-devices-size',
    siteName: 'My Device Size | M17',
    title: 'Device Viewport Sizes & Resolution Database | M17',
    description: 'Comprehensive database of mobile, tablet, and laptop viewport sizes, screen resolutions, and pixel densities for responsive web development.',
    images: [{
      url: 'https://my-screen-device-size.vercel.app/preview.jpg',
      width: 1200,                             // ← qo'shildi
      height: 630,                             // ← qo'shildi
      alt: 'Device Viewport Sizes Database',  // ← qo'shildi
    }],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@mydevicesize',
    creator: '@mydevicesize',                 // ← qo'shildi
    title: 'Device Viewport Size Database | M17',
    description: 'Find viewport dimensions, screen resolutions, and pixel ratios for all popular devices.',
    images: ['https://my-screen-device-size.vercel.app/preview.jpg'],
  },

  alternates: {
    canonical: 'https://my-screen-device-size.vercel.app/all-devices-size',
  },
};

export default function DevicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "name": "Device Viewport Sizes Database",
    "description": "Complete database of device viewport sizes, screen resolutions and pixel ratios for responsive web design",
    "url": "https://my-screen-device-size.vercel.app/all-devices-size",
    "creator": {
      "@type": "Organization",
      "name": "My Device Size",
      "url": "https://my-screen-device-size.vercel.app"
    },
    "keywords": ["viewport", "screen resolution", "pixel ratio", "responsive design", "mobile devices"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Devices />
    </>
  );
}