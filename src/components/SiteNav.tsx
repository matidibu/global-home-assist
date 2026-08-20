"use client";

import Link from "next/link";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

type Copy = {
  links: { href: string; label: string }[];
  cta: string;
};

const T: Record<string, Copy> = {
  es: {
    links: [
      { href: "/", label: "Planificador" },
      { href: "/blog", label: "Blog de viajes" },
      { href: "/itinerario", label: "Destinos" },
      { href: "/herramientas", label: "Herramientas" },
      { href: "/sobre-nosotros", label: "Sobre nosotros" },
    ],
    cta: "Crear itinerario →",
  },
  en: {
    links: [
      { href: "/", label: "Planner" },
      { href: "/blog", label: "Travel blog" },
      { href: "/itinerario", label: "Destinations" },
      { href: "/herramientas", label: "Tools" },
      { href: "/sobre-nosotros", label: "About us" },
    ],
    cta: "Create itinerary →",
  },
  fr: {
    links: [
      { href: "/", label: "Planificateur" },
      { href: "/blog", label: "Blog de voyage" },
      { href: "/itinerario", label: "Destinations" },
      { href: "/herramientas", label: "Outils" },
      { href: "/sobre-nosotros", label: "À propos" },
    ],
    cta: "Créer un itinéraire →",
  },
  it: {
    links: [
      { href: "/", label: "Pianificatore" },
      { href: "/blog", label: "Blog di viaggio" },
      { href: "/itinerario", label: "Destinazioni" },
      { href: "/herramientas", label: "Strumenti" },
      { href: "/sobre-nosotros", label: "Chi siamo" },
    ],
    cta: "Crea itinerario →",
  },
  de: {
    links: [
      { href: "/", label: "Planer" },
      { href: "/blog", label: "Reiseblog" },
      { href: "/itinerario", label: "Reiseziele" },
      { href: "/herramientas", label: "Tools" },
      { href: "/sobre-nosotros", label: "Über uns" },
    ],
    cta: "Reiseplan erstellen →",
  },
  pt: {
    links: [
      { href: "/", label: "Planejador" },
      { href: "/blog", label: "Blog de viagens" },
      { href: "/itinerario", label: "Destinos" },
      { href: "/herramientas", label: "Ferramentas" },
      { href: "/sobre-nosotros", label: "Sobre nós" },
    ],
    cta: "Criar roteiro →",
  },
};

export function SiteNav() {
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;

  return (
    <header style={{
      background: "rgba(6,12,44,0.97)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
      padding: "0 20px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      position: "sticky",
      top: 0,
      zIndex: 200,
      backdropFilter: "blur(12px)",
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        height: "52px",
        gap: "4px",
      }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", marginRight: "16px", flexShrink: 0 }}>
          <img src="/logo.svg" alt="Global Home Assist" style={{ height: "22px", width: "auto" }} />
        </Link>

        <nav className="sitenav-links" style={{ display: "flex", gap: "2px", alignItems: "center", flex: 1 }}>
          {t.links.map(({ href, label }) => (
            <Link key={href} href={href} style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.7)",
              textDecoration: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              whiteSpace: "nowrap",
            }}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href="/" style={{
          background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          fontSize: "12px",
          fontWeight: 700,
          textDecoration: "none",
          whiteSpace: "nowrap",
          flexShrink: 0,
        }}>
          {t.cta}
        </Link>
      </div>
    </header>
  );
}
