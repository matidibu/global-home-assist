"use client";
import { useState } from "react";

const labels: Record<string, { title: string; whatsapp: string; copy: string; copied: string; twitter: string; pdf: string }> = {
  es: { title: "¿Te gustó el itinerario?", whatsapp: "Compartir por WhatsApp", copy: "Copiar enlace", copied: "¡Enlace copiado!", twitter: "Compartir en X", pdf: "Descargar PDF" },
  en: { title: "Loved your itinerary?", whatsapp: "Share on WhatsApp", copy: "Copy link", copied: "Link copied!", twitter: "Share on X", pdf: "Download PDF" },
  fr: { title: "Vous aimez l'itinéraire ?", whatsapp: "Partager sur WhatsApp", copy: "Copier le lien", copied: "Lien copié !", twitter: "Partager sur X", pdf: "Télécharger PDF" },
  it: { title: "Ti è piaciuto l'itinerario?", whatsapp: "Condividi su WhatsApp", copy: "Copia il link", copied: "Link copiato!", twitter: "Condividi su X", pdf: "Scarica PDF" },
  de: { title: "Itinerary gefallen?", whatsapp: "Über WhatsApp teilen", copy: "Link kopieren", copied: "Link kopiert!", twitter: "Auf X teilen", pdf: "PDF herunterladen" },
  pt: { title: "Gostou do itinerário?", whatsapp: "Compartilhar no WhatsApp", copy: "Copiar link", copied: "Link copiado!", twitter: "Compartilhar no X", pdf: "Baixar PDF" },
};

const shareTexts: Record<string, string> = {
  es: "¡Mirá el itinerario de viaje que generé con IA! 🌍✈️",
  en: "Check out the AI-generated travel itinerary I created! 🌍✈️",
  fr: "Découvrez l'itinéraire de voyage que j'ai créé avec l'IA ! 🌍✈️",
  it: "Guarda l'itinerario di viaggio che ho creato con l'IA! 🌍✈️",
  de: "Schau dir meinen KI-generierten Reiseplan an! 🌍✈️",
  pt: "Veja o roteiro de viagem que criei com IA! 🌍✈️",
};

const APP_URL = "https://global-home-assist.vercel.app";

interface Props {
  destination: string;
  language: string;
}

export default function ShareButton({ destination, language }: Props) {
  const lb = labels[language] || labels.es;
  const baseText = shareTexts[language] || shareTexts.es;
  const [copied, setCopied] = useState(false);

  const shareText = `${baseText}\n${destination} → ${APP_URL}`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${baseText}\n${destination} → ${APP_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handlePrint = () => {
    // Directly hide photo elements via JS — bypasses CSS specificity issues
    // with inline styles that @media print can't reliably override
    const photos = document.querySelectorAll<HTMLElement>('.activity-card-photo');
    const cards = document.querySelectorAll<HTMLElement>('.activity-card');
    photos.forEach(el => { el.style.setProperty('display', 'none', 'important'); });
    cards.forEach(el => {
      el.style.setProperty('min-height', '0', 'important');
      el.style.setProperty('display', 'block', 'important');
    });
    window.print();
    // Restore after print dialog closes
    setTimeout(() => {
      photos.forEach(el => { el.style.removeProperty('display'); });
      cards.forEach(el => {
        el.style.removeProperty('min-height');
        el.style.removeProperty('display');
      });
    }, 1500);
  };

  return (
    <div style={{
      background: "linear-gradient(135deg, #f0fdf4, #dcfce7)",
      border: "1.5px solid #86efac",
      borderRadius: "16px",
      padding: "22px 28px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
        <span style={{ fontSize: "38px", flexShrink: 0 }}>🔗</span>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#166534", marginBottom: "3px" }}>
            {lb.title}
          </div>
          <div style={{ fontSize: "12px", color: "#15803d" }}>
            {destination}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {/* WhatsApp */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            background: "#25D366",
            color: "white",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(37,211,102,0.3)",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.117 1.532 5.845L.057 23.492a.5.5 0 0 0 .612.612l5.648-1.475A11.951 11.951 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.644-.519-5.148-1.422l-.369-.221-3.827 1 1.017-3.713-.243-.381A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
          </svg>
          {lb.whatsapp}
        </a>

        {/* Twitter / X */}
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            background: "#000",
            color: "white",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.745l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          {lb.twitter}
        </a>

        {/* Copy link */}
        <button
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            background: copied ? "#166534" : "white",
            color: copied ? "white" : "#166534",
            border: "1.5px solid #86efac",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {copied ? "✓" : "📋"} {copied ? lb.copied : lb.copy}
        </button>

        {/* PDF */}
        <button
          onClick={handlePrint}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "7px",
            background: "#1a2a6c",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(26,42,108,0.3)",
          }}
        >
          📄 {lb.pdf}
        </button>
      </div>
    </div>
  );
}
