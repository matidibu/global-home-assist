import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Plane } from "lucide-react";
import { DESTINATIONS } from "@/data/destinationPages";

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

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 16px 0",
            lineHeight: 1.15,
          }}>
            Itinerarios de viaje por destino
          </h1>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "640px",
            margin: "0 auto",
          }}>
            {destinations.length} destinos con itinerario completo — qué ver, dónde comer y cómo moverte.
            Elegí un destino o generá el tuyo personalizado, gratis, en 30 segundos.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
            color: "white",
            padding: "14px 32px",
            borderRadius: "14px",
            fontSize: "14px",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 8px 24px rgba(42,181,160,0.3)",
          }}>
            <Plane size={16} strokeWidth={2.5} /> Generar mi itinerario personalizado
          </Link>
        </div>

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
