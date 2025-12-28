import { useEffect } from "react";

const GoogleAdInArticle = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-1980545331504061"
      data-ad-slot="9419199792"
    ></ins>
  );
};

export default GoogleAdInArticle;
