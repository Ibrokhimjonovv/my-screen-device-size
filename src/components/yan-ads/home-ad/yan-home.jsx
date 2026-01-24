'use client'
import React, { useEffect } from "react";

const YanHomeAd1 = () => {
  useEffect(() => {
    const renderAd = () => {
      window.yaContextCb = window.yaContextCb || [];
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-18327964-1",
          renderTo: "yandex_rtb_R-A-18327964-1",
        });
      });
    };

    // Script oldin yuklangan bo‘lsa
    if (document.getElementById("yandex-context-script")) {
      renderAd();
      return;
    }

    // Scriptni yuklash
    const script = document.createElement("script");
    script.id = "yandex-context-script";
    script.src = "https://yandex.ru/ads/system/context.js";
    script.async = true;
    script.onload = renderAd;
    document.body.appendChild(script);

    return () => {
      const adContainer = document.getElementById(
        "yandex_rtb_R-A-18327964-1"
      );
      if (adContainer) adContainer.innerHTML = "";
    };
  }, []);

  return <div id="yandex_rtb_R-A-18327964-1" />;
};

export default YanHomeAd1;
