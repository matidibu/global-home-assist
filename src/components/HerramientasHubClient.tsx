"use client";

import Link from "next/link";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

interface Tool {
  slug: string;
  emoji: string;
}

type ToolCopy = { title: string; description: string };
type Copy = {
  heroTitle: string;
  heroSubtitle: string;
  tools: Record<string, ToolCopy>;
};

const T: Record<string, Copy> = {
  es: {
    heroTitle: "Herramientas gratuitas de viaje",
    heroSubtitle: "Sin registro, sin costo. Elegí un destino y obtené la info que necesitás en segundos.",
    tools: {
      "seguridad-viaje": { title: "Chequeo de seguridad, salud y embajada", description: "Alertas de seguridad, clima, hospitales, consulado y números de emergencia para cualquier destino del mundo." },
      "calculadora-costos": { title: "Calculadora de presupuesto de viaje", description: "Estimación real de cuánto cuesta viajar a tu destino: alojamiento, comida, transporte y actividades." },
    },
  },
  en: {
    heroTitle: "Free travel tools",
    heroSubtitle: "No sign-up, no cost. Pick a destination and get the info you need in seconds.",
    tools: {
      "seguridad-viaje": { title: "Safety, health, and embassy check", description: "Safety alerts, weather, hospitals, consulate, and emergency numbers for any destination in the world." },
      "calculadora-costos": { title: "Travel budget calculator", description: "A real estimate of how much your trip will cost: accommodation, food, transport, and activities." },
    },
  },
  fr: {
    heroTitle: "Outils de voyage gratuits",
    heroSubtitle: "Sans inscription, sans frais. Choisissez une destination et obtenez les infos dont vous avez besoin en quelques secondes.",
    tools: {
      "seguridad-viaje": { title: "Vérification sécurité, santé et ambassade", description: "Alertes de sécurité, météo, hôpitaux, consulat et numéros d'urgence pour toute destination dans le monde." },
      "calculadora-costos": { title: "Calculateur de budget de voyage", description: "Une estimation réelle du coût de votre voyage : hébergement, nourriture, transport et activités." },
    },
  },
  it: {
    heroTitle: "Strumenti di viaggio gratuiti",
    heroSubtitle: "Senza registrazione, senza costi. Scegli una destinazione e ottieni le informazioni che ti servono in pochi secondi.",
    tools: {
      "seguridad-viaje": { title: "Controllo sicurezza, salute e ambasciata", description: "Avvisi di sicurezza, meteo, ospedali, consolato e numeri di emergenza per qualsiasi destinazione nel mondo." },
      "calculadora-costos": { title: "Calcolatore del budget di viaggio", description: "Una stima reale di quanto costerà il tuo viaggio: alloggio, cibo, trasporti e attività." },
    },
  },
  de: {
    heroTitle: "Kostenlose Reise-Tools",
    heroSubtitle: "Ohne Anmeldung, ohne Kosten. Wähle ein Reiseziel und erhalte die nötigen Infos in Sekunden.",
    tools: {
      "seguridad-viaje": { title: "Sicherheits-, Gesundheits- und Botschaftscheck", description: "Sicherheitshinweise, Wetter, Krankenhäuser, Konsulat und Notrufnummern für jedes Reiseziel weltweit." },
      "calculadora-costos": { title: "Reisebudget-Rechner", description: "Eine realistische Schätzung der Reisekosten: Unterkunft, Essen, Transport und Aktivitäten." },
    },
  },
  pt: {
    heroTitle: "Ferramentas de viagem gratuitas",
    heroSubtitle: "Sem cadastro, sem custo. Escolha um destino e obtenha as informações que precisa em segundos.",
    tools: {
      "seguridad-viaje": { title: "Checagem de segurança, saúde e embaixada", description: "Alertas de segurança, clima, hospitais, consulado e números de emergência para qualquer destino do mundo." },
      "calculadora-costos": { title: "Calculadora de orçamento de viagem", description: "Uma estimativa real de quanto custa viajar para o seu destino: hospedagem, comida, transporte e atividades." },
    },
  },
};

export function HerramientasHubClient({ tools }: { tools: Tool[] }) {
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;

  return (
    <>
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 16px 0",
          lineHeight: 1.15,
        }}>
          {t.heroTitle}
        </h1>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.7)",
          lineHeight: 1.7,
          maxWidth: "600px",
          margin: "0 auto",
        }}>
          {t.heroSubtitle}
        </p>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "20px",
      }}>
        {tools.map((tool) => {
          const copy = t.tools[tool.slug];
          return (
            <Link key={tool.slug} href={`/herramientas/${tool.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "18px",
                padding: "28px",
                height: "100%",
              }}>
                <div style={{ fontSize: "36px", marginBottom: "14px" }}>{tool.emoji}</div>
                <h2 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "white",
                  margin: "0 0 8px 0",
                }}>
                  {copy.title}
                </h2>
                <p style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {copy.description}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
