"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

const BACK_LABEL: Record<string, string> = {
  es: "Herramientas",
  en: "Tools",
  fr: "Outils",
  it: "Strumenti",
  de: "Tools",
  pt: "Ferramentas",
};

interface Props {
  emoji: string;
  title: Record<string, string>;
  subtitle: Record<string, string>;
}

/** Shared nav-back-link + icon/title/subtitle hero for the /herramientas/* tool pages. */
export function ToolPageChrome({ emoji, title, subtitle }: Props) {
  const [language] = useAutoLanguage();

  return (
    <>
      <nav style={{
        padding: "16px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        <Link href="/herramientas" style={{
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "15px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}>
          <ArrowLeft size={16} strokeWidth={2.5} /> {BACK_LABEL[language] || BACK_LABEL.es}
        </Link>
      </nav>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 24px 0" }}>
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <div style={{ fontSize: "40px", marginBottom: "12px" }}>{emoji}</div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.7rem, 4.5vw, 2.5rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 14px 0",
            lineHeight: 1.15,
          }}>
            {title[language] || title.es}
          </h1>
          <p style={{
            fontSize: "14.5px",
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto",
          }}>
            {subtitle[language] || subtitle.es}
          </p>
        </div>
      </div>
    </>
  );
}
