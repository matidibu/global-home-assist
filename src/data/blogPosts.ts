export type ContentSection =
  | { type: "intro"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "callout"; emoji: string; text: string }
  | { type: "tip"; title: string; text: string }
  | { type: "cta"; destination?: string; city?: string; country?: string; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "guias" | "presupuesto" | "destinos" | "tecnologia" | "consejos";
  categoryLabel: string;
  readTime: number;
  publishDate: string;
  tags: string[];
  heroEmoji: string;
  metaTitle: string;
  metaDescription: string;
  sections: ContentSection[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "planificar-viaje-con-ia",
    title: "El algoritmo que planifica viajes mejor que cualquier agencia (y es gratis)",
    excerpt: "Durante décadas, planificar un viaje significó lo mismo: horas en Google, comisiones a agencias o itinerarios genéricos que no te conocen. La inteligencia artificial cambió las reglas del juego.",
    category: "tecnologia",
    categoryLabel: "Tecnología",
    readTime: 5,
    publishDate: "2025-03-10",
    tags: ["IA viajes", "planificador automático", "itinerario inteligente", "travel tech"],
    heroEmoji: "🤖",
    metaTitle: "Planificar viaje con IA: el nuevo estándar que las agencias no te cuentan",
    metaDescription: "Descubrí cómo la inteligencia artificial genera itinerarios de viaje personalizados en segundos, optimizando rutas, horarios y preferencias que ningún agente de viajes puede procesar manualmente.",
    sections: [
      {
        type: "intro",
        text: "Durante décadas, planificar un viaje significó lo mismo: gastar horas en Google, pagar comisiones a agencias o confiar en itinerarios genéricos que no te conocen. La inteligencia artificial cambió las reglas del juego, y la mayoría de los viajeros todavía no se enteró.",
      },
      {
        type: "h2",
        text: "Por qué los itinerarios genéricos arruinan viajes",
      },
      {
        type: "p",
        text: "Si alguna vez buscaste \"qué ver en Roma en 3 días\" y te devolvió el Coliseo, el Vaticano y la Fontana di Trevi en ese orden exacto... bienvenido al problema. Ese itinerario existe en 50.000 blogs, y ninguno sabe si sos foodie, si detestás las multitudes o si viajás en familia con un nene de 5 años.",
      },
      {
        type: "p",
        text: "Los itinerarios genéricos son como recetas de cocina sin adaptar a tu dieta: funcionan para el promedio, pero casi nadie es el promedio. El resultado es un viaje que se parece más a una lista de tareas que a una experiencia.",
      },
      {
        type: "h2",
        text: "Qué puede hacer la IA que un agente de viajes no puede",
      },
      {
        type: "p",
        text: "Un buen agente de viajes tiene intuición y experiencia. Pero también tiene 20 clientes al mismo tiempo, un catálogo de proveedores con acuerdos comerciales, y probablemente nunca estuvo en el barrio que más te convendría visitar. No es su culpa — es el límite del modelo.",
      },
      {
        type: "p",
        text: "Una IA entrenada con millones de reseñas, itinerarios reales y datos geográficos puede hacer algo diferente: optimizar una ruta considerando tus horarios de apertura, tu ritmo de viaje, el clima probable y tus preferencias específicas, todo al mismo tiempo.",
      },
      {
        type: "list",
        items: [
          "Rutas geográficamente optimizadas para no perder tiempo en traslados innecesarios",
          "Horarios reales de apertura de cada atracción (no los de Wikipedia de 2021)",
          "Estimaciones de tiempo de visita basadas en datos reales de viajeros",
          "Sugerencias ajustadas al tipo de viaje: familia, solo, pareja, negocios, aventura",
          "Alertas sobre atracciones que requieren reserva anticipada",
        ],
      },
      {
        type: "h2",
        text: "Lo que la IA todavía no puede hacer (honestidad ante todo)",
      },
      {
        type: "p",
        text: "No todo es perfecto. La IA no tiene olfato, no sabe si un restaurante en particular está mal atendido esta semana, y puede cometer errores en destinos muy poco documentados. La clave es usarla como punto de partida inteligente, no como oráculo infalible.",
      },
      {
        type: "callout",
        emoji: "💡",
        text: "La IA es el mejor co-piloto que existe para planificar un viaje. Vos sos el piloto. Usala para construir una base sólida y ajustá según tu intuición.",
      },
      {
        type: "h2",
        text: "Cómo funciona en la práctica",
      },
      {
        type: "p",
        text: "La herramienta de Global Home Assist usa inteligencia artificial para generar itinerarios completamente personalizados. Le indicás el destino, la cantidad de días y el tipo de viaje, y en menos de 30 segundos tenés un plan detallado con lugares reales, fotos actuales, mapas interactivos y rutas optimizadas.",
      },
      {
        type: "p",
        text: "Cada actividad incluye estimación de tiempo, mejor horario para visitar, si requiere entrada anticipada y opciones de reserva. Sin comisiones ocultas. Sin registro obligatorio. Sin el formulario de 20 preguntas de las agencias.",
      },
      {
        type: "tip",
        title: "Consejo de uso",
        text: "Especificá el tipo de viaje (placer, aventura, romántico, negocios, familiar) y el número exacto de días. Cuanta más información le des, más preciso y útil será el resultado.",
      },
      {
        type: "cta",
        text: "Probalo ahora — tu próximo itinerario en 30 segundos →",
      },
    ],
  },

  {
    slug: "viaje-europa-presupuesto-real",
    title: "Cómo viajar 7 días en Europa con 700€ sin mentirte",
    excerpt: "Cada semana aparece un nuevo artículo que promete 'Europa por €30/día'. La mayoría ignoran el vuelo, cuentan el hostel más incómodo del barrio, y suelen estar desactualizados. Este artículo no hace eso.",
    category: "presupuesto",
    categoryLabel: "Presupuesto",
    readTime: 7,
    publishDate: "2025-03-14",
    tags: ["viaje Europa barato", "presupuesto Europa", "ahorrar en viajes", "europa económico"],
    heroEmoji: "💶",
    metaTitle: "Viajar Europa barato en 2026: presupuesto real sin mentiras",
    metaDescription: "Cuánto cuesta realmente un viaje de 7 días en Europa en 2026. Breakdown honesto de vuelos, alojamiento, comida y transporte, con los mejores trucos para optimizar cada euro.",
    sections: [
      {
        type: "intro",
        text: "Cada semana aparece un nuevo artículo que promete 'Europa por €30/día'. La mayoría ignoran el vuelo, cuentan el hostel más incómodo del barrio, y suelen estar desactualizados por dos años. Este artículo no hace eso.",
      },
      {
        type: "h2",
        text: "El breakdown real de un viaje europeo de 7 días (2026)",
      },
      {
        type: "p",
        text: "Usemos Madrid–Barcelona–Lisboa como ejemplo, uno de los circuitos más populares. Estos son los números reales para 2026, sin suavizarlos ni inflarlos:",
      },
      {
        type: "list",
        heading: "Costos aproximados por persona en temporada media",
        items: [
          "Vuelo ida y vuelta desde Latinoamérica: €350–550 (promedio realista: €420)",
          "Alojamiento 7 noches (hostal cómodo o Airbnb bien ubicado): €180–280",
          "Transporte interno entre ciudades (buses/trenes): €80–120",
          "Comida (€25–40/día incluyendo alguna cena en restaurante): €175–280",
          "Atracciones y museos: €60–100",
          "TOTAL estimado: €715–1.170 por persona",
        ],
      },
      {
        type: "p",
        text: "¿Se puede bajar? Sí, con trabajo. ¿A €30/día total? No. Con €700 podés tener un viaje de calidad real si optimizás las variables correctas.",
      },
      {
        type: "h2",
        text: "Dónde SÍ vale la pena gastar",
      },
      {
        type: "p",
        text: "El vuelo y el colchón no son donde ahorrás. Un vuelo incómodo te arruina los primeros días de energía. Una cama horrible rota el sueño de todo el viaje. Invertí ahí y recortá en otro lado.",
      },
      {
        type: "list",
        items: [
          "Un hostal boutique bien ubicado siempre vale más que un hotel barato a 45 minutos del centro",
          "El tren nocturno (cuando existe) te ahorra una noche de hotel y un traslado — doble ahorro",
          "Las entradas anticipadas para el Vaticano, Uffizi o Sagrada Família cuestan igual pero te ahorran 2–3 horas de cola",
          "Un seguro de viaje completo: €30–60 para 7 días, y evita catástrofes de €8.000",
        ],
      },
      {
        type: "h2",
        text: "Dónde NO vale la pena gastar",
      },
      {
        type: "p",
        text: "Los tours organizados en bus con auriculares. Las excursiones del hotel. Los restaurantes con menú en inglés y fotos en la carta (señal universal de precio turístico). El 'taxi oficial del aeropuerto' cuando existe metro o bus.",
      },
      {
        type: "callout",
        emoji: "🚌",
        text: "El transporte público europeo es, en general, excelente, frecuente y seguro. El metro de Madrid, el bus de Barcelona, el Metropolitano de Lisboa — todos son mejores opciones que un auto para moverse en ciudad.",
      },
      {
        type: "h2",
        text: "La ciudad europea que más te da por tu dinero en 2026",
      },
      {
        type: "p",
        text: "Lisboa gana por goleada. Precios de hostal comparables a Madrid pero con menos turistas en las zonas residenciales, comida deliciosa y más barata, y una escena cultural que muchos aún no descubrieron. Praga, Cracovia y Belgrado también están entre las mejores relaciones calidad-precio de Europa en este momento.",
      },
      {
        type: "p",
        text: "París y Amsterdam siguen siendo caras. Hermosas, absolutamente. Baratas, para nada. Si el presupuesto es ajustado, priorizá destinos de Europa Central y del Este o la Península Ibérica.",
      },
      {
        type: "h2",
        text: "El truco del timing que nadie explica bien",
      },
      {
        type: "p",
        text: "No es solo 'evitá el verano'. Es entender que viajar en temporada media (abril–mayo, septiembre–octubre) no solo baja los precios entre 20–40% — también mejora la experiencia. Menos colas, clima agradable, locales más relajados, ciudades que todavía se sienten como ciudades.",
      },
      {
        type: "tip",
        title: "Protip de vuelos",
        text: "Los martes y miércoles entre las 23:00 y 00:00 suelen mostrar los precios más bajos en buscadores de vuelos. Los algoritmos de precios dinámicos tienden a actualizarse a la baja en esas ventanas. No es garantía absoluta, pero vale revisar.",
      },
      {
        type: "cta",
        text: "Planificá tu itinerario europeo gratis con IA →",
      },
    ],
  },

  {
    slug: "dubai-guia-honesta-viajero",
    title: "Dubai sin filtros: lo que Instagram no te muestra",
    excerpt: "Dubai es la ciudad más fotografiada del mundo y, probablemente, la más malinterpretada. No es solo un mall gigante con palmeras artificiales. La verdad es más interesante que cualquiera de los dos extremos.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 6,
    publishDate: "2025-03-17",
    tags: ["qué ver en Dubai", "guía Dubai", "Dubai viaje", "Dubai presupuesto"],
    heroEmoji: "🏙️",
    metaTitle: "Guía de Dubai honesta: lo que nadie te cuenta antes de viajar",
    metaDescription: "La guía de Dubai que no te venden las agencias: qué vale la pena, dónde comer sin pagar precios de aeropuerto, cómo moverse y cuándo ir de verdad.",
    sections: [
      {
        type: "intro",
        text: "Dubai es la ciudad más fotografiada del mundo y, probablemente, la más malinterpretada. No es solo un mall gigante con palmeras artificiales. Tampoco es el paraíso de glamour infinito que Instagram promete. La verdad está en el medio, y es más interesante que cualquiera de los dos extremos.",
      },
      {
        type: "h2",
        text: "El Dubai que existía antes de los rascacielos",
      },
      {
        type: "p",
        text: "Hay una parte de Dubai que existía antes del petróleo, antes del Burj Khalifa, antes de los hoteles flotantes. Se llama Deira, y está a un viaje en abra (barca de madera) de menos de AED 1 (~$0.27). Ahí están los souks del oro, las especias y las telas, donde los precios se negocian y el ambiente no tiene nada de artificial.",
      },
      {
        type: "p",
        text: "Si hacés Dubai sin pisar Deira, hiciste la mitad del viaje. Es la parte que la mayoría de los tours de día completo omiten porque no hay comisión que ganar ahí.",
      },
      {
        type: "h2",
        text: "¿El Burj Khalifa vale la pena o es una trampa?",
      },
      {
        type: "p",
        text: "Respuesta honesta: depende de cómo lo hacés. La entrada al piso 124 cuesta AED 145 (~$40) si la comprás con anticipación. Si la comprás el mismo día: AED 300 o más. El piso 148 (At the Top Sky) supera los $100.",
      },
      {
        type: "p",
        text: "La vista es genuinamente impresionante. Pero si vas a subir, subí de noche y comprá anticipado con al menos 2 días de antelación. El Burj como foto desde abajo, en cambio, es gratis y casi más icónico.",
      },
      {
        type: "callout",
        emoji: "🌃",
        text: "Dubai Frame al atardecer puede competir perfectamente con la vista desde el Burj Khalifa. Y cuesta una quinta parte. El ángulo del skyline desde ahí es diferente — y el marco de vidrio es, en sí mismo, arquitectura impresionante.",
      },
      {
        type: "h2",
        text: "Comer en Dubai sin pagar precios de aeropuerto",
      },
      {
        type: "p",
        text: "El Dubai Mall tiene restaurantes que cobran AED 100+ (~$28) por plato. A 10 minutos caminando en cualquier dirección fuera del mall hay cocina india, pakistaní, libanesa y etíope que te da dos veces más comida por un tercio del precio.",
      },
      {
        type: "list",
        heading: "Referencia de precios reales en zonas locales",
        items: [
          "Mandi de pollo en Al Karama: AED 15 (~$4)",
          "Shawarma de la esquina en Bur Dubai: AED 8 (~$2)",
          "Falafel fresco en Deira: AED 5 (~$1.5)",
          "Manoushe (pan libanés con queso y hierbas): AED 6 (~$1.6)",
          "Hamburguesa en food court del mall: AED 65+ (~$18)",
        ],
      },
      {
        type: "p",
        text: "Al Karama y Bur Dubai son los barrios donde comen los residentes. Ahí está la comida real, preparada por personas que llevan décadas viviendo en Dubai.",
      },
      {
        type: "h2",
        text: "Cómo moverse en Dubai sin volverse loco",
      },
      {
        type: "p",
        text: "El metro de Dubai es moderno, climatizado y mucho más barato que cualquier taxi. Conecta la mayoría de las atracciones turísticas de la Sheikh Zayed Road. El problema: Deira y Bur Dubai requieren combinar metro con taxi o una caminata desde la estación.",
      },
      {
        type: "tip",
        title: "Nol Card: hacelo simple",
        text: "Comprá una Nol Card (tarjeta recargable del transporte) en cualquier estación de metro. AED 25 la tarjeta incluye AED 19 de crédito inicial. Funciona en metro, bus y tranvía. Te ahorra tiempo y evita pagar tarifa turística en cada viaje.",
      },
      {
        type: "h2",
        text: "Cuándo ir (y cuándo definitivamente no ir)",
      },
      {
        type: "p",
        text: "Noviembre a marzo: clima perfecto, entre 20–28°C. Los precios del alojamiento suben pero la experiencia lo justifica. Esta es la ventana de los grandes eventos y la Dubai Shopping Festival.",
      },
      {
        type: "p",
        text: "Junio a septiembre: 40–45°C con humedad en la costa. Muchos viajeros aman el 'challenge'; la mayoría prefieren evitarlo. Si vas en verano, vivirás de air conditioning en air conditioning — perfectamente válido si el precio es tu prioridad, ya que los hoteles bajan hasta 60%.",
      },
      {
        type: "cta",
        destination: "dubai",
        text: "Generá tu itinerario personalizado para Dubai →",
      },
    ],
  },

  {
    slug: "roma-48-horas-itinerario",
    title: "Roma en 48 horas: el itinerario que los romanos aprueban",
    excerpt: "Todos los blogs tienen una guía de Roma. La mayoría tienen el mismo itinerario copiado. Este asume que ya sabés que Roma existe y que querés saber cómo no desperdiciar 48 horas haciendo cola para ver la Capilla Sixtina.",
    category: "guias",
    categoryLabel: "Guías",
    readTime: 8,
    publishDate: "2025-03-19",
    tags: ["qué ver en Roma", "itinerario Roma 2 días", "Roma en 48 horas", "viaje Roma"],
    heroEmoji: "🏛️",
    metaTitle: "Roma en 48 horas: el itinerario real que nadie publica",
    metaDescription: "La guía de Roma para los que odian las guías de Roma: cómo ver el Coliseo, el Vaticano y lo mejor de la ciudad en 2 días sin colas, sin stress y sin itinerarios copiados.",
    sections: [
      {
        type: "intro",
        text: "Todos los blogs de viaje tienen una guía de Roma. La mayoría tienen el mismo itinerario copiado y recopiado. Este artículo lo escribimos asumiendo que ya sabés que Roma existe y que querés saber cómo no desperdiciar 48 horas siendo otra persona que hace cola 3 horas para ver la Capilla Sixtina.",
      },
      {
        type: "h2",
        text: "Las dos reglas de Roma (sin las cuales nada funciona)",
      },
      {
        type: "p",
        text: "Regla 1: Todo lo que quieras ver requiere reserva anticipada. El Coliseo, los Museos Vaticanos, los Museos Capitolinos — todos tienen sistemas de reserva online y las entradas del día se agotan o triplican de precio. No improvises en Roma, especialmente de abril a octubre.",
      },
      {
        type: "p",
        text: "Regla 2: Roma es una ciudad para caminar, no para tomar decisiones de transporte cada hora. Elegí un alojamiento en el centro histórico y te ahorrarás tiempo, dinero y frustración. No importa si es €30 más caro por noche: el metro te hace perder tiempo que no recuperás.",
      },
      {
        type: "h2",
        text: "Día 1: Foro Romano, Coliseo y Trastevere",
      },
      {
        type: "p",
        text: "Empezá a las 8am en el Foro Romano. Llegá antes de que lleguen los grupos de tour y recorrelo despacio durante 90 minutos — es donde Roma realmente te habla. El Coliseo está a 200 metros y está incluido en la misma entrada combinada (€16–22 según tarifa). Reservalo con al menos 3 días de anticipación.",
      },
      {
        type: "p",
        text: "Para el almuerzo, alejate del radio inmediato al Coliseo. Las trattorias de la zona del Aventino o Testaccio tienen mejor precio y calidad. A la tarde, cruzá el Tíber hacia Trastevere. El barrio está hecho para perderse sin destino — es el único momento del viaje donde no necesitás itinerario.",
      },
      {
        type: "callout",
        emoji: "🍕",
        text: "Pizza al taglio para el almuerzo: €4–6 por dos porciones generosas. La regla de oro: buscá la que tiene fila de locales comiendo parados, no de turistas sentados esperando carta.",
      },
      {
        type: "h2",
        text: "Día 2: Vaticano sin el drama de las colas",
      },
      {
        type: "p",
        text: "El error clásico es llegar a la Plaza de San Pedro a las 10am y encontrarse con 2.000 personas esperando. La solución es una sola: entrada anticipada a los Museos Vaticanos para las 8am, de lunes a sábado. Tenés 2 horas antes de que llegue el primer grupo de tour organizado.",
      },
      {
        type: "p",
        text: "Los museos son gigantescos — 7km de galerías. Si tenés solo 2–3 horas, priorizá la Galería de los Mapas (la más impresionante visualmente), la Capilla Sixtina y la Basílica de San Pedro. Dejá el resto para otra visita.",
      },
      {
        type: "tip",
        title: "La salida secreta del Vaticano",
        text: "Los Museos Vaticanos tienen una salida directa a la Basílica de San Pedro sin volver a la plaza principal. No siempre está señalizada — preguntale a cualquier guardia vaticano. Te ahorra 20 minutos de caminata y una pequeña multitud.",
      },
      {
        type: "h2",
        text: "Navona, Panteón y la Fontana di Trevi (el orden importa)",
      },
      {
        type: "p",
        text: "Fontana di Trevi: id antes de las 8am o después de las 22hs. El resto del tiempo hay literalmente 500 personas empujándose para sacar la misma foto contra el mismo ángulo. De noche está iluminada y hay mucho menos gente — la experiencia es completamente diferente.",
      },
      {
        type: "p",
        text: "La Plaza Navona y el Panteón están a 10 minutos caminando entre sí y son perfectos para la última tarde. El Panteón cuesta €5 (sí, le pusieron precio recientemente) y tiene 2.000 años de antigüedad. Es uno de los edificios mejor conservados del mundo romano. Que el precio te dé perspectiva.",
      },
      {
        type: "h2",
        text: "El error que comete el 90% de los turistas en Roma",
      },
      {
        type: "p",
        text: "Intentar verlo todo. Roma tiene suficiente para 2 semanas de viaje tranquilo. En 48 horas, menos es más. Tres lugares vividos bien y con tiempo valen infinitamente más que doce lugares vistos corriendo. Resistí la tentación de agregar 'una visita rápida' a cada cosa que aparece en el mapa.",
      },
      {
        type: "cta",
        destination: "roma",
        text: "Generá tu itinerario personalizado para Roma →",
      },
    ],
  },

  {
    slug: "barcelona-vs-madrid-cual-elegir",
    title: "Barcelona vs Madrid: la guía sin drama para elegir bien",
    excerpt: "Esta es la discusión que más divide a los viajeros que van a España. Ambas ciudades tienen fanáticos devotos y detractores acérrimos. Nosotros no tenemos bando — tenemos datos.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 6,
    publishDate: "2025-03-21",
    tags: ["Barcelona o Madrid", "Barcelona vs Madrid turismo", "qué ciudad visitar España", "viaje España"],
    heroEmoji: "🇪🇸",
    metaTitle: "Barcelona vs Madrid: la comparativa honesta para viajeros en 2026",
    metaDescription: "¿Barcelona o Madrid para tu próximo viaje? La guía sin favoritismos que compara gastronomía, arquitectura, nightlife, presupuesto y experiencia total para ayudarte a elegir bien.",
    sections: [
      {
        type: "intro",
        text: "Esta es la discusión que más divide a los viajeros que van a España por primera vez. Ambas ciudades tienen fanáticos devotos y detractores apasionados. Nosotros no tenemos bando — tenemos datos y viajamos a las dos.",
      },
      {
        type: "h2",
        text: "Si eres foodie",
      },
      {
        type: "p",
        text: "Madrid gana en cocina de interior: carnívoros, vísceras, guisos y el universo de las tapas clásicas. Las tabernas de La Latina, el cocido madrileño, los callos a la madrileña y el mercado de San Miguel son únicos en su género. El bocadillo de calamares frente al Palacio Real a las 12pm es una experiencia cultural en sí misma.",
      },
      {
        type: "p",
        text: "Barcelona gana en cocina mediterránea ligera, mariscos frescos y la nueva gastronomía catalana que combinó técnica francesa con ingredientes locales. El Boqueria está completamente masificado (evitalo), pero El Ninot o el Mercat de l'Abaceria son versiones más reales del mismo concepto.",
      },
      {
        type: "callout",
        emoji: "🥘",
        text: "Para tapas clásicas de bar: Madrid. Para experiencias gastronómicas innovadoras y seafood: Barcelona. Para las dos en profundidad: planificá al menos 4 días en cada una.",
      },
      {
        type: "h2",
        text: "Si te importa la arquitectura",
      },
      {
        type: "p",
        text: "Barcelona sin discusión. La Sagrada Família, la Casa Batlló, el Park Güell, el Palau de la Música Catalana, el Pavelló Mies van der Rohe — ninguna ciudad tiene una densidad de arquitectura icónica y singular comparable en un radio tan pequeño.",
      },
      {
        type: "p",
        text: "Madrid tiene el Triángulo del Arte (Prado, Reina Sofía, Thyssen-Bornemisza) que es uno de los concentrados museísticos más importantes del mundo, y una arquitectura de bulevar magnífica. Pero no tiene ese '¿qué es eso?' constante caminando por la calle que te da Barcelona.",
      },
      {
        type: "h2",
        text: "Si buscás vida nocturna",
      },
      {
        type: "p",
        text: "Ambas ciudades duermen tarde — muy tarde. Madrid tiene fama de no dormir nunca y la fama es justa: la noche madrileña empieza cuando otras ciudades europeas ya pusieron el cartel de cerrado. El barrio de Malasaña y Chueca tienen una energía de madrugada única.",
      },
      {
        type: "p",
        text: "Barcelona tiene clubs de renombre internacional (Razzmatazz, Input, Pacha) y una escena electrónica consolidada. El ambiente de barrio en el Raval y El Born a las 2am también es difícil de superar — más cosmopolita, más mezclado.",
      },
      {
        type: "h2",
        text: "Si tenés solo 3 días para elegir una",
      },
      {
        type: "p",
        text: "Barcelona. La densidad de experiencias visuales y arquitectónicas por kilómetro cuadrado es mayor. Podés hacer Gaudí el día 1, Gothic Quarter más Barceloneta el día 2, y Gracia más El Born el día 3, y salir con un viaje redondo.",
      },
      {
        type: "p",
        text: "Madrid en 3 días se siente incompleto porque la ciudad se disfruta más al ritmo lento de tapas y callejeo que con itinerario apretado. Madrid necesita tiempo — y te recompensa con más tiempo.",
      },
      {
        type: "h2",
        text: "El veredicto (aunque no te guste)",
      },
      {
        type: "p",
        text: "No hay una respuesta correcta. Pero para alguien que nunca fue a España: Barcelona primero, por su singularidad arquitectónica y visual. Madrid después, con más tiempo y disposición para profundizar en cultura y gastronomía castiza.",
      },
      {
        type: "p",
        text: "Y si tenés 10 días: hacé las dos. El AVE Madrid–Barcelona tarda 2:30hs y conecta perfectamente. No elegir entre ellas es la mejor decisión posible.",
      },
      {
        type: "tip",
        title: "El combo perfecto para 10 días",
        text: "Volá a Barcelona de entrada, terminá en Madrid (o al revés). Muchas aerolíneas permiten vuelos de entrada y salida en ciudades distintas sin sobrecosto significativo — buscá como 'vuelo open-jaw' en cualquier buscador.",
      },
      {
        type: "cta",
        text: "Generá tu itinerario para Barcelona o Madrid con IA →",
      },
    ],
  },

  {
    slug: "errores-comunes-al-viajar",
    title: "Los 7 errores que arruinan un viaje (y cómo evitarlos)",
    excerpt: "Después de analizar miles de itinerarios y reseñas de viajeros, hay 7 errores que aparecen una y otra vez. No son los obvios. Son los más sutiles — y los más devastadores.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 7,
    publishDate: "2025-03-23",
    tags: ["errores al viajar", "consejos de viaje", "cómo planificar viaje", "tips viajero"],
    heroEmoji: "⚠️",
    metaTitle: "7 errores que arruinan viajes (y cómo evitarlos con IA)",
    metaDescription: "Los 7 errores más comunes al planificar un viaje que nadie menciona porque son sutiles: desde planificar demasiado hasta elegir mal el alojamiento. Con soluciones concretas.",
    sections: [
      {
        type: "intro",
        text: "Después de analizar miles de itinerarios y reseñas de viajeros de todo el mundo, hay 7 errores que aparecen una y otra vez. No son los obvios — nadie olvida el pasaporte dos veces. Son los sutiles: los que destruyen un viaje que parecía bien planificado.",
      },
      {
        type: "h2",
        text: "Error #1: Planificar demasiado (o demasiado poco)",
      },
      {
        type: "p",
        text: "Un itinerario hora por hora genera ansiedad y no deja margen para los mejores momentos de todo viaje: los accidentales. La cafetería sin nombre con el mejor croissant del barrio. El festival callejero que no estaba en ningún blog. La conversación con un local que cambia el plan del día.",
      },
      {
        type: "p",
        text: "Pero cero planificación genera caos: gastos innecesarios, atracciones que se agotan, y la sensación de haber desperdiciado tiempo y dinero. El punto óptimo: definir las 2–3 prioridades irrenunciables de cada día y dejar el resto abierto.",
      },
      {
        type: "h2",
        text: "Error #2: Optimizar el precio del hotel en vez de la ubicación",
      },
      {
        type: "p",
        text: "El hotel que está €30 más barato pero a 45 minutos del centro te cuesta exactamente eso en transporte diario. Más 1.5 horas de tu día. Cada día. En un viaje de 7 días, eso es más de 10 horas perdidas en traslados y €210 extra en transporte.",
      },
      {
        type: "p",
        text: "La ubicación del alojamiento es la variable con mayor impacto en la experiencia de un viaje corto. No en el precio — en la experiencia. Priorizala.",
      },
      {
        type: "h2",
        text: "Error #3: Ignorar el transporte público local",
      },
      {
        type: "p",
        text: "En casi todas las ciudades del mundo desarrollado, el transporte público es más rápido, más barato y más confiable que los taxis o rideshares en horario pico. El metro de Tokyo, el Tube de Londres, el metro de la Ciudad de México — todos son mejores opciones que un auto la mayor parte del tiempo en ciudad.",
      },
      {
        type: "callout",
        emoji: "🚇",
        text: "Descargá Citymapper antes de llegar a cualquier ciudad. Es más preciso que Google Maps para transporte público local, funciona offline y te da opciones con tiempos reales, no estimados.",
      },
      {
        type: "h2",
        text: "Error #4: Subestimar el tiempo real en atracciones grandes",
      },
      {
        type: "p",
        text: "'El Louvre en 2 horas' es una broma interna de los guías turísticos de París. El Louvre tiene 35.000 obras en 73.000m². En 2 horas vas a caminar mucho, ver poco y salir frustrado. O elegís 3–4 salas específicas con intención (ej: Ala Denon + Mona Lisa + escultura griega), o reservás medio día.",
      },
      {
        type: "p",
        text: "Este error multiplica la frustración en cadena: llegás cansado a lo siguiente, no tenés tiempo para lo que sigue, y terminás el día sin haber disfrutado ninguna de las dos cosas bien. Siempre estimá más tiempo del que creés necesitar en los grandes museos.",
      },
      {
        type: "h2",
        text: "Error #5: No tener un plan B para el clima",
      },
      {
        type: "p",
        text: "Una lluvia en Tokio, una ola de calor en Bangkok o un día de viento fuerte en Santorini pueden arruinar un día completo de itinerario al aire libre. Tener una lista mental de 'plan B por clima' — museos de segunda línea, mercados cubiertos, cafés con buena reputación, barrios para explorar bajo techo — vale oro.",
      },
      {
        type: "h2",
        text: "Error #6: Ir sin seguro de viaje",
      },
      {
        type: "p",
        text: "No lo mencionamos porque 'hay que mencionarlo'. Lo mencionamos porque conocemos la historia de la persona que no lo tomó y tuvo que pagar €8.000 de guardia médica en EEUU por una apendicitis. O los €3.500 de vuelo de reemplazo por una cancelación. El seguro de viaje cuesta €30–80 para una semana europea. Es el gasto más inteligente del viaje.",
      },
      {
        type: "tip",
        title: "Qué cubrir sí o sí",
        text: "Gastos médicos (mínimo €100.000 de cobertura), cancelación y retraso de vuelo, pérdida de equipaje. El resto — deportes extremos, cancelación flexible — es opcional según tu perfil de viaje.",
      },
      {
        type: "h2",
        text: "Error #7: Planificar con información fragmentada y desactualizada",
      },
      {
        type: "p",
        text: "Planificar con 15 tabs abiertos de blogs contradictorios, foros con posts de 2019 y reseñas sin fecha es la forma más lenta y menos confiable de armar un viaje. El resultado suele ser un itinerario genérico, con información vieja, que no refleja tus preferencias reales.",
      },
      {
        type: "p",
        text: "En 2026, hay herramientas de IA que procesan toda esa información y te devuelven un itinerario personalizado en segundos. No se trata de que la IA piense por vos — se trata de tener un punto de partida inteligente que podés ajustar, en vez de construir todo desde cero con información fragmentada.",
      },
      {
        type: "cta",
        text: "Empezá con un itinerario inteligente — generalo gratis en 30 segundos →",
      },
    ],
  },

  {
    slug: "tokio-guia-primer-viaje",
    title: "Tokio para el viajero que nunca fue a Asia: la guía que ojalá hubieras tenido",
    excerpt: "Japón es el destino que más intimida antes de ir y el que más enamora después. Tokio no es difícil — es diferente. Esta guía existe para que esa diferencia sea una ventaja, no un obstáculo.",
    category: "guias",
    categoryLabel: "Guías",
    readTime: 9,
    publishDate: "2026-03-26",
    tags: ["qué ver en Tokio", "guía Tokyo primer viaje", "Japón viaje", "itinerario Tokio"],
    heroEmoji: "🗼",
    metaTitle: "Guía de Tokio para principiantes: todo lo que necesitás saber antes de ir",
    metaDescription: "La guía completa de Tokio para tu primer viaje a Japón: cómo moverse, dónde comer, qué ver y los errores que todos cometen. Con itinerario real de 5 días.",
    sections: [
      {
        type: "intro",
        text: "Japón es el destino que más intimida antes de ir y el que más enamora después. No porque sea peligroso ni difícil — sino porque es radicalmente diferente a todo lo que conocés. Esta guía existe para que esa diferencia sea una ventaja, no un obstáculo.",
      },
      {
        type: "h2",
        text: "Lo que nadie te dice antes del primer viaje a Tokio",
      },
      {
        type: "p",
        text: "Tokio tiene 14 millones de personas y una tasa de criminalidad más baja que la mayoría de las ciudades europeas. Podés dejar el celular en la mesa de un café y volver a encontrarlo. Eso no es un mito — es la norma. El miedo previo al viaje suele ser inversamente proporcional a lo cómodo que te vas a sentir cuando llegues.",
      },
      {
        type: "p",
        text: "El verdadero desafío no es la seguridad: es el sistema de transporte. Tokio tiene la red de metro más compleja del mundo con 13 líneas y múltiples operadores. Pero también tiene la mejor app para navigarla (Google Maps funciona perfectamente) y los trenes son puntuales al minuto.",
      },
      {
        type: "h2",
        text: "Transporte: la Suica Card que lo cambia todo",
      },
      {
        type: "p",
        text: "Lo primero que hacés al salir del aeropuerto: comprá una Suica Card (tarjeta recargable del sistema de transporte) en cualquier máquina de la estación. Carga ¥2000 (~$13 USD) para empezar. Funciona en metro, JR trains, buses, y también en convenience stores como 7-Eleven y FamilyMart.",
      },
      {
        type: "callout",
        emoji: "🚇",
        text: "Google Maps en Tokio es extraordinariamente preciso. Ingresá la dirección o el nombre del lugar en japonés (copiando desde una búsqueda) y te da la ruta exacta con transfers, andén, y tiempo de caminata. No necesitás entender el sistema — solo seguir las instrucciones.",
      },
      {
        type: "h2",
        text: "Los 5 barrios que definen Tokio",
      },
      {
        type: "list",
        items: [
          "Shibuya — El cruce peatonal más famoso del mundo y la energía más intensa de la ciudad. Imperdible de noche.",
          "Shinjuku — El hub central con el Golden Gai (callejones de bares minúsculos) y los rascacielos del Gobierno Metropolitano (vista gratis desde el piso 45).",
          "Asakusa — La Tokio histórica. El templo Senso-ji, los rickshaws y la Nakamise-dori para souvenirs sin trampa.",
          "Harajuku — La Takeshita Street con la moda más extrema del mundo. Adyacente al Meiji Shrine, el contraste absoluto.",
          "Yanaka — El barrio que sobrevivió los bombardeos de la Segunda Guerra. Calles de 1950, cementerio histórico, gatos y ningún turista.",
        ],
      },
      {
        type: "h2",
        text: "Comer en Tokio: el país con más estrellas Michelin del mundo",
      },
      {
        type: "p",
        text: "Tokio tiene más restaurantes con estrella Michelin que París, Lyon y Nueva York juntos. Pero el dato más relevante para la mayoría de los viajeros es otro: la comida barata en Japón es excepcional. Un ramen en un local sin nombre sale ¥800–1200 (~$5–8). Un sushi en Tsukiji Outer Market a las 7am es mejor que el 90% de los restaurantes de sushi del resto del mundo.",
      },
      {
        type: "tip",
        title: "Convenience store = gastronomía de verdad",
        text: "Los 7-Eleven, Lawson y FamilyMart japoneses son otra categoría de convenience store. Los onigiri (triángulos de arroz rellenos), los sandwiches tamago y el matcha latte del Family Mart son genuinamente buenos. Desayunar ahí es una experiencia local, no una concesión.",
      },
      {
        type: "h2",
        text: "Qué ver en 5 días: el orden importa",
      },
      {
        type: "list",
        heading: "Itinerario recomendado",
        items: [
          "Día 1: Asakusa + Ueno (jet lag, caminata lenta, templo Senso-ji, mercado Ameyoko)",
          "Día 2: Shibuya + Harajuku + Omotesando (el cruce de noche, Meiji Shrine temprano)",
          "Día 3: Shinjuku + día completo (Tokyo Govt Building gratis a las 6pm, Golden Gai noche)",
          "Día 4: Akihabara + Yanaka + Ueno (cultura pop, barrio histórico, museos)",
          "Día 5: Fuji-Q Highland o Nikko day trip (si el clima acompaña)",
        ],
      },
      {
        type: "h2",
        text: "El error más común: subestimar las distancias",
      },
      {
        type: "p",
        text: "Tokio es enorme. Ver Asakusa y Shibuya 'en el mismo día' suena lógico en el mapa, pero son 40 minutos de metro cada vez. Agregar Harajuku y Shinjuku al mismo día es viable. Agregar Akihabara ya es demasiado para disfrutar bien. Menos barrios por día, más profundidad en cada uno.",
      },
      {
        type: "cta",
        destination: "tokio",
        text: "Generá tu itinerario personalizado para Tokio →",
      },
    ],
  },

  {
    slug: "bali-guia-honesta-2026",
    title: "Bali en 2026: lo que los influencers no te muestran (y lo que sí vale la pena)",
    excerpt: "Bali tiene un problema de percepción: la mitad de las fotos que ves son reales pero requieren 2 horas de fila y edición pesada. La otra mitad de la isla, la que importa, casi nadie la fotografía.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 7,
    publishDate: "2026-03-28",
    tags: ["qué hacer en Bali", "guía Bali 2026", "Bali viaje", "Bali Instagram vs realidad"],
    heroEmoji: "🌴",
    metaTitle: "Bali 2026: guía honesta para viajeros — lo real vs Instagram",
    metaDescription: "La guía de Bali sin filtros: cuáles atracciones valen la pena, cuáles son una trampa turística, dónde quedarse y cómo moverse. Con presupuesto real para 2026.",
    sections: [
      {
        type: "intro",
        text: "Bali tiene un problema de percepción: la mitad de las fotos que ves en Instagram son reales, pero requieren 2 horas de fila, iluminación perfecta y edición pesada. La otra mitad de la isla — la que realmente importa — casi nadie la fotografía.",
      },
      {
        type: "h2",
        text: "La Bali que existe antes de Instagram",
      },
      {
        type: "p",
        text: "Bali tiene 4 millones de habitantes que siguen practicando una versión única del hinduismo balinés, con ceremonias diarias, ofrendas en cada esquina y templos que funcionan activamente. Esta Bali no necesita filtros y es accesible caminando desde cualquier hotel. Es la parte que la mayoría de los turistas pasan sin ver porque están en fila para la foto del columpio sobre el abismo.",
      },
      {
        type: "h2",
        text: "Las atracciones sobrevaloradas (con honestidad)",
      },
      {
        type: "list",
        items: [
          "Puertas del templo Lempuyang ('Gates of Heaven'): la foto es real, la fila es de 2–3 horas y hay un vidrio debajo que crea el reflejo. Decide vos si vale.",
          "Columpio de Ubud ('Bali Swing'): precio de $35–50 USD por 15 minutos. La foto es bonita. El valor, discutible.",
          "Tegalalang Rice Terraces: bellísimas, pero en 2026 requieren entrada de IDR 50.000 y hay vendedores cada 5 metros. Igual vale — llegá a las 7am.",
          "Monkey Forest de Ubud: los monos son agresivos con comida y mochilas. Cerrá todo y no llevés snacks.",
        ],
      },
      {
        type: "h2",
        text: "Lo que realmente vale la pena (y casi nadie menciona)",
      },
      {
        type: "p",
        text: "El templo Tirta Empul en Tampaksiring: los devotos balineses vienen a purificarse en los baños sagrados. Podés participar (con sarong, que prestan en la entrada). Es una de las experiencias más auténticas de Bali y no está en la mayoría de los itinerarios turísticos.",
      },
      {
        type: "p",
        text: "Sidemen Valley: el valle menos visitado de Bali, con arrozales tan buenos como Tegalalang pero sin la infraestructura turística. Quedarse una noche en Sidemen es, para muchos, el mejor recuerdo del viaje.",
      },
      {
        type: "callout",
        emoji: "🛵",
        text: "Alquilar una moto en Bali (~IDR 60.000/día = $4 USD) abre destinos imposibles en taxi. La única condición: que ya hayas manejado moto antes. Las carreteras de montaña no son el lugar para aprender.",
      },
      {
        type: "h2",
        text: "Dónde quedarse: la decisión más importante del viaje",
      },
      {
        type: "p",
        text: "Canggu es la base de los nómadas digitales y tiene la mejor escena de cafés y surf de la isla, pero perdió algo de autenticidad. Ubud es el centro cultural — rodeado de naturaleza, con clases de cocina y yoga. Seminyak es la opción más cómoda para familias. Nusa Penida (isla adyacente) es para los que buscan naturaleza pura y no les molesta la infraestructura limitada.",
      },
      {
        type: "tip",
        title: "Temporada en Bali",
        text: "Mayo a septiembre: estación seca, ideal. Julio y agosto son pico de turismo (precios 30–50% más altos). Octubre a abril: estación de lluvias — las lluvias son fuertes pero cortas, generalmente de tarde. Sigue siendo visitable y los precios bajan considerablemente.",
      },
      {
        type: "h2",
        text: "Presupuesto real para 7 días en Bali (2026)",
      },
      {
        type: "list",
        heading: "Estimación por persona en temporada media (2026)",
        items: [
          "Vuelo desde Europa o LATAM: $400–700 (el mayor gasto del viaje)",
          "Alojamiento 7 noches (villa privada o guesthouse cómoda): $150–350",
          "Comida (warung local a restaurante turístico): $15–30/día",
          "Transporte local (moto o taxi app Gojek): $5–10/día",
          "Entradas y actividades: $80–150 total",
          "TOTAL estimado: $900–1.500 por persona",
        ],
      },
      {
        type: "cta",
        destination: "bali",
        text: "Generá tu itinerario personalizado para Bali →",
      },
    ],
  },

  {
    slug: "buenos-aires-guia-viajero-extranjero",
    title: "Buenos Aires para el viajero del resto del mundo: la guía que escribiría un porteño",
    excerpt: "Buenos Aires tiene barrios que compiten con los mejores de Europa, una gastronomía que mezcla influencia italiana, española y judía, y una cultura nocturna que empieza cuando otras ciudades ya duermen. Pero también tiene trampas que solo los locales conocen.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 7,
    publishDate: "2026-03-30",
    tags: ["qué ver en Buenos Aires", "guía Buenos Aires", "visitar Argentina", "turismo Buenos Aires"],
    heroEmoji: "🥩",
    metaTitle: "Buenos Aires: guía completa para viajeros extranjeros en 2026",
    metaDescription: "La guía de Buenos Aires escrita desde adentro: qué barrios visitar, dónde comer asado de verdad, cómo moverse y las trampas turísticas que evitar.",
    sections: [
      {
        type: "intro",
        text: "Buenos Aires tiene barrios que compiten con los mejores de Europa, una gastronomía que mezcla influencia italiana, española y judía con producto local excepcional, y una cultura nocturna que empieza cuando otras ciudades ya duermen. Pero también tiene trampas que solo los locales conocen.",
      },
      {
        type: "h2",
        text: "Los barrios que definen Buenos Aires (y los que podés saltear)",
      },
      {
        type: "p",
        text: "Palermo es el barrio más grande y diverso: Palermo Soho tiene las mejores tiendas de diseño independiente y restaurantes creativos. Palermo Hollywood tiene la mayor concentración de productoras y una movida nocturna de bares. Las Cañitas es para una cena tranquila. Si tenés tiempo para un solo barrio, es Palermo.",
      },
      {
        type: "p",
        text: "San Telmo es el barrio histórico con la feria del domingo (Feria de San Telmo) que es genuinamente buena, no una trampa turística. El mercado cubierto tiene puestos de anticuarios, comida y tango en vivo. Llegá antes de las 11am para evitar la peor aglomeración.",
      },
      {
        type: "list",
        items: [
          "Recoleta — El barrio más europeo de la ciudad. El cementerio de la Recoleta (donde está Eva Perón) es arquitectónicamente impresionante y gratis.",
          "La Boca — Solo la Caminita y sus alrededores son seguros para turistas. No te alejes del perímetro turístico.",
          "Puerto Madero — Bonito para caminar, restaurantes caros. No es donde está la verdadera Buenos Aires.",
          "Belgrano — Barrio residencial con un Chinatown pequeño pero auténtico y el Mercado de Belgrano.",
        ],
      },
      {
        type: "h2",
        text: "El asado: cómo comerlo bien (sin pagar como turista)",
      },
      {
        type: "p",
        text: "Buenos Aires tiene dos tipos de parrillas: las que cobran precio turístico en La Boca o Puerto Madero, y las que comen los porteños. La diferencia es notable. Para el segundo tipo: buscá parrillas en Palermo, Villa Crespo o Caballito. Pedí el asado completo para la mesa, no cortes individuales. El chimichurri va aparte.",
      },
      {
        type: "callout",
        emoji: "🥩",
        text: "El precio de la carne en Argentina sigue siendo notablemente bajo para el estándar internacional. Un asado completo para dos personas en una parrilla local oscila entre $15–25 USD (2026). En Europa el mismo corte costaría el triple.",
      },
      {
        type: "h2",
        text: "Moverse en Buenos Aires: la verdad sobre el transporte",
      },
      {
        type: "p",
        text: "La red de subte (metro) es antigua pero funcional — cubre el centro y los barrios más turísticos. La tarjeta SUBE es el equivalente a la Oyster Card londinense: recargable, funciona en subte, colectivos y trenes. Vale conseguirla el primer día en cualquier kiosco.",
      },
      {
        type: "p",
        text: "Los colectivos (buses) cubren absolutamente toda la ciudad pero requieren conocer el número de línea. Google Maps funciona bien para esto. Los taxis tienen una tarifa regulada — es seguro tomarlo en la calle, pero preferí siempre los oficiales amarillos y negros o apps como Cabify.",
      },
      {
        type: "tip",
        title: "Cambio de moneda en 2026",
        text: "Argentina tiene una situación cambiaria específica. Investigá el tipo de cambio vigente antes de viajar y consultá opciones legales disponibles en el momento de tu visita — las condiciones pueden variar. Usá una tarjeta con conversión a tasa de mercado para maximizar cada transacción.",
      },
      {
        type: "h2",
        text: "Buenos Aires de noche: el horario real",
      },
      {
        type: "p",
        text: "Los porteños cenan entre las 21 y las 23hs. Los restaurantes antes de las 20:30 están semivacíos (son los turistas). Las milongas (bailes de tango) empiezan a las 23hs y duran hasta las 4am. Los boliches (discotecas) no se llenan antes de la 1:30am. Si llegás a un bar a las 22hs, estás llegando temprano.",
      },
      {
        type: "cta",
        destination: "buenos-aires",
        text: "Generá tu itinerario personalizado para Buenos Aires →",
      },
    ],
  },

  {
    slug: "vuelos-latinoamerica-europa-guia",
    title: "Vuelos desde Latinoamérica a Europa: la guía definitiva para pagar menos",
    excerpt: "El vuelo transatlántico es el gasto más grande de cualquier viaje europeo desde LATAM. También es el más optimizable. Esta guía tiene todo lo que necesitás saber para no sobrepagas.",
    category: "presupuesto",
    categoryLabel: "Presupuesto",
    readTime: 8,
    publishDate: "2026-04-01",
    tags: ["vuelo latinoamerica europa", "volar a europa barato", "precio vuelos transatlánticos", "aerolíneas LATAM Europa"],
    heroEmoji: "✈️",
    metaTitle: "Vuelos desde Latinoamérica a Europa en 2026: cómo pagar menos",
    metaDescription: "Guía completa para conseguir el mejor precio en vuelos desde Argentina, México, Colombia y Chile hacia Europa. Qué aerolíneas usar, cuándo comprar y cómo usar escalas a tu favor.",
    sections: [
      {
        type: "intro",
        text: "El vuelo transatlántico es el gasto más grande de cualquier viaje europeo desde Latinoamérica. También es el más optimizable si sabés cómo funciona la industria. Esta guía tiene todo lo que necesitás para no sobrepagar.",
      },
      {
        type: "h2",
        text: "Cuánto cuesta realmente un vuelo LATAM–Europa en 2026",
      },
      {
        type: "list",
        heading: "Rangos de precio por origen (ida y vuelta, clase económica, temporada media)",
        items: [
          "Buenos Aires (EZE) → Europa: $550–900 USD en temporada baja, $800–1.400 en julio-agosto",
          "Ciudad de México (MEX) → Europa: $500–850 USD temporada baja, $750–1.300 en pico",
          "Bogotá (BOG) → Europa: $480–800 USD temporada baja, $700–1.200 en pico",
          "Lima (LIM) → Europa: $520–850 USD temporada baja, $750–1.250 en pico",
          "Santiago (SCL) → Europa: $580–920 USD temporada baja, $850–1.450 en pico",
        ],
      },
      {
        type: "p",
        text: "Estos rangos asumen destinos principales europeos (Madrid, Lisboa, Amsterdam, París). Los precios caen significativamente si tenés flexibilidad de destino — el aeropuerto más barato de entrada no siempre es el más obvio.",
      },
      {
        type: "h2",
        text: "Las aerolíneas que ofrecen los mejores precios transatlánticos",
      },
      {
        type: "p",
        text: "Iberia y Air Europa tienen los mejores precios históricos desde Argentina y Colombia hacia España. Air France-KLM suele ser competitivo desde México. TAP Air Portugal tiene tarifas muy agresivas desde toda Latinoamérica con escala en Lisboa — y Lisboa es un excelente destino en sí mismo.",
      },
      {
        type: "p",
        text: "LATAM Airlines opera rutas directas desde varios países latinoamericanos a Europa y suele tener precios competitivos en promociones. Aerolíneas Argentinas tiene la única ruta directa Buenos Aires–Roma y ocasionalmente Buenos Aires–Madrid a precios que compiten con las europeas.",
      },
      {
        type: "callout",
        emoji: "🔎",
        text: "Google Flights es la herramienta más poderosa para buscar vuelos transatlánticos. Usá la vista de calendario para ver precios por fecha y la función 'Explorar destinos' para encontrar el destino más barato en una ventana de fechas. Skyscanner complementa bien para ver aerolíneas que Google no siempre muestra.",
      },
      {
        type: "h2",
        text: "El secreto de las escalas: cómo convertir una molestia en un ahorro",
      },
      {
        type: "p",
        text: "Un vuelo directo Buenos Aires–Madrid cuesta en promedio 15–25% más que el mismo vuelo con escala en São Paulo, Lima o Miami. Si la escala es de menos de 4 horas, el ahorro rara vez justifica el riesgo de perder conexión. Si es de 8+ horas, podés convertirla en una mini-visita a la ciudad de escala.",
      },
      {
        type: "tip",
        title: "El vuelo open-jaw: el hack más subestimado",
        text: "Un vuelo 'open-jaw' entra por una ciudad europea y sale por otra diferente. Ejemplo: entrás por Lisboa, salís por Amsterdam. El precio suele ser similar al ida y vuelta a un solo destino, pero cubrís dos países sin volver sobre tus pasos. Buscalo explícitamente en Google Flights seleccionando aeropuertos distintos de salida y regreso.",
      },
      {
        type: "h2",
        text: "Cuándo comprar: la ventana óptima",
      },
      {
        type: "p",
        text: "Para vuelos transatlánticos desde Latinoamérica, la ventana óptima de compra es 3–5 meses antes para temporada alta (julio-agosto) y 6–10 semanas antes para temporada baja. Comprar con más de 6 meses de anticipación para temporada alta raramente da el mejor precio — las aerolíneas suelen liberar más asientos baratos cuando se acerca la fecha.",
      },
      {
        type: "p",
        text: "Las alertas de precios en Google Flights son la herramienta más práctica: configurás la ruta que querés y Google te avisa cuando el precio baja. Sin costo, sin complicación.",
      },
      {
        type: "h2",
        text: "Equipaje: el costo oculto que más sorprende",
      },
      {
        type: "p",
        text: "Las aerolíneas europeas como Vueling e Iberia Express tienen precios de base muy bajos pero cobran el equipaje por separado. Un vuelo de €180 puede convertirse en €280 al agregar una valija. Siempre calculá el precio total con el equipaje que necesitás antes de comparar.",
      },
      {
        type: "cta",
        text: "Planificá tu itinerario europeo completo con IA →",
      },
    ],
  },

  {
    slug: "viajar-con-mascotas-guia-completa",
    title: "Viajar con mascotas: la guía completa para no improvisar (y no sufrir en el intento)",
    excerpt: "Viajar con tu perro o gato es perfectamente posible. También puede ser un caos total si no lo planificás bien. La diferencia entre los dos escenarios es información — y esta guía tiene todo lo que necesitás.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 8,
    publishDate: "2026-04-03",
    tags: ["viajar con mascotas", "viajar con perro", "viajar con gato", "requisitos viaje mascotas"],
    heroEmoji: "🐾",
    metaTitle: "Viajar con mascotas en 2026: guía completa de requisitos, vuelos y destinos",
    metaDescription: "Todo lo que necesitás saber para viajar con tu perro o gato: documentación, requisitos por país, aerolíneas pet-friendly, destinos recomendados y errores que evitar.",
    sections: [
      {
        type: "intro",
        text: "Viajar con tu perro o gato es perfectamente posible — y cada vez más común. También puede convertirse en un caos total si no lo planificás con tiempo. La diferencia entre los dos escenarios no es suerte: es información. Esta guía tiene todo lo que necesitás.",
      },
      {
        type: "h2",
        text: "Lo primero: la documentación que no puede faltar",
      },
      {
        type: "p",
        text: "Independientemente del destino, toda mascota que viaja internacionalmente necesita tres cosas base: microchip ISO 11784/11785, vacuna antirrábica vigente (con al menos 21 días de anticipación a la fecha del viaje), y certificado veterinario oficial emitido por un veterinario habilitado dentro de los 10 días previos al viaje.",
      },
      {
        type: "list",
        heading: "Documentación esencial para viajes internacionales con mascotas",
        items: [
          "Microchip ISO 11784/11785 — implantado antes de la vacuna antirrábica para que sea válida",
          "Certificado de vacuna antirrábica vigente — la mayoría de los países exigen que no sea anterior a 1 año",
          "Certificado veterinario oficial — emitido dentro de los 10 días previos al viaje, en el idioma del país destino o en inglés",
          "Pasaporte de mascotas europeo — obligatorio para entrar a países de la Unión Europea",
          "Test de título de anticuerpos antirrábicos (FAVN test) — requerido por algunos países como Reino Unido, Japón, Australia y Nueva Zelanda con 3–6 meses de anticipación",
        ],
      },
      {
        type: "callout",
        emoji: "⚠️",
        text: "Países como Australia, Nueva Zelanda, Japón y Reino Unido tienen las regulaciones más estrictas del mundo para importación de mascotas — incluyendo cuarentenas de hasta 180 días. Investigá los requisitos específicos del destino con al menos 6 meses de anticipación.",
      },
      {
        type: "h2",
        text: "Aerolíneas: cuáles aceptan mascotas (y en qué condiciones)",
      },
      {
        type: "p",
        text: "No todas las aerolíneas aceptan mascotas, y las que sí lo hacen tienen reglas muy distintas. En cabina (solo para mascotas pequeñas, generalmente hasta 8kg con bolso transportador) o en bodega (mascotas más grandes en jaula homologada). Algunas aerolíneas prohíben ciertas razas braquicéfalas como bulldogs y pugs en bodega por riesgo respiratorio.",
      },
      {
        type: "list",
        heading: "Aerolíneas con buenas políticas pet-friendly (verificar condiciones actuales)",
        items: [
          "Iberia — acepta mascotas en cabina hasta 8kg total (mascota + transportador) en vuelos europeos",
          "Lufthansa — acepta en cabina hasta 8kg y en bodega para razas más grandes",
          "Air France — acepta en cabina hasta 8kg; política clara y bien documentada",
          "LATAM Airlines — acepta en cabina en rutas domésticas; consultar para internacionales",
          "Ryanair y Wizz Air — NO aceptan mascotas salvo perros guía",
        ],
      },
      {
        type: "tip",
        title: "Reservá el espacio para tu mascota con la aerolínea directamente",
        text: "El cupo de mascotas en cabina es limitado (generalmente 2–3 por vuelo). No basta con comprar el ticket — hay que llamar o contactar a la aerolínea y confirmar el espacio explícitamente. Sin esa confirmación, pueden negarte el embarque.",
      },
      {
        type: "h2",
        text: "Los destinos más pet-friendly de Europa",
      },
      {
        type: "p",
        text: "Alemania y los Países Bajos son consistentemente los países más pet-friendly de Europa: las mascotas entran a restaurantes, tiendas y transporte público sin restricción. Francia es sorprendentemente abierta — muchos bistros de París tienen cuencos de agua en la puerta y aceptan perros sin problemas.",
      },
      {
        type: "p",
        text: "Portugal y España también son muy acogedores, especialmente en zonas no turísticas. Italia varía mucho por región y establecimiento. Reino Unido, desde el Brexit, requiere el proceso completo de certificación antirrábica y puede ser complejo.",
      },
      {
        type: "h2",
        text: "Alojamiento: cómo encontrar opciones pet-friendly sin sorpresas",
      },
      {
        type: "p",
        text: "Booking.com y Airbnb tienen filtros específicos de 'se admiten mascotas'. Siempre confirmá directamente con el alojamiento antes de reservar — la política puede tener restricciones de tamaño, raza o cantidad. Algunos cobran un suplemento por limpieza (€15–50 por estadía), otros no.",
      },
      {
        type: "callout",
        emoji: "🏨",
        text: "La cadena hotelera Kimpton es internacionalmente conocida por su política pet-friendly sin restricciones de tamaño ni raza, sin cargo adicional. Para viajes donde el alojamiento es una prioridad, es una referencia confiable.",
      },
      {
        type: "h2",
        text: "El bienestar de tu mascota durante el viaje",
      },
      {
        type: "p",
        text: "Un vuelo largo es estresante para cualquier animal. Algunas recomendaciones prácticas: no alimentes a tu mascota 4–6 horas antes del vuelo para evitar mareos; acostumbrá el transportador semanas antes del viaje para que no sea un espacio extraño; llevá ropa con tu olor dentro del bolso para darle confort.",
      },
      {
        type: "p",
        text: "Nunca sedules a tu mascota sin consultar a un veterinario — los sedantes pueden afectar la regulación de temperatura y la presión en el avión de forma impredecible. Existen suplementos naturales de relajación (feromonas, suplementos de L-teanina) que son más seguros para el viaje aéreo.",
      },
      {
        type: "cta",
        text: "Planificá tu próximo viaje — con o sin compañía perruna →",
      },
    ],
  },

  {
    slug: "viajar-en-tiempos-de-conflicto-belico",
    title: "Viajar cuando el mundo no está en paz: cómo planificar con información y sin paranoia",
    excerpt: "En 2026 hay conflictos activos en varias regiones del mundo. Eso no significa que el mundo entero sea peligroso — significa que hay que planificar con más información de la que dan los medios de comunicación masiva.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 7,
    publishDate: "2026-04-05",
    tags: ["viajar zona conflicto", "seguridad viajero", "zonas peligrosas para turistas", "viaje seguro 2026"],
    heroEmoji: "🌐",
    metaTitle: "Viajar en tiempos de conflicto bélico: guía de seguridad para viajeros 2026",
    metaDescription: "Cómo evaluar el riesgo real antes de viajar a zonas con tensión geopolítica. Fuentes confiables, seguros especializados, planes de contingencia y destinos alternativos.",
    sections: [
      {
        type: "intro",
        text: "En 2026 hay conflictos activos en varias regiones del mundo. Eso no significa que el mundo entero sea peligroso — significa que hay que planificar con más información de la que generalmente ofrecen los medios masivos. Este artículo no intenta alarmarte: intenta darte herramientas para decidir con criterio.",
      },
      {
        type: "h2",
        text: "La diferencia entre riesgo real y percepción mediática",
      },
      {
        type: "p",
        text: "Los medios de comunicación tienen un sesgo hacia lo dramático — es estructural, no malicioso. Una bomba en una ciudad de 5 millones de personas es noticia; que 4.999.990 personas vivieron ese día con normalidad, no lo es. El resultado para el viajero es una percepción de riesgo sistemáticamente más alta que la realidad en la mayoría de los destinos.",
      },
      {
        type: "p",
        text: "Esto no significa ignorar los conflictos. Significa calibrar la información: ¿el conflicto está en la misma ciudad que querés visitar, o a 800km? ¿Afecta zonas turísticas o regiones remotas? ¿Cuándo fue el último incidente documentado?",
      },
      {
        type: "h2",
        text: "Las fuentes que sí son confiables",
      },
      {
        type: "list",
        items: [
          "Cancillería o Ministerio de Relaciones Exteriores de tu país — emiten alertas de viaje oficiales por región y nivel de riesgo",
          "FCDO (Reino Unido) y US State Department — las más detalladas y actualizadas del mundo, útiles para cualquier viajero independientemente de su nacionalidad",
          "ISOS (International SOS) — servicio profesional de inteligencia de riesgo, gratis para empleados de empresas afiliadas",
          "Comunidades de viajeros locales en Reddit (r/travel, r/solotravel) — experiencias recientes de personas que estuvieron ahí en las últimas semanas",
        ],
      },
      {
        type: "callout",
        emoji: "📋",
        text: "Registrá tu viaje en el sistema de tu cancillería antes de salir. Muchos países (Argentina, España, México) tienen portales gratuitos donde podés registrar tu itinerario y datos de contacto. En caso de emergencia, facilita enormemente la asistencia consular.",
      },
      {
        type: "h2",
        text: "Los niveles de alerta y qué significan realmente",
      },
      {
        type: "p",
        text: "La mayoría de los sistemas de alerta de viaje usan niveles del 1 al 4. Nivel 1 (precaución normal) y nivel 2 (mayor precaución) no implican cancelar el viaje — implican informarse. Nivel 3 (reconsiderar el viaje) merece análisis serio de la zona específica. Nivel 4 (no viajar) es la única categoría donde la recomendación es categórica.",
      },
      {
        type: "p",
        text: "Importante: los niveles de alerta cubren países enteros, pero los conflictos suelen estar concentrados en regiones específicas. Turquía puede tener alerta elevada por tensiones en la frontera con Siria mientras que Estambul y la costa egea funcionan con total normalidad turística.",
      },
      {
        type: "h2",
        text: "El seguro de viaje en zonas de tensión: qué cubrís y qué no",
      },
      {
        type: "p",
        text: "La mayoría de los seguros de viaje estándar excluyen explícitamente los eventos relacionados con guerra, conflicto armado o terrorismo. Si viajás a una zona con tensión geopolítica, necesitás un seguro con cobertura específica de evacuación médica de emergencia y repatriación, que es diferente al seguro médico convencional.",
      },
      {
        type: "list",
        heading: "Qué buscar en un seguro para zonas con riesgo elevado",
        items: [
          "Cobertura de evacuación médica de emergencia — mínimo $250.000 USD",
          "Repatriación por conflicto — algunos seguros especializados incluyen esto",
          "Cancelación por alerta de viaje — si el nivel sube después de tu compra",
          "Asistencia 24hs con línea directa — no chatbot, persona real",
        ],
      },
      {
        type: "h2",
        text: "Destinos con tensión pero perfectamente visitables (con información)",
      },
      {
        type: "p",
        text: "Hay una diferencia enorme entre un país en conflicto y un país con conflicto en una región específica. Georgia, por ejemplo, mantiene Tiflis y las regiones turísticas del sur completamente funcionales a pesar de la tensión histórica en las regiones de Osetia del Sur y Abjasia. Marruecos tiene millones de turistas anuales siendo geográficamente adyacente al Sáhara Occidental.",
      },
      {
        type: "p",
        text: "El principio es siempre el mismo: investigá la región específica que vas a visitar, no el país en abstracto. Y hacelo con fuentes que actualizan por zona, no por titular.",
      },
      {
        type: "h2",
        text: "El plan de contingencia que todo viajero debería tener",
      },
      {
        type: "list",
        items: [
          "Guardá los datos de la embajada o consulado de tu país en el destino en tu celular antes de salir",
          "Compartí tu itinerario completo con alguien de confianza en tu país",
          "Tenés acceso a fondos de emergencia separados del dinero del viaje (tarjeta de crédito bloqueada, reserva digital)",
          "Identificá el aeropuerto más cercano y rutas alternativas de salida del país",
          "Instalá la app de tu cancillería si existe — muchas envían alertas push ante cambios de situación",
        ],
      },
      {
        type: "tip",
        title: "La regla del periodista",
        text: "Antes de cancelar un viaje por lo que viste en las noticias, buscá corresponsales o freelancers que estén cubriendo esa zona en ese momento. Su evaluación del día a día suele ser mucho más matizada que el titular. Twitter/X y Substack tienen una comunidad activa de periodistas de campo que postean condiciones locales en tiempo real.",
      },
      {
        type: "cta",
        text: "Planificá tu próximo viaje con información completa y rutas optimizadas →",
      },
    ],
  },

  {
    slug: "viajar-con-hijos-chicos",
    title: "Viajar con hijos chicos (0–6 años): lo que funciona y lo que no",
    excerpt: "Sí se puede viajar con bebés y niños pequeños. La clave no es heroísmo — es elegir bien el destino, el ritmo y las expectativas.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 4,
    publishDate: "2026-04-07",
    tags: ["viajar con bebés", "viaje con niños pequeños", "turismo familiar", "viaje familia"],
    heroEmoji: "👶",
    metaTitle: "Viajar con hijos chicos (0 a 6 años): guía práctica 2026",
    metaDescription: "Consejos reales para viajar con bebés y niños pequeños: qué destinos elegir, cómo organizarse en el avión, qué llevar y qué expectativas tener.",
    sections: [
      { type: "intro", text: "Viajar con un hijo de 2 años no es un viaje de placer adulto con un pasajero extra. Es otro tipo de viaje — con su propio ritmo, sus propias recompensas y sus propios límites. Conocerlos de antemano lo cambia todo." },
      { type: "h2", text: "Qué funciona" },
      {
        type: "list", items: [
          "Destinos con playa o naturaleza — los niños chicos no necesitan museos, necesitan espacio para moverse",
          "Vuelos en horario de siesta o nocturno — mayor probabilidad de que duerman",
          "Alojamiento con cocina — poder calentar comida y lavar mamaderas es oro puro",
          "Ciudades compactas y caminables — menos traslados = menos crisis",
          "Cancún, Punta Cana, Bali, Lisboa — destinos con mucha infraestructura familiar",
        ],
      },
      { type: "h2", text: "Qué no funciona" },
      {
        type: "list", items: [
          "Itinerarios de 4 ciudades en 7 días — el cambio constante desregula a los niños pequeños",
          "Vuelos con escala larga — cada escala es una oportunidad para crisis",
          "Restaurantes de autor o experiencias gastronómicas largas — no es el momento",
          "Horarios rígidos — siempre va a pasar algo que los tire",
        ],
      },
      {
        type: "callout", emoji: "✈️",
        text: "Antes de embarcar: cambiá el pañal, dale de comer y esperá que esté relajado. Los primeros 10 minutos del vuelo marcan el tono de todo el resto.",
      },
      { type: "h2", text: "Qué llevar (lo que no es obvio)" },
      {
        type: "list", items: [
          "Snacks favoritos del niño — los del aeropuerto o avión raramente funcionan",
          "Auriculares propios para niños — los del avión no entran en oídos chicos",
          "Una muda extra en el bolso de mano — siempre, sin excepción",
          "Tablet con contenido descargado offline",
          "Coche de paseo liviano — aunque ya camine, lo vas a agradecer",
        ],
      },
      {
        type: "tip", title: "La expectativa correcta",
        text: "Un viaje con hijos chicos es exitoso si los adultos volvieron sin querer matar a nadie y los niños tuvieron momentos felices. No tiene que ser épico — tiene que funcionar.",
      },
      { type: "cta", text: "Generá un itinerario familiar adaptado a tu destino →" },
    ],
  },

  {
    slug: "viajar-con-adolescentes",
    title: "Viajar con adolescentes: cómo hacer un viaje que quieran recordar (no odiar)",
    excerpt: "Los adolescentes tienen opiniones fuertes, necesitan autonomía y se aburren rápido con lo que le gusta a sus padres. La solución no es ceder en todo — es negociar bien.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 4,
    publishDate: "2026-04-09",
    tags: ["viajar con adolescentes", "viaje familia adolescentes", "turismo joven", "viaje familiar"],
    heroEmoji: "🎧",
    metaTitle: "Viajar con adolescentes: guía para que el viaje no sea una batalla",
    metaDescription: "Estrategias reales para viajar con hijos de 12 a 18 años: cómo incluirlos en la planificación, destinos que funcionan y cómo gestionar el equilibrio entre autonomía y control.",
    sections: [
      { type: "intro", text: "Un adolescente en un viaje familiar puede ser el mejor compañero de aventura o la fuente de fricción permanente. La diferencia está casi siempre en cómo se planificó — y cuánto participaron ellos en ese proceso." },
      { type: "h2", text: "La regla de oro: incluirlos en la planificación" },
      { type: "p", text: "Un adolescente que eligió algo del itinerario tiene una actitud completamente diferente. No tiene que ser todo — pero sí algo relevante para él/ella. Que elijan un restaurante, una actividad, un día libre para explorar solos (con límites acordados). La autonomía parcial reduce el conflicto a la mitad." },
      { type: "h2", text: "Destinos que funcionan bien" },
      {
        type: "list", items: [
          "Tokio — cultura pop, tecnología, gastronomía diversa. Rara vez hay un adolescente al que no le encante",
          "Nueva York — energía, diversidad, libertad de movimiento en Manhattan",
          "Lisboa y Oporto — ciudad manejable, surf accesible, escena joven",
          "Bangkok — caos controlado, street food, mercados nocturnos",
          "Cualquier destino con playa + actividades acuáticas — snorkel, surf, paddleboard",
        ],
      },
      { type: "h2", text: "Lo que funciona en el día a día" },
      {
        type: "list", items: [
          "Acordar horarios de 'tiempo propio' — 2 horas donde pueden hacer lo suyo (con teléfono y ubicación compartida)",
          "No planificar más de 2 actividades 'obligatorias' por día",
          "Incluir al menos una experiencia de adrenalina o novedad por viaje (tirolesa, kayak, clase de surf)",
          "Permitir que documenten el viaje a su manera — fotos, reels, lo que sea",
        ],
      },
      {
        type: "callout", emoji: "📱",
        text: "El adolescente que documenta el viaje en redes está, paradójicamente, más presente en él. No pelees con el teléfono — usalo a tu favor.",
      },
      { type: "cta", text: "Planificá el viaje ideal para toda la familia →" },
    ],
  },

  {
    slug: "viaje-para-parejas-mayores-50",
    title: "Viajes para parejas 50+: cómo viajar bien cuando ya saben lo que quieren",
    excerpt: "A los 50, 60 o 70 años se viaja diferente — y casi siempre mejor. Más presupuesto, más criterio, menos tolerancia al caos innecesario. Esta guía es para los que saben lo que quieren.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 4,
    publishDate: "2026-04-11",
    tags: ["viaje pareja mayores 50", "turismo senior", "viaje romántico madurez", "vacaciones pareja adulta"],
    heroEmoji: "❤️",
    metaTitle: "Viajes para parejas 50+: destinos, ritmo y cómo aprovechar la experiencia acumulada",
    metaDescription: "Guía de viaje para parejas mayores de 50 años: destinos que vale la pena, ritmo ideal, qué priorizar y cómo viajar con comodidad sin perder la aventura.",
    sections: [
      { type: "intro", text: "Viajar en pareja después de los 50 tiene ventajas enormes: más presupuesto disponible, más criterio para elegir, y la libertad de no tener que adaptar el viaje a horarios de colegio ni caprichos de niños. El único desafío es actualizar las expectativas propias." },
      { type: "h2", text: "Lo que cambia (para bien)" },
      {
        type: "list", items: [
          "Pueden viajar en temporada media — evitan el caos de julio/agosto y pagan menos",
          "Más presupuesto para alojamiento de calidad — la diferencia entre dormir bien y no dormir bien ya importa más",
          "Menos urgencia por 'verlo todo' — más disfrute por lugar visitado",
          "Más experiencia para detectar trampas turísticas y tomar mejores decisiones",
        ],
      },
      { type: "h2", text: "Destinos ideales para parejas maduras" },
      {
        type: "list", items: [
          "Toscana, Italia — vino, gastronomía, paisaje, ritmo lento. El destino romántico por excelencia para esta etapa",
          "Japón — seguridad, orden, cultura profunda. El país más gratificante para viajeros experimentados",
          "Portugal — relación calidad-precio, hospitalidad, variedad en poco espacio",
          "Patagonia Argentina/Chile — naturaleza imponente, infraestructura turística sólida, pocos turistas masivos",
          "Grecia — más allá de Santorini: Peloponeso, Creta, Rodas — autenticidad y belleza sin multitudes",
        ],
      },
      { type: "h2", text: "Qué priorizar" },
      {
        type: "list", items: [
          "Alojamiento bien ubicado y cómodo — no ahorres aquí",
          "Ritmo de 1–2 actividades por día, con siesta real si hace falta",
          "Gastronomía local de calidad — una cena memorable vale más que tres mediocres",
          "Seguro médico con cobertura amplia — imprescindible a partir de los 60",
        ],
      },
      {
        type: "tip", title: "Los cruceros fluviales",
        text: "El Rin, el Danubio, el Sena o el Duero en crucero fluvial es una de las experiencias más valoradas por parejas 50+: equipaje se mueve solo, ciudades nuevas cada día, comodidad garantizada. Consideralo si nunca lo hiciste.",
      },
      { type: "cta", text: "Generá el itinerario perfecto para tu próximo viaje en pareja →" },
    ],
  },

  {
    slug: "viaje-solo-tercera-edad",
    title: "Viajar solo después de los 65: más posible de lo que te dijeron (y más liberador)",
    excerpt: "Cada vez más personas mayores de 65 viajan solas — por elección, por viudez o simplemente porque nadie en su entorno tiene las mismas ganas de ver mundo. No es imprudencia: es valentía con criterio.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 5,
    publishDate: "2026-04-13",
    tags: ["viajar solo tercera edad", "turismo senior solo", "viaje mayores 65", "adulto mayor viajero"],
    heroEmoji: "🧳",
    metaTitle: "Viajar solo después de los 65: guía completa para el viajero senior independiente",
    metaDescription: "Guía práctica para adultos mayores que quieren viajar solos: destinos seguros, seguro médico, herramientas de planificación y cómo mantener la independencia con tranquilidad.",
    sections: [
      { type: "intro", text: "Viajar solo después de los 65 no es una rareza — es una tendencia en crecimiento. Cada vez más personas en esta etapa eligen explorar el mundo por su cuenta, con el criterio que da la experiencia y la libertad que da no tener que negociar cada decisión con nadie." },
      { type: "h2", text: "Las ventajas reales del viaje solo senior" },
      {
        type: "list", items: [
          "Horarios completamente propios — siesta cuando querés, cena cuando querés",
          "Presupuesto controlado sin negociación",
          "Mayor apertura a conocer gente local y otros viajeros",
          "Viajes más lentos y más profundos — sin la presión del grupo",
        ],
      },
      { type: "h2", text: "Destinos con mejor infraestructura para viajeros senior solos" },
      {
        type: "list", items: [
          "Portugal — seguro, accesible, hospitalario, barato. El favorito consistente de viajeros senior",
          "Japón — la seguridad es casi absoluta, el transporte es sencillo con Google Maps, el respeto por los mayores es cultural",
          "España (fuera de pico turístico) — ciudades manejables, excelente sistema de salud, idioma compartido para latinoamericanos",
          "Cruceros — todo incluido, sin logística diaria, fácil socialización",
          "Costa Rica — naturaleza accesible, infraestructura turística sólida, seguro",
        ],
      },
      {
        type: "callout", emoji: "🏥",
        text: "El seguro médico internacional es innegociable para viajeros mayores de 65. Contratá uno con cobertura mínima de $100.000 USD para gastos médicos y evacuación. El costo promedio es $50–120 USD por semana — el gasto más inteligente del viaje.",
      },
      { type: "h2", text: "Herramientas que facilitan el viaje independiente" },
      {
        type: "list", items: [
          "Google Maps offline — descargá el mapa de la ciudad antes de salir del hotel",
          "Google Translate con cámara — apuntá al menú y te traduce en tiempo real",
          "WhatsApp — mantené un grupo familiar actualizado con tu ubicación diaria",
          "Airbnb con superhosts — generalmente más atentos y con mejor comunicación que algunos hoteles",
        ],
      },
      { type: "h2", text: "Una cosa para recordar" },
      { type: "p", text: "La edad no define los límites del viaje — los define la salud, el presupuesto y las ganas. Hay personas de 80 años que hacen trekking en los Andes y personas de 50 que necesitan comodidad máxima. Conocete, elegí bien, y no dejes que nadie te diga que 'ya es tarde para viajar'." },
      { type: "cta", text: "Planificá tu próximo viaje con un itinerario a tu medida →" },
    ],
  },
  {
    slug: "viajar-con-hijos-adultos",
    title: "Viajar con hijos adultos: cómo disfrutarlo sin que nadie quede resentido",
    excerpt: "El viaje en familia con hijos adultos puede ser el mejor viaje de tu vida — o una fuente de tensiones. La diferencia está en cómo se planifica y qué expectativas se manejan antes de salir.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 4,
    publishDate: "2026-04-16",
    tags: ["viajar con hijos adultos", "viaje familia adultos", "vacaciones familia mayores", "turismo familiar"],
    heroEmoji: "👨‍👩‍👧‍👦",
    metaTitle: "Viajar con hijos adultos: guía para un viaje en familia sin conflictos",
    metaDescription: "Consejos prácticos para viajar con hijos adultos: cómo repartir gastos, combinar gustos diferentes y crear recuerdos que refuercen el vínculo familiar.",
    sections: [
      { type: "intro", text: "Los hijos crecieron, tienen opiniones propias, distintos ritmos y a veces distintos presupuestos. Viajar con ellos ya no es como cuando eran chicos y seguían el plan sin chistar. Ahora es una negociación — y eso, bien manejado, produce los mejores viajes de la vida." },
      { type: "h2", text: "El mayor error: asumir que todos quieren lo mismo" },
      { type: "p", text: "Un hijo de 25 quiere salir de noche. Otro de 30 con hijos propios quiere museos y almorzar temprano. Los padres quieren caminar sin apuro. El truco no es eliminar las diferencias — es aceptarlas y diseñar el viaje alrededor de ellas." },
      {
        type: "list", items: [
          "Dividí el itinerario en bloques 'juntos' y bloques 'libres'",
          "Las comidas en familia son el pegamento del viaje — preservalas",
          "Aceptá que no todos van a estar en todas las actividades",
          "Un desayuno compartido todos los días vale más que un tour obligatorio",
        ],
      },
      { type: "h2", text: "La conversación de dinero que nadie quiere tener" },
      {
        type: "callout", emoji: "💬",
        text: "Antes de reservar, acordá: ¿dividimos todo en partes iguales? ¿Los padres cubren el alojamiento y cada uno su comida? ¿Hay un fondo común para actividades grupales? Tenerlo claro evita el 80% de las tensiones del viaje.",
      },
      { type: "h2", text: "Destinos que funcionan para generaciones mezcladas" },
      {
        type: "list", items: [
          "Portugal — ritmo lento, gastronomía excelente, noches activas en Lisboa para los jóvenes, playas tranquilas para los mayores",
          "Italia (Roma + Costa Amalfitana) — combina cultura para todos con opciones de playa y vida nocturna",
          "Japón — la diversidad de experiencias es tan grande que cada uno encuentra lo suyo",
          "Colombia (Cartagena + Medellín) — ciudad histórica + ciudad moderna, buena gastronomía, costos razonables",
        ],
      },
      { type: "tip", title: "El secreto de las familias que vuelven a viajar juntas", text: "Dejá al menos una tarde completamente libre. Sin plan, sin reunión, sin actividad coordinada. Quien quiera juntarse, que se junte. Esa libertad relaja a todos — y a menudo es cuando pasan los momentos más espontáneos y memorables." },
      { type: "cta", text: "Creá el itinerario perfecto para tu familia →" },
    ],
  },
  {
    slug: "paris-guia-completa-2026",
    title: "París 2026: guía completa para tu primer viaje (o el de siempre)",
    excerpt: "París sigue siendo una de las ciudades más visitadas del mundo — y con razón. Pero hay una París para turistas y una París real. Esta guía te muestra las dos.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 8,
    publishDate: "2026-03-25",
    tags: ["paris guia viaje", "paris primera vez", "que ver en paris", "paris presupuesto", "paris 2026"],
    heroEmoji: "🗼",
    metaTitle: "París 2026: guía completa de viaje — qué ver, dónde quedarse y cuánto cuesta",
    metaDescription: "Guía definitiva para viajar a París: museos, barrios, transporte, cuántos días quedarse y cuánto presupuestar. Todo lo que necesitás saber para tu viaje a París.",
    sections: [
      { type: "intro", text: "París es una de esas ciudades que todo el mundo imagina antes de visitarla — y que igual sorprende cuando se llega. La Torre Eiffel es impresionante en persona. El Louvre es abrumador. Los cafés son exactamente como los imaginabas. Esta guía te ayuda a ir más allá del circuito turístico y vivir París de verdad." },
      { type: "h2", text: "Cuántos días dedicarle a París" },
      { type: "p", text: "Mínimo 4 días para ver lo esencial sin correr. Con 6-7 días podés explorar barrios menos conocidos y hacer una escapada a Versalles. Más de 10 días es para quienes quieren instalarse y vivirla como local." },
      { type: "h2", text: "Los barrios que realmente valen la pena" },
      {
        type: "list", items: [
          "Le Marais (3° y 4°) — el barrio más vibrante: galerías, tiendas vintage, comunidad judía e LGBTQ+",
          "Montmartre (18°) — la colina bohemia con Sacré-Cœur, artistas y vistas panorámicas",
          "Saint-Germain-des-Prés (6°) — los cafés históricos de Sartre y Simone de Beauvoir, librerías y moda",
          "Belleville (20°) — el París multicultural y joven, murales callejeros y bares alternativos",
          "Canal Saint-Martin (10°) — terrazas, brunch y la París hipster de hoy",
        ],
      },
      { type: "h2", text: "Los museos: cómo evitar las colas" },
      {
        type: "callout", emoji: "🎨",
        text: "El Louvre recibe 9 millones de visitantes al año. Si vas sin reserva, esperás hasta 2 horas. Comprá la entrada online siempre, y elegí días de semana por la mañana. El Musée d'Orsay (impresionismo) y el Centre Pompidou (arte moderno) tienen menos cola y son igual de increíbles.",
      },
      { type: "h2", text: "Torre Eiffel: ¿subir o no subir?" },
      { type: "p", text: "La vista desde arriba es buena, pero la vista de la Torre desde abajo (especialmente desde Trocadéro) es más icónica. Si querés subir, reservá con semanas de anticipación y elegí la planta 2 sobre la cumbre: mejor relación precio-vista. El espectáculo de luces a las 21:00 es gratuito y dura 5 minutos." },
      { type: "h2", text: "Transporte en París" },
      {
        type: "list", items: [
          "Metro: la red más eficiente de Europa, cubre toda la ciudad, funciona hasta la 1am",
          "Carnet de 10 viajes (Carnet t+) o pase Navigo semanal si quedás más de 5 días",
          "Vélib' (bicicletas públicas): ideal para distancias cortas, hay estaciones en toda la ciudad",
          "Taxi/Uber: útil de noche cuando el metro para — reservá desde la app G7 o Bolt",
          "A pie: entre Le Marais, Notre-Dame y el Louvre hay solo 20 minutos caminando",
        ],
      },
      { type: "h2", text: "Cuánto cuesta París en 2026" },
      { type: "p", text: "París es cara, pero manejable. Un café con croissant cuesta €3-5 sentado en barra (el doble en terraza). Un almuerzo en brasserie €12-18. Cena en restaurante medio €25-40. El alojamiento es el gasto mayor: hostel €35-55/noche, hotel 3 estrellas €120-180, Airbnb en zona céntrica €90-150." },
      { type: "tip", title: "El secreto del almuerzo parisino", text: "Los restaurantes de barrio ofrecen 'formule déjeuner': entrada + plato principal + postre por €14-19. Es la mejor manera de comer bien en París sin gastar de más. Buscá pizarras escritas a mano en la entrada — señal de que la carta cambia con los productos frescos del día." },
      { type: "h2", text: "Qué hacer gratis en París" },
      {
        type: "list", items: [
          "Colección permanente del Musée d'Art Moderne de la Ville de Paris — gratuita",
          "Sacré-Cœur: entrada libre a la basílica, vista panorámica incluida",
          "Promenade Plantée: el parque elevado sobre una antigua línea de tren",
          "Mercado de Aligre (12°): el mercado de pulgas más auténtico, fin de semana por la mañana",
          "Cimetière du Père-Lachaise: paseo histórico donde descansan Chopin, Proust y Jim Morrison",
        ],
      },
      { type: "cta", city: "París", country: "France", text: "Generá tu itinerario personalizado para París →" },
    ],
  },
  {
    slug: "nueva-york-primera-vez",
    title: "Nueva York por primera vez: todo lo que nadie te cuenta antes de ir",
    excerpt: "Nueva York puede ser abrumadora. Demasiado grande, demasiado cara, demasiado rápida. Esta guía te da el mapa mental para disfrutarla en lugar de sobrevivirla.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 9,
    publishDate: "2026-03-26",
    tags: ["nueva york primera vez", "new york viaje", "que ver en nueva york", "nueva york presupuesto", "manhattan guia"],
    heroEmoji: "🗽",
    metaTitle: "Nueva York por primera vez: guía práctica 2026 — transporte, barrios y presupuesto",
    metaDescription: "Guía completa para tu primer viaje a Nueva York: cómo moverse, qué barrios explorar, cuánto cuesta y los errores típicos que hay que evitar.",
    sections: [
      { type: "intro", text: "Nueva York no se visita — se experimenta. Es la ciudad que más aparece en películas, series y canciones, pero nada prepara para la escala real del Empire State, la densidad de Times Square o la paz inesperada de Central Park. Esta guía es para que llegues con expectativas calibradas y un plan que funcione." },
      { type: "h2", text: "El error más común: tratar de verlo todo" },
      { type: "p", text: "NYC tiene 5 boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island). La mayoría del turismo se concentra en Manhattan — y aun así es imposible verlo todo en una semana. La clave es elegir 2-3 zonas por día y moverse con intención, no con pánico." },
      { type: "h2", text: "Los barrios imprescindibles" },
      {
        type: "list", items: [
          "Midtown Manhattan — Empire State, Times Square, Bryant Park, High Line (turístico pero inevitable)",
          "Lower Manhattan — Wall Street, Brooklyn Bridge, 9/11 Memorial, Staten Island Ferry (gratis con vistas a la Estatua de la Libertad)",
          "Brooklyn (DUMBO + Williamsburg) — vistas del skyline desde el puente, brunch, bares y arte callejero",
          "Upper West Side — Central Park, Museo de Historia Natural, ambiente neoyorquino auténtico",
          "Harlem — jazz en vivo, gastronomía afroamericana, arquitectura brownstone, la cultura que hizo NYC",
        ],
      },
      { type: "h2", text: "Transporte: el metro de NYC desmitificado" },
      {
        type: "callout", emoji: "🚇",
        text: "El metro de NYC funciona las 24 horas los 7 días. Es lento, ruidoso y confuso al principio — y después de 2 días lo dominás. Cargá la OMNY card (sin límite de viajes en Subway con tarjeta de débito/crédito, máximo $34/semana) o comprá la MetroCard en las máquinas. El viaje cuesta $2.90 sin importar la distancia.",
      },
      { type: "h2", text: "Cuánto cuesta Nueva York realmente" },
      { type: "p", text: "NYC es cara, sin excepciones. Un café con leche (latte) cuesta $7-9. Un almuerzo rápido (falafel, pizza por slice, ramen) $12-18. Cena en restaurante medio $35-60 por persona sin vino. Alojamiento en Manhattan: $180-350 la noche para un hotel 3 estrellas. Brooklyn tiene opciones desde $120." },
      {
        type: "list", items: [
          "Tip obligatorio en restaurantes: 18-22% — es parte del salario del personal",
          "Happy hour (16-19h): cócteles a mitad de precio en muchos bares de Manhattan",
          "Bagel con cream cheese en deli local: el desayuno más auténtico y económico (~$5)",
          "Food trucks y mercados: Smorgasburg en Brooklyn (fin de semana) es un festín gastronómico",
        ],
      },
      { type: "h2", text: "Las atracciones: ¿qué vale el precio?" },
      {
        type: "list", items: [
          "Empire State Building ($44): sí, vale — especialmente de noche",
          "Staten Island Ferry ($0): las mejores vistas de la Estatua de la Libertad, gratis",
          "MoMA ($30): imprescindible para arte del siglo XX",
          "The Met ($30, sugerido): colección enciclopédica, podés pasar un día entero",
          "One World Observatory ($46): la vista más moderna del skyline, en el edificio más alto",
          "Brooklyn Bridge ($0): cruzarlo a pie al amanecer es la mejor actividad de NYC",
        ],
      },
      { type: "tip", title: "NYC Pass: ¿conviene?", text: "El New York Pass o CityPASS convierten si visitás 4+ atracciones pagadas en pocos días. El CityPASS ($142 adulto) incluye Empire State + Top of the Rock + Met + American Museum of Natural History + más. Hacé los cálculos según tu itinerario antes de comprarlo." },
      { type: "h2", text: "Cuántos días necesitás" },
      { type: "p", text: "5 días es el mínimo para ver Manhattan + un día en Brooklyn sin correr. Con 7 días podés agregar el Bronx (Yankee Stadium, jardín botánico), Queens o una excursión a los Hamptons. 10 días o más es para quienes quieren perderse y descubrir la ciudad real más allá del circuito turístico." },
      { type: "cta", city: "Nueva York", country: "United States", text: "Planificá tu viaje a Nueva York con IA →" },
    ],
  },
  {
    slug: "cancun-riviera-maya-guia",
    title: "Cancún y Riviera Maya: más allá del hotel todo incluido",
    excerpt: "Cancún tiene fama de resort turístico masivo — y parte de esa fama es merecida. Pero a 30 minutos hay cenotes, ruinas mayas y playas que no salen en los catálogos.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 7,
    publishDate: "2026-03-27",
    tags: ["cancun viaje", "riviera maya guia", "tulum cancun", "cenotes riviera maya", "mexico caribe"],
    heroEmoji: "🏖️",
    metaTitle: "Cancún y Riviera Maya 2026: guía completa — playas, cenotes, ruinas y presupuesto",
    metaDescription: "Todo lo que necesitás saber para viajar a Cancún y la Riviera Maya: playas, cenotes, ruinas mayas, qué evitar y cómo ir más allá de los resorts.",
    sections: [
      { type: "intro", text: "La Riviera Maya es mucho más que la Zona Hotelera de Cancún. Desde Puerto Morelos hasta Tulum hay 130 km de costa caribeña con aguas turquesas, arrecifes de coral, cenotes subterráneos y ciudades mayas que sobrevivieron siglos. Esta guía te ayuda a planificar un viaje que combine playa con cultura y autenticidad." },
      { type: "h2", text: "Cancún: la Zona Hotelera vs. el Centro" },
      { type: "p", text: "La Zona Hotelera (Hotel Zone) es el mundo de los resorts todo incluido: playas impecables, agua cristalina, pero precios inflados y ambiente artificial. El Centro de Cancún, cruzando la laguna, es una ciudad mexicana real con mercados, tacos auténticos y costos 3 veces menores. Vale la pena pasar una tarde allí aunque te quedes en la Zona." },
      { type: "h2", text: "Los destinos de la Riviera Maya" },
      {
        type: "list", items: [
          "Playa del Carmen — el punto medio perfecto: animada, variada, con playa y vida nocturna sin el caos de Cancún",
          "Tulum — ruinas mayas sobre un acantilado con vista al Caribe; el pueblo tiene hoteles boutique y cenotes cercanos",
          "Isla Mujeres — a 20 min en ferry desde Cancún, playas tranquilas y ambiente relajado",
          "Akumal — la bahía donde podés nadar con tortugas marinas sin tours organizados",
          "Cobá — ruinas mayas en la selva, menos turísticas que Chichén Itzá",
        ],
      },
      { type: "h2", text: "Los cenotes: experiencia imprescindible" },
      {
        type: "callout", emoji: "💧",
        text: "Los cenotes son pozos naturales de agua dulce subterránea — uno de los fenómenos geológicos más únicos del mundo. El Sistema Dos Ojos, Gran Cenote (Tulum), Ik Kil (cerca de Chichén Itzá) y Cenote Azul son los más accesibles. Llegá antes de las 10am para evitar las hordas de tours.",
      },
      { type: "h2", text: "Chichén Itzá: cómo no arruinar la visita" },
      { type: "p", text: "La pirámide de Kukulcán es majestuosa — pero el sitio recibe 5.000 visitantes por día. Llegá en la apertura (8am), llevá mucha agua, sombrero y protector solar. Ya no se puede subir a la pirámide desde 2006. El equinoccio de primavera (21 de marzo) tiene el efecto de luz especial pero también 10.000 personas: no recomendable salvo que reserves con meses de anticipación." },
      { type: "h2", text: "Cuánto cuesta la Riviera Maya" },
      {
        type: "list", items: [
          "Resort todo incluido: $150-400 USD/noche (incluye todo, puede salir más económico que pagar por separado)",
          "Hotel boutique en Tulum: $80-200 USD/noche",
          "Hostel en Playa del Carmen: $20-35 USD/noche",
          "Tacos en el centro de Cancún: $1-2 USD cada uno",
          "Cenote con entrada: $15-25 USD (los más famosos cobran más)",
          "Tour a Chichén Itzá desde Cancún: $50-80 USD todo incluido",
        ],
      },
      { type: "tip", title: "La época ideal para ir", text: "Diciembre a abril es la temporada seca con menos humedad y sin huracanes. Mayo-octubre es temporada de lluvias (aguaceros intensos pero cortos) y también de sargazo (algas en algunas playas). Julio y agosto tienen el Caribe más tranquilo pero el calor más intenso." },
      { type: "cta", city: "Cancún", country: "Mexico", text: "Generá tu itinerario para Cancún y la Riviera Maya →" },
    ],
  },
  {
    slug: "cusco-machu-picchu-guia",
    title: "Cusco y Machu Picchu: la guía que ojalá hubiera tenido antes de ir",
    excerpt: "Machu Picchu es una de las maravillas del mundo — y también uno de los destinos más mal preparados por la mayoría de los viajeros. La altura te puede arruinar el viaje si no llegás bien.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 8,
    publishDate: "2026-03-28",
    tags: ["machu picchu guia", "cusco viaje", "peru turismo", "machu picchu como llegar", "altura cusco"],
    heroEmoji: "🏔️",
    metaTitle: "Cusco y Machu Picchu 2026: guía completa — cómo llegar, altura, entradas y consejos",
    metaDescription: "Todo lo que necesitás saber para visitar Machu Picchu y Cusco: cómo manejar la altura, cómo comprar las entradas, cuántos días dedicarle y los errores que hay que evitar.",
    sections: [
      { type: "intro", text: "Machu Picchu es de esas experiencias que te cambian la perspectiva sobre lo que los seres humanos somos capaces de construir. La ciudadela inca en lo alto de los Andes, envuelta en nubes, es tan impresionante en persona como en las fotos — pero el camino para llegar puede ser agotador si no estás bien preparado." },
      { type: "h2", text: "El mal de altura: el factor que nadie toma en serio" },
      {
        type: "callout", emoji: "⚠️",
        text: "Cusco está a 3.400 metros sobre el nivel del mar. El aeropuerto de Lima está a 0 metros. Si vuelas directo a Cusco desde una ciudad costera, el 60% de los viajeros experimenta soroche (mal de altura): dolores de cabeza, náuseas, cansancio extremo. Dedicá 1-2 días solo a aclimatarte antes de hacer actividad física.",
      },
      { type: "h2", text: "Cómo minimizar el soroche" },
      {
        type: "list", items: [
          "Llegá a Cusco 2 días antes de ir a Machu Picchu",
          "Tomá mate de coca — la hoja de coca es legal en Perú y ayuda a la aclimatación",
          "No hagas ejercicio intenso el primer día, caminá despacio",
          "Acetazolamida (Diamox): consultá con tu médico antes de viajar, es el medicamento preventivo más eficaz",
          "Hidratate más de lo normal y evitá el alcohol los primeros días",
          "Comé liviano: sopas, arroz, frutas",
        ],
      },
      { type: "h2", text: "Cusco: mucho más que una escala para Machu Picchu" },
      { type: "p", text: "Cusco fue la capital del Imperio Inca y hoy es una ciudad donde conviven templos incas y catedrales coloniales en la misma plaza. El Qorikancha (Templo del Sol), Sacsayhuamán, el mercado de San Pedro y el barrio de San Blas merecen al menos 2 días dedicados. El Valle Sagrado (Pisac, Ollantaytambo) es una jornada entera imprescindible." },
      { type: "h2", text: "Cómo llegar a Machu Picchu" },
      {
        type: "list", items: [
          "Tren desde Cusco u Ollantaytambo hasta Aguas Calientes (1.5-3 horas según origen): empresas PeruRail e Inca Rail",
          "Bus desde Aguas Calientes hasta la entrada de Machu Picchu (25 min de subida)",
          "Caminata: el Camino Inca (4 días, requiere guía obligatorio y reserva con meses de anticipación)",
          "Trekking alternativo: Camino Salkantay (5 días, más accesible que el Camino Inca)",
        ],
      },
      { type: "h2", text: "Las entradas: el error más común" },
      { type: "p", text: "Las entradas a Machu Picchu son limitadas y se agotan con semanas o meses de anticipación en temporada alta (junio-agosto). Comprá en el sitio oficial del Ministerio de Cultura del Perú (machupicchu.gob.pe). Hay tres circuitos y dos turnos (mañana/tarde). Si querés subir al Huayna Picchu o Montana Machu Picchu, hay cupos separados aún más limitados." },
      { type: "tip", title: "El mejor momento del día para estar en Machu Picchu", text: "El turno de mañana (6-12h) tiene la mejor luz para fotos y menos calor. Llegá lo antes posible al abrir: los primeros 30 minutos, antes de que lleguen los tours organizados, son los más mágicos. La niebla matinal que envuelve la ciudadela es parte del espectáculo." },
      { type: "h2", text: "Cuántos días dedicarle" },
      { type: "p", text: "Mínimo 5 días para hacer justicia al destino: 2 en Cusco (aclimatación + ciudad), 1 en Valle Sagrado, 1 en Machu Picchu y 1 de buffer. Con 7-8 días podés agregar el Lago Titicaca desde Puno, una de las experiencias más únicas del continente." },
      { type: "cta", city: "Cusco", country: "Peru", text: "Creá tu itinerario personalizado para Cusco y Machu Picchu →" },
    ],
  },
  {
    slug: "lisboa-portugal-guia-2026",
    title: "Lisboa 2026: la guía para enamorarse de Portugal sin gastar una fortuna",
    excerpt: "Lisboa se convirtió en uno de los destinos más trendy de Europa — pero sigue siendo mucho más accesible que París o Roma. Esta guía te muestra sus secretos.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 7,
    publishDate: "2026-03-29",
    tags: ["lisboa guia", "portugal turismo", "lisboa viaje", "sintra lisboa", "fado lisboa"],
    heroEmoji: "🐟",
    metaTitle: "Lisboa 2026: guía completa de viaje — barrios, fado, Sintra y cuánto cuesta",
    metaDescription: "Guía definitiva para viajar a Lisboa: los mejores barrios, qué comer, cómo llegar a Sintra, dónde escuchar fado auténtico y cuánto presupuestar para tu viaje.",
    sections: [
      { type: "intro", text: "Lisboa es la capital europea que mejor combina historia, gastronomía, ambiente y precio. Sus siete colinas, el Tajo, los tranvías vintage y el fado crean una atmósfera única. Y aunque el turismo la transformó en la última década, sigue siendo más accesible y auténtica que la mayoría de las capitales del oeste europeo." },
      { type: "h2", text: "Los barrios de Lisboa que hay que conocer" },
      {
        type: "list", items: [
          "Alfama — el barrio más antiguo, laberinto de callejuelas, casas con azulejos y las mejores casas de fado",
          "Bairro Alto — el corazón de la vida nocturna, restaurantes pequeños y bares hasta el amanecer",
          "LX Factory — fábrica industrial reconvertida en mercado creativo, restaurantes y tiendas los fines de semana",
          "Belém — los Jerónimos, la Torre de Belém y el mejor pastel de nata del mundo (Pastéis de Belém, fundada en 1837)",
          "Mouraria — el barrio multicultural donde nació el fado, lleno de vida y menos turístico que Alfama",
        ],
      },
      { type: "h2", text: "El fado: cómo vivirlo de verdad" },
      {
        type: "callout", emoji: "🎵",
        text: "El fado en restaurante turístico de Alfama puede costar €30-50 por persona con cena incluida. La experiencia es linda pero preparada para turistas. Para fado auténtico buscá 'casas de fado' más pequeñas en Mouraria o Madragoa, o el Museu do Fado que organiza sesiones con intérpretes locales.",
      },
      { type: "h2", text: "Sintra: la excursión imprescindible" },
      { type: "p", text: "Sintra está a 40 minutos en tren desde Lisboa (€2.30 el viaje) y es uno de los paisajes más surrealistas de Europa: palacios de colores pastel, castillos árabes y jardines sobre la niebla. El Palácio Nacional da Pena (amarillo y rojo, sobre la roca) es ícono del romanticismo europeo. Llegá antes de las 9am o el tren de las 8:00 desde la estación de Rossio." },
      { type: "h2", text: "Gastronomía: lo que hay que comer sí o sí" },
      {
        type: "list", items: [
          "Pastel de nata: el hojaldre con crema horneada, en cualquier pastelería (€1.20-1.80 cada uno)",
          "Bacalhau à brás: el bacalao con huevo y patatas paja, el plato nacional por excelencia",
          "Bifanas: sándwich de cerdo en pan, la comida callejera más auténtica (~€3-4)",
          "Cerveja sagres + tosta mista: la merienda de cualquier lisboeta",
          "Vinho verde: el vino ligeramente efervescente del norte, perfecto para el verano",
        ],
      },
      { type: "h2", text: "Cuánto cuesta Lisboa en 2026" },
      { type: "p", text: "Lisboa subió de precio en los últimos 5 años pero sigue siendo más barata que otras capitales europeas. Un café expreso en barra cuesta €0.80-1. Una cerveza en bar €1.50-2. Menú del almuerzo en tasca €10-13 (incluye plato, bebida y postre). Hostel €20-35/noche, Airbnb céntrico €70-110, hotel 3 estrellas €100-160." },
      { type: "tip", title: "El tranvía 28: ¿trampa turística o experiencia real?", text: "El tranvía 28 es auténtico — lleva a los lisboetas por las colinas desde 1930. Pero la ruta turística lo hace estar siempre lleno y con filas largas. Si querés la experiencia sin aglomeración, tomalo en la dirección opuesta a los tours (hacia Martim Moniz o Campo Ourique) y evitá el mediodía." },
      { type: "cta", city: "Lisboa", country: "Portugal", text: "Generá tu itinerario personalizado para Lisboa →" },
    ],
  },
  {
    slug: "miami-guia-viajero-2026",
    title: "Miami 2026: la guía para ir más allá de South Beach",
    excerpt: "Miami es mucho más que playas y vida nocturna. Es arte, gastronomía, cultura cubana y una energía latina única en Estados Unidos. Esta guía te muestra todas sus caras.",
    category: "destinos",
    categoryLabel: "Destinos",
    readTime: 7,
    publishDate: "2026-03-30",
    tags: ["miami viaje guia", "miami beach turismo", "que ver en miami", "miami art deco", "wynwood miami"],
    heroEmoji: "🌴",
    metaTitle: "Miami 2026: guía completa de viaje — South Beach, Wynwood, gastronomía y cuánto cuesta",
    metaDescription: "Guía práctica para viajar a Miami: los mejores barrios, playas, gastronomía cubana, vida nocturna y cuánto presupuestar para tu viaje a Florida.",
    sections: [
      { type: "intro", text: "Miami es una ciudad de múltiples personalidades: la capital latina de EE.UU., una capital mundial del arte contemporáneo, destino de playas paradisíacas y ciudad de negocios. Y todo eso en un radio de 30 km. Esta guía te ayuda a aprovecharla más allá del circuito turístico clásico." },
      { type: "h2", text: "Los barrios imprescindibles" },
      {
        type: "list", items: [
          "South Beach (SoBe) — el ícono: arquitectura Art Déco, Ocean Drive, la playa más famosa y la vida nocturna más intensa",
          "Wynwood — el barrio del arte callejero: galerías, murales enormes, restaurantes creativos y la escena hipster de Miami",
          "Little Havana — la Miami cubana: café cubano, dominó en Calle Ocho, música son y restaurantes de familia",
          "Design District — lujo y moda: las grandes marcas internacionales junto a galerías de arte y arquitectura espectacular",
          "Coconut Grove — el barrio más verde y bohemio, con marinas, parques y ambiente relajado",
        ],
      },
      { type: "h2", text: "Las playas: South Beach no es la única" },
      { type: "p", text: "South Beach es icónica pero masificada. Para algo más tranquilo: Crandon Park Beach en Key Biscayne (familia, agua calma), Haulover Beach (nudista en parte, pero también familiar y menos concurrida) o las playas de Fort Lauderdale a 45 minutos al norte, mucho menos turísticas." },
      { type: "h2", text: "Art Basel Miami: si tu viaje coincide" },
      {
        type: "callout", emoji: "🎨",
        text: "Art Basel Miami Beach (diciembre) es la feria de arte contemporáneo más importante de las Américas. La ciudad se llena de instalaciones públicas gratuitas por todo el Design District, Wynwood y South Beach. Incluso si no vas a la feria (entrada costosa), la ciudad entera se convierte en un museo al aire libre durante esa semana.",
      },
      { type: "h2", text: "Gastronomía: lo que hay que comer en Miami" },
      {
        type: "list", items: [
          "Café cubano (cafecito): el expreso dulce y potente que toman los cubanos, €0.80-1.50 en cualquier ventanilla",
          "Croqueta preparada: la versión cubana del sándwich de jamón, en cualquier panadería de Little Havana",
          "Stone crab claws: el marisco ícono de Miami, temporada octubre-mayo, en Joe's Stone Crab",
          "Ropa vieja y arroz con frijoles: la gastronomía cubana más auténtica, en restaurantes familiares de Calle Ocho",
          "Mercado de Wynwood: food trucks internacionales en el corazón del barrio artístico",
        ],
      },
      { type: "h2", text: "Cuánto cuesta Miami" },
      { type: "p", text: "Miami es cara, especialmente en alojamiento. Hotel en South Beach: $200-400/noche. En zonas como Brickell o Midtown, más asequible: $130-220. Airbnb es una buena opción si viajás en grupo. Comer es variado: desde $8 en una ventanilla cubana hasta $60+ por persona en restaurante de diseño. El transporte es complicado sin auto — Uber/Lyft son esenciales." },
      { type: "tip", title: "¿Alquilar auto en Miami?", text: "Miami está diseñada para el auto. El Metrorail cubre muy poco, los buses son lentos y los Uber entre barrios se acumulan en costo. Si visitás más de 3 días y querés explorar más allá de South Beach, alquilar un auto por $40-60/día es más eficiente. Los Everglades y Key West son excursiones imprescindibles que requieren auto sí o sí." },
      { type: "h2", text: "Excursiones desde Miami" },
      {
        type: "list", items: [
          "Everglades National Park (1.5h): airboat entre caimanes, ecosistema único en el mundo",
          "Key West (3.5h): el punto más sureño de EE.UU., ambiente caribeño y relajado",
          "Fort Lauderdale (45 min): playas tranquilas y canales navegables, la 'Venecia de Florida'",
          "Orlando (3.5h): Disney y Universal si viajás con niños o simplemente querés el parque temático",
        ],
      },
      { type: "cta", city: "Miami", country: "United States", text: "Generá tu itinerario personalizado para Miami →" },
    ],
  },
  {
    slug: "visa-schengen-latinoamerica",
    title: "Visa Schengen para latinoamericanos: guía paso a paso 2026",
    excerpt: "La visa Schengen es el trámite que más asusta a los viajeros latinoamericanos que quieren visitar Europa. En realidad no es tan difícil si sabés exactamente qué presentar.",
    category: "guias",
    categoryLabel: "Guías",
    readTime: 9,
    publishDate: "2026-03-31",
    tags: ["visa schengen latinoamerica", "visa europa como tramitar", "visa schengen requisitos", "como pedir visa europa", "visa turista europa"],
    heroEmoji: "🛂",
    metaTitle: "Visa Schengen para latinoamericanos 2026: requisitos, documentos y paso a paso",
    metaDescription: "Guía completa para tramitar la visa Schengen desde Latinoamérica: qué documentos presentar, cómo demostrar vínculos, cuánto cuesta y cuándo solicitarla.",
    sections: [
      { type: "intro", text: "La zona Schengen incluye 27 países europeos con libre circulación: Francia, España, Italia, Alemania, Países Bajos, Portugal y más. Con una sola visa podés moverte entre todos ellos. Para ciudadanos de la mayoría de los países latinoamericanos (excepto países con acuerdo de visa como Chile, Argentina post-acuerdo, Brasil, etc.) el trámite requiere preparación pero es alcanzable." },
      { type: "h2", text: "¿Ante qué embajada tramitarla?" },
      {
        type: "callout", emoji: "📋",
        text: "Si visitás un solo país, tramitás ante ese país. Si visitás varios, ante el país donde pasás más noches. Si los días son iguales, ante el primero en ingresar. Ejemplo: 5 noches en París + 5 noches en Roma → primera entrada es Francia → tramitás en la embajada francesa.",
      },
      { type: "h2", text: "Documentos requeridos (lista completa)" },
      {
        type: "list", items: [
          "Pasaporte vigente con mínimo 3 meses de validez después del viaje + 2 páginas en blanco",
          "Formulario de solicitud de visa completado y firmado (descargable en el sitio de la embajada)",
          "Foto tamaño pasaporte con fondo blanco (especificaciones exactas en la embajada)",
          "Reserva de vuelos de ida y vuelta (no necesariamente comprados, puede ser reserva no pagada)",
          "Reserva de alojamiento para todas las noches del viaje",
          "Seguro de viaje con cobertura mínima €30.000 y cobertura en todo Schengen",
          "Extractos bancarios de los últimos 3-6 meses (muestran solvencia económica)",
          "Comprobante de empleo o actividad económica (certificado laboral, contrato, declaración de impuestos)",
          "Carta de solicitud explicando el propósito y plan del viaje",
          "Vínculos con el país de origen: propiedad, familia, trabajo estable, etc.",
        ],
      },
      { type: "h2", text: "El punto más crítico: demostrar que vas a volver" },
      { type: "p", text: "El mayor motivo de rechazo no es falta de dinero — es no demostrar suficientes razones para regresar. Los cónsules evalúan tu perfil de riesgo migratorio. Lazos fuertes ayudan: trabajo estable con antigüedad, propiedades, hijos, pareja o cónyuge, negocio propio. Si sos joven, soltero, sin propiedades y sin trabajo formal, necesitás ser más prolijo con la documentación." },
      { type: "h2", text: "Cuánto dinero demostrar" },
      { type: "p", text: "No hay un monto exacto definido, pero como referencia orientativa muchas embajadas esperan ver €70-100 por día de estadía en la cuenta, o el equivalente en moneda local. Lo importante no es el saldo el día que sacás el extracto — es el historial de movimientos consistente en los últimos meses. Una cuenta que de repente muestra un depósito grande el día antes levanta sospechas." },
      { type: "h2", text: "Cuándo pedirla y cuánto tarda" },
      {
        type: "list", items: [
          "Podés solicitarla hasta 6 meses antes del viaje (y no más de 6 meses)",
          "El tiempo de procesamiento es típicamente 15 días hábiles, pero puede ser hasta 30",
          "Pedila con al menos 6-8 semanas de anticipación para tener margen",
          "La visa válida puede ser de entrada única o múltiple, y cubre períodos definidos",
        ],
      },
      { type: "h2", text: "Si te rechazan: qué hacer" },
      { type: "p", text: "Un rechazo Schengen queda registrado y puede dificultar futuros trámites. Por eso es fundamental presentar el expediente lo más completo posible la primera vez. Si igual te rechazan, leé atentamente el motivo (la embajada está obligada a informarlo), corregí lo que faltó y podés volver a aplicar. Muchos viajeros obtienen la visa en el segundo intento." },
      { type: "tip", title: "¿Vale la pena usar un gestor o agencia?", text: "Para trámites en embajadas con alta demanda (Francia, España, Italia en temporada alta) conseguir turno puede ser un desafío. Hay gestores que consiguen turnos más rápido y te ayudan con la documentación. Cobran $50-150 extra pero pueden ser la diferencia entre tramitar en 2 semanas o 3 meses." },
      { type: "cta", text: "Planificá tu viaje por Europa con itinerario personalizado →" },
    ],
  },
  {
    slug: "viajar-solo-equipaje-de-mano",
    title: "Viajar solo con equipaje de mano: la guía definitiva para no facturar nunca más",
    excerpt: "Viajar sin facturar maleta no es solo una cuestión de ahorro — cambia completamente la experiencia: llegás más rápido, te movés con libertad y nunca perdés nada.",
    category: "consejos",
    categoryLabel: "Consejos",
    readTime: 6,
    publishDate: "2026-04-01",
    tags: ["equipaje de mano viaje", "viajar sin maleta", "carry on solamente", "mochila viaje", "pack light consejos"],
    heroEmoji: "🎒",
    metaTitle: "Viajar con equipaje de mano: guía para no facturar maleta nunca más",
    metaDescription: "Consejos prácticos para viajar solo con equipaje de mano: qué llevar, qué no llevar, las mejores bolsas y cómo empacar para 2 semanas en una mochila de cabina.",
    sections: [
      { type: "intro", text: "Cada vez más viajeros experimentados llegan a la misma conclusión: facturar maleta es una forma de cargar con problemas innecesarios. Espera en cinta, riesgo de pérdida, sobrecargos, movilidad limitada. Viajar con solo equipaje de mano requiere planificación — pero una vez que lo hacés bien, no querés volver atrás." },
      { type: "h2", text: "Las medidas que hay que conocer" },
      {
        type: "callout", emoji: "📐",
        text: "El estándar más permisivo (Ryanair, EasyJet, aerolíneas internacionales) suele ser 55 x 40 x 20 cm para bolso de cabina y 40 x 30 x 15 cm para bolso personal debajo del asiento. Algunas aerolíneas latinoamericanas son más restrictivas: siempre verificá las medidas de tu aerolínea específica antes de comprar la bolsa.",
      },
      { type: "h2", text: "Qué llevarse y qué no" },
      {
        type: "list", items: [
          "Ropa: la regla del 3 × 3 — 3 tops, 3 bottoms, 3 pares de medias, 2 de ropa interior de secado rápido",
          "Zapatos: máximo 2 pares (los más voluminosos puestos), elegí neutros que combinen con todo",
          "Electrónica: cargador universal, powerbank pequeño, auriculares en estuche rígido",
          "Líquidos: contenedores de máximo 100ml en bolsita zip de 1 litro (regla TSA/aeropuertos EU)",
          "NO llevés: pelo seco, plancha, varios libros físicos, ropa para 'por las dudas'",
          "SIEMPRE llevés: medicamentos, documentos, dinero y objetos de valor — NUNCA en bodega",
        ],
      },
      { type: "h2", text: "Las mejores bolsas para viajar liviano" },
      { type: "p", text: "Para viajes de 1-3 semanas, una mochila de 20-26 litros es el punto dulce: entra en cualquier compartimiento superior y cumple las medidas internacionales. Marcas como Osprey Farpoint 40 (la más popular pero a veces demasiado grande), Peak Design Travel Backpack o Aer Travel Pack son inversiones que duran años." },
      { type: "h2", text: "El truco de las bolsas de compresión" },
      { type: "p", text: "Los cubos de compresión (packing cubes) no reducen volumen — solo organizan. Las bolsas de compresión con válvula sí reducen el volumen de la ropa de abrigo hasta un 40%. Son ideales para sweaters o chaquetas que normalmente ocupan la mitad de la mochila. Con una bolsa de compresión para la ropa de abrigo y cubos para el resto, una mochila de 20L puede guardar ropa para 10 días." },
      {
        type: "list", items: [
          "Enrollá la ropa en lugar de doblarla: ocupa menos espacio y se arruga menos",
          "Llevá ropa de materiales técnicos (merino wool, nylon) que se secan rápido y se pueden lavar en el lavabo",
          "Usá los rincones y huecos: los zapatos pueden guardar medias, el cargador cabe en los laterales",
          "El truco del día de llegada: llegás con ropa usada que podés tirar o donar en destino",
        ],
      },
      { type: "h2", text: "Qué hacer con la ropa sucia" },
      { type: "p", text: "La pregunta que más frena a la gente. Opciones: 1) Laundromats (lavanderías automáticas) — hay en casi todas las ciudades del mundo, €3-8 una vuelta, clave para viajes largos. 2) Lavado a mano en el lavabo del hotel — funciona para ropa técnica que seca en 4-6 horas. 3) Hoteles con servicio de lavandería — más caro pero conveniente. 4) Comprar ropa barata en destino y dejarla." },
      { type: "tip", title: "El test definitivo antes de salir", text: "Empacá todo lo que querés llevar, cerá la bolsa y caminá con ella 20 minutos. Si podés hacerlo sin incomodidad, está bien. Si sentís que es demasiado pesado o incómodo, sacá cosas hasta que sea cómoda. Lo que no te pondrías el primer día del viaje, no lo llevés." },
      { type: "cta", text: "Planificá tu próximo viaje con itinerario personalizado →" },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  tecnologia: { bg: "rgba(42,181,160,0.15)", text: "#2ab5a0", border: "rgba(42,181,160,0.3)" },
  presupuesto: { bg: "rgba(255,193,7,0.15)", text: "#e6a800", border: "rgba(255,193,7,0.3)" },
  destinos: { bg: "rgba(100,149,237,0.15)", text: "#6495ed", border: "rgba(100,149,237,0.3)" },
  guias: { bg: "rgba(255,127,80,0.15)", text: "#ff7f50", border: "rgba(255,127,80,0.3)" },
  consejos: { bg: "rgba(180,120,255,0.15)", text: "#b478ff", border: "rgba(180,120,255,0.3)" },
};
