"use client";

import { useState, useEffect } from "react";

interface EmergencyNumbers {
  general?: string;
  police?: string;
  ambulance?: string;
  fire?: string;
}

interface Props {
  city: string;
  country: string;
  emergencyNumbers?: EmergencyNumbers;
}

export default function SOSButton({ city, country, emergencyNumbers }: Props) {
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [contactPhone, setContactPhone] = useState("");
  const [contactName, setContactName] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (open && !location) {
      setLocating(true);
      navigator.geolocation.getCurrentPosition(
        pos => {
          setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setLocating(false);
        },
        () => setLocating(false),
        { timeout: 8000 }
      );
    }
  }, [open]);

  const mapsLink = location
    ? `https://maps.google.com/?q=${location.lat},${location.lon}`
    : `https://maps.google.com/?q=${encodeURIComponent(city + ", " + country)}`;

  const buildMessage = () => {
    const police = emergencyNumbers?.police || emergencyNumbers?.general || "112";
    const ambulance = emergencyNumbers?.ambulance || emergencyNumbers?.general || "112";
    return `🆘 EMERGENCIA - Necesito ayuda.\nEstoy en ${city}, ${country}.\nMi ubicación: ${mapsLink}\nPolicía: ${police} | Ambulancia: ${ambulance}`;
  };

  const sendWhatsApp = () => {
    if (!contactPhone) return;
    const phone = contactPhone.replace(/\D/g, "");
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    setMessageSent(true);
  };

  const sendSMS = () => {
    if (!contactPhone) return;
    const msg = encodeURIComponent(buildMessage());
    window.open(`sms:${contactPhone}?body=${msg}`, "_blank");
    setMessageSent(true);
  };

  const police = emergencyNumbers?.police || emergencyNumbers?.general || "112";
  const ambulance = emergencyNumbers?.ambulance || emergencyNumbers?.general || "112";
  const fire = emergencyNumbers?.fire || emergencyNumbers?.general || "112";
  const general = emergencyNumbers?.general || "112";

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => { setOpen(true); setMessageSent(false); }}
        onKeyDown={e => e.key === "Enter" && (setOpen(true), setMessageSent(false))}
        className="sos-button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          background: "linear-gradient(135deg, #dc2626, #991b1b)",
          color: "white",
          borderRadius: "16px",
          padding: "18px 32px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(220,38,38,0.4)",
          userSelect: "none",
        }}
      >
        <span style={{ fontSize: "28px" }}>🆘</span>
        <div>
          <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em" }}>BOTÓN SOS</div>
          <div style={{ fontSize: "12px", opacity: 0.85 }}>Emergencia — Ayuda inmediata</div>
        </div>
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "28px",
            width: "100%",
            maxWidth: "480px",
            maxHeight: "90vh",
            overflowY: "auto",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "28px" }}>🆘</span>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#dc2626" }}>EMERGENCIA</div>
                  <div style={{ fontSize: "13px", color: "#6b7280" }}>{city}, {country}</div>
                </div>
              </div>
              <div
                onClick={() => setOpen(false)}
                style={{ cursor: "pointer", fontSize: "20px", color: "#9ca3af", padding: "4px 8px" }}
              >
                ✕
              </div>
            </div>

            <div style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#dc2626", marginBottom: "6px" }}>
                📍 Tu ubicación
              </div>
              {locating ? (
                <div style={{ fontSize: "13px", color: "#6b7280" }}>Obteniendo ubicación GPS...</div>
              ) : location ? (
                <div>
                  <div style={{ fontSize: "13px", color: "#374151", marginBottom: "6px" }}>
                    {location.lat.toFixed(5)}, {location.lon.toFixed(5)}
                  </div>
                  <div
                    onClick={() => window.open(mapsLink, "_blank")}
                    style={{ fontSize: "12px", color: "#2563eb", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Ver en Google Maps →
                  </div>
                </div>
              ) : (
                <div>
                  <div style={{ fontSize: "13px", color: "#6b7280", marginBottom: "6px" }}>
                    No se pudo obtener GPS. Usando ciudad: {city}
                  </div>
                  <div
                    onClick={() => window.open(mapsLink, "_blank")}
                    style={{ fontSize: "12px", color: "#2563eb", cursor: "pointer", textDecoration: "underline" }}
                  >
                    Ver {city} en Google Maps →
                  </div>
                </div>
              )}
            </div>

            <div style={{
              background: "#f9fafb",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "10px" }}>
                🚨 Números de emergencia locales
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {[
                  { label: "General", num: general, color: "#dc2626" },
                  { label: "Policía", num: police, color: "#1d4ed8" },
                  { label: "Ambulancia", num: ambulance, color: "#16a34a" },
                  { label: "Bomberos", num: fire, color: "#ea580c" },
                ].map((e, i) => (
                  <div
                    key={i}
                    onClick={() => window.open(`tel:${e.num}`, "_blank")}
                    style={{
                      background: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "11px", color: "#9ca3af" }}>{e.label}</div>
                    <div style={{ fontSize: "20px", fontWeight: 700, color: e.color }}>{e.num}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#166534", marginBottom: "10px" }}>
                📱 Avisar a un contacto
              </div>
              <input
                type="text"
                placeholder="Nombre del contacto"
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  marginBottom: "8px",
                  boxSizing: "border-box",
                }}
              />
              <input
                type="tel"
                placeholder="Teléfono con código de país (ej: +54911...)"
                value={contactPhone}
                onChange={e => setContactPhone(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  marginBottom: "12px",
                  boxSizing: "border-box",
                }}
              />

              {messageSent && (
                <div style={{
                  background: "#dcfce7",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "13px",
                  color: "#166534",
                  marginBottom: "10px",
                  textAlign: "center",
                }}>
                  ✅ Mensaje enviado a {contactName || contactPhone}
                </div>
              )}

              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  onClick={sendWhatsApp}
                  style={{
                    flex: 1,
                    background: contactPhone ? "#25D366" : "#d1d5db",
                    color: "white",
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
                    cursor: contactPhone ? "pointer" : "not-allowed",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  💬 WhatsApp
                </div>
                <div
                  onClick={sendSMS}
                  style={{
                    flex: 1,
                    background: contactPhone ? "#3b82f6" : "#d1d5db",
                    color: "white",
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
                    cursor: contactPhone ? "pointer" : "not-allowed",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  📱 SMS
                </div>
              </div>
              <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "8px", textAlign: "center" }}>
                El mensaje incluye tu ubicación y números de emergencia locales
              </div>
            </div>

            <div
              onClick={() => setOpen(false)}
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#6b7280",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              Cerrar
            </div>
          </div>
        </div>
      )}
    </>
  );
}
