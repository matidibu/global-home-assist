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

type Copy = { destination: string; destinationPlaceholder: string; nationality: string; nationalityPlaceholder: string; responseLanguage: string; pickCityHint: string };

const T: Record<string, Copy> = {
  es: { destination: "Destino", destinationPlaceholder: "¿A dónde viajás?", nationality: "Tu nacionalidad", nationalityPlaceholder: "Ej: Argentina", responseLanguage: "Idioma de la respuesta", pickCityHint: "Elegí una ciudad del listado para ver alertas de seguridad, salud, embajada y más." },
  en: { destination: "Destination", destinationPlaceholder: "Where are you traveling to?", nationality: "Your nationality", nationalityPlaceholder: "E.g.: Argentina", responseLanguage: "Response language", pickCityHint: "Pick a city from the list to see safety, health, embassy alerts, and more." },
  fr: { destination: "Destination", destinationPlaceholder: "Où voyagez-vous ?", nationality: "Votre nationalité", nationalityPlaceholder: "Ex : Argentine", responseLanguage: "Langue de la réponse", pickCityHint: "Choisissez une ville dans la liste pour voir les alertes de sécurité, santé, ambassade et plus." },
  it: { destination: "Destinazione", destinationPlaceholder: "Dove stai viaggiando?", nationality: "La tua nazionalità", nationalityPlaceholder: "Es: Argentina", responseLanguage: "Lingua della risposta", pickCityHint: "Scegli una città dall'elenco per vedere avvisi di sicurezza, salute, ambasciata e altro." },
  de: { destination: "Reiseziel", destinationPlaceholder: "Wohin reist du?", nationality: "Deine Nationalität", nationalityPlaceholder: "Z.B.: Argentinien", responseLanguage: "Antwortsprache", pickCityHint: "Wähle eine Stadt aus der Liste, um Sicherheits-, Gesundheits-, Botschaftshinweise und mehr zu sehen." },
  pt: { destination: "Destino", destinationPlaceholder: "Para onde você está viajando?", nationality: "Sua nacionalidade", nationalityPlaceholder: "Ex: Argentina", responseLanguage: "Idioma da resposta", pickCityHint: "Escolha uma cidade da lista para ver alertas de segurança, saúde, embaixada e mais." },
};

export function SeguridadViajeTool() {
  const [language, setLanguage] = useAutoLanguage();
  const [selection, setSelection] = useState<CitySelection | null>(null);
  const [nationality, setNationality] = useState("Argentina");
  const t = T[language] || T.es;

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
            <label style={labelStyle}>{t.destination}</label>
            <CityAutocomplete
              language={language}
              placeholder={t.destinationPlaceholder}
              onSelect={setSelection}
            />
          </div>
          <div>
            <label style={labelStyle}>{t.nationality}</label>
            <input
              type="text"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
              className="form-input"
              placeholder={t.nationalityPlaceholder}
            />
          </div>
          <div>
            <label style={labelStyle}>{t.responseLanguage}</label>
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
            {t.pickCityHint}
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
