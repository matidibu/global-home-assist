"use client";

import Link from "next/link";
import { Plane } from "lucide-react";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

type Copy = {
  navLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  emptyState: string;
  ctaEyebrow: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
};

const T: Record<string, Copy> = {
  es: {
    navLabel: "Blog de Viajes",
    eyebrow: "Contenido original · Actualizado regularmente",
    title: "La revista del viajero inteligente",
    subtitle: "Guías honestas, itinerarios reales y los errores que nadie menciona. Sin listas genéricas. Sin información de 2019. Sin filtros de Instagram.",
    emptyState: "No hay artículos en esta categoría todavía.",
    ctaEyebrow: "¿Listo para planificar?",
    ctaTitle: "De la lectura al itinerario en 30 segundos",
    ctaSubtitle: "Usá la IA de Global Home Assist para convertir cualquier destino en un itinerario personalizado con mapas, fotos y rutas optimizadas.",
    ctaButton: "Planificar mi viaje gratis",
  },
  en: {
    navLabel: "Travel Blog",
    eyebrow: "Original content · Regularly updated",
    title: "The smart traveler's magazine",
    subtitle: "Honest guides, real itineraries, and the mistakes no one mentions. No generic lists. No 2019 info. No Instagram filters.",
    emptyState: "No articles in this category yet.",
    ctaEyebrow: "Ready to plan?",
    ctaTitle: "From reading to itinerary in 30 seconds",
    ctaSubtitle: "Use Global Home Assist's AI to turn any destination into a personalized itinerary with maps, photos, and optimized routes.",
    ctaButton: "Plan my trip for free",
  },
  fr: {
    navLabel: "Blog Voyage",
    eyebrow: "Contenu original · Mis à jour régulièrement",
    title: "Le magazine du voyageur avisé",
    subtitle: "Des guides honnêtes, de vrais itinéraires et les erreurs que personne ne mentionne. Pas de listes génériques. Pas d'infos de 2019. Pas de filtres Instagram.",
    emptyState: "Pas encore d'articles dans cette catégorie.",
    ctaEyebrow: "Prêt à planifier ?",
    ctaTitle: "De la lecture à l'itinéraire en 30 secondes",
    ctaSubtitle: "Utilisez l'IA de Global Home Assist pour transformer n'importe quelle destination en itinéraire personnalisé avec cartes, photos et itinéraires optimisés.",
    ctaButton: "Planifier mon voyage gratuitement",
  },
  it: {
    navLabel: "Blog di Viaggio",
    eyebrow: "Contenuto originale · Aggiornato regolarmente",
    title: "La rivista del viaggiatore intelligente",
    subtitle: "Guide oneste, itinerari reali e gli errori che nessuno menziona. Niente liste generiche. Niente info del 2019. Niente filtri Instagram.",
    emptyState: "Ancora nessun articolo in questa categoria.",
    ctaEyebrow: "Pronto a pianificare?",
    ctaTitle: "Dalla lettura all'itinerario in 30 secondi",
    ctaSubtitle: "Usa l'IA di Global Home Assist per trasformare qualsiasi destinazione in un itinerario personalizzato con mappe, foto e percorsi ottimizzati.",
    ctaButton: "Pianifica il mio viaggio gratis",
  },
  de: {
    navLabel: "Reiseblog",
    eyebrow: "Originalinhalte · Regelmäßig aktualisiert",
    title: "Das Magazin für clevere Reisende",
    subtitle: "Ehrliche Guides, echte Reiserouten und die Fehler, die niemand erwähnt. Keine generischen Listen. Keine Infos von 2019. Keine Instagram-Filter.",
    emptyState: "Noch keine Artikel in dieser Kategorie.",
    ctaEyebrow: "Bereit zu planen?",
    ctaTitle: "Vom Lesen zum Reiseplan in 30 Sekunden",
    ctaSubtitle: "Nutze die KI von Global Home Assist, um jedes Reiseziel in einen personalisierten Reiseplan mit Karten, Fotos und optimierten Routen zu verwandeln.",
    ctaButton: "Meine Reise kostenlos planen",
  },
  pt: {
    navLabel: "Blog de Viagens",
    eyebrow: "Conteúdo original · Atualizado regularmente",
    title: "A revista do viajante inteligente",
    subtitle: "Guias honestos, roteiros reais e os erros que ninguém menciona. Sem listas genéricas. Sem informações de 2019. Sem filtros do Instagram.",
    emptyState: "Ainda não há artigos nesta categoria.",
    ctaEyebrow: "Pronto para planejar?",
    ctaTitle: "Da leitura ao roteiro em 30 segundos",
    ctaSubtitle: "Use a IA do Global Home Assist para transformar qualquer destino em um roteiro personalizado com mapas, fotos e rotas otimizadas.",
    ctaButton: "Planejar minha viagem grátis",
  },
};

export function useBlogHubCopy() {
  const [language] = useAutoLanguage();
  return T[language] || T.es;
}

export function BlogNavLabel() {
  const t = useBlogHubCopy();
  return (
    <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>
      {t.navLabel}
    </span>
  );
}

export function BlogHubHeader() {
  const t = useBlogHubCopy();
  return (
    <div style={{ marginBottom: "40px" }}>
      <div style={{
        display: "inline-block",
        background: "rgba(42,181,160,0.15)",
        border: "1px solid rgba(42,181,160,0.3)",
        borderRadius: "100px",
        padding: "4px 16px",
        fontSize: "11px",
        fontWeight: 700,
        color: "#2ab5a0",
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        marginBottom: "16px",
      }}>
        {t.eyebrow}
      </div>
      <h1 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2rem, 5vw, 3.2rem)",
        fontWeight: 700,
        color: "white",
        margin: "0 0 12px 0",
        lineHeight: 1.1,
      }}>
        {t.title}
      </h1>
      <p style={{
        fontSize: "16px",
        color: "rgba(255,255,255,0.65)",
        maxWidth: "600px",
        lineHeight: 1.65,
        margin: 0,
      }}>
        {t.subtitle}
      </p>
    </div>
  );
}

export function BlogEmptyState() {
  const t = useBlogHubCopy();
  return (
    <div style={{ textAlign: "center", padding: "60px 0", color: "rgba(255,255,255,0.4)", fontSize: "15px" }}>
      {t.emptyState}
    </div>
  );
}

export function BlogBottomCta() {
  const t = useBlogHubCopy();
  return (
    <div style={{
      marginTop: "64px",
      background: "linear-gradient(135deg, rgba(42,181,160,0.15), rgba(26,42,108,0.3))",
      border: "1.5px solid rgba(42,181,160,0.25)",
      borderRadius: "24px",
      padding: "40px",
      textAlign: "center",
    }}>
      <p style={{ color: "#2ab5a0", fontWeight: 700, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.1em", margin: "0 0 12px 0" }}>
        {t.ctaEyebrow}
      </p>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
        color: "white",
        fontWeight: 700,
        margin: "0 0 16px 0",
      }}>
        {t.ctaTitle}
      </h3>
      <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", margin: "0 0 24px 0" }}>
        {t.ctaSubtitle}
      </p>
      <Link href="/" style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
        color: "white",
        padding: "14px 40px",
        borderRadius: "14px",
        fontSize: "15px",
        fontWeight: 800,
        textDecoration: "none",
        boxShadow: "0 8px 24px rgba(42,181,160,0.35)",
      }}>
        <Plane size={16} strokeWidth={2.5} /> {t.ctaButton}
      </Link>
    </div>
  );
}
