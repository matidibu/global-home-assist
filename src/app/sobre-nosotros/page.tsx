import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Sobre Global Home Assist — Toda la información de viaje en un lugar",
  description: "Descubrí cómo Global Home Assist centraliza información de múltiples fuentes (IA, datos oficiales, viajeros reales) para que no tengas que buscar en 20 sitios diferentes. Transparencia total sobre nuestro modelo y cómo verificamos la información.",
  openGraph: {
    type: "website",
    title: "Sobre Global Home Assist — Información de viaje centralizada",
    description: "Toda la información para viajar mejor en un solo lugar: itinerarios, seguridad, datos de embajadas, hospitales, cambios, hoteles y vuelos.",
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
      <p style={{ fontSize: "14px", color: "#374151", lineHeight: 1.6, margin: "0 0 40px", maxWidth: "680px" }}>
        Toda la información que necesitás para viajar mejor, centralizada en un solo lugar. Sin tener que abrir 20 pestañas, sin información desactualizada, sin fraude de afiliados. Creamos esto porque planificar viajes no debería ser tan complicado.
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
          Cómo nació Global Home Assist
        </h2>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          La idea surgió de un problema simple: cuando planeás un viaje, necesitás información de un sinfín de sitios diferentes. Buscadores de vuelos acá, Google Imágenes allá, horarios de embajadas en otra pestaña, hospitales en Google Maps, alertas de seguridad en otra página más. Cada pregunta te lleva a un sitio nuevo. Es fragmentado, cansador y fácilmente terminas sin saber qué información te falta.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          <strong>¿Y si todo estuviera en un solo lugar?</strong> No solo lo que buscás, sino lo que ni sabías que necesitabas.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Así nació <strong>Global Home Assist</strong>: un sitio que centraliza toda la información relevante para viajar a cualquier destino. Itinerarios personalizados con IA, fotos reales, mapas interactivos, alertas de seguridad, números de emergencia, info de hospitales, datos de cambio de divisas, opciones de vuelos y hoteles — todo en un mismo lugar. Sin tener que abrir 20 pestañas.
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
          Todo en un solo lugar
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { icon: "🤖", title: "Itinerario personalizado con IA", desc: "Tu itinerario día por día adaptado a tus intereses, duración, presupuesto y estilo de viaje. Generado en 30 segundos, basado en datos reales de destinos." },
            { icon: "📸", title: "Fotos y mapas reales", desc: "Cada lugar incluye fotos reales y ubicación exacta en un mapa interactivo. Sabés exactamente dónde vas y cómo se ve antes de ir." },
            { icon: "🔒", title: "Información de seguridad y salud", desc: "Alertas de seguridad actualizadas, recomendaciones de vacunación, números de emergencia locales, y ubicaciones de hospitales y comisarías." },
            { icon: "💱", title: "Datos de viaje prácticos", desc: "Información oficial sobre moneda, cambios reales, embajadas, horarios de apertura verificados, y sugerencias de presupuesto por categoría." },
            { icon: "✈️", title: "Búsqueda de vuelos y hoteles integrada", desc: "Sin dejar Global Home Assist, compará y reservá vuelos y alojamiento. Una sola ventana en lugar de 5 navegadores abiertos." },
            { icon: "📚", title: "Guías honestas en el blog", desc: "Artículos no genéricos de alguien que visitó el lugar o investigó a fondo. Precios reales, trucos que funcionan, y lo que los turistas no saben." },
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
          Quiénes somos y por qué confiar en nosotros
        </h2>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Global Home Assist es un proyecto desarrollado en Buenos Aires, Argentina, por un equipo de ingenieros y especialistas en datos. <strong>No pretendemos ser "expertos en turismo"</strong> — no somos agencia de viajes, no trabajamos en la industria turística, y eso es exactamente nuestro valor.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          <strong>Nuestra expertise real es en integración de datos y construcción de información confiable</strong>. Identificamos un problema claro: cuando planeás un viaje, nadie centraliza información de múltiples fuentes verificadas. Google te da imágenes, Booking te da hoteles, un blog de viajeros te da opiniones. Global Home Assist hizo lo que haría un ingeniero: construir un sistema que integra TODO eso en un solo lugar.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Eso significa que cada dato que mostramos viene de fuentes verificables:
        </p>
        <div style={{ margin: "0 0 16px 20px" }}>
          {[
            "APIs de clima real de servicios meteorológicos confiables",
            "Información oficial de embajadas y ministerios de salud",
            "Datos de seguridad de agencias gubernamentales (como US State Department)",
            "Reviews de viajeros verificados de plataformas consolidadas (TripAdvisor, Google Maps)",
            "Patrones de viaje de millones de usuarios reales",
            "Integración con buscadores de vuelos y hoteles establecidos",
          ].map((item, i) => (
            <p key={i} style={{ fontSize: "14px", color: "#374151", lineHeight: 1.7, margin: "8px 0" }}>
              • {item}
            </p>
          ))}
        </div>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          <strong>La IA sintetiza esa información</strong> para crear itinerarios personalizados, pero nunca inventa. Si un precio no está verificado, no lo mostramos. Si un lugar es inseguro según datos oficiales, lo marcamos. Si algo requiere disclaimers, los agregamos.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          Los afiliados (Booking, GetYourGuide, Travelpayouts) están claramente divulgados. Ganamos una comisión si reservás a través de nuestros links, pero eso NO determina nuestras recomendaciones. Muchas de nuestras sugerencias son lugares gratuitos o de acceso público. Si un lugar tiene mejor experiencia en otra plataforma, lo decimos.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: 0 }}>
          <strong>Transparencia total:</strong> el sitio evoluciona constantemente. Recibimos feedback de nuestra comunidad y ajustamos. Si cometemos un error, lo corregimos. Si encontramos información mejor, la actualizamos. No pretendemos ser perfectos — pretendemos ser honestos.
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
          Qué nos diferencia
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            {
              title: "Datos centralizados de múltiples fuentes",
              desc: "No inventamos información. Integramos datos de APIs oficiales (clima, cambios), bases de datos verificadas (hospitales, embajadas), y análisis de datos reales de viajeros. Todo en un mismo lugar en lugar de obligarte a buscar en 10 sitios.",
            },
            {
              title: "Información verificada y atribuida",
              desc: "Cuando decimos que un lugar cierra a las 6pm, esa información viene de una fuente. Cuando dicen que la comida cuesta $50, lo verificamos. Nada es genérico ni asumido.",
            },
            {
              title: "Honestos sobre las limitaciones",
              desc: "No pretendemos ser expertos en viajes. Nuestra fortaleza es agregar y sintetizar información. Te diremos cuando una recomendación viene de IA y cuando de datos verificados.",
            },
            {
              title: "Sin content mills",
              desc: "Los artículos del blog los escriben personas reales que han visitado estos lugares, no servicios de redacción masiva. Valida mucho más que un 'top 10 genérico'.",
            },
            {
              title: "Financiamiento transparente",
              desc: "Comisiones de afiliado que tú no pagas, nunca influyen en lo que recomendamos. Si un lugar no aparece en el itinerario, es porque no encaja, no porque no nos genera dinero.",
            },
            {
              title: "Privacidad real",
              desc: "No vendemos tus datos. Los anuncios de Google AdSense no son personalizados. Tus itinerarios se generan localmente, no guardamos tu historial.",
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

      {/* IA Responsable */}
      <section style={{ marginBottom: "48px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.4rem", fontWeight: 700,
          color: "#1a2a6c", margin: "0 0 16px",
          paddingBottom: "8px",
          borderBottom: "1.5px solid rgba(26,42,108,0.1)",
        }}>
          Cómo usamos inteligencia artificial responsablemente
        </h2>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          La IA es excelente para lo que hace: sintetizar información, encontrar patrones en datos reales, y crear conexiones que los humanos podrían perder. Pero tiene límites. No puede verificar si una dirección cambió la semana pasada. No entiende contexto cultural implícito. No sabe si un restaurante cerró anoche.
        </p>
        <p style={{ fontSize: "15px", color: "#374151", lineHeight: 1.8, margin: "0 0 16px" }}>
          <strong>Así que la usamos como una herramienta, no como oráculo:</strong>
        </p>
        <ul style={{ fontSize: "14px", color: "#374151", lineHeight: 1.8, margin: 0, paddingLeft: "24px" }}>
          <li style={{ marginBottom: "8px" }}>La IA genera el itinerario. Los datos reales (clima, cambios, seguridad) lo validan.</li>
          <li style={{ marginBottom: "8px" }}>Cuando algo no está en una base de datos verificada, lo marcamos como "generado por IA" para que lo verifiques.</li>
          <li style={{ marginBottom: "8px" }}>Los horarios y precios se actualizan manualmente cuando tenemos feedback de que cambiaron.</li>
          <li>Confiamos más en datos de datos oficiales que en lo que una IA "cree" que es verdad.</li>
        </ul>
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
