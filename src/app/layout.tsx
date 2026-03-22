import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Global Home Assist",
  description: "AI Powered Travel Planner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@geoapify/geocoder-autocomplete@2/styles/minimal.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap"
        />
        {/* Travelpayouts site verification */}
        <script data-noptimize="1" data-cfasync="false" data-wpfc-render="false" dangerouslySetInnerHTML={{ __html: `(function(){var script=document.createElement("script");script.async=1;script.src='https://emrld.ltd/NTEwNjM3.js?t=510637';document.head.appendChild(script);})();` }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}