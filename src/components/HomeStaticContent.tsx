import Link from "next/link";
import { destinations } from "@/data/destinations";

const FEATURED_DESTINATIONS = [
  "paris", "tokio", "nueva-york", "barcelona", "bali", "roma",
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Elegís tu destino",
    desc: "Ingresá la ciudad que querés visitar, la cantidad de días y tu tipo de viaje. Podés elegir entre más de 80 destinos en todo el mundo.",
  },
  {
    step: "2",
    title: "La IA genera tu itinerario",
    desc: "En menos de 30 segundos obtenés un plan detallado día por día, con fotos reales de cada lugar, horarios de apertura y estimaciones de tiempo.",
  },
  {
    step: "3",
    title: "Explorás con el mapa interactivo",
    desc: "Cada itinerario incluye un mapa interactivo con las rutas optimizadas, alertas de seguridad locales y acceso a vuelos y hoteles.",
  },
];

export function HomeStaticContent() {
  const featured = FEATURED_DESTINATIONS
    .map(slug => destinations.find(d => d.slug === slug))
    .filter(Boolean) as typeof destinations;

  return (
    <section style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 20px 60px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Cómo funciona */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 10px",
          }}>
            ¿Cómo funciona el planificador?
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
            De cero a itinerario completo en tres pasos simples
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}>
          {HOW_IT_WORKS.map(item => (
            <div key={item.step} style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px",
              padding: "24px",
            }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: 800, color: "white",
                marginBottom: "14px",
              }}>
                {item.step}
              </div>
              <h3 style={{
                fontWeight: 700, fontSize: "15px",
                color: "white", margin: "0 0 8px",
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Destinos populares */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}>
            Destinos más planificados
          </h2>
          <Link href="/destino/paris" style={{
            fontSize: "13px", fontWeight: 700,
            color: "#2ab5a0", textDecoration: "none",
          }}>
            Ver todos los destinos →
          </Link>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "14px",
        }}>
          {featured.map(dest => (
            <Link key={dest.slug} href={`/destino/${dest.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.11)",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "32px", flexShrink: 0 }}>{dest.emoji}</span>
                <div>
                  <h3 style={{
                    fontWeight: 700, fontSize: "15px",
                    color: "white", margin: "0 0 4px",
                  }}>
                    {dest.name}
                  </h3>
                  <p style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    margin: "0 0 6px",
                  }}>
                    {dest.country} · {dest.avgBudget}
                  </p>
                  <p style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                    {dest.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Por qué usar Global Home Assist */}
      <div style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        padding: "36px 32px",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 16px",
        }}>
          ¿Por qué planificar con inteligencia artificial?
        </h2>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.8,
          margin: "0 0 16px",
          maxWidth: "720px",
        }}>
          Los itinerarios genéricos de internet están desactualizados y no te conocen. La IA de Global Home Assist genera un plan personalizado que considera tus intereses, tu ritmo de viaje y tu presupuesto — y lo hace en 30 segundos.
        </p>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.8,
          margin: "0 0 24px",
          maxWidth: "720px",
        }}>
          Cada itinerario incluye fotos reales de cada atracción, mapas interactivos con rutas optimizadas, alertas de seguridad locales e información práctica actualizada. Todo gratis, sin registro.
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {[
            "Rutas optimizadas para no perder tiempo",
            "Fotos reales de cada atracción",
            "Mapas interactivos incluidos",
            "Alertas de seguridad actualizadas",
            "Información en 6 idiomas",
            "Sin registro · Completamente gratis",
          ].map(feature => (
            <span key={feature} style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              background: "rgba(42,181,160,0.1)",
              border: "1px solid rgba(42,181,160,0.2)",
              borderRadius: "8px",
              padding: "6px 14px",
            }}>
              ✓ {feature}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
