"use client";

import Link from "next/link";
import Image from "next/image";
import { Plane, Sparkles, Clock, Coins, ArrowLeft, ChevronRight, Star } from "lucide-react";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";
import FlightSearch from "@/components/FlightSearch";
import InsuranceBanner from "@/components/InsuranceBanner";
import ServicesSection from "@/components/ServicesSection";
import DestinationInfo from "@/components/DestinationInfo";
import MedicalAssistance from "@/components/MedicalAssistance";
import SOSButton from "@/components/SOSButton";
import BaliMap from "@/app/itinerario/bali/BaliMap";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";
import { baliItinerary } from "@/data/baliItinerary";
import { localizeBaliDays } from "@/data/baliI18n";

const AFFILIATE_GYG = "NGZASHD";

function gygLink(place: string) {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(place + " Bali")}&partner_id=${AFFILIATE_GYG}`;
}

function TransportDivider({ transport }: { transport: { walk?: number; bike?: number; car?: number } | null }) {
  if (!transport) return null;

  const options = [
    { key: "walk" as const, icon: "🚶" },
    { key: "bike" as const, icon: "🚴" },
    { key: "car" as const, icon: "🚗" },
  ].filter((o) => transport[o.key] != null && (transport[o.key] as number) > 0);

  if (options.length === 0) return null;

  const fmt = (m: number) =>
    m < 60 ? `${m} min` : `${Math.floor(m / 60)}h${m % 60 > 0 ? ` ${m % 60}min` : ""}`;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 8px" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(42,181,160,0.3))" }} />
      <div className="transport-pill" style={{
        background: "rgba(255,255,255,0.95)",
        border: "1.5px solid rgba(42,181,160,0.4)",
        boxShadow: "0 2px 8px rgba(26,42,108,0.1)",
      }}>
        {options.map((o, i) => (
          <span key={o.key} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {i > 0 && <span style={{ color: "#d1d5db" }}>·</span>}
            <span style={{ fontSize: "15px" }}>{o.icon}</span>
            <span style={{ color: "#1a2a6c" }}>{fmt(transport[o.key] as number)}</span>
          </span>
        ))}
      </div>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(42,181,160,0.3))" }} />
    </div>
  );
}

const photoRotation = (i: number) => (i % 2 === 0 ? "rotate(2deg)" : "rotate(-1.5deg)");

type Copy = {
  aiBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  durationLabel: string; durationValue: string;
  budgetLabel: string; budgetValue: string;
  seasonLabel: string; seasonValue: string;
  pricesLabel: string; pricesValue: string;
  topCtaTitle: string; topCtaSub: string; generateMineBtn: string;
  dayWord: string; mustSeeBadge: string; seeToursGyg: string;
  mapHeading: string;
  relatedGuidePrefix: (title: string) => string; readGuideBtn: string;
  bottomCtaTitle: string; bottomCtaPre: string; bottomCtaStrong: string; bottomCtaPost: string;
  planFreeBtn: string; freeNote: string;
  exploreOtherLabel: string; tokyoLabel: string;
};

const T: Record<string, Copy> = {
  es: {
    aiBadge: "Generado con Inteligencia Artificial",
    heroTitle: "5 días en Bali, Indonesia",
    heroSubtitle: "La isla de los dioses, día por día",
    heroDescription: "Terrazas de arroz, templos hindúes entre la selva, playas de surf en Seminyak y Canggu, la danza kecak al atardecer en Uluwatu y la purificación sagrada en Tirta Empul. Este es un ejemplo real de itinerario generado por nuestra IA.",
    durationLabel: "Duración", durationValue: "5 días",
    budgetLabel: "Presupuesto", budgetValue: "$60–120 USD/día",
    seasonLabel: "Mejor época", seasonValue: "Mayo – Septiembre",
    pricesLabel: "Precios en", pricesValue: "USD (dólar)",
    topCtaTitle: "¿Querés tu propio itinerario personalizado?",
    topCtaSub: "Generá uno para cualquier destino · Gratis · Listo en 30 segundos",
    generateMineBtn: "Generar el mío",
    dayWord: "Día", mustSeeBadge: "Imperdible", seeToursGyg: "🎯 Ver tours en GetYourGuide",
    mapHeading: "🗺️ Mapa del viaje",
    relatedGuidePrefix: (title) => `🇪🇸 ¿Viajás desde España? ${title}`, readGuideBtn: "Leer guía →",
    bottomCtaTitle: "Generá tu itinerario personalizado",
    bottomCtaPre: "Este fue solo un ejemplo. Podés generar itinerarios para ",
    bottomCtaStrong: "cualquier destino del mundo",
    bottomCtaPost: ", con tu tipo de viaje, tus intereses y tu hospedaje como punto de partida.",
    planFreeBtn: "Planificar mi viaje gratis",
    freeNote: "Gratis · Sin registro · Resultado en 30 segundos",
    exploreOtherLabel: "Explorá otros destinos", tokyoLabel: "⛩️ Tokio",
  },
  en: {
    aiBadge: "Generated with Artificial Intelligence",
    heroTitle: "5 days in Bali, Indonesia",
    heroSubtitle: "The island of the gods, day by day",
    heroDescription: "Rice terraces, Hindu temples nestled in the jungle, surf beaches in Seminyak and Canggu, the kecak dance at sunset in Uluwatu, and the sacred purification at Tirta Empul. This is a real example of an itinerary generated by our AI.",
    durationLabel: "Duration", durationValue: "5 days",
    budgetLabel: "Budget", budgetValue: "$60–120 USD/day",
    seasonLabel: "Best season", seasonValue: "May – September",
    pricesLabel: "Prices in", pricesValue: "USD (dollar)",
    topCtaTitle: "Want your own personalized itinerary?",
    topCtaSub: "Generate one for any destination · Free · Ready in 30 seconds",
    generateMineBtn: "Generate mine",
    dayWord: "Day", mustSeeBadge: "Must-see", seeToursGyg: "🎯 See tours on GetYourGuide",
    mapHeading: "🗺️ Trip map",
    relatedGuidePrefix: (title) => `🇪🇸 Flying from Spain? ${title}`, readGuideBtn: "Read guide →",
    bottomCtaTitle: "Generate your personalized itinerary",
    bottomCtaPre: "This was just an example. You can generate itineraries for ",
    bottomCtaStrong: "any destination in the world",
    bottomCtaPost: ", using your trip type, interests, and accommodation as a starting point.",
    planFreeBtn: "Plan my trip for free",
    freeNote: "Free · No sign-up · Results in 30 seconds",
    exploreOtherLabel: "Explore other destinations", tokyoLabel: "⛩️ Tokyo",
  },
  fr: {
    aiBadge: "Généré avec de l'intelligence artificielle",
    heroTitle: "5 jours à Bali, Indonésie",
    heroSubtitle: "L'île des dieux, jour par jour",
    heroDescription: "Terrasses de riz, temples hindous nichés dans la jungle, plages de surf à Seminyak et Canggu, la danse kecak au coucher du soleil à Uluwatu et la purification sacrée à Tirta Empul. Voici un exemple réel d'itinéraire généré par notre IA.",
    durationLabel: "Durée", durationValue: "5 jours",
    budgetLabel: "Budget", budgetValue: "60-120 USD/jour",
    seasonLabel: "Meilleure période", seasonValue: "Mai – Septembre",
    pricesLabel: "Prix en", pricesValue: "USD (dollar)",
    topCtaTitle: "Vous voulez votre propre itinéraire personnalisé ?",
    topCtaSub: "Générez-en un pour n'importe quelle destination · Gratuit · Prêt en 30 secondes",
    generateMineBtn: "Générer le mien",
    dayWord: "Jour", mustSeeBadge: "Incontournable", seeToursGyg: "🎯 Voir les visites sur GetYourGuide",
    mapHeading: "🗺️ Carte du voyage",
    relatedGuidePrefix: (title) => `🇪🇸 Vous voyagez depuis l'Espagne ? ${title}`, readGuideBtn: "Lire le guide →",
    bottomCtaTitle: "Générez votre itinéraire personnalisé",
    bottomCtaPre: "Ceci n'était qu'un exemple. Vous pouvez générer des itinéraires pour ",
    bottomCtaStrong: "n'importe quelle destination au monde",
    bottomCtaPost: ", en utilisant votre type de voyage, vos centres d'intérêt et votre hébergement comme point de départ.",
    planFreeBtn: "Planifier mon voyage gratuitement",
    freeNote: "Gratuit · Sans inscription · Résultat en 30 secondes",
    exploreOtherLabel: "Explorez d'autres destinations", tokyoLabel: "⛩️ Tokyo",
  },
  de: {
    aiBadge: "Mit Künstlicher Intelligenz generiert",
    heroTitle: "5 Tage auf Bali, Indonesien",
    heroSubtitle: "Die Insel der Götter, Tag für Tag",
    heroDescription: "Reisterrassen, Hindu-Tempel mitten im Dschungel, Surfstrände in Seminyak und Canggu, der Kecak-Tanz bei Sonnenuntergang in Uluwatu und die heilige Reinigung in Tirta Empul. Dies ist ein echtes Beispiel für eine von unserer KI generierte Reiseroute.",
    durationLabel: "Dauer", durationValue: "5 Tage",
    budgetLabel: "Budget", budgetValue: "60–120 USD/Tag",
    seasonLabel: "Beste Reisezeit", seasonValue: "Mai – September",
    pricesLabel: "Preise in", pricesValue: "USD (Dollar)",
    topCtaTitle: "Möchten Sie Ihre eigene personalisierte Reiseroute?",
    topCtaSub: "Erstellen Sie eine für jedes Reiseziel · Kostenlos · Fertig in 30 Sekunden",
    generateMineBtn: "Meine erstellen",
    dayWord: "Tag", mustSeeBadge: "Unbedingt sehen", seeToursGyg: "🎯 Touren auf GetYourGuide ansehen",
    mapHeading: "🗺️ Reisekarte",
    relatedGuidePrefix: (title) => `🇪🇸 Reisen Sie aus Spanien an? ${title}`, readGuideBtn: "Guide lesen →",
    bottomCtaTitle: "Erstellen Sie Ihre personalisierte Reiseroute",
    bottomCtaPre: "Dies war nur ein Beispiel. Sie können Reiserouten für ",
    bottomCtaStrong: "jedes Reiseziel der Welt",
    bottomCtaPost: " erstellen, basierend auf Ihrer Reiseart, Ihren Interessen und Ihrer Unterkunft als Ausgangspunkt.",
    planFreeBtn: "Meine Reise kostenlos planen",
    freeNote: "Kostenlos · Keine Anmeldung · Ergebnis in 30 Sekunden",
    exploreOtherLabel: "Weitere Reiseziele entdecken", tokyoLabel: "⛩️ Tokio",
  },
  it: {
    aiBadge: "Generato con Intelligenza Artificiale",
    heroTitle: "5 giorni a Bali, Indonesia",
    heroSubtitle: "L'isola degli dei, giorno per giorno",
    heroDescription: "Terrazze di riso, templi indù immersi nella giungla, spiagge da surf a Seminyak e Canggu, la danza kecak al tramonto a Uluwatu e la purificazione sacra a Tirta Empul. Questo è un esempio reale di itinerario generato dalla nostra IA.",
    durationLabel: "Durata", durationValue: "5 giorni",
    budgetLabel: "Budget", budgetValue: "60-120 USD/giorno",
    seasonLabel: "Periodo migliore", seasonValue: "Maggio – Settembre",
    pricesLabel: "Prezzi in", pricesValue: "USD (dollaro)",
    topCtaTitle: "Vuoi il tuo itinerario personalizzato?",
    topCtaSub: "Generane uno per qualsiasi destinazione · Gratis · Pronto in 30 secondi",
    generateMineBtn: "Genera il mio",
    dayWord: "Giorno", mustSeeBadge: "Da non perdere", seeToursGyg: "🎯 Vedi i tour su GetYourGuide",
    mapHeading: "🗺️ Mappa del viaggio",
    relatedGuidePrefix: (title) => `🇪🇸 Viaggi dalla Spagna? ${title}`, readGuideBtn: "Leggi la guida →",
    bottomCtaTitle: "Genera il tuo itinerario personalizzato",
    bottomCtaPre: "Questo era solo un esempio. Puoi generare itinerari per ",
    bottomCtaStrong: "qualsiasi destinazione al mondo",
    bottomCtaPost: ", usando come punto di partenza il tuo tipo di viaggio, i tuoi interessi e il tuo alloggio.",
    planFreeBtn: "Pianifica il mio viaggio gratis",
    freeNote: "Gratis · Nessuna registrazione · Risultato in 30 secondi",
    exploreOtherLabel: "Esplora altre destinazioni", tokyoLabel: "⛩️ Tokyo",
  },
  pt: {
    aiBadge: "Gerado com Inteligência Artificial",
    heroTitle: "5 dias em Bali, Indonésia",
    heroSubtitle: "A ilha dos deuses, dia a dia",
    heroDescription: "Socalcos de arroz, templos hindus escondidos na selva, praias de surf em Seminyak e Canggu, a dança kecak ao pôr do sol em Uluwatu e a purificação sagrada em Tirta Empul. Este é um exemplo real de um itinerário gerado pela nossa IA.",
    durationLabel: "Duração", durationValue: "5 dias",
    budgetLabel: "Orçamento", budgetValue: "60-120 USD/dia",
    seasonLabel: "Melhor época", seasonValue: "Maio – Setembro",
    pricesLabel: "Preços em", pricesValue: "USD (dólar)",
    topCtaTitle: "Queres o teu próprio itinerário personalizado?",
    topCtaSub: "Gera um para qualquer destino · Grátis · Pronto em 30 segundos",
    generateMineBtn: "Gerar o meu",
    dayWord: "Dia", mustSeeBadge: "Imperdível", seeToursGyg: "🎯 Ver tours no GetYourGuide",
    mapHeading: "🗺️ Mapa da viagem",
    relatedGuidePrefix: (title) => `🇪🇸 Viajas a partir de Espanha? ${title}`, readGuideBtn: "Ler guia →",
    bottomCtaTitle: "Gera o teu itinerário personalizado",
    bottomCtaPre: "Isto foi apenas um exemplo. Podes gerar itinerários para ",
    bottomCtaStrong: "qualquer destino do mundo",
    bottomCtaPost: ", usando o teu tipo de viagem, os teus interesses e o teu alojamento como ponto de partida.",
    planFreeBtn: "Planear a minha viagem grátis",
    freeNote: "Grátis · Sem registo · Resultado em 30 segundos",
    exploreOtherLabel: "Explora outros destinos", tokyoLabel: "⛩️ Tóquio",
  },
};

