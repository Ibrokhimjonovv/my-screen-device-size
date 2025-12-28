'use client'
import React, { useEffect, useRef } from 'react';
import "./agent.scss";

const UserAgentViewport = () => {
    const heading1Ref = useRef(null);
    const heading2Ref = useRef(null);
    const text1Ref = useRef(null);
    const text2Ref = useRef(null);

    useEffect(() => {
        const checkVisible = (el) => {
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top < window.innerHeight && rect.bottom > 0;
        };

        const onScroll = () => {
            [heading1Ref].forEach(ref => {
                if (ref.current && checkVisible(ref.current)) {
                    ref.current.classList.add("h2-1");
                }
            });
            [text1Ref].forEach(ref => {
                if (ref.current && checkVisible(ref.current)) {
                    ref.current.classList.add("txt-1");
                }
            });
            [heading2Ref].forEach(ref => {
                if (ref.current && checkVisible(ref.current)) {
                    ref.current.classList.add("h2-2");
                }
            });
            [text2Ref].forEach(ref => {
                if (ref.current && checkVisible(ref.current)) {
                    ref.current.classList.add("txt-2");
                }
            });
        };

        window.addEventListener("scroll", onScroll);
        onScroll(); // sahifa ochilganda tekshirish

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div id='user-agent'>
            <h2 ref={heading1Ref}>User agent</h2>
            <div className="text" ref={text1Ref}>
                Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36
            </div>
            <h2 ref={heading2Ref}>Viewport</h2>
            <div className="text" ref={text2Ref}>
                &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
            </div>
        </div>
    );
};

export default UserAgentViewport;
