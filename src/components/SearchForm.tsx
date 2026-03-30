/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import CountryBackground from "@/components/CountryBackground";
import ServicesSection from "@/components/ServicesSection";
import DestinationInfo from "@/components/DestinationInfo";
import SOSButton from "@/components/SOSButton";
import MedicalAssistance from "@/components/MedicalAssistance";
import LegalDisclaimer from "@/components/LegalDisclaimer";
import InsuranceBanner from "@/components/InsuranceBanner";
import ShareButton from "@/components/ShareButton";
import { HomeBlogTeaser } from "@/components/HomeBlogTeaser";
import { QualityIndex } from "@/components/QualityIndex";
import { PremiumModal } from "@/components/PremiumModal";
import { Plane, Sparkles } from "lucide-react";
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
    termsAccept: "He leído y acepto los",
    termsLink: "Términos y Condiciones",
    termsAccept2: "Entiendo que el contenido es generado por inteligencia artificial, revisado por expertos, y puede contener información desactualizada o errónea.",
    fromCountry: "¿De dónde sos?",
    fromCountryPlaceholder: "Ej: Argentina",
    language: "Idioma del itinerario",
    tripType: "Tipo de viaje",
    tripTypeSelect: "Seleccionar",
    budget: "Presupuesto (USD)",
    budgetPlaceholder: "Ej: 1500",
    destination: "¿A qué ciudad querés ir?",
    interests: "Intereses",
    duration: "Duración",
    day: "día", days: "días",
    accommodation: "Hospedaje",
    accommodationOptional: "(si ya lo tenés, ingresalo aquí)",
    accommodationSearch: "Hotel / Hostel",
    accommodationAddress: "Dirección / Airbnb",
    accommodationHint: "Primero elegí la ciudad de destino",
    accommodationAddressHint: 'Ej: "Calle Mayor 15, Madrid"',
    generate: "Generar itinerario",
    generating: "Generando itinerario...",
    mapTitle: "Mapa del viaje",
    mustSee: "Imperdible",
    bestTime: "Mejor horario",
    official: "Sitio oficial",
    expertBadge: "Generado por IA · Validado por expertos en turismo",
    tripTypes: { placer:"Placer", negocios:"Negocios", aventura:"Aventura", familiar:"Familiar" },
    interestOptions: ["Cultura e Historia","Gastronomía","Aventura y Deportes","Naturaleza y Relax","Shopping","Vida nocturna"],
    interestValues: ["cultura, historia y arte","gastronomía","aventura y deportes","naturaleza y relax","shopping","vida nocturna"],
    flightFirstTip: "Buscá el vuelo antes de confirmar el hotel — es la estrategia que usan los mejores viajeros.",
    travelHacksTitle: "Travel Hacks para tu viaje",
    milesLabel: "Millas y puntos",
    proToolsTitle: "Herramientas de viajeros expertos",
  },
  en: {
    slogan: "Your trip, your world... our company.",
    termsAccept: "I have read and accept the",
    termsLink: "Terms and Conditions",
    termsAccept2: "I understand that content is AI-generated, reviewed by experts, and may contain outdated or inaccurate information.",
    fromCountry: "Where are you from?",
    fromCountryPlaceholder: "E.g: United States",
    language: "Itinerary language",
    tripType: "Trip type",
    tripTypeSelect: "Select",
    budget: "Budget (USD)",
    budgetPlaceholder: "E.g: 1500",
    destination: "Which city do you want to visit?",
    interests: "Interests",
    duration: "Duration",
    day: "day", days: "days",
    accommodation: "Accommodation",
    accommodationOptional: "(if you already have one, enter it here)",
    accommodationSearch: "Hotel / Hostel",
    accommodationAddress: "Address / Airbnb",
    accommodationHint: "First choose your destination city",
    accommodationAddressHint: 'E.g: "15 Main Street, Paris"',
    generate: "Generate itinerary",
    generating: "Generating itinerary...",
    mapTitle: "🗺️ Trip map",
    mustSee: "⭐ Must-see",
    bestTime: "Best time",
    official: "Official site",
    expertBadge: "AI-Generated · Validated by Tourism Experts",
    tripTypes: { placer:"Leisure", negocios:"Business", aventura:"Adventure", familiar:"Family" },
    interestOptions: ["Culture & History","Gastronomy","Adventure & Sports","Nature & Relax","Shopping","Nightlife"],
    interestValues: ["culture, history and art","gastronomy","adventure and sports","nature and relax","shopping","nightlife"],
    flightFirstTip: "Search for flights before booking your hotel — it's the strategy the smartest travelers use.",
    travelHacksTitle: "Travel Hacks for your trip",
    milesLabel: "Miles & points",
    proToolsTitle: "Expert traveler tools",
  },
  fr: {
    slogan: "Votre voyage, votre monde... notre compagnie.",
    termsAccept: "J'ai lu et j'accepte les",
    termsLink: "Conditions Générales",
    termsAccept2: "Je comprends que le contenu est généré par IA, revu par des experts, et peut contenir des informations inexactes ou obsolètes.",
    fromCountry: "D'où venez-vous ?",
    fromCountryPlaceholder: "Ex: France",
    language: "Langue de l'itinéraire",
    tripType: "Type de voyage",
    tripTypeSelect: "Sélectionner",
    budget: "Budget (USD)",
    budgetPlaceholder: "Ex: 1500",
    destination: "Quelle ville voulez-vous visiter ?",
    interests: "Intérêts",
    duration: "Durée",
    day: "jour", days: "jours",
    accommodation: "Hébergement",
    accommodationOptional: "(si vous en avez déjà un, entrez-le ici)",
    accommodationSearch: "Hôtel / Hostel",
    accommodationAddress: "Adresse / Airbnb",
    accommodationHint: "Choisissez d'abord la ville",
    accommodationAddressHint: 'Ex: "15 rue de Rivoli, Paris"',
    generate: "Générer l'itinéraire",
    generating: "Génération en cours...",
    mapTitle: "🗺️ Carte du voyage",
    mustSee: "⭐ Incontournable",
    bestTime: "Meilleur moment",
    official: "Site officiel",
    expertBadge: "Généré par IA · Validé par des experts en voyage",
    tripTypes: { placer:"Loisirs", negocios:"Affaires", aventura:"Aventure", familiar:"Famille" },
    interestOptions: ["Culture & Histoire","Gastronomie","Aventure & Sports","Nature & Détente","Shopping","Vie nocturne"],
    interestValues: ["culture, histoire et art","gastronomie","aventure et sports","nature et détente","shopping","vie nocturne"],
    flightFirstTip: "Recherchez les vols avant de confirmer l'hôtel — c'est la stratégie des meilleurs voyageurs.",
    travelHacksTitle: "Travel Hacks pour votre voyage",
    milesLabel: "Miles et points",
    proToolsTitle: "Outils des voyageurs experts",
  },
  it: {
    slogan: "Il tuo viaggio, il tuo mondo... la nostra compagnia.",
    termsAccept: "Ho letto e accetto i",
    termsLink: "Termini e Condizioni",
    termsAccept2: "Comprendo che il contenuto è generato dall'IA, revisionato da esperti, e può contenere informazioni imprecise o non aggiornate.",
    fromCountry: "Da dove vieni?",
    fromCountryPlaceholder: "Es: Italia",
    language: "Lingua dell'itinerario",
    tripType: "Tipo di viaggio",
    tripTypeSelect: "Seleziona",
    budget: "Budget (USD)",
    budgetPlaceholder: "Es: 1500",
    destination: "Quale città vuoi visitare?",
    interests: "Interessi",
    duration: "Durata",
    day: "giorno", days: "giorni",
    accommodation: "Alloggio",
    accommodationOptional: "(se hai già un alloggio, inseriscilo qui)",
    accommodationSearch: "Hotel / Hostel",
    accommodationAddress: "Indirizzo / Airbnb",
    accommodationHint: "Prima scegli la città",
    accommodationAddressHint: 'Es: "Via Roma 15, Roma"',
    generate: "Genera itinerario",
    generating: "Generazione in corso...",
    mapTitle: "🗺️ Mappa del viaggio",
    mustSee: "⭐ Da non perdere",
    bestTime: "Orario migliore",
    official: "Sito ufficiale",
    expertBadge: "Generato da IA · Validato da esperti di viaggio",
    tripTypes: { placer:"Piacere", negocios:"Affari", aventura:"Avventura", familiar:"Famiglia" },
    interestOptions: ["Cultura e Storia","Gastronomia","Avventura e Sport","Natura e Relax","Shopping","Vita notturna"],
    interestValues: ["cultura, storia e arte","gastronomia","avventura e sport","natura e relax","shopping","vita notturna"],
    flightFirstTip: "Cerca i voli prima di confermare l'hotel — è la strategia dei viaggiatori più intelligenti.",
    travelHacksTitle: "Travel Hacks per il tuo viaggio",
    milesLabel: "Miglia e punti",
    proToolsTitle: "Strumenti dei viaggiatori esperti",
  },
  de: {
    slogan: "Ihre Reise, Ihre Welt... unsere Begleitung.",
    termsAccept: "Ich habe die",
    termsLink: "Allgemeinen Geschäftsbedingungen",
    termsAccept2: "gelesen und akzeptiere sie. Mir ist bewusst, dass der Inhalt KI-generiert, von Experten geprüft und möglicherweise ungenau ist.",
    fromCountry: "Woher kommen Sie?",
    fromCountryPlaceholder: "z.B: Deutschland",
    language: "Sprache des Reiseplans",
    tripType: "Reiseart",
    tripTypeSelect: "Auswählen",
    budget: "Budget (USD)",
    budgetPlaceholder: "z.B: 1500",
    destination: "Welche Stadt möchten Sie besuchen?",
    interests: "Interessen",
    duration: "Dauer",
    day: "Tag", days: "Tage",
    accommodation: "Unterkunft",
    accommodationOptional: "(falls bereits gebucht, hier eingeben)",
    accommodationSearch: "Hotel / Hostel",
    accommodationAddress: "Adresse / Airbnb",
    accommodationHint: "Wählen Sie zuerst die Zielstadt",
    accommodationAddressHint: 'z.B: "Hauptstraße 15, Berlin"',
    generate: "Reiseplan erstellen",
    generating: "Wird erstellt...",
    mapTitle: "🗺️ Reisekarte",
    mustSee: "⭐ Sehenswert",
    bestTime: "Beste Zeit",
    official: "Offizielle Website",
    expertBadge: "KI-generiert · Von Reiseexperten validiert",
    tripTypes: { placer:"Urlaub", negocios:"Geschäft", aventura:"Abenteuer", familiar:"Familie" },
    interestOptions: ["Kultur & Geschichte","Gastronomie","Abenteuer & Sport","Natur & Entspannung","Shopping","Nachtleben"],
    interestValues: ["kultur, geschichte und kunst","gastronomie","abenteuer und sport","natur und entspannung","shopping","nachtleben"],
    flightFirstTip: "Suchen Sie zuerst nach Flügen, bevor Sie das Hotel buchen — die Strategie der klügsten Reisenden.",
    travelHacksTitle: "Travel Hacks für Ihre Reise",
    milesLabel: "Meilen & Punkte",
    proToolsTitle: "Tools für erfahrene Reisende",
  },
  pt: {
    slogan: "Sua viagem, seu mundo... nossa companhia.",
    termsAccept: "Li e aceito os",
    termsLink: "Termos e Condições",
    termsAccept2: "Entendo que o conteúdo é gerado por IA, revisado por especialistas, e pode conter informações desatualizadas ou imprecisas.",
    fromCountry: "De onde você é?",
    fromCountryPlaceholder: "Ex: Brasil",
    language: "Idioma do itinerário",
    tripType: "Tipo de viagem",
    tripTypeSelect: "Selecionar",
    budget: "Orçamento (USD)",
    budgetPlaceholder: "Ex: 1500",
    destination: "Qual cidade você quer visitar?",
    interests: "Interesses",
    duration: "Duração",
    day: "dia", days: "dias",
    accommodation: "Hospedagem",
    accommodationOptional: "(se já tem, insira aqui)",
    accommodationSearch: "Hotel / Hostel",
    accommodationAddress: "Endereço / Airbnb",
    accommodationHint: "Primeiro escolha a cidade",
    accommodationAddressHint: 'Ex: "Rua Augusta 15, Lisboa"',
    generate: "Gerar itinerário",
    generating: "Gerando itinerário...",
    mapTitle: "🗺️ Mapa da viagem",
    mustSee: "⭐ Imperdível",
    bestTime: "Melhor horário",
    official: "Site oficial",
    expertBadge: "Gerado por IA · Validado por especialistas em viagens",
    tripTypes: { placer:"Lazer", negocios:"Negócios", aventura:"Aventura", familiar:"Família" },
    interestOptions: ["Cultura e História","Gastronomia","Aventura e Esportes","Natureza e Relax","Shopping","Vida noturna"],
    interestValues: ["cultura, história e arte","gastronomia","aventura e esportes","natureza e relax","shopping","vida noturna"],
    flightFirstTip: "Busque o voo antes de confirmar o hotel — é a estratégia dos viajantes mais inteligentes.",
    travelHacksTitle: "Travel Hacks para sua viagem",
    milesLabel: "Milhas e pontos",
    proToolsTitle: "Ferramentas de viajantes experientes",
  },
};

