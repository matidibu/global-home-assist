"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, BookOpen } from "lucide-react";
import FlightSearch from "@/components/FlightSearch";
import InsuranceBanner from "@/components/InsuranceBanner";
import CollapsibleDays from "@/components/CollapsibleDays";
import DayMap from "@/components/DayMap";
import { AdSenseUnit } from "@/components/AdSenseUnit";
import { ADSENSE_SLOTS } from "@/lib/adsenseConfig";
import type { DestinationPage, DestDay } from "@/data/destinationPages";
import type { ItineraryPlace } from "@/data/itineraryPlaces";
import type { BlogPost } from "@/data/blogPosts";
import { matchItineraryPlace } from "@/lib/itineraryPlaceMatch";
import { localizeDestinationPage } from "@/data/destinationPagesI18n";
import { ActivityCard, gygLink, useDestinationGuideCopy } from "@/components/DestinationGuideShared";

function ExpandedDay({ day, places }: { day: DestDay; places: ItineraryPlace[] }) {
  const { t } = useDestinationGuideCopy();
  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <span style={{
          display: "inline-flex", alignItems: "center",
          background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
          color: "white", padding: "6px 20px", borderRadius: "999px",
          fontSize: "12px", fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase",
          boxShadow: "0 4px 12px rgba(26,42,108,0.3)", marginBottom: "8px",
        }}>
          {t.day} {day.day}
        </span>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.35rem", color: "#1a2a6c", margin: "8px 0 0", fontWeight: 700,
        }}>
          {day.theme}
        </h2>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {day.activities.map((activity, i) => (
          <ActivityCard key={i} activity={activity} index={i} place={matchItineraryPlace(activity.name, places)} />
        ))}
      </div>
      {places.length > 0 && (
        <div style={{ marginTop: "18px" }}>
          <DayMap places={places} />
        </div>
      )}
    </div>
  );
}

function InlineCTA({ generatorUrl, city }: { generatorUrl: string; city: string }) {
  const { t } = useDestinationGuideCopy();
  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(42,181,160,0.12), rgba(26,42,108,0.08))",
      border: "1.5px solid rgba(42,181,160,0.3)",
      borderRadius: "16px",
      padding: "20px 24px",
      display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap",
    }}>
      <div>
        <p style={{ margin: "0 0 2px", fontSize: "14px", fontWeight: 800, color: "#1a2a6c", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {t.imaginedThereTitle}
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#4b5563", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          {t.imaginedThereSub}
        </p>
      </div>
      <Link href={generatorUrl} style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
        color: "white", padding: "11px 22px", borderRadius: "12px",
        fontSize: "13px", fontWeight: 700, textDecoration: "none",
        boxShadow: "0 4px 16px rgba(42,181,160,0.35)", whiteSpace: "nowrap",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <Sparkles size={14} /> {t.generateFor(city)}
      </Link>
    </div>
  );
}

interface Props {
  dest: DestinationPage;
  generatorUrl: string;
  placesByDay: Record<number, ItineraryPlace[]>;
  relatedBlogPost?: BlogPost;
}

