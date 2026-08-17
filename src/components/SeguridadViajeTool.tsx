"use client";

import { useState } from "react";
import { CityAutocomplete, CitySelection } from "@/components/CityAutocomplete";
import DestinationInfo from "@/components/DestinationInfo";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

const labelStyle: React.CSSProperties = {
  display: "block", fontSize: "13px", fontWeight: 700,
  color: "#1a2a6c", marginBottom: "6px", letterSpacing: "0.02em",
  fontFamily: "'Plus Jakarta Sans', sans-serif",
};

export function SeguridadViajeTool() {
  const [language, setLanguage] = useAutoLanguage();
  const [selection, setSelection] = useState<CitySelection | null>(null);
  const [nationality, setNationality] = useState("Argentina");

  return (
    <div style={{ maxWidth: "720px", margin: "0 auto", padding: "0 24px 80px" }}>
      <div style={{
        background: "rgba(255,255,255,0.07)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "18px",
        padding: "28px",
        marginBottom: "32px",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "16px", marginBottom: "16px" }}>
          <div>
            <label style={labelStyle}>Destino</label>
            <CityAutocomplete
              language={language}
              placeholder="¿A dónde viajás?"
              onSelect={setSelection}
            />
          </div>
          <div>
            <label style={labelStyle}>Tu nacionalidad</label>
            <input
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="form-input"
              placeholder="Ej: Argentina"
            />
          </div>
          <div>
            <label style={labelStyle}>Idioma de la respuesta</label>
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-input">
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="de">Deutsch</option>
              <option value="pt">Português</option>
            </select>
          </div>
        </div>
        {!selection && (
          <p style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.5)", margin: 0 }}>
            Elegí una ciudad del listado para ver alertas de seguridad, salud, embajada y más.
          </p>
        )}
      </div>

      {selection && (
        <DestinationInfo
          city={selection.city}
          country={selection.country}
          province={selection.province}
          nationality={nationality || "Argentina"}
          language={language}
          latitude={selection.lat}
          longitude={selection.lon}
        />
      )}
    </div>
  );
}
