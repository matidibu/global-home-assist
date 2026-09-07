// ─────────────────────────────────────────────────────────────────────────────
// Números de emergencia oficiales por país — dataset estático y verificado.
//
// Por qué existe este archivo: hasta 2026-09 los números de emergencia venían
// generados por gpt-4o-mini en cada request (ver src/app/api/destination-info/route.ts).
// Una auditoría encontró que para destinos fuera de la lista hardcodeada del prompt
// el modelo devolvía números equivocados — p. ej. para Cartagena, Colombia devolvía
// los números de Argentina (911/101/107/100) en vez del 123. Un número de emergencia
// mal es el único dato del sitio con consecuencia física real, así que se sacó del LLM.
//
// Fuentes: números oficiales nacionales (policía / SAMU-ambulancia / bomberos) y el
// número único onde existe. Verificado contra Wikipedia "List of emergency telephone
// numbers" + fuentes gubernamentales, septiembre 2026.
//
// `general`: número único nacional cuando existe de verdad (112 en la UE, 911 en
// América, 999/000/111 etc.). Se deja vacío cuando el país no tiene uno unificado
// real — la UI oculta la celda vacía.
// ─────────────────────────────────────────────────────────────────────────────

export interface EmergencyNumbers {
  general?: string;
  police: string;
  ambulance: string;
  fire: string;
}

