// Multi-language overlay for the Bali page's itinerary content, same
// fallback-to-Spanish philosophy as destinationPagesI18n.ts. Bali lives in
// its own bespoke page (src/app/itinerario/bali/page.tsx), not in
// destinationPages.ts, so it needs its own small i18n data file matching its
// specific shape (extra fields like mustSee/duration/bestTime/transport
// that destinationPages.ts activities don't have). Languages are added
// incrementally (en done, fr/de/it/pt next, per explicit user direction).

import type { BaliDay } from "./baliItinerary";

export type BaliLang = "en" | "fr" | "de" | "it" | "pt";

interface ActivityI18n {
  name: string;
  description: string;
  bestTime: string;
  duration: string;
  price: string;
  tip: string;
}

interface DayI18n {
  theme: string;
  activities: ActivityI18n[];
}

export const baliDaysEn: DayI18n[] = [
  {
    theme: "Ubud — the spiritual heart of Bali",
    activities: [
      { name: "Tegallalang Rice Terraces", description: "Bali's most photogenic cascading rice terraces, carved according to the sacred subak irrigation system, a UNESCO World Heritage site.", bestTime: "Early morning (before 9:00am)", duration: "2 hours", price: "$2 USD", tip: "Arrive before 8am to avoid the heat and the tour groups, and get the best photos." },
      { name: "Ubud Monkey Forest", description: "A natural sanctuary in the heart of Ubud where hundreds of long-tailed macaques live alongside centuries-old Hindu temples amid tropical vegetation.", bestTime: "Mid-morning", duration: "1.5 hours", price: "$5 USD", tip: "Don't show food or open bags — the monkeys will grab them. Keep everything zipped up in your bag." },
      { name: "Ubud Royal Palace", description: "The historic Puri Saren Agung, home to the Balinese royal family since the 19th century, with traditional architecture right in the center of Ubud.", bestTime: "Afternoon · Evening (dance performance)", duration: "1 hour", price: "Free", tip: "In the evenings there are kecak and legong dance performances in the palace courtyard — buy tickets when you arrive." },
    ],
  },
  {
    theme: "Sacred temples of western Bali",
    activities: [
      { name: "Jatiluwih — UNESCO Rice Terraces", description: "Bali's largest, best-preserved rice terraces, a UNESCO heritage site, far quieter and more authentic than Tegallalang.", bestTime: "Morning", duration: "1.5 hours", price: "$2 USD", tip: "Quieter and less touristy than Tegallalang. Bring sunscreen — there's very little shade along the trails." },
      { name: "Pura Taman Ayun", description: "The royal temple of Mengwi, surrounded by a water moat and majestic gardens, one of Bali's most important, best-preserved Hindu complexes.", bestTime: "Mid-afternoon", duration: "1 hour", price: "$2 USD", tip: "Mandatory dress: a sarong (Balinese cloth) — they'll lend you one at the entrance if you don't have your own." },
      { name: "Tanah Lot at sunset", description: "Bali's most iconic Hindu temple, built on a rock in the Indian Ocean. Sunset here is one of the most magical in Southeast Asia.", bestTime: "Sunset (5:30 – 7:00pm)", duration: "2 hours", price: "$4 USD", tip: "Arrive 1 hour before sunset to get a good spot. It can get very crowded in high season." },
    ],
  },
  {
    theme: "South Bali — beaches, surf, and sunsets",
    activities: [
      { name: "GWK Cultural Park", description: "The Garuda Wisnu Kencana Cultural Park, home to the 121-meter statue of Vishnu riding the Garuda bird — Indonesia's tallest — with dance performances included.", bestTime: "Morning", duration: "2 hours", price: "$15 USD", tip: "The statue offers ocean views. Check the dance performance schedule when you buy your ticket." },
      { name: "Seminyak Beach", description: "Bali's most sophisticated beach, with design-forward beach clubs, top-tier restaurants, and an unmatched sunset scene over the Indian Ocean.", bestTime: "Afternoon", duration: "2 hours", price: "Free", tip: "The area's beach clubs (Potato Head, Ku De Ta) are perfect for sunset — book ahead in high season." },
      { name: "Canggu — surf and café culture", description: "Bali's trendiest neighborhood: surf beaches with waves perfect for beginners, specialty cafés, and a lively digital nomad scene.", bestTime: "Afternoon · Evening", duration: "2 hours", price: "Free", tip: "Old Man's is Canggu's most popular spot for a beer with an ocean view at sunset." },
    ],
  },
  {
    theme: "Uluwatu — cliffs, temples, and kecak dance",
    activities: [
      { name: "Uluwatu Temple", description: "An 11th-century sacred temple perched atop a 70-meter cliff over the Indian Ocean, one of Bali's six key temples.", bestTime: "Afternoon (to stay for sunset)", duration: "2 hours", price: "$4 USD", tip: "Watch out for the monkeys on the way in — they're especially fond of sunglasses and phones." },
      { name: "Padang Padang Beach", description: "The small paradise beach tucked between cliffs, made famous by the movie 'Eat Pray Love,' with turquoise water and pristine white sand.", bestTime: "Midday · Early afternoon", duration: "2 hours", price: "$1 USD", tip: "Access is via a staircase carved into the rock. Wear shoes with grip and bring minimal gear — the path is narrow." },
      { name: "Kecak dance at sunset — Uluwatu", description: "Bali's most impressive show: a hundred men chanting 'kecak' a cappella as the sun sinks into the ocean, seen from the cliff's natural amphitheater.", bestTime: "6:00pm (exactly — don't arrive late)", duration: "1.5 hours", price: "$12 USD", tip: "Tickets sell out fast — buy them at the temple's box office when you arrive in the afternoon, before heading to the beach." },
    ],
  },
  {
    theme: "The highlands — Tirta Empul and Mount Batur",
    activities: [
      { name: "Tirta Empul — the sacred water temple", description: "Bali's most sacred purification temple, with ritual pools of holy water where Balinese people purify themselves in an ancestral ceremony open to visitors.", bestTime: "Early morning", duration: "1.5 hours", price: "$3 USD", tip: "You can take part in the purification (melukat) — bring clothes you don't mind getting wet, or rent a sarong at the entrance for $1." },
      { name: "Mount Batur Viewpoint — Kintamani", description: "Spectacular panoramic views of the active Batur volcano and its caldera lake from the Kintamani highlands, 1,500 meters up.", bestTime: "Midday (before the afternoon clouds roll in)", duration: "1.5 hours", price: "Free", tip: "If you want to hike up to the volcano's crater, the trek starts at 4am — a unique experience worth the early wake-up." },
      { name: "Penglipuran Village", description: "One of the cleanest, best-preserved villages in the world, where traditional Balinese architecture and ancestral customs have remained intact for centuries.", bestTime: "Afternoon", duration: "1.5 hours", price: "$2 USD", tip: "Motor vehicles are banned inside the village. It's one of the few places in Bali where absolute silence reigns." },
    ],
  },
];

export const baliDaysByLang: Partial<Record<BaliLang, DayI18n[]>> = {
  en: baliDaysEn,
};

// Deep-merges the overlay for `language` onto the Spanish base by
// day/activity index, falling back to Spanish for anything not translated
// (mirrors localizeDestinationPage in destinationPagesI18n.ts).
export function localizeBaliDays(days: BaliDay[], language: string): BaliDay[] {
  const overlay = baliDaysByLang[language as BaliLang];
  if (!overlay) return days;
  return days.map((day, di) => {
    const dayI18n = overlay[di];
    if (!dayI18n) return day;
    return {
      ...day,
      theme: dayI18n.theme ?? day.theme,
      activities: day.activities.map((activity, ai) => {
        const actI18n = dayI18n.activities[ai];
        if (!actI18n) return activity;
        return {
          ...activity,
          name: actI18n.name ?? activity.name,
          description: actI18n.description ?? activity.description,
          bestTime: actI18n.bestTime ?? activity.bestTime,
          duration: actI18n.duration ?? activity.duration,
          price: actI18n.price ?? activity.price,
          tip: actI18n.tip ?? activity.tip,
        };
      }),
    };
  });
}