export function DestinationGuideBody({ dest: destBase, generatorUrl, placesByDay, relatedBlogPost }: Props) {
  const { language, t } = useDestinationGuideCopy();
  const dest = localizeDestinationPage(destBase, language);

  const expandedDays = dest.days.slice(0, 2);
  const collapsibleDays = dest.days.slice(2);

  return (
    <>
      {/* ── Navbar ── */}
      <nav style={{
        background: "rgba(8,16,54,0.92)",
        backdropFilter: "blur(20px)",
        padding: "14px 24px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        position: "sticky", top: 0, zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.svg" alt="Global Home Assist" style={{ height: "32px", width: "auto" }} />
        </Link>
        <Link href={generatorUrl} style={{
          background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
          color: "white", padding: "8px 20px", borderRadius: "10px",
          fontSize: "13px", fontWeight: 700, textDecoration: "none",
          boxShadow: "0 4px 12px rgba(42,181,160,0.4)",
        }}>
          <Sparkles size={14} style={{ display: "inline", marginRight: "6px", verticalAlign: "middle" }} />
          {t.generateItinerary}
        </Link>
      </nav>

      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ── Back ── */}
        <Link href="/itinerario" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          color: "#6b7280", fontSize: "13px", textDecoration: "none", marginBottom: "28px",
        }}>
          <ArrowLeft size={14} /> {t.backToGuides}
        </Link>

        {/* ── Hero ── */}
        <div style={{
          background: "linear-gradient(135deg, rgba(26,42,108,0.9), rgba(45,63,143,0.85))",
          borderRadius: "24px", padding: "40px 36px", marginBottom: "40px", color: "white",
          boxShadow: "0 12px 40px rgba(26,42,108,0.3)",
        }}>
          <div style={{ fontSize: "56px", marginBottom: "16px", lineHeight: 1 }}>{dest.emoji}</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, margin: "0 0 14px", lineHeight: 1.2,
          }}>
            {dest.heroTitle}
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.78)", margin: "0 0 24px", lineHeight: 1.6 }}>
            {dest.heroSubtitle}
          </p>

          {/* Quick-scan summary of all days */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "28px" }}>
            {dest.days.map(d => (
              <span key={d.day} style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "999px", padding: "5px 14px",
                fontSize: "12px", fontWeight: 600,
              }}>
                {t.day} {d.day} — {d.theme.split(":")[0].split("—")[0].trim()}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
            {[`📅 ${dest.totalDays} ${language === "en" ? (dest.totalDays === 1 ? "day" : "days") : "días"}`, `💰 ${dest.budget}`, `☀️ ${dest.bestMonths}`].map(tag => (
              <span key={tag} style={{
                background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: "999px", padding: "5px 14px", fontSize: "12px", fontWeight: 600,
              }}>{tag}</span>
            ))}
          </div>

          <Link href={generatorUrl} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
            color: "white", padding: "13px 28px", borderRadius: "12px",
            fontSize: "15px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 6px 20px rgba(42,181,160,0.5)",
          }}>
            <Sparkles size={16} />
            {t.generateItinerary}
          </Link>
        </div>

        {/* ── Days 1-2: expanded ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginBottom: "32px" }}>
          {expandedDays.map((day) => (
            <ExpandedDay key={day.day} day={day} places={placesByDay[day.day] ?? []} />
          ))}
        </div>

        {/* ── Inline CTA after day 2 ── */}
        <div style={{ marginBottom: "32px" }}>
          <InlineCTA generatorUrl={generatorUrl} city={dest.city} />
        </div>

        {/* ── Flight search — users are in "I want to go" mode here ── */}
        <div style={{ marginBottom: "32px" }}>
          <FlightSearch destination={dest.city} language={language} />
        </div>

        {/* ── Days 3+: collapsible ── */}
        {collapsibleDays.length > 0 && (
          <div style={{ marginBottom: "40px" }}>
            <p style={{
              fontSize: "13px", color: "#6b7280", fontWeight: 600,
              marginBottom: "14px", fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>
              {t.daysMore(collapsibleDays.length)}
            </p>
            <CollapsibleDays days={collapsibleDays} generatorUrl={generatorUrl} city={dest.city} placesByDay={placesByDay} />
          </div>
        )}

        {/* ── Travel tips ── */}
        <div style={{
          background: "rgba(255,255,255,0.92)",
          border: "1.5px solid rgba(26,42,108,0.1)",
          borderRadius: "20px", padding: "28px 32px",
          boxShadow: "0 4px 20px rgba(26,42,108,0.08)",
          marginBottom: "32px",
        }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.3rem", color: "#1a2a6c", margin: "0 0 18px",
          }}>
            {t.tipsTitle(dest.city)}
          </h2>
          <ul style={{ margin: 0, padding: "0 0 0 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
            {dest.travelTips.map((tip, i) => (
              <li key={i} style={{ fontSize: "14px", color: "#374151", lineHeight: 1.6 }}>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* ── AdSense — in-content ad ── */}
        <div style={{ marginBottom: "32px" }}>
          <AdSenseUnit
            slot={ADSENSE_SLOTS.destinationContent}
            format="auto"
          />
        </div>

        {/* ── Related blog guide ── */}
        {relatedBlogPost && (
          <div style={{ marginBottom: "32px" }}>
            <Link
              href={`/blog/${relatedBlogPost.slug}`}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                gap: "16px", flexWrap: "wrap",
                background: "rgba(255,255,255,0.92)",
                border: "1.5px solid rgba(26,42,108,0.1)",
                borderRadius: "16px", padding: "20px 24px", textDecoration: "none",
                boxShadow: "0 4px 16px rgba(26,42,108,0.08)",
              }}
            >
              <div>
                <p style={{ margin: "0 0 3px", fontSize: "15px", fontWeight: 700, color: "#1a2a6c" }}>
                  📖 {relatedBlogPost.title}
                </p>
                <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
                  {relatedBlogPost.excerpt}
                </p>
              </div>
              <span style={{
                background: "#1a2a6c", color: "white",
                padding: "10px 20px", borderRadius: "10px",
                fontSize: "13px", fontWeight: 700, whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: "6px",
              }}>
                <BookOpen size={14} /> {t.readGuide}
              </span>
            </Link>
          </div>
        )}

        {/* ── GYG banner ── */}
        <div style={{
          background: "linear-gradient(135deg, rgba(255,102,0,0.08), rgba(255,140,0,0.06))",
          border: "1.5px solid rgba(255,102,0,0.25)",
          borderRadius: "20px", padding: "28px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", flexWrap: "wrap",
          marginBottom: "32px",
        }}>
          <div>
            <p style={{ margin: "0 0 4px", fontSize: "16px", fontWeight: 800, color: "#ea580c" }}>
              {t.toursTitle(dest.city)}
            </p>
            <p style={{ margin: 0, fontSize: "13px", color: "#6b7280" }}>
              {t.toursSub}
            </p>
          </div>
          <a
            href={gygLink(dest.gygCity)}
            target="_blank" rel="noopener noreferrer sponsored"
            style={{
              background: "#ff6600", color: "white",
              padding: "12px 24px", borderRadius: "12px",
              fontSize: "14px", fontWeight: 700, textDecoration: "none",
              boxShadow: "0 4px 16px rgba(255,102,0,0.35)", whiteSpace: "nowrap",
            }}
          >
            {t.seeTours}
          </a>
        </div>

        {/* ── Insurance ── */}
        <div style={{ marginBottom: "48px" }}>
          <InsuranceBanner language={language} />
        </div>

        {/* ── Bottom CTA ── */}
        <div style={{
          background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
          borderRadius: "24px", padding: "40px 36px", textAlign: "center",
          boxShadow: "0 12px 40px rgba(26,42,108,0.3)",
        }}>
          <p style={{ fontSize: "28px", margin: "0 0 12px" }}>✈️</p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.6rem", color: "white", margin: "0 0 12px", fontWeight: 700,
          }}>
            {t.customItineraryTitle}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", margin: "0 0 24px", lineHeight: 1.6 }}>
            {t.customItinerarySub}
          </p>
          <Link href={generatorUrl} style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
            color: "white", padding: "14px 32px", borderRadius: "14px",
            fontSize: "16px", fontWeight: 700, textDecoration: "none",
            boxShadow: "0 6px 24px rgba(42,181,160,0.5)",
          }}>
            <Sparkles size={18} />
            {t.generateItineraryFor(dest.city)}
          </Link>
        </div>

      </div>
    </>
  );
}
