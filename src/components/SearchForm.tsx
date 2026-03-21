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

const TravelMap = dynamic(() => import("@/components/TravelMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "500px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.5)", color: "#6b7280", fontSize: "14px" }}>
      Cargando mapa...
    </div>
  ),
});

// ============================================================
// AFFILIATE IDs — reemplazá con tus IDs cuando los tengas
// ============================================================
const AFFILIATE = {
  getyourguide: "TUAID",
  viator: "TUAID",
  klook: "TUAID",
  tripadvisor: "TUAID",
  booking: "TUAID",
  skyscanner: "TUAID",
  rentalcars: "TUAID",
};

function buildAffiliateLinks(placeName: string, city: string, country: string) {
  const q = encodeURIComponent(`${placeName} ${city}`);
  return {
    getyourguide: `https://www.getyourguide.com/s/?q=${q}&partner_id=${AFFILIATE.getyourguide}`,
    viator: `https://www.viator.com/search/${encodeURIComponent(placeName)}?pid=${AFFILIATE.viator}&mcid=42383&medium=api`,
    klook: `https://www.klook.com/en-US/search/?q=${q}&aid=${AFFILIATE.klook}`,
    tripadvisor: `https://www.tripadvisor.com/Search?q=${q}`,
  };
}

function TransportDivider({ transport, accessNote, fromAccommodation, accommodationName }: {
  transport: any; accessNote?: string; fromAccommodation?: boolean; accommodationName?: string;
}) {
  if (!transport && !accessNote) return null;

  const allOptions = [
    { key: "walk", icon: "🚶" },
    { key: "bike", icon: "🚴" },
    { key: "car", icon: "🚗" },
    { key: "ferry", icon: "⛵" },
    { key: "flight", icon: "✈️" },
  ].filter(o => transport?.[o.key] != null && transport[o.key] > 0);

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  const isWater = transport?.ferry != null || transport?.flight != null;
  const isFromHotel = fromAccommodation && accommodationName;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "12px 8px" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(42,181,160,0.3))" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 }}>
        {isFromHotel && (
          <span style={{ fontSize: "11px", color: "#7c3aed", fontWeight: 600, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            🏨 Desde {accommodationName}
          </span>
        )}
        {allOptions.length > 0 && (
          <div className="transport-pill" style={{
            background: isWater ? "rgba(219,234,254,0.9)" : isFromHotel ? "rgba(237,233,254,0.9)" : "rgba(255,255,255,0.85)",
            border: `1.5px solid ${isWater ? "#93c5fd" : isFromHotel ? "#c4b5fd" : "rgba(42,181,160,0.3)"}`,
            backdropFilter: "blur(8px)",
          }}>
            {allOptions.map((o, idx) => (
              <span key={o.key} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {idx > 0 && <span style={{ color: "#d1d5db" }}>•</span>}
                <span style={{ fontSize: "15px" }}>{o.icon}</span>
                <span style={{ color: isWater ? "#1d4ed8" : isFromHotel ? "#6d28d9" : "#1a2a6c" }}>
                  {formatTime(transport[o.key])}
                </span>
              </span>
            ))}
          </div>
        )}
        {accessNote && (
          <span style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic" }}>🗺️ {accessNote}</span>
        )}
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
  const [cityCoords, setCityCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [emergencyNumbers, setEmergencyNumbers] = useState<any>(null);
  const [accommodationName, setAccommodationName] = useState("");
  const [accommodationCoords, setAccommodationCoords] = useState<{ lat: number; lon: number } | null>(null);
  const [accommodationMode, setAccommodationMode] = useState<"search" | "address">("search");
  const [accommodationTyped, setAccommodationTyped] = useState("");

  const autocompleteRef = useRef<GeocoderAutocomplete | null>(null);
  const accommodationRef = useRef<GeocoderAutocomplete | null>(null);

  useEffect(() => {
    const container = document.getElementById("autocomplete");
    if (!container) return;
    if (autocompleteRef.current) { container.innerHTML = ""; autocompleteRef.current = null; }
    const ac = new GeocoderAutocomplete(container, process.env.NEXT_PUBLIC_GEOAPIFY_KEY as string, { type: "city" });
    ac.on("select", (loc: any) => {
      setCity(loc.properties.city || loc.properties.name || "");
      setCountry(loc.properties.country || "");
      // Capturar provincia/estado para evitar confusiones geográficas
      setProvince(loc.properties.state || loc.properties.county || loc.properties.region || "");
      setCityCoords({ lat: loc.properties.lat, lon: loc.properties.lon });
      setAccommodationName(""); setAccommodationCoords(null); setAccommodationTyped("");
    });
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

    ac.on("input", (value: string) => {
      setAccommodationTyped(value);
      if (!value) { setAccommodationName(""); setAccommodationCoords(null); }
    });
    ac.on("select", (loc: any) => {
      const name = loc.properties.name || loc.properties.formatted || loc.properties.address_line1 || "";
      setAccommodationName(name); setAccommodationCoords({ lat: loc.properties.lat, lon: loc.properties.lon });
      setAccommodationTyped(name);
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
        if (result) {
          finalCoords = { lat: result.lat, lon: result.lon };
          finalName = result.name || accommodationTyped;
          setAccommodationCoords(finalCoords); setAccommodationName(finalName);
        }
      }
    }

    try {
      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city, country, province, nationality, language,
          tripType, interests, budget, days,
          accommodationCoords: finalCoords,
          accommodationName: finalName,
          accommodationMode,
        }),
      });
      const data = await res.json();
      setItinerary(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }

  const photoRotation = (i: number) => i % 2 === 0 ? "rotate(2deg)" : "rotate(-1.5deg)";
  const allActivities = itinerary?.days?.flatMap((day: any) => day.activities) ?? [];
  const itineraryAccommodation = itinerary?.accommodation;
  const itineraryAccommodationName = itineraryAccommodation?.name || accommodationName;

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: "13px", fontWeight: 600,
    color: "#1a2a6c", marginBottom: "6px", letterSpacing: "0.02em",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
  };

  return (
    <>
      <CountryBackground country={country} active={!!country} />

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "24px 20px" }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "2.5rem" }}>
          <Image src="/logo.png" alt="Global Home Assist" width={100} height={100} style={{ objectFit: "contain", flexShrink: 0, filter: "drop-shadow(0 4px 12px rgba(26,42,108,0.15))" }} />
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.6rem", fontWeight: 700, color: "#1a2a6c", margin: 0, lineHeight: 1.1 }}>
              Global Home Assist
            </h1>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#2ab5a0", marginTop: "6px", fontSize: "0.9rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              AI Powered Travel Planner
            </p>
          </div>
        </div>

        {/* Form */}
        <div style={{ background: "rgba(255,255,255,0.75)", backdropFilter: "blur(16px)", borderRadius: "24px", border: "1.5px solid rgba(255,255,255,0.6)", boxShadow: "0 8px 32px rgba(26,42,108,0.10)", padding: "28px", marginBottom: "2.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Nacionalidad</label>
              <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} className="form-input" placeholder="Ej: Argentina" />
            </div>
            <div>
              <label style={labelStyle}>Idioma</label>
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
              <label style={labelStyle}>Tipo de viaje</label>
              <select value={tripType} onChange={e => setTripType(e.target.value)} className="form-input">
                <option value="">Seleccionar</option>
                <option value="placer">Placer</option>
                <option value="negocios">Negocios</option>
                <option value="aventura">Aventura</option>
                <option value="familiar">Familiar</option>
                <option value="romántico">Romántico</option>
                <option value="gastronómico">Gastronómico</option>
                <option value="cultural">Cultural</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>Presupuesto (USD)</label>
              <input type="number" value={budget} onChange={e => setBudget(e.target.value)} className="form-input" placeholder="Ej: 1500" min={0} />
            </div>
            <div>
              <label style={labelStyle}>Ciudad de destino</label>
              <div id="autocomplete" />
              {city && province && (
                <p style={{ fontSize: "11px", color: "#2ab5a0", fontWeight: 600, marginTop: "4px" }}>
                  📍 {city}, {province}, {country}
                </p>
              )}
            </div>
            <div>
              <label style={labelStyle}>Intereses</label>
              <select multiple value={interests} onChange={e => setInterests(Array.from(e.target.selectedOptions, o => o.value))} className="form-input" style={{ height: "110px" }}>
                <option value="cultura">Cultura</option>
                <option value="gastronomía">Gastronomía</option>
                <option value="aventura">Aventura</option>
                <option value="relax">Relax</option>
                <option value="shopping">Shopping</option>
                <option value="naturaleza">Naturaleza</option>
                <option value="deportes">Deportes</option>
                <option value="historia">Historia</option>
                <option value="arte">Arte</option>
                <option value="vida nocturna">Vida nocturna</option>
              </select>
            </div>
          </div>

          {/* Días */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>
              📅 Duración — <span style={{ color: "#2ab5a0" }}>{days} {days === 1 ? "día" : "días"}</span>
            </label>
            <div style={{ display: "flex", gap: "8px" }}>
              {[1,2,3,4,5,6,7].map(d => (
                <button key={d} type="button" onClick={() => setDays(d)} style={{
                  width: "42px", height: "42px", borderRadius: "10px", fontSize: "14px", fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: days === d ? "linear-gradient(135deg, #1a2a6c, #2d3f8f)" : "rgba(255,255,255,0.8)",
                  color: days === d ? "white" : "#1a2a6c",
                  border: `1.5px solid ${days === d ? "#1a2a6c" : "#d1d5db"}`,
                  cursor: "pointer", transition: "all 0.15s ease",
                  boxShadow: days === d ? "0 4px 12px rgba(26,42,108,0.25)" : "none",
                }}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Hospedaje */}
          <div style={{ marginTop: "20px" }}>
            <label style={labelStyle}>
              🏨 Hospedaje <span style={{ fontWeight: 400, color: "#9ca3af", fontSize: "12px" }}>(opcional)</span>
            </label>
            <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
              {[{ mode: "search" as const, label: "🔍 Hotel / Hostel" }, { mode: "address" as const, label: "📍 Dirección / Airbnb" }].map(({ mode, label }) => (
                <button key={mode} type="button" onClick={() => handleModeChange(mode)} style={{
                  padding: "6px 16px", borderRadius: "999px", fontSize: "12px", fontWeight: 600,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  background: accommodationMode === mode ? "linear-gradient(135deg, #1a2a6c, #2d3f8f)" : "rgba(255,255,255,0.8)",
                  color: accommodationMode === mode ? "white" : "#1a2a6c",
                  border: `1.5px solid ${accommodationMode === mode ? "#1a2a6c" : "#d1d5db"}`,
                  cursor: "pointer",
                }}>
                  {label}
                </button>
              ))}
            </div>
            {!cityCoords && <p style={{ fontSize: "12px", color: "#9ca3af", fontStyle: "italic" }}>Primero elegí la ciudad de destino</p>}
            {cityCoords && (
              <>
                <div id="accommodation-search" style={{ display: accommodationMode === "search" ? "block" : "none" }} />
                <div id="accommodation-address" style={{ display: accommodationMode === "address" ? "block" : "none" }} />
                {accommodationMode === "address" && <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>Ej: "Calle Mayor 15, Madrid"</p>}
              </>
            )}
            {accommodationName && accommodationCoords && (
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "8px", padding: "8px 14px", background: "rgba(237,233,254,0.85)", borderRadius: "10px", border: "1.5px solid #c4b5fd" }}>
                <span>✅</span>
                <span style={{ fontSize: "12px", color: "#5b21b6", fontWeight: 600 }}>{accommodationName}</span>
                <button type="button" onClick={() => { setAccommodationName(""); setAccommodationCoords(null); setAccommodationTyped(""); }} style={{ marginLeft: "auto", color: "#9ca3af", background: "none", border: "none", cursor: "pointer", fontSize: "14px" }}>✕</button>
              </div>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "24px" }}>
            <button onClick={generateTrip} disabled={loading} className="btn-generate">
              {loading ? "✈️ Generando itinerario..." : "✈️ Generar itinerario"}
            </button>
          </div>
        </div>

        {/* Itinerario */}
        {itinerary && itinerary.days && (
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {itinerary.days.map((day: any, dayIndex: number) => (
              <div key={dayIndex}>
                <div style={{ marginBottom: "20px" }}>
                  <div className="day-badge">Día {day.day}</div>
                  {day.theme && (
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", color: "#1a2a6c", margin: "8px 0 0 0", fontWeight: 600 }}>
                      {day.theme}
                    </p>
                  )}
                </div>

                <div>
                  {day.activities.map((activity: any, i: number) => {
                    const links = buildAffiliateLinks(activity.place_name, itinerary.destination, itinerary.country);
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
                                <span style={{ fontSize: "10px", background: "linear-gradient(135deg, #fef3c7, #fde68a)", color: "#92400e", padding: "3px 10px", borderRadius: "999px", fontWeight: 700, flexShrink: 0, border: "1px solid #fbbf24" }}>
                                  ⭐ Imperdible
                                </span>
                              )}
                            </div>

                            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#6b7280", fontSize: "13px", lineHeight: 1.6, marginBottom: "12px" }}>
                              {activity.short_description}
                            </p>

                            {activity.visit?.best_time_to_visit && (
                              <p style={{ fontSize: "12px", color: "#2ab5a0", fontWeight: 600, marginBottom: "8px" }}>
                                🕐 {activity.visit.best_time_to_visit} · {activity.visit.recommended_duration}
                              </p>
                            )}

                            {activity.tickets?.price_estimate && (
                              <p style={{ fontSize: "13px", color: "#1a2a6c", fontWeight: 600, marginBottom: "12px" }}>
                                💰 {activity.tickets.price_estimate}
                              </p>
                            )}

                            {/* Links de afiliado */}
                            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "12px" }}>
                              {activity.tickets?.official_website && (
                                <a href={activity.tickets.official_website} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#eef0f8", color: "#1a2a6c", fontWeight: 600, textDecoration: "none", border: "1px solid #c7cce8" }}>
                                  🌐 Sitio oficial
                                </a>
                              )}
                              <a href={links.getyourguide} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#fff7ed", color: "#ea580c", fontWeight: 600, textDecoration: "none", border: "1px solid #fed7aa" }}>
                                🎯 GetYourGuide
                              </a>
                              <a href={links.viator} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#f5f3ff", color: "#7c3aed", fontWeight: 600, textDecoration: "none", border: "1px solid #ddd6fe" }}>
                                🧭 Viator
                              </a>
                              <a href={links.klook} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#fef2f2", color: "#e63946", fontWeight: 600, textDecoration: "none", border: "1px solid #fecaca" }}>
                                🎪 Klook
                              </a>
                              <a href={links.tripadvisor} target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", padding: "4px 10px", borderRadius: "6px", background: "#f0fdf4", color: "#16a34a", fontWeight: 600, textDecoration: "none", border: "1px solid #bbf7d0" }}>
                                🦉 TripAdvisor
                              </a>
                            </div>

                            {activity.tips && activity.tips.length > 0 && (
                              <div style={{ background: "rgba(42,181,160,0.08)", borderLeft: "3px solid #2ab5a0", borderRadius: "0 8px 8px 0", padding: "8px 12px" }}>
                                {activity.tips.map((tip: string, j: number) => (
                                  <p key={j} style={{ fontSize: "12px", color: "#374151", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>💡 {tip}</p>
                                ))}
                              </div>
                            )}
                          </div>

                          {activity.media?.image_url && (
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 24px 20px 8px", flexShrink: 0 }}>
                              <div
                                style={{ transform: photoRotation(i), transition: "transform 0.3s ease", backgroundColor: "#fff", padding: "8px 8px 28px 8px", boxShadow: "3px 4px 16px rgba(26,42,108,0.20)", borderRadius: "2px", width: "210px", cursor: "pointer" }}
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

            {allActivities.length > 0 && (
              <div>
                <h2 className="section-title" style={{ fontSize: "1.5rem", marginBottom: "16px" }}>🗺️ Mapa del viaje</h2>
                <TravelMap activities={allActivities} language={language} accommodation={itineraryAccommodation} />
              </div>
            )}

            <ServicesSection city={city} country={country} />
            <SOSButton city={city} country={country} emergencyNumbers={emergencyNumbers} />

            {cityCoords && (
              <DestinationInfo city={city} country={country} nationality={nationality || "Argentina"} language={language} latitude={cityCoords.lat} longitude={cityCoords.lon} onEmergencyNumbers={setEmergencyNumbers} />
            )}
          </div>
        )}
      </div>
    </>
  );
}
