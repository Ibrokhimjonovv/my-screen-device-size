import React from 'react'
import Link from 'next/link';
import "./footer.scss"

const Footer = () => {
    return (
        <footer>
            <Link href="/">Home</Link>
            <Link href="/units-of-measurement" >Units Of Measurement</Link>
            <Link href="/all-devices-size">All Devices Size</Link>
            <Link href="/ip-address-checker">What's my ip addess</Link>
            <Link href="/hide-my-ip-address">Hide my ip address</Link>
        </footer>
    )
}

export default Footer