"use client";

interface ServiceCard {
  name: string;
  descKey: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  url: string;
  // True when `url` carries our affiliate tracking (tpk.lu shortener or a
  // partner_id param) — only those links get rel="sponsored". Plain outbound
  // links (no tracking id) are not paid placements, so they stay untagged.
  sponsored?: boolean;
}

const accommodationServices: ServiceCard[] = [
  { name: "Booking.com", descKey: "Booking.com", icon: "🏨", color: "#003580", bgColor: "#eff6ff", borderColor: "#bfdbfe", url: "https://www.booking.com" },
  { name: "Airbnb", descKey: "Airbnb", icon: "🏠", color: "#FF5A5F", bgColor: "#fff1f2", borderColor: "#fecdd3", url: "https://www.airbnb.com" },
  { name: "Hostelworld", descKey: "Hostelworld", icon: "🛏️", color: "#FF6600", bgColor: "#fff7ed", borderColor: "#fed7aa", url: "https://www.hostelworld.com" },
];

const transferServices: ServiceCard[] = [
  { name: "Recogidas Bienvenidas", descKey: "Recogidas Bienvenidas", icon: "🚐", color: "#0f766e", bgColor: "#f0fdfa", borderColor: "#99f6e4", url: "https://tpk.lu/ZaDJnmc8", sponsored: true },
];

const carServices: ServiceCard[] = [
  { name: "GetRentaCar", descKey: "GetRentaCar", icon: "🚗", color: "#0066cc", bgColor: "#eff6ff", borderColor: "#bfdbfe", url: "https://getrentacar.tpk.lu/dwvZlHtW", sponsored: true },
  { name: "DiscoverCars", descKey: "DiscoverCars", icon: "🔑", color: "#1a7a4a", bgColor: "#f0fdf4", borderColor: "#bbf7d0", url: "https://www.discovercars.com" },
];

const activityServices: ServiceCard[] = [
  { name: "GetYourGuide", descKey: "GetYourGuide", icon: "🎯", color: "#FF5500", bgColor: "#fff7ed", borderColor: "#fed7aa", url: "https://www.getyourguide.com/s/?partner_id=NGZASHD", sponsored: true },
  { name: "Klook", descKey: "Klook", icon: "🎪", color: "#e63946", bgColor: "#fff1f2", borderColor: "#fecdd3", url: "https://klook.tpk.lu/AVr0usKH", sponsored: true },
  { name: "WeGoTrip", descKey: "WeGoTrip", icon: "🎧", color: "#2563eb", bgColor: "#eff6ff", borderColor: "#bfdbfe", url: "https://wegotrip.tpk.lu/6sPuEQdr", sponsored: true },
  { name: "Tiqets", descKey: "Tiqets", icon: "🎟️", color: "#16a34a", bgColor: "#f0fdf4", borderColor: "#bbf7d0", url: "https://tiqets.tpk.lu/iKrDo8Up", sponsored: true },
];

const nauticalServices: ServiceCard[] = [
  { name: "SeaRadar", descKey: "SeaRadar", icon: "⛵", color: "#0369a1", bgColor: "#f0f9ff", borderColor: "#bae6fd", url: "https://searadar.tpk.lu/G9LHcIVb", sponsored: true },
];

const eventServices: ServiceCard[] = [
  { name: "TicketNetwork", descKey: "TicketNetwork", icon: "🎭", color: "#7c3aed", bgColor: "#f5f3ff", borderColor: "#ddd6fe", url: "https://ticketnetwork.tpk.lu/3DDbH7oY", sponsored: true },
  { name: "Tiqets Eventos", descKey: "Tiqets Eventos", icon: "🎫", color: "#16a34a", bgColor: "#f0fdf4", borderColor: "#bbf7d0", url: "https://tiqets.tpk.lu/iKrDo8Up", sponsored: true },
];

type Copy = {
  title: (city: string) => string;
  subtitle: string;
  verOfertas: string;
  groups: { alojamiento: string; traslados: string; autos: string; actividades: string; nauticas: string; eventos: string };
  desc: Record<string, string>;
};

