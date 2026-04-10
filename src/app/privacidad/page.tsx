import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Política de Privacidad | Global Home Assist",
  description: "Política de Privacidad de Global Home Assist. Conocé cómo recopilamos, usamos y protegemos tus datos personales.",
  openGraph: {
    type: "website",
    title: "Política de Privacidad — Global Home Assist",
    description: "Política de Privacidad de Global Home Assist.",
    url: `${BASE_URL}/privacidad`,
    images: [{ url: `${BASE_URL}/logo.svg`, width: 512, height: 512, alt: "Global Home Assist" }],
  },
  alternates: { canonical: `${BASE_URL}/privacidad` },
};

const sections = [
  {
    id: "introduccion",
    title: "1. Introducción",
    body: `Esta Política de Privacidad describe cómo Global Home Assist ("la Plataforma", "nosotros") recopila, utiliza y protege la información de los usuarios que acceden a https://global-home-assist.vercel.app (en adelante, "el Sitio").

Al utilizar el Sitio, el usuario acepta las prácticas descritas en esta Política. Si no está de acuerdo, debe abstenerse de usar el Sitio.`,
  },
  {
    id: "datos-recopilados",
    title: "2. Datos que recopilamos",
    body: `Recopilamos únicamente los datos que el usuario proporciona voluntariamente para generar un itinerario de viaje:

• Ciudad o destino de viaje
• País de origen o residencia
• Idioma de preferencia
• Tipo de viaje e intereses
• Presupuesto estimado
• Duración del viaje

No recopilamos nombre completo, documento de identidad, datos de pago ni información médica. No creamos perfiles de usuario persistentes.`,
  },
  {
    id: "uso-datos",
    title: "3. Cómo usamos tus datos",
    body: `Los datos recopilados se utilizan exclusivamente para:

• Generar el itinerario de viaje personalizado solicitado
• Mejorar la calidad y relevancia del servicio
• Análisis estadístico anónimo del uso del Sitio

No vendemos, cedemos ni compartimos datos personales con terceros, salvo con proveedores tecnológicos bajo acuerdos de confidencialidad necesarios para operar el servicio, o cuando así lo exija la ley.`,
  },
  {
    id: "cookies",
    title: "4. Cookies y tecnologías de seguimiento",
    body: `El Sitio utiliza cookies y tecnologías similares. A continuación detallamos su uso:

**Cookies técnicas esenciales**
Necesarias para el funcionamiento básico del Sitio. No pueden desactivarse sin afectar el funcionamiento.

**Cookies analíticas (Google Analytics)**
Utilizamos Google Analytics para medir el uso del Sitio de forma anónima. Google Analytics puede usar cookies para recopilar información sobre cómo los usuarios interactúan con el Sitio. Esta información se utiliza para compilar informes y mejorar el servicio. Podés optar por no participar instalando el complemento de inhabilitación de Google Analytics en tu navegador.

**Cookies publicitarias (Google AdSense)**
Este Sitio utiliza Google AdSense para mostrar anuncios. Google AdSense utiliza cookies de DoubleClick para mostrar anuncios más relevantes basados en visitas previas a este Sitio y otros sitios en internet. Los usuarios pueden inhabilitar el uso de cookies de DoubleClick visitando la configuración de anuncios de Google en https://www.google.com/settings/ads.

Terceros proveedores, incluido Google, usan cookies para mostrar anuncios basados en visitas previas del usuario a este u otros sitios web. El uso de cookies publicitarias permite a Google y a sus socios mostrar anuncios a los usuarios basándose en su visita a este Sitio y/o a otros sitios en internet.

Para obtener más información sobre cómo Google usa los datos cuando utilizás sitios o aplicaciones de nuestros socios, visitá https://policies.google.com/technologies/partner-sites.`,
  },
  {
    id: "terceros",
    title: "5. Servicios de terceros",
    body: `El Sitio integra servicios de terceros con sus propias políticas de privacidad:

• **Google Analytics** — Análisis de tráfico: https://policies.google.com/privacy
• **Google AdSense** — Publicidad: https://policies.google.com/privacy
• **Travelpayouts / HotelLook** — Afiliados de viajes: https://www.travelpayouts.com/es/legal/privacy_policy
• **Booking.com** — Reservas de alojamiento: https://www.booking.com/content/privacy.html

Estos servicios pueden recopilar datos de forma independiente conforme a sus propias políticas.`,
  },
  {
    id: "afiliados",
    title: "6. Divulgación de relaciones comerciales",
    body: `El Sitio contiene enlaces de afiliado. Cuando el usuario realiza una compra o reserva a través de dichos enlaces, Global Home Assist puede recibir una comisión. Esta comisión es abonada por el prestador del servicio y no representa ningún costo adicional para el usuario.

La existencia de relaciones de afiliado no influye en las recomendaciones generadas ni en el contenido editorial del Sitio.`,
  },
  {
    id: "derechos",
    title: "7. Tus derechos",
    body: `Los usuarios, especialmente los residentes en el Espacio Económico Europeo, tienen los siguientes derechos respecto a sus datos personales:

• Derecho de acceso a sus datos
• Derecho de rectificación de datos incorrectos
• Derecho de supresión ("derecho al olvido")
• Derecho de oposición al tratamiento
• Derecho a la portabilidad de datos

Para ejercer estos derechos, contactanos en globalhomeassist.app@gmail.com. Responderemos en un plazo máximo de 30 días.`,
  },
  {
    id: "menores",
    title: "8. Menores de edad",
    body: `El Sitio no está dirigido a menores de 13 años. No recopilamos intencionalmente datos personales de menores. Si creés que un menor nos ha proporcionado datos personales, contactanos para eliminarlos.`,
  },
  {
    id: "cambios",
    title: "9. Cambios a esta Política",
    body: `Podemos actualizar esta Política de Privacidad en cualquier momento. Los cambios se publicarán en esta página con la fecha de última actualización. El uso continuado del Sitio tras la publicación de cambios implica la aceptación de la nueva versión.`,
  },
  {
    id: "contacto",
    title: "10. Contacto",
    body: `Para consultas sobre esta Política de Privacidad o el tratamiento de tus datos personales, podés contactarnos en:

Email: globalhomeassist.app@gmail.com

Global Home Assist — Buenos Aires, Argentina`,
  },
];

