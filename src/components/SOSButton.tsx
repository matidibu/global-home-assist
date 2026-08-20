"use client";

import { useState, useEffect } from "react";

interface EmergencyNumbers {
  general?: string;
  police?: string;
  ambulance?: string;
  fire?: string;
}

interface Props {
  city: string;
  country: string;
  emergencyNumbers?: EmergencyNumbers;
  language?: string;
}

type Copy = {
  sosButton: string;
  sosSubtitle: string;
  emergencyTitle: string;
  yourLocation: string;
  gettingLocation: string;
  geoNotAvailable: string;
  permissionDenied: string;
  locationUnavailable: string;
  locationTimeout: string;
  locationFailed: string;
  approxLocation: (city: string) => string;
  viewCityOnMaps: (city: string) => string;
  viewOnMaps: string;
  emergencyNumbersTitle: string;
  labelGeneral: string;
  labelPolice: string;
  labelAmbulance: string;
  labelFire: string;
  notifyContact: string;
  placeholderName: string;
  placeholderPhone: string;
  messageSent: (name: string) => string;
  messageHint: string;
  close: string;
  buildMsg: (city: string, country: string, link: string, police: string, ambulance: string) => string;
};

const T: Record<string, Copy> = {
  es: {
    sosButton: "BOTÓN SOS",
    sosSubtitle: "Emergencia — Ayuda inmediata",
    emergencyTitle: "EMERGENCIA",
    yourLocation: "Tu ubicación",
    gettingLocation: "⏳ Obteniendo ubicación GPS...",
    geoNotAvailable: "Geolocalización no disponible en este navegador",
    permissionDenied: "Permiso denegado. Activa geolocalización en tu dispositivo.",
    locationUnavailable: "Ubicación no disponible en este momento.",
    locationTimeout: "Solicitud de ubicación expirada.",
    locationFailed: "No se pudo obtener tu ubicación",
    approxLocation: city => `Usando ubicación aproximada: ${city}`,
    viewCityOnMaps: city => `Ver ${city} en Google Maps →`,
    viewOnMaps: "Ver en Google Maps →",
    emergencyNumbersTitle: "Números de emergencia locales",
    labelGeneral: "General",
    labelPolice: "Policía",
    labelAmbulance: "Ambulancia",
    labelFire: "Bomberos",
    notifyContact: "Avisar a un contacto",
    placeholderName: "Nombre del contacto",
    placeholderPhone: "Teléfono con código de país (ej: +54911...)",
    messageSent: name => `✅ Mensaje enviado a ${name}`,
    messageHint: "El mensaje incluye tu ubicación y números de emergencia locales",
    close: "Cerrar",
    buildMsg: (city, country, link, police, ambulance) => `🆘 EMERGENCIA - Necesito ayuda.\nEstoy en ${city}, ${country}.\nMi ubicación: ${link}\nPolicía: ${police} | Ambulancia: ${ambulance}`,
  },
  en: {
    sosButton: "SOS BUTTON",
    sosSubtitle: "Emergency — Immediate help",
    emergencyTitle: "EMERGENCY",
    yourLocation: "Your location",
    gettingLocation: "⏳ Getting GPS location...",
    geoNotAvailable: "Geolocation not available in this browser",
    permissionDenied: "Permission denied. Enable geolocation on your device.",
    locationUnavailable: "Location unavailable right now.",
    locationTimeout: "Location request timed out.",
    locationFailed: "Couldn't get your location",
    approxLocation: city => `Using approximate location: ${city}`,
    viewCityOnMaps: city => `View ${city} on Google Maps →`,
    viewOnMaps: "View on Google Maps →",
    emergencyNumbersTitle: "Local emergency numbers",
    labelGeneral: "General",
    labelPolice: "Police",
    labelAmbulance: "Ambulance",
    labelFire: "Fire dept.",
    notifyContact: "Notify a contact",
    placeholderName: "Contact name",
    placeholderPhone: "Phone with country code (e.g. +1202...)",
    messageSent: name => `✅ Message sent to ${name}`,
    messageHint: "The message includes your location and local emergency numbers",
    close: "Close",
    buildMsg: (city, country, link, police, ambulance) => `🆘 EMERGENCY - I need help.\nI'm in ${city}, ${country}.\nMy location: ${link}\nPolice: ${police} | Ambulance: ${ambulance}`,
  },
  fr: {
    sosButton: "BOUTON SOS",
    sosSubtitle: "Urgence — Aide immédiate",
    emergencyTitle: "URGENCE",
    yourLocation: "Votre position",
    gettingLocation: "⏳ Récupération de la position GPS...",
    geoNotAvailable: "Géolocalisation non disponible sur ce navigateur",
    permissionDenied: "Permission refusée. Activez la géolocalisation sur votre appareil.",
    locationUnavailable: "Position indisponible pour le moment.",
    locationTimeout: "Délai de la demande de position dépassé.",
    locationFailed: "Impossible d'obtenir votre position",
    approxLocation: city => `Position approximative utilisée : ${city}`,
    viewCityOnMaps: city => `Voir ${city} sur Google Maps →`,
    viewOnMaps: "Voir sur Google Maps →",
    emergencyNumbersTitle: "Numéros d'urgence locaux",
    labelGeneral: "Général",
    labelPolice: "Police",
    labelAmbulance: "Ambulance",
    labelFire: "Pompiers",
    notifyContact: "Prévenir un contact",
    placeholderName: "Nom du contact",
    placeholderPhone: "Téléphone avec indicatif pays (ex. +3312...)",
    messageSent: name => `✅ Message envoyé à ${name}`,
    messageHint: "Le message inclut votre position et les numéros d'urgence locaux",
    close: "Fermer",
    buildMsg: (city, country, link, police, ambulance) => `🆘 URGENCE - J'ai besoin d'aide.\nJe suis à ${city}, ${country}.\nMa position : ${link}\nPolice : ${police} | Ambulance : ${ambulance}`,
  },
  it: {
    sosButton: "PULSANTE SOS",
    sosSubtitle: "Emergenza — Aiuto immediato",
    emergencyTitle: "EMERGENZA",
    yourLocation: "La tua posizione",
    gettingLocation: "⏳ Ricerca della posizione GPS...",
    geoNotAvailable: "Geolocalizzazione non disponibile in questo browser",
    permissionDenied: "Permesso negato. Attiva la geolocalizzazione sul tuo dispositivo.",
    locationUnavailable: "Posizione non disponibile in questo momento.",
    locationTimeout: "Richiesta di posizione scaduta.",
    locationFailed: "Impossibile ottenere la tua posizione",
    approxLocation: city => `Uso posizione approssimativa: ${city}`,
    viewCityOnMaps: city => `Vedi ${city} su Google Maps →`,
    viewOnMaps: "Vedi su Google Maps →",
    emergencyNumbersTitle: "Numeri di emergenza locali",
    labelGeneral: "Generale",
    labelPolice: "Polizia",
    labelAmbulance: "Ambulanza",
    labelFire: "Vigili del fuoco",
    notifyContact: "Avvisa un contatto",
    placeholderName: "Nome del contatto",
    placeholderPhone: "Telefono con prefisso internazionale (es. +3934...)",
    messageSent: name => `✅ Messaggio inviato a ${name}`,
    messageHint: "Il messaggio include la tua posizione e i numeri di emergenza locali",
    close: "Chiudi",
    buildMsg: (city, country, link, police, ambulance) => `🆘 EMERGENZA - Ho bisogno di aiuto.\nMi trovo a ${city}, ${country}.\nLa mia posizione: ${link}\nPolizia: ${police} | Ambulanza: ${ambulance}`,
  },
  de: {
    sosButton: "SOS-BUTTON",
    sosSubtitle: "Notfall — Sofortige Hilfe",
    emergencyTitle: "NOTFALL",
    yourLocation: "Dein Standort",
    gettingLocation: "⏳ GPS-Standort wird ermittelt...",
    geoNotAvailable: "Geolokalisierung in diesem Browser nicht verfügbar",
    permissionDenied: "Zugriff verweigert. Aktiviere die Geolokalisierung auf deinem Gerät.",
    locationUnavailable: "Standort derzeit nicht verfügbar.",
    locationTimeout: "Standortanfrage abgelaufen.",
    locationFailed: "Standort konnte nicht ermittelt werden",
    approxLocation: city => `Ungefährer Standort wird verwendet: ${city}`,
    viewCityOnMaps: city => `${city} auf Google Maps ansehen →`,
    viewOnMaps: "Auf Google Maps ansehen →",
    emergencyNumbersTitle: "Lokale Notrufnummern",
    labelGeneral: "Allgemein",
    labelPolice: "Polizei",
    labelAmbulance: "Rettungsdienst",
    labelFire: "Feuerwehr",
    notifyContact: "Kontakt benachrichtigen",
    placeholderName: "Name des Kontakts",
    placeholderPhone: "Telefon mit Ländervorwahl (z. B. +4915...)",
    messageSent: name => `✅ Nachricht an ${name} gesendet`,
    messageHint: "Die Nachricht enthält deinen Standort und die lokalen Notrufnummern",
    close: "Schließen",
    buildMsg: (city, country, link, police, ambulance) => `🆘 NOTFALL - Ich brauche Hilfe.\nIch bin in ${city}, ${country}.\nMein Standort: ${link}\nPolizei: ${police} | Rettungsdienst: ${ambulance}`,
  },
  pt: {
    sosButton: "BOTÃO SOS",
    sosSubtitle: "Emergência — Ajuda imediata",
    emergencyTitle: "EMERGÊNCIA",
    yourLocation: "Sua localização",
    gettingLocation: "⏳ Obtendo localização GPS...",
    geoNotAvailable: "Geolocalização não disponível neste navegador",
    permissionDenied: "Permissão negada. Ative a geolocalização no seu dispositivo.",
    locationUnavailable: "Localização indisponível no momento.",
    locationTimeout: "Solicitação de localização expirou.",
    locationFailed: "Não foi possível obter sua localização",
    approxLocation: city => `Usando localização aproximada: ${city}`,
    viewCityOnMaps: city => `Ver ${city} no Google Maps →`,
    viewOnMaps: "Ver no Google Maps →",
    emergencyNumbersTitle: "Números de emergência locais",
    labelGeneral: "Geral",
    labelPolice: "Polícia",
    labelAmbulance: "Ambulância",
    labelFire: "Bombeiros",
    notifyContact: "Avisar um contato",
    placeholderName: "Nome do contato",
    placeholderPhone: "Telefone com código do país (ex: +5511...)",
    messageSent: name => `✅ Mensagem enviada para ${name}`,
    messageHint: "A mensagem inclui sua localização e os números de emergência locais",
    close: "Fechar",
    buildMsg: (city, country, link, police, ambulance) => `🆘 EMERGÊNCIA - Preciso de ajuda.\nEstou em ${city}, ${country}.\nMinha localização: ${link}\nPolícia: ${police} | Ambulância: ${ambulance}`,
  },
};

