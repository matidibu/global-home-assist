"use client";

import { useState, useEffect } from "react";

interface WeatherDay {
  date: string;
  max: number;
  min: number;
  code: number;
}

interface DestinationData {
  weather?: {
    current: { temp: number; humidity: number; windspeed: number; code: number };
    forecast: WeatherDay[];
  };
  currency?: { local_currency: string; symbol: string; exchange_tip: string };
  exchange_offices?: { name: string; address: string; tip: string }[];
  consulate?: { country: string; name: string; address: string; phone: string; website: string; note: string };
  hospitals?: { name: string; address: string; phone: string; type: string }[];
  police?: { name: string; address: string; phone: string }[];
  emergency_numbers?: { general: string; police: string; ambulance: string; fire: string };
  useful_tips?: string[];
}

function weatherIcon(code: number): string {
  if (code === 0) return "☀️";
  if (code <= 3) return "⛅";
  if (code <= 49) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "❄️";
  if (code <= 82) return "🌦️";
  if (code <= 99) return "⛈️";
  return "🌤️";
}

function weatherDesc(code: number): string {
  if (code === 0) return "Despejado";
  if (code <= 3) return "Parcialmente nublado";
  if (code <= 49) return "Niebla";
  if (code <= 67) return "Lluvia";
  if (code <= 77) return "Nieve";
  if (code <= 82) return "Chubascos";
  if (code <= 99) return "Tormenta";
  return "Variable";
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" });
}

interface Props {
  city: string;
  country: string;
  nationality: string;
  language: string;
  latitude: number;
  longitude: number;
}