interface RelatedGuide {
  slug: string;
  title: string;
  excerpt: string;
}

interface Props {
  imageMap: Record<string, string>;
  spainGuide?: RelatedGuide;
}

export function BaliGuideBody({ imageMap, spainGuide }: Props) {
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;

  const localizedDays = localizeBaliDays(baliItinerary.days, language);

  const mapActivities = baliItinerary.days.flatMap((d) =>
    d.activities.map((a) => ({
      place_name: a.name,
      short_description: a.description,
      location: { latitude: a.lat, longitude: a.lng },
      visit: { recommended_duration: a.duration },
      tickets: { price_estimate: a.price },
      media: { image_url: imageMap[a.name] || "" },
    }))
  ).map((mapAct, i) => {
    // Overlay localized name/description while keeping the image lookup
    // (built server-side) keyed by the stable Spanish name above.
    const localizedAct = localizedDays.flatMap((d) => d.activities)[i];
    return { ...mapAct, place_name: localizedAct.name, short_description: localizedAct.description };
  });

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
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <Link href="/" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <ArrowLeft size={16} strokeWidth={2.5} /> Global Home Assist
        </Link>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>
          Asia · Indonesia
        </span>
      </nav>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {/* Hero */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <div style={{ fontSize: "72px", marginBottom: "16px" }}>🌺</div>

          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(42,181,160,0.2)",
            border: "1.5px solid rgba(42,181,160,0.6)",
            borderRadius: "999px",
            padding: "5px 18px",
            marginBottom: "20px",
          }}>
            <Sparkles size={13} color="#2ab5a0" />
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.95)", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {t.aiBadge}
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 12px 0",
            lineHeight: 1.1,
          }}>
            {t.heroTitle}
          </h1>
          <p style={{
            fontSize: "clamp(14px, 2.5vw, 17px)",
            color: "#2ab5a0",
            fontWeight: 600,
            margin: "0 0 16px 0",
            fontStyle: "italic",
          }}>
            {t.heroSubtitle}
          </p>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.75,
            maxWidth: "640px",
            margin: "0 auto",
          }}>
            {t.heroDescription}
          </p>
        </div>

        {/* Info rápida */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "12px",
          marginBottom: "40px",
        }}>
          {[
            { icon: "📅", label: t.durationLabel, value: t.durationValue },
            { icon: "💵", label: t.budgetLabel, value: t.budgetValue },
            { icon: "🌤️", label: t.seasonLabel, value: t.seasonValue },
            { icon: "💱", label: t.pricesLabel, value: t.pricesValue },
          ].map((item, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.08)",
              border: "1.5px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              padding: "14px 16px",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "22px", marginBottom: "4px" }}>{item.icon}</div>
              <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", marginBottom: "3px" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "13px", color: "white", fontWeight: 700 }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* CTA superior */}
        <div style={{
          background: "linear-gradient(135deg, rgba(42,181,160,0.2), rgba(42,181,160,0.1))",
          border: "1.5px solid rgba(42,181,160,0.4)",
          borderRadius: "18px",
          padding: "20px 24px",
          marginBottom: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{ color: "white", fontWeight: 700, fontSize: "15px", margin: "0 0 4px 0" }}>
              {t.topCtaTitle}
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: 0 }}>
              {t.topCtaSub}
            </p>
          </div>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
            color: "white",
            padding: "11px 24px",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 16px rgba(42,181,160,0.4)",
            whiteSpace: "nowrap",
          }}>
            <Plane size={15} strokeWidth={2.5} /> {t.generateMineBtn} <ChevronRight size={14} />
          </Link>
        </div>

        {/* ─── ITINERARIO ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {localizedDays.map((day, dayIdx) => {
            const originalDay = baliItinerary.days[dayIdx];
            return (
            <div key={day.day}>

              <div style={{ marginBottom: "20px" }}>
                <div className="day-badge">{t.dayWord} {day.day}</div>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.4rem",
                  color: "white",
                  margin: "8px 0 0 0",
                  fontWeight: 600,
                }}>
                  {day.theme}
                </p>
              </div>

              <div>
                {day.activities.map((activity, i) => {
                  const originalName = originalDay.activities[i].name;
                  const imgUrl = imageMap[originalName] || null;
                  return (
                    <div key={i}>
                      <TransportDivider transport={i > 0 ? activity.transport : null} />

                      <div className="activity-card" style={{ display: "flex", minHeight: "200px" }}>

                        {/* Contenido */}
                        <div style={{ flex: 1, padding: "24px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px", flexWrap: "wrap" }}>
                            <h3 style={{
                              fontFamily: "'Playfair Display', serif",
                              fontSize: "1.2rem",
                              fontWeight: 700,
                              color: "#1a2a6c",
                              margin: 0,
                            }}>
                              {activity.name}
                            </h3>
                            {activity.mustSee && (
                              <span style={{
                                fontSize: "10px",
                                background: "linear-gradient(135deg, #fef3c7, #fde68a)",
                                color: "#92400e",
                                padding: "3px 10px",
                                borderRadius: "999px",
                                fontWeight: 700,
                                flexShrink: 0,
                                border: "1px solid #fbbf24",
                                boxShadow: "0 2px 6px rgba(251,191,36,0.3)",
                              }}>
                                <Star size={9} style={{ display: "inline", marginRight: "3px" }} fill="#92400e" strokeWidth={0} />
                                {t.mustSeeBadge}
                              </span>
                            )}
                          </div>

                          <p style={{ color: "#4b5563", fontSize: "13px", lineHeight: 1.65, marginBottom: "12px" }}>
                            {activity.description}
                          </p>

                          <p style={{ fontSize: "12px", color: "#2ab5a0", fontWeight: 600, marginBottom: "8px", display: "flex", alignItems: "center", gap: "5px" }}>
                            <Clock size={12} strokeWidth={2.5} />
                            {activity.bestTime} · {activity.duration}
                          </p>

                          <p style={{ fontSize: "13px", color: "#1a2a6c", fontWeight: 700, marginBottom: "12px", display: "flex", alignItems: "center", gap: "5px" }}>
                            <Coins size={13} strokeWidth={2.5} /> {activity.price}
                          </p>

                          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                            <a
                              href={gygLink(originalName)}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                fontSize: "11px",
                                padding: "4px 12px",
                                borderRadius: "6px",
                                background: "#fff7ed",
                                color: "#ea580c",
                                fontWeight: 600,
                                textDecoration: "none",
                                border: "1px solid #fed7aa",
                              }}
                            >
                              {t.seeToursGyg}
                            </a>
                          </div>

                          <div style={{
                            background: "rgba(42,181,160,0.08)",
                            borderLeft: "3px solid #2ab5a0",
                            borderRadius: "0 8px 8px 0",
                            padding: "8px 12px",
                          }}>
                            <p style={{ fontSize: "12px", color: "#374151", margin: 0 }}>
                              💡 {activity.tip}
                            </p>
                          </div>
                        </div>

                        {/* Foto tipo polaroid */}
                        {imgUrl && (
                          <div className="activity-card-photo" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 24px 20px 8px", flexShrink: 0 }}>
                            <div
                              className="activity-card-photo-inner"
                              style={{
                                transform: photoRotation(i),
                                transition: "transform 0.3s ease",
                                backgroundColor: "#fff",
                                padding: "8px 8px 28px 8px",
                                boxShadow: "3px 4px 20px rgba(26,42,108,0.22)",
                                borderRadius: "2px",
                                width: "210px",
                              }}
                            >
                              <div style={{ position: "relative", width: "194px", height: "194px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
                                <Image
                                  src={imgUrl}
                                  alt={activity.name}
                                  fill
                                  style={{ objectFit: "cover" }}
                                />
                              </div>
                              <p style={{ textAlign: "center", fontSize: "10px", color: "#888", marginTop: "6px", fontFamily: "Georgia, serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                {activity.name}
                              </p>
                            </div>
                          </div>
                        )}

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            );
          })}
        </div>

        {/* ─── MAPA ─── */}
        <div>
          <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
            {t.mapHeading}
          </h2>
          <BaliMap activities={mapActivities} language={language} />
        </div>

        {/* ─── ADSENSE — anuncio en contenido ─── */}
        <AdSenseUnit
          slot={ADSENSE_SLOTS.destinationContent}
          format="auto"
        />

        {/* ─── GUÍA RELACIONADA ─── */}
        {spainGuide && (
          <Link
            href={`/blog/${spainGuide.slug}`}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              gap: "16px", flexWrap: "wrap",
              background: "rgba(255,255,255,0.92)",
              border: "1.5px solid rgba(26,42,108,0.1)",
              borderRadius: "16px", padding: "20px 24px", textDecoration: "none",
              boxShadow: "0 4px 16px rgba(26,42,108,0.08)",
            }}
          >
            <div>
              <p style={{ margin: "0 0 3px", fontSize: "15px", fontWeight: 700, color: "#1a2a6c" }}>
                {t.relatedGuidePrefix(spainGuide.title)}
              </p>
              <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
                {spainGuide.excerpt}
              </p>
            </div>
            <span style={{
              background: "#1a2a6c", color: "white",
              padding: "10px 20px", borderRadius: "10px",
              fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap",
            }}>
              {t.readGuideBtn}
            </span>
          </Link>
        )}

        {/* ─── VUELOS ─── */}
        <FlightSearch destination="Bali" language={language} />

        {/* ─── SEGURO ─── */}
        <InsuranceBanner language={language} />

        {/* ─── SERVICIOS ─── */}
        <ServicesSection city="Bali" country="Indonesia" language={language} />

        {/* ─── INFO DEL DESTINO ─── */}
        <DestinationInfo
          city="Bali"
          country="Indonesia"
          nationality="Argentina"
          language={language}
          latitude={-8.4095}
          longitude={115.1889}
        />

        {/* ─── ASISTENCIA MÉDICA ─── */}
        <MedicalAssistance city="Bali" country="Indonesia" language={language} />

        {/* ─── SOS ─── */}
        <SOSButton city="Bali" country="Indonesia" language={language} />

        {/* ─── CTA FINAL ─── */}
        <div style={{
          marginTop: "64px",
          background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
          borderRadius: "24px",
          padding: "40px 32px",
          textAlign: "center",
          boxShadow: "0 16px 48px rgba(42,181,160,0.4)",
        }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>✈️</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "white",
            fontWeight: 700,
            margin: "0 0 12px 0",
          }}>
            {t.bottomCtaTitle}
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "15px",
            margin: "0 0 28px 0",
            lineHeight: 1.6,
          }}>
            {t.bottomCtaPre}
            <strong style={{ color: "white" }}>{t.bottomCtaStrong}</strong>
            {t.bottomCtaPost}
          </p>
          <Link href="/" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "white",
            color: "#1a2a6c",
            padding: "15px 44px",
            borderRadius: "14px",
            fontSize: "16px",
            fontWeight: 800,
            textDecoration: "none",
            boxShadow: "0 6px 24px rgba(0,0,0,0.2)",
            letterSpacing: "0.01em",
          }}>
            <Plane size={17} strokeWidth={2.5} />
            {t.planFreeBtn}
            <ChevronRight size={17} strokeWidth={2.5} />
          </Link>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", margin: "14px 0 0 0" }}>
            {t.freeNote}
          </p>
        </div>

        {/* Links a otros destinos */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "16px" }}>
            {t.exploreOtherLabel}
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { slug: "tokio", label: t.tokyoLabel },
              { slug: "bangkok", label: "🛺 Bangkok" },
              { slug: "dubai", label: "🏙️ Dubai" },
              { slug: "barcelona", label: "🏖️ Barcelona" },
              { slug: "cancun", label: "🏝️ Cancún" },
            ].map((d) => (
              <Link key={d.slug} href={`/itinerario/${d.slug}`} style={{
                color: "rgba(255,255,255,0.75)",
                textDecoration: "none",
                fontSize: "13px",
                fontWeight: 600,
                padding: "7px 16px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.15)",
                background: "rgba(255,255,255,0.06)",
              }}>
                {d.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
