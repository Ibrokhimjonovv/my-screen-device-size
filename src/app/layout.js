import { Montserrat } from 'next/font/google';
import "../styles/globals.scss";
import { ContextProvider } from '@/context/context';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata = {
  title: "My Device Size - Device Viewport Sizes, IP Checker & Unit Converter | м17",
  description: "Free tools for developers and designers: Check device viewport sizes, find your IP address, convert CSS units (px, em, rem, vw, vh). Complete database of iPhone, Samsung, Honor device specifications.",
  keywords: "device viewport size, screen resolution, responsive design, ip address checker, css unit converter, mobile devices, iPhone viewport, Samsung Galaxy, Honor Magic, responsive breakpoints, web development tools, pixel density, PPI calculator",
  authors: [{ name: "м17" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: "https://my-screen-device-size.vercel.app",
    siteName: "My Device Size | м17",
    title: "My Device Size - Device Viewport Sizes & Web Development Tools",
    description: "Check device viewport sizes, find your IP address, and convert CSS units. Essential tools for responsive web design and development.",
    images: [
      {
        url: "https://my-screen-device-size.vercel.app/preview.jpg",
        width: 1200,
        height: 630,
        alt: "My Device Size - Web Development Tools",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@mydevicesize",
    creator: "@mydevicesize",
    title: "My Device Size - Device Viewport Sizes & Web Tools",
    description: "Free tools for checking device viewport sizes, IP addresses, and CSS unit conversions",
    images: ["https://my-screen-device-size.vercel.app/preview.jpg"],
  },
  alternates: {
    canonical: "https://my-screen-device-size.vercel.app",
    languages: {
      "en-US": "https://my-screen-device-size.vercel.app",
      // Add other languages if needed
    },
  },
  category: "Technology",
  classification: "Web Development Tools",
  distribution: "global",
  rating: "general",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
  other: {
    "geo.region": "global",
    "geo.placename": "Global",
    "geo.position": "0;0",
    "ICBM": "0, 0",
    "application-name": "My Device Size",
    "viewport": "width=device-width, initial-scale=1",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <ContextProvider>
      <html lang="en" className={`${montserrat.variable}`}>
        <head>
          {/* Favicon for all platforms */}
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.ico" type="image/svg+xml" />
          <link rel="apple-touch-icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          {/* Windows */}
          <meta name="msapplication-TileImage" content="/favicon.ico" />

          {/* Apple */}
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="apple-mobile-web-app-title" content="My Device Size" />

          {/* PWA */}
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="My Device Size" />

          {/* External scripts (keep your existing ones) */}
          <script
            type="module"
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
          />

          {/* Structured Data for Home Page */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "My Device Size",
                "url": "https://my-screen-device-size.vercel.app",
                "description": "Free tools for checking device viewport sizes, IP addresses, and CSS unit conversions",
                "applicationCategory": "DeveloperApplication",
                "operatingSystem": "Any",
                "author": {
                  "@type": "Organization",
                  "name": "м17",
                  "url": "https://my-screen-device-size.vercel.app"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                "featureList": [
                  "Device Viewport Database",
                  "IP Address Checker",
                  "CSS Unit Converter",
                  "Responsive Design Tools"
                ]
              })
            }}
          />

          {/* Breadcrumb Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://my-screen-device-size.vercel.app"
                  }
                ]
              })
            }}
          />

          <script>window.yaContextCb=window.yaContextCb||[]</script>
          <script src="https://yandex.ru/ads/system/context.js" async></script>

          {/* <!-- Yandex Autoplacement 18327964 --> */}
          <script data-page-id="18327964" src="https://yandex.ru/ads/system/ap-loader.js" async></script>
        </head>
        <body id='__next'>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ContextProvider>
  );
}
