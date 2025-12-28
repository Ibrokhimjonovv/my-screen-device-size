// app/ip-address-checker/ip/[ip]/page.jsx
import dynamic from 'next/dynamic'

// Faqat brauzerda yuklanadigan komponent
const IpDetailPage = dynamic(
  () => import('./IpDetailPage'),
  { 
    ssr: false,
    loading: () => <div style={{padding: '20px', textAlign: 'center'}}>Loading IP details...</div>
  }
)

export async function generateMetadata({ params }) {
  const { ip } = await params
  
  return {
    title: `IP Details for ${ip} | My Device Size`,
    description: `View detailed information about IP address ${ip}: ISP, country, region, city, timezone, and coordinates.`,
    alternates: {
      canonical: `https://my-device-size.vercel.app/ip-address-checker/ip/${ip}`,
    },
    openGraph: {
      title: `IP Details for ${ip}`,
      description: `Find all information for ${ip}: ISP, organization, timezone, region, and coordinates.`,
      url: `https://my-device-size.vercel.app/ip-address-checker/ip/${ip}`,
      siteName: "My Device Size IP Tools",
      images: [
        {
          url: "https://my-device-size.vercel.app/preview-devices.png",
          width: 768,
          height: 292,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `IP Details for ${ip}`,
      description: `Discover ISP, region, timezone, and location details for ${ip} instantly.`,
      images: [
        "https://my-device-size.vercel.app/preview-devices.png",
      ],
    },
  }
}

export default function Page({ params }) {
  return <IpDetailPage params={params} />
}