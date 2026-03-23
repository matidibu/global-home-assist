"use client";

import { useState } from "react";
import { Plane, Lock, MapPin, Calendar, FileDown, Zap, Check, X, Mail } from "lucide-react";

interface PremiumModalProps {
  days: number;
  destination: string;
  onClose: () => void;
}

const FEATURES = [
  { icon: <Calendar size={15} strokeWidth={2} />, text: "Itinerarios de hasta 7 días" },
  { icon: <MapPin size={15} strokeWidth={2} />, text: "Mapa interactivo con todas las rutas" },
  { icon: <FileDown size={15} strokeWidth={2} />, text: "Descarga en PDF lista para imprimir" },
  { icon: <Zap size={15} strokeWidth={2} />, text: "Generación ilimitada de itinerarios" },
];

export function PremiumModal({ days, destination, onClose }: PremiumModalProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) { setError("Ingresá un email válido"); return; }
    setLoading(true);
    setError("");
    try {
      await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, days, destination }),
      });
      setSubmitted(true);
    } catch {
      setError("Hubo un error. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      position: "fixed", inset: 0,
      background: "rgba(10,18,60,0.82)",
      backdropFilter: "blur(8px)",
      zIndex: 999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    }}>
      <div style={{
        background: "linear-gradient(160deg, #0f1f5c 0%, #1a2a6c 60%, #1e3a5f 100%)",
        border: "1.5px solid rgba(255,255,255,0.13)",
        borderRadius: "28px",
        padding: "40px 36px",
        maxWidth: "480px",
        width: "100%",
        position: "relative",
        boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
      }}>

        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px",
            background: "rgba(255,255,255,0.08)", border: "none",
            borderRadius: "50%", width: "32px", height: "32px",
            cursor: "pointer", display: "flex", alignItems: "center",
            justifyContent: "center", color: "rgba(255,255,255,0.5)",
          }}
        >
          <X size={15} strokeWidth={2.5} />
        </button>

        {/* Lock badge */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "7px",
          background: "rgba(42,181,160,0.15)",
          border: "1px solid rgba(42,181,160,0.35)",
          borderRadius: "100px", padding: "5px 16px", marginBottom: "20px",
        }}>
          <Lock size={11} color="#2ab5a0" strokeWidth={2.5} />
          <span style={{ fontSize: "11px", fontWeight: 800, color: "#2ab5a0", textTransform: "uppercase", letterSpacing: "0.1em" }}>
            Premium · Próximamente
          </span>
        </div>

        {!submitted ? (
          <>
            {/* Headline */}
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.4rem, 4vw, 1.9rem)",
              fontWeight: 700, color: "white",
              margin: "0 0 10px 0", lineHeight: 1.15,
            }}>
              Desbloqueá tu itinerario de {days} días
            </h2>

            {destination && (
              <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)", margin: "0 0 24px 0", display: "flex", alignItems: "center", gap: "5px" }}>
                <Plane size={13} strokeWidth={2} color="#2ab5a0" /> {destination}
              </p>
            )}

            {/* Features */}
            <div style={{ marginBottom: "28px" }}>
              {FEATURES.map((f, i) => (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  marginBottom: "10px",
                }}>
                  <div style={{
                    width: "28px", height: "28px", borderRadius: "8px",
                    background: "rgba(42,181,160,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#2ab5a0", flexShrink: 0,
                  }}>
                    {f.icon}
                  </div>
                  <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)" }}>{f.text}</span>
                </div>
              ))}
            </div>

            {/* Price teaser */}
            <div style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              padding: "16px 20px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
              <div>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "0 0 4px 0", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700 }}>Precio de lanzamiento</p>
                <p style={{ fontSize: "24px", fontWeight: 800, color: "white", margin: 0, fontFamily: "'Playfair Display', serif" }}>
                  $4.99 <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400 }}>USD · pago único</span>
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <p style={{ fontSize: "11px", color: "#2ab5a0", fontWeight: 700, margin: 0 }}>Sin suscripción</p>
                <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", margin: "2px 0 0 0" }}>Sin registro obligatorio</p>
              </div>
            </div>

            {/* Email form */}
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.55)", margin: "0 0 12px 0" }}>
              Dejá tu email y te avisamos cuando esté disponible:
            </p>
            <form onSubmit={handleSubmit}>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ flex: 1, position: "relative" }}>
                  <Mail size={14} color="rgba(255,255,255,0.3)" strokeWidth={2} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }} />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    style={{
                      width: "100%", padding: "12px 14px 12px 36px",
                      borderRadius: "12px", fontSize: "14px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1.5px solid rgba(255,255,255,0.15)",
                      color: "white", outline: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: "12px 20px", borderRadius: "12px",
                    background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
                    color: "white", border: "none", cursor: "pointer",
                    fontWeight: 700, fontSize: "14px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    whiteSpace: "nowrap",
                    opacity: loading ? 0.7 : 1,
                  }}
                >
                  {loading ? "..." : "Avisame"}
                </button>
              </div>
              {error && <p style={{ fontSize: "12px", color: "#f87171", margin: "8px 0 0 0" }}>{error}</p>}
            </form>

            {/* Back to free */}
            <button
              onClick={onClose}
              style={{
                marginTop: "16px", background: "none", border: "none",
                color: "rgba(255,255,255,0.35)", fontSize: "12px",
                cursor: "pointer", textDecoration: "underline",
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Volver y generar itinerario gratis (2 días)
            </button>
          </>
        ) : (
          /* Success state */
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{
              width: "64px", height: "64px", borderRadius: "50%",
              background: "rgba(42,181,160,0.2)",
              border: "2px solid rgba(42,181,160,0.4)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
            }}>
              <Check size={28} color="#2ab5a0" strokeWidth={2.5} />
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.5rem", color: "white",
              margin: "0 0 10px 0",
            }}>
              ¡Anotado!
            </h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: "0 0 28px 0", lineHeight: 1.6 }}>
              Te avisamos cuando Premium esté disponible.<br />
              Mientras tanto, generá tu itinerario gratis de 2 días.
            </p>
            <button
              onClick={onClose}
              style={{
                background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
                color: "white", border: "none", borderRadius: "14px",
                padding: "13px 32px", fontSize: "14px", fontWeight: 700,
                cursor: "pointer", fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}
            >
              Generar itinerario gratis
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
