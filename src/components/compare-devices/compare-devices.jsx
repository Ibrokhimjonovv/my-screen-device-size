'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import "./compare-devices.scss";

const CompareDevices = () => {
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const checkVisible = (el) => {
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const onScroll = () => {
      [headingRef, textRef, linkRef].forEach(ref => {
        if (ref.current && checkVisible(ref.current)) {
          ref.current.classList.add("vis");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id='compare-devices'>
      <h2 ref={headingRef}>Compare devices</h2>

      <p ref={textRef}>
        Mobile devices, in Responsive Web Design, relate to a core value which is
        the value of CSS width or ("device-width"), in CSS Device Independant Pixels,
        which depends both of the browser and user zoom settings.
      </p>

      <Link href="/all-devices-size" ref={linkRef}>
        Find any device viewport size on Next Page {`>`}
      </Link>
    </div>
  );
};

export default CompareDevices;
