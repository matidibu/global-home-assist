export type ContentSection =
  | { type: "intro"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "callout"; emoji: string; text: string }
  | { type: "tip"; title: string; text: string }
  | { type: "cta"; destination?: string; text: string };

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
    metaTitle: "Viajar Europa barato en 2025: presupuesto real sin mentiras",
    metaDescription: "Cuánto cuesta realmente un viaje de 7 días en Europa en 2025. Breakdown honesto de vuelos, alojamiento, comida y transporte, con los mejores trucos para optimizar cada euro.",
    sections: [
      {
        type: "intro",
        text: "Cada semana aparece un nuevo artículo que promete 'Europa por €30/día'. La mayoría ignoran el vuelo, cuentan el hostel más incómodo del barrio, y suelen estar desactualizados por dos años. Este artículo no hace eso.",
      },
      {
        type: "h2",
        text: "El breakdown real de un viaje europeo de 7 días (2025)",
      },
      {
        type: "p",
        text: "Usemos Madrid–Barcelona–Lisboa como ejemplo, uno de los circuitos más populares. Estos son los números reales para 2025, sin suavizarlos ni inflarlos:",
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
        text: "La ciudad europea que más te da por tu dinero en 2025",
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
    metaTitle: "Barcelona vs Madrid: la comparativa honesta para viajeros en 2025",
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
        text: "En 2025, hay herramientas de IA que procesan toda esa información y te devuelven un itinerario personalizado en segundos. No se trata de que la IA piense por vos — se trata de tener un punto de partida inteligente que podés ajustar, en vez de construir todo desde cero con información fragmentada.",
      },
      {
        type: "cta",
        text: "Empezá con un itinerario inteligente — generalo gratis en 30 segundos →",
      },
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
