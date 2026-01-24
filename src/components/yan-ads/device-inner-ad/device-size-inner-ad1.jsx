'use client'
import React, { useEffect } from "react";

const DeviceInnerAd1 = () => {
  useEffect(() => {
    const renderAd = () => {
      window.yaContextCb = window.yaContextCb || [];
      window.yaContextCb.push(() => {
        Ya.Context.AdvManager.render({
          blockId: "R-A-18327964-2",
          renderTo: "yandex_rtb_R-A-18327964-2",
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
        "yandex_rtb_R-A-18327964-2"
      );
      if (adContainer) adContainer.innerHTML = "";
    };
  }, []);

  return <div id="yandex_rtb_R-A-18327964-2" />;
};

export default DeviceInnerAd1;
