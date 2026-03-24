"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles } from "lucide-react";

interface Props {
  generatorUrl: string;
  city: string;
}

export default function FloatingCTA({ generatorUrl, city }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{
      position: "fixed",
      bottom: "24px",
      right: "20px",
      zIndex: 999,
      transition: "opacity 0.3s ease, transform 0.3s ease",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(16px)",
      pointerEvents: visible ? "auto" : "none",
    }}>
      <Link href={generatorUrl} style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
        color: "white",
        padding: "13px 20px",
        borderRadius: "999px",
        fontSize: "14px",
        fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 8px 28px rgba(26,42,108,0.45)",
        whiteSpace: "nowrap",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <Sparkles size={15} />
        Generá tu itinerario — {city}
      </Link>
    </div>
  );
}
