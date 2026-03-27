"use client";

import { useEffect, useRef, useState } from "react";

const SECTIONS = [
  {
    id: "q-itinerario",
    icon: "📅",
    label: "Tu itinerario",
    title: "Tu viaje, planificado al detalle",
    subtitle: "No una lista genérica — un itinerario construido para vos, en tu idioma, para tu tipo de viaje.",
    items: [
      {
        icon: "🗓️",
        title: "Días ordenados por zona",
        desc: "Cada actividad secuenciada geográficamente. Sin zigzaguear, sin perder tiempo en traslados innecesarios.",
      },
      {
        icon: "⭐",
        title: "Imperdibles con contexto",
        desc: "Los must-see marcados con duración estimada, mejor horario para ir y precio de entrada.",
      },
      {
        icon: "📸",
        title: "Fotos reales de cada lugar",
        desc: "Sabés exactamente qué vas a encontrar antes de llegar. Sin sorpresas.",
      },
      {
        icon: "💡",
        title: "Tips de quienes ya estuvieron",
        desc: "Consejos que no están en Wikipedia. Cómo evitar colas, dónde comer sin trampa turística, qué no hacer.",
      },
    ],
  },
  {
    id: "q-herramientas",
    icon: "🔧",
    label: "Herramientas",
    title: "Las herramientas que usan los que viajan bien",
    subtitle: "Incorporadas al itinerario. No tenés que buscarlas en otra pestaña.",
    items: [
      {
        icon: "🗺️",
        title: "Mapa interactivo",
        desc: "Todos tus puntos en el mapa. Tiempos a pie y en transporte entre cada lugar.",
      },
      {
        icon: "🧠",
        title: "Travel Hacks exclusivos",
        desc: "Trucos específicos para tu destino generados con inteligencia artificial y criterio de experto.",
      },
      {
        icon: "✈️",
        title: "Comparador de vuelos",
        desc: "Encontrá el vuelo más barato antes de confirmar el hotel. Integrado con Kiwi y más.",
      },
      {
        icon: "🚗",
        title: "Autos y traslados",
        desc: "Alquiler de autos y transfers al aeropuerto. Comparás y reservás sin salir de la app.",
      },
    ],
  },
  {
    id: "q-destino",
    icon: "🌍",
    label: "Info del destino",
    title: "Conocé tu destino antes de llegar",
    subtitle: "Información que importa cuando estás lejos de casa y algo sale mal.",
    items: [
      {
        icon: "🏥",
        title: "Centros médicos y emergencias",
        desc: "Hospitales, clínicas y farmacias cercanas con info de cobertura de seguro.",
      },
      {
        icon: "🛡️",
        title: "Seguros de viaje",
        desc: "Comparador integrado para viajar tranquilo sin pagar de más.",
      },
      {
        icon: "📋",
        title: "Info práctica del país",
        desc: "Moneda, electricidad, idioma, visas y costumbres locales — resumido.",
      },
      {
        icon: "🚨",
        title: "SOS de emergencia",
        desc: "Acceso rápido a números de policía, bomberos y embajada desde el itinerario.",
      },
    ],
  },
  {
    id: "q-confianza",
    icon: "✦",
    label: "Por qué confiar en nosotros",
    title: "IA con criterio. No solo IA.",
    subtitle: "La diferencia entre un resultado de ChatGPT y un itinerario que realmente funciona.",
    items: [
      {
        icon: "🧠",
        title: "IA validada por expertos en turismo",
        desc: "Cada recomendación pasa por un filtro de quienes viajaron ahí. No es un prompt — es criterio.",
      },
      {
        icon: "🆓",
        title: "100% gratuito, sin trampa",
        desc: "Sin tarjeta de crédito. Sin registro. Sin datos personales. Generás y usás.",
      },
      {
        icon: "🌐",
        title: "En tu idioma",
        desc: "Español, inglés, francés, italiano, alemán o portugués. El itinerario sale en el idioma que elijas.",
      },
      {
        icon: "📤",
        title: "Compartible e imprimible",
        desc: "Descargá, imprimí o compartí tu itinerario en un clic. Para tenerlo offline si hace falta.",
      },
    ],
  },
];

