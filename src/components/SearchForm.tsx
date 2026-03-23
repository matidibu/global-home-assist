/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import CountryBackground from "@/components/CountryBackground";
import ServicesSection from "@/components/ServicesSection";
import DestinationInfo from "@/components/DestinationInfo";
import SOSButton from "@/components/SOSButton";
import MedicalAssistance from "@/components/MedicalAssistance";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import FlightSearch from "@/components/FlightSearch";
import InsuranceBanner from "@/components/InsuranceBanner";
import ShareButton from "@/components/ShareButton";
import { HomeBlogTeaser } from "@/components/HomeBlogTeaser";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

const TravelMap = dynamic(() => import("@/components/TravelMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "500px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)", color: "#6b7280", fontSize: "14px" }}>
      Cargando mapa...
    </div>
  ),
});

const AFFILIATE = {
  getyourguide: "NGZASHD",
};

const LOADING_CONTENT: Record<string, { messages: string[]; steps: string[]; headline: string }> = {
  es: {
    headline: "Preparando tu experiencia de viaje",
    messages: [
      "La IA está analizando tu destino en profundidad...",
      "Eligiendo los mejores lugares para tu tipo de viaje...",
      "Buscando fotos reales de cada atracción...",
      "Nuestros expertos están revisando las recomendaciones...",
      "Calculando rutas y tiempos de traslado...",
    ],
    steps: ["Generando itinerario", "Seleccionando lugares", "Fotos", "Rutas"],
  },
  en: {
    headline: "Preparing your travel experience",
    messages: [
      "AI is analyzing your destination in depth...",
      "Selecting the best places for your trip type...",
      "Finding real photos of each attraction...",
      "Our experts are reviewing the recommendations...",
      "Calculating routes and travel times...",
    ],
    steps: ["Generating itinerary", "Selecting places", "Photos", "Routes"],
  },
  fr: {
    headline: "Préparation de votre expérience voyage",
    messages: [
      "L'IA analyse votre destination en profondeur...",
      "Sélection des meilleurs endroits pour votre voyage...",
      "Recherche de photos réelles de chaque attraction...",
      "Nos experts examinent les recommandations...",
      "Calcul des itinéraires et temps de trajet...",
    ],
    steps: ["Génération", "Sélection des lieux", "Photos", "Trajets"],
  },
  it: {
    headline: "Preparazione della tua esperienza di viaggio",
    messages: [
      "L'IA sta analizzando la tua destinazione in profondità...",
      "Selezione dei migliori luoghi per il tuo viaggio...",
      "Ricerca di foto reali di ogni attrazione...",
      "I nostri esperti stanno revisionando i consigli...",
      "Calcolo dei percorsi e dei tempi di spostamento...",
    ],
    steps: ["Generazione", "Selezione luoghi", "Foto", "Percorsi"],
  },
  de: {
    headline: "Vorbereitung Ihres Reiseerlebnisses",
    messages: [
      "Die KI analysiert Ihr Reiseziel eingehend...",
      "Auswahl der besten Orte für Ihre Reise...",
      "Suche nach echten Fotos jeder Sehenswürdigkeit...",
      "Unsere Experten überprüfen die Empfehlungen...",
      "Berechnung von Routen und Reisezeiten...",
    ],
    steps: ["Generierung", "Orte auswählen", "Fotos", "Routen"],
  },
  pt: {
    headline: "Preparando sua experiência de viagem",
    messages: [
      "A IA está analisando seu destino em profundidade...",
      "Selecionando os melhores lugares para sua viagem...",
      "Buscando fotos reais de cada atração...",
      "Nossos especialistas estão revisando as recomendações...",
      "Calculando rotas e tempos de deslocamento...",
    ],
    steps: ["Gerando itinerário", "Selecionando locais", "Fotos", "Rotas"],
  },
};

