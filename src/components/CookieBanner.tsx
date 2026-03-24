"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  }

  function essential() {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: 0, left: 0, right: 0,
      zIndex: 9999,
      background: "rgba(6,12,44,0.97)",
      backdropFilter: "blur(14px)",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      flexWrap: "wrap",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.3)",
    }}>
      <p style={{
        fontSize: "13px",
        color: "rgba(255,255,255,0.78)",
        margin: 0,
        flex: 1,
        minWidth: "260px",
        lineHeight: 1.55,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        🍪 Usamos cookies propias y de terceros — Google Analytics y servicios de afiliados — para mejorar tu experiencia y medir el uso del sitio.{" "}
        <Link href="/terminos#cookies" style={{ color: "#2ab5a0", textDecoration: "underline" }}>
          Política de cookies
        </Link>
      </p>
      <div style={{ display: "flex", gap: "8px", flexShrink: 0 }}>
        <button
          onClick={essential}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 600,
            background: "transparent",
            border: "1px solid rgba(255,255,255,0.22)",
            color: "rgba(255,255,255,0.68)",
            cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}
        >
          Solo esenciales
        </button>
        <button
          onClick={accept}
          style={{
            padding: "8px 22px",
            borderRadius: "8px",
            fontSize: "12px",
            fontWeight: 700,
            background: "#2ab5a0",
            border: "none",
            color: "white",
            cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: "0 2px 12px rgba(42,181,160,0.4)",
          }}
        >
          Aceptar todo
        </button>
      </div>
    </div>
  );
}
