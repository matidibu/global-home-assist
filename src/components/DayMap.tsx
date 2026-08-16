"use client";

import dynamic from "next/dynamic";
import type { ItineraryPlace } from "@/data/itineraryPlaces";

const TravelMap = dynamic(() => import("@/components/TravelMap"), {
  ssr: false,
  loading: () => (
    <div style={{
      width: "100%", height: "340px", borderRadius: "16px",
      display: "flex", alignItems: "center", justifyContent: "center",
      background: "rgba(255,255,255,0.6)", color: "#6b7280", fontSize: "13px",
    }}>
      Cargando mapa...
    </div>
  ),
});

export default function DayMap({ places }: { places: ItineraryPlace[] }) {
  const valid = places.filter((p) => p.imageUrl);
  if (valid.length === 0) return null;

  const activities = valid.map((p) => ({
    place_name: p.name,
    location: { latitude: p.lat, longitude: p.lon },
    media: { image_url: p.imageUrl ?? undefined },
  }));

  return <TravelMap activities={activities} language="es" />;
}