const T: Record<string, Record<string, any>> = {
  es: {
    slogan: "Tu viaje, tu mundo... nuestra compañía.",
    fromCountry: "¿De dónde sos?",
    fromCountryPlaceholder: "Ej: Argentina",
    language: "Idioma del itinerario",
    tripType: "Tipo de viaje",
    tripTypeSelect: "Seleccionar",
    budget: "Presupuesto (USD)",
    budgetPlaceholder: "Ej: 1500",
    destination: "¿A dónde querés ir?",
    interests: "Intereses",
    duration: "Duración",
    day: "día", days: "días",
    accommodation: "Hospedaje",
    accommodationOptional: "(opcional)",
    accommodationSearch: "🔍 Hotel / Hostel",
    accommodationAddress: "📍 Dirección / Airbnb",
    accommodationHint: "Primero elegí la ciudad de destino",
    accommodationAddressHint: 'Ej: "Calle Mayor 15, Madrid"',
    generate: "✈️ Generar itinerario",
    generating: "✈️ Generando itinerario...",
    mapTitle: "🗺️ Mapa del viaje",
    mustSee: "⭐ Imperdible",
    bestTime: "Mejor horario",
    official: "🌐 Sitio oficial",
    expertBadge: "Generado por IA · Validado por expertos en turismo",
    tripTypes: { placer:"Placer", negocios:"Negocios", aventura:"Aventura", familiar:"Familiar", romántico:"Romántico", gastronómico:"Gastronómico", cultural:"Cultural" },
    interestOptions: ["Cultura","Gastronomía","Aventura","Relax","Shopping","Naturaleza","Deportes","Historia","Arte","Vida nocturna"],
    interestValues: ["cultura","gastronomía","aventura","relax","shopping","naturaleza","deportes","historia","arte","vida nocturna"],
  },
  en: {
    slogan: "Your trip, your world... our company.",
    fromCountry: "Where are you from?",
    fromCountryPlaceholder: "E.g: United States",
    language: "Itinerary language",
    tripType: "Trip type",
    tripTypeSelect: "Select",
    budget: "Budget (USD)",
    budgetPlaceholder: "E.g: 1500",
    destination: "Where do you want to go?",
    interests: "Interests",
    duration: "Duration",
    day: "day", days: "days",
    accommodation: "Accommodation",
    accommodationOptional: "(optional)",
    accommodationSearch: "🔍 Hotel / Hostel",
    accommodationAddress: "📍 Address / Airbnb",
    accommodationHint: "First choose your destination city",
    accommodationAddressHint: 'E.g: "15 Main Street, Paris"',
    generate: "✈️ Generate itinerary",
    generating: "✈️ Generating itinerary...",
    mapTitle: "🗺️ Trip map",
    mustSee: "⭐ Must-see",
    bestTime: "Best time",
    official: "🌐 Official site",
    expertBadge: "AI-Generated · Validated by Tourism Experts",
    tripTypes: { placer:"Leisure", negocios:"Business", aventura:"Adventure", familiar:"Family", romántico:"Romantic", gastronómico:"Gastronomy", cultural:"Cultural" },
    interestOptions: ["Culture","Gastronomy","Adventure","Relax","Shopping","Nature","Sports","History","Art","Nightlife"],
    interestValues: ["cultura","gastronomía","aventura","relax","shopping","naturaleza","deportes","historia","arte","vida nocturna"],
  },
  fr: {
    slogan: "Votre voyage, votre monde... notre compagnie.",
    fromCountry: "D'où venez-vous ?",
    fromCountryPlaceholder: "Ex: France",
    language: "Langue de l'itinéraire",
    tripType: "Type de voyage",
    tripTypeSelect: "Sélectionner",
    budget: "Budget (USD)",
    budgetPlaceholder: "Ex: 1500",
    destination: "Où voulez-vous aller ?",
    interests: "Intérêts",
    duration: "Durée",
    day: "jour", days: "jours",
    accommodation: "Hébergement",
    accommodationOptional: "(optionnel)",
    accommodationSearch: "🔍 Hôtel / Hostel",
    accommodationAddress: "📍 Adresse / Airbnb",
    accommodationHint: "Choisissez d'abord la ville",
    accommodationAddressHint: 'Ex: "15 rue de Rivoli, Paris"',
    generate: "✈️ Générer l'itinéraire",
    generating: "✈️ Génération en cours...",
    mapTitle: "🗺️ Carte du voyage",
    mustSee: "⭐ Incontournable",
    bestTime: "Meilleur moment",
    official: "🌐 Site officiel",
    expertBadge: "Généré par IA · Validé par des experts en voyage",
    tripTypes: { placer:"Loisirs", negocios:"Affaires", aventura:"Aventure", familiar:"Famille", romántico:"Romantique", gastronómico:"Gastronomie", cultural:"Culture" },
    interestOptions: ["Culture","Gastronomie","Aventure","Détente","Shopping","Nature","Sport","Histoire","Art","Vie nocturne"],
    interestValues: ["cultura","gastronomía","aventura","relax","shopping","naturaleza","deportes","historia","arte","vida nocturna"],
  },
  it: {
    slogan: "Il tuo viaggio, il tuo mondo... la nostra compagnia.",
    fromCountry: "Da dove vieni?",
    fromCountryPlaceholder: "Es: Italia",
    language: "Lingua dell'itinerario",
    tripType: "Tipo di viaggio",
    tripTypeSelect: "Seleziona",
    budget: "Budget (USD)",
    budgetPlaceholder: "Es: 1500",
    destination: "Dove vuoi andare?",
    interests: "Interessi",
    duration: "Durata",
    day: "giorno", days: "giorni",
    accommodation: "Alloggio",
    accommodationOptional: "(opzionale)",
    accommodationSearch: "🔍 Hotel / Hostel",
    accommodationAddress: "📍 Indirizzo / Airbnb",
    accommodationHint: "Prima scegli la città",
    accommodationAddressHint: 'Es: "Via Roma 15, Roma"',
    generate: "✈️ Genera itinerario",
    generating: "✈️ Generazione in corso...",
    mapTitle: "🗺️ Mappa del viaggio",
    mustSee: "⭐ Da non perdere",
    bestTime: "Orario migliore",
    official: "🌐 Sito ufficiale",
    expertBadge: "Generato da IA · Validato da esperti di viaggio",
    tripTypes: { placer:"Piacere", negocios:"Affari", aventura:"Avventura", familiar:"Famiglia", romántico:"Romantico", gastronómico:"Gastronomia", cultural:"Culturale" },
    interestOptions: ["Cultura","Gastronomia","Avventura","Relax","Shopping","Natura","Sport","Storia","Arte","Vita notturna"],
    interestValues: ["cultura","gastronomía","aventura","relax","shopping","naturaleza","deportes","historia","arte","vida nocturna"],
  },
  de: {
    slogan: "Ihre Reise, Ihre Welt... unsere Begleitung.",
    fromCountry: "Woher kommen Sie?",
    fromCountryPlaceholder: "z.B: Deutschland",
    language: "Sprache des Reiseplans",
    tripType: "Reiseart",
    tripTypeSelect: "Auswählen",
    budget: "Budget (USD)",
    budgetPlaceholder: "z.B: 1500",
    destination: "Wohin möchten Sie reisen?",
    interests: "Interessen",
    duration: "Dauer",
    day: "Tag", days: "Tage",
    accommodation: "Unterkunft",
    accommodationOptional: "(optional)",
    accommodationSearch: "🔍 Hotel / Hostel",
    accommodationAddress: "📍 Adresse / Airbnb",
    accommodationHint: "Wählen Sie zuerst die Zielstadt",
    accommodationAddressHint: 'z.B: "Hauptstraße 15, Berlin"',
    generate: "✈️ Reiseplan erstellen",
    generating: "✈️ Wird erstellt...",
    mapTitle: "🗺️ Reisekarte",
    mustSee: "⭐ Sehenswert",
    bestTime: "Beste Zeit",
    official: "🌐 Offizielle Website",
    expertBadge: "KI-generiert · Von Reiseexperten validiert",
    tripTypes: { placer:"Urlaub", negocios:"Geschäft", aventura:"Abenteuer", familiar:"Familie", romántico:"Romantisch", gastronómico:"Gastronomie", cultural:"Kultur" },
    interestOptions: ["Kultur","Gastronomie","Abenteuer","Entspannung","Shopping","Natur","Sport","Geschichte","Kunst","Nachtleben"],
    interestValues: ["cultura","gastronomía","aventura","relax","shopping","naturaleza","deportes","historia","arte","vida nocturna"],
  },
  pt: {
    slogan: "Sua viagem, seu mundo... nossa companhia.",
    fromCountry: "De onde você é?",
    fromCountryPlaceholder: "Ex: Brasil",
    language: "Idioma do itinerário",
    tripType: "Tipo de viagem",
    tripTypeSelect: "Selecionar",
    budget: "Orçamento (USD)",
    budgetPlaceholder: "Ex: 1500",
    destination: "Para onde quer ir?",
    interests: "Interesses",
    duration: "Duração",
    day: "dia", days: "dias",
    accommodation: "Hospedagem",
    accommodationOptional: "(opcional)",
    accommodationSearch: "🔍 Hotel / Hostel",
    accommodationAddress: "📍 Endereço / Airbnb",
    accommodationHint: "Primeiro escolha a cidade",
    accommodationAddressHint: 'Ex: "Rua Augusta 15, Lisboa"',
    generate: "✈️ Gerar itinerário",
    generating: "✈️ Gerando itinerário...",
    mapTitle: "🗺️ Mapa da viagem",
    mustSee: "⭐ Imperdível",
    bestTime: "Melhor horário",
    official: "🌐 Site oficial",
    expertBadge: "Gerado por IA · Validado por especialistas em viagens",
    tripTypes: { placer:"Lazer", negocios:"Negócios", aventura:"Aventura", familiar:"Família", romántico:"Romântico", gastronómico:"Gastronômico", cultural:"Cultural" },
    interestOptions: ["Cultura","Gastronomia","Aventura","Relax","Shopping","Natureza","Esportes","História","Arte","Vida noturna"],
    interestValues: ["cultura","gastronomía","aventura","relax","shopping","naturaleza","deportes","historia","arte","vida nocturna"],
  },
};

