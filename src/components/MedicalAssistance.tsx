"use client";

interface Props {
  city: string;
  country: string;
  language: string;
}

const T: Record<string, Record<string, string>> = {
  es: {
    title: "🏥 Asistencia médica al viajero",
    guideTitle: "¿Qué hacer ante una emergencia médica?",
    steps: JSON.stringify([
      { n: "1", t: "Mantené la calma", d: "Evaluá la situación. Si hay riesgo de vida, llamá al número de emergencias local de inmediato." },
      { n: "2", t: "Llamá a emergencias", d: "Usá el número de emergencias médicas del destino (lo encontrás en la sección de información del destino más abajo)." },
      { n: "3", t: "Contactá tu seguro de viaje", d: "Llamá a la línea de emergencias de tu seguro. Tenlos guardados antes de viajar." },
      { n: "4", t: "Avisá a un familiar", d: "Usá el botón SOS de esta página para enviar tu ubicación y situación a un contacto de confianza." },
      { n: "5", t: "Guardá toda la documentación", d: "Facturas médicas, recetas y diagnósticos — los vas a necesitar para el reembolso del seguro." },
    ]),
    disclaimer: "Global Home Assist no es una aseguradora ni presta servicios médicos. Esta información es orientativa. Ante una emergencia, contactá siempre los servicios de emergencia locales.",
  },
  en: {
    title: "🏥 Medical assistance for travelers",
    guideTitle: "What to do in a medical emergency?",
    steps: JSON.stringify([
      { n: "1", t: "Stay calm", d: "Assess the situation. If there is a risk to life, call local emergency services immediately." },
      { n: "2", t: "Call emergency services", d: "Use the local medical emergency number of your destination (found in the destination info section below)." },
      { n: "3", t: "Contact your travel insurance", d: "Call your insurance emergency line. Save their number before you travel." },
      { n: "4", t: "Alert a family member", d: "Use the SOS button on this page to send your location and situation to a trusted contact." },
      { n: "5", t: "Keep all documentation", d: "Medical bills, prescriptions and diagnoses — you'll need them for insurance reimbursement." },
    ]),
    disclaimer: "Global Home Assist is not an insurer and does not provide medical services. This information is for guidance only. In an emergency, always contact local emergency services.",
  },
  fr: {
    title: "🏥 Assistance médicale aux voyageurs",
    guideTitle: "Que faire en cas d'urgence médicale ?",
    steps: JSON.stringify([
      { n: "1", t: "Restez calme", d: "Évaluez la situation. En cas de danger vital, appelez immédiatement les secours locaux." },
      { n: "2", t: "Appelez les secours", d: "Utilisez le numéro d'urgence médicale de votre destination (disponible dans la section informations)." },
      { n: "3", t: "Contactez votre assurance", d: "Appelez la ligne d'urgence de votre assurance voyage. Enregistrez leur numéro avant de partir." },
      { n: "4", t: "Prévenez un proche", d: "Utilisez le bouton SOS de cette page pour envoyer votre position à un contact de confiance." },
      { n: "5", t: "Conservez les documents", d: "Factures médicales, ordonnances et diagnostics — vous en aurez besoin pour le remboursement." },
    ]),
    disclaimer: "Global Home Assist n'est pas un assureur et ne fournit pas de services médicaux. Ces informations sont à titre indicatif uniquement.",
  },
  it: {
    title: "🏥 Assistenza medica per viaggiatori",
    guideTitle: "Cosa fare in caso di emergenza medica?",
    steps: JSON.stringify([
      { n: "1", t: "Mantieni la calma", d: "Valuta la situazione. Se c'è pericolo di vita, chiama subito i servizi di emergenza locali." },
      { n: "2", t: "Chiama i soccorsi", d: "Usa il numero di emergenza medica della destinazione (lo trovi nella sezione informazioni)." },
      { n: "3", t: "Contatta la tua assicurazione", d: "Chiama la linea di emergenza della tua assicurazione viaggio. Salvala prima di partire." },
      { n: "4", t: "Avvisa un familiare", d: "Usa il pulsante SOS di questa pagina per inviare la tua posizione a un contatto fidato." },
      { n: "5", t: "Conserva tutta la documentazione", d: "Fatture mediche, ricette e diagnosi — ti serviranno per il rimborso assicurativo." },
    ]),
    disclaimer: "Global Home Assist non è un assicuratore e non fornisce servizi medici. Queste informazioni sono solo orientative.",
  },
  de: {
    title: "🏥 Medizinische Hilfe für Reisende",
    guideTitle: "Was tun im medizinischen Notfall?",
    steps: JSON.stringify([
      { n: "1", t: "Ruhe bewahren", d: "Lage einschätzen. Bei Lebensgefahr sofort den lokalen Notruf anrufen." },
      { n: "2", t: "Notruf anrufen", d: "Nutzen Sie die medizinische Notrufnummer Ihres Reiseziels (im Abschnitt Reiseinformationen)." },
      { n: "3", t: "Versicherung kontaktieren", d: "Rufen Sie die Notfallnummer Ihrer Reiseversicherung an. Speichern Sie diese vor der Reise." },
      { n: "4", t: "Angehörige informieren", d: "Nutzen Sie den SOS-Button auf dieser Seite, um Ihren Standort an eine Vertrauensperson zu senden." },
      { n: "5", t: "Alle Unterlagen aufbewahren", d: "Arztrechnungen, Rezepte und Diagnosen — Sie brauchen sie für die Versicherungserstattung." },
    ]),
    disclaimer: "Global Home Assist ist kein Versicherer und erbringt keine medizinischen Leistungen. Diese Informationen dienen nur zur Orientierung.",
  },
  pt: {
    title: "🏥 Assistência médica ao viajante",
    guideTitle: "O que fazer numa emergência médica?",
    steps: JSON.stringify([
      { n: "1", t: "Mantenha a calma", d: "Avalie a situação. Se houver risco de vida, ligue imediatamente para os serviços de emergência locais." },
      { n: "2", t: "Ligue para emergências", d: "Use o número de emergência médica do destino (disponível na seção de informações abaixo)." },
      { n: "3", t: "Contate seu seguro de viagem", d: "Ligue para a linha de emergência do seu seguro. Salve o número antes de viajar." },
      { n: "4", t: "Avise um familiar", d: "Use o botão SOS desta página para enviar sua localização a um contato de confiança." },
      { n: "5", t: "Guarde toda a documentação", d: "Faturas médicas, receitas e diagnósticos — você vai precisar para o reembolso do seguro." },
    ]),
    disclaimer: "Global Home Assist não é uma seguradora e não presta serviços médicos. Esta informação é apenas orientativa.",
  },
};