// ===== URL SHARING HELPERS =====
// Uses URL-safe base64 (no +, /, = chars that break WhatsApp links)
function encodeShareData(data: object): string {
  const json = JSON.stringify(data);
  const bytes = new TextEncoder().encode(json);
  let binStr = '';
  bytes.forEach(b => (binStr += String.fromCharCode(b)));
  return btoa(binStr).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function decodeShareData(encoded: string): Record<string, any> | null {
  try {
    const base64 = encoded.replace(/-/g, '+').replace(/_/g, '/');
    const padded = base64 + '=='.slice(0, (4 - base64.length % 4) % 4);
    const binStr = atob(padded);
    const bytes = new Uint8Array(binStr.length);
    for (let i = 0; i < binStr.length; i++) bytes[i] = binStr.charCodeAt(i);
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch { return null; }
}

function stripMediaFromItinerary(itinerary: any): any {
  if (!itinerary?.days) return itinerary;
  return {
    ...itinerary,
    days: itinerary.days.map((day: any) => ({
      ...day,
      activities: day.activities.map(({ media: _media, ...rest }: any) => rest),
    })),
  };
}
// ===== END SHARING HELPERS =====

function buildAffiliateLinks(city: string, country: string) {
  if (!city) return { getyourguide: "#" };
  const cityNorm = city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const countryNorm = (country || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const isCityState = cityNorm === countryNorm;
  // Special cases where the plain name is ambiguous in GYG's search
  const GYG_OVERRIDES: Record<string, string> = {
    monaco: "Mónaco principality",
  };
  const qualifier = GYG_OVERRIDES[cityNorm] ?? (isCityState ? `${city} principality` : `${city} ${country}`);
  const q = encodeURIComponent(qualifier);
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
        {isFromHotel && (
          <span style={{
            fontSize: "12px", color: "#6d28d9", fontWeight: 700,
            background: "rgba(237,233,254,0.9)", border: "1px solid #c4b5fd",
            borderRadius: "100px", padding: "3px 10px",
            display: "flex", alignItems: "center", gap: "5px",
          }}>
            🏨 {accommodationName}
          </span>
        )}
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
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const [cityCoords, setCityCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [emergencyNumbers, setEmergencyNumbers] = useState<any>(null);
  const [accommodationName, setAccommodationName] = useState("");
  const [accommodationCoords, setAccommodationCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [accommodationMode, setAccommodationMode] = useState<"search" | "address">("search");
  const [accommodationTyped, setAccommodationTyped] = useState("");
  const [planeAnimKey, setPlaneAnimKey] = useState(0);
  const [showPremium, setShowPremium] = useState(false);
  const [shareUrl, setShareUrl] = useState('');
  const [formKey, setFormKey] = useState(0);

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

  // ===== PRE-FILL: destination from ?city= ?country= URL params (blog CTAs) =====
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const preCity = params.get('city');
    const preCountry = params.get('country');
    if (preCity) setCity(preCity);
    if (preCountry) setCountry(preCountry);
  }, []);

  // ===== DECODE: restore itinerary from ?s= query param on mount =====
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const encoded = params.get('s');
    if (!encoded) return;
    const data = decodeShareData(encoded);
    if (!data?.itinerary?.days) return;
    setCity(data.city || '');
    setCountry(data.country || '');
    setLanguage(data.language || 'es');
    setItinerary(data.itinerary);
    // Derive cityCoords from activity coordinates
    const acts = data.itinerary.days
      .flatMap((d: any) => d.activities)
      .filter((a: any) => a.lat && a.lng);
    if (acts.length > 0) {
      const avgLat = acts.reduce((s: number, a: any) => s + a.lat, 0) / acts.length;
      const avgLon = acts.reduce((s: number, a: any) => s + a.lng, 0) / acts.length;
      setCityCoords({ lat: avgLat, lon: avgLon });
    }
  }, []);

  // ===== ENCODE: write itinerary to ?s= query param when generated =====
  useEffect(() => {
    if (!itinerary?.days) return;
    const shareData = { city, country, language, itinerary: stripMediaFromItinerary(itinerary) };
    const encoded = encodeShareData(shareData);
    const url = `${window.location.origin}${window.location.pathname}?s=${encoded}`;
    window.history.replaceState(null, '', url);
    setShareUrl(url);
  }, [itinerary, city, country, language]);

  // beforeprint/afterprint: hide photo containers before browser renders print preview
  useEffect(() => {
    const beforePrint = () => {
      document.querySelectorAll<HTMLElement>('.activity-card-photo').forEach(el => {
        el.style.display = 'none';
      });
      document.querySelectorAll<HTMLElement>('.activity-card').forEach(el => {
        el.style.minHeight = '0';
        el.style.display = 'block';
      });
    };
    const afterPrint = () => {
      document.querySelectorAll<HTMLElement>('.activity-card-photo').forEach(el => {
        el.style.display = '';
      });
      document.querySelectorAll<HTMLElement>('.activity-card').forEach(el => {
        el.style.minHeight = '';
        el.style.display = '';
      });
    };
    window.addEventListener('beforeprint', beforePrint);
    window.addEventListener('afterprint', afterPrint);
    return () => {
      window.removeEventListener('beforeprint', beforePrint);
      window.removeEventListener('afterprint', afterPrint);
    };
  }, []);

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
    setPlaneAnimKey(k => k + 1);
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
      if (!res.ok) { console.error("API error:", res.status); return; }
      const data = await res.json();
      if (!data?.days) { console.error("Invalid itinerary response:", data); return; }
      setItinerary(data);
      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead");
      }
    } catch (error) { console.error("Error:", error); }
    finally { setLoading(false); }
  }

  function resetSearch() {
    setItinerary(null);
    setCity("");
    setCountry("");
    setProvince("");
    setCityCoords(null);
    setFormKey(k => k + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      {showPremium && (
        <PremiumModal
          days={days}
          destination={city ? `${city}${country ? `, ${country}` : ""}` : ""}
          onClose={() => { setShowPremium(false); setDays(2); }}
        />
      )}
      <CountryBackground country={country} active={!!country} />

      <div className="main-container" style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 20px" }}>

        {/* ===== HEADER ===== */}
        {(loading || itinerary) ? (
          /* Mini-header: se muestra cuando hay itinerario en generación */
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "1.2rem",
            padding: "10px 18px",
            background: "rgba(8,16,54,0.88)",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
            border: "1px solid rgba(255,255,255,0.11)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}>
            <img
              src="/logo.svg"
              alt="Global Home Assist"
              onClick={resetSearch}
              title="Nueva búsqueda"
              style={{ height: "28px", width: "auto", flexShrink: 0, filter: "drop-shadow(0 2px 8px rgba(42,181,160,0.3))", cursor: "pointer" }}
            />
            {city && (
              <>
                <div style={{ width: "1px", height: "20px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
                <span style={{
                  fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.85)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>
                  {city}{country ? `, ${country}` : ""}
                </span>
              </>
            )}
            <button
              onClick={resetSearch}
              style={{
                marginLeft: "auto",
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px",
                padding: "5px 14px",
                fontSize: "12px", fontWeight: 600,
                color: "rgba(255,255,255,0.75)",
                cursor: "pointer",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                transition: "background 0.15s ease",
              }}
              onMouseEnter={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.14)"}
              onMouseLeave={e => (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)"}
            >
              ← Nueva búsqueda
            </button>
          </div>
        ) : (
          /* Header completo: solo visible antes de generar */
          <div className="pre-gen-header" style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "28px",
            marginBottom: "2.5rem",
            padding: "1.8rem 2.2rem",
            background: "rgba(8,16,54,0.82)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            border: "1px solid rgba(255,255,255,0.13)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.3)",
          }}>
            <img
              src="/logo.svg"
              alt="Global Home Assist"
              style={{
                width: "clamp(180px, 22vw, 240px)",
                height: "auto",
                flexShrink: 0,
                filter: "drop-shadow(0 4px 18px rgba(42,181,160,0.32))",
              }}
            />
            <div className="header-separator" style={{
              width: "1px", height: "110px",
              background: "rgba(255,255,255,0.14)",
              flexShrink: 0, alignSelf: "center",
            }}/>
            <div style={{ flex: 1, minWidth: "260px", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h1 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 3.5vw, 2.3rem)",
                fontWeight: 700, color: "white", margin: 0,
                lineHeight: 1.2, letterSpacing: "-0.01em",
                textShadow: "0 2px 16px rgba(0,0,0,0.4)",
              }}>
                Planificá tu viaje.{" "}
                <span style={{ color: "#2ab5a0" }}>Nosotros pensamos en todo.</span>
              </h1>
              <p style={{
                fontSize: "clamp(12px, 1.6vw, 14px)",
                color: "rgba(255,255,255,0.62)", margin: 0, lineHeight: 1.6,
                fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400,
              }}>
                Itinerario, vuelos, hoteles, actividades, seguros y más — con IA y expertos en turismo.
              </p>
              <div style={{
                display: "inline-flex", alignItems: "flex-start", gap: "10px",
                background: "rgba(42,181,160,0.10)",
                border: "1px solid rgba(42,181,160,0.35)",
                borderLeft: "3px solid #2ab5a0",
                borderRadius: "10px", padding: "9px 14px",
              }}>
                <span style={{ color: "#2ab5a0", fontSize: "15px", flexShrink: 0, lineHeight: 1.4 }}>✦</span>
                <div>
                  <p style={{ margin: 0, fontSize: "13px", fontWeight: 700, color: "white", lineHeight: 1.4 }}>
                    Cada recomendación, respaldada por quien ya estuvo ahí
                  </p>
                  <p style={{ margin: 0, fontSize: "11px", color: "rgba(255,255,255,0.58)", lineHeight: 1.4, marginTop: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    Inteligencia artificial con criterio de experto en turismo
                  </p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", alignItems: "center" }}>
                {["✓ Gratis", "✓ Sin registro", "✓ En tu idioma"].map(label => (
                  <span key={label} style={{
                    fontSize: "11px", fontWeight: 700,
                    color: "rgba(255,255,255,0.75)",
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: "999px", padding: "3px 11px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    letterSpacing: "0.04em",
                  }}>{label}</span>
                ))}
                <a href="/blog" style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "white", borderRadius: "100px",
                  padding: "5px 16px", fontSize: "12px", fontWeight: 800,
                  color: "#1a2a6c", textDecoration: "none",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                }}>
                  ✍️ Revista <span style={{ color: "#2ab5a0" }}>→</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* ===== FORMULARIO ===== */}
        {(loading || !itinerary) && <div key={formKey} style={{
          background: "rgba(255,255,255,0.93)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1.5px solid rgba(26,42,108,0.12)",
          boxShadow: "0 12px 40px rgba(26,42,108,0.16)",
          padding: "28px",
          marginBottom: "2.5rem",
        }}>
          {!loading && !itinerary && (<>
          {/* Ciudad destino */}
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
                <>
                  <p style={{ fontSize: "12px", color: "#2ab5a0", fontWeight: 600, marginTop: "8px" }}>
                    📍 {city}{province ? `, ${province}` : ""}, {country}
                  </p>
                  <div style={{ marginTop: "10px", padding: "9px 13px", background: "rgba(42,181,160,0.07)", borderRadius: "10px", borderLeft: "3px solid #2ab5a0" }}>
                    <p style={{ margin: 0, fontSize: "12px", color: "#374151", lineHeight: 1.5 }}>
                      <strong style={{ color: "#1a9985" }}>✈️ Pro tip:</strong> {t.flightFirstTip}
                    </p>
                  </div>
                </>
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

          {/* Checkbox de aceptación de términos */}
          <div style={{
            marginTop: "20px",
            padding: "14px 16px",
            background: "rgba(26,42,108,0.03)",
            border: "1px solid rgba(26,42,108,0.1)",
            borderRadius: "12px",
          }}>
            <label style={{
              display: "flex", alignItems: "flex-start", gap: "10px",
              cursor: "pointer", fontSize: "13px", color: "#374151",
              fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5,
            }}>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={e => setTermsAccepted(e.target.checked)}
                style={{ marginTop: "2px", accentColor: "#1a2a6c", flexShrink: 0, width: "15px", height: "15px", cursor: "pointer" }}
              />
              <span>
                {t.termsAccept}{" "}
                <a href="/terminos" target="_blank" rel="noopener noreferrer" style={{ color: "#1a2a6c", fontWeight: 700, textDecoration: "underline" }}>
                  {t.termsLink}
                </a>
                {". "}
                {t.termsAccept2}
              </span>
            </label>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "16px" }}>
            <button
              onClick={generateTrip}
              disabled={loading || !termsAccepted}
              className="btn-generate"
              style={{
                display: "inline-flex", alignItems: "center", gap: "10px",
                opacity: !termsAccepted ? 0.45 : 1,
                cursor: !termsAccepted ? "not-allowed" : "pointer",
              }}
            >
              <span key={planeAnimKey} className="plane-draw-icon">
                <Plane size={17} strokeWidth={2.2} />
              </span>
              {loading ? t.generating : t.generate}
            </button>
          </div>

          </>)}

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


          {/* Índice de calidad — solo visible cuando no hay itinerario generado */}
          {!itinerary && <QualityIndex />}

          {/* Blog teaser — solo visible cuando no hay itinerario generado */}
          {!itinerary && <HomeBlogTeaser />}

        </div>}


        {/* ===== ITINERARIO ===== */}
        {itinerary && itinerary.days && (
          <div className="print-area" style={{ display: "flex", flexDirection: "column", gap: "0" }}>

            {/* Cabecera solo visible al imprimir */}
            <div className="print-header" style={{ display: "none" }}>
              <span style={{ fontSize: "22px", fontWeight: 800, color: "#1a2a6c", fontFamily: "'Playfair Display', serif" }}>
                Global Home Assist
              </span>
              <span style={{ fontSize: "13px", color: "#6b7280", marginLeft: "auto" }}>
                global-home-assist.vercel.app
              </span>
            </div>

            {/* ===== PRINT-ONLY: itinerario texto puro ===== */}
            <div className="print-only-itinerary">
              <div style={{ fontFamily: "'Plus Jakarta Sans', Arial, sans-serif", color: "#111" }}>
                {itinerary.days.map((day: any, dayIndex: number) => (
                  <div key={dayIndex} style={{ marginBottom: "28px" }}>
                    <div style={{ borderBottom: "2px solid #1a2a6c", paddingBottom: "6px", marginBottom: "14px" }}>
                      <span style={{ background: "#1a2a6c", color: "white", padding: "4px 14px", borderRadius: "4px", fontWeight: 800, fontSize: "12px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                        {t.day.charAt(0).toUpperCase() + t.day.slice(1)} {day.day}
                      </span>
                      {day.theme && (
                        <span style={{ marginLeft: "12px", fontSize: "15px", fontWeight: 700, color: "#1a2a6c", fontFamily: "'Playfair Display', Georgia, serif" }}>
                          {day.theme}
                        </span>
                      )}
                    </div>
                    {day.activities.map((activity: any, i: number) => (
                      <div key={i} style={{ display: "flex", gap: "14px", padding: "10px 0", borderBottom: "1px solid #f0f0f0" }}>
                        <div style={{ minWidth: "22px", height: "22px", borderRadius: "50%", background: "#1a2a6c", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, flexShrink: 0, marginTop: "1px" }}>
                          {i + 1}
                        </div>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "3px" }}>
                            <span style={{ fontWeight: 800, fontSize: "13px", color: "#1a2a6c" }}>{activity.place_name}</span>
                            {activity.mustSee && <span style={{ fontSize: "9px", background: "#fef3c7", color: "#92400e", padding: "1px 6px", borderRadius: "999px", fontWeight: 700, border: "1px solid #fbbf24" }}>MUST SEE</span>}
                          </div>
                          {activity.short_description && (
                            <div style={{ fontSize: "11px", color: "#4b5563", lineHeight: 1.5, marginBottom: "4px" }}>{activity.short_description}</div>
                          )}
                          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", fontSize: "10px", color: "#6b7280" }}>
                            {activity.visit?.recommended_duration && <span>⏱ {activity.visit.recommended_duration}</span>}
                            {activity.visit?.best_time_to_visit && <span>🕐 {activity.visit.best_time_to_visit}</span>}
                            {activity.tickets?.price_estimate && <span style={{ color: "#1a2a6c", fontWeight: 700 }}>💰 {activity.tickets.price_estimate}</span>}
                          </div>
                          {activity.tips?.length > 0 && (
                            <div style={{ fontSize: "10px", color: "#2ab5a0", marginTop: "4px", fontStyle: "italic" }}>💡 {activity.tips[0]}</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* ===== FIN PRINT-ONLY ===== */}

            {/* ══════════════════════════════════════════════════════ */}
            {/* SECCIÓN 1 — ITINERARIO                                */}
            {/* ══════════════════════════════════════════════════════ */}
            <section id="sec-itinerario" className="no-print" style={{ scrollMarginTop: "16px", marginBottom: "40px" }}>

              {/* Sticky section nav */}
              <div style={{
                position: "sticky", top: 0, zIndex: 50,
                background: "rgba(8,16,54,0.97)",
                backdropFilter: "blur(16px)",
                borderRadius: "14px",
                padding: "10px 14px",
                display: "flex", gap: "6px", flexWrap: "wrap",
                boxShadow: "0 6px 24px rgba(0,0,0,0.3)",
                border: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "28px",
              }}>
                {[
                  { icon: "📅", label: "Itinerario", id: "sec-itinerario" },
                  ...(Array.isArray(itinerary.travelHacks) && itinerary.travelHacks.length > 0 ? [{ icon: "🧠", label: "Travel Hacks", id: "sec-hacks" }] : []),
                  { icon: "🔧", label: "Herramientas", id: "sec-tools" },
                  ...(allActivities.length > 0 ? [{ icon: "🗺️", label: "Mapa", id: "sec-mapa" }] : []),
                  { icon: "🏥", label: "Destino", id: "sec-destino" },
                ].map(({ icon, label, id }) => (
                  <button key={id} onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{
                    background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.18)",
                    borderRadius: "8px", padding: "6px 14px", color: "white",
                    fontSize: "12px", fontWeight: 600, cursor: "pointer",
                    display: "flex", alignItems: "center", gap: "5px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    transition: "background 0.15s ease",
                  }}>
                    {icon} {label}
                  </button>
                ))}
              </div>

              {/* Section header */}
              <div style={{
                display: "flex", alignItems: "center", gap: "14px",
                marginBottom: "20px",
                padding: "20px 24px",
                background: "rgba(255,255,255,0.96)",
                borderRadius: "18px",
                border: "1.5px solid rgba(26,42,108,0.1)",
                boxShadow: "0 2px 12px rgba(26,42,108,0.07)",
              }}>
                <div style={{
                  width: "48px", height: "48px", borderRadius: "14px",
                  background: "linear-gradient(135deg, #1a2a6c, #2563eb)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px", flexShrink: 0,
                }}>📅</div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#1a2a6c", margin: 0, fontWeight: 700 }}>
                    Tu Itinerario
                  </h2>
                  <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6b7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {itinerary.trip_duration_days} {itinerary.trip_duration_days === 1 ? t.day : t.days} en {itinerary.destination}{itinerary.country ? `, ${itinerary.country}` : ""}
                  </p>
                </div>
                {/* Quick day nav */}
                <div style={{ display: "flex", gap: "5px", flexWrap: "wrap", justifyContent: "flex-end", maxWidth: "340px" }}>
                  {itinerary.days.map((day: any) => (
                    <button key={day.day} onClick={() => document.getElementById(`dia-${day.day}`)?.scrollIntoView({ behavior: "smooth", block: "start" })} style={{
                      background: "rgba(26,42,108,0.07)", border: "1px solid rgba(26,42,108,0.15)",
                      borderRadius: "999px", padding: "4px 12px",
                      fontSize: "11px", fontWeight: 700, color: "#1a2a6c", cursor: "pointer",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>
                      {t.day.charAt(0).toUpperCase() + t.day.slice(1)} {day.day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Accommodation banner */}
              {itineraryAccommodationName && (
                <div style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  background: "linear-gradient(135deg, rgba(237,233,254,0.95), rgba(221,214,254,0.8))",
                  border: "1.5px solid #c4b5fd",
                  borderRadius: "16px",
                  padding: "16px 20px",
                  boxShadow: "0 4px 16px rgba(124,58,237,0.12)",
                  marginBottom: "20px",
                }}>
                  <div style={{
                    width: "42px", height: "42px", borderRadius: "12px",
                    background: "linear-gradient(135deg, #7c3aed, #9d5df0)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "20px", flexShrink: 0,
                  }}>🏨</div>
                  <div>
                    <p style={{ fontSize: "11px", fontWeight: 700, color: "#7c3aed", textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 3px 0" }}>Tu hospedaje base</p>
                    <p style={{ fontSize: "15px", fontWeight: 700, color: "#4c1d95", margin: 0 }}>{itineraryAccommodationName}</p>
                  </div>
                  <div style={{ marginLeft: "auto" }}>
                    <span style={{ fontSize: "11px", background: "rgba(124,58,237,0.12)", padding: "4px 10px", borderRadius: "100px", border: "1px solid rgba(124,58,237,0.25)", color: "#7c3aed", fontWeight: 600 }}>
                      Punto de partida de cada día
                    </span>
                  </div>
                </div>
              )}

              {/* Days */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {itinerary.days.map((day: any, dayIndex: number) => {
                  const links = buildAffiliateLinks(itinerary.destination || city || "", itinerary.country || country || "");
                  return (
                    <div
                      key={dayIndex}
                      id={`dia-${day.day}`}
                      className="print-day screen-only-day"
                      style={{
                        background: "white",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0 4px 24px rgba(26,42,108,0.1)",
                        border: "1.5px solid rgba(26,42,108,0.08)",
                        scrollMarginTop: "70px",
                      }}
                    >
                      {/* Day header — prominent dark bar */}
                      <div style={{
                        background: "linear-gradient(135deg, #1a2a6c 0%, #2563eb 100%)",
                        padding: "18px 24px",
                        display: "flex", alignItems: "center", gap: "18px",
                      }}>
                        <div style={{
                          background: "rgba(255,255,255,0.15)",
                          border: "2px solid rgba(255,255,255,0.3)",
                          borderRadius: "12px", padding: "8px 16px",
                          display: "flex", flexDirection: "column", alignItems: "center",
                          minWidth: "52px", flexShrink: 0,
                        }}>
                          <span style={{ fontSize: "9px", color: "rgba(255,255,255,0.75)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {t.day}
                          </span>
                          <span style={{ fontSize: "28px", color: "white", fontWeight: 900, lineHeight: 1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {day.day}
                          </span>
                        </div>
                        <div style={{ flex: 1 }}>
                          {day.theme && (
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", color: "white", margin: "0 0 4px", fontWeight: 700, lineHeight: 1.3 }}>
                              {day.theme}
                            </p>
                          )}
                          <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                            {day.activities.length} actividades
                          </p>
                        </div>
                      </div>

                      {/* Activities */}
                      <div style={{ padding: "8px 16px 16px" }}>
                        {day.activities.map((activity: any, i: number) => (
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
                                {activity.tickets?.price_estimate && activity.tickets.price_estimate !== 'Free' && activity.tickets.price_estimate !== 'Gratis' && activity.tickets.price_estimate !== '' && (
                                  <div className="no-print" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                                    <a href={links.getyourguide} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#fff7ed", color: "#ea580c", fontWeight: 600, textDecoration: "none", border: "1px solid #fed7aa" }}>🎯 Tours en {itinerary.destination}</a>
                                  </div>
                                )}
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
                                    <div style={{ width: "194px", height: "194px", overflow: "hidden", backgroundColor: "#f0f0f0" }}>
                                      {/* eslint-disable-next-line @next/next/no-img-element */}
                                      <img
                                        src={`/api/image-proxy?url=${encodeURIComponent(activity.media.image_url)}`}
                                        alt={activity.place_name}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                                        loading="eager"
                                      />
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
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ══════════════════════════════════════════════════════ */}
            {/* SECCIÓN 2 — TRAVEL HACKS                              */}
            {/* ══════════════════════════════════════════════════════ */}
            {Array.isArray(itinerary.travelHacks) && itinerary.travelHacks.length > 0 && (
              <section id="sec-hacks" className="no-print" style={{ scrollMarginTop: "16px", marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.96)", borderRadius: "18px", border: "1.5px solid rgba(13,148,136,0.15)", boxShadow: "0 2px 12px rgba(13,148,136,0.08)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #0d9488, #14b8a6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>🧠</div>
                  <div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#0d9488", margin: 0, fontWeight: 700 }}>{t.travelHacksTitle}</h2>
                    <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6b7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Estrategias para reducir costos en este viaje específico
                    </p>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "14px" }}>
                  {itinerary.travelHacks.map((hack: any, i: number) => (
                    <div key={i} style={{ background: "white", borderRadius: "16px", padding: "20px", border: "1.5px solid rgba(13,148,136,0.15)", boxShadow: "0 2px 12px rgba(13,148,136,0.07)" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
                        <span style={{ fontSize: "24px" }}>{hack.icon}</span>
                        <span style={{ fontSize: "10px", fontWeight: 800, color: "#0d9488", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{hack.category}</span>
                      </div>
                      <p style={{ fontSize: "13px", color: "#374151", lineHeight: 1.65, margin: "0 0 14px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{hack.tip}</p>
                      {hack.saving && (
                        <span style={{ fontSize: "11px", fontWeight: 700, color: "#0d9488", background: "rgba(13,148,136,0.08)", padding: "4px 12px", borderRadius: "999px", border: "1px solid rgba(13,148,136,0.2)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                          {hack.saving}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                {itinerary.milesOpportunity && (
                  <div style={{ marginTop: "14px", padding: "16px 18px", background: "rgba(124,58,237,0.05)", borderRadius: "14px", border: "1.5px solid rgba(124,58,237,0.18)", display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <span style={{ fontSize: "20px", flexShrink: 0 }}>🎫</span>
                    <p style={{ margin: 0, fontSize: "13px", color: "#4c1d95", lineHeight: 1.6, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      <strong>{t.milesLabel}:</strong> {itinerary.milesOpportunity}
                    </p>
                  </div>
                )}
              </section>
            )}

            {/* ══════════════════════════════════════════════════════ */}
            {/* SECCIÓN 3 — HERRAMIENTAS PRO                          */}
            {/* ══════════════════════════════════════════════════════ */}
            <section id="sec-tools" className="no-print" style={{ scrollMarginTop: "16px", marginBottom: "40px" }}>
              <div style={{
                background: "rgba(255,255,255,0.96)",
                borderRadius: "18px",
                border: "1.5px solid rgba(26,42,108,0.1)",
                boxShadow: "0 2px 12px rgba(26,42,108,0.06)",
                overflow: "hidden",
              }}>
                {/* Label integrado en el área */}
                <div style={{ padding: "16px 20px 12px", borderBottom: "1px solid rgba(26,42,108,0.07)", display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "16px" }}>🔧</span>
                  <span style={{ fontSize: "11px", fontWeight: 800, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {t.proToolsTitle}
                  </span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0", padding: "0" }}>
                  {[
                    { name: "Google Flights", icon: "✈️", url: "https://www.google.com/flights", desc: "Alertas de precio" },
                    { name: "Skyscanner", icon: "🔍", url: "https://www.skyscanner.com", desc: "Comparar aerolíneas" },
                    { name: "Kiwi.com", icon: "🥝", url: "https://www.kiwi.com", desc: "Vuelos combinados" },
                    { name: "TrustedHousesitters", icon: "🏠", url: "https://www.trustedhousesitters.com", desc: "Alojamiento gratis" },
                  ].map((tool, idx, arr) => (
                    <a key={tool.name} href={tool.url} target="_blank" rel="noopener noreferrer" style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      padding: "16px 18px",
                      background: "white",
                      borderRight: (idx + 1) % 2 === 1 ? "1px solid rgba(26,42,108,0.07)" : "none",
                      borderBottom: idx < arr.length - 2 ? "1px solid rgba(26,42,108,0.07)" : "none",
                      textDecoration: "none",
                      transition: "background 0.15s ease",
                    }}>
                      <span style={{ fontSize: "22px", flexShrink: 0 }}>{tool.icon}</span>
                      <div>
                        <p style={{ margin: 0, fontSize: "12px", fontWeight: 700, color: "#1a2a6c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{tool.name}</p>
                        <p style={{ margin: 0, fontSize: "11px", color: "#9ca3af", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{tool.desc}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="no-print" style={{
              background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
              borderRadius: "20px", padding: "36px 32px", textAlign: "center",
              boxShadow: "0 12px 40px rgba(26,42,108,0.3)",
              marginBottom: "40px",
            }}>
              <p style={{ fontSize: "28px", margin: "0 0 10px" }}>✈️</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", color: "white", margin: "0 0 10px", fontWeight: 700 }}>
                ¿Querés explorar otro destino?
              </h2>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13px", margin: "0 0 20px", lineHeight: 1.6 }}>
                Generá un nuevo itinerario personalizado — gratis, en segundos.
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
                  color: "white", padding: "13px 28px", borderRadius: "12px",
                  fontSize: "15px", fontWeight: 700, border: "none", cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(42,181,160,0.5)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}
              >
                <Sparkles size={16} /> Generá otro itinerario
              </button>
            </div>

            <div className="no-print" style={{ marginBottom: "40px" }}>
              <ShareButton destination={itinerary.destination || city} language={language} shareUrl={shareUrl} />
            </div>

            {/* ══════════════════════════════════════════════════════ */}
            {/* SECCIÓN 4 — MAPA                                       */}
            {/* ══════════════════════════════════════════════════════ */}
            {allActivities.length > 0 && (
              <section id="sec-mapa" className="no-print" style={{ scrollMarginTop: "16px", marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.96)", borderRadius: "18px", border: "1.5px solid rgba(37,99,235,0.15)", boxShadow: "0 2px 12px rgba(37,99,235,0.07)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #2563eb, #3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>🗺️</div>
                  <div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#1a2a6c", margin: 0, fontWeight: 700 }}>{t.mapTitle}</h2>
                    <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6b7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Todas las actividades georeferenciadas en {itinerary.destination}
                    </p>
                  </div>
                </div>
                <TravelMap activities={allActivities} language="en" accommodation={itineraryAccommodation} />
              </section>
            )}

            <div className="no-print" style={{ marginBottom: "40px" }}>
              <InsuranceBanner language={language} />
            </div>

            <div className="no-print" style={{ marginBottom: "40px" }}>
              <ServicesSection city={city} country={country} />
            </div>

            {/* ══════════════════════════════════════════════════════ */}
            {/* SECCIÓN 5 — INFO DEL DESTINO                          */}
            {/* ══════════════════════════════════════════════════════ */}
            {cityCoords && (
              <section id="sec-destino" className="no-print" style={{ scrollMarginTop: "16px", marginBottom: "40px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px", padding: "20px 24px", background: "rgba(255,255,255,0.96)", borderRadius: "18px", border: "1.5px solid rgba(220,38,38,0.15)", boxShadow: "0 2px 12px rgba(220,38,38,0.06)" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "14px", background: "linear-gradient(135deg, #dc2626, #ef4444)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>🏥</div>
                  <div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", color: "#1a2a6c", margin: 0, fontWeight: 700 }}>Información del destino</h2>
                    <p style={{ margin: "2px 0 0", fontSize: "12px", color: "#6b7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      Emergencias, salud, asistencia legal y consejos de seguridad
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <DestinationInfo city={city} country={country} province={province} nationality={nationality || "Argentina"} language={language} latitude={cityCoords.lat} longitude={cityCoords.lon} onEmergencyNumbers={setEmergencyNumbers} />
                  <MedicalAssistance city={city} country={country} language={language} />
                  <SOSButton city={city} country={country} emergencyNumbers={emergencyNumbers} />
                </div>
              </section>
            )}
            {!cityCoords && (
              <div className="no-print" style={{ marginBottom: "40px" }}>
                <MedicalAssistance city={city} country={country} language={language} />
                <SOSButton city={city} country={country} emergencyNumbers={emergencyNumbers} />
              </div>
            )}

          </div>
        )}

        <LegalDisclaimer language={language} />
      </div>
    </>
  );
}