export function QualityIndex() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      { threshold: 0.35, rootMargin: "-60px 0px -40% 0px" }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
  };

  return (
    <div style={{ marginTop: "40px" }}>

      {/* ── Header + tabs ── */}
      <div style={{
        background: "rgba(8,16,54,0.88)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderBottom: "none",
        borderRadius: "28px 28px 0 0",
        padding: "32px 28px 0",
        backdropFilter: "blur(20px)",
      }}>
        <p style={{
          fontSize: "10px",
          fontWeight: 800,
          color: "#2ab5a0",
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          margin: "0 0 8px 0",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          ✦ Calidad incluida
        </p>

        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(1.15rem, 2.8vw, 1.6rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 4px 0",
          lineHeight: 1.2,
        }}>
          ¿Qué incluye tu itinerario?
        </h2>
        <p style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.55)",
          margin: "0 0 24px 0",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Todo lo que necesitás para tu viaje — en 30 segundos.
        </p>

        {/* Index tabs */}
        <div style={{ display: "flex", gap: "4px", flexWrap: "wrap", overflowX: "auto" }}>
          {SECTIONS.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                style={{
                  display: "flex", alignItems: "center", gap: "5px",
                  padding: "9px 16px", border: "none",
                  borderRadius: "10px 10px 0 0",
                  fontSize: "12px", fontWeight: 700, cursor: "pointer",
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  letterSpacing: "0.01em",
                  transition: "background 0.18s ease, color 0.18s ease",
                  background: isActive ? "rgba(42,181,160,0.18)" : "rgba(255,255,255,0.05)",
                  color: isActive ? "#2ab5a0" : "rgba(255,255,255,0.55)",
                  borderBottom: isActive ? "2px solid #2ab5a0" : "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "14px" }}>{s.icon}</span>
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{
        background: "rgba(8,16,54,0.88)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderTop: "none",
        borderRadius: "0 0 0 0",
        padding: "32px 28px",
        backdropFilter: "blur(20px)",
      }}>
        {SECTIONS.map((section, si) => (
          <div key={section.id}>
            <div
              id={section.id}
              ref={(el) => { sectionRefs.current[section.id] = el; }}
              style={{ scrollMarginTop: "80px" }}
            >
              <div style={{ marginBottom: "18px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "22px" }}>{section.icon}</span>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.05rem", fontWeight: 700, color: "white", margin: 0,
                  }}>
                    {section.title}
                  </h3>
                </div>
                <p style={{
                  fontSize: "12px", color: "rgba(255,255,255,0.45)",
                  margin: "0 0 0 32px", fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.5,
                }}>
                  {section.subtitle}
                </p>
              </div>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(195px, 1fr))",
                gap: "10px",
                marginBottom: si < SECTIONS.length - 1 ? "36px" : 0,
              }}>
                {section.items.map((item) => (
                  <div
                    key={item.title}
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "14px", padding: "16px",
                      transition: "border-color 0.15s ease, background 0.15s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(42,181,160,0.35)";
                      el.style.background = "rgba(42,181,160,0.06)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "rgba(255,255,255,0.08)";
                      el.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    <div style={{ fontSize: "20px", marginBottom: "9px" }}>{item.icon}</div>
                    <p style={{ fontWeight: 700, fontSize: "13px", color: "white", margin: "0 0 5px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0, lineHeight: 1.55, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {si < SECTIONS.length - 1 && (
              <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", marginBottom: "36px" }} />
            )}
          </div>
        ))}
      </div>

      {/* ── CTA strip ── */}
      <div style={{
        background: "linear-gradient(135deg, rgba(26,42,108,0.95), rgba(42,181,160,0.2))",
        border: "1px solid rgba(42,181,160,0.25)",
        borderTop: "none",
        borderRadius: "0 0 28px 28px",
        padding: "20px 28px",
        backdropFilter: "blur(20px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: "14px",
        boxShadow: "0 8px 40px rgba(0,0,0,0.28)",
      }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: "14px", color: "white", margin: "0 0 2px 0", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Todo esto, gratis. Sin registro. En 30 segundos.
          </p>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", margin: 0, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Completá el formulario de arriba y generá tu itinerario ahora.
          </p>
        </div>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
            color: "white", border: "none", borderRadius: "12px",
            padding: "10px 22px", fontSize: "13px", fontWeight: 700, cursor: "pointer",
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            boxShadow: "0 4px 16px rgba(26,42,108,0.4)", whiteSpace: "nowrap",
          }}
        >
          ✈️ Generá tu itinerario
        </button>
      </div>
    </div>
  );
}
