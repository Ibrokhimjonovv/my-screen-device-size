import { useEffect } from "react";

export default function GoogleAdIp4() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-1980545331504061"
      data-ad-slot="5746266834"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
