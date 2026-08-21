"use client";

import Link from "next/link";
import { destinations } from "@/data/destinations";
import { localizeDestinationCard } from "@/data/destinationsI18n";
import { generateFAQSchema } from "@/lib/schemaMarkup";
import { useAutoLanguage } from "@/hooks/useAutoLanguage";

const FEATURED_DESTINATIONS = [
  "paris", "tokio", "nueva-york", "barcelona", "bali", "roma",
];

type Faq = { question: string; answer: string };
type Step = { step: string; title: string; desc: string };
type Perk = { icon: string; title: string; desc: string };

type Copy = {
  howItWorksTitle: string;
  howItWorksSub: string;
  howItWorks: Step[];
  destinosTitle: string;
  verTodos: string;
  whatYouGetTitle: string;
  whatYouGetSub: string;
  whatYouGet: Perk[];
  whyTitle: string;
  whyP1: string;
  whyP2: string;
  features: string[];
  faqTitle: string;
  faqs: Faq[];
};

// Static marketing/FAQ copy for the homepage, below SearchForm -- the
// generated itinerary renders inline on "/" (see #sec-itinerario etc. in
// SearchForm.tsx), and the page scroll continues straight into this
// section, so it needs to follow the same auto-detected browser language
// as the rest of the page (confirmed missing 2026-08-19: an English-locale
// visitor/video capture still saw this whole section in Spanish).
// Destination card content (name/country/tagline/avgBudget) is localized via
// `localizeDestinationCard` (src/data/destinationsI18n.ts) below -- the base
// `destinations` array itself stays Spanish-only (most of its fields, like
// guidePractical/practicalInfo/faq, turned out to be unused dead content,
// confirmed 2026-08-21: only this component and sitemap.ts import it, and
// sitemap only needs the slug).
const T: Record<string, Copy> = {
  es: {
    howItWorksTitle: "¿Cómo funciona el planificador?",
    howItWorksSub: "De cero a itinerario completo en tres pasos simples",
    howItWorks: [
      { step: "1", title: "Elegís tu destino", desc: "Ingresá la ciudad que querés visitar, la cantidad de días y tu tipo de viaje. Podés elegir entre más de 80 destinos en todo el mundo." },
      { step: "2", title: "La IA genera tu itinerario", desc: "En menos de 30 segundos obtenés un plan detallado día por día, con fotos reales de cada lugar, horarios de apertura y estimaciones de tiempo." },
      { step: "3", title: "Explorás con el mapa interactivo", desc: "Cada itinerario incluye un mapa interactivo con las rutas optimizadas, alertas de seguridad locales y acceso a vuelos y hoteles." },
    ],
    destinosTitle: "Destinos más planificados",
    verTodos: "Ver todos los destinos →",
    whatYouGetTitle: "Más que un itinerario: toda la info de tu viaje",
    whatYouGetSub: "Lo que en general implica abrir 5 o 6 sitios distintos, acá viene incluido en el mismo plan",
    whatYouGet: [
      { icon: "🛡️", title: "Seguridad y salud al día", desc: "Cada itinerario suma alertas de seguridad vigentes por zona, vacunas recomendadas, números de emergencia locales y la ubicación del hospital y la comisaría más cercanos al destino. Información que normalmente tenés que buscar en el sitio del ministerio de salud o de tu embajada, ya integrada en el plan." },
      { icon: "🛂", title: "Trámites y datos prácticos", desc: "Dirección y horarios de la embajada o consulado de tu país, tipo de cambio real de la moneda local y un presupuesto estimado por categoría (comida, transporte, entradas). Nada de cifras genéricas: son los datos que necesitás antes de hacer la valija." },
      { icon: "📸", title: "Fotos y mapas reales", desc: "Cada parada del itinerario muestra una foto real del lugar y su ubicación exacta en un mapa interactivo con la ruta entre actividades ya calculada, así sabés cuánto vas a caminar o viajar cada día." },
      { icon: "✈️", title: "Vuelos y hoteles sin salir del sitio", desc: "Buscador de vuelos y hoteles integrado para comparar precios sin abrir una pestaña nueva. Vas del plan del día a la reserva en el mismo lugar." },
    ],
    whyTitle: "¿Por qué planificar con inteligencia artificial?",
    whyP1: "Los itinerarios genéricos de internet están desactualizados y no te conocen. La IA de Global Home Assist genera un plan personalizado que considera tus intereses, tu ritmo de viaje y tu presupuesto — y lo hace en 30 segundos.",
    whyP2: "Cada itinerario incluye fotos reales de cada atracción, mapas interactivos con rutas optimizadas, alertas de seguridad locales e información práctica actualizada. Todo gratis, sin registro.",
    features: [
      "Rutas optimizadas para no perder tiempo",
      "Fotos reales de cada atracción",
      "Mapas interactivos incluidos",
      "Alertas de seguridad actualizadas",
      "Información en 6 idiomas",
      "Sin registro · Completamente gratis",
    ],
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { question: "¿Cuánto cuesta usar Global Home Assist?", answer: "Nada. El planificador es 100% gratuito y no pide registro. El sitio se financia con comisiones de afiliado (cuando reservás un vuelo, hotel o tour a través de nuestros links, sin costo extra para vos) y con publicidad de Google AdSense — nunca cobrándole al usuario." },
      { question: "¿Cómo genera el itinerario la inteligencia artificial?", answer: "Usamos un modelo de IA (GPT-4o) para armar la estructura día por día según tus intereses, presupuesto y duración de viaje, pero los datos concretos —fotos, ubicaciones, clima, cambio de moneda, alertas de seguridad— vienen de fuentes verificadas (Geoapify, Google Places, APIs meteorológicas, fuentes oficiales de seguridad). La IA organiza y prioriza esa información, no la inventa." },
      { question: "¿Puedo confiar en la información de seguridad y salud?", answer: "La tratamos con la misma seriedad que el resto del contenido: se basa en fuentes oficiales (como el Departamento de Estado de EE.UU. y ministerios de salud). Aun así, es información de referencia, no un reemplazo de las recomendaciones oficiales de tu propio gobierno — siempre conviene confirmar antes de viajar, especialmente a destinos con situación cambiante." },
      { question: "¿Necesito crear una cuenta para generar mi itinerario?", answer: "No. Completás destino, días, presupuesto e intereses, y el itinerario se genera al instante. No creamos perfiles de usuario ni guardamos un historial de tus búsquedas." },
      { question: "¿En qué destinos funciona el planificador?", answer: "Tenemos guías curadas en profundidad para más de 24 ciudades (con detalle día por día, precios y tips verificados) y el generador con IA puede armar un itinerario para prácticamente cualquier destino del mundo que ingreses." },
      { question: "Si es gratis, ¿de qué vive Global Home Assist?", answer: "De comisiones de afiliado (Booking, Aviasales, GetYourGuide, entre otros) cuando reservás a través de nuestros enlaces, y de publicidad de Google AdSense. Esas relaciones comerciales no determinan qué te recomendamos: muchas sugerencias del itinerario son lugares gratuitos o de acceso público." },
    ],
  },
  en: {
    howItWorksTitle: "How does the planner work?",
    howItWorksSub: "From zero to a complete itinerary in three simple steps",
    howItWorks: [
      { step: "1", title: "Pick your destination", desc: "Enter the city you want to visit, how many days, and your trip style. Choose from more than 80 destinations worldwide." },
      { step: "2", title: "The AI builds your itinerary", desc: "In under 30 seconds you get a detailed day-by-day plan, with real photos of every place, opening hours, and time estimates." },
      { step: "3", title: "Explore with the interactive map", desc: "Every itinerary includes an interactive map with optimized routes, local safety alerts, and access to flights and hotels." },
    ],
    destinosTitle: "Most planned destinations",
    verTodos: "See all destinations →",
    whatYouGetTitle: "More than an itinerary: all your trip info in one place",
    whatYouGetSub: "What usually means opening 5 or 6 different sites comes built into the same plan here",
    whatYouGet: [
      { icon: "🛡️", title: "Safety and health, up to date", desc: "Every itinerary adds current safety alerts by area, recommended vaccines, local emergency numbers, and the nearest hospital and police station to your destination. Information you'd normally have to dig up on a health ministry or embassy site, already built into the plan." },
      { icon: "🛂", title: "Paperwork and practical info", desc: "Your country's embassy or consulate address and hours, the local currency's real exchange rate, and an estimated budget by category (food, transport, tickets). No generic numbers — the data you actually need before you pack." },
      { icon: "📸", title: "Real photos and real maps", desc: "Every stop on the itinerary shows a real photo of the place and its exact location on an interactive map, with the route between activities already calculated, so you know how much you'll walk or travel each day." },
      { icon: "✈️", title: "Flights and hotels without leaving the site", desc: "Built-in flight and hotel search to compare prices without opening a new tab. Go from the day's plan straight to the booking, in the same place." },
    ],
    whyTitle: "Why plan with artificial intelligence?",
    whyP1: "Generic itineraries from the internet are outdated and don't know you. Global Home Assist's AI builds a personalized plan that factors in your interests, your travel pace, and your budget — and does it in 30 seconds.",
    whyP2: "Every itinerary includes real photos of each attraction, interactive maps with optimized routes, local safety alerts, and up-to-date practical info. All free, no sign-up.",
    features: [
      "Optimized routes so you don't waste time",
      "Real photos of every attraction",
      "Interactive maps included",
      "Up-to-date safety alerts",
      "Available in 6 languages",
      "No sign-up · Completely free",
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      { question: "How much does Global Home Assist cost?", answer: "Nothing. The planner is 100% free and doesn't require sign-up. The site is funded by affiliate commissions (when you book a flight, hotel, or tour through our links, at no extra cost to you) and Google AdSense advertising — never by charging users." },
      { question: "How does the AI generate the itinerary?", answer: "We use an AI model (GPT-4o) to build the day-by-day structure based on your interests, budget, and trip length, but the concrete data — photos, locations, weather, currency exchange, safety alerts — comes from verified sources (Geoapify, Google Places, weather APIs, official safety sources). The AI organizes and prioritizes that information, it doesn't invent it." },
      { question: "Can I trust the safety and health information?", answer: "We treat it with the same rigor as the rest of the content: it's based on official sources (like the U.S. State Department and health ministries). Even so, it's reference information, not a replacement for your own government's official guidance — always double-check before you travel, especially to destinations with a changing situation." },
      { question: "Do I need to create an account to generate my itinerary?", answer: "No. You fill in destination, days, budget, and interests, and the itinerary generates instantly. We don't create user profiles or store a history of your searches." },
      { question: "Which destinations does the planner cover?", answer: "We have in-depth curated guides for more than 24 cities (with day-by-day detail, prices, and verified tips), and the AI generator can build an itinerary for practically any destination in the world you enter." },
      { question: "If it's free, how does Global Home Assist make money?", answer: "From affiliate commissions (Booking, Aviasales, GetYourGuide, among others) when you book through our links, and from Google AdSense advertising. Those commercial relationships don't determine what we recommend — many itinerary suggestions are free or publicly accessible places." },
    ],
  },
  fr: {
    howItWorksTitle: "Comment fonctionne le planificateur ?",
    howItWorksSub: "De zéro à un itinéraire complet en trois étapes simples",
    howItWorks: [
      { step: "1", title: "Choisissez votre destination", desc: "Indiquez la ville que vous voulez visiter, le nombre de jours et votre style de voyage. Choisissez parmi plus de 80 destinations dans le monde." },
      { step: "2", title: "L'IA génère votre itinéraire", desc: "En moins de 30 secondes, vous obtenez un plan détaillé jour par jour, avec de vraies photos de chaque lieu, les horaires d'ouverture et des estimations de temps." },
      { step: "3", title: "Explorez avec la carte interactive", desc: "Chaque itinéraire inclut une carte interactive avec des itinéraires optimisés, des alertes de sécurité locales et l'accès aux vols et hôtels." },
    ],
    destinosTitle: "Destinations les plus planifiées",
    verTodos: "Voir toutes les destinations →",
    whatYouGetTitle: "Plus qu'un itinéraire : toutes les infos de votre voyage",
    whatYouGetSub: "Ce qui implique généralement d'ouvrir 5 ou 6 sites différents est ici inclus dans le même plan",
    whatYouGet: [
      { icon: "🛡️", title: "Sécurité et santé à jour", desc: "Chaque itinéraire ajoute des alertes de sécurité en vigueur par zone, les vaccins recommandés, les numéros d'urgence locaux, ainsi que l'hôpital et le commissariat les plus proches de la destination. Des informations qu'il faut normalement chercher sur le site du ministère de la Santé ou de votre ambassade, déjà intégrées au plan." },
      { icon: "🛂", title: "Démarches et infos pratiques", desc: "Adresse et horaires de l'ambassade ou du consulat de votre pays, taux de change réel de la monnaie locale et un budget estimé par catégorie (nourriture, transport, entrées). Pas de chiffres génériques : ce sont les données dont vous avez besoin avant de faire vos valises." },
      { icon: "📸", title: "Vraies photos et vraies cartes", desc: "Chaque étape de l'itinéraire affiche une vraie photo du lieu et sa position exacte sur une carte interactive, avec le trajet entre les activités déjà calculé, pour savoir combien vous allez marcher ou vous déplacer chaque jour." },
      { icon: "✈️", title: "Vols et hôtels sans quitter le site", desc: "Moteur de recherche de vols et d'hôtels intégré pour comparer les prix sans ouvrir un nouvel onglet. Passez du plan du jour à la réservation au même endroit." },
    ],
    whyTitle: "Pourquoi planifier avec l'intelligence artificielle ?",
    whyP1: "Les itinéraires génériques trouvés sur internet sont dépassés et ne vous connaissent pas. L'IA de Global Home Assist génère un plan personnalisé qui prend en compte vos intérêts, votre rythme de voyage et votre budget — en seulement 30 secondes.",
    whyP2: "Chaque itinéraire inclut de vraies photos de chaque attraction, des cartes interactives avec itinéraires optimisés, des alertes de sécurité locales et des informations pratiques à jour. Tout gratuit, sans inscription.",
    features: [
      "Itinéraires optimisés pour ne pas perdre de temps",
      "Vraies photos de chaque attraction",
      "Cartes interactives incluses",
      "Alertes de sécurité à jour",
      "Disponible en 6 langues",
      "Sans inscription · Entièrement gratuit",
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      { question: "Combien coûte l'utilisation de Global Home Assist ?", answer: "Rien. Le planificateur est 100 % gratuit et ne demande aucune inscription. Le site est financé par des commissions d'affiliation (quand vous réservez un vol, un hôtel ou une visite via nos liens, sans coût supplémentaire pour vous) et par la publicité Google AdSense — jamais en faisant payer l'utilisateur." },
      { question: "Comment l'intelligence artificielle génère-t-elle l'itinéraire ?", answer: "Nous utilisons un modèle d'IA (GPT-4o) pour construire la structure jour par jour selon vos intérêts, votre budget et la durée du voyage, mais les données concrètes — photos, emplacements, météo, taux de change, alertes de sécurité — proviennent de sources vérifiées (Geoapify, Google Places, API météo, sources officielles de sécurité). L'IA organise et priorise ces informations, elle ne les invente pas." },
      { question: "Puis-je faire confiance aux informations de sécurité et de santé ?", answer: "Nous les traitons avec le même sérieux que le reste du contenu : elles s'appuient sur des sources officielles (comme le Département d'État américain et les ministères de la Santé). Il s'agit néanmoins d'informations de référence, pas d'un substitut aux recommandations officielles de votre propre gouvernement — il est toujours conseillé de vérifier avant de partir, surtout vers des destinations à la situation changeante." },
      { question: "Dois-je créer un compte pour générer mon itinéraire ?", answer: "Non. Vous renseignez la destination, le nombre de jours, le budget et vos centres d'intérêt, et l'itinéraire se génère instantanément. Nous ne créons pas de profils utilisateurs et ne conservons pas d'historique de vos recherches." },
      { question: "Pour quelles destinations le planificateur fonctionne-t-il ?", answer: "Nous avons des guides approfondis et sélectionnés pour plus de 24 villes (avec détail jour par jour, prix et conseils vérifiés), et le générateur IA peut construire un itinéraire pour pratiquement n'importe quelle destination du monde que vous saisissez." },
      { question: "Si c'est gratuit, comment Global Home Assist gagne-t-il de l'argent ?", answer: "Grâce à des commissions d'affiliation (Booking, Aviasales, GetYourGuide, entre autres) lorsque vous réservez via nos liens, et à la publicité Google AdSense. Ces relations commerciales ne déterminent pas ce que nous recommandons : de nombreuses suggestions de l'itinéraire sont des lieux gratuits ou en accès libre." },
    ],
  },
  it: {
    howItWorksTitle: "Come funziona il pianificatore?",
    howItWorksSub: "Da zero a un itinerario completo in tre semplici passi",
    howItWorks: [
      { step: "1", title: "Scegli la tua destinazione", desc: "Inserisci la città che vuoi visitare, il numero di giorni e il tuo stile di viaggio. Scegli tra oltre 80 destinazioni in tutto il mondo." },
      { step: "2", title: "L'IA genera il tuo itinerario", desc: "In meno di 30 secondi ottieni un piano dettagliato giorno per giorno, con foto reali di ogni luogo, orari di apertura e stime dei tempi." },
      { step: "3", title: "Esplora con la mappa interattiva", desc: "Ogni itinerario include una mappa interattiva con percorsi ottimizzati, allerte di sicurezza locali e accesso a voli e hotel." },
    ],
    destinosTitle: "Destinazioni più pianificate",
    verTodos: "Vedi tutte le destinazioni →",
    whatYouGetTitle: "Più di un itinerario: tutte le info del tuo viaggio",
    whatYouGetSub: "Quello che di solito richiede aprire 5 o 6 siti diversi, qui è incluso nello stesso piano",
    whatYouGet: [
      { icon: "🛡️", title: "Sicurezza e salute aggiornate", desc: "Ogni itinerario aggiunge allerte di sicurezza aggiornate per zona, vaccini consigliati, numeri di emergenza locali e la posizione dell'ospedale e della stazione di polizia più vicini alla destinazione. Informazioni che normalmente dovresti cercare sul sito del ministero della salute o della tua ambasciata, già integrate nel piano." },
      { icon: "🛂", title: "Pratiche e informazioni utili", desc: "Indirizzo e orari dell'ambasciata o del consolato del tuo paese, tasso di cambio reale della valuta locale e un budget stimato per categoria (cibo, trasporti, ingressi). Niente numeri generici: sono i dati di cui hai bisogno prima di fare le valigie." },
      { icon: "📸", title: "Foto e mappe reali", desc: "Ogni tappa dell'itinerario mostra una foto reale del luogo e la sua posizione esatta su una mappa interattiva, con il percorso tra le attività già calcolato, così sai quanto camminerai o viaggerai ogni giorno." },
      { icon: "✈️", title: "Voli e hotel senza uscire dal sito", desc: "Motore di ricerca di voli e hotel integrato per confrontare i prezzi senza aprire una nuova scheda. Passi dal piano del giorno alla prenotazione nello stesso posto." },
    ],
    whyTitle: "Perché pianificare con l'intelligenza artificiale?",
    whyP1: "Gli itinerari generici trovati online sono superati e non ti conoscono. L'IA di Global Home Assist genera un piano personalizzato che considera i tuoi interessi, il tuo ritmo di viaggio e il tuo budget — e lo fa in 30 secondi.",
    whyP2: "Ogni itinerario include foto reali di ogni attrazione, mappe interattive con percorsi ottimizzati, allerte di sicurezza locali e informazioni pratiche aggiornate. Tutto gratis, senza registrazione.",
    features: [
      "Percorsi ottimizzati per non perdere tempo",
      "Foto reali di ogni attrazione",
      "Mappe interattive incluse",
      "Allerte di sicurezza aggiornate",
      "Disponibile in 6 lingue",
      "Senza registrazione · Completamente gratis",
    ],
    faqTitle: "Domande frequenti",
    faqs: [
      { question: "Quanto costa usare Global Home Assist?", answer: "Niente. Il pianificatore è gratuito al 100% e non richiede registrazione. Il sito è finanziato da commissioni di affiliazione (quando prenoti un volo, un hotel o un tour tramite i nostri link, senza costi aggiuntivi per te) e da pubblicità Google AdSense — mai facendo pagare l'utente." },
      { question: "Come genera l'itinerario l'intelligenza artificiale?", answer: "Usiamo un modello di IA (GPT-4o) per costruire la struttura giorno per giorno in base ai tuoi interessi, budget e durata del viaggio, ma i dati concreti — foto, posizioni, meteo, cambio valuta, allerte di sicurezza — provengono da fonti verificate (Geoapify, Google Places, API meteo, fonti ufficiali di sicurezza). L'IA organizza e dà priorità a queste informazioni, non le inventa." },
      { question: "Posso fidarmi delle informazioni su sicurezza e salute?", answer: "Le trattiamo con lo stesso rigore del resto dei contenuti: si basano su fonti ufficiali (come il Dipartimento di Stato USA e i ministeri della salute). Ciononostante, sono informazioni di riferimento, non un sostituto delle raccomandazioni ufficiali del tuo governo — conviene sempre verificare prima di partire, specialmente per destinazioni con una situazione in evoluzione." },
      { question: "Devo creare un account per generare il mio itinerario?", answer: "No. Inserisci destinazione, giorni, budget e interessi, e l'itinerario si genera istantaneamente. Non creiamo profili utente né conserviamo una cronologia delle tue ricerche." },
      { question: "Per quali destinazioni funziona il pianificatore?", answer: "Abbiamo guide curate in profondità per oltre 24 città (con dettaglio giorno per giorno, prezzi e consigli verificati), e il generatore IA può creare un itinerario per praticamente qualsiasi destinazione al mondo tu inserisca." },
      { question: "Se è gratis, come guadagna Global Home Assist?", answer: "Da commissioni di affiliazione (Booking, Aviasales, GetYourGuide, tra gli altri) quando prenoti tramite i nostri link, e da pubblicità Google AdSense. Queste relazioni commerciali non determinano cosa ti consigliamo: molti suggerimenti dell'itinerario sono luoghi gratuiti o ad accesso pubblico." },
    ],
  },
  de: {
    howItWorksTitle: "Wie funktioniert der Planer?",
    howItWorksSub: "In drei einfachen Schritten von null zum kompletten Reiseplan",
    howItWorks: [
      { step: "1", title: "Wähle dein Reiseziel", desc: "Gib die Stadt ein, die du besuchen möchtest, die Anzahl der Tage und deinen Reisestil. Wähle aus mehr als 80 Reisezielen weltweit." },
      { step: "2", title: "Die KI erstellt deinen Reiseplan", desc: "In weniger als 30 Sekunden erhältst du einen detaillierten Tag-für-Tag-Plan mit echten Fotos jedes Ortes, Öffnungszeiten und Zeitschätzungen." },
      { step: "3", title: "Erkunde mit der interaktiven Karte", desc: "Jeder Reiseplan enthält eine interaktive Karte mit optimierten Routen, lokalen Sicherheitshinweisen und Zugang zu Flügen und Hotels." },
    ],
    destinosTitle: "Meistgeplante Reiseziele",
    verTodos: "Alle Reiseziele ansehen →",
    whatYouGetTitle: "Mehr als ein Reiseplan: alle Infos für deine Reise",
    whatYouGetSub: "Was normalerweise 5 oder 6 verschiedene Websites erfordert, ist hier in einem einzigen Plan enthalten",
    whatYouGet: [
      { icon: "🛡️", title: "Sicherheit und Gesundheit aktuell", desc: "Jeder Reiseplan enthält aktuelle Sicherheitshinweise nach Region, empfohlene Impfungen, lokale Notrufnummern sowie das nächstgelegene Krankenhaus und die nächste Polizeistation am Reiseziel. Informationen, die man normalerweise auf der Website des Gesundheitsministeriums oder der Botschaft suchen müsste, hier bereits in den Plan integriert." },
      { icon: "🛂", title: "Formalitäten und praktische Infos", desc: "Adresse und Öffnungszeiten der Botschaft oder des Konsulats deines Landes, der reale Wechselkurs der Landeswährung und ein geschätztes Budget nach Kategorie (Essen, Transport, Eintritte). Keine generischen Zahlen — das sind die Daten, die du vor dem Packen wirklich brauchst." },
      { icon: "📸", title: "Echte Fotos und echte Karten", desc: "Jeder Stopp im Reiseplan zeigt ein echtes Foto des Ortes und seine genaue Position auf einer interaktiven Karte, mit bereits berechneter Route zwischen den Aktivitäten, damit du weißt, wie viel du an jedem Tag laufen oder fahren wirst." },
      { icon: "✈️", title: "Flüge und Hotels, ohne die Seite zu verlassen", desc: "Integrierte Flug- und Hotelsuche, um Preise zu vergleichen, ohne einen neuen Tab zu öffnen. Vom Tagesplan direkt zur Buchung, am selben Ort." },
    ],
    whyTitle: "Warum mit künstlicher Intelligenz planen?",
    whyP1: "Generische Reisepläne aus dem Internet sind veraltet und kennen dich nicht. Die KI von Global Home Assist erstellt einen personalisierten Plan, der deine Interessen, dein Reisetempo und dein Budget berücksichtigt — und das in 30 Sekunden.",
    whyP2: "Jeder Reiseplan enthält echte Fotos jeder Attraktion, interaktive Karten mit optimierten Routen, lokale Sicherheitshinweise und aktuelle praktische Informationen. Alles kostenlos, ohne Registrierung.",
    features: [
      "Optimierte Routen, damit du keine Zeit verlierst",
      "Echte Fotos jeder Attraktion",
      "Interaktive Karten inklusive",
      "Aktuelle Sicherheitshinweise",
      "Verfügbar in 6 Sprachen",
      "Keine Registrierung · Komplett kostenlos",
    ],
    faqTitle: "Häufig gestellte Fragen",
    faqs: [
      { question: "Was kostet die Nutzung von Global Home Assist?", answer: "Nichts. Der Planer ist 100 % kostenlos und erfordert keine Registrierung. Die Seite finanziert sich durch Affiliate-Provisionen (wenn du über unsere Links einen Flug, ein Hotel oder eine Tour buchst, ohne Mehrkosten für dich) und durch Google-AdSense-Werbung — niemals durch Gebühren für Nutzer." },
      { question: "Wie erstellt die künstliche Intelligenz den Reiseplan?", answer: "Wir verwenden ein KI-Modell (GPT-4o), um die Tag-für-Tag-Struktur nach deinen Interessen, deinem Budget und der Reisedauer zu erstellen. Die konkreten Daten — Fotos, Standorte, Wetter, Wechselkurse, Sicherheitshinweise — stammen jedoch aus verifizierten Quellen (Geoapify, Google Places, Wetter-APIs, offizielle Sicherheitsquellen). Die KI organisiert und priorisiert diese Informationen, sie erfindet sie nicht." },
      { question: "Kann ich den Sicherheits- und Gesundheitsinformationen vertrauen?", answer: "Wir behandeln sie mit derselben Sorgfalt wie den restlichen Inhalt: Sie basieren auf offiziellen Quellen (wie dem US-Außenministerium und Gesundheitsministerien). Dennoch handelt es sich um Referenzinformationen, keinen Ersatz für die offiziellen Empfehlungen deiner eigenen Regierung — es lohnt sich immer, vor der Reise noch einmal nachzuprüfen, besonders bei Reisezielen mit sich ändernder Lage." },
      { question: "Muss ich ein Konto erstellen, um meinen Reiseplan zu erstellen?", answer: "Nein. Du gibst Reiseziel, Tage, Budget und Interessen ein, und der Reiseplan wird sofort erstellt. Wir legen keine Nutzerprofile an und speichern keinen Verlauf deiner Suchen." },
      { question: "Für welche Reiseziele funktioniert der Planer?", answer: "Wir haben ausführlich kuratierte Guides für mehr als 24 Städte (mit Tag-für-Tag-Details, Preisen und geprüften Tipps), und der KI-Generator kann für praktisch jedes Reiseziel weltweit, das du eingibst, einen Reiseplan erstellen." },
      { question: "Wenn es kostenlos ist, wie verdient Global Home Assist Geld?", answer: "Durch Affiliate-Provisionen (Booking, Aviasales, GetYourGuide, unter anderem), wenn du über unsere Links buchst, und durch Google-AdSense-Werbung. Diese Geschäftsbeziehungen bestimmen nicht, was wir empfehlen — viele Vorschläge im Reiseplan sind kostenlose oder öffentlich zugängliche Orte." },
    ],
  },
  pt: {
    howItWorksTitle: "Como funciona o planejador?",
    howItWorksSub: "Do zero a um roteiro completo em três passos simples",
    howItWorks: [
      { step: "1", title: "Escolha seu destino", desc: "Digite a cidade que você quer visitar, quantos dias e o seu estilo de viagem. Escolha entre mais de 80 destinos ao redor do mundo." },
      { step: "2", title: "A IA gera o seu roteiro", desc: "Em menos de 30 segundos você recebe um plano detalhado dia a dia, com fotos reais de cada lugar, horários de funcionamento e estimativas de tempo." },
      { step: "3", title: "Explore com o mapa interativo", desc: "Cada roteiro inclui um mapa interativo com rotas otimizadas, alertas de segurança locais e acesso a voos e hotéis." },
    ],
    destinosTitle: "Destinos mais planejados",
    verTodos: "Ver todos os destinos →",
    whatYouGetTitle: "Mais que um roteiro: todas as infos da sua viagem",
    whatYouGetSub: "O que normalmente exige abrir 5 ou 6 sites diferentes, aqui vem incluído no mesmo plano",
    whatYouGet: [
      { icon: "🛡️", title: "Segurança e saúde em dia", desc: "Cada roteiro traz alertas de segurança atualizados por região, vacinas recomendadas, números de emergência locais e a localização do hospital e da delegacia mais próximos do destino. Informações que normalmente você teria que buscar no site do ministério da saúde ou da sua embaixada, já integradas ao plano." },
      { icon: "🛂", title: "Trâmites e informações práticas", desc: "Endereço e horário da embaixada ou consulado do seu país, câmbio real da moeda local e um orçamento estimado por categoria (comida, transporte, ingressos). Nada de números genéricos: são os dados que você precisa antes de fazer as malas." },
      { icon: "📸", title: "Fotos e mapas reais", desc: "Cada parada do roteiro mostra uma foto real do lugar e a localização exata em um mapa interativo, com a rota entre as atividades já calculada, para você saber quanto vai caminhar ou se deslocar em cada dia." },
      { icon: "✈️", title: "Voos e hotéis sem sair do site", desc: "Buscador de voos e hotéis integrado para comparar preços sem abrir uma nova aba. Você vai do plano do dia direto para a reserva, no mesmo lugar." },
    ],
    whyTitle: "Por que planejar com inteligência artificial?",
    whyP1: "Os roteiros genéricos da internet estão desatualizados e não te conhecem. A IA do Global Home Assist gera um plano personalizado que considera seus interesses, seu ritmo de viagem e seu orçamento — e faz isso em 30 segundos.",
    whyP2: "Cada roteiro inclui fotos reais de cada atração, mapas interativos com rotas otimizadas, alertas de segurança locais e informações práticas atualizadas. Tudo grátis, sem cadastro.",
    features: [
      "Rotas otimizadas para não perder tempo",
      "Fotos reais de cada atração",
      "Mapas interativos incluídos",
      "Alertas de segurança atualizados",
      "Disponível em 6 idiomas",
      "Sem cadastro · Totalmente grátis",
    ],
    faqTitle: "Perguntas frequentes",
    faqs: [
      { question: "Quanto custa usar o Global Home Assist?", answer: "Nada. O planejador é 100% gratuito e não pede cadastro. O site é financiado por comissões de afiliados (quando você reserva um voo, hotel ou passeio pelos nossos links, sem custo extra para você) e por publicidade do Google AdSense — nunca cobrando do usuário." },
      { question: "Como a inteligência artificial gera o roteiro?", answer: "Usamos um modelo de IA (GPT-4o) para montar a estrutura dia a dia de acordo com seus interesses, orçamento e duração da viagem, mas os dados concretos — fotos, localizações, clima, câmbio, alertas de segurança — vêm de fontes verificadas (Geoapify, Google Places, APIs meteorológicas, fontes oficiais de segurança). A IA organiza e prioriza essas informações, não as inventa." },
      { question: "Posso confiar nas informações de segurança e saúde?", answer: "Tratamos com o mesmo rigor que o restante do conteúdo: baseiam-se em fontes oficiais (como o Departamento de Estado dos EUA e ministérios da saúde). Ainda assim, são informações de referência, não um substituto das recomendações oficiais do seu próprio governo — vale sempre confirmar antes de viajar, especialmente para destinos com situação em mudança." },
      { question: "Preciso criar uma conta para gerar meu roteiro?", answer: "Não. Você preenche destino, dias, orçamento e interesses, e o roteiro é gerado instantaneamente. Não criamos perfis de usuário nem guardamos histórico das suas buscas." },
      { question: "Em quais destinos o planejador funciona?", answer: "Temos guias curados em profundidade para mais de 24 cidades (com detalhes dia a dia, preços e dicas verificadas), e o gerador com IA pode montar um roteiro para praticamente qualquer destino do mundo que você digitar." },
      { question: "Se é grátis, de que vive o Global Home Assist?", answer: "De comissões de afiliados (Booking, Aviasales, GetYourGuide, entre outros) quando você reserva pelos nossos links, e de publicidade do Google AdSense. Essas relações comerciais não determinam o que recomendamos: muitas sugestões do roteiro são lugares gratuitos ou de acesso público." },
    ],
  },
};