// Clave: código ISO 3166-1 alpha-2 (mayúsculas).
const BY_ISO: Record<string, EmergencyNumbers> = {
  // ── América del Sur ──────────────────────────────────────────────────────
  AR: { general: "911", police: "911", ambulance: "107", fire: "100" },
  BO: { police: "110", ambulance: "118", fire: "119" },
  BR: { police: "190", ambulance: "192", fire: "193" },
  CL: { police: "133", ambulance: "131", fire: "132" },
  CO: { general: "123", police: "123", ambulance: "123", fire: "123" },
  EC: { general: "911", police: "911", ambulance: "911", fire: "911" },
  GY: { police: "911", ambulance: "913", fire: "912" },
  PE: { police: "105", ambulance: "106", fire: "116" },
  PY: { general: "911", police: "911", ambulance: "141", fire: "132" },
  SR: { police: "115", ambulance: "113", fire: "110" },
  UY: { general: "911", police: "911", ambulance: "105", fire: "104" },
  VE: { general: "911", police: "911", ambulance: "911", fire: "911" },

  // ── América Central y Caribe ─────────────────────────────────────────────
  BZ: { police: "911", ambulance: "911", fire: "911", general: "911" },
  CR: { general: "911", police: "911", ambulance: "911", fire: "911" },
  CU: { police: "106", ambulance: "104", fire: "105" },
  DO: { general: "911", police: "911", ambulance: "911", fire: "911" },
  GT: { police: "110", ambulance: "123", fire: "123" },
  HN: { general: "911", police: "911", ambulance: "911", fire: "911" },
  JM: { police: "119", ambulance: "110", fire: "110" },
  NI: { police: "118", ambulance: "128", fire: "115" },
  PA: { general: "911", police: "104", ambulance: "911", fire: "103" },
  SV: { general: "911", police: "911", ambulance: "911", fire: "911" },
  TT: { police: "999", ambulance: "811", fire: "990" },

  // ── América del Norte ────────────────────────────────────────────────────
  CA: { general: "911", police: "911", ambulance: "911", fire: "911" },
  MX: { general: "911", police: "911", ambulance: "911", fire: "911" },
  US: { general: "911", police: "911", ambulance: "911", fire: "911" },

  // ── Europa (UE + EEE: 112 funciona en todo el bloque) ────────────────────
  AT: { general: "112", police: "133", ambulance: "144", fire: "122" },
  BE: { general: "112", police: "101", ambulance: "112", fire: "112" },
  BG: { general: "112", police: "112", ambulance: "112", fire: "112" },
  CH: { general: "112", police: "117", ambulance: "144", fire: "118" },
  CY: { general: "112", police: "112", ambulance: "112", fire: "112" },
  CZ: { general: "112", police: "158", ambulance: "155", fire: "150" },
  DE: { general: "112", police: "110", ambulance: "112", fire: "112" },
  DK: { general: "112", police: "114", ambulance: "112", fire: "112" },
  EE: { general: "112", police: "112", ambulance: "112", fire: "112" },
  ES: { general: "112", police: "112", ambulance: "112", fire: "112" },
  FI: { general: "112", police: "112", ambulance: "112", fire: "112" },
  FR: { general: "112", police: "17", ambulance: "15", fire: "18" },
  GR: { general: "112", police: "100", ambulance: "166", fire: "199" },
  HR: { general: "112", police: "192", ambulance: "194", fire: "193" },
  HU: { general: "112", police: "107", ambulance: "104", fire: "105" },
  IE: { general: "112", police: "999", ambulance: "999", fire: "999" },
  IS: { general: "112", police: "112", ambulance: "112", fire: "112" },
  IT: { general: "112", police: "112", ambulance: "112", fire: "112" },
  LT: { general: "112", police: "112", ambulance: "112", fire: "112" },
  LU: { general: "112", police: "113", ambulance: "112", fire: "112" },
  LV: { general: "112", police: "112", ambulance: "112", fire: "112" },
  MT: { general: "112", police: "112", ambulance: "112", fire: "112" },
  NL: { general: "112", police: "112", ambulance: "112", fire: "112" },
  NO: { general: "112", police: "112", ambulance: "113", fire: "110" },
  PL: { general: "112", police: "997", ambulance: "999", fire: "998" },
  PT: { general: "112", police: "112", ambulance: "112", fire: "112" },
  RO: { general: "112", police: "112", ambulance: "112", fire: "112" },
  SE: { general: "112", police: "112", ambulance: "112", fire: "112" },
  SI: { general: "112", police: "113", ambulance: "112", fire: "112" },
  SK: { general: "112", police: "158", ambulance: "155", fire: "150" },
  UK: { general: "999", police: "999", ambulance: "999", fire: "999" },
  GB: { general: "999", police: "999", ambulance: "999", fire: "999" },

  // ── Europa no-UE ─────────────────────────────────────────────────────────
  AL: { general: "112", police: "129", ambulance: "127", fire: "128" },
  BA: { police: "122", ambulance: "124", fire: "123" },
  BY: { police: "102", ambulance: "103", fire: "101" },
  GE: { general: "112", police: "112", ambulance: "112", fire: "112" },
  MD: { general: "112", police: "112", ambulance: "112", fire: "112" },
  ME: { general: "112", police: "122", ambulance: "124", fire: "123" },
  MK: { general: "112", police: "192", ambulance: "194", fire: "193" },
  RS: { general: "112", police: "192", ambulance: "194", fire: "193" },
  RU: { general: "112", police: "102", ambulance: "103", fire: "101" },
  UA: { general: "112", police: "102", ambulance: "103", fire: "101" },

  // ── África ──────────────────────────────────────────────────────────────
  DZ: { police: "17", ambulance: "14", fire: "14" },
  EG: { police: "122", ambulance: "123", fire: "180" },
  ET: { police: "991", ambulance: "907", fire: "939" },
  GH: { general: "112", police: "191", ambulance: "193", fire: "192" },
  KE: { general: "999", police: "999", ambulance: "999", fire: "999" },
  MA: { police: "19", ambulance: "15", fire: "15" },
  MU: { police: "999", ambulance: "114", fire: "115" },
  NA: { police: "10111", ambulance: "211111", fire: "211111" },
  NG: { general: "112", police: "112", ambulance: "112", fire: "112" },
  RW: { police: "112", ambulance: "912", fire: "111" },
  SN: { police: "17", ambulance: "1515", fire: "18" },
  TN: { police: "197", ambulance: "190", fire: "198" },
  TZ: { general: "112", police: "112", ambulance: "114", fire: "115" },
  UG: { general: "999", police: "999", ambulance: "999", fire: "999" },
  ZA: { general: "112", police: "10111", ambulance: "10177", fire: "10111" },
  ZM: { police: "999", ambulance: "992", fire: "993" },
  ZW: { police: "995", ambulance: "994", fire: "993" },

  // ── Oriente Medio ───────────────────────────────────────────────────────
  AE: { general: "999", police: "999", ambulance: "998", fire: "997" },
  BH: { general: "999", police: "999", ambulance: "999", fire: "999" },
  IL: { police: "100", ambulance: "101", fire: "102" },
  JO: { general: "911", police: "911", ambulance: "911", fire: "911" },
  KW: { general: "112", police: "112", ambulance: "112", fire: "112" },
  LB: { police: "112", ambulance: "140", fire: "175" },
  OM: { general: "9999", police: "9999", ambulance: "9999", fire: "9999" },
  QA: { general: "999", police: "999", ambulance: "999", fire: "999" },
  SA: { police: "999", ambulance: "997", fire: "998" },
  TR: { general: "112", police: "112", ambulance: "112", fire: "112" },

  // ── Asia ────────────────────────────────────────────────────────────────
  BD: { general: "999", police: "999", ambulance: "999", fire: "999" },
  BT: { police: "113", ambulance: "112", fire: "110" },
  CN: { police: "110", ambulance: "120", fire: "119" },
  HK: { general: "999", police: "999", ambulance: "999", fire: "999" },
  ID: { general: "112", police: "110", ambulance: "118", fire: "113" },
  IN: { general: "112", police: "100", ambulance: "108", fire: "101" },
  JP: { police: "110", ambulance: "119", fire: "119" },
  KH: { police: "117", ambulance: "119", fire: "118" },
  KR: { police: "112", ambulance: "119", fire: "119" },
  LA: { police: "191", ambulance: "195", fire: "190" },
  LK: { general: "119", police: "119", ambulance: "1990", fire: "110" },
  MM: { general: "199", police: "199", ambulance: "192", fire: "191" },
  MN: { police: "102", ambulance: "103", fire: "101" },
  MO: { general: "999", police: "999", ambulance: "999", fire: "999" },
  MV: { police: "119", ambulance: "102", fire: "118" },
  MY: { general: "999", police: "999", ambulance: "999", fire: "994" },
  NP: { police: "100", ambulance: "102", fire: "101" },
  PH: { general: "911", police: "911", ambulance: "911", fire: "911" },
  PK: { police: "15", ambulance: "1122", fire: "16" },
  SG: { general: "999", police: "999", ambulance: "995", fire: "995" },
  TH: { general: "191", police: "191", ambulance: "1669", fire: "199" },
  TW: { police: "110", ambulance: "119", fire: "119" },
  VN: { police: "113", ambulance: "115", fire: "114" },

  // ── Oceanía ─────────────────────────────────────────────────────────────
  AU: { general: "000", police: "000", ambulance: "000", fire: "000" },
  FJ: { police: "917", ambulance: "911", fire: "910" },
  NZ: { general: "111", police: "111", ambulance: "111", fire: "111" },
  PF: { general: "112", police: "17", ambulance: "15", fire: "18" },
};

