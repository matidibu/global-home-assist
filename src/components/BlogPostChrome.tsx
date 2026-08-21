"use client";

import Link from "next/link";
import { MapPin, Sparkles, Plane, ChevronRight, ArrowLeft } from "lucide-react";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

type Copy = {
  backToBlog: string;
  readTime: (min: number) => string;
  dateLocale: string;
  destGuideTitle: (city: string) => string;
  destGuideSub: (days: number) => string;
  destGuideCta: string;
  hotelTitle: string;
  hotelSub: string;
  hotelCta: string;
  toursTitle: string;
  toursSub: string;
  toursCta: string;
  keepReading: string;
  ctaAiPlanner: string;
  ctaFreeNote: string;
};

const T: Record<string, Copy> = {
  es: {
    backToBlog: "Blog",
    readTime: min => `${min} min de lectura`,
    dateLocale: "es-ES",
    destGuideTitle: city => `Itinerario día por día de ${city}`,
    destGuideSub: days => `${days} días, horarios y precios verificados`,
    destGuideCta: "Ver guía completa",
    hotelTitle: "🏨 ¿Ya reservaste tu hotel?",
    hotelSub: "Comparé precios en miles de hoteles y encontrá la mejor oferta.",
    hotelCta: "Buscar hoteles →",
    toursTitle: "🎯 Tours y experiencias",
    toursSub: "Entradas sin fila, tours guiados y experiencias únicas en tu destino.",
    toursCta: "Ver tours →",
    keepReading: "Seguí leyendo",
    ctaAiPlanner: "Planificador de viajes con inteligencia artificial",
    ctaFreeNote: "Gratis · Sin registro · Listo en 30 segundos",
  },
  en: {
    backToBlog: "Blog",
    readTime: min => `${min} min read`,
    dateLocale: "en-US",
    destGuideTitle: city => `Day-by-day itinerary for ${city}`,
    destGuideSub: days => `${days} days, verified hours and prices`,
    destGuideCta: "See full guide",
    hotelTitle: "🏨 Have you booked your hotel?",
    hotelSub: "Compare prices across thousands of hotels and find the best deal.",
    hotelCta: "Find hotels →",
    toursTitle: "🎯 Tours and experiences",
    toursSub: "Skip-the-line tickets, guided tours, and unique experiences at your destination.",
    toursCta: "See tours →",
    keepReading: "Keep reading",
    ctaAiPlanner: "AI-powered travel planner",
    ctaFreeNote: "Free · No sign-up · Ready in 30 seconds",
  },
  fr: {
    backToBlog: "Blog",
    readTime: min => `${min} min de lecture`,
    dateLocale: "fr-FR",
    destGuideTitle: city => `Itinéraire jour par jour de ${city}`,
    destGuideSub: days => `${days} jours, horaires et prix vérifiés`,
    destGuideCta: "Voir le guide complet",
    hotelTitle: "🏨 Avez-vous réservé votre hôtel ?",
    hotelSub: "Comparez des milliers d'hôtels et trouvez la meilleure offre.",
    hotelCta: "Trouver des hôtels →",
    toursTitle: "🎯 Visites et expériences",
    toursSub: "Billets coupe-file, visites guidées et expériences uniques à votre destination.",
    toursCta: "Voir les visites →",
    keepReading: "Continuer la lecture",
    ctaAiPlanner: "Planificateur de voyage par IA",
    ctaFreeNote: "Gratuit · Sans inscription · Prêt en 30 secondes",
  },
  it: {
    backToBlog: "Blog",
    readTime: min => `${min} min di lettura`,
    dateLocale: "it-IT",
    destGuideTitle: city => `Itinerario giorno per giorno di ${city}`,
    destGuideSub: days => `${days} giorni, orari e prezzi verificati`,
    destGuideCta: "Vedi la guida completa",
    hotelTitle: "🏨 Hai già prenotato il tuo hotel?",
    hotelSub: "Confronta migliaia di hotel e trova l'offerta migliore.",
    hotelCta: "Trova hotel →",
    toursTitle: "🎯 Tour ed esperienze",
    toursSub: "Biglietti salta-fila, tour guidati ed esperienze uniche nella tua destinazione.",
    toursCta: "Vedi i tour →",
    keepReading: "Continua a leggere",
    ctaAiPlanner: "Pianificatore di viaggi con IA",
    ctaFreeNote: "Gratis · Senza registrazione · Pronto in 30 secondi",
  },
  de: {
    backToBlog: "Blog",
    readTime: min => `${min} Min. Lesezeit`,
    dateLocale: "de-DE",
    destGuideTitle: city => `Tag-für-Tag-Reiseplan für ${city}`,
    destGuideSub: days => `${days} Tage, geprüfte Zeiten und Preise`,
    destGuideCta: "Vollständigen Guide ansehen",
    hotelTitle: "🏨 Hast du dein Hotel gebucht?",
    hotelSub: "Vergleiche tausende Hotels und finde das beste Angebot.",
    hotelCta: "Hotels finden →",
    toursTitle: "🎯 Touren und Erlebnisse",
    toursSub: "Tickets ohne Anstehen, geführte Touren und einzigartige Erlebnisse an deinem Reiseziel.",
    toursCta: "Touren ansehen →",
    keepReading: "Weiterlesen",
    ctaAiPlanner: "KI-gestützter Reiseplaner",
    ctaFreeNote: "Kostenlos · Keine Anmeldung · In 30 Sekunden fertig",
  },
  pt: {
    backToBlog: "Blog",
    readTime: min => `${min} min de leitura`,
    dateLocale: "pt-BR",
    destGuideTitle: city => `Roteiro dia a dia de ${city}`,
    destGuideSub: days => `${days} dias, horários e preços verificados`,
    destGuideCta: "Ver guia completo",
    hotelTitle: "🏨 Você já reservou seu hotel?",
    hotelSub: "Compare preços em milhares de hotéis e encontre a melhor oferta.",
    hotelCta: "Buscar hotéis →",
    toursTitle: "🎯 Passeios e experiências",
    toursSub: "Ingressos sem fila, passeios guiados e experiências únicas no seu destino.",
    toursCta: "Ver passeios →",
    keepReading: "Continue lendo",
    ctaAiPlanner: "Planejador de viagens com IA",
    ctaFreeNote: "Grátis · Sem cadastro · Pronto em 30 segundos",
  },
};

