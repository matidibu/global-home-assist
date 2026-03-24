"use client";

import dynamic from "next/dynamic";

const TravelMap = dynamic(() => import("@/components/TravelMap"), {
  ssr: false,
  loading: () => (
    <div style={{ width: "100%", height: "500px", borderRadius: "20px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.6)", color: "#6b7280", fontSize: "14px" }}>
      Cargando mapa...
    </div>
  ),
});

interface Activity {
  place_name: string;
  short_description?: string;
  location: { latitude: number; longitude: number };
  visit?: { recommended_duration?: string };
  tickets?: { price_estimate?: string };
  media?: { image_url?: string };
}

export default function BaliMap({ activities }: { activities: Activity[] }) {
  return <TravelMap activities={activities} language="es" />;
}
