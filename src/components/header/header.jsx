'use client'
import React, { useState } from 'react';
import "./header.scss"
import Link from 'next/link';
import { motion } from "framer-motion";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    // Logo animatsiya variantlari
    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { y: -50, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
    };

    // Logo text qismlarga bo‘linadi
    const firstWord = "My";
    const secondPart = "Device size";

    return (
        <div id='header'>
            <div className="logo">
                <Link href="/">
                    <motion.div
                        className="logo-text"
                        variants={container}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* My */}
                        {firstWord.split("").map((char, index) => (
                            <motion.span key={index} variants={item}>
                                {char}
                            </motion.span>
                        ))}

                        {/* Favicon rasmi */}
                        <motion.img
                            src='/favicon.png'
                            alt="favicon"
                            variants={item}
                            style={{ margin: "0 5px" }}
                        />

                        {/* Device size */}
                        {secondPart.split("").map((char, index) => (
                            <motion.span key={index} variants={item}>
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.div>
                </Link>
            </div>

            <button
                type='button'
                className={show ? "active" : ""}
                onClick={handleShow}
            >
                <ion-icon name="grid-outline"></ion-icon>
            </button>

            <div className={`my-menu ${show ? "active" : ""}`}>
                <nav>
                    <Link href="/" onClick={handleShow}>Home</Link>
                    <Link href="/units-of-measurement" onClick={handleShow}>Units Of Measurement</Link>
                    <Link href="/all-devices-size" onClick={handleShow}>All Devices Size</Link>
                    <Link href="/ip-address-checker" onClick={handleShow}>What's my ip addess</Link>
                    <Link href="/hide-my-ip-address" onClick={handleShow}>Hide my ip address</Link>
                </nav>
            </div>
        </div>
    )
}

export default Header;
