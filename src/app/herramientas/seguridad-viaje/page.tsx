import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schemaMarkup";
import { SeguridadViajeTool } from "@/components/SeguridadViajeTool";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Chequeo de seguridad, salud y embajada por destino | Global Home Assist",
  description: "Consultá alertas de seguridad, clima, hospitales, consulado/embajada y números de emergencia de cualquier ciudad del mundo, gratis y en segundos.",
  openGraph: {
    type: "website",
    title: "Chequeo de seguridad, salud y embajada por destino — Global Home Assist",
    description: "Alertas de seguridad, hospitales, consulado y números de emergencia para cualquier destino, gratis.",
    url: `${BASE_URL}/herramientas/seguridad-viaje`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Chequeo de seguridad de viaje — Global Home Assist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chequeo de seguridad, salud y embajada por destino — Global Home Assist",
    description: "Alertas de seguridad, hospitales, consulado y números de emergencia para cualquier destino, gratis.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/herramientas/seguridad-viaje`,
  },
};

const FAQS = [
  {
    question: "¿La herramienta es gratis?",
    answer: "Sí, es 100% gratuita y no requiere registro. Elegís un destino y obtenés la información al instante.",
  },
  {
    question: "¿De dónde sale la información de seguridad y salud?",
    answer: "Se genera con inteligencia artificial a partir de datos públicos y se complementa con clima en tiempo real. Es una guía de referencia rápida, no reemplaza fuentes oficiales como el consulado o cancillería de tu país.",
  },
  {
    question: "¿Funciona para cualquier ciudad del mundo?",
    answer: "Sí, funciona para prácticamente cualquier ciudad — buscá el destino y seleccionalo del listado de sugerencias.",
  },
];

export default function SeguridadViajePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Herramientas", url: `${BASE_URL}/herramientas` },
    { name: "Seguridad de viaje", url: `${BASE_URL}/herramientas/seguridad-viaje` },
  ]);
  const faqSchema = generateFAQSchema(FAQS);

  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6c 40%, #1e3a5f 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <Link href="/herramientas" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <ArrowLeft size={16} strokeWidth={2.5} /> Herramientas
        </Link>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>🛡️</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.7rem, 4.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 14px 0",
            lineHeight: 1.15,
          }}>
            Chequeo de seguridad, salud y embajada
          </h1>
          <p style={{
            fontSize: "14.5px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto",
          }}>
            Elegí tu destino y consultá alertas de seguridad, clima, hospitales, consulado y números de emergencia — gratis, sin registro.
          </p>
        </div>
      </div>

      <SeguridadViajeTool />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <AdSenseUnit slot={ADSENSE_SLOTS.toolsSeguridad} format="auto" />
      </div>
    </main>
  );
}
