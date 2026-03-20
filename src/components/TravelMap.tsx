"use client";

import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import { useEffect } from "react";

interface Activity {
  place_name: string;
  short_description?: string;
  location: {
    latitude: number;
    longitude: number;
  };
  visit?: {
    recommended_duration?: string;
  };
  tickets?: {
    price_estimate?: string;
  };
  media?: {
    image_url?: string;
  };
}

interface TravelMapProps {
  activities: Activity[];
  language?: string;
}

function FitBounds({ positions }: { positions: [number, number][] }) {
  const map = useMap();
  useEffect(() => {
    if (positions.length > 1) {
      map.fitBounds(L.latLngBounds(positions), { padding: [40, 40] });
    }
  }, [map, positions]);
  return null;
}

export default function TravelMap({ activities, language = "en" }: TravelMapProps) {
  const valid = activities.filter(
    a => a.location?.latitude && a.location?.longitude
  );

  if (valid.length === 0) return null;

  const positions: [number, number][] = valid.map(a => [
    a.location.latitude,
    a.location.longitude,
  ]);

  const mapKey = valid.map(a => `${a.location.latitude},${a.location.longitude}`).join("|");

  // Mapear idioma del usuario al código que usa Geoapify
  const langMap: Record<string, string> = {
    es: "es",
    en: "en",
    fr: "fr",
    it: "it",
    de: "de",
    pt: "pt",
  };
  const mapLang = langMap[language] ?? "en";

  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
  const tileUrl = apiKey
    ? `https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?lang=${mapLang}&apiKey=${apiKey}`
    : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

  const numberIcon = (index: number) =>
    L.divIcon({
      className: "",
      html: `
        <div style="
          background:#2563eb;
          color:white;
          border-radius:50%;
          width:28px;
          height:28px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:13px;
          font-weight:bold;
          border:2px solid white;
          box-shadow:0 2px 6px rgba(0,0,0,0.3);
        ">${index + 1}</div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
      popupAnchor: [0, -16],
    });

  return (
    <MapContainer
      key={mapKey}
      center={positions[0]}
      zoom={13}
      style={{ height: "500px", width: "100%", borderRadius: "12px" }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.geoapify.com/">Geoapify</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={tileUrl}
      />
      <Polyline
        positions={positions}
        pathOptions={{ color: "#2563eb", weight: 3, dashArray: "6,8" }}
      />
      {valid.map((act, index) => (
        <Marker
          key={index}
          position={[act.location.latitude, act.location.longitude]}
          icon={numberIcon(index)}
        >
          <Popup maxWidth={200}>
            <strong style={{ fontSize: "14px" }}>{act.place_name}</strong>
            {act.media?.image_url && (
              <><br /><img src={act.media.image_url} style={{ width: "160px", height: "90px", objectFit: "cover", borderRadius: "6px", marginTop: "6px" }} alt={act.place_name} /></>
            )}
            {act.visit?.recommended_duration && (
              <><br /><span style={{ fontSize: "12px" }}>⏱ {act.visit.recommended_duration}</span></>
            )}
            {act.tickets?.price_estimate && (
              <><br /><span style={{ fontSize: "12px" }}>💰 {act.tickets.price_estimate}</span></>
            )}
            {act.short_description && (
              <><br /><span style={{ fontSize: "12px", color: "#555" }}>{act.short_description}</span></>
            )}
          </Popup>
        </Marker>
      ))}
      <FitBounds positions={positions} />
    </MapContainer>
  );
}