/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import CountryBackground from "@/components/CountryBackground";
import ServicesSection from "@/components/ServicesSection";
import DestinationInfo from "@/components/DestinationInfo";

const TravelMap = dynamic(() => import("@/components/TravelMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] rounded-xl flex items-center justify-center bg-gray-100 text-gray-400">
      Cargando mapa interactivo...
    </div>
  ),
});

function TransportDivider({ transport, accessNote }: { transport: any; accessNote?: string }) {
  if (!transport && !accessNote) return null;

  const allOptions = [
    { key: "walk",   icon: "🚶", label: "a pie" },
    { key: "bike",   icon: "🚴", label: "bici" },
    { key: "car",    icon: "🚗", label: "auto" },
    { key: "ferry",  icon: "⛵", label: "barco" },
    { key: "flight", icon: "✈️", label: "vuelo" },
  ].filter(o => transport?.[o.key] != null && transport[o.key] > 0);

  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}h ${m}min` : `${h}h`;
  };

  const isWater = transport?.ferry != null || transport?.flight != null;

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 16px" }}>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, #d1d5db)" }} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", flexShrink: 0 }}>
        {allOptions.length > 0 && (
          <div style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
            background: isWater ? "#eff6ff" : "#f9fafb",
            border: `1px solid ${isWater ? "#bfdbfe" : "#e5e7eb"}`,
            borderRadius: "999px",
            padding: "6px 14px",
          }}>
            {allOptions.map((o, idx) => (
              <span key={o.key} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                {idx > 0 && <span style={{ color: "#d1d5db", fontSize: "12px" }}>•</span>}
                <span style={{ fontSize: "14px" }}>{o.icon}</span>
                <span style={{ fontSize: "12px", color: isWater ? "#3b82f6" : "#6b7280", fontWeight: 500 }}>
                  {formatTime(transport[o.key])}
                </span>
              </span>
            ))}
          </div>
        )}
        {accessNote && (
          <span style={{ fontSize: "11px", color: "#6b7280", fontStyle: "italic" }}>
            🗺️ {accessNote}
          </span>
        )}
      </div>
      <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, #d1d5db)" }} />
    </div>
  );
}

export default function SearchForm() {

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [nationality, setNationality] = useState("");
  const [language, setLanguage] = useState("es");
  const [tripType, setTripType] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [itinerary, setItinerary] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [cityCoords, setCityCoords] = useState<{ lat: number; lon: number } | null>(null);
  const autocompleteRef = useRef<GeocoderAutocomplete | null>(null);

  useEffect(() => {
    const container = document.getElementById("autocomplete");
    if (!container) return;

    if (autocompleteRef.current) {
      container.innerHTML = "";
      autocompleteRef.current = null;
    }

    const autocomplete = new GeocoderAutocomplete(
      container,
      process.env.NEXT_PUBLIC_GEOAPIFY_KEY as string,
      { type: "city" }
    );

    autocomplete.on("select", (location: any) => {
      setCity(location.properties.city || location.properties.name || "");
      setCountry(location.properties.country || "");
      setCityCoords({
        lat: location.properties.lat,
        lon: location.properties.lon,
      });
    });

    autocompleteRef.current = autocomplete;

    return () => {
      container.innerHTML = "";
      autocompleteRef.current = null;
    };
  }, []);

  async function generateTrip() {
    if (!city || !country) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          city, country, nationality, language,
          tripType, interests, budget, days: 3
        })
      });
      const data = await res.json();
      setItinerary(data);
    } catch (error) {
      console.error("Error generating itinerary:", error);
    } finally {
      setLoading(false);
    }
  }

  const photoRotation = (i: number) =>
    i % 2 === 0 ? "rotate(2deg)" : "rotate(-1.5deg)";

  const allActivities = itinerary?.days?.flatMap((day: any) => day.activities) ?? [];

  return (
    <>
      <CountryBackground country={country} active={!!country} />

      <div className="max-w-5xl mx-auto p-6">

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginBottom: "3rem",
          padding: "0 0.5rem",
        }}>
          <Image
            src="/logo.png"
            alt="Global Home Assist"
            width={120}
            height={120}
            style={{ objectFit: "contain", flexShrink: 0 }}
          />
          <div>
            <h1 style={{
              fontSize: "2.8rem",
              fontWeight: "700",
              color: country ? "#1e3a5f" : "#111827",
              transition: "color 1s ease",
              margin: 0,
              lineHeight: 1.1,
            }}>
              Global Home Assist
            </h1>
            <p style={{ color: "#6b7280", marginTop: "8px", fontSize: "1.05rem", margin: "8px 0 0 0" }}>
              AI Powered Travel Planner
            </p>
          </div>
        </div>

        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"
          onSubmit={e => { e.preventDefault(); generateTrip(); }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Nacionalidad</label>
            <input type="text" value={nationality} onChange={e => setNationality(e.target.value)} className="w-full border rounded px-3 py-2 bg-white/80 backdrop-blur-sm" placeholder="Ej: Argentina" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Idioma</label>
            <select value={language} onChange={e => setLanguage(e.target.value)} className="w-full border rounded px-3 py-2 bg-white/80 backdrop-blur-sm">
              <option value="es">Español</option>
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="it">Italiano</option>
              <option value="de">Deutsch</option>
              <option value="pt">Português</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tipo de viaje</label>
            <select value={tripType} onChange={e => setTripType(e.target.value)} className="w-full border rounded px-3 py-2 bg-white/80 backdrop-blur-sm">
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
            <label className="block text-sm font-medium mb-1">Intereses</label>
            <select multiple value={interests} onChange={e => setInterests(Array.from(e.target.selectedOptions, o => o.value))} className="w-full border rounded px-3 py-2 h-32 bg-white/80 backdrop-blur-sm">
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
          <div>
            <label className="block text-sm font-medium mb-1">Presupuesto estimado (USD)</label>
            <input type="number" value={budget} onChange={e => setBudget(e.target.value)} className="w-full border rounded px-3 py-2 bg-white/80 backdrop-blur-sm" placeholder="Ej: 1500" min={0} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Ciudad de destino</label>
            <div id="autocomplete" className="w-full"></div>
          </div>
          <div className="col-span-1 md:col-span-2 flex justify-end items-end">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 disabled:bg-gray-400"
            >
              {loading ? "Generando..." : "Generar"}
            </button>
          </div>
        </form>

        {itinerary && itinerary.days && (
          <div className="space-y-14">
            {itinerary.days.map((day: any, dayIndex: number) => (
              <div key={dayIndex}>
                <h2 className="text-2xl font-semibold mb-8 text-black">
                  Day {day.day}
                </h2>
                <div>
                  {day.activities.map((activity: any, i: number) => (
                    <div key={i}>

                      {i === 0 && (activity.transport || activity.accessNote) && (
                        <TransportDivider
                          transport={activity.transport}
                          accessNote={activity.accessNote}
                        />
                      )}

                      <div
                        className="flex bg-white/90 backdrop-blur-sm border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition overflow-visible"
                        style={{ minHeight: "220px" }}
                      >
                        <div className="flex-1 p-6">
                          <h3 className="text-xl font-semibold text-black mb-2">
                            {activity.place_name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-3">
                            {activity.short_description}
                          </p>
                          {activity.visit?.best_time_to_visit && (
                            <p className="text-xs text-blue-500 mb-2">
                              🕐 Mejor horario: {activity.visit.best_time_to_visit} · {activity.visit.recommended_duration}
                            </p>
                          )}
                          {activity.tickets?.price_estimate && (
                            <p className="text-sm text-gray-700 mb-3">
                              💰 {activity.tickets.price_estimate}
                            </p>
                          )}
                          <div className="flex gap-3 mt-3 flex-wrap">
                            {activity.tickets?.official_website && (
                              <a href={activity.tickets.official_website} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-xs">
                                Sitio oficial
                              </a>
                            )}
                            {activity.booking?.getyourguide && (
                              <a href={activity.booking.getyourguide} target="_blank" rel="noopener noreferrer" className="text-orange-600 underline text-xs">
                                GetYourGuide
                              </a>
                            )}
                            {activity.booking?.viator && (
                              <a href={activity.booking.viator} target="_blank" rel="noopener noreferrer" className="text-purple-600 underline text-xs">
                                Viator
                              </a>
                            )}
                            {!activity.tickets?.official_website && !activity.booking?.getyourguide && !activity.booking?.viator && (
                              <span className="text-gray-400 text-xs italic">No hay enlaces disponibles</span>
                            )}
                          </div>
                          {activity.tips && activity.tips.length > 0 && (
                            <ul className="mt-2 text-gray-500 text-xs list-disc list-inside">
                              {activity.tips.map((tip: string, j: number) => (
                                <li key={j}>💡 {tip}</li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {activity.media?.image_url && (
                          <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "16px 20px 16px 8px",
                            flexShrink: 0,
                          }}>
                            <div
                              style={{
                                transform: photoRotation(i),
                                transition: "transform 0.3s ease",
                                backgroundColor: "#fff",
                                padding: "8px 8px 28px 8px",
                                boxShadow: "3px 4px 12px rgba(0,0,0,0.18), 0 1px 3px rgba(0,0,0,0.1)",
                                borderRadius: "2px",
                                width: "220px",
                                cursor: "pointer",
                              }}
                              onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1.04)";
                              }}
                              onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.transform = photoRotation(i);
                              }}
                            >
                              <div style={{
                                position: "relative",
                                width: "204px",
                                height: "204px",
                                overflow: "hidden",
                                backgroundColor: "#f0f0f0",
                              }}>
                                <Image
                                  src={activity.media.image_url}
                                  alt={activity.place_name}
                                  fill
                                  style={{ objectFit: "cover", objectPosition: "center" }}
                                  unoptimized
                                />
                              </div>
                              <p style={{
                                textAlign: "center",
                                fontSize: "11px",
                                color: "#666",
                                marginTop: "6px",
                                fontFamily: "Georgia, serif",
                                letterSpacing: "0.02em",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}>
                                {activity.place_name}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>

                      {i < day.activities.length - 1 && (
                        <TransportDivider
                          transport={day.activities[i + 1].transport}
                          accessNote={day.activities[i + 1].accessNote}
                        />
                      )}

                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Mapa interactivo */}
            {allActivities.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-black">
                  Mapa completo del viaje
                </h2>
                <TravelMap activities={allActivities} language={language} />
              </div>
            )}

            {/* Sección de servicios */}
            <ServicesSection city={city} country={country} />

            {/* Info del destino — al final */}
            {cityCoords && (
              <DestinationInfo
                city={city}
                country={country}
                nationality={nationality || "Argentina"}
                language={language}
                latitude={cityCoords.lat}
                longitude={cityCoords.lon}
              />
            )}

          </div>
        )}

      </div>
    </>
  );
}