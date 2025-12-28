// app/ip-address-checker/ip/[ip]/IpDetailPage.jsx
'use client'

import { useEffect, useState } from 'react'
import IpDetail from "./ip-detail"

export default function IpDetailPage({ params }) {
  const [ip, setIp] = useState('')
  
  useEffect(() => {
    if (params?.ip) {
      setIp(params.ip)
    }
  }, [params])
  
  if (!ip) {
    return (
      <div style={{ 
        minHeight: '400px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <div>Loading IP address...</div>
      </div>
    )
  }
  
  return <IpDetail ip={ip} />
}