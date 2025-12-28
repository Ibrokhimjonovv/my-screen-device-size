import Hide from "./hide";


export const metadata = {
  title: 'Hide My IP Address - Stay Anonymous Online with VPN Guide | м17',
  description: 'Complete guide on how to hide your IP address and protect your online identity. Learn about VPNs, proxy servers, Tor browser, and privacy tools. Stay anonymous and secure online with our expert recommendations.',
  keywords: 'hide IP address, VPN guide, online privacy, anonymous browsing, change IP, internet security, hide location, VPN recommendations, NordVPN, Surfshark, ExpressVPN, IPVanish, CyberGhost, online anonymity',
  authors: [{ name: 'м17' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://my-device-size.vercel.app/hide-my-ip-address',
    siteName: 'My Device Size | м17',
    title: 'How to Hide Your IP Address - Complete Privacy Guide | м17',
    description: 'Learn effective methods to hide your IP address using VPNs, proxies, and privacy tools. Protect your online identity and browse securely.',
    images: ['https://my-device-size.vercel.app/preview-hide-ip.png'],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mydevicesize',
    title: 'Hide My IP Address - Stay Anonymous Online | м17',
    description: 'Complete guide to hiding your IP address with VPNs and privacy tools. Protect your online identity today.',
    images: ['https://my-device-size.vercel.app/preview-hide-ip.png'],
  },
  alternates: {
    canonical: 'https://my-device-size.vercel.app/hide-my-ip-address',
  },
};

export default function HideMyIPPage() {
  return <Hide />;
}