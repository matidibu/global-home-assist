"use client";

const labels: Record<string, { title: string; subtitle: string; cta: string; note: string }> = {
  es: { title: "¿Ya tenés tu seguro de viaje?", subtitle: "Protegé tu inversión ante cancelaciones, emergencias médicas y equipaje perdido.", cta: "Cotizar ahora →", note: "Desde $20 · Cobertura mundial" },
  en: { title: "Do you have travel insurance?", subtitle: "Protect your investment against cancellations, medical emergencies and lost luggage.", cta: "Get a quote →", note: "From $20 · Worldwide coverage" },
  fr: { title: "Avez-vous une assurance voyage ?", subtitle: "Protégez votre investissement contre les annulations, urgences médicales et bagages perdus.", cta: "Obtenir un devis →", note: "À partir de $20 · Couverture mondiale" },
  it: { title: "Hai un'assicurazione viaggio?", subtitle: "Proteggi il tuo investimento da cancellazioni, emergenze mediche e bagagli smarriti.", cta: "Preventivo →", note: "Da $20 · Copertura mondiale" },
  de: { title: "Haben Sie eine Reiseversicherung?", subtitle: "Schützen Sie sich vor Stornierungen, medizinischen Notfällen und Gepäckverlust.", cta: "Angebot anfordern →", note: "Ab $20 · Weltweite Deckung" },
  pt: { title: "Você tem seguro viagem?", subtitle: "Proteja seu investimento contra cancelamentos, emergências médicas e bagagem perdida.", cta: "Cotar seguro →", note: "A partir de $20 · Cobertura mundial" },
};

const INSURANCE_URL = "https://ektatraveling.tpk.lu/DSlm1Pue";

interface Props {
  language: string;
}

export default function InsuranceBanner({ language }: Props) {
  const lb = labels[language] || labels.es;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => window.open(INSURANCE_URL, "_blank", "noopener,noreferrer")}
      onKeyDown={e => e.key === "Enter" && window.open(INSURANCE_URL, "_blank", "noopener,noreferrer")}
      style={{
        background: "linear-gradient(135deg, #fffbeb, #fef3c7)",
        border: "1.5px solid #fbbf24",
        borderRadius: "16px",
        padding: "22px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 24px rgba(251,191,36,0.25)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
        <span style={{ fontSize: "44px", flexShrink: 0 }}>🛡️</span>
        <div>
          <div style={{ fontSize: "15px", fontWeight: 700, color: "#92400e", marginBottom: "5px" }}>
            {lb.title}
          </div>
          <div style={{ fontSize: "13px", color: "#78350f", lineHeight: 1.5 }}>
            {lb.subtitle}
          </div>
          <div style={{ fontSize: "11px", color: "#b45309", marginTop: "6px", fontWeight: 600 }}>
            ✓ {lb.note}
          </div>
        </div>
      </div>
      <div style={{
        background: "linear-gradient(135deg, #f59e0b, #d97706)",
        color: "white",
        padding: "12px 22px",
        borderRadius: "12px",
        fontSize: "13px",
        fontWeight: 700,
        whiteSpace: "nowrap",
        flexShrink: 0,
        boxShadow: "0 4px 12px rgba(245,158,11,0.35)",
      }}>
        {lb.cta}
      </div>
    </div>
  );
}
