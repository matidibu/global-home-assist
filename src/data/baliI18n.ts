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

export const baliDaysFr: DayI18n[] = [
  {
    theme: "Ubud — le cœur spirituel de Bali",
    activities: [
      { name: "Terrasses de riz de Tegallalang", description: "Les terrasses de riz en cascade les plus photogéniques de Bali, sculptées selon le système d'irrigation sacré subak, classé au patrimoine mondial de l'UNESCO.", bestTime: "Tôt le matin (avant 9h)", duration: "2 heures", price: "2 USD", tip: "Arrivez avant 8h pour éviter la chaleur et les groupes de touristes, et prendre les meilleures photos." },
      { name: "Forêt des singes d'Ubud", description: "Un sanctuaire naturel au cœur d'Ubud où des centaines de macaques à longue queue cohabitent avec des temples hindous centenaires au milieu de la végétation tropicale.", bestTime: "Milieu de matinée", duration: "1,5 heure", price: "5 USD", tip: "Ne montrez ni nourriture ni sacs ouverts — les singes les prendront. Gardez tout bien fermé dans votre sac." },
      { name: "Palais royal d'Ubud", description: "Le Puri Saren Agung historique, résidence de la famille royale balinaise depuis le XIXe siècle, avec une architecture traditionnelle en plein centre du village d'Ubud.", bestTime: "Après-midi · Soir (spectacle de danse)", duration: "1 heure", price: "Gratuit", tip: "Le soir, des spectacles de danse kecak et legong ont lieu dans la cour du palais — achetez vos billets en arrivant." },
    ],
  },
  {
    theme: "Temples sacrés de l'ouest de Bali",
    activities: [
      { name: "Jatiluwih — Terrasses de riz UNESCO", description: "Les terrasses de riz les plus vastes et les mieux préservées de tout Bali, classées au patrimoine UNESCO, bien plus tranquilles et authentiques que Tegallalang.", bestTime: "Matin", duration: "1,5 heure", price: "2 USD", tip: "Plus calme et moins touristique que Tegallalang. Apportez de la crème solaire — il y a très peu d'ombre sur les sentiers." },
      { name: "Pura Taman Ayun", description: "Le temple royal de Mengwi, entouré d'un fossé d'eau et de jardins majestueux, l'un des complexes hindous les plus importants et les mieux préservés de Bali.", bestTime: "Milieu d'après-midi", duration: "1 heure", price: "2 USD", tip: "Tenue obligatoire : le sarong (tissu balinais) — on vous le prête à l'entrée si vous n'avez pas le vôtre." },
      { name: "Tanah Lot au coucher du soleil", description: "Le temple hindou le plus emblématique de Bali, construit sur un rocher dans l'océan Indien. Le coucher de soleil ici est l'un des plus magiques d'Asie du Sud-Est.", bestTime: "Coucher de soleil (17h30 – 19h)", duration: "2 heures", price: "4 USD", tip: "Arrivez 1 heure avant le coucher du soleil pour trouver une bonne place. En haute saison, l'affluence peut être très importante." },
    ],
  },
  {
    theme: "Sud de Bali — Plages, surf et couchers de soleil",
    activities: [
      { name: "GWK Cultural Park", description: "Le Parc culturel Garuda Wisnu Kencana, abritant la statue de 121 mètres de Vishnu chevauchant l'oiseau Garuda — la plus haute d'Indonésie — avec des spectacles de danse inclus.", bestTime: "Matin", duration: "2 heures", price: "15 USD", tip: "La statue offre des vues sur l'océan. Renseignez-vous sur les horaires des spectacles de danse à l'achat du billet." },
      { name: "Plage de Seminyak", description: "La plage la plus sophistiquée de Bali, avec des beach clubs design, des restaurants haut de gamme et une ambiance de coucher de soleil incomparable face à l'océan Indien.", bestTime: "Après-midi", duration: "2 heures", price: "Gratuit", tip: "Les beach clubs du coin (Potato Head, Ku De Ta) sont idéaux pour le coucher de soleil — réservez à l'avance en haute saison." },
      { name: "Canggu — surf et culture café", description: "Le quartier le plus tendance de Bali : des plages de surf aux vagues parfaites pour débutants, des cafés de spécialité et une scène animée de nomades numériques.", bestTime: "Après-midi · Soir", duration: "2 heures", price: "Gratuit", tip: "Old Man's est le spot le plus populaire de Canggu pour boire une bière avec vue sur la mer au coucher du soleil." },
    ],
  },
  {
    theme: "Uluwatu — Falaises, temples et danse kecak",
    activities: [
      { name: "Temple d'Uluwatu", description: "Temple sacré du XIe siècle perché au sommet d'une falaise de 70 mètres au-dessus de l'océan Indien, l'un des six temples clés de Bali.", bestTime: "Après-midi (pour rester au coucher du soleil)", duration: "2 heures", price: "4 USD", tip: "Attention aux singes en entrant — ils affectionnent particulièrement les lunettes de soleil et les téléphones." },
      { name: "Plage de Padang Padang", description: "La petite plage paradisiaque cachée entre les falaises, rendue célèbre par le film 'Eat Pray Love', avec une eau turquoise et un sable blanc impeccable.", bestTime: "Midi · Début d'après-midi", duration: "2 heures", price: "1 USD", tip: "L'accès se fait en descendant un escalier taillé dans la roche. Portez des chaussures adhérentes et un bagage léger — le passage est étroit." },
      { name: "Danse kecak au coucher du soleil — Uluwatu", description: "Le spectacle le plus impressionnant de Bali : une centaine d'hommes entonnant le 'kecak' a cappella tandis que le soleil se couche dans l'océan, depuis l'amphithéâtre naturel de la falaise.", bestTime: "18h (pile — n'arrivez pas en retard)", duration: "1,5 heure", price: "12 USD", tip: "Les billets s'épuisent vite — achetez-les à la billetterie du temple en arrivant l'après-midi, avant d'aller à la plage." },
    ],
  },
  {
    theme: "Les hauteurs — Tirta Empul et le volcan Batur",
    activities: [
      { name: "Tirta Empul — le temple de l'eau sacrée", description: "Le temple de purification le plus sacré de Bali, avec des bassins rituels d'eau bénite où les Balinais se purifient lors d'une cérémonie ancestrale ouverte aux visiteurs.", bestTime: "Tôt le matin", duration: "1,5 heure", price: "3 USD", tip: "Vous pouvez participer à la purification (melukat) — apportez des vêtements que vous ne craignez pas de mouiller ou louez un sarong à l'entrée pour 1 USD." },
      { name: "Point de vue du volcan Batur — Kintamani", description: "Vues panoramiques spectaculaires sur le volcan actif Batur et son lac de caldeira depuis les hauteurs de Kintamani, à 1 500 mètres d'altitude.", bestTime: "Midi (avant l'arrivée des nuages de l'après-midi)", duration: "1,5 heure", price: "Gratuit", tip: "Si vous voulez monter jusqu'au cratère du volcan, la randonnée commence à 4h du matin — une expérience unique qui vaut le réveil matinal." },
      { name: "Village de Penglipuran", description: "L'un des villages les plus propres et les mieux préservés au monde, où l'architecture balinaise traditionnelle et les coutumes ancestrales sont restées intactes depuis des siècles.", bestTime: "Après-midi", duration: "1,5 heure", price: "2 USD", tip: "Les véhicules motorisés sont interdits dans le village. C'est l'un des rares endroits de Bali où règne un silence absolu." },
    ],
  },
];

