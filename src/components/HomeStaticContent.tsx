import Link from "next/link";
import { destinations } from "@/data/destinations";
import { generateFAQSchema } from "@/lib/schemaMarkup";

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

const WHAT_YOU_GET = [
  {
    icon: "🛡️",
    title: "Seguridad y salud al día",
    desc: "Cada itinerario suma alertas de seguridad vigentes por zona, vacunas recomendadas, números de emergencia locales y la ubicación del hospital y la comisaría más cercanos al destino. Información que normalmente tenés que buscar en el sitio del ministerio de salud o de tu embajada, ya integrada en el plan.",
  },
  {
    icon: "🛂",
    title: "Trámites y datos prácticos",
    desc: "Dirección y horarios de la embajada o consulado de tu país, tipo de cambio real de la moneda local y un presupuesto estimado por categoría (comida, transporte, entradas). Nada de cifras genéricas: son los datos que necesitás antes de hacer la valija.",
  },
  {
    icon: "📸",
    title: "Fotos y mapas reales",
    desc: "Cada parada del itinerario muestra una foto real del lugar y su ubicación exacta en un mapa interactivo con la ruta entre actividades ya calculada, así sabés cuánto vas a caminar o viajar cada día.",
  },
  {
    icon: "✈️",
    title: "Vuelos y hoteles sin salir del sitio",
    desc: "Buscador de vuelos y hoteles integrado para comparar precios sin abrir una pestaña nueva. Vas del plan del día a la reserva en el mismo lugar.",
  },
];

const FAQS = [
  {
    question: "¿Cuánto cuesta usar Global Home Assist?",
    answer: "Nada. El planificador es 100% gratuito y no pide registro. El sitio se financia con comisiones de afiliado (cuando reservás un vuelo, hotel o tour a través de nuestros links, sin costo extra para vos) y con publicidad de Google AdSense — nunca cobrándole al usuario.",
  },
  {
    question: "¿Cómo genera el itinerario la inteligencia artificial?",
    answer: "Usamos un modelo de IA (GPT-4o) para armar la estructura día por día según tus intereses, presupuesto y duración de viaje, pero los datos concretos —fotos, ubicaciones, clima, cambio de moneda, alertas de seguridad— vienen de fuentes verificadas (Geoapify, Google Places, APIs meteorológicas, fuentes oficiales de seguridad). La IA organiza y prioriza esa información, no la inventa.",
  },
  {
    question: "¿Puedo confiar en la información de seguridad y salud?",
    answer: "La tratamos con la misma seriedad que el resto del contenido: se basa en fuentes oficiales (como el Departamento de Estado de EE.UU. y ministerios de salud). Aun así, es información de referencia, no un reemplazo de las recomendaciones oficiales de tu propio gobierno — siempre conviene confirmar antes de viajar, especialmente a destinos con situación cambiante.",
  },
  {
    question: "¿Necesito crear una cuenta para generar mi itinerario?",
    answer: "No. Completás destino, días, presupuesto e intereses, y el itinerario se genera al instante. No creamos perfiles de usuario ni guardamos un historial de tus búsquedas.",
  },
  {
    question: "¿En qué destinos funciona el planificador?",
    answer: "Tenemos guías curadas en profundidad para más de 24 ciudades (con detalle día por día, precios y tips verificados) y el generador con IA puede armar un itinerario para prácticamente cualquier destino del mundo que ingreses.",
  },
  {
    question: "Si es gratis, ¿de qué vive Global Home Assist?",
    answer: "De comisiones de afiliado (Booking, Aviasales, GetYourGuide, entre otros) cuando reservás a través de nuestros enlaces, y de publicidad de Google AdSense. Esas relaciones comerciales no determinan qué te recomendamos: muchas sugerencias del itinerario son lugares gratuitos o de acceso público.",
  },
];

export function HomeStaticContent() {
  const featured = FEATURED_DESTINATIONS
    .map(slug => destinations.find(d => d.slug === slug))
    .filter(Boolean) as typeof destinations;

  return (
    <div style={{
      background: "rgba(8, 14, 45, 0.80)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
    }}>
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
          <Link href="/itinerario/paris" style={{
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
            <Link key={dest.slug} href={`/itinerario/${dest.slug}`} style={{ textDecoration: "none" }}>
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

      {/* Qué incluye cada itinerario */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 10px",
          }}>
            Más que un itinerario: toda la info de tu viaje
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
            Lo que en general implica abrir 5 o 6 sitios distintos, acá viene incluido en el mismo plan
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
        }}>
          {WHAT_YOU_GET.map(item => (
            <div key={item.title} style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px",
              padding: "24px",
            }}>
              <div style={{ fontSize: "26px", marginBottom: "12px" }}>{item.icon}</div>
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

      {/* Por qué usar Global Home Assist */}
      <div className="home-why-section" style={{
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

      {/* FAQ */}
      <div style={{ marginTop: "56px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 24px",
          textAlign: "center",
        }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map(faq => (
            <div key={faq.question} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "18px 22px",
            }}>
              <h3 style={{
                fontWeight: 700, fontSize: "14px",
                color: "white", margin: "0 0 8px",
              }}>
                {faq.question}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(FAQS)) }}
      />
    </section>
    </div>
  );
}