export default function DestinationInfo({ city, country, nationality, language, latitude, longitude }: Props) {
  const [data, setData] = useState<DestinationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!city || !country || !latitude || !longitude) return;

    setLoading(true);
    setError(false);

    fetch("/api/destination-info", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ city, country, nationality, language, latitude, longitude }),
    })
      .then(r => r.json())
      .then(d => { setData(d); setLoading(false); })
      .catch(() => { setError(true); setLoading(false); });
  }, [city, country, nationality, language, latitude, longitude]);

  const cardStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.92)",
    backdropFilter: "blur(8px)",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    padding: "20px",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "15px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "12px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  };

  if (loading) return (
    <div style={{ ...cardStyle, textAlign: "center", color: "#9ca3af", padding: "32px" }}>
      <div style={{ fontSize: "24px", marginBottom: "8px" }}>🌍</div>
      Cargando información del destino...
    </div>
  );

  if (error || !data) return null;

  return (
    <div style={{
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      padding: "28px",
      marginTop: "2rem",
    }}>
      <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: "0 0 24px 0" }}>
        🌍 Información del destino — {city}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>

        {/* Clima */}
        {data.weather && (
          <div style={cardStyle}>
            <div style={titleStyle}>🌤️ Clima actual</div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ fontSize: "36px" }}>{weatherIcon(data.weather.current.code)}</span>
              <div>
                <div style={{ fontSize: "28px", fontWeight: 700, color: "#111827" }}>
                  {data.weather.current.temp}°C
                </div>
                <div style={{ fontSize: "13px", color: "#6b7280" }}>
                  {weatherDesc(data.weather.current.code)}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#6b7280", marginBottom: "14px" }}>
              <span>💧 {data.weather.current.humidity}%</span>
              <span>💨 {data.weather.current.windspeed} km/h</span>
            </div>
            {/* Pronóstico 3 días */}
            <div style={{ display: "flex", gap: "8px" }}>
              {data.weather.forecast.map((day, i) => (
                <div key={i} style={{
                  flex: 1,
                  textAlign: "center",
                  background: "#f9fafb",
                  borderRadius: "8px",
                  padding: "8px 4px",
                }}>
                  <div style={{ fontSize: "10px", color: "#9ca3af", marginBottom: "4px" }}>
                    {formatDate(day.date)}
                  </div>
                  <div style={{ fontSize: "18px" }}>{weatherIcon(day.code)}</div>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#374151" }}>{day.max}°</div>
                  <div style={{ fontSize: "11px", color: "#9ca3af" }}>{day.min}°</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Moneda y casas de cambio */}
        {data.currency && (
          <div style={cardStyle}>
            <div style={titleStyle}>💱 Moneda y cambio</div>
            <div style={{ marginBottom: "10px" }}>
              <span style={{ fontSize: "20px", fontWeight: 700, color: "#111827" }}>
                {data.currency.local_currency} ({data.currency.symbol})
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "#6b7280", marginBottom: "12px" }}>
              {data.currency.exchange_tip}
            </p>
            {data.exchange_offices?.map((office, i) => (
              <div key={i} style={{
                background: "#f9fafb",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "8px",
              }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>{office.name}</div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>📍 {office.address}</div>
                <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>{office.tip}</div>
              </div>
            ))}
          </div>
        )}

        {/* Consulado */}
        {data.consulate && (
          <div style={cardStyle}>
            <div style={titleStyle}>🏛️ Consulado / Embajada</div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "6px" }}>
              {data.consulate.name}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
              📍 {data.consulate.address}
            </div>
            <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "4px" }}>
              📞 {data.consulate.phone}
            </div>
            {data.consulate.website && data.consulate.website !== "https://example.com" && (
              <div
                onClick={() => window.open(data.consulate!.website, "_blank")}
                style={{ fontSize: "12px", color: "#2563eb", cursor: "pointer", marginBottom: "8px" }}
              >
                🌐 Sitio web oficial
              </div>
            )}
            <div style={{ fontSize: "11px", color: "#9ca3af", fontStyle: "italic" }}>
              {data.consulate.note}
            </div>
          </div>
        )}

        {/* Hospitales */}
        {data.hospitals && data.hospitals.length > 0 && (
          <div style={cardStyle}>
            <div style={titleStyle}>🏥 Hospitales</div>
            {data.hospitals.map((h, i) => (
              <div key={i} style={{
                background: "#f9fafb",
                borderRadius: "8px",
                padding: "10px",
                marginBottom: "8px",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>{h.name}</div>
                  <span style={{
                    fontSize: "10px",
                    background: h.type === "Public" || h.type === "Público" ? "#dcfce7" : "#fef3c7",
                    color: h.type === "Public" || h.type === "Público" ? "#166534" : "#92400e",
                    padding: "2px 6px",
                    borderRadius: "999px",
                  }}>
                    {h.type}
                  </span>
                </div>
                <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>📍 {h.address}</div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>📞 {h.phone}</div>
              </div>
            ))}
          </div>
        )}

        {/* Policía y emergencias */}
        {(data.police || data.emergency_numbers) && (
          <div style={cardStyle}>
            <div style={titleStyle}>🚨 Emergencias</div>

            {/* Números de emergencia */}
            {data.emergency_numbers && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginBottom: "14px",
              }}>
                {[
                  { label: "General", num: data.emergency_numbers.general, color: "#dc2626" },
                  { label: "Policía", num: data.emergency_numbers.police, color: "#1d4ed8" },
                  { label: "Ambulancia", num: data.emergency_numbers.ambulance, color: "#16a34a" },
                  { label: "Bomberos", num: data.emergency_numbers.fire, color: "#ea580c" },
                ].map((e, i) => (
                  <div key={i} style={{
                    background: "#f9fafb",
                    borderRadius: "8px",
                    padding: "8px",
                    textAlign: "center",
                  }}>
                    <div style={{ fontSize: "11px", color: "#9ca3af" }}>{e.label}</div>
                    <div style={{ fontSize: "18px", fontWeight: 700, color: e.color }}>{e.num}</div>
                  </div>
                ))}
              </div>
            )}

            {/* Comisaría */}
            {data.police?.map((p, i) => (
              <div key={i} style={{
                background: "#f9fafb",
                borderRadius: "8px",
                padding: "10px",
              }}>
                <div style={{ fontSize: "13px", fontWeight: 600, color: "#374151" }}>{p.name}</div>
                <div style={{ fontSize: "12px", color: "#6b7280", marginTop: "4px" }}>📍 {p.address}</div>
                <div style={{ fontSize: "12px", color: "#6b7280" }}>📞 {p.phone}</div>
              </div>
            ))}
          </div>
        )}

        {/* Tips útiles */}
        {data.useful_tips && data.useful_tips.length > 0 && (
          <div style={cardStyle}>
            <div style={titleStyle}>💡 Tips útiles</div>
            {data.useful_tips.map((tip, i) => (
              <div key={i} style={{
                display: "flex",
                gap: "8px",
                alignItems: "flex-start",
                marginBottom: "10px",
              }}>
                <span style={{ fontSize: "16px", flexShrink: 0 }}>✅</span>
                <span style={{ fontSize: "13px", color: "#374151" }}>{tip}</span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