export const baliDaysDe: DayI18n[] = [
  {
    theme: "Ubud — das spirituelle Herz Balis",
    activities: [
      { name: "Reisterrassen von Tegallalang", description: "Balis fotogenste kaskadenförmige Reisterrassen, angelegt nach dem heiligen Subak-Bewässerungssystem, UNESCO-Weltkulturerbe.", bestTime: "Früh morgens (vor 9 Uhr)", duration: "2 Stunden", price: "2 USD", tip: "Kommen Sie vor 8 Uhr an, um Hitze und Reisegruppen zu vermeiden und die besten Fotos zu bekommen." },
      { name: "Affenwald von Ubud", description: "Ein Naturschutzgebiet im Herzen von Ubud, wo Hunderte von Langschwanzmakaken neben jahrhundertealten Hindu-Tempeln inmitten tropischer Vegetation leben.", bestTime: "Vormittag", duration: "1,5 Stunden", price: "5 USD", tip: "Zeigen Sie kein Essen und keine offenen Taschen — die Affen werden danach greifen. Halten Sie alles in Ihrer Tasche verschlossen." },
      { name: "Königspalast von Ubud", description: "Der historische Puri Saren Agung, Sitz der balinesischen Königsfamilie seit dem 19. Jahrhundert, mit traditioneller Architektur mitten im Zentrum von Ubud.", bestTime: "Nachmittag · Abend (Tanzvorführung)", duration: "1 Stunde", price: "Kostenlos", tip: "Abends finden Kecak- und Legong-Tanzvorführungen im Palasthof statt — kaufen Sie Ihre Tickets bei der Ankunft." },
    ],
  },
  {
    theme: "Heilige Tempel im Westen Balis",
    activities: [
      { name: "Jatiluwih — UNESCO-Reisterrassen", description: "Balis größte, am besten erhaltene Reisterrassen, UNESCO-Weltkulturerbe, weit ruhiger und authentischer als Tegallalang.", bestTime: "Morgen", duration: "1,5 Stunden", price: "2 USD", tip: "Ruhiger und weniger touristisch als Tegallalang. Bringen Sie Sonnencreme mit — es gibt sehr wenig Schatten entlang der Wege." },
      { name: "Pura Taman Ayun", description: "Der königliche Tempel von Mengwi, umgeben von einem Wassergraben und majestätischen Gärten, einer von Balis wichtigsten, am besten erhaltenen Hindu-Komplexen.", bestTime: "Später Nachmittag", duration: "1 Stunde", price: "2 USD", tip: "Pflichtkleidung: ein Sarong (balinesisches Tuch) — man leiht Ihnen einen am Eingang, wenn Sie keinen eigenen haben." },
      { name: "Tanah Lot bei Sonnenuntergang", description: "Balis ikonischster Hindu-Tempel, auf einem Felsen im Indischen Ozean erbaut. Der Sonnenuntergang hier ist einer der magischsten in Südostasien.", bestTime: "Sonnenuntergang (17:30 – 19 Uhr)", duration: "2 Stunden", price: "4 USD", tip: "Kommen Sie 1 Stunde vor Sonnenuntergang, um einen guten Platz zu bekommen. In der Hochsaison kann es sehr überfüllt sein." },
    ],
  },
  {
    theme: "Südbali — Strände, Surfen und Sonnenuntergänge",
    activities: [
      { name: "GWK Cultural Park", description: "Der Garuda-Wisnu-Kencana-Kulturpark, Heimat der 121 Meter hohen Statue von Vishnu auf dem Garuda-Vogel — Indonesiens höchste — mit inbegriffenen Tanzvorführungen.", bestTime: "Morgen", duration: "2 Stunden", price: "15 USD", tip: "Die Statue bietet Meerblick. Prüfen Sie den Zeitplan der Tanzvorführungen beim Ticketkauf." },
      { name: "Seminyak-Strand", description: "Balis anspruchsvollster Strand, mit designorientierten Beach Clubs, erstklassigen Restaurants und einer unvergleichlichen Sonnenuntergangsszene über dem Indischen Ozean.", bestTime: "Nachmittag", duration: "2 Stunden", price: "Kostenlos", tip: "Die Beach Clubs der Gegend (Potato Head, Ku De Ta) sind perfekt für den Sonnenuntergang — in der Hochsaison im Voraus buchen." },
      { name: "Canggu — Surf- und Cafékultur", description: "Balis angesagtestes Viertel: Surfstrände mit für Anfänger perfekten Wellen, Spezialitätencafés und eine lebendige Digital-Nomaden-Szene.", bestTime: "Nachmittag · Abend", duration: "2 Stunden", price: "Kostenlos", tip: "Old Man's ist Canggus beliebtester Ort für ein Bier mit Meerblick bei Sonnenuntergang." },
    ],
  },
  {
    theme: "Uluwatu — Klippen, Tempel und Kecak-Tanz",
    activities: [
      { name: "Tempel Uluwatu", description: "Ein heiliger Tempel aus dem 11. Jahrhundert, auf einer 70 Meter hohen Klippe über dem Indischen Ozean gelegen, einer von Balis sechs Schlüsseltempeln.", bestTime: "Nachmittag (um zum Sonnenuntergang zu bleiben)", duration: "2 Stunden", price: "4 USD", tip: "Achten Sie beim Betreten auf die Affen — sie mögen besonders Sonnenbrillen und Handys." },
      { name: "Padang-Padang-Strand", description: "Der kleine Paradiesstrand, zwischen Klippen versteckt, bekannt geworden durch den Film 'Eat Pray Love', mit türkisfarbenem Wasser und makellosem weißem Sand.", bestTime: "Mittag · früher Nachmittag", duration: "2 Stunden", price: "1 USD", tip: "Der Zugang erfolgt über eine in den Fels gehauene Treppe. Tragen Sie griffiges Schuhwerk und minimales Gepäck — der Weg ist eng." },
      { name: "Kecak-Tanz bei Sonnenuntergang — Uluwatu", description: "Balis beeindruckendste Show: hundert Männer singen 'Kecak' a cappella, während die Sonne im Ozean versinkt, gesehen vom natürlichen Amphitheater der Klippe aus.", bestTime: "18 Uhr (genau — kommen Sie nicht zu spät)", duration: "1,5 Stunden", price: "12 USD", tip: "Tickets sind schnell ausverkauft — kaufen Sie sie an der Kasse des Tempels, wenn Sie am Nachmittag ankommen, bevor Sie zum Strand gehen." },
    ],
  },
  {
    theme: "Das Hochland — Tirta Empul und der Vulkan Batur",
    activities: [
      { name: "Tirta Empul — der heilige Wassertempel", description: "Balis heiligster Reinigungstempel, mit rituellen Becken heiligen Wassers, in denen sich Balinesen bei einer für Besucher offenen, althergebrachten Zeremonie reinigen.", bestTime: "Früh morgens", duration: "1,5 Stunden", price: "3 USD", tip: "Sie können an der Reinigung (Melukat) teilnehmen — bringen Sie Kleidung mit, die nass werden darf, oder mieten Sie am Eingang einen Sarong für 1 USD." },
      { name: "Aussichtspunkt Vulkan Batur — Kintamani", description: "Spektakuläre Panoramablicke auf den aktiven Vulkan Batur und seinen Kraterrandsee vom Hochland Kintamani aus, auf 1.500 Metern Höhe.", bestTime: "Mittag (bevor die Nachmittagswolken aufziehen)", duration: "1,5 Stunden", price: "Kostenlos", tip: "Wenn Sie zum Kraterrand des Vulkans wandern möchten, beginnt die Tour um 4 Uhr morgens — ein einzigartiges Erlebnis, das das frühe Aufstehen wert ist." },
      { name: "Dorf Penglipuran", description: "Eines der saubersten, am besten erhaltenen Dörfer der Welt, in dem traditionelle balinesische Architektur und althergebrachte Bräuche seit Jahrhunderten intakt geblieben sind.", bestTime: "Nachmittag", duration: "1,5 Stunden", price: "2 USD", tip: "Motorfahrzeuge sind im Dorf verboten. Es ist einer der wenigen Orte auf Bali, an denen absolute Stille herrscht." },
    ],
  },
];

export const baliDaysByLang: Partial<Record<BaliLang, DayI18n[]>> = {
  en: baliDaysEn,
  fr: baliDaysFr,
  de: baliDaysDe,
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
