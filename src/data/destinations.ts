export interface Destination {
  slug: string;
  name: string;
  country: string;
  emoji: string;
  tagline: string;
  description: string;
  highlights: { icon: string; title: string; desc: string }[];
  bestSeason: string;
  currency: string;
  language: string;
  avgBudget: string;
  continent: string;
  tips: string[];
  guidePractical?: string;
  practicalInfo?: { category: string; details: string[] }[];
  faq?: { question: string; answer: string }[];
}

export const destinations: Destination[] = [
  {
    slug: "dubai",
    name: "Dubai",
    country: "Emiratos Árabes Unidos",
    emoji: "🏙️",
    tagline: "La ciudad del futuro en el desierto",
    description: "Dubai combina rascacielos futuristas, lujo sin límites y tradición árabe en un destino único. Desde el Burj Khalifa hasta los souks históricos, cada rincón sorprende con una experiencia nueva. Un destino ideal para quienes buscan lo extraordinario.",
    highlights: [
      { icon: "🏗️", title: "Burj Khalifa", desc: "El edificio más alto del mundo con vistas panorámicas desde el piso 148" },
      { icon: "🛍️", title: "Dubai Mall", desc: "Uno de los centros comerciales más grandes del planeta, con acuario y pista de hielo" },
      { icon: "🏜️", title: "Safari en el desierto", desc: "Duna bashing, cena beduina bajo las estrellas y paseo en camello" },
      { icon: "🌊", title: "Palm Jumeirah", desc: "La icónica isla artificial con hoteles de lujo y playas de arena blanca" },
    ],
    bestSeason: "Octubre a abril",
    currency: "Dírham (AED) — aprox. $0.27 USD",
    language: "Árabe · inglés muy extendido",
    avgBudget: "$150–350 USD/día",
    continent: "Asia",
    tips: [
      "El Burj Khalifa se reserva online con semanas de anticipación en temporada alta. La terraza del piso 148 (At The Top SKY) cuesta el doble que la del 124, pero las vistas son notablemente superiores.",
      "El alcohol solo se sirve en hoteles y restaurantes con licencia. Es significativamente más caro que en Europa: presupuestá $15–25 USD por copa si querés tomar.",
      "Las mezquitas requieren vestimenta modesta: hombros, pecho y rodillas cubiertos. En muchas ofrecen abayyas gratuitas para mujeres, pero llevá una bufanda por las dudas.",
      "El metro de Dubai (estaciones verdes y rojas) es la forma más económica de ir del aeropuerto al centro. Un viaje completo cuesta menos de $2 con la tarjeta Nol, vs $20–30 de taxi.",
    ],
    guidePractical: "Dubai es una ciudad de contrastes donde el lujo es la norma y todo es intentadamente extremo, pero también es una ciudad que planifica el turismo de manera extraordinaria. La experiencia se divide entre dos Dubais: la zona hotelera (rascacielos, compras, playas privadas) y la zona histórica (Old Dubai, Al Fahidi, souks). Muchos viajeros solo ven el primero y se pierden la autenticidad de la ciudad. El clima es agresivo de junio a septiembre (50°C+), así que la temporada real es octubre a abril. El presupuesto no tiene límite en Dubai — puedes gastar $20 por día en un hostal compartido y comida callejera, o $1000+ en un resort. La llave para no quedar quebrado: evita los tours turísticos caros (99 AED = $27 USD). El safari en el desierto con agencia cuesta 300 AED; el mismo safari yendo directo a una agencia local en Deira cuesta 100-120 AED. El metro de Dubai es extraordinario — moderno, puntual, barato (máx. $2 por viaje). Alójate cerca de una estación del metro, no en la Zona Hotelera turística. El Burj Khalifa es obligatorio pero reserva online con semanas de anticipación (última hora tiene precios dinámicos de $80+). La verdadera Dubai se encuentra en Deira, Al Karama y Al Fahidi — son barrios donde viven los trabajadores expatriados, con comida auténtica india, filipina y emiratí, cafés tradicionales y souks sin turistas. El atardecer en el Gold Souk es gratuito y espectacular — es la forma más auténtica de sentir la ciudad.",
    practicalInfo: [
      {
        category: "Transporte & Movilidad",
        details: [
          "Tarjeta Nol (metro): AED 25 inicial (AED 19.50 viaje máx, viajes múltiples más baratos)",
          "Taxi: AED 3 base + AED 1.99/km (solo usar si Uber con surge pricing)",
          "Uber/Careem: Precio justo, disponible 24/7, mejor que taxi — compara siempre",
          "Autobús público: AED 2-5 según distancia, puntual y con aire acondicionado",
          "Aeropuerto a zona hotelera: Metro línea roja AED 8.50 (35 min, vs Uber AED 40-50)"
        ]
      },
      {
        category: "Atracciones & Actividades",
        details: [
          "Burj Khalifa (124/148): AED 150-270 (RESERVA ONLINE, última hora $80+)",
          "Dubai Mall: Gratuito acceso (compras internas), acuario AED 105",
          "Safari desierto local (Deira): AED 100-120 (6 horas, cena beduina), vs. agencia turística AED 300",
          "Gold Souk: Gratuito (atardecer es el mejor momento, 6-8pm)",
          "Playa pública Umm Suqeim: Gratuita, arena blanca, menos turistas que Jumeirah",
          "Bastakiya Quarter: Gratuito (barrio histórico restaurado, museos pequeños)"
        ]
      },
      {
        category: "Gastronomía & Precios",
        details: [
          "Shawarma/kebab callejero: AED 15-25 ($4-7 USD) — mejor que restaurantes",
          "Al Mallah (hummus/falafel legendario): AED 20 por plato en Deira",
          "Mandado (biryani indio): AED 25-35 en Al Karama, comida completa",
          "Café árabe tradicional: AED 5 por café + dátiles (experiencia cultural)",
          "Restaurante de lujo turístico: AED 200-400 por persona (EVITAR)",
          "Mercadería/supermercado: Lulu o Carrefour tienen precios bajos vs. hoteles"
        ]
      },
      {
        category: "Alojamiento",
        details: [
          "Deira/Bur Dubai (auténtico): AED 150-250/noche ($40-70 USD) — mejor localización y precio",
          "Zona hotelera (turística): AED 400-800/noche ($110-220 USD) — caro, vibes turísticas",
          "Apartamento Airbnb: AED 200-350/noche, mejor si viajes con grupo",
          "Hostales (Deira): AED 60-100 cama compartida — mochileros y presupuesto bajo",
          "Recomendación: Evita Zona Hotelera a menos que busques resort de lujo puro"
        ]
      },
      {
        category: "Compras & Entretenimiento",
        details: [
          "Gold Souk (Deira): Precios por peso de oro (mejor que joyerías turísticas)",
          "Spice Souk: Especies frescas, aromas authenticos, fotogénico",
          "Dubai Mall: 1200+ tiendas (abridor, pero Dubai es caro para shopping)",
          "Vida nocturna (bares hoteleros): AED 80-150 por copa (muy caro)",
          "Vida nocturna local (Bastakiya/Al Fahidi): AED 30-50 por cerveza en bares locales"
        ]
      }
    ],
    faq: [
      {
        question: "¿Necesito cubierta para visitar mezquitas?",
        answer: "La mayoría de mezquitas exigen hombros y rodillas cubiertos. Muchas temples ofrecen abayyas (tela negra) gratuitas para mujeres al entrar. Los hombres pueden entrar con pantalones largos. Es completamente respetable y es parte de la experiencia cultural."
      },
      {
        question: "¿Es verdad que no hay vida más allá de la Zona Hotelera?",
        answer: "Completamente falso y es el error más común. La Zona Hotelera es turística extremo — es para fotos del Burj y compras. La verdadera Dubai está en Deira, Al Fahidi y Al Karama: mercados auténticos, comida increíble y vida local que no verás en Instagram."
      },
      {
        question: "¿Cuánto cuesta realmente un viaje a Dubai?",
        answer: "Varía enormemente: mochilero presupuesto: $40-60/día (metro, comida callejera, hostales). Viajero de clase media: $100-150/día. Turista de lujo: $200+ sin límite. Lo mejor: mezcla los dos — hospédate en Deira (barato), come en souks (barato), gasta en Burj Khalifa y compras."
      },
      {
        question: "¿Vale la pena el Burj Khalifa si tengo presupuesto apretado?",
        answer: "Es caro (AED 150-270). La alternativa: sube al piso 124 en la terraza (más barato), o ve a un rooftop bar gratis en la Zona Hotelera con vistas casi iguales pagando una copa. La vista es espectacular desde cualquier lugar, pero el Burj es la experiencia icónica."
      },
      {
        question: "¿Es seguro Dubai para viajeros?",
        answer: "Extremadamente seguro. La policía es visible, no hay criminalidad de calle y es fácil moverte de noche. El único riesgo es los carteristas en souks masificados — mantén bolsas cerradas como en cualquier ciudad."
      },
      {
        question: "¿Cuál es la mejor épóca para visitar Dubai?",
        answer: "Octubre a abril (20-30°C). Noviembre a febrero es pico turístico — ven en octubre o marzo-abril para menos gente y precios menores. Junio-agosto es invierno infernal (50+°C), la mayoría de atracciones exteriores cierran temprano y el calor es insoportable."
      },
      {
        question: "¿Necesito coche de alquiler en Dubai?",
        answer: "No. El metro es excelente, los uber/taxis funcionan bien. Solo alquila coche si planeas salidas al desierto de varios días (Liwa, Fujaira). Para la ciudad, transporte público es más económico y práctico."
      }
    ]
  },
  {
    slug: "paris",
    name: "París",
    country: "Francia",
    emoji: "🗼",
    tagline: "La ciudad del amor y la cultura",
    description: "París es una de las ciudades más visitadas del mundo y por algo es: arte, gastronomía, moda y arquitectura de primer nivel. La Torre Eiffel, el Louvre, Montmartre y los cafés de boulevard hacen de París una experiencia única e irrepetible.",
    highlights: [
      { icon: "🗼", title: "Torre Eiffel", desc: "El símbolo de Francia, especialmente mágica de noche con su espectáculo de luces" },
      { icon: "🎨", title: "Museo del Louvre", desc: "El museo más visitado del mundo, hogar de la Mona Lisa y miles de obras maestras" },
      { icon: "⛪", title: "Montmartre", desc: "El barrio bohemio con vistas panorámicas y la Basílica del Sacré-Cœur" },
      { icon: "🛍️", title: "Campos Elíseos", desc: "La avenida más famosa del mundo, ideal para pasear, comprar y disfrutar" },
    ],
    bestSeason: "Abril a junio / Septiembre a octubre",
    currency: "Euro (EUR)",
    language: "Francés",
    avgBudget: "$120–250 USD/día",
    continent: "Europa",
    tips: [
      "Los museos nacionales de París son gratuitos el primer domingo de cada mes. El Louvre recibe 9 millones de visitantes por año: llegá antes de las 9am para evitar filas de una hora.",
      "Pedí 'un café' (expresso) en pie en la barra de cualquier bistró parisino: es 30–50% más barato que sentado y así desayunan los parisinos de verdad.",
      "La Torre Eiffel tiene listas de espera de 2+ horas en julio y agosto. Reservá el acceso online con semanas de anticipación — el ascensor al segundo piso se agota primero.",
      "La tarjeta Navigo semana (lunes a domingo) cuesta €30 y cubre metro, RER y autobuses sin límite. Si llegás lunes o martes, suele convenir frente a los tickets individuales.",
    ],
    guidePractical: "París es una ciudad compacta que se recorre principalmente a pie, pero el metro es rápido y eficiente si necesitás cubrir largas distancias. La mayoría de los barrios turísticos están conectados y caminables entre sí en 15-30 minutos. Lo crucial es elegir un buen alojamiento en el centro — entre el Latin Quarter, Marais, o Montmartre — porque desde ahí todo es accesible. Evitá quedarte muy lejos del metro, aunque sea más barato. La compra de entradas anticipadas para museos no es opcional en temporada alta (mayo a agosto): el Louvre, el Musée d'Orsay y los Museos del Vaticano se agotan a diario y las colas llegan a 2-3 horas. Para gastronomía de calidad sin precios turísticos, enfócate en los barrios de residentes como el 5to y 6to arrondissements, o cruceta hacia Belleville. Los restaurantes en las primeras 5 cuadras de la Torre Eiffel o alrededor de Notre-Dame son completamente innecesarios — la comida es inferior y el precio 3x más alto.",
    practicalInfo: [
      {
        category: "Transporte",
        details: [
          "Tarjeta Navigo Semana: €30 (lunes-domingo, metro/bus/RER ilimitado)",
          "Carné de 10 tickets: €16.90 (individual sale €2.15)",
          "Aeropuerto a Centro: RER B (€12, 35 min) vs Taxi (€55-70, 20-45 min según tráfico)",
          "Bicicletas públicas (Vélib): €5/día o €25/semana, acceso a 1.500+ estaciones",
        ],
      },
      {
        category: "Museos & Entradas",
        details: [
          "Louvre: €17 entrada, €4 extra reserva online (OBLIGATORIA temporada alta)",
          "Musée d'Orsay: €16 entrada, gratuito primer domingo del mes",
          "Versionailles: €21 palacio + jardines, sin fila de acceso",
          "Gratis primer domingo de mes: Louvre, Orsay, Pompidou, Picasso (museos nacionales)",
        ],
      },
      {
        category: "Gastronomía",
        details: [
          "Café/espresso en barra: €1.50-2 (vs €4-5 sentado)",
          "Menú del mediodía (dejeuner): €12-18 en restaurantes de calidad",
          "Baguette de panadería local: €1-1.50 (mejor que cualquier sándwich turístico)",
          "Macarons Pierre Hermé o Ladurée: €2-3 c/uno (no vale la pena los vs €1 en otros)",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cuántos días necesito para ver París?",
        answer: "Mínimo 3 días para ver lo imprescindible (Louvre, Torre Eiffel, Notre-Dame, Montmartre). 4-5 días si querés museos adicionales (Orsay, Rodin, Picasso) y explorar barrios más tranquilos.",
      },
      {
        question: "¿Es verdad que los franceses son hostiles con los turistas?",
        answer: "Parcialmente exagerado. Si intentás hablar francés (aunque sea 'Bonjour'), los parisinos son mucho más receptivos. La hostilidad viene de turistas que no respetan la cultura local. Sé educado y respeta los espacios.",
      },
      {
        question: "¿Cuándo es la mejor época para visitar sin multitudes?",
        answer: "Noviembre (después del peak de otoño) y marzo (antes de primavera). Evitá julio-agosto cuando París se llena de turistas y hace mucho calor. Los parisinos cierren sus negocios y se van de vacaciones.",
      },
      {
        question: "¿Puedo visitar Versalles como day trip?",
        answer: "Sí, perfectamente. Toma RER C desde el centro a Versailles-Rive Gauche (35 min, €4). Dedica 4-5 horas al palacio y jardines. Es uno de los viajes de un día más fáciles desde París.",
      },
      {
        question: "¿Es seguro pasear de noche por París?",
        answer: "Los barrios turísticos (Marais, Latin Quarter, Montmartre) son seguros incluso de madrugada. Evitá las áreas alrededor de Gare du Nord y Gare de l'Est de noche. Usa sentido común como en cualquier gran ciudad.",
      },
    ],
  },
  {
    slug: "roma",
    name: "Roma",
    country: "Italia",
    emoji: "🏛️",
    tagline: "La Ciudad Eterna te espera",
    description: "Roma es un museo a cielo abierto donde conviven 2.800 años de historia. El Coliseo, el Vaticano, la Fontana di Trevi y la gastronomía italiana hacen de esta ciudad una experiencia que ningún viajero debería perderse.",
    highlights: [
      { icon: "🏟️", title: "Coliseo Romano", desc: "El anfiteatro más grande del mundo antiguo, símbolo del Imperio Romano" },
      { icon: "⛪", title: "Ciudad del Vaticano", desc: "El Estado más pequeño del mundo, con la Basílica de San Pedro y la Capilla Sixtina" },
      { icon: "⛲", title: "Fontana di Trevi", desc: "La fuente barroca más famosa del mundo — lanzá una moneda y pedí un deseo" },
      { icon: "🍕", title: "Gastronomía romana", desc: "Pasta cacio e pepe, supplì, carciofi alla romana y el mejor gelato del mundo" },
    ],
    bestSeason: "Marzo a mayo / Septiembre a noviembre",
    currency: "Euro (EUR)",
    language: "Italiano",
    avgBudget: "$100–200 USD/día",
    continent: "Europa",
    tips: [
      "Los Museos del Vaticano requieren reserva anticipada obligatoria de mayo a octubre. Sin reserva, esperás 3–4 horas bajo el sol en la fila exterior. Reservá online al menos una semana antes.",
      "El Coliseo, el Foro Romano y el Palatino comparten un mismo ticket (€18) válido para los tres sitios. Reservá online para evitar la fila — en verano puede ser de 90 minutos.",
      "Los bares romanos cobran diferente según estés parado o sentado. Tomá el espresso en la barra como los locales: es más económico, más rápido y más auténtico.",
      "Evitá los restaurantes en la primera fila de las plazas turísticas (Navona, Trevi, Campo de' Fiori): cobran el doble por la ubicación. A dos calles de distancia la calidad sube y el precio baja.",
    ],
    guidePractical: "Roma requiere una estrategia clara porque la ciudad está tan llena de atracciones que es fácil desperdiciarse intentando verlo todo. Lo crucial: reserva anticipada OBLIGATORIA para Vaticano (mayo-octubre) y Coliseo. Sin reserva, pierdes 2-3 horas en filas bajo el sol. El centro histórico se recorre a pie, pero necesitás días completos dedicados a cada zona — una mañana en el Vaticano, un día entero en Coliseo/Foro, otro día en Navona/Trevi/Pantheon. Las iglesias románicas más bellas (Santa María en Trastevere, San Ignacio) están fuera de los circuitos turísticos y valen completamente el desvío. Para comida auténtica, evitá completamente la Plaza Navona y Fontana di Trevi — son las zonas más caras de Roma. Trastevere y el Aventino tienen la mejor relación calidad-precio con vistas espectaculares. Alojate en el centro histórico aunque sea caro — no ahorrarás dinero quedándote lejos porque perderás tiempo en transporte.",
    practicalInfo: [
      {
        category: "Atracciones & Reservas",
        details: [
          "Coliseo+Foro Romano+Palatino: €18 (entrada combinada, RESERVA ONLINE)",
          "Museos Vaticano+Capilla Sixtina: €19 (obligatorio reservar mayo-octubre)",
          "Panteón: €5 entrada (recién cobrada)",
          "Iglesias románicas: Gratuitas (San Ignacio, Santa María en Trastevere, San Juan de Letrán)",
        ],
      },
      {
        category: "Gastronomía Romana",
        details: [
          "Cacio e pepe auténtica: €8-12 (no tiene más ingredientes que queso y pimienta)",
          "Carbonara real: €10-15 (guanciale, huevo, queso — nada más)",
          "Pizza al taglio: €3-5 por dos porciones generosas (mejor que cualquier pizzería turística)",
          "Supplì de la esquina: €2-3 (croqueta de arroz con ragù — comida de locales)",
          "Cono de gelato: €2-3 (no existen diferencias reales entre buenas heladera; evitá colores fluorescentes)",
        ],
      },
      {
        category: "Movilidad",
        details: [
          "Tarjeta Roma Pass: €31 (48hs, transporte + 2 museos + descuentos)",
          "Billete diario metro/bus: €7 (cubre unlimited en 24hs)",
          "Carné de 10 viajes: €16.50 (€1.65 cada uno)",
          "A pie: el centro histórico es completamente caminable; casi no necesitás transporte",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cuántos días necesito para ver Roma sin correr?",
        answer: "Mínimo 3 días: uno para Vaticano (media día es poco), uno para Coliseo/Foro (día completo), uno para centro histórico. 4-5 días si querés museos adicionales (Borghese, Capitolini) y barrios como Trastevere en profundidad.",
      },
      {
        question: "¿Es verdad que la Fontana di Trevi es una trampa turística?",
        answer: "La fuente es hermosa pero está masificada (500+ personas simultaneamente). Visitá antes de las 8am o después de las 22hs cuando está prácticamente vacía. El agua es la misma, pero la experiencia es infinitamente mejor.",
      },
      {
        question: "¿Cuál es la mejor pasta que puedo comer en Roma?",
        answer: "No es un restaurante específico sino la técnica: cacio e pepe y carbonara auténticas se hacen con máximo 3-4 ingredientes. La mayoría de los restaurantes turísticos agregan cosas que no corresponden. Busca pequeñas trattorie donde coman locales, no turistas.",
      },
      {
        question: "¿Puedo ver todo en 2 días?",
        answer: "Técnicamente sí, pero mal. Verías Vaticano (corriendo), Coliseo (desde afuera probablemente), Torre Eiffel y Trevi de refilón. Roma merece al menos 3 días completos para disfrutarla.",
      },
      {
        question: "¿Es obligatorio reservar museos con anticipación?",
        answer: "De mayo a octubre: SÍ, especialmente Vaticano y Coliseo. De noviembre a abril puedes llegar sin reserva, pero online es más barato de todas formas. Reserva siempre.",
      },
    ],
  },
  {
    slug: "barcelona",
    name: "Barcelona",
    country: "España",
    emoji: "🏖️",
    tagline: "Arte, playa y arquitectura modernista",
    description: "Barcelona combina lo mejor del Mediterráneo: playa, sol, gastronomía excepcional y una arquitectura única de la mano de Gaudí. La Sagrada Família, el Barrio Gótico y Las Ramblas son solo el comienzo de una ciudad vibrante y cosmopolita.",
    highlights: [
      { icon: "⛪", title: "Sagrada Família", desc: "La obra maestra inacabada de Gaudí, declarada Patrimonio de la Humanidad" },
      { icon: "🌿", title: "Park Güell", desc: "El parque mosaico de Gaudí con vistas panorámicas sobre toda la ciudad" },
      { icon: "🏘️", title: "Barrio Gótico", desc: "El corazón medieval de Barcelona con calles estrechas y plazas con historia" },
      { icon: "🍷", title: "La Boqueria", desc: "El mercado más famoso de España, ideal para tapas, jamón y productos frescos" },
    ],
    bestSeason: "Mayo a junio / Septiembre a octubre",
    currency: "Euro (EUR)",
    language: "Español · catalán",
    avgBudget: "$100–200 USD/día",
    continent: "Europa",
    tips: [
      "La Sagrada Família requiere reserva online obligatoria. Las entradas para subir a las torres se agotan con semanas de anticipación en temporada alta — comprá todo junto desde la web oficial.",
      "El barrio de Gràcia (no confundir con el Eixample) es donde viven los barceloneses reales: mercados de barrio, restaurantes sin trampa turística y la mejor vida de café de la ciudad.",
      "Para playa de calidad sin masificación, tomá el tren de cercanías (Renfe) a Sitges (40 min, $4) o Castelldefels (25 min, $3): arena más limpia y mucho menos gente que Barceloneta.",
      "El mercado de La Boqueria está pensado para turistas; los locales compran en el Mercat de l'Abaceria en Gràcia o en Santa Caterina en el barrio gótico. Precios y calidad incomparables.",
    ],
    guidePractical: "Barcelona es la ciudad de Gaudí pero su arquitectura modernista va mucho más allá de la Sagrada Família. La Casa Batlló, Casa Milà y el Park Güell son de igual importancia. Lo importante: reserva todo online con anticipación porque las torres y atracciones principales se agotan especialmente abril-octubre. El Barrio Gótico se recorre a pie en 3-4 horas pero necesitas tiempo para perderte en calles medievales — es donde vive la Barcelona real fuera de los circuitos turísticos. Las Ramblas son turísticas extremo: linda para una caminata rápida pero no dediques demasiado tiempo. En cambio, el Raval y El Born tienen mejor gastronomía, arte alternativo y vida auténtica. Para playa sin masas, no te quedes en Barceloneta — toma el Renfe 10 minutos a Sitges o Castelldefels. La comida no es cara si sabes dónde buscar: las tapas barcelonesas en bares de barrio cuestan €2-4 y comerás mejor que en cualquier restaurante turístico. Alojate en Eixample o Gràcia, no en Gothic Quarter (demasiado masificado) ni demasiado lejos del metro.",
    practicalInfo: [
      {
        category: "Atracciones Gaudí",
        details: [
          "Sagrada Família: €29 (RESERVA ONLINE, torres €19 adicionales)",
          "Park Güell: €14 entrada, €8 adicionales para zona monumental",
          "Casa Batlló: €27 (audioguía incluida, vale la pena)",
          "Casa Milà: €24 (azotea + interior)",
        ],
      },
      {
        category: "Gastronomía & Mercados",
        details: [
          "Tapas en bar de barrio: €2-4 por plato (jamón ibérico, boquerones, patatas bravas)",
          "Menú del mediodía: €12-18 en restaurantes de calidad",
          "Horchata con churros: €4-5 (bebida dulce catalana, merienda típica)",
          "Mercat Santa Caterina: mejor que La Boqueria, más local, mejores precios",
        ],
      },
      {
        category: "Transporte & Movilidad",
        details: [
          "T-Casual 10: €11.35 (10 viajes metro + bus)",
          "T-Dia: €11 (24hs, transporte ilimitado)",
          "Bicis públicas: €13-54 por bono semanal",
          "Playas cercanas: Sitges (20 min, €4), Castelldefels (15 min, €3) via Renfe",
        ],
      },
    ],
    faq: [
      {
        question: "¿Vale la pena subir a las torres de la Sagrada Família?",
        answer: "Sí, si tienes tiempo. La vista desde arriba de la ciudad es espectacular. Pero si estás con presupuesto apretado, la fachada y interior son igualmente impresionantes desde abajo. Elige según tus prioridades.",
      },
      {
        question: "¿Puedo perderme en el Barrio Gótico sin problema?",
        answer: "Completamente. Es pequeño (cabe en 1-2 horas caminando) y está hecho para explorar sin mapa. No hay forma de estar realmente 'perdido' — siempre encontrarás una calle conocida o salida.",
      },
      {
        question: "¿Es Barcelona cara para comer?",
        answer: "Depende de dónde. La Rambla y zonas turísticas: muy cara. Gràcia, Eixample, El Born: precios normales de ciudad europea. Las tapas en bares locales cuestan €2-4, menos que muchas ciudades.",
      },
      {
        question: "¿Necesito hablar catalán o español?",
        answer: "No necesitas. Inglés funciona en zonas turísticas. Pero si hablas español o intentas aprender dos palabras en catalán, los locales son mucho más receptivos. El catalán es la lengua oficial pero casi todos hablan español.",
      },
      {
        question: "¿Cuántos días para ver Barcelona sin correr?",
        answer: "Mínimo 3 días: Sagrada Família + Park Güell + Barrio Gótico + paseo por barrios. 4-5 días si quieres un día de playa y tiempo relajado en cafés.",
      },
    ],
  },
  {
    slug: "londres",
    name: "Londres",
    country: "Reino Unido",
    emoji: "🎡",
    tagline: "Tradición e innovación en el Támesis",
    description: "Londres es una de las ciudades más dinámicas del mundo, donde la historia milenaria convive con la cultura pop, los museos gratuitos y una escena gastronómica sorprendente. Big Ben, el Palacio de Buckingham y el West End son imprescindibles.",
    highlights: [
      { icon: "🗓️", title: "Big Ben y Westminster", desc: "El símbolo de Londres junto al río Támesis y el Parlamento británico" },
      { icon: "🏰", title: "Torre de Londres", desc: "Mil años de historia, la Corona Joya y los famosos cuervos guardianes" },
      { icon: "🎭", title: "West End", desc: "Los mejores musicales del mundo en el corazón teatral de la ciudad" },
      { icon: "🎨", title: "Museos gratuitos", desc: "El British Museum, la National Gallery y el Victoria & Albert son de entrada libre" },
    ],
    bestSeason: "Junio a agosto / Septiembre",
    currency: "Libra esterlina (GBP)",
    language: "Inglés",
    avgBudget: "$150–300 USD/día",
    continent: "Europa",
    tips: [
      "El British Museum, la National Gallery, la Tate Modern, el Natural History Museum y el Victoria & Albert Museum son completamente gratuitos. Planificá al menos dos visitas en tu itinerario.",
      "Cruzar el Tower Bridge a pie es gratuito. La visita al interior con las pasarelas de vidrio cuesta £29.90 — vale si te gustan las alturas y la ingeniería victoriana.",
      "En el TKTS de Leicester Square hay entradas de West End a 20–50% de descuento el mismo día. Abrí a las 10am y la fila ya está formada; llegá 30 minutos antes.",
      "El Oyster Card o tu tarjeta de débito/crédito con contactless tiene un tope diario de gasto en el metro: después de cierto monto, los viajes adicionales son gratuitos. Aprovechalo.",
    ],
    guidePractical: "Londres es masiva pero extremadamente ordenada — el transporte es intuitivo y la mayoría de atracciones están bien señalizadas. La gran ventaja: los museos nacionales son completamente gratuitos. Dedica 2-3 días solo a museos si te interesa historia o arte. El Oyster Card es imprescindible: cúpralo en Heathrow, Victoria o King's Cross antes de cualquier cosa — el tope diario de £8.50 es crucial si planeas moverte mucho. El West End es caro (£40-80 por entrada) pero los descuentos en Leicester Square son reales si llegás antes de las 10am. Los mercados (Borough, Camden, Old Spitalfields) son experiencias culturales auténticas, mejores que las atracciones clásicas. Alojate en King's Cross/St Pancras (céntrico, acceso fácil) o Southwark (más bohemio, barrio de moda). Evita West End para alojarte — es caro y turístico sin ser más conveniente.",
    practicalInfo: [
      {
        category: "Transporte & Tarjetas",
        details: [
          "Oyster Card: Tope diario £8.50 (metro/bus/DLR)",
          "Contactless payment: Igual que Oyster, tope diario automático",
          "Viaje individual metro: £2.80-3.20 (muy caro sin Oyster)",
          "Travelcard semanal: £33 (7 días ilimitado)",
        ],
      },
      {
        category: "Museos & Atracciones",
        details: [
          "British Museum: Gratuito (donación sugerida £5)",
          "National Gallery: Gratuito (donación sugerida)",
          "Tower of London: £34.50 (reserva online)",
          "Big Ben/Houses of Parliament: Gratuito recorrido guiado (limitado)",
          "Tate Modern: Gratuito",
        ],
      },
      {
        category: "Gastronomía",
        details: [
          "Fish & Chips tradicional: £8-12",
          "Pub lunch (sándwich + pinta): £12-15",
          "Borough Market (comida de mercado): £6-12",
          "Restaurante turístico Westminster: £50-100 por persona — EVITAR",
        ],
      },
    ],
    faq: [
      {
        question: "¿Cuántos días necesito para ver Londres?",
        answer: "Mínimo 4-5 días: 2-3 para museos principales, 1 para atracciones clásicas (Tower, Big Ben, Westminster), 1 para barrios y mercados. 6+ si quieres West End y Notting Hill.",
      },
      {
        question: "¿Vale la pena subir a Big Ben?",
        answer: "No, Big Ben está en reparación y no se puede subir como turista. Puede verse bien desde afuera y desde el puente Westminster. Usa ese tiempo/dinero en museos o West End.",
      },
      {
        question: "¿Los museos gratuitos tienen donación obligatoria?",
        answer: "No. La donación es completamente voluntaria. Puedes entrar sin pagar. Pero si tienes presupuesto, la recomendación de £3-5 ayuda a mantener estos museos abiertos.",
      },
      {
        question: "¿Es verdad que comer en Londres es muy caro?",
        answer: "Sí, pero hay opciones. Borough Market es bueno (£6-12). Los pubs tienen buena relación calidad-precio. Los restaurantes turísticos cercanos a atracciones cobran el triple.",
      },
    ],
  },
  {
    slug: "nueva-york",
    name: "Nueva York",
    country: "Estados Unidos",
    emoji: "🗽",
    tagline: "La ciudad que nunca duerme",
    description: "Nueva York es la ciudad más icónica del mundo. Times Square, Central Park, la Estatua de la Libertad, Broadway y una gastronomía multicultural sin igual hacen de esta metrópolis un destino que te deja sin palabras en cada esquina.",
    highlights: [
      { icon: "🗽", title: "Estatua de la Libertad", desc: "El símbolo de libertad más reconocido del mundo, visitada desde Ellis Island" },
      { icon: "🌳", title: "Central Park", desc: "843 acres de naturaleza en el corazón de Manhattan, ideal para caminar o andar en bici" },
      { icon: "🎭", title: "Broadway", desc: "Los mejores espectáculos teatrales y musicales del planeta en Times Square" },
      { icon: "🌉", title: "Brooklyn Bridge", desc: "El puente histórico que conecta Manhattan con Brooklyn, ideal para cruzar a pie" },
    ],
    bestSeason: "Abril a junio / Septiembre a noviembre",
    currency: "Dólar (USD)",
    language: "Inglés",
    avgBudget: "$150–350 USD/día",
    continent: "América",
    tips: [
      "El Staten Island Ferry es completamente gratuito y ofrece las mejores vistas de la Estatua de la Libertad sin pagar el tour en barco. Sale cada 30 minutos desde Whitehall Terminal.",
      "En el TKTS de Times Square conseguís entradas de Broadway a 20–50% de descuento el mismo día. La fila empieza antes de que abra a las 10am, pero avanza rápido.",
      "El 'Top of the Rock' del Rockefeller Center tiene una ventaja sobre el Empire State: el Empire State aparece en el horizonte, dando una perspectiva única del skyline que no podés tener desde arriba del Empire.",
      "El Metro de Nueva York corre las 24 horas. El OMNY (pago contactless) tiene un tope semanal: después de 12 viajes, los adicionales son gratuitos por el resto de la semana.",
    ],
    guidePractical: "Nueva York no se recorre en grid lineal — es 5 boroughs que funcionan como ciudades diferentes. Manhattan es la mayoría de atracciones turísticas pero es cara y masificada. Brooklyn es donde viven los newyorquinos reales con arte, comida y energía auténtica. Lo crucial: el Staten Island Ferry es GRATUITO y ofrece las mejores vistas de la Estatua sin pagar turismo de isla. Central Park debe ser vivido, no cruzado — pasa 2-3 horas ahí sin prisas. Los museos (Met, MoMA, AMNH) son impresionantes pero costosos — muchos tienen 'paga lo que quieras' a ciertas horas (usualmente 7-9pm). Broadway es caro pero los descuentos en TKTS son reales (30-50% mismo día). Para comida, ignora Manhattan turístico — cruza a Queens (Flushing para chino, Astoria para griego) o Brooklyn. El presupuesto sube exponencialmente si viajas en taxi — usa metro (es seguro, sucio pero funciona 24/7). Alojate en Upper West Side (cerca Central Park, menos masificado) o Brooklyn.",
    practicalInfo: [
      {
        category: "Transporte & Movilidad",
        details: [
          "OMNY (contactless payment): Tope semanal $33 (después de 12 viajes, el resto gratis)",
          "MetroCard recargable: $33 por semana (ilimitado metro/bus)",
          "Viaje individual: $2.90 (mucho más caro que pase)",
          "Staten Island Ferry: GRATUITO, mejor vista Estatua Libertad",
        ],
      },
      {
        category: "Atracciones & Museos",
        details: [
          "Estatua de la Libertad + Ellis Island: $24.50 (ferry + isla, not internal)",
          "Empire State Building: $39 (observation deck)",
          "Top of the Rock: $41 (vista superior, skyline incluye Empire State)",
          "Met (Metropolitan Museum): $28 (suggested pero facultativo)",
          "MoMA: $25 (paga lo que quieras martes 7-9pm)",
        ],
      },
      {
        category: "Gastronomía & Barrios",
        details: [
          "Hot dog esquina: $2-3 (NYC food icónica)",
          "Pizza al taglio: $2-4 por slice (mejor Sbarro es turístico, busca locales)",
          "Flushing Queens (comida china): $5-10 comida completa",
          "Astoria Queens (griega): $8-15 calidad excepcional",
          "Restaurantes Manhattan turístico: $50-150 por persona — EVITAR",
        ],
      },
    ],
    faq: [
      {
        question: "¿Vale la pena subir a la Estatua de la Libertad?",
        answer: "Depende. La corona (subida) es espectacular pero muy concurrida. El ferry es gratis (Staten Island Ferry), pero si querés pisar la isla, necesitás pagar. Considera el costo vs tiempo en fila.",
      },
      {
        question: "¿Cuántos días necesito en Nueva York?",
        answer: "Mínimo 4-5 días: Central Park, 5th Ave, Times Square, un museo, Estatua, Brooklyn. 6-7 si quieres Queens para comida y menos estrés. 3 es muy poco.",
      },
      {
        question: "¿Es verdad que es peligroso de noche?",
        answer: "Manhattan turístico es seguro incluso de madrugada. Barrios específicos tienen problemas pero si usas sentido común y te alejas de áreas oscuras, estás bien.",
      },
      {
        question: "¿Debo tomar taxi o metro?",
        answer: "Metro siempre. Es sucio pero funciona 24/7 y cuesta $2.90. El taxi o Uber puede costar $20-50 por el mismo trayecto en tráfico.",
      },
      {
        question: "¿Qué barrios son más baratos para alojarse?",
        answer: "Upper West Side y Washington Heights (norte de Manhattan), Astoria/Flushing Queens, Park Slope Brooklyn. Evita Times Square y Midtown — son turísticos y caros.",
      },
    ],
  },
  {
    slug: "tokio",
    name: "Tokio",
    country: "Japón",
    emoji: "⛩️",
    tagline: "Tecnología, tradición y gastronomía japonesa",
    description: "Tokio es una experiencia de otro planeta: la convivencia perfecta entre templos milenarios y tecnología de vanguardia, la gastronomía más premiada del mundo y una cultura única que te cautiva desde el primer momento. Una ciudad que hay que vivir.",
    highlights: [
      { icon: "⛩️", title: "Senso-ji", desc: "El templo budista más antiguo de Tokio en el barrio histórico de Asakusa" },
      { icon: "🏙️", title: "Shibuya Crossing", desc: "El cruce peatonal más transitado del mundo, símbolo de la modernidad japonesa" },
      { icon: "🌸", title: "Parque Ueno", desc: "El lugar más famoso para ver los cerezos en flor durante el hanami" },
      { icon: "🍣", title: "Mercado Tsukiji", desc: "El paraíso del sushi y el marisco fresco con la mejor gastronomía callejera" },
    ],
    bestSeason: "Marzo a mayo (cerezos) / Octubre a noviembre",
    currency: "Yen (JPY) — aprox. $0.007 USD",
    language: "Japonés",
    avgBudget: "$100–200 USD/día",
    continent: "Asia",
    tips: [
      "El IC Card (Suica o Pasmo) es la tarjeta recargable para todo el transporte público de Tokio. Funcionan también en máquinas expendedoras y en algunos konbini. Mucho más cómodo que pagar cada viaje.",
      "Los konbini (7-Eleven, FamilyMart, Lawson) tienen onigiri, bento y café de calidad sorprendente. Desayunar en un convenience store japonés por ¥500 es una experiencia cultural obligatoria.",
      "La línea Yamanote (circular verde) conecta todas las estaciones turísticas principales de Tokio: Shibuya, Shinjuku, Harajuku, Akihabara, Ueno, Ikebukuro. Dominarla es dominar la ciudad.",
      "Durante la temporada de cerezos (hanami, late marzo – principios de abril) los precios de hotel suben 50–100%. Reservá con 3+ meses de anticipación si es tu objetivo principal.",
    ],
    guidePractical: "Tokio requiere una estrategia porque el caos es su naturaleza. Pero una vez entiendes el flujo de la ciudad, es casi imposible estar realmente perdido. La Línea Yamanote verde (circular, 23 estaciones principales) es tu mejor amiga — memoriza dónde están los barrios y dominarás la ciudad. Cada estación es una experiencia diferente: Asakusa es histórica y templos antiguos, Shinjuku es modernidad pura con 3 millones de personas/día cruzando la estación, Harajuku es modas extremas y adolescentes, Shibuya es vida nocturna y tiendas de lujo, Yanaka es Tokio de 1950 sin turistas. NO intentes verlo todo en 5 días — es imposible. Elige 3-4 barrios y vívelos profundamente. Suica Card es obligatoria desde el primer minuto: cúprala en la estación Narita antes de salir del aeropuerto, funciona en metro, trenes locales y hasta máquinas expendedoras. Google Maps en Tokio es extraordinariamente preciso — confía ciegamente en él, incluso en estaciones subterráneas complejas. Los convenience stores (konbini) son tu mejor aliado: onigiri de salmón, ramen instantáneo, café caliente, todo a ¥300-500. No necesitas gastar dinero en restaurantes sofisticados a menos que busques experiencia gastronómica específica. La gastronomía callejera (yakitori, takoyaki, ramen en callejuelas) es el mejor nivel de comida en Tokio. Alójate cerca de una estación Yamanote — 200m de distancia es la diferencia entre accesible y laberinto. La temporada de cerezos (late marzo-early abril) es mágica pero los precios se disparan 50-100% — reserva con 3+ meses si es objetivo.",
    practicalInfo: [
      {
        category: "Transporte & Tarjetas",
        details: [
          "Suica/Pasmo Card: ¥2000 inicial (¥1500 disponible, ¥500 depósito)",
          "Pase 24/48/72hs: ¥900/1600/2250 (metro + algunos trenes)",
          "Metro individual: ¥170-310 según distancia",
          "Línea Yamanote (circular): Conecta todo, conocerla = conocer Tokio",
        ],
      },
      {
        category: "Gastronomía & Precios",
        details: [
          "Ramen en local sin nombre: ¥800-1200 ($5-8 USD) — el mejor ramen",
          "Onigiri konbini: ¥120-180 ($0.80-1.20 USD) — comida rápida auténtica",
          "Sushi fresco Tsukiji: ¥1500-3000 ($10-20 USD) — mejor que cualquier sushi Occidente",
          "Tempura en puesto callejero: ¥200-400 ($1.30-2.70 USD) por pieza",
        ],
      },
      {
        category: "Barrios Clave",
        details: [
          "Asakusa: Templo Senso-ji, Nakamise, cultura histórica — START aquí",
          "Shibuya: Cruce peatonal, tiendas, vida nocturna — imperdible DE NOCHE",
          "Shinjuku: Golden Gai, Tokyo Govt gratis, modernidad pura — caos organizado",
          "Harajuku: Takeshita Street, modaextrema, Meiji Shrine — contraste absoluto",
          "Yanaka: Tokio de 1950, gatos, calles sin turistas — respiradero cultural",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es verdad que el metro de Tokio es complicado?",
        answer: "Parece complicado pero no lo es. Hay 13 líneas pero Google Maps te dice exactamente qué línea, qué andén, qué estación bajarse. No necesitás entender el sistema — solo seguir instrucciones.",
      },
      {
        question: "¿Necesito hablar japonés?",
        answer: "No. Inglés funciona en zonas turísticas, estaciones principales y hoteles. Pero si aprendes 5 palabras (arigatou, sumimasen), los japoneses son infinitamente más receptivos y amables.",
      },
      {
        question: "¿Es verdad que es muy caro comer en Tokio?",
        answer: "El mejor ramen cuesta ¥800 ($5 USD). El mejor sushi en el mercado cuesta ¥2000 ($13 USD). Tokio es barato si comes donde comen los locales, no en restaurantes turísticos.",
      },
      {
        question: "¿Cuántos días necesito en Tokio?",
        answer: "Mínimo 5-6 días: 2-3 para aclimatarte y explorar un barrio, 3-4 para otros barrios. 7+ si quieres Japón más allá de Tokio (Kyoto, Osaka, Hakone).",
      },
      {
        question: "¿Vale la pena hacer un day trip fuera de Tokio?",
        answer: "Absolutamente. Nikko (2 horas) para waterfalls. Hakone (1.5 horas) para Mount Fuji views. Kamakura (1 hora) para templos de montaña. Todos son viables como day trips.",
      },
    ],
  },
  {
    slug: "cancun",
    name: "Cancún",
    country: "México",
    emoji: "🏝️",
    tagline: "Playas turquesa y ruinas mayas",
    description: "Cancún combina algunas de las playas más bellas del mundo con una herencia maya impresionante. El Caribe mexicano ofrece aguas turquesa, snorkel en la segunda barrera de coral más grande del mundo y cenotes únicos en el planeta.",
    highlights: [
      { icon: "🏖️", title: "Zona Hotelera", desc: "21 km de playas de arena blanca y aguas turquesa del Caribe mexicano" },
      { icon: "🏛️", title: "Chichén Itzá", desc: "Una de las 7 Maravillas del Mundo Moderno, a pocas horas de Cancún" },
      { icon: "🤿", title: "Isla Mujeres", desc: "La isla más bella del Caribe mexicano con snorkel en arrecifes de coral" },
      { icon: "💧", title: "Cenotes", desc: "Lagos subterráneos sagrados para los mayas, únicos en el mundo" },
    ],
    bestSeason: "Diciembre a abril",
    currency: "Peso mexicano (MXN)",
    language: "Español",
    avgBudget: "$80–180 USD/día",
    continent: "América",
    tips: [
      "El autobús ADO desde el aeropuerto a la Zona Hotelera cuesta $8 USD vs $60–80 de taxi. Sale cada hora, tarda 30 minutos y es completamente seguro. No hay razón para tomar taxi.",
      "Los cenotes más fotogénicos no son los más famosos: el Cenote Zací en Valladolid y los de San Antonio Muul son igualmente bellos, casi vacíos y cobran la mitad.",
      "Para ir a Chichén Itzá de manera independiente, tomá el ADO desde la terminal de Cancún (2.5 hs, $15). No es necesario el tour organizado — la visita libre es mejor.",
      "La zona de Bacalar (3.5 hs al sur) tiene una laguna de 7 colores menos conocida que Cancún pero más impresionante. Si tenés días extra, vale absolutamente el viaje.",
    ],
    guidePractical: "Cancún es la puerta de entrada a la Riviera Maya pero no es el destino en sí — es un hub turístico donde todos viajan en tránsito. La Zona Hotelera es turística extremo con precios inflados. La verdadera Riviera Maya está al sur: Playa del Carmen (45 min), Tulum (2 horas), Bacalar (3.5 horas). Si solo tienes 3 días, la Zona Hotelera vale una noche por la playa, luego vete. Si tienes 5+, baja a Playa del Carmen o Tulum para mejor vida local y playas menos masificadas. El autobús ADO es la forma inteligente de moverse: desde Cancún a Playa cuesta 100 MXN ($5 USD), vs Uber/taxi 200+ MXN. Los cenotes (lagos subterráneos sagrados mayas) son la verdadera gema — están por toda la riviera. El Cenote Zací en Valladolid o los de San Antonio Muul son igualmente hermosos que los masificados 'cenotes Instagram' pero tienen 1/5 de la gente. Chichén Itzá es impresionante pero caro en tours organizados — toma ADO (2.5 hs, $15 USD), explora libremente, come donde comen los locales (no turístico). La Isla Mujeres es una excursión de día — ferry desde Puerto Juárez (no desde la Zona Hotelera turística) cuesta $5 USD vs $30 de tours. La seguridad es buena en zonas turísticas pero evita Cancún ciudad de noche (no es zona turística, es donde viven los trabajadores de la industria). Alójate en Playa del Carmen o Tulum si buscas experiencia auténtica.",
    practicalInfo: [
      {
        category: "Transporte & Movilidad",
        details: [
          "ADO (autobús): La forma inteligente, directo a pueblos cercanos — $5-20 USD según distancia",
          "Taxi/Uber Zona Hotelera: Muy caro (200-400 MXN = $12-24 USD)",
          "Ferry Isla Mujeres: Puerto Juárez $5 USD (30 min, local) vs Tours $30 USD",
          "Rentar coche: Barato comparado con taxi/uber si planeas múltiples excursiones",
          "Autobús colectivo ('combi'): Muy barato pero desordenado, menos turista-friendly"
        ]
      },
      {
        category: "Cenotes & Atracciones Mayas",
        details: [
          "Chichén Itzá: 400 MXN entrada, muy turístico — ve temprano (8am), come fuera entrada",
          "Cenote Zací (Valladolid): 100 MXN entrada, hermoso, menos gente que masificados",
          "San Antonio Muul cenotes: 200 MXN, muy bonito, vibes locales, poco turismo",
          "Xcaret: 4000+ MXN (turístico, caro, muchos parques similares más baratos)",
          "Tulum ruinas: 150 MXN entrada, playa hermosa al lado, acceso directo caminando"
        ]
      },
      {
        category: "Playas & Zona Hotelera",
        details: [
          "Playa Delfines (Cancún): Pública, libre, hermosa, menos turística que Balneario",
          "Isla Mujeres: Playas tranquilas, snorkel, ferry local $5 USD vs tours $30 USD",
          "Playa del Carmen: Centro, bares, restaurantes, vida del Caribe sin masas de Cancún",
          "Tulum: Ruinas sobre playa, glamping, yoga, el lado espiritual de Riviera",
          "Bacalar: 3.5 hs sur de Cancún, laguna 7 colores, tranquilo, menos conocido"
        ]
      },
      {
        category: "Gastronomía & Precios",
        details: [
          "Cochinita Pibil (Yucatán): 150-200 MXN en restaurante local, auténtico",
          "Ceviche en mercado: 80-120 MXN, muy fresco, donde comen locales",
          "Taco de carne asada: 30-50 MXN cada uno, street food icónico",
          "Restaurante Zona Hotelera: 400-800 MXN por plato — EVITAR",
          "Mercadería/supermercado: Soriana o Walmart para provisiones económicas"
        ]
      },
      {
        category: "Snorkel & Actividades Acuáticas",
        details: [
          "Tour snorkel Isla Mujeres (local): $40-50 USD con operador local",
          "Tour snorkel de agencia turística: $80-120 USD — sobrepago por lo mismo",
          "Cenote snorkel: 250-400 MXN acceso + guía local opcional",
          "Catamarán puesta de sol: $50 USD, romántico, buena relación precio-experiencia",
          "Buceo: PADI certification + dives desde $400 MXN, buceo es más barato en Riviera"
        ]
      }
    ],
    faq: [
      {
        question: "¿Vale la pena quedarse en la Zona Hotelera de Cancún?",
        answer: "Solo si buscas resort de lujo todo incluido. Para presupuesto normal, es turístico extremo y caro. Mejor: pasa 1-2 noches por la playa, luego baja a Playa del Carmen o Tulum donde hay más vida local y los precios bajan 40%."
      },
      {
        question: "¿Cuánto cuesta realmente un viaje a la Riviera Maya?",
        answer: "Presupuesto mochilero: $30-50/día (ADO buses, cenotes, comida callejera). Clase media: $80-120/día. Lujo: $200+. La diferencia es principalmente alojamiento y tours — transporte y comida pueden ser baratos si sabes dónde ir."
      },
      {
        question: "¿Es seguro el sur de la Riviera (Bacalar, Tulum) de noche?",
        answer: "Sí, es seguro. Los pueblos son pequeños y turísticos. La regla: evita las carreteras solitas de noche, quédate en pueblos iluminados. Los bares y restaurantes funcionan normal de noche sin riesgo."
      },
      {
        question: "¿Necesito tour organizado para Chichén Itzá?",
        answer: "No. Toma ADO desde Cancún (2.5 hs, $15 USD), explora libremente, cómete un cochinita pibil en restaurante local. Los tours cobran 3-4x más por lo mismo. Tienes plena libertad en el sitio arqueológico."
      },
      {
        question: "¿Cuántos días necesito en Riviera Maya?",
        answer: "Mínimo 5-6 días: 1-2 playas (Isla Mujeres, Playa del Carmen), 1 Chichén Itzá, 1-2 cenotes, 1 día relajado. 7+ si quieres Bacalar y vibes más lentamente."
      },
      {
        question: "¿Qué es mejor: Playa del Carmen o Tulum?",
        answer: "Playa del Carmen tiene más vida nocturna y bares, más vibrante. Tulum es más espiritual/bohemio, playas junto a ruinas, mejor para yoga/wellness. Ambos están 45 min uno del otro — fácil visitarlos."
      }
    ]
  },
  {
    slug: "miami",
    name: "Miami",
    country: "Estados Unidos",
    emoji: "🌴",
    tagline: "Sol, playa y vida nocturna del Caribe",
    description: "Miami es la ciudad más latina de Estados Unidos: playas paradisíacas, arquitectura Art Deco, gastronomía de primer nivel y una vida nocturna única. South Beach, Wynwood y Little Havana hacen de Miami un destino vibrante y multicultural.",
    highlights: [
      { icon: "🏖️", title: "South Beach", desc: "La playa más famosa de Florida con arquitectura Art Deco y ambiente cosmopolita" },
      { icon: "🎨", title: "Wynwood Walls", desc: "El distrito de arte urbano más famoso del mundo con murales de artistas internacionales" },
      { icon: "🇨🇺", title: "Little Havana", desc: "El barrio cubano de Miami con la Calle Ocho, dominó y el mejor café cubano" },
      { icon: "🐬", title: "Everglades", desc: "El único ecosistema subtropical de Norteamérica, con caimanes y vida silvestre única" },
    ],
    bestSeason: "Noviembre a abril",
    currency: "Dólar (USD)",
    language: "Inglés · español muy extendido",
    avgBudget: "$120–250 USD/día",
    continent: "América",
    tips: [
      "Los murales más importantes de Wynwood están en las calles aledañas al recinto pago de Wynwood Walls, no adentro. El recorrido exterior es completamente gratuito y más extenso.",
      "Las happy hours en los bares de Brickell y Midtown arrancan a las 3–4pm y tienen tragos premium desde $7. En South Beach el mismo trago cuesta $18–22.",
      "La ruta A1A al norte de South Beach (Hollywood, Fort Lauderdale) tiene playas igual de hermosas, sin la masificación y con estacionamiento gratuito.",
      "El Metrorail conecta el aeropuerto con Brickell en 15 minutos por $2.25 con tarjeta EASY. El taxi o Uber cuesta $30–45 según el tráfico.",
    ],
    guidePractical: "Miami es la puerta de entrada a América Latina desde EE.UU.: es español hablante, caribeño en vibes pero estadounidense en infraestructura. La ciudad se divide en zonas claras: South Beach (playas, Art Deco, turismo), Wynwood (street art, galerías, hipster), Little Havana (cultura cubana auténtica), Brickell (financiero, vida nocturna sofisticada), Coconut Grove (bohemio, mercados). No cometas el error de quedarte solo en South Beach — es turístico extremo con precios inflados. Los murales de Wynwood son espectaculares pero están en calles aledañas FUERA del recinto pago — el tour gratuito es mejor que el pago. Little Havana es donde vive la verdadera Miami: domino en parques, cafecito cubano a $1-2 USD, la calle Ocho hirviendo de vida. Las happy hours son la mejor forma de ahorrar en Miami — arrancan a las 3-4pm con tragos premium a $7 USD vs $18+ de noche. El Metrorail conecta el aeropuerto con Brickell en 15 minutos por $2.25, es moderno y seguro. Miami es cara pero hay formas inteligentes de viajarlo: come donde comen los cubanos (Little Havana), toma las happy hours, sé frugal con alojamiento (Airbnb fuera de South Beach es 50% más barato). La vida nocturna es legendaria pero los precios de nightclub son astronómicos — mejor: bares de calle, rooftops, cafés cubanos. Para playa sin masificación, norte hacia Hollywood o Fort Lauderdale (A1A) tiene arenas igual de hermosas y estacionamiento gratuito.",
    practicalInfo: [
      {
        category: "Transporte & Metrorail",
        details: [
          "Metrorail (tren): $2.25 desde aeropuerto a Brickell (15 min), muy eficiente",
          "Metromover: Gratuito en Downtown, bueno para orientarse",
          "Taxi/Uber desde aeropuerto: $30-45 vs Metrorail $2.25 — no hay comparación",
          "Coche alquiler: Necesario para Everglades/Keys, sino inútil en Miami ciudad",
          "Bicicleta (bikeshare): $5/día con estaciones por toda la ciudad"
        ]
      },
      {
        category: "Wynwood, Little Havana & Barrios",
        details: [
          "Wynwood Walls (recinto pago): $15 entrada, pero murales libres FUERA en calles aledañas",
          "Little Havana: Gratuito (Calle Ocho, parques con domino, arte callejero)",
          "Cafecito cubano: $1-2 USD en cualquier ventanilla de Little Havana",
          "Viragos (dominó): Parque pública, ver juegos, aprender juego tradicional",
          "Calle Ocho Festival (marzo): Carnaval de calle, música, comida cubana"
        ]
      },
      {
        category: "Playas & Outdoor",
        details: [
          "South Beach: Famosa, turística, cara, arquitectura Art Deco bonita",
          "Playa pública Lummus: Paralela a South Beach, libre, igual de hermosa",
          "Hollywood Beach: 30 km norte, misma arena, menos gente, estacionamiento gratuito",
          "Everglades: Tour con airboat $50-80 USD, ver caimanes, manatís, vida silvestre",
          "Key West (day trip): 4 hs en coche, pueblo al final de los Keys, vibes Caribe"
        ]
      },
      {
        category: "Gastronomía & Happy Hours",
        details: [
          "Cafecito cubano: $1-2 USD (doble espresso con azúcar), energizante",
          "Comida cubana (La Carreta): Ropa vieja, picadillo, platano — 15-25 USD plato",
          "Ceviche en Little Havana: 10-15 USD, fresco, cubano-peruano",
          "Happy hour (3-6pm Brickell/Midtown): Tragos premium $7 USD, ceviche gratis",
          "South Beach turístico: 25-50 USD por plato — EVITAR"
        ]
      },
      {
        category: "Vida Nocturna & Entretenimiento",
        details: [
          "Rooftop bars (Brickell): $8-15 tragos, vistas del Downtown, menos pretencioso",
          "Nightclubs (South Beach): Entrada $30-50, tragos $20+, muy caro",
          "Vieja Havana (Little Havana): Bares cubanos auténticos, música en vivo, $5-8 tragos",
          "Wynwood Art Walks: Primer viernes de mes, galerías, arte, performance gratuito",
          "Museos: Pérez Art Museum, Design District — cultura sin tourismos"
        ]
      }
    ],
    faq: [
      {
        question: "¿Es Miami cara para viajeros con presupuesto?",
        answer: "South Beach sí, muy cara. Pero Miami tiene zonas baratas: Little Havana, Allapattah, Wynwood. Come donde comen cubanos ($5-15 por plato), toma happy hours (3-6pm, tragos $7), alójate fuera de South Beach. Presupuesto: $60-100 USD/día es posible."
      },
      {
        question: "¿Vale la pena pasar días en South Beach?",
        answer: "1 día máximo para ver Art Deco y tomar fotos. Es turístico extremo con precios inflados. Mejor: pasa el tiempo en Little Havana (cultura auténtica), Wynwood (arte), Brickell (vida nocturna sofisticada sin precios de nightclub)."
      },
      {
        question: "¿Debo hacer tour a los Everglades?",
        answer: "Sí si te gustan animales/naturaleza. Los airboat tours son $50-80 USD, ve temprano (8-10am es mejor luz). Puedes ir por tu cuenta en coche alquilado a Shark Valley (entrada $30 en coche, bici $9 alquiler)."
      },
      {
        question: "¿Es seguro Little Havana de noche?",
        answer: "Sí, es seguro. Es barrio local donde viven cubanos, no área de crimen. Los bares están activos hasta tarde. Usa sentido común como en cualquier ciudad — no es peligroso de noche."
      },
      {
        question: "¿Cuántos días necesito en Miami?",
        answer: "3-4 días: 1 para South Beach + Art Deco, 1 Little Havana + Wynwood, 1 playas (Hollywood Beach), 1 Everglades o Key West day trip si tienes tiempo. 5+ si quieres vida nocturna relajada."
      }
    ]
  },
  {
    slug: "rio-de-janeiro",
    name: "Río de Janeiro",
    country: "Brasil",
    emoji: "🏖️",
    tagline: "La ciudad maravillosa entre cerros y mar",
    description: "Río de Janeiro es una de las ciudades más bellas del mundo, con el Cristo Redentor mirando desde lo alto, las playas de Copacabana e Ipanema, el Carnaval más famoso del planeta y una energía única que te conquista desde el primer momento.",
    highlights: [
      { icon: "✝️", title: "Cristo Redentor", desc: "Una de las 7 Maravillas del Mundo Moderno con vistas de 360° sobre la ciudad" },
      { icon: "🏖️", title: "Copacabana e Ipanema", desc: "Las playas más famosas de Sudamérica, vibrantes de día y de noche" },
      { icon: "🚡", title: "Pan de Azúcar", desc: "El cerro icónico de Río con teleférico y vistas espectaculares de la bahía" },
      { icon: "🎭", title: "Santa Teresa", desc: "El barrio bohemio y artístico de Río con bares, galerías y el bondinho histórico" },
    ],
    bestSeason: "Marzo a junio / Septiembre a noviembre",
    currency: "Real brasileño (BRL)",
    language: "Portugués",
    avgBudget: "$80–160 USD/día",
    continent: "América",
    tips: [
      "El Pan de Azúcar en días nublados puede tener visibilidad cero desde el mirador. Consultá el estado del cielo esa mañana antes de subir — es uno de los mayores errores del viajero.",
      "En Ipanema y Copacabana, los 'postos' numeran las zonas de playa: el Posto 9 en Ipanema es el favorito de los cariocas jóvenes; el Posto 6 en Copa, más familiar y tranquilo.",
      "Las caipirinhas más auténticas y económicas están en los bares de Santa Teresa y Lapa, no en Ipanema. La diferencia de precio es de hasta 3x por el mismo trago.",
      "El Cristo Redentor tiene acceso en tren cremallera (Trem do Corcovado, $20 USD) o en van desde el Largo do Machado. El tren es más pintoresco; la van llega más lejos y es más cara.",
    ],
  },
  {
    slug: "buenos-aires",
    name: "Buenos Aires",
    country: "Argentina",
    emoji: "🥩",
    tagline: "El París de Sudamérica",
    description: "Buenos Aires es una ciudad apasionada y cosmopolita que combina la arquitectura europea con la cultura latinoamericana más rica. El tango, la gastronomía, los barrios con personalidad y una vida cultural sin igual hacen de esta ciudad un destino único.",
    highlights: [
      { icon: "💃", title: "San Telmo y el tango", desc: "El barrio más antiguo de Buenos Aires, cuna del tango con milongas y ferias de antigüedades" },
      { icon: "🎨", title: "La Boca y el Caminito", desc: "El colorido barrio portuario con casas de chapa pintadas y el estadio de Boca Juniors" },
      { icon: "🌿", title: "Palermo", desc: "El barrio más moderno con parques, restaurantes gourmet y la mejor noche porteña" },
      { icon: "🥩", title: "Asado argentino", desc: "La experiencia gastronómica más auténtica de Argentina en las mejores parrillas del mundo" },
    ],
    bestSeason: "Marzo a mayo / Septiembre a noviembre",
    currency: "Peso argentino (ARS)",
    language: "Español",
    avgBudget: "$60–130 USD/día",
    continent: "América",
    tips: [
      "El tipo de cambio informal (dólar blue) suele duplicar el oficial. Llevar dólares en efectivo para cambiar en casas de cambio habilitadas es la forma más común de optimizar el presupuesto como viajero extranjero.",
      "Las milongas más auténticas son el Salón Canning, La Viruta y el Club Gricel — no los shows para turistas de La Boca. El precio de entrada suele incluir clase inicial.",
      "El subte porteño (metro) requiere la tarjeta SUBE para pagar: la cargás en boletería o kioscosofficial. Sin tarjeta, no podés entrar. Sacátela el primer día.",
      "Los restaurantes porteños cobran 'cubierto': un cargo de $2–5 USD por comensal que no es propina sino el servicio de mesa. Es completamente normal e incluye el pan.",
    ],
    guidePractical: "Buenos Aires se siente como una ciudad europea tropical — tiene una energía que ninguna otra ciudad latinoamericana posee. La clave es no tratar de 'hacer todo' sino elegir ritmo lento, pasear sin destino y dejarse llevar por los barrios. San Telmo es histórico y tanguero, La Boca es colorido pero turístico (20 minutos es suficiente), Palermo es moderno con parques y vida bohemia, Recoleta es elegante, Almagro tiene mejor relación calidad-precio para viajeros. El tipo de cambio es crucial: el 'dólar blue' (cambio paralelo, ilegal pero normal) duplica el oficial. Llevar dólares en efectivo y cambiar en casas de cambio habilitadas es como viven la mayoría de porteños y turistas inteligentes. El subte requiere tarjeta SUBE — cúprala el primer día en cualquier kioscorro. Los tours de milongas turísticas (La Boca) son completamente innecesarios — el Salón Canning, La Viruta o Club Gricel tienen milongas auténticas donde comen locales, muchas incluyen clase inicial de 30 minutos. El tango no es para turistas, es una práctica viva de porteños. La gastronomía es obsesiva: toma choripanes en la calle, asados en parrillas de barrio (mucho mejor que turísticas), alfajores, pizza porteña. No hagas un steakhouse famoso de $80 por persona — los mejores asados están en parrillas de barrio por $15. El Bife de Chorizo, choripán, milanesa — son lo que come un porteño real. Alójate en Almagro o San Telmo para balance entre vida local y acceso turístico.",
    practicalInfo: [
      {
        category: "Transporte & Tarjeta SUBE",
        details: [
          "Tarjeta SUBE: $200 ARS (~$0.50 USD) compra + carga, fundamental",
          "Metro/subte: $0.38 USD por viaje con SUBE (el más barato de América Latina)",
          "Colectivo (autobús): $0.38 USD con SUBE, llega a todos lados",
          "Taxi/Uber: Caro comparado con metro — usar solo late night o maletas grandes",
          "Remis (taxi por teléfono): Más caro pero más seguro que callejero"
        ]
      },
      {
        category: "Gastronomía & Cambio",
        details: [
          "Dólar blue (cambio paralelo): 1000-1200 ARS por USD (vs oficial 900 ARS) — cambiar en casa de cambio",
          "Choripán en kiosco: 500 ARS ($0.40 USD) — comida callejera icónica",
          "Milanesa + puré: 800 ARS ($0.70 USD) en parrilla de barrio",
          "Bife de Chorizo: 1500-2000 ARS ($1.20-1.60 USD) en parrilla local",
          "Carne en asado casero: Invitación de local vale más que cualquier restaurante",
          "Café + medialunas: 300-400 ARS ($0.25-0.35 USD) en bar porteño"
        ]
      },
      {
        category: "Milongas & Tango",
        details: [
          "Salón Canning: La milonga más emblemática, muchas noches, entrada ~200 ARS ($0.17 USD)",
          "La Viruta: Miércoles y viernes, clase + baile, 200-300 ARS",
          "Club Gricel: Lunes-sábados, muy auténtica, 200-400 ARS",
          "Tour tango turístico (La Boca): $80-120 USD — EVITAR, nada auténtico",
          "Tours privados DJ/guía: $50-80 USD para pequeño grupo, mejor experiencia"
        ]
      },
      {
        category: "Barrios & Alojamiento",
        details: [
          "San Telmo: Histórico, buenas parillas, milongas locales, 1200-1800 ARS/noche",
          "Almagro: Mejor precio, más local, menos turístico, 1000-1500 ARS/noche",
          "Palermo: Vida moderna, parques, hipster, 1500-2500 ARS/noche",
          "La Boca: Turístico extremo, fotos bonitas, vivir aquí es innecesario",
          "Recoleta: Elegante y cara, 2000-3500 ARS/noche"
        ]
      },
      {
        category: "Compras & Entretenimiento",
        details: [
          "Feria Domenical San Telmo: Domingos, artesanía, antiques, ambiente local",
          "MALBA (museo de arte): $500 ARS, colección excepcional de Frida Kahlo y Xul Solar",
          "Cementerio de la Recoleta: Gratuito, historias de personajes célebres (Evita, Carlos Gardel)",
          "Bookstores: Ateneo Grand Splendid es la más linda de América Latina",
          "Heladerías: Freddo o Grido, helado italiano creemoso (200-400 ARS por cono)"
        ]
      }
    ],
    faq: [
      {
        question: "¿Cómo cambio dinero sin que me estafen?",
        answer: "Solo cambios en casa de cambio formal (búscalos en Google Maps, están por todos lados). El dólar blue paga 1000-1200 ARS por USD (vs oficial 900 ARS). Evita cambios callejeros y cambistas de hotel — te roban. Llevar dólares en efectivo es la forma más inteligente."
      },
      {
        question: "¿Es segura Buenos Aires de noche?",
        answer: "Los barrios turísticos (San Telmo, Recoleta, Palermo) son seguros incluso de madrugada. Evita Flores y Acoyte de noche. Usa sentido común: no andes solo en zonas vacías, evita mostrar valuables. La mayoría de viajeros pasean cómodamente de noche."
      },
      {
        question: "¿Cuántos días necesito en Buenos Aires?",
        answer: "Mínimo 4-5 días: 1 para barrios principales (San Telmo, La Boca, Recoleta rápido), 1 para museos (MALBA, Evita), 1-2 para milongas, 1-2 para simplemente vivir en cafés porteños. 6+ días mejora infinitamente la experiencia."
      },
      {
        question: "¿Vale la pena el tango show turístico?",
        answer: "No. Cuesta $80-120 USD y es teatro para turistas, no tango real. En cambio, ve a una milonga local (¥200 ARS = $0.17 USD), siéntate en la barra a tomar un café, observa cómo bailan locales. Es la experiencia verdadera."
      },
      {
        question: "¿Dónde como el mejor asado de Buenos Aires?",
        answer: "No es en un steakhouse famoso. Busca parrillas de barrio en Almagro o San Telmo donde solo comen locales. Pregunta en tu hostal dónde van. Un Bife de Chorizo excelente cuesta 1500-2000 ARS ($1.20-1.60 USD), no $40."
      },
      {
        question: "¿Necesito hablar español para viajar?",
        answer: "Inglés funciona en zonas turísticas. Pero si hablas español (aunque sea básico), la experiencia mejora 100x. Los porteños son más receptivos con viajeros que intentan hablar español. Vale la pena practicar frases básicas."
      }
    ]
  },
  {
    slug: "cartagena",
    name: "Cartagena",
    country: "Colombia",
    emoji: "🏰",
    tagline: "La ciudad amurallada del Caribe colombiano",
    description: "Cartagena de Indias es una de las ciudades más hermosas y mejor conservadas de América Latina. Su ciudad amurallada colonial, las islas del Rosario, los colores vibrantes de Getsemaní y el Caribe colombiano la convierten en un destino de ensueño.",
    highlights: [
      { icon: "🏰", title: "Ciudad amurallada", desc: "El centro histórico declarado Patrimonio de la Humanidad por la UNESCO" },
      { icon: "🏝️", title: "Islas del Rosario", desc: "Archipiélago de aguas cristalinas a 45 minutos de Cartagena, ideal para snorkel" },
      { icon: "🎨", title: "Getsemaní", desc: "El barrio bohemio y colorido con el mejor street art, coctelería y vida nocturna" },
      { icon: "🌅", title: "Castillo de San Felipe", desc: "La fortaleza colonial más grande de América, con impresionantes vistas sobre la bahía" },
    ],
    bestSeason: "Diciembre a abril",
    currency: "Peso colombiano (COP)",
    language: "Español",
    avgBudget: "$60–130 USD/día",
    continent: "América",
    tips: [
      "Alojate dentro de la ciudad amurallada: la zona histórica de Cartagena se recorre completamente a pie y vivir dentro de las murallas es una experiencia diferente a quedarse en Bocagrande.",
      "Las lanchas a las Islas del Rosario salen del Muelle de los Pegasos. Negociá directamente con los lancheros el precio de ida y vuelta: el ahorro frente a los tours organizados puede ser del 40%.",
      "En Getsemaní encontrás artesanías a precios locales (no turísticos) y la mejor gastronomía económica de Cartagena. También tiene el mejor street art de la ciudad.",
      "La temporada alta (diciembre–abril) es más seca pero los precios de hotel se duplican. Mayo y junio ofrecen el mejor balance: menos lluvia de lo que parece y mucho menos turismo.",
    ],
  },
  {
    slug: "lima",
    name: "Lima",
    country: "Perú",
    emoji: "🍽️",
    tagline: "La capital gastronómica de Latinoamérica",
    description: "Lima sorprende a todos los que la visitan. La capital peruana tiene algunos de los mejores restaurantes del mundo, un centro histórico colonial impresionante y es la puerta de entrada perfecta para explorar Machu Picchu y el altiplano andino.",
    highlights: [
      { icon: "🍽️", title: "Gastronomía de clase mundial", desc: "Lima tiene más restaurantes en los 50 Mejores del Mundo que cualquier otra ciudad latinoamericana" },
      { icon: "🏛️", title: "Centro Histórico", desc: "El centro colonial declarado Patrimonio de la Humanidad, con la Plaza Mayor y el Palacio de Gobierno" },
      { icon: "🌊", title: "Miraflores y el malecón", desc: "El barrio más moderno de Lima con acantilados sobre el Pacífico y gastronomía de primer nivel" },
      { icon: "🏺", title: "Museo Larco", desc: "La colección de arte precolombino más importante del mundo en una hacienda del siglo XVIII" },
    ],
    bestSeason: "Enero a marzo (verano) / Todo el año es visitable",
    currency: "Sol peruano (PEN)",
    language: "Español",
    avgBudget: "$60–120 USD/día",
    continent: "América",
    tips: [
      "El Parque Kennedy en Miraflores tiene una colonia de gatos comunitarios que se alimentan diariamente. Una curiosidad gratuita y completamente inesperada que encanta a todos los viajeros.",
      "Miraflores y Barranco son los barrios más seguros para alojarse. El Centro Histórico es impresionante de día pero no se recomienda para moverse de noche.",
      "Central, Maido y Astrid & Gastón están entre los 50 Mejores Restaurantes del Mundo. Si es tu objetivo, reservá con 2–3 meses de anticipación — son muy difíciles de conseguir sin reserva.",
      "El bus Metropolitano conecta el Centro Histórico con Miraflores por S/0.50 (aproximadamente $0.13 USD). Es lento pero seguro, y te muestra Lima como la vive un limeño.",
    ],
  },
  {
    slug: "cusco",
    name: "Cusco",
    country: "Perú",
    emoji: "🏔️",
    tagline: "El ombligo del mundo inca",
    description: "Cusco fue la capital del Imperio Inca y hoy es la puerta de entrada a Machu Picchu. La ciudad combina arquitectura inca con iglesias coloniales españolas, mercados de artesanía y una oferta gastronómica andina que sorprende a cualquier paladar.",
    highlights: [
      { icon: "🏛️", title: "Machu Picchu", desc: "Una de las 7 Maravillas del Mundo Moderno, la ciudadela inca entre las nubes" },
      { icon: "🌞", title: "Sacsayhuamán", desc: "La imponente fortaleza inca sobre Cusco con vistas panorámicas de la ciudad" },
      { icon: "🛍️", title: "Mercado de San Blas", desc: "El barrio artesanal de Cusco con talleres de artesanos y el mejor chocolate peruano" },
      { icon: "🚂", title: "Valle Sagrado", desc: "El corazón del Imperio Inca con Ollantaytambo, Pisac y el camino al Machu Picchu" },
    ],
    bestSeason: "Mayo a septiembre (época seca)",
    currency: "Sol peruano (PEN)",
    language: "Español · quechua",
    avgBudget: "$50–120 USD/día",
    continent: "América",
    tips: [
      "La altitud de Cusco (3.400 msnm) afecta a casi todos los viajeros al llegar. Dedicá 1–2 días completos a aclimatarte — caminá despacio, evitá el alcohol y tomá mate de coca — antes de visitar Machu Picchu.",
      "Machu Picchu tiene tres franjas horarias de ingreso: mañana (6–12hs), mediodía (10–14hs) y tarde (12–17hs). La mañana tiene menos gente, mejor luz para fotos y temperatura más fresca.",
      "El tren a Machu Picchu sale desde Ollantaytambo (90 min en combi desde Cusco). Inca Rail es alternativa económica a Peru Rail con precios similares — comparalos siempre.",
      "El mercado de Pisac los martes, jueves y domingos tiene artesanías a precios reales. La diferencia frente a los mercados de Cusco puede ser del 50–70%.",
    ],
  },
  {
    slug: "amsterdam",
    name: "Ámsterdam",
    country: "Países Bajos",
    emoji: "🚲",
    tagline: "Canales, museos y libertad holandesa",
    description: "Ámsterdam es una ciudad única en el mundo, construida sobre canales y perfecta para recorrer en bicicleta. El Rijksmuseum, la Casa de Ana Frank, los barrios de Jordaan y De Pijp y los cafés holandeses la convierten en un destino encantador.",
    highlights: [
      { icon: "🎨", title: "Rijksmuseum", desc: "El museo nacional de Holanda con los maestros flamencos: Rembrandt, Vermeer y Van Gogh" },
      { icon: "📖", title: "Casa de Ana Frank", desc: "El escondite histórico de Ana Frank durante la Segunda Guerra Mundial" },
      { icon: "🚲", title: "Jordaan", desc: "El barrio más pintoresco de Ámsterdam con canales, mercados y cafeterías bohemias" },
      { icon: "🌷", title: "Keukenhof", desc: "El jardín de tulipanes más famoso del mundo, abierto en primavera (marzo-mayo)" },
    ],
    bestSeason: "Abril a mayo (tulipanes) / Junio a agosto",
    currency: "Euro (EUR)",
    language: "Neerlandés · inglés muy extendido",
    avgBudget: "$120–220 USD/día",
    continent: "Europa",
    tips: [
      "Alquilar bicicleta es la forma más auténtica de vivir Ámsterdam. MacBike o Yellow Bike tienen las mejores flotas. Recordá que los ciclistas tienen prioridad absoluta en esta ciudad.",
      "El I Amsterdam City Card (24–72hs) incluye entrada gratuita a 60+ museos incluyendo el Rijksmuseum. Calculá si te conviene: la entrada individual al Rijks ya cuesta €22.50.",
      "El museo Van Gogh y la Casa de Ana Frank tienen fila de 2+ horas en temporada alta sin reserva. Ambos requieren tickets online con fecha y hora — comprá antes de llegar.",
      "El Vondelpark tiene conciertos gratuitos al aire libre en verano (junio–agosto). Combinalo con un picnic de quesos del mercado Albert Cuypmarkt, el más auténtico de la ciudad.",
    ],
    guidePractical: "Ámsterdam está hecha para bicicleta — alquilar una es imprescindible y la forma más auténtica de moverse. Los museos (Rijks, Van Gogh, Casa de Ana Frank) requieren reserva online anticipada, especialmente en temporada alta. No es caro si evitas trampas turísticas: los cafés de barrio son genuinos y baratos (€5-8 por cervezas). Los museos menores (Hash Marihuana, Torture) son curiosidades turísticas — enfócate en los grandes. Keukenhof es hermoso pero requiere entrada + transporte: solo vale si estás en abril-mayo. Jordaan y De Pijp son barrios auténticos donde los locales pasan tiempo; más recomendables que el Red Light District si buscas Ámsterdam real. Alojate cerca de Centraal Station (acceso a todo) o Jordaan (más local, tranquilo).",
    practicalInfo: [
      {
        category: "Transporte & Tarjetas",
        details: [
          "Tarjeta OV-chipkaart recargable: €7.50 + saldo",
          "Viaje individual metro: €2.95-3.75",
          "Pase 24/48/72hs: €11/16/21",
          "Alquiler bici diaria: €10-15 (MacBike es estándar)",
        ],
      },
      {
        category: "Museos & Atracciones",
        details: [
          "Rijksmuseum: €22.50 (RESERVA ONLINE)",
          "Van Gogh Museum: €22 (RESERVA ONLINE)",
          "Casa de Ana Frank: €14.50 (RESERVA ONLINE)",
          "Keukenhof (marzo-mayo): €19.50 entrada + transporte",
          "I Amsterdam City Card: €85 (72hs, 60+ museos)",
        ],
      },
      {
        category: "Gastronomía",
        details: [
          "Panqueques holandesas (stroop): €3-5",
          "Croquetas de bar (kroket): €1.50-3",
          "Cerveza local (pinta): €3-5 en café local",
          "Queso holandés (mercado): €4-8 por 100g",
        ],
      },
    ],
    faq: [
      {
        question: "¿Necesito bicicleta para Ámsterdam?",
        answer: "No es obligatoria pero es la forma más auténtica y práctica de moverse. El metro existe pero muchos holandeses prefieren bici incluso en invierno. Vale mucho la pena alquilar.",
      },
      {
        question: "¿Cuándo es mejor visitar: flores en primavera o verano?",
        answer: "Ambos momentos son buenos. Abril-mayo: tulipanes y Keukenhof. Junio-agosto: conciertos gratuitos en Vondelpark y mejor clima. Abril es magnífico pero masificado.",
      },
      {
        question: "¿Es verdad que Ámsterdam es cara?",
        answer: "Es de precio medio-alto. Los museos son caros (€20+). Pero comer en cafés locales es barato (€4-8). Alojamiento es lo que más cuesta.",
      },
      {
        question: "¿Cuántos días necesito?",
        answer: "Mínimo 3 días: 1 para museos principales (Rijks, Van Gogh), 1 para barrios (Jordaan, De Pijp, Red Light), 1 para día trip (Zaanse Schans, Volendam, o Keukenhof si es primavera).",
      },
    ],
  },
  {
    slug: "lisboa",
    name: "Lisboa",
    country: "Portugal",
    emoji: "🚃",
    tagline: "La ciudad de las siete colinas y el fado",
    description: "Lisboa es una de las capitales europeas más encantadoras y accesibles. Sus miradouros con vistas al Tejo, el fado melancólico, los pastéis de nata y el Barrio de Alfama hacen de esta ciudad un destino que enamora a todos los que la visitan.",
    highlights: [
      { icon: "🚃", title: "Tranvía 28 y Alfama", desc: "El barrio más antiguo de Lisboa con callejuelas medievales y el icónico tranvía amarillo" },
      { icon: "🏰", title: "Castillo de São Jorge", desc: "La fortaleza medieval con las mejores vistas panorámicas sobre Lisboa y el río Tejo" },
      { icon: "🍮", title: "Pastéis de Belém", desc: "Los pastéis de nata más famosos del mundo en la histórica Fábrica de Belém" },
      { icon: "⛵", title: "Torre de Belém", desc: "El símbolo de Lisboa y el inicio de las grandes exploraciones portuguesas" },
    ],
    bestSeason: "Marzo a mayo / Septiembre a octubre",
    currency: "Euro (EUR)",
    language: "Portugués",
    avgBudget: "$90–180 USD/día",
    continent: "Europa",
    tips: [
      "El Pastel de Belém en la Fábrica original de Belém siempre tiene fila, pero avanza en 10–15 minutos. Pedí una ración de tres con canela y azúcar en la mesa — es la forma local.",
      "Los miradouros más recomendados son: Santa Catarina (bohemio, vistas al río), Graça (el mejor del casco histórico) y São Pedro de Alcântara (con el castillo al fondo).",
      "El tranvía 28 es pintoresco pero lento, lleno de turistas y un blanco habitual para carteristas. Para moverte de forma eficiente, usá el metro o los autobuses de la Carris.",
      "Los vinos del Alentejo (a 2 horas de Lisboa) son la mejor relación calidad-precio de Portugal: una botella de €5–8 en supermercado equivale a €25–30 en cualquier otro país europeo.",
    ],
    guidePractical: "Lisboa es la capital europea más asequible y encantadora — es pequeña, peatonal en su mayoría y tiene una atmósfera que mezcla decadencia colonial con modernismo. Los siete cerros de Lisboa ofrecen vistas espectaculares desde múltiples miradouros (viewpoints): Santa Catarina es bohemio con vistas al Tejo, Graça es el favorito para sunset, São Pedro de Alcântara tiene el castillo de fondo. Evita el Tranvía 28 como atracción — es pintoresco pero lento y es blanco favorito de carteristas. Los locales usan metro. El Castillo de São Jorge merece visita por las vistas 360° — mejor al atardecer. El Barrio de Alfama es el corazón medieval de Lisboa — caminatas sin mapa, callejuelas sinuosas, gatos everywhere, la mejor atmósfera de la ciudad. Los Pastéis de Belém en la fábrica original siempre tienen fila pero avanza en 15 minutos — la experiencia de comerlo recién horneado vale la pena. Belém es una zona de museos pero es mejor para una media mañana que día completo. El presupuesto es bueno: café + pastel $3 USD, comida en restaurante local $8-15 USD, entrada museos $8-15 USD. Los vinos del Alentejo (región 2 hs sur) son excepcionales y baratos: una botella de $5-8 en supermercado equivale a $25-30 en otro país europeo. Alójate en Alfama, Príncipe Real o Graça para vida más local — evita la Baixa turística si buscas autenticidad.",
    practicalInfo: [
      {
        category: "Transporte & Movilidad",
        details: [
          "Tarjeta Viva Viagem (rechargeable): €10 + carga, funciona en metro/tranvía/bus",
          "Pase 24/72hs: €10/€25, transporte ilimitado",
          "Tranvía 28: Pintoresco pero turístico y con carteristas — mejor andar a pie",
          "Metro: Limpio, eficiente, llega a todos lados, recomendado",
          "Bicicleta pública (Gira): €1 desbloqueo + $0.15/min, buena para paseos cortos"
        ]
      },
      {
        category: "Miradouros & Vistas",
        details: [
          "Miradouro da Graça: El mejor del casco histórico, sunset espectacular, gratuito",
          "Santa Catarina: Bohemio, vistas al Tejo, bares con vista, gratuito",
          "São Pedro de Alcântara: Con castillo al fondo, fotogénico, gratuito",
          "Castillo São Jorge: €10-12 entrada, vistas 360°, mejor al atardecer",
          "Elevador de Santa Justa: €6 ida/vuelta, turístico pero vistas bonitas desde la cúspide"
        ]
      },
      {
        category: "Barrios & Alojamiento",
        details: [
          "Alfama: Medieval, auténtico, gatos, callejuelas — la esencia de Lisboa, 80-120 EUR/noche",
          "Príncipe Real: Bohemio, moderno, LGBT friendly, bares/cafés, 90-150 EUR/noche",
          "Graça: Local, miradouros espectaculares, menos turístico, 70-110 EUR/noche",
          "Baixa (turística): Centro turístico, caro, evitar si buscas autenticidad, 100-180 EUR/noche",
          "Belém: Museos, pasteles, más alejado pero accesible por tranvía"
        ]
      },
      {
        category: "Gastronomía & Precios",
        details: [
          "Café + Pastel de Nata: €3-4 en lugar local",
          "Sardinas asadas (IA — picada): €8-12 plato, típico portugués",
          "Francesinha (sándwich portugués): €8-12, muy local, muy rico",
          "Comida en restaurante local: €10-18 menú completo (almuerzo más barato)",
          "Vino Alentejo: €5-8 botella en supermercado, equivalente a €25+ Europa",
          "Pastel de Belém (fábrica original): €2-3, recién horneado, imprescindible"
        ]
      },
      {
        category: "Museos & Atracciones",
        details: [
          "MAAT (Museo Arte Moderna): €12 entrada, arquitectura moderna bonita",
          "Museu dos Coches (Carretas Reales): €12 entrada, único en el mundo",
          "Fondation Champalimaud: Gratuito, arquitectura espectacular + exposiciones",
          "Tren turístico rojo (Belém): €14, cursi pero útil si cansado de andar",
          "Iglesias: San Jorge, Santo Estêvão — son gratuitas y hermosas"
        ]
      }
    ],
    faq: [
      {
        question: "¿Es Lisboa cara como otras capitales europeas?",
        answer: "No. Es de precio medio-bajo para Europa. Comida: €8-18, alojamiento: €70-120, museos: €8-15. Mejor presupuesto que Barcelona, Roma o París. Los vinos son especialmente baratos."
      },
      {
        question: "¿Vale la pena subir a los miradouros?",
        answer: "Sí, pero muchos son gratuitos. La Graça es el mejor por puesta de sol. Santa Catarina es bohemio. São Pedro tiene vistas con castillo. Evita el Elevador de Santa Justa ($6) — las vistas desde los miradouros son iguales."
      },
      {
        question: "¿Cuántos días necesito en Lisboa?",
        answer: "3-4 días: 1 Alfama + Castillo, 1 Miradouros sunset + Príncipe Real, 1 Belém pasteles + museos, 1 Sintra day trip o descanso. 5+ mejora la experiencia de verdad."
      },
      {
        question: "¿Necesito día trip a Sintra?",
        answer: "Sintra es hermosa (Palacio da Pena, Quinta da Regaleira) pero requiere tren (45 min, €3.60) y 4-5 horas. Vale la pena si tienes 5+ días en Portugal. Con 3-4 días, quédate en Lisboa."
      },
      {
        question: "¿Es segura Lisboa de noche?",
        answer: "Sí, muy segura. Alfama, Príncipe Real, Graça son seguras de noche. Hay pickpockets en transporte público — mantén bolsa cerrada. Mucho más segura que otras capitales europeas."
      }
    ]
  },
  {
    slug: "praga",
    name: "Praga",
    country: "República Checa",
    emoji: "🏰",
    tagline: "La ciudad de las cien torres",
    description: "Praga es la ciudad medieval mejor conservada de Europa y una de las más hermosas del mundo. El Castillo de Praga, el Puente de Carlos, la Ciudad Vieja y la cerveza checa más barata de Europa hacen de esta ciudad un destino imperdible.",
    highlights: [
      { icon: "🏰", title: "Castillo de Praga", desc: "El castillo más grande del mundo en extensión, con vistas sobre toda la ciudad" },
      { icon: "🌉", title: "Puente de Carlos", desc: "El puente medieval del siglo XIV con 30 estatuas barrocas sobre el río Moldava" },
      { icon: "⏰", title: "Reloj Astronómico", desc: "El reloj medieval más antiguo en funcionamiento del mundo en la Plaza de la Ciudad Vieja" },
      { icon: "🍺", title: "Cerveza checa", desc: "La mejor y más barata cerveza de Europa en las cervecerías tradicionales de Praga" },
    ],
    bestSeason: "Mayo a septiembre",
    currency: "Corona checa (CZK)",
    language: "Checo · inglés en zonas turísticas",
    avgBudget: "$70–140 USD/día",
    continent: "Europa",
    tips: [
      "Las casas de cambio en las calles turísticas (Václavské náměstí, aeropuerto) tienen comisiones altísimas. Usá el cajero automático con tu tarjeta de débito — obtenés el tipo de cambio oficial.",
      "El Castillo de Praga tiene acceso libre a los jardines y patios; solo el interior de las catedrales e iglesias principales cobra entrada. Caminá los patios sin pagar si el presupuesto aprieta.",
      "La cerveza Pilsner Urquell o Bernard en bares locales como el U Zlatého Tygra o Lokál Dlouhááá cuesta la mitad que en los restaurantes de la Ciudad Vieja. Seguí a los checos.",
      "El tren nocturno Praga–Viena o Praga–Budapest cuesta $20–35 USD y te ahorra una noche de hotel. En temporada alta reservá con anticipación porque se agota.",
    ],
    guidePractical: "Praga es compacta y la mayoría de atracciones están a caminar de la Ciudad Vieja. NO NECESITAS transporte público para lo turístico. El Castillo de Praga de día es masificado — ve temprano (7-8am) o de noche. El Puente de Carlos es hermoso pero está lleno de vendedores — crúzalo muy temprano. No es caro si evitas restaurantes turísticos: la cerveza en bares locales cuesta 1/3 del precio de la Ciudad Vieja. Las casas de cambio callejeras son una estafa — usa cajeros automáticos. No hay razón para tomar taxis — caminar es seguro y la ciudad es pequeña. Alojate en Vieja Ciudad (céntrico), no en Praga 1 (es sinónimo, más turístico). La ciudad es hermosa pero sobrevalorada — 2-3 días son suficientes.",
    practicalInfo: [
      {
        category: "Transporte & Movilidad",
        details: [
          "30-min ticket: 24 CZK (~$1 USD) — suficiente para la mayoría",
          "Pase 24hs: 110 CZK (~$4.50 USD)",
          "A pie: La mayoría de atracciones están dentro de 15-20 min caminando",
          "Tren a Viena/Budapest: 20-35 USD, considerar para connection",
        ],
      },
      {
        category: "Atracciones & Museos",
        details: [
          "Castillo de Praga jardines: Gratuito (patios)",
          "Interior catedral: 250 CZK (~$10 USD)",
          "Reloj Astronómico: Gratuito (torre: 150 CZK)",
          "Puente de Carlos: Gratuito",
          "Cementerio Judío: 300 CZK (~$12 USD)",
        ],
      },
      {
        category: "Gastronomía",
        details: [
          "Pilsner Urquell en bar local: 30-50 CZK ($1-2 USD)",
          "Mismo trago en Ciudad Vieja: 150-200 CZK ($6-8 USD)",
          "Trdelník (postre espiral): 50-100 CZK ($2-4 USD)",
          "Almuerzo local: 150-250 CZK ($6-10 USD)",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es verdad que Praga es barata?",
        answer: "Depende de dónde comas. Bares locales: muy barata (€1 cerveza). Ciudad Vieja turística: cara (€6-8 cerveza). El presupuesto puede variar 3x.",
      },
      {
        question: "¿Necesito cambiar dinero?",
        answer: "No. Los cajeros automáticos dan buen tipo de cambio. Las casas de cambio callejeras cobran 10-15% de comisión — EVITA.",
      },
      {
        question: "¿Cuántos días necesito?",
        answer: "2-3 días máximo. 1 día Castillo + Puente + Ciudad Vieja, 1 día barrios (Vinohrady, Žižkov), 1 día day trip a Kutná Hora o Karlštejn si te queda tiempo.",
      },
      {
        question: "¿Es verdad que está sobrevalorada?",
        answer: "Un poco. Es hermosa pero está tan masificada de turistas que pierde autenticidad en verano. Visita en mayo o septiembre — el clima es igual pero con 60% menos gente.",
      },
    ],
  },
  {
    slug: "bangkok",
    name: "Bangkok",
    country: "Tailandia",
    emoji: "🛺",
    tagline: "Templos dorados, sabores intensos y caos vibrante",
    description: "Bangkok es una de las ciudades más fascinantes de Asia: una mezcla explosiva de templos dorados, mercados flotantes, street food espectacular y vida nocturna sin igual. Una ciudad que nunca duerme y que jamás deja indiferente.",
    highlights: [
      { icon: "⛩️", title: "Gran Palacio y Wat Phra Kaew", desc: "El complejo más sagrado de Tailandia, hogar del Buda de Esmeralda" },
      { icon: "🚤", title: "Mercado flotante de Damnoen Saduak", desc: "El mercado sobre el agua más famoso de Tailandia, a 1 hora de Bangkok" },
      { icon: "🍜", title: "Khao San Road", desc: "La calle más famosa para mochileros con street food, bares y ambiente vibrante" },
      { icon: "🛕", title: "Wat Arun", desc: "El templo del amanecer sobre el río Chao Phraya, especialmente bello al atardecer" },
    ],
    bestSeason: "Noviembre a febrero",
    currency: "Baht tailandés (THB)",
    language: "Tailandés · inglés en zonas turísticas",
    avgBudget: "$50–120 USD/día",
    continent: "Asia",
    tips: [
      "Los templos de Bangkok exigen cubrir hombros y rodillas. Llevá siempre una tela o bufanda liviana — muchos templos la venden afuera, pero a precio turístico.",
      "El BTS Skytrain y el metro MRT son limpios, puntuales y con aire acondicionado. Los tuk-tuks son pintorescos pero cobran 3–5x más. Combiná ambos según el trayecto.",
      "Chinatown (Yaowarat Road) tiene el mejor street food de Bangkok. Llegá entre las 6–8pm los fines de semana cuando todos los puestos están en pleno funcionamiento.",
      "El mercado flotante de Amphawa (90 min al sur de Bangkok) es más auténtico y menos masificado que el de Damnoen Saduak. Funciona solo los fines de semana desde el mediodía.",
    ],
    guidePractical: "Bangkok es caos controlado — la primera sensación es abrumadora pero una vez entiendes el sistema es fascinante. El río Chao Phraya divide la ciudad: el lado oeste (Thonburi) es templos y barcos, el lado este (Rattanakosin) es turístico pero tiene los templos más importantes. El BTS Skytrain (metro aéreo) es limpío, rápido y acondicionado — es la forma principal de transporte entre turistas. Los tuk-tuks son pintorescos pero cobran 3-5x más que Grab/Uber. Los templos exigen cubrir hombros y rodillas — lleva siempre una tela liviana. El Gran Palacio es impresionante pero es masificado: ve temprano (7-8am) o considera Wat Pho (templo del Buda reclinado) como alternativa menos abarrotada pero igual de espectacular. Chinatown (Yaowarat) es el corazón local — ir entre 6-8pm los viernes/sábados cuando todos los puestos de comida están en funcionamiento es experiencia de gastronomía callejera incomparable. El Mercado Flotante de Damnoen Saduak es famoso pero es turístico extremo — el mercado de Amphawa (90 min sur, fines de semana desde mediodía) es más auténtico y menos masificado. Khao San Road es la meca mochilera pero es puro turismo — la verdadera Bangkok vive en los barrios residenciales. Los precios son baratos si comes donde comen los tailandeses: mercado de comida callejera, bares locales. Alójate cerca de estación BTS — acceso a todo y seguro de noche.",
    practicalInfo: [
      {
        category: "Transporte & Tarjetas",
        details: [
          "Tarjeta BTS/MRT (Rabbit Card): ฿100 depósito + carga, descuento en viajes",
          "BTS Skytrain: ฿16-59 según distancia, limpio y rápido",
          "Metro MRT: ฿16-52 según distancia, aún más limpio que BTS",
          "Grab/Uber: Mucho más barato que tuk-tuk, usar siempre para largas distancias",
          "Taxi: ฿35 bajada + ฿5.50/km, negociar puede bajar costo"
        ]
      },
      {
        category: "Templos & Atracciones",
        details: [
          "Gran Palacio + Wat Phra Kaew: ฿500 entrada, ve 7-8am antes de masas",
          "Wat Pho (Buda reclinado): ฿100 entrada, alternativa menos masificada, espectacular",
          "Wat Arun (templo del amanecer): ฿100 entrada, más hermoso al atardecer",
          "Wat Saket: ฿20 entrada, golden mountain, vistas de Bangkok al anochecer",
          "Templos menores: Gratuitos o muy baratos, igual de bellos, sin turistas"
        ]
      },
      {
        category: "Chinatown & Mercados",
        details: [
          "Chinatown (Yaowarat) street food: ฿20-60 por plato, mejor 6-8pm viernes/sábados",
          "Mercado Flotante Amphawa: Fines de semana desde mediodía, auténtico, menos turístico",
          "Damnoen Saduak: Famoso pero turístico extremo, 3-5am caro en tours",
          "Or Tor Kor Market: Mercado de producción, mejor frutas/verduras, local",
          "Talat Rot Fai: Mercado nocturno vintage, ropa usada, joyería, antiques"
        ]
      },
      {
        category: "Gastronomía & Precios",
        details: [
          "Pad Thai callejero: ฿40-60 ($1.20-1.80 USD), mejor que cualquier restaurante",
          "Tom Yum Goong: ฿100 plato en mercado, sopa tailandesa icónica",
          "Mango sticky rice: ฿40-50, postre tailandés obligatorio",
          "Cerveza tailandesa (Chang/Singha): ฿50 en bar local (muy barato)",
          "Restaurante turístico Westminster: ฿300+ por plato — EVITAR"
        ]
      },
      {
        category: "Vida Nocturna & Entretenimiento",
        details: [
          "Khao San Road: Bares mochileros, ambiente de fiesta, ฿100-200 tragos",
          "Barrio Silom: Vida nocturna gay-friendly, bares sofisticados, ฿150-300 tragos",
          "Bares locales (Soi): ฿80-120 cerveza, auténtico, donde beben locales",
          "Muay Thai en estadio Rajadamnern: ฿400-2000 asiento, experiencia cultural única",
          "Sky bars rooftop: ฿300+ tragos pero vistas de Bangkok al anochecer valen la pena"
        ]
      }
    ],
    faq: [
      {
        question: "¿Es verdad que el Mercado Flotante es una trampa turística?",
        answer: "El Damnoen Saduak sí. El Amphawa es auténtico, funciona fines de semana desde mediodía. Si quieres experiencia real sin tours caros, ve a Amphawa. Es menos famoso pero probablemente mejor."
      },
      {
        question: "¿Necesito ropa especial para templos?",
        answer: "Sí. Cubrir hombros y rodillas es requisito, no sugerencia. Muchos templos alquilan sarongs (falda tailandesa) a la entrada por ฿20-50. Mejor llevar una tela/bufanda propia."
      },
      {
        question: "¿Cuánto cuesta realmente Bangkok?",
        answer: "Muy barato. Alojamiento guesthouse: ฿400-600 USD/noche. Comida callejera: ฿40-80 plato. Cerveza local: ฿50. Un viajero presupuesto: $40-60 USD/día."
      },
      {
        question: "¿Vale la pena ver Muay Thai en vivo?",
        answer: "Absolutamente. Es experiencia cultural, no solo deporte. Rajadamnern es estadio histórico. Entrada ฿400-1200 según asiento, noches martes-domingo. La energía es increíble."
      },
      {
        question: "¿Cuántos días necesito en Bangkok?",
        answer: "3-4 días: 1 templos principales (Gran Palacio/Wat Pho), 1 Chinatown + mercados, 1 barrios (Silom, Thonburi), 1 relajación. 5-6 si quieres Muay Thai y menos estrés."
      }
    ]
  },
  {
    slug: "bali",
    name: "Bali",
    country: "Indonesia",
    emoji: "🌺",
    tagline: "La isla de los dioses",
    description: "Bali es el destino de ensueño por excelencia: arrozales esmeralda en terrazas, templos hindúes entre la selva, playas de surf en Seminyak y Canggu, y una espiritualidad única que envuelve cada rincón de la isla. Un destino transformador.",
    highlights: [
      { icon: "🌾", title: "Terrazas de arroz de Tegallalang", desc: "Las terrazas de arroz en cascada más fotogénicas de Bali, en las afueras de Ubud" },
      { icon: "⛩️", title: "Tanah Lot", desc: "El templo sagrado sobre una roca en el mar, especialmente mágico al atardecer" },
      { icon: "🌊", title: "Seminyak y Canggu", desc: "Las playas más trendy de Bali con surf, beach clubs y puestas de sol espectaculares" },
      { icon: "🧘", title: "Ubud", desc: "El corazón cultural y espiritual de Bali con yoga, spa y cocina saludable" },
    ],
    bestSeason: "Mayo a septiembre",
    currency: "Rupia indonesia (IDR)",
    language: "Balinés · indonesio · inglés en zonas turísticas",
    avgBudget: "$50–120 USD/día",
    continent: "Asia",
    tips: [
      "Los scooters de alquiler ($5–8/día) son el transporte local por excelencia, pero los accidentes son frecuentes en las rutas de montaña. Si no tenés experiencia, contratá un chofer privado ($30–50/día) para los trayectos largos.",
      "Los templos balineses requieren 'sarong' (falda de tela) para entrar. En muchos lo ofrecen en préstamo gratuito, pero tener el tuyo es más cómodo — los comprás por IDR 30.000 en cualquier tienda.",
      "Ubud tiene la mejor oferta gastronómica para vegetarianos y veganos de toda la isla. El Warung Babi Guling de Ibu Oka, en cambio, es obligatorio para carnívoros: lechón al estilo balinés.",
      "La temporada alta en Bali (julio–agosto) tiene precios 50% más altos, playas más masificadas y menos chances de ver amaneceres despejados en el Monte Agung. Abril–junio es el mejor equilibrio.",
    ],
    guidePractical: "Bali no es 'un lugar' sino una isla entera con zonas completamente diferentes. Ubud es espiritual y cultural (arrozales, templos, yoga); Seminyak/Canggu son playas modernas con vida nocturna; Batur es naturaleza pura (volcán, trekking). Necesitas decidir qué tipo de Bali querés. Las fotos de Instagram (Tegallalang, Lempuyang) son reales pero requieren 2+ horas de fila en temporada alta — planificá llegar a las 7am. El presupuesto es sorprendentemente bajo si comes en warung locales (IDR 30-50k = $2-3 USD por comida completa) pero hay trampas turísticas atrapadoras en Ubud que duplican precios. El transporte interno es barato pero las carreteras de montaña son peligrosas; si no maneja motos, alquilá chofer ($30-50/día) es más seguro. Alojate 2-3 noches en Ubud (centr cultural) y 2-3 en Seminyak/Canggu (playa + vida nocturna) para balance perfecto.",
    practicalInfo: [
      {
        category: "Transporte & Alquiler",
        details: [
          "Alquiler de moto: IDR 60-80k/día ($4-5 USD) — solo si tenés experiencia",
          "Chofer privado: IDR 400-600k/día ($25-40 USD) — cómodo y seguro",
          "Gojek/Grab: Apps locales, más baratas que taxi, disponibles en toda la isla",
          "Scooter + gasolina: Increíblemente barato pero accidentalidad alta en rutas montaña",
        ],
      },
      {
        category: "Gastronomía & Precios",
        details: [
          "Warung local (comida completa): IDR 30-50k ($2-3 USD)",
          "Nasi goreng/mie goreng: IDR 25-35k ($1.50-2 USD)",
          "Café con vista de arrozales: IDR 40-70k ($2.50-4 USD)",
          "Restaurante turístico Ubud: IDR 150-250k ($10-17 USD) — 5-10x más caro",
        ],
      },
      {
        category: "Templos & Atracciones",
        details: [
          "Entrada templos (mayoría): IDR 30-50k ($2-3 USD) — sarong requerido",
          "Tegallalang Rice Terraces: IDR 50k entrada, llega 7am antes de masas",
          "Tanah Lot: IDR 60k entrada, mejor al atardecer (después 4pm)",
          "Monkey Forest Ubud: IDR 80k, guarda bolsa cerrada — monos son agresivos",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es verdad que Bali es demasiado turístico ahora?",
        answer: "Parcialmente. Las zonas Instagram (Tegallalang, Lempuyang) están masificadas. Pero si salís de circuitos turísticos y vas a Sidemen Valley, Amed o el interior, encuentras Bali auténtica con muy pocos turistas.",
      },
      {
        question: "¿Es seguro manejar moto en Bali?",
        answer: "Los accidentes son comunes, especialmente en rutas montañosas. Si no tenés experiencia, alquilá chofer ($30-40/día) — es más seguro y sigues siendo barato. Muchos viajeros tienen accidentes.",
      },
      {
        question: "¿Cuánto cuesta realmente un viaje a Bali?",
        answer: "Si comes en warung local: $40-60/día. Si comes en restaurantes turísticos: $100-150/día. El rango es enorme. Alojamiento oscila entre $15-20 (guesthouse) y $100+ (resort.",
      },
      {
        question: "¿Cuántos días necesito en Bali?",
        answer: "Mínimo 5-6 días: 2-3 en Ubud (cultura), 2-3 en Seminyak/Canggu (playa). 7+ si quieres trekking en Batur o explorar barrios menos turísticos.",
      },
    ],
  },
  {
    slug: "marrakech",
    name: "Marrakech",
    country: "Marruecos",
    emoji: "🕌",
    tagline: "La ciudad roja del Maghreb",
    description: "Marrakech es un destino que despierta todos los sentidos: la medina milenaria, los souks laberínticos, el olor a especias, la Plaza Jemaa el-Fna y los riads de ensueño. Una ciudad mágica que transporta a otra dimensión en cada callejuela.",
    highlights: [
      { icon: "🏛️", title: "Plaza Jemaa el-Fna", desc: "El corazón de Marrakech con acróbatas, encantadores de serpientes y comida típica" },
      { icon: "🛍️", title: "Souks de la medina", desc: "El laberinto de mercados medievales con especias, artesanía y textiles únicos" },
      { icon: "🌴", title: "Jardín Majorelle", desc: "El jardín botánico del diseñador Yves Saint Laurent, un oasis de color en la ciudad" },
      { icon: "🏰", title: "Palacio de la Bahía", desc: "El palacio del siglo XIX que muestra la opulencia de la arquitectura marroquí" },
    ],
    bestSeason: "Marzo a mayo / Octubre a noviembre",
    currency: "Dírham marroquí (MAD)",
    language: "Árabe · bereber · francés",
    avgBudget: "$50–120 USD/día",
    continent: "África",
    tips: [
      "En los souks de la medina, el precio inicial suele ser 3–5x el precio real. Regatear es la norma cultural — empezá ofreciendo el 30–40% del precio pedido y negociá hacia el medio.",
      "La Plaza Jemaa el-Fna se transforma completamente al anochecer: de mercado diurno a festival nocturno con músicos gnawa, teatreros, encantadores de serpientes y docenas de puestos de comida.",
      "Los riads son la forma más auténtica de alojarse en Marrakech: casas tradicionales convertidas en posadas con patio central, terrazas privadas y desayuno marroquí incluido.",
      "Los guías no oficiales en la medina suelen cobrarte por llevarte a lugares donde reciben comisión. Para explorar libremente, descargá el mapa offline de Maps.me antes de perderte.",
    ],
  },
  {
    slug: "florencia",
    name: "Florencia",
    country: "Italia",
    emoji: "🌹",
    tagline: "El Renacimiento en estado puro",
    description: "Florencia es la cuna del Renacimiento y una de las ciudades más bellas del mundo. Los Uffizi con Botticelli, el David de Miguel Ángel, la cúpula de Brunelleschi y la gastronomía toscana hacen de esta ciudad compacta una experiencia artística sin igual.",
    highlights: [
      { icon: "🎨", title: "Galleria degli Uffizi", desc: "El museo del Renacimiento más importante del mundo, con Botticelli, Leonardo y Rafael" },
      { icon: "⛪", title: "Duomo de Brunelleschi", desc: "La cúpula que cambió la historia de la arquitectura, símbolo de Florencia" },
      { icon: "🗿", title: "El David de Miguel Ángel", desc: "La escultura más famosa del mundo en la Galleria dell'Accademia" },
      { icon: "🥩", title: "Bistecca alla Fiorentina", desc: "El lomo de buey chianino al carbón más famoso de Italia, medido por kilo" },
    ],
    bestSeason: "Abril a junio / Septiembre a octubre",
    currency: "Euro (EUR)",
    language: "Italiano",
    avgBudget: "$100–200 USD/día",
    continent: "Europa",
    tips: [
      "Los Uffizi tienen tickets de reserva anticipada (€4 adicionales) que evitan filas de 2+ horas en temporada alta. En julio y agosto es prácticamente obligatorio reservar online.",
      "La Firenze Card (€72, 72 horas) incluye los Uffizi, el Bargello, el Palazzo Pitti y otros museos sin fila. Solo conviene si planeás 4+ museos en tres días.",
      "El Mercato Centrale en el primer piso (el mercado cubierto de productores, no la planta baja turística) tiene algunos de los mejores almuerzos italianos calidad-precio de la ciudad.",
      "Subir a la cúpula del Duomo de Brunelleschi requiere reserva online con días de anticipación en temporada alta. La vista desde la linterna (el nivel más alto) vale absolutamente los 463 escalones.",
    ],
  },
  {
    slug: "estambul",
    name: "Estambul",
    country: "Turquía",
    emoji: "🕌",
    tagline: "Donde Europa se encuentra con Asia",
    description: "Estambul es la única ciudad del mundo que abarca dos continentes. Santa Sofía, el Gran Bazar, el Palacio de Topkapi y el Bosforo crean una mezcla única de culturas que ha fascinado a viajeros durante siglos. Una ciudad que nunca decepcion.",
    highlights: [
      { icon: "🕌", title: "Santa Sofía", desc: "El edificio más impresionante del mundo antiguo, iglesia, mezquita y hoy mezquita activa" },
      { icon: "🛍️", title: "Gran Bazar", desc: "El bazar cubierto más grande del mundo con 4.000 tiendas y 500 años de historia" },
      { icon: "⛵", title: "Crucero por el Bosforo", desc: "El estrecho que separa Europa de Asia, con fortalezas y palacios a ambas orillas" },
      { icon: "🏛️", title: "Topkapi", desc: "El palacio imperial del sultán con el tesoro otomano y el harén más famoso del mundo" },
    ],
    bestSeason: "Abril a junio / Septiembre a noviembre",
    currency: "Lira turca (TRY)",
    language: "Turco · inglés en zonas turísticas",
    avgBudget: "$60–130 USD/día",
    continent: "Europa/Asia",
    tips: [
      "La tarjeta Istanbulkart es imprescindible: cargala con €10–15 y úsala en metro, tranvía, Metrobús y ferris. El pago individual en cada viaje es significativamente más caro.",
      "Santa Sofía recuperó su estatus de mezquita activa en 2020 — la entrada sigue siendo gratuita, pero hay horarios de cierre durante las oraciones (especialmente el viernes a mediodía).",
      "El Bazar de las Especias (Bazar Egipcio, junto al puente de Gálata) es más pequeño que el Gran Bazar pero más auténtico, más fotogénico y con mucho menos presión de vendedores.",
      "El ferry İDO de Eminönü a Üsküdar o Kadıköy cuesta ₺17 (~$0.50 USD) y es el crucero más económico del Bósforo: 15 minutos de agua entre dos continentes.",
    ],
    guidePractical: "Estambul es la puerta entre Europa y Asia — esa identidad dual es su atractivo. El lado europeo (Sultanahmet) tiene atracciones clásicas. El lado asiático (Üsküdar, Kadıköy) es donde viven y pasan tiempo los locales. La zona Sultanahmet se recorre a pie pero es turística extremo. Beyoğlu (lado europeo al norte) es más auténtica. Compra Istanbulkart INMEDIATAMENTE en el aeropuerto — es obligatoria para metro/tranvía. Santa Sofía ahora es mezquita (gratuita) pero con horarios de oración — va más de madrugada para visitarla libre. El Gran Bazar requiere tiempo para no perderse, pero es turístico. El Bazar de Especias es mejor. Los ferries son la forma más barata y romántica de ver el Bosforo (₺17 vs ₺30-50 por tours). Come en Beyoğlu o Kadıköy, no en Sultanahmet turístico.",
    practicalInfo: [
      {
        category: "Transporte & Tarjetas",
        details: [
          "Istanbulkart: ₺10 tarjeta + carga, descuento en cada viaje",
          "Viaje individual: ₺17-23 sin tarjeta (caro)",
          "Ferry Bosforo: ₺17 (15 min, mejor que tours ₺30+)",
          "Metrobús/Metro/Tranvía: Todo con Istanbulkart",
        ],
      },
      {
        category: "Atracciones & Museos",
        details: [
          "Santa Sofía: Gratuito (mezquita activa, respetar horarios)",
          "Topkapi Palace: ₺720 (~$24 USD)",
          "Basílica de Cisterna: ₺300 (~$10 USD)",
          "Gran Bazar: Entrada gratuita (compras dentro)",
        ],
      },
      {
        category: "Gastronomía",
        details: [
          "Dóner Kebab: ₺50-80 ($2-3 USD)",
          "Meze + pasta (cena local): ₺150-250 ($5-8 USD)",
          "Çay (té turco): ₺10 (€0.30 USD)",
          "Baklava: ₺20-30 ($0.70-1 USD)",
        ],
      },
    ],
    faq: [
      {
        question: "¿Vale la pena el crucero por el Bosforo?",
        answer: "Sí, pero no hagas un tour caro (₺30-50). Toma el ferry regular (₺17) de Eminönü a Üsküdar — 15 minutos, mismo viaje, auténtico.",
      },
      {
        question: "¿Es seguro Estambul para viajeros?",
        answer: "Sí, es muy seguro en zonas turísticas. Beyoğlu y Sultanahmet son seguras. Los pickpockets existen en el Gran Bazar — mantén bolsos cerrados.",
      },
      {
        question: "¿Cuántos días necesito?",
        answer: "Mínimo 3 días: 1 Santa Sofía/Topkapi, 1 Gran Bazar + Bazar Especias, 1 Beyoğlu + lado asiático. 4-5 para respirar y disfrutar más lentamente.",
      },
      {
        question: "¿Cuál es la mejor época para visitar?",
        answer: "Abril-junio y septiembre-octubre (20-25°C, primavera/otoño). Evita julio-agosto (muy caliente, 35+°C) e invierno (lluvioso, frío).",
      },
    ],
  },
  {
    slug: "ciudad-de-mexico",
    name: "Ciudad de México",
    country: "México",
    emoji: "🌮",
    tagline: "Tacos, pirámides y la mayor metrópolis de América Latina",
    description: "Ciudad de México es una de las ciudades más fascinantes del mundo: 21 millones de personas, Teotihuacán a 50 km, los mejores tacos del planeta, los murales de Diego Rivera y una escena gastronómica que compite con cualquier capital mundial.",
    highlights: [
      { icon: "🏛️", title: "Teotihuacán", desc: "La ciudad prehispánica con la Pirámide del Sol, la tercera más grande del mundo" },
      { icon: "🌮", title: "Tacos y gastronomía", desc: "La capital gastronómica de México con los mejores tacos, moles y mezcales" },
      { icon: "🎨", title: "Murales de Diego Rivera", desc: "Los murales del Palacio Nacional y Bellas Artes narran toda la historia de México" },
      { icon: "🚤", title: "Xochimilco", desc: "Las chinampas aztecas con trajineras, mariachis y flores entre los canales prehispánicos" },
    ],
    bestSeason: "Octubre a mayo (temporada seca)",
    currency: "Peso mexicano (MXN)",
    language: "Español",
    avgBudget: "$50–100 USD/día",
    continent: "América",
    tips: [
      "Teotihuacán se visita mejor llegando antes de las 8am cuando hay poca gente y el sol no pega fuerte. A mediodía el calor es agotador y la pirámide del Sol especialmente castigadora.",
      "El Metro de CDMX es el más barato del mundo ($0.25 USD por viaje) y llega a prácticamente todos los puntos turísticos. En horas pico las líneas 1, 2 y 3 están muy saturadas.",
      "Los tacos de canasta en las colonias Doctores, Escandón o Narvarte cuestan la quinta parte que en las zonas turísticas de Polanco o Condesa. La calidad es igual o superior.",
      "La Lucha Libre en la Arena México (martes y viernes desde las 7:30pm) tiene boletos desde $6 USD. Es una experiencia cultural única que va mucho más allá del deporte.",
    ],
  },
  {
    slug: "singapur",
    name: "Singapur",
    country: "Singapur",
    emoji: "🦁",
    tagline: "El futuro del siglo XXI en el trópico",
    description: "Singapur es una de las ciudades más ordenadas, limpias y futuristas del mundo. Los Supertrees de Gardens by the Bay, el Marina Bay Sands, la gastronomía de los hawker centres y el zoo más premiado del mundo hacen de esta ciudad-estado una experiencia única.",
    highlights: [
      { icon: "🌿", title: "Gardens by the Bay", desc: "Los Supertrees futuristas y las cúpulas Cloud Forest y Flower Dome, íconos del siglo XXI" },
      { icon: "🏨", title: "Marina Bay Sands", desc: "El hotel más icónico de Asia con la piscina infinita y el SkyPark a 200 metros" },
      { icon: "🍜", title: "Hawker Centres", desc: "La gastronomía callejera más premiada del mundo, con platos desde SGD 4" },
      { icon: "🦁", title: "Singapore Zoo", desc: "El mejor zoo del mundo con hábitats sin rejas y los orangutanes de Borneo en semilibertad" },
    ],
    bestSeason: "Febrero a abril",
    currency: "Dólar de Singapur (SGD)",
    language: "Inglés · chino · malayo · tamil",
    avgBudget: "$120–220 USD/día",
    continent: "Asia",
    tips: [
      "Los hawker centres tienen platos desde SGD 3–5 ($2–4 USD). El Chinatown Complex es el más auténtico; Newton Food Centre y Maxwell son famosos pero tienen precios turísticos más altos.",
      "Las Gardens by the Bay de noche son más impresionantes que de día: el espectáculo de luces de los Supertrees (Garden Rhapsody) es gratuito a las 7:45pm y 8:45pm.",
      "El transporte público de Singapur (MRT + buses) es el más eficiente de Asia. Usá tu tarjeta de débito/crédito contactless directamente — no necesitás comprar una tarjeta separada.",
      "La visa de Singapur es gratuita para la mayoría de los países latinoamericanos. Igualmente, llevá comprobante de vuelo de regreso y fondos suficientes para mostrar en inmigración.",
    ],
  },
  {
    slug: "medellin",
    name: "Medellín",
    country: "Colombia",
    emoji: "💐",
    tagline: "La ciudad de la eterna primavera",
    description: "Medellín es la historia de transformación urbana más increíble del mundo. La ciudad que fue capital de la violencia en los años 90 es hoy la más innovadora de Colombia: metrocable, Plaza Botero, el Jardín Botánico y la mejor gastronomía de Antioquia.",
    highlights: [
      { icon: "🎨", title: "Plaza Botero", desc: "23 esculturas originales de Fernando Botero donadas a su ciudad natal, de acceso libre" },
      { icon: "🚡", title: "Metrocable", desc: "El sistema de cables aéreos que conecta los barrios de las laderas con el centro de Medellín" },
      { icon: "🌺", title: "Jardín Botánico", desc: "El jardín más biodiverso de Colombia con el Orquideórama de arquitectura paramétrica premiado" },
      { icon: "☕", title: "Café colombiano", desc: "Medellín está rodeada de cafetales a 30 min — el café de especialidad más auténtico de Colombia" },
    ],
    bestSeason: "Diciembre a marzo / Julio a agosto",
    currency: "Peso colombiano (COP)",
    language: "Español",
    avgBudget: "$40–80 USD/día",
    continent: "América",
    tips: [
      "El Metrocable es transporte público real (no turístico): la tarjeta Cívica cuesta igual que el metro. Desde la estación Santo Domingo, el Parque Biblioteca tiene arquitectura premiada internacionalmente.",
      "La 70 (Avenida El Poblado) en el barrio de Laureles tiene mejor ambiente, mejor precio y más autenticidad que los bares del Parque Lleras. Para locales, es la primera opción.",
      "La temporada de cerezos en el Parque del Poblado es en febrero. Una colonia de jacarandas florece en violeta intenso — completamente inesperado y gratuito en una ciudad tropical.",
      "Los tours al Peñol de Guatapé (2.5 hs desde Medellín) se hacen en bus desde la Terminal del Norte por COP 20.000 ($5 USD) ida y vuelta. No necesitás tour organizado.",
    ],
  },
  {
    slug: "viena",
    name: "Viena",
    country: "Austria",
    emoji: "🎻",
    tagline: "La capital mundial de la música clásica",
    description: "Viena es la ciudad de los Habsburgo, Mozart, Freud y Klimt. Los palacios de Schönbrunn y el Hofburg, la Ópera de Estado, el Kunsthistorisches Museum y los cafés históricos hacen de la capital austríaca una de las ciudades más elegantes y culturales del mundo.",
    highlights: [
      { icon: "🏰", title: "Palacio de Schönbrunn", desc: "El palacio de verano imperial con 1.441 habitaciones y jardines con la Gloriette" },
      { icon: "🎵", title: "Ópera de Estado", desc: "El templo mundial de la ópera clásica con entradas de pie desde €4 para los mejores artistas" },
      { icon: "🌹", title: "El Beso de Klimt", desc: "La pintura más valiosa de Austria en el Palacio Belvedere — pan de oro real sobre el lienzo" },
      { icon: "☕", title: "Cafés históricos", desc: "Los cafés vieneses son Patrimonio Cultural Inmaterial UNESCO — donde vivió la intelligentsia europea" },
    ],
    bestSeason: "Abril a junio / Septiembre a octubre",
    currency: "Euro (EUR)",
    language: "Alemán",
    avgBudget: "$120–220 USD/día",
    continent: "Europa",
    tips: [
      "El pase de 72 horas de la Wiener Linien (€24) cubre metro, tranvía y autobús sin límite. Los inspectores son frecuentes y las multas altas — validá siempre el título de transporte.",
      "La Ópera de Estado vende entradas de pie (Stehplatz) desde €4 para los mejores espectáculos. La cola empieza 80 minutos antes del inicio — es parte de la tradición vienesa.",
      "Los cafés históricos (Café Central, Café Hawelka, Demel) cobran por la silla incluso si solo pedís agua. El Kleines Café en el Franziskanerplatz es el favorito de los vieneses cotidianos.",
      "El Palacio de Schönbrunn tiene dos niveles de visita: el recorrido de 22 habitaciones (€16) y el Grand Tour de 40 habitaciones (€22). Las vistas desde la Gloriette al fondo del jardín son gratuitas.",
    ],
  },
];

export function getDestination(slug: string): Destination | undefined {
  return destinations.find(d => d.slug === slug);
}
