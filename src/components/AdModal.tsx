"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Plane } from "lucide-react";

interface AdModalProps {
  onContinue: () => void;
  language?: string;
}

const TEXTS: Record<string, { title: string; sub: string; adTitle: string; adSub: string; adCta: string; btnReady: string; btnWait: (n: number) => string }> = {
  es: {
    title: "Tu itinerario está listo",
    sub: "Antes de verlo, te recomendamos esta oferta de nuestro patrocinador.",
    adTitle: "¿Ya reservaste tu hotel?",
    adSub: "Compará precios en miles de hoteles y encontrá la mejor oferta para tu viaje.",
    adCta: "Ver hoteles en Booking.com →",
    btnReady: "Ver mi itinerario",
    btnWait: (n) => `Continuar en ${n}s…`,
  },
  en: {
    title: "Your itinerary is ready",
    sub: "Before viewing it, check out this offer from our sponsor.",
    adTitle: "Have you booked your hotel yet?",
    adSub: "Compare thousands of hotels and find the best deal for your trip.",
    adCta: "Find hotels on Booking.com →",
    btnReady: "View my itinerary",
    btnWait: (n) => `Continue in ${n}s…`,
  },
  fr: {
    title: "Votre itinéraire est prêt",
    sub: "Avant de le voir, découvrez cette offre de notre partenaire.",
    adTitle: "Avez-vous réservé votre hôtel ?",
    adSub: "Comparez des milliers d'hôtels et trouvez la meilleure offre.",
    adCta: "Voir les hôtels sur Booking.com →",
    btnReady: "Voir mon itinéraire",
    btnWait: (n) => `Continuer dans ${n}s…`,
  },
  it: {
    title: "Il tuo itinerario è pronto",
    sub: "Prima di vederlo, dai un'occhiata a questa offerta del nostro sponsor.",
    adTitle: "Hai già prenotato il tuo hotel?",
    adSub: "Confronta migliaia di hotel e trova l'offerta migliore per il tuo viaggio.",
    adCta: "Trova hotel su Booking.com →",
    btnReady: "Vedi il mio itinerario",
    btnWait: (n) => `Continua tra ${n}s…`,
  },
  de: {
    title: "Dein Reiseplan ist fertig",
    sub: "Schau dir vor dem Anzeigen dieses Angebot unseres Sponsors an.",
    adTitle: "Hast du dein Hotel schon gebucht?",
    adSub: "Vergleiche tausende Hotels und finde das beste Angebot für deine Reise.",
    adCta: "Hotels auf Booking.com finden →",
    btnReady: "Meinen Reiseplan anzeigen",
    btnWait: (n) => `Weiter in ${n}s…`,
  },
  pt: {
    title: "Seu itinerário está pronto",
    sub: "Antes de vê-lo, confira esta oferta do nosso patrocinador.",
    adTitle: "Você já reservou seu hotel?",
    adSub: "Compare preços em milhares de hotéis e encontre a melhor oferta.",
    adCta: "Ver hotéis no Booking.com →",
    btnReady: "Ver meu itinerário",
    btnWait: (n) => `Continuar em ${n}s…`,
  },
};

const COUNTDOWN_SECONDS = 8;

// Travelpayouts HotelLook affiliate link (marker: 712478)
const BOOKING_URL = "https://search.hotellook.com/?shmarker=712478&currency=USD";

export function AdModal({ onContinue, language = "es" }: AdModalProps) {
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);
  const t = TEXTS[language] || TEXTS.es;

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setTimeout(() => setSeconds(s => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const ready = seconds <= 0;

  const content = (
    <div style={{
      position: "fixed", inset: 0,
      background: "rgba(10,18,60,0.88)",
      backdropFilter: "blur(10px)",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: "#ffffff",
        border: "1.5px solid #e5e7eb",
        borderRadius: "28px",
        padding: "36px 32px",
        maxWidth: "460px",
        width: "100%",
        boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
      }}>

        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
          <div style={{
            width: "36px", height: "36px", borderRadius: "50%",
            background: "rgba(42,181,160,0.2)",
            border: "1.5px solid rgba(42,181,160,0.4)",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <Plane size={16} color="#2ab5a0" strokeWidth={2.5} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem", fontWeight: 700,
            color: "#1a2a6c", margin: 0,
          }}>
            {t.title}
          </h2>
        </div>

        <p style={{
          fontSize: "13px", color: "#6b7280",
          margin: "0 0 24px 0", lineHeight: 1.5, paddingLeft: "46px",
        }}>
          {t.sub}
        </p>

        {/* Ad card */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ad-card-link"
          style={{
            display: "block",
            background: "#f8fafc",
            border: "1.5px solid #e2e8f0",
            borderRadius: "18px",
            padding: "20px 22px",
            marginBottom: "24px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          {/* Booking.com logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{
              background: "#003580",
              borderRadius: "8px",
              padding: "4px 10px",
              display: "inline-flex",
              alignItems: "center",
            }}>
              <span style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontWeight: 800, fontSize: "13px",
                color: "white", letterSpacing: "-0.02em",
              }}>
                Booking<span style={{ color: "#febb02" }}>.</span>com
              </span>
            </div>
            <span style={{
              fontSize: "10px", fontWeight: 700,
              color: "#9ca3af",
              textTransform: "uppercase", letterSpacing: "0.08em",
            }}>
              Enlace de afiliado
            </span>
          </div>

          <p style={{
            fontSize: "15px", fontWeight: 700,
            color: "#111827", margin: "0 0 6px 0",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            {t.adTitle}
          </p>
          <p style={{
            fontSize: "13px", color: "#6b7280",
            margin: "0 0 14px 0", lineHeight: 1.5,
          }}>
            {t.adSub}
          </p>
          <span style={{
            fontSize: "13px", fontWeight: 700,
            color: "#2ab5a0",
          }}>
            {t.adCta}
          </span>
        </a>

        {/* CTA button with countdown */}
        <button
          onClick={ready ? onContinue : undefined}
          disabled={!ready}
          style={{
            width: "100%",
            padding: "15px 24px",
            borderRadius: "14px",
            background: ready
              ? "linear-gradient(135deg, #2ab5a0, #1a9e8c)"
              : "#f3f4f6",
            color: ready ? "white" : "#9ca3af",
            border: "none",
            cursor: ready ? "pointer" : "not-allowed",
            fontWeight: 700, fontSize: "15px",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          {ready ? (
            <>{t.btnReady} <span style={{ fontSize: "16px" }}>→</span></>
          ) : (
            <>
              <span style={{
                display: "inline-flex", alignItems: "center", justifyContent: "center",
                width: "22px", height: "22px", borderRadius: "50%",
                border: "2px solid #d1d5db",
                fontSize: "11px", fontWeight: 800,
              }}>
                {seconds}
              </span>
              {t.btnWait(seconds)}
            </>
          )}
        </button>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(content, document.body);
}