export default function MedicalAssistance({ city, country, language }: Props) {
  const t = T[language] || T.es;
  const steps = JSON.parse(t.steps);

  return (
    <div style={{
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(16px)",
      borderRadius: "20px",
      border: "1.5px solid rgba(26,42,108,0.1)",
      boxShadow: "0 8px 32px rgba(26,42,108,0.14)",
      padding: "28px",
      marginTop: "2rem",
    }}>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: "#1a2a6c", margin: "0 0 24px 0" }}>
        {t.title}
      </h2>

      {/* Guía de emergencia */}
      <div>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px", fontWeight: 700, color: "#1a2a6c", marginBottom: "16px" }}>
          🚨 {t.guideTitle}
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {steps.map((step: { n: string; t: string; d: string }) => (
            <div key={step.n} style={{
              display: "flex",
              gap: "14px",
              alignItems: "flex-start",
              background: "rgba(26,42,108,0.03)",
              borderRadius: "12px",
              padding: "14px",
              border: "1px solid rgba(26,42,108,0.07)",
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%",
                background: "linear-gradient(135deg, #1a2a6c, #2d3f8f)",
                color: "white", fontSize: "14px", fontWeight: 700,
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                {step.n}
              </div>
              <div>
                <p style={{ fontWeight: 700, fontSize: "13px", color: "#1a2a6c", margin: "0 0 4px 0" }}>{step.t}</p>
                <p style={{ fontSize: "12px", color: "#6b7280", margin: 0, lineHeight: 1.5 }}>{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer médico */}
      <div style={{
        marginTop: "20px",
        padding: "12px 16px",
        background: "rgba(42,181,160,0.06)",
        borderLeft: "3px solid #2ab5a0",
        borderRadius: "0 10px 10px 0",
      }}>
        <p style={{ fontSize: "11px", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
          ⚕️ {t.disclaimer}
        </p>
      </div>
    </div>
  );
}
