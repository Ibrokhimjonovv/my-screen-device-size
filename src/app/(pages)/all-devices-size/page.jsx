import Devices from "./devices";

export const metadata = {
  title: 'Devices Viewport Sizes & Screen Resolution Database | м17',
  description: 'Complete database of device viewport sizes, screen resolutions, pixel ratios, and PPI for responsive web design. Find iPhone, Samsung, Google Pixel, tablet, and laptop viewport dimensions. Compare device resolutions, screen sizes, and CSS PPI for mobile-first development.',
  keywords: 'device viewport sizes, screen resolution database, responsive design, pixel ratio, CSS PPI, mobile viewport, tablet dimensions, iPhone viewport, Samsung viewport, responsive breakpoints, device dimensions, mobile devices, viewport meta tag, device-width',
  authors: [{ name: 'м17' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://mydevicesize.uz/all-devices-size',
    siteName: 'My Device Size | м17',
    title: 'Device Viewport Sizes & Resolution Database | м17',
    description: 'Comprehensive database of mobile, tablet, and laptop viewport sizes, screen resolutions, and pixel densities for responsive web development.',
    images: ['https://mydevicesize.uz/preview.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mydevicesize',
    title: 'Device Viewport Size Database | м17',
    description: 'Find viewport dimensions, screen resolutions, and pixel ratios for all popular devices. Essential tool for responsive web design.',
    images: ['https://mydevicesize.uz/preview.jpg'],
  },
  alternates: {
    canonical: 'https://mydevicesize.uz/all-devices-size',
  },
};

export default function DevicesPage() {
  return <Devices />;
}