// Nombres de país → ISO. Una entrada por grafía normalizada única (minúsculas,
// sin acentos). Cubre español e inglés (los dos caminos dominantes:
// autocompletado Geoapify en es/en y prefill de CTAs en inglés) más las grafías
// fr/it/de/pt de los destinos más buscados que difieren del español/inglés.
const NAME_TO_ISO: Record<string, string> = {
  // — América del Sur —
  argentina: "AR", bolivia: "BO", brasil: "BR", brazil: "BR", chile: "CL",
  colombia: "CO", ecuador: "EC", paraguay: "PY", peru: "PE", uruguay: "UY",
  venezuela: "VE", guyana: "GY", surinam: "SR", suriname: "SR",
  // — América Central y Caribe —
  belice: "BZ", belize: "BZ", "costa rica": "CR", cuba: "CU", guatemala: "GT",
  honduras: "HN", jamaica: "JM", nicaragua: "NI", panama: "PA",
  "el salvador": "SV", "republica dominicana": "DO", "dominican republic": "DO",
  "trinidad y tobago": "TT", "trinidad and tobago": "TT", "puerto rico": "US",
  // — América del Norte —
  canada: "CA", mexico: "MX", "estados unidos": "US", "united states": "US",
  "united states of america": "US", eeuu: "US", usa: "US",
  // — Europa —
  alemania: "DE", germany: "DE", deutschland: "DE", allemagne: "DE",
  austria: "AT", osterreich: "AT", autriche: "AT",
  belgica: "BE", belgium: "BE", belgique: "BE", belgie: "BE",
  bulgaria: "BG", chipre: "CY", cyprus: "CY",
  croacia: "HR", croatia: "HR", hrvatska: "HR", croatie: "HR",
  dinamarca: "DK", denmark: "DK", danmark: "DK",
  eslovaquia: "SK", slovakia: "SK", eslovenia: "SI", slovenia: "SI",
  espana: "ES", spain: "ES", espagne: "ES", spanien: "ES", spagna: "ES",
  espanha: "ES", estonia: "EE", finlandia: "FI", finland: "FI",
  francia: "FR", france: "FR", frankreich: "FR", franca: "FR",
  grecia: "GR", greece: "GR", grece: "GR", griechenland: "GR",
  hungria: "HU", hungary: "HU", irlanda: "IE", ireland: "IE",
  islandia: "IS", iceland: "IS", italia: "IT", italy: "IT", italie: "IT",
  italien: "IT", letonia: "LV", latvia: "LV", lituania: "LT", lithuania: "LT",
  luxemburgo: "LU", luxembourg: "LU", malta: "MT",
  noruega: "NO", norway: "NO", norge: "NO",
  "paises bajos": "NL", holanda: "NL", netherlands: "NL", "pays-bas": "NL",
  niederlande: "NL", "paesi bassi": "NL", "paises baixos": "NL", nederland: "NL",
  polonia: "PL", poland: "PL", polska: "PL", portugal: "PT",
  "reino unido": "UK", "gran bretana": "UK", inglaterra: "UK",
  "united kingdom": "UK", "great britain": "UK", england: "UK",
  "royaume-uni": "UK", "regno unito": "UK", "vereinigtes konigreich": "UK",
  "republica checa": "CZ", chequia: "CZ", "czech republic": "CZ", czechia: "CZ",
  rumania: "RO", romania: "RO", suecia: "SE", sweden: "SE", sverige: "SE",
  suiza: "CH", switzerland: "CH", suisse: "CH", schweiz: "CH", svizzera: "CH",
  albania: "AL", "bosnia y herzegovina": "BA", "bosnia and herzegovina": "BA",
  bielorrusia: "BY", belarus: "BY", georgia: "GE", moldavia: "MD",
  moldova: "MD", montenegro: "ME", "macedonia del norte": "MK",
  "north macedonia": "MK", serbia: "RS", rusia: "RU", russia: "RU",
  ucrania: "UA", ukraine: "UA",
  // — África —
  argelia: "DZ", algeria: "DZ", egipto: "EG", egypt: "EG", egypte: "EG",
  egito: "EG", agypten: "EG", etiopia: "ET", ethiopia: "ET",
  ghana: "GH", kenia: "KE", kenya: "KE",
  marruecos: "MA", morocco: "MA", maroc: "MA", marokko: "MA", marocco: "MA",
  marrocos: "MA", mauricio: "MU", mauritius: "MU", namibia: "NA",
  nigeria: "NG", ruanda: "RW", rwanda: "RW", senegal: "SN",
  tunez: "TN", tunisia: "TN", tunisie: "TN", tanzania: "TZ",
  uganda: "UG", sudafrica: "ZA", "south africa": "ZA", "sudafrica ": "ZA",
  zambia: "ZM", zimbabue: "ZW", zimbabwe: "ZW",
  // — Oriente Medio —
  "emiratos arabes unidos": "AE", "united arab emirates": "AE", uae: "AE",
  barein: "BH", bahrein: "BH", bahrain: "BH", israel: "IL",
  jordania: "JO", jordan: "JO", kuwait: "KW", libano: "LB", lebanon: "LB",
  oman: "OM", catar: "QA", qatar: "QA", "arabia saudita": "SA",
  "arabia saudi": "SA", "saudi arabia": "SA", turquia: "TR", turkey: "TR",
  turquie: "TR", turkei: "TR", turchia: "TR", turkiye: "TR",
  // — Asia —
  banglades: "BD", bangladesh: "BD", butan: "BT", bhutan: "BT",
  china: "CN", "hong kong": "HK", indonesia: "ID", india: "IN",
  japon: "JP", japan: "JP", japao: "JP", giappone: "JP", japon2: "JP",
  camboya: "KH", cambodia: "KH", "corea del sur": "KR", "south korea": "KR",
  laos: "LA", "sri lanka": "LK", birmania: "MM", myanmar: "MM",
  mongolia: "MN", macao: "MO", macau: "MO", maldivas: "MV", maldives: "MV",
  malasia: "MY", malaysia: "MY", nepal: "NP", filipinas: "PH",
  philippines: "PH", pakistan: "PK",
  singapur: "SG", singapore: "SG", singapour: "SG", singapur2: "SG",
  tailandia: "TH", thailand: "TH", thailande: "TH", taiwan: "TW",
  vietnam: "VN", "viet nam": "VN",
  // — Oceanía —
  australia: "AU", fiyi: "FJ", fiji: "FJ", "nueva zelanda": "NZ",
  "new zealand": "NZ", "polinesia francesa": "PF", "french polynesia": "PF",
};

function norm(s: string): string {
  return s.trim().toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/**
 * Resuelve los números de emergencia oficiales de un destino.
 * @param countryName  nombre del país (localizado o en inglés) — de Geoapify o de las CTAs
 * @param countryCode  código ISO 3166-1 alpha-2 de Geoapify (`country_code`), si está disponible
 * @returns los números verificados, o `null` si el país no está en el dataset
 *          (en ese caso el caller debe caer al fallback que corresponda)
 */
export function resolveEmergencyNumbers(
  countryName?: string,
  countryCode?: string
): EmergencyNumbers | null {
  if (countryCode) {
    const iso = countryCode.trim().toUpperCase();
    if (BY_ISO[iso]) return BY_ISO[iso];
  }
  if (countryName) {
    const key = norm(countryName);
    // match directo del nombre
    const iso = NAME_TO_ISO[key];
    if (iso && BY_ISO[iso]) return BY_ISO[iso];
    // el nombre podría ya ser un código ISO ("ES", "FR")
    const asIso = countryName.trim().toUpperCase();
    if (asIso.length === 2 && BY_ISO[asIso]) return BY_ISO[asIso];
  }
  return null;
}