const T: Record<string, Copy> = {
  es: {
    title: city => `✈️ Planificá tu viaje a ${city}`,
    subtitle: "Todo lo que necesitás para tu viaje en un solo lugar",
    verOfertas: "Ver ofertas →",
    groups: { alojamiento: "Alojamiento", traslados: "Traslados al aeropuerto", autos: "Alquiler de autos", actividades: "Actividades y tours", nauticas: "Excursiones náuticas", eventos: "Entradas para eventos" },
    desc: {
      "Booking.com": "Hoteles, apartamentos y más",
      "Airbnb": "Alojamientos únicos y locales",
      "Hostelworld": "Hostels y alojamiento económico",
      "Recogidas Bienvenidas": "Traslados al aeropuerto en todo el mundo",
      "GetRentaCar": "Comparador de autos en todo el mundo",
      "DiscoverCars": "Las mejores tarifas de alquiler",
      "GetYourGuide": "Tours, actividades y experiencias",
      "Klook": "Actividades y atracciones en Asia",
      "WeGoTrip": "Audioguías para recorrer atracciones",
      "Tiqets": "Entradas sin fila para museos y atracciones",
      "SeaRadar": "Excursiones y alquiler de embarcaciones",
      "TicketNetwork": "Entradas para conciertos, deportes y teatro",
      "Tiqets Eventos": "Espectáculos y eventos culturales",
    },
  },
  en: {
    title: city => `✈️ Plan your trip to ${city}`,
    subtitle: "Everything you need for your trip in one place",
    verOfertas: "See deals →",
    groups: { alojamiento: "Accommodation", traslados: "Airport transfers", autos: "Car rental", actividades: "Activities and tours", nauticas: "Boat excursions", eventos: "Event tickets" },
    desc: {
      "Booking.com": "Hotels, apartments, and more",
      "Airbnb": "Unique, local stays",
      "Hostelworld": "Hostels and budget stays",
      "Recogidas Bienvenidas": "Airport transfers worldwide",
      "GetRentaCar": "Worldwide car rental comparison",
      "DiscoverCars": "The best rental rates",
      "GetYourGuide": "Tours, activities, and experiences",
      "Klook": "Activities and attractions across Asia",
      "WeGoTrip": "Audio guides for exploring attractions",
      "Tiqets": "Skip-the-line tickets for museums and attractions",
      "SeaRadar": "Boat excursions and rentals",
      "TicketNetwork": "Tickets for concerts, sports, and theater",
      "Tiqets Eventos": "Shows and cultural events",
    },
  },
  fr: {
    title: city => `✈️ Planifiez votre voyage à ${city}`,
    subtitle: "Tout ce dont vous avez besoin pour votre voyage au même endroit",
    verOfertas: "Voir les offres →",
    groups: { alojamiento: "Hébergement", traslados: "Transferts aéroport", autos: "Location de voiture", actividades: "Activités et visites", nauticas: "Excursions nautiques", eventos: "Billets pour événements" },
    desc: {
      "Booking.com": "Hôtels, appartements et plus",
      "Airbnb": "Logements uniques et locaux",
      "Hostelworld": "Auberges et hébergements économiques",
      "Recogidas Bienvenidas": "Transferts aéroport dans le monde entier",
      "GetRentaCar": "Comparateur de location de voitures dans le monde",
      "DiscoverCars": "Les meilleurs tarifs de location",
      "GetYourGuide": "Visites, activités et expériences",
      "Klook": "Activités et attractions en Asie",
      "WeGoTrip": "Audioguides pour visiter les attractions",
      "Tiqets": "Billets coupe-file pour musées et attractions",
      "SeaRadar": "Excursions et location de bateaux",
      "TicketNetwork": "Billets pour concerts, sport et théâtre",
      "Tiqets Eventos": "Spectacles et événements culturels",
    },
  },
  it: {
    title: city => `✈️ Pianifica il tuo viaggio a ${city}`,
    subtitle: "Tutto ciò di cui hai bisogno per il tuo viaggio in un unico posto",
    verOfertas: "Vedi le offerte →",
    groups: { alojamiento: "Alloggio", traslados: "Trasferimenti aeroportuali", autos: "Noleggio auto", actividades: "Attività e tour", nauticas: "Escursioni in barca", eventos: "Biglietti per eventi" },
    desc: {
      "Booking.com": "Hotel, appartamenti e altro",
      "Airbnb": "Alloggi unici e locali",
      "Hostelworld": "Ostelli e alloggi economici",
      "Recogidas Bienvenidas": "Trasferimenti aeroportuali in tutto il mondo",
      "GetRentaCar": "Comparatore di noleggio auto nel mondo",
      "DiscoverCars": "Le migliori tariffe di noleggio",
      "GetYourGuide": "Tour, attività ed esperienze",
      "Klook": "Attività e attrazioni in Asia",
      "WeGoTrip": "Audioguide per visitare le attrazioni",
      "Tiqets": "Biglietti salta-fila per musei e attrazioni",
      "SeaRadar": "Escursioni e noleggio di imbarcazioni",
      "TicketNetwork": "Biglietti per concerti, sport e teatro",
      "Tiqets Eventos": "Spettacoli ed eventi culturali",
    },
  },
  de: {
    title: city => `✈️ Plane deine Reise nach ${city}`,
    subtitle: "Alles, was du für deine Reise brauchst, an einem Ort",
    verOfertas: "Angebote ansehen →",
    groups: { alojamiento: "Unterkunft", traslados: "Flughafentransfers", autos: "Autovermietung", actividades: "Aktivitäten und Touren", nauticas: "Bootsausflüge", eventos: "Eintrittskarten für Events" },
    desc: {
      "Booking.com": "Hotels, Apartments und mehr",
      "Airbnb": "Einzigartige, lokale Unterkünfte",
      "Hostelworld": "Hostels und günstige Unterkünfte",
      "Recogidas Bienvenidas": "Flughafentransfers weltweit",
      "GetRentaCar": "Weltweiter Mietwagenvergleich",
      "DiscoverCars": "Die besten Mietpreise",
      "GetYourGuide": "Touren, Aktivitäten und Erlebnisse",
      "Klook": "Aktivitäten und Attraktionen in Asien",
      "WeGoTrip": "Audioguides zur Erkundung von Sehenswürdigkeiten",
      "Tiqets": "Tickets ohne Anstehen für Museen und Attraktionen",
      "SeaRadar": "Bootsausflüge und -vermietung",
      "TicketNetwork": "Tickets für Konzerte, Sport und Theater",
      "Tiqets Eventos": "Shows und kulturelle Veranstaltungen",
    },
  },
  pt: {
    title: city => `✈️ Planeje sua viagem para ${city}`,
    subtitle: "Tudo o que você precisa para sua viagem em um só lugar",
    verOfertas: "Ver ofertas →",
    groups: { alojamiento: "Hospedagem", traslados: "Traslados do aeroporto", autos: "Aluguel de carros", actividades: "Atividades e passeios", nauticas: "Passeios náuticos", eventos: "Ingressos para eventos" },
    desc: {
      "Booking.com": "Hotéis, apartamentos e mais",
      "Airbnb": "Hospedagens únicas e locais",
      "Hostelworld": "Hostels e hospedagem econômica",
      "Recogidas Bienvenidas": "Traslados de aeroporto no mundo todo",
      "GetRentaCar": "Comparador de aluguel de carros no mundo todo",
      "DiscoverCars": "As melhores tarifas de aluguel",
      "GetYourGuide": "Passeios, atividades e experiências",
      "Klook": "Atividades e atrações na Ásia",
      "WeGoTrip": "Audioguias para conhecer atrações",
      "Tiqets": "Ingressos sem fila para museus e atrações",
      "SeaRadar": "Passeios e aluguel de embarcações",
      "TicketNetwork": "Ingressos para shows, esportes e teatro",
      "Tiqets Eventos": "Espetáculos e eventos culturais",
    },
  },
};

