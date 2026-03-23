"use client";

interface ServiceCard {
  name: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
  borderColor: string;
  url: string;
}

const accommodationServices: ServiceCard[] = [
  { name: "Booking.com", description: "Hoteles, apartamentos y más", icon: "🏨", color: "#003580", bgColor: "#eff6ff", borderColor: "#bfdbfe", url: "https://www.booking.com" },
  { name: "Airbnb", description: "Alojamientos únicos y locales", icon: "🏠", color: "#FF5A5F", bgColor: "#fff1f2", borderColor: "#fecdd3", url: "https://www.airbnb.com" },
  { name: "Hostelworld", description: "Hostels y alojamiento económico", icon: "🛏️", color: "#FF6600", bgColor: "#fff7ed", borderColor: "#fed7aa", url: "https://www.hostelworld.com" },
];

const transferServices: ServiceCard[] = [
  { name: "Recogidas Bienvenidas", description: "Traslados al aeropuerto en todo el mundo", icon: "🚐", color: "#0f766e", bgColor: "#f0fdfa", borderColor: "#99f6e4", url: "https://tpk.lu/ZaDJnmc8" },
];

const carServices: ServiceCard[] = [
  { name: "Rentalcars", description: "Comparador de autos en todo el mundo", icon: "🚗", color: "#0066cc", bgColor: "#eff6ff", borderColor: "#bfdbfe", url: "https://www.rentalcars.com" },
  { name: "DiscoverCars", description: "Las mejores tarifas de alquiler", icon: "🔑", color: "#1a7a4a", bgColor: "#f0fdf4", borderColor: "#bbf7d0", url: "https://www.discovercars.com" },
];

const activityServices: ServiceCard[] = [
  { name: "GetYourGuide", description: "Tours, actividades y experiencias", icon: "🎯", color: "#FF5500", bgColor: "#fff7ed", borderColor: "#fed7aa", url: "https://getyourguide.tpk.lu/lHlxvWOc" },
  { name: "Klook", description: "Actividades y atracciones en Asia", icon: "🎪", color: "#e63946", bgColor: "#fff1f2", borderColor: "#fecdd3", url: "https://klook.tpk.lu/AVr0usKH" },
  { name: "WeGoTrip", description: "Audioguías para recorrer atracciones", icon: "🎧", color: "#2563eb", bgColor: "#eff6ff", borderColor: "#bfdbfe", url: "https://wegotrip.tpk.lu/6sPuEQdr" },
  { name: "Tiqets", description: "Entradas sin fila para museos y atracciones", icon: "🎟️", color: "#16a34a", bgColor: "#f0fdf4", borderColor: "#bbf7d0", url: "https://tiqets.tpk.lu/iKrDo8Up" },
];

const nauticalServices: ServiceCard[] = [
  { name: "SeaRadar", description: "Excursiones y alquiler de embarcaciones", icon: "⛵", color: "#0369a1", bgColor: "#f0f9ff", borderColor: "#bae6fd", url: "https://searadar.tpk.lu/G9LHcIVb" },
];

const eventServices: ServiceCard[] = [
  { name: "TicketNetwork", description: "Entradas para conciertos, deportes y teatro", icon: "🎭", color: "#7c3aed", bgColor: "#f5f3ff", borderColor: "#ddd6fe", url: "https://ticketnetwork.tpk.lu/3DDbH7oY" },
  { name: "Tiqets Eventos", description: "Espectáculos y eventos culturales", icon: "🎫", color: "#16a34a", bgColor: "#f0fdf4", borderColor: "#bbf7d0", url: "https://tiqets.tpk.lu/iKrDo8Up" },
];

function Card({ card }: { card: ServiceCard }) {
  return (
    <div
      onClick={() => window.open(card.url, "_blank", "noopener,noreferrer")}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        padding: "16px",
        background: card.bgColor,
        border: `1px solid ${card.borderColor}`,
        borderRadius: "12px",
        cursor: "pointer",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "24px" }}>{card.icon}</span>
        <span style={{ fontWeight: 600, fontSize: "15px", color: card.color }}>{card.name}</span>
      </div>
      <p style={{ fontSize: "12px", color: "#6b7280", margin: 0 }}>{card.description}</p>
      <span style={{ fontSize: "11px", color: card.color, fontWeight: 500, marginTop: "4px" }}>Ver ofertas →</span>
    </div>
  );
}

function Group({ title, icon, services }: { title: string; icon: string; services: ServiceCard[] }) {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#374151", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
        <span>{icon}</span> {title}
      </h3>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px" }}>
        {services.map(s => <Card key={s.name} card={s} />)}
      </div>
    </div>
  );
}

interface Props {
  city: string;
  country: string;
}

export default function ServicesSection({ city, country }: Props) {
  if (!city || !country) return null;

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
          ✈️ Planificá tu viaje a {city}
        </h2>
        <p style={{ color: "#6b7280", fontSize: "14px", marginTop: "6px" }}>
          Todo lo que necesitás para tu viaje en un solo lugar
        </p>
      </div>

      <Group title="Alojamiento" icon="🏨" services={accommodationServices} />
      <Group title="Traslados al aeropuerto" icon="🚐" services={transferServices} />
      <Group title="Alquiler de autos" icon="🚗" services={carServices} />
      <Group title="Actividades y tours" icon="🎯" services={activityServices} />
      <Group title="Excursiones náuticas" icon="⛵" services={nauticalServices} />
      <Group title="Entradas para eventos" icon="🎭" services={eventServices} />
    </div>
  );
}
