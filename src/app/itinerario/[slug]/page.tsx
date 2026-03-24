import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, Clock, ArrowLeft, Coins, Lightbulb } from "lucide-react";
import FlightSearch from "@/components/FlightSearch";
import InsuranceBanner from "@/components/InsuranceBanner";
import FloatingCTA from "@/components/FloatingCTA";
import CollapsibleDays from "@/components/CollapsibleDays";
import { getDestinationPage, getAllDestinationSlugs, type DestActivity } from "@/data/destinationPages";

const BASE_URL = "https://global-home-assist.vercel.app";
const AFFILIATE_GYG = "NGZASHD";

function gygLink(query: string) {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}&partner_id=${AFFILIATE_GYG}`;
}

// ─── Static params ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

// ─── Metadata ──────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dest = getDestinationPage(slug);
  if (!dest) return {};
  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
    keywords: dest.keywords,
    openGraph: {
      title: `${dest.emoji} ${dest.metaTitle}`,
      description: dest.metaDescription,
      url: `${BASE_URL}/itinerario/${dest.slug}`,
      type: "article",
    },
    alternates: {
      canonical: `${BASE_URL}/itinerario/${dest.slug}`,
    },
  };
}

// ─── Category styles ───────────────────────────────────────────────────────────
const CATEGORY_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  cultura:     { bg: "rgba(42,181,160,0.12)",  color: "#2ab5a0", label: "Cultura" },
  gastronomía: { bg: "rgba(251,191,36,0.15)",  color: "#d97706", label: "Gastronomía" },
  naturaleza:  { bg: "rgba(34,197,94,0.12)",   color: "#16a34a", label: "Naturaleza" },
  arte:        { bg: "rgba(168,85,247,0.12)",  color: "#9333ea", label: "Arte" },
  historia:    { bg: "rgba(59,130,246,0.12)",  color: "#2563eb", label: "Historia" },
  shopping:    { bg: "rgba(236,72,153,0.12)",  color: "#db2777", label: "Shopping" },
  aventura:    { bg: "rgba(249,115,22,0.12)",  color: "#ea580c", label: "Aventura" },
  relax:       { bg: "rgba(99,102,241,0.12)",  color: "#6366f1", label: "Relax" },
};

// ─── Activity card (server, used for days 1-2) ────────────────────────────────
function ActivityCard({ activity, index }: { activity: DestActivity; index: number }) {
  const cat = CATEGORY_STYLE[activity.category] ?? CATEGORY_STYLE.cultura;
  return (
    <div style={{
      background: "rgba(255,255,255,0.95)",
      border: "1.5px solid rgba(26,42,108,0.1)",
      borderRadius: "16px",
      padding: "20px 22px",
      boxShadow: "0 4px 16px rgba(26,42,108,0.08)",
    }}>
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
              {cat.label}
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
            🎯 Tours y entradas — GetYourGuide
          </a>
        </div>
      )}
    </div>
  );
}

// ─── Expanded day section (server, days 1-2) ──────────────────────────────────
function ExpandedDay({ day }: { day: { day: number; theme: string; activities: DestActivity[] } }) {
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <span style={{
          display: "inline-flex", alignItems: "center",
          background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
          color: "white", padding: "6px 20px", borderRadius: "999px",
          fontSize: "12px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
          boxShadow: "0 4px 12px rgba(26,42,108,0.3)", marginBottom: "8px",
        }}>
          Día {day.day}
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.35rem", color: "#1a2a6c", margin: "8px 0 0", fontWeight: 700,
        }}>
          {day.theme}
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {day.activities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} index={i} />
        ))}
      </div>
    </div>
  );
}

// ─── Inline CTA between days ──────────────────────────────────────────────────
function InlineCTA({ generatorUrl, city }: { generatorUrl: string; city: string }) {
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(42,181,160,0.12), rgba(26,42,108,0.08))",
      border: "1.5px solid rgba(42,181,160,0.3)",
      borderRadius: "16px",
      padding: "20px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
    }}>
      <div>
        <p style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 800, color: "#1a2a6c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          ¿Ya te imaginás ahí?
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#4b5563", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Generá tu versión personalizada con tus días, gustos y presupuesto.
        </p>
      </div>
      <Link href={generatorUrl} style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
        color: "white", padding: "11px 22px", borderRadius: "12px",
        fontSize: "13px", fontWeight: 700, textDecoration: "none",
        boxShadow: "0 4px 16px rgba(42,181,160,0.35)", whiteSpace: "nowrap",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <Sparkles size={14} /> Generá para {city} →
      </Link>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default async function DestinationItineraryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dest = getDestinationPage(slug);
  if (!dest) notFound();

  const generatorUrl = `/?city=${encodeURIComponent(dest.city)}&country=${encodeURIComponent(dest.countryCode)}`;

  // Split: days 1-2 expanded, days 3+ collapsible
  const expandedDays = dest.days.slice(0, 2);
  const collapsibleDays = dest.days.slice(2);

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f4ff 0%, #e8f7f5 100%)",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Floating CTA — appears after scrolling */}
      <FloatingCTA generatorUrl={generatorUrl} city={dest.city} />

      {/* ── Navbar ── */}
      <nav style={{
        background: "rgba(8,16,54,0.92)",
        backdropFilter: "blur(20px)",
        padding: "14px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Global Home Assist" style={{ height: "32px", width: "auto" }} />
        </Link>
        <Link href={generatorUrl} style={{
          background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
          color: "white", padding: "8px 20px", borderRadius: "10px",
          fontSize: "13px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 12px rgba(42,181,160,0.4)",
        }}>
          <Sparkles size={14} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />
          Generá tu itinerario
        </Link>
      </nav>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ── Back ── */}
        <Link href="/blog" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          color: "#6b7280", fontSize: "13px", textDecoration: "none", marginBottom: "28px",
        }}>
          <ArrowLeft size={14} /> Volver al blog de viajes
        </Link>

        {/* ── Hero ── */}
        <div style={{
          background: "linear-gradient(135deg, rgba(26,42,108,0.9), rgba(45,63,143,0.85))",
          borderRadius: "24px", padding: "40px 36px", marginBottom: "40px", color: "white",
          boxShadow: "0 12px 40px rgba(26,42,108,0.3)",
        }}>
          <div style={{ fontSize: "56px", marginBottom: "16px", lineHeight: 1 }}>{dest.emoji}</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2,
          }}>
            {dest.heroTitle}
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", margin: "0 0 24px", lineHeight: 1.6 }}>
            {dest.heroSubtitle}
          </p>

          {/* Quick-scan summary of all days */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
            {dest.days.map(d => (
              <span key={d.day} style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "999px", padding: "5px 14px",
                fontSize: "12px", fontWeight: 600,
              }}>
                Día {d.day} — {d.theme.split(":")[0].split("—")[0].trim()}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
            {[`📅 ${dest.totalDays} días`, `💰 ${dest.budget}`, `☀️ ${dest.bestMonths}`].map(tag => (
              <span key={tag} style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px", padding: "5px 14px", fontSize: "12px", fontWeight: 600,
              }}>{tag}</span>
            ))}
          </div>

          <Link href={generatorUrl} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
            color: "white", padding: "13px 28px", borderRadius: "12px",
            fontSize: "15px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 6px 20px rgba(42,181,160,0.5)",
          }}>
            <Sparkles size={16} />
            Generá tu itinerario personalizado gratis
          </Link>
        </div>

        {/* ── Days 1-2: expanded ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "32px" }}>
          {expandedDays.map((day) => (
            <ExpandedDay key={day.day} day={day} />
          ))}
        </div>

        {/* ── Inline CTA after day 2 ── */}
        <div style={{ marginBottom: "32px" }}>
          <InlineCTA generatorUrl={generatorUrl} city={dest.city} />
        </div>

        {/* ── Flight search — users are in "I want to go" mode here ── */}
        <div style={{ marginBottom: "32px" }}>
          <FlightSearch destination={dest.city} language="es" />
        </div>

        {/* ── Days 3+: collapsible ── */}
        {collapsibleDays.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <p style={{
              fontSize: "13px", color: "#6b7280", fontWeight: 600,
              marginBottom: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              📋 {collapsibleDays.length} días más — expandí para ver el detalle
            </p>
            <CollapsibleDays days={collapsibleDays} generatorUrl={generatorUrl} city={dest.city} />
          </div>
        )}

        {/* ── Travel tips ── */}
        <div style={{
          background: "rgba(255,255,255,0.92)",
          border: "1.5px solid rgba(26,42,108,0.1)",
          borderRadius: "20px", padding: "28px 32px",
          boxShadow: "0 4px 20px rgba(26,42,108,0.08)",
          marginBottom: "32px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem", color: "#1a2a6c", margin: "0 0 18px",
          }}>
            💡 Consejos prácticos para {dest.city}
          </h2>
          <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {dest.travelTips.map((tip, i) => (
              <li key={i} style={{ fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* ── GYG banner ── */}
        <div style={{
          background: "linear-gradient(135deg, rgba(255,102,0,0.08), rgba(255,140,0,0.06))",
          border: "1.5px solid rgba(255,102,0,0.25)",
          borderRadius: "20px", padding: "28px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap",
          marginBottom: "32px",
        }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: 800, color: "#ea580c" }}>
              🎯 Tours y experiencias en {dest.city}
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
              Entradas sin fila, tours guiados y experiencias únicas.
            </p>
          </div>
          <a
            href={gygLink(dest.gygCity)}
            target="_blank" rel="noopener noreferrer sponsored"
            style={{
              background: "#ff6600", color: "white",
              padding: "12px 24px", borderRadius: "12px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(255,102,0,0.35)", whiteSpace: "nowrap",
            }}
          >
            Ver tours disponibles →
          </a>
        </div>

        {/* ── Insurance ── */}
        <div style={{ marginBottom: "48px" }}>
          <InsuranceBanner language="es" />
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{
          background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
          borderRadius: "24px", padding: "40px 36px", textAlign: "center",
          boxShadow: "0 12px 40px rgba(26,42,108,0.3)",
        }}>
          <p style={{ fontSize: "28px", margin: "0 0 12px" }}>✈️</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem", color: "white", margin: "0 0 12px", fontWeight: 700,
          }}>
            ¿Querés un itinerario a tu medida?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", margin: "0 0 24px", lineHeight: 1.6 }}>
            Personalizá destino, días, tipo de viaje, presupuesto e intereses — con fotos reales, mapa interactivo y búsqueda de vuelos.
          </p>
          <Link href={generatorUrl} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
            color: "white", padding: "14px 32px", borderRadius: "14px",
            fontSize: "16px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 6px 24px rgba(42,181,160,0.5)",
          }}>
            <Sparkles size={18} />
            Generá tu itinerario para {dest.city}
          </Link>
        </div>

      </div>
    </div>
  );
}
