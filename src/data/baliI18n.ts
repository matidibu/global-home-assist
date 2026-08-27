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

export const baliDaysIt: DayI18n[] = [
  {
    theme: "Ubud — il cuore spirituale di Bali",
    activities: [
      { name: "Terrazze di riso di Tegallalang", description: "Le terrazze di riso a cascata più fotogeniche di Bali, scolpite secondo il sacro sistema di irrigazione subak, Patrimonio Mondiale dell'UNESCO.", bestTime: "Presto al mattino (prima delle 9)", duration: "2 ore", price: "2 USD", tip: "Arrivate prima delle 8 per evitare il caldo e i gruppi turistici, e scattare le foto migliori." },
      { name: "Foresta delle Scimmie di Ubud", description: "Un santuario naturale nel cuore di Ubud dove centinaia di macachi dalla coda lunga convivono con templi indù secolari tra vegetazione tropicale.", bestTime: "Metà mattina", duration: "1,5 ore", price: "5 USD", tip: "Non mostrate cibo o borse aperte — le scimmie li afferreranno. Tenete tutto chiuso nella borsa." },
      { name: "Palazzo Reale di Ubud", description: "Lo storico Puri Saren Agung, sede della famiglia reale balinese dal XIX secolo, con architettura tradizionale proprio nel centro di Ubud.", bestTime: "Pomeriggio · Sera (spettacolo di danza)", duration: "1 ora", price: "Gratis", tip: "La sera si tengono spettacoli di danza kecak e legong nel cortile del palazzo — comprate i biglietti all'arrivo." },
    ],
  },
  {
    theme: "Templi sacri della Bali occidentale",
    activities: [
      { name: "Jatiluwih — Terrazze di riso UNESCO", description: "Le terrazze di riso più grandi e meglio conservate di Bali, Patrimonio UNESCO, molto più tranquille e autentiche di Tegallalang.", bestTime: "Mattina", duration: "1,5 ore", price: "2 USD", tip: "Più tranquillo e meno turistico di Tegallalang. Portate crema solare — c'è pochissima ombra lungo i sentieri." },
      { name: "Pura Taman Ayun", description: "Il tempio reale di Mengwi, circondato da un fossato d'acqua e giardini maestosi, uno dei complessi indù più importanti e meglio conservati di Bali.", bestTime: "Metà pomeriggio", duration: "1 ora", price: "2 USD", tip: "Abbigliamento obbligatorio: un sarong (tessuto balinese) — ve lo prestano all'ingresso se non ne avete uno." },
      { name: "Tanah Lot al tramonto", description: "Il tempio indù più iconico di Bali, costruito su una roccia nell'Oceano Indiano. Il tramonto qui è uno dei più magici del Sud-est asiatico.", bestTime: "Tramonto (17:30 – 19:00)", duration: "2 ore", price: "4 USD", tip: "Arrivate 1 ora prima del tramonto per trovare un buon posto. Può essere molto affollato in alta stagione." },
    ],
  },
  {
    theme: "Bali del Sud — spiagge, surf e tramonti",
    activities: [
      { name: "GWK Cultural Park", description: "Il Garuda Wisnu Kencana Cultural Park, sede della statua di 121 metri di Vishnu in sella all'uccello Garuda — la più alta dell'Indonesia — con spettacoli di danza inclusi.", bestTime: "Mattina", duration: "2 ore", price: "15 USD", tip: "La statua offre viste sull'oceano. Controllate l'orario degli spettacoli di danza quando comprate il biglietto." },
      { name: "Spiaggia di Seminyak", description: "La spiaggia più sofisticata di Bali, con beach club dal design ricercato, ristoranti di alto livello e una scena di tramonto ineguagliabile sull'Oceano Indiano.", bestTime: "Pomeriggio", duration: "2 ore", price: "Gratis", tip: "I beach club della zona (Potato Head, Ku De Ta) sono perfetti per il tramonto — prenotate in anticipo in alta stagione." },
      { name: "Canggu — surf e cultura del caffè", description: "Il quartiere più alla moda di Bali: spiagge da surf con onde perfette per principianti, caffè specialty e una vivace scena di nomadi digitali.", bestTime: "Pomeriggio · Sera", duration: "2 ore", price: "Gratis", tip: "Old Man's è il posto più popolare di Canggu per una birra con vista sull'oceano al tramonto." },
    ],
  },
  {
    theme: "Uluwatu — scogliere, templi e danza kecak",
    activities: [
      { name: "Tempio di Uluwatu", description: "Un tempio sacro dell'XI secolo arroccato in cima a una scogliera di 70 metri sull'Oceano Indiano, uno dei sei templi principali di Bali.", bestTime: "Pomeriggio (per restare al tramonto)", duration: "2 ore", price: "4 USD", tip: "Attenzione alle scimmie all'ingresso — amano particolarmente occhiali da sole e telefoni." },
      { name: "Spiaggia di Padang Padang", description: "La piccola spiaggia paradisiaca nascosta tra le scogliere, resa famosa dal film 'Eat Pray Love', con acqua turchese e sabbia bianca immacolata.", bestTime: "Mezzogiorno · Primo pomeriggio", duration: "2 ore", price: "1 USD", tip: "L'accesso avviene tramite una scala scavata nella roccia. Indossate scarpe con presa e portate poco bagaglio — il passaggio è stretto." },
      { name: "Danza kecak al tramonto — Uluwatu", description: "Lo spettacolo più impressionante di Bali: cento uomini che cantano il 'kecak' a cappella mentre il sole affonda nell'oceano, visto dall'anfiteatro naturale della scogliera.", bestTime: "18:00 (esatte — non arrivate in ritardo)", duration: "1,5 ore", price: "12 USD", tip: "I biglietti si esauriscono in fretta — compratali alla biglietteria del tempio all'arrivo nel pomeriggio, prima di andare in spiaggia." },
    ],
  },
  {
    theme: "Le montagne — Tirta Empul e il Monte Batur",
    activities: [
      { name: "Tirta Empul — il tempio dell'acqua sacra", description: "Il tempio di purificazione più sacro di Bali, con vasche rituali di acqua santa dove i balinesi si purificano in una cerimonia ancestrale aperta ai visitatori.", bestTime: "Presto al mattino", duration: "1,5 ore", price: "3 USD", tip: "Potete partecipare alla purificazione (melukat) — portate vestiti che non vi dispiace bagnare, o noleggiate un sarong all'ingresso per 1 USD." },
      { name: "Punto panoramico del Monte Batur — Kintamani", description: "Viste panoramiche spettacolari sul vulcano attivo Batur e sul suo lago di caldera dagli altopiani di Kintamani, a 1.500 metri di altitudine.", bestTime: "Mezzogiorno (prima che arrivino le nuvole pomeridiane)", duration: "1,5 ore", price: "Gratis", tip: "Se volete salire fino al cratere del vulcano, il trekking inizia alle 4 del mattino — un'esperienza unica che vale la sveglia presto." },
      { name: "Villaggio di Penglipuran", description: "Uno dei villaggi più puliti e meglio conservati al mondo, dove l'architettura balinese tradizionale e i costumi ancestrali sono rimasti intatti per secoli.", bestTime: "Pomeriggio", duration: "1,5 ore", price: "2 USD", tip: "I veicoli a motore sono vietati all'interno del villaggio. È uno dei pochi luoghi di Bali dove regna il silenzio assoluto." },
    ],
  },
];

