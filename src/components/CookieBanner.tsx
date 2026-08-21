"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getConsent, setConsent } from "@/lib/consent";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

type Copy = { text: string; cookiePolicy: string; essentialOnly: string; acceptAll: string };

const T: Record<string, Copy> = {
  es: {
    text: "🍪 Usamos cookies propias y de terceros — Google Analytics y servicios de afiliados — para mejorar tu experiencia y medir el uso del sitio.",
    cookiePolicy: "Política de cookies",
    essentialOnly: "Solo esenciales",
    acceptAll: "Aceptar todo",
  },
  en: {
    text: "🍪 We use our own and third-party cookies — Google Analytics and affiliate services — to improve your experience and measure site usage.",
    cookiePolicy: "Cookie policy",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
  },
  fr: {
    text: "🍪 Nous utilisons des cookies propres et tiers — Google Analytics et services d'affiliation — pour améliorer votre expérience et mesurer l'utilisation du site.",
    cookiePolicy: "Politique de cookies",
    essentialOnly: "Essentiels uniquement",
    acceptAll: "Tout accepter",
  },
  it: {
    text: "🍪 Utilizziamo cookie propri e di terze parti — Google Analytics e servizi di affiliazione — per migliorare la tua esperienza e misurare l'utilizzo del sito.",
    cookiePolicy: "Informativa sui cookie",
    essentialOnly: "Solo essenziali",
    acceptAll: "Accetta tutto",
  },
  de: {
    text: "🍪 Wir verwenden eigene und Cookies von Drittanbietern — Google Analytics und Affiliate-Dienste —, um deine Erfahrung zu verbessern und die Nutzung der Website zu messen.",
    cookiePolicy: "Cookie-Richtlinie",
    essentialOnly: "Nur essenzielle",
    acceptAll: "Alle akzeptieren",
  },
  pt: {
    text: "🍪 Usamos cookies próprios e de terceiros — Google Analytics e serviços de afiliados — para melhorar sua experiência e medir o uso do site.",
    cookiePolicy: "Política de cookies",
    essentialOnly: "Somente essenciais",
    acceptAll: "Aceitar tudo",
  },
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  function accept() {
    setConsent("all");
    setVisible(false);
  }

  function essential() {
    setConsent("essential");
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
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "16px",
      flexWrap: "wrap",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.3)",
    }}>
      <p style={{
        fontSize: "12px",
        color: "rgba(255,255,255,0.78)",
        margin: 0,
        flex: 1,
        minWidth: "180px",
        lineHeight: 1.4,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        {t.text}{" "}
        <Link href="/terminos#cookies" style={{ color: "#2ab5a0", textDecoration: "underline" }}>
          {t.cookiePolicy}
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
          {t.essentialOnly}
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
          {t.acceptAll}
        </button>
      </div>
    </div>
  );
}