function buildAffiliateLinks(placeName: string, city: string) {
  const q = encodeURIComponent(`${placeName} ${city}`);
  return {
    getyourguide: `https://www.getyourguide.com/s/?q=${q}&partner_id=${AFFILIATE.getyourguide}`,
  };
}

function TransportDivider({ transport, accessNote, fromAccommodation, accommodationName }: {
  transport: any; accessNote?: string; fromAccommodation?: boolean; accommodationName?: string;
}) {
  if (!transport && !accessNote) return null;
  const allOptions = [
    { key: "walk", icon: "🚶" }, { key: "bike", icon: "🚴" }, { key: "car", icon: "🚗" },
    { key: "ferry", icon: "⛵" }, { key: "flight", icon: "✈️" },
  ].filter(o => transport?.[o.key] != null && transport[o.key] > 0);

  const formatTime = (m: number) => m < 60 ? `${m} min` : `${Math.floor(m/60)}h${m%60>0?` ${m%60}min`:""}`;
  const isWater = transport?.ferry != null || transport?.flight != null;
  const isFromHotel = fromAccommodation && accommodationName;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 8px" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(42,181,160,0.3))" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 }}>
        {isFromHotel && <span style={{ fontSize: "11px", color: "#7c3aed", fontWeight: 600 }}>🏨 {accommodationName}</span>}
        {allOptions.length > 0 && (
          <div className="transport-pill" style={{
            background: isWater ? "rgba(219,234,254,0.95)" : isFromHotel ? "rgba(237,233,254,0.95)" : "rgba(255,255,255,0.95)",
            border: `1.5px solid ${isWater ? "#93c5fd" : isFromHotel ? "#c4b5fd" : "rgba(42,181,160,0.4)"}`,
            boxShadow: "0 2px 8px rgba(26,42,108,0.1)",
          }}>
            {allOptions.map((o, idx) => (
              <span key={o.key} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {idx > 0 && <span style={{ color: "#d1d5db" }}>•</span>}
                <span style={{ fontSize: "15px" }}>{o.icon}</span>
                <span style={{ color: isWater ? "#1d4ed8" : isFromHotel ? "#6d28d9" : "#1a2a6c" }}>{formatTime(transport[o.key])}</span>
              </span>
            ))}
          </div>
        )}
        {accessNote && <span style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic" }}>🗺️ {accessNote}</span>}
      </div>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(42,181,160,0.3))" }} />
    </div>
  );
}

