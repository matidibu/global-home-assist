"use client";

import { useState } from "react";
import { CityAutocomplete, CitySelection } from "@/components/CityAutocomplete";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

interface CostCategory {
  range: string;
  note: string;
}

interface CostEstimate {
  categories: {
    alojamiento: CostCategory;
    comida: CostCategory;
    transporte_local: CostCategory;
    actividades: CostCategory;
  };
  total_estimate: { range: string; per_day_per_person: string };
  saving_tips: string[];
}

const STYLES = [
  { value: "mochilero", label: "Mochilero", emoji: "🎒" },
  { value: "medio", label: "Medio", emoji: "🧳" },
  { value: "confort", label: "Confort", emoji: "✨" },
];

const CATEGORY_LABELS: Record<keyof CostEstimate["categories"], { label: string; emoji: string }> = {
  alojamiento: { label: "Alojamiento", emoji: "🏨" },
  comida: { label: "Comida", emoji: "🍽️" },
  transporte_local: { label: "Transporte local", emoji: "🚌" },
  actividades: { label: "Actividades", emoji: "🎟️" },
};

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "13px", fontWeight: 700,
  color: "#1a2a6c", marginBottom: "6px", letterSpacing: "0.02em",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

export function CalculadoraCostosTool() {
  const [language] = useAutoLanguage();
  const [selection, setSelection] = useState<CitySelection | null>(null);
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(1);
  const [style, setStyle] = useState("medio");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [estimate, setEstimate] = useState<CostEstimate | null>(null);

  async function handleEstimate() {
    if (!selection) { setError("Elegí un destino primero."); return; }
    setLoading(true);
    setError("");
    setEstimate(null);
    try {
      const res = await fetch("/api/estimate-cost", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city: selection.city,
          country: selection.country,
          province: selection.province,
          days,
          style,
          travelers,
          language,
        }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setEstimate(data);
    } catch {
      setError("No se pudo estimar el costo. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 80px" }}>
      <div style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "18px",
        padding: "28px",
        marginBottom: "32px",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "20px" }}>
          <div>
            <label style={labelStyle}>Destino</label>
            <CityAutocomplete
              language={language}
              placeholder="¿A dónde viajás?"
              onSelect={setSelection}
            />
          </div>
          <div>
            <label style={labelStyle}>Viajeros</label>
            <select value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} className="form-input">
              {[1, 2, 3, 4].map(n => (
                <option key={n} value={n}>{n}{n === 4 ? "+" : ""} {n === 1 ? "persona" : "personas"}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={labelStyle}>
            📅 Duración — <span style={{ color: "#2ab5a0" }}>{days} {days === 1 ? "día" : "días"}</span>
          </label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {[2, 3, 5, 7, 10, 14].map(d => (
              <button key={d} type="button" onClick={() => setDays(d)} style={{
                padding: "10px 16px", borderRadius: "10px", fontSize: "14px", fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: days === d ? "linear-gradient(135deg, #1a2a6c, #2d3f8f)" : "rgba(255,255,255,0.9)",
                color: days === d ? "white" : "#1a2a6c",
                border: `2px solid ${days === d ? "#1a2a6c" : "rgba(26,42,108,0.18)"}`,
                cursor: "pointer",
              }}>
                {d}
              </button>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={labelStyle}>Estilo de viaje</label>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {STYLES.map(s => (
              <button key={s.value} type="button" onClick={() => setStyle(s.value)} style={{
                padding: "10px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 600,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                background: style === s.value ? "linear-gradient(135deg, #1a2a6c, #2d3f8f)" : "rgba(255,255,255,0.9)",
                color: style === s.value ? "white" : "#1a2a6c",
                border: `2px solid ${style === s.value ? "#1a2a6c" : "rgba(26,42,108,0.18)"}`,
                cursor: "pointer",
              }}>
                {s.emoji} {s.label}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={handleEstimate}
          disabled={loading}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
            color: "white",
            border: "none",
            fontSize: "14px",
            fontWeight: 800,
            cursor: loading ? "default" : "pointer",
            opacity: loading ? 0.7 : 1,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          {loading ? "Calculando..." : "💰 Calcular presupuesto"}
        </button>
        {error && <p style={{ fontSize: "12.5px", color: "#fca5a5", margin: "10px 0 0 0" }}>{error}</p>}
      </div>

      {estimate && (
        <div style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(8px)",
          borderRadius: "16px",
          border: "1px solid #e5e7eb",
          padding: "28px",
        }}>
          <div style={{
            background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
            border: "1.5px solid #fbbf24",
            borderRadius: "14px",
            padding: "18px 22px",
            marginBottom: "20px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#92400e", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>
              Estimado total del viaje
            </div>
            <div style={{ fontSize: "28px", fontWeight: 800, color: "#78350f", fontFamily: "'Playfair Display', serif" }}>
              {estimate.total_estimate.range}
            </div>
            <div style={{ fontSize: "12px", color: "#b45309", marginTop: "4px" }}>
              ({estimate.total_estimate.per_day_per_person} por persona por día)
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginBottom: "20px" }}>
            {(Object.keys(estimate.categories) as (keyof CostEstimate["categories"])[]).map((key) => {
              const cat = estimate.categories[key];
              const meta = CATEGORY_LABELS[key];
              return (
                <div key={key} style={{ background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: "12px", padding: "14px 16px" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#374151", marginBottom: "4px" }}>
                    {meta.emoji} {meta.label}
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 800, color: "#1a2a6c", marginBottom: "4px" }}>
                    {cat.range}
                  </div>
                  <div style={{ fontSize: "11.5px", color: "#6b7280", lineHeight: 1.4 }}>
                    {cat.note}
                  </div>
                </div>
              );
            })}
          </div>

          {estimate.saving_tips?.length > 0 && (
            <div>
              <div style={{ fontSize: "12px", fontWeight: 700, color: "#374151", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Tips para ahorrar
              </div>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {estimate.saving_tips.map((tip, i) => (
                  <li key={i} style={{ fontSize: "13px", color: "#4b5563", lineHeight: 1.6, marginBottom: "4px" }}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
