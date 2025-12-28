"use client"
import React, { useState, useEffect } from 'react';
import "./calculator-section.scss";

const CalculatorSection = () => {
    const [width, setWidth] = useState(0); // ❗ window yo‘q

    useEffect(() => {
        setWidth(window.innerWidth); // ✅ faqat clientda

        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const px = width;
    const em = Math.round(width / 16);
    const rem = Math.round(width / 16);
    const cm = Math.round(width / 37.8);

    const [countPx, setCountPx] = useState(0);
    const [countEm, setCountEm] = useState(0);
    const [countRem, setCountRem] = useState(0);
    const [countCm, setCountCm] = useState(0);

    useEffect(() => {
        if (!width) return; // ❗ width kelmaguncha animatsiya yo‘q

        const duration = 1000;
        const startTime = performance.now();

        const animate = (time) => {
            const progress = Math.min((time - startTime) / duration, 1);

            setCountPx(Math.floor(progress * px));
            setCountEm(Math.floor(progress * em));
            setCountRem(Math.floor(progress * rem));
            setCountCm(Math.floor(progress * cm));

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [width]);

    return (
        <div id='calculator'>
            <div className="mini-texts">
                <img src="https://www.mydevice.io/assets/img/rule.svg" alt="" />
            </div>

            <div className="middle-set">
                <i className="bi bi-chevron-left"></i>

                <div className="middle-middle-set">
                    <p>my viewport width is:</p>
                    <h1>{countPx}px</h1>

                    <div className="oth">
                        <h2>{countEm}em</h2>
                        <h2>{countRem}rem</h2>
                        <h2>{countCm}cm</h2>
                    </div>

                    <a href="/#compare-devices">Compare devices</a>
                </div>

                <i className="bi bi-chevron-right"></i>
            </div>
        </div>
    );
};

export default CalculatorSection;
