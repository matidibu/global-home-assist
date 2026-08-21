import { Metadata } from "next";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schemaMarkup";
import { SeguridadViajeTool } from "@/components/SeguridadViajeTool";
import { ToolPageChrome } from "@/components/ToolPageChrome";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";

const HERO_TITLE: Record<string, string> = {
  es: "Chequeo de seguridad, salud y embajada",
  en: "Safety, health, and embassy check",
  fr: "Vérification sécurité, santé et ambassade",
  it: "Controllo sicurezza, salute e ambasciata",
  de: "Sicherheits-, Gesundheits- und Botschaftscheck",
  pt: "Checagem de segurança, saúde e embaixada",
};

const HERO_SUBTITLE: Record<string, string> = {
  es: "Elegí tu destino y consultá alertas de seguridad, clima, hospitales, consulado y números de emergencia — gratis, sin registro.",
  en: "Pick your destination and check safety alerts, weather, hospitals, consulate, and emergency numbers — free, no sign-up.",
  fr: "Choisissez votre destination et consultez les alertes de sécurité, la météo, les hôpitaux, le consulat et les numéros d'urgence — gratuit, sans inscription.",
  it: "Scegli la tua destinazione e consulta avvisi di sicurezza, meteo, ospedali, consolato e numeri di emergenza — gratis, senza registrazione.",
  de: "Wähle dein Reiseziel und sieh dir Sicherheitshinweise, Wetter, Krankenhäuser, Konsulat und Notrufnummern an — kostenlos, ohne Anmeldung.",
  pt: "Escolha seu destino e consulte alertas de segurança, clima, hospitais, consulado e números de emergência — grátis, sem cadastro.",
};

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

      <ToolPageChrome emoji="🛡️" title={HERO_TITLE} subtitle={HERO_SUBTITLE} />

      <SeguridadViajeTool />

      <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 60px" }}>
        <AdSenseUnit slot={ADSENSE_SLOTS.toolsSeguridad} format="auto" />
      </div>
    </main>
  );
}
