import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DESTINATIONS } from "@/data/destinationPages";
import { ItinerarioHubIntro } from "@/components/ItinerarioHubIntro";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Itinerarios de viaje por destino | Global Home Assist",
  description: "Itinerarios completos y gratuitos para más de 25 destinos en el mundo — qué ver, dónde comer y cómo moverte, con consejos reales de cada ciudad.",
  openGraph: {
    type: "website",
    title: "Itinerarios de viaje por destino — Global Home Assist",
    description: "Itinerarios completos y gratuitos para más de 25 destinos en el mundo, con consejos reales de cada ciudad.",
    url: `${BASE_URL}/itinerario`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Itinerarios de viaje — Global Home Assist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Itinerarios de viaje por destino — Global Home Assist",
    description: "Itinerarios completos y gratuitos para más de 25 destinos en el mundo.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/itinerario`,
  },
};

const BALI = {
  slug: "bali",
  city: "Bali",
  country: "Indonesia",
  emoji: "🌴",
  heroSubtitle: "Templos, arrozales, playas y Ubud — el itinerario completo para la isla de los dioses.",
};

export default function ItinerarioIndexPage() {
  const destinations = [BALI, ...DESTINATIONS].sort((a, b) => a.city.localeCompare(b.city, "es"));

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6c 40%, #1e3a5f 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Nav */}
      <nav style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <Link href="/" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <ArrowLeft size={16} strokeWidth={2.5} /> Global Home Assist
        </Link>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 80px" }}>

        <ItinerarioHubIntro count={destinations.length} />

        {/* Grid de destinos */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "16px",
        }}>
          {destinations.map((dest) => (
            <Link key={dest.slug} href={`/itinerario/${dest.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "16px",
                padding: "20px",
                height: "100%",
                transition: "border-color 0.15s, background 0.15s",
              }}>
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>{dest.emoji}</div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "white",
                  margin: "0 0 4px 0",
                }}>
                  {dest.city}
                </h2>
                <p style={{
                  fontSize: "12px",
                  color: "#2ab5a0",
                  fontWeight: 600,
                  margin: "0 0 10px 0",
                }}>
                  {dest.country}
                </p>
                <p style={{
                  fontSize: "12.5px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.55,
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                } as React.CSSProperties}>
                  {dest.heroSubtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
