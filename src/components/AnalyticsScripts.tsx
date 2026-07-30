"use client";

import Script from "next/script";
import { useHasAdConsent } from "@/lib/consent";

const META_PIXEL_ID = "939419192381738";

// Loads Google Analytics, Meta Pixel, AdSense and the Travelpayouts tag only
// after the visitor has accepted non-essential cookies (EU User Consent Policy).
export function AnalyticsScripts() {
  const consented = useHasAdConsent();

  if (!consented) return null;

  return (
    <>
      {/* Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6133557054306983"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      {/* Travelpayouts */}
      <Script
        id="travelpayouts-tag"
        strategy="afterInteractive"
        data-noptimize="1"
        data-cfasync="false"
        data-wpfc-render="false"
        dangerouslySetInnerHTML={{
          __html: `(function(){var script=document.createElement("script");script.async=1;script.src='https://emrld.ltd/NTEwNjM3.js?t=510637';document.head.appendChild(script);})();`,
        }}
      />

      {/* Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-WEN7PWJEWK" strategy="afterInteractive" />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-WEN7PWJEWK');`,
        }}
      />

      {/* Meta Pixel */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`,
        }}
      />
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
