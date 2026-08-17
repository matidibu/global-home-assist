import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schemaMarkup";
import { CalculadoraCostosTool } from "@/components/CalculadoraCostosTool";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Calculadora de presupuesto de viaje | Global Home Assist",
  description: "Calculá cuánto cuesta viajar a cualquier destino: alojamiento, comida, transporte y actividades, según tu estilo de viaje y cantidad de días. Gratis.",
  openGraph: {
    type: "website",
    title: "Calculadora de presupuesto de viaje — Global Home Assist",
    description: "Estimá el costo real de tu viaje por categoría, gratis y sin registro.",
    url: `${BASE_URL}/herramientas/calculadora-costos`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Calculadora de presupuesto de viaje — Global Home Assist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calculadora de presupuesto de viaje — Global Home Assist",
    description: "Estimá el costo real de tu viaje por categoría, gratis y sin registro.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/herramientas/calculadora-costos`,
  },
};

const FAQS = [
  {
    question: "¿Cómo se calcula el presupuesto?",
    answer: "Se estima con inteligencia artificial en base al destino, la cantidad de días, viajeros y el estilo de viaje elegido (mochilero, medio o confort), devolviendo rangos realistas por categoría en vez de un número exacto.",
  },
  {
    question: "¿Los precios están en qué moneda?",
    answer: "Todos los montos se muestran en dólares estadounidenses (USD) para que sea comparable sin importar el destino.",
  },
  {
    question: "¿Incluye el vuelo internacional?",
    answer: "No — la calculadora estima gastos dentro del destino (alojamiento, comida, transporte local y actividades). Para vuelos y hoteles con precios reales, podés usar el buscador de la página principal.",
  },
];

export default function CalculadoraCostosPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Inicio", url: BASE_URL },
    { name: "Herramientas", url: `${BASE_URL}/herramientas` },
    { name: "Calculadora de costos", url: `${BASE_URL}/herramientas/calculadora-costos` },
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
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>💰</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.7rem, 4.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 14px 0",
            lineHeight: 1.15,
          }}>
            Calculadora de presupuesto de viaje
          </h1>
          <p style={{
            fontSize: "14.5px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto",
          }}>
            Elegí destino, días y estilo de viaje — te mostramos un rango real de cuánto vas a gastar, gratis.
          </p>
        </div>
      </div>

      <CalculadoraCostosTool />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <AdSenseUnit slot={ADSENSE_SLOTS.toolsCalculadora} format="auto" />
      </div>
    </main>
  );
}