export const baliDaysPt: DayI18n[] = [
  {
    theme: "Ubud — o coração espiritual de Bali",
    activities: [
      { name: "Socalcos de arroz de Tegallalang", description: "Os socalcos de arroz em cascata mais fotogénicos de Bali, esculpidos segundo o sagrado sistema de irrigação subak, Património Mundial da UNESCO.", bestTime: "Manhã cedo (antes das 9h)", duration: "2 horas", price: "2 USD", tip: "Chega antes das 8h para evitares o calor e os grupos de turistas, e tirares as melhores fotos." },
      { name: "Floresta dos Macacos de Ubud", description: "Um santuário natural no coração de Ubud onde centenas de macacos de cauda longa convivem com templos hindus centenários no meio de vegetação tropical.", bestTime: "Meio da manhã", duration: "1,5 horas", price: "5 USD", tip: "Não mostres comida nem sacos abertos — os macacos vão agarrá-los. Mantém tudo fechado dentro do saco." },
      { name: "Palácio Real de Ubud", description: "O histórico Puri Saren Agung, residência da família real balinesa desde o século XIX, com arquitetura tradicional mesmo no centro de Ubud.", bestTime: "Tarde · Noite (espetáculo de dança)", duration: "1 hora", price: "Grátis", tip: "À noite há espetáculos de dança kecak e legong no pátio do palácio — compra os bilhetes quando chegares." },
    ],
  },
  {
    theme: "Templos sagrados do oeste de Bali",
    activities: [
      { name: "Jatiluwih — Socalcos de arroz UNESCO", description: "Os maiores e mais bem preservados socalcos de arroz de Bali, Património UNESCO, muito mais tranquilos e autênticos do que Tegallalang.", bestTime: "Manhã", duration: "1,5 horas", price: "2 USD", tip: "Mais tranquilo e menos turístico do que Tegallalang. Leva protetor solar — há muito pouca sombra ao longo dos trilhos." },
      { name: "Pura Taman Ayun", description: "O templo real de Mengwi, rodeado por um fosso de água e jardins majestosos, um dos complexos hindus mais importantes e mais bem preservados de Bali.", bestTime: "Meio da tarde", duration: "1 hora", price: "2 USD", tip: "Vestuário obrigatório: um sarongue (tecido balinês) — emprestam-te um à entrada se não tiveres o teu." },
      { name: "Tanah Lot ao pôr do sol", description: "O templo hindu mais icónico de Bali, construído sobre um rochedo no Oceano Índico. O pôr do sol aqui é um dos mais mágicos do Sudeste Asiático.", bestTime: "Pôr do sol (17h30 – 19h)", duration: "2 horas", price: "4 USD", tip: "Chega 1 hora antes do pôr do sol para conseguires um bom lugar. Pode ficar muito cheio em época alta." },
    ],
  },
  {
    theme: "Sul de Bali — praias, surf e pores do sol",
    activities: [
      { name: "GWK Cultural Park", description: "O Parque Cultural Garuda Wisnu Kencana, que alberga a estátua de 121 metros de Vishnu montado na ave Garuda — a mais alta da Indonésia — com espetáculos de dança incluídos.", bestTime: "Manhã", duration: "2 horas", price: "15 USD", tip: "A estátua tem vista para o oceano. Consulta o horário dos espetáculos de dança quando comprares o bilhete." },
      { name: "Praia de Seminyak", description: "A praia mais sofisticada de Bali, com beach clubs de design cuidado, restaurantes de topo e um ambiente de pôr do sol incomparável sobre o Oceano Índico.", bestTime: "Tarde", duration: "2 horas", price: "Grátis", tip: "Os beach clubs da zona (Potato Head, Ku De Ta) são perfeitos para o pôr do sol — reserva com antecedência em época alta." },
      { name: "Canggu — surf e cultura de café", description: "O bairro mais na moda de Bali: praias de surf com ondas perfeitas para principiantes, cafés especializados e uma animada cena de nómadas digitais.", bestTime: "Tarde · Noite", duration: "2 horas", price: "Grátis", tip: "O Old Man's é o local mais popular de Canggu para uma cerveja com vista para o oceano ao pôr do sol." },
    ],
  },
  {
    theme: "Uluwatu — falésias, templos e dança kecak",
    activities: [
      { name: "Templo de Uluwatu", description: "Um templo sagrado do século XI empoleirado no topo de uma falésia de 70 metros sobre o Oceano Índico, um dos seis templos principais de Bali.", bestTime: "Tarde (para ficares até ao pôr do sol)", duration: "2 horas", price: "4 USD", tip: "Cuidado com os macacos à entrada — gostam especialmente de óculos de sol e telemóveis." },
      { name: "Praia de Padang Padang", description: "A pequena praia paradisíaca escondida entre falésias, tornada famosa pelo filme 'Eat Pray Love', com água turquesa e areia branca imaculada.", bestTime: "Meio-dia · Início da tarde", duration: "2 horas", price: "1 USD", tip: "O acesso é por uma escadaria talhada na rocha. Usa calçado com boa aderência e leva pouca bagagem — o caminho é estreito." },
      { name: "Dança kecak ao pôr do sol — Uluwatu", description: "O espetáculo mais impressionante de Bali: uma centena de homens a cantar 'kecak' a cappella enquanto o sol se põe no oceano, visto do anfiteatro natural da falésia.", bestTime: "18h (em ponto — não chegues atrasado)", duration: "1,5 horas", price: "12 USD", tip: "Os bilhetes esgotam depressa — compra-os na bilheteira do templo quando chegares à tarde, antes de ires à praia." },
    ],
  },
  {
    theme: "As terras altas — Tirta Empul e o Monte Batur",
    activities: [
      { name: "Tirta Empul — o templo da água sagrada", description: "O templo de purificação mais sagrado de Bali, com poças rituais de água sagrada onde os balineses se purificam numa cerimónia ancestral aberta a visitantes.", bestTime: "Manhã cedo", duration: "1,5 horas", price: "3 USD", tip: "Podes participar na purificação (melukat) — leva roupa que não te importes de molhar, ou aluga um sarongue à entrada por 1 USD." },
      { name: "Miradouro do Monte Batur — Kintamani", description: "Vistas panorâmicas espetaculares sobre o vulcão ativo Batur e o seu lago de caldeira a partir das terras altas de Kintamani, a 1.500 metros de altitude.", bestTime: "Meio-dia (antes de chegarem as nuvens da tarde)", duration: "1,5 horas", price: "Grátis", tip: "Se quiseres subir até à cratera do vulcão, a caminhada começa às 4h da manhã — uma experiência única que vale o madrugar." },
      { name: "Aldeia de Penglipuran", description: "Uma das aldeias mais limpas e mais bem preservadas do mundo, onde a arquitetura balinesa tradicional e os costumes ancestrais se mantiveram intactos durante séculos.", bestTime: "Tarde", duration: "1,5 horas", price: "2 USD", tip: "Os veículos motorizados são proibidos dentro da aldeia. É um dos poucos lugares em Bali onde reina o silêncio absoluto." },
    ],
  },
];

export const baliDaysByLang: Partial<Record<BaliLang, DayI18n[]>> = {
  en: baliDaysEn,
  fr: baliDaysFr,
  de: baliDaysDe,
  it: baliDaysIt,
  pt: baliDaysPt,
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
