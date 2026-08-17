import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schemaMarkup";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Herramientas gratuitas de viaje | Global Home Assist",
  description: "Herramientas gratuitas para planificar tu viaje: chequeo de seguridad, salud y embajada por destino, y calculadora de presupuesto de viaje.",
  openGraph: {
    type: "website",
    title: "Herramientas gratuitas de viaje — Global Home Assist",
    description: "Chequeo de seguridad/salud/embajada y calculadora de presupuesto, gratis, para cualquier destino.",
    url: `${BASE_URL}/herramientas`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Herramientas de viaje — Global Home Assist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Herramientas gratuitas de viaje — Global Home Assist",
    description: "Chequeo de seguridad/salud/embajada y calculadora de presupuesto, gratis, para cualquier destino.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/herramientas`,
  },
};

const TOOLS = [
  {
    slug: "seguridad-viaje",
    emoji: "🛡️",
    title: "Chequeo de seguridad, salud y embajada",
    description: "Alertas de seguridad, clima, hospitales, consulado y números de emergencia para cualquier destino del mundo.",
  },
  {
    slug: "calculadora-costos",
    emoji: "💰",
    title: "Calculadora de presupuesto de viaje",
    description: "Estimación real de cuánto cuesta viajar a tu destino: alojamiento, comida, transporte y actividades.",
  },
];

export default function HerramientasIndexPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Herramientas", url: `${BASE_URL}/herramientas` },
  ]);

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6c 40%, #1e3a5f 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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

        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 16px 0",
            lineHeight: 1.15,
          }}>
            Herramientas gratuitas de viaje
          </h1>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}>
            Sin registro, sin costo. Elegí un destino y obtené la info que necesitás en segundos.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}>
          {TOOLS.map((tool) => (
            <Link key={tool.slug} href={`/herramientas/${tool.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "18px",
                padding: "28px",
                height: "100%",
              }}>
                <div style={{ fontSize: "36px", marginBottom: "14px" }}>{tool.emoji}</div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "white",
                  margin: "0 0 8px 0",
                }}>
                  {tool.title}
                </h2>
                <p style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {tool.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