export function useBlogPostCopy() {
  const [language] = useAutoLanguage();
  return T[language] || T.es;
}

export function BlogPostNav() {
  const t = useBlogPostCopy();
  return (
    <nav style={{
      padding: "16px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      maxWidth: "820px",
      margin: "0 auto",
    }}>
      <Link href="/blog" style={{
        color: "white",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "15px",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}>
        <ArrowLeft size={16} strokeWidth={2.5} /> {t.backToBlog}
      </Link>
      <Link href="/" style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 600 }}>
        Global Home Assist
      </Link>
    </nav>
  );
}

export function BlogPostMeta({ readTime, publishDate }: { readTime: number; publishDate: string }) {
  const t = useBlogPostCopy();
  return (
    <>
      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
        {t.readTime(readTime)}
      </span>
      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>·</span>
      <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
        {new Date(publishDate).toLocaleDateString(t.dateLocale, { year: "numeric", month: "long", day: "numeric" })}
      </span>
    </>
  );
}

export function BlogPostCtaSection({ href, text }: { href: string; text: string }) {
  const t = useBlogPostCopy();
  return (
    <div style={{
      background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
      borderRadius: "20px",
      padding: "32px",
      textAlign: "center",
      margin: "40px 0",
      boxShadow: "0 12px 40px rgba(42,181,160,0.3)",
    }}>
      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", margin: "0 0 16px 0", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
        <Sparkles size={14} /> {t.ctaAiPlanner}
      </p>
      <Link
        href={href}
        style={{
          display: "inline-block",
          background: "white",
          color: "#1a2a6c",
          padding: "14px 40px",
          borderRadius: "14px",
          fontSize: "15px",
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
          lineHeight: 1.4,
        }}
      >
        <Plane size={15} strokeWidth={2.5} style={{ verticalAlign: "middle", marginRight: "8px" }} />
        <span style={{ verticalAlign: "middle" }}>{text}</span>
        <ChevronRight size={15} strokeWidth={2.5} style={{ verticalAlign: "middle", marginLeft: "8px" }} />
      </Link>
      <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "12px", margin: "12px 0 0 0" }}>
        {t.ctaFreeNote}
      </p>
    </div>
  );
}

export function RelatedDestinationBox({ slug, emoji, city, totalDays }: { slug: string; emoji: string; city: string; totalDays: number }) {
  const t = useBlogPostCopy();
  return (
    <Link
      href={`/itinerario/${slug}`}
      style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: "16px", flexWrap: "wrap",
        background: "rgba(42,181,160,0.08)",
        border: "1.5px solid rgba(42,181,160,0.25)",
        borderRadius: "16px", padding: "20px 24px", textDecoration: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span style={{ fontSize: "28px" }}>{emoji}</span>
        <div>
          <p style={{ margin: "0 0 3px", fontSize: "15px", fontWeight: 700, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.destGuideTitle(city)}
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.destGuideSub(totalDays)}
          </p>
        </div>
      </div>
      <span style={{
        background: "#2ab5a0", color: "white",
        padding: "10px 20px", borderRadius: "10px",
        fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: "6px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <MapPin size={14} /> {t.destGuideCta}
      </span>
    </Link>
  );
}

export function BlogPostAffiliateBanners({ tourQuery }: { tourQuery: string }) {
  const t = useBlogPostCopy();
  return (
    <>
      <a
        href="https://search.hotellook.com/?shmarker=712478&currency=USD"
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "16px", flexWrap: "wrap",
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.12)",
          borderRadius: "16px", padding: "20px 24px", textDecoration: "none",
        }}
      >
        <div>
          <p style={{ margin: "0 0 3px", fontSize: "15px", fontWeight: 700, color: "white", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.hotelTitle}
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.hotelSub}
          </p>
        </div>
        <span style={{
          background: "#003580", color: "white",
          padding: "10px 20px", borderRadius: "10px",
          fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {t.hotelCta}
        </span>
      </a>

      <a
        href={`https://www.getyourguide.com/s/?q=${encodeURIComponent(tourQuery)}&partner_id=NGZASHD`}
        target="_blank"
        rel="noopener noreferrer sponsored"
        style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "16px", flexWrap: "wrap",
          background: "rgba(255,102,0,0.07)",
          border: "1.5px solid rgba(255,102,0,0.2)",
          borderRadius: "16px", padding: "20px 24px", textDecoration: "none",
        }}
      >
        <div>
          <p style={{ margin: "0 0 3px", fontSize: "15px", fontWeight: 700, color: "#ff6600", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.toursTitle}
          </p>
          <p style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.toursSub}
          </p>
        </div>
        <span style={{
          background: "#ff6600", color: "white",
          padding: "10px 20px", borderRadius: "10px",
          fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          {t.toursCta}
        </span>
      </a>
    </>
  );
}

export function KeepReadingHeading() {
  const t = useBlogPostCopy();
  return (
    <h3 style={{
      fontFamily: "'Playfair Display', serif",
      color: "white",
      fontSize: "1.3rem",
      fontWeight: 700,
      marginBottom: "24px",
    }}>
      {t.keepReading}
    </h3>
  );
}
