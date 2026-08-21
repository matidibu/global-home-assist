import type { DestinationPage } from "./destinationPages";

// English-only overlay for now, per explicit user direction 2026-08-21: start
// with English, add fr/it/de/pt later on request. Each entry only needs the
// fields that are actually rendered to visitors (see /itinerario/[slug]/page.tsx
// and CollapsibleDays.tsx) -- metaTitle/metaDescription/keywords stay Spanish
// on purpose, since the site has a single URL per destination (no locale
// routing) and metadata is generated server-side where the visitor's language
// isn't known. `gyg`/`gygCity` (GetYourGuide search queries) are already
// written in English in the Spanish source and don't need translating.

export type DestLang = "en";

interface ActivityI18n {
  name: string;
  description: string;
  price?: string;
  tip?: string;
}

interface DayI18n {
  theme: string;
  activities: ActivityI18n[];
}

interface DestinationI18nEntry {
  city: string;
  country: string;
  heroTitle: string;
  heroSubtitle: string;
  bestMonths: string;
  budget: string;
  days: DayI18n[];
  travelTips: string[];
}

export const destinationPagesI18n: Partial<Record<string, Record<DestLang, DestinationI18nEntry>>> = {
  paris: {
    en: {
      city: "Paris",
      country: "France",
      heroTitle: "5 days in Paris: the itinerary you'll want to repeat",
      heroSubtitle: "The Louvre, Eiffel Tower, Montmartre, and the neighborhoods only locals know — with real hours and tips for every stop.",
      bestMonths: "April to June and September to October",
      budget: "€100-180/day",
      travelTips: [
        "Get the weekly Navigo pass if you arrive on a Monday — it covers metro, RER, and buses for €30/week",
        "Book the Louvre, Eiffel Tower, and Versailles at least 2 weeks ahead in high season",
        "National museums are free on the first Sunday of each month — they're also packed",
        "Download the RATP app for transport and an offline Google Maps map of Paris",
        "Supermarkets (Monoprix, Franprix) have excellent deli meats and cheeses for a budget picnic",
      ],
      days: [
        {
          theme: "The historic heart: the Louvre and the Champs-Élysées",
          activities: [
            { name: "The Louvre Museum", description: "The world's most-visited museum holds 380,000 works including the Mona Lisa and the Venus de Milo. Book your ticket online to skip the line, which can run up to 2 hours.", price: "€22", tip: "Enter through the glass pyramid. Arrive right at 9am and head straight for the Mona Lisa before the tour groups arrive." },
            { name: "Tuileries Garden", description: "A classic Parisian stroll between the Louvre and Place de la Concorde. Perfect for lunch on the garden terraces with views of the fountains and sculptures.", price: "Free", tip: "The garden's cafés are pricier than those in the surrounding neighborhoods, but the view is worth it." },
            { name: "the Champs-Élysées and the Arc de Triomphe", description: "Paris's most famous avenue, 1.9 km of luxury shops, cafés, and theaters. The Arc de Triomphe offers the best free panoramic view of Paris from its terrace.", price: "Terrace €13", tip: "Go up the Arc at sunset to watch car headlights form two golden rivers along the Champs-Élysées." },
            { name: "Dinner in Le Marais", description: "Paris's most vibrant neighborhood, with Jewish, Lebanese, and modern French restaurants. Rue des Rosiers is the neighborhood's culinary epicenter.", price: "€20-35 per person", tip: "L'As du Fallafel on rue des Rosiers serves the best falafel in Paris. Get there before 7pm to skip the line." },
          ],
        },
        {
          theme: "The Eiffel Tower and the neighborhood of dreams",
          activities: [
            { name: "Eiffel Tower — first slot", description: "At 330 meters tall, it's the most-visited monument in the world. The morning slot has shorter waits and the best light for photos.", price: "€29 (2nd floor) / €46 (summit)", tip: "Book your ticket at least 2 weeks in advance. The summit elevator tends to sell out first." },
            { name: "Trocadéro and panoramic views", description: "The Trocadéro esplanade offers the most iconic frontal view of the Eiffel Tower. The Palais de Chaillot and its architecture and naval museums are here too.", price: "Free", tip: "The classic Eiffel Tower photo is taken from the center of the esplanade. Best at 7am — after that it fills up with vendors." },
            { name: "Musée d'Orsay", description: "Housed in a former train station, it holds the world's most important Impressionist art collection: Monet, Renoir, Van Gogh, and Cézanne.", price: "€16", tip: "The transparent clock on the 5th floor offers a unique view of the Seine and Sacré-Cœur. The line is much shorter than at the Louvre." },
            { name: "Eiffel Tower light show", description: "Every hour on the hour from dusk until 1am, the Eiffel Tower sparkles with 20,000 twinkling lights for 5 minutes. The best free show in Paris.", price: "Free", tip: "Watch it from the Pont de Bir-Hakeim — the view with the bridge in the foreground is spectacular." },
          ],
        },
        {
          theme: "Montmartre and bohemian Paris",
          activities: [
            { name: "Sacré-Cœur Basilica", description: "The white stone basilica that towers over Montmartre and all of Paris from the top of the Butte. The view of Parisian rooftops from the steps is free and spectacular.", price: "Free (interior)", tip: "Walk up via rue Lepic to see the real, local Montmartre, instead of the tourist staircase." },
            { name: "Place du Tertre", description: "Montmartre's artists' square, where painters and portrait artists have worked outdoors since the 19th century. You can commission a portrait or just watch.", price: "Free (portraits €20-50)", tip: "Artists start arriving around 10am. The ones at the edges of the square tend to be more authentic than those in the center." },
            { name: "Lunch in Abbesses", description: "Montmartre's local heart, away from the tourist circuit. Rue Lepic has bakeries, delis, and neighborhood restaurants at reasonable prices.", price: "€12-18", tip: "Try a croissant au beurre at La Maison Rose on rue Lepic — the bakery that appears in 'Amélie'." },
            { name: "Canal Saint-Martin", description: "The Parisian canal where locals spend sunny afternoons. Terrace cafés, independent bookshops, and the most authentic hipster scene in Paris.", price: "Free", tip: "On Sundays the canal closes to traffic and Parisians take it over with picnics — about as local an experience as you can get." },
          ],
        },
        {
          theme: "Saint-Germain and the Left Bank",
          activities: [
            { name: "the Latin Quarter and the Sorbonne", description: "Europe's oldest university district, with century-old bookshops like Shakespeare and Company, the rue Mouffetard market, and the cafés once frequented by Sartre and Beauvoir.", price: "Free", tip: "Shakespeare and Company (across from Notre-Dame) hosts free author readings. Check their schedule before you go." },
            { name: "Notre-Dame Cathedral (exterior)", description: "Still under reconstruction after the 2019 fire, the cathedral partially reopened in 2024. The restored exterior and Gothic flying buttresses are once again impressive.", price: "Free", tip: "The full interior is reopening gradually. Check the official website before your trip to see which areas are accessible." },
            { name: "Luxembourg Gardens", description: "Parisians' favorite park, with ponds, statues, and the Luxembourg Palace. Perfect for resting between visits and watching local life go by.", price: "Free", tip: "Rent a toy sailboat to push around the big central pond — a Parisian tradition since 1900." },
            { name: "Centre Pompidou", description: "Europe's most-visited museum of modern and contemporary art, housed in a building of colorful pipes that's a work of art in itself.", price: "€15", tip: "The building's rooftop terrace (level 6) has a stunning 360° view of Paris — and it's included with admission." },
          ],
        },
        {
          theme: "Versailles: the day that's worth the trip",
          activities: [
            { name: "Palace of Versailles", description: "The largest palace in the world, with 700 rooms, built by Louis XIV. The Hall of Mirrors is the most impressive part of the visit.", price: "€21 (palace) / €27 (palace + gardens on fountain days)", tip: "Book your ticket online and catch the first train from Paris-Montparnasse at 8:30am. The line without a reservation runs over 2 hours." },
            { name: "Gardens of Versailles", description: "The world's most famous geometric gardens, designed by André Le Nôtre, spanning 800 hectares of fountains, parterres, and groves.", price: "Included with the palace", tip: "On Saturdays and Sundays from April to October, the Musical Fountains show runs — a one-of-a-kind spectacle. Price varies." },
            { name: "The Trianon — the court's private estates", description: "The Petit Trianon was Marie Antoinette's personal retreat. The Hameau de la Reine is the rustic hamlet she had built to escape court protocol.", price: "Included with the Palace + Estate ticket", tip: "Rent a bike or electric cart in the gardens — it's 2 km between the palace and the Trianon." },
            { name: "Last night in Paris", description: "Back in Paris, have dinner at a neighborhood bistro and, weather permitting, take a night walk along the Seine's banks, a UNESCO World Heritage site.", price: "€25-45", tip: "Ask your hotel for a bistro recommendation 3 blocks away — always better than the ones on the tourist circuit." },
          ],
        },
      ],
    },
  },
  roma: {
    en: {
      city: "Rome",
      country: "Italy",
      heroTitle: "5 days in Rome: the Colosseum, the Vatican, and la dolce vita in the real neighborhoods",
      heroSubtitle: "The itinerary that balances the must-see monuments with the neighborhoods where Romans actually live.",
      bestMonths: "March to May and September to November",
      budget: "€80-150/day",
      travelTips: [
        "Rome is a walkable city — the historic center fits within a 4 km radius",
        "The Colosseum+Forum+Palatine pass is valid for two consecutive days — make the most of it",
        "Always bring clothing that covers your shoulders and knees to enter churches (including the Vatican)",
        "Water from the public fountains (nasoni) is safe to drink and delicious — bring a reusable bottle",
        "July and August are the hottest, most crowded months — March-May is the best time to go",
      ],
      days: [
        {
          theme: "The Roman Empire: the Colosseum and the Forum",
          activities: [
            { name: "Roman Colosseum", description: "The largest amphitheater ever built, with capacity for 70,000 spectators. On the arena floor, gladiators fought before emperors and the Roman people.", price: "€18 (includes the Roman Forum and Palatine Hill)", tip: "Book your ticket online — the walk-in line runs over 2 hours in high season. The arena floor tour requires a separate booking." },
            { name: "Roman Forum and Palatine Hill", description: "The political and religious center of the Roman Empire for 12 centuries. The Palatine is the hill where, according to tradition, Romulus founded Rome in 753 BC.", price: "Included with the Colosseum", tip: "The Arch of Titus (81 AD) bears the earliest known relief depicting the menorah — considered the oldest historical record of the Jewish exile." },
            { name: "Circus Maximus", description: "The largest chariot-racing stadium of antiquity, with capacity for 250,000 spectators. Today it's a large urban park where Romans go jogging.", price: "Free", tip: "Walk up to the Aventine to see the Knights of Malta keyhole — a view perfectly aligned with St. Peter's dome." },
            { name: "Trajan's Markets", description: "History's first shopping mall, built in the 2nd century AD. Today it houses the Museo dei Fori Imperiali, with magnificent views over the Forum of Augustus.", price: "€15", tip: "Less visited than the Colosseum but just as impressive. The context it gives on everyday Roman life is remarkable." },
          ],
        },
        {
          theme: "The Vatican: a city within the city",
          activities: [
            { name: "Vatican Museums and the Sistine Chapel", description: "The papal collection built up over 500 years: Greek sculptures, Flemish tapestries, Renaissance maps, and the Sistine Chapel ceiling painted by Michelangelo.", price: "€20", tip: "Book the first slot of the day and specifically ask for fast-track access to the Chapel. Without a reservation, the wait runs 2-3 hours." },
            { name: "St. Peter's Basilica", description: "The largest church in the world covers 2.3 hectares. Michelangelo's Pietà, Bernini's baldachin, and the 132-meter dome are its high points.", price: "Free (dome €8)", tip: "The climb up the dome (the last 320 steps are narrow and spiral) offers the best view of Rome. Get there early." },
            { name: "Castel Sant'Angelo", description: "Emperor Hadrian's mausoleum, later converted into a papal fortress, with a secret passage to the Vatican. The terrace has an extraordinary view over the Tiber and Rome.", price: "€15", tip: "This is where the final act of Puccini's opera Tosca takes place — one of the most dramatic endings in theater history." },
            { name: "Prati — the Vatican's neighborhood", description: "The residential neighborhood next to the Vatican, with Rome's best artisanal gelaterias and restaurants without the tourist markup found around St. Peter's.", price: "€15-25", tip: "Gelateria dei Gracchi (Via dei Gracchi 272) is considered one of the best in Rome. Authentic gelato has muted colors — not bright ones." },
          ],
        },
        {
          theme: "Trastevere and the Rome that isn't for sale",
          activities: [
            { name: "Trastevere — Rome's most Roman neighborhood", description: "The maze of medieval alleys across the Tiber where lifelong Romans still live. The Basilica di Santa Maria in Trastevere (4th century) is the oldest in the city.", price: "Free", tip: "Trastevere is a neighborhood for aperitivo and dinner, not mornings. Arrive at 6pm to see the neighborhood come alive and mix in with the locals." },
            { name: "Campo de' Fiori", description: "The market square of the historic center, with fruit, spice, and flower stalls Monday through Saturday. The statue of Giordano Bruno marks where he was burned at the stake in 1600.", price: "Free", tip: "The market runs until 2pm. At night, the square turns into the epicenter of the city center's nightlife." },
            { name: "Piazza Navona", description: "Europe's most beautiful Baroque square, built over Domitian's stadium. Bernini's three fountains, including the Fontana dei Quattro Fiumi, are its heart.", price: "Free", tip: "The restaurants on the square are tourist-priced. Eat a block away and have coffee sitting in the square instead — the street performers make it worth it." },
            { name: "Pantheon", description: "The best-preserved building from antiquity in the world, built by Emperor Hadrian in 125 AD. Its dome, with the central oculus, remains an architectural mystery.", price: "€5", tip: "The Pantheon is oriented so that on the spring equinox (March 21) the sun shines exactly through the oculus and lights up the entrance. Coincidence or not." },
          ],
        },
        {
          theme: "the Trevi Fountain, the Spanish Steps, and Villa Borghese",
          activities: [
            { name: "Trevi Fountain at sunrise", description: "Rome's largest fountain, sculpted by Nicola Salvi in 1762. At night and at sunrise, without the daytime crowds, it's one of the most beautiful sights in Europe.", price: "Free", tip: "The fountain is cleaned twice a week in the early morning (usually Tuesdays and Fridays). If your timing lines up, you'll see it completely empty — a one-of-a-kind sight." },
            { name: "Spanish Steps", description: "The 135 travertine steps connecting Piazza di Spagna with Trinità dei Monti. In spring they're covered in pink azaleas for the flower festival.", price: "Free", tip: "Since 2019 sitting on the steps has been banned (€250 fine). Standing for a photo is still free." },
            { name: "Borghese Gallery", description: "The Borghese family's art collection in a 17th-century villa: Bernini's early sculptures, Caravaggio, Titian, and Raphael, in intimate rooms.", price: "€15", tip: "Tickets sell out weeks in advance — book as early as possible. Visits last exactly 2 hours (strictly enforced)." },
            { name: "Villa Borghese — Rome's green lung", description: "The largest park in central Rome, with artificial lakes, views from the Pincio, and museums. The Pincio terrace has the best panorama of Piazza del Popolo.", price: "Free", tip: "Rent a little rowboat on the lake (€3 for 20 minutes) — the most Roman way to spend an afternoon. Roman kids have been doing it for 200 years." },
          ],
        },
        {
          theme: "Aventine, Testaccio, and Rome's neighborhood side",
          activities: [
            { name: "The Aventine and the knights' keyhole", description: "Rome's quietest hill. The Knights of Malta keyhole perfectly frames St. Peter's dome 3 km away — one of the most magical views in Rome.", price: "Free", tip: "You'll have to wait in line for the keyhole (5 to 15 minutes). The orange garden next door has one of the best views of Rome from the Aventine." },
            { name: "Testaccio — the neighborhood of Roman food", description: "Rome's working-class neighborhood, home to the Mattatoio (a former slaughterhouse turned market and cultural space) and the city's most authentic, affordable Roman cooking.", price: "€12-20", tip: "Cacio e pepe and carbonara are Rome's defining dishes. In Testaccio they're served the original way — no cream, no peas." },
            { name: "Palatine Hill and the Farnese Gardens", description: "Revisit the Palatine in the afternoon to see the Farnese Gardens, Europe's first botanical gardens, with views over the Forum that are packed with people at midday.", price: "Included with the day-1 Colosseum ticket (valid for 2 days)", tip: "The afternoon light on the Palatine gives off the golden glow 19th-century Grand Tour photographers were chasing." },
            { name: "Aperitivo in Pigneto or Ostiense", description: "The neighborhoods where young Romans go for aperitivo (5-9pm): a Spritz with a plate of snacks included, bar terraces, and conversations spilling into the street.", price: "€6-10 (Spritz with snacks)", tip: "Roman aperitivo includes food — order a drink and they bring out a buffet of fried snacks and bruschetta. It's the mandatory pre-dinner dinner." },
          ],
        },
      ],
    },
  },

  barcelona: {
    en: {
      city: "Barcelona",
      country: "Spain",
      heroTitle: "5 days in Barcelona: Gaudí, Mediterranean beaches, and a city that never stops",
      heroSubtitle: "The itinerary that balances the Sagrada Família with the Gràcia neighborhood, the Barri Gòtic with Barceloneta.",
      bestMonths: "May and June, September and October",
      budget: "€80-140/day",
      travelTips: [
        "The T-Casual (10 metro/bus rides) is cheaper than paying per ride — valid across the whole metropolitan area",
        "Municipal museums are free on the first Sunday of the month — and on Sunday afternoons",
        "Pharmacies in Spain have an illuminated green cross symbol and stay open 24h on a rotating basis",
        "Book the Sagrada Família weeks in advance during high season (July-August)",
        "Spanish schedules run about 2 hours later than in northern Europe — having dinner at 10pm is completely normal",
      ],
      days: [
        {
          theme: "Gaudí — the Barcelona that leaves you speechless",
          activities: [
            { name: "Sagrada Família", description: "Antoni Gaudí's masterpiece has been under construction for 140 years. The central nave, the 18 bell towers, and the Nativity and Passion façades are unlike anything else in architecture.", price: "€26 (with towers €36)", tip: "Book your ticket for first thing in the morning. The Nativity façade (east) gets the morning light — the Passion façade (west) gets the sunset light." },
            { name: "Casa Batlló or Casa Milà (La Pedrera)", description: "Casa Batlló has the most photogenic dragon scales. Casa Milà has the surreal rooftop with stone warriors and the best views of the Eixample.", price: "€35-45", tip: "Casa Batlló runs a nighttime projection-mapping show on its façade (€45) — worth it more than the daytime visit if you're after an experience." },
            { name: "Park Güell", description: "Gaudí's urban park, with its mosaic terrace, forest of columns, and gingerbread-style houses. It offers a 360° view over Barcelona and the Mediterranean.", price: "€10 (monumental zone)", tip: "Access to the park is free — only the monumental zone (the terrace and the hall of columns) requires a ticket. Book online." },
            { name: "Gràcia neighborhood at sunset", description: "Barcelona's most bohemian, local neighborhood, with lively squares, restaurants without tourist pricing, and independent shops. Plaça del Sol is the meeting point.", price: "Free (walking around)", tip: "Gràcia's Festa Major in August turns every street into an art installation. It's the most spectacular neighborhood festival in Spain." },
          ],
        },
        {
          theme: "Barri Gòtic and Las Ramblas",
          activities: [
            { name: "Barri Gòtic — the medieval heart", description: "Barcelona's medieval old town hides the Pont del Bisbe, the Gothic Cathedral, the Roman Temple of Augustus (1st century BC), and the squares around Sant Felip Neri.", price: "Free", tip: "Plaça de Sant Felip Neri still bears shrapnel marks from the Civil War. It's the most melancholic, authentic corner of the Barri Gòtic." },
            { name: "La Boqueria", description: "Spain's most famous market, open since 1836, with hundreds of stalls selling exotic fruit, seafood, cured meats, and fresh tapas.", price: "Free (to enter) / variable (to eat)", tip: "The stalls at the front are priced for tourists. Head to the back of the market where restaurants buy their supplies — real prices and better produce." },
            { name: "Las Ramblas", description: "Barcelona's best-known pedestrian promenade, 1.2 km from Plaça de Catalunya down to the harbor. The Font de Canaletes, the flower stalls, and Miró's mosaic set into the pavement.", price: "Free", tip: "Las Ramblas has a lot of pickpockets — wear your backpack in front and keep nothing valuable in your pockets. Walk through to see it, not to linger." },
            { name: "El Born and the Mercat de Santa Caterina", description: "The trendiest neighborhood by the Barri Gòtic, with Domènech i Montaner's Palace of Music, design shops, and Barcelona's best tapas scene.", price: "Free (Palau de la Música €20)", tip: "The Palau de la Música is the only UNESCO World Heritage modernist building still actively in use. Buy a ticket to a concert — it's the best way to see it." },
          ],
        },
        {
          theme: "Barceloneta and the Mediterranean",
          activities: [
            { name: "Barceloneta — Barcelona's urban beach", description: "Barcelona's most popular beach, 1.1 km of sand facing the Mediterranean, with the Port Olímpic skyscrapers in the background. Reachable by metro from anywhere in the city.", price: "Free", tip: "At 10am the water is calm. From 2pm on, the sea breeze usually picks up and raises waves good for bodysurfing." },
            { name: "Barceloneta Fish Market", description: "The Barceloneta neighborhood still preserves its 18th-century fishermen's quarters. The restaurants on Carrer del Mar and Marbella serve the most authentic paella and arròs negre.", price: "€20-35", tip: "Book a table ahead of time in high season. Authentic Barcelona paella is made with seafood, not chicken — arròs negre with alioli is the signature dish." },
            { name: "Port Olímpic and the Vila Olímpica", description: "The neighborhood built for the 1992 Olympics that transformed Barcelona's seafront. Frank Gehry's golden fish and the communication towers are urban icons.", price: "Free", tip: "The seafront promenade from Barceloneta to the Forum (7 km) is Barcelona's best bike ride. There are Bicing stations all along the route." },
            { name: "Montjuïc Castle at sunset", description: "The 17th-century fortress atop Montjuïc hill offers the best panoramic view of Barcelona, the port, and the sea. The cable car goes up from Barceloneta.", price: "Castle €9 / Cable car €12", tip: "Montjuïc's cactus garden is free, and the view of the port from there is just as good as from the castle." },
          ],
        },
        {
          theme: "Montserrat — Catalonia's sacred mountain",
          activities: [
            { name: "Train to Montserrat", description: "This uniquely shaped rock mountain, 60 km from Barcelona, is home to Spain's most-visited Benedictine monastery and the Romanesque image of the Virgin of Montserrat.", price: "€36 (train + rack railway + funicular)", tip: "The first rack railway departs at 9:20am. The Escolania de Montserrat (Europe's oldest children's choir, dating to the 13th century) sings at 1pm — don't miss it." },
            { name: "Sant Joan — the hike with the views", description: "The trail to the Sant Joan hermitage (a 45-minute climb) ends with the best panorama of the mountain and, on clear days, the Mediterranean 50 km away.", price: "Free (included with the funicular)", tip: "The Sant Joan funicular goes up to the trailhead. Walking back down via route 5 takes 2 hours." },
            { name: "Montserrat Basilica and the Moreneta", description: "The Virgin of Montserrat, a 12th-century Romanesque carving, presides over the basilica. Lines to touch her form from the morning — arrive before 11am to skip the wait.", price: "Free (basilica)", tip: "The market in the monastery square sells the best cheeses, cured meats, and the famous Montserrat liqueur (El Montserrat), at convent prices." },
            { name: "Return, and afternoon in Gràcia or the Eixample", description: "Back in Barcelona, make the most of the last light with a walk through the Eixample (Cerdà's octagonal city blocks) or a vermouth in Gràcia.", price: "Vermouth €3-5", tip: "Catalan vermouth is drunk before Sunday lunch or at sunset, with olives and patatas bravas. It's a ritual, not just a drink." },
          ],
        },
        {
          theme: "MNAC, Poble Sec, and a Mediterranean farewell",
          activities: [
            { name: "MNAC — National Art Museum of Catalonia", description: "The Neo-Byzantine palace built for the 1929 World's Fair holds the world's most important collection of Pyrenean Romanesque art, along with Catalan modernism.", price: "€12", tip: "The city views from the MNAC terrace are free (no need to pay admission). Reachable via the steps on Avinguda de la Reina Maria Cristina." },
            { name: "Poble Sec — the neighborhood that eats well", description: "At the foot of Montjuïc, Poble Sec has the highest concentration of creative restaurants per square meter in Barcelona, at neighborhood prices.", price: "€15-25", tip: "Carrer de Blai is Barcelona's pintxos street — small tapas on bread for €1.50 each. Perfect for lunchtime." },
            { name: "Fundació Joan Miró", description: "The museum dedicated to the 20th century's most playful artist, in a building by Josep Lluís Sert on Montjuïc. The sculptures in the outdoor garden are visible from the terraces.", price: "€14", tip: "Miró's mural on Las Ramblas (set into the ground at the intersection with Carrer del Carme) is free and worth the photo." },
            { name: "Bunkers del Carmel — Barcelona's ultimate view", description: "The ruins of the Civil War bunkers on Turó de la Rovira offer the most spectacular 360° view of Barcelona, with every landmark recognizable.", price: "Free", tip: "Locals come at sunset with beers and a picnic. It's the most local thing to do in the city — no fee, no guides, no organized tour groups." },
          ],
        },
      ],
    },
  },

  tokio: {
    en: {
      city: "Tokyo",
      country: "Japan",
      heroTitle: "5 days in Tokyo: the city that redefined what a city can be",
      heroSubtitle: "Shinjuku, Shibuya, Asakusa, and the corners where ancient Japan lives alongside the near future.",
      bestMonths: "March-April (cherry blossoms) and October-November",
      budget: "¥15,000-25,000/day (USD 100-165)",
      travelTips: [
        "The IC Card (Suica or Pasmo) works on every subway and train, and even for purchases at convenience stores",
        "7-Eleven, Lawson, and FamilyMart are much more than convenience stores — they have excellent hot food 24/7",
        "Bows are a sign of respect — return them at the same depth you receive them",
        "Cash is still king in Japan — always carry ¥10,000-20,000 in bills",
        "Google Maps works perfectly in Tokyo and will tell you the exact subway platform to use",
      ],
      days: [
        {
          theme: "Shinjuku: the megalopolis in its purest form",
          activities: [
            { name: "Meiji Shrine — a sanctuary in the forest", description: "Right in the heart of Tokyo, a 70-hectare forest surrounds the Shinto shrine dedicated to Emperor Meiji. The shift from Harajuku's bustle to the forest's silence is immediate.", price: "Free", tip: "Arrive before 9am to see the priests' morning opening ritual (kagura). The 700m gravel path to the shrine is an experience in itself." },
            { name: "Harajuku and Takeshita Street", description: "The street of alternative Japanese fashion, with cosplay shops, lolita fashion, and the world's most creative crepes. Japanese subculture at its most visible.", price: "Free (walking around)", tip: "On Sundays, rockabilly dancers dressed in 1950s style gather on Jingu Bridge — the most unexpected side of Japan." },
            { name: "Shinjuku — the neighborhood that never sleeps", description: "The area with the highest number of trains per day in the world. The Tokyo Metropolitan Government Building (free observation deck), Kabukicho, Golden Gai, and Shinjuku Gyoen Park.", price: "Observation deck free / Gyoen ¥500", tip: "The Tokyo Metropolitan Government Building's observation deck (45th floor, free) has one of the best views of the city, at no cost." },
            { name: "Golden Gai — the miniature bars", description: "200 tiny bars with 5 to 15 seats each, packed into a maze of alleys in Shinjuku. Each with its own theme, music, and an owner who's also the bartender.", price: "¥600-1,500 per drink", tip: "Some bars charge a seating fee of ¥500-1,000 — ask before you go in. The experience is worth more than the drink." },
          ],
        },
        {
          theme: "Shibuya Crossing and contemporary Tokyo",
          activities: [
            { name: "Shibuya Crossing at sunrise", description: "The busiest pedestrian crossing in the world, with up to 3,000 people crossing on each light cycle. In the early morning or at sunrise, before the rush, it's a completely different crossing.", price: "Free", tip: "The best aerial view of the crossing is from the Starbucks on the second floor of 2-1 Dogenzaka, or from the Sky+1 bar. The crossing from above is Tokyo's most iconic photo." },
            { name: "Daikanyama and Nakameguro", description: "The two coolest neighborhoods in Tokyo for local creatives: fashion boutiques, independent cafés, and the Meguro canal lined with cherry trees that bloom in spring.", price: "Free (walking around)", tip: "Tsutaya Books in Daikanyama is the world's most beautiful bookstore — 3 wooden buildings with a built-in café, open 24 hours." },
            { name: "Omotesando — the avenue of architecture", description: "Tokyo's boulevard where every building carries an architect's signature: Zaha Hadid (Chanel), Sou Fujimoto, Kengo Kuma, and Tadao Ando's Omotesando Hills.", price: "Free", tip: "The Nezu Museum (¥1,300) at the end of Omotesando has the most peaceful bamboo garden imaginable, just 3 minutes from some of the busiest Starbucks in the world." },
            { name: "Ramen in Shibuya", description: "Tokyo has the best bowls of ramen in the world. Try Ichiran (individual booths — the one restaurant where eating alone has its own protocol) or Fuunji (legendary tsukemen).", price: "¥900-1,500", tip: "The ticket machines at ramen shop entrances require you to pick what you want before sitting down. The menu has photos — just point at the number if you can't read kanji." },
          ],
        },
        {
          theme: "Asakusa and historic Tokyo",
          activities: [
            { name: "Senso-ji at sunrise", description: "The most-visited Buddhist temple in the world, founded in 628 AD. The Kaminarimon (Thunder Gate) and the Nakamise-dori street of traditional shops lead to the main hall.", price: "Free", tip: "At 8am the temple has few visitors, and the monks perform the morning rituals. Fortune slips (omikuji) are free — fold the paper and tie it up if it's bad luck." },
            { name: "Skytree Tokyo", description: "The tallest TV tower in the world (634m), with two observation decks. A 360° view of Tokyo, Mount Fuji on clear days, and Asakusa at its feet.", price: "¥2,100 (350m deck) / ¥3,100 (with summit)", tip: "The best time is at sunrise (opens at 8am) or sunset. On Friday nights it has special blue lighting." },
            { name: "Akihabara — the neighborhood of the future", description: "The district of electronics, video games, manga, and anime. Skyscrapers covered in LED screens, 7-story shops full of collectible figures, and maid cafés.", price: "Free (walking around)", tip: "A maid café is a uniquely Japanese cultural experience — girls dressed as maids serve tea while playing games with you. ¥1,000-2,000 per person." },
            { name: "Ueno — museums and cherry blossom park", description: "Ueno Park is Tokyo's most famous spot for hanami (picnicking under the cherry blossoms). The Tokyo National Museum and the zoo are both here.", price: "Park free / Museum ¥1,000", tip: "During cherry blossom season (late March-April) Ueno is Tokyo's most crowded spot. Nighttime hanami (yozakura), with the illuminated blossoms, is extraordinary." },
          ],
        },
        {
          theme: "Tsukiji, Ginza, and Tokyo Bay",
          activities: [
            { name: "Tsukiji Outer Market", description: "The world's most famous fish market, in its outer-market form (the inner market moved to Toyosu). Have sushi or tuna donburi for breakfast at 7am alongside the fishmongers.", price: "¥1,500-3,000 (breakfast)", tip: "Dai Sushi and Sushi Dai are the most famous — expect a 45-90 minute wait for the 8-seat counter. Sushi at 7am, fresh off the boat, is on another level." },
            { name: "Ginza — Tokyo's Champs-Élysées", description: "Asia's most exclusive luxury district: Chanel, Louis Vuitton, the Apple Store, and the Japanese department stores Mitsukoshi and Isetan with their flawless bento boxes.", price: "Free (walking around)", tip: "The contemporary art galleries on the upper floors of Ginza's buildings are free and showcase the best of contemporary Japanese art." },
            { name: "teamLab Borderless or teamLab Planets", description: "The world's most innovative immersive digital art museum, where light and sound installations react to visitors' movements.", price: "¥3,200", tip: "Book your ticket online months in advance — it sells out constantly. teamLab Planets in Toyosu has the water installations and the digital flower garden." },
            { name: "Odaiba — the artificial city in the bay", description: "The artificial island in Tokyo Bay, home to Fuji TV, a miniature Statue of Liberty, and the best nighttime views of the Rainbow Bridge lit up.", price: "Free (walking around)", tip: "The driverless Yurikamome train crossing the Rainbow Bridge at dusk is one of the most spectacular public transit rides in the world." },
          ],
        },
        {
          theme: "Kamakura or Nikko — Japan beyond Tokyo",
          activities: [
            { name: "Train to Kamakura (1h from Tokyo)", description: "The former imperial capital of medieval Japan, with a 13-meter Great Buddha in the open air, 65 temples, and the sea visible from the hills. A perfect small city.", price: "Train ¥940 (round trip)", tip: "The JR Pass doesn't cover Kamakura's Enoden line — get a Suica card for the trip." },
            { name: "Great Buddha of Kamakura (Kotoku-in)", description: "The 1252 bronze statue of Amida Buddha, standing 13.35 meters tall, has witnessed all of medieval Japan. You can go inside the statue's hollow interior.", price: "¥300", tip: "Go inside the Buddha (an extra ¥20) — it's one of the few giant statues in Japan you can enter." },
            { name: "Kamakura Beach", description: "The beaches of Kamakura and Enoshima face the Pacific, with Mount Fuji visible in the background on clear days. Surprising to have a surf beach just 1 hour from Tokyo.", price: "Free", tip: "The view of Mount Fuji from Shichirigahama Beach (Enoden line), with surf waves in the foreground, is an iconic image of Japan." },
            { name: "Enoshima — the sacred island", description: "The island connected by a bridge, with the Benzaiten shrine, coastal caves, and the best panoramic view of Fuji from the Sea Candle Tower.", price: "Tower ¥500", tip: "The takoyaki (octopus balls) from the stalls on the Enoshima bridge are the perfect afternoon snack before heading back to Tokyo." },
          ],
        },
      ],
    },
  },

  "nueva-york": {
    en: {
      city: "New York",
      country: "United States",
      heroTitle: "5 days in New York: the itinerary for a perfect first time",
      heroSubtitle: "Brooklyn Bridge, Central Park, MoMA, and Harlem — without wasting time on what's not worth it.",
      bestMonths: "September to November and April to June",
      budget: "USD 150-280/day",
      travelTips: [
        "Load a MetroCard or use OMNY (contactless payment) — USD 2.90 per ride regardless of distance",
        "The subway runs 24/7 but it's slow at night, and there are frequent reroutes on weekends",
        "Always tip 18-22% at restaurants — it's socially mandatory and part of workers' wages",
        "CityPASS saves 40% if you visit 4+ paid attractions within 9 consecutive days",
        "Download the NYC Ferry app — the East River ferry is cheap public transport with spectacular views",
      ],
      days: [
        {
          theme: "Central Manhattan: Times Square, Central Park, and the Met",
          activities: [
            { name: "Central Park at sunrise", description: "840 acres of park in the heart of Manhattan. Bethesda Fountain, Bow Bridge, and the skyline views from the Great Lawn are the most photogenic spots.", price: "Free", tip: "Rent a bike in the park to cover more ground. On Sundays the outer loop closes to cars." },
            { name: "The Metropolitan Museum of Art (The Met)", description: "The largest museum in North America, with more than 2 million objects. The Egyptian, Greek, and medieval armor collections are must-sees even if you only have 2 hours.", price: "USD 30 (suggested — pay-what-you-wish for NY residents)", tip: "The Met's rooftop is open May-October with spectacular views of Central Park. Separate from the museum but included with admission." },
            { name: "the Upper West Side and Columbus Circle", description: "Manhattan's most quintessentially New York residential neighborhood, with brownstones, independent cafés, and the Time Warner Center's gourmet market.", price: "USD 15-25 (lunch)", tip: "Gray's Papaya on Broadway serves NYC's most iconic hot dogs any time of day — the way New Yorkers have been having breakfast since 1973." },
            { name: "Times Square", description: "The world's most famous intersection, with 26,000 m² of LED screens. Overwhelming by day, magical at dusk when the lights outshine the sun.", price: "Free", tip: "If you can help it, don't eat or buy anything in Times Square — everything costs double. Use it just for photos and move on." },
          ],
        },
        {
          theme: "Brooklyn: the bridge, DUMBO, and Williamsburg",
          activities: [
            { name: "Brooklyn Bridge at sunrise", description: "Walking across the bridge from Manhattan to Brooklyn takes 30 minutes. The skyline views at sunrise, with the East River below, make for the best photos in NYC.", price: "Free", tip: "Start from the Chambers St station in Manhattan. The bridge fills up with fast cyclists — stay on the pedestrian lane." },
            { name: "DUMBO — Down Under the Manhattan Bridge Overpass", description: "The neighborhood with NYC's most famous photo: the intersection of Washington St, with the Empire State Building in the background and the Manhattan Bridge framing the scene.", price: "Free", tip: "The classic photo is on Washington St looking toward the Manhattan Bridge. At 9am there's hardly anyone — by noon there are dozens waiting their turn." },
            { name: "Brooklyn Heights Promenade", description: "The elevated walkway above the FDR Drive with the best view of the Lower Manhattan skyline from Brooklyn. Locals come here on weekends with coffee.", price: "Free", tip: "Keep walking to Brooklyn Bridge Park, where you can sit on the grass facing the skyline." },
            { name: "Williamsburg: brunch and culture", description: "Brooklyn's hipster neighborhood, with NYC's best brunch spots, street murals, vintage shops, and an East River waterfront with views of Midtown Manhattan.", price: "USD 20-35", tip: "Smorgasburg in Williamsburg (Sundays, April-Oct) is NYC's best street food market — 100 local vendors." },
          ],
        },
        {
          theme: "Lower Manhattan: history, Ground Zero, and the Statue",
          activities: [
            { name: "9/11 Memorial & Museum", description: "The two reflecting pools where the Twin Towers once stood, with the names of the 2,977 victims engraved in bronze. An essential place of remembrance.", price: "Memorial free / Museum USD 33", tip: "The outdoor memorial is always accessible and needs no ticket. The museum is emotionally intense — leave time to process it." },
            { name: "Staten Island Ferry", description: "The Staten Island Ferry departs every 30 minutes from Whitehall Terminal. The 25-minute crossing offers direct views of the Statue of Liberty — completely free.", price: "Free", tip: "The best view of Lady Liberty is from the right side of the ferry heading toward Staten Island. You don't need to get off — just ride it back on the next one." },
            { name: "Wall Street and the Charging Bull", description: "The world's financial center, with the New York Stock Exchange, the famous bull sculpture, and Fearless Girl. The contrast between neoclassical architecture and skyscrapers is unlike anywhere else.", price: "Free", tip: "The NYSE isn't open to the public. The Federal Reserve Bank of NY Museum (free) shows off the world's largest gold vault." },
            { name: "One World Observatory", description: "The observatory of the tallest building in the Western Hemisphere, at 381 meters. The elevator ride up takes 47 seconds, with an immersive screen showing NYC's history.", price: "USD 46", tip: "Worth more than the Empire State (less crowded, equally impressive views). Buy your ticket online." },
          ],
        },
        {
          theme: "Art and design: MoMA, the High Line, and Chelsea",
          activities: [
            { name: "MoMA — Museum of Modern Art", description: "The world's most important collection of 20th-century art: Van Gogh's The Starry Night, Guernica (reproduction), Dalí, and Warhol. The building itself is a work of design.", price: "USD 30", tip: "Book your ticket online. Fridays from 5 to 9pm admission is pay-what-you-wish — very crowded but cheap." },
            { name: "High Line", description: "The elevated train line turned into an urban park above Chelsea. 2.3 km of linear park with public art, Hudson River views, and the city's best food trucks.", price: "Free", tip: "Start at Gansevoort St (the southern end) and finish at Hudson Yards. Viewing the Vessel from the ground is free." },
            { name: "Chelsea Market", description: "The gourmet market housed in the former Oreo factory in the heart of Chelsea. Dozens of stalls with the best food options at reasonable prices.", price: "USD 15-30", tip: "The lobster rolls at The Lobster Place are legendary. Get there before 3pm to find a table." },
            { name: "Empire State Building at night", description: "NYC's most iconic skyscraper, lit up in different colors for events and holidays. The 86th-floor deck offers 360° views of the illuminated city.", price: "USD 44", tip: "The second observatory (86th floor, open-air) is worth it more than the 102nd floor. Arrive 1 hour before closing to skip the wait." },
          ],
        },
        {
          theme: "Harlem: the culture that made New York",
          activities: [
            { name: "Harlem Gospel Sunday", description: "On Sundays, Harlem's churches hold gospel services with top-tier live choirs. Abyssinian Baptist Church is the most famous — moving even if you're not religious.", price: "Voluntary donation", tip: "Go on Sunday morning. Dress formally — it's a religious service, not a tourist show. Be respectful." },
            { name: "African American cuisine in Harlem", description: "Sylvia's Restaurant has been Harlem's culinary institution since 1962: fried chicken, mac and cheese, and sweet potato pie that are part of New York's cultural heritage.", price: "USD 20-35", tip: "Marcus Samuelsson's Red Rooster is the modern take on Harlem soul food — reservations essential." },
            { name: "Apollo Theater", description: "The theater where James Brown, Ella Fitzgerald, Billie Holiday, and Michael Jackson got their start. Amateur Night still runs on Wednesdays — the most demanding, honest audience in the world.", price: "Facade free / guided tours USD 18", tip: "If your visit lines up with Amateur Night (Wednesday), buy your ticket ahead of time. The most authentic night out in NYC." },
            { name: "The Cloisters — medieval art above the Hudson", description: "The Met's medieval branch, housed in an authentic European cloister rebuilt above the Hudson with views of New Jersey. The unicorn tapestries are out of this world.", price: "USD 30 (included with the Met ticket from day 1)", tip: "Arrive at the end of the day when the sunset light streams through the medieval stained glass. The least-known of NYC's great museums." },
          ],
        },
      ],
    },
  },

};

/** Returns `dest` with translated fields swapped in for `language`, falling back
 * to the Spanish base wherever a translation doesn't exist yet (whole
 * destination, a given day, or a given activity). */
export function localizeDestinationPage(dest: DestinationPage, language: string): DestinationPage {
  const entry = destinationPagesI18n[dest.slug]?.[language as DestLang];
  if (!entry) return dest;
  return {
    ...dest,
    city: entry.city,
    country: entry.country,
    heroTitle: entry.heroTitle,
    heroSubtitle: entry.heroSubtitle,
    bestMonths: entry.bestMonths,
    budget: entry.budget,
    travelTips: entry.travelTips,
    days: dest.days.map((day, di) => {
      const dayI18n = entry.days[di];
      if (!dayI18n) return day;
      return {
        ...day,
        theme: dayI18n.theme,
        activities: day.activities.map((act, ai) => {
          const actI18n = dayI18n.activities[ai];
          if (!actI18n) return act;
          return { ...act, name: actI18n.name, description: actI18n.description, price: actI18n.price ?? act.price, tip: actI18n.tip ?? act.tip };
        }),
      };
    }),
  };
}
