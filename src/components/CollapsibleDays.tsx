"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import Link from "next/link";
import type { DestDay } from "@/data/destinationPages";
import type { ItineraryPlace } from "@/data/itineraryPlaces";
import { matchItineraryPlace } from "@/lib/itineraryPlaceMatch";
import DayMap from "@/components/DayMap";
import { ActivityCard, useDestinationGuideCopy } from "@/components/DestinationGuideShared";

function CollapsibleDay({ day, generatorUrl, places }: { day: DestDay; generatorUrl: string; places: ItineraryPlace[] }) {
  const [open, setOpen] = useState(false);
  const { t } = useDestinationGuideCopy();

  return (
    <div>
      {/* Day header — always visible, clickable */}
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: "100%", textAlign: "left", cursor: "pointer",
          background: open ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.80)",
          border: `1.5px solid ${open ? "rgba(42,181,160,0.4)" : "rgba(26,42,108,0.12)"}`,
          borderRadius: "18px",
          padding: "18px 22px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px",
          boxShadow: open ? "0 6px 24px rgba(26,42,108,0.12)" : "0 2px 8px rgba(26,42,108,0.06)",
          transition: "all 0.2s ease",
          marginBottom: open ? "14px" : "0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <span style={{
            background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
            color: "white", padding: "5px 16px", borderRadius: "999px",
            fontSize: "11px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
            flexShrink: 0,
          }}>
            {t.day} {day.day}
          </span>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.05rem", color: "#1a2a6c", fontWeight: 700,
          }}>
            {day.theme}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <span style={{ fontSize: "12px", color: "#6b7280", display: open ? "none" : "block" }}>
            {t.activitiesCount(day.activities.length)}
          </span>
          {open
            ? <ChevronUp size={18} style={{ color: "#2ab5a0" }} />
            : <ChevronDown size={18} style={{ color: "#6b7280" }} />
          }
        </div>
      </button>

      {/* Expanded content */}
      {open && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {day.activities.map((activity, i) => (
            <ActivityCard key={i} activity={activity} index={i} place={matchItineraryPlace(activity.name, places)} />
          ))}
          {places.length > 0 && <DayMap places={places} />}
        </div>
      )}
    </div>
  );
}

interface Props {
  days: DestDay[];
  generatorUrl: string;
  city: string;
  placesByDay?: Record<number, ItineraryPlace[]>;
}

export default function CollapsibleDays({ days, generatorUrl, city, placesByDay = {} }: Props) {
  const { t } = useDestinationGuideCopy();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {days.map((day) => (
        <CollapsibleDay key={day.day} day={day} generatorUrl={generatorUrl} places={placesByDay[day.day] ?? []} />
      ))}

      {/* Inline CTA after last collapsed day */}
      <div style={{
        background: "rgba(26,42,108,0.06)",
        border: "1.5px dashed rgba(26,42,108,0.2)",
        borderRadius: "16px",
        padding: "22px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
        marginTop: "8px",
      }}>
        <div>
          <p style={{ margin: "0 0 3px", fontSize: "14px", fontWeight: 700, color: "#1a2a6c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.customFitTitle}
          </p>
          <p style={{ margin: 0, fontSize: "12px", color: "#6b7280", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            {t.customFitSub}
          </p>
        </div>
        <Link href={generatorUrl} style={{
          display: "inline-flex", alignItems: "center", gap: "7px",
          background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
          color: "white", padding: "11px 22px", borderRadius: "12px",
          fontSize: "13px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 16px rgba(26,42,108,0.3)", whiteSpace: "nowrap",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          <Sparkles size={14} /> {t.generateForShort(city)}
        </Link>
      </div>
    </div>
  );
}
