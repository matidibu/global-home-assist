import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Plane, Sparkles, Clock, Coins, ArrowLeft, ChevronRight, Star } from "lucide-react";
import { searchPlaceImage } from "@/lib/imageSearch";
import FlightSearch from "@/components/FlightSearch";
import InsuranceBanner from "@/components/InsuranceBanner";
import ServicesSection from "@/components/ServicesSection";
import DestinationInfo from "@/components/DestinationInfo";
import MedicalAssistance from "@/components/MedicalAssistance";
import SOSButton from "@/components/SOSButton";
import BaliMap from "./BaliMap";

export const revalidate = 86400; // revalidar imágenes 1 vez por día

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Itinerario de 5 días en Bali, Indonesia",
  description:
    "Descubrí Bali en 5 días: terrazas de arroz de Tegallalang, templo de Tanah Lot, Ubud, Seminyak, Uluwatu y el volcán Batur. Itinerario completo generado con inteligencia artificial, con rutas, horarios, precios y consejos de viaje.",
  keywords: [
    "itinerario bali",
    "que hacer en bali",
    "bali 5 dias",
    "viaje bali indonesia",
    "bali guia de viaje",
    "bali itinerario completo",
    "bali lugares para visitar",
    "templos bali",
    "playas bali",
    "ubud bali",
  ],
  openGraph: {
    type: "article",
    title: "Itinerario de 5 días en Bali, Indonesia — Generado con IA",
    description:
      "Terrazas de arroz, templos hindúes, playas de surf y volcanes. El itinerario perfecto para descubrir Bali en 5 días.",
    url: `${BASE_URL}/itinerario/bali`,
    images: [
      {
        url: `${BASE_URL}/sky.jpg`,
        width: 1200,
        height: 630,
        alt: "Itinerario de 5 días en Bali, Indonesia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Itinerario de 5 días en Bali, Indonesia — Generado con IA",
    description:
      "Terrazas de arroz, templos hindúes, playas de surf y volcanes. El itinerario perfecto para descubrir Bali en 5 días.",
    images: [`${BASE_URL}/sky.jpg`],
  },
  alternates: {
    canonical: `${BASE_URL}/itinerario/bali`,
  },
};

// ─── Datos del itinerario ─────────────────────────────────────────────────────

const AFFILIATE_GYG = "NGZASHD";

function gygLink(place: string) {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(place + " Bali")}&partner_id=${AFFILIATE_GYG}`;
}

const itinerary = {
  days: [
    {
      day: 1,
      theme: "Ubud — El corazón espiritual de Bali",
      activities: [
        {
          name: "Terrazas de Arroz de Tegallalang",
          description:
            "Las terrazas de arroz en cascada más fotogénicas de Bali, esculpidas según el sistema de riego sagrado subak, declarado Patrimonio de la Humanidad por la UNESCO.",
          category: "Naturaleza",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Temprano en la mañana (antes de las 9:00)",
          price: "$2 USD",
          tip: "Llegá antes de las 8:00 para evitar el calor y los grupos de turistas y conseguir las mejores fotos.",
          transport: null,
          lat: -8.432, lng: 115.277,
        },
        {
          name: "Bosque de los Monos de Ubud",
          description:
            "Santuario natural en el corazón de Ubud donde cientos de macacos de cola larga conviven con templos hindúes centenarios entre la vegetación tropical.",
          category: "Naturaleza",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Media mañana",
          price: "$5 USD",
          tip: "No mostrés comida ni bolsas abiertas — los monos las van a tomar. Guardá todo bien cerrado en la mochila.",
          transport: { car: 20 },
          lat: -8.518, lng: 115.259,
        },
        {
          name: "Palacio Real de Ubud",
          description:
            "El histórico Puri Saren Agung, residencia de la familia real balinesa desde el siglo XIX, con arquitectura tradicional en el mismísimo centro del pueblo de Ubud.",
          category: "Cultura",
          mustSee: false,
          duration: "1 hora",
          bestTime: "Tarde · Noche (espectáculo de danza)",
          price: "Gratis",
          tip: "Por las noches hay espectáculos de danza kecak y legong en el patio del palacio — comprá las entradas al llegar.",
          transport: { walk: 8 },
          lat: -8.507, lng: 115.263,
        },
      ],
    },
    {
      day: 2,
      theme: "Templos sagrados del oeste de Bali",
      activities: [
        {
          name: "Jatiluwih — Terrazas de Arroz UNESCO",
          description:
            "Las terrazas de arroz más extensas y mejor conservadas de toda Bali, patrimonio UNESCO, mucho más tranquilas y auténticas que Tegallalang.",
          category: "Naturaleza",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Mañana",
          price: "$2 USD",
          tip: "Más tranquilo y menos turístico que Tegallalang. Llevá protector solar — hay muy poca sombra en los senderos.",
          transport: { car: 35 },
          lat: -8.366, lng: 115.131,
        },
        {
          name: "Pura Taman Ayun",
          description:
            "El templo real de Mengwi, rodeado de un foso de agua y jardines majestuosos, uno de los complejos hinduistas más importantes y mejor conservados de Bali.",
          category: "Templo",
          mustSee: true,
          duration: "1 hora",
          bestTime: "Media tarde",
          price: "$2 USD",
          tip: "Vestimenta obligatoria: sarong (tela balinesa) — te la prestan en la entrada si no tenés la tuya.",
          transport: { car: 40 },
          lat: -8.539, lng: 115.175,
        },
        {
          name: "Tanah Lot al atardecer",
          description:
            "El templo hindú más icónico de Bali, construido sobre una roca en el océano Índico. El atardecer aquí es uno de los más mágicos del sudeste asiático.",
          category: "Templo",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Atardecer (17:30 – 19:00)",
          price: "$4 USD",
          tip: "Llegá 1 hora antes del atardecer para conseguir buen lugar. En temporada alta puede estar muy concurrido.",
          transport: { car: 25 },
          lat: -8.621, lng: 115.086,
        },
      ],
    },
    {
      day: 3,
      theme: "Sur de Bali — Playas, surf y puestas de sol",
      activities: [
        {
          name: "GWK Cultural Park",
          description:
            "El Parque Cultural Garuda Wisnu Kencana, hogar de la estatua de 121 metros de Vishnu sobre el pájaro Garuda — la más alta de Indonesia — con espectáculos de danza incluidos.",
          category: "Cultura",
          mustSee: false,
          duration: "2 horas",
          bestTime: "Mañana",
          price: "$15 USD",
          tip: "La estatua tiene vistas al océano. Consultá el horario de los espectáculos de danza al comprar la entrada.",
          transport: { car: 40 },
          lat: -8.810, lng: 115.167,
        },
        {
          name: "Playa de Seminyak",
          description:
            "La playa más sofisticada de Bali, con beach clubs de diseño, restaurantes de primer nivel y una escena de atardecer incomparable junto al océano Índico.",
          category: "Playa",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Tarde",
          price: "Gratis",
          tip: "Los beach clubs de la zona (Potato Head, Ku De Ta) son ideales para el atardecer — reservá con anticipación en temporada alta.",
          transport: { car: 20 },
          lat: -8.687, lng: 115.156,
        },
        {
          name: "Canggu — Surf y café culture",
          description:
            "El barrio más trendy de Bali: playas de surf con olas perfectas para principiantes, cafés de especialidad y una vibrante escena de nómadas digitales.",
          category: "Playa",
          mustSee: false,
          duration: "2 horas",
          bestTime: "Tarde · Noche",
          price: "Gratis",
          tip: "Old Man's es el spot más popular de Canggu para tomar una cerveza con vista al mar al caer el sol.",
          transport: { car: 15 },
          lat: -8.651, lng: 115.130,
        },
      ],
    },
    {
      day: 4,
      theme: "Uluwatu — Acantilados, templos y danza kecak",
      activities: [
        {
          name: "Templo de Uluwatu",
          description:
            "Templo sagrado del siglo XI asentado en lo alto de un acantilado de 70 metros sobre el océano Índico, uno de los seis templos clave de Bali.",
          category: "Templo",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Tarde (para quedarse al atardecer)",
          price: "$4 USD",
          tip: "Cuidado con los monos al entrar — tienen especial afición por los anteojos de sol y los celulares.",
          transport: { car: 50 },
          lat: -8.830, lng: 115.085,
        },
        {
          name: "Playa de Padang Padang",
          description:
            "La pequeña playa paradisíaca escondida entre acantilados que se hizo famosa en la película 'Eat Pray Love', con aguas turquesa y arena blanca impecable.",
          category: "Playa",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Mediodía · Tarde temprana",
          price: "$1 USD",
          tip: "Se accede bajando una escalinata en la roca. Llevá calzado con agarre y poco equipaje — el paso es angosto.",
          transport: { walk: 15 },
          lat: -8.812, lng: 115.095,
        },
        {
          name: "Danza Kecak al atardecer — Uluwatu",
          description:
            "El espectáculo más impresionante de Bali: cien hombres entonando 'kecak' a cappella mientras el sol se hunde en el océano desde el anfiteatro natural del acantilado.",
          category: "Cultura",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "18:00 (exacto — no llegar tarde)",
          price: "$12 USD",
          tip: "Las entradas se agotan rápido — comprá en la boletería del templo al llegar por la tarde, antes de ir a la playa.",
          transport: { walk: 10 },
          lat: -8.829, lng: 115.083,
        },
      ],
    },
    {
      day: 5,
      theme: "Tierras altas — Tirta Empul y el volcán Batur",
      activities: [
        {
          name: "Tirta Empul — Templo del agua sagrada",
          description:
            "El templo de purificación más sagrado de Bali, con piscinas rituales de agua bendita donde los balineses se purifican en una ceremonia ancestral abierta a los visitantes.",
          category: "Templo",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Mañana temprano",
          price: "$3 USD",
          tip: "Podés participar de la purificación (melukat) — llevá ropa que se pueda mojar o alquilá sarong en la entrada por $1.",
          transport: { car: 30 },
          lat: -8.415, lng: 115.312,
        },
        {
          name: "Mirador del Volcán Batur — Kintamani",
          description:
            "Vistas panorámicas espectaculares del volcán activo Batur y su lago caldera desde las tierras altas de Kintamani, a 1.500 metros de altura.",
          category: "Naturaleza",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Mediodía (antes de que lleguen las nubes de la tarde)",
          price: "Gratis",
          tip: "Si querés subir al cráter del volcán, la caminata es desde las 4am — una experiencia única que vale el madrugón.",
          transport: { car: 35 },
          lat: -8.242, lng: 115.375,
        },
        {
          name: "Pueblo de Penglipuran",
          description:
            "Uno de los pueblos más limpios y mejor conservados del mundo, donde la arquitectura balinesa tradicional y las costumbres ancestrales se mantienen intactas hace siglos.",
          category: "Cultura",
          mustSee: false,
          duration: "1.5 horas",
          bestTime: "Tarde",
          price: "$2 USD",
          tip: "Los vehículos a motor están prohibidos dentro del pueblo. Es uno de los pocos lugares de Bali donde reina el silencio absoluto.",
          transport: { car: 25 },
          lat: -8.426, lng: 115.360,
        },
      ],
    },
  ],
};

// ─── Componente TransportDivider ─────────────────────────────────────────────

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

// ─── Página ───────────────────────────────────────────────────────────────────

export default async function BaliItineraryPage() {

  // Buscar todas las imágenes en paralelo con los 4 filtros existentes
  const allActivities = itinerary.days.flatMap((d) => d.activities);
  const imageUrls = await Promise.all(
    allActivities.map((a) =>
      searchPlaceImage(a.name, "Bali", a.category, a.lat, a.lng).catch(() => null)
    )
  );

  // Construir mapa name → imageUrl
  const imageMap: Record<string, string> = {};
  allActivities.forEach((a, i) => {
    if (imageUrls[i]) imageMap[a.name] = imageUrls[i] as string;
  });

  // Actividades en formato Activity para TravelMap
  const mapActivities = allActivities.map((a) => ({
    place_name: a.name,
    short_description: a.description,
    location: { latitude: a.lat, longitude: a.lng },
    visit: { recommended_duration: a.duration },
    tickets: { price_estimate: a.price },
    media: { image_url: imageMap[a.name] || "" },
  }));

  const photoRotation = (i: number) => i % 2 === 0 ? "rotate(2deg)" : "rotate(-1.5deg)";

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
              Generado con Inteligencia Artificial
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
            5 días en Bali, Indonesia
          </h1>
          <p style={{
            fontSize: "clamp(14px, 2.5vw, 17px)",
            color: "#2ab5a0",
            fontWeight: 600,
            margin: "0 0 16px 0",
            fontStyle: "italic",
          }}>
            La isla de los dioses, día por día
          </p>
          <p style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.75,
            maxWidth: "640px",
            margin: "0 auto",
          }}>
            Terrazas de arroz, templos hindúes entre la selva, playas de surf en Seminyak y Canggu,
            la danza kecak al atardecer en Uluwatu y la purificación sagrada en Tirta Empul.
            Este es un ejemplo real de itinerario generado por nuestra IA.
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
            { icon: "📅", label: "Duración", value: "5 días" },
            { icon: "💵", label: "Presupuesto", value: "$60–120 USD/día" },
            { icon: "🌤️", label: "Mejor época", value: "Mayo – Septiembre" },
            { icon: "💱", label: "Precios en", value: "USD (dólar)" },
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
              ¿Querés tu propio itinerario personalizado?
            </p>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", margin: 0 }}>
              Generá uno para cualquier destino · Gratis · Listo en 30 segundos
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
            <Plane size={15} strokeWidth={2.5} /> Generar el mío <ChevronRight size={14} />
          </Link>
        </div>

        {/* ─── ITINERARIO ─── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          {itinerary.days.map((day) => (
            <div key={day.day}>

              <div style={{ marginBottom: "20px" }}>
                <div className="day-badge">Día {day.day}</div>
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
                  const imgUrl = imageMap[activity.name] || null;
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
                                Imperdible
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
                              href={gygLink(activity.name)}
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
                              🎯 Ver tours en GetYourGuide
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
                                  unoptimized
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
          ))}
        </div>

        {/* ─── MAPA ─── */}
        <div>
          <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>
            🗺️ Mapa del viaje
          </h2>
          <BaliMap activities={mapActivities} />
        </div>

        {/* ─── VUELOS ─── */}
        <FlightSearch destination="Bali" language="es" />

        {/* ─── SEGURO ─── */}
        <InsuranceBanner language="es" />

        {/* ─── SERVICIOS ─── */}
        <ServicesSection city="Bali" country="Indonesia" />

        {/* ─── INFO DEL DESTINO ─── */}
        <DestinationInfo
          city="Bali"
          country="Indonesia"
          nationality="Argentina"
          language="es"
          latitude={-8.4095}
          longitude={115.1889}
        />

        {/* ─── ASISTENCIA MÉDICA ─── */}
        <MedicalAssistance city="Bali" country="Indonesia" language="es" />

        {/* ─── SOS ─── */}
        <SOSButton city="Bali" country="Indonesia" />

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
            Generá tu itinerario personalizado
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: "15px",
            margin: "0 0 28px 0",
            lineHeight: 1.6,
          }}>
            Este fue solo un ejemplo. Podés generar itinerarios para{" "}
            <strong style={{ color: "white" }}>cualquier destino del mundo</strong>,
            con tu tipo de viaje, tus intereses y tu hospedaje como punto de partida.
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
            Planificar mi viaje gratis
            <ChevronRight size={17} strokeWidth={2.5} />
          </Link>
          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "12px", margin: "14px 0 0 0" }}>
            Gratis · Sin registro · Resultado en 30 segundos
          </p>
        </div>

        {/* Links a otros destinos */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginBottom: "16px" }}>
            Explorá otros destinos
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
            {[
              { slug: "tokio", label: "⛩️ Tokio" },
              { slug: "bangkok", label: "🛺 Bangkok" },
              { slug: "dubai", label: "🏙️ Dubai" },
              { slug: "barcelona", label: "🏖️ Barcelona" },
              { slug: "cancun", label: "🏝️ Cancún" },
            ].map((d) => (
              <Link key={d.slug} href={`/destino/${d.slug}`} style={{
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
