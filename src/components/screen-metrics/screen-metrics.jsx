'use client'
import { useState, useEffect, useRef } from "react";
import "./screen-metrics.scss";
import YanHomeAd1 from "../yan-ads/home-ad/yan-home.jsx"

function ScreenMetrics() {
    const [metrics, setMetrics] = useState({});
    const headingRef = useRef(null);
    const elementsRef = useRef([]);

    useEffect(() => {
        const getMetrics = () => {
            const width = window.screen.width;
            const height = window.screen.height;
            const devicePixelRatio = window.devicePixelRatio || 1;
            const rootFontSize = parseFloat(
                getComputedStyle(document.documentElement).fontSize
            );
            const orientation =
                window.innerWidth > window.innerHeight ? "landscape" : "portrait";
            const aspectRatio = (width / height).toFixed(2);

            const dpi = 96 * devicePixelRatio;
            const dppx = devicePixelRatio;
            const dpcm = dpi / 2.54;

            setMetrics({
                width,
                height,
                devicePixelRatio: devicePixelRatio.toFixed(2),
                rootFontSize,
                orientation,
                aspectRatio,
                dpi: dpi.toFixed(2),
                dppx: dppx.toFixed(2),
                dpcm: dpcm.toFixed(2),
            });
        };

        getMetrics();
        window.addEventListener("resize", getMetrics);

        return () => window.removeEventListener("resize", getMetrics);
    }, []);

    // scroll orqali ko‘rinish tekshirish
    useEffect(() => {
        const checkVisible = (el) => {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        };

        const onScroll = () => {
            if (headingRef.current && checkVisible(headingRef.current)) {
                headingRef.current.classList.add("vis");
            }
            elementsRef.current.forEach((el) => {
                if (el && checkVisible(el)) {
                    el.classList.add("vis");
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // sahifa ochilganda tekshirish

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div id="screen-metrics">
            <div className="home-screen-ad">
                <YanHomeAd1 />
            </div>
            <h2 ref={headingRef}>Screen metrics</h2>
            <div className="containers">
                <div className="cont" ref={(el) => (elementsRef.current[0] = el)}>
                    <h3>SIZE</h3>
                    <ul>
                        <li>JS screen.width: <span>{metrics.width}px</span></li>
                        <li>JS screen.height: <span>{metrics.height}px</span></li>
                        <li>@media (device-width): <span>{metrics.width}px+</span></li>
                        <li>@media (device-height): <span>{metrics.height}px+</span></li>
                    </ul>
                </div>

                <div className="cont" ref={(el) => (elementsRef.current[1] = el)}>
                    <h3>PIXEL RATIO</h3>
                    <ul>
                        <li>CSS pixel-ratio: <span>{metrics.devicePixelRatio}</span></li>
                        <li>JS pixel-ratio: <span>{metrics.devicePixelRatio}</span></li>
                    </ul>
                </div>

                <div className="cont" ref={(el) => (elementsRef.current[2] = el)}>
                    <h3>DENSITY</h3>
                    <ul>
                        <li>Resolution (dpi): <span>{metrics.dpi}dpi</span></li>
                        <li>Resolution (dppx): <span>{metrics.dppx}dppx</span></li>
                        <li>Resolution (dpcm): <span>{metrics.dpcm}dpcm</span></li>
                    </ul>
                </div>

                <div className="cont" ref={(el) => (elementsRef.current[3] = el)}>
                    <h3>MISC</h3>
                    <ul>
                        <li>Root font size: <span>{metrics.rootFontSize}px</span></li>
                        <li>Orientation: <span>{metrics.orientation}</span></li>
                        <li>Device Aspect-Ratio: <span>{metrics.aspectRatio}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ScreenMetrics;