async function tryGeocode(text: string, cityCoords: { lat: number; lon: number }, apiKey: string): Promise<{ lat: number; lon: number; name: string } | null> {
  try {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(text)}&bias=proximity:${cityCoords.lon},${cityCoords.lat}&filter=circle:${cityCoords.lon},${cityCoords.lat},30000&limit=1&apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    const feature = data?.features?.[0];
    if (!feature) return null;
    return { lat: feature.properties.lat, lon: feature.properties.lon, name: feature.properties.name || feature.properties.formatted || text };
  } catch { return null; }
}

export default function SearchForm() {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [province, setProvince] = useState("");
  const [nationality, setNationality] = useState("");
  const [language, setLanguage] = useState("es");
  const [tripType, setTripType] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState(3);
  const [itinerary, setItinerary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [cityCoords, setCityCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [emergencyNumbers, setEmergencyNumbers] = useState<any>(null);
  const [accommodationName, setAccommodationName] = useState("");
  const [accommodationCoords, setAccommodationCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [accommodationMode, setAccommodationMode] = useState<"search" | "address">("search");
  const [accommodationTyped, setAccommodationTyped] = useState("");

  const autocompleteRef = useRef<GeocoderAutocomplete | null>(null);
  const accommodationRef = useRef<GeocoderAutocomplete | null>(null);

  const t = T[language] || T.es;
  const lc = LOADING_CONTENT[language] || LOADING_CONTENT.es;

  useEffect(() => {
    if (!loading) { setLoadingMsgIdx(0); return; }
    const interval = setInterval(() => {
      setLoadingMsgIdx(prev => prev + 1);
    }, 4500);
    return () => clearInterval(interval);
  }, [loading]);

  useEffect(() => {
    const container = document.getElementById("autocomplete");
    if (!container) return;
    if (autocompleteRef.current) { container.innerHTML = ""; autocompleteRef.current = null; }
    const ac = new GeocoderAutocomplete(container, process.env.NEXT_PUBLIC_GEOAPIFY_KEY as string, { type: "city" });

    const handleCitySelect = (loc: any) => {
      const props = loc?.properties ?? loc;
      // Geoapify v3: para city-states (Vaticano, Mónaco, etc.) props.city puede venir vacío
      const cityName =
        props.city ||
        props.municipality ||
        props.county ||
        props.name ||
        props.state ||
        props.formatted?.split(",")[0]?.trim() ||
        "";
      setCity(cityName);
      setCountry(props.country || "");
      setProvince(props.state || props.county || props.region || "");
      setCityCoords({ lat: props.lat, lon: props.lon });
      setAccommodationName(""); setAccommodationCoords(null); setAccommodationTyped("");
    };

    ac.on("select", handleCitySelect);
    ac.on("place_select" as any, handleCitySelect);
    autocompleteRef.current = ac;
    return () => { container.innerHTML = ""; autocompleteRef.current = null; };
  }, []);

  useEffect(() => {
    const containerId = accommodationMode === "search" ? "accommodation-search" : "accommodation-address";
    const container = document.getElementById(containerId);
    if (!container) return;
    if (accommodationRef.current) { container.innerHTML = ""; accommodationRef.current = null; }
    if (!cityCoords) return;
    const ac = new GeocoderAutocomplete(container, process.env.NEXT_PUBLIC_GEOAPIFY_KEY as string, {
      bias: `proximity:${cityCoords.lon},${cityCoords.lat}`,
      filter: { circle: { lon: cityCoords.lon, lat: cityCoords.lat, radiusMeters: 30000 } },
    } as any);
    ac.on("input", (value: string) => { setAccommodationTyped(value); if (!value) { setAccommodationName(""); setAccommodationCoords(null); } });
    ac.on("select", (loc: any) => {
      const name = loc.properties.name || loc.properties.formatted || loc.properties.address_line1 || "";
      setAccommodationName(name); setAccommodationCoords({ lat: loc.properties.lat, lon: loc.properties.lon }); setAccommodationTyped(name);
    });
    accommodationRef.current = ac;
    return () => { container.innerHTML = ""; accommodationRef.current = null; };
  }, [cityCoords, accommodationMode]);

  const handleModeChange = (mode: "search" | "address") => {
    setAccommodationMode(mode); setAccommodationName(""); setAccommodationCoords(null); setAccommodationTyped("");
  };

  async function generateTrip() {
    if (!city || !country) return;
    setLoading(true);
    let finalCoords = accommodationCoords;
    let finalName = accommodationName;
    if (accommodationTyped && !accommodationCoords && cityCoords) {
      const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
      if (apiKey) {
        const result = await tryGeocode(accommodationTyped, cityCoords, apiKey);
        if (result) { finalCoords = { lat: result.lat, lon: result.lon }; finalName = result.name || accommodationTyped; setAccommodationCoords(finalCoords); setAccommodationName(finalName); }
      }
    }
    try {
      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city, country, province, nationality, language, tripType, interests, budget, days, accommodationCoords: finalCoords, accommodationName: finalName, accommodationMode }),
      });
      setItinerary(await res.json());
    } catch (error) { console.error("Error:", error); }
    finally { setLoading(false); }
  }

  const photoRotation = (i: number) => i % 2 === 0 ? "rotate(2deg)" : "rotate(-1.5deg)";
  const allActivities = itinerary?.days?.flatMap((day: any) => day.activities) ?? [];
  const itineraryAccommodation = itinerary?.accommodation;
  const itineraryAccommodationName = itineraryAccommodation?.name || accommodationName;

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "13px", fontWeight: 700,
    color: "#1a2a6c", marginBottom: "6px", letterSpacing: "0.02em",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  return (
    <>
      <CountryBackground country={country} active={!!country} />

      <div className="main-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 20px" }}>

        {/* ===== HEADER ===== */}
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          marginBottom: "2.5rem",
          padding: "2.5rem 2rem",
          background: "linear-gradient(135deg, rgba(26,42,108,0.82), rgba(26,42,108,0.65))",
          backdropFilter: "blur(20px)",
          borderRadius: "28px",
          border: "1.5px solid rgba(255,255,255,0.2)",
          boxShadow: "0 12px 48px rgba(26,42,108,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
          textAlign: "center",
        }}>
          {/* Logo recortado en círculo */}
          <div style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: "0 0 0 4px rgba(42,181,160,0.6), 0 0 0 9px rgba(42,181,160,0.2), 0 12px 40px rgba(0,0,0,0.3)",
            flexShrink: 0,
          }}>
            <Image
              src="/logo.png"
              alt="Global Home Assist"
              width={140}
              height={140}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {/* Badge AI */}
          <div className="expert-badge" style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(42,181,160,0.2)",
            border: "1.5px solid rgba(42,181,160,0.6)",
            borderRadius: "999px",
            padding: "5px 18px",
          }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#2ab5a0" }} />
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.95)", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {t.expertBadge}
            </span>
          </div>

          {/* Título */}
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
            fontWeight: 700,
            color: "white",
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            textShadow: "0 2px 24px rgba(0,0,0,0.25)",
          }}>
            Global Home Assist
          </h1>

          {/* Slogan */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px", justifyContent: "center" }}>
            <div style={{ height: "2px", width: "50px", background: "linear-gradient(to right, transparent, #2ab5a0)" }} />
            <span style={{
              fontSize: "clamp(12px, 2vw, 15px)",
              color: "rgba(255,255,255,0.82)",
              fontStyle: "italic",
              letterSpacing: "0.03em",
              fontFamily: "'Playfair Display', serif",
            }}>
              {t.slogan}
            </span>
            <div style={{ height: "2px", width: "50px", background: "linear-gradient(to left, transparent, #2ab5a0)" }} />
          </div>

          {/* Blog link */}
          <a href="/blog" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "white",
            border: "none",
            borderRadius: "100px",
            padding: "10px 24px",
            fontSize: "13px",
            fontWeight: 800,
            color: "#1a2a6c",
            textDecoration: "none",
            letterSpacing: "0.02em",
            boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
            marginTop: "8px",
          }}>
            ✍️ Revista de viajes &nbsp;<span style={{ color: "#2ab5a0" }}>→</span>
          </a>
        </div>

        {/* ===== FORMULARIO ===== */}
        <div style={{
          background: "rgba(255,255,255,0.93)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1.5px solid rgba(26,42,108,0.12)",
          boxShadow: "0 12px 40px rgba(26,42,108,0.16)",
          padding: "28px",
          marginBottom: "2.5rem",
        }}>
          {/* Ciudad destino destacada */}
          <div style={{
            background: "linear-gradient(135deg, rgba(26,42,108,0.06), rgba(42,181,160,0.08))",
            border: "2px solid rgba(42,181,160,0.45)",
            borderRadius: "18px",
            padding: "20px",
            marginBottom: "22px",
            boxShadow: "0 4px 16px rgba(42,181,160,0.12)",
          }}>
            <label style={{ ...labelStyle, fontSize: "15px", color: "#2ab5a0" }}>
              ✈️ {t.destination}
            </label>
            <div id="autocomplete" />
            {city && (
              <p style={{ fontSize: "12px", color: "#2ab5a0", fontWeight: 600, marginTop: "8px" }}>
                📍 {city}{province ? `, ${province}` : ""}, {country}
              </p>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            <div>
              <label style={labelStyle}>{t.fromCountry}</label>
              <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} className="form-input" placeholder={t.fromCountryPlaceholder} />
            </div>
            <div>
              <label style={labelStyle}>{t.language}</label>
              <select value={language} onChange={e => setLanguage(e.target.value)} className="form-input">
                <option value="es">Español</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="it">Italiano</option>
                <option value="de">Deutsch</option>
                <option value="pt">Português</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.tripType}</label>
              <select value={tripType} onChange={e => setTripType(e.target.value)} className="form-input">
                <option value="">{t.tripTypeSelect}</option>
                {Object.entries(t.tripTypes as Record<string,string>).map(([val, label]) => (
                  <option key={val} value={val}>{label}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.budget}</label>
              <input type="number" value={budget} onChange={e => setBudget(e.target.value)} className="form-input" placeholder={t.budgetPlaceholder} min={0} />
            </div>
            <div>
              <label style={labelStyle}>{t.interests}</label>
              <select multiple value={interests} onChange={e => setInterests(Array.from(e.target.selectedOptions, o => o.value))} className="form-input" style={{ height: "110px" }}>
                {(t.interestOptions as string[]).map((label: string, idx: number) => (
                  <option key={idx} value={(t.interestValues as string[])[idx]}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Días */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>
              📅 {t.duration} — <span style={{ color: "#2ab5a0" }}>{days} {days === 1 ? t.day : t.days}</span>
            </label>
            <div className="days-selector" style={{ display: "flex", gap: "8px" }}>
              {[1,2,3,4,5,6,7].map(d => (
                <button key={d} type="button" onClick={() => setDays(d)} className="day-btn" style={{
                  width: "42px", height: "42px", borderRadius: "10px", fontSize: "14px", fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: days === d ? "linear-gradient(135deg, #1a2a6c, #2d3f8f)" : "rgba(255,255,255,0.9)",
                  color: days === d ? "white" : "#1a2a6c",
                  border: `2px solid ${days === d ? "#1a2a6c" : "rgba(26,42,108,0.18)"}`,
                  cursor: "pointer", transition: "all 0.15s ease",
                  boxShadow: days === d ? "0 4px 12px rgba(26,42,108,0.3)" : "0 2px 6px rgba(26,42,108,0.06)",
                }}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Hospedaje */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>
              🏨 {t.accommodation} <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: "12px" }}>{t.accommodationOptional}</span>
            </label>
            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
              {([{ mode: "search" as const, label: t.accommodationSearch }, { mode: "address" as const, label: t.accommodationAddress }]).map(({ mode, label }) => (
                <button key={mode} type="button" onClick={() => handleModeChange(mode)} style={{
                  padding: "6px 16px", borderRadius: "999px", fontSize: "12px", fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: accommodationMode === mode ? "linear-gradient(135deg, #1a2a6c, #2d3f8f)" : "rgba(255,255,255,0.9)",
                  color: accommodationMode === mode ? "white" : "#1a2a6c",
                  border: `2px solid ${accommodationMode === mode ? "#1a2a6c" : "rgba(26,42,108,0.18)"}`,
                  cursor: "pointer", boxShadow: "0 2px 6px rgba(26,42,108,0.08)",
                }}>
                  {label}
                </button>
              ))}
            </div>
            {!cityCoords && <p style={{ fontSize: "12px", color: "#9ca3af", fontStyle: "italic" }}>{t.accommodationHint}</p>}
            {cityCoords && (
              <>
                <div id="accommodation-search" style={{ display: accommodationMode === "search" ? "block" : "none" }} />
                <div id="accommodation-address" style={{ display: accommodationMode === "address" ? "block" : "none" }} />
                {accommodationMode === "address" && <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>{t.accommodationAddressHint}</p>}
              </>
            )}
            {accommodationName && accommodationCoords && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px", padding: "8px 14px", background: "rgba(237,233,254,0.9)", borderRadius: "10px", border: "1.5px solid #c4b5fd", boxShadow: "0 2px 8px rgba(124,58,237,0.1)" }}>
                <span>✅</span>
                <span style={{ fontSize: "12px", color: "#5b21b6", fontWeight: 600 }}>{accommodationName}</span>
                <button type="button" onClick={() => { setAccommodationName(""); setAccommodationCoords(null); setAccommodationTyped(""); }} style={{ marginLeft: "auto", color: "#9ca3af", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>✕</button>
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
            <button onClick={generateTrip} disabled={loading} className="btn-generate">
              {loading ? t.generating : t.generate}
            </button>
          </div>

          {loading && (
            <div style={{
              marginTop: "28px",
              padding: "36px 32px",
              background: "linear-gradient(135deg, rgba(26,42,108,0.04), rgba(42,181,160,0.07))",
              border: "1.5px solid rgba(42,181,160,0.35)",
              borderRadius: "20px",
              textAlign: "center",
            }}>
              {/* Íconos de viaje rotativos */}
              {(() => {
                const icons = ["✈️","🏖️","🏛️","☀️","🗺️","🌴","🏔️","🎭","🌊","🏙️"];
                const idx = loadingMsgIdx % icons.length;
                return (
                  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                    <span style={{ fontSize: "32px", opacity: 0.3 }}>{icons[(idx - 1 + icons.length) % icons.length]}</span>
                    <span className="loading-float" style={{ fontSize: "64px", display: "inline-block", transition: "all 0.4s ease" }}>{icons[idx]}</span>
                    <span style={{ fontSize: "32px", opacity: 0.3 }}>{icons[(idx + 1) % icons.length]}</span>
                  </div>
                );
              })()}

              {/* Headline */}
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#1a2a6c",
                margin: "0 0 6px 0",
              }}>
                {lc.headline}
              </p>

              {/* Mensaje rotativo */}
              <p style={{
                fontSize: "13px",
                color: "#4b5563",
                fontStyle: "italic",
                margin: "0 0 20px 0",
                minHeight: "20px",
                transition: "opacity 0.4s ease",
              }}>
                {lc.messages[loadingMsgIdx % lc.messages.length]}
              </p>

              {/* Barra de progreso */}
              <div style={{
                height: "4px",
                background: "rgba(42,181,160,0.15)",
                borderRadius: "999px",
                overflow: "hidden",
                marginBottom: "20px",
              }}>
                <div className="loading-bar" style={{
                  height: "100%",
                  background: "linear-gradient(90deg, #1a2a6c, #2ab5a0)",
                  borderRadius: "999px",
                }} />
              </div>

              {/* Steps */}
              <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
                {lc.steps.map((step: string, i: number) => {
                  const done = Math.floor(loadingMsgIdx / lc.messages.length * lc.steps.length);
                  const active = i <= Math.min(loadingMsgIdx, lc.steps.length - 1);
                  return (
                    <div key={i} style={{
                      padding: "5px 14px",
                      borderRadius: "999px",
                      fontSize: "11px",
                      background: active ? "rgba(42,181,160,0.15)" : "rgba(26,42,108,0.05)",
                      color: active ? "#2ab5a0" : "#9ca3af",
                      border: `1px solid ${active ? "rgba(42,181,160,0.4)" : "rgba(26,42,108,0.1)"}`,
                      fontWeight: 600,
                      transition: "all 0.4s ease",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {i < done ? "✓ " : ""}{step}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Blog teaser — solo visible cuando no hay itinerario generado */}
          {!itinerary && <HomeBlogTeaser />}

          <LegalDisclaimer language={language} />
        </div>

        {/* ===== ITINERARIO ===== */}
        {itinerary && itinerary.days && (
          <div className="print-area" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>

            {/* Cabecera solo visible al imprimir */}
            <div className="print-header" style={{ display: "none" }}>
              <span style={{ fontSize: "22px", fontWeight: 800, color: "#1a2a6c", fontFamily: "'Playfair Display', serif" }}>
                Global Home Assist
              </span>
              <span style={{ fontSize: "13px", color: "#6b7280", marginLeft: "auto" }}>
                global-home-assist.vercel.app
              </span>
            </div>

            {itinerary.days.map((day: any, dayIndex: number) => (
              <div key={dayIndex} className="print-day">
                <div style={{ marginBottom: "20px" }}>
                  <div className="day-badge">{t.day.charAt(0).toUpperCase() + t.day.slice(1)} {day.day}</div>
                  {day.theme && (
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#1a2a6c", margin: "8px 0 0 0", fontWeight: 600 }}>
                      {day.theme}
                    </p>
                  )}
                </div>

                <div>
                  {day.activities.map((activity: any, i: number) => {
                    const links = buildAffiliateLinks(activity.place_name, itinerary.destination);
                    return (
                      <div key={i}>
                        {i === 0 && activity.transport && (
                          <TransportDivider transport={activity.transport} accessNote={activity.accessNote} fromAccommodation={activity.fromAccommodation} accommodationName={itineraryAccommodationName} />
                        )}

                        <div className="activity-card" style={{ display: "flex", minHeight: "200px" }}>
                          <div style={{ flex: 1, padding: "24px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#1a2a6c", margin: 0 }}>
                                {activity.place_name}
                              </h3>
                              {activity.mustSee && (
                                <span style={{ fontSize: "10px", background: "linear-gradient(135deg, #fef3c7, #fde68a)", color: "#92400e", padding: "3px 10px", borderRadius: "999px", fontWeight: 700, flexShrink: 0, border: "1px solid #fbbf24", boxShadow: "0 2px 6px rgba(251,191,36,0.3)" }}>
                                  {t.mustSee}
                                </span>
                              )}
                            </div>
                            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#4b5563", fontSize: "13px", lineHeight: 1.6, marginBottom: "12px" }}>
                              {activity.short_description}
                            </p>
                            {activity.visit?.best_time_to_visit && (
                              <p style={{ fontSize: "12px", color: "#2ab5a0", fontWeight: 600, marginBottom: "8px" }}>
                                🕐 {t.bestTime}: {activity.visit.best_time_to_visit} · {activity.visit.recommended_duration}
                              </p>
                            )}
                            {activity.tickets?.price_estimate && (
                              <p style={{ fontSize: "13px", color: "#1a2a6c", fontWeight: 700, marginBottom: "12px" }}>
                                💰 {activity.tickets.price_estimate}
                              </p>
                            )}
                            <div className="no-print" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                              <a href={links.getyourguide} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#fff7ed", color: "#ea580c", fontWeight: 600, textDecoration: "none", border: "1px solid #fed7aa" }}>🎯 GetYourGuide</a>
                            </div>
                            {activity.tips && activity.tips.length > 0 && (
                              <div style={{ background: "rgba(42,181,160,0.08)", borderLeft: "3px solid #2ab5a0", borderRadius: "0 8px 8px 0", padding: "8px 12px" }}>
                                {activity.tips.map((tip: string, j: number) => (
                                  <p key={j} style={{ fontSize: "12px", color: "#374151", margin: 0 }}>💡 {tip}</p>
                                ))}
                              </div>
                            )}
                          </div>

                          {activity.media?.image_url && (
                            <div className="activity-card-photo" style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 24px 20px 8px", flexShrink: 0 }}>
                              <div className="activity-card-photo-inner"
                                style={{ transform: photoRotation(i), transition: "transform 0.3s ease", backgroundColor: "#fff", padding: "8px 8px 28px 8px", boxShadow: "3px 4px 20px rgba(26,42,108,0.22)", borderRadius: "2px", width: "210px", cursor: "pointer" }}
                                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.05)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = photoRotation(i); }}
                              >
                                <div style={{ position: "relative", width: "194px", height: "194px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
                                  <Image src={activity.media.image_url} alt={activity.place_name} fill style={{ objectFit: "cover" }} unoptimized />
                                </div>
                                <p style={{ textAlign: "center", fontSize: "10px", color: "#888", marginTop: "6px", fontFamily: "Georgia, serif", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                  {activity.place_name}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>

                        {i < day.activities.length - 1 && (
                          <TransportDivider transport={day.activities[i + 1].transport} accessNote={day.activities[i + 1].accessNote} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="no-print">
              <ShareButton destination={itinerary.destination || city} language={language} />
            </div>

            {allActivities.length > 0 && (
              <div className="no-print">
                <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>{t.mapTitle}</h2>
                <TravelMap activities={allActivities} language="en" accommodation={itineraryAccommodation} />
              </div>
            )}

            <div className="no-print">
              <FlightSearch destination={city} language={language} />
            </div>

            <div className="no-print">
              <InsuranceBanner language={language} />
            </div>

            <div className="no-print">
              <ServicesSection city={city} country={country} />
            </div>

            {cityCoords && (
              <div className="no-print">
                <DestinationInfo city={city} country={country} nationality={nationality || "Argentina"} language={language} latitude={cityCoords.lat} longitude={cityCoords.lon} onEmergencyNumbers={setEmergencyNumbers} />
              </div>
            )}

            <div className="no-print">
              <MedicalAssistance city={city} country={country} language={language} />
            </div>
            <div className="no-print">
              <SOSButton city={city} country={country} emergencyNumbers={emergencyNumbers} />
            </div>

          </div>
        )}
      </div>
    </>
  );
}
