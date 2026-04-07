"use client";

/* ─── QualityIndex — Feature Showcase ────────────────────────────────────
   Inspirado en Linear, Apple y Stripe:
   - Stats bar con números clave
   - Secciones alternadas izquierda/derecha (no listas planas)
   - Mockups CSS que simulan el producto real
   - Mucho espacio, headlines grandes, sin "muros de texto"
─────────────────────────────────────────────────────────────────────────── */

/* Mockup: tarjeta de día del itinerario */
function ItineraryMockup() {
  return (
    <div style={{
      background: "white", borderRadius: "16px",
      overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      width: "100%", maxWidth: "340px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Day header */}
      <div style={{ background: "linear-gradient(135deg, #1a2a6c, #2563eb)", padding: "14px 18px", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ background: "rgba(255,255,255,0.15)", borderRadius: "8px", padding: "4px 10px", textAlign: "center" }}>
          <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.7)", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>DÍA</div>
          <div style={{ fontSize: "22px", color: "white", fontWeight: 900, lineHeight: 1 }}>1</div>
        </div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "14px", color: "white", fontWeight: 700 }}>
          Centro Histórico y Arte
        </div>
      </div>
      {/* Activities */}
      {[
        { time: "09:00", name: "Museo del Prado", tag: "⭐ Imperdible", color: "#fef3c7", tagColor: "#92400e" },
        { time: "12:30", name: "Plaza Mayor", tag: "📸 Foto", color: "#eff6ff", tagColor: "#1e40af" },
        { time: "15:00", name: "Parque del Retiro", tag: "🌿 Relax", color: "#f0fdf4", tagColor: "#166534" },
      ].map((a, i) => (
        <div key={i} style={{ padding: "10px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: 800, color: "#1a2a6c", flexShrink: 0 }}>
            {a.time.split(":")[0]}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: "#111827", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</div>
          </div>
          <span style={{ fontSize: "9px", fontWeight: 700, background: a.color, color: a.tagColor, borderRadius: "999px", padding: "2px 7px", whiteSpace: "nowrap" }}>{a.tag}</span>
        </div>
      ))}
      <div style={{ padding: "10px 16px", background: "#f9fafb", display: "flex", gap: "8px" }}>
        {["⏱ ~6 hs", "💰 ~€35", "🚶 2.1 km"].map(s => (
          <span key={s} style={{ fontSize: "10px", color: "#6b7280", fontWeight: 600 }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

/* Mockup: mapa con puntos conectados */
function MapMockup() {
  const points = [
    { x: 60, y: 40, label: "A" },
    { x: 155, y: 90, label: "B" },
    { x: 110, y: 160, label: "C" },
    { x: 230, y: 130, label: "D" },
  ];
  return (
    <div style={{
      background: "#0f172a", borderRadius: "16px",
      overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      width: "100%", maxWidth: "340px", padding: "20px",
    }}>
      <div style={{ fontSize: "11px", fontWeight: 800, color: "#2ab5a0", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "12px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        🗺️ Mapa del viaje
      </div>
      <svg viewBox="0 0 300 210" style={{ width: "100%", borderRadius: "10px", background: "#1e293b" }}>
        {/* Grid lines */}
        {[40,80,120,160,200].map(y => (
          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {[60,120,180,240].map(x => (
          <line key={x} x1={x} y1="0" x2={x} y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}
        {/* Route line */}
        <polyline
          points={points.map(p => `${p.x + 20},${p.y + 20}`).join(" ")}
          fill="none" stroke="#2ab5a0" strokeWidth="2" strokeDasharray="5,4" opacity="0.7"
        />
        {/* Points */}
        {points.map((p, i) => (
          <g key={i}>
            <circle cx={p.x + 20} cy={p.y + 20} r="12" fill="#1a2a6c" stroke="#2ab5a0" strokeWidth="2" />
            <text x={p.x + 20} y={p.y + 25} textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">{p.label}</text>
          </g>
        ))}
        {/* Walking times */}
        {points.slice(0,-1).map((p, i) => {
          const next = points[i+1];
          const mx = (p.x + next.x)/2 + 20;
          const my = (p.y + next.y)/2 + 14;
          return (
            <text key={i} x={mx} y={my} textAnchor="middle" fill="#2ab5a0" fontSize="8" fontFamily="sans-serif">12 min</text>
          );
        })}
      </svg>
      <div style={{ display: "flex", gap: "8px", marginTop: "10px", flexWrap: "wrap" }}>
        {["A → Prado","B → Retiro","C → Cibeles","D → Sol"].map(l => (
          <span key={l} style={{ fontSize: "10px", color: "rgba(255,255,255,0.5)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* Mockup: travel hack card */
function HackMockup() {
  return (
    <div style={{
      background: "rgba(8,16,54,0.95)", borderRadius: "16px",
      border: "1px solid rgba(42,181,160,0.2)",
      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      width: "100%", maxWidth: "340px", padding: "20px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      <div style={{ fontSize: "11px", fontWeight: 800, color: "#2ab5a0", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>
        🧠 Travel Hacks · Madrid
      </div>
      {[
        { icon: "🎟️", tip: "Comprá el Abono Turístico de metro — ilimitado por días.", save: "Ahorrás €12" },
        { icon: "🕗", tip: "El Prado los domingos cierra a las 19hs — entrá gratis de 17 a 19.", save: "Gratis" },
        { icon: "🍽️", tip: "El menú del día incluye 3 pasos + bebida por €12 en La Latina.", save: "Mejor precio" },
      ].map((h, i) => (
        <div key={i} style={{ display: "flex", gap: "10px", marginBottom: i < 2 ? "12px" : 0, paddingBottom: i < 2 ? "12px" : 0, borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
          <span style={{ fontSize: "18px", flexShrink: 0 }}>{h.icon}</span>
          <div style={{ flex: 1 }}>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.75)", margin: "0 0 3px 0", lineHeight: 1.4 }}>{h.tip}</p>
            <span style={{ fontSize: "9px", fontWeight: 700, color: "#2ab5a0", background: "rgba(42,181,160,0.12)", borderRadius: "999px", padding: "2px 7px", border: "1px solid rgba(42,181,160,0.2)" }}>
              {h.save}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

const FEATURES = [
  {
    eyebrow: "📅 Itinerario",
    headline: "Cada día, pensado para no perder tiempo.",
    sub: "Actividades ordenadas por zona geográfica, con fotos reales, duración estimada y tips de quienes ya estuvieron ahí.",
    bullets: ["Fotos reales de cada atracción", "Must-sees marcados con horario y precio", "Tips que no están en Wikipedia"],
    mockup: <ItineraryMockup />,
    reverse: false,
  },
  {
    eyebrow: "🗺️ Mapa interactivo",
    headline: "Todos tus puntos. Sin abrir otra app.",
    sub: "El mapa interactivo muestra cada lugar del itinerario con tiempos a pie y en transporte entre cada uno.",
    bullets: ["Rutas optimizadas entre actividades", "Tiempos reales de traslado", "Sin necesidad de Google Maps extra"],
    mockup: <MapMockup />,
    reverse: true,
  },
  {
    eyebrow: "💡 Travel Hacks",
    headline: "Los trucos que solo da quien ya estuvo.",
    sub: "Consejos específicos para tu destino generados por IA con criterio de experto: cómo ahorrar, qué evitar, dónde comer bien.",
    bullets: ["Específicos para tu destino y fechas", "Ahorro real en entradas y transporte", "Restaurantes locales sin trampa turística"],
    mockup: <HackMockup />,
    reverse: false,
  },
];

export function QualityIndex() {
  return (
    <div style={{ marginTop: "48px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

      {/* ── Stats bar ── */}
      <div style={{
        display: "flex", gap: "0",
        background: "rgba(8,16,54,0.88)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        overflow: "hidden",
        marginBottom: "4px",
      }}>
        {[
          { stat: "100%", label: "Gratis", sub: "Sin tarjeta ni registro" },
          { stat: "30s", label: "Para generarlo", sub: "vs. 8 hs investigando solo" },
          { stat: "6", label: "Idiomas", sub: "Tu itinerario en el tuyo" },
          { stat: "IA +", label: "Expertos", sub: "No es ChatGPT" },
        ].map((item, i, arr) => (
          <div key={item.stat} className="quality-stat-item" style={{
            flex: 1, padding: "18px 16px", textAlign: "center",
            borderRight: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
          }}>
            <div style={{ fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 900, color: "#2ab5a0", lineHeight: 1, marginBottom: "3px" }}>
              {item.stat}
            </div>
            <div className="quality-stat-label" style={{ fontSize: "11px", fontWeight: 700, color: "white", marginBottom: "2px" }}>{item.label}</div>
            <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", display: "none" }}>{item.sub}</div>
          </div>
        ))}
      </div>

      {/* ── Feature rows ── */}
      <div style={{
        background: "rgba(8,16,54,0.88)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "20px",
        overflow: "hidden",
        marginTop: "4px",
      }}>
        {FEATURES.map((feat, i) => (
          <div key={feat.eyebrow}>
            <div className="quality-feature-row" style={{
              display: "flex",
              flexDirection: feat.reverse ? "row-reverse" : "row",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "0",
              padding: "48px 40px",
            }}>
              {/* Text side */}
              <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: "16px", padding: "0 24px" }}>
                <p style={{
                  fontSize: "10px", fontWeight: 800, color: "#2ab5a0",
                  textTransform: "uppercase", letterSpacing: "0.16em", margin: 0,
                }}>
                  {feat.eyebrow}
                </p>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
                  fontWeight: 700, color: "white",
                  margin: 0, lineHeight: 1.2,
                }}>
                  {feat.headline}
                </h3>
                <p style={{
                  fontSize: "14px", color: "rgba(255,255,255,0.55)",
                  margin: 0, lineHeight: 1.65,
                }}>
                  {feat.sub}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "4px" }}>
                  {feat.bullets.map(b => (
                    <div key={b} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "rgba(42,181,160,0.2)", border: "1px solid rgba(42,181,160,0.4)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2ab5a0" }} />
                      </div>
                      <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mockup side — oculto en mobile, visible en desktop */}
              <div className="quality-mockup-side" style={{
                flex: "1 1 280px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 24px",
              }}>
                {feat.mockup}
              </div>
            </div>

            {i < FEATURES.length - 1 && (
              <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 40px" }} />
            )}
          </div>
        ))}

        {/* ── Bottom: herramientas + CTA ── */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />
        <div className="quality-bottom-row" style={{ padding: "40px 40px 40px", display: "flex", flexWrap: "wrap", gap: "32px", alignItems: "center" }}>
          {/* Tools grid */}
          <div style={{ flex: "1 1 300px" }}>
            <p style={{ fontSize: "10px", fontWeight: 800, color: "#2ab5a0", textTransform: "uppercase", letterSpacing: "0.16em", margin: "0 0 16px 0" }}>
              🔧 También incluye
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { icon: "✈️", label: "Comparador de vuelos" },
                { icon: "🏥", label: "Centros médicos" },
                { icon: "🚗", label: "Alquiler de autos" },
                { icon: "🛡️", label: "Seguros de viaje" },
                { icon: "🚐", label: "Traslados al aeropuerto" },
                { icon: "🚨", label: "Botón SOS emergencias" },
              ].map(t => (
                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontSize: "14px" }}>{t.icon}</span>
                  <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>{t.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ flex: "0 1 260px", display: "flex", flexDirection: "column", gap: "12px", alignItems: "flex-start" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "white", margin: 0, lineHeight: 1.3 }}>
              Todo esto, gratis.<br />En 30 segundos.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="quality-cta-btn"
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #2ab5a0, #1a9985)",
                color: "white", border: "none", borderRadius: "12px",
                padding: "12px 24px", fontSize: "13px", fontWeight: 700,
                cursor: "pointer",
                boxShadow: "0 4px 20px rgba(42,181,160,0.35)",
              }}
            >
              ✈️ Generá tu itinerario
            </button>
            <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", margin: 0 }}>
              Sin registro. Sin tarjeta de crédito.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
