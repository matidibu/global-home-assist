export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
}

export interface SampleItinerary {
  intro: string;
  days: ItineraryDay[];
}

export const itineraries: Record<string, SampleItinerary> = {
  dubai: {
    intro: "Dubai se recorre mejor combinando el barrio histórico con la modernidad extrema. Reservá el Burj Khalifa y el safari de desierto con anticipación.",
    days: [
      {
        day: 1,
        title: "El Dubai histórico: el Creek y los souks",
        activities: [
          "Mañana en Al Bastakiya (Barrio Histórico): el único barrio premoderno de Dubai, con casas de coral y barjeel (torres de viento). Entrada al Dubai Museum en el Fort Al Fahidi ($1 USD).",
          "Cruzá el Dubai Creek en abra (barca tradicional) entre Bur Dubai y Deira por AED 1. Es el transporte más pintoresco y auténtico de la ciudad.",
          "Recorrida por el Gold Souk (el mercado de oro más grande del mundo) y el Spice Souk adyacente. Negociá los precios con confianza.",
          "Almuerzo en Al Ustad Special Kabab en Deira: uno de los restaurantes más antiguos de Dubai, con kebab iraní desde AED 15.",
          "Tarde en el barrio de Jumeirah: la mezquita Jumeirah (la única de Dubai abierta a no musulmanes, visita gratuita con guía a las 10am y 2pm).",
        ],
      },
      {
        day: 2,
        title: "La modernidad: Burj Khalifa y Downtown",
        activities: [
          "Subí al Burj Khalifa a las 8:30am para evitar las nubes de la tarde. El piso 124 (At The Top) cuesta AED 149; el 148 (At The Top SKY) AED 399. Reservá online con días de anticipación.",
          "Recorré el Dubai Mall: el más grande del mundo con el acuario subterráneo (AED 100 incluye el túnel submarino) y la pista de hielo olímpica.",
          "Dubai Fountain Show: funciona cada 30 minutos desde las 6pm hasta las 11pm. Completamente gratuito desde el paseo junto al lago artificial.",
          "Cena en el área de Downtown Dubai: el restaurante Zuma o Nobu para experiencia premium, o las opciones del Dubai Food Court para presupuesto ajustado.",
          "Noche en el barrio de Business Bay: cócteles con vista al Burj desde el rooftop del hotel JW Marriott Marquis.",
        ],
      },
      {
        day: 3,
        title: "Desierto y Palm Jumeirah",
        activities: [
          "Mañana en Palm Jumeirah: caminá el paseo marítimo de la isla artificial. La playa pública de Atlantis es accesible y tiene vistas al hotel icónico.",
          "Almuerzo en The Pointe, la nueva zona gastronómica al extremo de Palm con vistas al Atlantis. Precios más razonables que los hoteles de la isla.",
          "Safari vespertino en el desierto de Hatta (reservá tour desde las 3pm): dune bashing en 4x4, sandboard y cena beduina bajo las estrellas con música árabe. Precio: AED 200-350 por persona.",
          "Última noche: subida al rooftop del hotel Dubai Frame (AED 50) para ver el contraste entre el Dubai antiguo y el moderno — la mejor vista de la ciudad.",
        ],
      },
    ],
  },

  paris: {
    intro: "París funciona bien barrio por barrio. Comprá la tarjeta Navigo semanal y reservá el Louvre, los Uffizi y la Torre Eiffel online antes de salir.",
    days: [
      {
        day: 1,
        title: "El Louvre, el Marais y la Torre Eiffel",
        activities: [
          "Louvre a las 9am (apertura): hacé una ruta enfocada — Mona Lisa, Venus de Milo y la Winged Victory de Samotracia. Dos horas son suficientes para no saturarte. Reservá online.",
          "Almuerzo en el Marais: el barrio más hipster y multicultural de París. L'As du Fallafel en la Rue des Rosiers es el mejor falafel de la ciudad por €7.",
          "Tarde en el Centre Pompidou y la Plaza Stravinsky: arte contemporáneo y la famosa fuente de colores. La vista desde el techo vale más que la exposición interior.",
          "Atardecer en la Torre Eiffel: subí al segundo piso (hay elevador y escalera). El espectáculo de luces a las 9pm desde el Trocadero es gratuito y más fotogénico que estar arriba.",
        ],
      },
      {
        day: 2,
        title: "Montmartre y los Impresionistas",
        activities: [
          "Desayuno de croissant y café en cualquier boulangerie de Montmartre. Subí a pie por la Rue Lepic (el mercado de Amélie Poulain) hasta el Sacré-Cœur.",
          "Montmartre: la Place du Tertre (artistas en vivo), el viñedo y las callejuelas bohemias del barrio más pintoresco de París. Llegá antes de las 10am para verlo sin turistas.",
          "Almuerzo y tarde en el Musée d'Orsay: los impresionistas más importantes del mundo — Monet, Renoir, Van Gogh, Degas. Reservá online; la fila sin reserva puede ser de 90 minutos.",
          "Noche en Saint-Germain-des-Prés: los cafés históricos de Sartre y Simone de Beauvoir (Café de Flore, Les Deux Magots) y la mejor oferta gastronómica del margen izquierdo.",
        ],
      },
      {
        day: 3,
        title: "Versalles y los Champs-Élysées",
        activities: [
          "Tren RER C desde Saint-Michel hasta Versalles (40 min, €7 ida y vuelta). Llegá a las 9am para ver los jardines antes de la masificación. El Palacio y jardines cuestan €20.",
          "Almuerzo en el mercado de Versalles-Chantiers: más auténtico y económico que los restaurantes junto al Palacio.",
          "De regreso en París: paseá los Champs-Élysées desde el Arco del Triunfo hasta la Place de la Concorde (3 km a pie, completamente gratis).",
          "Última noche: cena en Les Halles o République, los barrios donde comen los parisinos jóvenes. Reservá en The Fork (TheFork.fr) para descuentos de hasta 50% en restaurantes.",
        ],
      },
    ],
  },

  roma: {
    intro: "Roma se camina. Organizá los días por zonas geográficas para no cruzar la ciudad innecesariamente. El Vaticano requiere día completo.",
    days: [
      {
        day: 1,
        title: "La Roma antigua: Coliseo y Foro Romano",
        activities: [
          "Coliseo a las 9am (apertura): con reserva online evitás la fila. El ticket combinado (€18) incluye Coliseo + Foro Romano + Palatino — tres sitios con un mismo boleto válido 24 horas.",
          "Foro Romano y Palatino: tomá al menos 2 horas para recorrer el corazón del Imperio. El Palatino tiene vistas superiores al Foro — empezá por ahí.",
          "Almuerzo en Testaccio: el barrio más auténtico de Roma, donde comen los romanos. La Trattoria Da Remo tiene la mejor pizza al taglio desde €2 la porción.",
          "Tarde: Circo Máximo (vista exterior gratuita) y termas de Caracalla (€8, entrada obligatoria con reserva). Las termas tienen menos fila que cualquier otro sitio del centro.",
          "Noche en Trastevere: el barrio más animado de Roma al caer el sol. Cena en Da Enzo al 29 o Tonnarello — reservá con días de anticipación.",
        ],
      },
      {
        day: 2,
        title: "El Vaticano y Trastevere",
        activities: [
          "Museos Vaticanos a las 9am con reserva obligatoria (€20 + €4 reserva). La ruta correcta: Galería de los Mapas → Estancias de Rafael → Capilla Sixtina. Calculá 3 horas mínimo.",
          "Basílica de San Pedro: entrada gratuita. La subida a la cúpula de Bramante (€8 con elevador, €6 a pie) ofrece la mejor vista de Roma.",
          "Almuerzo en Prati: el barrio junto al Vaticano tiene pizzerías de calidad a precios locales, muy diferente a los restaurantes trampa de San Pedro.",
          "Tarde en Castel Sant'Angelo: la fortaleza junto al Tíber (€14) con vistas extraordinarias y el mejor atardecer del lado oeste de Roma.",
          "Fontana di Trevi al anochecer: la mejor hora para fotos sin gente. Llegá a las 11pm y tenés la fuente casi para vos solo.",
        ],
      },
      {
        day: 3,
        title: "Piazzas, el Panteón y Villa Borghese",
        activities: [
          "Panteón a las 7am (apertura): llegá en las primeras dos horas cuando la entrada es gratuita. Después de las 9am cobran €5.",
          "Campo de' Fiori por la mañana (mercado hasta las 14hs) y Piazza Navona: las dos plazas más vivas del centro histórico, a cinco minutos a pie.",
          "Almuerzo en el barrio judío: Sora Margherita tiene los mejores carciofi alla giudia (alcauciles fritos) de Roma — llegá antes de las 13hs o esperás mesa.",
          "Tarde en Galleria Borghese (reserva OBLIGATORIA con 2 semanas de anticipación, €15): la colección de Bernini, Caravaggio y Canova más impresionante del mundo en solo 2 horas permitidas.",
          "Cierre en la Piazza del Popolo y subida al Pincio: la mejor vista panorámica gratuita de Roma, especialmente al atardecer.",
        ],
      },
    ],
  },

  barcelona: {
    intro: "Barcelona se recorre mejor dividiendo Gaudí, playa y barrios históricos en días separados. El metro es eficiente y barato.",
    days: [
      {
        day: 1,
        title: "Gaudí y el Eixample",
        activities: [
          "Sagrada Família a las 9am con entrada reservada (€26 básica, +€8 torres). La nave central con la luz de la mañana es una de las experiencias arquitectónicas más impactantes del mundo.",
          "Casa Batlló o Casa Milà (La Pedrera): si tenés que elegir una, Casa Batlló tiene la experiencia interior más sorprendente. La terraza de La Pedrera es más fotogénica.",
          "Almuerzo en el Eixample: Cervecería Catalana en Mallorca 236 tiene las mejores tapas de la zona a precio razonable. Llegá antes de las 13hs.",
          "Park Güell (€10, reserva por franja horaria obligatoria): la zona monumental se visita en 45 minutos. El resto del parque es gratuito y ofrece mejores vistas.",
          "Aperitivo en Gràcia: el barrio más local de Barcelona con terrazas auténticas y sin trampa turística.",
        ],
      },
      {
        day: 2,
        title: "El Barrio Gótico y el Mediterráneo",
        activities: [
          "Barrio Gótico temprano (antes de las 10am): las callejuelas medievales sin turistas. El Pont del Bisbe, la Plaça de Sant Felip Neri y los restos del templo romano de Augusto.",
          "El Born: el barrio más hipster de Barcelona, adyacente al Gótico. El Mercat de Santa Caterina (alternativa auténtica a la Boqueria) y el Museu Picasso (€14).",
          "Almuerzo en La Barceloneta: la playa urbana de Barcelona. Chiringuito de Barceloneta para arroces y paella vista al Mediterráneo.",
          "Tarde de playa en Barceloneta o tomar el cable aéreo del Puerto (€12) para la mejor vista del litoral.",
          "Noche en El Born: coctelería y bares de vinos naturales, la escena más interesante de la noche barcelonesa.",
        ],
      },
      {
        day: 3,
        title: "Montjuïc, Las Ramblas y Poblenou",
        activities: [
          "Montjuïc en teleférico o funicular (€12 combinado): el castillo del siglo XVII con vistas de 360° sobre el puerto y la ciudad.",
          "Fundació Joan Miró (€14): la colección más importante de Miró en el mundo, con arquitectura de Josep Lluís Sert. Sin las filas del MNAC.",
          "Las Ramblas: es una trampa turística pero hay que verla. Caminala de Plaça Catalunya al puerto en 20 minutos y no pares en ningún restaurante.",
          "Almuerzo en Poblenou: el barrio tecnológico y gastronómico emergente de Barcelona, con los mejores restaurantes contemporáneos sin precio inflado.",
          "Cierre: atardecer en el Bunkers del Carmel — la mejor vista panorámica de Barcelona, completamente gratuita y fuera de las guías turísticas clásicas.",
        ],
      },
    ],
  },

  londres: {
    intro: "Londres tiene los mejores museos gratuitos del mundo. Organizá los días por barrios para minimizar desplazamientos en el metro.",
    days: [
      {
        day: 1,
        title: "Westminster, Southbank y Tower Bridge",
        activities: [
          "Westminster temprano: Big Ben, el Palacio de Westminster y la Abadía de Westminster (£29). Llegá a las 9am cuando la luz es mejor y los grupos de tour no han llegado.",
          "Caminata por el Southbank: el paseo junto al Támesis desde Westminster Bridge hasta Tower Bridge (3 km) con vistas a la ciudad completamente gratuitas.",
          "Tate Modern: la galería de arte contemporáneo más visitada del mundo. Entrada gratuita a las colecciones permanentes. La vista desde el piso 10 es espectacular.",
          "Tower of London (£29.90): las joyas de la corona, los cuervos y mil años de historia. Reservá online para el descuento. Calculá 2-3 horas.",
          "Cruzá el Tower Bridge a pie (gratuito) y tomá una pinta en el Bermondsey o Borough Market al caer la tarde.",
        ],
      },
      {
        day: 2,
        title: "British Museum, Soho y Notting Hill",
        activities: [
          "British Museum (gratuito): la Piedra de Rosetta, las esculturas del Partenón y las momias egipcias. Llegá a la apertura (10am) y hacé la ruta de las colecciones estelares en 2 horas.",
          "Almuerzo en Soho: el barrio más multicultural de Londres. Chinatown a pasos del British Museum tiene dim sum desde £8. Barrafina en Adelaide Street para tapas españolas premium.",
          "National Gallery (gratuita): los Van Gogh, Rembrandt, Caravaggio y Turner más importantes fuera de sus países de origen. Dos horas bien aprovechadas.",
          "Tarde en Notting Hill: el famoso mercado de Portobello Road (mejor los sábados), las casas de colores de Pembridge Crescent y la librería de la película.",
          "Noche en Shoreditch: el barrio más dinámico de la noche londinense con street art, bares indie y restaurantes emergentes.",
        ],
      },
      {
        day: 3,
        title: "Hyde Park, Kensington y el West End",
        activities: [
          "Hyde Park por la mañana: el parque más grande del centro de Londres con los Kensington Gardens, el lago Serpentine y el Memorial a Lady Di. Gratuito.",
          "Victoria & Albert Museum (gratuito): el museo de diseño y artes decorativas más importante del mundo. La colección de moda histórica es única.",
          "Natural History Museum (gratuito): el dinosaurio de la entrada y la sala de Historia de la Tierra son los favoritos de todas las edades.",
          "Almuerzo en South Kensington: los cafés de la Onslow Square o Exhibition Road tienen mejor relación calidad-precio que los del museo.",
          "West End al atardecer: tomá entradas de descuento en el TKTS de Leicester Square (abre a las 10am) y cerrá Londres con el mejor musical de Broadway... en Londres.",
        ],
      },
    ],
  },

  "nueva-york": {
    intro: "Nueva York por barrios: Manhattan tiene demasiado para un solo día. Combiná siempre con Brooklyn para entender la ciudad real.",
    days: [
      {
        day: 1,
        title: "Lower Manhattan y Brooklyn",
        activities: [
          "Estatua de la Libertad y Ellis Island (reservá el ferry online, $24): el tour completo tarda 4 horas. Si querés solo la foto, el Staten Island Ferry es gratuito y da excelente vista.",
          "Wall Street y el Financial District: el Charging Bull, la Fearless Girl y el 9/11 Memorial (gratuito al aire libre, el museo interior cuesta $33).",
          "Cruzá el Brooklyn Bridge a pie (20 minutos): la caminata más fotogénica de Nueva York, con la mejor vista del skyline de Manhattan.",
          "Almuerzo y tarde en DUMBO y Brooklyn Heights: el barrio más cool de Brooklyn con vistas al puente, galerías de arte y el Brooklyn Ice Cream Factory.",
          "Noche en el Brooklyn Barclays Center o Williamsburg: la escena musical y gastronómica más auténtica de Nueva York.",
        ],
      },
      {
        day: 2,
        title: "Midtown, Central Park y el MET",
        activities: [
          "Central Park por la mañana: alquilá una bici ($15/hora en Bike Central Park) y recorré las 843 acres. El Bethesda Fountain y el Strawberry Fields son los iconos.",
          "Metropolitan Museum of Art (pago sugerido $30, pero podés pagar menos): la colección egipcia con el templo de Dendur, los impresionistas y las armaduras japonesas.",
          "Almuerzo en el Upper West Side: el barrio de los neoyorquinos cultivados. Sarabeth's para brunch tardío o Zabar's deli para armar un picnic en el parque.",
          "Times Square: inevitable pero no pierdas más de 30 minutos. Mejor al caer la noche cuando las luces lo justifican.",
          "Cena en Hell's Kitchen (West 40s-50s): el barrio de los restaurantes más interesantes de Midtown, a pasos de Broadway. Reservá show en TKTS.",
        ],
      },
      {
        day: 3,
        title: "Chelsea, el High Line y el Downtown alternativo",
        activities: [
          "High Line por la mañana (abre a las 7am): el parque elevado sobre las vías del tren es mejor sin la masificación del mediodía. 2.3 km entre las calles 34 y 14.",
          "Chelsea Market: el mercado gourmet en la antigua fábrica de Oreo Cookies. Los mejores tacos de Manhattan (Los Tacos No. 1) y la langosta de Luke's Lobster.",
          "Chelsea Galleries: el barrio de las galerías de arte más importantes de la ciudad. Entrada gratuita; las mejores están sobre la 10th y 11th Avenue en los 20s.",
          "Almuerzo o tarde en el Whitney Museum ($25): arte americano del siglo XX y XXI con la mejor terraza sobre el Hudson.",
          "Cierre en el Lower East Side: el barrio más histórico de la inmigración judía convertido en el más interesante de la noche de Manhattan. Cerverías artesanales y delicatessen históricos.",
        ],
      },
    ],
  },

  tokio: {
    intro: "Tokio es enorme pero el metro la hace manejable. La tarjeta IC (Suica/Pasmo) es esencial. Reservá los restaurantes con estrella Michelin con meses de anticipación.",
    days: [
      {
        day: 1,
        title: "Shibuya, Harajuku y Shinjuku",
        activities: [
          "Shibuya Crossing a las 8am: el cruce peatonal más transitado del mundo tiene menos gente temprano. El café Starbucks del piso 2 del Q-Front tiene la mejor vista.",
          "Harajuku: la calle Takeshita (moda extravagante japonesa) y los jardines del Meiji Jingu, el santuario shinto más importante de Tokio entre cedros centenarios.",
          "Almuerzo en Omotesando: las mejores cafeterías de diseño de Tokio a lo largo del bulevar. Afuri Ramen para el mejor ramen yuzu de la ciudad.",
          "Shinjuku por la tarde: el cruce de Kabukicho, el Golden Gai (decenas de bares diminutos de 6-8 personas) y el skyline desde el observatorio gratuito del Gobierno Metropolitano.",
          "Noche en el Golden Gai de Shinjuku: el barrio de bares más singular del mundo. Pedí permiso antes de entrar y seguí las reglas de cada local.",
        ],
      },
      {
        day: 2,
        title: "Asakusa, Ueno y Akihabara",
        activities: [
          "Senso-ji en Asakusa a las 6am antes de los grupos: el templo más antiguo de Tokio sin multitudes. El Nakamise-dori (calle comercial) abre desde las 10am.",
          "Desayuno de taiyaki (pastel de pez relleno de anko) o dango en los puestos junto al templo. Menos de ¥200 por pieza.",
          "Ueno: el parque con 5 museos importantes. El Tokyo National Museum (¥1,000) tiene la mayor colección de arte japonés del mundo. El parque es gratuito.",
          "Akihabara: el barrio electrónico y del anime. Incluso si no sos fan, el spectáculo visual de los 8 pisos de electrónica y figuras coleccionables es único.",
          "Tarde en Yanaka: el barrio más auténtico de Tokio antiguo, con cementerio histórico, talleres artesanales y la Yanaka Ginza, la calle comercial más tradicional.",
        ],
      },
      {
        day: 3,
        title: "Tsukiji, Ginza, Odaiba y la bahía",
        activities: [
          "Mercado exterior de Tsukiji desde las 5am: el antiguo mercado de pescado convertido en el mejor desayuno de sushi y mariscos de Tokio desde ¥500. Llená el estómago antes de las 8am.",
          "Ginza: el barrio de lujo de Tokio con las tiendas de Apple, Uniqlo flagship y el mercado Itoya (8 pisos de papelería de diseño japonés).",
          "Almuerzo: Ichiran Ramen para el ritual del ramen en cabina individual — la experiencia más particular de Tokio.",
          "Odaiba en barco (ferry desde Hinode Pier): la isla artificial con el Robot Restaurant, el Teamlab Borderless (reservá online) y la réplica de la Estatua de la Libertad.",
          "Cierre desde la Tokyo Skytree (¥3,100): el segundo edificio más alto del mundo con la mejor vista de la bahía y el Monte Fuji en días despejados.",
        ],
      },
    ],
  },

  cancun: {
    intro: "Cancún tiene más que la Zona Hotelera: los cenotes, Chichén Itzá y la Riviera Maya valen tanto como la playa. Alquilar auto desde el aeropuerto da libertad total.",
    days: [
      {
        day: 1,
        title: "Zona Hotelera y el Caribe mexicano",
        activities: [
          "Playa Delfines (Playa 76) por la mañana: la playa pública más linda de la Zona Hotelera, con el cartel icónico de Cancún y acceso completamente gratuito.",
          "Snorkel en el arrecife de Isla Mujeres: el tour en catamarán cuesta $50–70 USD con snorkel, almuerzo y open bar. Salida desde el Puerto Juárez a las 10am.",
          "Isla Mujeres pueblo: las calles de colores, el Playa Norte (la mejor playa de México según varios rankings) y los tacos de pescado locales.",
          "Regreso a Cancún: aperitivo en la Laguna Nichupté y cena en el Mercado 28 — el mercado donde comen los locales, con cochinita pibil y marquesitas desde $3 USD.",
        ],
      },
      {
        day: 2,
        title: "Chichén Itzá y Valladolid",
        activities: [
          "Salida temprana hacia Chichén Itzá (2.5 hs en autobús ADO desde $15 USD): llegá a las 9am cuando abre. La Pirámide de Kukulcán, el Juego de Pelota y el Cenote Sagrado.",
          "Parada en Valladolid: la ciudad colonial más linda del sureste mexicano, a 40 km de Chichén Itzá. El Cenote Zací en el centro de la ciudad cuesta $5 USD.",
          "Almuerzo en Valladolid: los lonches de cochinita pibil en el Mercado Municipal cuestan $2–3 USD y son de los mejores de la región.",
          "Regreso a Cancún por la tarde. Si alquilaste auto, parada opcional en el Cenote X'Kekén en Dzitnup ($5 USD), uno de los más fotogénicos y menos masificados.",
        ],
      },
      {
        day: 3,
        title: "Riviera Maya: Tulum y cenotes",
        activities: [
          "Tulum arqueológico (1.5 hs al sur por la Ruta 307): la única ciudad maya con vistas al mar Caribe. Abre a las 8am; llegá temprano para ver las iguanas antes que los tours.",
          "Cenotes de la ruta Tulum–Cobá: el Gran Cenote ($15 USD), el Cenote Calavera y el Dos Ojos son los tres mejores de la zona. Llevá ropa de agua y snorkel.",
          "Almuerzo en el pueblo de Tulum: la calle principal tiene tacos, ceviches y bowls tropicales a precios locales, muy diferente a las zonas de playa.",
          "Tarde en Playa Paraíso o Playa Ruinas de Tulum: las mejores playas de la Riviera Maya con el telón de fondo de las ruinas mayas.",
          "Regreso a Cancún al atardecer. Cena de despedida en El Pescado Ciego en Cancún Centro — el mejor marisco fuera de la Zona Hotelera.",
        ],
      },
    ],
  },

  miami: {
    intro: "Miami tiene barrios muy distintos entre sí. South Beach, Wynwood, Little Havana y Brickell son cuatro ciudades dentro de una. Alquilar auto o usar Uber según el barrio.",
    days: [
      {
        day: 1,
        title: "South Beach: Art Deco y el Océano Atlántico",
        activities: [
          "Ocean Drive a las 7am: la mejor hora para fotografiar la arquitectura Art Deco de los años 30 sin autos ni turistas. El Wolfsonian Museum (calle 10) tiene la colección más importante del período.",
          "Playa de South Beach: los postes numerados del 1 al 15 marcan cada zona. La 9th Street es la más concurrida; la 14th la más tranquila. Llegá antes de las 10am.",
          "Almuerzo en Lincoln Road Mall: la calle peatonal de SoBe con todas las opciones gastronómicas. Joe's Stone Crab (si está en temporada, oct–mayo) es el restaurante más icónico de Miami.",
          "Tarde: alquilá una bici en Citi Bike y recorré el paseo de Ocean Drive hasta la zona de clubes del barrio gay en Española Way.",
          "Noche en South Beach: la vida nocturna empieza tarde (11pm). Nikki Beach o LIV en el Fontainebleau para experiencia premium.",
        ],
      },
      {
        day: 2,
        title: "Wynwood, Little Havana y Downtown",
        activities: [
          "Wynwood por la mañana: los mejores murales están en las calles NW 24th–26th Street, fuera del recinto pago de Wynwood Walls. El recorrido exterior es gratuito.",
          "Wynwood Walls (entrada $12): el museo al aire libre con los murales más importantes del street art global. La galería interior rota mensualmente.",
          "Almuerzo en Little Havana: la Calle Ocho tiene los mejores sándwiches cubanos de Miami. Versailles Restaurant ($8 medianoche con café cubano) es la institución.",
          "Tarde: dominó en el Maximo Gomez Park (entrada libre) y helado de mamey en la Heladería Coppelia.",
          "Brickell al atardecer: el barrio financiero de Miami tiene el mejor rooftap scene de la ciudad. Sugar at EAST Miami ofrece vista panorámica con cócteles desde las 5pm.",
        ],
      },
      {
        day: 3,
        title: "Everglades y Coral Gables",
        activities: [
          "Everglades National Park (a 1 hora al suroeste): el único ecosistema subtropical de América del Norte. Los airboat tours salen desde la entrada de Shark Valley ($45/persona).",
          "Avistamiento garantizado: caimanes americanos, anhinga, espátula rosada y cocodrilos americanos (uno de los dos lugares del mundo donde conviven con los caimanes).",
          "Almuerzo en Homestead: la ciudad agrícola al sur tiene los mejores mercados de frutas tropicales de Florida (carambola, mamey, jackfruit).",
          "Coral Gables por la tarde: la ciudad planificada más elegante de Miami con el hotel Biltmore histórico, las tiendas de Miracle Mile y la piscina Venetian Pool ($15) — la más singular de Florida.",
          "Cierre: Coconut Grove al atardecer, el barrio más bohemio y verde de Miami con vista a Biscayne Bay.",
        ],
      },
    ],
  },

  "rio-de-janeiro": {
    intro: "Río se vive entre la montaña y el mar. La seguridad varía mucho por zona y horario: los barrios del sur (Ipanema, Leblon, Santa Teresa) son los más seguros.",
    days: [
      {
        day: 1,
        title: "Cristo Redentor, Santa Teresa y Lapa",
        activities: [
          "Cristo Redentor por la mañana (antes de las 9am): el tren cremallera Corcovado sale desde el barrio de Cosme Velho ($20 USD ida y vuelta). Llegá temprano para ver la ciudad sin nubes.",
          "Desayuno en el barrio de Santa Teresa: el barrio bohemio y artístico más pintoresco de Río. Aprazível tiene el mejor brunch con vistas a la bahía.",
          "Recorrida por Santa Teresa en bondinho (tranvía histórico, gratuito para residentes, $2 para turistas): el barrio de los artistas, galerías y casas coloniales.",
          "Tarde en Lapa: los arcos del Acueducto Carioca (1750) y la escalera Selarón (1990–2013) tapizada de 2.000 azulejos de 60 países.",
          "Noche en Lapa: el epicentro del samba carioca real. La Carioca da Gema tiene música en vivo desde las 7pm. Llegá temprano para conseguir mesa.",
        ],
      },
      {
        day: 2,
        title: "Pan de Azúcar, Copacabana e Ipanema",
        activities: [
          "Pan de Azúcar a las 8am (teleférico, $30 USD): llegá con el cielo despejado o no hay vista. El primer cable llega al morro Urca; el segundo, al Pan de Azúcar. Los monos viven en el primer nivel.",
          "Playa de Flamengo y barrio de Botafogo: el mercado de Botafogo tiene el mejor açaí de Río ($5 el bol) y la mejor vista al Pan de Azúcar desde tierra.",
          "Almuerzo en Ipanema: el Belmonte Bar & Restaurante en Ipanema tiene la mejor batería de petiscos (tapas brasileñas) del barrio.",
          "Tarde en la playa de Ipanema (Posto 9): el punto de encuentro de los cariocas jóvenes. Al atardecer todos miran hacia el Dois Irmãos y aplauden cuando el sol toca el horizonte.",
          "Noche en Leblon: el barrio más elegante de Río con restaurantes como Zuka o CT Boucherie para una cena especial.",
        ],
      },
      {
        day: 3,
        title: "Jardim Botânico, Maracanã y gastronomía local",
        activities: [
          "Jardim Botânico por la mañana (R$20): el jardín botánico más biodiverso de Brasil con palmeras imperiales de 30 metros y monos titi-de-cara-preta. Llegá a las 8am cuando los tucanes están activos.",
          "Lagoa Rodrigo de Freitas: el lago artificial rodeado de montañas donde los cariocas caminan, corren y reman. El quiosco Palaphita Kitch tiene las mejores caipirinhas de Río.",
          "Almuerzo en el Mercado do Peixe de Ipanema: el mercado de pescado frescodel barrio tiene el mejor peixe à moqueca del sur de Río.",
          "Tarde en el estadio Maracanã: el tour ($20 USD) recorre los vestuarios y el campo del estadio más famoso de Brasil. Si hay partido, comprá entradas con anticipación.",
          "Última noche en el Morro da Urca (primer nivel del teleférico): el bar Urca 360 tiene cócteles con vista al atardecer sobre la bahía de Guanabara.",
        ],
      },
    ],
  },

  "buenos-aires": {
    intro: "Buenos Aires se vive de noche — los restaurantes no se llenan antes de las 9pm. Reservá en los mejores parrillas con al menos 48 horas de anticipación.",
    days: [
      {
        day: 1,
        title: "San Telmo, La Boca y Puerto Madero",
        activities: [
          "Feria de San Telmo (domingos todo el día, resto de la semana el Mercado): el barrio más antiguo de Buenos Aires con antigüedades, artesanías y milongas callejeras en la Plaza Dorrego.",
          "El Caminito en La Boca: las casas de chapa pintadas y el famoso callejón de tango. Llegá antes de las 11am para evitar el turismo masivo y los restaurantes trampa.",
          "Estadio Alberto J. Armando (La Bombonera): el tour del estadio de Boca Juniors ($15 USD) es imprescindible incluso sin ser fanático del fútbol.",
          "Puerto Madero al mediodía: el barrio más moderno de Buenos Aires con los diques reconvertidos. La Puente de la Mujer de Calatrava y los restaurantes premium sobre el río.",
          "Noche en San Telmo: show de tango en El Viejo Almacén (el más auténtico) o milonga libre en el Club Gricel para participar en lugar de solo mirar.",
        ],
      },
      {
        day: 2,
        title: "Recoleta, Palermo y el asado",
        activities: [
          "Cementerio de la Recoleta (gratuito): el cementerio más famoso de Argentina con la tumba de Evita Perón. El guardián de la entrada te orienta. Calculá 1.5 horas.",
          "Museo Nacional de Bellas Artes (gratuito): la colección de arte argentino más importante del país, frente al cementerio. Los Figari y Xul Solar son los más singulares.",
          "Almuerzo en Palermo Soho: el barrio más de moda de Buenos Aires con las mejores opciones gastronómicas de la ciudad. El Palacio de la Papa Frita en Lavalle para la experiencia clásica.",
          "Parque Tres de Febrero (El Rosedal): el pulmón verde de Palermo con rosas, lago artificial y peatones de todas las edades. Gratuito.",
          "Asado porteño al atardecer: La Cabrera o Don Julio en Palermo para la mejor experiencia (reservá 48 hs antes). Don Julio tiene lista de espera pero vale absolutamente.",
        ],
      },
      {
        day: 3,
        title: "El centro, el Congreso y la cultura porteña",
        activities: [
          "Plaza de Mayo temprano: el corazón histórico de Buenos Aires con la Casa Rosada, el Cabildo y la Catedral Metropolitana donde está sepultado San Martín.",
          "Teatro Colón: el tour diario ($20 USD) recorre uno de los teatros líricos más importantes del mundo. La acústica y la arquitectura son excepcionales.",
          "Avenida Corrientes: el Broadway porteño con librerías de 24 horas (El Ateneo Grand Splendid), pizzerías históricas y teatros independientes.",
          "Almuerzo en el Mercado de San Telmo: la galería cubierta tiene puestos de todo tipo desde $5 USD. Los puestos del interior son más auténticos que los de la entrada.",
          "Tarde en Villa Crespo o Colegiales: los barrios de los jóvenes porteños reales, con las mejores librerías independientes y cafés de especialidad de la ciudad.",
        ],
      },
    ],
  },

  cartagena: {
    intro: "Cartagena se recorre mejor a pie dentro de las murallas. El calor es intenso todo el año: salí temprano, descansá al mediodía y retomá al atardecer.",
    days: [
      {
        day: 1,
        title: "La Ciudad Amurallada y Getsemaní",
        activities: [
          "Las murallas al amanecer (5:30am): caminar el circuito completo de las murallas coloniales lleva 45 minutos. A esa hora el calor es soportable y la luz es perfecta.",
          "Barrio Getsemaní: el único barrio que quedó fuera de las murallas tiene el mejor street art de Colombia, los precios más locales y la vida nocturna más auténtica.",
          "Plaza de la Trinidad en Getsemaní: el corazón del barrio donde los lugareños juegan dominó y toman cerveza al aire libre desde las 5pm.",
          "Centro histórico amurallado: la Plaza de Bolívar, la Catedral de Santa Catalina, el Palacio de la Inquisición (COP 25.000) y las calles de Badillo y del Curato.",
          "Cena en el centro histórico: Alma en el Hotel Casa San Agustín o La Vitrola son los restaurantes más auténticos de la ciudad amurallada.",
        ],
      },
      {
        day: 2,
        title: "Castillo San Felipe e Islas del Rosario",
        activities: [
          "Castillo de San Felipe de Barajas (COP 30.000): la fortaleza colonial más grande de América. Los túneles internos y las vistas sobre la bahía son el punto alto de la visita.",
          "Lancha a las Islas del Rosario (salida 8am desde Muelle de los Pegasos): 45 minutos de travesía hasta el archipiélago de aguas cristalinas. Negociá directamente con los lancheros para mejor precio.",
          "Snorkel en los arrecifes de coral del Rosario: la segunda barrera de coral más grande del Caribe colombiano. Llevá protector solar biodegradable.",
          "Almuerzo en una de las islas: arroz con coco, langosta y mojarra fresca. El pescado del día con patacones es la mejor opción económica.",
          "Regreso a Cartagena al atardecer. Cócteles en los bares del barrio Getsemaní antes de cenar.",
        ],
      },
      {
        day: 3,
        title: "El Totumo y la gastronomía caribeña",
        activities: [
          "Volcán El Totumo (1 hora al norte, tour desde $20 USD): el único volcán de lodo del mundo en el que podés bañarte. Experiencia absolutamente única y sin comparación.",
          "Mercado de Bazurto: el mercado popular más grande de Cartagena, para valientes. Los jugos de frutas exóticas (guanábana, maracuyá, borojó) cuestan COP 2.000.",
          "Almuerzo en la Plaza de la Trinidad: los puestos de comida caribeña (arepa de huevo, carimañola, sancocho) tienen los precios más auténticos de la ciudad.",
          "Tarde libre en la playa de Bocagrande: el barrio moderno de Cartagena con playa pública, muy diferente a las islas pero conveniente si no querés otro traslado.",
          "Última noche: sundowner en el Café del Mar sobre las murallas con vista al Caribe. Es la atracción más fotogénica de la puesta de sol cartagenera.",
        ],
      },
    ],
  },

  lima: {
    intro: "Lima sorprende siempre: es la capital gastronómica de Latinoamérica y tiene más de la mitad de los mejores restaurantes de la región. Reservá los restaurantes estrella con meses de anticipación.",
    days: [
      {
        day: 1,
        title: "Miraflores, el malecón y la gastronomía",
        activities: [
          "Malecón Cisneros en Miraflores al amanecer: el acantilado sobre el Pacífico tiene 4 km de paseo con vista al mar. Los parapentes despegan desde aquí en días con viento.",
          "Mercado de Surquillo N°1 (a 10 minutos de Miraflores): el mercado donde compran los cocineros de Lima. Jugos de frutas andinas (camu camu, aguaje, lúcuma) desde S/3.",
          "Parque Kennedy en Miraflores: la colonia de gatos comunitarios que viven en el parque central son una atracción inesperada y gratuita que encanta a todos.",
          "Almuerzo en La Mar Cebichería: el restaurante más popular de Gastón Acurio (fundador de la revolución gastronómica peruana). Sin reserva; llegá a las 12:30pm.",
          "Tarde en Larcomar: el centro comercial sobre los acantilados con cine, tiendas y vista al Pacífico. El Óvalo Gutierrez adyacente tiene las mejores cafeterías de Miraflores.",
        ],
      },
      {
        day: 2,
        title: "Barranco, el Centro Histórico y el Museo Larco",
        activities: [
          "Barranco por la mañana: el barrio bohemio de Lima con el Puente de los Suspiros, las casas republicanas de colores y el MATE (Museo Mario Testino, S/25).",
          "Museo Larco (S/30): la colección de arte precolombino más importante del mundo en una hacienda virreinal. La sala erótica de los huacos mochicas es única en su tipo.",
          "Almuerzo en el mercado del Museo Larco: el restaurante del museo tiene uno de los mejores buffets de comida peruana tradicional de Lima (S/65).",
          "Centro Histórico de Lima: la Plaza Mayor con el Palacio de Gobierno y su cambio de guardia diario (12pm), la Catedral de Lima y las Catacumbas del Convento de San Francisco (S/15).",
          "Noche en Barranco: La Noche de Barranco para música en vivo, o los bares de la calle Domeyer para el mejor coctel de pisco sour de Lima.",
        ],
      },
      {
        day: 3,
        title: "Huaca Pucllana, San Isidro y la despedida gastronómica",
        activities: [
          "Huaca Pucllana al amanecer (S/15): la pirámide preinca en el medio de Miraflores con excavaciones arqueológicas activas. El restaurante en su base tiene vista a las ruinas.",
          "Mercado de Magdalena o el Mercado 28 de Julio: los mercados más auténticos de Lima para desayuno de tamales o anticuchos desde S/5.",
          "San Isidro: el barrio financiero y gastronómico más elegante de Lima con el Bosque El Olivar (olivos del siglo XVI, gratuito) y las galerías de arte contemporáneo.",
          "Almuerzo especial: Maido (cocina nikkei peruana, entre los 5 mejores restaurantes del mundo) o Astrid & Gastón para la experiencia gastronómica más completa de Lima. Reservá con 2 meses de anticipación.",
          "Cierre: pisco sour en el bar del Hotel Maury (el lugar donde se inventó el cóctel nacional peruano, desde 1927).",
        ],
      },
    ],
  },

  cusco: {
    intro: "La altitud de Cusco (3.400 msnm) es real. Dedicá el primer día solo a aclimatarte — caminá despacio, no hagas esfuerzo físico y tomá mate de coca. Machu Picchu requiere reserva con meses de anticipación.",
    days: [
      {
        day: 1,
        title: "Aclimatación: el centro de Cusco",
        activities: [
          "Plaza de Armas de Cusco: el corazón de la ciudad con la Catedral del Cusco (S/25) y el Templo de la Compañía de Jesús. Caminá sin apuro — la altura lo exige.",
          "Qorikancha (Templo del Sol, S/15): el templo inca más importante cubierto de oro, hoy con el convento colonial de Santo Domingo construido encima. La convivencia de ambas arquitecturas es asombrosa.",
          "Mercado de San Pedro: el mercado popular del Cusco con frutas andinas, chicha morada y artesanías a precio local. El mejor jugo de maracuyá de la ciudad.",
          "Almuerzo tranquilo en el barrio de San Blas: el barrio artesanal en las alturas del Cusco. Restaurantes locales con menú del día (S/10–15) y talleres de artesanos abiertos.",
          "Tarde de descanso absoluto en el hotel: la aclimatación requiere hidratación y reposo. Reservá una cena temprana en Cicciolina o MAP Café para esta primera noche.",
        ],
      },
      {
        day: 2,
        title: "Machu Picchu (día completo)",
        activities: [
          "Salida a las 5am hacia Ollantaytambo en combi (90 min, S/15): el tren sale desde Ollantaytambo, no desde Cusco. Comprá los tickets de tren (Inca Rail o Peru Rail, $50–90 USD) con semanas de anticipación.",
          "Entrada a Machu Picchu a las 6am con la franja del amanecer: la primera hora tiene la mejor luz, menos gente y la posibilidad de ver la ciudadela antes de los grupos.",
          "Recorrido con guía (S/100–150 por grupo): el guía es obligatorio para entrar con el ticket de Machu Picchu Pueblo. Sin guía podés recorrer solo pero sin contexto histórico.",
          "Montaña Machu Picchu o Huayna Picchu (ticket separado, $15 USD, cupo muy limitado): la mejor vista de la ciudadela desde arriba. Reservá con 2+ meses de anticipación.",
          "Almuerzo en el pueblo de Aguas Calientes y baños termales (S/20): las termas naturales del pueblo son el cierre perfecto de un día agotador.",
        ],
      },
      {
        day: 3,
        title: "Valle Sagrado: Pisac y Ollantaytambo",
        activities: [
          "Pisac mercado (martes, jueves y domingos — el mercado artesanal más auténtico): artesanías textiles y cerámica a precios locales. El mercado de domingo es el más grande.",
          "Ruinas de Pisac (S/70 con boleto turístico): las terrazas incas sobre el pueblo con vista al Valle Sagrado. Calculá 2 horas de caminata.",
          "Almuerzo en Urubamba: El Huacatay tiene la mejor cocina nova andina del Valle Sagrado fuera de Cusco. Reservá el día anterior.",
          "Ollantaytambo: la ciudad inca mejor conservada del mundo, donde los incas derrotaron a los españoles en 1537. El templo solar en la cima y las fuentes ceremoniales.",
          "Regreso a Cusco al atardecer: última cena en el barrio de San Blas con vista a los tejados coloniales y la Plaza de Armas iluminada.",
        ],
      },
    ],
  },

  amsterdam: {
    intro: "Ámsterdam es pequeña y perfecta para bicicleta. Alquilá una el primer día y movilizate como los holandeses. Los museos estelares requieren reserva online.",
    days: [
      {
        day: 1,
        title: "Los canales, Jordaan y el Rijksmuseum",
        activities: [
          "Paseo en bicicleta por los canales del Jordaan a las 8am: antes de que la ciudad despierte, los canales de Prinsengracht, Keizersgracht y Herengracht son de una belleza irreal.",
          "Mercado Albert Cuypmarkt (abre 9am): el mercado callejero más grande de Ámsterdam con quesos holandeses, arenque fresco y stroopwafels recién hechos.",
          "Rijksmuseum (€22.50, reservá online): La ronda de noche de Rembrandt, La lechera de Vermeer y 8.000 obras más. La ruta rápida de los maestros lleva 2 horas.",
          "Almuerzo en De Pijp: el barrio más multicultural de Ámsterdam con restaurantes surinameses, indonesios y holandeses a precios razonables.",
          "Van Gogh Museum (€22, reservá con días de anticipación): la mayor colección del mundo del pintor holandés. Los Girasoles, La habitación y los 200 autorretratos son el núcleo.",
        ],
      },
      {
        day: 2,
        title: "Casa de Ana Frank, los tulipanes y el barrio rojo",
        activities: [
          "Casa de Ana Frank (€16, reserva OBLIGATORIA semanas antes): la casa donde Ana Frank y su familia se escondieron de 1942 a 1944. Emocionalmente intensa y absolutamente imprescindible.",
          "Paseo por Jordaan: el barrio más pintoresco de Ámsterdam con tiendas de antigüedades, florerías y cafés en los patios interiores (hofjes).",
          "Almuerzo en Westergasfabriek: la antigua fábrica de gas convertida en parque cultural con food trucks, cervecerías artesanales y mercados de diseño los fines de semana.",
          "De Wallen (el barrio rojo) de día: sin el ambiente nocturno turbio, el barrio es uno de los más bonitos de Ámsterdam con canales, iglesias y cafés históricos.",
          "Keukenhof (accesible desde Ámsterdam en bus, €20): el jardín de tulipanes más famoso del mundo, abierto solo entre marzo y mayo. Si viajás en esa época, es obligatorio.",
        ],
      },
      {
        day: 3,
        title: "Delft, La Haya y la despedida holandesa",
        activities: [
          "Tren a Delft (45 min, €10): la ciudad más pintoresca de Holanda con los canales azules, la fábrica de Delftware (cerámica azul y blanca) y la tumba de Vermeer en la Oude Kerk.",
          "La Haya (20 min de Delft en tren): el centro del poder político holandés con el Mauritshuis Museum — la Joven de la perla de Vermeer y La anatomía del Dr. Tulp de Rembrandt.",
          "Almuerzo en Scheveningen: la playa de La Haya a 10 minutos en tranvía. Arenque fresco en el puerto o patatje oorlog (papas fritas con mayonesa, ketchup y satay).",
          "Regreso a Ámsterdam al atardecer. Canal cruise nocturno (€16–20): la mejor forma de ver Ámsterdam iluminada desde el agua.",
          "Última noche en el Leidseplein o Rembrandtplein: las dos plazas más animadas de la noche amstelodamense, con teatro, jazz y terrazas abiertas hasta tarde.",
        ],
      },
    ],
  },

  lisboa: {
    intro: "Lisboa se recorre a pie o en tranvía por sus siete colinas. Las vistas (miradouros) son el corazón de la experiencia. Reservá restaurantes en Bairro Alto y Mouraria con al menos un día de anticipación.",
    days: [
      {
        day: 1,
        title: "Alfama, el castillo y el fado",
        activities: [
          "Castillo de São Jorge (€15) a las 9am: la fortaleza medieval con la mejor vista panorámica de Lisboa. Llegá temprano para ver la ciudad antes de las nubes de la tarde.",
          "Barrio de Alfama a pie: el laberinto medieval más antiguo de Lisboa con casas de azulejos, ropa tendida y gatos en cada esquina. No uses el tranvía 28 — caminalo.",
          "Miradouro das Portas do Sol y Miradouro de Santa Luzia: las dos mejores vistas sobre Alfama y el río Tejo, a pocos minutos a pie del castillo.",
          "Almuerzo en la Tasca do Chico en el Bairro Alto: el mejor bacalhau à brás de Lisboa, reservá. Si está lleno, la Taberna da Rua das Flores tiene nivel similar.",
          "Fado en el Clube de Fado o en A Baiuca en Alfama: el fado lisboeta más auténtico. El turístico Parreirinha de Alfama es más accesible pero menos genuino.",
        ],
      },
      {
        day: 2,
        title: "Belém: el descubrimiento y los pastéis",
        activities: [
          "Mosteiro dos Jerónimos en Belém (€12): el mejor ejemplo de arquitectura manuelina del mundo, construido con las riquezas de las especias. Los claustros son impresionantes.",
          "Pastéis de Belém (Rua de Belém 84): la fábrica original de 1837 con sus pastéis recién horneados cada hora. Pedí tres con canela y azúcar en polvo.",
          "Torre de Belém (€6): el símbolo de Lisboa en el Tejo. Solo la fachada exterior justifica la visita — el interior es pequeño.",
          "Padrão dos Descobrimentos: el monumento a los descubridores con la mejor vista del Tejo desde la terraza (€4). La maqueta del planisferio en el suelo muestra las rutas de los exploradores.",
          "Tarde en LX Factory (abre a las 12pm, gratis): la fábrica del siglo XIX reconvertida en espacio cultural con tiendas de diseño, librerías y restaurantes. Los domingos tienen mercado.",
        ],
      },
      {
        day: 3,
        title: "Sintra, Cascais y los atardeceres del Atlántico",
        activities: [
          "Tren a Sintra desde Rossio (40 min, €2.40): la villa romántica en la Sierra de Sintra con palacios de cuento de hadas. El Palácio Nacional da Pena (€14) es el más fotogénico de Portugal.",
          "Sintra: el Palácio da Regaleira (€8) con su Pozo Iniciático tiene la arquitectura más singular del país. Calculá media jornada entre palacio y palacios.",
          "Bus a Cascais (30 min desde Sintra, €3.80): la ciudad costera más elegante de Portugal con playas de roca y arena, chiringuitos y el Mercado da Villa.",
          "Cabo da Roca (el punto más occidental de Europa): el acantilado desde donde el continente termina y el Atlántico comienza. La vista es absoluta.",
          "Regreso en tren a Lisboa al atardecer. Última noche en Mouraria: el barrio multicultural original de Lisboa con el mejor ambiente de tabernas y fados más honestos.",
        ],
      },
    ],
  },

  praga: {
    intro: "Praga es compacta y cambiable en pocos días. El centro histórico se recorre a pie — no necesitás transporte para la mayoría de los sitios. Evitá los restaurantes de la Plaza de la Ciudad Vieja.",
    days: [
      {
        day: 1,
        title: "La Ciudad Vieja y el Reloj Astronómico",
        activities: [
          "Reloj Astronómico (Staroměstské náměstí) a las 8am: la Plaza de la Ciudad Vieja sin turistas es completamente diferente. El reloj de 1410 hace el espectáculo de las figuras cada hora en punto.",
          "Iglesia de Nuestra Señora de Týn y la Iglesia de San Nicolás: las dos iglesias barrocas más importantes de la plaza, generalmente con acceso libre y poca gente.",
          "Josefov: el antiguo barrio judío con la Sinagoga Española y el Cementerio Judío (€700 CZK el ticket combinado). El cementerio con 12 capas de tumbas superpuestas es único en el mundo.",
          "Almuerzo en Lokál Dlouhááá (Dlouhá 33): el restaurante más popular entre los checos con la mejor Pilsner Urquell sin filtrar de Praga y knedlíky tradicionales.",
          "Tarde: Puente de Carlos desde las 5pm cuando los vendedores están cerrando. Las 30 estatuas barrocas y la vista sobre el Moldava son el corazón romántico de la ciudad.",
        ],
      },
      {
        day: 2,
        title: "El Castillo de Praga y Malá Strana",
        activities: [
          "Castillo de Praga (abre 6am, acceso a patios gratuito): el castillo más grande del mundo en superficie. La Catedral de San Vito (ticket interior €250 CZK) y las Casitas de Oro.",
          "Panorámica desde el Jardín del Paraíso: la mejor vista de los tejados rojos de Praga y el Moldava desde los jardines del castillo. Gratuito al salir por la puerta este.",
          "Barrio de Malá Strana: la ciudad pequeña junto al Castillo con palacios barrocos, jardines secretos (Jardín de Vrtba, €1.50) y el Café Savoy para el mejor strudel de Praga.",
          "Almuerzo en el U Zlatého Tygra (Husova 17): el bar de cerveza más famoso de Praga donde el escritor Bohumil Hrabal escribió sus novelas. Solo Pilsner Urquell, sin cocina elaborada.",
          "Viernes o sábados: Mercado de Havelský en la Ciudad Vieja para especias, vegetales y frutas checas. De lunes a viernes hay mercado de artesanías en la misma plaza.",
        ],
      },
      {
        day: 3,
        title: "Viaje a Český Krumlov o el barrio de Vinohrady",
        activities: [
          "Opción A — Český Krumlov (3 hs en bus desde la estación Florenc, €12 ida): el pueblo medieval más bello de Europa Central con el segundo castillo más grande de la República Checa. Un día completo.",
          "Opción B — Vinohrady y Žižkov: los barrios donde viven los praguenses jóvenes. La Torre de Televisión de Žižkov (€180 CZK) con los bebés de David Černý tiene la mejor vista moderna de Praga.",
          "Cementerio de Vyšehrad (gratuito): la fortaleza original de Praga con la Basílica de San Pedro y San Pablo y el cementerio donde están Dvořák y Smetana.",
          "Almuerzo en el mercado Manifesto de Vinohrady: el mercado de comida callejera más popular de Praga con 20+ puestos de cocina internacional.",
          "Última noche: degustación de cervezas artesanales en Pivovarský Klub (Křižíkova 17), la mejor selección de cervezas checas e importadas de la ciudad.",
        ],
      },
    ],
  },

  bangkok: {
    intro: "Bangkok abruma en el buen sentido. El calor es intenso — planificá las visitas a templos antes de las 10am y las actividades de tarde en interiores o el río.",
    days: [
      {
        day: 1,
        title: "El Gran Palacio, Wat Pho y el río Chao Phraya",
        activities: [
          "Gran Palacio y Wat Phra Kaew (Templo del Buda de Esmeralda) a las 8:30am (apertura): el complejo más sagrado de Tailandia. Requiere cubrir hombros y rodillas — alquilan ropa en la entrada si no llevás.",
          "Wat Pho (Templo del Buda Reclinado, ฿200): el templo más grande y antiguo de Bangkok, a 5 minutos a pie del Gran Palacio. El Buda de 46 metros de largo es impresionante.",
          "Almuerzo en Tha Chang Market: el mercado junto al embarcadero del Gran Palacio tiene el mejor pad thai y khao pad (arroz frito) a precios locales.",
          "Crucero por el Chao Phraya en barco expreso (฿15–30): el transporte fluvial más económico y pintoresco de Bangkok, con vista a los templos desde el agua.",
          "Wat Arun (Templo del Amanecer, ฿100) al atardecer: especialmente bello cuando el sol ilumina sus torres de porcelana. Cruzar en el ferry desde el embarcadero cuesta ฿5.",
        ],
      },
      {
        day: 2,
        title: "Chatuchak, el barrio chino y Khao San Road",
        activities: [
          "Mercado de Chatuchak (solo sábados y domingos, 8am–6pm): el mercado más grande de Asia con 15.000 puestos. Ropa, artesanías, plantas y animales. Llegá antes de las 10am.",
          "Jim Thompson House (฿200): la casa del americano que revivió la industria de la seda tailandesa. La colección de arte asiático y la arquitectura tradicional son el mejor museo doméstico de Bangkok.",
          "Almuerzo en Chinatown (Yaowarat Road): los puestos del mercado nocturno abren desde las 6pm, pero los restaurantes chinos del día tienen dim sum y pato laqueado desde las 11am.",
          "Khao San Road: la calle de mochileros más famosa del mundo. De día es decepcionante; de noche (8pm–2am) es un espectáculo visual único aunque turístico.",
          "Cena en el mercado de Rot Fai (trenes): el mercado vintage y gastronómico más auténtico de Bangkok para locales jóvenes. Abre de 5pm a 1am.",
        ],
      },
      {
        day: 3,
        title: "Mercado flotante de Amphawa y Ayutthaya",
        activities: [
          "Opción A — Amphawa (90 min al suroeste en minibús, ฿60): el mercado flotante más auténtico de la región, solo funciona viernes, sábado y domingo desde el mediodía. Por la noche, tour de luciérnagas en kayak.",
          "Opción B — Ayutthaya (80 min en tren, ฿20): la antigua capital del reino de Siam con templos en ruinas entre palmeras. Los Buda decapitados por los birmanos son imágenes icónicas.",
          "Almuerzo típico tailandés de cualquiera de las dos opciones: curry verde, tom yum y mango sticky rice son los platos básicos que no podés irte de Tailandia sin probar.",
          "Regreso a Bangkok por la tarde. Masaje tailandés tradicional en Wat Pho (฿480 por hora): los masajistas se forman en la escuela oficial del templo.",
          "Última noche: rooftop bar en el Vertigo (Hotel Banyan Tree) o Sky Bar (Hotel Lebua) para el skyline de Bangkok iluminado. Cócteles desde ฿500.",
        ],
      },
    ],
  },

  bali: {
    intro: "Bali tiene tres zonas muy distintas: el sur (playas, surf), Ubud (cultura, selva) y el norte (volcanes, templos). Alquilar scooter o contratar chofer es esencial — no hay transporte público.",
    days: [
      {
        day: 1,
        title: "Ubud: templos, selva y cultura balinesa",
        activities: [
          "Amanecer en el Monte Batur (trekking desde las 4am, guía obligatorio IDR 350.000): el volcán activo con el lago cratérico más fotogénico de Indonesia. El desayuno en la cima al amanecer es el punto alto del viaje.",
          "Terrazas de arroz de Tegallalang (IDR 50.000): las terrazas en cascada más fotogénicas de Bali, a 15 km al norte de Ubud. Llegá antes de las 9am para la luz y sin multitudes.",
          "Almuerzo en Warung Babi Guling Ibu Oka en Ubud: el lechón balinés más famoso de la isla, servido solo hasta que se acaba (generalmente antes de las 2pm).",
          "Templo Tirta Empul (IDR 50.000): el templo sagrado del agua con los baños rituales de purificación donde los balineses se purifican. Ropa de baño requerida bajo el sarong.",
          "Monkey Forest Ubud (IDR 80.000) al atardecer: el bosque sagrado con 700 macacos de cola larga. Guardá la comida y las gafas — los monos roban.",
        ],
      },
      {
        day: 2,
        title: "Tanah Lot, Seminyak y el atardecer de Canggu",
        activities: [
          "Tanah Lot al amanecer (IDR 60.000): el templo sobre la roca en el mar es más impresionante a las 7am que al atardecer cuando la masificación turística es extrema.",
          "Playa de Seminyak por la mañana: la más elegante del sur de Bali con beach clubs de diseño. El Potato Head Beach Club abre desde las 11am con piscina y comida.",
          "Almuerzo en La Plancha en Seminyak: el beach bar más instagrameable de Bali con pufs de colores sobre la arena y burritos baratos.",
          "Canggu por la tarde: el barrio más trendy de Bali con el mejor surf de la zona, cafés de specialidad y la escena de nómadas digitales más grande de Asia.",
          "Atardecer desde el templo de Echo Beach en Canggu: el mejor punto para ver el sol caer sobre el océano Índico, con las tablas de surf en el agua como telón de fondo.",
        ],
      },
      {
        day: 3,
        title: "Nusa Penida o la costa este",
        activities: [
          "Lancha a Nusa Penida (45 min desde Sanur, IDR 200.000 ida y vuelta): la isla más salvaje de Bali con los acantilados de Kelingking Beach (una de las playas más fotografiadas del mundo).",
          "Angel's Billabong y Broken Beach en Nusa Penida: las piscinas naturales de agua cristalina sobre los acantilados. El agua es intensa y la corriente fuerte — no te metás si no sos buen nadador.",
          "Crystal Bay en Nusa Penida: snorkel con mantas en temporada (julio–octubre) y tortuga verde todo el año. El arrecife exterior tiene la mejor visibilidad de la zona.",
          "Almuerzo en el pueblo de Ped: los warungs locales tienen el mejor gado-gado y nasi campur de la isla por IDR 30.000.",
          "Regreso a Bali al atardecer. Cena de despedida en Locavore en Ubud (reservá con 2 semanas de anticipación): el mejor restaurante de Indonesia y uno de los 50 mejores del mundo.",
        ],
      },
    ],
  },

  marrakech: {
    intro: "Marrakech se vive en la medina. Alojate dentro de las murallas en un riad — la experiencia cambia completamente frente a un hotel moderno en Guéliz.",
    days: [
      {
        day: 1,
        title: "La Jemaa el-Fna y los souks",
        activities: [
          "Plaza Jemaa el-Fna a las 7am: sin los turistas, los vendedores de naranjas y los encantadores de serpientes están montando sus puestos. El jugo de naranja fresco cuesta MAD 4.",
          "Souks de la medina por la mañana: el laberinto de mercados medievales organizados por gremios — los tintoreros (souks des teinturiers), los herreros, los zapateros. Con guía oficial (MAD 250/hora) o con mapas offline.",
          "Medersa Ben Youssef (MAD 70): la escuela coránica más grande de Marruecos con el patio central de mármol y los azulejos de zellige más detallados de la ciudad.",
          "Almuerzo en el restaurante de la terraza Nomad (Derb Aajane): vistas sobre los tejados de la medina con cocina marroquí contemporánea a precios razonables.",
          "Plaza Jemaa el-Fna al atardecer: la transformación completa al caer el sol — músicos gnawa, narradores de cuentos, puestos de caracoles y el mejor ambiente de la ciudad.",
        ],
      },
      {
        day: 2,
        title: "Jardines, palacios y la ciudad nueva",
        activities: [
          "Jardín Majorelle (MAD 150) a las 9am (apertura): el jardín de cactus y fuentes de Yves Saint Laurent con su famoso azul de cobalto. El museo Berber adyacente tiene la mejor colección de joyería del Magreb.",
          "Palacio de la Bahía (MAD 70): el palacio del siglo XIX con los jardines de naranjeros y la arquitectura andaluza más completa de Marrakech.",
          "Tumbas Saadíes (MAD 70): el mausoleo del siglo XVI descubierto por los franceses en 1917, con los mejores mosaicos y estalactitas de la ciudad.",
          "Almuerzo en el barrio de Guéliz: la ciudad nueva de Marrakech tiene los mejores restaurantes con cocina internacional. Le Jardin (Rue Mouassine) tiene el mejor ambiente.",
          "Hammam tradicional al atardecer: el Les Bains de Marrakech (MAD 200 el ritual completo) o el hammam del Riad para la experiencia más auténtica.",
        ],
      },
      {
        day: 3,
        title: "Excursión al Atlas o el desierto de Agafay",
        activities: [
          "Valle de Ourika (1 hora al sur, tour desde MAD 300): el valle del Atlas donde los bereberes cultivan azafrán y rosas. Las cascadas de Ourika (1.5 hs de caminata) son el punto final.",
          "O bien: Desierto de Agafay (45 min al suroeste): el desierto de piedra más cercano a Marrakech con dromedarios, quad y campamento berber para almuerzo.",
          "Almuerzo berber en cualquiera de las dos opciones: tajín de cordero con ciruelas, cous cous de verduras y té de menta son la base de la gastronomía del Atlas.",
          "Regreso a Marrakech por la tarde. Compras de última hora en el souk des épices: mezcla de ras el hanout, agua de rosas y argan oil son los mejores souvenirs.",
          "Última noche en la Jemaa el-Fna: cena en los puestos numerados del 1 al 100 que se montan al anochecer. El puesto 14 (kefta y merguez) es el favorito de los locales.",
        ],
      },
    ],
  },

  florencia: {
    intro: "Florencia es compacta — todos los sitios estelares están a menos de 20 minutos a pie entre sí. Los museos más importantes requieren reserva obligatoria en temporada alta.",
    days: [
      {
        day: 1,
        title: "Los Uffizi, el Ponte Vecchio y Oltrarno",
        activities: [
          "Galleria degli Uffizi (€26 con reserva) a las 9am: el museo del Renacimiento más importante del mundo. La ruta imprescindible: Botticelli (Sala 10–14), Leonardo (Sala 35), Caravaggio (Sala 90). Calculá 3 horas.",
          "Ponte Vecchio: el puente medieval del siglo XIV cubierto de joyerías. El corredor Vasariano que lo atraviesa (€38) conecta con los Uffizi — reservá si querés el acceso directo.",
          "Almuerzo en Oltrarno: el barrio del otro lado del Arno es el más auténtico de Florencia. Trattoria dell'Orto o Buca Mario tienen los mejores bistecca y ribollita.",
          "Palazzo Pitti y los Jardines de Bóboli (€22 combinado): el palacio más grande de Florencia con la colección Palatina y los jardines renacentistas con vista sobre los tejados.",
          "Aperitivo en la Piazza Santo Spirito: la plaza más local de Florencia, sin turistas, con aperol spritz desde €4 en las terrazas alrededor.",
        ],
      },
      {
        day: 2,
        title: "El Duomo, el David y el barrio de San Lorenzo",
        activities: [
          "Duomo de Brunelleschi (exterior gratuito, cúpula €30 con reserva obligatoria): la cúpula más grande del mundo construida sin andamios. La subida de 463 escalones lleva 45 minutos.",
          "Battistero di San Giovanni (€15): el Baptisterio romano frente al Duomo con las Puertas del Paraíso de Ghiberti. El mosaico del techo del siglo XIII es el más grande de Europa.",
          "Galleria dell'Accademia (€20 con reserva) a las 11am: el David de Miguel Ángel (1501–1504). La perfección anatómica del mármol es más impactante en persona que en cualquier foto.",
          "Mercado de San Lorenzo (entrada libre, 7am–2pm): el mercado cubierto más antiguo de Florencia con quesos, embutidos y el mejor lampredotto (tripa de ternera) de la ciudad.",
          "Noche en el barrio de Santa Croce: la Basílica de Santa Croce (€8) tiene las tumbas de Galileo, Miguel Ángel y Maquiavelo. Los bares de la plaza son los más animados de la noche florentina.",
        ],
      },
      {
        day: 3,
        title: "Piazzale Michelangelo, Fiesole y los jardines",
        activities: [
          "Piazzale Michelangelo al amanecer (gratuito): la terraza más fotogénica de Florencia con la réplica del David y la vista completa sobre los tejados y el Duomo. Sin turistas antes de las 7am.",
          "Subida a Fiesole (autobús 7 desde la Piazza San Marco, €1.50): el pueblo etrusco sobre la colina con las excavaciones romanas y la mejor vista alternativa de Florencia.",
          "Almuerzo en Fiesole: la trattoría Trattoria La Cave di Maiano tiene la mejor bistecca alla fiorentina de los alrededores de la ciudad, en un jardín bajo los olivos.",
          "Jardín di Boboli (€10 solo el jardín): por la tarde, cuando la luz baja, los jardines renacentistas con las fuentes y estatuas barrocas tienen una atmósfera única.",
          "Cierre en la Enoteca Alessi (Via delle Oche): la bodega con la mejor selección de vinos toscanos de la ciudad. Una botella de Chianti Classico Riserva de productor pequeño desde €15.",
        ],
      },
    ],
  },

  estambul: {
    intro: "Estambul es la única ciudad del mundo en dos continentes. Cruzar el Bósforo en ferry es parte de la experiencia cotidiana. La Istanbulkart es imprescindible desde el primer día.",
    days: [
      {
        day: 1,
        title: "Santa Sofía, la Mezquita Azul y el Bósforo",
        activities: [
          "Santa Sofía (Ayasofya) a las 9am (apertura): la obra arquitectónica más importante de la historia con 1.500 años de continuidad. Cubre hombros y rodillas — es una mezquita activa.",
          "Mezquita Azul (Sultanahmet Camii, gratuita): la mezquita con 6 minaretes frente a Santa Sofía. Los mosaicos de Iznik azul cobalto del interior son los más elaborados de Turquía.",
          "Hipódromo de Constantinopla: la plaza entre las dos mezquitas tiene el Obelisco Egipcio de Tutmés III (1500 AC), traído desde Luxor por los romanos.",
          "Almuerzo en el barrio de Sultanahmet: evitá los restaurantes en primera línea. Simit Sarayı o Hafız Mustafa tienen las mejores comidas económicas y auténticas.",
          "Crucero por el Bósforo al atardecer (ferry İDO desde Eminönü, ₺17): el estrecho que separa Europa de Asia con los kioscos de pescado del puente de Gálata.",
        ],
      },
      {
        day: 2,
        title: "El Topkapi, el Gran Bazar y Karaköy",
        activities: [
          "Palacio de Topkapi (₺400) a las 9am: la residencia imperial otomana con el Tesoro (las joyas del sultán), el Harén (₺150 adicional) y las reliquias del Profeta Mahoma.",
          "Museo Arqueológico de Estambul (₺200, adyacente al Topkapi): el sarcófago de Alejandro Magno y la colección griega son los mejores de la región.",
          "Gran Bazar (gratuito, cerrado domingos): los 4.000 comercios del bazar histórico. Exploralo sin comprar nada la primera vez para entender la distribución por sectores.",
          "Almuerzo en el Bazar de las Especias (Mısır Çarşısı): más pequeño y manejable que el Gran Bazar, con lokum (delicias turcas), baklava y especias en puestos auténticos.",
          "Karaköy y Beyoğlu al atardecer: el barrio más moderno de Estambul con galerías, bares de meyhane (taberna turca) y la mejor selección de mezze de la ciudad.",
        ],
      },
      {
        day: 3,
        title: "El lado asiático: Kadıköy y el Príncipe de las Islas",
        activities: [
          "Ferry a Kadıköy en el lado asiático (₺17 desde Eminönü): el barrio más auténtico de Estambul sin turistas, con el Mercado de Kadıköy, los mejores pasteles y el ambiente más local.",
          "Mercado de Kadıköy: los puestos de meze (mezze frío y caliente), el queso tulum, la sucuk y las aceitunas más variadas de Turquía. Desayuno completo por ₺80.",
          "Islas del Príncipe (ferry desde Kadıköy): las islas sin autos en el Mar de Mármara, a 1 hora de Estambul. Büyükada es la más grande con phaeton (carruaje tirado por caballos) y playas.",
          "Almuerzo en Büyükada: el restaurante Yücetepe Kır Gazinosu tiene la mejor vista del mar y el mejor pescado a la parrilla de las islas.",
          "Regreso a Estambul al atardecer. Última noche en Beyoğlu y la Calle İstiklal: la avenida más animada de Turquía con tiendas, cines de arte y los mejores bares de meyhane de la ciudad.",
        ],
      },
    ],
  },

  "ciudad-de-mexico": {
    intro: "Ciudad de México tiene más museos que cualquier otra ciudad del mundo. Organizá por colonias (barrios) para no cruzar la enorme metrópolis innecesariamente.",
    days: [
      {
        day: 1,
        title: "Centro Histórico y Xochimilco",
        activities: [
          "Zócalo (Plaza de la Constitución) a las 7am: la plaza más grande del continente con el izado de bandera diario a las 8am. La Catedral Metropolitana (1573–1813) y el Palacio Nacional con los murales de Rivera.",
          "Templo Mayor (MXN 75): las ruinas aztecas descubiertas en 1978 debajo del Centro Histórico, con el museo que exhibe la Piedra del Sol original.",
          "Almuerzo en la calle de los tlayudas (República de Uruguay): el centro histórico tiene las mejores tostadas, tlayudas y quesadillas de maíz azul desde MXN 25.",
          "Xochimilco en trajinera (MXN 300–500 por hora): los canales aztecas con el servicio de comida en barca, mariachis y las chinampas prehispánicas. Ir en semana para evitar la masificación del fin de semana.",
          "Isla de las Muñecas en Xochimilco: la isla con cientos de muñecos colgados en los árboles es la atracción más perturbadora y fascinante de México.",
        ],
      },
      {
        day: 2,
        title: "Teotihuacán y Coyoacán",
        activities: [
          "Teotihuacán a las 8am (autobús desde Central de Autobuses del Norte, MXN 80 ida y vuelta): la tercera pirámide más grande del mundo. Subí a la Pirámide del Sol antes de las 10am para evitar el calor y la multitud.",
          "La Ciudadela y el Templo de Quetzalcóatl: los relieves serpentinos de 2.000 años son las esculturas prehispánicas más impresionantes del sitio.",
          "Almuerzo en el Mercado de Teotihuacán: los puestos adyacentes al sitio tienen barbacoa de borrego y pulque fresco desde MXN 80 por plato completo.",
          "Coyoacán por la tarde: el barrio más bohemio de CDMX con el Museo Frida Kahlo (Casa Azul, MXN 270 — reservá online) y el Mercado de Artesanías de Coyoacán.",
          "Cierre en el Parque de Coyoacán con los mejores helados de amaranto y tuna de México.",
        ],
      },
      {
        day: 3,
        title: "Condesa, Roma y Polanco",
        activities: [
          "Condesa por la mañana: el barrio art déco más elegante de México con los mejores cafés de especialidad de la ciudad. El Parque México tiene el mercado orgánico los sábados.",
          "Museo Tamayo (MXN 80, gratis domingos): la colección de arte contemporáneo internacional más importante de México en el Bosque de Chapultepec.",
          "Bosque de Chapultepec (gratuito): el parque más grande de América Latina con el Castillo de Chapultepec (MXN 95), el Lago de Chapultepec y el Museo de Antropología.",
          "Museo Nacional de Antropología (MXN 85, gratis domingos): el mejor museo de culturas prehispánicas del mundo. La Sala Mexica con la Piedra del Sol y el dios Tláloc son el núcleo.",
          "Polanco al atardecer: el barrio más elegante de CDMX con los restaurantes de Enrique Olvera (Pujol, el mejor de México) y los bares de mezcal de la Presidente Masaryk.",
        ],
      },
    ],
  },

  singapur: {
    intro: "Singapur es cara pero eficiente. El MRT llega a todos los puntos de interés. Dedicá al menos una noche a los hawker centres — son UNESCO Patrimonio Cultural Inmaterial.",
    days: [
      {
        day: 1,
        title: "Marina Bay, Gardens by the Bay y el CBD",
        activities: [
          "Marina Bay Sands Skypark (SGD 26) a las 8am (apertura): la piscina infinita icónica con la vista del skyline de Singapur más fotografiada del mundo. Solo para huéspedes del hotel la piscina; el deck de observación es para todos.",
          "Gardens by the Bay (acceso al jardín exterior gratuito): los 18 Supertrees futuristas de 25–50 metros se ven mejor desde el jardín exterior. Las cúpulas Cloud Forest y Flower Dome cuestan SGD 28.",
          "ArtScience Museum (SGD 17): el edificio con forma de flor de loto blanca tiene las mejores exposiciones temporales de tecnología y arte de Asia.",
          "Almuerzo en el Maxwell Food Centre: el hawker centre más famoso de Singapur con el Chicken Rice del Tian Tian (SGD 5) y la rojak de frutas (SGD 4).",
          "Gardens by the Bay de noche: el espectáculo Garden Rhapsody de los Supertrees (gratuito, 7:45pm y 8:45pm) es la mejor experiencia gratuita de Singapur.",
        ],
      },
      {
        day: 2,
        title: "Chinatown, Little India y Kampong Glam",
        activities: [
          "Chinatown Heritage Centre (SGD 20) por la mañana: la historia de los inmigrantes chinos en Singapur en tres casas shophouse originales de 1900.",
          "Hawker Centre de Chinatown (Smith Street Cooked Food Centre): el mercado más famoso del barrio con char kway teow, bak kut teh y laksa desde SGD 4.",
          "Little India: el barrio más colorido y aromático de Singapur con el Templo Sri Veeramakaliamman, el mercado de flores de Serangoon Road y los tandoors de biryani.",
          "Kampong Glam: el barrio árabe-malayo con la Mezquita del Sultán (gratuita), la Haji Lane (calle de boutiques vintage) y el mejor murtabak de Singapur.",
          "Cena en el Newton Food Centre: el hawker centre más auténtico de la zona central con satay a la parrilla en vivo y caranguejo al curry (SGD 25–40 el plato).",
        ],
      },
      {
        day: 3,
        title: "Sentosa, el zoo y la despedida",
        activities: [
          "Singapore Zoo (SGD 48) a las 8:30am: el mejor zoo del mundo sin rejas visibles, con los orangutanes de Borneo en semilibertad y el desayuno con los primates.",
          "River Wonders (SGD 42, adyacente al zoo): el manatí de Amazonia, el panda gigante chino y los jaguares en el único parque acuático y de tierra combinado de Asia.",
          "Almuerzo en el Springleaf Prata Place (a 10 min en taxi del zoo): el mejor murtabak y roti prata de Singapur, en el barrio donde comen los locales.",
          "Sentosa Island por la tarde: el MRT express desde Harbourfront cuesta SGD 4. Las playas de Siloso y Palawan son las únicas playas de arena de Singapur — artificiales pero bien cuidadas.",
          "Cena de despedida en el barrio de Dempsey Hill: los mejores restaurantes para una ocasión especial en Singapur están en este enclave de antiguas barracas coloniales entre los árboles.",
        ],
      },
    ],
  },

  medellin: {
    intro: "Medellín tiene el mejor clima de Colombia — 'ciudad de la eterna primavera'. El metro y el cable son el símbolo de su transformación. El Poblado es la base más segura para turistas.",
    days: [
      {
        day: 1,
        title: "El Poblado, el Metrocable y la Plaza Botero",
        activities: [
          "Metrocable de Santo Domingo (Línea K): tomá el metro hasta Acevedo y el cable hasta Santo Domingo Savio. La Biblioteca España de Giancarlo Mazzanti (premios internacionales de arquitectura) y la vista sobre toda Medellín.",
          "Barrio de Santo Domingo Savio: el barrio que pasó de ser el más violento de Colombia a tener una biblioteca premiada y un parque de juegos comunitario. La transformación urbana más importante de América Latina.",
          "Plaza Botero (entrada libre): 23 esculturas originales del maestro colombiano Fernando Botero, donadas a su ciudad natal. El Museo de Antioquia adyacente (COP 20.000) tiene más de su obra.",
          "Almuerzo en el Mercado del Río (Calle 24): el food court gourmet de Medellín con 40+ puestos de cocina colombiana e internacional. El mejor por precio y variedad.",
          "El Parque de El Poblado al atardecer: el corazón del barrio más seguro y turístico de Medellín con cafeterías, bares y el mejor ambiente de Medellín joven.",
        ],
      },
      {
        day: 2,
        title: "Laureles, el Jardín Botánico y la gastronomía paisa",
        activities: [
          "Jardín Botánico Joaquín Antonio Uribe (entrada libre): el jardín más biodiverso de Colombia con el Orquideórama, la estructura paramétrica premiada internacionalmente que imita un árbol gigante.",
          "Parque Explora (COP 28.000): el museo interactivo de ciencias más moderno de Colombia con el mejor planetario del país. Ideal también para adultos.",
          "Almuerzo en Laureles (Barrio de los locales): la Avenida El Poblado y La 70 tienen los mejores restaurantes a precio local. Una bandeja paisa completa (fríjoles, chicharrón, arepa, chorizo) cuesta COP 22.000.",
          "Café de la época colonial en el Parque Berrío: el centro histórico de Medellín con el Palacio de la Cultura Rafael Uribe y los cafés históricos de la Calle Carabobo.",
          "Noche en La 70 (Laureles): la avenida más animada de la Medellín local con bares de salsa, picadas de carne y cerveza artesanal. Mucho más auténtico que el Parque del Poblado.",
        ],
      },
      {
        day: 3,
        title: "Guatapé y el Peñol",
        activities: [
          "Bus desde la Terminal del Norte hacia Guatapé (2.5 hs, COP 20.000 ida y vuelta): el embalse artificial más grande de Colombia con el pueblo más colorido del país.",
          "La Piedra del Peñol (COP 25.000): subida de 740 escalones hasta la cima del monolit de 220 metros. La vista del embalse con sus 37 islas es una de las más impresionantes de Colombia.",
          "Almuerzo en el pueblo de Guatapé: las fachadas de azulejo de colores y el Malecón del embalse tienen los mejores restaurantes de trucha del departamento de Antioquia.",
          "Paseo en lancha por el embalse (COP 30.000 por persona): el tour de 2 horas recorre las islas, la casa de Pablo Escobar y el mayor embalse del sistema eléctrico colombiano.",
          "Regreso a Medellín al atardecer. Cena de despedida en Carmen Restaurante en El Poblado: la cocina de mercado más creativa de Medellín con ingredientes andinos de temporada.",
        ],
      },
    ],
  },

  viena: {
    intro: "Viena tiene la mejor calidad de vida del mundo según el Economist (2024). La red de transporte público es perfecta — el pase de 72 horas cubre todo.",
    days: [
      {
        day: 1,
        title: "El Centro Imperial: Hofburg, Kunsthistorisches y los cafés",
        activities: [
          "Hofburg (Museo Imperial, €20): el palacio de invierno de los Habsburgo con los aposentos de Sissi, el tesoro imperial y el Burgtheater. Calculá 3 horas para las tres colecciones.",
          "Kunsthistorisches Museum (€21): el segundo mejor museo de arte de Europa después del Louvre, con Vermeer, Brueghel y la mayor colección de Cellini fuera de Italia. La arquitectura del edificio es tan impresionante como el contenido.",
          "Almuerzo en el Café Central (Herrengasse 14): el café vienés más elegante del mundo, donde Freud y Trotsky tomaban su Melange. Una Wiener Schnitzel con taza de café cuesta €25.",
          "Anillo de Viena (Ringstrasse) a pie: la avenida circular con la Ópera del Estado, el Parlamento, el Rathaus y la Universidad — todo construido en 40 años de modernismo imperial.",
          "Ópera de Estado al atardecer: tomá las entradas de pie (Stehplatz, €4–10) para la función de la noche. La fila empieza 80 minutos antes de la actuación.",
        ],
      },
      {
        day: 2,
        title: "Schönbrunn, el Belvedere y el Arte Secesionista",
        activities: [
          "Palacio de Schönbrunn (Grand Tour, €27) a las 9am: el palacio de verano de 1.441 habitaciones de María Teresa. La Gloriette en lo alto del jardín tiene la mejor vista de Viena.",
          "Secession Building (€10): el edificio de 1897 con la famosa cúpula dorada de hojas de laurel ('un repollo de oro', según los vieneses) y el friso de Beethoven de Klimt en el sótano.",
          "Belvedere Superior (€18): El Beso de Gustav Klimt — la obra de arte más valiosa de Austria — con el mejor jardín barroco de Centroeuropa como telón de fondo.",
          "Almuerzo en el Naschmarkt (abierto lunes–sábado): el mercado más grande y diverso de Viena con 120 puestos de especias, quesos, fiambres y el mejor Beuschel (guiso de vísceras) de la ciudad.",
          "Prater al atardecer: el parque de diversiones más antiguo de Europa (1766) con la Noria histórica (€13) — la misma que aparece en la película El tercer hombre (1949).",
        ],
      },
      {
        day: 3,
        title: "Salzburgo (día completo) o el barrio de los museos",
        activities: [
          "Opción A — Salzburgo (tren Railjet, 2.5 hs, €30): la ciudad natal de Mozart con la Fortaleza de Hohensalzburg (la más grande de Austria), la Getreidegasse y el mercado de Christkindlmarkt en diciembre.",
          "Opción B — MuseumsQuartier de Viena: el complejo cultural más grande de Austria con el Leopold Museum (Egon Schiele, €15), el MUMOK (arte moderno, €14) y el WienMuseum (historia de Viena, gratuito).",
          "Almuerzo en el Café Hawelka (Dorotheergasse 6): el café más literario de Viena, fundado en 1939. Los Buchteln (bollos de levadura rellenos de mermelada de ciruela) son legendarios.",
          "Museo de Historia Natural de Viena (€16): la Venus de Willendorf (24.000 AC) y la mayor colección de meteoritos del mundo. El edificio simétrico al Kunsthistorisches.",
          "Última noche en los bares de Neubau: el barrio más trendy de Viena con los mejores bares de vino natural, restaurantes de cocina austríaca contemporánea y la escena musical alternativa.",
        ],
      },
    ],
  },
};
