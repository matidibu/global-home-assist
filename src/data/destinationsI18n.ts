// Translations for the small subset of `destinations.ts` fields that are
// actually rendered to visitors: the featured-destination cards on the
// homepage (see HomeStaticContent.tsx). The base `destinations` array is
// Spanish-only and used to carry a huge amount of guidePractical/
// practicalInfo/faq content that turned out to be unused dead data (only
// sitemap.ts and HomeStaticContent.tsx import from it, and sitemap only
// needs the slug) -- so only name/country/tagline/avgBudget need a
// translation layer, not the whole file.

export type DestLang = "en" | "fr" | "it" | "de" | "pt";

interface DestI18nEntry {
  name: string;
  country: string;
  tagline: string;
}

export const destinationsI18n: Record<string, Record<DestLang, DestI18nEntry>> = {
  dubai: {
    en: { name: "Dubai", country: "United Arab Emirates", tagline: "The city of the future in the desert" },
    fr: { name: "Dubaï", country: "Émirats arabes unis", tagline: "La ville du futur dans le désert" },
    it: { name: "Dubai", country: "Emirati Arabi Uniti", tagline: "La città del futuro nel deserto" },
    de: { name: "Dubai", country: "Vereinigte Arabische Emirate", tagline: "Die Stadt der Zukunft in der Wüste" },
    pt: { name: "Dubai", country: "Emirados Árabes Unidos", tagline: "A cidade do futuro no deserto" },
  },
  paris: {
    en: { name: "Paris", country: "France", tagline: "The city of love and culture" },
    fr: { name: "Paris", country: "France", tagline: "La ville de l'amour et de la culture" },
    it: { name: "Parigi", country: "Francia", tagline: "La città dell'amore e della cultura" },
    de: { name: "Paris", country: "Frankreich", tagline: "Die Stadt der Liebe und der Kultur" },
    pt: { name: "Paris", country: "França", tagline: "A cidade do amor e da cultura" },
  },
  roma: {
    en: { name: "Rome", country: "Italy", tagline: "The Eternal City awaits" },
    fr: { name: "Rome", country: "Italie", tagline: "La Ville Éternelle vous attend" },
    it: { name: "Roma", country: "Italia", tagline: "La Città Eterna ti aspetta" },
    de: { name: "Rom", country: "Italien", tagline: "Die Ewige Stadt erwartet dich" },
    pt: { name: "Roma", country: "Itália", tagline: "A Cidade Eterna te espera" },
  },
  barcelona: {
    en: { name: "Barcelona", country: "Spain", tagline: "Art, beach, and modernist architecture" },
    fr: { name: "Barcelone", country: "Espagne", tagline: "Art, plage et architecture moderniste" },
    it: { name: "Barcellona", country: "Spagna", tagline: "Arte, spiaggia e architettura modernista" },
    de: { name: "Barcelona", country: "Spanien", tagline: "Kunst, Strand und modernistische Architektur" },
    pt: { name: "Barcelona", country: "Espanha", tagline: "Arte, praia e arquitetura modernista" },
  },
  londres: {
    en: { name: "London", country: "United Kingdom", tagline: "Tradition and innovation on the Thames" },
    fr: { name: "Londres", country: "Royaume-Uni", tagline: "Tradition et innovation sur la Tamise" },
    it: { name: "Londra", country: "Regno Unito", tagline: "Tradizione e innovazione sul Tamigi" },
    de: { name: "London", country: "Vereinigtes Königreich", tagline: "Tradition und Innovation an der Themse" },
    pt: { name: "Londres", country: "Reino Unido", tagline: "Tradição e inovação no Tâmisa" },
  },
  "nueva-york": {
    en: { name: "New York", country: "United States", tagline: "The city that never sleeps" },
    fr: { name: "New York", country: "États-Unis", tagline: "La ville qui ne dort jamais" },
    it: { name: "New York", country: "Stati Uniti", tagline: "La città che non dorme mai" },
    de: { name: "New York", country: "Vereinigte Staaten", tagline: "Die Stadt, die niemals schläft" },
    pt: { name: "Nova York", country: "Estados Unidos", tagline: "A cidade que nunca dorme" },
  },
  tokio: {
    en: { name: "Tokyo", country: "Japan", tagline: "Technology, tradition, and Japanese gastronomy" },
    fr: { name: "Tokyo", country: "Japon", tagline: "Technologie, tradition et gastronomie japonaise" },
    it: { name: "Tokyo", country: "Giappone", tagline: "Tecnologia, tradizione e gastronomia giapponese" },
    de: { name: "Tokio", country: "Japan", tagline: "Technologie, Tradition und japanische Gastronomie" },
    pt: { name: "Tóquio", country: "Japão", tagline: "Tecnologia, tradição e gastronomia japonesa" },
  },
  cancun: {
    en: { name: "Cancún", country: "Mexico", tagline: "Turquoise beaches and Mayan ruins" },
    fr: { name: "Cancún", country: "Mexique", tagline: "Plages turquoise et ruines mayas" },
    it: { name: "Cancún", country: "Messico", tagline: "Spiagge turchesi e rovine Maya" },
    de: { name: "Cancún", country: "Mexiko", tagline: "Türkisfarbene Strände und Maya-Ruinen" },
    pt: { name: "Cancún", country: "México", tagline: "Praias turquesa e ruínas maias" },
  },
  miami: {
    en: { name: "Miami", country: "United States", tagline: "Sun, beach, and Caribbean nightlife" },
    fr: { name: "Miami", country: "États-Unis", tagline: "Soleil, plage et vie nocturne caribéenne" },
    it: { name: "Miami", country: "Stati Uniti", tagline: "Sole, spiaggia e vita notturna caraibica" },
    de: { name: "Miami", country: "Vereinigte Staaten", tagline: "Sonne, Strand und karibisches Nachtleben" },
    pt: { name: "Miami", country: "Estados Unidos", tagline: "Sol, praia e vida noturna caribenha" },
  },
  "rio-de-janeiro": {
    en: { name: "Rio de Janeiro", country: "Brazil", tagline: "The marvelous city between hills and sea" },
    fr: { name: "Rio de Janeiro", country: "Brésil", tagline: "La ville merveilleuse entre collines et mer" },
    it: { name: "Rio de Janeiro", country: "Brasile", tagline: "La città meravigliosa tra colline e mare" },
    de: { name: "Rio de Janeiro", country: "Brasilien", tagline: "Die wunderbare Stadt zwischen Hügeln und Meer" },
    pt: { name: "Rio de Janeiro", country: "Brasil", tagline: "A cidade maravilhosa entre montanhas e mar" },
  },
  "buenos-aires": {
    en: { name: "Buenos Aires", country: "Argentina", tagline: "The Paris of South America" },
    fr: { name: "Buenos Aires", country: "Argentine", tagline: "Le Paris de l'Amérique du Sud" },
    it: { name: "Buenos Aires", country: "Argentina", tagline: "La Parigi del Sud America" },
    de: { name: "Buenos Aires", country: "Argentinien", tagline: "Das Paris Südamerikas" },
    pt: { name: "Buenos Aires", country: "Argentina", tagline: "A Paris da América do Sul" },
  },
  cartagena: {
    en: { name: "Cartagena", country: "Colombia", tagline: "The walled city of the Colombian Caribbean" },
    fr: { name: "Carthagène", country: "Colombie", tagline: "La ville fortifiée des Caraïbes colombiennes" },
    it: { name: "Cartagena", country: "Colombia", tagline: "La città murata dei Caraibi colombiani" },
    de: { name: "Cartagena", country: "Kolumbien", tagline: "Die ummauerte Stadt der kolumbianischen Karibik" },
    pt: { name: "Cartagena", country: "Colômbia", tagline: "A cidade amuralhada do Caribe colombiano" },
  },
  lima: {
    en: { name: "Lima", country: "Peru", tagline: "Latin America's culinary capital" },
    fr: { name: "Lima", country: "Pérou", tagline: "La capitale gastronomique de l'Amérique latine" },
    it: { name: "Lima", country: "Perù", tagline: "La capitale gastronomica dell'America Latina" },
    de: { name: "Lima", country: "Peru", tagline: "Lateinamerikas kulinarische Hauptstadt" },
    pt: { name: "Lima", country: "Peru", tagline: "A capital gastronômica da América Latina" },
  },
  cusco: {
    en: { name: "Cusco", country: "Peru", tagline: "The navel of the Inca world" },
    fr: { name: "Cusco", country: "Pérou", tagline: "Le nombril du monde inca" },
    it: { name: "Cusco", country: "Perù", tagline: "L'ombelico del mondo inca" },
    de: { name: "Cusco", country: "Peru", tagline: "Der Nabel der Inka-Welt" },
    pt: { name: "Cusco", country: "Peru", tagline: "O umbigo do mundo inca" },
  },
  amsterdam: {
    en: { name: "Amsterdam", country: "Netherlands", tagline: "Canals, museums, and Dutch freedom" },
    fr: { name: "Amsterdam", country: "Pays-Bas", tagline: "Canaux, musées et liberté hollandaise" },
    it: { name: "Amsterdam", country: "Paesi Bassi", tagline: "Canali, musei e libertà olandese" },
    de: { name: "Amsterdam", country: "Niederlande", tagline: "Grachten, Museen und holländische Freiheit" },
    pt: { name: "Amsterdã", country: "Países Baixos", tagline: "Canais, museus e liberdade holandesa" },
  },
  lisboa: {
    en: { name: "Lisbon", country: "Portugal", tagline: "The city of seven hills and fado" },
    fr: { name: "Lisbonne", country: "Portugal", tagline: "La ville des sept collines et du fado" },
    it: { name: "Lisbona", country: "Portogallo", tagline: "La città delle sette colline e del fado" },
    de: { name: "Lissabon", country: "Portugal", tagline: "Die Stadt der sieben Hügel und des Fado" },
    pt: { name: "Lisboa", country: "Portugal", tagline: "A cidade das sete colinas e do fado" },
  },
  praga: {
    en: { name: "Prague", country: "Czech Republic", tagline: "The city of a hundred spires" },
    fr: { name: "Prague", country: "République tchèque", tagline: "La ville aux cent clochers" },
    it: { name: "Praga", country: "Repubblica Ceca", tagline: "La città dalle cento torri" },
    de: { name: "Prag", country: "Tschechien", tagline: "Die Stadt der hundert Türme" },
    pt: { name: "Praga", country: "República Tcheca", tagline: "A cidade das cem torres" },
  },
  bangkok: {
    en: { name: "Bangkok", country: "Thailand", tagline: "Golden temples, bold flavors, and vibrant chaos" },
    fr: { name: "Bangkok", country: "Thaïlande", tagline: "Temples dorés, saveurs intenses et chaos vibrant" },
    it: { name: "Bangkok", country: "Tailandia", tagline: "Templi dorati, sapori intensi e caos vibrante" },
    de: { name: "Bangkok", country: "Thailand", tagline: "Goldene Tempel, intensive Aromen und pulsierendes Chaos" },
    pt: { name: "Bangkok", country: "Tailândia", tagline: "Templos dourados, sabores intensos e caos vibrante" },
  },
  bali: {
    en: { name: "Bali", country: "Indonesia", tagline: "The island of the gods" },
    fr: { name: "Bali", country: "Indonésie", tagline: "L'île des dieux" },
    it: { name: "Bali", country: "Indonesia", tagline: "L'isola degli dei" },
    de: { name: "Bali", country: "Indonesien", tagline: "Die Insel der Götter" },
    pt: { name: "Bali", country: "Indonésia", tagline: "A ilha dos deuses" },
  },
  marrakech: {
    en: { name: "Marrakech", country: "Morocco", tagline: "The red city of the Maghreb" },
    fr: { name: "Marrakech", country: "Maroc", tagline: "La ville rouge du Maghreb" },
    it: { name: "Marrakech", country: "Marocco", tagline: "La città rossa del Maghreb" },
    de: { name: "Marrakesch", country: "Marokko", tagline: "Die rote Stadt des Maghreb" },
    pt: { name: "Marrakech", country: "Marrocos", tagline: "A cidade vermelha do Magrebe" },
  },
  florencia: {
    en: { name: "Florence", country: "Italy", tagline: "The Renaissance in its purest form" },
    fr: { name: "Florence", country: "Italie", tagline: "La Renaissance à l'état pur" },
    it: { name: "Firenze", country: "Italia", tagline: "Il Rinascimento allo stato puro" },
    de: { name: "Florenz", country: "Italien", tagline: "Die Renaissance in Reinform" },
    pt: { name: "Florença", country: "Itália", tagline: "O Renascimento em estado puro" },
  },
  estambul: {
    en: { name: "Istanbul", country: "Turkey", tagline: "Where Europe meets Asia" },
    fr: { name: "Istanbul", country: "Turquie", tagline: "Là où l'Europe rencontre l'Asie" },
    it: { name: "Istanbul", country: "Turchia", tagline: "Dove l'Europa incontra l'Asia" },
    de: { name: "Istanbul", country: "Türkei", tagline: "Wo Europa auf Asien trifft" },
    pt: { name: "Istambul", country: "Turquia", tagline: "Onde a Europa encontra a Ásia" },
  },
  "ciudad-de-mexico": {
    en: { name: "Mexico City", country: "Mexico", tagline: "Tacos, pyramids, and Latin America's biggest metropolis" },
    fr: { name: "Mexico", country: "Mexique", tagline: "Tacos, pyramides et la plus grande métropole d'Amérique latine" },
    it: { name: "Città del Messico", country: "Messico", tagline: "Tacos, piramidi e la più grande metropoli dell'America Latina" },
    de: { name: "Mexiko-Stadt", country: "Mexiko", tagline: "Tacos, Pyramiden und die größte Metropole Lateinamerikas" },
    pt: { name: "Cidade do México", country: "México", tagline: "Tacos, pirâmides e a maior metrópole da América Latina" },
  },
  singapur: {
    en: { name: "Singapore", country: "Singapore", tagline: "21st-century future in the tropics" },
    fr: { name: "Singapour", country: "Singapour", tagline: "Le futur du XXIe siècle sous les tropiques" },
    it: { name: "Singapore", country: "Singapore", tagline: "Il futuro del XXI secolo ai tropici" },
    de: { name: "Singapur", country: "Singapur", tagline: "Die Zukunft des 21. Jahrhunderts in den Tropen" },
    pt: { name: "Singapura", country: "Singapura", tagline: "O futuro do século XXI nos trópicos" },
  },
  medellin: {
    en: { name: "Medellín", country: "Colombia", tagline: "The city of eternal spring" },
    fr: { name: "Medellín", country: "Colombie", tagline: "La ville du printemps éternel" },
    it: { name: "Medellín", country: "Colombia", tagline: "La città dell'eterna primavera" },
    de: { name: "Medellín", country: "Kolumbien", tagline: "Die Stadt des ewigen Frühlings" },
    pt: { name: "Medellín", country: "Colômbia", tagline: "A cidade da eterna primavera" },
  },
  viena: {
    en: { name: "Vienna", country: "Austria", tagline: "The world capital of classical music" },
    fr: { name: "Vienne", country: "Autriche", tagline: "La capitale mondiale de la musique classique" },
    it: { name: "Vienna", country: "Austria", tagline: "La capitale mondiale della musica classica" },
    de: { name: "Wien", country: "Österreich", tagline: "Die Welthauptstadt der klassischen Musik" },
    pt: { name: "Viena", country: "Áustria", tagline: "A capital mundial da música clássica" },
  },
};

const DAY_WORD: Record<DestLang, string> = {
  en: "day",
  fr: "jour",
  it: "giorno",
  de: "Tag",
  pt: "dia",
};

function localizeAvgBudget(avgBudget: string, lang: DestLang): string {
  return avgBudget.replace("USD/día", `USD/${DAY_WORD[lang]}`);
}

/** Returns dest's name/country/tagline/avgBudget localized for `lang`, falling back to the
 * Spanish base fields when `lang` is "es" or no translation exists for that slug. */
export function localizeDestinationCard<T extends { slug: string; name: string; country: string; tagline: string; avgBudget: string }>(
  dest: T,
  lang: string
): T {
  const entry = destinationsI18n[dest.slug]?.[lang as DestLang];
  if (!entry) return dest;
  return { ...dest, name: entry.name, country: entry.country, tagline: entry.tagline, avgBudget: localizeAvgBudget(dest.avgBudget, lang as DestLang) };
}
