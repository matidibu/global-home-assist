"use client";

import { useState, useEffect } from "react";

interface WeatherDay {
  date: string;
  max: number;
  min: number;
  code: number;
}

interface TravelAdvisory {
  level: "Normal" | "Precaución" | "Alerta" | "Crítico";
  security_alerts: string[];
  health_alerts: string[];
  recommendation: string;
}

interface DestinationData {
  travel_advisory?: TravelAdvisory;
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

// travel_advisory.level always comes back from the API as one of these 4
// Spanish words regardless of requested language (fixed enum in the AI
// prompt, see src/app/api/destination-info/route.ts) -- treated as an
// internal key here, translated for display via levelLabels below rather
// than changing the API's response shape.
type Copy = {
  loading: string;
  alertLevelPrefix: string;
  levelLabels: Record<TravelAdvisory["level"], string>;
  securityAlerts: string;
  healthAlerts: string;
  infoDisclaimer: string;
  weatherTitle: string;
  currencyTitle: string;
  consulateTitle: string;
  officialSite: string;
  hospitalsTitle: string;
  hospitalDisclaimer: string;
  emergenciesTitle: string;
  labelGeneral: string;
  labelPolice: string;
  labelAmbulance: string;
  labelFire: string;
  usefulTipsTitle: string;
  weatherDesc: string[]; // indexed by weatherDescIndex(code)
  dateLocale: string;
};

const T: Record<string, Copy> = {
  es: {
    loading: "Cargando información del destino...",
    alertLevelPrefix: "Nivel de alerta:",
    levelLabels: { Normal: "Normal", "Precaución": "Precaución", Alerta: "Alerta", "Crítico": "Crítico" },
    securityAlerts: "Alertas de seguridad",
    healthAlerts: "Alertas de salud",
    infoDisclaimer: "Información basada en datos disponibles. Verificá con fuentes oficiales antes de viajar.",
    weatherTitle: "🌤️ Clima actual",
    currencyTitle: "💱 Moneda y cambio",
    consulateTitle: "🏛️ Consulado / Embajada",
    officialSite: "🌐 Sitio web oficial",
    hospitalsTitle: "🏥 Hospitales",
    hospitalDisclaimer: "⚠️ Verificar dirección antes de concurrir — datos orientativos generados por IA.",
    emergenciesTitle: "🚨 Emergencias",
    labelGeneral: "General", labelPolice: "Policía", labelAmbulance: "Ambulancia", labelFire: "Bomberos",
    usefulTipsTitle: "💡 Tips útiles",
    weatherDesc: ["Despejado", "Parcialmente nublado", "Niebla", "Lluvia", "Nieve", "Chubascos", "Tormenta", "Variable"],
    dateLocale: "es-ES",
  },
  en: {
    loading: "Loading destination info...",
    alertLevelPrefix: "Alert level:",
    levelLabels: { Normal: "Normal", "Precaución": "Caution", Alerta: "Alert", "Crítico": "Critical" },
    securityAlerts: "Security alerts",
    healthAlerts: "Health alerts",
    infoDisclaimer: "Information based on available data. Check official sources before you travel.",
    weatherTitle: "🌤️ Current weather",
    currencyTitle: "💱 Currency & exchange",
    consulateTitle: "🏛️ Consulate / Embassy",
    officialSite: "🌐 Official website",
    hospitalsTitle: "🏥 Hospitals",
    hospitalDisclaimer: "⚠️ Verify the address before going — AI-generated reference data.",
    emergenciesTitle: "🚨 Emergency",
    labelGeneral: "General", labelPolice: "Police", labelAmbulance: "Ambulance", labelFire: "Fire dept.",
    usefulTipsTitle: "💡 Useful tips",
    weatherDesc: ["Clear", "Partly cloudy", "Fog", "Rain", "Snow", "Showers", "Thunderstorm", "Variable"],
    dateLocale: "en-US",
  },
  fr: {
    loading: "Chargement des informations sur la destination...",
    alertLevelPrefix: "Niveau d'alerte :",
    levelLabels: { Normal: "Normal", "Precaución": "Prudence", Alerta: "Alerte", "Crítico": "Critique" },
    securityAlerts: "Alertes de sécurité",
    healthAlerts: "Alertes sanitaires",
    infoDisclaimer: "Informations basées sur les données disponibles. Vérifiez auprès des sources officielles avant de partir.",
    weatherTitle: "🌤️ Météo actuelle",
    currencyTitle: "💱 Devise et change",
    consulateTitle: "🏛️ Consulat / Ambassade",
    officialSite: "🌐 Site officiel",
    hospitalsTitle: "🏥 Hôpitaux",
    hospitalDisclaimer: "⚠️ Vérifiez l'adresse avant de vous y rendre — données de référence générées par IA.",
    emergenciesTitle: "🚨 Urgences",
    labelGeneral: "Général", labelPolice: "Police", labelAmbulance: "Ambulance", labelFire: "Pompiers",
    usefulTipsTitle: "💡 Astuces utiles",
    weatherDesc: ["Dégagé", "Partiellement nuageux", "Brouillard", "Pluie", "Neige", "Averses", "Orage", "Variable"],
    dateLocale: "fr-FR",
  },
  it: {
    loading: "Caricamento informazioni sulla destinazione...",
    alertLevelPrefix: "Livello di allerta:",
    levelLabels: { Normal: "Normale", "Precaución": "Cautela", Alerta: "Allerta", "Crítico": "Critico" },
    securityAlerts: "Allerte di sicurezza",
    healthAlerts: "Allerte sanitarie",
    infoDisclaimer: "Informazioni basate sui dati disponibili. Verifica con fonti ufficiali prima di partire.",
    weatherTitle: "🌤️ Meteo attuale",
    currencyTitle: "💱 Valuta e cambio",
    consulateTitle: "🏛️ Consolato / Ambasciata",
    officialSite: "🌐 Sito ufficiale",
    hospitalsTitle: "🏥 Ospedali",
    hospitalDisclaimer: "⚠️ Verifica l'indirizzo prima di recarti sul posto — dati indicativi generati dall'IA.",
    emergenciesTitle: "🚨 Emergenze",
    labelGeneral: "Generale", labelPolice: "Polizia", labelAmbulance: "Ambulanza", labelFire: "Vigili del fuoco",
    usefulTipsTitle: "💡 Consigli utili",
    weatherDesc: ["Sereno", "Parzialmente nuvoloso", "Nebbia", "Pioggia", "Neve", "Rovesci", "Temporale", "Variabile"],
    dateLocale: "it-IT",
  },
  de: {
    loading: "Reiseziel-Infos werden geladen...",
    alertLevelPrefix: "Sicherheitsstufe:",
    levelLabels: { Normal: "Normal", "Precaución": "Vorsicht", Alerta: "Warnung", "Crítico": "Kritisch" },
    securityAlerts: "Sicherheitshinweise",
    healthAlerts: "Gesundheitshinweise",
    infoDisclaimer: "Informationen basierend auf verfügbaren Daten. Vor der Reise offizielle Quellen prüfen.",
    weatherTitle: "🌤️ Aktuelles Wetter",
    currencyTitle: "💱 Währung und Wechsel",
    consulateTitle: "🏛️ Konsulat / Botschaft",
    officialSite: "🌐 Offizielle Website",
    hospitalsTitle: "🏥 Krankenhäuser",
    hospitalDisclaimer: "⚠️ Adresse vor Ort überprüfen — von KI generierte Richtwerte.",
    emergenciesTitle: "🚨 Notfälle",
    labelGeneral: "Allgemein", labelPolice: "Polizei", labelAmbulance: "Rettungsdienst", labelFire: "Feuerwehr",
    usefulTipsTitle: "💡 Nützliche Tipps",
    weatherDesc: ["Klar", "Teilweise bewölkt", "Nebel", "Regen", "Schnee", "Schauer", "Gewitter", "Wechselhaft"],
    dateLocale: "de-DE",
  },
  pt: {
    loading: "Carregando informações do destino...",
    alertLevelPrefix: "Nível de alerta:",
    levelLabels: { Normal: "Normal", "Precaución": "Cautela", Alerta: "Alerta", "Crítico": "Crítico" },
    securityAlerts: "Alertas de segurança",
    healthAlerts: "Alertas de saúde",
    infoDisclaimer: "Informações baseadas em dados disponíveis. Confirme com fontes oficiais antes de viajar.",
    weatherTitle: "🌤️ Clima atual",
    currencyTitle: "💱 Moeda e câmbio",
    consulateTitle: "🏛️ Consulado / Embaixada",
    officialSite: "🌐 Site oficial",
    hospitalsTitle: "🏥 Hospitais",
    hospitalDisclaimer: "⚠️ Verifique o endereço antes de ir — dados de referência gerados por IA.",
    emergenciesTitle: "🚨 Emergências",
    labelGeneral: "Geral", labelPolice: "Polícia", labelAmbulance: "Ambulância", labelFire: "Bombeiros",
    usefulTipsTitle: "💡 Dicas úteis",
    weatherDesc: ["Céu limpo", "Parcialmente nublado", "Neblina", "Chuva", "Neve", "Pancadas de chuva", "Tempestade", "Variável"],
    dateLocale: "pt-BR",
  },
};

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

function weatherDescIndex(code: number): number {
  if (code === 0) return 0;
  if (code <= 3) return 1;
  if (code <= 49) return 2;
  if (code <= 67) return 3;
  if (code <= 77) return 4;
  if (code <= 82) return 5;
  if (code <= 99) return 6;
  return 7;
}

interface Props {
  city: string;
  country: string;
  province?: string;
  nationality: string;
  language: string;
  latitude: number;
  longitude: number;
  onEmergencyNumbers?: (numbers: { general: string; police: string; ambulance: string; fire: string }) => void;
}

export default function DestinationInfo({ city, country, province, nationality, language, latitude, longitude, onEmergencyNumbers }: Props) {
  const t = T[language] || T.es;
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
      body: JSON.stringify({ city, country, province, nationality, language, latitude, longitude }),
    })
      .then(r => r.json())
      .then(d => {
        setData(d);
        setLoading(false);
        // Pasar números de emergencia al componente padre para el SOS
        if (d.emergency_numbers && onEmergencyNumbers) {
          onEmergencyNumbers(d.emergency_numbers);
        }
      })
      .catch(() => { setError(true); setLoading(false); });
  }, [city, country, province, nationality, language, latitude, longitude, onEmergencyNumbers]);

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

  function formatDate(dateStr: string): string {
    const d = new Date(dateStr);
    return d.toLocaleDateString(t.dateLocale, { weekday: "short", day: "numeric", month: "short" });
  }

  if (loading) return (
    <div style={{ ...cardStyle, textAlign: "center", color: "#9ca3af", padding: "32px" }}>
      <div style={{ fontSize: "24px", marginBottom: "8px" }}>🌍</div>
      {t.loading}
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

      {data.travel_advisory && (() => {
        const adv = data.travel_advisory!;
        const levelConfig: Record<string, { bg: string; border: string; text: string; dot: string; icon: string }> = {
          "Normal":    { bg: "#f0fdf4", border: "#bbf7d0", text: "#166534", dot: "#16a34a", icon: "✅" },
          "Precaución":{ bg: "#fffbeb", border: "#fde68a", text: "#92400e", dot: "#d97706", icon: "⚠️" },
          "Alerta":    { bg: "#fff7ed", border: "#fed7aa", text: "#9a3412", dot: "#ea580c", icon: "🔶" },
          "Crítico":   { bg: "#fef2f2", border: "#fecaca", text: "#991b1b", dot: "#dc2626", icon: "🚨" },
        };
        const cfg = levelConfig[adv.level] ?? levelConfig["Normal"];
        const levelLabel = t.levelLabels[adv.level] ?? adv.level;
        const hasAlerts = (adv.security_alerts?.length ?? 0) > 0 || (adv.health_alerts?.length ?? 0) > 0;
        return (
          <div style={{
            background: cfg.bg,
            border: `1.5px solid ${cfg.border}`,
            borderRadius: "12px",
            padding: "20px",
            marginBottom: "20px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: hasAlerts ? "14px" : "8px" }}>
              <span style={{ fontSize: "20px" }}>{cfg.icon}</span>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 700, color: cfg.text }}>
                  {t.alertLevelPrefix} {levelLabel}
                </div>
                <div style={{ fontSize: "13px", color: cfg.text, opacity: 0.85, marginTop: "2px" }}>
                  {adv.recommendation}
                </div>
              </div>
            </div>
            {adv.security_alerts && adv.security_alerts.length > 0 && (
              <div style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: cfg.text, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {t.securityAlerts}
                </div>
                {adv.security_alerts.map((alert, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "5px" }}>
                    <span style={{ color: cfg.dot, fontSize: "10px", marginTop: "4px", flexShrink: 0 }}>●</span>
                    <span style={{ fontSize: "13px", color: cfg.text }}>{alert}</span>
                  </div>
                ))}
              </div>
            )}
            {adv.health_alerts && adv.health_alerts.length > 0 && (
              <div style={{ marginBottom: "6px" }}>
                <div style={{ fontSize: "12px", fontWeight: 600, color: cfg.text, marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {t.healthAlerts}
                </div>
                {adv.health_alerts.map((alert, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "5px" }}>
                    <span style={{ fontSize: "13px", flexShrink: 0 }}>🦠</span>
                    <span style={{ fontSize: "13px", color: cfg.text }}>{alert}</span>
                  </div>
                ))}
              </div>
            )}
            <div style={{ fontSize: "11px", color: cfg.text, opacity: 0.6, marginTop: "10px", fontStyle: "italic" }}>
              {t.infoDisclaimer}
            </div>
          </div>
        );
      })()}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>

        {data.weather && (
          <div style={cardStyle}>
            <div style={titleStyle}>{t.weatherTitle}</div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <span style={{ fontSize: "36px" }}>{weatherIcon(data.weather.current.code)}</span>
              <div>
                <div style={{ fontSize: "28px", fontWeight: 700, color: "#111827" }}>
                  {data.weather.current.temp}°C
                </div>
                <div style={{ fontSize: "13px", color: "#6b7280" }}>
                  {t.weatherDesc[weatherDescIndex(data.weather.current.code)]}
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "#6b7280", marginBottom: "14px" }}>
              <span>💧 {data.weather.current.humidity}%</span>
              <span>💨 {data.weather.current.windspeed} km/h</span>
            </div>
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

        {data.currency && (
          <div style={cardStyle}>
            <div style={titleStyle}>{t.currencyTitle}</div>
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

        {data.consulate && (
          <div style={cardStyle}>
            <div style={titleStyle}>{t.consulateTitle}</div>
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
                {t.officialSite}
              </div>
            )}
            <div style={{ fontSize: "11px", color: "#9ca3af", fontStyle: "italic" }}>
              {data.consulate.note}
            </div>
          </div>
        )}

        {data.hospitals && data.hospitals.length > 0 && (
          <div style={cardStyle}>
            <div style={titleStyle}>{t.hospitalsTitle}</div>
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
            <div style={{ fontSize: "11px", color: "#9ca3af", fontStyle: "italic", marginTop: "4px" }}>
              {t.hospitalDisclaimer}
            </div>
          </div>
        )}

        {(data.police || data.emergency_numbers) && (
          <div style={cardStyle}>
            <div style={titleStyle}>{t.emergenciesTitle}</div>
            {data.emergency_numbers && (
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                marginBottom: "14px",
              }}>
                {[
                  { label: t.labelGeneral, num: data.emergency_numbers.general, color: "#dc2626" },
                  { label: t.labelPolice, num: data.emergency_numbers.police, color: "#1d4ed8" },
                  { label: t.labelAmbulance, num: data.emergency_numbers.ambulance, color: "#16a34a" },
                  { label: t.labelFire, num: data.emergency_numbers.fire, color: "#ea580c" },
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
            {data.police && data.police.length > 0 && (
              <div style={{ fontSize: "11px", color: "#9ca3af", fontStyle: "italic", marginTop: "8px" }}>
                {t.hospitalDisclaimer}
              </div>
            )}
          </div>
        )}

        {data.useful_tips && data.useful_tips.length > 0 && (
          <div style={cardStyle}>
            <div style={titleStyle}>{t.usefulTipsTitle}</div>
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