function Card({ card, t }: { card: ServiceCard; t: Copy }) {
  return (
    <a
      href={card.url}
      target="_blank"
      rel={card.sponsored ? "noopener noreferrer sponsored" : "noopener noreferrer"}
      className="service-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px",
        background: card.bgColor,
        border: `1px solid ${card.borderColor}`,
        borderRadius: "12px",
        cursor: "pointer",
        textDecoration: "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "24px" }}>{card.icon}</span>
        <span style={{ fontWeight: 600, fontSize: "15px", color: card.color }}>{card.name}</span>
      </div>
      <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>{t.desc[card.descKey] || card.descKey}</p>
      <span style={{ fontSize: "11px", color: card.color, fontWeight: 500, marginTop: "4px" }}>{t.verOfertas}</span>
    </a>
  );
}

function Group({ title, icon, services, t }: { title: string; icon: string; services: ServiceCard[]; t: Copy }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#374151", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{icon}</span> {title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
        {services.map(s => <Card key={s.name} card={s} t={t} />)}
      </div>
    </div>
  );
}

interface Props {
  city: string;
  country: string;
  language?: string;
}

export default function ServicesSection({ city, country, language = "es" }: Props) {
  if (!city || !country) return null;
  const t = T[language] || T.es;

  return (
    <div style={{
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderRadius: "16px",
      border: "1px solid #e5e7eb",
      padding: "28px",
      marginTop: "3rem",
    }}>
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#111827", margin: 0 }}>
          {t.title(city)}
        </h2>
        <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "6px" }}>
          {t.subtitle}
        </p>
      </div>

      <Group title={t.groups.alojamiento} icon="🏨" services={accommodationServices} t={t} />
      <Group title={t.groups.traslados} icon="🚐" services={transferServices} t={t} />
      <Group title={t.groups.autos} icon="🚗" services={carServices} t={t} />
      <Group title={t.groups.actividades} icon="🎯" services={activityServices} t={t} />
      <Group title={t.groups.nauticas} icon="⛵" services={nauticalServices} t={t} />
      <Group title={t.groups.eventos} icon="🎭" services={eventServices} t={t} />
    </div>
  );
}