export default function SOSButton({ city, country, emergencyNumbers, language = "es" }: Props) {
  const t = T[language] || T.es;
  const [open, setOpen] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState<string>("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactName, setContactName] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  useEffect(() => {
    if (open && !location && !locationError && !locating) {
      setLocating(true);
      setLocationError("");

      if (!navigator.geolocation) {
        setLocationError(t.geoNotAvailable);
        setLocating(false);
        return;
      }

      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
          setLocating(false);
        },
        (error) => {
          let msg = t.locationFailed;
          if (error.code === 1) msg = t.permissionDenied;
          if (error.code === 2) msg = t.locationUnavailable;
          if (error.code === 3) msg = t.locationTimeout;
          setLocationError(msg);
          setLocating(false);
        },
        { timeout: 8000, maximumAge: 0, enableHighAccuracy: false }
      );
    }
  }, [open, location, locationError, locating, t]);

  const mapsLink = location
    ? `https://maps.google.com/?q=${location.lat},${location.lon}`
    : `https://maps.google.com/?q=${encodeURIComponent(city + ", " + country)}`;

  const buildMessage = () => {
    const police = emergencyNumbers?.police || emergencyNumbers?.general || "112";
    const ambulance = emergencyNumbers?.ambulance || emergencyNumbers?.general || "112";
    return t.buildMsg(city, country, mapsLink, police, ambulance);
  };

  const sendWhatsApp = () => {
    if (!contactPhone) return;
    const phone = contactPhone.replace(/\D/g, "");
    const msg = encodeURIComponent(buildMessage());
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    setMessageSent(true);
  };

  const sendSMS = () => {
    if (!contactPhone) return;
    const msg = encodeURIComponent(buildMessage());
    window.open(`sms:${contactPhone}?body=${msg}`, "_blank");
    setMessageSent(true);
  };

  const police = emergencyNumbers?.police || emergencyNumbers?.general || "112";
  const ambulance = emergencyNumbers?.ambulance || emergencyNumbers?.general || "112";
  const fire = emergencyNumbers?.fire || emergencyNumbers?.general || "112";
  const general = emergencyNumbers?.general || "112";

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => { setOpen(true); setMessageSent(false); }}
        onKeyDown={e => e.key === "Enter" && (setOpen(true), setMessageSent(false))}
        className="sos-button"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          background: "linear-gradient(135deg, #dc2626, #991b1b)",
          color: "white",
          borderRadius: "16px",
          padding: "18px 32px",
          cursor: "pointer",
          boxShadow: "0 4px 20px rgba(220,38,38,0.4)",
          userSelect: "none",
        }}
      >
        <span style={{ fontSize: "28px" }}>🆘</span>
        <div>
          <div style={{ fontSize: "20px", fontWeight: 700, letterSpacing: "0.05em" }}>{t.sosButton}</div>
          <div style={{ fontSize: "12px", opacity: 0.85 }}>{t.sosSubtitle}</div>
        </div>
      </div>

      {open && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
          }}
          onClick={e => { if (e.target === e.currentTarget) setOpen(false); }}
        >
          <div style={{
            background: "white",
            borderRadius: "20px",
            padding: "28px",
            width: "100%",
            maxWidth: "480px",
            maxHeight: "90vh",
            overflowY: "auto",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "28px" }}>🆘</span>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#dc2626" }}>{t.emergencyTitle}</div>
                  <div style={{ fontSize: "13px", color: "#6b7280" }}>{city}, {country}</div>
                </div>
              </div>
              <div
                onClick={() => setOpen(false)}
                style={{ cursor: "pointer", fontSize: "20px", color: "#9ca3af", padding: "4px 8px" }}
              >
                ✕
              </div>
            </div>

            <div style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#dc2626", marginBottom: "6px" }}>
                📍 {t.yourLocation}
              </div>
              {locating ? (
                <div style={{ fontSize: "13px", color: "#6b7280" }}>
                  {t.gettingLocation}
                </div>
              ) : locationError ? (
                <div>
                  <div style={{ fontSize: "13px", color: "#dc2626", marginBottom: "6px", fontWeight: 500 }}>
                    ⚠️ {locationError}
                  </div>
                  <div style={{ fontSize: "12px", color: "#6b7280", marginBottom: "6px" }}>
                    {t.approxLocation(city)}
                  </div>
                  <div
                    onClick={() => window.open(mapsLink, "_blank")}
                    style={{ fontSize: "12px", color: "#2563eb", cursor: "pointer", textDecoration: "underline" }}
                  >
                    {t.viewCityOnMaps(city)}
                  </div>
                </div>
              ) : location ? (
                <div>
                  <div style={{ fontSize: "13px", color: "#374151", marginBottom: "6px" }}>
                    ✅ {location.lat.toFixed(5)}, {location.lon.toFixed(5)}
                  </div>
                  <div
                    onClick={() => window.open(mapsLink, "_blank")}
                    style={{ fontSize: "12px", color: "#2563eb", cursor: "pointer", textDecoration: "underline" }}
                  >
                    {t.viewOnMaps}
                  </div>
                </div>
              ) : null}
            </div>

            <div style={{
              background: "#f9fafb",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "10px" }}>
                🚨 {t.emergencyNumbersTitle}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {[
                  { label: t.labelGeneral, num: general, color: "#dc2626" },
                  { label: t.labelPolice, num: police, color: "#1d4ed8" },
                  { label: t.labelAmbulance, num: ambulance, color: "#16a34a" },
                  { label: t.labelFire, num: fire, color: "#ea580c" },
                ].map((e, i) => (
                  <div
                    key={i}
                    onClick={() => window.open(`tel:${e.num}`, "_blank")}
                    style={{
                      background: "white",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "10px",
                      textAlign: "center",
                      cursor: "pointer",
                    }}
                  >
                    <div style={{ fontSize: "11px", color: "#9ca3af" }}>{e.label}</div>
                    <div style={{ fontSize: "20px", fontWeight: 700, color: e.color }}>{e.num}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "16px",
            }}>
              <div style={{ fontSize: "13px", fontWeight: 600, color: "#166534", marginBottom: "10px" }}>
                📱 {t.notifyContact}
              </div>
              <input
                type="text"
                placeholder={t.placeholderName}
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  marginBottom: "8px",
                  boxSizing: "border-box",
                }}
              />
              <input
                type="tel"
                placeholder={t.placeholderPhone}
                value={contactPhone}
                onChange={e => setContactPhone(e.target.value)}
                style={{
                  width: "100%",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "14px",
                  marginBottom: "12px",
                  boxSizing: "border-box",
                }}
              />

              {messageSent && (
                <div style={{
                  background: "#dcfce7",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "13px",
                  color: "#166534",
                  marginBottom: "10px",
                  textAlign: "center",
                }}>
                  {t.messageSent(contactName || contactPhone)}
                </div>
              )}

              <div style={{ display: "flex", gap: "8px" }}>
                <div
                  onClick={sendWhatsApp}
                  style={{
                    flex: 1,
                    background: contactPhone ? "#25D366" : "#d1d5db",
                    color: "white",
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
                    cursor: contactPhone ? "pointer" : "not-allowed",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  💬 WhatsApp
                </div>
                <div
                  onClick={sendSMS}
                  style={{
                    flex: 1,
                    background: contactPhone ? "#3b82f6" : "#d1d5db",
                    color: "white",
                    borderRadius: "8px",
                    padding: "10px",
                    textAlign: "center",
                    cursor: contactPhone ? "pointer" : "not-allowed",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  📱 SMS
                </div>
              </div>
              <div style={{ fontSize: "11px", color: "#9ca3af", marginTop: "8px", textAlign: "center" }}>
                {t.messageHint}
              </div>
            </div>

            <div
              onClick={() => setOpen(false)}
              style={{
                textAlign: "center",
                fontSize: "14px",
                color: "#6b7280",
                cursor: "pointer",
                padding: "8px",
              }}
            >
              {t.close}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
