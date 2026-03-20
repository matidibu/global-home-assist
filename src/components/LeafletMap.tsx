"use client";

import "leaflet/dist/leaflet.css";
import TravelMap from "@/components/TravelMap";

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

export default function LeafletMap({ activities }: { activities: Activity[] }) {
  return <TravelMap activities={activities} />;
}