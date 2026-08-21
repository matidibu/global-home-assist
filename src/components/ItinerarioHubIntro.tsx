"use client";

import Link from "next/link";
import { Plane } from "lucide-react";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

type Copy = {
  heroTitle: string;
  heroSubtitle: (count: number) => string;
  cta: string;
};

// Only the page chrome (title/subtitle/CTA) is translated here -- the
// per-destination city/country/heroSubtitle in the grid below come from
// destinationPages.ts, a much bigger Spanish-only content file (same
// unsolved scope as blogPosts.ts), not touched by this fix.
const T: Record<string, Copy> = {
  es: {
    heroTitle: "Itinerarios de viaje por destino",
    heroSubtitle: count => `${count} destinos con itinerario completo — qué ver, dónde comer y cómo moverte. Elegí un destino o generá el tuyo personalizado, gratis, en 30 segundos.`,
    cta: "Generar mi itinerario personalizado",
  },
  en: {
    heroTitle: "Travel itineraries by destination",
    heroSubtitle: count => `${count} destinations with a complete itinerary — what to see, where to eat, and how to get around. Pick a destination or generate your own personalized itinerary, free, in 30 seconds.`,
    cta: "Generate my personalized itinerary",
  },
  fr: {
    heroTitle: "Itinéraires de voyage par destination",
    heroSubtitle: count => `${count} destinations avec un itinéraire complet — quoi voir, où manger et comment se déplacer. Choisissez une destination ou générez le vôtre, gratuit, en 30 secondes.`,
    cta: "Générer mon itinéraire personnalisé",
  },
  it: {
    heroTitle: "Itinerari di viaggio per destinazione",
    heroSubtitle: count => `${count} destinazioni con itinerario completo — cosa vedere, dove mangiare e come spostarsi. Scegli una destinazione o genera il tuo itinerario personalizzato, gratis, in 30 secondi.`,
    cta: "Genera il mio itinerario personalizzato",
  },
  de: {
    heroTitle: "Reiserouten nach Reiseziel",
    heroSubtitle: count => `${count} Reiseziele mit komplettem Reiseplan — was man sehen sollte, wo man isst und wie man sich fortbewegt. Wähle ein Reiseziel oder erstelle deinen eigenen personalisierten Reiseplan, kostenlos, in 30 Sekunden.`,
    cta: "Meinen personalisierten Reiseplan erstellen",
  },
  pt: {
    heroTitle: "Roteiros de viagem por destino",
    heroSubtitle: count => `${count} destinos com roteiro completo — o que ver, onde comer e como se locomover. Escolha um destino ou gere o seu personalizado, grátis, em 30 segundos.`,
    cta: "Gerar meu roteiro personalizado",
  },
};

export function ItinerarioHubIntro({ count }: { count: number }) {
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 16px 0",
          lineHeight: 1.15,
        }}>
          {t.heroTitle}
        </h1>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.7,
          maxWidth: "640px",
          margin: "0 auto",
        }}>
          {t.heroSubtitle(count)}
        </p>
      </div>

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
          <Plane size={16} strokeWidth={2.5} /> {t.cta}
        </Link>
      </div>
    </>
  );
}
