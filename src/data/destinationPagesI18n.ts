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
  cusco: {
    en: {
      city: "Cusco",
      country: "Peru",
      heroTitle: "3 days in Cusco: the navel of the Inca world",
      heroSubtitle: "Sacsayhuamán, the Sacred Valley, Machu Picchu, and the best Andean cuisine — Cusco is the gateway to the Inca Empire and one of the most thrilling destinations in the world.",
      bestMonths: "May to September (dry season)",
      budget: "$50-90 USD/day",
      travelTips: [
        "Cusco's altitude (3,400m) requires acclimatization — arrive 2 days before Machu Picchu and take it easy the first day",
        "Coca tea is the Andean remedy for soroche (altitude sickness) — hotels offer it for free and it's legal in Peru",
        "Book Machu Picchu and the train months ahead in high season — spots sell out quickly",
        "Cusco's general tourist ticket (S/130) covers Sacsayhuamán and several archaeological sites — buy it on your first day",
        "Cusco's weather is dry and sunny in the dry season (May-September) but cold at night (5-10°C) — bring a jacket",
      ],
      days: [
        {
          theme: "Acclimatizing, the square, and the Inca temples",
          activities: [
            { name: "Plaza de Armas, Cusco — arrival and acclimatizing", description: "Cusco's central square, built over the Inca Huacaypata (the square of tears), surrounded by the 16th-century Cathedral and the Church of the Compañía de Jesús. The Inca stonework visible beneath the colonial buildings is fascinating.", price: "Free", tip: "Your first day in Cusco (3,400m) should be low-key — acclimatize by drinking lots of water and coca tea (available at every café and hotel). Avoid alcohol and exercise on day one." },
            { name: "Qorikancha — the Temple of the Sun", description: "The Inca Empire's most sacred temple, dedicated to the sun god Inti, its perfectly cut stone walls overlaid by the Convent of Santo Domingo. The Inca walls are more precisely built than the colonial construction on top of them.", price: "S/15", tip: "Qorikancha's Inca stones fit together without mortar, with tolerances under 0.5mm — modern engineers still don't know exactly how it was done. The gold niche that once held the image of the Sun was visible from all over Cusco." },
            { name: "Cuy and chicha lunch in San Blas", description: "Cusco's artisan neighborhood, with the smallest church in the Americas and cuy (roast guinea pig) as the most representative dish of Andean cuisine. Chicha de jora (purple corn beer) is the oldest drink in the Andes.", price: "S/25-60", tip: "Cuy is served whole, roasted, with Andean potatoes and salad. For the less adventurous, lomo saltado with native potatoes and grilled alpaca are delicious and approachable." },
            { name: "Sacsayhuamán — the Inca fortress", description: "The ceremonial Inca fortress overlooking Cusco, with limestone blocks weighing up to 125 tons, fitted together in a zigzag pattern without mortar. The view of Cusco from the walls, and the surrounding Andean landscape, is stunning.", price: "S/130 (general tourist ticket)", tip: "The general tourist ticket (S/130) covers Sacsayhuamán, Qenqo, Puca Pucara, and Tambomachay — four archaeological sites around Cusco. Worth it if you visit all of them the same day." },
          ],
        },
        {
          theme: "The Sacred Valley of the Incas",
          activities: [
            { name: "Pisac Market", description: "The Sacred Valley's most famous market, with textile crafts from Quechua communities, ceramics, silver jewelry, and Andean products. The town of Pisac has the Valley's largest Inca ruins after Machu Picchu.", price: "Free", tip: "The crafts market caters to tourists (with haggling), but the Sunday local market (7am-1pm) is for locals — selling native potatoes, giant corn, and Andean medicinal herbs." },
            { name: "Pisac Ruins", description: "The Inca archaeological complex above the town of Pisac, with spiraling agricultural terraces covering the whole mountain, the Intihuatana (sundial), and tombs carved into the living rock.", price: "Included with the tourist ticket", tip: "The path to the ruins can be walked (45-minute climb) or reached by taxi from the town (S/10). The walk up passes active terraces where you'll see Quechua families at work." },
            { name: "Lunch in Urubamba — the heart of the Valley", description: "The town of Urubamba, at the center of the Sacred Valley, has the Valley's best dining. Chicha morada, Andean chicken soup, chuño phuti, and Peru's best heart anticuchos.", price: "S/20-40", tip: "Kuychi Rumi restaurant in Urubamba has the best view of the Valley and serves traditional Andean cuisine. The midday buffet (S/45) includes more than 12 different dishes." },
            { name: "Ollantaytambo — the living Inca town", description: "The only town in Latin America where people still live in original 15th-century Inca houses. The Ollantaytambo temple-fortress and its stepped terraces facing the river make up one of the best-preserved Inca sites.", price: "S/70 (archaeological site admission)", tip: "Ollantaytambo is the train station for Machu Picchu (Aguas Calientes). If you're heading to Machu Picchu the next day, stay here for the night — the Inca town's nighttime atmosphere is magical." },
          ],
        },
        {
          theme: "Machu Picchu — the wonder of the world",
          activities: [
            { name: "Train to Aguas Calientes (Machu Picchu Pueblo)", description: "The train ride from Ollantaytambo (or Cusco) to Aguas Calientes crosses the Sacred Valley and enters the high Amazon jungle. The landscape shifts dramatically from arid Andes to tropical jungle.", price: "S/120-200 (round trip)", tip: "Book the Inca Rail or Peru Rail train months ahead in high season (June-August). Seats on the right side (heading Ollantaytambo → Aguas Calientes) have better river views." },
            { name: "Machu Picchu — the citadel", description: "The 15th-century Inca citadel among the clouds, built 2,430 meters above sea level between the peaks of Huayna Picchu and Cerro Machu Picchu. One of the 7 Wonders of the Modern World.", price: "S/200 (basic admission)", tip: "Booking online months ahead is ESSENTIAL — daily spots are limited. Circuit 1 (the classic) includes the Sun Gate and most of the main highlights." },
            { name: "Climbing Huayna Picchu or Machu Picchu Mountain", description: "Huayna Picchu (the peak behind the citadel) climbs an additional 360 meters via Inca steps carved into the rock. Machu Picchu Mountain (easier) offers the famous aerial view of the citadel.", price: "S/80 (extra)", tip: "Huayna Picchu has only 400 daily spots and sells out months ahead — book it at the same time as your entry ticket. The climb is steep, with uneven steps." },
            { name: "Return to Cusco", description: "The train back from Aguas Calientes to Ollantaytambo or Cusco closes the loop around the Sacred Valley. The afternoon train has the best views of the high jungle lit by the evening sun.", price: "Included with the round-trip train ticket", tip: "If your budget is tight, the bus from Aguas Calientes to Ollantaytambo (S/30, 4h) is an alternative to the train. The bus follows the river road, with views of the glaciers." },
          ],
        },
      ],
    },
  },

  medellin: {
    en: {
      city: "Medellín",
      country: "Colombia",
      heroTitle: "3 days in Medellín: the city of eternal spring",
      heroSubtitle: "El Poblado, the Metrocable, Envigado's flowers, and Latin America's most incredible transformation story — Medellín today is Colombia's most innovative city.",
      bestMonths: "December to March and July to August",
      budget: "$40-70 USD/day",
      travelTips: [
        "Medellín's metro (MET), with its cable car system, is Colombia's best public transport — buy the Cívica card to use it",
        "Medellín stays around 25°C year-round (the city of eternal spring) — light clothing always, maybe a cardigan for the evenings",
        "Medellín's Colombian coffee is some of the best in the world — always ask for single-origin, fresh-brewed coffee, never instant",
        "App-based taxis (InDriver, Uber) are safer than street taxis — always use them at night",
        "Colombia is a biodiversity powerhouse — the Botanical Garden, Parque Arví, and the El Romeral Reserve give access to stunning tropical nature",
      ],
      days: [
        {
          theme: "The historic center and Plaza Botero",
          activities: [
            { name: "Plaza Botero and the Museo de Antioquia", description: "The square with 23 original sculptures by Fernando Botero, the world's most famous Colombian artist — all donated by him to his hometown. The adjacent Museo de Antioquia holds the world's largest collection of Botero's work.", price: "Free (Square) / COP 20,000 (Museum)", tip: "The sculptures are meant to be touched and photographed — Botero designed them for people to interact with. 'Hombre a Caballo' (Man on Horseback) is the most iconic for photos." },
            { name: "Parque de las Luces and downtown Medellín", description: "The park of 300 light columns in the heart of the historic center, which creates a unique visual show at night. The Biblioteca España, on the hill above the Santo Domingo neighborhood, is visible from here.", price: "Free", tip: "Downtown Medellín is far safer than it was 20 years ago — walk around normally in the tourist areas during the day. The street vendors selling tropical fruit have the best mangoes and granadillas." },
            { name: "Bandeja paisa lunch", description: "Bandeja paisa is Antioquia's most representative dish: rice, beans, pork rind, chorizo, fried egg, avocado, sweet plantain, and hogao sauce, all on one tray. Impossible to finish alone.", price: "COP 18,000-30,000", tip: "El Rancherito restaurant downtown has the most authentic bandeja paisa. The mazamorra (corn and milk dessert) that follows is a must." },
            { name: "El Poblado neighborhood — parks and cafés", description: "Medellín's most modern, safe neighborhood, with Parque El Poblado, Calle del Lleras (the heart of the nightlife), and the city's highest concentration of cafés, restaurants, and boutiques.", price: "Free", tip: "Colombian coffee in El Poblado costs COP 2,000-5,000 and is top quality — Medellín sits at 1,400m altitude, and the coffee farms are just 30 minutes away by car." },
          ],
        },
        {
          theme: "The Metrocable and the hillside neighborhoods",
          activities: [
            { name: "Metrocable Line K — Santo Domingo", description: "The aerial cable car system connecting the metro to the neighborhoods on the hillsides of the Aburrá Valley. Line K climbs to the Santo Domingo neighborhood and offers the best view of Medellín and the valley from the cabins.", price: "COP 3,200 (with the metro's Cívica card)", tip: "Buy the Cívica card at the metro to use the cable car. The best angle for valley photos is at Andalucía station (second-to-last before the top)." },
            { name: "Parque Arví — the forest above Medellín", description: "The 1,763-hectare ecological park above Medellín's mountains, reachable via Metrocable Line L from Santo Domingo. Trails, butterflies, an indigenous crafts market, and the most beautiful view of the Aburrá Valley.", price: "COP 5,000 (Arví cable car)", tip: "The indigenous crafts market inside Parque Arví on weekends has products from Antioquia's native communities — crafts, honey, and medicinal plants." },
            { name: "Tour of the Past in the La Candelaria neighborhood", description: "A tour through the neighborhoods that document Medellín's transformation: from the Barrio Pablo Escobar to the housing developments that replaced the favelas. Local guides give the most honest perspective.", price: "COP 30,000-60,000 (guided tour)", tip: "Only book certified local guides — those who lived through the transformation give a human context international tours can't. Free walking tours depart from Parque de Bolívar." },
            { name: "Dinner in Laureles — the most authentic neighborhood", description: "Medellín's professional middle-class residential neighborhood, with the best concentration of local restaurants, wine bars, and the city's most genuine nightlife.", price: "COP 25,000-60,000", tip: "Avenida Laureles has Medellín's best chicken sancocho. For fine dining, El Cielo (chef Juan Manuel Barrientos) does the most cutting-edge Colombian cuisine." },
          ],
        },
        {
          theme: "Feria de las Flores and the Botanical Garden",
          activities: [
            { name: "Medellín Botanical Garden", description: "Colombia's most biodiverse botanical garden, with 4,500 tropical plants, the Orquideórama (Medellín's most photographed wooden structure), and a lake with the largest water lilies in the Americas.", price: "Free", tip: "The Orquideórama is a work of parametric architecture that won an RIBA award. The blooming orchids (Colombia has 4,000 species) are impressive year-round." },
            { name: "Manila neighborhood and Medellín's graffiti", description: "Medellín has Colombia's second-most important urban art scene after Bogotá. The Manila and Laureles neighborhoods have the best murals, by artists like Guache and Crisp.", price: "Free", tip: "The Medellín Urban Street Art graffiti tour (free, tip-based) departs from Parque El Poblado. The Calle 70 area in Laureles has the most recent murals." },
            { name: "Mercado del Río", description: "Medellín's most popular food market, with more than 60 stalls of Colombian and international cuisine, tropical fruit cocktails, and the city's most festive lunchtime atmosphere.", price: "COP 15,000-40,000", tip: "The lulo, passion fruit, tree tomato, and soursop juices at Mercado del Río cost COP 3,000-5,000 and are Medellín's best. Tequila with chamoy isn't Colombian — order aguardiente instead." },
            { name: "Sunset from Cerro de las Tres Cruces", description: "The three crosses atop the hill above the Boston neighborhood, with the best panoramic view of the entire Aburrá Valley: Medellín from end to end, the metro down on the plain, and the surrounding mountains.", price: "Free", tip: "The climb up the hill (45 min on foot) is safe during the day when there are people around. Sundays have more people and a livelier atmosphere. From the top, you can clearly see the Santo Domingo cable car." },
          ],
        },
      ],
    },
  },

  singapur: {
    en: {
      city: "Singapore",
      country: "Singapore",
      heroTitle: "3 days in Singapore: the future of the 21st century",
      heroSubtitle: "Gardens by the Bay, Chinatown, Marina Bay Sands, and hawker centre food — Singapore in three perfectly planned days.",
      bestMonths: "February to April",
      budget: "$150-250 SGD/day (~$110-185 USD)",
      travelTips: [
        "Singapore has one of the most efficient public transport systems in the world — the EZ-Link card covers the metro (MRT), buses, and LRT",
        "Hawker centre food (SGD 4-8) is the same quality as luxury restaurants — it's Singapore's great culinary equalizer",
        "The climate is tropical year-round (30°C, 80% humidity) — light clothing and sunscreen always",
        "Singapore has very strict laws: no smoking in public places, no eating on the metro, and no chewing gum",
        "Singapore is expensive for accommodation (SGD 150-300/night) but cheap for food and transport",
      ],
      days: [
        {
          theme: "Marina Bay and futuristic Singapore",
          activities: [
            { name: "Gardens by the Bay", description: "The world's most spectacular futuristic garden complex, with the Supertrees (25-50 meter steel structures) and its two geodesic domes: Cloud Forest (a 35m-tall tropical forest) and Flower Dome.", price: "SGD 28 (Cloud Forest + Flower Dome)", tip: "The Supertree Grove has the best sunset and a free light show at 7:45pm and 8:45pm. Climbing the skywalk between the Supertrees (SGD 10) offers views of Marina Bay." },
            { name: "Marina Bay Sands Skypark", description: "Singapore's most iconic hotel, with an infinity pool on the 57th floor (guests only) and the SkyPark terrace offering Singapore's best views. The free Spectra light-and-water show runs in front of the hotel.", price: "SGD 32 (observation deck)", tip: "The SkyPark observation deck is open to the public (SGD 32). The view of the skyline, Gardens by the Bay, and the Singapore Strait from 200 meters up is unmatched." },
            { name: "ArtScience Museum", description: "The lotus-flower-shaped museum floating on Marina Bay's water, with digital art, science, and technology exhibitions. The permanent Future World exhibit (digital art by teamLab) is one of the most impressive in the world.", price: "SGD 21", tip: "teamLab's Future World has the 'Forest of Life' installation, where the lights react to movement — one of the most unique visual experiences in Asia." },
            { name: "Spectra — light and water show", description: "The free show at Marina Bay Waterfront in front of The Shoppes, with 30-meter water jets and laser projections synced to music. One of the best free nighttime shows in the world.", price: "Free", tip: "The best spot is on the Helix Bridge or along the waterfront facing the ArtScience Museum. The 8:45pm show on Fridays and Saturdays is the longest." },
          ],
        },
        {
          theme: "Chinatown, Little India, and the hawker centres",
          activities: [
            { name: "Chinatown Heritage Centre", description: "Singapore's Chinatown, with the Jade Buddha at the Sri Mariamman Temple, ancestral Chinese tea shops, and the famous Maxwell Food Centre. Pagoda, Trengganu, and Sago streets have the most colorful shophouses.", price: "Free (Heritage Centre SGD 12)", tip: "Thian Hock Keng Temple (1840) is Singapore's oldest Hokkien temple — the porcelain dragon decoration on the roof is extraordinary. Free to enter." },
            { name: "Maxwell Food Centre — the most famous hawker centre", description: "Singapore's most historic street food center, with more than 100 stalls under one roof. Tian Tian's chicken rice, fruit rojak, and laksa are the most sought-after dishes.", price: "SGD 4-8 per dish", tip: "The Tian Tian Hainanese Chicken Rice stall (Anthony Bourdain's favorite) has a line from 10:30am on — get there before noon to eat. It costs SGD 5-6." },
            { name: "Little India — Serangoon Road", description: "Singapore's Indian quarter, with the Sri Veeramakaliamman Temple (one of the most elaborate in Asia), spice shops, flower stalls, and Tekka Market, home to the city's best Indian food.", price: "Free", tip: "The biryani at Allauddin's stall in Tekka Market (SGD 6) is Singapore's best. The neighborhood is especially colorful on Sundays, when migrant workers celebrate their day off." },
            { name: "Clarke Quay and the Singapore River at sunset", description: "The old Singapore River wharf, now a district of bars and restaurants in restored colonial shophouses. The golden hour lights up the colorful façades with the river in the foreground.", price: "Free", tip: "River cruise boats from Clarke Quay depart every 30 minutes (SGD 25) and pass by the city's most historic sights. The nighttime cruise is the most beautiful." },
          ],
        },
        {
          theme: "Sentosa, the zoo, and Singapore's nature",
          activities: [
            { name: "Singapore Zoo — the world's best", description: "Consistently ranked one of the world's best zoos, with open-concept habitats for the animals. The giraffes, the semi-free-ranging Bornean orangutans, and the river crocodiles are the most fascinating.", price: "SGD 49", tip: "Jungle Breakfast with Wildlife (SGD 33 extra) gives you breakfast alongside the orangutans at 9am — a unique experience. Book weeks ahead." },
            { name: "Sentosa Island and Universal Studios", description: "Singapore's entertainment island, with Universal Studios, Siloso Beach, and a panoramic cable car. The Transformers, Harry Potter, and Jurassic Park rides at Universal are the best in Asia.", price: "SGD 88 (Universal Studios)", tip: "Universal Studios' Express Pass (SGD 40 extra) skips the lines for the main rides — worth it if the park is crowded. The cable car (SGD 35) from Mount Faber has the best views of the strait." },
            { name: "Haw Par Villa — the park of the ten hells", description: "Asia's strangest theme park, created in 1937, with 1,000 statues depicting Chinese mythology and the 10 courts of hell. A one-of-a-kind surreal experience.", price: "Free", tip: "Haw Par Villa is one of Singapore's most singular spots and virtually unknown to tourists — a hidden gem among the commercial theme parks." },
            { name: "Final dinner at Newton Circus Hawker Centre", description: "Singapore's most famous nighttime hawker centre (the one from Crazy Rich Asians), with mud crabs, fried orchids, BBQ seafood, and laksa under the tropical stars.", price: "SGD 15-40", tip: "Chilli crab (SGD 50-80 per serving) is Singapore's national dish — order it from the stall with the longest line. Man Tou (fried buns) for dipping in the sauce is mandatory." },
          ],
        },
      ],
    },
  },

  "ciudad-de-mexico": {
    en: {
      city: "Mexico City",
      country: "Mexico",
      heroTitle: "4 days in Mexico City: tacos, pyramids, and pre-Hispanic culture",
      heroSubtitle: "Teotihuacán, Xochimilco, La Condesa, and the world's best tacos — the itinerary to discover Latin America's most fascinating metropolis.",
      bestMonths: "October to May (dry season)",
      budget: "$40-80 USD/day",
      travelTips: [
        "Mexico City's metro is the cheapest in the world (MXN 5) and reaches almost everywhere — learn the main lines before you arrive",
        "Mexico City sits at 2,240m altitude — the first few days you may feel tired or short of breath, take it easy",
        "Street-stall tacos are safe and delicious — look for the stalls with the most local customers",
        "Uber and Cabify are the safest transport options for tourists, especially at night",
        "Rainy season (June-October) brings brief afternoon downpours — always carry an umbrella or poncho",
      ],
      days: [
        {
          theme: "The Zócalo and the Historic Center",
          activities: [
            { name: "Zócalo and the Metropolitan Cathedral", description: "Latin America's largest square, surrounded by the National Palace, the Metropolitan Cathedral (the largest in the Americas), and the Old City Hall. Diego Rivera painted the National Palace's murals depicting Mexico's history.", price: "Free (National Palace free)", tip: "Diego Rivera's murals in the National Palace are on the first floor by the main staircase — free entry with ID. The Tlatelolco market scene is the most impressive." },
            { name: "Templo Mayor — the Aztec ruins beneath the city", description: "The ceremonial center of Tenochtitlán, the Aztec capital, discovered in 1978 beneath Mexico City's historic center. The adjacent museum has the Sun Stone (the misnamed 'Aztec calendar') and the Teocalli of the Sacred War.", price: "MXN 85", tip: "Templo Mayor shows 7 stacked layers of construction — the Aztecs built a new temple over the previous one every 52 years. The Tlaltecuhtli monolith (tons of carved stone) is the most recent find." },
            { name: "Tacos at the Mercado de la Merced", description: "The largest market in the Historic Center, with more than 3,000 food stalls, tacos de canasta, tamales, atole, and Mexico's widest variety of fresh chiles.", price: "MXN 20-40 per taco", tip: "Tacos de canasta (bean, pork rind, and potato, delivered by bike in a palm basket) are downtown's most authentic breakfast. The taco placero with nopales and fresh cheese is perfect for vegetarians." },
            { name: "Bellas Artes and the Alameda", description: "The Palacio de Bellas Artes, a symbol of modern Mexico with its marble dome, houses murals by Diego Rivera, José Clemente Orozco, and David Alfaro Siqueiros. Alameda Central park is the oldest in the Americas (1592).", price: "MXN 80 (gallery)", tip: "The glass ceiling in Bellas Artes' main hall, with its Tiffany-glass curtain depicting Popocatépetl volcano, can only be seen during a performance or guided visit. The upper-floor murals are freely accessible." },
          ],
        },
        {
          theme: "Teotihuacán — the city of the gods",
          activities: [
            { name: "Teotihuacán Pyramids — first thing", description: "Mesoamerica's largest pre-Hispanic city, 50 km from Mexico City, with the Pyramid of the Sun (the third-largest in the world), the Pyramid of the Moon, and the 2 km Avenue of the Dead.", price: "MXN 100", tip: "Take the first bus (6:30am) from Terminal del Norte. Arriving by 8am, ahead of organized tour groups, gives you the pyramids almost to yourself." },
            { name: "Climbing the Pyramid of the Sun", description: "The Pyramid of the Sun's 248 steps lead to the summit, 70 meters up, with 360° views over the Teotihuacán valley and the entire ceremonial city. It's the most impressive experience in Mexican archaeology.", price: "Included", tip: "Climb from both sides to take in the full views. The steps are steep and the altitude is 2,300m — take it slow and bring water." },
            { name: "Lunch with a view of the pyramids", description: "The restaurants facing the pyramids serve Oaxacan tlayudas, enchiladas, and pulque (fermented maguey drink). La Gruta restaurant, inside a natural cave dating to the 2nd century BC, is the most impressive.", price: "MXN 120-200", tip: "La Gruta (inside the cave) is right at the exit of the archaeological site. Call ahead to reserve for midday — it's an iconic spot worth the price." },
            { name: "Return, and mole dinner in La Condesa", description: "La Condesa is Mexico City's most cosmopolitan, food-focused neighborhood, with high-end Mexican restaurants like Quintonil and Pujol (world's #5), and cafés along Avenida Ámsterdam's tree-lined medians.", price: "MXN 100-300", tip: "Oaxacan black mole and mole poblano are Mexican cuisine's two most complex sauces (with more than 30 ingredients). The best are at Azul y Oro, in Roma." },
          ],
        },
        {
          theme: "Xochimilco and the south of the city",
          activities: [
            { name: "Xochimilco — the pre-Hispanic canals", description: "The last chinampas (floating artificial islands) of the Aztec civilization, a UNESCO World Heritage site. Colorful trajinera boats cruise the canals with mariachis, food vendors, and Mexico City's most festive atmosphere.", price: "MXN 400-600 (2h trajinera ride)", tip: "Rent a whole trajinera with friends (6-8 people) instead of joining a shared one. The mariachis who pull up alongside in their own boat charge MXN 200-300 per song." },
            { name: "Coyoacán — Frida Kahlo's neighborhood", description: "Mexico's most beautiful colonial neighborhood, with its crafts market, the coyote-themed square, and the Casa Azul (Frida Kahlo Museum). Diego Rivera and Frida Kahlo lived here, and the neighborhood still carries their artistic spirit.", price: "Free (Casa Azul MXN 250)", tip: "Book the Casa Azul (Frida Kahlo Museum) online ahead of time — only 80 people per hour. The ice cream shop in Coyoacán (facing the church) has incredible flavors." },
            { name: "Casa Azul — Frida Kahlo Museum", description: "The house where Frida Kahlo was born and died, preserved just as she left it, with her Tehuana dresses, her paintings, and the wheelchair she worked from in her final years. The garden with its Aztec pyramids is striking.", price: "MXN 250", tip: "The still-life arrangement in the blue kitchen, with decorated skulls and clay pots, tells you more about Frida's character than the paintings do. The studio in the garden has her original easel." },
            { name: "Mezcal and chef-driven tacos in Roma Norte", description: "Roma Norte is Mexico City's trendiest neighborhood, with artisan mezcal bars (from Oaxaca, Guerrero, and Michoacán), chef-driven tacos, and Mexico's most cutting-edge food scene.", price: "MXN 80-200", tip: "Bósforo Mezcalería and Hanky Panky have Mexico's best small-batch mezcals. Always order mezcal neat, at room temperature — never with ice." },
          ],
        },
        {
          theme: "Chapultepec and Mexico's best museum",
          activities: [
            { name: "National Museum of Anthropology", description: "Latin America's best museum and one of the finest in the world, with the Aztec Sun Stone, Pakal of Palenque's jade funerary mask, and the Maya hall with the Bonampak mural recreation. Its 24 rooms cover every civilization of Mexico.", price: "MXN 85", tip: "The Mexica (Aztec) hall, with the Sun Stone and the Coatlicue, is the most striking. Two hours is enough for the main halls — seeing the whole museum takes 5+ hours." },
            { name: "Chapultepec Forest", description: "Latin America's largest urban park (686 hectares), with Chapultepec Castle, an artificial lake, and the zoo, home to the only giant panda in the Americas. The park is Mexico City's green, social lung.", price: "Free (Zoo free, Castle MXN 90)", tip: "Chapultepec Castle (once home to Maximilian of Habsburg and Porfirio Díaz) has O'Gorman's finest murals on Mexican history and views over Paseo de la Reforma." },
            { name: "Paseo de la Reforma and the Angel", description: "Mexico City's grand avenue, designed in 1864 by Maximilian, inspired by the Champs-Élysées. The Angel of Independence, the Diana Cazadora fountain, and the Torre Mayor form Mexico City's most recognizable skyline.", price: "Free", tip: "On Sundays, Paseo de la Reforma closes to cars and fills with cyclists, skaters, and street vendors — the city's most festive, family-friendly atmosphere." },
            { name: "Last dinner in Polanco — fine Mexican cuisine", description: "Polanco is home to Mexico's most award-winning restaurants: Pujol (world's top 10), Quintonil, Máximo Bistrot. If your budget is tight, the suadero tacos at the Cuauhtémoc stand are just as memorable.", price: "MXN 300-1,500", tip: "Pujol and Quintonil require reservations months in advance. For an accessible dining experience, Mercado Roma in Colonia Roma has 70 stalls of chef-driven Mexican food from MXN 80." },
          ],
        },
      ],
    },
  },

  estambul: {
    en: {
      city: "Istanbul",
      country: "Turkey",
      heroTitle: "4 days in Istanbul: where Europe meets Asia",
      heroSubtitle: "Hagia Sophia, the Grand Bazaar, the Bosphorus, and the most authentic neighborhoods — the world's most fascinating city in four full days.",
      bestMonths: "April to June and September to November",
      budget: "$60-120 USD/day",
      travelTips: [
        "The Turkish lira has fluctuated a lot — bring dollars or euros and exchange at downtown exchange offices (döviz bürosu), never at the airport",
        "The İstanbulkart (transit card) covers the metro, tram, ferry, and bus — load it with TL 100 for 2-3 days",
        "Modest clothing is mandatory at mosques — always carry a headscarf and wear something covering your shoulders and knees",
        "Turkish tea (çay) is served free or very cheap at almost every business — it's a hospitality custom, not a scam",
        "Istanbul has 15 million residents — traffic is fierce. Use the metro, the T1 tram, and the ferries to get around quickly",
      ],
      days: [
        {
          theme: "Sultanahmet — the historic heart of two empires",
          activities: [
            { name: "Hagia Sophia", description: "Istanbul's architectural jewel, built in 537 AD as the largest church in the Christian world, later converted into an Ottoman mosque, and today a mosque once again. The 55-meter dome floating above Byzantine mosaics and Arabic calligraphy is unmatched.", price: "Free (open admission as a working mosque)", tip: "Hagia Sophia reopened as an active mosque in 2020 — go in barefoot and dressed modestly (shoulders and knees covered). The early morning hours have fewer visitors." },
            { name: "Blue Mosque (Sultanahmet Camii)", description: "The only mosque in Istanbul with six minarets, famous for the 20,000 blue Iznik ceramic tiles covering its interior. The square between the Blue Mosque and Hagia Sophia is Istanbul's most photogenic space.", price: "Free", tip: "The Blue Mosque closes to visitors during the five daily prayers (15-30 min each time). Check the schedule posted at the door before waiting." },
            { name: "Topkapi Palace", description: "The seat of the Ottoman Empire for 400 years, home to the sultans' treasury (the 86-carat Kaşıkçı Diamond), the imperial harem, and Islam's sacred relics. Direct views of the Bosphorus and the Sea of Marmara.", price: "TL 400 (palace) + TL 200 (harem)", tip: "Topkapi's harem requires a separate ticket but is well worth it — it's the palace's most fascinating section. The Imperial Treasury in Pavilion 3 has Turkey's largest diamond." },
            { name: "Basilica Cistern — the underground palace", description: "The 6th-century Roman cistern, with 336 marble columns reflected in still water. The columns with upside-down Medusa heads and the mystical lighting make this one of the most unique places in the world.", price: "TL 200", tip: "The cistern stays cool even in summer — a refuge from Istanbul's heat. The Column of Tears (with spiral markings) is the most sought-out." },
          ],
        },
        {
          theme: "The Grand Bazaar, the Spice Bazaar, and the Egyptian quarter",
          activities: [
            { name: "Grand Bazaar", description: "The world's largest, oldest covered bazaar, with 61 streets, 4,000 shops, and 250,000 daily visitors. Rugs, glass lamps, ceramics, silver jewelry, and Turkish leather in a 15th-century maze.", price: "Free (to enter)", tip: "Haggling is mandatory — start by offering 40-50% of the asking price. Shops deeper inside (not on the main street) offer better value." },
            { name: "Spice Bazaar (Mısır Çarşısı)", description: "Istanbul's most famous spice market, in the Egyptian quarter, with Iranian turmeric, Safranbolu saffron, Anatolian rose tea, lokum (Turkish Delight), and Turkey's best pistachios.", price: "Free", tip: "Loose spices are much cheaper and fresher than sealed packages. Always negotiate, and buy from shops deeper inside the bazaar — the ones near the entrance charge double." },
            { name: "Lunch in the Eminönü neighborhood", description: "The Eminönü ferry dock has Istanbul's most famous balık ekmek (grilled mackerel sandwiches, made on boats). The floating restaurants along the Golden Horn have been operating for decades.", price: "TL 70-100", tip: "Balık ekmek is eaten standing by the water with a cup of turşu suyu (pickle juice). It's Istanbul's most local, cheapest food experience." },
            { name: "Golden Horn cruise", description: "The 8 km estuary separating the historic heart from the modern European neighborhoods. A short cruise down the Golden Horn shows off the historic bridges, mosques, and wooden neighborhoods lining the water.", price: "TL 30-50 (public ferry)", tip: "The public ferry (vapur) is more authentic and cheaper than tourist cruises. It departs from Eminönü and reaches Eyüpsultan — Istanbul's most conservative, least touristy neighborhood." },
          ],
        },
        {
          theme: "Bosphorus cruise and Dolmabahçe Palace",
          activities: [
            { name: "Dolmabahçe Palace", description: "The sultan's palace on the Bosphorus, built in 1856 in a Neo-Baroque European style. The throne room, with a 4.5-ton crystal chandelier gifted by Queen Victoria, and its 285 rooms are a symbol of the Ottoman decline.", price: "TL 400", tip: "The tour is guided-only (you can't go in alone). The harem and the throne room are the two most impressive sections — make sure your ticket includes them." },
            { name: "Bosphorus cruise", description: "The 30 km strait separating Europe from Asia, dotted with medieval fortresses, wooden yalı mansions, mosques, and the Bosphorus Bridge. The public ferry to Anadolu Kavağı (the Asian end) is the most epic experience.", price: "TL 50 (public ferry)", tip: "The public ferry (Boğaz Hattı) from Eminönü runs the full 6-hour route for TL 50 — far cheaper than tourist cruises. The return trip is just as beautiful." },
            { name: "Beşiktaş neighborhood and the European shore", description: "The most authentic neighborhood on the Bosphorus's European shore, with a fish market, local breweries, the Beşiktaş Eagle statue, and Beşiktaş JK's stadium.", price: "Free", tip: "Çay (Turkish tea) at the cafés along the Bosphorus in Beşiktaş is served in a tulip-shaped glass with two sugar cubes — have it that way for the full experience." },
            { name: "Kebab dinner in Beşiktaş or Kadıköy", description: "İskender kebab (lamb over pide bread with yogurt and melted butter) and balık (grilled Bosphorus fish) are Istanbul's two most representative dinners.", price: "TL 150-300", tip: "Kadıköy (Asian side, 15 min by ferry) has Istanbul's best restaurants and bars for locals. Crossing to Asia by ferry at night is a unique experience in itself." },
          ],
        },
        {
          theme: "Beyoğlu, Istiklal, and modern Istanbul",
          activities: [
            { name: "Istiklal Avenue and Beyoğlu", description: "Istanbul's most famous pedestrian street, 3 km of shops, cafés, galleries, and the historic red tram. Beyoğlu was the heart of 19th-century Ottoman modernization.", price: "Free", tip: "The Istiklal tram gets photographed more than it gets ridden — you'll need to step off the tracks when it passes. The secondhand bookshops and galleries in the historic passages are the street's hidden gems." },
            { name: "Galata Tower", description: "The 14th-century medieval Genoese tower, 70 meters tall, in the Galata neighborhood. The views of the Golden Horn, the Bosphorus, Hagia Sophia, and the Blue Mosque from the terrace are Istanbul's best.", price: "TL 300", tip: "Lines can be long — buy your ticket online. The best photo of Galata is taken from below, with the neighborhood cascading down toward the Golden Horn." },
            { name: "Karaköy neighborhood and its tea houses", description: "The neighborhood at the foot of the Galata Tower, with Istanbul's best specialty coffee shops, contemporary design galleries, and the Karaköy Güllüoğlu bakery, home to the city's best baklava.", price: "TL 30-60", tip: "Karaköy Güllüoğlu's baklava is made with Antep pistachios and buffalo butter — completely different from Greek or Arab baklava. Order the mixed tray." },
            { name: "Sunset at Çemberlitaş Hamam", description: "Istanbul's most historic hammam, designed by the great architect Sinan in 1584 for Sultan Suleiman's wife. The Turkish hammam ritual (foam massage and kese exfoliation) is the perfect farewell.", price: "TL 400-600 (full treatment)", tip: "Çemberlitaş Hamamı has separate entrances for men and women. The full ritual (hot bath, exfoliation, soaping, massage) lasts 45-60 minutes." },
          ],
        },
      ],
    },
  },

  florencia: {
    en: {
      city: "Florence",
      country: "Italy",
      heroTitle: "3 days in Florence: the Renaissance in its purest form",
      heroSubtitle: "The Uffizi, Michelangelo's David, Piazzale Michelangelo, and Italy's best bistecca — Florence in three essential days.",
      bestMonths: "April to June and September to October",
      budget: "€90-150/day",
      travelTips: [
        "Book the Uffizi, Galleria dell'Accademia, and the Duomo weeks in advance — the walk-in lines are brutal in high season",
        "Florence is perfectly walkable — the historic center is only 2 km across",
        "Tuscan aperitivo (6-9pm) at Oltrarno's bars includes a drink + a free antipasti spread",
        "The historic pharmacies (Farmacia di Santa Maria Novella, founded 1221) sell Italy's most exclusive perfumes and creams",
        "State museums are free on the first Sunday of each month — but they're also packed; better to go on a weekday",
      ],
      days: [
        {
          theme: "The Duomo and the historic heart",
          activities: [
            { name: "Cathedral of Santa Maria del Fiore (the Duomo)", description: "Brunelleschi's dome (1436) was the largest in the world for centuries and remains Florence's symbol. Climbing the dome's 463 steps offers the best view of the city's terracotta rooftops.", price: "€18 (full pass: cathedral + dome + baptistery + bell tower)", tip: "Book dome access online — spots are very limited. The first hours of the day have the most beautiful light for the views from above." },
            { name: "Baptistery of San Giovanni", description: "Florence's oldest religious building (11th-12th century), with Lorenzo Ghiberti's gilded bronze Gates of Paradise, which Michelangelo called just that. The 10 Old Testament scenes are masterful reliefs.", price: "Included with the Duomo pass", tip: "The original door reliefs are in the Museo dell'Opera del Duomo (included with the pass) — the ones outside are replicas. The museum is worth the visit." },
            { name: "Lunch at the Mercato Centrale", description: "Florence's Mercato Centrale, in its 19th-century iron building, has the city's highest concentration of Tuscan products: truffles, pecorino, wild boar cured meats, and the famous lampredotto (Florentine tripe).", price: "€8-15", tip: "Lampredotto (cow's fourth stomach) in a panino with salsa verde is Florence's most authentic street food. Nervi di bue (beef nerve) for the more adventurous." },
            { name: "Palazzo Vecchio and Piazza della Signoria", description: "Florence's civic heart since the 14th century, with the Loggia dei Lanzi (a free open-air sculpture gallery) and the Palazzo Vecchio with the Salone dei Cinquecento painted by Vasari.", price: "Palazzo €12.50 / Loggia free", tip: "The Loggia dei Lanzi has world-class sculptures (Giambologna's Rape of the Sabine Women) completely outdoors and free — see this before going into the Palazzo." },
          ],
        },
        {
          theme: "The Uffizi and Michelangelo's David",
          activities: [
            { name: "Galleria degli Uffizi", description: "The world's most important Renaissance art museum, with works by Botticelli (The Birth of Venus, Primavera), Leonardo, Michelangelo, Raphael, and Titian. More than 100 rooms in the Medici palace.", price: "€25 (+ €4 advance booking fee)", tip: "Book your ticket online weeks ahead in high season — walk-in lines run over 3 hours. Botticelli's The Birth of Venus is in Room 10 — it's smaller than you'd expect." },
            { name: "Ponte Vecchio and the Oltrarno", description: "Florence's most famous bridge, built in 1345, lined with jewelry shops on both sides since the 16th century. The Vasari Corridor (the Medici's secret passage above the bridge) is visible from the riverbank.", price: "Free", tip: "The jewelry shops on Ponte Vecchio are touristy but the prices are competitive — Florentine gold is guaranteed quality. The best angle of the bridge is from the Ponte Santa Trinità." },
            { name: "Galleria dell'Accademia — the David", description: "The museum holding Michelangelo's David (1504), the world's most famous sculpture. The 5.17-meter white marble figure, in the museum's circular hall, is an experience no photo can convey.", price: "€16 (+ €4 booking fee)", tip: "Booking online is ESSENTIAL. The David has visible chisel marks — look for the detail in the neck tendons, the veins in the hands, and the focused expression." },
            { name: "Bistecca alla Fiorentina at Buca dell'Orafo", description: "Bistecca alla fiorentina is Tuscany's most famous dish — a thick-cut Chianina beef T-bone, at least 1 kg, cooked medium-rare (always medium-rare, never well done). It's ordered by weight.", price: "€40-60 per person", tip: "Bistecca is priced per 100g (€3-5). A full one for two people weighs 1.2-1.5 kg. Order it 'al sangue' (rare) or 'al punto' (medium-rare) — never 'ben cotta' (well done)." },
          ],
        },
        {
          theme: "Oltrarno, Piazzale, and the Boboli Gardens",
          activities: [
            { name: "Boboli Gardens", description: "The gardens of the Pitti Palace, the Medici residence, with fountains, statues, a Baroque grotto, and views over Florence and the Tuscan olive groves. 45,000 m² of terraced Renaissance gardens.", price: "€10 (includes the Pitti Palace)", tip: "The Grotta Grande del Buontalenti (with Michelangelo sculptures embedded in artificial stalactite walls) is Florence's strangest, most fascinating spot." },
            { name: "The Oltrarno neighborhood and its artisans", description: "The neighborhood south of the Arno, less touristy and more authentic, with workshops of art restorers, cabinetmakers, bookbinders, and artisan jewelers still working with Renaissance techniques.", price: "Free", tip: "Stefano Bemer on Via di San Niccolò makes Florence's most famous made-to-measure shoes. Artisan perfumeries like Lorenzo Villoresi have created unique fragrances since 1990." },
            { name: "Truffled pasta lunch in Oltrarno", description: "Oltrarno's restaurants have Florence's best pappardelle al cinghiale (wild boar) and tagliolini al tartufo (truffle), at much more reasonable prices than downtown.", price: "€14-22", tip: "Buca Mario (1886, Florence's oldest restaurant) and Buca dell'Orafo have guaranteed authenticity. In Oltrarno, restaurants without an English menu are the best." },
            { name: "Piazzale Michelangelo at sunset", description: "The terrace above Florence with the city's most classic view: the Duomo, the Palazzo Vecchio, the Arno, and the bridges seen from the hill. The golden hour before sunset is the best time.", price: "Free", tip: "Walk up from the Piazzale to the Church of San Miniato al Monte — 10 minutes further up, with even better views and far fewer people than the Piazzale." },
          ],
        },
      ],
    },
  },

  lima: {
    en: {
      city: "Lima",
      country: "Peru",
      heroTitle: "3 days in Lima: the world's culinary capital",
      heroSubtitle: "Miraflores, Barranco, the Historic Center, and Latin America's best restaurants — Lima is much more than a gateway to Machu Picchu.",
      bestMonths: "January to March (southern summer), though it's good year-round",
      budget: "S/150-250/day (~$40-70 USD)",
      travelTips: [
        "Lima has coastal fog (the garúa) from May to November that dims the sky — the beach isn't the plan during those months",
        "Lima's food scene is the city's biggest draw — book ahead at Central, Maido, and Kjolle if you want the best tables",
        "Lima's traffic is legendarily chaotic — use Uber or Cabify to get around safely and predictably",
        "Lima's sun is strong despite the haze — always wear sunscreen on the Miraflores boardwalk",
        "Acclimatizing to Cusco is much easier if you arrive first in Lima (sea level) and gain altitude gradually",
      ],
      days: [
        {
          theme: "Miraflores and the Pacific cliffs",
          activities: [
            { name: "Parque Kennedy and the heart of Miraflores", description: "The central park of Lima's most modern district, surrounded by cafés, galleries, and the Church of the Virgen Milagrosa. The park's cats (more than 100) are the neighborhood's most beloved attraction.", price: "Free", tip: "The weekend crafts fair at Parque Kennedy has Lima's best souvenirs. The cats are friendly and can be photographed freely." },
            { name: "Miraflores boardwalk and the cliffs", description: "The boardwalk atop 70-80 meter cliffs over the Pacific, with sea views and paragliders drifting overhead. Parque del Amor, with Víctor Delfín's mural and entwined couples, is one of the most romantic parks in the world.", price: "Free (paragliding S/150)", tip: "Paragliding off the cliffs is Lima's most adrenaline-filled activity — 15 minutes over the Pacific from 80 meters up. Operators like Aeroxtreme launch from the boardwalk." },
            { name: "Ceviche at Mercado 28 or La Mar", description: "Ceviche is Peru's national dish and Lima has the best in the world. La Mar (Gastón Acurio) and Mercado 28 are popular go-tos, with lines and communal tables.", price: "S/35-80", tip: "Leche de tigre (the citrusy ceviche marinade) is drunk as a shot at the end and is said to have aphrodisiac properties. Always ask for it." },
            { name: "Sunset from Larcomar", description: "The mall built into the Miraflores cliffs, with bars and restaurants over the Pacific. The upper-floor terrace has the best sunset view over the ocean in all of Lima.", price: "Free", tip: "Astrid & Gastón at Larcomar is the most historic restaurant in modern Peruvian cuisine. The sunset view with a pisco sour is worth the price." },
          ],
        },
        {
          theme: "Historic Center and Lima's colonial soul",
          activities: [
            { name: "Plaza Mayor and the Colonial Balconies", description: "Lima's heart since the Spanish founding in 1535. The Cathedral, the Government Palace, and the Municipal Palace define colonial Peru's most important square. The carved wooden balconies are one of a kind in the Americas.", price: "Free (Cathedral S/20)", tip: "The changing of the guard at the Government Palace happens at 11:30am, Monday through Friday — a free show with music from the Presidential Band." },
            { name: "Convent of Santo Domingo and the Catacombs", description: "The 16th-century monastery where San Martín de Porres and Santa Rosa de Lima are buried. The catacombs beneath the church hold more than 25,000 remains of Lima's early colonizers and criollos.", price: "S/15", tip: "The catacombs are surprisingly well preserved, and the guide gives fascinating historical context. Flash photography is banned inside." },
            { name: "Lima's Chinatown — the Barrio Chino", description: "Lima's Chinese community (200,000 people, the largest in Latin America) has the region's best Chinatown. The chifas (Chinese-Peruvian restaurants) on Jirón Ucayali are legendary.", price: "S/20-45", tip: "Chinese-Peruvian fusion (chifa) is one of the world's most interesting cuisines. Order arroz chaufa with lomo saltado — the perfect fusion of two cultures." },
            { name: "Museo Larco — the pre-Columbian treasure", description: "The world's most important collection of pre-Columbian art, in a 17th-century hacienda in Pueblo Libre. Its 45,000 objects include the treasure of Sipán, Moche ceramics, and the famous erotic gallery.", price: "S/50", tip: "The garden café at Museo Larco (among the flowers and the huacas) is one of Lima's most beautiful. Book a table ahead for sunset." },
          ],
        },
        {
          theme: "Barranco — the most bohemian neighborhood",
          activities: [
            { name: "Barranco neighborhood and the Bridge of Sighs", description: "Lima's most bohemian, artistic neighborhood, with colonial mansions turned into galleries, bars, and the Mario Testino Museum. The Bridge of Sighs (1876) and the path down to the beach are the neighborhood's postcard images.", price: "Free", tip: "Tradition says if you cross the Bridge of Sighs holding your breath and make a wish, it comes true. The views down toward the sea are gorgeous." },
            { name: "Lunch at Isolina — a Lima tavern", description: "Jose del Castillo's tavern in Barranco is the best example of Lima's creole cooking: pork chicharrón, beef heart anticuchos, carapulcra, and causa limeña at their most authentic.", price: "S/40-80", tip: "Book ahead — Isolina is on every list of Lima's best restaurants and has a line at both lunch and dinner. Monday at noon is the least crowded time." },
            { name: "MATE — Mario Testino Museum", description: "The museum of the world's most famous Peruvian photographer, in a 19th-century mansion in Barranco. His portraits of Princess Diana, Kate Moss, and Naomi Campbell wearing Peruvian designers are striking.", price: "S/25", tip: "MATE's garden patio is one of the prettiest in Lima. The ground-floor café serves the neighborhood's best egg-yolk bread." },
            { name: "Pisco Sour at a Barranco bar", description: "The pisco sour is Peru's national cocktail (slightly different from the Chilean version). Barranco's bars serve the most authentic versions: pisco quebranta, green lime, simple syrup, egg white, and bitters.", price: "S/25-35", tip: "Ayahuasca Bar in Barranco (the three-story Republican-era mansion) has the best pisco sours and the prettiest atmosphere in Lima's nightlife. El Refugio's speakeasy bar is also very special." },
          ],
        },
      ],
    },
  },

  praga: {
    en: {
      city: "Prague",
      country: "Czech Republic",
      heroTitle: "3 days in Prague: the castle, Charles Bridge, and Europe's cheapest beer",
      heroSubtitle: "Old Town, Prague Castle, Josefov, and the Little Quarter — Europe's best-preserved medieval city in three full days.",
      bestMonths: "May to September",
      budget: "€60-100/day",
      travelTips: [
        "The Czech koruna (CZK) is not the euro — exchange at downtown offices, never at street ones that scam tourists",
        "Prague's metro is efficient and cheap (CZK 30 per ride) — buy the day pass (CZK 120) if you're making more than 4 trips",
        "Prague is very touristy, but Vinohrady, Žižkov, and Holešovice have the most authentic local atmosphere",
        "Beer in Prague costs less than bottled water at bars — that's cultural, not a scam",
        "High season (June-August) and Christmas are the most crowded times — spring and fall are ideal",
      ],
      days: [
        {
          theme: "Prague Castle and the Little Quarter",
          activities: [
            { name: "Prague Castle — opening time", description: "The largest castle complex in the world by area (70,000 m²), with 9 centuries of history. The complex includes St. Vitus Cathedral, the Royal Palace, and the picturesque Golden Lane where Franz Kafka once lived.", price: "CZK 350 (long tour)", tip: "Arrive at 8:30am when it opens to see St. Vitus Cathedral without the lines. The view from the castle's south garden over Prague's red rooftops is the city's most spectacular." },
            { name: "Golden Lane — where Franz Kafka lived", description: "The 16th-century street of colorful houses inside the castle, where court goldsmiths and, later, Franz Kafka at number 22, lived their days. The tiny medieval houses are miniature museums.", price: "Included with the Castle", tip: "House number 22 (blue) is where Kafka wrote some of his stories. The bookshop there now sells his works in Czech and German — the best souvenir from Prague." },
            { name: "Lunch in Malá Strana (Little Quarter)", description: "The Baroque neighborhood at the foot of the castle, with palaces, churches, and Prague's best beer. The Katedrinska brewery and the restaurants on Nerudova are local favorites.", price: "CZK 180-350", tip: "Svíčková (marinated beef sirloin with cream sauce and knedlíky dumplings) is the tastiest Czech national dish. Pilsner Urquell and Staropramen beers cost CZK 35-55 in the Little Quarter." },
            { name: "Charles Bridge at sunset", description: "The 14th-century Gothic bridge, lined with 30 Baroque statues, crossing the Vltava River. By afternoon it fills with street musicians, artists, and Prague's best atmosphere.", price: "Free", tip: "The bridge is packed by day — the best time is early (7am) or late (9pm). Touching the statue of St. John of Nepomuk (the shiny bronze one) is said to bring luck." },
          ],
        },
        {
          theme: "Old Town and the Jewish Quarter",
          activities: [
            { name: "Old Town Square and the Astronomical Clock", description: "Central Europe's most beautiful square, with the 1410 Astronomical Clock (the oldest still working) that parades the figures of the 12 apostles every hour on the hour. The Church of Our Lady before Týn dominates the background.", price: "Free (clock tower CZK 250)", tip: "The clock's parade happens right on the hour — arrive 5 minutes early. The town hall tower (CZK 250) has the best view of the square and Prague's rooftops." },
            { name: "Josefov — the Jewish Quarter", description: "One of the best-preserved medieval Jewish quarters in Europe, with six synagogues (13th-19th centuries), a Jewish cemetery with 12,000 stacked graves, and a museum documenting the history of the Holocaust in Prague.", price: "CZK 500 (combined ticket)", tip: "The Old Jewish Cemetery has up to 12 layers of stacked graves — space was so scarce that burials happened on top of each other. The visit is deeply moving." },
            { name: "Nerudova Street and Malá Strana", description: "Prague's most photogenic street, with Baroque palaces, galleries, and embassies climbing from Charles Bridge up to the Castle. Every building has an identifying medieval heraldic plaque.", price: "Free", tip: "At Nerudova 47 is the Romanian embassy — the alchemist's house that appears in Paulo Coelho's The Alchemist. The secret rose garden at Vrtba Palace (CZK 95) is Prague's most beautiful." },
            { name: "Cervecería U Fleků — 1499", description: "Prague's oldest brewery, running continuously since 1499, in the Nové Město neighborhood. It brews its own dark lager (černé pivo) and has medieval halls with live band music.", price: "CZK 65-100 per pint", tip: "You can't just sit at U Fleků without drinking — waiters automatically place a fresh pint on your table. If you don't want another, cover your glass with the coaster." },
          ],
        },
        {
          theme: "Vinohrady, Vyšehrad, and alternative Prague",
          activities: [
            { name: "Vyšehrad — the other fortress", description: "The medieval fortress from Prague's founding legend, with a basilica, a cemetery of notable Czechs (Dvořák, Smetana), and panoramic views over the Vltava. Far less touristy than the Castle.", price: "Free (some halls CZK 80)", tip: "Vyšehrad has the best views of the Vltava and Charles Bridge from above — without the Castle's crowds. The garden on the south wall is perfect for a picnic." },
            { name: "Vinohrady neighborhood — local Prague", description: "The 19th-century bourgeois residential neighborhood with the city's best artisan cafés, wine bars, and modern Czech restaurants. Náměstí Míru (Peace Square) is its center.", price: "CZK 150-300", tip: "Eska Restaurant in Karlín (15 min by metro) has Prague's most innovative Czech cooking — fermented foods, sourdough, and local farm produce. Book ahead." },
            { name: "Letná Park — the beer garden with the best view", description: "The great park above the Vltava with Prague's most famous beer garden. Direct views over Old Town's rooftops and the river, with beers at local bar prices.", price: "Free (beer CZK 45-60)", tip: "Letná's beer garden is young Praguers' favorite sunset spot. Ordering in English is no problem — just ask for 'one dark beer please'." },
            { name: "Classical music concert in the city", description: "Prague has the richest classical music scene in Central Europe, with daily concerts at the Municipal House, the Opera House, and historic churches. Mozart and Dvořák are in the air on every street.", price: "CZK 400-900", tip: "Concerts in the historic churches (St. Nicholas, Holy Cross) are the most atmospheric and cost CZK 400-600. The sound and the Baroque architecture combine for a unique experience." },
          ],
        },
      ],
    },
  },

  miami: {
    en: {
      city: "Miami",
      country: "United States",
      heroTitle: "3 days in Miami: South Beach, Wynwood, and Little Havana",
      heroSubtitle: "Art Deco, street murals, Latin food, and Florida's best beaches — the perfect itinerary for the most authentic Miami.",
      bestMonths: "November to April",
      budget: "$150-250 USD/day",
      travelTips: [
        "You need a car or Uber to get around Miami efficiently — public transport is limited outside South Beach",
        "Miami's sun is intense year-round — SPF 50 sunscreen is a must at the beach",
        "Tipping at restaurants is 18-20% of the total — expected, and part of servers' wages",
        "Hurricane season runs from June to November — buy travel insurance if visiting during those months",
        "Spanish is Miami's real language — in many Little Havana and Wynwood businesses, English is the second language",
      ],
      days: [
        {
          theme: "South Beach and the Art Deco District",
          activities: [
            { name: "Sunrise at South Beach", description: "Florida's most famous beach is especially magical in the early hours, when the red-and-white lounge chairs are empty and the sunrise light hits the Art Deco hotels on Ocean Drive.", price: "Free", tip: "The sun rises over the ocean at Miami Beach (not over open horizon — the city faces the east coast). The reflection on the wet sand makes the best sunrise photo." },
            { name: "Art Deco Historic District — Ocean Drive", description: "The world's most complete historic Art Deco district, with more than 800 buildings from the 1920s-40s in pastel, chrome, and neon. The stretch of Ocean Drive between 5th and 15th streets is the most photogenic.", price: "Free (walking tour $30)", tip: "The Miami Design Preservation League runs guided walking tours on Saturdays at 10:30am (USD 30) with essential historical context. The Colony Hotel is the most photographed building." },
            { name: "Lunch at Lincoln Road Mall", description: "Miami Beach's most famous pedestrian street, with restaurants, galleries, and the city's best people-watching. On Sundays there's a market of local designers.", price: "USD 15-30", tip: "News Café on Ocean Drive is open 24 hours and is South Beach's most historic meeting point. For normal prices, walk a block inland from the promenade." },
            { name: "Brickell and the sunset skyline", description: "Miami's financial district, with the city's newest skyscrapers and Brickell City Centre. The walk along Biscayne Bay at sunset offers the city's best skyline.", price: "Free", tip: "The Pérez Art Museum Miami (PAMM) has bay-facing terraces open to everyone — the best free view of the Miami skyline at sunset." },
          ],
        },
        {
          theme: "Wynwood, the Design District, and Miami nightlife",
          activities: [
            { name: "Wynwood Walls", description: "The world's most famous outdoor urban art museum, founded by Tony Goldman in 2009. More than 80 international artists have painted the neighborhood's warehouses with murals that change every year.", price: "Free (exterior) / USD 12 (Wynwood Walls Museum interior)", tip: "Access to the neighborhood streets is free — the indoor museum actually has less to see than the streets. Walk the blocks from NW 25th to 27th to see the best murals." },
            { name: "Artisan coffee shop and gallery in Wynwood", description: "Wynwood has Miami's most artistic cafés, set up in old shops with their own murals. Panther Coffee and Wynwood Kitchen & Bar are favorites of the creative scene.", price: "USD 5-15", tip: "Panther Coffee on NW 24th has Miami's best espresso and is in a building with a Shepard Fairey mural. Get there before noon to find a table." },
            { name: "Design District — luxury and contemporary art", description: "Miami's neighborhood of luxury boutiques and contemporary art galleries. From Gucci to Hermès, from Gagosian to Locust Projects — a mix of consumerism and art that reflects the most exclusive side of Miami.", price: "Free (to enter)", tip: "The Institute of Contemporary Art (ICA Miami) in the Design District has free admission and world-class exhibitions. Open Tuesday through Sunday." },
            { name: "Nightlife in South Beach", description: "South Beach has the most famous nightlife scene in the US. LIV at the Fontainebleau, E11EVEN, and Story are the best-known clubs. Things get going at 11pm and run until 3-4am.", price: "USD 20-50 (cover charge)", tip: "Arrive before 11pm to skip the line and beat the peak cover charge. The dress code is smart casual for men — no shorts or sneakers allowed in the clubs." },
          ],
        },
        {
          theme: "Little Havana and Coconut Grove",
          activities: [
            { name: "Little Havana — Calle Ocho", description: "Miami's Cuban neighborhood, with the energy, coffee, and music of Havana transplanted to Florida. SW 8th Street (Calle Ocho) is the heart, with its Cuban cafeterías, walk-up coffee windows, and domino games at Máximo Gómez Park.", price: "Free", tip: "Cuban coffee (cafecito) from the walk-up window is drunk standing up in 30 seconds — that's the local custom. Order a cortadito if you want something longer. It only costs 50 cents." },
            { name: "Viernes Culturales on Calle Ocho", description: "If it's the last Friday of the month, the monthly Viernes Culturales festival fills Calle Ocho with live music, artists, Cuban food vendors, and street art.", price: "Free", tip: "Versailles Restaurant on SW 8th has served Miami's best Cuban sandwich and ropa vieja since 1971 — have lunch here for the ultimate Cuban dining experience." },
            { name: "Coconut Grove — the bohemian neighborhood", description: "Miami's oldest neighborhood, with houses tucked among tropical trees, the Dinner Key waterfront, and CocoWalk's restaurants and shops. The Vizcaya Museum is the neighborhood's crown jewel.", price: "Free (Vizcaya USD 22)", tip: "Vizcaya, the 1920s Italian-style mansion with gardens over the bay, is Miami's most beautiful under-the-radar spot. The gardens alone are worth the visit." },
            { name: "Sunset at Key Biscayne", description: "The island-park 15 minutes from downtown via the Rickenbacker Causeway. Bill Baggs Cape Florida State Park has Miami's calmest beach and best sunset.", price: "USD 8 (park admission)", tip: "The 1 km trail to the Cape Florida lighthouse at the end of the island has the most beautiful view of Biscayne Bay, with the Miami skyline in the background." },
          ],
        },
      ],
    },
  },

  "buenos-aires": {
    en: {
      city: "Buenos Aires",
      country: "Argentina",
      heroTitle: "4 days in Buenos Aires: tango, asado, and the most European city in the Americas",
      heroSubtitle: "San Telmo, La Boca, Palermo, and the world's best asado — the complete itinerary to fall in love with the Argentine capital.",
      bestMonths: "March to May and September to November",
      budget: "$50-100 USD/day",
      travelTips: [
        "Argentina's exchange rate can vary — check the monetary situation before your trip and look into the legal exchange options available",
        "Buenos Aires is a night-owl city — dinners start at 9pm and milongas at 11pm. Adjust your schedule or you'll show up to empty restaurants",
        "Public transport (subway + buses) is efficient and very cheap — load a SUBE card at any kiosk",
        "Argentine asado is eaten at 1pm (midday) or 9pm — don't expect to eat asado at 7pm like in Europe",
        "The safe neighborhoods for tourists are Palermo, Recoleta, San Telmo, and Puerto Madero — avoid walking alone at night through unfamiliar neighborhoods",
      ],
      days: [
        {
          theme: "San Telmo and the historic heart",
          activities: [
            { name: "Plaza de Mayo and the Casa Rosada", description: "Buenos Aires's political center, home to the Executive Branch since 1873. The balcony where Evita addressed the people is visible from the square. The Metropolitan Cathedral holds General San Martín's tomb.", price: "Free", tip: "On Thursdays at 3:30pm the Madres de Plaza de Mayo hold their historic march around the central obelisk — a living testament to Argentine history." },
            { name: "San Telmo neighborhood", description: "Buenos Aires's oldest neighborhood, with cobblestone streets, 19th-century colonial houses, art galleries, and Argentina's most famous antiques market. On Sundays there's a fair running the length of Defensa street.", price: "Free", tip: "The Sunday fair on Defensa street (10am-6pm) is Buenos Aires's best free plan. The antique dealers, street musicians, and spontaneous tango dancers are all part of the show." },
            { name: "Lunch at the San Telmo Market", description: "The covered market, open since 1897, with aisles of artisan butchers, delis, produce stands, and bars serving everything from empanadas to cocktails. The 19th-century iron-and-glass architecture is impressive.", price: "$15-25 USD", tip: "La Americana's empanadas are Buenos Aires's most classic. The counter at Bar El Federal, across from the market, has the neighborhood's best coffee and pastries." },
            { name: "Tango show in San Telmo", description: "San Telmo is the birthplace of Porteño tango. Shows at El Viejo Almacén, La Ventana, or the Centro Cultural Borges combine dinner, a professional performance, and the history of tango.", price: "USD 60-100 (dinner + show)", tip: "For authentic tango (not a tourist show), look for neighborhood milongas: Club Almagro, Confitería Ideal, or La Viruta have milongas from USD 10-15." },
          ],
        },
        {
          theme: "La Boca, Puerto Madero, and the river",
          activities: [
            { name: "La Boca and the Caminito", description: "The colorful port neighborhood where corrugated-metal houses are painted in bright colors — a legacy of the 19th-century Genoese immigrants who used leftover paint from the port. Boca Juniors' stadium (La Bombonera) is 200 meters away.", price: "Free", tip: "The Caminito is touristy and prices double there — eat and shop a couple of blocks west for normal prices. Avoid carrying visible valuables." },
            { name: "La Bombonera — Boca's museum and stadium", description: "Latin America's most famous stadium, home to Boca Juniors. The museum tour includes the locker rooms, the stands, and Maradona memorabilia. The matchday experience at La Bombonera is almost religious.", price: "Tour USD 20 / Match USD 30-80", tip: "A Boca home match is one of the most intense experiences in world sport. Only buy tickets on the official website — resellers are expensive and risky." },
            { name: "Puerto Madero — the newest neighborhood", description: "Buenos Aires's old port docks, converted into the city's most modern, exclusive neighborhood. Santiago Calatrava's Puente de la Mujer is the architectural landmark.", price: "Free", tip: "The Costanera Sur Ecological Reserve, right next to Puerto Madero, has 360 hectares of nature 5 minutes from downtown — a perfect green escape in the city." },
            { name: "Asado dinner at a Porteño parrilla", description: "The Argentine parrilla is a culinary institution. Short ribs (asado de tira), flank steak (vacío), chorizo, and sweetbreads are the cuts that set Buenos Aires apart from the rest of the world.", price: "USD 20-40", tip: "Don Julio (Palermo), La Brigada (San Telmo), and El Pobre Luis (Belgrano) are Buenos Aires's three most acclaimed parrillas. Book days ahead." },
          ],
        },
        {
          theme: "Recoleta and European Buenos Aires",
          activities: [
            { name: "Recoleta Cemetery", description: "One of the most famous cemeteries in the world, with 6,400 vaults and 94 monuments of historical interest. Eva Perón's tomb is the main draw among the sculptures and neoclassical architecture.", price: "Free", tip: "The free guided tour (in English and Spanish) departs at 11am on Tuesdays and Thursdays from the entrance. Evita's tomb is on Familia Duarte street — grab a map at the entrance." },
            { name: "Recoleta Fair and the National Museum of Fine Arts", description: "The crafts fair facing the cemetery has more than 200 local artisans selling jewelry, leather goods, ceramics, and prints. The Museum of Fine Arts (free) holds the region's most important collection of Latin American art.", price: "Free", tip: "The Recoleta fair runs on weekends (10am-7pm). On weekdays, the Álvear gardens are the most elegant spot in Buenos Aires for an outdoor coffee." },
            { name: "Avenida Alvear and its belle époque palaces", description: "Buenos Aires's most elegant street, with the most sumptuous palaces of the 20th century: the Alvear Palace Hotel, the Palacio Alzaga Unzué, and the mansions of landowning families.", price: "Free", tip: "The Alvear Hotel's lobby is one of the jewels of exclusive Buenos Aires — going in for afternoon tea (USD 25) is an experience worth the price." },
            { name: "Cocktails in Palermo Soho", description: "Buenos Aires's hippest neighborhood, with craft cocktail bars, chef-driven restaurants, and the city's highest concentration of emerging design. Florería Atlántico and Tres Monos are the most acclaimed bars.", price: "USD 5-12 per cocktail", tip: "Florería Atlántico (one of the world's best bars) is a flower shop upstairs with a speakeasy bar below — knock on the walk-in fridge door." },
          ],
        },
        {
          theme: "Palermo and the green city",
          activities: [
            { name: "Bosques de Palermo and the Rosedal", description: "Buenos Aires's great park, comparable to Central Park, with the Rosedal (a rose garden with 18,000 rose bushes), the Planetarium, and the Japanese Garden. Sundays are Porteño family day in the park.", price: "Free (Japanese Garden $500 ARS)", tip: "Rent a bike in the park to explore the 25 km of bike paths. The choripán carts at the park's north entrance serve the most authentic chori in Buenos Aires." },
            { name: "Brunch in Palermo Hollywood", description: "The Palermo Hollywood area has Buenos Aires's best brunch scene, with specialty coffee shops, avocado toast, and brunch menus from around the world. Avenida Arcos is the epicenter.", price: "USD 10-20", tip: "Café Martínez has Palermo's best butter medialunas — the most Argentine breakfast there is. Specialty coffee shops like Lattente have the city's best coffee." },
            { name: "MALBA — Museum of Latin American Art", description: "The continent's most important museum of contemporary Latin American art, with works by Frida Kahlo, Tarsila do Amaral, Xul Solar, and Antonio Berni. The glass-and-steel building is itself a work of art.", price: "USD 7", tip: "Wednesdays have discounted admission and free art-house cinema. The permanent collection (3rd floor) holds the 200 best works of 20th-century Latin American art." },
            { name: "Villa Crespo Fair and farewell", description: "The emerging-design market of Buenos Aires's young designers, with independent clothing, accessories, art, and the city's best local vibe. Street food at the Mercado de las Pulgas is perfect for your last afternoon.", price: "Free (shopping not included)", tip: "The Mercado de las Pulgas in Colegiales (Dorrego and Alvarez Thomas) is young Porteños' favorite Sunday plan — antiques, design, and live DJs." },
          ],
        },
      ],
    },
  },

  "rio-de-janeiro": {
    en: {
      city: "Rio de Janeiro",
      country: "Brazil",
      heroTitle: "4 days in Rio de Janeiro: Christ the Redeemer, Copacabana, and samba",
      heroSubtitle: "Christ the Redeemer, Sugarloaf Mountain, Ipanema's beaches, and football at the Maracanã — the marvelous city in four perfect days.",
      bestMonths: "May to October (dry season)",
      budget: "R$200-400/day (~$40-80 USD)",
      travelTips: [
        "Safety in Rio requires caution: don't take your phone out on the street, use taxis/Uber instead of long walks at night",
        "The South Zone beaches (Copacabana, Ipanema, Leblon) are the safest for tourists",
        "App-based transport (Uber, 99) is safer than street taxis — always use it for nighttime trips",
        "The original caipirinha is made with cachaça (not vodka) and limão (Brazilian lime) — always order the classic version",
        "Exchange dollars for reais at airport exchange offices or downtown agencies — hotels give worse rates",
      ],
      days: [
        {
          theme: "Christ the Redeemer and the South Zone",
          activities: [
            { name: "Christ the Redeemer — first thing in the morning", description: "One of the 7 Wonders of the Modern World, 710 meters above sea level on the Corcovado. The 38-meter figure spreads its arms over the entire city. The view of Guanabara Bay, Sugarloaf, and the beaches from above is unmatched.", price: "R$87 (cog train + admission)", tip: "Book the train on the official Corcovado train site. 8am has the best visibility and the fewest visitors. Cloudy days leave you seeing nothing." },
            { name: "Santa Teresa neighborhood", description: "Rio's bohemian neighborhood, on the slopes of the Corcovado, with restored colonial houses, art galleries, the electric bondinho tram, and some of the city's best restaurants.", price: "Free", tip: "Largo do Guimarães is the neighborhood's heart, with bars and restaurants in colonial houses. Art galleries are open Tuesday through Sunday." },
            { name: "Ipanema Beach", description: "Rio's most famous, chic beach, immortalized by Bossa Nova. Each section has its own crowd (postos 9 and 10 for young Cariocas, posto 8 for the LGBT community). Beach football and volleyball are the sport of choice.", price: "Free", tip: "Chairs and umbrellas on the beach belong to vendors and cost extra (R$20-30). Buy coconut water straight from the stalls on the sand." },
            { name: "Sunset at Arpoador", description: "The rock between Ipanema and Copacabana where Cariocas gather every evening to applaud the sunset. The moment the sun touches the horizon and everyone claps is one of the most beautiful urban rituals in the world.", price: "Free", tip: "Arrive 30 minutes before sunset to get a good spot on the rock. The collective applause is spontaneous and genuine — one of the most Carioca moments you can experience." },
          ],
        },
        {
          theme: "Sugarloaf and Copacabana",
          activities: [
            { name: "Sugarloaf Mountain — cable car", description: "The iconic 396-meter peak over Guanabara Bay. The cable car goes up in two stages: first to Morro da Urca (215m), then to the summit of Sugarloaf. The views of Rio from above are spectacular.", price: "R$160", tip: "The best time is sunset (same R$160 price), when Christ the Redeemer lights up and the bay shimmers with a thousand reflections. Mornings have better visibility — decide based on the weather." },
            { name: "Urca neighborhood and lunch", description: "Rio's quietest, most residential neighborhood, at the foot of Sugarloaf. The stalls along the Boulevard Olímpico serve the best bolinhos de bacalhau and caipirinha with a bay view.", price: "R$30-60", tip: "Bar Circo da Urca has the neighborhood's prettiest terrace, with a direct view of the mountain. Order a caipirinha de limão — the original Brazilian version, not strawberry." },
            { name: "Copacabana Beach", description: "Brazil's most famous beach, 4 km of sand bordered by the wave-patterned Portuguese stone mosaic. Forte de Copacabana at the southern tip offers the beach's best lookout.", price: "Free", tip: "The street vendors selling mate gelado (cold herbal iced tea), coconut water, and biscoito globo are an unmissable part of the Carioca beach experience." },
            { name: "Samba in Lapa", description: "Lapa is Rio's samba neighborhood, with the Arcos da Lapa as its backdrop. Bars and clubs like Carioca da Gema and Rio Scenarium have live samba from 8pm on, Thursday through Saturday.", price: "R$20-40 (minimum spend)", tip: "Rio Scenarium has three floors packed with antiques and live samba — one of the most beautiful bars in the world. Arrive before 9pm to skip the line." },
          ],
        },
        {
          theme: "Favela, the Maracanã, and Carioca cuisine",
          activities: [
            { name: "Tour through Vidigal or Rocinha favela", description: "Rio's favelas aren't just TV news segments — they're living communities with history, food, and art. Guided tours to Vidigal or Rocinha are organized to benefit the community.", price: "R$80-150 (guided tour)", tip: "Only take the tour with certified operators (Favela Reality, RioLIVE). Never go in alone. The view from the top of Vidigal over the sea is just as impressive as the one from Sugarloaf." },
            { name: "Feijoada lunch downtown", description: "Feijoada is Brazil's national dish: a black bean stew with ribs, sausage, and pork belly, served with rice, farofa, sautéed collard greens, and orange slices. Saturday is the traditional day for it.", price: "R$45-80", tip: "Bar do Mineiro in Santa Teresa and Jobi in Leblon serve Rio's best feijoada. The portions are huge — two people can share one." },
            { name: "Maracanã Stadium — tour or match", description: "Latin America's most famous stadium and a symbol of Brazil, with capacity for 78,000 people. The tour shows the locker rooms, the trophy room, and the presidential box. If there's a match on, the experience is unmatched.", price: "R$70 (tour) / R$50-300 (match)", tip: "Flamengo and Fluminense matches at the Maracanã have the best atmosphere. Buy tickets on the club's official site — resellers charge 3x." },
            { name: "Dinner in Leblon — the most elegant neighborhood", description: "Leblon has the highest concentration of world-class restaurants in Rio. The range goes from rodízios (all-you-can-eat Brazilian-style barbecue) to chef Thomas Troisgros's top restaurants.", price: "R$80-200", tip: "A meat rodízio at Porcão or Fogo de Chão is Brazil's most representative dining experience — grilled meat that keeps coming until you flip the little card to red." },
          ],
        },
        {
          theme: "Jardim Botânico and Rio's green soul",
          activities: [
            { name: "Jardim Botânico", description: "Rio's botanical garden, founded by Dom João VI in 1808, with 30-meter imperial palms, giant water lilies, and the world's largest bromeliad collection. Its 6,500 species across 54 hectares form a green oasis.", price: "R$30", tip: "The imperial palm avenue at the entrance is the garden's most iconic photo. Marmoset monkeys and agoutis are common — walk slowly to spot them." },
            { name: "Lagoa Rodrigo de Freitas and the bike path", description: "The lagoon in the heart of Rio's South Zone, ringed by a 7 km bike path with views of Christ the Redeemer, the Corcovado, and the Ipanema and Leblon neighborhoods.", price: "Free (bike rental R$15/hour)", tip: "Kiosk 7 at the Lagoa (Guimas) has the best view and the best caipirinhas on the shore. On Sundays there's a flea market with antiques." },
            { name: "Parque Lage — the mansion in the forest", description: "The park at the foot of the Corcovado, with a neoclassical mansion surrounded by Atlantic Forest. It now houses a visual arts school, and the courtyard café with garden views is perfect for the afternoon.", price: "Free", tip: "Parque Lage is the starting point for the hiking trail up to Christ the Redeemer — a 2-hour climb through the Atlantic Forest. A guide is recommended." },
            { name: "One last caipirinha on the Ipanema shore", description: "The perfect farewell to Rio: a caipirinha at the kiosks on the Ipanema shore as the sun sets behind Morro Dois Irmãos and Cariocas applaud the sunset once more.", price: "R$15-25", tip: "Morro Dois Irmãos in the background of Ipanema, with the sun setting behind it, is Rio's most beautiful postcard image. The shore kiosks serve cold coconut water and the best cashew-fruit caipirinha." },
          ],
        },
      ],
    },
  },

  bangkok: {
    en: {
      city: "Bangkok",
      country: "Thailand",
      heroTitle: "4 days in Bangkok: golden temples, floating markets, and street food",
      heroSubtitle: "The Grand Palace, Wat Pho, Chatuchak, and Asia's most vibrant street food — the perfect itinerary for a first trip to Thailand.",
      bestMonths: "November to February",
      budget: "$40-80 USD/day",
      travelTips: [
        "The BTS Skytrain and MRT Metro cover the main tourist areas — avoid taxis during rush hour (8-9am and 5-7pm)",
        "The Thai baht is very stable — carry cash for local transport and street food, which don't take cards",
        "Always take off your shoes before entering a temple or someone's home — it's a very serious cultural norm",
        "Rainy season (June-October) brings daily torrential downpours, mostly in the late afternoon — it doesn't affect tourism much",
        "Taxi drivers often don't speak English — have your address written in Thai or show the Google Maps pin",
      ],
      days: [
        {
          theme: "Bangkok's great temples",
          activities: [
            { name: "Grand Palace and Wat Phra Kaew", description: "Thailand's most sacred complex, built in 1782 and home to the Emerald Buddha (the country's most revered). The golden structures and the Ramakien murals in the cloisters are masterpieces of Thai art.", price: "฿500", tip: "Arrive when it opens at 8:30am to avoid the crowds and the heat. Admission also includes Vimanmek Mansion. Dress code is mandatory: shoulders and knees covered — clothing is lent at the entrance." },
            { name: "Wat Pho — the Reclining Buddha", description: "Bangkok's oldest temple (16th century) houses Thailand's largest Reclining Buddha: 46 meters long, covered in gold leaf. It's also the official home of traditional Thai massage.", price: "฿200", tip: "Traditional Thai massage at the temple's schools costs ฿420 an hour — the most authentic, affordable in Bangkok. Book on-site." },
            { name: "Street-side pad thai lunch", description: "The street stalls around Wat Pho and Tha Tien pier are some of Bangkok's most famous. Pad thai, khao pad (fried rice), and tom yum make the perfect lunch.", price: "฿50-80", tip: "Look for stalls with lines of locals — a foolproof sign of quality. Thip Samai on Maharaj Rd has served Bangkok's most famous pad thai since 1966." },
            { name: "Wat Arun — the Temple of Dawn", description: "The temple on the Chao Phraya River, its main prang covered in porcelain fragments that shimmer in the sun. Reachable by boat across the river from Tha Tien pier (฿5).", price: "฿100", tip: "The best time is sunset, when the golden light lights up the porcelain mosaics. Climb to the second level of the prang for views over the river." },
          ],
        },
        {
          theme: "Markets, canals, and authentic Bangkok",
          activities: [
            { name: "Damnoen Saduak Floating Market", description: "Thailand's most photogenic floating market, 100 km from Bangkok. Vendors in boats loaded with tropical fruit, pad thai, and yellow curry navigate 19th-century canals.", price: "Tour ฿700-1,000 (from Bangkok)", tip: "Leave before 6:30am to arrive by 8am, when it's busiest. The boat ride back through the canals is as interesting as the market itself." },
            { name: "Chinatown (Yaowarat)", description: "Bangkok's Chinatown, active since 1782, has the densest food streets in the city. Grilled seafood, Chinese roast duck, and dim sum are the neighborhood's specialties.", price: "฿60-150", tip: "Yaowarat Rd at night (from 6pm on) becomes Bangkok's best street market. By day, the spice and medicinal herb shops are fascinating." },
            { name: "Khlong Saen Saeb — Bangkok's canals", description: "The express boat system running through Bangkok's canals — the fastest, cheapest way to get around downtown. The khlongs (canals) show the original waterborne Bangkok that existed before the highways.", price: "฿15-20 per leg", tip: "Use the Khlong Saen Saeb boats as real transport, not a tour. Board at Pratunam and reach Chit Lom in 10 minutes, no traffic." },
            { name: "Khao San Road and backpacker nightlife", description: "Southeast Asia's most famous street for independent travelers, with bars, live music, tattoo artists, street masseuses, and Bangkok's best selection of late-night food.", price: "฿50-100 (food and drinks)", tip: "The fried scorpions and bugs on Khao San are for adventurous tourists — crickets and silkworms are what Thais actually eat. The pad see ew from the stalls at the end of the street is the best." },
          ],
        },
        {
          theme: "Chatuchak and Bangkok shopping",
          activities: [
            { name: "Chatuchak Market", description: "The world's largest weekend market, with 15,000 stalls and 200,000 visitors every week. Clothes, antiques, exotic animals, art, plants, and food in a 35-hectare maze.", price: "Free (shopping not included)", tip: "A market map is available at the entrance — absolutely necessary. Sections 1-5 have antiques; 7-27 have fashion and clothing; section 26 has the best street food." },
            { name: "Terminal 21 — the airport-themed mall", description: "A unique mall where each floor is themed after a different city's airport (Tokyo, Istanbul, San Francisco). The basement food court is one of the best and cheapest in Bangkok.", price: "Free (to enter)", tip: "Terminal 21's food court has Thai dishes from ฿50-100. It's the cheapest air-conditioned lunch in downtown Bangkok." },
            { name: "MBK Center and electronics", description: "Bangkok's department store famous for electronics, local clothing, and Thai food. The 4th floor has the city's largest concentration of accessories and secondhand electronics.", price: "Free (to enter)", tip: "MBK's food court floor has downtown's cheapest Thai food — pad thai for ฿60, mango sticky rice for ฿80." },
            { name: "Dinner on Sukhumvit Soi 11 and nightlife", description: "Bangkok's most cosmopolitan street, with a mix of international restaurants, rooftop bars, and the city's most international nightlife. Levels, Demo, and Hard Rock Cafe are all on this strip.", price: "฿150-500", tip: "Pat Pong Night Market (soi 4-5) has more than a hundred stalls of clothes and souvenirs with a nighttime atmosphere. Always negotiate — the asking price is double the real one." },
          ],
        },
        {
          theme: "Alternative temples and farewell",
          activities: [
            { name: "Wat Benchamabophit — the Marble Temple", description: "Bangkok's most photogenic temple, built in 1900 with Italian Carrara marble. The 52 bronze Buddhas in the cloister and the canal in front of the temple make it especially serene.", price: "฿50", tip: "The best photo is from the stone bridge, with the temple reflected in the canal behind it. 9am has the best light and fewer tourists." },
            { name: "Jim Thompson House", description: "The home of the American businessman who revived Thailand's silk industry in the 1950s. Six traditional Thai teak houses joined together form one of Bangkok's most elegant spaces.", price: "฿200 (guided tour included)", tip: "Jim Thompson mysteriously disappeared in Malaysia in 1967 — guides tell the story in great detail. The tour is only offered in English/French/Japanese." },
            { name: "Farewell spa and Thai massage", description: "Bangkok has some of the best, cheapest spas in Asia. A 2-hour massage at a quality spa (not one on Khao San Road) costs ฿800-1,500 and includes a full-body massage and reflexology.", price: "฿600-1,500", tip: "Health Land and Divana are trusted chains with several locations in Bangkok. Book 2 hours ahead during high season." },
            { name: "Sky Bar Lebua — the world's highest bar", description: "The bar at the Lebua State Tower hotel, 220 meters up, famous for appearing in The Hangover Part II. The view of the Chao Phraya and Bangkok's skyline at sunset is unmatched.", price: "฿600-900 (cocktails)", tip: "Book a table in advance — it's one of the most sought-after bars in the world. Dress code is mandatory: no sandals, shorts, or sleeveless shirts." },
          ],
        },
      ],
    },
  },

  marrakech: {
    en: {
      city: "Marrakech",
      country: "Morocco",
      heroTitle: "3 days in Marrakech: the red city that awakens every sense",
      heroSubtitle: "Jemaa el-Fna square, labyrinthine souks, the Majorelle Garden, and dreamy riads — the essential itinerary for a first trip to Morocco.",
      bestMonths: "March to May and October to November",
      budget: "$50-100 USD/day",
      travelTips: [
        "Hire an official guide for the souks (100-150 MAD/hour) — it'll keep you from getting lost and from being steered into commission shops",
        "The Moroccan dirham can't be exchanged outside Morocco — bring some cash to start and exchange more at the airport or downtown exchange offices",
        "Dress modestly in the medina — shoulders and knees covered is the norm for both men and women, and will help you avoid unwanted attention",
        "Photos of people require permission — the square's performers and vendors expect payment for photos (10-20 MAD)",
        "Tap water isn't safe to drink — always drink bottled water and avoid ice in juice from street stalls",
      ],
      days: [
        {
          theme: "The medina and the heart of Marrakech",
          activities: [
            { name: "Jemaa el-Fna square in the morning", description: "The heart of Marrakech, a UNESCO World Heritage site. In the morning it's a quiet market with orange juice stands, henna artists, and snake charmers. By evening it transforms into one of the most chaotic, fascinating shows in the world.", price: "Free (services not included)", tip: "Fresh orange juice in the square costs 4-5 MAD — Marrakech's most iconic breakfast. Don't accept 'free tours' from strangers who approach you." },
            { name: "The medina's souks", description: "The maze of medieval markets where each street belongs to a specialized guild: spice souks, leather, bronze, ceramics, textiles, and babouches. The Souk des Teinturiers (leather dyers) is the most photogenic.", price: "Free (shopping not included)", tip: "A local guide (100-150 MAD) saves you hours of walking in circles and takes you to the real workshops. Without one, any directions you're given will lead to some acquaintance's shop." },
            { name: "Lunch on a medina rooftop terrace", description: "Riad rooftop terraces above the medina serve tagines, kefta, and harira with views of the minarets. Café de France and Le Foundouk have the best views over the square.", price: "50-100 MAD", tip: "Lamb tagine with prunes and almonds (msir) is Marrakech's most representative dish. Eat where you see Moroccans eating, not where the 'guides' take you." },
            { name: "Jemaa el-Fna at sunset — the great spectacle", description: "From 5pm on, the square transforms: hundreds of food stalls, Gnawa musicians, storytellers, acrobats, and fire dancers fill every square meter.", price: "Free (food 20-40 MAD)", tip: "The square's food stalls (numbered 1-150) compete on price — they all display a visible menu. Pick the one with the most locals and ask the price BEFORE sitting down." },
          ],
        },
        {
          theme: "Palaces, the Majorelle Garden, and a hammam",
          activities: [
            { name: "Bahia Palace", description: "The 19th-century palace of Grand Vizier Ba Ahmed, with 150 rooms, courtyards of orange and cedar trees, carved cedar ceilings, and Morocco's finest wooden latticework (mashrabiyya).", price: "70 MAD", tip: "The palace is more impressive than people expect. The Vizier's reception room has the most elaborate cedar ceiling you'll ever see." },
            { name: "Saadian Tombs", description: "The 16th-century mausoleums where the sultans of the Saadian dynasty are buried, rediscovered in 1917 after centuries sealed off. The burial chambers, with their tile and stucco niches, are extraordinarily beautiful.", price: "70 MAD", tip: "The space is small and visitors flow through constantly — arrive at opening time to see the Hall of Twelve Columns without a crowd." },
            { name: "Majorelle Garden and the Berber Museum", description: "The garden created by French painter Jacques Majorelle in 1923, rescued by Yves Saint Laurent. The pavilion's cobalt blue (Majorelle Blue), the cacti, and the museum's Berber collection form a colorful oasis.", price: "150 MAD (garden + museum)", tip: "The garden is very crowded from 10am to 4pm — arrive at 2pm, when many tourists are having lunch, to find fewer people." },
            { name: "Traditional hammam", description: "The centuries-old Arab bathhouse is an essential part of Moroccan culture. Neighborhood hammams (10-30 MAD) are for locals; touristy ones offer more elaborate treatments with ghassoul clay and argan oil.", price: "Local hammam 20 MAD / touristy 150-300 MAD", tip: "Hamam Dar el Bacha and the Hammam de la Mosquée Mouassine are the most authentic in the center. Bring flip-flops and your own towel if you go to a neighborhood one." },
          ],
        },
        {
          theme: "Excursion to the Atlas Mountains and back to the medina",
          activities: [
            { name: "Excursion to the Ouzoud Falls", description: "North Africa's largest waterfalls, 150 km from Marrakech, dropping 110 meters over tufa rock. The drive through the Atlas and its Berber villages is as interesting as the destination itself.", price: "Tour €25-40 (from Marrakech)", tip: "Organized full-day tours include transport and lunch in the village. Spring (March-May) has the highest water flow — spectacular." },
            { name: "Berber lunch in the Atlas", description: "Restaurants in the Atlas's Berber villages serve chicken tagine with olives and preserved lemon, vegetable couscous, and harira, on terraces with mountain views.", price: "80-120 MAD", tip: "Berber khobz bread, baked in a clay oven, is the best accompaniment to tagine. Roadside restaurants full of local customers are the most authentic." },
            { name: "Return, and an afternoon of shopping in the souks", description: "Your last afternoon is ideal for finishing up any shopping in the medina's souks. Spices (ras el hanout, harissa), argan oil, brass lamps, and Berber rugs make the best souvenirs.", price: "Depends on purchases", tip: "The final haggled price is usually 40-50% of the asking price. If the seller drops the price quickly, you can push lower. Never start haggling if you have no intention of buying." },
            { name: "Last night on a Jemaa el-Fna rooftop terrace", description: "The perfect way to say goodbye to Marrakech is from the terraces of Café de France or Le Grand Balcon Café Glacier, watching the square light up and fill with people at dusk.", price: "30-50 MAD (mint tea)", tip: "Moroccan mint tea (thé à la menthe) is poured from height to create foam — it's a ritual. Asking for it to be poured from up high is completely normal and expected." },
          ],
        },
      ],
    },
  },

  dubai: {
    en: {
      city: "Dubai",
      country: "United Arab Emirates",
      heroTitle: "4 days in Dubai: from the Burj Khalifa to the desert",
      heroSubtitle: "The Burj Khalifa, Dubai Mall, a desert dune safari, and the historic souks — the itinerary that blends the future with Arab tradition.",
      bestMonths: "October to April",
      budget: "$200-400 USD/day",
      travelTips: [
        "Taxis and the metro (Dubai Metro) are the most practical ways to get around — the metro reaches most tourist destinations",
        "Dress modestly at the souks, mosques, and public places — shoulders and knees should be covered in historic Deira",
        "Alcohol is only served at licensed hotels and restaurants — it's completely banned in public spaces",
        "The heat is extreme from May to September (45°C+/113°F+) — plan air-conditioned activities during those months",
        "The local currency is the Dirham (AED) — nearly everything accepts cards, but cash is useful in the historic souks",
      ],
      days: [
        {
          theme: "Modern Dubai: the Burj and Downtown",
          activities: [
            { name: "Dubai Mall and the Aquarium", description: "The world's largest shopping mall, with 1,200 stores, a 10-million-liter aquarium, and an Olympic-size ice rink. It's the most-visited leisure destination on the planet, with 100 million visits a year.", price: "Free (to enter) / AED 130 (aquarium)", tip: "The aquarium has the world's largest glass panel — you can see it from outside, in the mall, for free. The inside is worth it if you have the time." },
            { name: "Burj Khalifa — At the Top", description: "The world's tallest building, at 828 meters. The 'At The Top' observation deck on the 124th floor offers views more than 80 km out on clear days.", price: "AED 149 (124th floor) / AED 499 (148th floor)", tip: "Book online and pick the 11:30am slot to see Dubai by daylight. Sunset slots are in high demand and cost more. The 124th floor has the best photos." },
            { name: "Dubai Fountain and lunch", description: "The world's largest fountain system, facing the Burj Khalifa. The nighttime shows are the most spectacular, but even by day the scale is impressive. The area has dozens of restaurants with views.", price: "Free (fountains) / AED 60-150 (restaurants)", tip: "The nighttime fountain show starts at 6pm and repeats every 30 minutes. The best angle is from the lakeside promenade at Dubai Mall." },
            { name: "Nighttime fountain show and dinner in Downtown", description: "The nighttime fountain show, synchronized to Arabic and classical music, is one of Dubai's most moving experiences. The restaurants along the Dubai Fountain Boardwalk have the best tables.", price: "Free", tip: "Book dinner at Zuma or Pierchic with a Burj view for your first night — the experience is stunning even if the price is steep." },
          ],
        },
        {
          theme: "Classic Dubai: the Creek, souks, and the historic quarter",
          activities: [
            { name: "Al Fahidi Historical Neighbourhood", description: "Dubai's 19th-century historic quarter, with coral-and-mud houses, wind towers (barjeel) for natural ventilation, and the Dubai Museum. The contrast with the skyscrapers in the background is unique.", price: "Dubai Museum AED 3", tip: "The Dubai Museum is the cheapest in the city and one of the most informative — AED 3 to see the history of a fishing village that became a megacity." },
            { name: "Abra ride on Dubai Creek", description: "Abras are the traditional wooden boats that have crossed the creek for centuries. The 5-minute ride from Deira to Bur Dubai costs 1 AED and is the city's most authentic, photogenic form of transport.", price: "AED 1", tip: "Take the classic wooden abra (not the modern motorized version) — they depart from the Al Seef dock. The ride down the creek with wooden dhows in the background is wonderful." },
            { name: "Gold Souk and Spice Souk", description: "The Gold Souk has more than 300 jewelry shops with 10 tons of gold on display. The adjacent Spice Souk has Iranian saffron, Arabian incense, ras el hanout, and spices from all over the world.", price: "Free (shopping not included)", tip: "Haggling is expected and standard practice at the souks. Offer 60% of the asking price and you'll land somewhere reasonable in between. Gold is sold at the market rate, no haggling." },
            { name: "Dinner on a dhow along the Creek", description: "Traditional wooden dhows converted into floating restaurants offer a buffet dinner while cruising the illuminated Creek. The view of the skyscrapers and mosques from the water is spectacular.", price: "AED 120-200", tip: "There are dozens of dhow cruises — the standard price includes a buffet dinner. Book at the Al Seef dock in the afternoon for the 8:30pm slot." },
          ],
        },
        {
          theme: "Desert safari: dunes, camels, and stars",
          activities: [
            { name: "Pickup for the Desert Safari", description: "Dubai's desert safaris head out to the Al Lahbab dunes in 4x4s. Dune bashing (racing over the dunes in a 4x4) is the most adrenaline-fueled part of the experience.", price: "AED 200-300 (full tour)", tip: "Choose a reputable operator like Arabian Adventures or Orient Tours. Very cheap prices usually mean lower-quality dinner and shows." },
            { name: "Dune bashing and sunset on the dunes", description: "High-speed runs down 100-meter dunes in a 4x4 Land Cruiser. The sunset from atop the Al Lahbab dunes, with the desert stretching to the horizon, feels unreal.", price: "Included in the tour", tip: "If you're prone to motion sickness, take dramamine beforehand. The drivers are professionals with years of experience — let them choose the difficulty level." },
            { name: "Bedouin camp: camels and henna tattoos", description: "The desert camp includes a camel ride, henna tattoos, belly dancing, and archery. A buffet dinner of Arabic food (kharouf, mezze, shisha) under the desert stars.", price: "Included in the tour", tip: "The camel ride only lasts 5-10 minutes, but the photo lasts a lifetime. Ask your guide to shoot the photo from below so the whole camel is in frame." },
            { name: "Belly dance and Tanoura show", description: "The Tanoura dance (a whirling Sufi dancer in colorful skirts) and belly dancing are the shows included with the camp dinner. The performance under the desert's starry sky is unforgettable.", price: "Included in the tour", tip: "The stars in the Arabian desert are spectacular — bring a stargazing app to identify constellations from the camp's total darkness." },
          ],
        },
        {
          theme: "Palm Jumeirah and modern Dubai",
          activities: [
            { name: "Atlantis The Palm — Aquaventure", description: "The water park at the Atlantis hotel on Palm Jumeirah, with 16 hectares of slides, artificial waves, and a zone with manta rays and sharks. One of Dubai's most adrenaline-packed experiences.", price: "AED 395", tip: "Book online for an early discount. The 'Tower of Neptune' slide (a 27-meter free fall) is the most extreme. Arrive at 9:30am before the lines build up." },
            { name: "The Pointe and views of the Atlantis", description: "The restaurant-and-shop promenade at the tip of the Palm, with the best view of the Atlantis from the water. The Pointe's fountains put on a free nighttime show.", price: "Free", tip: "The Pointe promenade has direct views of the Atlantis silhouette with the Burj Al Arab in the background — the photo of the Palm from here is spectacular." },
            { name: "JBR Beach and The Beach", description: "Jumeirah Beach Residence (JBR) is Dubai's liveliest beachfront promenade, with the city's busiest public beach, waterfront restaurants, and The Beach complex with views of the Burj Al Arab.", price: "Free", tip: "JBR beach is public and free — paid changing rooms and umbrellas are available but not necessary." },
            { name: "Farewell dinner with a view of the Burj Al Arab", description: "Dubai's (and the world's) most iconic hotel is shaped like a dhow's sail. While staying there costs thousands of dollars, you get a perfect view from the Pierchic restaurant or from restaurants on Jumeirah Beach.", price: "AED 100-300 (outside restaurants)", tip: "The best angle of the Burj Al Arab is from Umm Suqeim Beach — 200 meters of public sand facing the hotel, perfect for the photo." },
          ],
        },
      ],
    },
  },

  lisboa: {
    en: {
      city: "Lisbon",
      country: "Portugal",
      heroTitle: "3 days in Lisbon: Alfama, pastéis, and miradouros",
      heroSubtitle: "São Jorge Castle, tram 28, Belém, and nighttime fado — the perfect itinerary to fall in love with the Portuguese capital.",
      bestMonths: "March to May and September to October",
      budget: "€70-120/day",
      travelTips: [
        "The rechargeable Viva Viagem card, loaded with €5-10, covers the metro, trams, and buses — much cheaper than individual tickets",
        "The miradouros (viewpoints) are Lisbon's cheapest, most beautiful activity — there are more than 20 scattered around the city",
        "Uber is very cheap in Lisbon — a convenient alternative to the trams during rush hour",
        "Restaurants with a 'menu do dia' (€9-12 with a drink, dessert, and main course) are the most authentic lunch option",
        "Wear comfortable shoes with good grip — Portuguese cobblestones get slippery in the rain and hard on your feet after a lot of walking",
      ],
      days: [
        {
          theme: "Alfama and the historic heart",
          activities: [
            { name: "São Jorge Castle", description: "The medieval fortress overlooking Lisbon from above, with 360° views over the city, the Tagus River, and the 25 de Abril Bridge. The 11th-century Moorish walls are perfectly preserved.", price: "€15", tip: "Arrive when it opens to see the views without the crowds. Walking up through Alfama's narrow streets is part of the experience — skip the direct taxi." },
            { name: "Alfama neighborhood and Miradouro da Graça", description: "Lisbon's oldest neighborhood, a charming maze of tiled houses, laundry hanging out to dry, and fado echoing out of restaurants. Miradouro da Graça has the best views in the city.", price: "Free", tip: "Getting lost in Alfama is the plan — there's no need to look for a specific route. The narrowest alleys above the Sé cathedral have the most authentic atmosphere." },
            { name: "Cod lunch in Alfama", description: "Portugal has 365 cod recipes (one for every day of the year). Bacalhau à brás, à lagareiro, or com natas are the classics. Alfama's tascas serve the city's most authentic versions.", price: "€10-18", tip: "Look for restaurants without an English menu taped to the door — a sign they're for locals. The daily menu price includes a main dish + dessert + drink." },
            { name: "Tram 28 — the most picturesque route", description: "The iconic yellow tram that climbs and descends Lisbon's hills from Martim Moniz to Prazeres, passing through Alfama, Graça, and Estrela. It's real city transport, not just a tourist ride.", price: "€3 (single ticket)", tip: "Buy the ticket on board with cash or use the Viva Viagem card. The tram is always packed — board at the starting stop to get a seat." },
          ],
        },
        {
          theme: "Belém and the Age of Discovery",
          activities: [
            { name: "Pastéis de Belém", description: "The original pastel de nata bakery, founded in 1837, still using a secret recipe known to only three people. The morning line is long but moves fast.", price: "€1.30 per pastry", tip: "Order them warm with sugar and cinnamon on top, and eat them inside the bakery. The tiled interior room is as special as the pastry itself." },
            { name: "Jerónimos Monastery", description: "The masterpiece of Manueline (Portuguese Gothic) architecture, a UNESCO World Heritage site. The cloister, with stone columns carved to resemble rope and coral, is one of the most impressive spaces in Europe.", price: "€12", tip: "The main church is free and holds the tombs of Vasco da Gama and Luís de Camões. Go in first to take in the building's scale before paying for the cloister." },
            { name: "Belém Tower and the Monument to the Discoveries", description: "Belém Tower (16th century) was the last thing sailors saw as they left and the first as they returned. 300 meters away, the Monument to the Discoveries features the figures of Portuguese explorers.", price: "Tower €6 / Monument €4", tip: "The line for the Tower can be long — the interior is small and only admits small groups. The Monument has a viewpoint at the top overlooking the Tagus that few people bother climbing to." },
            { name: "Fado house in Alfama", description: "Fado is Lisbon's musical soul, recognized as UNESCO Intangible Cultural Heritage. Alfama's fado houses offer dinner with live performances — the city's most authentic experience.", price: "€30-50 (dinner + fado)", tip: "Book ahead at Clube de Fado, Sr. Fado, or Tasca do Chico. Absolute silence is expected during the performance — it's a cultural norm, not just a request." },
          ],
        },
        {
          theme: "Bairro Alto, LX Factory, and the Tagus",
          activities: [
            { name: "Miradouro da Senhora do Monte", description: "Lisbon's highest viewpoint, with panoramic views that take in the Castle, the Tagus, the Cristo Rei on the far bank, and the 25 de Abril Bridge. Less known than Santa Catarina.", price: "Free", tip: "It's a local favorite for weekend brunch. The viewpoint's café serves the best coffee-with-a-view in the city." },
            { name: "LX Factory — the creative market", description: "A 19th-century textile factory turned creative space, with restaurants, bookshops, design studios, and Lisbon's best market on Sundays. The Ler Devagar bookshop, with its hanging bicycles, is a must-see.", price: "Free (shopping not included)", tip: "The Sunday LX Market runs from 11am to 8pm and is the best in Lisbon. Saturdays and Sundays are when the restaurants inside are at their best." },
            { name: "Ribeira das Naus — the Tagus riverfront", description: "The riverside promenade by the naval ministry, where lisboetas relax in wooden hammocks facing the river. A 10-minute walk away, Praça do Comércio offers the best perspective on the mouth of the Tagus.", price: "Free", tip: "The hammocks are free and first-come, first-served. Order a ginjinha (cherry liqueur) from the kiosks along the promenade — Lisbon's most typical drink." },
            { name: "Bairro Alto at sunset", description: "Lisbon's bar and nightlife neighborhood starts buzzing from 6pm on. Small bars with open doors and music spilling into the street make Bairro Alto the city's most authentic night out.", price: "€2-4 per drink", tip: "Bairro Alto's bars usually don't have seating — people drink in the street, glass in hand, moving from bar to bar. It's perfectly normal and safe." },
          ],
        },
      ],
    },
  },

  amsterdam: {
    en: {
      city: "Amsterdam",
      country: "Netherlands",
      heroTitle: "3 days in Amsterdam: canals, museums, and bicycles",
      heroSubtitle: "The Rijksmuseum, the Anne Frank House, Jordaan, and the tulips — the perfect itinerary for a first visit to the Dutch capital.",
      bestMonths: "April to May (tulips) and June to August",
      budget: "€90-150/day",
      travelTips: [
        "Rent a bike from day one — it's the fastest, cheapest, and most local way to get around Amsterdam",
        "Book the Anne Frank House and Van Gogh Museum weeks in advance — they always sell out in high season",
        "Trams cover the whole city; buy a GVB day ticket for €9.50 for unlimited rides",
        "The I amsterdam City Card (€75/24h) includes museums, transport, and a canal cruise — worth it if you're visiting 3+ museums",
        "Watch out for the bike lanes in the street — cyclists have priority over pedestrians and won't slow down",
      ],
      days: [
        {
          theme: "The great museums: Van Gogh and the Rijksmuseum",
          activities: [
            { name: "Rijksmuseum", description: "The Dutch national museum, in the heart of Museumplein. It holds Rembrandt's The Night Watch, Vermeer's The Milkmaid, and more than a million objects from the Dutch Golden Age.", price: "€22.50", tip: "Book online and pick the 9am slot. The Night Watch hangs in the Gallery of Honor on the 2nd floor — view it from the back of the room to appreciate its true scale." },
            { name: "Van Gogh Museum", description: "The world's largest collection of Vincent van Gogh's work, with more than 200 paintings and 500 drawings. Sunflowers, The Bedroom, and the Self-Portrait with Bandaged Ear are all here.", price: "€22", tip: "You need to book weeks ahead in high season. The free audio guide through the museum's app is excellent and covers all the major works." },
            { name: "Vondelpark", description: "Amsterdam's most famous park, with 47 hectares where locals picnic, play music, and ride their bikes. In summer there's free open-air theater.", price: "Free", tip: "Rent a bike from MacBike (€15/day) to get around the whole city — the most local, practical way to explore Amsterdam." },
            { name: "Dinner in De Pijp", description: "Amsterdam's most multicultural, food-focused neighborhood, home to the Albert Cuyp Market (the biggest in the Netherlands), Surinamese and Indonesian restaurants, and the best selection of artisan cafés.", price: "€15-25", tip: "Rijsttafel (Indonesian rice table) is the Netherlands' tastiest colonial legacy — a unique dining experience worth the extra cost." },
          ],
        },
        {
          theme: "History and canals: Anne Frank and Jordaan",
          activities: [
            { name: "Anne Frank House", description: "The hiding place where Anne Frank and her family sheltered from the Nazis between 1942 and 1944. The original diary, the secret bookcase, and the rooms preserved as they were make this one of the most powerful visits in Europe.", price: "€16", tip: "You MUST book online weeks in advance — there are no tickets at the door. The 9am slot is the least crowded." },
            { name: "Jordaan neighborhood and the canals", description: "Amsterdam's most picturesque neighborhood, with 17th-century houses leaning over the canals, art galleries, vintage shops, and the coziest terraces in the city.", price: "Free", tip: "Cross the Prinsengracht and explore the Bloemgracht and Egelantiersgracht — these secondary canals have fewer tourists and more local charm." },
            { name: "Herring lunch at the market", description: "Haring (raw herring with onion and pickles) is the Netherlands' most typical snack. The fresh fish stalls on Jordaan's bridges offer the most authentic experience.", price: "€4-6", tip: "Herring is eaten by holding the piece by the tail and dropping it into your mouth — that's how the Dutch do it. Don't order a single bite, get the whole piece." },
            { name: "Canal boat tour", description: "Amsterdam's 165 canals and 1,753 bridges are a UNESCO World Heritage site. A boat tour shows the city from water level, with perspectives you can't get from land.", price: "€15-20", tip: "The 3pm cruises have better light for photos than the morning ones. Bring a jacket even in summer — the water brings the temperature down." },
          ],
        },
        {
          theme: "Keukenhof (spring) or alternative neighborhoods",
          activities: [
            { name: "Keukenhof (March-May only) or NDSM Wharf", description: "In spring, the Keukenhof gardens, with 7 million tulips in bloom, are one of the most beautiful natural sights in Europe. Out of season, NDSM Wharf is the former shipyard turned creative hub.", price: "Keukenhof €20 / NDSM free", tip: "The direct bus from Schiphol Airport to Keukenhof is the easiest option — no need to go through Amsterdam." },
            { name: "Oud-West neighborhood and Ten Katemarkt", description: "Amsterdam's most authentic neighborhood market, with fresh produce, secondhand clothes, and Mediterranean street food. The cafés on Jan Pieter Heijestraat are the local alternative to the touristy Leidseplein.", price: "Free", tip: "Oud-West is where young locals live — the cafés have wifi, good prices, and a genuinely Dutch atmosphere." },
            { name: "Amsterdam Noord — A'DAM Tower and EYE Film Museum", description: "Across the harbor, Amsterdam Noord has the city's best skyline. The A'DAM Tower has Europe's highest swing on its rooftop, and the EYE Film Museum is one of the city's most photogenic buildings.", price: "Ferry free / A'DAM Tower €17.50", tip: "The ferry from Central Station to Amsterdam Noord is free and takes 5 minutes. It runs every 7-8 minutes, 24 hours a day." },
            { name: "Brouwerij 't IJ — the brewery in the windmill", description: "Amsterdam's most famous craft brewery, set inside an 18th-century windmill by the canal. Its craft beers (Plzen, Zatte, Columbus) are some of the best in the Netherlands.", price: "€3.50-5 per beer", tip: "The little terrace facing the windmill is one of the best sunset spots in the city. Get there before 5pm in summer to grab an outdoor table." },
          ],
        },
      ],
    },
  },

  londres: {
    en: {
      city: "London",
      country: "United Kingdom",
      heroTitle: "4 days in London: the itinerary to not miss anything essential",
      heroSubtitle: "Tower Bridge, the British Museum, Notting Hill, and the West End — with the free museums and the pubs locals actually choose.",
      bestMonths: "May to September",
      budget: "£120-200/day",
      travelTips: [
        "An Oyster Card or contactless card is essential — paying cash on the Tube costs double what a card does",
        "Almost all the major museums are free: British Museum, National Gallery, Tate Modern, V&A, Natural History Museum",
        "Service (tip) isn't included at most restaurants — 10-12% is standard if the service was good",
        "The City shuts down almost entirely on weekends — plan the financial district for weekdays",
        "Download the TfL (Transport for London) app to plan Tube, bus, and DLR routes in real time",
      ],
      days: [
        {
          theme: "Historic London: Tower Bridge and the City",
          activities: [
            { name: "Tower of London", description: "A thousand-year-old fortress founded by William the Conqueror in 1078. It houses the British Crown Jewels, including the Imperial State Crown with 2,868 diamonds. The famous Beefeaters are its only official guides.", price: "£34", tip: "Arrive when it opens to see the Crown Jewels without the crowds. The Beefeaters give free tours included with admission — well worth it." },
            { name: "Tower Bridge", description: "London's most famous bridge, opened in 1894. The indoor exhibition shows off the Victorian machinery that raises the bridge. Walking the glass floor walkway 42 meters above the Thames is impressive.", price: "£14", tip: "The bridge lifts several times a day to let large ships through — check the schedule online to catch it." },
            { name: "Borough Market", description: "London's most famous food market, open since the 13th century. More than 100 stalls of artisan producers, cheeses, meats, street food from around the world, and the best selection of ready-to-eat food in the city center.", price: "£8-15 (lunch)", tip: "Thursday, Friday, and Saturday are when it's in full swing. Roast's pulled pork and Rabot 1745's chocolates are must-tries." },
            { name: "Tate Modern", description: "The contemporary art museum housed in a 20th-century power station, with works by Picasso, Warhol, and Dalí. The view of the Millennium Bridge and St Paul's from room 10 on the 4th floor is free and spectacular.", price: "Free (temporary exhibitions £20)", tip: "The 6th-floor café has the best terrace, with views of the Thames and the cathedral. Perfect for a 4 o'clock tea." },
          ],
        },
        {
          theme: "Imperial London: the British Museum and Bloomsbury",
          activities: [
            { name: "British Museum", description: "The UK's most-visited museum holds 8 million objects: the Rosetta Stone, the Parthenon sculptures, Egyptian mummies, and the Sutton Hoo treasure. Impossible to see it all in one day.", price: "Free", tip: "Arrive at 9am (an hour before it opens to the general public with an online ticket) to see the Rosetta Stone without the crowds. The Great Court is impressive." },
            { name: "Covent Garden", description: "The old market square turned shopping, dining, and entertainment destination. Street performers, restaurants, and the Covent Garden Market with its Victorian iron structures.", price: "Free (shopping and food not included)", tip: "The street performers in the Piazza have to pass a council audition — the standard is very high. The 12:30 performance is usually the best of the day." },
            { name: "National Gallery", description: "Britain's most important collection of European painting, on Trafalgar Square. Van Eyck, Leonardo, Rembrandt, Monet, and Turner are among the museum's 2,300 works.", price: "Free", tip: "Room 30, with the French Impressionists (Monet, Renoir, Seurat), is a local favorite. A selfie in front of the Trafalgar Square lions is mandatory." },
            { name: "A show in the West End", description: "London's theater district has more than 50 active theaters, staging the world's best musicals and plays. Les Misérables, Mamma Mia, and The Phantom of the Opera have run for decades.", price: "£30-100", tip: "Day seats or last-minute standby tickets go on sale at the box office in the morning. You can get good seats for half price." },
          ],
        },
        {
          theme: "Notting Hill, Hyde Park, and Kensington",
          activities: [
            { name: "Portobello Road Market", description: "London's most famous market, running since 1837, with antiques on Saturdays and fruit and flowers all week. Notting Hill's colorful houses make the perfect backdrop.", price: "Free (shopping not included)", tip: "Saturday is the big day, with up to 1,000 antique stalls. Get there before 10am to see the best pieces before they're bought up." },
            { name: "Hyde Park and Kensington Gardens", description: "The two connected royal parks form one of London's largest green lungs. The Serpentine Lake, Speaker's Corner, and the Princess Diana memorial are the most visited spots.", price: "Free", tip: "Rent a folding chair by the Serpentine and watch Londoners go by. Sitting on the grass is free — the chairs cost extra (£2)." },
            { name: "Victoria & Albert Museum", description: "The world's largest museum of design and decorative arts, with fashion, ceramics, jewelry, photography, and furniture collections spanning 5,000 years of human history.", price: "Free", tip: "The inner courtyard with the café and garden is one of the museum's best-kept secrets. Perfect for a Londoner-style lunch break." },
            { name: "Harrods and Knightsbridge", description: "The world's most famous department store, in the heart of Knightsbridge. Even if you don't buy anything, the gourmet food halls, perfume section, and fashion gallery are a visual spectacle.", price: "Free (to enter)", tip: "Harrods' basement food hall is one of the best in the world. You can grab a pastry or tea to go for £5-10 and experience it without spending a fortune." },
          ],
        },
        {
          theme: "Greenwich, the Thames, and farewell",
          activities: [
            { name: "Buckingham Palace and the Changing of the Guard", description: "The official residence of the British royal family. The Changing of the Guard happens at 11am and lasts 45 minutes — a ritual with Army Band music that's worth seeing at least once.", price: "Free (exterior) / £35 (interior, summer only)", tip: "To get a good view of the Changing of the Guard, arrive at 10:30am and position yourself in front of the central gate. Tour groups arrive late and see nothing." },
            { name: "St James's Park", description: "London's oldest royal park, with direct views of the palace, the lake's famous pelicans, and the footbridge with the most photogenic view of Buckingham Palace in London.", price: "Free", tip: "The park's pelicans are descendants of a gift from the Russian tsar in 1664. They're fed at 2:30pm every day by the lake — quite a sight." },
            { name: "Greenwich: the Meridian and the Observatory", description: "Greenwich is home to the Prime Meridian (longitude 0°), the Royal Observatory, and the Cutty Sark, history's most famous tea clipper. Taking a ferry down the Thames to get here is part of the experience.", price: "Ferry £6 / Observatory £18", tip: "You can straddle the Meridian with one foot in each hemisphere for free — the green line is marked on the ground just outside the Observatory." },
            { name: "A traditional pub in Soho", description: "Soho's pubs are London's social heart. The Lamb and Flag (founded in 1623), The Nellie Dean, and the French House have the atmosphere and history no chain can imitate.", price: "£6-8 per pint", tip: "In London you order at the bar — don't wait for table service. A pint of Guinness or a local bitter are the most typical drinks." },
          ],
        },
      ],
    },
  },

  cancun: {
    en: {
      city: "Cancún",
      country: "Mexico",
      heroTitle: "5 days in Cancún and the Riviera Maya: beyond the resort",
      heroSubtitle: "Cenotes, Mayan ruins, white sand beaches, and the Mexican culture that lives on the other side of the lagoon.",
      bestMonths: "December to April",
      budget: "USD 80-200/day",
      travelTips: [
        "Sargassum (seaweed) affects some beaches between May and September — check ahead which beaches are clear",
        "ADO buses are comfortable and affordable for getting between Cancún, Playa del Carmen, and Tulum",
        "Travel insurance is highly recommended — medical care in Mexico can be expensive for foreigners",
        "Bring Mexican pesos for markets and local restaurants — dollars are accepted but you'll lose on the exchange rate",
        "Reef-safe sunscreen is mandatory at cenotes and recommended on Tulum's beaches",
      ],
      days: [
        {
          theme: "The Hotel Zone and Cancún's beaches",
          activities: [
            { name: "Playa Delfines", description: "The Hotel Zone's most spectacular public beach, with the iconic Cancún sign, white sand, and Mexico's most turquoise water. No hotel palapa, no fee.", price: "Free", tip: "The northern beaches in the Hotel Zone have smaller waves. The southern ones (Delfines, Ballenas) have more surf and are better for bodysurfing." },
            { name: "Mercado 28 — the real Cancún", description: "The craft market in downtown Cancún, away from the Hotel Zone. Tacos al pastor, authentic crafts, and local prices instead of mass-tourism markups.", price: "USD 5-10", tip: "Cochinita pibil tacos are the Yucatecan dish that'll haunt you once you're home. Order them with pickled red onion and habanero." },
            { name: "Nichupté Lagoon — kayaking or paddleboarding", description: "The lagoon separating the Hotel Zone from the mainland, with mangroves, tropical birds, and calm water. Several companies rent kayaks and paddleboards with no guide required.", price: "USD 20-35/hour", tip: "Sunsets over the lagoon with the Hotel Zone in the background are some of the most photogenic in Cancún." },
            { name: "Downtown Cancún at dusk", description: "Parque Las Palapas downtown is where locals gather at dusk: craftspeople, street snacks, live music, and the rhythm of a real Mexican city.", price: "Free", tip: "Downtown Cancún, 20 minutes from your hotel by bus (USD 0.50), gives you an authentic night out that the Hotel Zone can never offer." },
          ],
        },
        {
          theme: "Isla Mujeres: paradise 20 minutes away",
          activities: [
            { name: "Ferry to Isla Mujeres", description: "The ferry departs every 30 minutes from Puerto Juárez. The 20-minute crossing is already spectacular with the Caribbean's color.", price: "USD 8 round trip", tip: "Get to the dock before 8am to catch the first ferry. Isla Mujeres with hardly anyone around (first hour) is a dream." },
            { name: "Playa Norte — the best beach in the Caribbean", description: "Repeatedly voted among the best beaches in the world, with pool-like water, fine white sand, and a protected, waveless lagoon. Only 2 km long.", price: "Free", tip: "Rent a golf cart (USD 40/day) to explore the whole 8 km island. It's how everyone gets around Isla Mujeres." },
            { name: "Garrafón — snorkeling on the coral reef", description: "The southern tip of the island has one of the best coral reefs in the Mexican Caribbean, with colorful fish, rays, and turtles. Garrafón park includes snorkeling.", price: "USD 25-45", tip: "Free snorkeling outside the park (from the rocks south of Zac-Ha beach) is just as good and free." },
            { name: "Isla Mujeres town", description: "Colorfully painted streets, local craft boutiques, and seafront seafood restaurants make the town a place worth lingering in.", price: "Free", tip: "Hidalgo street has the best seafood restaurants at a fair price. The island's ceviche is different from Cancún's." },
          ],
        },
        {
          theme: "Chichén Itzá and a swim in a cenote",
          activities: [
            { name: "Departure for Chichén Itzá", description: "The ancient Mayan city, named one of the 7 wonders of the modern world, is 2.5 hours from Cancún. Leaving early avoids the extreme heat and the thousands of tourists.", price: "Tour from USD 60 (includes transport)", tip: "During the equinoxes (March 21 and September 23) the sun creates the serpent of light on the El Castillo pyramid — mass tourism, but spectacular." },
            { name: "El Castillo and the Mayan city", description: "The Kukulcán pyramid has 365 steps (one for each day of the year), plus the Temple of the Warriors, the largest ballcourt in Mesoamerica, and the Sacred Cenote.", price: "USD 35 (admission)", tip: "You haven't been able to climb the pyramid since 2006, but you can touch it. Guides demonstrate the echo that mimics a quetzal's call by clapping in front of the staircase." },
            { name: "Cenote Ik-Kil", description: "The most photogenic cenote in the Riviera Maya, 3 km from Chichén Itzá: a circular sinkhole 40m across, open to the sky, with walls draped in cascading ferns.", price: "USD 15", tip: "Arrive right after lunch when the tour groups leave. Between 2 and 4pm is when it's quietest and sunlight streams into the cenote." },
            { name: "Return to Cancún via Valladolid", description: "The colonial city of Valladolid is on the way back. A 45-minute stop to see the Zaci cenote (right in town) and the historic center.", price: "Zaci cenote USD 5", tip: "Valladolid is an authentic Yucatecan city where you can get the best café de olla of the whole trip." },
          ],
        },
        {
          theme: "Tulum: Mayan ruins above the Caribbean",
          activities: [
            { name: "Tulum Ruins", description: "The only Mayan city built on a cliff with direct views over the turquoise Caribbean. El Castillo de Tulum with the sea behind it is one of Mexico's most iconic photos.", price: "USD 10", tip: "Arrive at 8am when it opens. By 10am there are already hundreds of people. The beach at the foot of the ruins is included — you can swim before the crowds arrive." },
            { name: "Gran Cenote, Tulum", description: "The most accessible, photogenic cenote in the area, with crystal-clear water, submerged stalagmites, and fish swimming around the bathers.", price: "USD 20", tip: "Bring your own snorkel gear (or rent it there for USD 5). The water stays between 23-25°C year-round. Sargassum-free." },
            { name: "Tulum town", description: "Tulum's original town, distinct from the boutique-hotel-lined Tulum Hotel Zone. Cochinita tacos, honey and achiote shops, at Mexican prices.", price: "USD 8-15", tip: "The Instagram version of Tulum (the hotel zone) is expensive and geared toward a different kind of trip. The town has the same thing for a third of the price." },
            { name: "Akumal — swimming with sea turtles", description: "Akumal Bay (45 min north of Tulum) is the most accessible place in the world to swim freely with sea turtles in their natural habitat.", price: "Free (just the beach and water)", tip: "Get in the water between 9 and 11am to see more turtles. Don't wear regular sunscreen — it damages the reef. Reef-safe sunscreen is allowed." },
          ],
        },
        {
          theme: "Playa del Carmen and the last Caribbean day",
          activities: [
            { name: "Fifth Avenue, Playa del Carmen", description: "The liveliest pedestrian street in the Mexican Caribbean, 4 km of shops, restaurants, bars, and street art facing the beach. The social heart of the Riviera Maya.", price: "Free (walking around)", tip: "Skip the restaurants right on Fifth Ave — they're all tourist-priced. Head two blocks inland and you'll find where locals get their tacos." },
            { name: "Playa del Carmen's beach", description: "The liveliest urban beach in the Riviera Maya, with white sand and direct access from Fifth Avenue. Livelier than the beaches in Cancún's Hotel Zone.", price: "Free", tip: "The boutique-hotel beaches south of Fifth Ave (from Calle 38 onward) are less crowded and almost as accessible." },
            { name: "Xcaret or Xel-Há (optional)", description: "Mexico's largest natural parks. Xcaret combines Mayan culture, nature, and nighttime shows. Xel-Há is more intimate and centers on snorkeling in a seawater river.", price: "USD 80-130", tip: "Xel-Há is calmer and more natural. Xcaret is better for families with young kids. Tickets bought online cost 30% less." },
            { name: "One last Caribbean sunset", description: "Playa del Carmen's beach faces east — the most spectacular sunsets are seen from the Playa pier or from the ferry to Cozumel.", price: "Free", tip: "The ferry to Cozumel departs from the Fifth Avenue pier. Just the 45-minute ride out over the open Caribbean is already a spectacle." },
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