export function HomeStaticContent() {
  const [language] = useAutoLanguage();
  const t = T[language] || T.es;

  const featured = FEATURED_DESTINATIONS
    .map(slug => destinations.find(d => d.slug === slug))
    .filter(Boolean)
    .map(d => localizeDestinationCard(d!, language)) as typeof destinations;

  return (
    <div style={{
      background: "rgba(8, 14, 45, 0.80)",
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
    }}>
    <section style={{
      maxWidth: "900px",
      margin: "0 auto",
      padding: "0 20px 60px",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>
      {/* Cómo funciona */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 10px",
          }}>
            {t.howItWorksTitle}
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
            {t.howItWorksSub}
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "16px",
        }}>
          {t.howItWorks.map(item => (
            <div key={item.step} style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px",
              padding: "24px",
            }}>
              <div style={{
                width: "36px", height: "36px",
                borderRadius: "10px",
                background: "linear-gradient(135deg, #2ab5a0, #1a9e8c)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "16px", fontWeight: 800, color: "white",
                marginBottom: "14px",
              }}>
                {item.step}
              </div>
              <h3 style={{
                fontWeight: 700, fontSize: "15px",
                color: "white", margin: "0 0 8px",
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Destinos populares */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
            fontWeight: 700,
            color: "white",
            margin: 0,
          }}>
            {t.destinosTitle}
          </h2>
          <Link href="/itinerario/paris" style={{
            fontSize: "13px", fontWeight: 700,
            color: "#2ab5a0", textDecoration: "none",
          }}>
            {t.verTodos}
          </Link>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "14px",
        }}>
          {featured.map(dest => (
            <Link key={dest.slug} href={`/itinerario/${dest.slug}`} style={{ textDecoration: "none" }}>
              <div style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.11)",
                borderRadius: "16px",
                padding: "20px",
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "32px", flexShrink: 0 }}>{dest.emoji}</span>
                <div>
                  <h3 style={{
                    fontWeight: 700, fontSize: "15px",
                    color: "white", margin: "0 0 4px",
                  }}>
                    {dest.name}
                  </h3>
                  <p style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.5)",
                    margin: "0 0 6px",
                  }}>
                    {dest.country} · {dest.avgBudget}
                  </p>
                  <p style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.65)",
                    margin: 0,
                    lineHeight: 1.5,
                  }}>
                    {dest.tagline}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Qué incluye cada itinerario */}
      <div style={{ marginBottom: "56px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            color: "white",
            margin: "0 0 10px",
          }}>
            {t.whatYouGetTitle}
          </h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", margin: 0, maxWidth: "620px", marginLeft: "auto", marginRight: "auto" }}>
            {t.whatYouGetSub}
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
        }}>
          {t.whatYouGet.map(item => (
            <div key={item.title} style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "18px",
              padding: "24px",
            }}>
              <div style={{ fontSize: "26px", marginBottom: "12px" }}>{item.icon}</div>
              <h3 style={{
                fontWeight: 700, fontSize: "15px",
                color: "white", margin: "0 0 8px",
              }}>
                {item.title}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.65,
                margin: 0,
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Por qué usar Global Home Assist */}
      <div className="home-why-section" style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "24px",
        padding: "36px 32px",
      }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 16px",
        }}>
          {t.whyTitle}
        </h2>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.8,
          margin: "0 0 16px",
          maxWidth: "720px",
        }}>
          {t.whyP1}
        </p>
        <p style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.75)",
          lineHeight: 1.8,
          margin: "0 0 24px",
          maxWidth: "720px",
        }}>
          {t.whyP2}
        </p>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {t.features.map(feature => (
            <span key={feature} style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.8)",
              background: "rgba(42,181,160,0.1)",
              border: "1px solid rgba(42,181,160,0.2)",
              borderRadius: "8px",
              padding: "6px 14px",
            }}>
              ✓ {feature}
            </span>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginTop: "56px" }}>
        <h2 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.3rem, 3vw, 1.7rem)",
          fontWeight: 700,
          color: "white",
          margin: "0 0 24px",
          textAlign: "center",
        }}>
          {t.faqTitle}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {t.faqs.map(faq => (
            <div key={faq.question} style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "14px",
              padding: "18px 22px",
            }}>
              <h3 style={{
                fontWeight: 700, fontSize: "14px",
                color: "white", margin: "0 0 8px",
              }}>
                {faq.question}
              </h3>
              <p style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.7,
                margin: 0,
              }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(t.faqs)) }}
      />
    </section>
    </div>
  );
}
