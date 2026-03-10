// src/lib/activityImages.ts

// ===============================
// IMÁGENES POR CIUDAD
// ===============================

const cityImages: Record<string, string[]> = {
  rome: [
    "/images/Italy/Rome-Colosseum1.jpg",
    "/images/Italy/Rome-Colosseum2.jpg",
    "/images/Italy/Rome-Colosseum3.jpg",
    "/images/Italy/Rome-Fontana-di-Trevi1.jpg",
    "/images/Italy/Rome-Fontana-di-Trevi2.jpg",
    "/images/Italy/Rome-Fontana-di-Trevi3.jpg",
    "/images/Italy/Rome-Pantheon1.jpg",
  ],
  florence: [
    "/images/Italy/Florence-Duomo1.jpg",
    "/images/Italy/Florence-Exterior1.jpg",
    "/images/Italy/Florence-Ponte-Vecchio1.jpg",
    "/images/Italy/Florence-Ponte-Vecchio2.jpg",
  ],
  pisa: [
    "/images/Italy/Pisa-tower1.jpg",
    "/images/Italy/Pisa-tower2.jpg",
  ],
  venice: [
    "/images/Italy/Venice-Gondola1.jpg",
    "/images/Italy/Venice-Gondola2.jpg",
    "/images/Italy/Venice-Gondola3.jpg",
    "/images/Italy/Venice-Gondola4.jpg",
    "/images/Italy/Venice-Piazza-San-Marco.jpg",
  ],
  vatican: [
    "/images/Italy/Vatican-Exterior1.jpg",
    "/images/Italy/Vatican-Exterior2.jpg",
    "/images/Italy/Vatican-Exterior3.jpg",
    "/images/Italy/Vatican-Exterior4.jpg",
    "/images/Italy/Vatican-Interior1.jpg",
    "/images/Italy/Vatican-Interior2.jpg",
    "/images/Italy/Basilica-San-Pietro1.jpg",
  ],
  tuscany: [
    "/images/Italy/Toscana-Winery1.jpg",
    "/images/Italy/Toscane1.jpg",
  ],
  amalfi: [
    "/images/Italy/Costa-Amalfitana1.jpg",
  ],
};

// ===============================
// NORMALIZADOR
// ===============================

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

// ===============================
// DETECTAR CIUDAD
// ===============================

function detectCity(text: string): string | null {
  const normalized = normalize(text);

  for (const city of Object.keys(cityImages)) {
    if (normalized.includes(city)) {
      return city;
    }
  }

  return null;
}

// ===============================
// FUNCIÓN PRINCIPAL
// ===============================

export function getActivityImage(
  activityTitle: string,
  dayTitle?: string
): string {
  const fullText = `${activityTitle} ${dayTitle || ""}`;

  // 1️⃣ Intentar ciudad
  const city = detectCity(fullText);

  if (city && cityImages[city]) {
    const images = cityImages[city];
    return images[Math.floor(Math.random() * images.length)];
  }

  // 2️⃣ Default absoluto
  return "/images/Generic/Generic-Default.jpg";
}