import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Global Home Assist",
  description: "Conocé el equipo detrás de Global Home Assist, la misión del proyecto y por qué creamos un planificador de viajes con inteligencia artificial.",
  openGraph: {
    type: "website",
    title: "Sobre Nosotros — Global Home Assist",
    description: "Conocé el equipo detrás de Global Home Assist y la misión del proyecto.",
    url: `${BASE_URL}/sobre-nosotros`,
    images: [{ url: `${BASE_URL}/sky.jpg`, width: 1200, height: 630, alt: "Global Home Assist" }],
  },
  alternates: { canonical: `${BASE_URL}/sobre-nosotros` },
};

export default function SobreNosotrosPage() {
  return (
    <main style={{
      maxWidth: "820px",
      margin: "0 auto",
      padding: "48px 24px 80px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: "#1a2a6c",
    }}>
      {/* Back link */}
      <Link href="/" style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        fontSize: "13px", color: "#2ab5a0", textDecoration: "none",
        fontWeight: 600, marginBottom: "32px",
      }}>
        ← Volver al inicio
      </Link>

      {/* Header */}
      <h1 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        fontWeight: 700, margin: "0 0 8px",
        color: "#1a2a6c",
      }}>
        Sobre Global Home Assist
      </h1>
      <p style={{ fontSize: "13px", color: "#6b7280", margin: "0 0 40px" }}>
        Buenos Aires, Argentina · Desde 2025
      </p>

      {/* Mission */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          Nuestra misión
        </h2>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Planificar un viaje puede llevar días: buscar qué ver, calcular rutas, investigar cuándo ir, comparar hoteles, leer reseñas dispersas en mil sitios diferentes. Mucho esfuerzo para un resultado que suele ser una lista genérica que no tiene en cuenta tus intereses, tu presupuesto ni tu estilo de viaje.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          <strong>Global Home Assist</strong> nació para resolver ese problema. Combinamos inteligencia artificial con información real de destinos para generar itinerarios de viaje personalizados en segundos: con rutas optimizadas, fotos reales de cada lugar, alertas de seguridad, información práctica y todo lo que necesitás para viajar mejor.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
          El servicio es gratuito. Nos financiamos a través de comisiones de afiliado cuando los usuarios reservan hoteles o vuelos a través de nuestros enlaces — sin ningún costo adicional para ellos.
        </p>
      </section>

      {/* What we do */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          Qué ofrecemos
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { icon: "🗺️", title: "Itinerarios personalizados con IA", desc: "Generamos itinerarios día por día según tu destino, duración, presupuesto e intereses. Sin listas genéricas." },
            { icon: "📸", title: "Fotos reales de cada atracción", desc: "Cada lugar del itinerario incluye imágenes reales para que puedas visualizarlo antes de ir." },
            { icon: "🗺️", title: "Mapas interactivos con rutas", desc: "Visualizá el recorrido optimizado en un mapa interactivo para aprovechar al máximo cada día." },
            { icon: "🔒", title: "Alertas de seguridad", desc: "Información actualizada sobre seguridad, recomendaciones sanitarias y datos de emergencia locales." },
            { icon: "✈️", title: "Búsqueda de vuelos y hoteles", desc: "Comparadores integrados para encontrar las mejores opciones de alojamiento y transporte." },
            { icon: "📝", title: "Blog de viajes", desc: "Guías honestas escritas por viajeros reales, sin listas genéricas ni información desactualizada." },
          ].map(item => (
            <div key={item.title} style={{
              display: "flex", gap: "16px",
              padding: "16px 20px",
              background: "#f9fafb",
              borderRadius: "12px",
              border: "1px solid #e5e7eb",
            }}>
              <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a2a6c", margin: "0 0 4px" }}>{item.title}</p>
                <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team & Expertise */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          El proyecto y el equipo
        </h2>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Global Home Assist es un proyecto independiente desarrollado en Buenos Aires, Argentina. Nuestro equipo está formado por viajeros experimentados, desarrolladores de software y especialistas en experiencia de usuario convencidos de que la inteligencia artificial puede democratizar la planificación de viajes.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Hemos acumulado más de 50 años de experiencia viajando a más de 120 países entre el equipo. Esa experiencia directa es la que informa nuestros algoritmos y el contenido del blog. No recomendamos destinos ni atracciones que no hemos visitado personalmente o verificado con múltiples fuentes confiables.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
          El sitio está en constante evolución. Escuchamos activamente el feedback de nuestra comunidad para mejorar la experiencia y agregar funcionalidades que realmente aporten valor a los viajeros.
        </p>
      </section>

      {/* Why Trust Us */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          Por qué confiar en Global Home Assist
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              title: "Contenido verificado",
              desc: "Cada dato sobre precios, horarios y información práctica es verificado regularmente. Nuestra comunidad nos ayuda a mantener la información actualizada.",
            },
            {
              title: "Sin compromises comerciales",
              desc: "Nuestras recomendaciones se basan en calidad real, no en quién nos paga más. Los afiliados no influyen en el contenido editorial.",
            },
            {
              title: "Transparencia total",
              desc: "Somos claros sobre cómo nos financiamos, qué es contenido editorial vs. promocional, y cómo procesamos tus datos.",
            },
            {
              title: "Viajeros reales escribiendo",
              desc: "Nuestro blog lo escriben personas que realmente han viajado a estos destinos, no content mills. Leerás experiencias reales, no listas genéricas.",
            },
            {
              title: "IA responsable",
              desc: "Usamos inteligencia artificial como herramienta, no como reemplazo del juicio humano. Verificamos y editamos todo.",
            },
          ].map((item) => (
            <div key={item.title} style={{
              padding: "14px 16px",
              background: "#f9fafb",
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              borderLeft: "3px solid #2ab5a0",
            }}>
              <p style={{ fontWeight: 700, fontSize: "14px", color: "#1a2a6c", margin: "0 0 6px" }}>
                {item.title}
              </p>
              <p style={{ fontSize: "13px", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Transparency */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          Transparencia y modelo de negocio
        </h2>
        <div style={{
          padding: "20px 24px",
          background: "rgba(42,181,160,0.06)",
          border: "1px solid rgba(42,181,160,0.25)",
          borderLeft: "3px solid #2ab5a0",
          borderRadius: "12px",
          marginBottom: "16px",
        }}>
          <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
            <strong>Somos transparentes sobre cómo nos financiamos:</strong> el servicio es gratuito para los usuarios. Generamos ingresos a través de (1) anuncios de Google AdSense y (2) comisiones de afiliado cuando los usuarios reservan servicios de viaje a través de nuestros enlaces. Estas comisiones son pagadas por los proveedores, nunca por los usuarios.
          </p>
        </div>
        <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
          Nuestras recomendaciones son generadas por IA basándose en criterios objetivos de calidad y relevancia. Las relaciones comerciales no influyen en los itinerarios ni en el contenido editorial del Blog.
        </p>
      </section>

      {/* Contact */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          Contacto
        </h2>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Nos encanta escuchar a nuestra comunidad. Si tenés preguntas, sugerencias o querés colaborar, escribinos:
        </p>
        <a href="mailto:globalhomeassist.app@gmail.com" style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          padding: "12px 24px",
          background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
          color: "white",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: 700,
        }}>
          ✉️ globalhomeassist.app@gmail.com
        </a>
        <p style={{ fontSize: "13px", color: "#9ca3af", margin: "12px 0 0" }}>
          Respondemos dentro de las 24 horas.
        </p>
      </section>

      {/* Links */}
      <div style={{
        marginTop: "60px", paddingTop: "24px",
        borderTop: "1px solid #e5e7eb",
        display: "flex", gap: "16px", flexWrap: "wrap",
        justifyContent: "center",
        fontSize: "13px",
      }}>
        <Link href="/terminos" style={{ color: "#2ab5a0", textDecoration: "none" }}>Términos y condiciones</Link>
        <span style={{ color: "#e5e7eb" }}>·</span>
        <Link href="/privacidad" style={{ color: "#2ab5a0", textDecoration: "none" }}>Política de Privacidad</Link>
        <span style={{ color: "#e5e7eb" }}>·</span>
        <Link href="/" style={{ color: "#2ab5a0", textDecoration: "none" }}>Volver al planificador</Link>
      </div>
    </main>
  );
}
