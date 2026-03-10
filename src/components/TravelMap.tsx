"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Coordinates {
  lat: number;
  lng: number;
}

interface Activity {
  name: string;
  description?: string;
  coordinates: Coordinates;
  rating?: string;
  duration?: string;
  price_estimate?: string;
  image?: string;
}

interface TravelMapProps {
  activities: Activity[];
}

export default function TravelMap({ activities }: TravelMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Definimos el ícono del marker
  const defaultIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapRef.current = L.map(containerRef.current).setView(
      activities.length
        ? [activities[0].coordinates.lat, activities[0].coordinates.lng]
        : [0, 0],
      13
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap contributors",
    }).addTo(mapRef.current);

    // Agregamos markers con ícono
    activities.forEach((act) => {
      const marker = L.marker([act.coordinates.lat, act.coordinates.lng], {
        icon: defaultIcon, // <- Aquí asignamos el ícono
      }).addTo(mapRef.current!);

      let popupHtml = `<strong>${act.name}</strong>`;
      if (act.image)
        popupHtml += `<br><img src="${act.image}" class="w-40 h-24 object-cover rounded-md mt-1"/>`;
      if (act.duration) popupHtml += `<br>⏱ ${act.duration}`;
      if (act.price_estimate) popupHtml += `<br>💰 $${act.price_estimate}`;
      if (act.rating) popupHtml += `<br>⭐ ${act.rating}`;
      if (act.description) popupHtml += `<br>${act.description}`;
      marker.bindPopup(popupHtml);
    });
  }, [activities]);

  return <div ref={containerRef} className="w-full h-[500px] rounded-xl" />;
}