export default function PrivacidadPage() {
  return (
    <main style={{
      maxWidth: "820px",
      margin: "0 auto",
      padding: "48px 24px 80px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      color: "#1a2a6c",
    }}>
      {/* Header */}
      <div style={{ marginBottom: "40px" }}>
        <Link href="/" style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontSize: "13px", color: "#2ab5a0", textDecoration: "none",
          fontWeight: 600, marginBottom: "24px",
        }}>
          ← Volver al inicio
        </Link>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
          fontWeight: 700, margin: "0 0 8px",
          color: "#1a2a6c",
        }}>
          Política de Privacidad
        </h1>
        <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
          Última actualización: abril 2026 · Global Home Assist
        </p>
        <div style={{
          marginTop: "20px", padding: "14px 18px",
          background: "rgba(42,181,160,0.08)",
          border: "1px solid rgba(42,181,160,0.3)",
          borderLeft: "3px solid #2ab5a0",
          borderRadius: "10px",
          fontSize: "13px", color: "#374151", lineHeight: 1.6,
        }}>
          Tu privacidad es importante para nosotros. Esta política explica de manera clara y transparente cómo tratamos tus datos.
        </div>
      </div>

      {/* Índice */}
      <nav style={{
        marginBottom: "48px", padding: "20px 24px",
        background: "#f9fafb", borderRadius: "12px",
        border: "1px solid #e5e7eb",
      }}>
        <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "#6b7280", margin: "0 0 12px" }}>
          Contenido
        </p>
        <ol style={{ margin: 0, paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
          {sections.map(s => (
            <li key={s.id}>
              <a href={`#${s.id}`} style={{ fontSize: "14px", color: "#1a2a6c", textDecoration: "none", fontWeight: 500 }}>
                {s.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* Secciones */}
      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {sections.map(s => (
          <section key={s.id} id={s.id}>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "1.2rem", fontWeight: 700,
              color: "#1a2a6c", margin: "0 0 12px",
              paddingBottom: "8px",
              borderBottom: "1.5px solid rgba(26,42,108,0.1)",
            }}>
              {s.title}
            </h2>
            <div style={{ fontSize: "14px", color: "#374151", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {s.body}
            </div>
          </section>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        marginTop: "60px", paddingTop: "24px",
        borderTop: "1px solid #e5e7eb",
        fontSize: "12px", color: "#9ca3af", textAlign: "center",
      }}>
        © 2026 Global Home Assist · Todos los derechos reservados ·{" "}
        <Link href="/terminos" style={{ color: "#2ab5a0", textDecoration: "none" }}>Términos y condiciones</Link>
        {" "}·{" "}
        <Link href="/" style={{ color: "#2ab5a0", textDecoration: "none" }}>Volver al planificador</Link>
      </div>
    </main>
  );
}
