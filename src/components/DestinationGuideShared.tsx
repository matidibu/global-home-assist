"use client";

import Image from "next/image";
import { Clock, Coins, Lightbulb } from "lucide-react";
import type { DestActivity } from "@/data/destinationPages";
import type { ItineraryPlace } from "@/data/itineraryPlaces";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

const AFFILIATE_GYG = "NGZASHD";
export function gygLink(query: string) {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}&partner_id=${AFFILIATE_GYG}`;
}

type Copy = {
  categoryLabels: Record<string, string>;
  tourEntriesGyg: string;
  day: string;
  activitiesCount: (n: number) => string;
  backToGuides: string;
  daysMore: (n: number) => string;
  tipsTitle: (city: string) => string;
  imaginedThereTitle: string;
  imaginedThereSub: string;
  generateFor: (city: string) => string;
  customFitTitle: string;
  customFitSub: string;
  generateForShort: (city: string) => string;
  toursTitle: (city: string) => string;
  toursSub: string;
  seeTours: string;
  customItineraryTitle: string;
  customItinerarySub: string;
  generateItineraryFor: (city: string) => string;
  generateItinerary: string;
  readGuide: string;
};

const T: Record<string, Copy> = {
  es: {
    categoryLabels: { cultura: "Cultura", "gastronomía": "Gastronomía", naturaleza: "Naturaleza", arte: "Arte", historia: "Historia", shopping: "Shopping", aventura: "Aventura", relax: "Relax" },
    tourEntriesGyg: "🎯 Tours y entradas — GetYourGuide",
    day: "Día",
    activitiesCount: n => `${n} actividades`,
    backToGuides: "Volver a itinerarios",
    daysMore: n => `📋 ${n} días más — expandí para ver el detalle`,
    tipsTitle: city => `💡 Consejos prácticos para ${city}`,
    imaginedThereTitle: "¿Ya te imaginás ahí?",
    imaginedThereSub: "Generá tu versión personalizada con tus días, gustos y presupuesto.",
    generateFor: city => `Generá para ${city} →`,
    customFitTitle: "¿Querés un itinerario hecho a tu medida?",
    customFitSub: "Personalizá días, tipo de viaje, presupuesto e intereses — gratis, en segundos.",
    generateForShort: city => `Generá para ${city}`,
    toursTitle: city => `🎯 Tours y experiencias en ${city}`,
    toursSub: "Entradas sin fila, tours guiados y experiencias únicas.",
    seeTours: "Ver tours disponibles →",
    customItineraryTitle: "¿Querés un itinerario a tu medida?",
    customItinerarySub: "Personalizá destino, días, tipo de viaje, presupuesto e intereses — con fotos reales, mapa interactivo y búsqueda de vuelos.",
    generateItineraryFor: city => `Generá tu itinerario para ${city}`,
    generateItinerary: "Generá tu itinerario personalizado gratis",
    readGuide: "Leer guía",
  },
  en: {
    categoryLabels: { cultura: "Culture", "gastronomía": "Food", naturaleza: "Nature", arte: "Art", historia: "History", shopping: "Shopping", aventura: "Adventure", relax: "Relax" },
    tourEntriesGyg: "🎯 Tours and tickets — GetYourGuide",
    day: "Day",
    activitiesCount: n => `${n} activities`,
    backToGuides: "Back to itineraries",
    daysMore: n => `📋 ${n} more days — expand to see the details`,
    tipsTitle: city => `💡 Practical tips for ${city}`,
    imaginedThereTitle: "Can you already picture yourself there?",
    imaginedThereSub: "Generate your personalized version with your own days, tastes, and budget.",
    generateFor: city => `Generate for ${city} →`,
    customFitTitle: "Want an itinerary made just for you?",
    customFitSub: "Customize days, trip type, budget, and interests — free, in seconds.",
    generateForShort: city => `Generate for ${city}`,
    toursTitle: city => `🎯 Tours and experiences in ${city}`,
    toursSub: "Skip-the-line tickets, guided tours, and unique experiences.",
    seeTours: "See available tours →",
    customItineraryTitle: "Want a tailor-made itinerary?",
    customItinerarySub: "Customize destination, days, trip type, budget, and interests — with real photos, an interactive map, and flight search.",
    generateItineraryFor: city => `Generate your itinerary for ${city}`,
    generateItinerary: "Generate your free personalized itinerary",
    readGuide: "Read guide",
  },
  fr: {
    categoryLabels: { cultura: "Culture", "gastronomía": "Gastronomie", naturaleza: "Nature", arte: "Art", historia: "Histoire", shopping: "Shopping", aventura: "Aventure", relax: "Détente" },
    tourEntriesGyg: "🎯 Visites et billets — GetYourGuide",
    day: "Jour",
    activitiesCount: n => `${n} activités`,
    backToGuides: "Retour aux itinéraires",
    daysMore: n => `📋 ${n} jours de plus — développez pour voir le détail`,
    tipsTitle: city => `💡 Conseils pratiques pour ${city}`,
    imaginedThereTitle: "Vous vous y voyez déjà ?",
    imaginedThereSub: "Générez votre version personnalisée avec vos jours, vos goûts et votre budget.",
    generateFor: city => `Générer pour ${city} →`,
    customFitTitle: "Vous voulez un itinéraire sur mesure ?",
    customFitSub: "Personnalisez les jours, le type de voyage, le budget et les centres d'intérêt — gratuit, en quelques secondes.",
    generateForShort: city => `Générer pour ${city}`,
    toursTitle: city => `🎯 Visites et expériences à ${city}`,
    toursSub: "Billets coupe-file, visites guidées et expériences uniques.",
    seeTours: "Voir les visites disponibles →",
    customItineraryTitle: "Vous voulez un itinéraire sur mesure ?",
    customItinerarySub: "Personnalisez la destination, les jours, le type de voyage, le budget et les centres d'intérêt — avec de vraies photos, une carte interactive et la recherche de vols.",
    generateItineraryFor: city => `Générez votre itinéraire pour ${city}`,
    generateItinerary: "Générez gratuitement votre itinéraire personnalisé",
    readGuide: "Lire le guide",
  },
};

export function useDestinationGuideCopy() {
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;
  return { language, t };
}

const CATEGORY_STYLE: Record<string, { bg: string; color: string }> = {
  cultura:     { bg: "rgba(42,181,160,0.12)",  color: "#2ab5a0" },
  "gastronomía": { bg: "rgba(251,191,36,0.15)",  color: "#d97706" },
  naturaleza:  { bg: "rgba(34,197,94,0.12)",   color: "#16a34a" },
  arte:        { bg: "rgba(168,85,247,0.12)",  color: "#9333ea" },
  historia:    { bg: "rgba(59,130,246,0.12)",  color: "#2563eb" },
  shopping:    { bg: "rgba(236,72,153,0.12)",  color: "#db2777" },
  aventura:    { bg: "rgba(249,115,22,0.12)",  color: "#ea580c" },
  relax:       { bg: "rgba(99,102,241,0.12)",  color: "#6366f1" },
};

const photoRotation = (i: number) => (i % 2 === 0 ? "rotate(2deg)" : "rotate(-1.5deg)");

function ActivityPhoto({ name, imageUrl, index }: { name: string; imageUrl: string; index: number }) {
  return (
    <div className="activity-card-photo" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0 0 0 8px", flexShrink: 0 }}>
      <div
        className="activity-card-photo-inner"
        style={{
          transform: photoRotation(index),
          transition: "transform 0.3s ease",
          backgroundColor: "#fff",
          padding: "6px 6px 22px 6px",
          boxShadow: "3px 4px 20px rgba(26,42,108,0.22)",
          borderRadius: "2px",
          width: "150px",
        }}
      >
        <div style={{ position: "relative", width: "138px", height: "138px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
          <Image src={imageUrl} alt={name} fill style={{ objectFit: "cover" }} unoptimized />
        </div>
        <p style={{ textAlign: "center", fontSize: "9px", color: "#888", marginTop: "5px", fontFamily: "Georgia, serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {name}
        </p>
      </div>
    </div>
  );
}

export function ActivityCard({ activity, index, place }: { activity: DestActivity; index: number; place?: ItineraryPlace }) {
  const { t } = useDestinationGuideCopy();
  const cat = CATEGORY_STYLE[activity.category] ?? CATEGORY_STYLE.cultura;
  const catLabel = t.categoryLabels[activity.category] ?? activity.category;
  return (
    <div style={{
      background: "rgba(255,255,255,0.95)",
      border: "1.5px solid rgba(26,42,108,0.1)",
      borderRadius: "16px",
      padding: "20px 22px",
      boxShadow: "0 4px 16px rgba(26,42,108,0.08)",
    }}>
      <div className="activity-card-row" style={{ display: "flex", alignItems: "flex-start", gap: "6px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "10px" }}>
            <div style={{
              width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
              background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
              color: "white", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "13px", fontWeight: 800, marginTop: "2px",
            }}>
              {index + 1}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", marginBottom: "4px" }}>
                <h3 style={{ margin: 0, fontSize: "16px", fontWeight: 800, color: "#1a2a6c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {activity.name}
                </h3>
                <span style={{ fontSize: "11px", fontWeight: 700, padding: "2px 10px", borderRadius: "999px", background: cat.bg, color: cat.color }}>
                  {catLabel}
                </span>
              </div>
              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#6b7280" }}>
                  <Clock size={12} /> {activity.time}
                </span>
                {activity.price && (
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "#1a2a6c", fontWeight: 700 }}>
                    <Coins size={12} /> {activity.price}
                  </span>
                )}
              </div>
            </div>
          </div>
          <p style={{ margin: "0 0 10px 46px", fontSize: "14px", color: "#374151", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {activity.description}
          </p>
          {activity.tip && (
            <div style={{
              marginLeft: "46px",
              background: "rgba(42,181,160,0.08)", border: "1px solid rgba(42,181,160,0.25)",
              borderRadius: "10px", padding: "10px 14px",
              display: "flex", alignItems: "flex-start", gap: "8px",
            }}>
              <Lightbulb size={14} style={{ color: "#2ab5a0", flexShrink: 0, marginTop: "2px" }} />
              <span style={{ fontSize: "12px", color: "#374151", lineHeight: 1.5, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {activity.tip}
              </span>
            </div>
          )}
          {activity.gyg && (
            <div style={{ marginLeft: "46px", marginTop: "10px" }}>
              <a href={gygLink(activity.gyg)} target="_blank" rel="noopener noreferrer sponsored" style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "#ff6600", color: "white",
                padding: "6px 14px", borderRadius: "8px",
                fontSize: "12px", fontWeight: 700, textDecoration: "none",
                boxShadow: "0 2px 8px rgba(255,102,0,0.3)",
              }}>
                {t.tourEntriesGyg}
              </a>
            </div>
          )}
        </div>
        {place?.imageUrl && (
          <ActivityPhoto name={activity.name} imageUrl={place.imageUrl} index={index} />
        )}
      </div>
    </div>
  );
}
