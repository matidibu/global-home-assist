import { Metadata } from "next";
import Link from "next/link";

const BASE_URL = "https://global-home-assist.vercel.app";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Global Home Assist",
  description: "Términos y Condiciones de uso, Política de Privacidad y declaración de uso de Inteligencia Artificial de Global Home Assist.",
  openGraph: {
    type: "website",
    title: "Términos y Condiciones — Global Home Assist",
    description: "Términos y Condiciones de uso, Política de Privacidad y declaración de uso de Inteligencia Artificial de Global Home Assist.",
    url: `${BASE_URL}/terminos`,
    images: [
      {
        url: `${BASE_URL}/logo.svg`,
        width: 512,
        height: 512,
        alt: "Global Home Assist",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Términos y Condiciones — Global Home Assist",
    description: "Términos y Condiciones de uso, Política de Privacidad y declaración de uso de IA.",
    images: [`${BASE_URL}/logo.svg`],
  },
  alternates: { canonical: `${BASE_URL}/terminos` },
};

const sections = [
  {
    id: "introduccion",
    title: "1. Introducción",
    body: `Global Home Assist (en adelante, "la Plataforma") es un servicio digital de información y planificación de viajes. Al acceder y utilizar esta Plataforma, el usuario acepta íntegramente los presentes Términos y Condiciones. Si no está de acuerdo con alguno de estos términos, debe abstenerse de utilizar la Plataforma.`,
  },
  {
    id: "naturaleza",
    title: "2. Naturaleza del servicio",
    body: `Global Home Assist no es una agencia de viajes, no vende servicios turísticos, no emite boletos, no realiza reservas, y no actúa como intermediario contractual entre el usuario y ningún prestador de servicios. La Plataforma proporciona información orientativa para la planificación de viajes. Toda reserva, contratación o pago se realiza directamente entre el usuario y el prestador del servicio correspondiente (aerolíneas, hoteles, agencias de actividades, aseguradoras, etc.), sin intervención de Global Home Assist.`,
  },
  {
    id: "ia",
    title: "3. Uso de Inteligencia Artificial",
    body: `Los itinerarios, recomendaciones y contenidos generados por esta Plataforma son producidos mediante sistemas de inteligencia artificial (IA). El contenido generado por IA es revisado y validado por profesionales con experiencia en turismo; sin embargo, dicho proceso de validación no garantiza la exactitud, completitud, vigencia ni adecuación del contenido a las circunstancias particulares de cada usuario.

El usuario reconoce y acepta que:
• El contenido generado por IA puede contener errores, imprecisiones o información desactualizada.
• Las recomendaciones tienen carácter informativo y no constituyen asesoramiento profesional en materia turística, médica, legal, financiera ni de ninguna otra índole.
• La IA no conoce las circunstancias personales, de salud, económicas ni de ningún otro tipo del usuario.
• Es responsabilidad exclusiva del usuario verificar toda la información antes de tomar cualquier decisión de viaje.`,
  },
  {
    id: "responsabilidad",
    title: "4. Limitación de responsabilidad",
    body: `Global Home Assist no asume responsabilidad alguna por:
• Errores, omisiones o inexactitudes en el contenido generado, ya sea por IA o por cualquier otra fuente.
• El incumplimiento, la calidad, la disponibilidad o la cancelación de servicios ofrecidos por terceros.
• Daños directos, indirectos, incidentales, consecuentes o de cualquier naturaleza que pudieran derivarse del uso de la Plataforma o de la confianza depositada en su contenido.
• Cancelaciones, cierres temporales o definitivos, cambios de horario, aumentos de precios u otras modificaciones en los servicios de terceros.
• Circunstancias de fuerza mayor, incluyendo desastres naturales, conflictos armados, pandemias, huelgas, restricciones gubernamentales u otros eventos fuera del control razonable.
• Pérdidas económicas, daños personales o cualquier otro perjuicio derivado de decisiones tomadas en base a la información provista por la Plataforma.

La información presentada en esta Plataforma se obtiene de fuentes públicas disponibles en internet. Su exactitud, vigencia y completitud no están garantizadas. El usuario es el único responsable de verificar la información antes de realizar cualquier reserva, contratación o viaje.`,
  },
  {
    id: "privacidad",
    title: "5. Privacidad y tratamiento de datos personales",
    body: `Global Home Assist recopila los siguientes datos proporcionados voluntariamente por el usuario para brindar el servicio: ciudad de destino, país de origen, idioma de preferencia, tipo de viaje, intereses, presupuesto estimado y duración del viaje.

Estos datos son utilizados exclusivamente para generar el itinerario solicitado y mejorar el servicio. No son vendidos, cedidos ni compartidos con terceros, salvo en los siguientes casos:
• Proveedores tecnológicos que procesan los datos para la generación del contenido (bajo acuerdos de confidencialidad).
• Cuando sea requerido por autoridad competente conforme a la legislación aplicable.

La Plataforma no solicita ni almacena datos sensibles como nombre completo, documento de identidad, datos de pago ni información médica. No se realizan perfiles de usuario persistentes. Los datos de sesión son utilizados únicamente durante la generación del itinerario.

Los usuarios en el Espacio Económico Europeo tienen derecho a acceder, rectificar, suprimir, oponerse al tratamiento y solicitar la portabilidad de sus datos conforme al Reglamento General de Protección de Datos (GDPR). Para ejercer estos derechos, puede contactarnos a través de los medios disponibles en la Plataforma.`,
  },
  {
    id: "cookies",
    title: "6. Cookies y tecnologías de rastreo",
    body: `Esta Plataforma utiliza cookies y tecnologías similares para los siguientes propósitos:
• Cookies técnicas esenciales: necesarias para el funcionamiento básico de la Plataforma.
• Cookies analíticas: para medir el uso de la Plataforma y mejorar la experiencia del usuario (Google Analytics u otras herramientas equivalentes).
• Cookies de terceros: algunos servicios integrados (como herramientas de reserva o afiliados) pueden instalar sus propias cookies conforme a sus respectivas políticas de privacidad.

Al continuar utilizando la Plataforma, el usuario acepta el uso de cookies técnicas esenciales. El usuario puede configurar su navegador para rechazar o eliminar cookies, aunque esto podría afectar el funcionamiento de algunas funcionalidades.`,
  },
  {
    id: "afiliados",
    title: "7. Divulgación de relaciones comerciales y afiliados",
    body: `Algunos enlaces presentes en esta Plataforma son enlaces de afiliado. Esto significa que Global Home Assist puede recibir una comisión económica cuando el usuario realiza una compra o contratación a través de dichos enlaces. Esta comisión es abonada por el prestador del servicio y no implica ningún costo adicional para el usuario.

Las relaciones de afiliado existentes incluyen, entre otras, plataformas de reserva de alojamiento, búsqueda de vuelos, contratación de seguros de viaje y actividades turísticas. La existencia de una relación de afiliado no influye en las recomendaciones generadas por la IA ni en las validaciones realizadas por los expertos de la Plataforma. Global Home Assist se compromete a declarar todas sus relaciones comerciales relevantes conforme a las directrices de la FTC (EE.UU.) y legislación aplicable en otras jurisdicciones.`,
  },
  {
    id: "jurisdiccion",
    title: "8. Ley aplicable y jurisdicción",
    body: `Estos Términos y Condiciones se rigen por la legislación de la República Argentina, sin perjuicio de las normas imperativas que pudieran resultar aplicables en la jurisdicción del usuario. Para cualquier controversia derivada del uso de la Plataforma, las partes se someten a la jurisdicción de los Tribunales Ordinarios de la Ciudad Autónoma de Buenos Aires, Argentina, con renuncia expresa a cualquier otro fuero que pudiere corresponderles.

Los usuarios residentes en la Unión Europea se encuentran amparados adicionalmente por la normativa de protección al consumidor vigente en su país de residencia, en cuanto resulte aplicable e imperativa conforme al Reglamento (CE) n.º 593/2008 (Roma I).`,
  },
  {
    id: "modificaciones",
    title: "9. Modificaciones",
    body: `Global Home Assist se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta página con indicación de la fecha de última actualización. El uso continuado de la Plataforma tras la publicación de modificaciones implica la aceptación de los nuevos términos.`,
  },
];

export default function TerminosPage() {
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
          Términos y Condiciones
        </h1>
        <p style={{ fontSize: "13px", color: "#6b7280", margin: 0 }}>
          Última actualización: marzo 2026 · Global Home Assist
        </p>
        <div style={{
          marginTop: "20px", padding: "14px 18px",
          background: "rgba(42,181,160,0.08)",
          border: "1px solid rgba(42,181,160,0.3)",
          borderLeft: "3px solid #2ab5a0",
          borderRadius: "10px",
          fontSize: "13px", color: "#374151", lineHeight: 1.6,
        }}>
          Al usar Global Home Assist y generar un itinerario, el usuario declara haber leído y aceptado los presentes Términos y Condiciones en su totalidad.
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
        <Link href="/" style={{ color: "#2ab5a0", textDecoration: "none" }}>Volver al planificador</Link>
      </div>
    </main>
  );
}
