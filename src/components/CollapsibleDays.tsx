"use client";
import { useState } from "react";
import { Clock, Coins, Lightbulb, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import Link from "next/link";
import type { DestDay, DestActivity } from "@/data/destinationPages";

const AFFILIATE_GYG = "NGZASHD";
function gygLink(query: string) {
  return `https://www.getyourguide.com/s/?q=${encodeURIComponent(query)}&partner_id=${AFFILIATE_GYG}`;
}

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

function CollapsibleDay({ day, generatorUrl }: { day: DestDay; generatorUrl: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Day header — always visible, clickable */}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", textAlign: "left", cursor: "pointer",
          background: open ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.80)",
          border: `1.5px solid ${open ? "rgba(42,181,160,0.4)" : "rgba(26,42,108,0.12)"}`,
          borderRadius: "18px",
          padding: "18px 22px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
          boxShadow: open ? "0 6px 24px rgba(26,42,108,0.12)" : "0 2px 8px rgba(26,42,108,0.06)",
          transition: "all 0.2s ease",
          marginBottom: open ? "14px" : "0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{
            background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
            color: "white", padding: "5px 16px", borderRadius: "999px",
            fontSize: "11px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
            flexShrink: 0,
          }}>
            Día {day.day}
          </span>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem", color: "#1a2a6c", fontWeight: 700,
          }}>
            {day.theme}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", color: "#6b7280", display: open ? "none" : "block" }}>
            {day.activities.length} actividades
          </span>
          {open
            ? <ChevronUp size={18} style={{ color: "#2ab5a0" }} />
            : <ChevronDown size={18} style={{ color: "#6b7280" }} />
          }
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {day.activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}

interface Props {
  days: DestDay[];
  generatorUrl: string;
  city: string;
}

export default function CollapsibleDays({ days, generatorUrl, city }: Props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {days.map((day) => (
        <CollapsibleDay key={day.day} day={day} generatorUrl={generatorUrl} />
      ))}

      {/* Inline CTA after last collapsed day */}
      <div style={{
        background: "rgba(26,42,108,0.06)",
        border: "1.5px dashed rgba(26,42,108,0.2)",
        borderRadius: "16px",
        padding: "22px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
        marginTop: "8px",
      }}>
        <div>
          <p style={{ margin: "0 0 3px", fontSize: "14px", fontWeight: 700, color: "#1a2a6c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            ¿Querés un itinerario hecho a tu medida?
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#6b7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Personalizá días, tipo de viaje, presupuesto e intereses — gratis, en segundos.
          </p>
        </div>
        <Link href={generatorUrl} style={{
          display: "inline-flex", alignItems: "center", gap: "7px",
          background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
          color: "white", padding: "11px 22px", borderRadius: "12px",
          fontSize: "13px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 16px rgba(26,42,108,0.3)", whiteSpace: "nowrap",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          <Sparkles size={14} /> Generá para {city}
        </Link>
      </div>
    </div>
  );
}
