"use client";

import Image from "next/image";

type Activity = {
  location?: {
    latitude: number;
    longitude: number;
  };
  place_name?: string;
};

export default function DayMapImage({ activities }: { activities: Activity[] }) {
  const valid = activities.filter(
    a => a.location?.latitude && a.location?.longitude
  );

  if (valid.length === 0) return null;

  const apiKey = process.env.NEXT_PUBLIC_GEOAPIFY_KEY;
  if (!apiKey) return null;

  const lats = valid.map(a => a.location!.latitude);
  const lons = valid.map(a => a.location!.longitude);
  const minLat = Math.min(...lats);
  const maxLat = Math.max(...lats);
  const minLon = Math.min(...lons);
  const maxLon = Math.max(...lons);

  const latDiff = maxLat - minLat;
  const lonDiff = maxLon - minLon;
  const maxDiff = Math.max(latDiff, lonDiff);

  let zoom = 14;
  if (maxDiff > 0.5) zoom = 11;
  else if (maxDiff > 0.2) zoom = 12;
  else if (maxDiff > 0.1) zoom = 13;
  else if (maxDiff > 0.05) zoom = 14;
  else if (maxDiff > 0.02) zoom = 15;
  else zoom = 16;

  const avgLat = (minLat + maxLat) / 2;
  const avgLon = (minLon + maxLon) / 2;

  // Construir URL con marcadores como parámetros separados
  const baseUrl =
    `https://maps.geoapify.com/v1/staticmap` +
    `?style=osm-bright` +
    `&width=900&height=380` +
    `&center=lonlat:${avgLon},${avgLat}` +
    `&zoom=${zoom}` +
    `&apiKey=${apiKey}`;

  const markerParams = valid
    .map((a, i) =>
      `&marker=lonlat:${a.location!.longitude},${a.location!.latitude};color:red;size:medium;text:${i + 1}`
    )
    .join("");

  const url = baseUrl + markerParams;

  return (
    <div className="mt-6 rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <Image
        src={url}
        alt="Mapa del día"
        width={900}
        height={380}
        className="w-full h-auto"
        unoptimized
      />
    </div>
  );
}