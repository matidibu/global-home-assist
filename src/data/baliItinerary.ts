// Bali's itinerary data (Spanish base). Extracted out of the page component
// so both the server page (image search) and the client chrome component
// (rendering + i18n merge) can import the same source of truth.

export interface BaliActivity {
  name: string;
  description: string;
  category: string;
  mustSee: boolean;
  duration: string;
  bestTime: string;
  price: string;
  tip: string;
  transport: { walk?: number; bike?: number; car?: number } | null;
  lat: number;
  lng: number;
}

export interface BaliDay {
  day: number;
  theme: string;
  activities: BaliActivity[];
}

export const baliItinerary: { days: BaliDay[] } = {
  days: [
    {
      day: 1,
      theme: "Ubud — El corazón espiritual de Bali",
      activities: [
        {
          name: "Terrazas de Arroz de Tegallalang",
          description:
            "Las terrazas de arroz en cascada más fotogénicas de Bali, esculpidas según el sistema de riego sagrado subak, declarado Patrimonio de la Humanidad por la UNESCO.",
          category: "Naturaleza",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Temprano en la mañana (antes de las 9:00)",
          price: "$2 USD",
          tip: "Llegá antes de las 8:00 para evitar el calor y los grupos de turistas y conseguir las mejores fotos.",
          transport: null,
          lat: -8.432, lng: 115.277,
        },
        {
          name: "Bosque de los Monos de Ubud",
          description:
            "Santuario natural en el corazón de Ubud donde cientos de macacos de cola larga conviven con templos hindúes centenarios entre la vegetación tropical.",
          category: "Naturaleza",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Media mañana",
          price: "$5 USD",
          tip: "No mostrés comida ni bolsas abiertas — los monos las van a tomar. Guardá todo bien cerrado en la mochila.",
          transport: { car: 20 },
          lat: -8.518, lng: 115.259,
        },
        {
          name: "Palacio Real de Ubud",
          description:
            "El histórico Puri Saren Agung, residencia de la familia real balinesa desde el siglo XIX, con arquitectura tradicional en el mismísimo centro del pueblo de Ubud.",
          category: "Cultura",
          mustSee: false,
          duration: "1 hora",
          bestTime: "Tarde · Noche (espectáculo de danza)",
          price: "Gratis",
          tip: "Por las noches hay espectáculos de danza kecak y legong en el patio del palacio — comprá las entradas al llegar.",
          transport: { walk: 8 },
          lat: -8.507, lng: 115.263,
        },
      ],
    },
    {
      day: 2,
      theme: "Templos sagrados del oeste de Bali",
      activities: [
        {
          name: "Jatiluwih — Terrazas de Arroz UNESCO",
          description:
            "Las terrazas de arroz más extensas y mejor conservadas de toda Bali, patrimonio UNESCO, mucho más tranquilas y auténticas que Tegallalang.",
          category: "Naturaleza",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Mañana",
          price: "$2 USD",
          tip: "Más tranquilo y menos turístico que Tegallalang. Llevá protector solar — hay muy poca sombra en los senderos.",
          transport: { car: 35 },
          lat: -8.366, lng: 115.131,
        },
        {
          name: "Pura Taman Ayun",
          description:
            "El templo real de Mengwi, rodeado de un foso de agua y jardines majestuosos, uno de los complejos hinduistas más importantes y mejor conservados de Bali.",
          category: "Templo",
          mustSee: true,
          duration: "1 hora",
          bestTime: "Media tarde",
          price: "$2 USD",
          tip: "Vestimenta obligatoria: sarong (tela balinesa) — te la prestan en la entrada si no tenés la tuya.",
          transport: { car: 40 },
          lat: -8.539, lng: 115.175,
        },
        {
          name: "Tanah Lot al atardecer",
          description:
            "El templo hindú más icónico de Bali, construido sobre una roca en el océano Índico. El atardecer aquí es uno de los más mágicos del sudeste asiático.",
          category: "Templo",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Atardecer (17:30 – 19:00)",
          price: "$4 USD",
          tip: "Llegá 1 hora antes del atardecer para conseguir buen lugar. En temporada alta puede estar muy concurrido.",
          transport: { car: 25 },
          lat: -8.621, lng: 115.086,
        },
      ],
    },
    {
      day: 3,
      theme: "Sur de Bali — Playas, surf y puestas de sol",
      activities: [
        {
          name: "GWK Cultural Park",
          description:
            "El Parque Cultural Garuda Wisnu Kencana, hogar de la estatua de 121 metros de Vishnu sobre el pájaro Garuda — la más alta de Indonesia — con espectáculos de danza incluidos.",
          category: "Cultura",
          mustSee: false,
          duration: "2 horas",
          bestTime: "Mañana",
          price: "$15 USD",
          tip: "La estatua tiene vistas al océano. Consultá el horario de los espectáculos de danza al comprar la entrada.",
          transport: { car: 40 },
          lat: -8.810, lng: 115.167,
        },
        {
          name: "Playa de Seminyak",
          description:
            "La playa más sofisticada de Bali, con beach clubs de diseño, restaurantes de primer nivel y una escena de atardecer incomparable junto al océano Índico.",
          category: "Playa",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Tarde",
          price: "Gratis",
          tip: "Los beach clubs de la zona (Potato Head, Ku De Ta) son ideales para el atardecer — reservá con anticipación en temporada alta.",
          transport: { car: 20 },
          lat: -8.687, lng: 115.156,
        },
        {
          name: "Canggu — Surf y café culture",
          description:
            "El barrio más trendy de Bali: playas de surf con olas perfectas para principiantes, cafés de especialidad y una vibrante escena de nómadas digitales.",
          category: "Playa",
          mustSee: false,
          duration: "2 horas",
          bestTime: "Tarde · Noche",
          price: "Gratis",
          tip: "Old Man's es el spot más popular de Canggu para tomar una cerveza con vista al mar al caer el sol.",
          transport: { car: 15 },
          lat: -8.651, lng: 115.130,
        },
      ],
    },
    {
      day: 4,
      theme: "Uluwatu — Acantilados, templos y danza kecak",
      activities: [
        {
          name: "Templo de Uluwatu",
          description:
            "Templo sagrado del siglo XI asentado en lo alto de un acantilado de 70 metros sobre el océano Índico, uno de los seis templos clave de Bali.",
          category: "Templo",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Tarde (para quedarse al atardecer)",
          price: "$4 USD",
          tip: "Cuidado con los monos al entrar — tienen especial afición por los anteojos de sol y los celulares.",
          transport: { car: 50 },
          lat: -8.830, lng: 115.085,
        },
        {
          name: "Playa de Padang Padang",
          description:
            "La pequeña playa paradisíaca escondida entre acantilados que se hizo famosa en la película 'Eat Pray Love', con aguas turquesa y arena blanca impecable.",
          category: "Playa",
          mustSee: true,
          duration: "2 horas",
          bestTime: "Mediodía · Tarde temprana",
          price: "$1 USD",
          tip: "Se accede bajando una escalinata en la roca. Llevá calzado con agarre y poco equipaje — el paso es angosto.",
          transport: { walk: 15 },
          lat: -8.812, lng: 115.095,
        },
        {
          name: "Danza Kecak al atardecer — Uluwatu",
          description:
            "El espectáculo más impresionante de Bali: cien hombres entonando 'kecak' a cappella mientras el sol se hunde en el océano desde el anfiteatro natural del acantilado.",
          category: "Cultura",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "18:00 (exacto — no llegar tarde)",
          price: "$12 USD",
          tip: "Las entradas se agotan rápido — comprá en la boletería del templo al llegar por la tarde, antes de ir a la playa.",
          transport: { walk: 10 },
          lat: -8.829, lng: 115.083,
        },
      ],
    },
    {
      day: 5,
      theme: "Tierras altas — Tirta Empul y el volcán Batur",
      activities: [
        {
          name: "Tirta Empul — Templo del agua sagrada",
          description:
            "El templo de purificación más sagrado de Bali, con piscinas rituales de agua bendita donde los balineses se purifican en una ceremonia ancestral abierta a los visitantes.",
          category: "Templo",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Mañana temprano",
          price: "$3 USD",
          tip: "Podés participar de la purificación (melukat) — llevá ropa que se pueda mojar o alquilá sarong en la entrada por $1.",
          transport: { car: 30 },
          lat: -8.415, lng: 115.312,
        },
        {
          name: "Mirador del Volcán Batur — Kintamani",
          description:
            "Vistas panorámicas espectaculares del volcán activo Batur y su lago caldera desde las tierras altas de Kintamani, a 1.500 metros de altura.",
          category: "Naturaleza",
          mustSee: true,
          duration: "1.5 horas",
          bestTime: "Mediodía (antes de que lleguen las nubes de la tarde)",
          price: "Gratis",
          tip: "Si querés subir al cráter del volcán, la caminata es desde las 4am — una experiencia única que vale el madrugón.",
          transport: { car: 35 },
          lat: -8.242, lng: 115.375,
        },
        {
          name: "Pueblo de Penglipuran",
          description:
            "Uno de los pueblos más limpios y mejor conservados del mundo, donde la arquitectura balinesa tradicional y las costumbres ancestrales se mantienen intactas hace siglos.",
          category: "Cultura",
          mustSee: false,
          duration: "1.5 horas",
          bestTime: "Tarde",
          price: "$2 USD",
          tip: "Los vehículos a motor están prohibidos dentro del pueblo. Es uno de los pocos lugares de Bali donde reina el silencio absoluto.",
          transport: { car: 25 },
          lat: -8.426, lng: 115.360,
        },
      ],
    },
  ],
};
