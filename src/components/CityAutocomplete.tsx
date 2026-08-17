"use client";

import { useEffect, useId, useRef } from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";
import "@geoapify/geocoder-autocomplete/styles/minimal.css";

export interface CitySelection {
  city: string;
  country: string;
  province: string;
  lat: number;
  lon: number;
}

interface Props {
  language: string;
  placeholder: string;
  onSelect: (selection: CitySelection) => void;
}

// Standalone version of the Geoapify wiring in SearchForm.tsx (its
// autocomplete effect + handleCitySelect), stripped of the accommodation
// reset and itinerary-only state it doesn't need here.
export function CityAutocomplete({ language, placeholder, onSelect }: Props) {
  const containerId = `city-autocomplete-${useId()}`;
  const autocompleteRef = useRef<GeocoderAutocomplete | null>(null);

  useEffect(() => {
    const container = document.getElementById(containerId);
    if (!container) return;
    if (autocompleteRef.current) { container.innerHTML = ""; autocompleteRef.current = null; }

    const ac = new GeocoderAutocomplete(container, process.env.NEXT_PUBLIC_GEOAPIFY_KEY as string, {
      type: "city",
      lang: language as any,
      placeholder,
    });

    const handleCitySelect = (loc: any) => {
      const props = loc?.properties ?? loc;
      // Geoapify v3: para city-states (Vaticano, Mónaco, etc.) props.city puede venir vacío
      const cityName =
        props.city ||
        props.municipality ||
        props.county ||
        props.name ||
        props.state ||
        props.formatted?.split(",")[0]?.trim() ||
        "";
      onSelect({
        city: cityName,
        country: props.country || "",
        province: props.state || props.county || props.region || "",
        lat: props.lat,
        lon: props.lon,
      });
    };

    ac.on("select", handleCitySelect);
    ac.on("place_select" as any, handleCitySelect);
    autocompleteRef.current = ac;
    return () => { container.innerHTML = ""; autocompleteRef.current = null; };
  }, [containerId, language]);

  return <div id={containerId} />;
}
