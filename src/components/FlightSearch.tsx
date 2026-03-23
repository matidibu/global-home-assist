"use client";
import { useState } from "react";

const labels: Record<string, {
  title: string; subtitle: string; from: string; to: string;
  depart: string; returnLabel: string; pax: string; search: string; oneWay: string;
}> = {
  es: { title: "Buscá vuelos para tu viaje", subtitle: "Compará precios entre miles de aerolíneas", from: "Desde", to: "Hacia", depart: "Ida", returnLabel: "Vuelta", pax: "Pasajeros", search: "🔍 Buscar vuelos", oneWay: "Solo ida" },
  en: { title: "Search flights for your trip", subtitle: "Compare prices across thousands of airlines", from: "From", to: "To", depart: "Departure", returnLabel: "Return", pax: "Passengers", search: "🔍 Search flights", oneWay: "One way" },
  fr: { title: "Cherchez des vols pour votre voyage", subtitle: "Comparez les prix parmi des milliers de compagnies", from: "De", to: "Vers", depart: "Aller", returnLabel: "Retour", pax: "Passagers", search: "🔍 Rechercher", oneWay: "Aller simple" },
  it: { title: "Cerca voli per il tuo viaggio", subtitle: "Confronta prezzi tra migliaia di compagnie aeree", from: "Da", to: "A", depart: "Andata", returnLabel: "Ritorno", pax: "Passeggeri", search: "🔍 Cerca voli", oneWay: "Solo andata" },
  de: { title: "Flüge für Ihre Reise suchen", subtitle: "Preise tausender Fluggesellschaften vergleichen", from: "Von", to: "Nach", depart: "Hinflug", returnLabel: "Rückflug", pax: "Passagiere", search: "🔍 Flüge suchen", oneWay: "Nur Hinflug" },
  pt: { title: "Busque voos para a sua viagem", subtitle: "Compare preços em milhares de companhias aéreas", from: "De", to: "Para", depart: "Ida", returnLabel: "Volta", pax: "Passageiros", search: "🔍 Buscar voos", oneWay: "Só ida" },
};

const AVIASALES_URL = "https://aviasales.tpk.lu/746eClvU";

interface Props {
  destination: string;
  language: string;
}

export default function FlightSearch({ destination, language }: Props) {
  const lb = labels[language] || labels.es;
  const today = new Date().toISOString().split("T")[0];

  const [origin, setOrigin] = useState("");
  const [oneWay, setOneWay] = useState(false);
  const [depart, setDepart] = useState(today);
  const [returnDate, setReturnDate] = useState("");
  const [pax, setPax] = useState(1);

  const handleSearch = () => {
    window.open(AVIASALES_URL, "_blank", "noopener,noreferrer");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.3)",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    fontSize: "14px",
    outline: "none",
    boxSizing: "border-box",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "11px",
    opacity: 0.7,
    display: "block",
    marginBottom: "5px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "0.04em",
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #1a2a6c 0%, #2563eb 100%)",
      borderRadius: "20px",
      padding: "28px",
      color: "white",
    }}>
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 4px 0", fontFamily: "'Playfair Display', serif" }}>
          ✈️ {lb.title}
        </h2>
        <p style={{ fontSize: "12px", opacity: 0.65, margin: 0 }}>{lb.subtitle}</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "12px" }}>
        <div>
          <label style={labelStyle}>{lb.from}</label>
          <input
            type="text"
            value={origin}
            onChange={e => setOrigin(e.target.value)}
            placeholder="Buenos Aires"
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>{lb.to}</label>
          <input
            type="text"
            value={destination}
            readOnly
            style={{ ...inputStyle, background: "rgba(255,255,255,0.08)", cursor: "default" }}
          />
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: oneWay ? "1fr auto" : "1fr 1fr auto",
        gap: "12px",
        alignItems: "end",
        marginBottom: "16px",
      }}>
        <div>
          <label style={labelStyle}>{lb.depart}</label>
          <input type="date" value={depart} min={today} onChange={e => setDepart(e.target.value)} style={inputStyle} />
        </div>
        {!oneWay && (
          <div>
            <label style={labelStyle}>{lb.returnLabel}</label>
            <input type="date" value={returnDate} min={depart || today} onChange={e => setReturnDate(e.target.value)} style={inputStyle} />
          </div>
        )}
        <div>
          <label style={labelStyle}>{lb.pax}</label>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "rgba(255,255,255,0.15)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.3)", padding: "9px 14px" }}>
            <button onClick={() => setPax(p => Math.max(1, p - 1))} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "18px", lineHeight: 1, padding: 0 }}>−</button>
            <span style={{ fontSize: "14px", minWidth: "16px", textAlign: "center", fontWeight: 600 }}>{pax}</span>
            <button onClick={() => setPax(p => Math.min(9, p + 1))} style={{ background: "none", border: "none", color: "white", cursor: "pointer", fontSize: "18px", lineHeight: 1, padding: 0 }}>+</button>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <label style={{ display: "flex", alignItems: "center", gap: "7px", fontSize: "12px", opacity: 0.8, cursor: "pointer" }}>
          <input type="checkbox" checked={oneWay} onChange={e => setOneWay(e.target.checked)} style={{ cursor: "pointer", accentColor: "#2ab5a0" }} />
          {lb.oneWay}
        </label>
        <button
          onClick={handleSearch}
          style={{
            background: "white",
            color: "#1a2a6c",
            border: "none",
            borderRadius: "12px",
            padding: "12px 32px",
            fontSize: "14px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.03)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
            (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
          }}
        >
          {lb.search}
        </button>
      </div>
    </div>
  );
}
