import { Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schemaMarkup";
import { CalculadoraCostosTool } from "@/components/CalculadoraCostosTool";
import { ToolPageChrome } from "@/components/ToolPageChrome";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";

const HERO_TITLE: Record<string, string> = {
  es: "Calculadora de presupuesto de viaje",
  en: "Travel budget calculator",
  fr: "Calculateur de budget de voyage",
  it: "Calcolatore del budget di viaggio",
  de: "Reisebudget-Rechner",
  pt: "Calculadora de orçamento de viagem",
};

const HERO_SUBTITLE: Record<string, string> = {
  es: "Elegí destino, días y estilo de viaje — te mostramos un rango real de cuánto vas a gastar, gratis.",
  en: "Pick a destination, days, and travel style — we'll show you a real range of how much you'll spend, free.",
  fr: "Choisissez une destination, le nombre de jours et le style de voyage — nous vous montrons une fourchette réelle de vos dépenses, gratuitement.",
  it: "Scegli destinazione, giorni e stile di viaggio — ti mostriamo una fascia reale di quanto spenderai, gratis.",
  de: "Wähle Reiseziel, Tage und Reisestil — wir zeigen dir eine realistische Spanne deiner Ausgaben, kostenlos.",
  pt: "Escolha destino, dias e estilo de viagem — mostramos uma faixa real de quanto você vai gastar, grátis.",
};

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

      <ToolPageChrome emoji="💰" title={HERO_TITLE} subtitle={HERO_SUBTITLE} />

      <CalculadoraCostosTool />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <AdSenseUnit slot={ADSENSE_SLOTS.toolsCalculadora} format="auto" />
      </div>
    </main>
  );
}
