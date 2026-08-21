import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/schemaMarkup";
import { HerramientasHubClient } from "@/components/HerramientasHubClient";

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
  { slug: "seguridad-viaje", emoji: "🛡️" },
  { slug: "calculadora-costos", emoji: "💰" },
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
        <HerramientasHubClient tools={TOOLS} />
      </div>
    </main>
  );
}
