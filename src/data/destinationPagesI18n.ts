import type { DestinationPage } from "./destinationPages";

// Multi-language overlay. Each entry only needs the fields that are
// actually rendered to visitors (see /itinerario/[slug]/page.tsx and
// CollapsibleDays.tsx) -- metaTitle/metaDescription/keywords stay Spanish
// on purpose, since the site has a single URL per destination (no locale
// routing) and metadata is generated server-side where the visitor's language
// isn't known. `gyg`/`gygCity` (GetYourGuide search queries) are already
// written in English in the Spanish source and don't need translating.
// Languages are added incrementally (en done, fr/de/it/pt next, per explicit
// user direction) -- a destination/language pair falls back to Spanish
// until it's added here.

export type DestLang = "en" | "fr" | "de" | "it" | "pt";

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

export const destinationPagesI18n: Partial<Record<string, Partial<Record<DestLang, DestinationI18nEntry>>>> = {
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
    fr: {
      city: "Paris",
      country: "France",
      heroTitle: "5 jours à Paris : l'itinéraire que vous voudrez refaire",
      heroSubtitle: "Le Louvre, la tour Eiffel, Montmartre et les quartiers que seuls les habitants connaissent — avec les horaires réels et des conseils pour chaque étape.",
      bestMonths: "Avril à juin et septembre à octobre",
      budget: "100-180€/jour",
      travelTips: [
        "Prenez le pass Navigo semaine si vous arrivez un lundi — il couvre le métro, le RER et les bus pour 30€/semaine",
        "Réservez le Louvre, la tour Eiffel et Versailles au moins 2 semaines à l'avance en haute saison",
        "Les musées nationaux sont gratuits le premier dimanche de chaque mois — ils sont aussi bondés",
        "Téléchargez l'application RATP pour les transports et une carte Google Maps hors ligne de Paris",
        "Les supermarchés (Monoprix, Franprix) ont d'excellentes charcuteries et fromages pour un pique-nique économique",
      ],
      days: [
        {
          theme: "Le cœur historique : le Louvre et les Champs-Élysées",
          activities: [
            { name: "Le musée du Louvre", description: "Le musée le plus visité au monde abrite 380 000 œuvres, dont la Joconde et la Vénus de Milo. Réservez votre billet en ligne pour éviter la file, qui peut atteindre 2 heures.", price: "22€", tip: "Entrez par la pyramide de verre. Arrivez pile à 9h et filez directement vers la Joconde avant l'arrivée des groupes." },
            { name: "Jardin des Tuileries", description: "Une promenade parisienne classique entre le Louvre et la place de la Concorde. Parfait pour déjeuner sur les terrasses du jardin avec vue sur les fontaines et les sculptures.", price: "Gratuit", tip: "Les cafés du jardin sont plus chers que ceux des quartiers alentour, mais la vue en vaut la peine." },
            { name: "les Champs-Élysées et l'Arc de Triomphe", description: "L'avenue la plus célèbre de Paris, 1,9 km de boutiques de luxe, cafés et théâtres. L'Arc de Triomphe offre la meilleure vue panoramique gratuite sur Paris depuis sa terrasse.", price: "Terrasse 13€", tip: "Montez à l'Arc au coucher du soleil pour voir les phares des voitures former deux rivières dorées le long des Champs-Élysées." },
            { name: "Dîner dans le Marais", description: "Le quartier le plus vivant de Paris, avec des restaurants juifs, libanais et de cuisine française moderne. La rue des Rosiers est l'épicentre culinaire du quartier.", price: "20-35€ par personne", tip: "L'As du Fallafel, rue des Rosiers, sert le meilleur falafel de Paris. Arrivez avant 19h pour éviter la file." },
          ],
        },
        {
          theme: "La tour Eiffel et le quartier de rêve",
          activities: [
            { name: "Tour Eiffel — premier créneau", description: "Avec ses 330 mètres de haut, c'est le monument le plus visité au monde. Le créneau du matin implique moins d'attente et offre la meilleure lumière pour les photos.", price: "29€ (2e étage) / 46€ (sommet)", tip: "Réservez votre billet au moins 2 semaines à l'avance. L'ascenseur du sommet est souvent le premier complet." },
            { name: "Trocadéro et vues panoramiques", description: "L'esplanade du Trocadéro offre la vue frontale la plus emblématique sur la tour Eiffel. Le Palais de Chaillot, avec son architecture et ses musées de la Marine, se trouve ici aussi.", price: "Gratuit", tip: "La photo classique de la tour Eiffel se prend depuis le centre de l'esplanade. Idéal à 7h — après, elle se remplit de vendeurs." },
            { name: "Musée d'Orsay", description: "Installé dans une ancienne gare, il abrite la collection d'art impressionniste la plus importante au monde : Monet, Renoir, Van Gogh et Cézanne.", price: "16€", tip: "L'horloge transparente du 5e étage offre une vue unique sur la Seine et le Sacré-Cœur. La file est bien plus courte qu'au Louvre." },
            { name: "Spectacle lumineux de la tour Eiffel", description: "Chaque heure pile, du crépuscule jusqu'à 1h du matin, la tour Eiffel scintille avec 20 000 lumières pendant 5 minutes. Le meilleur spectacle gratuit de Paris.", price: "Gratuit", tip: "Regardez-le depuis le pont de Bir-Hakeim — la vue avec le pont au premier plan est spectaculaire." },
          ],
        },
        {
          theme: "Montmartre et le Paris bohème",
          activities: [
            { name: "Basilique du Sacré-Cœur", description: "La basilique en pierre blanche qui domine Montmartre et tout Paris depuis le sommet de la Butte. La vue sur les toits parisiens depuis les marches est gratuite et spectaculaire.", price: "Gratuit (intérieur)", tip: "Montez par la rue Lepic pour découvrir le vrai Montmartre local, plutôt que l'escalier touristique." },
            { name: "Place du Tertre", description: "La place des artistes de Montmartre, où peintres et portraitistes travaillent en plein air depuis le XIXe siècle. Vous pouvez commander un portrait ou simplement observer.", price: "Gratuit (portraits 20-50€)", tip: "Les artistes commencent à arriver vers 10h. Ceux installés en bordure de place sont souvent plus authentiques que ceux du centre." },
            { name: "Déjeuner aux Abbesses", description: "Le cœur local de Montmartre, loin du circuit touristique. La rue Lepic regorge de boulangeries, épiceries fines et restaurants de quartier à prix raisonnables.", price: "12-18€", tip: "Goûtez un croissant au beurre à La Maison Rose, rue Lepic — la boulangerie qui apparaît dans 'Amélie'." },
            { name: "Canal Saint-Martin", description: "Le canal parisien où les habitants passent leurs après-midis ensoleillés. Cafés en terrasse, librairies indépendantes et l'ambiance hipster la plus authentique de Paris.", price: "Gratuit", tip: "Le dimanche, le canal est fermé à la circulation et les Parisiens l'envahissent avec leurs pique-niques — une expérience aussi locale que possible." },
          ],
        },
        {
          theme: "Saint-Germain et la rive gauche",
          activities: [
            { name: "le Quartier latin et la Sorbonne", description: "Le plus ancien quartier universitaire d'Europe, avec des librairies centenaires comme Shakespeare and Company, le marché de la rue Mouffetard et les cafés jadis fréquentés par Sartre et Beauvoir.", price: "Gratuit", tip: "Shakespeare and Company (en face de Notre-Dame) organise des lectures d'auteurs gratuites. Consultez leur programme avant d'y aller." },
            { name: "Cathédrale Notre-Dame (extérieur)", description: "Toujours en reconstruction après l'incendie de 2019, la cathédrale a partiellement rouvert en 2024. L'extérieur restauré et les arcs-boutants gothiques sont de nouveau impressionnants.", price: "Gratuit", tip: "L'intérieur complet rouvre progressivement. Consultez le site officiel avant votre voyage pour savoir quelles zones sont accessibles." },
            { name: "Jardin du Luxembourg", description: "Le parc préféré des Parisiens, avec ses bassins, ses statues et le palais du Luxembourg. Parfait pour se reposer entre deux visites et observer la vie locale.", price: "Gratuit", tip: "Louez un petit voilier jouet pour le faire naviguer sur le grand bassin central — une tradition parisienne depuis 1900." },
            { name: "Centre Pompidou", description: "Le musée d'art moderne et contemporain le plus visité d'Europe, dans un bâtiment de tuyaux colorés qui est lui-même une œuvre d'art.", price: "15€", tip: "La terrasse du toit (niveau 6) offre une vue à 360° saisissante sur Paris — et elle est incluse dans le billet d'entrée." },
          ],
        },
        {
          theme: "Versailles : la journée qui vaut le déplacement",
          activities: [
            { name: "Château de Versailles", description: "Le plus grand palais du monde, avec 700 pièces, construit par Louis XIV. La galerie des Glaces est le point culminant de la visite.", price: "21€ (château) / 27€ (château + jardins les jours de grandes eaux)", tip: "Réservez votre billet en ligne et prenez le premier train depuis Paris-Montparnasse à 8h30. La file sans réservation dépasse 2 heures." },
            { name: "Jardins de Versailles", description: "Les jardins géométriques les plus célèbres au monde, dessinés par André Le Nôtre, sur 800 hectares de fontaines, parterres et bosquets.", price: "Inclus avec le château", tip: "Les samedis et dimanches d'avril à octobre, le spectacle des Grandes Eaux Musicales a lieu — un spectacle unique. Le prix varie." },
            { name: "Le Trianon — les domaines privés de la cour", description: "Le Petit Trianon était la retraite personnelle de Marie-Antoinette. Le Hameau de la Reine est le hameau rustique qu'elle fit construire pour échapper au protocole de la cour.", price: "Inclus avec le billet Château + Domaine", tip: "Louez un vélo ou une voiturette électrique dans les jardins — il y a 2 km entre le château et le Trianon." },
            { name: "Dernière soirée à Paris", description: "De retour à Paris, dînez dans un bistrot de quartier et, si le temps le permet, faites une promenade nocturne le long des quais de la Seine, classés au patrimoine mondial de l'UNESCO.", price: "25-45€", tip: "Demandez à votre hôtel de vous recommander un bistrot à 3 rues de là — toujours meilleur que ceux du circuit touristique." },
          ],
        },
      ],
    },
    de: {
      city: "Paris",
      country: "Frankreich",
      heroTitle: "5 Tage in Paris: die Reiseroute, die man am liebsten wiederholt",
      heroSubtitle: "Der Louvre, der Eiffelturm, Montmartre und die Viertel, die nur Einheimische kennen — mit echten Öffnungszeiten und Tipps für jeden Stopp.",
      bestMonths: "April bis Juni und September bis Oktober",
      budget: "100-180€/Tag",
      travelTips: [
        "Holen Sie sich das Wochenticket Navigo, wenn Sie an einem Montag ankommen — es deckt Metro, RER und Busse für 30€/Woche ab",
        "Buchen Sie Louvre, Eiffelturm und Versailles mindestens 2 Wochen im Voraus in der Hochsaison",
        "Nationalmuseen sind am ersten Sonntag jedes Monats kostenlos — dafür auch überfüllt",
        "Laden Sie die RATP-App für den Nahverkehr und eine Offline-Google-Maps-Karte von Paris herunter",
        "Supermärkte (Monoprix, Franprix) haben hervorragende Aufschnitte und Käse für ein günstiges Picknick",
      ],
      days: [
        {
          theme: "Das historische Herz: der Louvre und die Champs-Élysées",
          activities: [
            { name: "Der Louvre", description: "Das meistbesuchte Museum der Welt beherbergt 380.000 Werke, darunter die Mona Lisa und die Venus von Milo. Buchen Sie Ihr Ticket online, um die Schlange zu umgehen, die bis zu 2 Stunden dauern kann.", price: "22€", tip: "Betreten Sie das Museum durch die Glaspyramide. Kommen Sie pünktlich um 9 Uhr und gehen Sie direkt zur Mona Lisa, bevor die Reisegruppen eintreffen." },
            { name: "Tuileriengarten", description: "Ein klassischer Pariser Spaziergang zwischen dem Louvre und der Place de la Concorde. Perfekt für ein Mittagessen auf den Gartenterrassen mit Blick auf Brunnen und Skulpturen.", price: "Kostenlos", tip: "Die Cafés im Garten sind teurer als die in den umliegenden Vierteln, aber die Aussicht ist es wert." },
            { name: "die Champs-Élysées und der Arc de Triomphe", description: "Die berühmteste Avenue von Paris, 1,9 km Luxusgeschäfte, Cafés und Theater. Der Arc de Triomphe bietet den besten kostenlosen Panoramablick auf Paris von seiner Terrasse.", price: "Terrasse 13€", tip: "Gehen Sie bei Sonnenuntergang auf den Triumphbogen, um zu sehen, wie die Autoscheinwerfer zwei goldene Flüsse entlang der Champs-Élysées bilden." },
            { name: "Abendessen im Marais", description: "Das lebendigste Viertel von Paris, mit jüdischen, libanesischen und modernen französischen Restaurants. Die Rue des Rosiers ist das kulinarische Epizentrum des Viertels.", price: "20-35€ pro Person", tip: "L'As du Fallafel in der Rue des Rosiers serviert den besten Falafel von Paris. Kommen Sie vor 19 Uhr, um die Schlange zu vermeiden." },
          ],
        },
        {
          theme: "Der Eiffelturm und das Traumviertel",
          activities: [
            { name: "Eiffelturm — erster Slot", description: "Mit 330 Metern Höhe ist er das meistbesuchte Monument der Welt. Der Vormittagsslot hat kürzere Wartezeiten und das beste Licht für Fotos.", price: "29€ (2. Etage) / 46€ (Spitze)", tip: "Buchen Sie Ihr Ticket mindestens 2 Wochen im Voraus. Der Aufzug zur Spitze ist meist als Erstes ausgebucht." },
            { name: "Trocadéro und Panoramablicke", description: "Die Trocadéro-Esplanade bietet den ikonischsten Frontalblick auf den Eiffelturm. Hier befinden sich auch der Palais de Chaillot mit seiner Architektur und den Marinemuseen.", price: "Kostenlos", tip: "Das klassische Eiffelturm-Foto entsteht in der Mitte der Esplanade. Am besten um 7 Uhr — danach füllt sie sich mit Verkäufern." },
            { name: "Musée d'Orsay", description: "Untergebracht in einem ehemaligen Bahnhof, beherbergt es die wichtigste impressionistische Kunstsammlung der Welt: Monet, Renoir, Van Gogh und Cézanne.", price: "16€", tip: "Die transparente Uhr im 5. Stock bietet einen einzigartigen Blick auf die Seine und Sacré-Cœur. Die Schlange ist viel kürzer als im Louvre." },
            { name: "Lichtshow am Eiffelturm", description: "Jede volle Stunde von der Dämmerung bis 1 Uhr nachts funkelt der Eiffelturm 5 Minuten lang mit 20.000 Lichtern. Die beste kostenlose Show von Paris.", price: "Kostenlos", tip: "Schauen Sie von der Pont de Bir-Hakeim aus zu — der Blick mit der Brücke im Vordergrund ist spektakulär." },
          ],
        },
        {
          theme: "Montmartre und das bohemienhafte Paris",
          activities: [
            { name: "Sacré-Cœur-Basilika", description: "Die weiße Steinbasilika, die von der Spitze des Hügels über Montmartre und ganz Paris thront. Der Blick auf die Pariser Dächer von den Stufen aus ist kostenlos und spektakulär.", price: "Kostenlos (Innenraum)", tip: "Gehen Sie über die Rue Lepic hinauf, um das echte, lokale Montmartre zu sehen, statt die touristische Treppe zu nehmen." },
            { name: "Place du Tertre", description: "Der Künstlerplatz von Montmartre, auf dem Maler und Porträtkünstler seit dem 19. Jahrhundert unter freiem Himmel arbeiten. Sie können ein Porträt in Auftrag geben oder einfach zuschauen.", price: "Kostenlos (Porträts 20-50€)", tip: "Die Künstler treffen ab etwa 10 Uhr ein. Diejenigen am Rand des Platzes sind oft authentischer als die in der Mitte." },
            { name: "Mittagessen in Abbesses", description: "Das lokale Herz von Montmartre, abseits der Touristenroute. Die Rue Lepic hat Bäckereien, Feinkostläden und Nachbarschaftsrestaurants zu vernünftigen Preisen.", price: "12-18€", tip: "Probieren Sie ein Croissant au beurre in La Maison Rose in der Rue Lepic — die Bäckerei aus dem Film 'Amélie'." },
            { name: "Canal Saint-Martin", description: "Der Pariser Kanal, an dem Einheimische ihre sonnigen Nachmittage verbringen. Terrassencafés, unabhängige Buchhandlungen und die authentischste Hipster-Szene von Paris.", price: "Kostenlos", tip: "Sonntags wird der Kanal für den Verkehr gesperrt und die Pariser übernehmen ihn mit Picknicks — eine so lokale Erfahrung, wie man sie bekommen kann." },
          ],
        },
        {
          theme: "Saint-Germain und das linke Seineufer",
          activities: [
            { name: "das Quartier Latin und die Sorbonne", description: "Europas ältestes Universitätsviertel, mit jahrhundertealten Buchhandlungen wie Shakespeare and Company, dem Markt der Rue Mouffetard und den Cafés, die einst von Sartre und Beauvoir besucht wurden.", price: "Kostenlos", tip: "Shakespeare and Company (gegenüber von Notre-Dame) veranstaltet kostenlose Autorenlesungen. Prüfen Sie deren Programm, bevor Sie hingehen." },
            { name: "Kathedrale Notre-Dame (Außenansicht)", description: "Noch immer im Wiederaufbau nach dem Brand von 2019, wurde die Kathedrale 2024 teilweise wiedereröffnet. Die restaurierte Fassade und die gotischen Strebebögen beeindrucken erneut.", price: "Kostenlos", tip: "Das gesamte Innere wird schrittweise wiedereröffnet. Prüfen Sie vor Ihrer Reise die offizielle Website, um zu sehen, welche Bereiche zugänglich sind." },
            { name: "Jardin du Luxembourg", description: "Der Lieblingspark der Pariser, mit Teichen, Statuen und dem Palais du Luxembourg. Perfekt, um sich zwischen den Besichtigungen auszuruhen und das lokale Leben zu beobachten.", price: "Kostenlos", tip: "Mieten Sie ein Spielzeugsegelboot, um es über den großen zentralen Teich zu schicken — eine Pariser Tradition seit 1900." },
            { name: "Centre Pompidou", description: "Das meistbesuchte Museum für moderne und zeitgenössische Kunst in Europa, in einem Gebäude aus bunten Rohren, das selbst ein Kunstwerk ist.", price: "15€", tip: "Die Dachterrasse (Ebene 6) bietet einen atemberaubenden 360°-Blick auf Paris — und ist im Eintritt inbegriffen." },
          ],
        },
        {
          theme: "Versailles: der Tagesausflug, der sich lohnt",
          activities: [
            { name: "Schloss Versailles", description: "Der größte Palast der Welt mit 700 Räumen, erbaut von Ludwig XIV. Der Spiegelsaal ist der Höhepunkt des Besuchs.", price: "21€ (Schloss) / 27€ (Schloss + Gärten an Wassertagen)", tip: "Buchen Sie Ihr Ticket online und nehmen Sie den ersten Zug von Paris-Montparnasse um 8:30 Uhr. Die Schlange ohne Reservierung dauert über 2 Stunden." },
            { name: "Gärten von Versailles", description: "Die berühmtesten geometrischen Gärten der Welt, entworfen von André Le Nôtre, auf 800 Hektar mit Brunnen, Beeten und Wäldchen.", price: "Im Schlosseintritt inbegriffen", tip: "Samstags und sonntags von April bis Oktober findet die Show der musikalischen Wasserspiele statt — ein einzigartiges Spektakel. Preis variiert." },
            { name: "Der Trianon — die privaten Anwesen des Hofes", description: "Der Petit Trianon war Marie-Antoinettes persönlicher Rückzugsort. Das Hameau de la Reine ist das rustikale Dorf, das sie bauen ließ, um dem Hofprotokoll zu entfliehen.", price: "Im Ticket Schloss + Anwesen inbegriffen", tip: "Mieten Sie ein Fahrrad oder einen Elektrowagen in den Gärten — es sind 2 km zwischen Schloss und Trianon." },
            { name: "Letzter Abend in Paris", description: "Zurück in Paris, essen Sie in einem Bistro im Viertel zu Abend und machen Sie, wenn es das Wetter erlaubt, einen nächtlichen Spaziergang entlang der Seine-Ufer, UNESCO-Weltkulturerbe.", price: "25-45€", tip: "Fragen Sie Ihr Hotel nach einer Bistro-Empfehlung 3 Straßen entfernt — immer besser als die auf der Touristenroute." },
          ],
        },
      ],
    },
  },
  viena: {
    en: {
      city: "Vienna",
      country: "Austria",
      heroTitle: "3 days in Vienna: imperial palaces, Viennese coffee, and Mozart",
      heroSubtitle: "Schönbrunn Palace, the Kunsthistorisches Museum, and the Prater — the Habsburg capital in three days of imperial culture and coffee with strudel.",
      bestMonths: "April to June and September to October",
      budget: "€100-170/day",
      travelTips: [
        "The Vienna City Card (€17/24h, €25/48h, €29/72h) includes unlimited public transport (metro, tram, bus)",
        "Viennese cafés are UNESCO Intangible Cultural Heritage — you can sit for hours over a single coffee without anyone rushing you",
        "Standing-room tickets (Stehplätze) at the State Opera (€4) are Vienna's best cultural investment — same performers, 50 times cheaper",
        "Vienna's tap water comes straight from the Alps — it's some of the purest water in the world, no need to buy bottled water",
        "Vienna's museums cost €18-25, but the Vienna City Card offers discounts at many of them — always check if a reduced rate is available",
      ],
      days: [
        {
          theme: "The Innere Stadt — the Habsburg heart",
          activities: [
            { name: "St. Stephen's Cathedral (Stephansdom)", description: "Vienna's symbol, built in the 12th century in late Gothic style. Its roof of 266,000 multicolored ceramic tiles is one of a kind in Europe. From the north tower (elevator), the view of the Innere Stadt is striking.", price: "Free (north tower €6)", tip: "The imperial crypt beneath the cathedral (€6) holds the Habsburgs' viscera in 54 urns — the intestines at Stephansdom, the hearts at the Augustinerkirche, the bodies at the Kaisergruft." },
            { name: "Hofburg — the Imperial Palace", description: "The Habsburgs' palace in central Vienna, with 2,600 rooms, the Imperial Crypt, the Imperial Apartments, and the Imperial Treasury, home to the Habsburg Crown and the Holy Grail.", price: "€17 (Apartments + Sisi Museum)", tip: "The Sisi Museum, on Empress Sisi, is the Hofburg's most-visited section. The Imperial Treasury (€16 separately) has the Spear of Destiny and the Holy Roman Empire's coronation jewels." },
            { name: "Café Central — Vienna's most famous", description: "Opened in 1876, Café Central was the meeting place of Freud, Trotsky, Hitler (at different times), and the whole Viennese intelligentsia. The marble vaults and the wax figure of writer Peter Altenberg at the entrance are historic.", price: "€8-15 (coffee and strudel)", tip: "A Melange (coffee with frothed milk) and warm Apfelstrudel with cream is the most Viennese order. Arrive at opening (9am) to get a table — it's always full." },
            { name: "Ringstrasse and the great museums", description: "The 19th-century ring boulevard that Emperor Franz Joseph I had built, lined with Vienna's most important buildings: the State Opera, the Kunsthistorisches Museum, Parliament, City Hall, and the Burgtheater.", price: "Free (walking around)", tip: "A tram ride around the full Ringstrasse (lines 1 and 2) costs just the regular fare (€2.40) and doubles as a 40-minute tour past Vienna's best buildings." },
          ],
        },
        {
          theme: "Schönbrunn and the Belvedere",
          activities: [
            { name: "Schönbrunn Palace", description: "The Habsburgs' summer palace, Austria's most-visited attraction, with 1,441 rooms. The Grand Tour (40 rooms) includes the Hall of Mirrors, where the young Mozart performed for Maria Theresa. The garden, with the Gloriette at the top, is striking.", price: "€25 (Grand Tour + gardens)", tip: "Arrive at opening (8:30am) to avoid the lines. The Gloriette at the top of the garden has the best café with a view of Schönbrunn and Vienna — walk up in 15 minutes." },
            { name: "Wiener Schnitzel lunch", description: "Wiener Schnitzel is Austria's national dish — breaded veal fried in butter, served with potato salad and lemon slices. The restaurants around the Naschmarkt are the best.", price: "€14-22", tip: "The original Schnitzel is made with veal (Wiener Art) — the pork version is cheaper but different. Figlmüller on Wollzeile and Bäckerstrasse has served Vienna's most famous version since 1905." },
            { name: "Naschmarkt — Vienna's most Viennese market", description: "Vienna's largest open-air market, with 120 stalls of Austrian cheeses, seafood, Persian spices, Jewish pickles, and the city's best Tafelspitz (Viennese boiled beef).", price: "Free", tip: "The Naschmarkt flea market on Saturdays (until 6pm) has antiques, vintage clothes, and paintings — Vienna's most bohemian atmosphere." },
            { name: "Belvedere — Klimt's The Kiss", description: "Prince Eugene of Savoy's Baroque palace holds the world's largest collection of Gustav Klimt's work, including The Kiss (1907-08), Austria's most valuable painting.", price: "€18", tip: "The Kiss hangs in the first room on the first floor — striking for the real gold leaf embedded in the canvas. Arrive knowing exactly what you want to see, so you don't get lost among the 200 rooms." },
          ],
        },
        {
          theme: "Museums, a concert, and the Prater",
          activities: [
            { name: "Kunsthistorisches Museum", description: "Austria's most important art history museum, with one of the richest collections of Flemish painting in the world: Vermeer, Rembrandt, Bruegel, Titian, and Velázquez, in an imperial palazzo on the Ringstrasse.", price: "€21", tip: "The museum's Great Hall, with its marble dome and Canova and Klimt paintings in the side pavilions, is one of the most beautiful interiors in Europe. The Bruegel room (30 works by the Elder) is one of a kind in the world." },
            { name: "Lunch at the Prater", description: "The former imperial hunting ground turned into Vienna's largest park, with the famous Riesenrad (the 1897 giant Ferris wheel) and traditional Würstelstand (Viennese sausage stands).", price: "€3-8 (würstel)", tip: "Käsekrainer (a sausage with melted cheese inside), with mustard and rye bread from the Würstelstand, is Vienna's most authentic snack. Viennese eat it standing up, any time of day." },
            { name: "Riesenrad — the historic 1897 Ferris wheel", description: "The Wiener Prater's 65-meter giant Ferris wheel, built in 1897 and a symbol of Vienna. The cabin rotates for 20 minutes, with panoramic views over the Prater and the city.", price: "€13", tip: "The Riesenrad offers one of the best views of Vienna from its highest point (65m). Cabins can be booked for private dinners (€300) — Vienna's most romantic date." },
            { name: "Classical music concert in Vienna", description: "Vienna is the world capital of classical music. The State Opera, the Musikverein (the world's most revered concert hall), and the Konzerthaus hold daily concerts of Mozart, Strauss, Brahms, and Beethoven.", price: "€15-200 (depending on venue and category)", tip: "Standing-room tickets (Stehplätze) at the State Opera cost €4 and go on sale 80 minutes before the show — Vienna's best cultural value. Arrive at 5:30pm." },
          ],
        },
      ],
    },
    fr: {
      city: "Vienne",
      country: "Autriche",
      heroTitle: "3 jours à Vienne : palais impériaux, café viennois et Mozart",
      heroSubtitle: "Le palais de Schönbrunn, le Kunsthistorisches Museum et le Prater — la capitale des Habsbourg en trois jours de culture impériale et de café au strudel.",
      bestMonths: "Avril à juin et septembre à octobre",
      budget: "100-170€/jour",
      travelTips: [
        "La Vienna City Card (17€/24h, 25€/48h, 29€/72h) inclut les transports publics illimités (métro, tram, bus)",
        "Les cafés viennois sont classés au patrimoine culturel immatériel de l'UNESCO — on peut y rester des heures autour d'un seul café sans que personne ne vous presse",
        "Les places debout (Stehplätze) à l'Opéra national (4€) sont le meilleur investissement culturel de Vienne — mêmes artistes, 50 fois moins cher",
        "L'eau du robinet à Vienne vient directement des Alpes — c'est l'une des eaux les plus pures au monde, inutile d'acheter des bouteilles",
        "Les musées viennois coûtent 18-25€, mais la Vienna City Card offre des réductions dans beaucoup d'entre eux — vérifiez toujours s'il existe un tarif réduit",
      ],
      days: [
        {
          theme: "L'Innere Stadt — le cœur des Habsbourg",
          activities: [
            { name: "Cathédrale Saint-Étienne (Stephansdom)", description: "Symbole de Vienne, construite au XIIe siècle en style gothique tardif. Son toit de 266 000 tuiles en céramique multicolore est unique en Europe. Depuis la tour nord (ascenseur), la vue sur l'Innere Stadt est saisissante.", price: "Gratuit (tour nord 6€)", tip: "La crypte impériale sous la cathédrale (6€) conserve les viscères des Habsbourg dans 54 urnes — les intestins à Stephansdom, les cœurs à l'Augustinerkirche, les corps à la Kaisergruft." },
            { name: "Hofburg — le palais impérial", description: "Le palais des Habsbourg au centre de Vienne, avec 2 600 pièces, la crypte impériale, les appartements impériaux et le Trésor impérial, où sont conservées la couronne des Habsbourg et le Saint Graal.", price: "17€ (Appartements + musée Sissi)", tip: "Le musée Sissi, consacré à l'impératrice Sissi, est la section la plus visitée de la Hofburg. Le Trésor impérial (16€ séparément) abrite la lance du Destin et les joyaux du couronnement du Saint-Empire romain germanique." },
            { name: "Café Central — le plus célèbre de Vienne", description: "Ouvert en 1876, le Café Central fut le lieu de rencontre de Freud, Trotsky, Hitler (à différentes époques) et de toute l'intelligentsia viennoise. Les voûtes en marbre et la statue de cire de l'écrivain Peter Altenberg à l'entrée sont historiques.", price: "8-15€ (café et strudel)", tip: "Un Mélange (café avec lait mousseux) et un Apfelstrudel chaud à la crème sont la commande la plus viennoise. Arrivez à l'ouverture (9h) pour avoir une table — c'est toujours plein." },
            { name: "Ringstrasse et les grands musées", description: "Le grand boulevard circulaire du XIXe siècle voulu par l'empereur François-Joseph Ier, bordé des bâtiments les plus importants de Vienne : l'Opéra national, le Kunsthistorisches Museum, le Parlement, l'Hôtel de Ville et le Burgtheater.", price: "Gratuit (à pied)", tip: "Un tour en tramway sur toute la Ringstrasse (lignes 1 et 2) coûte le prix d'un ticket normal (2,40€) et fait office de visite guidée de 40 minutes des plus beaux bâtiments de Vienne." },
          ],
        },
        {
          theme: "Schönbrunn et le Belvédère",
          activities: [
            { name: "Château de Schönbrunn", description: "Le palais d'été des Habsbourg, l'attraction la plus visitée d'Autriche, avec 1 441 pièces. Le Grand Tour (40 pièces) inclut la salle des Glaces, où le jeune Mozart joua pour Marie-Thérèse. Le jardin, avec la Gloriette au sommet, est saisissant.", price: "25€ (Grand Tour + jardins)", tip: "Arrivez à l'ouverture (8h30) pour éviter les files. La Gloriette au sommet du jardin abrite le meilleur café avec vue sur Schönbrunn et Vienne — 15 minutes de marche pour y monter." },
            { name: "Déjeuner de Wiener Schnitzel", description: "Le Wiener Schnitzel est le plat national d'Autriche — de l'escalope de veau panée et frite au beurre, servie avec salade de pommes de terre et tranches de citron. Les restaurants autour du Naschmarkt sont les meilleurs.", price: "14-22€", tip: "La véritable Schnitzel se fait avec du veau (Wiener Art) — la version au porc est moins chère mais différente. Figlmüller, sur Wollzeile et Bäckerstrasse, sert la version la plus célèbre de Vienne depuis 1905." },
            { name: "Naschmarkt — le marché le plus viennois", description: "Le plus grand marché à ciel ouvert de Vienne, avec 120 étals de fromages autrichiens, fruits de mer, épices persanes, conserves juives et le meilleur Tafelspitz (bœuf bouilli viennois) de la ville.", price: "Gratuit", tip: "Le marché aux puces du Naschmarkt le samedi (jusqu'à 18h) propose antiquités, vêtements vintage et tableaux — l'ambiance la plus bohème de Vienne." },
            { name: "Belvédère — Le Baiser de Klimt", description: "Le palais baroque du prince Eugène de Savoie abrite la plus grande collection au monde des œuvres de Gustav Klimt, dont Le Baiser (1907-08), le tableau le plus précieux d'Autriche.", price: "18€", tip: "Le Baiser est accroché dans la première salle du premier étage — saisissant pour la véritable feuille d'or incrustée dans la toile. Sachez exactement ce que vous voulez voir avant d'arriver, pour ne pas vous perdre parmi les 200 pièces." },
          ],
        },
        {
          theme: "Musées, concert et le Prater",
          activities: [
            { name: "Kunsthistorisches Museum", description: "Le musée d'histoire de l'art le plus important d'Autriche, avec l'une des plus riches collections de peinture flamande au monde : Vermeer, Rembrandt, Bruegel, Titien et Vélasquez, dans un palais impérial de la Ringstrasse.", price: "21€", tip: "La grande salle du musée, avec sa coupole en marbre et les tableaux de Canova et Klimt dans les pavillons latéraux, est l'un des plus beaux intérieurs d'Europe. La salle Bruegel (30 œuvres de l'Ancien) est unique au monde." },
            { name: "Déjeuner au Prater", description: "L'ancien terrain de chasse impérial devenu le plus grand parc de Vienne, avec la célèbre Riesenrad (grande roue de 1897) et les Würstelstand traditionnels (stands de saucisses viennoises).", price: "3-8€ (würstel)", tip: "Le Käsekrainer (saucisse fourrée au fromage fondu), avec moutarde et pain de seigle, est le snack le plus authentique de Vienne. Les Viennois le mangent debout, à toute heure de la journée." },
            { name: "Riesenrad — la grande roue historique de 1897", description: "La grande roue de 65 mètres du Prater viennois, construite en 1897, symbole de Vienne. La cabine tourne pendant 20 minutes, avec vues panoramiques sur le Prater et la ville.", price: "13€", tip: "La Riesenrad offre l'une des meilleures vues de Vienne depuis son point le plus haut (65m). Les cabines peuvent être réservées pour des dîners privés (300€) — le rendez-vous le plus romantique de Vienne." },
            { name: "Concert de musique classique à Vienne", description: "Vienne est la capitale mondiale de la musique classique. L'Opéra national, le Musikverein (la salle de concert la plus révérée au monde) et le Konzerthaus proposent des concerts quotidiens de Mozart, Strauss, Brahms et Beethoven.", price: "15-200€ (selon la salle et la catégorie)", tip: "Les places debout (Stehplätze) à l'Opéra national coûtent 4€ et sont mises en vente 80 minutes avant le spectacle — le meilleur rapport qualité-prix culturel de Vienne. Arrivez à 17h30." },
          ],
        },
      ],
    },
    de: {
      city: "Wien",
      country: "Österreich",
      heroTitle: "3 Tage in Wien: kaiserliche Paläste, Wiener Kaffee und Mozart",
      heroSubtitle: "Schloss Schönbrunn, das Kunsthistorische Museum und der Prater — die Habsburgerhauptstadt in drei Tagen voller kaiserlicher Kultur und Kaffee mit Strudel.",
      bestMonths: "April bis Juni und September bis Oktober",
      budget: "100-170€/Tag",
      travelTips: [
        "Die Vienna City Card (17€/24h, 25€/48h, 29€/72h) beinhaltet unbegrenzte öffentliche Verkehrsmittel (U-Bahn, Straßenbahn, Bus)",
        "Wiener Kaffeehäuser sind UNESCO-Weltkulturerbe — man kann stundenlang bei einem einzigen Kaffee sitzen, ohne dass jemand drängt",
        "Stehplätze in der Staatsoper (4€) sind Wiens beste kulturelle Investition — dieselben Künstler, 50-mal günstiger",
        "Wiens Leitungswasser kommt direkt aus den Alpen — es ist eines der reinsten Wässer der Welt, kein Bedarf an Flaschenwasser",
        "Wiens Museen kosten 18-25€, aber die Vienna City Card bietet in vielen davon Ermäßigungen — prüfen Sie immer, ob ein reduzierter Tarif verfügbar ist",
      ],
      days: [
        {
          theme: "Die Innere Stadt — das Herz der Habsburger",
          activities: [
            { name: "Stephansdom", description: "Wiens Wahrzeichen, erbaut im 12. Jahrhundert im spätgotischen Stil. Sein Dach aus 266.000 bunten Keramikziegeln ist einzigartig in Europa. Vom Nordturm (Aufzug) aus ist der Blick auf die Innere Stadt beeindruckend.", price: "Kostenlos (Nordturm 6€)", tip: "Die Kaisergruft unter dem Dom (6€) bewahrt die Eingeweide der Habsburger in 54 Urnen — die Därme im Stephansdom, die Herzen in der Augustinerkirche, die Körper in der Kaisergruft." },
            { name: "Hofburg — der kaiserliche Palast", description: "Der Palast der Habsburger im Zentrum Wiens, mit 2.600 Räumen, der Kaisergruft, den Kaiserappartements und der Schatzkammer, in der die habsburgische Krone und der Heilige Gral aufbewahrt werden.", price: "17€ (Appartements + Sisi Museum)", tip: "Das Sisi Museum über Kaiserin Sisi ist der meistbesuchte Teil der Hofburg. Die Schatzkammer (separat 16€) beherbergt die Heilige Lanze und die Krönungsjuwelen des Heiligen Römischen Reichs." },
            { name: "Café Central — das berühmteste von Wien", description: "1876 eröffnet, war das Café Central der Treffpunkt von Freud, Trotzki, Hitler (zu verschiedenen Zeiten) und der gesamten Wiener Intelligenzija. Die Marmorgewölbe und die Wachsfigur des Schriftstellers Peter Altenberg am Eingang sind historisch.", price: "8-15€ (Kaffee und Strudel)", tip: "Eine Melange (Kaffee mit aufgeschäumter Milch) und warmer Apfelstrudel mit Sahne ist die typischste Wiener Bestellung. Kommen Sie zur Öffnung (9 Uhr), um einen Tisch zu bekommen — es ist immer voll." },
            { name: "Ringstraße und die großen Museen", description: "Der Ringboulevard aus dem 19. Jahrhundert, den Kaiser Franz Joseph I. errichten ließ, gesäumt von Wiens wichtigsten Gebäuden: Staatsoper, Kunsthistorisches Museum, Parlament, Rathaus und Burgtheater.", price: "Kostenlos (zu Fuß)", tip: "Eine Straßenbahnfahrt rund um die gesamte Ringstraße (Linien 1 und 2) kostet nur den regulären Fahrpreis (2,40€) und dient als 40-minütige Führung an Wiens schönsten Gebäuden vorbei." },
          ],
        },
        {
          theme: "Schönbrunn und das Belvedere",
          activities: [
            { name: "Schloss Schönbrunn", description: "Der Sommerpalast der Habsburger, Österreichs meistbesuchte Attraktion, mit 1.441 Räumen. Die Grand Tour (40 Räume) umfasst den Spiegelsaal, in dem der junge Mozart für Maria Theresia auftrat. Der Garten mit der Gloriette an der Spitze ist beeindruckend.", price: "25€ (Grand Tour + Gärten)", tip: "Kommen Sie zur Öffnung (8:30 Uhr), um die Schlangen zu vermeiden. Die Gloriette an der Spitze des Gartens hat das beste Café mit Blick auf Schönbrunn und Wien — 15 Minuten Fußweg hinauf." },
            { name: "Wiener Schnitzel zum Mittagessen", description: "Das Wiener Schnitzel ist Österreichs Nationalgericht — paniertes Kalbfleisch, in Butter gebraten, serviert mit Kartoffelsalat und Zitronenscheiben. Die Restaurants rund um den Naschmarkt sind die besten.", price: "14-22€", tip: "Das echte Schnitzel wird aus Kalbfleisch gemacht (Wiener Art) — die Schweinefleisch-Version ist billiger, aber anders. Figlmüller in der Wollzeile und Bäckerstraße serviert seit 1905 Wiens berühmteste Version." },
            { name: "Naschmarkt — Wiens Wiener-ster Markt", description: "Wiens größter Freiluftmarkt, mit 120 Ständen mit österreichischem Käse, Meeresfrüchten, persischen Gewürzen, jüdischen Einlegespezialitäten und dem besten Tafelspitz der Stadt.", price: "Kostenlos", tip: "Der Naschmarkt-Flohmarkt samstags (bis 18 Uhr) bietet Antiquitäten, Vintage-Kleidung und Gemälde — die bohemienhafteste Atmosphäre Wiens." },
            { name: "Belvedere — Klimts Der Kuss", description: "Der Barockpalast von Prinz Eugen von Savoyen beherbergt die weltweit größte Sammlung von Werken Gustav Klimts, darunter Der Kuss (1907-08), Österreichs wertvollstes Gemälde.", price: "18€", tip: "Der Kuss hängt im ersten Raum im ersten Stock — beeindruckend wegen des echten Blattgolds, das in die Leinwand eingearbeitet ist. Wissen Sie genau, was Sie sehen möchten, bevor Sie ankommen, um sich nicht unter den 200 Räumen zu verlieren." },
          ],
        },
        {
          theme: "Museen, ein Konzert und der Prater",
          activities: [
            { name: "Kunsthistorisches Museum", description: "Österreichs wichtigstes kunsthistorisches Museum, mit einer der reichsten Sammlungen flämischer Malerei der Welt: Vermeer, Rembrandt, Bruegel, Tizian und Velázquez, in einem kaiserlichen Palast an der Ringstraße.", price: "21€", tip: "Die große Kuppelhalle des Museums mit ihrer Marmorkuppel und den Gemälden von Canova und Klimt in den Seitenpavillons ist eines der schönsten Interieurs Europas. Der Bruegel-Saal (30 Werke des Älteren) ist weltweit einzigartig." },
            { name: "Mittagessen im Prater", description: "Das ehemalige kaiserliche Jagdgebiet, heute Wiens größter Park, mit dem berühmten Riesenrad (der Riesenrad von 1897) und traditionellen Würstelständen.", price: "3-8€ (Würstel)", tip: "Käsekrainer (eine Wurst mit geschmolzenem Käse im Inneren), mit Senf und Roggenbrot vom Würstelstand, ist Wiens authentischster Snack. Die Wiener essen ihn stehend, zu jeder Tageszeit." },
            { name: "Riesenrad — das historische Riesenrad von 1897", description: "Das 65 Meter hohe Riesenrad des Wiener Praters, erbaut 1897 und ein Symbol Wiens. Die Gondel dreht sich 20 Minuten lang, mit Panoramablick über den Prater und die Stadt.", price: "13€", tip: "Das Riesenrad bietet von seinem höchsten Punkt (65m) einen der besten Ausblicke auf Wien. Gondeln können für private Abendessen gebucht werden (300€) — Wiens romantischstes Date." },
            { name: "Klassisches Musikkonzert in Wien", description: "Wien ist die Welthauptstadt der klassischen Musik. Die Staatsoper, der Musikverein (der weltweit angesehenste Konzertsaal) und das Konzerthaus veranstalten täglich Konzerte von Mozart, Strauss, Brahms und Beethoven.", price: "15-200€ (je nach Veranstaltungsort und Kategorie)", tip: "Stehplätze in der Staatsoper kosten 4€ und werden 80 Minuten vor der Vorstellung verkauft — Wiens bester kultureller Gegenwert. Kommen Sie um 17:30 Uhr." },
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
    fr: {
      city: "Cusco",
      country: "Pérou",
      heroTitle: "3 jours à Cusco : le nombril du monde inca",
      heroSubtitle: "Sacsayhuamán, la Vallée Sacrée, le Machu Picchu et la meilleure cuisine andine — Cusco est la porte d'entrée de l'Empire inca et l'une des destinations les plus fascinantes au monde.",
      bestMonths: "Mai à septembre (saison sèche)",
      budget: "50-90 USD/jour",
      travelTips: [
        "L'altitude de Cusco (3 400m) exige une acclimatation — arrivez 2 jours avant le Machu Picchu et prenez-la doucement le premier jour",
        "Le thé de coca est le remède andin contre le soroche (mal des montagnes) — les hôtels en offrent gratuitement et c'est légal au Pérou",
        "Réservez le Machu Picchu et le train des mois à l'avance en haute saison — les places partent vite",
        "Le billet touristique général de Cusco (S/130) couvre Sacsayhuamán et plusieurs sites archéologiques — achetez-le le premier jour",
        "Le climat de Cusco est sec et ensoleillé en saison sèche (mai-septembre) mais froid la nuit (5-10°C) — prévoyez une veste",
      ],
      days: [
        {
          theme: "Acclimatation, la place et les temples incas",
          activities: [
            { name: "Plaza de Armas, Cusco — arrivée et acclimatation", description: "La place centrale de Cusco, construite sur l'ancienne Huacaypata inca (la place des larmes), entourée de la cathédrale du XVIe siècle et de l'église de la Compañía de Jesús. La maçonnerie inca visible sous les bâtiments coloniaux est fascinante.", price: "Gratuit", tip: "Votre premier jour à Cusco (3 400m) doit être tranquille — acclimatez-vous en buvant beaucoup d'eau et du thé de coca (disponible dans chaque café et hôtel). Évitez l'alcool et l'exercice le premier jour." },
            { name: "Qorikancha — le Temple du Soleil", description: "Le temple le plus sacré de l'Empire inca, dédié au dieu solaire Inti, dont les murs de pierre parfaitement taillés sont recouverts par le couvent de Santo Domingo. Les murs incas sont construits avec plus de précision que la construction coloniale au-dessus.", price: "S/15", tip: "Les pierres incas du Qorikancha s'emboîtent sans mortier, avec des tolérances inférieures à 0,5mm — les ingénieurs modernes ne savent toujours pas exactement comment cela a été fait. La niche dorée qui abritait autrefois l'image du Soleil était visible depuis tout Cusco." },
            { name: "Déjeuner de cuy et chicha à San Blas", description: "Le quartier artisanal de Cusco, avec la plus petite église des Amériques et le cuy (cochon d'Inde rôti) comme plat le plus représentatif de la cuisine andine. La chicha de jora (bière de maïs violet) est la plus ancienne boisson des Andes.", price: "S/25-60", tip: "Le cuy est servi entier, rôti, avec des pommes de terre andines et de la salade. Pour les moins aventureux, le lomo saltado avec pommes de terre natives et alpaga grillé sont délicieux et accessibles." },
            { name: "Sacsayhuamán — la forteresse inca", description: "La forteresse cérémonielle inca surplombant Cusco, avec des blocs de calcaire pesant jusqu'à 125 tonnes, assemblés en zigzag sans mortier. La vue sur Cusco depuis les murs, et le paysage andin environnant, est saisissante.", price: "S/130 (billet touristique général)", tip: "Le billet touristique général (S/130) couvre Sacsayhuamán, Qenqo, Puca Pucara et Tambomachay — quatre sites archéologiques autour de Cusco. Rentable si vous les visitez tous le même jour." },
          ],
        },
        {
          theme: "La Vallée Sacrée des Incas",
          activities: [
            { name: "Marché de Pisac", description: "Le marché le plus célèbre de la Vallée Sacrée, avec de l'artisanat textile des communautés quechuas, de la céramique, des bijoux en argent et des produits andins. Le village de Pisac abrite les plus grandes ruines incas après le Machu Picchu.", price: "Gratuit", tip: "Le marché artisanal cible les touristes (avec marchandage), mais le marché local du dimanche (7h-13h) est pour les habitants — on y vend pommes de terre natives, maïs géant et plantes médicinales andines." },
            { name: "Ruines de Pisac", description: "Le complexe archéologique inca au-dessus du village de Pisac, avec des terrasses agricoles en spirale couvrant toute la montagne, l'Intihuatana (cadran solaire) et des tombes creusées dans la roche vive.", price: "Inclus avec le billet touristique", tip: "Le sentier vers les ruines peut se faire à pied (45 minutes de montée) ou en taxi depuis le village (S/10). La montée à pied traverse des terrasses actives où l'on peut voir des familles quechuas au travail." },
            { name: "Déjeuner à Urubamba — le cœur de la Vallée", description: "Le village d'Urubamba, au centre de la Vallée Sacrée, offre la meilleure gastronomie de la Vallée. Chicha morada, soupe de poulet andine, chuño phuti et les meilleurs anticuchos de cœur du Pérou.", price: "S/20-40", tip: "Le restaurant Kuychi Rumi à Urubamba a la meilleure vue sur la Vallée et sert une cuisine andine traditionnelle. Le buffet de midi (S/45) propose plus de 12 plats différents." },
            { name: "Ollantaytambo — le village inca vivant", description: "Le seul village d'Amérique latine où les habitants vivent encore dans des maisons incas originales du XVe siècle. La forteresse-temple d'Ollantaytambo et ses terrasses en gradins face à la rivière forment l'un des sites incas les mieux conservés.", price: "S/70 (entrée du site archéologique)", tip: "Ollantaytambo est la gare pour le Machu Picchu (Aguas Calientes). Si vous partez au Machu Picchu le lendemain, passez la nuit ici — l'ambiance nocturne du village inca est magique." },
          ],
        },
        {
          theme: "Machu Picchu — la merveille du monde",
          activities: [
            { name: "Train vers Aguas Calientes (Machu Picchu Pueblo)", description: "Le trajet en train depuis Ollantaytambo (ou Cusco) jusqu'à Aguas Calientes traverse la Vallée Sacrée et entre dans la jungle amazonienne haute. Le paysage passe radicalement des Andes arides à la jungle tropicale.", price: "S/120-200 (aller-retour)", tip: "Réservez le train Inca Rail ou Peru Rail des mois à l'avance en haute saison (juin-août). Les sièges côté droit (direction Ollantaytambo → Aguas Calientes) offrent une meilleure vue sur la rivière." },
            { name: "Machu Picchu — la citadelle", description: "La citadelle inca du XVe siècle nichée dans les nuages, construite à 2 430 mètres d'altitude entre les sommets du Huayna Picchu et du Cerro Machu Picchu. L'une des 7 merveilles du monde moderne.", price: "S/200 (entrée de base)", tip: "Réserver en ligne des mois à l'avance est ESSENTIEL — les places quotidiennes sont limitées. Le circuit 1 (le classique) inclut la Porte du Soleil et l'essentiel des points forts." },
            { name: "Ascension du Huayna Picchu ou de la montagne Machu Picchu", description: "Le Huayna Picchu (le pic derrière la citadelle) permet de grimper 360 mètres supplémentaires par des marches incas taillées dans la roche. La montagne Machu Picchu (plus facile) offre la fameuse vue aérienne de la citadelle.", price: "S/80 (supplément)", tip: "Le Huayna Picchu n'a que 400 places quotidiennes et se réserve des mois à l'avance — réservez-le en même temps que votre billet d'entrée. La montée est raide, avec des marches irrégulières." },
            { name: "Retour à Cusco", description: "Le train retour d'Aguas Calientes vers Ollantaytambo ou Cusco boucle la boucle autour de la Vallée Sacrée. Le train de l'après-midi offre les meilleures vues sur la jungle haute éclairée par le soleil du soir.", price: "Inclus avec le billet de train aller-retour", tip: "Si votre budget est serré, le bus d'Aguas Calientes à Ollantaytambo (S/30, 4h) est une alternative au train. Le bus suit la route qui longe la rivière, avec vue sur les glaciers." },
          ],
        },
      ],
    },
    de: {
      city: "Cusco",
      country: "Peru",
      heroTitle: "3 Tage in Cusco: der Nabel der Inka-Welt",
      heroSubtitle: "Sacsayhuamán, das Heilige Tal, Machu Picchu und die beste andine Küche — Cusco ist das Tor zum Inka-Reich und eines der faszinierendsten Reiseziele der Welt.",
      bestMonths: "Mai bis September (Trockenzeit)",
      budget: "50-90 USD/Tag",
      travelTips: [
        "Die Höhe von Cusco (3.400m) erfordert Akklimatisierung — kommen Sie 2 Tage vor Machu Picchu an und nehmen Sie den ersten Tag ruhig",
        "Koka-Tee ist das andine Mittel gegen Soroche (Höhenkrankheit) — Hotels bieten ihn kostenlos an und er ist in Peru legal",
        "Buchen Sie Machu Picchu und den Zug Monate im Voraus in der Hochsaison — Plätze sind schnell ausverkauft",
        "Cuscos allgemeines Touristenticket (S/130) deckt Sacsayhuamán und mehrere archäologische Stätten ab — kaufen Sie es am ersten Tag",
        "Cuscos Wetter ist trocken und sonnig in der Trockenzeit (Mai-September), aber nachts kalt (5-10°C) — bringen Sie eine Jacke mit",
      ],
      days: [
        {
          theme: "Akklimatisierung, der Platz und die Inka-Tempel",
          activities: [
            { name: "Plaza de Armas, Cusco — Ankunft und Akklimatisierung", description: "Cuscos zentraler Platz, erbaut über der Inka-Huacaypata (dem Platz der Tränen), umgeben von der Kathedrale aus dem 16. Jahrhundert und der Kirche der Compañía de Jesús. Das sichtbare Inka-Mauerwerk unter den Kolonialgebäuden ist faszinierend.", price: "Kostenlos", tip: "Ihr erster Tag in Cusco (3.400m) sollte ruhig verlaufen — akklimatisieren Sie sich mit viel Wasser und Koka-Tee (in jedem Café und Hotel erhältlich). Vermeiden Sie am ersten Tag Alkohol und Sport." },
            { name: "Qorikancha — der Sonnentempel", description: "Der heiligste Tempel des Inka-Reiches, dem Sonnengott Inti gewidmet, dessen perfekt behauene Steinmauern vom Kloster Santo Domingo überlagert werden. Die Inka-Mauern sind präziser gebaut als die darüberliegende Kolonialkonstruktion.", price: "S/15", tip: "Die Inka-Steine des Qorikancha fügen sich ohne Mörtel zusammen, mit Toleranzen unter 0,5mm — moderne Ingenieure wissen bis heute nicht genau, wie das gemacht wurde. Die goldene Nische, die einst das Bild der Sonne enthielt, war von ganz Cusco aus sichtbar." },
            { name: "Cuy- und Chicha-Mittagessen in San Blas", description: "Cuscos Künstlerviertel, mit der kleinsten Kirche Amerikas und Cuy (gebratenes Meerschweinchen) als repräsentativstes Gericht der andinen Küche. Chicha de jora (violettes Maisbier) ist das älteste Getränk der Anden.", price: "S/25-60", tip: "Cuy wird ganz, gebraten, mit andinen Kartoffeln und Salat serviert. Für die weniger Abenteuerlustigen sind Lomo Saltado mit einheimischen Kartoffeln und gegrilltem Alpaka köstlich und zugänglich." },
            { name: "Sacsayhuamán — die Inka-Festung", description: "Die zeremonielle Inka-Festung mit Blick auf Cusco, mit Kalksteinblöcken von bis zu 125 Tonnen Gewicht, im Zickzackmuster ohne Mörtel zusammengefügt. Der Blick auf Cusco von den Mauern und die umgebende andine Landschaft sind atemberaubend.", price: "S/130 (allgemeines Touristenticket)", tip: "Das allgemeine Touristenticket (S/130) deckt Sacsayhuamán, Qenqo, Puca Pucara und Tambomachay ab — vier archäologische Stätten rund um Cusco. Lohnt sich, wenn Sie alle am selben Tag besuchen." },
          ],
        },
        {
          theme: "Das Heilige Tal der Inkas",
          activities: [
            { name: "Markt von Pisac", description: "Der berühmteste Markt des Heiligen Tals, mit textilem Kunsthandwerk der Quechua-Gemeinden, Keramik, Silberschmuck und andinen Produkten. Die Stadt Pisac beherbergt die größten Inka-Ruinen nach Machu Picchu.", price: "Kostenlos", tip: "Der Kunsthandwerksmarkt richtet sich an Touristen (mit Verhandeln), aber der lokale Sonntagsmarkt (7-13 Uhr) ist für Einheimische — dort werden einheimische Kartoffeln, Riesenmais und andine Heilkräuter verkauft." },
            { name: "Ruinen von Pisac", description: "Der archäologische Inka-Komplex über der Stadt Pisac, mit spiralförmigen Ackerterrassen, die den ganzen Berg bedecken, dem Intihuatana (Sonnenuhr) und in den lebenden Fels gehauenen Gräbern.", price: "Im Touristenticket enthalten", tip: "Der Weg zu den Ruinen kann zu Fuß (45-minütiger Aufstieg) oder mit dem Taxi von der Stadt aus (S/10) zurückgelegt werden. Der Aufstieg führt an aktiven Terrassen vorbei, auf denen Sie Quechua-Familien bei der Arbeit sehen." },
            { name: "Mittagessen in Urubamba — das Herz des Tals", description: "Die Stadt Urubamba, im Zentrum des Heiligen Tals, bietet die beste Gastronomie des Tals. Chicha morada, andine Hühnersuppe, Chuño Phuti und die besten Herz-Anticuchos Perus.", price: "S/20-40", tip: "Das Restaurant Kuychi Rumi in Urubamba hat den besten Blick auf das Tal und serviert traditionelle andine Küche. Das Mittagsbuffet (S/45) umfasst mehr als 12 verschiedene Gerichte." },
            { name: "Ollantaytambo — die lebendige Inka-Stadt", description: "Die einzige Stadt Lateinamerikas, in der Menschen noch in original Inka-Häusern aus dem 15. Jahrhundert leben. Die Tempel-Festung von Ollantaytambo und ihre gestuften, zum Fluss gerichteten Terrassen bilden eine der am besten erhaltenen Inka-Stätten.", price: "S/70 (Eintritt zur archäologischen Stätte)", tip: "Ollantaytambo ist der Bahnhof für Machu Picchu (Aguas Calientes). Wenn Sie am nächsten Tag nach Machu Picchu fahren, übernachten Sie hier — die nächtliche Atmosphäre der Inka-Stadt ist magisch." },
          ],
        },
        {
          theme: "Machu Picchu — das Weltwunder",
          activities: [
            { name: "Zug nach Aguas Calientes (Machu Picchu Pueblo)", description: "Die Zugfahrt von Ollantaytambo (oder Cusco) nach Aguas Calientes durchquert das Heilige Tal und dringt in den hohen Amazonas-Dschungel ein. Die Landschaft wandelt sich dramatisch von trockenen Anden zu tropischem Dschungel.", price: "S/120-200 (Hin- und Rückfahrt)", tip: "Buchen Sie den Zug von Inca Rail oder Peru Rail Monate im Voraus in der Hochsaison (Juni-August). Sitze auf der rechten Seite (Richtung Ollantaytambo → Aguas Calientes) haben bessere Flussblicke." },
            { name: "Machu Picchu — die Zitadelle", description: "Die Inka-Zitadelle aus dem 15. Jahrhundert in den Wolken, erbaut auf 2.430 Metern Höhe zwischen den Gipfeln Huayna Picchu und Cerro Machu Picchu. Eines der 7 Weltwunder der Neuzeit.", price: "S/200 (Basiseintritt)", tip: "Die Online-Buchung Monate im Voraus ist UNERLÄSSLICH — die täglichen Plätze sind begrenzt. Circuit 1 (der klassische) umfasst das Sonnentor und die meisten Höhepunkte." },
            { name: "Besteigung des Huayna Picchu oder des Machu-Picchu-Berges", description: "Der Huayna Picchu (der Gipfel hinter der Zitadelle) führt über in den Fels gehauene Inka-Stufen weitere 360 Meter hinauf. Der Machu-Picchu-Berg (einfacher) bietet den berühmten Luftblick auf die Zitadelle.", price: "S/80 (Aufpreis)", tip: "Der Huayna Picchu hat nur 400 tägliche Plätze und ist Monate im Voraus ausgebucht — buchen Sie ihn zusammen mit Ihrem Eintrittsticket. Der Aufstieg ist steil, mit unebenen Stufen." },
            { name: "Rückkehr nach Cusco", description: "Der Rückzug von Aguas Calientes nach Ollantaytambo oder Cusco schließt die Runde um das Heilige Tal. Der Nachmittagszug bietet die besten Blicke auf den hohen Dschungel, beleuchtet von der Abendsonne.", price: "Im Hin- und Rückfahrtticket enthalten", tip: "Wenn Ihr Budget knapp ist, ist der Bus von Aguas Calientes nach Ollantaytambo (S/30, 4h) eine Alternative zum Zug. Der Bus folgt der Straße am Fluss entlang, mit Blick auf die Gletscher." },
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
    fr: {
      city: "Medellín",
      country: "Colombie",
      heroTitle: "3 jours à Medellín : la ville du printemps éternel",
      heroSubtitle: "El Poblado, le Metrocable, les fleurs d'Envigado et l'histoire de transformation la plus incroyable d'Amérique latine — Medellín est aujourd'hui la ville la plus innovante de Colombie.",
      bestMonths: "Décembre à mars et juillet à août",
      budget: "40-70 USD/jour",
      travelTips: [
        "Le métro de Medellín (MET), avec son système de téléphérique, est le meilleur transport public de Colombie — achetez la carte Cívica pour l'utiliser",
        "Medellín reste autour de 25°C toute l'année (la ville du printemps éternel) — vêtements légers toujours, peut-être un gilet pour le soir",
        "Le café colombien de Medellín est parmi les meilleurs au monde — demandez toujours un café d'origine unique fraîchement moulu, jamais instantané",
        "Les taxis via application (InDriver, Uber) sont plus sûrs que les taxis de rue — utilisez-les toujours la nuit",
        "La Colombie est une puissance de biodiversité — le Jardin botanique, le Parque Arví et la réserve d'El Romeral donnent accès à une nature tropicale saisissante",
      ],
      days: [
        {
          theme: "Le centre historique et la Plaza Botero",
          activities: [
            { name: "Plaza Botero et le Museo de Antioquia", description: "La place avec 23 sculptures originales de Fernando Botero, l'artiste colombien le plus célèbre au monde — toutes données par lui à sa ville natale. Le Museo de Antioquia adjacent abrite la plus grande collection d'œuvres de Botero au monde.", price: "Gratuit (place) / 20 000 COP (musée)", tip: "Les sculptures sont faites pour être touchées et photographiées — Botero les a conçues pour que les gens interagissent avec elles. 'Hombre a Caballo' (Homme à cheval) est la plus emblématique pour les photos." },
            { name: "Parque de las Luces et le centre-ville de Medellín", description: "Le parc aux 300 colonnes lumineuses au cœur du centre historique, qui crée un spectacle visuel unique la nuit. La Biblioteca España, sur la colline au-dessus du quartier Santo Domingo, est visible d'ici.", price: "Gratuit", tip: "Le centre-ville de Medellín est bien plus sûr qu'il y a 20 ans — promenez-vous normalement dans les zones touristiques pendant la journée. Les vendeurs de fruits tropicaux dans la rue ont les meilleures mangues et grenadilles." },
            { name: "Déjeuner de bandeja paisa", description: "La bandeja paisa est le plat le plus représentatif d'Antioquia : riz, haricots, couenne de porc, chorizo, œuf frit, avocat, banane plantain douce et sauce hogao, le tout sur un même plateau. Impossible de la finir seul.", price: "18 000-30 000 COP", tip: "Le restaurant El Rancherito au centre-ville propose la bandeja paisa la plus authentique. La mazamorra (dessert au maïs et au lait) qui suit est incontournable." },
            { name: "Quartier El Poblado — parcs et cafés", description: "Le quartier le plus moderne et sûr de Medellín, avec le Parque El Poblado, la Calle del Lleras (le cœur de la vie nocturne) et la plus haute concentration de cafés, restaurants et boutiques de la ville.", price: "Gratuit", tip: "Le café colombien à El Poblado coûte 2 000-5 000 COP et est de qualité supérieure — Medellín est à 1 400m d'altitude, et les plantations de café sont à seulement 30 minutes en voiture." },
          ],
        },
        {
          theme: "Le Metrocable et les quartiers de flanc de colline",
          activities: [
            { name: "Metrocable Ligne K — Santo Domingo", description: "Le système de téléphérique aérien reliant le métro aux quartiers des flancs de la vallée de l'Aburrá. La ligne K monte jusqu'au quartier Santo Domingo et offre la meilleure vue sur Medellín et la vallée depuis les cabines.", price: "3 200 COP (avec la carte Cívica du métro)", tip: "Achetez la carte Cívica au métro pour utiliser le téléphérique. Le meilleur angle pour les photos de la vallée est à la station Andalucía (avant-dernière avant le sommet)." },
            { name: "Parque Arví — la forêt au-dessus de Medellín", description: "Le parc écologique de 1 763 hectares au-dessus des montagnes de Medellín, accessible via le Metrocable ligne L depuis Santo Domingo. Sentiers, papillons, marché d'artisanat indigène et la plus belle vue sur la vallée de l'Aburrá.", price: "5 000 COP (téléphérique Arví)", tip: "Le marché d'artisanat indigène à l'intérieur du Parque Arví le week-end propose des produits des communautés natives d'Antioquia — artisanat, miel et plantes médicinales." },
            { name: "Tour du passé dans le quartier La Candelaria", description: "Une visite à travers les quartiers qui documentent la transformation de Medellín : du Barrio Pablo Escobar aux ensembles résidentiels qui ont remplacé les favelas. Les guides locaux offrent la perspective la plus honnête.", price: "30 000-60 000 COP (visite guidée)", tip: "Réservez uniquement des guides locaux certifiés — ceux qui ont vécu la transformation donnent un contexte humain que les circuits internationaux ne peuvent pas donner. Les visites gratuites à pied partent du Parque de Bolívar." },
            { name: "Dîner à Laureles — le quartier le plus authentique", description: "Le quartier résidentiel de la classe moyenne professionnelle de Medellín, avec la meilleure concentration de restaurants locaux, bars à vin et la vie nocturne la plus authentique de la ville.", price: "25 000-60 000 COP", tip: "L'Avenida Laureles propose le meilleur sancocho de poulet de Medellín. Pour un dîner gastronomique, El Cielo (chef Juan Manuel Barrientos) propose la cuisine colombienne la plus avant-gardiste." },
          ],
        },
        {
          theme: "La Feria de las Flores et le Jardin botanique",
          activities: [
            { name: "Jardin botanique de Medellín", description: "Le jardin botanique le plus riche en biodiversité de Colombie, avec 4 500 plantes tropicales, l'Orquideórama (la structure en bois la plus photographiée de Medellín) et un lac abritant les plus grands nénuphars des Amériques.", price: "Gratuit", tip: "L'Orquideórama est une œuvre d'architecture paramétrique récompensée par le RIBA. Les orchidées en fleurs (la Colombie compte 4 000 espèces) sont impressionnantes toute l'année." },
            { name: "Quartier Manila et le street art de Medellín", description: "Medellín possède la deuxième scène d'art urbain la plus importante de Colombie après Bogotá. Les quartiers Manila et Laureles ont les meilleures fresques, d'artistes comme Guache et Crisp.", price: "Gratuit", tip: "La visite gratuite (pourboire) de graffitis Medellín Urban Street Art part du Parque El Poblado. La zone de la Calle 70 à Laureles a les fresques les plus récentes." },
            { name: "Mercado del Río", description: "Le marché gastronomique le plus populaire de Medellín, avec plus de 60 étals de cuisine colombienne et internationale, cocktails de fruits tropicaux et l'ambiance de déjeuner la plus festive de la ville.", price: "15 000-40 000 COP", tip: "Les jus de lulo, fruit de la passion, tomate d'arbre et corossol au Mercado del Río coûtent 3 000-5 000 COP et sont les meilleurs de Medellín. La tequila au chamoy n'est pas colombienne — commandez plutôt de l'aguardiente." },
            { name: "Coucher de soleil depuis le Cerro de las Tres Cruces", description: "Les trois croix au sommet de la colline au-dessus du quartier Boston, avec la meilleure vue panoramique sur toute la vallée de l'Aburrá : Medellín d'un bout à l'autre, le métro en contrebas dans la plaine et les montagnes environnantes.", price: "Gratuit", tip: "La montée de la colline (45 min à pied) est sûre pendant la journée quand il y a du monde. Le dimanche il y a plus de monde et une ambiance plus animée. Depuis le sommet, on voit clairement le téléphérique de Santo Domingo." },
          ],
        },
      ],
    },
    de: {
      city: "Medellín",
      country: "Kolumbien",
      heroTitle: "3 Tage in Medellín: die Stadt des ewigen Frühlings",
      heroSubtitle: "El Poblado, das Metrocable, die Blumen von Envigado und Lateinamerikas unglaublichste Verwandlungsgeschichte — Medellín ist heute Kolumbiens innovativste Stadt.",
      bestMonths: "Dezember bis März und Juli bis August",
      budget: "40-70 USD/Tag",
      travelTips: [
        "Medellíns Metro (MET) mit ihrem Seilbahnsystem ist Kolumbiens bester öffentlicher Nahverkehr — kaufen Sie die Cívica-Karte, um sie zu nutzen",
        "Medellín bleibt das ganze Jahr über bei etwa 25°C (die Stadt des ewigen Frühlings) — immer leichte Kleidung, vielleicht eine Strickjacke für die Abende",
        "Medellíns kolumbianischer Kaffee gehört zu den besten der Welt — verlangen Sie immer frisch gebrühten Single-Origin-Kaffee, niemals Instant",
        "App-basierte Taxis (InDriver, Uber) sind sicherer als Straßentaxis — nutzen Sie sie immer nachts",
        "Kolumbien ist eine Biodiversitäts-Supermacht — der Botanische Garten, der Parque Arví und das Reservat El Romeral bieten Zugang zu atemberaubender tropischer Natur",
      ],
      days: [
        {
          theme: "Das historische Zentrum und die Plaza Botero",
          activities: [
            { name: "Plaza Botero und das Museo de Antioquia", description: "Der Platz mit 23 Originalskulpturen von Fernando Botero, dem berühmtesten kolumbianischen Künstler der Welt — alle von ihm seiner Heimatstadt gespendet. Das angrenzende Museo de Antioquia beherbergt die weltweit größte Sammlung von Boteros Werken.", price: "Kostenlos (Platz) / COP 20.000 (Museum)", tip: "Die Skulpturen sind zum Anfassen und Fotografieren gedacht — Botero entwarf sie zur Interaktion. 'Hombre a Caballo' (Mann zu Pferd) ist die ikonischste für Fotos." },
            { name: "Parque de las Luces und die Innenstadt von Medellín", description: "Der Park mit 300 Lichtsäulen im Herzen des historischen Zentrums, der nachts ein einzigartiges visuelles Schauspiel erzeugt. Die Biblioteca España, auf dem Hügel über dem Viertel Santo Domingo, ist von hier aus sichtbar.", price: "Kostenlos", tip: "Die Innenstadt von Medellín ist heute weit sicherer als vor 20 Jahren — bewegen Sie sich tagsüber normal in den touristischen Bereichen. Die Straßenverkäufer mit tropischen Früchten haben die besten Mangos und Granadillas." },
            { name: "Bandeja-paisa-Mittagessen", description: "Bandeja paisa ist Antioquias repräsentativstes Gericht: Reis, Bohnen, Schweineschwarte, Chorizo, Spiegelei, Avocado, süße Kochbananen und Hogao-Sauce, alles auf einem Teller. Allein unmöglich zu schaffen.", price: "COP 18.000-30.000", tip: "Das Restaurant El Rancherito in der Innenstadt hat die authentischste Bandeja paisa. Die anschließende Mazamorra (Mais-Milch-Dessert) ist ein Muss." },
            { name: "Viertel El Poblado — Parks und Cafés", description: "Medellíns modernstes und sicherstes Viertel, mit dem Parque El Poblado, der Calle del Lleras (dem Herz des Nachtlebens) und der höchsten Konzentration an Cafés, Restaurants und Boutiquen der Stadt.", price: "Kostenlos", tip: "Kolumbianischer Kaffee in El Poblado kostet COP 2.000-5.000 und ist von Spitzenqualität — Medellín liegt auf 1.400m Höhe, und die Kaffeeplantagen sind nur 30 Minuten mit dem Auto entfernt." },
          ],
        },
        {
          theme: "Das Metrocable und die Hangviertel",
          activities: [
            { name: "Metrocable Linie K — Santo Domingo", description: "Das Luftseilbahnsystem, das die Metro mit den Vierteln an den Hängen des Aburrá-Tals verbindet. Linie K führt hinauf zum Viertel Santo Domingo und bietet aus den Kabinen den besten Blick auf Medellín und das Tal.", price: "COP 3.200 (mit der Cívica-Karte der Metro)", tip: "Kaufen Sie die Cívica-Karte an der Metro, um die Seilbahn zu nutzen. Der beste Winkel für Talfotos ist an der Station Andalucía (vorletzte vor der Bergstation)." },
            { name: "Parque Arví — der Wald über Medellín", description: "Der 1.763 Hektar große Ökopark über den Bergen von Medellín, erreichbar über die Metrocable-Linie L von Santo Domingo aus. Wanderwege, Schmetterlinge, ein Markt für indigenes Kunsthandwerk und der schönste Blick auf das Aburrá-Tal.", price: "COP 5.000 (Seilbahn Arví)", tip: "Der Markt für indigenes Kunsthandwerk im Parque Arví am Wochenende bietet Produkte der einheimischen Gemeinschaften Antioquias — Kunsthandwerk, Honig und Heilpflanzen." },
            { name: "Tour der Vergangenheit im Viertel La Candelaria", description: "Eine Tour durch die Viertel, die Medellíns Wandel dokumentieren: vom Barrio Pablo Escobar bis zu den Wohnsiedlungen, die die Favelas ersetzten. Lokale Guides geben die ehrlichste Perspektive.", price: "COP 30.000-60.000 (geführte Tour)", tip: "Buchen Sie nur zertifizierte lokale Guides — diejenigen, die den Wandel miterlebt haben, geben einen menschlichen Kontext, den internationale Touren nicht bieten können. Kostenlose Wandertouren starten vom Parque de Bolívar." },
            { name: "Abendessen in Laureles — das authentischste Viertel", description: "Medellíns Wohnviertel der beruflichen Mittelschicht, mit der besten Konzentration lokaler Restaurants, Weinbars und dem authentischsten Nachtleben der Stadt.", price: "COP 25.000-60.000", tip: "Die Avenida Laureles hat Medellíns besten Hühner-Sancocho. Für gehobene Küche bietet El Cielo (Küchenchef Juan Manuel Barrientos) die avantgardistischste kolumbianische Küche." },
          ],
        },
        {
          theme: "Feria de las Flores und der Botanische Garten",
          activities: [
            { name: "Botanischer Garten von Medellín", description: "Kolumbiens artenreichster botanischer Garten, mit 4.500 tropischen Pflanzen, dem Orquideórama (Medellíns meistfotografierter Holzstruktur) und einem See mit den größten Seerosen Amerikas.", price: "Kostenlos", tip: "Das Orquideórama ist ein Werk parametrischer Architektur, das einen RIBA-Preis gewann. Die blühenden Orchideen (Kolumbien hat 4.000 Arten) sind das ganze Jahr über beeindruckend." },
            { name: "Viertel Manila und Medellíns Graffiti", description: "Medellín hat nach Bogotá die zweitwichtigste urbane Kunstszene Kolumbiens. Die Viertel Manila und Laureles haben die besten Wandbilder, von Künstlern wie Guache und Crisp.", price: "Kostenlos", tip: "Die kostenlose Graffiti-Tour Medellín Urban Street Art (auf Trinkgeldbasis) startet vom Parque El Poblado. Der Bereich der Calle 70 in Laureles hat die neuesten Wandbilder." },
            { name: "Mercado del Río", description: "Medellíns beliebtester Feinschmeckermarkt, mit mehr als 60 Ständen kolumbianischer und internationaler Küche, tropischen Fruchtcocktails und der festlichsten Mittagsatmosphäre der Stadt.", price: "COP 15.000-40.000", tip: "Die Säfte aus Lulo, Passionsfrucht, Baumtomate und Guanabana im Mercado del Río kosten COP 3.000-5.000 und sind die besten in Medellín. Tequila mit Chamoy ist nicht kolumbianisch — bestellen Sie stattdessen Aguardiente." },
            { name: "Sonnenuntergang vom Cerro de las Tres Cruces", description: "Die drei Kreuze auf dem Hügel über dem Viertel Boston, mit dem besten Panoramablick auf das gesamte Aburrá-Tal: Medellín von einem Ende zum anderen, die Metro unten in der Ebene und die umliegenden Berge.", price: "Kostenlos", tip: "Der Aufstieg auf den Hügel (45 Min zu Fuß) ist tagsüber sicher, wenn Menschen unterwegs sind. Sonntags ist mehr los und die Stimmung lebendiger. Vom Gipfel aus sieht man deutlich die Seilbahn von Santo Domingo." },
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
    fr: {
      city: "Singapour",
      country: "Singapour",
      heroTitle: "3 jours à Singapour : le futur du XXIe siècle",
      heroSubtitle: "Gardens by the Bay, Chinatown, Marina Bay Sands et la street food des hawker centres — Singapour en trois jours parfaitement organisés.",
      bestMonths: "Février à avril",
      budget: "150-250 SGD/jour (~110-185 USD)",
      travelTips: [
        "Singapour dispose de l'un des systèmes de transport public les plus efficaces au monde — la carte EZ-Link couvre le métro (MRT), les bus et le LRT",
        "La nourriture des hawker centres (4-8 SGD) est de la même qualité que les restaurants de luxe — c'est le grand égalisateur culinaire de Singapour",
        "Le climat est tropical toute l'année (30°C, 80% d'humidité) — vêtements légers et crème solaire toujours",
        "Singapour a des lois très strictes : interdiction de fumer dans les lieux publics, interdiction de manger dans le métro et interdiction du chewing-gum",
        "Singapour est chère pour l'hébergement (150-300 SGD/nuit) mais bon marché pour la nourriture et les transports",
      ],
      days: [
        {
          theme: "Marina Bay et le Singapour futuriste",
          activities: [
            { name: "Gardens by the Bay", description: "Le complexe de jardins futuristes le plus spectaculaire au monde, avec les Supertrees (structures en acier de 25 à 50 mètres) et ses deux dômes géodésiques : Cloud Forest (une forêt tropicale de 35m de haut) et Flower Dome.", price: "28 SGD (Cloud Forest + Flower Dome)", tip: "Le Supertree Grove offre le meilleur coucher de soleil et un spectacle lumineux gratuit à 19h45 et 20h45. Grimper sur la passerelle entre les Supertrees (10 SGD) offre des vues sur Marina Bay." },
            { name: "Marina Bay Sands Skypark", description: "L'hôtel le plus emblématique de Singapour, avec une piscine à débordement au 57e étage (réservée aux clients) et la terrasse SkyPark offrant les meilleures vues de Singapour. Le spectacle gratuit de lumière et d'eau Spectra a lieu devant l'hôtel.", price: "32 SGD (plateforme d'observation)", tip: "La plateforme d'observation du SkyPark est ouverte au public (32 SGD). La vue sur la skyline, Gardens by the Bay et le détroit de Singapour depuis 200 mètres de haut est incomparable." },
            { name: "ArtScience Museum", description: "Le musée en forme de fleur de lotus flottant sur les eaux de Marina Bay, avec des expositions d'art numérique, de science et de technologie. L'exposition permanente Future World (art numérique de teamLab) est l'une des plus impressionnantes au monde.", price: "21 SGD", tip: "Future World de teamLab propose l'installation 'Forest of Life', où les lumières réagissent au mouvement — l'une des expériences visuelles les plus uniques d'Asie." },
            { name: "Spectra — spectacle de lumière et d'eau", description: "Le spectacle gratuit à Marina Bay Waterfront devant The Shoppes, avec des jets d'eau de 30 mètres et des projections laser synchronisées à la musique. L'un des meilleurs spectacles nocturnes gratuits au monde.", price: "Gratuit", tip: "Le meilleur emplacement est sur le pont Helix ou le long du front de mer face à l'ArtScience Museum. Le spectacle de 20h45 les vendredis et samedis est le plus long." },
          ],
        },
        {
          theme: "Chinatown, Little India et les hawker centres",
          activities: [
            { name: "Chinatown Heritage Centre", description: "Le Chinatown de Singapour, avec le Bouddha de Jade au temple Sri Mariamman, des boutiques de thé chinoises ancestrales et le célèbre Maxwell Food Centre. Les rues Pagoda, Trengganu et Sago ont les maisons de boutique les plus colorées.", price: "Gratuit (Heritage Centre 12 SGD)", tip: "Le temple Thian Hock Keng (1840) est le plus ancien temple hokkien de Singapour — la décoration du toit en dragon de porcelaine est extraordinaire. Entrée gratuite." },
            { name: "Maxwell Food Centre — le hawker centre le plus célèbre", description: "Le centre de street food le plus historique de Singapour, avec plus de 100 étals sous un même toit. Le riz au poulet de Tian Tian, le rojak de fruits et le laksa sont les plats les plus recherchés.", price: "4-8 SGD par plat", tip: "L'étal de riz au poulet hainanais Tian Tian (le préféré d'Anthony Bourdain) a une file d'attente dès 10h30 — arrivez avant midi pour manger. Il coûte 5-6 SGD." },
            { name: "Little India — Serangoon Road", description: "Le quartier indien de Singapour, avec le temple Sri Veeramakaliamman (l'un des plus élaborés d'Asie), des boutiques d'épices, des étals de fleurs et le Tekka Market, qui abrite la meilleure cuisine indienne de la ville.", price: "Gratuit", tip: "Le biryani de l'étal Allauddin's au Tekka Market (6 SGD) est le meilleur de Singapour. Le quartier est particulièrement coloré le dimanche, quand les travailleurs migrants célèbrent leur jour de congé." },
            { name: "Clarke Quay et la rivière Singapour au coucher du soleil", description: "L'ancien quai de la rivière Singapour, aujourd'hui un quartier de bars et restaurants dans des maisons coloniales restaurées. L'heure dorée illumine les façades colorées avec la rivière au premier plan.", price: "Gratuit", tip: "Les bateaux de croisière fluviale partent de Clarke Quay toutes les 30 minutes (25 SGD) et passent devant les sites les plus historiques de la ville. La croisière nocturne est la plus belle." },
          ],
        },
        {
          theme: "Sentosa, le zoo et la nature de Singapour",
          activities: [
            { name: "Singapore Zoo — le meilleur au monde", description: "Constamment classé parmi les meilleurs zoos au monde, avec des habitats en concept ouvert pour les animaux. Les girafes, les orangs-outans de Bornéo en semi-liberté et les crocodiles de rivière sont les plus fascinants.", price: "49 SGD", tip: "Jungle Breakfast with Wildlife (33 SGD supplémentaires) propose un petit-déjeuner aux côtés des orangs-outans à 9h — une expérience unique. Réservez des semaines à l'avance." },
            { name: "Île de Sentosa et Universal Studios", description: "L'île des loisirs de Singapour, avec Universal Studios, la plage de Siloso et un téléphérique panoramique. Les attractions Transformers, Harry Potter et Jurassic Park d'Universal sont les meilleures d'Asie.", price: "88 SGD (Universal Studios)", tip: "L'Express Pass d'Universal Studios (40 SGD supplémentaires) évite les files pour les principales attractions — rentable si le parc est bondé. Le téléphérique (35 SGD) depuis Mount Faber offre les meilleures vues sur le détroit." },
            { name: "Haw Par Villa — le parc des dix enfers", description: "Le parc à thème le plus étrange d'Asie, créé en 1937, avec 1 000 statues dépeignant la mythologie chinoise et les 10 tribunaux de l'enfer. Une expérience surréaliste unique en son genre.", price: "Gratuit", tip: "Haw Par Villa est l'un des lieux les plus singuliers de Singapour et pratiquement inconnu des touristes — un joyau caché parmi les parcs à thème commerciaux." },
            { name: "Dernier dîner au Newton Circus Hawker Centre", description: "Le hawker centre nocturne le plus célèbre de Singapour (celui de Crazy Rich Asians), avec des crabes de boue, des orchidées frites, des fruits de mer grillés et du laksa sous les étoiles tropicales.", price: "15-40 SGD", tip: "Le crabe au chili (50-80 SGD la portion) est le plat national de Singapour — commandez-le à l'étal avec la plus longue file. Le Man Tou (petits pains frits) pour tremper dans la sauce est obligatoire." },
          ],
        },
      ],
    },
    de: {
      city: "Singapur",
      country: "Singapur",
      heroTitle: "3 Tage in Singapur: die Zukunft des 21. Jahrhunderts",
      heroSubtitle: "Gardens by the Bay, Chinatown, Marina Bay Sands und Hawker-Centre-Essen — Singapur in drei perfekt geplanten Tagen.",
      bestMonths: "Februar bis April",
      budget: "150-250 SGD/Tag (~110-185 USD)",
      travelTips: [
        "Singapur hat eines der effizientesten öffentlichen Verkehrssysteme der Welt — die EZ-Link-Karte deckt Metro (MRT), Busse und LRT ab",
        "Essen aus den Hawker Centres (4-8 SGD) hat dieselbe Qualität wie Luxusrestaurants — es ist Singapurs großer kulinarischer Gleichmacher",
        "Das Klima ist das ganze Jahr über tropisch (30°C, 80% Luftfeuchtigkeit) — immer leichte Kleidung und Sonnencreme",
        "Singapur hat sehr strenge Gesetze: Rauchverbot an öffentlichen Orten, Essverbot in der Metro und Kaugummiverbot",
        "Singapur ist teuer bei der Unterkunft (150-300 SGD/Nacht), aber günstig bei Essen und Transport",
      ],
      days: [
        {
          theme: "Marina Bay und das futuristische Singapur",
          activities: [
            { name: "Gardens by the Bay", description: "Der spektakulärste futuristische Gartenkomplex der Welt, mit den Supertrees (25-50 Meter hohe Stahlstrukturen) und seinen zwei geodätischen Kuppeln: Cloud Forest (ein 35m hoher tropischer Wald) und Flower Dome.", price: "28 SGD (Cloud Forest + Flower Dome)", tip: "Der Supertree Grove bietet den besten Sonnenuntergang und eine kostenlose Lichtshow um 19:45 und 20:45 Uhr. Der Aufstieg auf den Skywalk zwischen den Supertrees (10 SGD) bietet Blicke auf die Marina Bay." },
            { name: "Marina Bay Sands Skypark", description: "Singapurs ikonischstes Hotel, mit einem Infinity-Pool im 57. Stock (nur für Gäste) und der SkyPark-Terrasse mit Singapurs besten Ausblicken. Die kostenlose Licht- und Wassershow Spectra findet vor dem Hotel statt.", price: "32 SGD (Aussichtsplattform)", tip: "Die Aussichtsplattform des SkyPark ist öffentlich zugänglich (32 SGD). Der Blick auf die Skyline, Gardens by the Bay und die Straße von Singapur aus 200 Metern Höhe ist unvergleichlich." },
            { name: "ArtScience Museum", description: "Das lotusblütenförmige Museum, das auf dem Wasser der Marina Bay schwimmt, mit Ausstellungen zu digitaler Kunst, Wissenschaft und Technologie. Die Dauerausstellung Future World (digitale Kunst von teamLab) ist eine der beeindruckendsten der Welt.", price: "21 SGD", tip: "Future World von teamLab bietet die Installation 'Forest of Life', bei der die Lichter auf Bewegung reagieren — eines der einzigartigsten visuellen Erlebnisse Asiens." },
            { name: "Spectra — Licht- und Wassershow", description: "Die kostenlose Show am Marina Bay Waterfront vor The Shoppes, mit 30 Meter hohen Wasserfontänen und Laserprojektionen, synchronisiert zu Musik. Eine der besten kostenlosen nächtlichen Shows der Welt.", price: "Kostenlos", tip: "Der beste Platz ist auf der Helix Bridge oder entlang der Uferpromenade gegenüber dem ArtScience Museum. Die Show um 20:45 Uhr freitags und samstags ist die längste." },
          ],
        },
        {
          theme: "Chinatown, Little India und die Hawker Centres",
          activities: [
            { name: "Chinatown Heritage Centre", description: "Singapurs Chinatown, mit dem Jade-Buddha im Sri-Mariamman-Tempel, traditionellen chinesischen Teeläden und dem berühmten Maxwell Food Centre. Die Straßen Pagoda, Trengganu und Sago haben die farbenprächtigsten Shophouses.", price: "Kostenlos (Heritage Centre 12 SGD)", tip: "Der Thian-Hock-Keng-Tempel (1840) ist Singapurs ältester Hokkien-Tempel — die Porzellandrachen-Dekoration auf dem Dach ist außergewöhnlich. Kostenloser Eintritt." },
            { name: "Maxwell Food Centre — das berühmteste Hawker Centre", description: "Singapurs historischstes Street-Food-Zentrum, mit mehr als 100 Ständen unter einem Dach. Tian Tians Hühnerreis, Fruchtrojak und Laksa sind die begehrtesten Gerichte.", price: "4-8 SGD pro Gericht", tip: "Der Stand Tian Tian Hainanese Chicken Rice (Anthony Bourdains Favorit) hat ab 10:30 Uhr eine Schlange — kommen Sie vor Mittag zum Essen. Es kostet 5-6 SGD." },
            { name: "Little India — Serangoon Road", description: "Singapurs indisches Viertel, mit dem Sri-Veeramakaliamman-Tempel (einer der aufwendigsten Asiens), Gewürzläden, Blumenständen und dem Tekka Market, der die beste indische Küche der Stadt beherbergt.", price: "Kostenlos", tip: "Das Biryani am Stand Allauddin's im Tekka Market (6 SGD) ist das beste in Singapur. Das Viertel ist sonntags besonders farbenfroh, wenn Wanderarbeiter ihren freien Tag feiern." },
            { name: "Clarke Quay und der Singapore River bei Sonnenuntergang", description: "Der alte Kai am Singapore River, heute ein Viertel mit Bars und Restaurants in restaurierten kolonialen Shophouses. Die goldene Stunde erleuchtet die bunten Fassaden mit dem Fluss im Vordergrund.", price: "Kostenlos", tip: "Flusskreuzfahrtboote fahren alle 30 Minuten von Clarke Quay ab (25 SGD) und passieren die historischsten Sehenswürdigkeiten der Stadt. Die nächtliche Kreuzfahrt ist die schönste." },
          ],
        },
        {
          theme: "Sentosa, der Zoo und Singapurs Natur",
          activities: [
            { name: "Singapore Zoo — der beste der Welt", description: "Wird beständig unter den besten Zoos der Welt eingestuft, mit offenen Lebensräumen für die Tiere. Die Giraffen, die frei umherlaufenden Borneo-Orang-Utans und die Flusskrokodile sind am faszinierendsten.", price: "49 SGD", tip: "Jungle Breakfast with Wildlife (33 SGD Aufpreis) bietet um 9 Uhr ein Frühstück neben den Orang-Utans — ein einzigartiges Erlebnis. Buchen Sie Wochen im Voraus." },
            { name: "Insel Sentosa und Universal Studios", description: "Singapurs Vergnügungsinsel, mit Universal Studios, dem Siloso Beach und einer Panorama-Seilbahn. Die Fahrgeschäfte Transformers, Harry Potter und Jurassic Park bei Universal sind die besten Asiens.", price: "88 SGD (Universal Studios)", tip: "Der Express Pass von Universal Studios (40 SGD Aufpreis) umgeht die Schlangen bei den Hauptattraktionen — lohnt sich, wenn der Park überfüllt ist. Die Seilbahn (35 SGD) vom Mount Faber bietet die besten Ausblicke auf die Meerenge." },
            { name: "Haw Par Villa — der Park der zehn Höllen", description: "Asiens seltsamster Themenpark, 1937 erschaffen, mit 1.000 Statuen, die die chinesische Mythologie und die 10 Gerichtshöfe der Hölle darstellen. Ein surreales Erlebnis der besonderen Art.", price: "Kostenlos", tip: "Haw Par Villa ist einer der einzigartigsten Orte Singapurs und bei Touristen praktisch unbekannt — ein verstecktes Juwel unter den kommerziellen Themenparks." },
            { name: "Letztes Abendessen im Newton Circus Hawker Centre", description: "Singapurs berühmtestes nächtliches Hawker Centre (das aus Crazy Rich Asians), mit Mangrovenkrabben, frittierten Orchideen, gegrillten Meeresfrüchten und Laksa unter den tropischen Sternen.", price: "15-40 SGD", tip: "Chilikrabbe (50-80 SGD pro Portion) ist Singapurs Nationalgericht — bestellen Sie sie am Stand mit der längsten Schlange. Man Tou (frittierte Brötchen) zum Eintunken in die Soße ist Pflicht." },
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
    fr: {
      city: "Mexico",
      country: "Mexique",
      heroTitle: "4 jours à Mexico : tacos, pyramides et culture préhispanique",
      heroSubtitle: "Teotihuacán, Xochimilco, La Condesa et les meilleurs tacos au monde — l'itinéraire pour découvrir la métropole la plus fascinante d'Amérique latine.",
      bestMonths: "Octobre à mai (saison sèche)",
      budget: "40-80 USD/jour",
      travelTips: [
        "Le métro de Mexico est le moins cher au monde (5 MXN) et dessert presque partout — apprenez les lignes principales avant d'arriver",
        "Mexico est à 2 240m d'altitude — les premiers jours vous pouvez ressentir de la fatigue ou un souffle court, prenez-le doucement",
        "Les tacos de rue sont sûrs et délicieux — cherchez les stands avec le plus de clients locaux",
        "Uber et Cabify sont les options de transport les plus sûres pour les touristes, surtout la nuit",
        "La saison des pluies (juin-octobre) apporte de brèves averses l'après-midi — ayez toujours un parapluie ou un poncho",
      ],
      days: [
        {
          theme: "Le Zócalo et le centre historique",
          activities: [
            { name: "Zócalo et la cathédrale métropolitaine", description: "La plus grande place d'Amérique latine, entourée du Palais national, de la cathédrale métropolitaine (la plus grande des Amériques) et de l'ancien hôtel de ville. Diego Rivera a peint les fresques du Palais national représentant l'histoire du Mexique.", price: "Gratuit (Palais national gratuit)", tip: "Les fresques de Diego Rivera au Palais national sont au premier étage près de l'escalier principal — entrée gratuite sur présentation d'une pièce d'identité. La scène du marché de Tlatelolco est la plus impressionnante." },
            { name: "Templo Mayor — les ruines aztèques sous la ville", description: "Le centre cérémoniel de Tenochtitlán, la capitale aztèque, découvert en 1978 sous le centre historique de Mexico. Le musée adjacent abrite la Pierre du Soleil (le mal nommé 'calendrier aztèque') et le Teocalli de la Guerre Sacrée.", price: "85 MXN", tip: "Le Templo Mayor montre 7 couches de construction superposées — les Aztèques construisaient un nouveau temple par-dessus le précédent tous les 52 ans. Le monolithe de Tlaltecuhtli (des tonnes de pierre sculptée) est la découverte la plus récente." },
            { name: "Tacos au Mercado de la Merced", description: "Le plus grand marché du centre historique, avec plus de 3 000 étals de nourriture, des tacos de canasta, des tamales, de l'atole et la plus grande variété de piments frais du Mexique.", price: "20-40 MXN par taco", tip: "Les tacos de canasta (haricots, couenne et pomme de terre, livrés à vélo dans un panier en palme) sont le petit-déjeuner le plus authentique du centre-ville. Le taco placero aux nopales et fromage frais est parfait pour les végétariens." },
            { name: "Bellas Artes et l'Alameda", description: "Le Palacio de Bellas Artes, symbole du Mexique moderne avec sa coupole en marbre, abrite des fresques de Diego Rivera, José Clemente Orozco et David Alfaro Siqueiros. Le parc Alameda Central est le plus ancien des Amériques (1592).", price: "80 MXN (galerie)", tip: "Le plafond en verre de la salle principale du Bellas Artes, avec son rideau en verre Tiffany représentant le volcan Popocatépetl, ne se voit que lors d'un spectacle ou d'une visite guidée. Les fresques des étages supérieurs sont librement accessibles." },
          ],
        },
        {
          theme: "Teotihuacán — la cité des dieux",
          activities: [
            { name: "Pyramides de Teotihuacán — tôt le matin", description: "La plus grande cité préhispanique de Méso-amérique, à 50 km de Mexico, avec la Pyramide du Soleil (la troisième plus grande au monde), la Pyramide de la Lune et l'Avenue des Morts de 2 km.", price: "100 MXN", tip: "Prenez le premier bus (6h30) depuis le Terminal del Norte. Arriver avant 8h, avant les groupes touristiques organisés, vous donne les pyramides presque pour vous seul." },
            { name: "Ascension de la Pyramide du Soleil", description: "Les 248 marches de la Pyramide du Soleil mènent au sommet, à 70 mètres de haut, avec des vues à 360° sur la vallée de Teotihuacán et toute la cité cérémonielle. C'est l'expérience la plus impressionnante de l'archéologie mexicaine.", price: "Inclus", tip: "Montez des deux côtés pour profiter des vues complètes. Les marches sont raides et l'altitude est de 2 300m — allez-y doucement et emportez de l'eau." },
            { name: "Déjeuner avec vue sur les pyramides", description: "Les restaurants face aux pyramides servent des tlayudas oaxaquéniennes, des enchiladas et du pulque (boisson d'agave fermentée). Le restaurant La Gruta, à l'intérieur d'une grotte naturelle datant du IIe siècle avant J.-C., est le plus impressionnant.", price: "120-200 MXN", tip: "La Gruta (à l'intérieur de la grotte) se trouve juste à la sortie du site archéologique. Appelez à l'avance pour réserver pour le midi — c'est un lieu emblématique qui vaut le prix." },
            { name: "Retour, et dîner de mole à La Condesa", description: "La Condesa est le quartier le plus cosmopolite et gastronomique de Mexico, avec des restaurants mexicains haut de gamme comme Quintonil et Pujol (5e au monde), et des cafés le long des allées arborées de l'Avenida Ámsterdam.", price: "100-300 MXN", tip: "Le mole noir oaxaquénien et le mole poblano sont les deux sauces les plus complexes de la cuisine mexicaine (avec plus de 30 ingrédients). Les meilleurs se trouvent chez Azul y Oro, à Roma." },
          ],
        },
        {
          theme: "Xochimilco et le sud de la ville",
          activities: [
            { name: "Xochimilco — les canaux préhispaniques", description: "Les dernières chinampas (îles artificielles flottantes) de la civilisation aztèque, classées au patrimoine mondial de l'UNESCO. Des trajineras colorées naviguent sur les canaux avec des mariachis, des vendeurs de nourriture et l'ambiance la plus festive de Mexico.", price: "400-600 MXN (2h de trajinera)", tip: "Louez une trajinera entière entre amis (6-8 personnes) plutôt que de partager. Les mariachis qui s'approchent dans leur propre bateau facturent 200-300 MXN par chanson." },
            { name: "Coyoacán — le quartier de Frida Kahlo", description: "Le plus beau quartier colonial du Mexique, avec son marché artisanal, sa place à thème coyote et la Casa Azul (musée Frida Kahlo). Diego Rivera et Frida Kahlo y ont vécu, et le quartier conserve encore leur esprit artistique.", price: "Gratuit (Casa Azul 250 MXN)", tip: "Réservez la Casa Azul (musée Frida Kahlo) en ligne à l'avance — seulement 80 personnes par heure. La glacerie de Coyoacán (face à l'église) propose des saveurs incroyables." },
            { name: "Casa Azul — Musée Frida Kahlo", description: "La maison où Frida Kahlo est née et est morte, conservée telle qu'elle l'a laissée, avec ses robes tehuana, ses tableaux et le fauteuil roulant depuis lequel elle travaillait dans ses dernières années. Le jardin avec ses pyramides aztèques est saisissant.", price: "250 MXN", tip: "La nature morte dans la cuisine bleue, avec des crânes décorés et des pots en terre cuite, en dit plus sur le caractère de Frida que ses tableaux. L'atelier dans le jardin conserve son chevalet original." },
            { name: "Mezcal et tacos gastronomiques à Roma Norte", description: "Roma Norte est le quartier le plus tendance de Mexico, avec des bars à mezcal artisanal (d'Oaxaca, Guerrero et Michoacán), des tacos gastronomiques et la scène culinaire la plus avant-gardiste du Mexique.", price: "80-200 MXN", tip: "Bósforo Mezcalería et Hanky Panky proposent les meilleurs mezcals artisanaux du Mexique. Commandez toujours le mezcal sec, à température ambiante — jamais avec des glaçons." },
          ],
        },
        {
          theme: "Chapultepec et le meilleur musée du Mexique",
          activities: [
            { name: "Musée national d'Anthropologie", description: "Le meilleur musée d'Amérique latine et l'un des plus fins au monde, avec la Pierre du Soleil aztèque, le masque funéraire en jade de Pakal de Palenque et la salle maya avec la recréation de la fresque de Bonampak. Ses 24 salles couvrent toutes les civilisations du Mexique.", price: "85 MXN", tip: "La salle mexica (aztèque), avec la Pierre du Soleil et la Coatlicue, est la plus saisissante. Deux heures suffisent pour les salles principales — voir tout le musée prend plus de 5 heures." },
            { name: "Bois de Chapultepec", description: "Le plus grand parc urbain d'Amérique latine (686 hectares), avec le château de Chapultepec, un lac artificiel et le zoo, seul endroit des Amériques abritant un panda géant. Le parc est le poumon vert et social de Mexico.", price: "Gratuit (Zoo gratuit, Château 90 MXN)", tip: "Le château de Chapultepec (jadis résidence de Maximilien de Habsbourg et de Porfirio Díaz) abrite les plus belles fresques d'O'Gorman sur l'histoire mexicaine et des vues sur le Paseo de la Reforma." },
            { name: "Paseo de la Reforma et l'Ange", description: "La grande avenue de Mexico, conçue en 1864 par Maximilien, inspirée des Champs-Élysées. L'Ange de l'Indépendance, la fontaine Diana Cazadora et la Torre Mayor forment la skyline la plus reconnaissable de Mexico.", price: "Gratuit", tip: "Le dimanche, le Paseo de la Reforma se ferme aux voitures et se remplit de cyclistes, de patineurs et de vendeurs de rue — l'ambiance la plus festive et familiale de la ville." },
            { name: "Dernier dîner à Polanco — haute cuisine mexicaine", description: "Polanco abrite les restaurants les plus primés du Mexique : Pujol (top 10 mondial), Quintonil, Máximo Bistrot. Si votre budget est serré, les tacos de suadero du stand de Cuauhtémoc sont tout aussi mémorables.", price: "300-1 500 MXN", tip: "Pujol et Quintonil exigent une réservation des mois à l'avance. Pour une expérience culinaire accessible, le Mercado Roma dans la Colonia Roma propose 70 étals de cuisine mexicaine gastronomique à partir de 80 MXN." },
          ],
        },
      ],
    },
    de: {
      city: "Mexiko-Stadt",
      country: "Mexiko",
      heroTitle: "4 Tage in Mexiko-Stadt: Tacos, Pyramiden und präkolumbianische Kultur",
      heroSubtitle: "Teotihuacán, Xochimilco, La Condesa und die besten Tacos der Welt — die Reiseroute, um die faszinierendste Metropole Lateinamerikas zu entdecken.",
      bestMonths: "Oktober bis Mai (Trockenzeit)",
      budget: "40-80 USD/Tag",
      travelTips: [
        "Die Metro von Mexiko-Stadt ist die günstigste der Welt (MXN 5) und erreicht fast überall — lernen Sie die Hauptlinien, bevor Sie ankommen",
        "Mexiko-Stadt liegt auf 2.240m Höhe — in den ersten Tagen können Sie sich müde oder kurzatmig fühlen, nehmen Sie es langsam",
        "Straßenstand-Tacos sind sicher und köstlich — suchen Sie Stände mit den meisten einheimischen Kunden",
        "Uber und Cabify sind die sichersten Transportmittel für Touristen, besonders nachts",
        "Die Regenzeit (Juni-Oktober) bringt kurze Nachmittagsschauer mit sich — nehmen Sie immer einen Regenschirm oder Poncho mit",
      ],
      days: [
        {
          theme: "Der Zócalo und das historische Zentrum",
          activities: [
            { name: "Zócalo und die Kathedrale Metropolitana", description: "Der größte Platz Lateinamerikas, umgeben vom Nationalpalast, der Kathedrale Metropolitana (der größten der Amerikas) und dem alten Rathaus. Diego Rivera malte die Wandbilder des Nationalpalastes, die Mexikos Geschichte darstellen.", price: "Kostenlos (Nationalpalast kostenlos)", tip: "Diego Riveras Wandbilder im Nationalpalast befinden sich im ersten Stock neben der Haupttreppe — kostenloser Eintritt mit Ausweis. Die Szene des Marktes von Tlatelolco ist die beeindruckendste." },
            { name: "Templo Mayor — die aztekischen Ruinen unter der Stadt", description: "Das Zeremonialzentrum von Tenochtitlán, der aztekischen Hauptstadt, entdeckt 1978 unter dem historischen Zentrum von Mexiko-Stadt. Das angrenzende Museum beherbergt den Sonnenstein (den fälschlicherweise 'aztekischer Kalender' genannten Stein) und den Teocalli des Heiligen Krieges.", price: "MXN 85", tip: "Der Templo Mayor zeigt 7 übereinanderliegende Bauschichten — die Azteken bauten alle 52 Jahre einen neuen Tempel über den vorherigen. Der Monolith Tlaltecuhtli (Tonnen behauenen Steins) ist der jüngste Fund." },
            { name: "Tacos auf dem Mercado de la Merced", description: "Der größte Markt im historischen Zentrum, mit mehr als 3.000 Essensständen, Tacos de canasta, Tamales, Atole und Mexikos größter Vielfalt an frischen Chilis.", price: "MXN 20-40 pro Taco", tip: "Tacos de canasta (Bohnen, Schweineschwarte und Kartoffel, per Fahrrad in einem Palmkorb geliefert) sind das authentischste Frühstück der Innenstadt. Der Taco placero mit Nopales und frischem Käse ist perfekt für Vegetarier." },
            { name: "Bellas Artes und die Alameda", description: "Der Palacio de Bellas Artes, ein Symbol des modernen Mexikos mit seiner Marmorkuppel, beherbergt Wandbilder von Diego Rivera, José Clemente Orozco und David Alfaro Siqueiros. Der Park Alameda Central ist der älteste der Amerikas (1592).", price: "MXN 80 (Galerie)", tip: "Die Glasdecke im Hauptsaal des Bellas Artes, mit ihrem Tiffany-Glasvorhang, der den Vulkan Popocatépetl darstellt, ist nur während einer Vorstellung oder Führung zu sehen. Die Wandbilder in den oberen Stockwerken sind frei zugänglich." },
          ],
        },
        {
          theme: "Teotihuacán — die Stadt der Götter",
          activities: [
            { name: "Pyramiden von Teotihuacán — als Erstes am Morgen", description: "Die größte präkolumbianische Stadt Mesoamerikas, 50 km von Mexiko-Stadt entfernt, mit der Sonnenpyramide (der drittgrößten der Welt), der Mondpyramide und der 2 km langen Straße der Toten.", price: "MXN 100", tip: "Nehmen Sie den ersten Bus (6:30 Uhr) vom Terminal del Norte. Wenn Sie vor 8 Uhr ankommen, vor den organisierten Reisegruppen, haben Sie die Pyramiden fast für sich allein." },
            { name: "Besteigung der Sonnenpyramide", description: "Die 248 Stufen der Sonnenpyramide führen zum Gipfel, 70 Meter hoch, mit 360°-Ausblicken über das Teotihuacán-Tal und die gesamte Zeremonialstadt. Es ist das beeindruckendste Erlebnis der mexikanischen Archäologie.", price: "Inbegriffen", tip: "Steigen Sie von beiden Seiten hinauf, um die vollen Ausblicke zu genießen. Die Stufen sind steil und die Höhe liegt bei 2.300m — gehen Sie langsam vor und nehmen Sie Wasser mit." },
            { name: "Mittagessen mit Blick auf die Pyramiden", description: "Die Restaurants gegenüber den Pyramiden servieren Oaxaca-Tlayudas, Enchiladas und Pulque (fermentiertes Agavengetränk). Das Restaurant La Gruta, in einer natürlichen Höhle aus dem 2. Jahrhundert v. Chr., ist am beeindruckendsten.", price: "MXN 120-200", tip: "La Gruta (im Inneren der Höhle) liegt direkt am Ausgang der archäologischen Stätte. Rufen Sie im Voraus an, um für die Mittagszeit zu reservieren — es ist ein ikonischer Ort, der den Preis wert ist." },
            { name: "Rückkehr und Mole-Abendessen in La Condesa", description: "La Condesa ist Mexiko-Stadts kosmopolitischstes, kulinarisch fokussiertes Viertel, mit gehobenen mexikanischen Restaurants wie Quintonil und Pujol (Nr. 5 der Welt) und Cafés entlang der baumbestandenen Mittelstreifen der Avenida Ámsterdam.", price: "MXN 100-300", tip: "Schwarze Oaxaca-Mole und Mole poblano sind die beiden komplexesten Saucen der mexikanischen Küche (mit mehr als 30 Zutaten). Die besten gibt es bei Azul y Oro, in Roma." },
          ],
        },
        {
          theme: "Xochimilco und der Süden der Stadt",
          activities: [
            { name: "Xochimilco — die präkolumbianischen Kanäle", description: "Die letzten Chinampas (schwimmende künstliche Inseln) der aztekischen Zivilisation, UNESCO-Weltkulturerbe. Bunte Trajinera-Boote fahren auf den Kanälen mit Mariachis, Essensverkäufern und der festlichsten Atmosphäre Mexiko-Stadts.", price: "MXN 400-600 (2h Trajinera-Fahrt)", tip: "Mieten Sie eine ganze Trajinera mit Freunden (6-8 Personen), statt sich eine zu teilen. Die Mariachis, die in ihrem eigenen Boot heranfahren, verlangen MXN 200-300 pro Lied." },
            { name: "Coyoacán — Frida Kahlos Viertel", description: "Mexikos schönstes Kolonialviertel, mit seinem Kunsthandwerksmarkt, dem Kojoten-Platz und der Casa Azul (Frida-Kahlo-Museum). Diego Rivera und Frida Kahlo lebten hier, und das Viertel trägt noch immer ihren künstlerischen Geist.", price: "Kostenlos (Casa Azul MXN 250)", tip: "Buchen Sie die Casa Azul (Frida-Kahlo-Museum) online im Voraus — nur 80 Personen pro Stunde. Die Eisdiele in Coyoacán (gegenüber der Kirche) hat unglaubliche Geschmacksrichtungen." },
            { name: "Casa Azul — Frida-Kahlo-Museum", description: "Das Haus, in dem Frida Kahlo geboren wurde und starb, erhalten genau so, wie sie es hinterließ, mit ihren Tehuana-Kleidern, ihren Gemälden und dem Rollstuhl, aus dem sie in ihren letzten Jahren arbeitete. Der Garten mit seinen aztekischen Pyramiden ist beeindruckend.", price: "MXN 250", tip: "Das Stillleben in der blauen Küche, mit verzierten Totenköpfen und Tontöpfen, sagt mehr über Fridas Charakter aus als die Gemälde. Das Atelier im Garten bewahrt ihre originale Staffelei." },
            { name: "Mezcal und gehobene Tacos in Roma Norte", description: "Roma Norte ist Mexiko-Stadts angesagtestes Viertel, mit handwerklichen Mezcal-Bars (aus Oaxaca, Guerrero und Michoacán), gehobenen Tacos und Mexikos avantgardistischster kulinarischer Szene.", price: "MXN 80-200", tip: "Bósforo Mezcalería und Hanky Panky haben Mexikos besten handwerklichen Mezcal. Bestellen Sie Mezcal immer pur, bei Raumtemperatur — niemals mit Eis." },
          ],
        },
        {
          theme: "Chapultepec und Mexikos bestes Museum",
          activities: [
            { name: "Nationalmuseum für Anthropologie", description: "Lateinamerikas bestes Museum und eines der feinsten der Welt, mit dem aztekischen Sonnenstein, Pakals Jade-Totenmaske aus Palenque und dem Maya-Saal mit der Rekonstruktion des Wandbilds von Bonampak. Seine 24 Säle decken jede Zivilisation Mexikos ab.", price: "MXN 85", tip: "Der mexica- (aztekische) Saal mit dem Sonnenstein und der Coatlicue ist der beeindruckendste. Zwei Stunden reichen für die Hauptsäle — das ganze Museum zu sehen dauert 5+ Stunden." },
            { name: "Wald von Chapultepec", description: "Lateinamerikas größter städtischer Park (686 Hektar), mit dem Schloss Chapultepec, einem künstlichen See und dem Zoo, Heimat des einzigen Riesenpandas der Amerikas. Der Park ist Mexiko-Stadts grüne, soziale Lunge.", price: "Kostenlos (Zoo kostenlos, Schloss MXN 90)", tip: "Das Schloss Chapultepec (einst Wohnsitz von Maximilian von Habsburg und Porfirio Díaz) beherbergt O'Gormans schönste Wandbilder zur mexikanischen Geschichte und Ausblicke über den Paseo de la Reforma." },
            { name: "Paseo de la Reforma und der Engel", description: "Mexiko-Stadts große Avenue, 1864 von Maximilian entworfen, inspiriert von den Champs-Élysées. Der Unabhängigkeitsengel, der Diana-Cazadora-Brunnen und der Torre Mayor bilden Mexiko-Stadts erkennbarste Skyline.", price: "Kostenlos", tip: "Sonntags wird der Paseo de la Reforma für Autos gesperrt und füllt sich mit Radfahrern, Skatern und Straßenverkäufern — die festlichste, familienfreundlichste Atmosphäre der Stadt." },
            { name: "Letztes Abendessen in Polanco — feine mexikanische Küche", description: "Polanco beherbergt Mexikos meistausgezeichnete Restaurants: Pujol (Top 10 weltweit), Quintonil, Máximo Bistrot. Wenn Ihr Budget knapp ist, sind die Suadero-Tacos am Stand von Cuauhtémoc genauso unvergesslich.", price: "MXN 300-1.500", tip: "Pujol und Quintonil erfordern Reservierungen Monate im Voraus. Für ein zugängliches kulinarisches Erlebnis bietet der Mercado Roma in der Colonia Roma 70 Stände gehobener mexikanischer Küche ab MXN 80." },
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
    fr: {
      city: "Istanbul",
      country: "Turquie",
      heroTitle: "4 jours à Istanbul : où l'Europe rencontre l'Asie",
      heroSubtitle: "Sainte-Sophie, le Grand Bazar, le Bosphore et les quartiers les plus authentiques — la ville la plus fascinante au monde en quatre jours complets.",
      bestMonths: "Avril à juin et septembre à novembre",
      budget: "60-120 USD/jour",
      travelTips: [
        "La livre turque a beaucoup fluctué — apportez des dollars ou des euros et changez dans les bureaux de change du centre-ville (döviz bürosu), jamais à l'aéroport",
        "L'İstanbulkart (carte de transport) couvre le métro, le tramway, le ferry et le bus — rechargez-la avec 100 TL pour 2-3 jours",
        "Une tenue modeste est obligatoire dans les mosquées — ayez toujours un foulard sur vous et portez quelque chose couvrant épaules et genoux",
        "Le thé turc (çay) est servi gratuitement ou à très bas prix dans presque tous les commerces — c'est une coutume d'hospitalité, pas une arnaque",
        "Istanbul compte 15 millions d'habitants — la circulation est intense. Utilisez le métro, le tramway T1 et les ferries pour vous déplacer rapidement",
      ],
      days: [
        {
          theme: "Sultanahmet — le cœur historique de deux empires",
          activities: [
            { name: "Sainte-Sophie", description: "Le joyau architectural d'Istanbul, construit en 537 après J.-C. comme la plus grande église du monde chrétien, converti ensuite en mosquée ottomane et aujourd'hui à nouveau mosquée. Le dôme de 55 mètres flottant au-dessus des mosaïques byzantines et de la calligraphie arabe est incomparable.", price: "Gratuit (accès libre en tant que mosquée en activité)", tip: "Sainte-Sophie a rouvert en tant que mosquée active en 2020 — entrez pieds nus et habillé modestement (épaules et genoux couverts). Les premières heures du matin ont moins de visiteurs." },
            { name: "Mosquée bleue (Sultanahmet Camii)", description: "La seule mosquée d'Istanbul à six minarets, célèbre pour ses 20 000 carreaux de céramique bleue d'Iznik couvrant son intérieur. La place entre la Mosquée bleue et Sainte-Sophie est l'espace le plus photogénique d'Istanbul.", price: "Gratuit", tip: "La Mosquée bleue ferme aux visiteurs pendant les cinq prières quotidiennes (15-30 min à chaque fois). Vérifiez les horaires affichés à la porte avant d'attendre." },
            { name: "Palais de Topkapi", description: "Le siège de l'Empire ottoman pendant 400 ans, abritant le trésor des sultans (le diamant Kaşıkçı de 86 carats), le harem impérial et les reliques sacrées de l'Islam. Vues directes sur le Bosphore et la mer de Marmara.", price: "400 TL (palais) + 200 TL (harem)", tip: "Le harem de Topkapi nécessite un billet séparé mais en vaut vraiment la peine — c'est la section la plus fascinante du palais. Le Trésor impérial du Pavillon 3 abrite le plus grand diamant de Turquie." },
            { name: "Citerne basilique — le palais souterrain", description: "La citerne romaine du VIe siècle, avec 336 colonnes en marbre reflétées dans l'eau calme. Les colonnes aux têtes de Méduse à l'envers et l'éclairage mystique en font l'un des lieux les plus uniques au monde.", price: "200 TL", tip: "La citerne reste fraîche même en été — un refuge contre la chaleur d'Istanbul. La colonne des Larmes (aux motifs en spirale) est la plus recherchée." },
          ],
        },
        {
          theme: "Le Grand Bazar, le Bazar aux épices et le quartier égyptien",
          activities: [
            { name: "Grand Bazar", description: "Le plus grand et le plus ancien bazar couvert au monde, avec 61 rues, 4 000 boutiques et 250 000 visiteurs quotidiens. Tapis, lampes en verre, céramiques, bijoux en argent et cuir turc dans un labyrinthe du XVe siècle.", price: "Gratuit (pour entrer)", tip: "Le marchandage est obligatoire — commencez par proposer 40-50% du prix demandé. Les boutiques plus profondes (pas sur la rue principale) offrent un meilleur rapport qualité-prix." },
            { name: "Bazar aux épices (Mısır Çarşısı)", description: "Le marché aux épices le plus célèbre d'Istanbul, dans le quartier égyptien, avec du curcuma iranien, du safran de Safranbolu, du thé à la rose anatolien, du lokum (loukoum) et les meilleures pistaches de Turquie.", price: "Gratuit", tip: "Les épices en vrac sont bien moins chères et plus fraîches que les paquets scellés. Négociez toujours, et achetez dans les boutiques plus profondes du bazar — celles près de l'entrée facturent le double." },
            { name: "Déjeuner dans le quartier d'Eminönü", description: "Le débarcadère de ferry d'Eminönü propose le balık ekmek le plus célèbre d'Istanbul (sandwichs au maquereau grillé, préparés sur des bateaux). Les restaurants flottants le long de la Corne d'Or fonctionnent depuis des décennies.", price: "70-100 TL", tip: "Le balık ekmek se mange debout au bord de l'eau avec un verre de turşu suyu (jus de cornichon). C'est l'expérience culinaire la plus locale et la moins chère d'Istanbul." },
            { name: "Croisière sur la Corne d'Or", description: "L'estuaire de 8 km séparant le cœur historique des quartiers européens modernes. Une courte croisière sur la Corne d'Or dévoile les ponts historiques, les mosquées et les quartiers en bois qui bordent l'eau.", price: "30-50 TL (ferry public)", tip: "Le ferry public (vapur) est plus authentique et moins cher que les croisières touristiques. Il part d'Eminönü et atteint Eyüpsultan — le quartier le plus conservateur et le moins touristique d'Istanbul." },
          ],
        },
        {
          theme: "Croisière sur le Bosphore et palais de Dolmabahçe",
          activities: [
            { name: "Palais de Dolmabahçe", description: "Le palais du sultan sur le Bosphore, construit en 1856 dans un style néo-baroque européen. La salle du trône, avec un lustre en cristal de 4,5 tonnes offert par la reine Victoria, et ses 285 pièces symbolisent le déclin ottoman.", price: "400 TL", tip: "La visite est uniquement guidée (impossible d'y entrer seul). Le harem et la salle du trône sont les deux sections les plus impressionnantes — assurez-vous que votre billet les inclut." },
            { name: "Croisière sur le Bosphore", description: "Le détroit de 30 km séparant l'Europe de l'Asie, ponctué de forteresses médiévales, de maisons en bois yalı, de mosquées et du pont du Bosphore. Le ferry public jusqu'à Anadolu Kavağı (l'extrémité asiatique) est l'expérience la plus épique.", price: "50 TL (ferry public)", tip: "Le ferry public (Boğaz Hattı) depuis Eminönü parcourt les 6 heures de trajet complet pour 50 TL — bien moins cher que les croisières touristiques. Le retour est tout aussi beau." },
            { name: "Quartier de Beşiktaş et la rive européenne", description: "Le quartier le plus authentique de la rive européenne du Bosphore, avec un marché aux poissons, des brasseries locales, la statue de l'Aigle de Beşiktaş et le stade du Beşiktaş JK.", price: "Gratuit", tip: "Le çay (thé turc) dans les cafés du Bosphore à Beşiktaş est servi dans un verre en forme de tulipe avec deux morceaux de sucre — commandez-le ainsi pour l'expérience complète." },
            { name: "Dîner de kebab à Beşiktaş ou Kadıköy", description: "L'İskender kebab (agneau sur pain pide avec yaourt et beurre fondu) et le balık (poisson grillé du Bosphore) sont les deux dîners les plus représentatifs d'Istanbul.", price: "150-300 TL", tip: "Kadıköy (rive asiatique, 15 min en ferry) abrite les meilleurs restaurants et bars locaux d'Istanbul. Traverser vers l'Asie en ferry la nuit est une expérience unique en soi." },
          ],
        },
        {
          theme: "Beyoğlu, Istiklal et l'Istanbul moderne",
          activities: [
            { name: "Avenue Istiklal et Beyoğlu", description: "La rue piétonne la plus célèbre d'Istanbul, 3 km de boutiques, cafés, galeries et le tramway rouge historique. Beyoğlu était le cœur de la modernisation ottomane du XIXe siècle.", price: "Gratuit", tip: "Le tramway d'Istiklal est plus photographié qu'emprunté — il faudra vous écarter des rails à son passage. Les librairies d'occasion et les galeries dans les passages historiques sont les trésors cachés de la rue." },
            { name: "Tour de Galata", description: "La tour médiévale génoise du XIVe siècle, haute de 70 mètres, dans le quartier de Galata. Les vues sur la Corne d'Or, le Bosphore, Sainte-Sophie et la Mosquée bleue depuis la terrasse sont les meilleures d'Istanbul.", price: "300 TL", tip: "Les files peuvent être longues — achetez votre billet en ligne. La meilleure photo de Galata se prend d'en bas, avec le quartier qui dévale vers la Corne d'Or." },
            { name: "Quartier de Karaköy et ses salons de thé", description: "Le quartier au pied de la tour de Galata, avec les meilleurs cafés de spécialité d'Istanbul, des galeries de design contemporain et la pâtisserie Karaköy Güllüoğlu, qui abrite le meilleur baklava de la ville.", price: "30-60 TL", tip: "Le baklava de Karaköy Güllüoğlu est fait avec des pistaches d'Antep et du beurre de bufflonne — complètement différent du baklava grec ou arabe. Commandez le plateau mixte." },
            { name: "Coucher de soleil au hammam Çemberlitaş", description: "Le hammam le plus historique d'Istanbul, conçu par le grand architecte Sinan en 1584 pour l'épouse du sultan Soliman. Le rituel du hammam turc (massage à la mousse et gommage au kese) est l'adieu parfait.", price: "400-600 TL (traitement complet)", tip: "Le Çemberlitaş Hamamı a des entrées séparées pour hommes et femmes. Le rituel complet (bain chaud, gommage, savonnage, massage) dure 45-60 minutes." },
          ],
        },
      ],
    },
    de: {
      city: "Istanbul",
      country: "Türkei",
      heroTitle: "4 Tage in Istanbul: wo Europa auf Asien trifft",
      heroSubtitle: "Hagia Sophia, der Große Basar, der Bosporus und die authentischsten Viertel — die faszinierendste Stadt der Welt in vier vollen Tagen.",
      bestMonths: "April bis Juni und September bis November",
      budget: "60-120 USD/Tag",
      travelTips: [
        "Die türkische Lira hat stark geschwankt — bringen Sie Dollar oder Euro mit und wechseln Sie in den Wechselstuben der Innenstadt (döviz bürosu), niemals am Flughafen",
        "Die İstanbulkart (Fahrkarte) deckt Metro, Straßenbahn, Fähre und Bus ab — laden Sie sie mit 100 TL für 2-3 Tage auf",
        "Bescheidene Kleidung ist in Moscheen Pflicht — tragen Sie immer ein Kopftuch bei sich und tragen Sie etwas, das Schultern und Knie bedeckt",
        "Türkischer Tee (çay) wird in fast allen Geschäften kostenlos oder sehr günstig serviert — das ist Gastfreundschaft, kein Betrug",
        "Istanbul hat 15 Millionen Einwohner — der Verkehr ist intensiv. Nutzen Sie Metro, Straßenbahn T1 und Fähren, um sich schnell fortzubewegen",
      ],
      days: [
        {
          theme: "Sultanahmet — das historische Herz zweier Imperien",
          activities: [
            { name: "Hagia Sophia", description: "Istanbuls architektonisches Juwel, im Jahr 537 n. Chr. als größte Kirche der christlichen Welt erbaut, später zur osmanischen Moschee umgewandelt und heute wieder Moschee. Die 55 Meter hohe Kuppel, die über den byzantinischen Mosaiken und der arabischen Kalligrafie zu schweben scheint, ist unvergleichlich.", price: "Kostenlos (freier Zugang als aktive Moschee)", tip: "Die Hagia Sophia wurde 2020 als aktive Moschee wiedereröffnet — betreten Sie sie barfuß und bescheiden gekleidet (Schultern und Knie bedeckt). Die frühen Morgenstunden haben weniger Besucher." },
            { name: "Blaue Moschee (Sultanahmet Camii)", description: "Die einzige Moschee Istanbuls mit sechs Minaretten, berühmt für ihre 20.000 blauen Iznik-Keramikfliesen, die das Innere bedecken. Der Platz zwischen der Blauen Moschee und der Hagia Sophia ist der fotogenste Ort Istanbuls.", price: "Kostenlos", tip: "Die Blaue Moschee schließt für Besucher während der fünf täglichen Gebete (jeweils 15-30 Min). Prüfen Sie die an der Tür ausgehängten Zeiten, bevor Sie warten." },
            { name: "Topkapi-Palast", description: "400 Jahre lang der Sitz des Osmanischen Reiches, mit dem Schatz der Sultane (dem 86-karätigen Kaşıkçı-Diamanten), dem kaiserlichen Harem und den heiligen Reliquien des Islam. Direkte Ausblicke auf den Bosporus und das Marmarameer.", price: "400 TL (Palast) + 200 TL (Harem)", tip: "Der Harem des Topkapi-Palastes erfordert ein separates Ticket, ist aber absolut lohnenswert — der faszinierendste Teil des Palastes. Die kaiserliche Schatzkammer im Pavillon 3 beherbergt den größten Diamanten der Türkei." },
            { name: "Yerebatan-Zisterne — der unterirdische Palast", description: "Die römische Zisterne aus dem 6. Jahrhundert, mit 336 Marmorsäulen, die sich im ruhigen Wasser spiegeln. Die Säulen mit den auf dem Kopf stehenden Medusa-Köpfen und die mystische Beleuchtung machen sie zu einem der einzigartigsten Orte der Welt.", price: "200 TL", tip: "Die Zisterne bleibt auch im Sommer kühl — eine Zuflucht vor der Hitze Istanbuls. Die Tränensäule (mit spiralförmigen Mustern) ist die begehrteste." },
          ],
        },
        {
          theme: "Der Große Basar, der Gewürzbasar und das ägyptische Viertel",
          activities: [
            { name: "Großer Basar", description: "Der größte und älteste überdachte Basar der Welt, mit 61 Straßen, 4.000 Geschäften und 250.000 täglichen Besuchern. Teppiche, Glaslampen, Keramik, Silberschmuck und türkisches Leder in einem Labyrinth aus dem 15. Jahrhundert.", price: "Kostenlos (Eintritt)", tip: "Verhandeln ist Pflicht — bieten Sie zunächst 40-50% des geforderten Preises. Die Geschäfte weiter innen (nicht an der Hauptstraße) bieten ein besseres Preis-Leistungs-Verhältnis." },
            { name: "Gewürzbasar (Mısır Çarşısı)", description: "Der berühmteste Gewürzmarkt Istanbuls, im ägyptischen Viertel, mit iranischem Kurkuma, Safran aus Safranbolu, anatolischem Rosentee, Lokum (türkischem Honig) und den besten Pistazien der Türkei.", price: "Kostenlos", tip: "Lose Gewürze sind viel günstiger und frischer als abgepackte. Verhandeln Sie immer, und kaufen Sie in den Geschäften weiter innen im Basar — die am Eingang verlangen den doppelten Preis." },
            { name: "Mittagessen im Viertel Eminönü", description: "Der Fähranleger von Eminönü bietet das berühmteste balık ekmek Istanbuls (Sandwiches mit gegrilltem Makrele, auf Booten zubereitet). Die schwimmenden Restaurants am Goldenen Horn arbeiten seit Jahrzehnten.", price: "70-100 TL", tip: "Balık ekmek isst man stehend am Wasser mit einem Glas turşu suyu (Gurkensaft). Es ist das lokalste und günstigste kulinarische Erlebnis Istanbuls." },
            { name: "Kreuzfahrt auf dem Goldenen Horn", description: "Die 8 km lange Meeresbucht, die das historische Herz von den modernen europäischen Vierteln trennt. Eine kurze Kreuzfahrt auf dem Goldenen Horn zeigt die historischen Brücken, Moscheen und Holzviertel am Wasser.", price: "30-50 TL (öffentliche Fähre)", tip: "Die öffentliche Fähre (vapur) ist authentischer und günstiger als touristische Kreuzfahrten. Sie startet in Eminönü und erreicht Eyüpsultan — das konservativste und am wenigsten touristische Viertel Istanbuls." },
          ],
        },
        {
          theme: "Bosporus-Kreuzfahrt und Dolmabahçe-Palast",
          activities: [
            { name: "Dolmabahçe-Palast", description: "Der Sultanspalast am Bosporus, 1856 im europäischen Neo-Barockstil erbaut. Der Thronsaal mit einem 4,5 Tonnen schweren Kristallleuchter, ein Geschenk von Königin Victoria, und seine 285 Räume symbolisieren den Niedergang des Osmanischen Reiches.", price: "400 TL", tip: "Der Besuch ist nur mit Führung möglich (allein hineinzugehen ist nicht möglich). Der Harem und der Thronsaal sind die beiden beeindruckendsten Bereiche — stellen Sie sicher, dass Ihr Ticket sie enthält." },
            { name: "Bosporus-Kreuzfahrt", description: "Die 30 km lange Meerenge, die Europa von Asien trennt, gesäumt von mittelalterlichen Festungen, hölzernen Yalı-Häusern, Moscheen und der Bosporus-Brücke. Die öffentliche Fähre bis Anadolu Kavağı (das asiatische Ende) ist das epischste Erlebnis.", price: "50 TL (öffentliche Fähre)", tip: "Die öffentliche Fähre (Boğaz Hattı) von Eminönü fährt die vollen 6 Stunden Strecke für 50 TL — viel günstiger als touristische Kreuzfahrten. Die Rückfahrt ist genauso schön." },
            { name: "Viertel Beşiktaş und das europäische Ufer", description: "Das authentischste Viertel am europäischen Ufer des Bosporus, mit einem Fischmarkt, lokalen Brauereien, der Adlerstatue von Beşiktaş und dem Stadion des Beşiktaş JK.", price: "Kostenlos", tip: "Der çay (türkischer Tee) in den Bosporus-Cafés von Beşiktaş wird in einem tulpenförmigen Glas mit zwei Stück Zucker serviert — bestellen Sie ihn so für das vollständige Erlebnis." },
            { name: "Kebab-Abendessen in Beşiktaş oder Kadıköy", description: "Der İskender-Kebab (Lammfleisch auf Pide-Brot mit Joghurt und geschmolzener Butter) und der balık (gegrillter Fisch aus dem Bosporus) sind die beiden repräsentativsten Abendessen Istanbuls.", price: "150-300 TL", tip: "Kadıköy (asiatisches Ufer, 15 Min mit der Fähre) beherbergt Istanbuls beste lokale Restaurants und Bars. Nachts mit der Fähre nach Asien überzusetzen ist an sich schon ein einzigartiges Erlebnis." },
          ],
        },
        {
          theme: "Beyoğlu, Istiklal und das moderne Istanbul",
          activities: [
            { name: "Istiklal-Straße und Beyoğlu", description: "Istanbuls berühmteste Fußgängerstraße, 3 km voller Geschäfte, Cafés, Galerien und der historischen roten Straßenbahn. Beyoğlu war das Herz der osmanischen Modernisierung des 19. Jahrhunderts.", price: "Kostenlos", tip: "Die Straßenbahn der Istiklal wird mehr fotografiert als benutzt — bei ihrer Durchfahrt müssen Sie von den Gleisen weichen. Die Antiquariate und Galerien in den historischen Passagen sind die versteckten Schätze der Straße." },
            { name: "Galata-Turm", description: "Der mittelalterliche genuesische Turm aus dem 14. Jahrhundert, 70 Meter hoch, im Viertel Galata. Die Ausblicke auf das Goldene Horn, den Bosporus, die Hagia Sophia und die Blaue Moschee von der Terrasse aus sind die besten Istanbuls.", price: "300 TL", tip: "Die Schlangen können lang sein — kaufen Sie Ihr Ticket online. Das beste Foto von Galata macht man von unten, mit dem Viertel, das zum Goldenen Horn hinabfällt." },
            { name: "Viertel Karaköy und seine Teestuben", description: "Das Viertel am Fuß des Galata-Turms, mit den besten Spezialitätencafés Istanbuls, zeitgenössischen Designgalerien und der Konditorei Karaköy Güllüoğlu, die das beste Baklava der Stadt beherbergt.", price: "30-60 TL", tip: "Das Baklava von Karaköy Güllüoğlu wird mit Antep-Pistazien und Büffelbutter gemacht — völlig anders als griechisches oder arabisches Baklava. Bestellen Sie die gemischte Platte." },
            { name: "Sonnenuntergang im Hamam Çemberlitaş", description: "Das historischste Hamam Istanbuls, 1584 vom großen Architekten Sinan für die Frau des Sultans Süleyman entworfen. Das Ritual des türkischen Hamams (Schaummassage und Kese-Peeling) ist der perfekte Abschied.", price: "400-600 TL (komplette Behandlung)", tip: "Das Çemberlitaş Hamamı hat getrennte Eingänge für Männer und Frauen. Das vollständige Ritual (heißes Bad, Peeling, Einseifen, Massage) dauert 45-60 Minuten." },
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
    fr: {
      city: "Florence",
      country: "Italie",
      heroTitle: "3 jours à Florence : la Renaissance dans sa forme la plus pure",
      heroSubtitle: "Les Offices, le David de Michel-Ange, le Piazzale Michelangelo et la meilleure bistecca d'Italie — Florence en trois jours essentiels.",
      bestMonths: "Avril à juin et septembre à octobre",
      budget: "90-150€/jour",
      travelTips: [
        "Réservez les Offices, la Galerie de l'Académie et le Duomo des semaines à l'avance — les files sans réservation sont terribles en haute saison",
        "Florence se parcourt parfaitement à pied — le centre historique ne fait que 2 km de large",
        "L'aperitivo toscan (18h-21h) dans les bars de l'Oltrarno inclut une boisson + un buffet d'antipasti gratuit",
        "Les pharmacies historiques (Farmacia di Santa Maria Novella, fondée en 1221) vendent les parfums et crèmes les plus exclusifs d'Italie",
        "Les musées d'État sont gratuits le premier dimanche de chaque mois — mais aussi bondés ; mieux vaut y aller en semaine",
      ],
      days: [
        {
          theme: "Le Duomo et le cœur historique",
          activities: [
            { name: "Cathédrale de Santa Maria del Fiore (le Duomo)", description: "Le dôme de Brunelleschi (1436) fut le plus grand au monde pendant des siècles et reste le symbole de Florence. Monter les 463 marches du dôme offre la meilleure vue sur les toits de tuiles de la ville.", price: "18€ (pass complet : cathédrale + dôme + baptistère + campanile)", tip: "Réservez l'accès au dôme en ligne — les places sont très limitées. Les premières heures de la journée offrent la plus belle lumière pour les vues d'en haut." },
            { name: "Baptistère Saint-Jean", description: "Le plus ancien édifice religieux de Florence (XIe-XIIe siècle), avec la Porte du Paradis en bronze doré de Lorenzo Ghiberti, que Michel-Ange qualifiait précisément ainsi. Les 10 scènes de l'Ancien Testament sont des reliefs magistraux.", price: "Inclus dans le pass Duomo", tip: "Les reliefs originaux de la porte se trouvent au Museo dell'Opera del Duomo (inclus dans le pass) — ceux à l'extérieur sont des répliques. Le musée vaut la visite." },
            { name: "Déjeuner au Mercato Centrale", description: "Le Mercato Centrale de Florence, dans son bâtiment en fer du XIXe siècle, regroupe la plus haute concentration de produits toscans de la ville : truffes, pecorino, charcuterie de sanglier et le fameux lampredotto (tripes florentines).", price: "8-15€", tip: "Le lampredotto (quatrième estomac de la vache) en panino avec salsa verde est la street food la plus authentique de Florence. Les nervi di bue (nerfs de bœuf) pour les plus aventureux." },
            { name: "Palazzo Vecchio et la Piazza della Signoria", description: "Le cœur civique de Florence depuis le XIVe siècle, avec la Loggia dei Lanzi (une galerie de sculptures en plein air gratuite) et le Palazzo Vecchio avec le Salone dei Cinquecento peint par Vasari.", price: "Palazzo 12,50€ / Loggia gratuite", tip: "La Loggia dei Lanzi abrite des sculptures de classe mondiale (l'Enlèvement des Sabines de Giambologna) entièrement en plein air et gratuites — voyez-la avant d'entrer au Palazzo." },
          ],
        },
        {
          theme: "Les Offices et le David de Michel-Ange",
          activities: [
            { name: "Galleria degli Uffizi", description: "Le musée d'art de la Renaissance le plus important au monde, avec des œuvres de Botticelli (La Naissance de Vénus, Le Printemps), Léonard, Michel-Ange, Raphaël et Titien. Plus de 100 salles dans le palais des Médicis.", price: "25€ (+ 4€ de frais de réservation anticipée)", tip: "Réservez votre billet en ligne des semaines à l'avance en haute saison — les files sans réservation dépassent 3 heures. La Naissance de Vénus de Botticelli se trouve dans la salle 10 — elle est plus petite qu'on ne l'imagine." },
            { name: "Ponte Vecchio et l'Oltrarno", description: "Le pont le plus célèbre de Florence, construit en 1345, bordé de bijouteries des deux côtés depuis le XVIe siècle. Le corridor de Vasari (le passage secret des Médicis au-dessus du pont) est visible depuis la rive.", price: "Gratuit", tip: "Les bijouteries du Ponte Vecchio sont touristiques mais les prix sont compétitifs — l'or florentin est de qualité garantie. Le meilleur angle du pont est depuis le Ponte Santa Trinità." },
            { name: "Galleria dell'Accademia — le David", description: "Le musée abritant le David de Michel-Ange (1504), la sculpture la plus célèbre au monde. La figure de marbre blanc de 5,17 mètres, dans la salle circulaire du musée, est une expérience qu'aucune photo ne peut transmettre.", price: "16€ (+ 4€ de frais de réservation)", tip: "Réserver en ligne est ESSENTIEL. Le David présente des marques de ciseau visibles — cherchez le détail des tendons du cou, les veines des mains et l'expression concentrée." },
            { name: "Bistecca alla Fiorentina à la Buca dell'Orafo", description: "La bistecca alla fiorentina est le plat le plus célèbre de Toscane — une côte de bœuf Chianina épaisse, d'au moins 1 kg, cuite saignante (toujours saignante, jamais bien cuite). Elle se commande au poids.", price: "40-60€ par personne", tip: "La bistecca se facture au 100g (3-5€). Une portion complète pour deux personnes pèse 1,2-1,5 kg. Commandez-la 'al sangue' (saignante) ou 'al punto' (à point) — jamais 'ben cotta' (bien cuite)." },
          ],
        },
        {
          theme: "Oltrarno, Piazzale et les jardins de Boboli",
          activities: [
            { name: "Jardins de Boboli", description: "Les jardins du Palazzo Pitti, résidence des Médicis, avec fontaines, statues, une grotte baroque et des vues sur Florence et les oliveraies toscanes. 45 000 m² de jardins Renaissance en terrasses.", price: "10€ (inclut le Palazzo Pitti)", tip: "La Grotta Grande del Buontalenti (avec des sculptures de Michel-Ange incrustées dans des murs de stalactites artificielles) est le lieu le plus étrange et fascinant de Florence." },
            { name: "Le quartier de l'Oltrarno et ses artisans", description: "Le quartier au sud de l'Arno, moins touristique et plus authentique, avec des ateliers de restaurateurs d'art, d'ébénistes, de relieurs et de bijoutiers artisanaux travaillant encore selon des techniques Renaissance.", price: "Gratuit", tip: "Stefano Bemer, via San Niccolò, fabrique les chaussures sur mesure les plus célèbres de Florence. Les parfumeries artisanales comme Lorenzo Villoresi créent des fragrances uniques depuis 1990." },
            { name: "Déjeuner de pâtes à la truffe dans l'Oltrarno", description: "Les restaurants de l'Oltrarno proposent les meilleures pappardelle al cinghiale (sanglier) et tagliolini al tartufo (truffe) de Florence, à des prix bien plus raisonnables que le centre-ville.", price: "14-22€", tip: "Buca Mario (1886, le plus ancien restaurant de Florence) et Buca dell'Orafo garantissent l'authenticité. Dans l'Oltrarno, les restaurants sans menu en anglais sont les meilleurs." },
            { name: "Piazzale Michelangelo au coucher du soleil", description: "La terrasse au-dessus de Florence avec la vue la plus classique de la ville : le Duomo, le Palazzo Vecchio, l'Arno et les ponts vus depuis la colline. L'heure dorée avant le coucher du soleil est le meilleur moment.", price: "Gratuit", tip: "Montez depuis le Piazzale jusqu'à l'église de San Miniato al Monte — 10 minutes de plus, avec des vues encore meilleures et bien moins de monde que le Piazzale." },
          ],
        },
      ],
    },
    de: {
      city: "Florenz",
      country: "Italien",
      heroTitle: "3 Tage in Florenz: die Renaissance in ihrer reinsten Form",
      heroSubtitle: "Die Uffizien, Michelangelos David, Piazzale Michelangelo und Italiens beste Bistecca — Florenz an drei essenziellen Tagen.",
      bestMonths: "April bis Juni und September bis Oktober",
      budget: "90-150€/Tag",
      travelTips: [
        "Buchen Sie die Uffizien, die Galleria dell'Accademia und den Duomo Wochen im Voraus — die Warteschlangen ohne Reservierung sind in der Hochsaison brutal",
        "Florenz lässt sich perfekt zu Fuß erkunden — das historische Zentrum ist nur 2 km breit",
        "Der toskanische Aperitivo (18-21 Uhr) in den Bars von Oltrarno beinhaltet ein Getränk + ein kostenloses Antipasti-Buffet",
        "Die historischen Apotheken (Farmacia di Santa Maria Novella, gegründet 1221) verkaufen Italiens exklusivste Parfums und Cremes",
        "Staatliche Museen sind am ersten Sonntag jedes Monats kostenlos — aber auch überfüllt; besser unter der Woche gehen",
      ],
      days: [
        {
          theme: "Der Duomo und das historische Herz",
          activities: [
            { name: "Kathedrale Santa Maria del Fiore (der Duomo)", description: "Brunelleschis Kuppel (1436) war jahrhundertelang die größte der Welt und bleibt das Wahrzeichen von Florenz. Der Aufstieg über die 463 Stufen der Kuppel bietet den besten Blick auf die Terrakotta-Dächer der Stadt.", price: "18€ (Kombiticket: Kathedrale + Kuppel + Baptisterium + Glockenturm)", tip: "Buchen Sie den Zugang zur Kuppel online — die Plätze sind sehr begrenzt. Die ersten Stunden des Tages haben das schönste Licht für die Ausblicke von oben." },
            { name: "Baptisterium San Giovanni", description: "Florenz' ältestes religiöses Gebäude (11.-12. Jahrhundert), mit Lorenzo Ghibertis vergoldeten Bronzetüren des Paradieses, die Michelangelo genau so nannte. Die 10 Szenen aus dem Alten Testament sind meisterhafte Reliefs.", price: "Im Duomo-Ticket enthalten", tip: "Die originalen Türreliefs befinden sich im Museo dell'Opera del Duomo (im Ticket enthalten) — die draußen sind Repliken. Das Museum ist den Besuch wert." },
            { name: "Mittagessen im Mercato Centrale", description: "Der Mercato Centrale von Florenz, in seinem eisernen Gebäude aus dem 19. Jahrhundert, hat die höchste Konzentration toskanischer Produkte der Stadt: Trüffel, Pecorino, Wildschwein-Wurstwaren und den berühmten Lampredotto (Florentiner Kutteln).", price: "8-15€", tip: "Lampredotto (der vierte Magen der Kuh) im Panino mit Salsa verde ist Florenz' authentischstes Street Food. Nervi di bue (Rindernerv) für die Abenteuerlustigeren." },
            { name: "Palazzo Vecchio und die Piazza della Signoria", description: "Florenz' bürgerliches Herz seit dem 14. Jahrhundert, mit der Loggia dei Lanzi (einer kostenlosen Open-Air-Skulpturengalerie) und dem Palazzo Vecchio mit dem von Vasari bemalten Salone dei Cinquecento.", price: "Palazzo 12,50€ / Loggia kostenlos", tip: "Die Loggia dei Lanzi beherbergt Skulpturen von Weltklasse (Giambolognas Raub der Sabinerinnen) komplett im Freien und kostenlos — sehen Sie sie sich an, bevor Sie den Palazzo betreten." },
          ],
        },
        {
          theme: "Die Uffizien und Michelangelos David",
          activities: [
            { name: "Galleria degli Uffizi", description: "Das weltweit wichtigste Museum für Renaissancekunst, mit Werken von Botticelli (Die Geburt der Venus, Primavera), Leonardo, Michelangelo, Raffael und Tizian. Mehr als 100 Räume im Palast der Medici.", price: "25€ (+ 4€ Vorbuchungsgebühr)", tip: "Buchen Sie Ihr Ticket Wochen im Voraus in der Hochsaison online — die Schlangen ohne Reservierung dauern über 3 Stunden. Botticellis Die Geburt der Venus befindet sich in Raum 10 — sie ist kleiner als erwartet." },
            { name: "Ponte Vecchio und das Oltrarno", description: "Florenz' berühmteste Brücke, 1345 erbaut, seit dem 16. Jahrhundert auf beiden Seiten von Juweliergeschäften gesäumt. Der Vasari-Korridor (der geheime Gang der Medici über der Brücke) ist vom Flussufer aus sichtbar.", price: "Kostenlos", tip: "Die Juweliergeschäfte auf der Ponte Vecchio sind touristisch, aber die Preise sind wettbewerbsfähig — florentinisches Gold hat garantierte Qualität. Der beste Blickwinkel auf die Brücke ist von der Ponte Santa Trinità." },
            { name: "Galleria dell'Accademia — der David", description: "Das Museum, das Michelangelos David (1504) beherbergt, die berühmteste Skulptur der Welt. Die 5,17 Meter hohe weiße Marmorfigur im runden Saal des Museums ist ein Erlebnis, das kein Foto vermitteln kann.", price: "16€ (+ 4€ Buchungsgebühr)", tip: "Online-Buchung ist UNERLÄSSLICH. Der David zeigt sichtbare Meißelspuren — achten Sie auf die Details der Halssehnen, die Adern an den Händen und den konzentrierten Ausdruck." },
            { name: "Bistecca alla Fiorentina in der Buca dell'Orafo", description: "Bistecca alla fiorentina ist das berühmteste Gericht der Toskana — ein dick geschnittenes T-Bone-Steak vom Chianina-Rind, mindestens 1 kg, medium-rare gegart (immer medium-rare, nie durch). Sie wird nach Gewicht bestellt.", price: "40-60€ pro Person", tip: "Die Bistecca wird pro 100g berechnet (3-5€). Eine ganze Portion für zwei Personen wiegt 1,2-1,5 kg. Bestellen Sie sie 'al sangue' (blutig) oder 'al punto' (medium) — niemals 'ben cotta' (durchgebraten)." },
          ],
        },
        {
          theme: "Oltrarno, Piazzale und die Boboli-Gärten",
          activities: [
            { name: "Boboli-Gärten", description: "Die Gärten des Palazzo Pitti, der Residenz der Medici, mit Brunnen, Statuen, einer barocken Grotte und Ausblicken auf Florenz und die toskanischen Olivenhaine. 45.000 m² terrassierter Renaissancegärten.", price: "10€ (inkl. Palazzo Pitti)", tip: "Die Grotta Grande del Buontalenti (mit Michelangelo-Skulpturen, eingebettet in künstliche Stalaktitenwände) ist Florenz' seltsamster und faszinierendster Ort." },
            { name: "Das Viertel Oltrarno und seine Handwerker", description: "Das Viertel südlich des Arno, weniger touristisch und authentischer, mit Werkstätten von Kunstrestauratoren, Tischlern, Buchbindern und Kunsthandwerker-Juwelieren, die noch mit Renaissance-Techniken arbeiten.", price: "Kostenlos", tip: "Stefano Bemer in der Via di San Niccolò fertigt Florenz' berühmteste Maßschuhe an. Handwerkliche Parfümerien wie Lorenzo Villoresi kreieren seit 1990 einzigartige Düfte." },
            { name: "Trüffelpasta-Mittagessen in Oltrarno", description: "Die Restaurants in Oltrarno haben Florenz' beste Pappardelle al cinghiale (Wildschwein) und Tagliolini al tartufo (Trüffel), zu viel angemesseneren Preisen als in der Innenstadt.", price: "14-22€", tip: "Buca Mario (1886, Florenz' ältestes Restaurant) und Buca dell'Orafo garantieren Authentizität. In Oltrarno sind die Restaurants ohne englische Speisekarte die besten." },
            { name: "Piazzale Michelangelo bei Sonnenuntergang", description: "Die Terrasse über Florenz mit dem klassischsten Blick der Stadt: der Duomo, der Palazzo Vecchio, der Arno und die Brücken, gesehen vom Hügel aus. Die goldene Stunde vor Sonnenuntergang ist die beste Zeit.", price: "Kostenlos", tip: "Gehen Sie vom Piazzale hinauf zur Kirche San Miniato al Monte — 10 Minuten weiter, mit noch besseren Ausblicken und weit weniger Menschen als am Piazzale." },
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
    fr: {
      city: "Lima",
      country: "Pérou",
      heroTitle: "3 jours à Lima : la capitale gastronomique mondiale",
      heroSubtitle: "Miraflores, Barranco, le centre historique et les meilleurs restaurants d'Amérique latine — Lima est bien plus qu'une porte d'entrée vers le Machu Picchu.",
      bestMonths: "Janvier à mars (été austral), mais c'est agréable toute l'année",
      budget: "S/150-250/jour (~40-70 USD)",
      travelTips: [
        "Lima connaît un brouillard côtier (la garúa) de mai à novembre qui assombrit le ciel — la plage n'est pas au programme pendant ces mois",
        "La scène gastronomique de Lima est le plus grand attrait de la ville — réservez à l'avance chez Central, Maido et Kjolle si vous voulez les meilleures tables",
        "La circulation à Lima est légendairement chaotique — utilisez Uber ou Cabify pour vous déplacer en toute sécurité et de façon prévisible",
        "Le soleil de Lima est fort malgré la brume — portez toujours de la crème solaire sur le front de mer de Miraflores",
        "S'acclimater à Cusco est bien plus facile si vous arrivez d'abord à Lima (niveau de la mer) et prenez de l'altitude progressivement",
      ],
      days: [
        {
          theme: "Miraflores et les falaises du Pacifique",
          activities: [
            { name: "Parque Kennedy et le cœur de Miraflores", description: "Le parc central du quartier le plus moderne de Lima, entouré de cafés, galeries et de l'église de la Virgen Milagrosa. Les chats du parc (plus de 100) sont l'attraction la plus appréciée du quartier.", price: "Gratuit", tip: "La foire artisanale du week-end au Parque Kennedy propose les meilleurs souvenirs de Lima. Les chats sont amicaux et peuvent être photographiés librement." },
            { name: "Front de mer de Miraflores et les falaises", description: "La promenade au sommet de falaises de 70-80 mètres au-dessus du Pacifique, avec vue sur la mer et des parapentistes planant au-dessus. Le Parque del Amor, avec la fresque de Víctor Delfín et ses couples enlacés, est l'un des parcs les plus romantiques au monde.", price: "Gratuit (parapente S/150)", tip: "Le parapente depuis les falaises est l'activité la plus riche en adrénaline de Lima — 15 minutes au-dessus du Pacifique depuis 80 mètres de haut. Des opérateurs comme Aeroxtreme décollent depuis la promenade." },
            { name: "Ceviche au Mercado 28 ou à La Mar", description: "Le ceviche est le plat national du Pérou et Lima a le meilleur du monde. La Mar (Gastón Acurio) et le Mercado 28 sont des valeurs sûres, avec files d'attente et tables communes.", price: "S/35-80", tip: "Le leche de tigre (la marinade citronnée du ceviche) se boit en shot à la fin et aurait des propriétés aphrodisiaques. Demandez-en toujours." },
            { name: "Coucher de soleil depuis Larcomar", description: "Le centre commercial construit dans les falaises de Miraflores, avec bars et restaurants au-dessus du Pacifique. La terrasse de l'étage supérieur offre la meilleure vue sur le coucher de soleil sur l'océan de tout Lima.", price: "Gratuit", tip: "Astrid & Gastón à Larcomar est le restaurant le plus historique de la cuisine péruvienne moderne. La vue au coucher du soleil avec un pisco sour vaut le prix." },
          ],
        },
        {
          theme: "Centre historique et l'âme coloniale de Lima",
          activities: [
            { name: "Plaza Mayor et les balcons coloniaux", description: "Le cœur de Lima depuis la fondation espagnole en 1535. La cathédrale, le Palais du Gouvernement et le Palais Municipal définissent la place la plus importante du Pérou colonial. Les balcons en bois sculpté sont uniques en Amérique.", price: "Gratuit (cathédrale S/20)", tip: "La relève de la garde au Palais du Gouvernement a lieu à 11h30, du lundi au vendredi — un spectacle gratuit avec la musique de la fanfare présidentielle." },
            { name: "Couvent de Santo Domingo et les catacombes", description: "Le monastère du XVIe siècle où sont enterrés San Martín de Porres et Santa Rosa de Lima. Les catacombes sous l'église conservent plus de 25 000 restes des premiers colons et criollos de Lima.", price: "S/15", tip: "Les catacombes sont étonnamment bien conservées, et le guide donne un contexte historique fascinant. Les photos avec flash sont interdites à l'intérieur." },
            { name: "Le Chinatown de Lima — le Barrio Chino", description: "La communauté chinoise de Lima (200 000 personnes, la plus grande d'Amérique latine) possède le meilleur Chinatown de la région. Les chifas (restaurants sino-péruviens) de la rue Jirón Ucayali sont légendaires.", price: "S/20-45", tip: "La fusion sino-péruvienne (chifa) est l'une des cuisines les plus intéressantes au monde. Commandez le riz chaufa avec lomo saltado — la fusion parfaite de deux cultures." },
            { name: "Museo Larco — le trésor précolombien", description: "La collection d'art précolombien la plus importante au monde, dans une hacienda du XVIIe siècle à Pueblo Libre. Ses 45 000 objets incluent le trésor de Sipán, la céramique moche et la fameuse galerie érotique.", price: "S/50", tip: "Le café-jardin du Museo Larco (parmi les fleurs et les huacas) est l'un des plus beaux de Lima. Réservez une table à l'avance pour le coucher du soleil." },
          ],
        },
        {
          theme: "Barranco — le quartier le plus bohème",
          activities: [
            { name: "Quartier de Barranco et le Pont des Soupirs", description: "Le quartier le plus bohème et artistique de Lima, avec des demeures coloniales transformées en galeries, bars et le musée Mario Testino. Le Pont des Soupirs (1876) et le chemin descendant vers la plage sont les images emblématiques du quartier.", price: "Gratuit", tip: "La tradition dit que si vous traversez le Pont des Soupirs en retenant votre souffle et faites un vœu, il se réalise. Les vues vers la mer en contrebas sont magnifiques." },
            { name: "Déjeuner chez Isolina — une taverne de Lima", description: "La taverne de Jose del Castillo à Barranco est le meilleur exemple de la cuisine créole de Lima : chicharrón de porc, anticuchos de cœur de bœuf, carapulcra et causa limeña dans leur version la plus authentique.", price: "S/40-80", tip: "Réservez à l'avance — Isolina figure sur toutes les listes des meilleurs restaurants de Lima et affiche complet au déjeuner comme au dîner. Le lundi midi est le moment le moins fréquenté." },
            { name: "MATE — Musée Mario Testino", description: "Le musée du photographe péruvien le plus célèbre au monde, dans une demeure du XIXe siècle à Barranco. Ses portraits de la princesse Diana, Kate Moss et Naomi Campbell portant des créateurs péruviens sont saisissants.", price: "S/25", tip: "Le patio-jardin du MATE est l'un des plus jolis de Lima. Le café du rez-de-chaussée sert le meilleur pain aux jaunes d'œuf du quartier." },
            { name: "Pisco Sour dans un bar de Barranco", description: "Le pisco sour est le cocktail national du Pérou (légèrement différent de la version chilienne). Les bars de Barranco servent les versions les plus authentiques : pisco quebranta, citron vert, sirop simple, blanc d'œuf et bitter.", price: "S/25-35", tip: "Le bar Ayahuasca à Barranco (la demeure républicaine de trois étages) propose les meilleurs pisco sours et l'ambiance la plus particulière de la vie nocturne de Lima. Le bar speakeasy d'El Refugio est aussi très spécial." },
          ],
        },
      ],
    },
    de: {
      city: "Lima",
      country: "Peru",
      heroTitle: "3 Tage in Lima: die kulinarische Hauptstadt der Welt",
      heroSubtitle: "Miraflores, Barranco, das historische Zentrum und Lateinamerikas beste Restaurants — Lima ist weit mehr als ein Tor zu Machu Picchu.",
      bestMonths: "Januar bis März (Südsommer), obwohl es das ganze Jahr über angenehm ist",
      budget: "S/150-250/Tag (~40-70 USD)",
      travelTips: [
        "Lima hat von Mai bis November Küstennebel (die garúa), der den Himmel verdunkelt — der Strand steht in diesen Monaten nicht auf dem Programm",
        "Limas kulinarische Szene ist die größte Attraktion der Stadt — reservieren Sie im Voraus bei Central, Maido und Kjolle, wenn Sie die besten Tische wollen",
        "Der Verkehr in Lima ist legendär chaotisch — nutzen Sie Uber oder Cabify, um sich sicher und vorhersehbar fortzubewegen",
        "Limas Sonne ist trotz des Dunstes stark — tragen Sie an der Promenade von Miraflores immer Sonnencreme",
        "Die Akklimatisierung an Cusco fällt viel leichter, wenn Sie zuerst in Lima (Meereshöhe) ankommen und die Höhe allmählich steigern",
      ],
      days: [
        {
          theme: "Miraflores und die Pazifikklippen",
          activities: [
            { name: "Parque Kennedy und das Herz von Miraflores", description: "Der zentrale Park von Limas modernstem Viertel, umgeben von Cafés, Galerien und der Kirche der Virgen Milagrosa. Die Katzen des Parks (mehr als 100) sind die beliebteste Attraktion des Viertels.", price: "Kostenlos", tip: "Der Kunsthandwerksmarkt am Wochenende im Parque Kennedy bietet Limas beste Souvenirs. Die Katzen sind zutraulich und können frei fotografiert werden." },
            { name: "Promenade von Miraflores und die Klippen", description: "Die Promenade auf 70-80 Meter hohen Klippen über dem Pazifik, mit Meerblick und darüber schwebenden Gleitschirmfliegern. Der Parque del Amor, mit Víctor Delfíns Wandbild und umschlungenen Paaren, ist einer der romantischsten Parks der Welt.", price: "Kostenlos (Gleitschirmfliegen S/150)", tip: "Gleitschirmfliegen von den Klippen ist Limas actionreichste Aktivität — 15 Minuten über dem Pazifik aus 80 Metern Höhe. Anbieter wie Aeroxtreme starten von der Promenade." },
            { name: "Ceviche im Mercado 28 oder bei La Mar", description: "Ceviche ist Perus Nationalgericht und Lima hat das beste der Welt. La Mar (Gastón Acurio) und Mercado 28 sind beliebte Anlaufstellen, mit Schlangen und Gemeinschaftstischen.", price: "S/35-80", tip: "Leche de tigre (die Zitrusmarinade des Ceviche) wird am Ende als Shot getrunken und soll aphrodisierende Eigenschaften haben. Fragen Sie immer danach." },
            { name: "Sonnenuntergang von Larcomar aus", description: "Das in die Klippen von Miraflores gebaute Einkaufszentrum, mit Bars und Restaurants über dem Pazifik. Die Terrasse im oberen Stockwerk bietet den besten Sonnenuntergangsblick auf den Ozean in ganz Lima.", price: "Kostenlos", tip: "Astrid & Gastón in Larcomar ist das historischste Restaurant der modernen peruanischen Küche. Der Sonnenuntergangsblick mit einem Pisco Sour ist den Preis wert." },
          ],
        },
        {
          theme: "Historisches Zentrum und Limas koloniale Seele",
          activities: [
            { name: "Plaza Mayor und die kolonialen Balkone", description: "Limas Herz seit der spanischen Gründung 1535. Die Kathedrale, der Regierungspalast und der Stadtpalast bilden den wichtigsten Platz des kolonialen Peru. Die geschnitzten Holzbalkone sind einzigartig in Amerika.", price: "Kostenlos (Kathedrale S/20)", tip: "Der Wachwechsel am Regierungspalast findet montags bis freitags um 11:30 Uhr statt — eine kostenlose Show mit Musik der Präsidentenkapelle." },
            { name: "Kloster Santo Domingo und die Katakomben", description: "Das Kloster aus dem 16. Jahrhundert, in dem San Martín de Porres und Santa Rosa de Lima begraben sind. Die Katakomben unter der Kirche bewahren mehr als 25.000 Überreste der frühen Kolonisatoren und Criollos Limas.", price: "S/15", tip: "Die Katakomben sind überraschend gut erhalten, und der Guide gibt einen faszinierenden historischen Kontext. Blitzlichtfotografie ist im Inneren verboten." },
            { name: "Limas Chinatown — das Barrio Chino", description: "Limas chinesische Gemeinschaft (200.000 Menschen, die größte Lateinamerikas) hat das beste Chinatown der Region. Die Chifas (chinesisch-peruanische Restaurants) an der Jirón Ucayali sind legendär.", price: "S/20-45", tip: "Die chinesisch-peruanische Fusion (Chifa) ist eine der interessantesten Küchen der Welt. Bestellen Sie Arroz chaufa mit Lomo saltado — die perfekte Fusion zweier Kulturen." },
            { name: "Museo Larco — der präkolumbianische Schatz", description: "Die weltweit wichtigste Sammlung präkolumbianischer Kunst, in einer Hacienda aus dem 17. Jahrhundert in Pueblo Libre. Ihre 45.000 Objekte umfassen den Schatz von Sipán, Moche-Keramik und die berühmte erotische Galerie.", price: "S/50", tip: "Das Gartencafé im Museo Larco (zwischen den Blumen und den Huacas) ist eines der schönsten in Lima. Reservieren Sie im Voraus einen Tisch zum Sonnenuntergang." },
          ],
        },
        {
          theme: "Barranco — das bohemienhafteste Viertel",
          activities: [
            { name: "Viertel Barranco und die Seufzerbrücke", description: "Limas bohemienhaftestes, künstlerischstes Viertel, mit kolonialen Herrenhäusern, die zu Galerien und Bars umgebaut wurden, und dem Mario-Testino-Museum. Die Seufzerbrücke (1876) und der Weg hinunter zum Strand sind die Postkartenbilder des Viertels.", price: "Kostenlos", tip: "Die Tradition besagt, dass ein Wunsch in Erfüllung geht, wenn man die Seufzerbrücke mit angehaltenem Atem überquert. Die Ausblicke hinunter zum Meer sind wunderschön." },
            { name: "Mittagessen bei Isolina — eine Taverne in Lima", description: "Die Taverne von Jose del Castillo in Barranco ist das beste Beispiel für Limas kreolische Küche: Chicharrón vom Schwein, Anticuchos vom Rinderherz, Carapulcra und Causa limeña in ihrer authentischsten Form.", price: "S/40-80", tip: "Reservieren Sie im Voraus — Isolina steht auf jeder Liste der besten Restaurants Limas und ist sowohl mittags als auch abends ausgebucht. Montagmittag ist am wenigsten überlaufen." },
            { name: "MATE — Mario-Testino-Museum", description: "Das Museum des berühmtesten peruanischen Fotografen der Welt, in einem Herrenhaus aus dem 19. Jahrhundert in Barranco. Seine Porträts von Prinzessin Diana, Kate Moss und Naomi Campbell in peruanischen Designerstücken sind beeindruckend.", price: "S/25", tip: "Der Gartenpatio des MATE ist einer der schönsten in Lima. Das Café im Erdgeschoss serviert das beste Eigelbbrot des Viertels." },
            { name: "Pisco Sour in einer Bar in Barranco", description: "Der Pisco Sour ist Perus Nationalcocktail (leicht anders als die chilenische Version). Die Bars von Barranco servieren die authentischsten Versionen: Pisco Quebranta, grüne Limette, einfacher Sirup, Eiweiß und Bitters.", price: "S/25-35", tip: "Die Ayahuasca Bar in Barranco (das dreistöckige Herrenhaus aus der Republikzeit) hat die besten Pisco Sours und die besondere Atmosphäre in Limas Nachtleben. Die Speakeasy-Bar von El Refugio ist ebenfalls sehr besonders." },
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
    fr: {
      city: "Prague",
      country: "République tchèque",
      heroTitle: "3 jours à Prague : le château, le pont Charles et la bière la moins chère d'Europe",
      heroSubtitle: "La vieille ville, le château de Prague, Josefov et le Petit Côté — la ville médiévale la mieux préservée d'Europe en trois jours complets.",
      bestMonths: "Mai à septembre",
      budget: "60-100€/jour",
      travelTips: [
        "La couronne tchèque (CZK) n'est pas l'euro — changez dans les bureaux du centre-ville, jamais dans les bureaux de rue qui arnaquent les touristes",
        "Le métro de Prague est efficace et bon marché (30 CZK le trajet) — achetez le pass journalier (120 CZK) si vous faites plus de 4 trajets",
        "Prague est très touristique, mais Vinohrady, Žižkov et Holešovice ont l'ambiance locale la plus authentique",
        "La bière à Prague coûte moins cher que l'eau en bouteille dans les bars — c'est culturel, pas une arnaque",
        "La haute saison (juin-août) et Noël sont les périodes les plus bondées — le printemps et l'automne sont idéaux",
      ],
      days: [
        {
          theme: "Le château de Prague et le Petit Côté",
          activities: [
            { name: "Château de Prague — à l'ouverture", description: "Le plus grand complexe de château au monde en superficie (70 000 m²), avec 9 siècles d'histoire. Le complexe inclut la cathédrale Saint-Guy, le Palais royal et la pittoresque Ruelle d'Or où vécut Franz Kafka.", price: "350 CZK (visite longue)", tip: "Arrivez à 8h30 à l'ouverture pour voir la cathédrale Saint-Guy sans les files. La vue depuis le jardin sud du château sur les toits rouges de Prague est la plus spectaculaire de la ville." },
            { name: "La Ruelle d'Or — où vécut Franz Kafka", description: "La rue du XVIe siècle aux maisons colorées à l'intérieur du château, où vécurent les orfèvres de la cour puis, plus tard, Franz Kafka au numéro 22. Les minuscules maisons médiévales sont de véritables musées miniatures.", price: "Inclus avec le château", tip: "La maison numéro 22 (bleue) est celle où Kafka écrivit certaines de ses nouvelles. La librairie qui s'y trouve aujourd'hui vend ses œuvres en tchèque et en allemand — le meilleur souvenir de Prague." },
            { name: "Déjeuner dans Malá Strana (Petit Côté)", description: "Le quartier baroque au pied du château, avec ses palais, ses églises et la meilleure bière de Prague. La brasserie Katedrinska et les restaurants de la rue Nerudova sont des valeurs sûres locales.", price: "180-350 CZK", tip: "Le svíčková (aloyau de bœuf mariné avec sauce à la crème et knedlíky) est le plat national tchèque le plus savoureux. Les bières Pilsner Urquell et Staropramen coûtent 35-55 CZK dans le Petit Côté." },
            { name: "Pont Charles au coucher du soleil", description: "Le pont gothique du XIVe siècle, bordé de 30 statues baroques, traversant la Vltava. L'après-midi, il se remplit de musiciens de rue, d'artistes et de la meilleure ambiance de Prague.", price: "Gratuit", tip: "Le pont est bondé en journée — le meilleur moment est tôt (7h) ou tard (21h). Toucher la statue de saint Jean Népomucène (la partie en bronze brillante) porterait chance, dit-on." },
          ],
        },
        {
          theme: "La vieille ville et le quartier juif",
          activities: [
            { name: "Place de la Vieille Ville et l'horloge astronomique", description: "La plus belle place d'Europe centrale, avec l'horloge astronomique de 1410 (la plus ancienne encore en fonctionnement), dont le défilé des 12 apôtres a lieu chaque heure pile. L'église Notre-Dame-de-Týn domine l'arrière-plan.", price: "Gratuit (tour de l'horloge 250 CZK)", tip: "Le défilé de l'horloge a lieu pile à l'heure — arrivez 5 minutes avant. La tour de l'hôtel de ville (250 CZK) offre la meilleure vue sur la place et les toits de Prague." },
            { name: "Josefov — le quartier juif", description: "L'un des quartiers juifs médiévaux les mieux préservés d'Europe, avec six synagogues (XIIIe-XIXe siècle), un cimetière juif à 12 000 tombes superposées et un musée documentant l'histoire de l'Holocauste à Prague.", price: "500 CZK (billet combiné)", tip: "L'ancien cimetière juif compte jusqu'à 12 couches de tombes superposées — l'espace était si rare que les enterrements se faisaient les uns sur les autres. La visite est profondément émouvante." },
            { name: "Rue Nerudova et Malá Strana", description: "La rue la plus photogénique de Prague, avec des palais baroques, des galeries et des ambassades qui montent du pont Charles jusqu'au château. Chaque bâtiment porte une plaque héraldique médiévale d'identification.", price: "Gratuit", tip: "Au numéro 47 de Nerudova se trouve l'ambassade de Roumanie — la maison de l'alchimiste qui apparaît dans L'Alchimiste de Paulo Coelho. Le jardin secret aux roses du Palais Vrtba (95 CZK) est le plus beau de Prague." },
            { name: "Brasserie U Fleků — depuis 1499", description: "La plus ancienne brasserie de Prague, en activité continue depuis 1499, dans le quartier de Nové Město. Elle brasse sa propre bière brune (černé pivo) et propose des salles médiévales avec musique live.", price: "65-100 CZK la pinte", tip: "Impossible de simplement s'asseoir chez U Fleků sans boire — les serveurs posent automatiquement une pinte fraîche sur votre table. Si vous n'en voulez plus, couvrez votre verre avec le sous-verre." },
          ],
        },
        {
          theme: "Vinohrady, Vyšehrad et le Prague alternatif",
          activities: [
            { name: "Vyšehrad — l'autre forteresse", description: "La forteresse médiévale de la légende fondatrice de Prague, avec une basilique, un cimetière de Tchèques illustres (Dvořák, Smetana) et des vues panoramiques sur la Vltava. Bien moins touristique que le château.", price: "Gratuit (certaines salles 80 CZK)", tip: "Vyšehrad offre les meilleures vues sur la Vltava et le pont Charles depuis les hauteurs — sans la foule du château. Le jardin sur le mur sud est parfait pour un pique-nique." },
            { name: "Quartier de Vinohrady — le Prague local", description: "Le quartier résidentiel bourgeois du XIXe siècle, avec les meilleurs cafés artisanaux, bars à vin et restaurants tchèques modernes de la ville. Náměstí Míru (place de la Paix) en est le centre.", price: "150-300 CZK", tip: "Le restaurant Eska à Karlín (15 min en métro) propose la cuisine tchèque la plus innovante de Prague — aliments fermentés, pain au levain et produits fermiers locaux. Réservez à l'avance." },
            { name: "Parc Letná — le jardin à bière avec la meilleure vue", description: "Le grand parc au-dessus de la Vltava avec le jardin à bière le plus célèbre de Prague. Vues directes sur les toits de la vieille ville et la rivière, avec des bières à prix locaux.", price: "Gratuit (bière 45-60 CZK)", tip: "Le jardin à bière de Letná est l'endroit préféré des jeunes Praguois au coucher du soleil. Commander en anglais ne pose aucun problème — demandez simplement 'une bière brune s'il vous plaît'." },
            { name: "Concert de musique classique en ville", description: "Prague possède la scène de musique classique la plus riche d'Europe centrale, avec des concerts quotidiens à la Maison municipale, à l'Opéra et dans les églises historiques. Mozart et Dvořák planent sur chaque rue.", price: "400-900 CZK", tip: "Les concerts dans les églises historiques (Saint-Nicolas, Sainte-Croix) sont les plus atmosphériques et coûtent 400-600 CZK. Le son et l'architecture baroque se combinent pour une expérience unique." },
          ],
        },
      ],
    },
    de: {
      city: "Prag",
      country: "Tschechische Republik",
      heroTitle: "3 Tage in Prag: die Burg, die Karlsbrücke und Europas günstigstes Bier",
      heroSubtitle: "Altstadt, Prager Burg, Josefov und die Kleinseite — Europas am besten erhaltene mittelalterliche Stadt an drei vollen Tagen.",
      bestMonths: "Mai bis September",
      budget: "60-100€/Tag",
      travelTips: [
        "Die tschechische Krone (CZK) ist nicht der Euro — wechseln Sie in Wechselstuben der Innenstadt, niemals an Straßenständen, die Touristen betrügen",
        "Prags Metro ist effizient und günstig (30 CZK pro Fahrt) — kaufen Sie das Tagesticket (120 CZK), wenn Sie mehr als 4 Fahrten machen",
        "Prag ist sehr touristisch, aber Vinohrady, Žižkov und Holešovice haben die authentischste lokale Atmosphäre",
        "Bier in Prag kostet weniger als Flaschenwasser in den Bars — das ist Kultur, kein Betrug",
        "Die Hochsaison (Juni-August) und Weihnachten sind die überlaufensten Zeiten — Frühling und Herbst sind ideal",
      ],
      days: [
        {
          theme: "Die Prager Burg und die Kleinseite",
          activities: [
            { name: "Prager Burg — zur Öffnungszeit", description: "Der flächenmäßig größte Burgkomplex der Welt (70.000 m²), mit 9 Jahrhunderten Geschichte. Der Komplex umfasst den Veitsdom, den Königspalast und das malerische Goldene Gässchen, wo einst Franz Kafka lebte.", price: "350 CZK (lange Tour)", tip: "Kommen Sie um 8:30 Uhr zur Öffnung, um den Veitsdom ohne Schlangen zu sehen. Der Blick vom Südgarten der Burg über Prags rote Dächer ist der spektakulärste der Stadt." },
            { name: "Goldenes Gässchen — wo Franz Kafka lebte", description: "Die Straße aus dem 16. Jahrhundert mit bunten Häusern innerhalb der Burg, wo Hofgoldschmiede und später Franz Kafka in Nummer 22 ihre Tage verbrachten. Die winzigen mittelalterlichen Häuser sind Miniaturmuseen.", price: "Im Burgticket enthalten", tip: "Haus Nummer 22 (blau) ist der Ort, an dem Kafka einige seiner Geschichten schrieb. Die dortige Buchhandlung verkauft heute seine Werke auf Tschechisch und Deutsch — das beste Souvenir aus Prag." },
            { name: "Mittagessen in Malá Strana (Kleinseite)", description: "Das Barockviertel am Fuß der Burg, mit Palästen, Kirchen und Prags bestem Bier. Die Brauerei Katedrinska und die Restaurants in der Nerudova sind lokale Favoriten.", price: "180-350 CZK", tip: "Svíčková (marinierter Rinderbraten mit Sahnesauce und Knedlíky) ist das schmackhafteste tschechische Nationalgericht. Pilsner Urquell und Staropramen kosten in der Kleinseite 35-55 CZK." },
            { name: "Karlsbrücke bei Sonnenuntergang", description: "Die gotische Brücke aus dem 14. Jahrhundert, gesäumt von 30 Barockstatuen, über die Moldau. Am Nachmittag füllt sie sich mit Straßenmusikern, Künstlern und Prags bester Atmosphäre.", price: "Kostenlos", tip: "Die Brücke ist tagsüber überfüllt — die beste Zeit ist früh (7 Uhr) oder spät (21 Uhr). Die Statue des Heiligen Johannes von Nepomuk (der glänzende Bronzeteil) zu berühren, soll Glück bringen." },
          ],
        },
        {
          theme: "Die Altstadt und das jüdische Viertel",
          activities: [
            { name: "Altstädter Ring und die Astronomische Uhr", description: "Mitteleuropas schönster Platz, mit der Astronomischen Uhr von 1410 (der ältesten noch funktionierenden), deren Parade der 12 Apostel jede volle Stunde stattfindet. Die Teynkirche dominiert den Hintergrund.", price: "Kostenlos (Uhrenturm 250 CZK)", tip: "Die Parade der Uhr findet genau zur vollen Stunde statt — kommen Sie 5 Minuten früher. Der Rathausturm (250 CZK) bietet den besten Blick auf den Platz und Prags Dächer." },
            { name: "Josefov — das jüdische Viertel", description: "Eines der am besten erhaltenen mittelalterlichen jüdischen Viertel Europas, mit sechs Synagogen (13.-19. Jahrhundert), einem jüdischen Friedhof mit 12.000 übereinander liegenden Gräbern und einem Museum, das die Geschichte des Holocaust in Prag dokumentiert.", price: "500 CZK (Kombiticket)", tip: "Der alte jüdische Friedhof hat bis zu 12 übereinander liegende Grabschichten — der Platz war so knapp, dass Bestattungen übereinander stattfanden. Der Besuch ist zutiefst bewegend." },
            { name: "Nerudova-Straße und Malá Strana", description: "Prags fotogenste Straße, mit Barockpalästen, Galerien und Botschaften, die von der Karlsbrücke hinauf zur Burg führen. Jedes Gebäude trägt eine mittelalterliche heraldische Erkennungstafel.", price: "Kostenlos", tip: "In der Nerudova 47 befindet sich die rumänische Botschaft — das Haus des Alchemisten, das in Paulo Coelhos Der Alchimist vorkommt. Der geheime Rosengarten im Palais Vrtba (95 CZK) ist der schönste in Prag." },
            { name: "Brauerei U Fleků — seit 1499", description: "Prags älteste Brauerei, seit 1499 ununterbrochen in Betrieb, im Viertel Nové Město. Sie braut ihr eigenes dunkles Bier (černé pivo) und bietet mittelalterliche Säle mit Live-Musik.", price: "65-100 CZK pro Pint", tip: "Bei U Fleků kann man nicht einfach sitzen, ohne zu trinken — die Kellner stellen automatisch ein frisches Bier auf den Tisch. Wenn Sie kein weiteres möchten, decken Sie Ihr Glas mit dem Untersetzer ab." },
          ],
        },
        {
          theme: "Vinohrady, Vyšehrad und das alternative Prag",
          activities: [
            { name: "Vyšehrad — die andere Festung", description: "Die mittelalterliche Festung aus Prags Gründungslegende, mit einer Basilika, einem Friedhof bedeutender Tschechen (Dvořák, Smetana) und Panoramablicken über die Moldau. Weit weniger touristisch als die Burg.", price: "Kostenlos (einige Säle 80 CZK)", tip: "Vyšehrad bietet die besten Ausblicke auf die Moldau und die Karlsbrücke von oben — ohne die Menschenmassen der Burg. Der Garten an der Südmauer ist perfekt für ein Picknick." },
            { name: "Viertel Vinohrady — das lokale Prag", description: "Das bürgerliche Wohnviertel aus dem 19. Jahrhundert mit den besten handwerklichen Cafés, Weinbars und modernen tschechischen Restaurants der Stadt. Náměstí Míru (Friedensplatz) ist sein Zentrum.", price: "150-300 CZK", tip: "Das Restaurant Eska in Karlín (15 Min mit der Metro) hat Prags innovativste tschechische Küche — fermentierte Speisen, Sauerteig und lokale Produkte vom Bauernhof. Reservieren Sie im Voraus." },
            { name: "Park Letná — der Biergarten mit dem besten Blick", description: "Der große Park über der Moldau mit Prags berühmtestem Biergarten. Direkte Ausblicke auf die Dächer der Altstadt und den Fluss, mit Bier zu lokalen Preisen.", price: "Kostenlos (Bier 45-60 CZK)", tip: "Der Biergarten von Letná ist der Lieblingsort junger Prager zum Sonnenuntergang. Auf Englisch zu bestellen ist kein Problem — fragen Sie einfach nach 'einem dunklen Bier bitte'." },
            { name: "Konzert klassischer Musik in der Stadt", description: "Prag hat die reichste klassische Musikszene Mitteleuropas, mit täglichen Konzerten im Gemeindehaus, im Opernhaus und in historischen Kirchen. Mozart und Dvořák liegen in jeder Straße in der Luft.", price: "400-900 CZK", tip: "Konzerte in den historischen Kirchen (St. Nikolaus, Heiligkreuz) sind am stimmungsvollsten und kosten 400-600 CZK. Der Klang und die barocke Architektur verbinden sich zu einem einzigartigen Erlebnis." },
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
    fr: {
      city: "Miami",
      country: "États-Unis",
      heroTitle: "3 jours à Miami : South Beach, Wynwood et Little Havana",
      heroSubtitle: "Art déco, fresques murales, cuisine latine et les meilleures plages de Floride — l'itinéraire parfait pour découvrir le Miami le plus authentique.",
      bestMonths: "Novembre à avril",
      budget: "150-250 USD/jour",
      travelTips: [
        "Une voiture ou Uber est nécessaire pour se déplacer efficacement à Miami — les transports publics sont limités en dehors de South Beach",
        "Le soleil de Miami est intense toute l'année — une crème solaire SPF 50 est indispensable à la plage",
        "Le pourboire au restaurant est de 18-20% du total — attendu, et fait partie du salaire des serveurs",
        "La saison des ouragans va de juin à novembre — souscrivez une assurance voyage si vous visitez pendant ces mois",
        "L'espagnol est la vraie langue de Miami — dans de nombreux commerces de Little Havana et Wynwood, l'anglais est la seconde langue",
      ],
      days: [
        {
          theme: "South Beach et le quartier Art déco",
          activities: [
            { name: "Lever du soleil à South Beach", description: "La plage la plus célèbre de Floride est particulièrement magique tôt le matin, quand les transats rouge et blanc sont vides et que la lumière du lever du soleil éclaire les hôtels art déco d'Ocean Drive.", price: "Gratuit", tip: "Le soleil se lève sur l'océan à Miami Beach (pas sur un horizon dégagé — la ville fait face à la côte est). Le reflet sur le sable mouillé donne la meilleure photo de lever du soleil." },
            { name: "Quartier historique Art déco — Ocean Drive", description: "Le quartier Art déco historique le plus complet au monde, avec plus de 800 bâtiments des années 1920-40 aux tons pastel, chrome et néon. La portion d'Ocean Drive entre les rues 5 et 15 est la plus photogénique.", price: "Gratuit (visite guidée 30 USD)", tip: "La Miami Design Preservation League organise des visites guidées à pied le samedi à 10h30 (30 USD) avec un contexte historique essentiel. L'hôtel Colony est le bâtiment le plus photographié." },
            { name: "Déjeuner au Lincoln Road Mall", description: "La rue piétonne la plus célèbre de Miami Beach, avec restaurants, galeries et la meilleure ambiance d'observation des passants de la ville. Le dimanche, il y a un marché de créateurs locaux.", price: "15-30 USD", tip: "Le News Café d'Ocean Drive est ouvert 24h/24 et est le lieu de rencontre le plus historique de South Beach. Pour des prix normaux, éloignez-vous d'un pâté de maisons de la promenade." },
            { name: "Brickell et la skyline au coucher du soleil", description: "Le quartier financier de Miami, avec les gratte-ciel les plus récents de la ville et le Brickell City Centre. La promenade le long de Biscayne Bay au coucher du soleil offre la meilleure skyline de la ville.", price: "Gratuit", tip: "Le Pérez Art Museum Miami (PAMM) a des terrasses face à la baie ouvertes à tous — la meilleure vue gratuite sur la skyline de Miami au coucher du soleil." },
          ],
        },
        {
          theme: "Wynwood, le Design District et la vie nocturne de Miami",
          activities: [
            { name: "Wynwood Walls", description: "Le musée d'art urbain à ciel ouvert le plus célèbre au monde, fondé par Tony Goldman en 2009. Plus de 80 artistes internationaux ont peint les entrepôts du quartier avec des fresques qui changent chaque année.", price: "Gratuit (extérieur) / 12 USD (musée intérieur Wynwood Walls)", tip: "L'accès aux rues du quartier est gratuit — le musée intérieur a en réalité moins à voir que les rues. Parcourez les blocs entre la 25e et la 27e rue NW pour voir les meilleures fresques." },
            { name: "Café artisanal et galerie à Wynwood", description: "Wynwood possède les cafés les plus artistiques de Miami, installés dans d'anciens commerces avec leurs propres fresques. Panther Coffee et Wynwood Kitchen & Bar sont les favoris de la scène créative.", price: "5-15 USD", tip: "Panther Coffee sur la 24e rue NW sert le meilleur espresso de Miami dans un bâtiment orné d'une fresque de Shepard Fairey. Arrivez avant midi pour trouver une table." },
            { name: "Design District — luxe et art contemporain", description: "Le quartier de Miami dédié aux boutiques de luxe et aux galeries d'art contemporain. De Gucci à Hermès, de Gagosian à Locust Projects — un mélange de consumérisme et d'art qui reflète le côté le plus exclusif de Miami.", price: "Gratuit (pour entrer)", tip: "L'Institute of Contemporary Art (ICA Miami) dans le Design District a une entrée gratuite et des expositions de classe mondiale. Ouvert du mardi au dimanche." },
            { name: "Vie nocturne à South Beach", description: "South Beach abrite la scène de vie nocturne la plus célèbre des États-Unis. LIV au Fontainebleau, E11EVEN et Story sont les clubs les plus connus. Ça commence à 23h et ça dure jusqu'à 3-4h du matin.", price: "20-50 USD (entrée)", tip: "Arrivez avant 23h pour éviter la file et le pic du prix d'entrée. Le code vestimentaire est smart casual pour les hommes — ni short ni baskets ne sont autorisés dans les clubs." },
          ],
        },
        {
          theme: "Little Havana et Coconut Grove",
          activities: [
            { name: "Little Havana — Calle Ocho", description: "Le quartier cubain de Miami, avec l'énergie, le café et la musique de La Havane transplantés en Floride. La 8e rue SW (Calle Ocho) en est le cœur, avec ses cafétérias cubaines, ses fenêtres à café à emporter et les parties de dominos au Máximo Gómez Park.", price: "Gratuit", tip: "Le café cubain (cafecito) à la fenêtre se boit debout en 30 secondes — c'est la coutume locale. Commandez un cortadito si vous voulez quelque chose de plus long. Il ne coûte que 50 cents." },
            { name: "Viernes Culturales sur Calle Ocho", description: "Si c'est le dernier vendredi du mois, le festival mensuel Viernes Culturales remplit Calle Ocho de musique live, d'artistes, de vendeurs de nourriture cubaine et d'art de rue.", price: "Gratuit", tip: "Le restaurant Versailles sur la 8e rue SW sert le meilleur sandwich cubain et la meilleure ropa vieja de Miami depuis 1971 — déjeunez ici pour l'expérience cubaine ultime." },
            { name: "Coconut Grove — le quartier bohème", description: "Le plus ancien quartier de Miami, avec des maisons nichées parmi les arbres tropicaux, le front de mer de Dinner Key et les restaurants et boutiques du CocoWalk. Le musée Vizcaya est le joyau du quartier.", price: "Gratuit (Vizcaya 22 USD)", tip: "Vizcaya, la demeure italienne des années 1920 avec ses jardins sur la baie, est le plus beau site méconnu de Miami. Les jardins seuls valent la visite." },
            { name: "Coucher de soleil à Key Biscayne", description: "L'île-parc à 15 minutes du centre-ville via la Rickenbacker Causeway. Le Bill Baggs Cape Florida State Park abrite la plage la plus tranquille de Miami et le meilleur coucher de soleil.", price: "8 USD (entrée du parc)", tip: "Le sentier de 1 km jusqu'au phare de Cape Florida, au bout de l'île, offre la plus belle vue sur Biscayne Bay, avec la skyline de Miami en arrière-plan." },
          ],
        },
      ],
    },
    de: {
      city: "Miami",
      country: "Vereinigte Staaten",
      heroTitle: "3 Tage in Miami: South Beach, Wynwood und Little Havana",
      heroSubtitle: "Art déco, Straßenkunst, lateinamerikanisches Essen und Floridas beste Strände — die perfekte Reiseroute für das authentischste Miami.",
      bestMonths: "November bis April",
      budget: "150-250 USD/Tag",
      travelTips: [
        "Ein Auto oder Uber ist nötig, um sich effizient in Miami fortzubewegen — der öffentliche Nahverkehr ist außerhalb von South Beach begrenzt",
        "Miamis Sonne ist das ganze Jahr über intensiv — LSF-50-Sonnencreme ist am Strand Pflicht",
        "Trinkgeld im Restaurant beträgt 18-20% der Summe — erwartet, und Teil des Gehalts der Bedienung",
        "Die Hurrikansaison dauert von Juni bis November — schließen Sie eine Reiseversicherung ab, wenn Sie in diesen Monaten reisen",
        "Spanisch ist Miamis eigentliche Sprache — in vielen Geschäften in Little Havana und Wynwood ist Englisch die Zweitsprache",
      ],
      days: [
        {
          theme: "South Beach und das Art-déco-Viertel",
          activities: [
            { name: "Sonnenaufgang in South Beach", description: "Floridas berühmtester Strand ist in den frühen Morgenstunden besonders magisch, wenn die rot-weißen Liegestühle leer sind und das Licht des Sonnenaufgangs auf die Art-déco-Hotels am Ocean Drive fällt.", price: "Kostenlos", tip: "Die Sonne geht in Miami Beach über dem Ozean auf (nicht über offenem Horizont — die Stadt liegt an der Ostküste). Die Spiegelung im nassen Sand ergibt das beste Sonnenaufgangsfoto." },
            { name: "Historisches Art-déco-Viertel — Ocean Drive", description: "Das weltweit umfassendste historische Art-déco-Viertel, mit mehr als 800 Gebäuden aus den 1920er-40er Jahren in Pastellfarben, Chrom und Neon. Der Abschnitt des Ocean Drive zwischen 5. und 15. Straße ist am fotogensten.", price: "Kostenlos (geführte Tour 30 USD)", tip: "Die Miami Design Preservation League bietet samstags um 10:30 Uhr geführte Spaziergänge an (30 USD) mit wichtigem historischem Kontext. Das Colony Hotel ist das meistfotografierte Gebäude." },
            { name: "Mittagessen am Lincoln Road Mall", description: "Miami Beachs berühmteste Fußgängerstraße, mit Restaurants, Galerien und dem besten Leute-Beobachten der Stadt. Sonntags gibt es einen Markt lokaler Designer.", price: "15-30 USD", tip: "Das News Café am Ocean Drive hat 24 Stunden geöffnet und ist South Beachs historischster Treffpunkt. Für normale Preise gehen Sie einen Block landeinwärts von der Promenade." },
            { name: "Brickell und die Skyline bei Sonnenuntergang", description: "Miamis Finanzviertel, mit den neuesten Wolkenkratzern der Stadt und dem Brickell City Centre. Der Spaziergang entlang der Biscayne Bay bei Sonnenuntergang bietet die beste Skyline der Stadt.", price: "Kostenlos", tip: "Das Pérez Art Museum Miami (PAMM) hat für alle zugängliche Terrassen mit Blick auf die Bucht — der beste kostenlose Blick auf Miamis Skyline bei Sonnenuntergang." },
          ],
        },
        {
          theme: "Wynwood, das Design District und Miamis Nachtleben",
          activities: [
            { name: "Wynwood Walls", description: "Das weltweit berühmteste Freiluftmuseum für urbane Kunst, 2009 von Tony Goldman gegründet. Mehr als 80 internationale Künstler haben die Lagerhäuser des Viertels mit Wandbildern bemalt, die sich jedes Jahr ändern.", price: "Kostenlos (Außenbereich) / 12 USD (Wynwood Walls Museum innen)", tip: "Der Zugang zu den Straßen des Viertels ist kostenlos — das Innenmuseum bietet tatsächlich weniger zu sehen als die Straßen. Gehen Sie die Blocks zwischen NW 25th und 27th ab, um die besten Wandbilder zu sehen." },
            { name: "Handwerkliches Café und Galerie in Wynwood", description: "Wynwood hat Miamis künstlerischste Cafés, in alten Geschäften mit eigenen Wandbildern eingerichtet. Panther Coffee und Wynwood Kitchen & Bar sind Favoriten der kreativen Szene.", price: "5-15 USD", tip: "Panther Coffee in der NW 24th hat Miamis besten Espresso und befindet sich in einem Gebäude mit einem Wandbild von Shepard Fairey. Kommen Sie vor Mittag, um einen Tisch zu bekommen." },
            { name: "Design District — Luxus und zeitgenössische Kunst", description: "Miamis Viertel für Luxusboutiquen und zeitgenössische Kunstgalerien. Von Gucci bis Hermès, von Gagosian bis Locust Projects — eine Mischung aus Konsum und Kunst, die die exklusivste Seite Miamis widerspiegelt.", price: "Kostenlos (Eintritt)", tip: "Das Institute of Contemporary Art (ICA Miami) im Design District hat freien Eintritt und Ausstellungen von Weltklasse. Dienstag bis Sonntag geöffnet." },
            { name: "Nachtleben in South Beach", description: "South Beach hat die berühmteste Nachtlebenszene der USA. LIV im Fontainebleau, E11EVEN und Story sind die bekanntesten Clubs. Es geht um 23 Uhr los und dauert bis 3-4 Uhr morgens.", price: "20-50 USD (Eintritt)", tip: "Kommen Sie vor 23 Uhr an, um die Schlange und den höchsten Eintrittspreis zu vermeiden. Der Dresscode für Männer ist smart casual — Shorts und Turnschuhe sind in den Clubs nicht erlaubt." },
          ],
        },
        {
          theme: "Little Havana und Coconut Grove",
          activities: [
            { name: "Little Havana — Calle Ocho", description: "Miamis kubanisches Viertel, mit der Energie, dem Kaffee und der Musik Havannas, nach Florida verpflanzt. Die SW 8th Street (Calle Ocho) ist das Herz, mit kubanischen Cafeterías, Kaffeefenstern zum Mitnehmen und Domino-Spielen im Máximo Gómez Park.", price: "Kostenlos", tip: "Kubanischer Kaffee (Cafecito) am Fenster wird stehend in 30 Sekunden getrunken — das ist der lokale Brauch. Bestellen Sie einen Cortadito, wenn Sie etwas Längeres möchten. Er kostet nur 50 Cent." },
            { name: "Viernes Culturales auf der Calle Ocho", description: "Am letzten Freitag des Monats füllt das monatliche Viernes-Culturales-Festival die Calle Ocho mit Live-Musik, Künstlern, kubanischen Essensverkäufern und Straßenkunst.", price: "Kostenlos", tip: "Das Restaurant Versailles in der SW 8th serviert seit 1971 Miamis besten kubanischen Sandwich und Ropa vieja — essen Sie hier zu Mittag für das ultimative kubanische Erlebnis." },
            { name: "Coconut Grove — das Bohème-Viertel", description: "Miamis ältestes Viertel, mit Häusern zwischen tropischen Bäumen, der Uferpromenade Dinner Key und den Restaurants und Boutiquen des CocoWalk. Das Vizcaya-Museum ist das Juwel des Viertels.", price: "Kostenlos (Vizcaya 22 USD)", tip: "Vizcaya, das italienische Anwesen aus den 1920er Jahren mit seinen Gärten an der Bucht, ist Miamis schönster wenig bekannter Ort. Allein die Gärten sind den Besuch wert." },
            { name: "Sonnenuntergang in Key Biscayne", description: "Die Park-Insel, 15 Minuten vom Stadtzentrum über den Rickenbacker Causeway. Der Bill Baggs Cape Florida State Park beherbergt Miamis ruhigsten Strand und den besten Sonnenuntergang.", price: "8 USD (Parkeintritt)", tip: "Der 1 km lange Weg zum Leuchtturm von Cape Florida am Ende der Insel bietet den schönsten Blick auf die Biscayne Bay, mit Miamis Skyline im Hintergrund." },
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
    fr: {
      city: "Buenos Aires",
      country: "Argentine",
      heroTitle: "4 jours à Buenos Aires : tango, asado et la ville la plus européenne des Amériques",
      heroSubtitle: "San Telmo, La Boca, Palermo et le meilleur asado du monde — l'itinéraire complet pour tomber amoureux de la capitale argentine.",
      bestMonths: "Mars à mai et septembre à novembre",
      budget: "50-100 USD/jour",
      travelTips: [
        "Le taux de change argentin peut varier — vérifiez la situation monétaire avant votre voyage et renseignez-vous sur les options de change légales disponibles",
        "Buenos Aires est une ville nocturne — les dîners commencent à 21h et les milongas à 23h. Adaptez vos horaires ou vous arriverez dans des restaurants vides",
        "Les transports publics (métro + bus) sont efficaces et très bon marché — rechargez une carte SUBE dans n'importe quel kiosque",
        "L'asado argentin se mange à 13h (midi) ou 21h — n'espérez pas manger de l'asado à 19h comme en Europe",
        "Les quartiers sûrs pour les touristes sont Palermo, Recoleta, San Telmo et Puerto Madero — évitez de marcher seul la nuit dans des quartiers inconnus",
      ],
      days: [
        {
          theme: "San Telmo et le cœur historique",
          activities: [
            { name: "Plaza de Mayo et la Casa Rosada", description: "Le centre politique de Buenos Aires, siège du pouvoir exécutif depuis 1873. Le balcon d'où Evita s'adressait au peuple est visible depuis la place. La cathédrale métropolitaine abrite le tombeau du général San Martín.", price: "Gratuit", tip: "Le jeudi à 15h30, les Mères de la Place de Mai organisent leur marche historique autour de l'obélisque central — un témoignage vivant de l'histoire argentine." },
            { name: "Quartier de San Telmo", description: "Le plus ancien quartier de Buenos Aires, avec ses rues pavées, ses maisons coloniales du XIXe siècle, ses galeries d'art et le marché aux antiquités le plus célèbre d'Argentine. Le dimanche, une foire s'étend sur toute la rue Defensa.", price: "Gratuit", tip: "La foire du dimanche sur la rue Defensa (10h-18h) est le meilleur plan gratuit de Buenos Aires. Les antiquaires, musiciens de rue et danseurs de tango spontanés font partie du spectacle." },
            { name: "Déjeuner au marché de San Telmo", description: "Le marché couvert, ouvert depuis 1897, avec ses allées de bouchers artisanaux, d'épiceries fines, de stands de produits frais et de bars servant de tout, des empanadas aux cocktails. L'architecture en fer et verre du XIXe siècle est impressionnante.", price: "15-25 USD", tip: "Les empanadas de La Americana sont les plus classiques de Buenos Aires. Le comptoir du Bar El Federal, en face du marché, propose le meilleur café et les meilleures pâtisseries du quartier." },
            { name: "Spectacle de tango à San Telmo", description: "San Telmo est le berceau du tango porteño. Les spectacles au El Viejo Almacén, à La Ventana ou au Centro Cultural Borges combinent dîner, prestation professionnelle et histoire du tango.", price: "60-100 USD (dîner + spectacle)", tip: "Pour un tango authentique (pas un spectacle touristique), cherchez les milongas de quartier : le Club Almagro, la Confitería Ideal ou La Viruta proposent des milongas à 10-15 USD." },
          ],
        },
        {
          theme: "La Boca, Puerto Madero et le fleuve",
          activities: [
            { name: "La Boca et le Caminito", description: "Le quartier portuaire coloré où les maisons en tôle ondulée sont peintes de couleurs vives — un héritage des immigrants génois du XIXe siècle qui utilisaient la peinture restante du port. Le stade de Boca Juniors (La Bombonera) se trouve à 200 mètres.", price: "Gratuit", tip: "Le Caminito est touristique et les prix y doublent — mangez et faites vos achats quelques rues plus loin pour des prix normaux. Évitez de porter des objets de valeur visibles." },
            { name: "La Bombonera — musée et stade de Boca", description: "Le stade le plus célèbre d'Amérique latine, siège de Boca Juniors. La visite du musée inclut les vestiaires, les tribunes et des souvenirs de Maradona. L'expérience d'un jour de match à La Bombonera est presque religieuse.", price: "Visite 20 USD / Match 30-80 USD", tip: "Un match de Boca à domicile est l'une des expériences les plus intenses du sport mondial. N'achetez des billets que sur le site officiel — les revendeurs sont chers et risqués." },
            { name: "Puerto Madero — le quartier le plus récent", description: "Les anciens quais du port de Buenos Aires, transformés en quartier le plus moderne et exclusif de la ville. Le Puente de la Mujer de Santiago Calatrava en est le symbole architectural.", price: "Gratuit", tip: "La réserve écologique de Costanera Sur, juste à côté de Puerto Madero, offre 360 hectares de nature à 5 minutes du centre-ville — une parfaite échappée verte en pleine ville." },
            { name: "Dîner d'asado dans une parrilla porteña", description: "La parrilla argentine est une institution culinaire. L'asado de tira, le vacío, le chorizo et les ris de veau sont les morceaux qui distinguent Buenos Aires du reste du monde.", price: "20-40 USD", tip: "Don Julio (Palermo), La Brigada (San Telmo) et El Pobre Luis (Belgrano) sont les trois parrillas les plus renommées de Buenos Aires. Réservez plusieurs jours à l'avance." },
          ],
        },
        {
          theme: "Recoleta et le Buenos Aires européen",
          activities: [
            { name: "Cimetière de la Recoleta", description: "L'un des cimetières les plus célèbres au monde, avec 6 400 caveaux et 94 monuments d'intérêt historique. Le tombeau d'Eva Perón est l'attraction principale parmi les sculptures et l'architecture néoclassique.", price: "Gratuit", tip: "La visite guidée gratuite (en anglais et en espagnol) part à 11h les mardis et jeudis depuis l'entrée. Le tombeau d'Evita se trouve rue Familia Duarte — prenez un plan à l'entrée." },
            { name: "Foire de Recoleta et le Musée national des Beaux-Arts", description: "La foire artisanale face au cimetière compte plus de 200 artisans locaux vendant bijoux, articles en cuir, céramique et gravures. Le musée des Beaux-Arts (gratuit) abrite la collection d'art latino-américain la plus importante de la région.", price: "Gratuit", tip: "La foire de Recoleta a lieu le week-end (10h-19h). En semaine, les jardins Álvear sont l'endroit le plus élégant de Buenos Aires pour un café en plein air." },
            { name: "Avenida Alvear et ses palais belle époque", description: "La rue la plus élégante de Buenos Aires, avec les palais les plus somptueux du XXe siècle : l'Alvear Palace Hotel, le Palacio Alzaga Unzué et les demeures des familles de propriétaires terriens.", price: "Gratuit", tip: "Le hall de l'hôtel Alvear est l'un des joyaux du Buenos Aires exclusif — y entrer pour le thé de l'après-midi (25 USD) est une expérience qui vaut le prix." },
            { name: "Cocktails à Palermo Soho", description: "Le quartier le plus branché de Buenos Aires, avec des bars à cocktails artisanaux, des restaurants gastronomiques et la plus forte concentration de design émergent de la ville. Florería Atlántico et Tres Monos sont les bars les plus reconnus.", price: "5-12 USD par cocktail", tip: "Florería Atlántico (l'un des meilleurs bars au monde) est un magasin de fleurs à l'étage avec un bar speakeasy en dessous — frappez à la porte de la chambre froide." },
          ],
        },
        {
          theme: "Palermo et la ville verte",
          activities: [
            { name: "Bosques de Palermo et le Rosedal", description: "Le grand parc de Buenos Aires, comparable à Central Park, avec le Rosedal (une roseraie de 18 000 rosiers), le Planétarium et le Jardin japonais. Le dimanche est le jour de la famille porteña dans le parc.", price: "Gratuit (Jardin japonais 500 ARS)", tip: "Louez un vélo dans le parc pour explorer les 25 km de pistes cyclables. Les stands de choripán à l'entrée nord du parc servent le chori le plus authentique de Buenos Aires." },
            { name: "Brunch à Palermo Hollywood", description: "Le quartier de Palermo Hollywood propose la meilleure scène de brunch de Buenos Aires, avec des cafés de spécialité, des avocado toasts et des menus brunch du monde entier. L'Avenida Arcos en est l'épicentre.", price: "10-20 USD", tip: "Le Café Martínez propose les meilleures medialunas au beurre de Palermo — le petit-déjeuner le plus argentin qui soit. Les cafés de spécialité comme Lattente ont le meilleur café de la ville." },
            { name: "MALBA — Musée d'art latino-américain", description: "Le musée d'art contemporain latino-américain le plus important du continent, avec des œuvres de Frida Kahlo, Tarsila do Amaral, Xul Solar et Antonio Berni. Le bâtiment en verre et acier est lui-même une œuvre d'art.", price: "7 USD", tip: "Le mercredi, l'entrée est à prix réduit et le cinéma d'art et essai est gratuit. La collection permanente (3e étage) abrite les 200 meilleures œuvres de l'art latino-américain du XXe siècle." },
            { name: "Foire de Villa Crespo et adieu", description: "Le marché de design émergent des jeunes créateurs de Buenos Aires, avec vêtements indépendants, accessoires, art et la meilleure ambiance locale de la ville. La street food du Mercado de las Pulgas est parfaite pour votre dernier après-midi.", price: "Gratuit (achats non inclus)", tip: "Le Mercado de las Pulgas à Colegiales (Dorrego et Alvarez Thomas) est le plan du dimanche préféré des jeunes Porteños — antiquités, design et DJs en direct." },
          ],
        },
      ],
    },
    de: {
      city: "Buenos Aires",
      country: "Argentinien",
      heroTitle: "4 Tage in Buenos Aires: Tango, Asado und die europäischste Stadt Amerikas",
      heroSubtitle: "San Telmo, La Boca, Palermo und der beste Asado der Welt — die komplette Reiseroute, um sich in die argentinische Hauptstadt zu verlieben.",
      bestMonths: "März bis Mai und September bis November",
      budget: "50-100 USD/Tag",
      travelTips: [
        "Argentiniens Wechselkurs kann schwanken — prüfen Sie die monetäre Lage vor Ihrer Reise und informieren Sie sich über die legalen Wechseloptionen",
        "Buenos Aires ist eine Nachtstadt — Abendessen beginnen um 21 Uhr und Milongas um 23 Uhr. Passen Sie Ihren Zeitplan an, sonst erscheinen Sie in leeren Restaurants",
        "Der öffentliche Nahverkehr (U-Bahn + Busse) ist effizient und sehr günstig — laden Sie eine SUBE-Karte an jedem Kiosk auf",
        "Argentinisches Asado wird um 13 Uhr (Mittag) oder 21 Uhr gegessen — erwarten Sie nicht, wie in Europa um 19 Uhr Asado zu essen",
        "Die sicheren Viertel für Touristen sind Palermo, Recoleta, San Telmo und Puerto Madero — vermeiden Sie es, nachts allein durch unbekannte Viertel zu laufen",
      ],
      days: [
        {
          theme: "San Telmo und das historische Herz",
          activities: [
            { name: "Plaza de Mayo und die Casa Rosada", description: "Buenos Aires' politisches Zentrum, Sitz der Exekutive seit 1873. Der Balkon, von dem aus Evita zum Volk sprach, ist vom Platz aus sichtbar. Die Kathedrale Metropolitana beherbergt das Grab von General San Martín.", price: "Kostenlos", tip: "Donnerstags um 15:30 Uhr halten die Madres de Plaza de Mayo ihren historischen Marsch um den zentralen Obelisken ab — ein lebendiges Zeugnis argentinischer Geschichte." },
            { name: "Viertel San Telmo", description: "Buenos Aires' ältestes Viertel, mit Kopfsteinpflasterstraßen, Kolonialhäusern aus dem 19. Jahrhundert, Kunstgalerien und Argentiniens berühmtestem Antiquitätenmarkt. Sonntags erstreckt sich ein Markt über die gesamte Straße Defensa.", price: "Kostenlos", tip: "Der Sonntagsmarkt in der Straße Defensa (10-18 Uhr) ist Buenos Aires' bester kostenloser Plan. Antiquitätenhändler, Straßenmusiker und spontane Tangotänzer sind Teil der Show." },
            { name: "Mittagessen am Markt von San Telmo", description: "Der überdachte Markt, seit 1897 geöffnet, mit Gängen von handwerklichen Metzgereien, Feinkostläden, Ständen mit frischen Produkten und Bars, die von Empanadas bis Cocktails alles servieren. Die Eisen-und-Glas-Architektur aus dem 19. Jahrhundert ist beeindruckend.", price: "15-25 USD", tip: "La Americanas Empanadas sind Buenos Aires' klassischste. Der Tresen der Bar El Federal, gegenüber dem Markt, hat den besten Kaffee und die besten Gebäckstücke des Viertels." },
            { name: "Tango-Show in San Telmo", description: "San Telmo ist die Geburtsstätte des Porteño-Tangos. Shows im El Viejo Almacén, in La Ventana oder im Centro Cultural Borges verbinden Abendessen, eine professionelle Vorstellung und die Geschichte des Tangos.", price: "USD 60-100 (Abendessen + Show)", tip: "Für authentischen Tango (keine Touristenshow) suchen Sie lokale Milongas: Club Almagro, Confitería Ideal oder La Viruta bieten Milongas ab USD 10-15." },
          ],
        },
        {
          theme: "La Boca, Puerto Madero und der Fluss",
          activities: [
            { name: "La Boca und der Caminito", description: "Das bunte Hafenviertel, wo Häuser aus Wellblech in leuchtenden Farben gestrichen sind — ein Erbe der genuesischen Einwanderer des 19. Jahrhunderts, die übrig gebliebene Farbe aus dem Hafen verwendeten. Das Stadion von Boca Juniors (La Bombonera) liegt 200 Meter entfernt.", price: "Kostenlos", tip: "Der Caminito ist touristisch und die Preise verdoppeln sich dort — essen und kaufen Sie ein paar Blocks weiter westlich zu normalen Preisen. Vermeiden Sie sichtbare Wertsachen." },
            { name: "La Bombonera — Museum und Stadion von Boca", description: "Lateinamerikas berühmtestes Stadion, Heimat von Boca Juniors. Die Museumstour umfasst die Umkleiden, die Tribünen und Maradona-Erinnerungsstücke. Das Spieltagserlebnis in La Bombonera ist fast religiös.", price: "Tour USD 20 / Spiel USD 30-80", tip: "Ein Heimspiel von Boca ist eines der intensivsten Erlebnisse im Weltsport. Kaufen Sie Tickets nur auf der offiziellen Website — Wiederverkäufer sind teuer und riskant." },
            { name: "Puerto Madero — das neueste Viertel", description: "Buenos Aires' alte Hafendocks, umgewandelt in das modernste, exklusivste Viertel der Stadt. Santiago Calatravas Puente de la Mujer ist das architektonische Wahrzeichen.", price: "Kostenlos", tip: "Das ökologische Reservat Costanera Sur, direkt neben Puerto Madero, bietet 360 Hektar Natur 5 Minuten vom Zentrum entfernt — eine perfekte grüne Flucht in der Stadt." },
            { name: "Asado-Abendessen in einer Porteño-Parrilla", description: "Die argentinische Parrilla ist eine kulinarische Institution. Kurzrippen (Asado de tira), Flankensteak (Vacío), Chorizo und Bries sind die Stücke, die Buenos Aires vom Rest der Welt abheben.", price: "USD 20-40", tip: "Don Julio (Palermo), La Brigada (San Telmo) und El Pobre Luis (Belgrano) sind Buenos Aires' drei angesehenste Parrillas. Reservieren Sie Tage im Voraus." },
          ],
        },
        {
          theme: "Recoleta und das europäische Buenos Aires",
          activities: [
            { name: "Friedhof von Recoleta", description: "Einer der berühmtesten Friedhöfe der Welt, mit 6.400 Gruften und 94 Denkmälern von historischem Interesse. Eva Peróns Grab ist die Hauptattraktion unter den Skulpturen und der neoklassizistischen Architektur.", price: "Kostenlos", tip: "Die kostenlose Führung (auf Englisch und Spanisch) startet dienstags und donnerstags um 11 Uhr am Eingang. Evitas Grab befindet sich in der Straße Familia Duarte — holen Sie sich am Eingang einen Plan." },
            { name: "Markt von Recoleta und das Nationalmuseum der Schönen Künste", description: "Der Kunsthandwerksmarkt gegenüber dem Friedhof hat mehr als 200 lokale Handwerker, die Schmuck, Lederwaren, Keramik und Drucke verkaufen. Das Museum der Schönen Künste (kostenlos) beherbergt die wichtigste Sammlung lateinamerikanischer Kunst der Region.", price: "Kostenlos", tip: "Der Markt von Recoleta findet am Wochenende statt (10-19 Uhr). Unter der Woche sind die Álvear-Gärten der eleganteste Ort in Buenos Aires für einen Kaffee im Freien." },
            { name: "Avenida Alvear und ihre Belle-Époque-Paläste", description: "Buenos Aires' elegantste Straße, mit den prunkvollsten Palästen des 20. Jahrhunderts: das Alvear Palace Hotel, der Palacio Alzaga Unzué und die Herrenhäuser der Großgrundbesitzerfamilien.", price: "Kostenlos", tip: "Die Lobby des Alvear-Hotels ist eines der Juwelen des exklusiven Buenos Aires — für den Nachmittagstee hineinzugehen (USD 25) ist ein Erlebnis, das den Preis wert ist." },
            { name: "Cocktails in Palermo Soho", description: "Buenos Aires' angesagtestes Viertel, mit handwerklichen Cocktailbars, gehobenen Restaurants und der höchsten Konzentration an aufstrebendem Design der Stadt. Florería Atlántico und Tres Monos sind die angesehensten Bars.", price: "USD 5-12 pro Cocktail", tip: "Florería Atlántico (eine der besten Bars der Welt) ist oben ein Blumenladen mit einer Speakeasy-Bar darunter — klopfen Sie an die Tür des Kühlraums." },
          ],
        },
        {
          theme: "Palermo und die grüne Stadt",
          activities: [
            { name: "Bosques de Palermo und der Rosedal", description: "Buenos Aires' großer Park, vergleichbar mit dem Central Park, mit dem Rosedal (einem Rosengarten mit 18.000 Rosensträuchern), dem Planetarium und dem japanischen Garten. Sonntag ist der Tag der Porteño-Familien im Park.", price: "Kostenlos (Japanischer Garten $500 ARS)", tip: "Mieten Sie ein Fahrrad im Park, um die 25 km Radwege zu erkunden. Die Choripán-Stände am Nordeingang des Parks servieren den authentischsten Chori in Buenos Aires." },
            { name: "Brunch in Palermo Hollywood", description: "Das Gebiet Palermo Hollywood bietet Buenos Aires' beste Brunch-Szene, mit Spezialitätencafés, Avocado-Toast und Brunch-Menüs aus aller Welt. Die Avenida Arcos ist das Epizentrum.", price: "USD 10-20", tip: "Café Martínez hat Palermos beste Butter-Medialunas — das argentinischste Frühstück überhaupt. Spezialitätencafés wie Lattente haben den besten Kaffee der Stadt." },
            { name: "MALBA — Museum für lateinamerikanische Kunst", description: "Das wichtigste Museum für zeitgenössische lateinamerikanische Kunst des Kontinents, mit Werken von Frida Kahlo, Tarsila do Amaral, Xul Solar und Antonio Berni. Das Glas-und-Stahl-Gebäude ist selbst ein Kunstwerk.", price: "USD 7", tip: "Mittwochs gibt es ermäßigten Eintritt und kostenloses Arthouse-Kino. Die Dauerausstellung (3. Stock) beherbergt die 200 besten Werke lateinamerikanischer Kunst des 20. Jahrhunderts." },
            { name: "Markt von Villa Crespo und Abschied", description: "Der Markt für aufstrebendes Design junger Designer aus Buenos Aires, mit unabhängiger Kleidung, Accessoires, Kunst und der besten lokalen Stimmung der Stadt. Street Food auf dem Mercado de las Pulgas ist perfekt für Ihren letzten Nachmittag.", price: "Kostenlos (Einkäufe nicht inbegriffen)", tip: "Der Mercado de las Pulgas in Colegiales (Dorrego und Alvarez Thomas) ist der beliebteste Sonntagsplan junger Porteños — Antiquitäten, Design und Live-DJs." },
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
    fr: {
      city: "Rio de Janeiro",
      country: "Brésil",
      heroTitle: "4 jours à Rio de Janeiro : le Christ Rédempteur, Copacabana et la samba",
      heroSubtitle: "Le Christ Rédempteur, le Pain de Sucre, les plages d'Ipanema et le football au Maracanã — la ville merveilleuse en quatre jours parfaits.",
      bestMonths: "Mai à octobre (saison sèche)",
      budget: "R$200-400/jour (~40-80 USD)",
      travelTips: [
        "La sécurité à Rio demande de la prudence : ne sortez pas votre téléphone dans la rue, utilisez des taxis/Uber plutôt que de longues marches la nuit",
        "Les plages de la zone sud (Copacabana, Ipanema, Leblon) sont les plus sûres pour les touristes",
        "Les transports via application (Uber, 99) sont plus sûrs que les taxis de rue — utilisez-les toujours pour les trajets nocturnes",
        "La véritable caipirinha se prépare avec de la cachaça (pas de la vodka) et du limão (citron vert brésilien) — commandez toujours la version classique",
        "Changez vos dollars en reais dans les bureaux de change de l'aéroport ou du centre-ville — les hôtels offrent de moins bons taux",
      ],
      days: [
        {
          theme: "Le Christ Rédempteur et la zone sud",
          activities: [
            { name: "Christ Rédempteur — tôt le matin", description: "L'une des 7 merveilles du monde moderne, à 710 mètres d'altitude sur le Corcovado. La statue de 38 mètres déploie ses bras au-dessus de toute la ville. La vue sur la baie de Guanabara, le Pain de Sucre et les plages depuis le sommet est incomparable.", price: "R$87 (train à crémaillère + entrée)", tip: "Réservez le train sur le site officiel du Corcovado. 8h offre la meilleure visibilité et le moins de visiteurs. Les jours nuageux, vous ne verrez rien." },
            { name: "Quartier de Santa Teresa", description: "Le quartier bohème de Rio, sur les pentes du Corcovado, avec des maisons coloniales restaurées, des galeries d'art, le bondinho (tramway électrique) et certains des meilleurs restaurants de la ville.", price: "Gratuit", tip: "Le Largo do Guimarães est le cœur du quartier, avec des bars et restaurants dans des maisons coloniales. Les galeries d'art sont ouvertes du mardi au dimanche." },
            { name: "Plage d'Ipanema", description: "La plage la plus célèbre et chic de Rio, immortalisée par la bossa nova. Chaque section a son propre public (postos 9 et 10 pour les jeunes Cariocas, posto 8 pour la communauté LGBT). Le football de plage et le volley-ball sont les sports de prédilection.", price: "Gratuit", tip: "Les chaises et parasols sur la plage appartiennent aux vendeurs et coûtent un supplément (R$20-30). Achetez de l'eau de coco directement aux stands sur le sable." },
            { name: "Coucher de soleil à Arpoador", description: "Le rocher entre Ipanema et Copacabana où les Cariocas se rassemblent chaque soir pour applaudir le coucher du soleil. Le moment où le soleil touche l'horizon et où tout le monde applaudit est l'un des plus beaux rituels urbains au monde.", price: "Gratuit", tip: "Arrivez 30 minutes avant le coucher du soleil pour avoir une bonne place sur le rocher. Les applaudissements collectifs sont spontanés et sincères — l'un des moments les plus cariocas que vous puissiez vivre." },
          ],
        },
        {
          theme: "Le Pain de Sucre et Copacabana",
          activities: [
            { name: "Pain de Sucre — téléphérique", description: "Le pic emblématique de 396 mètres au-dessus de la baie de Guanabara. Le téléphérique monte en deux étapes : d'abord jusqu'au Morro da Urca (215m), puis jusqu'au sommet du Pain de Sucre. Les vues sur Rio depuis le sommet sont spectaculaires.", price: "R$160", tip: "Le meilleur moment est le coucher du soleil (même prix R$160), quand le Christ Rédempteur s'illumine et que la baie scintille de mille reflets. Le matin offre une meilleure visibilité — décidez selon la météo." },
            { name: "Quartier d'Urca et déjeuner", description: "Le quartier le plus tranquille et résidentiel de Rio, au pied du Pain de Sucre. Les étals le long du Boulevard Olímpico servent les meilleurs bolinhos de morue et caipirinha avec vue sur la baie.", price: "R$30-60", tip: "Le Bar Circo da Urca a la plus belle terrasse du quartier, avec vue directe sur la montagne. Commandez une caipirinha au citron vert — la version brésilienne originale, pas à la fraise." },
            { name: "Plage de Copacabana", description: "La plage la plus célèbre du Brésil, 4 km de sable bordés de la mosaïque portugaise en vagues. Le Forte de Copacabana, à l'extrémité sud, offre le meilleur point de vue de la plage.", price: "Gratuit", tip: "Les vendeurs de rue proposant du mate glacé, de l'eau de coco et des biscoito globo sont un incontournable de l'expérience de plage carioca." },
            { name: "Samba à Lapa", description: "Lapa est le quartier de la samba de Rio, avec les Arcos da Lapa en toile de fond. Les bars et clubs comme Carioca da Gema et Rio Scenarium proposent de la samba live dès 20h, du jeudi au samedi.", price: "R$20-40 (consommation minimum)", tip: "Le Rio Scenarium a trois étages remplis d'antiquités et de samba live — l'un des plus beaux bars au monde. Arrivez avant 21h pour éviter la file." },
          ],
        },
        {
          theme: "Favela, le Maracanã et la cuisine carioca",
          activities: [
            { name: "Visite d'une favela à Vidigal ou Rocinha", description: "Les favelas de Rio ne sont pas seulement des sujets de journaux télévisés — ce sont des communautés vivantes avec leur histoire, leur nourriture et leur art. Les visites guidées à Vidigal ou Rocinha sont organisées au bénéfice de la communauté.", price: "R$80-150 (visite guidée)", tip: "Ne faites la visite qu'avec des opérateurs certifiés (Favela Reality, RioLIVE). N'y allez jamais seul. La vue depuis le sommet de Vidigal sur la mer est tout aussi impressionnante que celle du Pain de Sucre." },
            { name: "Déjeuner de feijoada au centre-ville", description: "La feijoada est le plat national du Brésil : un ragoût de haricots noirs avec côtes, saucisse et poitrine de porc, servi avec riz, farofa, chou vert sauté et tranches d'orange. Le samedi est le jour traditionnel pour la déguster.", price: "R$45-80", tip: "Le Bar do Mineiro à Santa Teresa et le Jobi à Leblon servent la meilleure feijoada de Rio. Les portions sont énormes — deux personnes peuvent en partager une." },
            { name: "Stade du Maracanã — visite ou match", description: "Le stade le plus célèbre d'Amérique latine et symbole du Brésil, d'une capacité de 78 000 personnes. La visite montre les vestiaires, la salle des trophées et la loge présidentielle. Si un match a lieu, l'expérience est incomparable.", price: "R$70 (visite) / R$50-300 (match)", tip: "Les matchs de Flamengo et Fluminense au Maracanã offrent la meilleure ambiance. Achetez les billets sur le site officiel du club — les revendeurs facturent 3 fois plus." },
            { name: "Dîner à Leblon — le quartier le plus élégant", description: "Leblon possède la plus forte concentration de restaurants de classe mondiale à Rio. L'éventail va des rodízios (buffet de grillades brésiliennes à volonté) aux meilleurs restaurants du chef Thomas Troisgros.", price: "R$80-200", tip: "Un rodízio de viande au Porcão ou au Fogo de Chão est l'expérience culinaire la plus représentative du Brésil — de la viande grillée qui continue d'arriver jusqu'à ce que vous retourniez la petite carte sur rouge." },
          ],
        },
        {
          theme: "Jardim Botânico et l'âme verte de Rio",
          activities: [
            { name: "Jardim Botânico", description: "Le jardin botanique de Rio, fondé par Dom João VI en 1808, avec des palmiers impériaux de 30 mètres, des nénuphars géants et la plus grande collection de bromélias au monde. Ses 6 500 espèces sur 54 hectares forment une oasis verte.", price: "R$30", tip: "L'allée des palmiers impériaux à l'entrée est la photo la plus emblématique du jardin. Les singes ouistitis et les agoutis sont communs — marchez lentement pour les repérer." },
            { name: "Lagoa Rodrigo de Freitas et la piste cyclable", description: "Le lagon au cœur de la zone sud de Rio, entouré d'une piste cyclable de 7 km avec vues sur le Christ Rédempteur, le Corcovado et les quartiers d'Ipanema et Leblon.", price: "Gratuit (location de vélo R$15/heure)", tip: "Le kiosque 7 de la Lagoa (Guimas) offre la meilleure vue et les meilleures caipirinhas au bord de l'eau. Le dimanche, il y a un marché aux puces avec des antiquités." },
            { name: "Parque Lage — la demeure dans la forêt", description: "Le parc au pied du Corcovado, avec une demeure néoclassique entourée de forêt atlantique. Il abrite aujourd'hui une école d'arts visuels, et le café de la cour avec vue sur le jardin est parfait pour l'après-midi.", price: "Gratuit", tip: "Le Parque Lage est le point de départ du sentier de randonnée jusqu'au Christ Rédempteur — une montée de 2 heures à travers la forêt atlantique. Un guide est recommandé." },
            { name: "Une dernière caipirinha sur le front de mer d'Ipanema", description: "L'adieu parfait à Rio : une caipirinha aux kiosques du front de mer d'Ipanema alors que le soleil se couche derrière le Morro Dois Irmãos et que les Cariocas applaudissent le coucher de soleil une fois de plus.", price: "R$15-25", tip: "Le Morro Dois Irmãos en arrière-plan d'Ipanema, avec le soleil se couchant derrière, est la plus belle carte postale de Rio. Les kiosques du front de mer servent de l'eau de coco fraîche et la meilleure caipirinha à la noix de cajou." },
          ],
        },
      ],
    },
    de: {
      city: "Rio de Janeiro",
      country: "Brasilien",
      heroTitle: "4 Tage in Rio de Janeiro: Christus der Erlöser, Copacabana und Samba",
      heroSubtitle: "Christus der Erlöser, der Zuckerhut, Ipanemas Strände und Fußball im Maracanã — die wunderbare Stadt an vier perfekten Tagen.",
      bestMonths: "Mai bis Oktober (Trockenzeit)",
      budget: "R$200-400/Tag (~40-80 USD)",
      travelTips: [
        "Sicherheit in Rio erfordert Vorsicht: holen Sie Ihr Handy nicht auf der Straße heraus, nutzen Sie nachts Taxis/Uber statt langer Spaziergänge",
        "Die Strände der Südzone (Copacabana, Ipanema, Leblon) sind für Touristen am sichersten",
        "App-basierte Transportmittel (Uber, 99) sind sicherer als Straßentaxis — nutzen Sie sie immer für nächtliche Fahrten",
        "Die originale Caipirinha wird mit Cachaça (nicht Wodka) und Limão (brasilianischer Limette) zubereitet — bestellen Sie immer die klassische Version",
        "Wechseln Sie Dollar in Real in den Wechselstuben am Flughafen oder in Agenturen in der Innenstadt — Hotels geben schlechtere Kurse",
      ],
      days: [
        {
          theme: "Christus der Erlöser und die Südzone",
          activities: [
            { name: "Christus der Erlöser — als Erstes am Morgen", description: "Eines der 7 Weltwunder der Neuzeit, 710 Meter über dem Meeresspiegel auf dem Corcovado. Die 38 Meter hohe Figur breitet ihre Arme über die gesamte Stadt aus. Der Blick auf die Guanabara-Bucht, den Zuckerhut und die Strände von oben ist unvergleichlich.", price: "R$87 (Zahnradbahn + Eintritt)", tip: "Buchen Sie den Zug auf der offiziellen Corcovado-Zugwebsite. 8 Uhr hat die beste Sicht und die wenigsten Besucher. An bewölkten Tagen sehen Sie nichts." },
            { name: "Viertel Santa Teresa", description: "Rios Bohème-Viertel, an den Hängen des Corcovado, mit restaurierten Kolonialhäusern, Kunstgalerien, der elektrischen Bondinho-Straßenbahn und einigen der besten Restaurants der Stadt.", price: "Kostenlos", tip: "Largo do Guimarães ist das Herz des Viertels, mit Bars und Restaurants in Kolonialhäusern. Kunstgalerien sind dienstags bis sonntags geöffnet." },
            { name: "Ipanema-Strand", description: "Rios berühmtester, schickster Strand, verewigt durch die Bossa Nova. Jeder Abschnitt hat sein eigenes Publikum (Postos 9 und 10 für junge Cariocas, Posto 8 für die LGBT-Community). Strandfußball und Volleyball sind die bevorzugten Sportarten.", price: "Kostenlos", tip: "Stühle und Sonnenschirme am Strand gehören Verkäufern und kosten extra (R$20-30). Kaufen Sie Kokoswasser direkt an den Ständen im Sand." },
            { name: "Sonnenuntergang bei Arpoador", description: "Der Felsen zwischen Ipanema und Copacabana, wo sich die Cariocas jeden Abend versammeln, um den Sonnenuntergang zu beklatschen. Der Moment, in dem die Sonne den Horizont berührt und alle klatschen, ist eines der schönsten urbanen Rituale der Welt.", price: "Kostenlos", tip: "Kommen Sie 30 Minuten vor Sonnenuntergang, um einen guten Platz auf dem Felsen zu bekommen. Der gemeinsame Applaus ist spontan und echt — einer der carioca-artigsten Momente, die Sie erleben können." },
          ],
        },
        {
          theme: "Der Zuckerhut und Copacabana",
          activities: [
            { name: "Zuckerhut — Seilbahn", description: "Der ikonische 396 Meter hohe Gipfel über der Guanabara-Bucht. Die Seilbahn fährt in zwei Etappen hinauf: zuerst zum Morro da Urca (215m), dann zum Gipfel des Zuckerhuts. Die Ausblicke auf Rio von oben sind spektakulär.", price: "R$160", tip: "Die beste Zeit ist der Sonnenuntergang (gleicher Preis R$160), wenn sich Christus der Erlöser erleuchtet und die Bucht mit tausend Reflexionen schimmert. Der Morgen hat bessere Sicht — entscheiden Sie je nach Wetter." },
            { name: "Viertel Urca und Mittagessen", description: "Rios ruhigstes, wohnlichstes Viertel, am Fuß des Zuckerhuts. Die Stände entlang des Boulevard Olímpico servieren die besten Bolinhos de Bacalhau und Caipirinha mit Blick auf die Bucht.", price: "R$30-60", tip: "Die Bar Circo da Urca hat die schönste Terrasse des Viertels, mit direktem Blick auf den Berg. Bestellen Sie eine Caipirinha de Limão — die originale brasilianische Version, nicht mit Erdbeere." },
            { name: "Copacabana-Strand", description: "Brasiliens berühmtester Strand, 4 km Sand, gesäumt vom wellenförmigen portugiesischen Steinmosaik. Das Forte de Copacabana an der Südspitze bietet den besten Aussichtspunkt des Strandes.", price: "Kostenlos", tip: "Die Straßenverkäufer mit Mate gelado (kaltem Kräutereistee), Kokoswasser und Biscoito globo sind ein unverzichtbarer Teil des Carioca-Stranderlebnisses." },
            { name: "Samba in Lapa", description: "Lapa ist Rios Samba-Viertel, mit den Arcos da Lapa als Kulisse. Bars und Clubs wie Carioca da Gema und Rio Scenarium bieten donnerstags bis samstags ab 20 Uhr Live-Samba.", price: "R$20-40 (Mindestverzehr)", tip: "Rio Scenarium hat drei Stockwerke voller Antiquitäten und Live-Samba — eine der schönsten Bars der Welt. Kommen Sie vor 21 Uhr, um die Schlange zu vermeiden." },
          ],
        },
        {
          theme: "Favela, der Maracanã und Carioca-Küche",
          activities: [
            { name: "Tour durch die Favela Vidigal oder Rocinha", description: "Rios Favelas sind nicht nur Fernsehnachrichten — sie sind lebendige Gemeinschaften mit Geschichte, Essen und Kunst. Geführte Touren nach Vidigal oder Rocinha werden zugunsten der Gemeinschaft organisiert.", price: "R$80-150 (geführte Tour)", tip: "Machen Sie die Tour nur mit zertifizierten Anbietern (Favela Reality, RioLIVE). Gehen Sie niemals allein hinein. Der Blick vom Gipfel von Vidigal auf das Meer ist genauso beeindruckend wie der vom Zuckerhut." },
            { name: "Feijoada-Mittagessen in der Innenstadt", description: "Feijoada ist Brasiliens Nationalgericht: ein schwarzer Bohneneintopf mit Rippchen, Wurst und Schweinebauch, serviert mit Reis, Farofa, sautiertem Grünkohl und Orangenscheiben. Samstag ist der traditionelle Tag dafür.", price: "R$45-80", tip: "Bar do Mineiro in Santa Teresa und Jobi in Leblon servieren Rios beste Feijoada. Die Portionen sind riesig — zwei Personen können sich eine teilen." },
            { name: "Maracanã-Stadion — Tour oder Spiel", description: "Lateinamerikas berühmtestes Stadion und Symbol Brasiliens, mit Platz für 78.000 Menschen. Die Tour zeigt die Umkleiden, den Pokalraum und die Präsidentenloge. Wenn ein Spiel stattfindet, ist das Erlebnis unvergleichlich.", price: "R$70 (Tour) / R$50-300 (Spiel)", tip: "Spiele von Flamengo und Fluminense im Maracanã haben die beste Atmosphäre. Kaufen Sie Tickets auf der offiziellen Seite des Vereins — Wiederverkäufer verlangen das 3-fache." },
            { name: "Abendessen in Leblon — das eleganteste Viertel", description: "Leblon hat die höchste Konzentration an Weltklasse-Restaurants in Rio. Die Bandbreite reicht von Rodízios (brasilianisches All-you-can-eat-Grillbuffet) bis zu den besten Restaurants von Küchenchef Thomas Troisgros.", price: "R$80-200", tip: "Ein Fleisch-Rodízio im Porcão oder Fogo de Chão ist Brasiliens repräsentativstes kulinarisches Erlebnis — gegrilltes Fleisch, das immer weiter kommt, bis Sie das kleine Kärtchen auf Rot drehen." },
          ],
        },
        {
          theme: "Jardim Botânico und Rios grüne Seele",
          activities: [
            { name: "Jardim Botânico", description: "Rios botanischer Garten, 1808 von Dom João VI. gegründet, mit 30 Meter hohen Kaiserpalmen, Riesenseerosen und der weltweit größten Bromelien-Sammlung. Seine 6.500 Arten auf 54 Hektar bilden eine grüne Oase.", price: "R$30", tip: "Die Kaiserpalmenallee am Eingang ist das ikonischste Foto des Gartens. Weißbüschelaffen und Aguti sind häufig — gehen Sie langsam, um sie zu entdecken." },
            { name: "Lagoa Rodrigo de Freitas und der Radweg", description: "Die Lagune im Herzen von Rios Südzone, umgeben von einem 7 km langen Radweg mit Ausblicken auf Christus den Erlöser, den Corcovado und die Viertel Ipanema und Leblon.", price: "Kostenlos (Fahrradverleih R$15/Stunde)", tip: "Kiosk 7 an der Lagoa (Guimas) hat den besten Blick und die besten Caipirinhas am Ufer. Sonntags gibt es einen Flohmarkt mit Antiquitäten." },
            { name: "Parque Lage — das Anwesen im Wald", description: "Der Park am Fuß des Corcovado, mit einem neoklassizistischen Anwesen, umgeben von Atlantik-Regenwald. Er beherbergt heute eine Schule für bildende Künste, und das Hofcafé mit Blick auf den Garten ist perfekt für den Nachmittag.", price: "Kostenlos", tip: "Der Parque Lage ist der Ausgangspunkt des Wanderwegs hinauf zu Christus dem Erlöser — ein 2-stündiger Aufstieg durch den Atlantik-Regenwald. Ein Guide wird empfohlen." },
            { name: "Eine letzte Caipirinha am Ufer von Ipanema", description: "Der perfekte Abschied von Rio: eine Caipirinha an den Kiosken am Ufer von Ipanema, während die Sonne hinter dem Morro Dois Irmãos untergeht und die Cariocas den Sonnenuntergang noch einmal beklatschen.", price: "R$15-25", tip: "Der Morro Dois Irmãos im Hintergrund von Ipanema, mit der dahinter untergehenden Sonne, ist Rios schönstes Postkartenbild. Die Uferkioske servieren kaltes Kokoswasser und die beste Cashewfrucht-Caipirinha." },
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
    fr: {
      city: "Bangkok",
      country: "Thaïlande",
      heroTitle: "4 jours à Bangkok : temples dorés, marchés flottants et street food",
      heroSubtitle: "Le Grand Palais, Wat Pho, Chatuchak et la street food la plus vivante d'Asie — l'itinéraire parfait pour un premier voyage en Thaïlande.",
      bestMonths: "Novembre à février",
      budget: "40-80 USD/jour",
      travelTips: [
        "Le BTS Skytrain et le métro MRT couvrent les principales zones touristiques — évitez les taxis aux heures de pointe (8h-9h et 17h-19h)",
        "Le baht thaïlandais est très stable — ayez du liquide sur vous pour les transports locaux et la street food, qui n'acceptent pas les cartes",
        "Retirez toujours vos chaussures avant d'entrer dans un temple ou chez quelqu'un — c'est une norme culturelle très sérieuse",
        "La saison des pluies (juin-octobre) apporte des averses torrentielles quotidiennes, surtout en fin d'après-midi — cela n'affecte pas beaucoup le tourisme",
        "Les chauffeurs de taxi ne parlent souvent pas anglais — ayez votre adresse écrite en thaï ou montrez l'épingle Google Maps",
      ],
      days: [
        {
          theme: "Les grands temples de Bangkok",
          activities: [
            { name: "Grand Palais et Wat Phra Kaew", description: "Le complexe le plus sacré de Thaïlande, construit en 1782 et abritant le Bouddha d'Émeraude (le plus vénéré du pays). Les structures dorées et les fresques du Ramakien dans les cloîtres sont des chefs-d'œuvre de l'art thaïlandais.", price: "500 ฿", tip: "Arrivez à l'ouverture à 8h30 pour éviter la foule et la chaleur. L'entrée inclut aussi le pavillon Vimanmek. Le code vestimentaire est obligatoire : épaules et genoux couverts — des vêtements sont prêtés à l'entrée." },
            { name: "Wat Pho — le Bouddha couché", description: "Le plus ancien temple de Bangkok (XVIe siècle) abrite le plus grand Bouddha couché de Thaïlande : 46 mètres de long, recouvert de feuilles d'or. C'est aussi le siège officiel du massage thaïlandais traditionnel.", price: "200 ฿", tip: "Le massage thaïlandais traditionnel dans les écoles du temple coûte 420 ฿ l'heure — le plus authentique et abordable de Bangkok. Réservez sur place." },
            { name: "Déjeuner de pad thaï dans la rue", description: "Les stands de rue autour de Wat Pho et de l'embarcadère de Tha Tien sont parmi les plus célèbres de Bangkok. Pad thaï, khao pad (riz frit) et tom yum font le déjeuner parfait.", price: "50-80 ฿", tip: "Cherchez les stands avec des files de locaux — un signe infaillible de qualité. Thip Samai sur Maharaj Rd sert le pad thaï le plus célèbre de Bangkok depuis 1966." },
            { name: "Wat Arun — le Temple de l'Aube", description: "Le temple sur le fleuve Chao Phraya, dont le prang principal est recouvert de fragments de porcelaine scintillant au soleil. Accessible en bateau depuis l'embarcadère de Tha Tien (5 ฿).", price: "100 ฿", tip: "Le meilleur moment est le coucher du soleil, quand la lumière dorée illumine les mosaïques de porcelaine. Montez au deuxième niveau du prang pour une vue sur le fleuve." },
          ],
        },
        {
          theme: "Marchés, canaux et Bangkok authentique",
          activities: [
            { name: "Marché flottant de Damnoen Saduak", description: "Le marché flottant le plus photogénique de Thaïlande, à 100 km de Bangkok. Des vendeurs en bateau chargés de fruits tropicaux, de pad thaï et de curry jaune naviguent sur des canaux du XIXe siècle.", price: "Excursion 700-1 000 ฿ (depuis Bangkok)", tip: "Partez avant 6h30 pour arriver à 8h, quand c'est le plus animé. Le trajet retour en bateau à travers les canaux est aussi intéressant que le marché lui-même." },
            { name: "Chinatown (Yaowarat)", description: "Le Chinatown de Bangkok, actif depuis 1782, possède les rues gastronomiques les plus denses de la ville. Fruits de mer grillés, canard rôti chinois et dim sum sont les spécialités du quartier.", price: "60-150 ฿", tip: "Yaowarat Rd la nuit (à partir de 18h) devient le meilleur marché de rue de Bangkok. De jour, les boutiques d'épices et d'herbes médicinales sont fascinantes." },
            { name: "Khlong Saen Saeb — les canaux de Bangkok", description: "Le système de bateaux express circulant dans les canaux de Bangkok — le moyen le plus rapide et le moins cher de se déplacer en centre-ville. Les khlongs (canaux) montrent le Bangkok fluvial original qui existait avant les autoroutes.", price: "15-20 ฿ par trajet", tip: "Utilisez les bateaux du Khlong Saen Saeb comme un vrai transport, pas comme une visite touristique. Embarquez à Pratunam et atteignez Chit Lom en 10 minutes, sans embouteillages." },
            { name: "Khao San Road et la vie nocturne backpacker", description: "La rue la plus célèbre d'Asie du Sud-Est pour les voyageurs indépendants, avec des bars, de la musique live, des tatoueurs, des masseuses de rue et la meilleure sélection de nourriture nocturne de Bangkok.", price: "50-100 ฿ (nourriture et boissons)", tip: "Les scorpions et insectes frits de Khao San sont pour les touristes aventureux — les grillons et vers à soie sont ce que les Thaïlandais mangent vraiment. Le pad see ew des stands en bout de rue est le meilleur." },
          ],
        },
        {
          theme: "Chatuchak et le shopping à Bangkok",
          activities: [
            { name: "Marché de Chatuchak", description: "Le plus grand marché de week-end au monde, avec 15 000 étals et 200 000 visiteurs chaque semaine. Vêtements, antiquités, animaux exotiques, art, plantes et nourriture dans un labyrinthe de 35 hectares.", price: "Gratuit (achats non inclus)", tip: "Un plan du marché est disponible à l'entrée — absolument nécessaire. Les sections 1-5 ont des antiquités ; 7-27 ont la mode et les vêtements ; la section 26 a la meilleure street food." },
            { name: "Terminal 21 — le centre commercial thème aéroport", description: "Un centre commercial unique où chaque étage est décoré sur le thème de l'aéroport d'une ville différente (Tokyo, Istanbul, San Francisco). Le food court au sous-sol est l'un des meilleurs et des moins chers de Bangkok.", price: "Gratuit (pour entrer)", tip: "Le food court du Terminal 21 propose des plats thaïlandais de 50 à 100 ฿. C'est le déjeuner climatisé le moins cher du centre-ville de Bangkok." },
            { name: "MBK Center et l'électronique", description: "Le grand magasin de Bangkok célèbre pour l'électronique, les vêtements locaux et la cuisine thaïlandaise. Le 4e étage possède la plus grande concentration d'accessoires et d'électronique d'occasion de la ville.", price: "Gratuit (pour entrer)", tip: "L'étage food court du MBK propose la cuisine thaïlandaise la moins chère du centre-ville — pad thaï à 60 ฿, riz gluant à la mangue à 80 ฿." },
            { name: "Dîner sur Sukhumvit Soi 11 et vie nocturne", description: "La rue la plus cosmopolite de Bangkok, avec un mélange de restaurants internationaux, de bars sur les toits et la vie nocturne la plus internationale de la ville. Levels, Demo et Hard Rock Cafe se trouvent tous sur cette artère.", price: "150-500 ฿", tip: "Le marché nocturne de Pat Pong (soi 4-5) compte plus d'une centaine d'étals de vêtements et souvenirs avec une ambiance nocturne. Négociez toujours — le prix demandé est le double du prix réel." },
          ],
        },
        {
          theme: "Temples alternatifs et adieu",
          activities: [
            { name: "Wat Benchamabophit — le Temple de Marbre", description: "Le temple le plus photogénique de Bangkok, construit en 1900 avec du marbre de Carrare italien. Les 52 bouddhas en bronze du cloître et le canal devant le temple lui confèrent une sérénité particulière.", price: "50 ฿", tip: "La meilleure photo se prend depuis le pont de pierre, avec le temple se reflétant dans le canal en arrière-plan. 9h offre la meilleure lumière et moins de touristes." },
            { name: "Maison Jim Thompson", description: "La demeure de l'homme d'affaires américain qui relança l'industrie de la soie thaïlandaise dans les années 1950. Six maisons traditionnelles en teck thaïlandais réunies forment l'un des espaces les plus élégants de Bangkok.", price: "200 ฿ (visite guidée incluse)", tip: "Jim Thompson a mystérieusement disparu en Malaisie en 1967 — les guides racontent l'histoire en détail. La visite n'est proposée qu'en anglais/français/japonais." },
            { name: "Spa d'adieu et massage thaïlandais", description: "Bangkok possède certains des meilleurs spas les moins chers d'Asie. Un massage de 2 heures dans un spa de qualité (pas ceux de Khao San Road) coûte 800-1 500 ฿ et inclut un massage complet du corps et de la réflexologie.", price: "600-1 500 ฿", tip: "Health Land et Divana sont des chaînes fiables avec plusieurs adresses à Bangkok. Réservez 2 heures à l'avance en haute saison." },
            { name: "Sky Bar Lebua — le bar le plus haut du monde", description: "Le bar de l'hôtel Lebua State Tower, à 220 mètres de haut, rendu célèbre par sa apparition dans Very Bad Trip 2. La vue sur le Chao Phraya et la skyline de Bangkok au coucher du soleil est incomparable.", price: "600-900 ฿ (cocktails)", tip: "Réservez une table à l'avance — c'est l'un des bars les plus recherchés au monde. Le code vestimentaire est obligatoire : ni sandales, ni short, ni débardeur." },
          ],
        },
      ],
    },
    de: {
      city: "Bangkok",
      country: "Thailand",
      heroTitle: "4 Tage in Bangkok: goldene Tempel, schwimmende Märkte und Street Food",
      heroSubtitle: "Der Große Palast, Wat Pho, Chatuchak und das lebendigste Street Food Asiens — die perfekte Reiseroute für eine erste Reise nach Thailand.",
      bestMonths: "November bis Februar",
      budget: "40-80 USD/Tag",
      travelTips: [
        "Der BTS Skytrain und die U-Bahn MRT decken die wichtigsten touristischen Gebiete ab — vermeiden Sie Taxis zur Stoßzeit (8-9 Uhr und 17-19 Uhr)",
        "Der thailändische Baht ist sehr stabil — haben Sie Bargeld für den lokalen Nahverkehr und Street Food dabei, wo keine Karten akzeptiert werden",
        "Ziehen Sie immer Ihre Schuhe aus, bevor Sie einen Tempel oder ein Zuhause betreten — das ist eine sehr ernste kulturelle Norm",
        "Die Regenzeit (Juni-Oktober) bringt tägliche Wolkenbrüche, besonders am späten Nachmittag — das beeinträchtigt den Tourismus kaum",
        "Taxifahrer sprechen oft kein Englisch — haben Sie Ihre Adresse auf Thai geschrieben oder zeigen Sie den Google-Maps-Pin",
      ],
      days: [
        {
          theme: "Die großen Tempel Bangkoks",
          activities: [
            { name: "Großer Palast und Wat Phra Kaew", description: "Der heiligste Komplex Thailands, 1782 erbaut und Heimat des Smaragd-Buddha (der verehrteste des Landes). Die goldenen Strukturen und die Ramakien-Wandmalereien in den Kreuzgängen sind Meisterwerke thailändischer Kunst.", price: "500 ฿", tip: "Kommen Sie um 8:30 Uhr zur Öffnung, um Menschenmassen und Hitze zu vermeiden. Der Eintritt beinhaltet auch den Vimanmek-Pavillon. Kleiderordnung ist Pflicht: Schultern und Knie bedeckt — Kleidung wird am Eingang verliehen." },
            { name: "Wat Pho — der liegende Buddha", description: "Der älteste Tempel Bangkoks (16. Jahrhundert) beherbergt den größten liegenden Buddha Thailands: 46 Meter lang, mit Blattgold bedeckt. Es ist auch der offizielle Sitz der traditionellen thailändischen Massage.", price: "200 ฿", tip: "Die traditionelle thailändische Massage in den Tempelschulen kostet 420 ฿ pro Stunde — die authentischste und günstigste in Bangkok. Vor Ort reservieren." },
            { name: "Pad-Thai-Mittagessen auf der Straße", description: "Die Straßenstände rund um Wat Pho und den Anleger Tha Tien gehören zu den berühmtesten Bangkoks. Pad Thai, Khao Pad (gebratener Reis) und Tom Yum ergeben das perfekte Mittagessen.", price: "50-80 ฿", tip: "Suchen Sie Stände mit Schlangen von Einheimischen — ein untrügliches Qualitätszeichen. Thip Samai in der Maharaj Rd serviert seit 1966 das berühmteste Pad Thai Bangkoks." },
            { name: "Wat Arun — der Tempel der Morgenröte", description: "Der Tempel am Fluss Chao Phraya, dessen Hauptprang mit Porzellanfragmenten bedeckt ist, die in der Sonne glitzern. Erreichbar mit dem Boot vom Anleger Tha Tien (5 ฿).", price: "100 ฿", tip: "Die beste Zeit ist der Sonnenuntergang, wenn das goldene Licht die Porzellanmosaiken erleuchtet. Steigen Sie zur zweiten Ebene des Prangs für einen Flussblick." },
          ],
        },
        {
          theme: "Märkte, Kanäle und das authentische Bangkok",
          activities: [
            { name: "Schwimmender Markt Damnoen Saduak", description: "Der fotogenste schwimmende Markt Thailands, 100 km von Bangkok entfernt. Verkäufer in Booten mit tropischen Früchten, Pad Thai und gelbem Curry navigieren auf Kanälen aus dem 19. Jahrhundert.", price: "Ausflug 700-1.000 ฿ (ab Bangkok)", tip: "Fahren Sie vor 6:30 Uhr los, um um 8 Uhr anzukommen, wenn es am belebtesten ist. Die Rückfahrt mit dem Boot durch die Kanäle ist genauso interessant wie der Markt selbst." },
            { name: "Chinatown (Yaowarat)", description: "Bangkoks Chinatown, seit 1782 aktiv, hat die dichtesten kulinarischen Straßen der Stadt. Gegrillte Meeresfrüchte, chinesische Entenbraten und Dim Sum sind die Spezialitäten des Viertels.", price: "60-150 ฿", tip: "Die Yaowarat Rd wird nachts (ab 18 Uhr) zum besten Straßenmarkt Bangkoks. Tagsüber sind die Gewürz- und Heilkräuterläden faszinierend." },
            { name: "Khlong Saen Saeb — Bangkoks Kanäle", description: "Das Expressboot-System, das durch Bangkoks Kanäle fährt — die schnellste und günstigste Art, sich in der Innenstadt fortzubewegen. Die Khlongs (Kanäle) zeigen das ursprüngliche Bangkok am Fluss, das vor den Autobahnen existierte.", price: "15-20 ฿ pro Fahrt", tip: "Nutzen Sie die Boote des Khlong Saen Saeb als echten Transport, nicht als touristische Tour. Steigen Sie in Pratunam ein und erreichen Sie Chit Lom in 10 Minuten, ohne Stau." },
            { name: "Khao San Road und das Backpacker-Nachtleben", description: "Die berühmteste Straße Südostasiens für unabhängige Reisende, mit Bars, Live-Musik, Tätowierern, Straßenmasseurinnen und der besten Auswahl an nächtlichem Essen in Bangkok.", price: "50-100 ฿ (Essen und Getränke)", tip: "Die frittierten Skorpione und Insekten auf der Khao San sind für abenteuerlustige Touristen — Grillen und Seidenraupen sind das, was Thailänder wirklich essen. Das Pad See Ew von den Ständen am Ende der Straße ist das beste." },
          ],
        },
        {
          theme: "Chatuchak und Shopping in Bangkok",
          activities: [
            { name: "Markt von Chatuchak", description: "Der größte Wochenendmarkt der Welt, mit 15.000 Ständen und 200.000 Besuchern pro Woche. Kleidung, Antiquitäten, exotische Tiere, Kunst, Pflanzen und Essen in einem 35 Hektar großen Labyrinth.", price: "Kostenlos (Einkäufe nicht inbegriffen)", tip: "Am Eingang ist ein Marktplan erhältlich — absolut notwendig. Die Abschnitte 1-5 haben Antiquitäten; 7-27 Mode und Kleidung; Abschnitt 26 hat das beste Street Food." },
            { name: "Terminal 21 — das Flughafen-Themen-Einkaufszentrum", description: "Ein einzigartiges Einkaufszentrum, in dem jede Etage nach dem Flughafen einer anderen Stadt gestaltet ist (Tokio, Istanbul, San Francisco). Der Food Court im Untergeschoss ist einer der besten und günstigsten in Bangkok.", price: "Kostenlos (Eintritt)", tip: "Der Food Court von Terminal 21 bietet thailändische Gerichte für 50-100 ฿. Es ist das günstigste klimatisierte Mittagessen in der Innenstadt Bangkoks." },
            { name: "MBK Center und Elektronik", description: "Das große Kaufhaus Bangkoks, berühmt für Elektronik, lokale Kleidung und thailändische Küche. Die 4. Etage hat die größte Konzentration an Zubehör und gebrauchter Elektronik der Stadt.", price: "Kostenlos (Eintritt)", tip: "Der Food-Court-Stock des MBK bietet die günstigste thailändische Küche der Innenstadt — Pad Thai für 60 ฿, Klebreis mit Mango für 80 ฿." },
            { name: "Abendessen auf der Sukhumvit Soi 11 und Nachtleben", description: "Bangkoks kosmopolitischste Straße, mit einer Mischung aus internationalen Restaurants, Dachterrassenbars und dem internationalsten Nachtleben der Stadt. Levels, Demo und Hard Rock Cafe befinden sich alle auf dieser Straße.", price: "150-500 ฿", tip: "Der Nachtmarkt von Pat Pong (Soi 4-5) hat mehr als hundert Stände mit Kleidung und Souvenirs mit nächtlicher Atmosphäre. Verhandeln Sie immer — der geforderte Preis ist doppelt so hoch wie der echte." },
          ],
        },
        {
          theme: "Alternative Tempel und Abschied",
          activities: [
            { name: "Wat Benchamabophit — der Marmortempel", description: "Der fotogenste Tempel Bangkoks, 1900 mit italienischem Carrara-Marmor erbaut. Die 52 Bronze-Buddhas im Kreuzgang und der Kanal vor dem Tempel verleihen ihm eine besondere Gelassenheit.", price: "50 ฿", tip: "Das beste Foto entsteht von der Steinbrücke aus, mit dem Tempel, der sich im Kanal im Hintergrund spiegelt. 9 Uhr bietet das beste Licht und weniger Touristen." },
            { name: "Jim-Thompson-Haus", description: "Das Anwesen des amerikanischen Geschäftsmanns, der in den 1950er Jahren die thailändische Seidenindustrie wiederbelebte. Sechs traditionelle Häuser aus thailändischem Teakholz, zusammengefügt, bilden einen der elegantesten Orte Bangkoks.", price: "200 ฿ (geführte Tour inbegriffen)", tip: "Jim Thompson verschwand 1967 auf mysteriöse Weise in Malaysia — die Guides erzählen die Geschichte im Detail. Die Führung wird nur auf Englisch/Französisch/Japanisch angeboten." },
            { name: "Abschieds-Spa und thailändische Massage", description: "Bangkok hat einige der besten und günstigsten Spas Asiens. Eine 2-stündige Massage in einem hochwertigen Spa (nicht die an der Khao San Road) kostet 800-1.500 ฿ und beinhaltet eine komplette Körpermassage und Reflexzonenmassage.", price: "600-1.500 ฿", tip: "Health Land und Divana sind zuverlässige Ketten mit mehreren Standorten in Bangkok. Reservieren Sie 2 Stunden im Voraus in der Hochsaison." },
            { name: "Sky Bar Lebua — die höchste Bar der Welt", description: "Die Bar des Hotels Lebua State Tower, 220 Meter hoch, berühmt geworden durch ihren Auftritt in Hangover 2. Der Blick auf den Chao Phraya und die Skyline Bangkoks bei Sonnenuntergang ist unvergleichlich.", price: "600-900 ฿ (Cocktails)", tip: "Reservieren Sie einen Tisch im Voraus — es ist eine der begehrtesten Bars der Welt. Kleiderordnung ist Pflicht: keine Sandalen, keine Shorts, kein Trägertop." },
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
    fr: {
      city: "Marrakech",
      country: "Maroc",
      heroTitle: "3 jours à Marrakech : la ville rouge qui réveille tous les sens",
      heroSubtitle: "La place Jemaa el-Fna, les souks labyrinthiques, le jardin Majorelle et les riads de rêve — l'itinéraire essentiel pour un premier voyage au Maroc.",
      bestMonths: "Mars à mai et octobre à novembre",
      budget: "50-100 USD/jour",
      travelTips: [
        "Engagez un guide officiel pour les souks (100-150 MAD/heure) — cela vous évitera de vous perdre et d'être orienté vers des boutiques à commission",
        "Le dirham marocain ne peut pas être changé en dehors du Maroc — apportez un peu de liquide pour commencer et changez le reste à l'aéroport ou dans les bureaux du centre-ville",
        "Habillez-vous modestement dans la médina — épaules et genoux couverts est la norme pour hommes et femmes, et vous évitera une attention non désirée",
        "Les photos de personnes nécessitent une autorisation — les artistes et vendeurs de la place attendent un paiement pour les photos (10-20 MAD)",
        "L'eau du robinet n'est pas potable — buvez toujours de l'eau en bouteille et évitez les glaçons dans les jus des stands de rue",
      ],
      days: [
        {
          theme: "La médina et le cœur de Marrakech",
          activities: [
            { name: "Place Jemaa el-Fna le matin", description: "Le cœur de Marrakech, classé au patrimoine mondial de l'UNESCO. Le matin, c'est un marché tranquille avec des stands de jus d'orange, des artistes du henné et des charmeurs de serpents. Le soir, elle se transforme en l'un des spectacles les plus chaotiques et fascinants au monde.", price: "Gratuit (services non inclus)", tip: "Le jus d'orange frais sur la place coûte 4-5 MAD — le petit-déjeuner le plus emblématique de Marrakech. N'acceptez pas les 'visites gratuites' proposées par des inconnus." },
            { name: "Les souks de la médina", description: "Le labyrinthe de marchés médiévaux où chaque rue appartient à une corporation spécialisée : souks d'épices, de cuir, de bronze, de céramique, de textiles et de babouches. Le souk des Teinturiers (teinturiers de cuir) est le plus photogénique.", price: "Gratuit (achats non inclus)", tip: "Un guide local (100-150 MAD) vous fait gagner des heures à tourner en rond et vous emmène dans les vrais ateliers. Sans guide, toutes les directions demandées vous mèneront chez une connaissance de quelqu'un." },
            { name: "Déjeuner sur une terrasse de la médina", description: "Les terrasses de riads au-dessus de la médina servent tagines, kefta et harira avec vue sur les minarets. Le Café de France et Le Foundouk offrent les meilleures vues sur la place.", price: "50-100 MAD", tip: "Le tagine d'agneau aux pruneaux et amandes (msir) est le plat le plus représentatif de Marrakech. Mangez là où vous voyez des Marocains manger, pas là où les 'guides' vous emmènent." },
            { name: "Jemaa el-Fna au coucher du soleil — le grand spectacle", description: "À partir de 17h, la place se transforme : des centaines de stands de nourriture, des musiciens gnawa, des conteurs, des acrobates et des cracheurs de feu occupent chaque mètre carré.", price: "Gratuit (nourriture 20-40 MAD)", tip: "Les stands de nourriture de la place (numérotés 1-150) se font concurrence sur les prix — tous affichent un menu visible. Choisissez celui avec le plus de locaux et demandez le prix AVANT de vous asseoir." },
          ],
        },
        {
          theme: "Palais, jardin Majorelle et hammam",
          activities: [
            { name: "Palais de la Bahia", description: "Le palais du XIXe siècle du grand vizir Ba Ahmed, avec 150 pièces, des cours d'orangers et de cèdres, des plafonds en cèdre sculpté et les plus belles moucharabiehs en bois du Maroc.", price: "70 MAD", tip: "Le palais est plus impressionnant qu'on ne l'imagine. La salle de réception du vizir a le plafond en cèdre le plus élaboré que vous verrez jamais." },
            { name: "Tombeaux saadiens", description: "Les mausolées du XVIe siècle où sont enterrés les sultans de la dynastie saadienne, redécouverts en 1917 après des siècles de scellement. Les chambres funéraires, avec leurs niches en zellige et stuc, sont d'une beauté extraordinaire.", price: "70 MAD", tip: "L'espace est petit et les visiteurs affluent en continu — arrivez à l'ouverture pour voir la Salle des Douze Colonnes sans la foule." },
            { name: "Jardin Majorelle et musée berbère", description: "Le jardin créé par le peintre français Jacques Majorelle en 1923, sauvé par Yves Saint Laurent. Le bleu cobalt du pavillon (bleu Majorelle), les cactus et la collection berbère du musée forment une oasis colorée.", price: "150 MAD (jardin + musée)", tip: "Le jardin est très fréquenté de 10h à 16h — arrivez à 14h, quand beaucoup de touristes déjeunent, pour trouver moins de monde." },
            { name: "Hammam traditionnel", description: "Le bain arabe séculaire fait partie intégrante de la culture marocaine. Les hammams de quartier (10-30 MAD) sont pour les locaux ; les hammams touristiques offrent des soins plus élaborés à l'argile ghassoul et à l'huile d'argan.", price: "Hammam local 20 MAD / touristique 150-300 MAD", tip: "Le Hamam Dar el Bacha et le Hammam de la Mosquée Mouassine sont les plus authentiques du centre-ville. Apportez des tongs et votre propre serviette si vous allez dans un hammam de quartier." },
          ],
        },
        {
          theme: "Excursion dans l'Atlas et retour à la médina",
          activities: [
            { name: "Excursion aux cascades d'Ouzoud", description: "Les plus grandes chutes d'eau d'Afrique du Nord, à 150 km de Marrakech, dévalant 110 mètres sur de la roche tuffeau. La route à travers l'Atlas et ses villages berbères est aussi intéressante que la destination elle-même.", price: "Excursion 25-40€ (depuis Marrakech)", tip: "Les excursions organisées d'une journée complète incluent le transport et le déjeuner au village. Le printemps (mars-mai) offre le débit d'eau le plus élevé — spectaculaire." },
            { name: "Déjeuner berbère dans l'Atlas", description: "Les restaurants des villages berbères de l'Atlas servent du tagine de poulet aux olives et citron confit, du couscous aux légumes et de la harira, sur des terrasses avec vue sur la montagne.", price: "80-120 MAD", tip: "Le pain berbère khobz, cuit au four en terre, accompagne parfaitement le tagine. Les restaurants routiers pleins de clients locaux sont les plus authentiques." },
            { name: "Retour, et après-midi de shopping dans les souks", description: "Votre dernier après-midi est idéal pour terminer vos achats dans les souks de la médina. Épices (ras el hanout, harissa), huile d'argan, lampes en laiton et tapis berbères sont les meilleurs souvenirs.", price: "Selon les achats", tip: "Le prix final négocié est généralement de 40-50% du prix demandé. Si le vendeur baisse rapidement le prix, vous pouvez encore négocier. Ne commencez jamais à marchander si vous n'avez pas l'intention d'acheter." },
            { name: "Dernière soirée sur une terrasse de Jemaa el-Fna", description: "La façon parfaite de dire au revoir à Marrakech est depuis les terrasses du Café de France ou du Grand Balcon Café Glacier, en regardant la place s'illuminer et se remplir de monde à la tombée de la nuit.", price: "30-50 MAD (thé à la menthe)", tip: "Le thé à la menthe marocain se verse de haut pour créer de la mousse — c'est un rituel. Demander à ce qu'il soit versé de haut est tout à fait normal et attendu." },
          ],
        },
      ],
    },
    de: {
      city: "Marrakesch",
      country: "Marokko",
      heroTitle: "3 Tage in Marrakesch: die rote Stadt, die jeden Sinn erweckt",
      heroSubtitle: "Der Platz Jemaa el-Fna, labyrinthische Souks, der Majorelle-Garten und traumhafte Riads — die essenzielle Reiseroute für eine erste Reise nach Marokko.",
      bestMonths: "März bis Mai und Oktober bis November",
      budget: "50-100 USD/Tag",
      travelTips: [
        "Engagieren Sie einen offiziellen Guide für die Souks (100-150 MAD/Stunde) — das bewahrt Sie davor, sich zu verlaufen und in Provisionsläden gelenkt zu werden",
        "Der marokkanische Dirham kann außerhalb Marokkos nicht getauscht werden — bringen Sie etwas Bargeld zum Start mit und wechseln Sie mehr am Flughafen oder in den Wechselstuben der Innenstadt",
        "Kleiden Sie sich bescheiden in der Medina — Schultern und Knie bedeckt ist die Norm für Männer und Frauen und hilft, unerwünschte Aufmerksamkeit zu vermeiden",
        "Fotos von Personen erfordern Erlaubnis — die Künstler und Verkäufer des Platzes erwarten eine Bezahlung für Fotos (10-20 MAD)",
        "Leitungswasser ist nicht sicher zu trinken — trinken Sie immer Flaschenwasser und vermeiden Sie Eis in Säften von Straßenständen",
      ],
      days: [
        {
          theme: "Die Medina und das Herz von Marrakesch",
          activities: [
            { name: "Platz Jemaa el-Fna am Morgen", description: "Das Herz von Marrakesch, UNESCO-Weltkulturerbe. Morgens ist es ein ruhiger Markt mit Orangensaftständen, Henna-Künstlern und Schlangenbeschwörern. Abends verwandelt es sich in eine der chaotischsten, faszinierendsten Shows der Welt.", price: "Kostenlos (Dienstleistungen nicht inbegriffen)", tip: "Frischer Orangensaft auf dem Platz kostet 4-5 MAD — Marrakeschs ikonischstes Frühstück. Nehmen Sie keine 'kostenlosen Touren' von Fremden an, die Sie ansprechen." },
            { name: "Die Souks der Medina", description: "Das Labyrinth mittelalterlicher Märkte, in dem jede Straße einer spezialisierten Zunft gehört: Gewürzsouks, Leder, Bronze, Keramik, Textilien und Babouches. Der Souk des Teinturiers (Ledergerber) ist der fotogenste.", price: "Kostenlos (Einkäufe nicht inbegriffen)", tip: "Ein lokaler Guide (100-150 MAD) erspart Ihnen Stunden des Herumirrens und bringt Sie zu den echten Werkstätten. Ohne einen führt jede Wegbeschreibung, die Sie erhalten, zu irgendeinem Bekannten." },
            { name: "Mittagessen auf einer Dachterrasse der Medina", description: "Riad-Dachterrassen über der Medina servieren Tajines, Kefta und Harira mit Blick auf die Minarette. Café de France und Le Foundouk haben die besten Ausblicke auf den Platz.", price: "50-100 MAD", tip: "Lammtajine mit Pflaumen und Mandeln (Msir) ist Marrakeschs repräsentativstes Gericht. Essen Sie dort, wo Sie Marokkaner essen sehen, nicht dort, wo die 'Guides' Sie hinbringen." },
            { name: "Jemaa el-Fna bei Sonnenuntergang — das große Spektakel", description: "Ab 17 Uhr verwandelt sich der Platz: Hunderte Essensstände, Gnawa-Musiker, Geschichtenerzähler, Akrobaten und Feuertänzer füllen jeden Quadratmeter.", price: "Kostenlos (Essen 20-40 MAD)", tip: "Die Essensstände des Platzes (nummeriert 1-150) konkurrieren im Preis — alle zeigen eine sichtbare Speisekarte. Wählen Sie den mit den meisten Einheimischen und fragen Sie nach dem Preis, BEVOR Sie sich setzen." },
          ],
        },
        {
          theme: "Paläste, der Majorelle-Garten und ein Hamam",
          activities: [
            { name: "Bahia-Palast", description: "Der Palast des Großwesirs Ba Ahmed aus dem 19. Jahrhundert, mit 150 Räumen, Innenhöfen mit Orangen- und Zedernbäumen, geschnitzten Zedernholzdecken und Marokkos feinstem Holzgitterwerk (Mashrabiyya).", price: "70 MAD", tip: "Der Palast ist beeindruckender, als man erwartet. Der Empfangsraum des Wesirs hat die aufwendigste Zedernholzdecke, die Sie je sehen werden." },
            { name: "Saadier-Gräber", description: "Die Mausoleen aus dem 16. Jahrhundert, in denen die Sultane der Saadier-Dynastie begraben sind, 1917 nach Jahrhunderten der Versiegelung wiederentdeckt. Die Grabkammern mit ihren Kachel- und Stuck-Nischen sind außergewöhnlich schön.", price: "70 MAD", tip: "Der Raum ist klein und Besucher strömen ständig durch — kommen Sie zur Öffnungszeit, um den Saal der zwölf Säulen ohne Menschenmenge zu sehen." },
            { name: "Majorelle-Garten und Berbermuseum", description: "Der Garten, geschaffen vom französischen Maler Jacques Majorelle im Jahr 1923, gerettet von Yves Saint Laurent. Das Kobaltblau des Pavillons (Majorelle-Blau), die Kakteen und die Berber-Sammlung des Museums bilden eine bunte Oase.", price: "150 MAD (Garten + Museum)", tip: "Der Garten ist von 10 bis 16 Uhr sehr überfüllt — kommen Sie um 14 Uhr, wenn viele Touristen zu Mittag essen, um weniger Menschen anzutreffen." },
            { name: "Traditionelles Hamam", description: "Das jahrhundertealte arabische Badehaus ist ein wesentlicher Teil der marokkanischen Kultur. Nachbarschafts-Hamams (10-30 MAD) sind für Einheimische; touristische bieten aufwendigere Behandlungen mit Ghassoul-Ton und Arganöl.", price: "Lokales Hamam 20 MAD / touristisch 150-300 MAD", tip: "Hamam Dar el Bacha und das Hammam de la Mosquée Mouassine sind die authentischsten im Zentrum. Bringen Sie Flip-Flops und Ihr eigenes Handtuch mit, wenn Sie zu einem Nachbarschafts-Hamam gehen." },
          ],
        },
        {
          theme: "Ausflug ins Atlasgebirge und zurück zur Medina",
          activities: [
            { name: "Ausflug zu den Ouzoud-Wasserfällen", description: "Nordafrikas größte Wasserfälle, 150 km von Marrakesch entfernt, die 110 Meter über Tuffstein fallen. Die Fahrt durch den Atlas und seine Berberdörfer ist genauso interessant wie das Ziel selbst.", price: "Tour 25-40€ (ab Marrakesch)", tip: "Organisierte Ganztagestouren beinhalten Transport und Mittagessen im Dorf. Der Frühling (März-Mai) hat den höchsten Wasserfluss — spektakulär." },
            { name: "Berber-Mittagessen im Atlas", description: "Restaurants in den Berberdörfern des Atlas servieren Hühnertajine mit Oliven und eingelegter Zitrone, Gemüsecouscous und Harira, auf Terrassen mit Bergblick.", price: "80-120 MAD", tip: "Berberisches Khobz-Brot, in einem Lehmofen gebacken, ist die beste Beilage zur Tajine. Straßenrestaurants voller lokaler Kunden sind am authentischsten." },
            { name: "Rückkehr, und ein Nachmittag Shopping in den Souks", description: "Ihr letzter Nachmittag ist ideal, um noch Einkäufe in den Souks der Medina zu erledigen. Gewürze (Ras el Hanout, Harissa), Arganöl, Messinglampen und Berberteppiche sind die besten Souvenirs.", price: "Abhängig von den Käufen", tip: "Der endgültige verhandelte Preis liegt meist bei 40-50% des geforderten Preises. Wenn der Verkäufer den Preis schnell senkt, können Sie noch weiter drücken. Beginnen Sie niemals zu verhandeln, wenn Sie nicht kaufen wollen." },
            { name: "Letzter Abend auf einer Dachterrasse am Jemaa el-Fna", description: "Der perfekte Abschied von Marrakesch ist von den Terrassen des Café de France oder des Le Grand Balcon Café Glacier aus, während man zusieht, wie sich der Platz in der Dämmerung erleuchtet und mit Menschen füllt.", price: "30-50 MAD (Minztee)", tip: "Marokkanischer Minztee wird aus der Höhe eingeschenkt, um Schaum zu erzeugen — es ist ein Ritual. Darum zu bitten, ihn von oben einzuschenken, ist völlig normal und erwartet." },
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
    fr: {
      city: "Dubaï",
      country: "Émirats arabes unis",
      heroTitle: "4 jours à Dubaï : du Burj Khalifa au désert",
      heroSubtitle: "Le Burj Khalifa, le Dubai Mall, un safari dans les dunes du désert et les souks historiques — l'itinéraire qui mêle le futur à la tradition arabe.",
      bestMonths: "Octobre à avril",
      budget: "200-400 USD/jour",
      travelTips: [
        "Les taxis et le métro (Dubai Metro) sont les moyens les plus pratiques de se déplacer — le métro dessert la plupart des destinations touristiques",
        "Habillez-vous modestement dans les souks, les mosquées et les lieux publics — épaules et genoux couverts dans le Deira historique",
        "L'alcool n'est servi que dans les hôtels et restaurants agréés — il est totalement interdit dans les espaces publics",
        "La chaleur est extrême de mai à septembre (45°C+) — prévoyez des activités climatisées pendant ces mois",
        "La monnaie locale est le dirham (AED) — presque tout accepte les cartes, mais le liquide est utile dans les souks historiques",
      ],
      days: [
        {
          theme: "Le Dubaï moderne : le Burj et Downtown",
          activities: [
            { name: "Dubai Mall et l'aquarium", description: "Le plus grand centre commercial au monde, avec 1 200 boutiques, un aquarium de 10 millions de litres et une patinoire de taille olympique. C'est la destination de loisirs la plus visitée de la planète, avec 100 millions de visites par an.", price: "Gratuit (pour entrer) / 130 AED (aquarium)", tip: "L'aquarium possède la plus grande vitre en verre au monde — visible gratuitement depuis l'extérieur, dans le centre commercial. L'intérieur vaut la peine si vous avez le temps." },
            { name: "Burj Khalifa — At the Top", description: "Le bâtiment le plus haut au monde, avec 828 mètres. La plateforme d'observation 'At The Top' au 124e étage offre des vues à plus de 80 km les jours de ciel dégagé.", price: "149 AED (124e étage) / 499 AED (148e étage)", tip: "Réservez en ligne et choisissez le créneau de 11h30 pour voir Dubaï de jour. Les créneaux au coucher du soleil sont très demandés et coûtent plus cher. Le 124e étage offre les meilleures photos." },
            { name: "Dubai Fountain et déjeuner", description: "Le plus grand système de fontaines au monde, face au Burj Khalifa. Les spectacles nocturnes sont les plus spectaculaires, mais même de jour l'échelle est impressionnante. La zone compte des dizaines de restaurants avec vue.", price: "Gratuit (fontaines) / 60-150 AED (restaurants)", tip: "Le spectacle nocturne des fontaines commence à 18h et se répète toutes les 30 minutes. Le meilleur angle est depuis la promenade au bord du lac du Dubai Mall." },
            { name: "Spectacle nocturne des fontaines et dîner à Downtown", description: "Le spectacle nocturne des fontaines, synchronisé sur de la musique arabe et classique, est l'une des expériences les plus émouvantes de Dubaï. Les restaurants le long de la promenade Dubai Fountain Boardwalk ont les meilleures tables.", price: "Gratuit", tip: "Réservez le dîner chez Zuma ou Pierchic avec vue sur le Burj pour votre première soirée — l'expérience est saisissante même si le prix est élevé." },
          ],
        },
        {
          theme: "Le Dubaï classique : la Creek, les souks et le quartier historique",
          activities: [
            { name: "Quartier historique Al Fahidi", description: "Le quartier historique du XIXe siècle de Dubaï, avec des maisons en corail et boue, des tours à vent (barjeel) pour la ventilation naturelle et le musée de Dubaï. Le contraste avec les gratte-ciel en arrière-plan est unique.", price: "Musée de Dubaï 3 AED", tip: "Le musée de Dubaï est le moins cher de la ville et l'un des plus instructifs — 3 AED pour voir l'histoire d'un village de pêcheurs devenu mégapole." },
            { name: "Traversée en abra sur la Dubai Creek", description: "Les abras sont les bateaux en bois traditionnels qui traversent la crique depuis des siècles. Le trajet de 5 minutes entre Deira et Bur Dubai coûte 1 AED et constitue le transport le plus authentique et photogénique de la ville.", price: "1 AED", tip: "Prenez l'abra en bois classique (pas la version motorisée moderne) — ils partent du quai Al Seef. Le trajet le long de la crique avec des boutres en bois en arrière-plan est merveilleux." },
            { name: "Souk de l'or et souk aux épices", description: "Le souk de l'or compte plus de 300 bijouteries avec 10 tonnes d'or exposées. Le souk aux épices adjacent propose du safran iranien, de l'encens arabe, du ras el hanout et des épices du monde entier.", price: "Gratuit (achats non inclus)", tip: "Le marchandage est attendu et pratiqué de façon standard dans les souks. Proposez 60% du prix demandé et vous trouverez un accord raisonnable entre les deux. L'or se vend au cours du marché, sans marchandage." },
            { name: "Dîner sur un boutre le long de la Creek", description: "Les boutres en bois traditionnels transformés en restaurants flottants proposent un dîner buffet en croisière sur la crique illuminée. La vue sur les gratte-ciel et les mosquées depuis l'eau est spectaculaire.", price: "120-200 AED", tip: "Il existe des dizaines de croisières en boutre — le prix standard inclut un dîner buffet. Réservez au quai Al Seef l'après-midi pour le créneau de 20h30." },
          ],
        },
        {
          theme: "Safari dans le désert : dunes, chameaux et étoiles",
          activities: [
            { name: "Départ pour le Safari dans le désert", description: "Les safaris dans le désert de Dubaï partent vers les dunes d'Al Lahbab en 4x4. Le dune bashing (rouler à grande vitesse sur les dunes en 4x4) est la partie la plus riche en adrénaline de l'expérience.", price: "200-300 AED (excursion complète)", tip: "Choisissez un opérateur réputé comme Arabian Adventures ou Orient Tours. Des prix très bas signifient généralement un dîner et des spectacles de moindre qualité." },
            { name: "Dune bashing et coucher de soleil sur les dunes", description: "Des descentes à grande vitesse sur des dunes de 100 mètres en 4x4 Land Cruiser. Le coucher de soleil au sommet des dunes d'Al Lahbab, avec le désert s'étendant jusqu'à l'horizon, semble irréel.", price: "Inclus dans l'excursion", tip: "Si vous êtes sujet au mal des transports, prenez du dramamine à l'avance. Les chauffeurs sont des professionnels expérimentés — laissez-les choisir le niveau de difficulté." },
            { name: "Campement bédouin : chameaux et tatouages au henné", description: "Le camp dans le désert inclut une balade à dos de chameau, des tatouages au henné, de la danse du ventre et du tir à l'arc. Un dîner buffet de cuisine arabe (kharouf, mezze, chicha) sous les étoiles du désert.", price: "Inclus dans l'excursion", tip: "La balade à dos de chameau ne dure que 5-10 minutes, mais la photo dure toute une vie. Demandez à votre guide de prendre la photo d'en bas pour que le chameau entier soit dans le cadre." },
            { name: "Spectacle de danse du ventre et de Tanoura", description: "La danse Tanoura (un danseur soufi tourbillonnant dans des jupes colorées) et la danse du ventre sont les spectacles inclus avec le dîner du camp. La prestation sous le ciel étoilé du désert est inoubliable.", price: "Inclus dans l'excursion", tip: "Les étoiles du désert arabique sont spectaculaires — apportez une application d'observation des étoiles pour identifier les constellations dans l'obscurité totale du camp." },
          ],
        },
        {
          theme: "Palm Jumeirah et le Dubaï moderne",
          activities: [
            { name: "Atlantis The Palm — Aquaventure", description: "Le parc aquatique de l'hôtel Atlantis sur Palm Jumeirah, avec 16 hectares de toboggans, des vagues artificielles et une zone avec raies manta et requins. L'une des expériences les plus riches en adrénaline de Dubaï.", price: "395 AED", tip: "Réservez en ligne pour une réduction anticipée. Le toboggan 'Tower of Neptune' (une chute libre de 27 mètres) est le plus extrême. Arrivez à 9h30 avant que les files ne se forment." },
            { name: "The Pointe et vues sur l'Atlantis", description: "La promenade de restaurants et boutiques à la pointe de la Palm, avec la meilleure vue sur l'Atlantis depuis l'eau. Les fontaines de The Pointe offrent un spectacle nocturne gratuit.", price: "Gratuit", tip: "La promenade de The Pointe offre des vues directes sur la silhouette de l'Atlantis avec le Burj Al Arab en arrière-plan — la photo de la Palm depuis ici est spectaculaire." },
            { name: "Plage de JBR et The Beach", description: "Jumeirah Beach Residence (JBR) est la promenade la plus animée du front de mer de Dubaï, avec la plage publique la plus fréquentée de la ville, des restaurants en bord de mer et le complexe The Beach avec vue sur le Burj Al Arab.", price: "Gratuit", tip: "La plage de JBR est publique et gratuite — des cabines de change et parasols payants sont disponibles mais pas nécessaires." },
            { name: "Dîner d'adieu avec vue sur le Burj Al Arab", description: "L'hôtel le plus emblématique de Dubaï (et du monde) a la forme d'une voile de boutre. Bien qu'y séjourner coûte des milliers de dollars, vous pouvez avoir une vue parfaite depuis le restaurant Pierchic ou depuis les restaurants de Jumeirah Beach.", price: "100-300 AED (restaurants extérieurs)", tip: "Le meilleur angle du Burj Al Arab est depuis la plage d'Umm Suqeim — 200 mètres de sable public face à l'hôtel, parfait pour la photo." },
          ],
        },
      ],
    },
    de: {
      city: "Dubai",
      country: "Vereinigte Arabische Emirate",
      heroTitle: "4 Tage in Dubai: vom Burj Khalifa in die Wüste",
      heroSubtitle: "Der Burj Khalifa, die Dubai Mall, eine Wüsten-Dünensafari und die historischen Souks — die Reiseroute, die Zukunft mit arabischer Tradition verbindet.",
      bestMonths: "Oktober bis April",
      budget: "200-400 USD/Tag",
      travelTips: [
        "Taxis und die U-Bahn (Dubai Metro) sind die praktischsten Fortbewegungsmittel — die Metro erreicht die meisten touristischen Ziele",
        "Kleiden Sie sich bescheiden in den Souks, Moscheen und öffentlichen Orten — Schultern und Knie sollten im historischen Deira bedeckt sein",
        "Alkohol wird nur in lizenzierten Hotels und Restaurants ausgeschenkt — er ist an öffentlichen Orten vollständig verboten",
        "Die Hitze ist von Mai bis September extrem (45°C+) — planen Sie klimatisierte Aktivitäten in diesen Monaten",
        "Die lokale Währung ist der Dirham (AED) — fast überall werden Karten akzeptiert, aber Bargeld ist in den historischen Souks nützlich",
      ],
      days: [
        {
          theme: "Das moderne Dubai: der Burj und Downtown",
          activities: [
            { name: "Dubai Mall und das Aquarium", description: "Das größte Einkaufszentrum der Welt, mit 1.200 Geschäften, einem 10-Millionen-Liter-Aquarium und einer olympischen Eisbahn. Es ist das meistbesuchte Freizeitziel des Planeten, mit 100 Millionen Besuchen pro Jahr.", price: "Kostenlos (Eintritt) / 130 AED (Aquarium)", tip: "Das Aquarium hat die größte Glasscheibe der Welt — von außen im Einkaufszentrum kostenlos sichtbar. Das Innere lohnt sich, wenn Sie Zeit haben." },
            { name: "Burj Khalifa — At the Top", description: "Das höchste Gebäude der Welt, mit 828 Metern. Die Aussichtsplattform 'At The Top' im 124. Stock bietet an klaren Tagen Ausblicke über 80 km.", price: "149 AED (124. Stock) / 499 AED (148. Stock)", tip: "Buchen Sie online und wählen Sie den 11:30-Uhr-Slot, um Dubai bei Tageslicht zu sehen. Sonnenuntergangs-Slots sind sehr gefragt und teurer. Der 124. Stock bietet die besten Fotos." },
            { name: "Dubai Fountain und Mittagessen", description: "Das größte Springbrunnensystem der Welt, gegenüber dem Burj Khalifa. Die nächtlichen Shows sind am spektakulärsten, aber auch tagsüber ist das Ausmaß beeindruckend. Das Gebiet hat Dutzende Restaurants mit Aussicht.", price: "Kostenlos (Brunnen) / 60-150 AED (Restaurants)", tip: "Die nächtliche Brunnenshow beginnt um 18 Uhr und wiederholt sich alle 30 Minuten. Der beste Blickwinkel ist von der Uferpromenade der Dubai Mall." },
            { name: "Nächtliche Brunnenshow und Abendessen in Downtown", description: "Die nächtliche Brunnenshow, synchronisiert zu arabischer und klassischer Musik, ist eines der bewegendsten Erlebnisse Dubais. Die Restaurants entlang der Dubai Fountain Boardwalk haben die besten Tische.", price: "Kostenlos", tip: "Buchen Sie für Ihren ersten Abend ein Abendessen bei Zuma oder Pierchic mit Burj-Blick — das Erlebnis ist atemberaubend, auch wenn der Preis hoch ist." },
          ],
        },
        {
          theme: "Das klassische Dubai: die Creek, Souks und das historische Viertel",
          activities: [
            { name: "Historisches Viertel Al Fahidi", description: "Dubais historisches Viertel aus dem 19. Jahrhundert, mit Häusern aus Koralle und Lehm, Windtürmen (Barjeel) für natürliche Belüftung und dem Dubai-Museum. Der Kontrast zu den Wolkenkratzern im Hintergrund ist einzigartig.", price: "Dubai-Museum 3 AED", tip: "Das Dubai-Museum ist das günstigste der Stadt und eines der lehrreichsten — 3 AED, um die Geschichte eines Fischerdorfs zu sehen, das zur Megacity wurde." },
            { name: "Abra-Fahrt auf der Dubai Creek", description: "Abras sind die traditionellen Holzboote, die seit Jahrhunderten die Bucht überqueren. Die 5-minütige Fahrt von Deira nach Bur Dubai kostet 1 AED und ist das authentischste, fotogenste Verkehrsmittel der Stadt.", price: "1 AED", tip: "Nehmen Sie das klassische Holz-Abra (nicht die moderne motorisierte Version) — sie starten am Al-Seef-Anleger. Die Fahrt entlang der Bucht mit hölzernen Dhaus im Hintergrund ist wunderbar." },
            { name: "Gold-Souk und Gewürz-Souk", description: "Der Gold-Souk hat mehr als 300 Juweliergeschäfte mit 10 Tonnen ausgestelltem Gold. Der angrenzende Gewürz-Souk hat iranischen Safran, arabischen Weihrauch, Ras el Hanout und Gewürze aus aller Welt.", price: "Kostenlos (Einkäufe nicht inbegriffen)", tip: "Verhandeln wird erwartet und ist gängige Praxis in den Souks. Bieten Sie 60% des geforderten Preises und Sie landen bei einer vernünftigen Einigung. Gold wird zum Marktpreis verkauft, ohne Verhandeln." },
            { name: "Abendessen auf einer Dhau entlang der Creek", description: "Traditionelle hölzerne Dhaus, umgebaut zu schwimmenden Restaurants, bieten ein Buffet-Abendessen während einer Kreuzfahrt auf der beleuchteten Creek. Der Blick auf die Wolkenkratzer und Moscheen vom Wasser aus ist spektakulär.", price: "120-200 AED", tip: "Es gibt Dutzende Dhau-Kreuzfahrten — der Standardpreis beinhaltet ein Buffet-Abendessen. Buchen Sie am Al-Seef-Anleger am Nachmittag für den 20:30-Uhr-Slot." },
          ],
        },
        {
          theme: "Wüstensafari: Dünen, Kamele und Sterne",
          activities: [
            { name: "Abholung für die Wüstensafari", description: "Dubais Wüstensafaris fahren mit 4x4-Fahrzeugen zu den Al-Lahbab-Dünen. Dune Bashing (rasantes Fahren über die Dünen im 4x4) ist der actionreichste Teil des Erlebnisses.", price: "200-300 AED (komplette Tour)", tip: "Wählen Sie einen seriösen Anbieter wie Arabian Adventures oder Orient Tours. Sehr günstige Preise bedeuten meist ein Abendessen und Shows von geringerer Qualität." },
            { name: "Dune Bashing und Sonnenuntergang auf den Dünen", description: "Fahrten mit hoher Geschwindigkeit über 100 Meter hohe Dünen in einem 4x4-Land-Cruiser. Der Sonnenuntergang auf den Al-Lahbab-Dünen, mit der bis zum Horizont reichenden Wüste, wirkt unwirklich.", price: "In der Tour inbegriffen", tip: "Wenn Sie zu Reisekrankheit neigen, nehmen Sie vorher Dramamin ein. Die Fahrer sind erfahrene Profis — lassen Sie sie den Schwierigkeitsgrad wählen." },
            { name: "Beduinenlager: Kamele und Henna-Tattoos", description: "Das Wüstenlager beinhaltet einen Kamelritt, Henna-Tattoos, Bauchtanz und Bogenschießen. Ein Buffet-Abendessen mit arabischem Essen (Kharouf, Mezze, Shisha) unter den Wüstensternen.", price: "In der Tour inbegriffen", tip: "Der Kamelritt dauert nur 5-10 Minuten, aber das Foto hält ein Leben lang. Bitten Sie Ihren Guide, das Foto von unten zu machen, damit das ganze Kamel im Bild ist." },
            { name: "Bauchtanz- und Tanoura-Show", description: "Der Tanoura-Tanz (ein wirbelnder Sufi-Tänzer in bunten Röcken) und Bauchtanz sind die Shows, die im Lagerdinner inbegriffen sind. Die Vorstellung unter dem Sternenhimmel der Wüste ist unvergesslich.", price: "In der Tour inbegriffen", tip: "Die Sterne in der arabischen Wüste sind spektakulär — bringen Sie eine Sternbeobachtungs-App mit, um Sternbilder in der totalen Dunkelheit des Lagers zu identifizieren." },
          ],
        },
        {
          theme: "Palm Jumeirah und das moderne Dubai",
          activities: [
            { name: "Atlantis The Palm — Aquaventure", description: "Der Wasserpark im Hotel Atlantis auf Palm Jumeirah, mit 16 Hektar Rutschen, künstlichen Wellen und einem Bereich mit Mantarochen und Haien. Eines der actionreichsten Erlebnisse Dubais.", price: "395 AED", tip: "Buchen Sie online für einen Frühbucherrabatt. Die Rutsche 'Tower of Neptune' (ein 27 Meter freier Fall) ist die extremste. Kommen Sie um 9:30 Uhr, bevor sich die Schlangen bilden." },
            { name: "The Pointe und Ausblicke auf das Atlantis", description: "Die Restaurant- und Geschäftspromenade an der Spitze der Palm, mit dem besten Blick auf das Atlantis vom Wasser aus. Die Brunnen von The Pointe bieten eine kostenlose nächtliche Show.", price: "Kostenlos", tip: "Die Promenade von The Pointe bietet direkte Ausblicke auf die Silhouette des Atlantis mit dem Burj Al Arab im Hintergrund — das Foto der Palm von hier ist spektakulär." },
            { name: "JBR-Strand und The Beach", description: "Jumeirah Beach Residence (JBR) ist Dubais lebendigste Strandpromenade, mit dem meistbesuchten öffentlichen Strand der Stadt, Restaurants am Wasser und dem Komplex The Beach mit Blick auf den Burj Al Arab.", price: "Kostenlos", tip: "Der JBR-Strand ist öffentlich und kostenlos — bezahlte Umkleiden und Sonnenschirme sind verfügbar, aber nicht nötig." },
            { name: "Abschiedsessen mit Blick auf den Burj Al Arab", description: "Dubais (und der Welt) ikonischstes Hotel hat die Form eines Dhau-Segels. Während der Aufenthalt dort Tausende Dollar kostet, erhalten Sie einen perfekten Blick vom Restaurant Pierchic oder von den Restaurants am Jumeirah Beach.", price: "100-300 AED (Restaurants außerhalb)", tip: "Der beste Blickwinkel auf den Burj Al Arab ist vom Umm-Suqeim-Strand aus — 200 Meter öffentlicher Sand gegenüber dem Hotel, perfekt für das Foto." },
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
    fr: {
      city: "Lisbonne",
      country: "Portugal",
      heroTitle: "3 jours à Lisbonne : Alfama, pastéis et miradouros",
      heroSubtitle: "Le château Saint-Georges, le tramway 28, Belém et le fado nocturne — l'itinéraire parfait pour tomber amoureux de la capitale portugaise.",
      bestMonths: "Mars à mai et septembre à octobre",
      budget: "70-120€/jour",
      travelTips: [
        "La carte rechargeable Viva Viagem, chargée de 5-10€, couvre le métro, les trams et les bus — bien moins cher que les tickets individuels",
        "Les miradouros (points de vue) sont l'activité la moins chère et la plus belle de Lisbonne — il y en a plus de 20 disséminés dans la ville",
        "Uber est très bon marché à Lisbonne — une alternative pratique aux trams aux heures de pointe",
        "Les restaurants avec un 'menu do dia' (9-12€ avec boisson, dessert et plat principal) sont l'option de déjeuner la plus authentique",
        "Portez des chaussures confortables avec une bonne adhérence — les pavés portugais glissent sous la pluie et fatiguent les pieds après beaucoup de marche",
      ],
      days: [
        {
          theme: "Alfama et le cœur historique",
          activities: [
            { name: "Château Saint-Georges", description: "La forteresse médiévale surplombant Lisbonne, avec des vues à 360° sur la ville, le Tage et le pont du 25 avril. Les murailles maures du XIe siècle sont parfaitement préservées.", price: "15€", tip: "Arrivez à l'ouverture pour voir les vues sans la foule. Monter par les ruelles étroites d'Alfama fait partie de l'expérience — évitez le taxi direct." },
            { name: "Quartier d'Alfama et le Miradouro da Graça", description: "Le plus ancien quartier de Lisbonne, un charmant labyrinthe de maisons carrelées, de linge qui sèche et de fado s'échappant des restaurants. Le Miradouro da Graça offre les meilleures vues de la ville.", price: "Gratuit", tip: "Se perdre dans Alfama fait partie du plan — inutile de chercher un itinéraire précis. Les ruelles les plus étroites au-dessus de la cathédrale de la Sé ont l'ambiance la plus authentique." },
            { name: "Déjeuner de morue à Alfama", description: "Le Portugal compte 365 recettes de morue (une pour chaque jour de l'année). Bacalhau à brás, à lagareiro ou com natas sont les classiques. Les tascas d'Alfama servent les versions les plus authentiques.", price: "10-18€", tip: "Cherchez les restaurants sans menu en anglais collé à la porte — signe qu'ils sont pour les locaux. Le prix du menu du jour inclut un plat principal + dessert + boisson." },
            { name: "Tramway 28 — l'itinéraire le plus pittoresque", description: "L'emblématique tram jaune qui monte et descend les collines de Lisbonne de Martim Moniz à Prazeres, en passant par Alfama, Graça et Estrela. C'est un vrai transport urbain, pas juste une attraction touristique.", price: "3€ (ticket simple)", tip: "Achetez le ticket à bord en liquide ou utilisez la carte Viva Viagem. Le tram est toujours bondé — montez à l'arrêt de départ pour avoir une place assise." },
          ],
        },
        {
          theme: "Belém et l'âge des découvertes",
          activities: [
            { name: "Pastéis de Belém", description: "La pâtisserie originale du pastel de nata, fondée en 1837, utilisant toujours une recette secrète connue de seulement trois personnes. La file du matin est longue mais avance vite.", price: "1,30€ par pâtisserie", tip: "Commandez-les tièdes avec du sucre et de la cannelle par-dessus, et mangez-les à l'intérieur de la pâtisserie. La salle carrelée est aussi spéciale que la pâtisserie elle-même." },
            { name: "Monastère des Hiéronymites", description: "Le chef-d'œuvre de l'architecture manuéline (gothique portugais), classé au patrimoine mondial de l'UNESCO. Le cloître, aux colonnes de pierre sculptées en forme de cordes et de corail, est l'un des espaces les plus impressionnants d'Europe.", price: "12€", tip: "L'église principale est gratuite et abrite les tombeaux de Vasco de Gama et Luís de Camões. Entrez d'abord pour apprécier l'échelle du bâtiment avant de payer pour le cloître." },
            { name: "Tour de Belém et le Monument aux Découvertes", description: "La tour de Belém (XVIe siècle) fut la dernière chose que voyaient les marins en partant et la première à leur retour. À 300 mètres, le Monument aux Découvertes met en scène les figures des explorateurs portugais.", price: "Tour 6€ / Monument 4€", tip: "La file pour la tour peut être longue — l'intérieur est petit et n'accueille que de petits groupes. Le monument possède un point de vue au sommet donnant sur le Tage, que peu de gens prennent la peine de gravir." },
            { name: "Maison de fado à Alfama", description: "Le fado est l'âme musicale de Lisbonne, reconnu comme patrimoine culturel immatériel de l'UNESCO. Les maisons de fado d'Alfama proposent un dîner avec prestations live — l'expérience la plus authentique de la ville.", price: "30-50€ (dîner + fado)", tip: "Réservez à l'avance au Clube de Fado, Sr. Fado ou Tasca do Chico. Un silence absolu est attendu pendant la prestation — c'est une norme culturelle, pas juste une demande." },
          ],
        },
        {
          theme: "Bairro Alto, LX Factory et le Tage",
          activities: [
            { name: "Miradouro da Senhora do Monte", description: "Le point de vue le plus haut de Lisbonne, avec des vues panoramiques englobant le château, le Tage, le Cristo Rei sur l'autre rive et le pont du 25 avril. Moins connu que celui de Santa Catarina.", price: "Gratuit", tip: "C'est un favori local pour le brunch du week-end. Le café du point de vue sert le meilleur café avec vue de la ville." },
            { name: "LX Factory — le marché créatif", description: "Une ancienne usine textile du XIXe siècle transformée en espace créatif, avec restaurants, librairies, studios de design et le meilleur marché de Lisbonne le dimanche. La librairie Ler Devagar, avec ses vélos suspendus, est incontournable.", price: "Gratuit (achats non inclus)", tip: "Le marché du dimanche de LX Factory a lieu de 11h à 20h et est le meilleur de Lisbonne. Le samedi et le dimanche sont les jours où les restaurants à l'intérieur sont au meilleur de leur forme." },
            { name: "Ribeira das Naus — le front de mer du Tage", description: "La promenade au bord de l'eau près du ministère de la Marine, où les Lisboètes se détendent dans des hamacs en bois face à la rivière. À 10 minutes à pied, la Praça do Comércio offre la meilleure perspective sur l'embouchure du Tage.", price: "Gratuit", tip: "Les hamacs sont gratuits et disponibles au premier arrivé. Commandez une ginjinha (liqueur de cerise) dans les kiosques le long de la promenade — la boisson la plus typique de Lisbonne." },
            { name: "Bairro Alto au coucher du soleil", description: "Le quartier des bars et de la vie nocturne de Lisbonne s'anime à partir de 18h. De petits bars aux portes ouvertes avec de la musique qui déborde dans la rue font de Bairro Alto la sortie nocturne la plus authentique de la ville.", price: "2-4€ par boisson", tip: "Les bars de Bairro Alto n'ont généralement pas de places assises — les gens boivent dans la rue, verre à la main, en passant d'un bar à l'autre. C'est parfaitement normal et sûr." },
          ],
        },
      ],
    },
    de: {
      city: "Lissabon",
      country: "Portugal",
      heroTitle: "3 Tage in Lissabon: Alfama, Pastéis und Miradouros",
      heroSubtitle: "Die Burg São Jorge, die Straßenbahn 28, Belém und nächtlicher Fado — die perfekte Reiseroute, um sich in die portugiesische Hauptstadt zu verlieben.",
      bestMonths: "März bis Mai und September bis Oktober",
      budget: "70-120€/Tag",
      travelTips: [
        "Die aufladbare Viva-Viagem-Karte, mit 5-10€ aufgeladen, deckt Metro, Straßenbahnen und Busse ab — viel günstiger als Einzeltickets",
        "Die Miradouros (Aussichtspunkte) sind Lissabons günstigste, schönste Aktivität — es gibt mehr als 20 davon in der Stadt verteilt",
        "Uber ist in Lissabon sehr günstig — eine praktische Alternative zu den Straßenbahnen zur Stoßzeit",
        "Restaurants mit einem 'Menu do dia' (9-12€ mit Getränk, Dessert und Hauptgericht) sind die authentischste Mittagsoption",
        "Tragen Sie bequeme Schuhe mit gutem Halt — portugiesisches Kopfsteinpflaster wird bei Regen rutschig und ermüdet die Füße nach viel Gehen",
      ],
      days: [
        {
          theme: "Alfama und das historische Herz",
          activities: [
            { name: "Burg São Jorge", description: "Die mittelalterliche Festung, die von oben auf Lissabon blickt, mit 360°-Ausblicken auf die Stadt, den Tejo und die Brücke des 25. April. Die maurischen Mauern aus dem 11. Jahrhundert sind perfekt erhalten.", price: "15€", tip: "Kommen Sie zur Öffnung, um die Ausblicke ohne Menschenmassen zu sehen. Der Aufstieg durch Alfamas enge Gassen ist Teil des Erlebnisses — verzichten Sie auf das direkte Taxi." },
            { name: "Viertel Alfama und Miradouro da Graça", description: "Lissabons ältestes Viertel, ein charmantes Labyrinth aus gefliesten Häusern, zum Trocknen aufgehängter Wäsche und Fado, der aus Restaurants klingt. Miradouro da Graça bietet die besten Ausblicke der Stadt.", price: "Kostenlos", tip: "Sich in Alfama zu verlaufen ist der Plan — es besteht keine Notwendigkeit, eine bestimmte Route zu suchen. Die engsten Gassen über der Sé-Kathedrale haben die authentischste Atmosphäre." },
            { name: "Kabeljau-Mittagessen in Alfama", description: "Portugal hat 365 Kabeljau-Rezepte (eines für jeden Tag des Jahres). Bacalhau à brás, à lagareiro oder com natas sind die Klassiker. Alfamas Tascas servieren die authentischsten Versionen der Stadt.", price: "10-18€", tip: "Suchen Sie Restaurants ohne englische Speisekarte an der Tür — ein Zeichen, dass sie für Einheimische sind. Der Preis des Tagesmenüs beinhaltet ein Hauptgericht + Dessert + Getränk." },
            { name: "Straßenbahn 28 — die malerischste Route", description: "Die ikonische gelbe Straßenbahn, die Lissabons Hügel von Martim Moniz bis Prazeres hinauf- und hinunterfährt, vorbei an Alfama, Graça und Estrela. Es ist echter Stadtverkehr, keine bloße Touristenfahrt.", price: "3€ (Einzelticket)", tip: "Kaufen Sie das Ticket an Bord bar oder nutzen Sie die Viva-Viagem-Karte. Die Straßenbahn ist immer überfüllt — steigen Sie an der Anfangshaltestelle ein, um einen Sitzplatz zu bekommen." },
          ],
        },
        {
          theme: "Belém und das Zeitalter der Entdeckungen",
          activities: [
            { name: "Pastéis de Belém", description: "Die originale Bäckerei des Pastel de Nata, 1837 gegründet, verwendet noch immer ein geheimes Rezept, das nur drei Menschen kennen. Die morgendliche Schlange ist lang, bewegt sich aber schnell.", price: "1,30€ pro Gebäck", tip: "Bestellen Sie sie warm mit Zucker und Zimt obendrauf und essen Sie sie in der Bäckerei. Der gekachelte Raum im Inneren ist genauso besonders wie das Gebäck selbst." },
            { name: "Jerónimos-Kloster", description: "Das Meisterwerk manuelinischer (portugiesisch-gotischer) Architektur, UNESCO-Weltkulturerbe. Der Kreuzgang mit steinernen Säulen, die wie Seile und Korallen geschnitzt sind, ist einer der beeindruckendsten Räume Europas.", price: "12€", tip: "Die Hauptkirche ist kostenlos und beherbergt die Gräber von Vasco da Gama und Luís de Camões. Gehen Sie zuerst hinein, um das Ausmaß des Gebäudes zu erfassen, bevor Sie für den Kreuzgang bezahlen." },
            { name: "Turm von Belém und das Denkmal der Entdeckungen", description: "Der Turm von Belém (16. Jahrhundert) war das Letzte, was Seefahrer beim Auslaufen sahen, und das Erste bei ihrer Rückkehr. 300 Meter entfernt zeigt das Denkmal der Entdeckungen die Figuren portugiesischer Entdecker.", price: "Turm 6€ / Denkmal 4€", tip: "Die Schlange für den Turm kann lang sein — das Innere ist klein und lässt nur kleine Gruppen zu. Das Denkmal hat einen Aussichtspunkt an der Spitze mit Blick auf den Tejo, den nur wenige zu erklimmen sich die Mühe machen." },
            { name: "Fado-Haus in Alfama", description: "Fado ist Lissabons musikalische Seele, anerkannt als UNESCO-Kulturerbe des immateriellen Erbes. Alfamas Fado-Häuser bieten Abendessen mit Live-Auftritten — das authentischste Erlebnis der Stadt.", price: "30-50€ (Abendessen + Fado)", tip: "Reservieren Sie im Voraus im Clube de Fado, Sr. Fado oder Tasca do Chico. Absolute Stille wird während der Vorstellung erwartet — das ist eine kulturelle Norm, keine bloße Bitte." },
          ],
        },
        {
          theme: "Bairro Alto, LX Factory und der Tejo",
          activities: [
            { name: "Miradouro da Senhora do Monte", description: "Lissabons höchster Aussichtspunkt, mit Panoramablicken auf die Burg, den Tejo, den Cristo Rei am gegenüberliegenden Ufer und die Brücke des 25. April. Weniger bekannt als der von Santa Catarina.", price: "Kostenlos", tip: "Er ist ein lokaler Favorit für den Wochenend-Brunch. Das Café am Aussichtspunkt serviert den besten Kaffee mit Aussicht der Stadt." },
            { name: "LX Factory — der kreative Markt", description: "Eine Textilfabrik aus dem 19. Jahrhundert, umgewandelt in einen kreativen Raum, mit Restaurants, Buchhandlungen, Designstudios und Lissabons bestem Markt am Sonntag. Die Buchhandlung Ler Devagar, mit ihren hängenden Fahrrädern, ist ein Muss.", price: "Kostenlos (Einkäufe nicht inbegriffen)", tip: "Der Sonntagsmarkt LX Market läuft von 11 bis 20 Uhr und ist der beste in Lissabon. Samstag und Sonntag sind die Tage, an denen die Restaurants im Inneren am besten sind." },
            { name: "Ribeira das Naus — die Uferpromenade des Tejo", description: "Die Uferpromenade am Marineministerium, wo Lissabonner sich in Holzhängematten mit Blick auf den Fluss entspannen. 10 Minuten zu Fuß entfernt bietet die Praça do Comércio die beste Perspektive auf die Mündung des Tejo.", price: "Kostenlos", tip: "Die Hängematten sind kostenlos und nach dem Prinzip 'wer zuerst kommt'. Bestellen Sie eine Ginjinha (Kirschlikör) an den Kiosken entlang der Promenade — Lissabons typischstes Getränk." },
            { name: "Bairro Alto bei Sonnenuntergang", description: "Lissabons Bar- und Nachtlebenviertel wird ab 18 Uhr lebendig. Kleine Bars mit offenen Türen und Musik, die auf die Straße strömt, machen Bairro Alto zum authentischsten Nachtleben der Stadt.", price: "2-4€ pro Getränk", tip: "Die Bars in Bairro Alto haben normalerweise keine Sitzplätze — die Leute trinken auf der Straße, Glas in der Hand, und ziehen von Bar zu Bar. Das ist völlig normal und sicher." },
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
    fr: {
      city: "Amsterdam",
      country: "Pays-Bas",
      heroTitle: "3 jours à Amsterdam : canaux, musées et vélos",
      heroSubtitle: "Le Rijksmuseum, la maison d'Anne Frank, Jordaan et les tulipes — l'itinéraire parfait pour une première visite de la capitale néerlandaise.",
      bestMonths: "Avril à mai (tulipes) et juin à août",
      budget: "90-150€/jour",
      travelTips: [
        "Louez un vélo dès le premier jour — c'est le moyen le plus rapide, le moins cher et le plus local pour se déplacer à Amsterdam",
        "Réservez la maison d'Anne Frank et le musée Van Gogh des semaines à l'avance — ils affichent toujours complet en haute saison",
        "Les trams couvrent toute la ville ; achetez un ticket journalier GVB pour 9,50€ pour des trajets illimités",
        "La I amsterdam City Card (75€/24h) inclut les musées, les transports et une croisière sur les canaux — rentable si vous visitez 3+ musées",
        "Attention aux pistes cyclables dans la rue — les cyclistes ont priorité sur les piétons et ne ralentiront pas",
      ],
      days: [
        {
          theme: "Les grands musées : Van Gogh et le Rijksmuseum",
          activities: [
            { name: "Rijksmuseum", description: "Le musée national néerlandais, au cœur de la Museumplein. Il abrite La Ronde de nuit de Rembrandt, La Laitière de Vermeer et plus d'un million d'objets du Siècle d'or néerlandais.", price: "22,50€", tip: "Réservez en ligne et choisissez le créneau de 9h. La Ronde de nuit est accrochée dans la Galerie d'Honneur au 2e étage — regardez-la depuis le fond de la salle pour apprécier sa véritable échelle." },
            { name: "Musée Van Gogh", description: "La plus grande collection au monde des œuvres de Vincent van Gogh, avec plus de 200 tableaux et 500 dessins. Les Tournesols, La Chambre et l'Autoportrait à l'oreille bandée sont tous ici.", price: "22€", tip: "Il faut réserver des semaines à l'avance en haute saison. L'audioguide gratuit via l'application du musée est excellent et couvre toutes les œuvres majeures." },
            { name: "Vondelpark", description: "Le parc le plus célèbre d'Amsterdam, avec 47 hectares où les habitants pique-niquent, font de la musique et roulent à vélo. En été, il y a du théâtre en plein air gratuit.", price: "Gratuit", tip: "Louez un vélo chez MacBike (15€/jour) pour vous déplacer dans toute la ville — le moyen le plus local et pratique d'explorer Amsterdam." },
            { name: "Dîner à De Pijp", description: "Le quartier le plus multiculturel et gastronomique d'Amsterdam, avec le marché Albert Cuyp (le plus grand des Pays-Bas), des restaurants surinamiens et indonésiens et la meilleure sélection de cafés artisanaux.", price: "15-25€", tip: "Le rijsttafel (table de riz indonésienne) est le legs colonial le plus savoureux des Pays-Bas — une expérience culinaire unique qui vaut le prix supplémentaire." },
          ],
        },
        {
          theme: "Histoire et canaux : Anne Frank et Jordaan",
          activities: [
            { name: "Maison d'Anne Frank", description: "La cachette où Anne Frank et sa famille se sont réfugiées des nazis entre 1942 et 1944. Le journal original, la bibliothèque secrète et les pièces préservées telles qu'elles étaient font de cette visite l'une des plus poignantes d'Europe.", price: "16€", tip: "Vous DEVEZ réserver en ligne des semaines à l'avance — il n'y a pas de billets sur place. Le créneau de 9h est le moins fréquenté." },
            { name: "Quartier de Jordaan et les canaux", description: "Le quartier le plus pittoresque d'Amsterdam, avec des maisons du XVIIe siècle penchées au-dessus des canaux, des galeries d'art, des boutiques vintage et les terrasses les plus chaleureuses de la ville.", price: "Gratuit", tip: "Traversez le Prinsengracht et explorez le Bloemgracht et l'Egelantiersgracht — ces canaux secondaires ont moins de touristes et plus de charme local." },
            { name: "Déjeuner de hareng au marché", description: "Le haring (hareng cru avec oignon et cornichons) est le snack le plus typique des Pays-Bas. Les étals de poisson frais sur les ponts de Jordaan offrent l'expérience la plus authentique.", price: "4-6€", tip: "Le hareng se mange en tenant le morceau par la queue et en le laissant tomber dans la bouche — c'est ainsi que font les Néerlandais. Ne commandez pas une seule bouchée, prenez le morceau entier." },
            { name: "Croisière en bateau sur les canaux", description: "Les 165 canaux et 1 753 ponts d'Amsterdam sont classés au patrimoine mondial de l'UNESCO. Une croisière en bateau montre la ville au niveau de l'eau, avec des perspectives impossibles à obtenir depuis la terre.", price: "15-20€", tip: "Les croisières de 15h ont une meilleure lumière pour les photos que celles du matin. Apportez une veste même en été — l'eau fait baisser la température." },
          ],
        },
        {
          theme: "Keukenhof (printemps) ou quartiers alternatifs",
          activities: [
            { name: "Keukenhof (mars-mai uniquement) ou NDSM Wharf", description: "Au printemps, les jardins de Keukenhof, avec 7 millions de tulipes en fleurs, sont l'un des plus beaux sites naturels d'Europe. Hors saison, NDSM Wharf, l'ancien chantier naval, est devenu un pôle créatif.", price: "Keukenhof 20€ / NDSM gratuit", tip: "Le bus direct depuis l'aéroport de Schiphol jusqu'à Keukenhof est l'option la plus simple — pas besoin de passer par Amsterdam." },
            { name: "Quartier Oud-West et le Ten Katemarkt", description: "Le marché de quartier le plus authentique d'Amsterdam, avec produits frais, vêtements d'occasion et street food méditerranéenne. Les cafés de la Jan Pieter Heijestraat sont l'alternative locale au Leidseplein touristique.", price: "Gratuit", tip: "Oud-West est le quartier où vivent les jeunes locaux — les cafés ont le wifi, de bons prix et une ambiance véritablement néerlandaise." },
            { name: "Amsterdam Noord — A'DAM Tower et le musée EYE", description: "De l'autre côté du port, Amsterdam Noord offre la meilleure skyline de la ville. La A'DAM Tower a la balançoire la plus haute d'Europe sur son toit, et le musée EYE est l'un des bâtiments les plus photogéniques de la ville.", price: "Ferry gratuit / A'DAM Tower 17,50€", tip: "Le ferry depuis la gare centrale jusqu'à Amsterdam Noord est gratuit et dure 5 minutes. Il part toutes les 7-8 minutes, 24h/24." },
            { name: "Brasserie 't IJ — la brasserie dans le moulin", description: "La brasserie artisanale la plus célèbre d'Amsterdam, installée dans un moulin à vent du XVIIIe siècle au bord du canal. Ses bières artisanales (Plzen, Zatte, Columbus) sont parmi les meilleures des Pays-Bas.", price: "3,50-5€ par bière", tip: "La petite terrasse face au moulin est l'un des meilleurs endroits pour le coucher du soleil en ville. Arrivez avant 17h en été pour avoir une table en extérieur." },
          ],
        },
      ],
    },
    de: {
      city: "Amsterdam",
      country: "Niederlande",
      heroTitle: "3 Tage in Amsterdam: Kanäle, Museen und Fahrräder",
      heroSubtitle: "Das Rijksmuseum, das Anne-Frank-Haus, Jordaan und Tulpen — die perfekte Reiseroute für einen ersten Besuch der niederländischen Hauptstadt.",
      bestMonths: "April bis Mai (Tulpen) und Juni bis August",
      budget: "90-150€/Tag",
      travelTips: [
        "Mieten Sie schon am ersten Tag ein Fahrrad — es ist die schnellste, günstigste und lokalste Art, sich in Amsterdam fortzubewegen",
        "Buchen Sie das Anne-Frank-Haus und das Van-Gogh-Museum Wochen im Voraus — sie sind in der Hochsaison immer ausgebucht",
        "Straßenbahnen decken die ganze Stadt ab; kaufen Sie ein GVB-Tagesticket für 9,50€ für unbegrenzte Fahrten",
        "Die I-amsterdam-City-Card (75€/24h) beinhaltet Museen, Transport und eine Grachtenfahrt — lohnt sich, wenn Sie 3+ Museen besuchen",
        "Achten Sie auf die Radwege auf der Straße — Radfahrer haben Vorrang vor Fußgängern und werden nicht langsamer",
      ],
      days: [
        {
          theme: "Die großen Museen: Van Gogh und das Rijksmuseum",
          activities: [
            { name: "Rijksmuseum", description: "Das niederländische Nationalmuseum, im Herzen des Museumsplatzes. Es beherbergt Rembrandts Die Nachtwache, Vermeers Das Milchmädchen und mehr als eine Million Objekte aus dem niederländischen Goldenen Zeitalter.", price: "22,50€", tip: "Buchen Sie online und wählen Sie den 9-Uhr-Slot. Die Nachtwache hängt in der Ehrengalerie im 2. Stock — betrachten Sie sie vom Ende des Raums aus, um ihr wahres Ausmaß zu erfassen." },
            { name: "Van-Gogh-Museum", description: "Die weltweit größte Sammlung von Werken Vincent van Goghs, mit mehr als 200 Gemälden und 500 Zeichnungen. Die Sonnenblumen, Das Schlafzimmer und Das Selbstporträt mit verbundenem Ohr sind alle hier.", price: "22€", tip: "In der Hochsaison muss Wochen im Voraus reserviert werden. Der kostenlose Audioguide über die App des Museums ist ausgezeichnet und deckt alle wichtigen Werke ab." },
            { name: "Vondelpark", description: "Amsterdams berühmtester Park, mit 47 Hektar, wo Einheimische picknicken, Musik machen und Fahrrad fahren. Im Sommer gibt es kostenloses Freilufttheater.", price: "Kostenlos", tip: "Mieten Sie ein Fahrrad bei MacBike (15€/Tag), um sich in der ganzen Stadt fortzubewegen — die lokalste und praktischste Art, Amsterdam zu erkunden." },
            { name: "Abendessen in De Pijp", description: "Amsterdams multikulturellstes, kulinarischstes Viertel, mit dem Albert-Cuyp-Markt (dem größten der Niederlande), surinamischen und indonesischen Restaurants und der besten Auswahl an handwerklichen Cafés.", price: "15-25€", tip: "Die Rijsttafel (indonesische Reistafel) ist das schmackhafteste koloniale Erbe der Niederlande — ein einzigartiges kulinarisches Erlebnis, das den Aufpreis wert ist." },
          ],
        },
        {
          theme: "Geschichte und Kanäle: Anne Frank und Jordaan",
          activities: [
            { name: "Anne-Frank-Haus", description: "Das Versteck, in dem sich Anne Frank und ihre Familie zwischen 1942 und 1944 vor den Nazis verbargen. Das originale Tagebuch, die geheime Bibliothek und die erhaltenen Räume, so wie sie waren, machen diesen Besuch zu einem der bewegendsten Europas.", price: "16€", tip: "Sie MÜSSEN Wochen im Voraus online buchen — vor Ort gibt es keine Tickets. Der 9-Uhr-Slot ist am wenigsten überlaufen." },
            { name: "Viertel Jordaan und die Kanäle", description: "Amsterdams malerischstes Viertel, mit über die Kanäle geneigten Häusern aus dem 17. Jahrhundert, Kunstgalerien, Vintage-Läden und den gemütlichsten Terrassen der Stadt.", price: "Kostenlos", tip: "Überqueren Sie die Prinsengracht und erkunden Sie die Bloemgracht und die Egelantiersgracht — diese Nebenkanäle haben weniger Touristen und mehr lokalen Charme." },
            { name: "Hering-Mittagessen am Markt", description: "Haring (roher Hering mit Zwiebeln und Gurken) ist der typischste Snack der Niederlande. Die frischen Fischstände auf den Brücken von Jordaan bieten das authentischste Erlebnis.", price: "4-6€", tip: "Hering isst man, indem man das Stück am Schwanz hält und es in den Mund fallen lässt — so machen es die Niederländer. Bestellen Sie nicht nur einen Bissen, nehmen Sie das ganze Stück." },
            { name: "Bootstour auf den Kanälen", description: "Amsterdams 165 Kanäle und 1.753 Brücken sind UNESCO-Weltkulturerbe. Eine Bootstour zeigt die Stadt auf Wasserhöhe, mit Perspektiven, die vom Land aus unmöglich sind.", price: "15-20€", tip: "Die 15-Uhr-Touren haben besseres Licht für Fotos als die am Morgen. Bringen Sie auch im Sommer eine Jacke mit — das Wasser senkt die Temperatur." },
          ],
        },
        {
          theme: "Keukenhof (Frühling) oder alternative Viertel",
          activities: [
            { name: "Keukenhof (nur März-Mai) oder NDSM-Werft", description: "Im Frühling sind die Gärten von Keukenhof mit 7 Millionen blühenden Tulpen eine der schönsten Naturattraktionen Europas. Außerhalb der Saison ist die NDSM-Werft, die alte Werft, zu einem kreativen Zentrum geworden.", price: "Keukenhof 20€ / NDSM kostenlos", tip: "Der direkte Bus vom Flughafen Schiphol zum Keukenhof ist die einfachste Option — kein Umweg über Amsterdam nötig." },
            { name: "Viertel Oud-West und der Ten Katemarkt", description: "Amsterdams authentischster Nachbarschaftsmarkt, mit frischen Produkten, Second-Hand-Kleidung und mediterranem Street Food. Die Cafés in der Jan Pieter Heijestraat sind die lokale Alternative zum touristischen Leidseplein.", price: "Kostenlos", tip: "Oud-West ist das Viertel, in dem junge Einheimische leben — die Cafés haben WLAN, gute Preise und eine wirklich niederländische Atmosphäre." },
            { name: "Amsterdam Noord — A'DAM Tower und das EYE-Museum", description: "Auf der anderen Seite des Hafens bietet Amsterdam Noord die beste Skyline der Stadt. Der A'DAM Tower hat Europas höchste Schaukel auf seinem Dach, und das EYE-Museum ist eines der fotogensten Gebäude der Stadt.", price: "Fähre kostenlos / A'DAM Tower 17,50€", tip: "Die Fähre vom Hauptbahnhof nach Amsterdam Noord ist kostenlos und dauert 5 Minuten. Sie fährt rund um die Uhr alle 7-8 Minuten." },
            { name: "Brauerei 't IJ — die Brauerei in der Mühle", description: "Amsterdams berühmteste handwerkliche Brauerei, in einer Windmühle aus dem 18. Jahrhundert am Kanal untergebracht. Ihre handwerklichen Biere (Plzen, Zatte, Columbus) gehören zu den besten der Niederlande.", price: "3,50-5€ pro Bier", tip: "Die kleine Terrasse gegenüber der Mühle ist einer der besten Orte für den Sonnenuntergang in der Stadt. Kommen Sie im Sommer vor 17 Uhr, um einen Außentisch zu bekommen." },
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
    fr: {
      city: "Londres",
      country: "Royaume-Uni",
      heroTitle: "4 jours à Londres : l'itinéraire pour ne rien manquer d'essentiel",
      heroSubtitle: "Tower Bridge, le British Museum, Notting Hill et le West End — avec les musées gratuits et les pubs que choisissent vraiment les habitants.",
      bestMonths: "Mai à septembre",
      budget: "120-200£/jour",
      travelTips: [
        "Une Oyster Card ou une carte sans contact est indispensable — payer en liquide dans le métro coûte le double d'une carte",
        "Presque tous les grands musées sont gratuits : British Museum, National Gallery, Tate Modern, V&A, Natural History Museum",
        "Le service (pourboire) n'est pas inclus dans la plupart des restaurants — 10-12% est standard si le service était bon",
        "La City ferme presque entièrement le week-end — prévoyez le quartier financier en semaine",
        "Téléchargez l'application TfL (Transport for London) pour planifier les trajets en métro, bus et DLR en temps réel",
      ],
      days: [
        {
          theme: "Le Londres historique : Tower Bridge et la City",
          activities: [
            { name: "Tour de Londres", description: "Une forteresse millénaire fondée par Guillaume le Conquérant en 1078. Elle abrite les joyaux de la Couronne britannique, dont la couronne impériale d'État avec ses 2 868 diamants. Les célèbres Beefeaters en sont les seuls guides officiels.", price: "34£", tip: "Arrivez à l'ouverture pour voir les joyaux de la Couronne sans la foule. Les Beefeaters proposent des visites gratuites incluses dans le billet d'entrée — cela en vaut vraiment la peine." },
            { name: "Tower Bridge", description: "Le pont le plus célèbre de Londres, inauguré en 1894. L'exposition intérieure montre la machinerie victorienne qui soulève le pont. Marcher sur la passerelle en verre à 42 mètres au-dessus de la Tamise est impressionnant.", price: "14£", tip: "Le pont se soulève plusieurs fois par jour pour laisser passer de grands navires — consultez les horaires en ligne pour ne pas le manquer." },
            { name: "Borough Market", description: "Le marché alimentaire le plus célèbre de Londres, ouvert depuis le XIIIe siècle. Plus de 100 étals de producteurs artisanaux, fromages, viandes, street food du monde entier et la meilleure sélection de plats à emporter du centre-ville.", price: "8-15£ (déjeuner)", tip: "Le jeudi, vendredi et samedi sont les jours de pleine activité. Le porc effiloché de Roast et les chocolats de Rabot 1745 sont incontournables." },
            { name: "Tate Modern", description: "Le musée d'art contemporain installé dans une centrale électrique du XXe siècle, avec des œuvres de Picasso, Warhol et Dalí. La vue sur le Millennium Bridge et la cathédrale Saint-Paul depuis la salle 10 au 4e étage est gratuite et spectaculaire.", price: "Gratuit (expositions temporaires 20£)", tip: "Le café du 6e étage a la meilleure terrasse, avec vue sur la Tamise et la cathédrale. Parfait pour un thé de l'après-midi." },
          ],
        },
        {
          theme: "Le Londres impérial : le British Museum et Bloomsbury",
          activities: [
            { name: "British Museum", description: "Le musée le plus visité du Royaume-Uni abrite 8 millions d'objets : la pierre de Rosette, les sculptures du Parthénon, des momies égyptiennes et le trésor de Sutton Hoo. Impossible de tout voir en une journée.", price: "Gratuit", tip: "Arrivez à 9h (une heure avant l'ouverture au grand public avec un billet en ligne) pour voir la pierre de Rosette sans la foule. La Grande Cour est impressionnante." },
            { name: "Covent Garden", description: "L'ancienne place du marché devenue une destination shopping, restauration et divertissement. Artistes de rue, restaurants et le marché de Covent Garden avec ses structures victoriennes en fer.", price: "Gratuit (shopping et nourriture non inclus)", tip: "Les artistes de rue de la Piazza doivent passer une audition du conseil municipal — le niveau est très élevé. La prestation de 12h30 est généralement la meilleure de la journée." },
            { name: "National Gallery", description: "La collection de peinture européenne la plus importante du Royaume-Uni, sur Trafalgar Square. Van Eyck, Léonard, Rembrandt, Monet et Turner figurent parmi les 2 300 œuvres du musée.", price: "Gratuit", tip: "La salle 30, avec les impressionnistes français (Monet, Renoir, Seurat), est un favori local. Un selfie devant les lions de Trafalgar Square est obligatoire." },
            { name: "Un spectacle dans le West End", description: "Le quartier des théâtres de Londres compte plus de 50 salles actives, présentant les meilleures comédies musicales et pièces au monde. Les Misérables, Mamma Mia et Le Fantôme de l'Opéra jouent depuis des décennies.", price: "30-100£", tip: "Des billets de dernière minute ou d'attente sont mis en vente à la billetterie le matin. Vous pouvez obtenir de bonnes places à moitié prix." },
          ],
        },
        {
          theme: "Notting Hill, Hyde Park et Kensington",
          activities: [
            { name: "Marché de Portobello Road", description: "Le marché le plus célèbre de Londres, actif depuis 1837, avec des antiquités le samedi et des fruits et fleurs toute la semaine. Les maisons colorées de Notting Hill offrent le décor parfait.", price: "Gratuit (achats non inclus)", tip: "Le samedi est le grand jour, avec jusqu'à 1 000 étals d'antiquités. Arrivez avant 10h pour voir les meilleures pièces avant qu'elles ne soient achetées." },
            { name: "Hyde Park et Kensington Gardens", description: "Les deux parcs royaux reliés forment l'un des plus grands poumons verts de Londres. Le lac Serpentine, Speaker's Corner et le mémorial de la princesse Diana sont les lieux les plus visités.", price: "Gratuit", tip: "Louez une chaise pliante près de la Serpentine et regardez passer les Londoniens. S'asseoir sur l'herbe est gratuit — les chaises coûtent un supplément (2£)." },
            { name: "Victoria & Albert Museum", description: "Le plus grand musée de design et d'arts décoratifs au monde, avec des collections de mode, céramique, bijoux, photographie et mobilier couvrant 5 000 ans d'histoire humaine.", price: "Gratuit", tip: "La cour intérieure avec son café et son jardin est l'un des secrets les mieux gardés du musée. Parfaite pour une pause déjeuner à la londonienne." },
            { name: "Harrods et Knightsbridge", description: "Le grand magasin le plus célèbre au monde, au cœur de Knightsbridge. Même sans rien acheter, les halles gastronomiques, le rayon parfumerie et la galerie de mode sont un spectacle visuel.", price: "Gratuit (pour entrer)", tip: "La halle alimentaire du sous-sol de Harrods est l'une des meilleures au monde. Vous pouvez prendre une pâtisserie ou un thé à emporter pour 5-10£ et en profiter sans dépenser une fortune." },
          ],
        },
        {
          theme: "Greenwich, la Tamise et l'adieu",
          activities: [
            { name: "Buckingham Palace et la relève de la garde", description: "La résidence officielle de la famille royale britannique. La relève de la garde a lieu à 11h et dure 45 minutes — un rituel avec musique de la fanfare militaire qui vaut la peine d'être vu au moins une fois.", price: "Gratuit (extérieur) / 35£ (intérieur, été seulement)", tip: "Pour bien voir la relève de la garde, arrivez à 10h30 et placez-vous devant la grille centrale. Les groupes touristiques arrivent tard et ne voient rien." },
            { name: "St James's Park", description: "Le plus ancien parc royal de Londres, avec vues directes sur le palais, les célèbres pélicans du lac et la passerelle offrant la vue la plus photogénique sur Buckingham Palace de tout Londres.", price: "Gratuit", tip: "Les pélicans du parc descendent d'un cadeau du tsar russe en 1664. Ils sont nourris à 14h30 chaque jour près du lac — un spectacle à voir." },
            { name: "Greenwich : le Méridien et l'Observatoire", description: "Greenwich abrite le méridien de Greenwich (longitude 0°), le Royal Observatory et le Cutty Sark, le clipper à thé le plus célèbre de l'histoire. Prendre le ferry sur la Tamise pour y arriver fait partie de l'expérience.", price: "Ferry 6£ / Observatoire 18£", tip: "Vous pouvez enjamber le Méridien avec un pied dans chaque hémisphère gratuitement — la ligne verte est marquée au sol juste devant l'Observatoire." },
            { name: "Un pub traditionnel à Soho", description: "Les pubs de Soho sont le cœur social de Londres. Le Lamb and Flag (fondé en 1623), The Nellie Dean et le French House ont une ambiance et une histoire qu'aucune chaîne ne peut imiter.", price: "6-8£ la pinte", tip: "À Londres, on commande au bar — n'attendez pas le service à table. Une pinte de Guinness ou une bitter locale sont les boissons les plus typiques." },
          ],
        },
      ],
    },
    de: {
      city: "London",
      country: "Vereinigtes Königreich",
      heroTitle: "4 Tage in London: die Reiseroute, um nichts Wesentliches zu verpassen",
      heroSubtitle: "Tower Bridge, das British Museum, Notting Hill und das West End — mit den kostenlosen Museen und den Pubs, die Einheimische wirklich wählen.",
      bestMonths: "Mai bis September",
      budget: "£120-200/Tag",
      travelTips: [
        "Eine Oyster Card oder kontaktlose Karte ist unerlässlich — bar zu zahlen in der Tube kostet doppelt so viel wie mit Karte",
        "Fast alle großen Museen sind kostenlos: British Museum, National Gallery, Tate Modern, V&A, Natural History Museum",
        "Service (Trinkgeld) ist in den meisten Restaurants nicht inbegriffen — 10-12% ist Standard, wenn der Service gut war",
        "Die City schließt am Wochenende fast vollständig — planen Sie das Finanzviertel für die Wochentage",
        "Laden Sie die TfL-App (Transport for London) herunter, um Tube-, Bus- und DLR-Routen in Echtzeit zu planen",
      ],
      days: [
        {
          theme: "Das historische London: Tower Bridge und die City",
          activities: [
            { name: "Tower of London", description: "Eine tausend Jahre alte Festung, 1078 von Wilhelm dem Eroberer gegründet. Sie beherbergt die britischen Kronjuwelen, einschließlich der Imperial State Crown mit 2.868 Diamanten. Die berühmten Beefeaters sind ihre einzigen offiziellen Guides.", price: "£34", tip: "Kommen Sie zur Öffnung, um die Kronjuwelen ohne Menschenmassen zu sehen. Die Beefeaters bieten kostenlose Führungen, die im Eintritt inbegriffen sind — sehr lohnenswert." },
            { name: "Tower Bridge", description: "Londons berühmteste Brücke, 1894 eröffnet. Die Innenausstellung zeigt die viktorianische Mechanik, die die Brücke hebt. Der Glasboden-Steg 42 Meter über der Themse zu gehen ist beeindruckend.", price: "£14", tip: "Die Brücke hebt sich mehrmals am Tag, um große Schiffe durchzulassen — prüfen Sie den Zeitplan online, um es zu erleben." },
            { name: "Borough Market", description: "Londons berühmtester Lebensmittelmarkt, seit dem 13. Jahrhundert geöffnet. Mehr als 100 Stände handwerklicher Produzenten, Käse, Fleisch, Street Food aus aller Welt und die beste Auswahl an fertigem Essen in der Innenstadt.", price: "£8-15 (Mittagessen)", tip: "Donnerstag, Freitag und Samstag ist der Markt in vollem Betrieb. Roasts Pulled Pork und Rabot 1745s Schokolade sind Pflicht." },
            { name: "Tate Modern", description: "Das Museum für zeitgenössische Kunst in einem Kraftwerk des 20. Jahrhunderts, mit Werken von Picasso, Warhol und Dalí. Der Blick auf die Millennium Bridge und St Paul's aus Raum 10 im 4. Stock ist kostenlos und spektakulär.", price: "Kostenlos (Sonderausstellungen £20)", tip: "Das Café im 6. Stock hat die beste Terrasse, mit Blick auf die Themse und die Kathedrale. Perfekt für einen Nachmittagstee." },
          ],
        },
        {
          theme: "Das imperiale London: das British Museum und Bloomsbury",
          activities: [
            { name: "British Museum", description: "Das meistbesuchte Museum Großbritanniens beherbergt 8 Millionen Objekte: den Stein von Rosette, die Parthenon-Skulpturen, ägyptische Mumien und den Schatz von Sutton Hoo. Unmöglich, alles an einem Tag zu sehen.", price: "Kostenlos", tip: "Kommen Sie um 9 Uhr (eine Stunde vor der Öffnung für die Allgemeinheit mit Online-Ticket), um den Stein von Rosette ohne Menschenmassen zu sehen. Der Große Hof ist beeindruckend." },
            { name: "Covent Garden", description: "Der alte Marktplatz, umgewandelt in ein Ziel für Shopping, Essen und Unterhaltung. Straßenkünstler, Restaurants und der Covent-Garden-Markt mit seinen viktorianischen Eisenstrukturen.", price: "Kostenlos (Einkäufe und Essen nicht inbegriffen)", tip: "Die Straßenkünstler auf der Piazza müssen ein Vorsprechen des Gemeinderats bestehen — der Standard ist sehr hoch. Die 12:30-Uhr-Vorstellung ist meist die beste des Tages." },
            { name: "National Gallery", description: "Großbritanniens wichtigste Sammlung europäischer Malerei, am Trafalgar Square. Van Eyck, Leonardo, Rembrandt, Monet und Turner gehören zu den 2.300 Werken des Museums.", price: "Kostenlos", tip: "Raum 30, mit den französischen Impressionisten (Monet, Renoir, Seurat), ist ein lokaler Favorit. Ein Selfie vor den Löwen am Trafalgar Square ist Pflicht." },
            { name: "Eine Show im West End", description: "Londons Theaterviertel hat mehr als 50 aktive Theater, in denen die besten Musicals und Theaterstücke der Welt aufgeführt werden. Les Misérables, Mamma Mia und Das Phantom der Oper laufen seit Jahrzehnten.", price: "£30-100", tip: "Tageskarten oder Last-Minute-Standby-Tickets werden morgens an der Kasse verkauft. Sie können gute Plätze zum halben Preis bekommen." },
          ],
        },
        {
          theme: "Notting Hill, Hyde Park und Kensington",
          activities: [
            { name: "Portobello Road Market", description: "Londons berühmtester Markt, seit 1837 aktiv, mit Antiquitäten samstags und Obst und Blumen die ganze Woche. Notting Hills bunte Häuser bieten die perfekte Kulisse.", price: "Kostenlos (Einkäufe nicht inbegriffen)", tip: "Samstag ist der große Tag, mit bis zu 1.000 Antiquitätenständen. Kommen Sie vor 10 Uhr, um die besten Stücke zu sehen, bevor sie aufgekauft werden." },
            { name: "Hyde Park und Kensington Gardens", description: "Die beiden verbundenen königlichen Parks bilden eine von Londons größten grünen Lungen. Der Serpentine-See, Speaker's Corner und das Prinzessin-Diana-Denkmal sind die meistbesuchten Orte.", price: "Kostenlos", tip: "Mieten Sie einen Klappstuhl am Serpentine und beobachten Sie die Londoner vorbeiziehen. Auf dem Rasen zu sitzen ist kostenlos — die Stühle kosten extra (£2)." },
            { name: "Victoria & Albert Museum", description: "Das weltweit größte Museum für Design und angewandte Kunst, mit Sammlungen von Mode, Keramik, Schmuck, Fotografie und Möbeln aus 5.000 Jahren Menschheitsgeschichte.", price: "Kostenlos", tip: "Der Innenhof mit dem Café und dem Garten ist eines der bestgehüteten Geheimnisse des Museums. Perfekt für eine Mittagspause à la Londoner." },
            { name: "Harrods und Knightsbridge", description: "Das weltweit berühmteste Kaufhaus, im Herzen von Knightsbridge. Auch ohne etwas zu kaufen sind die Feinkosthallen, die Parfümabteilung und die Modegalerie ein visuelles Spektakel.", price: "Kostenlos (Eintritt)", tip: "Die Feinkosthalle im Untergeschoss von Harrods ist eine der besten der Welt. Sie können sich ein Gebäck oder Tee zum Mitnehmen für £5-10 holen und es erleben, ohne ein Vermögen auszugeben." },
          ],
        },
        {
          theme: "Greenwich, die Themse und Abschied",
          activities: [
            { name: "Buckingham Palace und die Wachablösung", description: "Der offizielle Wohnsitz der britischen Königsfamilie. Die Wachablösung findet um 11 Uhr statt und dauert 45 Minuten — ein Ritual mit Musik der Armeekapelle, das man mindestens einmal gesehen haben sollte.", price: "Kostenlos (außen) / £35 (innen, nur Sommer)", tip: "Um einen guten Blick auf die Wachablösung zu bekommen, kommen Sie um 10:30 Uhr und positionieren Sie sich vor dem zentralen Tor. Reisegruppen kommen spät an und sehen nichts." },
            { name: "St James's Park", description: "Londons ältester königlicher Park, mit direktem Blick auf den Palast, den berühmten Pelikanen des Sees und der Fußgängerbrücke mit dem fotogensten Blick auf Buckingham Palace in London.", price: "Kostenlos", tip: "Die Pelikane des Parks stammen von einem Geschenk des russischen Zaren aus dem Jahr 1664 ab. Sie werden jeden Tag um 14:30 Uhr am See gefüttert — ein echter Anblick." },
            { name: "Greenwich: der Meridian und das Observatorium", description: "Greenwich ist die Heimat des Nullmeridians (Längengrad 0°), des Royal Observatory und der Cutty Sark, des berühmtesten Teeklippers der Geschichte. Mit der Fähre die Themse hinunterzufahren, um hierher zu gelangen, ist Teil des Erlebnisses.", price: "Fähre £6 / Observatorium £18", tip: "Sie können den Meridian kostenlos mit einem Fuß in jeder Hemisphäre überspannen — die grüne Linie ist auf dem Boden direkt vor dem Observatorium markiert." },
            { name: "Ein traditioneller Pub in Soho", description: "Sohos Pubs sind Londons soziales Herz. Das Lamb and Flag (1623 gegründet), The Nellie Dean und das French House haben eine Atmosphäre und Geschichte, die keine Kette nachahmen kann.", price: "£6-8 pro Pint", tip: "In London bestellt man an der Bar — warten Sie nicht auf Tischservice. Ein Pint Guinness oder ein lokales Bitter sind die typischsten Getränke." },
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
    fr: {
      city: "Cancún",
      country: "Mexique",
      heroTitle: "5 jours à Cancún et la Riviera Maya : au-delà du complexe hôtelier",
      heroSubtitle: "Cénotes, ruines mayas, plages de sable blanc et la culture mexicaine qui vit de l'autre côté de la lagune.",
      bestMonths: "Décembre à avril",
      budget: "80-200 USD/jour",
      travelTips: [
        "Les sargasses (algues) affectent certaines plages entre mai et septembre — vérifiez à l'avance quelles plages sont dégagées",
        "Les bus ADO sont confortables et abordables pour se déplacer entre Cancún, Playa del Carmen et Tulum",
        "Une assurance voyage est fortement recommandée — les soins médicaux au Mexique peuvent être coûteux pour les étrangers",
        "Ayez des pesos mexicains pour les marchés et restaurants locaux — les dollars sont acceptés mais vous perdrez sur le taux de change",
        "Une crème solaire respectueuse des récifs est obligatoire dans les cénotes et recommandée sur les plages de Tulum",
      ],
      days: [
        {
          theme: "La zone hôtelière et les plages de Cancún",
          activities: [
            { name: "Playa Delfines", description: "La plage publique la plus spectaculaire de la zone hôtelière, avec le panneau emblématique de Cancún, du sable blanc et l'eau la plus turquoise du Mexique. Pas de palapa d'hôtel, pas de frais.", price: "Gratuit", tip: "Les plages du nord de la zone hôtelière ont des vagues plus petites. Celles du sud (Delfines, Ballenas) ont plus de houle et sont meilleures pour le bodysurf." },
            { name: "Mercado 28 — le vrai Cancún", description: "Le marché artisanal du centre-ville de Cancún, loin de la zone hôtelière. Tacos al pastor, artisanat authentique et prix locaux au lieu des tarifs du tourisme de masse.", price: "5-10 USD", tip: "Les tacos cochinita pibil sont le plat yucatèque qui vous hantera une fois rentré. Commandez-les avec de l'oignon rouge mariné et de l'habanero." },
            { name: "Lagune de Nichupté — kayak ou paddleboard", description: "La lagune séparant la zone hôtelière du continent, avec des mangroves, des oiseaux tropicaux et une eau calme. Plusieurs entreprises louent kayaks et paddleboards sans guide requis.", price: "20-35 USD/heure", tip: "Les couchers de soleil sur la lagune avec la zone hôtelière en arrière-plan sont parmi les plus photogéniques de Cancún." },
            { name: "Le centre-ville de Cancún au crépuscule", description: "Le Parque Las Palapas au centre-ville est le lieu de rassemblement des locaux au crépuscule : artisans, snacks de rue, musique live et le rythme d'une vraie ville mexicaine.", price: "Gratuit", tip: "Le centre-ville de Cancún, à 20 minutes en bus de votre hôtel (0,50 USD), offre une soirée authentique que la zone hôtelière ne peut jamais offrir." },
          ],
        },
        {
          theme: "Isla Mujeres : le paradis à 20 minutes",
          activities: [
            { name: "Ferry vers Isla Mujeres", description: "Le ferry part toutes les 30 minutes depuis Puerto Juárez. La traversée de 20 minutes est déjà spectaculaire avec les couleurs des Caraïbes.", price: "8 USD aller-retour", tip: "Arrivez au quai avant 8h pour prendre le premier ferry. Isla Mujeres presque déserte (première heure) est un rêve." },
            { name: "Playa Norte — la meilleure plage des Caraïbes", description: "Constamment élue parmi les meilleures plages du monde, avec une eau semblable à une piscine, du sable blanc fin et une lagune protégée sans vagues. Seulement 2 km de long.", price: "Gratuit", tip: "Louez une voiturette de golf (40 USD/jour) pour explorer toute l'île de 8 km. C'est le moyen de déplacement de tous à Isla Mujeres." },
            { name: "Garrafón — snorkeling sur le récif corallien", description: "La pointe sud de l'île abrite l'un des meilleurs récifs coralliens des Caraïbes mexicaines, avec poissons colorés, raies et tortues. Le parc Garrafón inclut le snorkeling.", price: "25-45 USD", tip: "Le snorkeling gratuit en dehors du parc (depuis les rochers au sud de la plage Zac-Ha) est tout aussi bon et gratuit." },
            { name: "Le village d'Isla Mujeres", description: "Des rues aux couleurs vives, des boutiques artisanales locales et des restaurants de fruits de mer en bord de mer font du village un endroit où il fait bon flâner.", price: "Gratuit", tip: "La rue Hidalgo a les meilleurs restaurants de fruits de mer à prix juste. Le ceviche de l'île est différent de celui de Cancún." },
          ],
        },
        {
          theme: "Chichén Itzá et une baignade dans un cénote",
          activities: [
            { name: "Départ pour Chichén Itzá", description: "L'ancienne cité maya, désignée l'une des 7 merveilles du monde moderne, se trouve à 2h30 de Cancún. Partir tôt permet d'éviter la chaleur extrême et les milliers de touristes.", price: "Excursion à partir de 60 USD (transport inclus)", tip: "Lors des équinoxes (21 mars et 23 septembre) le soleil crée le serpent de lumière sur la pyramide El Castillo — tourisme de masse, mais spectaculaire." },
            { name: "El Castillo et la cité maya", description: "La pyramide de Kukulcán compte 365 marches (une pour chaque jour de l'année), ainsi que le Temple des Guerriers, le plus grand terrain de jeu de balle de Méso-amérique et le Cénote Sacré.", price: "35 USD (entrée)", tip: "Vous ne pouvez plus grimper sur la pyramide depuis 2006, mais vous pouvez la toucher. Les guides font une démonstration de l'écho qui imite le cri d'un quetzal en tapant des mains devant l'escalier." },
            { name: "Cénote Ik-Kil", description: "Le cénote le plus photogénique de la Riviera Maya, à 3 km de Chichén Itzá : un gouffre circulaire de 40m de diamètre, ouvert sur le ciel, aux parois couvertes de fougères en cascade.", price: "15 USD", tip: "Arrivez juste après le déjeuner quand les groupes de touristes partent. Entre 14h et 16h, c'est le plus calme et la lumière du soleil pénètre dans le cénote." },
            { name: "Retour à Cancún via Valladolid", description: "La ville coloniale de Valladolid se trouve sur le chemin du retour. Un arrêt de 45 minutes pour voir le cénote Zaci (en plein centre-ville) et le centre historique.", price: "Cénote Zaci 5 USD", tip: "Valladolid est une véritable ville yucatèque où vous pourrez déguster le meilleur café de olla de tout le voyage." },
          ],
        },
        {
          theme: "Tulum : ruines mayas au-dessus des Caraïbes",
          activities: [
            { name: "Ruines de Tulum", description: "La seule cité maya construite sur une falaise avec vue directe sur les Caraïbes turquoise. El Castillo de Tulum avec la mer en arrière-plan est l'une des photos les plus emblématiques du Mexique.", price: "10 USD", tip: "Arrivez à 8h à l'ouverture. Dès 10h, il y a déjà des centaines de personnes. La plage au pied des ruines est incluse — vous pouvez vous baigner avant l'arrivée de la foule." },
            { name: "Gran Cenote, Tulum", description: "Le cénote le plus accessible et photogénique de la zone, avec une eau cristalline, des stalagmites submergées et des poissons nageant autour des baigneurs.", price: "20 USD", tip: "Apportez votre propre équipement de snorkeling (ou louez-le sur place pour 5 USD). L'eau reste entre 23-25°C toute l'année. Sans sargasses." },
            { name: "Le village de Tulum", description: "Le village original de Tulum, distinct de la zone hôtelière bordée de riads. Tacos cochinita, boutiques de miel et d'achiote, à des prix mexicains.", price: "8-15 USD", tip: "La version Instagram de Tulum (la zone hôtelière) est chère et orientée vers un tout autre type de voyage. Le village propose la même chose pour un tiers du prix." },
            { name: "Akumal — nager avec les tortues de mer", description: "La baie d'Akumal (45 min au nord de Tulum) est l'endroit le plus accessible au monde pour nager librement avec des tortues de mer dans leur habitat naturel.", price: "Gratuit (uniquement la plage et l'eau)", tip: "Entrez dans l'eau entre 9h et 11h pour voir plus de tortues. Ne portez pas de crème solaire classique — elle endommage le récif. La crème solaire respectueuse des récifs est autorisée." },
          ],
        },
        {
          theme: "Playa del Carmen et le dernier jour caribéen",
          activities: [
            { name: "Cinquième Avenue, Playa del Carmen", description: "La rue piétonne la plus animée des Caraïbes mexicaines, 4 km de boutiques, restaurants, bars et art de rue face à la plage. Le cœur social de la Riviera Maya.", price: "Gratuit (promenade)", tip: "Évitez les restaurants directement sur la Cinquième Avenue — tous ont des prix touristiques. Éloignez-vous de deux rues et vous trouverez où les locaux mangent leurs tacos." },
            { name: "La plage de Playa del Carmen", description: "La plage urbaine la plus animée de la Riviera Maya, avec du sable blanc et un accès direct depuis la Cinquième Avenue. Plus animée que les plages de la zone hôtelière de Cancún.", price: "Gratuit", tip: "Les plages des hôtels-boutiques au sud de la Cinquième Avenue (à partir de la rue 38) sont moins fréquentées et presque aussi accessibles." },
            { name: "Xcaret ou Xel-Há (optionnel)", description: "Les plus grands parcs naturels du Mexique. Xcaret combine culture maya, nature et spectacles nocturnes. Xel-Há est plus intime et centré sur le snorkeling dans une rivière d'eau de mer.", price: "80-130 USD", tip: "Xel-Há est plus calme et plus naturel. Xcaret convient mieux aux familles avec de jeunes enfants. Les billets achetés en ligne coûtent 30% de moins." },
            { name: "Un dernier coucher de soleil caribéen", description: "La plage de Playa del Carmen fait face à l'est — les couchers de soleil les plus spectaculaires se voient depuis la jetée de Playa ou depuis le ferry vers Cozumel.", price: "Gratuit", tip: "Le ferry vers Cozumel part de la jetée de la Cinquième Avenue. Rien que la traversée de 45 minutes en pleine mer des Caraïbes est déjà un spectacle." },
          ],
        },
      ],
    },
    de: {
      city: "Cancún",
      country: "Mexiko",
      heroTitle: "5 Tage in Cancún und der Riviera Maya: jenseits des Resorts",
      heroSubtitle: "Cenotes, Maya-Ruinen, weiße Sandstrände und die mexikanische Kultur, die auf der anderen Seite der Lagune weiterlebt.",
      bestMonths: "Dezember bis April",
      budget: "USD 80-200/Tag",
      travelTips: [
        "Sargassum (Seetang) betrifft manche Strände zwischen Mai und September — prüfen Sie vorher, welche Strände frei sind",
        "ADO-Busse sind komfortabel und günstig, um zwischen Cancún, Playa del Carmen und Tulum zu reisen",
        "Eine Reiseversicherung wird dringend empfohlen — medizinische Versorgung in Mexiko kann für Ausländer teuer sein",
        "Bringen Sie mexikanische Pesos für Märkte und lokale Restaurants mit — Dollar werden akzeptiert, aber Sie verlieren beim Wechselkurs",
        "Riffverträgliche Sonnencreme ist an Cenotes Pflicht und an Tulums Stränden empfohlen",
      ],
      days: [
        {
          theme: "Die Hotelzone und Cancúns Strände",
          activities: [
            { name: "Playa Delfines", description: "Der spektakulärste öffentliche Strand der Hotelzone, mit dem ikonischen Cancún-Schild, weißem Sand und Mexikos türkisfarbenstem Wasser. Keine Hotel-Palapa, keine Gebühr.", price: "Kostenlos", tip: "Die nördlichen Strände in der Hotelzone haben kleinere Wellen. Die südlichen (Delfines, Ballenas) haben mehr Wellengang und sind besser zum Bodysurfen." },
            { name: "Mercado 28 — das echte Cancún", description: "Der Kunsthandwerksmarkt in der Innenstadt von Cancún, fernab der Hotelzone. Tacos al Pastor, authentisches Kunsthandwerk und lokale Preise statt Massentourismus-Aufschlägen.", price: "USD 5-10", tip: "Cochinita-Pibil-Tacos sind das Yucatán-Gericht, das Sie noch lange nach der Heimreise verfolgt. Bestellen Sie sie mit eingelegter roter Zwiebel und Habanero." },
            { name: "Nichupté-Lagune — Kajak oder Paddleboard", description: "Die Lagune, die die Hotelzone vom Festland trennt, mit Mangroven, tropischen Vögeln und ruhigem Wasser. Mehrere Unternehmen vermieten Kajaks und Paddleboards ohne erforderlichen Guide.", price: "USD 20-35/Stunde", tip: "Sonnenuntergänge über der Lagune mit der Hotelzone im Hintergrund gehören zu den fotogensten in Cancún." },
            { name: "Innenstadt von Cancún in der Dämmerung", description: "Der Parque Las Palapas in der Innenstadt ist der Treffpunkt der Einheimischen bei Dämmerung: Handwerker, Straßensnacks, Live-Musik und der Rhythmus einer echten mexikanischen Stadt.", price: "Kostenlos", tip: "Die Innenstadt von Cancún, 20 Minuten mit dem Bus von Ihrem Hotel entfernt (USD 0,50), bietet einen authentischen Abend, den die Hotelzone niemals bieten kann." },
          ],
        },
        {
          theme: "Isla Mujeres: Paradies 20 Minuten entfernt",
          activities: [
            { name: "Fähre nach Isla Mujeres", description: "Die Fähre fährt alle 30 Minuten von Puerto Juárez ab. Die 20-minütige Überfahrt ist bereits spektakulär mit den Farben der Karibik.", price: "USD 8 hin und zurück", tip: "Kommen Sie vor 8 Uhr zum Anleger, um die erste Fähre zu bekommen. Isla Mujeres fast menschenleer (erste Stunde) ist ein Traum." },
            { name: "Playa Norte — der beste Strand der Karibik", description: "Wiederholt zu einem der besten Strände der Welt gewählt, mit poolartigem Wasser, feinem weißem Sand und einer geschützten, wellenfreien Lagune. Nur 2 km lang.", price: "Kostenlos", tip: "Mieten Sie einen Golfwagen (USD 40/Tag), um die ganze 8 km lange Insel zu erkunden. So bewegt sich jeder auf Isla Mujeres fort." },
            { name: "Garrafón — Schnorcheln am Korallenriff", description: "Die Südspitze der Insel hat eines der besten Korallenriffe der mexikanischen Karibik, mit bunten Fischen, Rochen und Schildkröten. Der Garrafón-Park beinhaltet Schnorcheln.", price: "USD 25-45", tip: "Kostenloses Schnorcheln außerhalb des Parks (von den Felsen südlich des Zac-Ha-Strands) ist genauso gut und kostenlos." },
            { name: "Die Stadt Isla Mujeres", description: "Bunt bemalte Straßen, lokale Kunsthandwerksläden und Meeresfrüchterestaurants am Meer machen die Stadt zu einem Ort, an dem man gerne verweilt.", price: "Kostenlos", tip: "Die Straße Hidalgo hat die besten Meeresfrüchterestaurants zu fairen Preisen. Das Ceviche der Insel unterscheidet sich von dem in Cancún." },
          ],
        },
        {
          theme: "Chichén Itzá und ein Bad in einem Cenote",
          activities: [
            { name: "Abfahrt nach Chichén Itzá", description: "Die antike Maya-Stadt, eines der 7 Weltwunder der Neuzeit, liegt 2,5 Stunden von Cancún entfernt. Früh loszufahren vermeidet die extreme Hitze und die Tausenden von Touristen.", price: "Tour ab USD 60 (Transport inbegriffen)", tip: "Während der Tagundnachtgleichen (21. März und 23. September) erzeugt die Sonne die Schlange aus Licht auf der Pyramide El Castillo — Massentourismus, aber spektakulär." },
            { name: "El Castillo und die Maya-Stadt", description: "Die Kukulcán-Pyramide hat 365 Stufen (eine für jeden Tag des Jahres), plus den Tempel der Krieger, das größte Ballspielfeld Mesoamerikas und den Heiligen Cenote.", price: "USD 35 (Eintritt)", tip: "Seit 2006 können Sie die Pyramide nicht mehr besteigen, aber Sie können sie berühren. Guides demonstrieren das Echo, das den Ruf eines Quetzals nachahmt, indem sie vor der Treppe in die Hände klatschen." },
            { name: "Cenote Ik-Kil", description: "Der fotogenste Cenote der Riviera Maya, 3 km von Chichén Itzá entfernt: ein kreisförmiges Loch mit 40m Durchmesser, offen zum Himmel, mit Wänden voller herabhängender Farne.", price: "USD 15", tip: "Kommen Sie direkt nach dem Mittagessen an, wenn die Reisegruppen abreisen. Zwischen 14 und 16 Uhr ist es am ruhigsten und Sonnenlicht fällt in den Cenote." },
            { name: "Rückkehr nach Cancún über Valladolid", description: "Die koloniale Stadt Valladolid liegt auf dem Rückweg. Ein 45-minütiger Halt, um den Cenote Zaci (direkt in der Stadt) und das historische Zentrum zu sehen.", price: "Cenote Zaci USD 5", tip: "Valladolid ist eine authentische Yucatán-Stadt, in der Sie den besten Café de Olla der gesamten Reise bekommen." },
          ],
        },
        {
          theme: "Tulum: Maya-Ruinen über der Karibik",
          activities: [
            { name: "Ruinen von Tulum", description: "Die einzige Maya-Stadt, die auf einer Klippe mit direktem Blick auf die türkisfarbene Karibik erbaut wurde. El Castillo de Tulum mit dem Meer im Hintergrund ist eines der ikonischsten Fotos Mexikos.", price: "USD 10", tip: "Kommen Sie um 8 Uhr zur Öffnung. Um 10 Uhr sind bereits Hunderte Menschen da. Der Strand am Fuß der Ruinen ist inbegriffen — Sie können schwimmen, bevor die Menschenmassen ankommen." },
            { name: "Gran Cenote, Tulum", description: "Der zugänglichste, fotogenste Cenote der Gegend, mit kristallklarem Wasser, versunkenen Stalagmiten und Fischen, die um die Badenden schwimmen.", price: "USD 20", tip: "Bringen Sie Ihre eigene Schnorchelausrüstung mit (oder mieten Sie sie dort für USD 5). Das Wasser bleibt das ganze Jahr über zwischen 23-25°C. Sargassumfrei." },
            { name: "Die Stadt Tulum", description: "Tulums ursprüngliche Stadt, anders als die mit Boutique-Hotels gesäumte Hotelzone von Tulum. Cochinita-Tacos, Honig- und Achiote-Läden, zu mexikanischen Preisen.", price: "USD 8-15", tip: "Die Instagram-Version von Tulum (die Hotelzone) ist teuer und auf eine andere Art von Reise ausgerichtet. Die Stadt bietet dasselbe für ein Drittel des Preises." },
            { name: "Akumal — Schwimmen mit Meeresschildkröten", description: "Die Bucht von Akumal (45 Min nördlich von Tulum) ist der zugänglichste Ort der Welt, um frei mit Meeresschildkröten in ihrem natürlichen Lebensraum zu schwimmen.", price: "Kostenlos (nur Strand und Wasser)", tip: "Gehen Sie zwischen 9 und 11 Uhr ins Wasser, um mehr Schildkröten zu sehen. Tragen Sie keine normale Sonnencreme — sie schädigt das Riff. Riffverträgliche Sonnencreme ist erlaubt." },
          ],
        },
        {
          theme: "Playa del Carmen und der letzte karibische Tag",
          activities: [
            { name: "Fifth Avenue, Playa del Carmen", description: "Die lebendigste Fußgängerstraße der mexikanischen Karibik, 4 km Geschäfte, Restaurants, Bars und Straßenkunst mit Blick auf den Strand. Das soziale Herz der Riviera Maya.", price: "Kostenlos (Spaziergang)", tip: "Meiden Sie die Restaurants direkt an der Fifth Avenue — alle haben touristische Preise. Gehen Sie zwei Blocks landeinwärts und finden Sie, wo Einheimische ihre Tacos essen." },
            { name: "Der Strand von Playa del Carmen", description: "Der lebendigste Stadtstrand der Riviera Maya, mit weißem Sand und direktem Zugang von der Fifth Avenue. Lebendiger als die Strände in Cancúns Hotelzone.", price: "Kostenlos", tip: "Die Strände der Boutique-Hotels südlich der Fifth Avenue (ab Calle 38) sind weniger überlaufen und fast genauso zugänglich." },
            { name: "Xcaret oder Xel-Há (optional)", description: "Mexikos größte Naturparks. Xcaret kombiniert Maya-Kultur, Natur und nächtliche Shows. Xel-Há ist intimer und dreht sich um Schnorcheln in einem Meerwasserfluss.", price: "USD 80-130", tip: "Xel-Há ist ruhiger und natürlicher. Xcaret eignet sich besser für Familien mit kleinen Kindern. Online gekaufte Tickets kosten 30% weniger." },
            { name: "Ein letzter karibischer Sonnenuntergang", description: "Playa del Carmens Strand liegt nach Osten — die spektakulärsten Sonnenuntergänge sieht man vom Pier von Playa oder von der Fähre nach Cozumel aus.", price: "Kostenlos", tip: "Die Fähre nach Cozumel fährt vom Pier der Fifth Avenue ab. Allein die 45-minütige Fahrt über die offene Karibik ist bereits ein Spektakel." },
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
    fr: {
      city: "Rome",
      country: "Italie",
      heroTitle: "5 jours à Rome : le Colisée, le Vatican et la dolce vita dans les vrais quartiers",
      heroSubtitle: "L'itinéraire qui équilibre les monuments incontournables avec les quartiers où vivent réellement les Romains.",
      bestMonths: "Mars à mai et septembre à novembre",
      budget: "80-150€/jour",
      travelTips: [
        "Rome se parcourt à pied — le centre historique tient dans un rayon de 4 km",
        "Le pass Colisée+Forum+Palatin est valable deux jours consécutifs — profitez-en au maximum",
        "Ayez toujours des vêtements couvrant épaules et genoux pour entrer dans les églises (y compris au Vatican)",
        "L'eau des fontaines publiques (nasoni) est potable et délicieuse — apportez une bouteille réutilisable",
        "Juillet et août sont les mois les plus chauds et les plus bondés — mars-mai est la meilleure période",
      ],
      days: [
        {
          theme: "L'Empire romain : le Colisée et le Forum",
          activities: [
            { name: "Colisée de Rome", description: "Le plus grand amphithéâtre jamais construit, d'une capacité de 70 000 spectateurs. Sur le sol de l'arène, des gladiateurs combattaient devant les empereurs et le peuple romain.", price: "18€ (inclut le Forum romain et le mont Palatin)", tip: "Réservez votre billet en ligne — la file sans réservation dépasse 2 heures en haute saison. La visite du sol de l'arène nécessite une réservation séparée." },
            { name: "Forum romain et mont Palatin", description: "Le centre politique et religieux de l'Empire romain pendant 12 siècles. Le Palatin est la colline où, selon la tradition, Romulus fonda Rome en 753 av. J.-C.", price: "Inclus avec le Colisée", tip: "L'arc de Titus (81 apr. J.-C.) porte le plus ancien relief connu représentant la ménorah — considéré comme le plus ancien témoignage historique de l'exil juif." },
            { name: "Circus Maximus", description: "Le plus grand stade de course de chars de l'Antiquité, d'une capacité de 250 000 spectateurs. Aujourd'hui, c'est un grand parc urbain où les Romains vont courir.", price: "Gratuit", tip: "Montez à l'Aventin pour voir le trou de serrure des Chevaliers de Malte — une vue parfaitement alignée avec le dôme de Saint-Pierre." },
            { name: "Marchés de Trajan", description: "Le premier centre commercial de l'histoire, construit au IIe siècle apr. J.-C. Il abrite aujourd'hui le Museo dei Fori Imperiali, avec des vues magnifiques sur le Forum d'Auguste.", price: "15€", tip: "Moins visité que le Colisée mais tout aussi impressionnant. Le contexte qu'il offre sur la vie quotidienne romaine est remarquable." },
          ],
        },
        {
          theme: "Le Vatican : une ville dans la ville",
          activities: [
            { name: "Musées du Vatican et chapelle Sixtine", description: "La collection papale constituée sur 500 ans : sculptures grecques, tapisseries flamandes, cartes de la Renaissance et le plafond de la chapelle Sixtine peint par Michel-Ange.", price: "20€", tip: "Réservez le premier créneau de la journée et demandez spécifiquement un accès rapide à la chapelle. Sans réservation, l'attente dépasse 2-3 heures." },
            { name: "Basilique Saint-Pierre", description: "La plus grande église du monde couvre 2,3 hectares. La Pietà de Michel-Ange, le baldaquin du Bernin et la coupole de 132 mètres en sont les points forts.", price: "Gratuit (dôme 8€)", tip: "L'ascension du dôme (les 320 dernières marches sont étroites et en colimaçon) offre la meilleure vue sur Rome. Arrivez tôt." },
            { name: "Château Saint-Ange", description: "Le mausolée de l'empereur Hadrien, converti plus tard en forteresse papale, avec un passage secret vers le Vatican. La terrasse offre une vue extraordinaire sur le Tibre et Rome.", price: "15€", tip: "C'est ici que se déroule l'acte final de l'opéra Tosca de Puccini — l'une des fins les plus dramatiques de l'histoire du théâtre." },
            { name: "Prati — le quartier du Vatican", description: "Le quartier résidentiel voisin du Vatican, avec les meilleures gelaterias artisanales et restaurants de Rome, sans les prix touristiques de la zone autour de Saint-Pierre.", price: "15-25€", tip: "La Gelateria dei Gracchi (Via dei Gracchi 272) est considérée comme l'une des meilleures de Rome. Une glace authentique a des couleurs sourdes — pas vives." },
          ],
        },
        {
          theme: "Trastevere et la Rome qui ne se vend pas",
          activities: [
            { name: "Trastevere — le quartier le plus romain de Rome", description: "Le labyrinthe de ruelles médiévales de l'autre côté du Tibre où vivent encore des Romains de toujours. La Basilique Santa Maria in Trastevere (IVe siècle) est la plus ancienne de la ville.", price: "Gratuit", tip: "Trastevere est un quartier pour l'apéritif et le dîner, pas pour le matin. Arrivez à 18h pour voir le quartier s'animer et vous mêler aux habitants." },
            { name: "Campo de' Fiori", description: "La place-marché du centre historique, avec des étals de fruits, épices et fleurs du lundi au samedi. La statue de Giordano Bruno marque l'endroit où il fut brûlé vif en 1600.", price: "Gratuit", tip: "Le marché fonctionne jusqu'à 14h. La nuit, la place devient l'épicentre de la vie nocturne du centre-ville." },
            { name: "Piazza Navona", description: "La plus belle place baroque d'Europe, construite sur le stade de Domitien. Les trois fontaines du Bernin, dont la Fontaine des Quatre Fleuves, en sont le cœur.", price: "Gratuit", tip: "Les restaurants sur la place ont des prix touristiques. Mangez une rue plus loin et prenez plutôt un café assis sur la place — les artistes de rue en valent la peine." },
            { name: "Panthéon", description: "Le bâtiment antique le mieux conservé au monde, construit par l'empereur Hadrien en 125 apr. J.-C. Sa coupole, avec l'oculus central, reste un mystère architectural.", price: "5€", tip: "Le Panthéon est orienté de sorte qu'à l'équinoxe de printemps (21 mars) le soleil brille exactement à travers l'oculus et illumine l'entrée. Coïncidence ou non." },
          ],
        },
        {
          theme: "la Fontaine de Trevi, la place d'Espagne et la Villa Borghèse",
          activities: [
            { name: "Fontaine de Trevi au lever du soleil", description: "La plus grande fontaine de Rome, sculptée par Nicola Salvi en 1762. La nuit et au lever du soleil, sans la foule diurne, c'est l'un des plus beaux spectacles d'Europe.", price: "Gratuit", tip: "La fontaine est nettoyée deux fois par semaine tôt le matin (généralement les mardis et vendredis). Si le timing coïncide, vous la verrez complètement vide — un spectacle unique." },
            { name: "Place d'Espagne", description: "Les 135 marches en travertin reliant la Piazza di Spagna à la Trinité-des-Monts. Au printemps, elles se couvrent d'azalées roses pour la fête des fleurs.", price: "Gratuit", tip: "Depuis 2019, s'asseoir sur les marches est interdit (amende de 250€). Se tenir debout pour une photo reste gratuit." },
            { name: "Galerie Borghèse", description: "La collection d'art de la famille Borghèse dans une villa du XVIIe siècle : les premières sculptures du Bernin, le Caravage, Titien et Raphaël, dans des salles intimes.", price: "15€", tip: "Les billets s'épuisent des semaines à l'avance — réservez le plus tôt possible. Les visites durent exactement 2 heures (strictement appliqué)." },
            { name: "Villa Borghèse — le poumon vert de Rome", description: "Le plus grand parc du centre de Rome, avec des lacs artificiels, des vues depuis le Pincio et des musées. La terrasse du Pincio offre le meilleur panorama sur la Piazza del Popolo.", price: "Gratuit", tip: "Louez une petite barque sur le lac (3€ pour 20 minutes) — la manière la plus romaine de passer un après-midi. Les enfants romains le font depuis 200 ans." },
          ],
        },
        {
          theme: "Aventin, Testaccio et le côté quartier de Rome",
          activities: [
            { name: "L'Aventin et le trou de serrure des chevaliers", description: "La colline la plus tranquille de Rome. Le trou de serrure des Chevaliers de Malte cadre parfaitement le dôme de Saint-Pierre à 3 km — l'une des vues les plus magiques de Rome.", price: "Gratuit", tip: "Il faudra faire la queue pour le trou de serrure (5 à 15 minutes). Le jardin des orangers juste à côté offre l'une des meilleures vues sur Rome depuis l'Aventin." },
            { name: "Testaccio — le quartier de la cuisine romaine", description: "Le quartier populaire de Rome, où se trouve le Mattatoio (un ancien abattoir devenu marché et espace culturel) et la cuisine romaine la plus authentique et abordable de la ville.", price: "12-20€", tip: "Le cacio e pepe et la carbonara sont les plats emblématiques de Rome. À Testaccio, on les sert à l'ancienne — sans crème, sans petits pois." },
            { name: "Mont Palatin et les jardins Farnèse", description: "Revisitez le Palatin l'après-midi pour voir les jardins Farnèse, les premiers jardins botaniques d'Europe, avec des vues sur le Forum bondées à midi.", price: "Inclus avec le billet du Colisée du jour 1 (valable 2 jours)", tip: "La lumière de l'après-midi sur le Palatin dégage cette lueur dorée que recherchaient les photographes du Grand Tour au XIXe siècle." },
            { name: "Apéritif à Pigneto ou Ostiense", description: "Les quartiers où les jeunes Romains vont pour l'apéritif (17h-21h) : un Spritz avec un plateau de snacks inclus, des terrasses de bar et des conversations qui débordent dans la rue.", price: "6-10€ (Spritz avec snacks)", tip: "L'apéritif romain inclut la nourriture — commandez une boisson et on vous apporte un buffet de snacks frits et de bruschetta. C'est le dîner obligatoire d'avant-dîner." },
          ],
        },
      ],
    },
    de: {
      city: "Rom",
      country: "Italien",
      heroTitle: "5 Tage in Rom: das Kolosseum, der Vatikan und die dolce vita in den echten Vierteln",
      heroSubtitle: "Die Reiseroute, die die Muss-Denkmäler mit den Vierteln verbindet, in denen Römer wirklich leben.",
      bestMonths: "März bis Mai und September bis November",
      budget: "80-150€/Tag",
      travelTips: [
        "Rom ist zu Fuß erkundbar — das historische Zentrum passt in einen Radius von 4 km",
        "Der Kombiticket Kolosseum+Forum+Palatin ist zwei aufeinanderfolgende Tage gültig — nutzen Sie das voll aus",
        "Bringen Sie immer Kleidung mit, die Schultern und Knie bedeckt, um Kirchen zu betreten (auch den Vatikan)",
        "Wasser aus den öffentlichen Brunnen (Nasoni) ist sicher zu trinken und köstlich — bringen Sie eine wiederverwendbare Flasche mit",
        "Juli und August sind die heißesten, überlaufensten Monate — März-Mai ist die beste Reisezeit",
      ],
      days: [
        {
          theme: "Das Römische Reich: das Kolosseum und das Forum",
          activities: [
            { name: "Kolosseum von Rom", description: "Das größte je gebaute Amphitheater, mit Platz für 70.000 Zuschauer. Auf dem Arenaboden kämpften Gladiatoren vor Kaisern und dem römischen Volk.", price: "18€ (beinhaltet das Forum Romanum und den Palatin)", tip: "Buchen Sie Ihr Ticket online — die Schlange ohne Reservierung dauert in der Hochsaison über 2 Stunden. Die Tour über den Arenaboden erfordert eine separate Buchung." },
            { name: "Forum Romanum und Palatin", description: "Das politische und religiöse Zentrum des Römischen Reiches für 12 Jahrhunderte. Der Palatin ist der Hügel, auf dem Romulus der Überlieferung nach 753 v. Chr. Rom gründete.", price: "Im Kolosseum-Ticket inbegriffen", tip: "Der Titusbogen (81 n. Chr.) trägt das älteste bekannte Relief, das die Menora zeigt — als ältestes historisches Zeugnis des jüdischen Exils angesehen." },
            { name: "Circus Maximus", description: "Das größte Wagenrennstadion der Antike, mit Platz für 250.000 Zuschauer. Heute ist es ein großer Stadtpark, in dem Römer joggen gehen.", price: "Kostenlos", tip: "Gehen Sie hinauf zum Aventin, um das Schlüsselloch der Malteserritter zu sehen — ein Blick, perfekt ausgerichtet auf die Kuppel des Petersdoms." },
            { name: "Trajansmärkte", description: "Das erste Einkaufszentrum der Geschichte, im 2. Jahrhundert n. Chr. erbaut. Heute beherbergt es das Museo dei Fori Imperiali, mit herrlichen Ausblicken auf das Augustusforum.", price: "15€", tip: "Weniger besucht als das Kolosseum, aber genauso beeindruckend. Der Kontext, den es über das tägliche römische Leben gibt, ist bemerkenswert." },
          ],
        },
        {
          theme: "Der Vatikan: eine Stadt in der Stadt",
          activities: [
            { name: "Vatikanische Museen und die Sixtinische Kapelle", description: "Die päpstliche Sammlung, über 500 Jahre aufgebaut: griechische Skulpturen, flämische Wandteppiche, Renaissance-Karten und die von Michelangelo bemalte Decke der Sixtinischen Kapelle.", price: "20€", tip: "Buchen Sie den ersten Slot des Tages und bitten Sie ausdrücklich um schnellen Zugang zur Kapelle. Ohne Reservierung dauert die Wartezeit 2-3 Stunden." },
            { name: "Petersdom", description: "Die größte Kirche der Welt bedeckt 2,3 Hektar. Michelangelos Pietà, Berninis Baldachin und die 132 Meter hohe Kuppel sind ihre Höhepunkte.", price: "Kostenlos (Kuppel 8€)", tip: "Der Aufstieg zur Kuppel (die letzten 320 Stufen sind eng und spiralförmig) bietet den besten Blick auf Rom. Kommen Sie früh." },
            { name: "Engelsburg", description: "Das Mausoleum von Kaiser Hadrian, später in eine päpstliche Festung umgewandelt, mit einem geheimen Gang zum Vatikan. Die Terrasse bietet einen außergewöhnlichen Blick auf den Tiber und Rom.", price: "15€", tip: "Hier findet der letzte Akt von Puccinis Oper Tosca statt — eines der dramatischsten Enden der Theatergeschichte." },
            { name: "Prati — das Viertel des Vatikans", description: "Das Wohnviertel neben dem Vatikan, mit Roms besten handwerklichen Eisdielen und Restaurants ohne den touristischen Aufschlag rund um den Petersdom.", price: "15-25€", tip: "Die Gelateria dei Gracchi (Via dei Gracchi 272) gilt als eine der besten Roms. Authentisches Gelato hat gedämpfte Farben — keine grellen." },
          ],
        },
        {
          theme: "Trastevere und das Rom, das nicht zum Verkauf steht",
          activities: [
            { name: "Trastevere — Roms römischstes Viertel", description: "Das Labyrinth mittelalterlicher Gassen jenseits des Tiber, wo lebenslange Römer noch immer leben. Die Basilika Santa Maria in Trastevere (4. Jahrhundert) ist die älteste der Stadt.", price: "Kostenlos", tip: "Trastevere ist ein Viertel für Aperitivo und Abendessen, nicht für Morgenstunden. Kommen Sie um 18 Uhr, um zu sehen, wie das Viertel zum Leben erwacht, und mischen Sie sich unter die Einheimischen." },
            { name: "Campo de' Fiori", description: "Der Marktplatz des historischen Zentrums, mit Obst-, Gewürz- und Blumenständen von Montag bis Samstag. Die Statue von Giordano Bruno markiert die Stelle, an der er 1600 verbrannt wurde.", price: "Kostenlos", tip: "Der Markt läuft bis 14 Uhr. Nachts wird der Platz zum Epizentrum des Nachtlebens im Stadtzentrum." },
            { name: "Piazza Navona", description: "Europas schönster Barockplatz, über dem Stadion des Domitian erbaut. Berninis drei Brunnen, darunter die Fontana dei Quattro Fiumi, bilden sein Herz.", price: "Kostenlos", tip: "Die Restaurants auf dem Platz haben touristische Preise. Essen Sie einen Block weiter und trinken Sie stattdessen einen Kaffee auf dem Platz — die Straßenkünstler machen es die Mühe wert." },
            { name: "Pantheon", description: "Das am besten erhaltene Gebäude der Antike der Welt, von Kaiser Hadrian im Jahr 125 n. Chr. erbaut. Seine Kuppel mit dem zentralen Okulus bleibt ein architektonisches Rätsel.", price: "5€", tip: "Das Pantheon ist so ausgerichtet, dass zur Frühlings-Tagundnachtgleiche (21. März) die Sonne genau durch den Okulus scheint und den Eingang erleuchtet. Zufall oder nicht." },
          ],
        },
        {
          theme: "Der Trevi-Brunnen, die Spanische Treppe und die Villa Borghese",
          activities: [
            { name: "Trevi-Brunnen bei Sonnenaufgang", description: "Roms größter Brunnen, 1762 von Nicola Salvi geschaffen. Nachts und bei Sonnenaufgang, ohne die Tagesmenge, ist er einer der schönsten Anblicke Europas.", price: "Kostenlos", tip: "Der Brunnen wird zweimal wöchentlich am frühen Morgen gereinigt (meist dienstags und freitags). Wenn das Timing passt, sehen Sie ihn völlig leer — ein einzigartiger Anblick." },
            { name: "Spanische Treppe", description: "Die 135 Travertinstufen, die die Piazza di Spagna mit der Trinità dei Monti verbinden. Im Frühling sind sie mit rosa Azaleen für das Blumenfest bedeckt.", price: "Kostenlos", tip: "Seit 2019 ist das Sitzen auf den Stufen verboten (250€ Strafe). Stehen für ein Foto ist weiterhin kostenlos." },
            { name: "Galleria Borghese", description: "Die Kunstsammlung der Familie Borghese in einer Villa aus dem 17. Jahrhundert: Berninis frühe Skulpturen, Caravaggio, Tizian und Raffael, in intimen Räumen.", price: "15€", tip: "Tickets sind Wochen im Voraus ausverkauft — buchen Sie so früh wie möglich. Besuche dauern genau 2 Stunden (strikt eingehalten)." },
            { name: "Villa Borghese — Roms grüne Lunge", description: "Der größte Park im Zentrum Roms, mit künstlichen Seen, Ausblicken vom Pincio und Museen. Die Pincio-Terrasse bietet das beste Panorama auf die Piazza del Popolo.", price: "Kostenlos", tip: "Mieten Sie ein kleines Ruderboot auf dem See (3€ für 20 Minuten) — die römischste Art, einen Nachmittag zu verbringen. Römische Kinder machen das seit 200 Jahren." },
          ],
        },
        {
          theme: "Aventin, Testaccio und Roms Viertelseite",
          activities: [
            { name: "Der Aventin und das Schlüsselloch der Ritter", description: "Roms ruhigster Hügel. Das Schlüsselloch der Malteserritter rahmt perfekt die 3 km entfernte Kuppel des Petersdoms ein — einer der magischsten Ausblicke Roms.", price: "Kostenlos", tip: "Sie müssen für das Schlüsselloch anstehen (5 bis 15 Minuten). Der Orangengarten gleich daneben bietet einen der besten Ausblicke auf Rom vom Aventin aus." },
            { name: "Testaccio — das Viertel der römischen Küche", description: "Roms Arbeiterviertel, Heimat des Mattatoio (ein ehemaliges Schlachthaus, umgewandelt in Markt und Kulturraum) und der authentischsten, günstigsten römischen Küche der Stadt.", price: "12-20€", tip: "Cacio e Pepe und Carbonara sind Roms bestimmende Gerichte. In Testaccio werden sie auf die ursprüngliche Art serviert — ohne Sahne, ohne Erbsen." },
            { name: "Palatin und die Farnese-Gärten", description: "Besuchen Sie den Palatin am Nachmittag erneut, um die Farnese-Gärten zu sehen, Europas erste botanische Gärten, mit Ausblicken auf das Forum, das mittags voller Menschen ist.", price: "Im Kolosseum-Ticket von Tag 1 inbegriffen (2 Tage gültig)", tip: "Das Nachmittagslicht auf dem Palatin verströmt den goldenen Schimmer, den Grand-Tour-Fotografen des 19. Jahrhunderts suchten." },
            { name: "Aperitivo in Pigneto oder Ostiense", description: "Die Viertel, in die junge Römer für den Aperitivo gehen (17-21 Uhr): ein Spritz mit einem Teller Snacks inklusive, Barterrassen und Gespräche, die auf die Straße überschwappen.", price: "6-10€ (Spritz mit Snacks)", tip: "Der römische Aperitivo beinhaltet Essen — bestellen Sie ein Getränk und es wird ein Buffet aus frittierten Snacks und Bruschetta gebracht. Es ist das obligatorische Vor-Abendessen." },
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
    fr: {
      city: "Barcelone",
      country: "Espagne",
      heroTitle: "5 jours à Barcelone : Gaudí, plages méditerranéennes et une ville qui ne s'arrête jamais",
      heroSubtitle: "L'itinéraire qui équilibre la Sagrada Família avec le quartier de Gràcia, le Barri Gòtic avec Barceloneta.",
      bestMonths: "Mai et juin, septembre et octobre",
      budget: "80-140€/jour",
      travelTips: [
        "La T-Casual (10 trajets métro/bus) est moins chère qu'à l'unité — valable dans toute la zone métropolitaine",
        "Les musées municipaux sont gratuits le premier dimanche du mois — et le dimanche après-midi",
        "Les pharmacies en Espagne ont une croix verte lumineuse et assurent une garde 24h/24 par roulement",
        "Réservez la Sagrada Família des semaines à l'avance en haute saison (juillet-août)",
        "Les horaires espagnols décalent d'environ 2 heures par rapport au nord de l'Europe — dîner à 22h est tout à fait normal",
      ],
      days: [
        {
          theme: "Gaudí — la Barcelone qui coupe le souffle",
          activities: [
            { name: "Sagrada Família", description: "Le chef-d'œuvre d'Antoni Gaudí, en construction depuis 140 ans. La nef centrale, les 18 clochers et les façades de la Nativité et de la Passion n'ont rien de comparable dans l'architecture.", price: "26€ (avec tours 36€)", tip: "Réservez votre billet pour tôt le matin. La façade de la Nativité (est) reçoit la lumière du matin — la façade de la Passion (ouest) reçoit celle du coucher de soleil." },
            { name: "Casa Batlló ou Casa Milà (La Pedrera)", description: "La Casa Batlló a les écailles de dragon les plus photogéniques. La Casa Milà a le toit-terrasse surréaliste avec ses guerriers de pierre et les meilleures vues sur l'Eixample.", price: "35-45€", tip: "La Casa Batlló propose un spectacle nocturne de projection sur sa façade (45€) — plus rentable que la visite de jour si vous cherchez une expérience." },
            { name: "Parc Güell", description: "Le parc urbain de Gaudí, avec sa terrasse en mosaïque, sa forêt de colonnes et ses maisons en pain d'épice. Il offre une vue à 360° sur Barcelone et la Méditerranée.", price: "10€ (zone monumentale)", tip: "L'accès au parc est gratuit — seule la zone monumentale (la terrasse et la salle des colonnes) nécessite un billet. Réservez en ligne." },
            { name: "Quartier de Gràcia au coucher du soleil", description: "Le quartier le plus bohème et local de Barcelone, avec ses places animées, ses restaurants sans prix touristiques et ses boutiques indépendantes. La Plaça del Sol en est le point de rencontre.", price: "Gratuit (promenade)", tip: "La Festa Major de Gràcia en août transforme chaque rue en installation artistique. C'est la fête de quartier la plus spectaculaire d'Espagne." },
          ],
        },
        {
          theme: "Barri Gòtic et les Ramblas",
          activities: [
            { name: "Barri Gòtic — le cœur médiéval", description: "La vieille ville médiévale de Barcelone cache le Pont del Bisbe, la cathédrale gothique, le temple romain d'Auguste (Ier siècle av. J.-C.) et les places autour de Sant Felip Neri.", price: "Gratuit", tip: "La Plaça de Sant Felip Neri porte encore des impacts d'éclats d'obus de la guerre civile. C'est le coin le plus mélancolique et authentique du Barri Gòtic." },
            { name: "La Boqueria", description: "Le marché le plus célèbre d'Espagne, ouvert depuis 1836, avec des centaines d'étals de fruits exotiques, fruits de mer, charcuterie et tapas fraîches.", price: "Gratuit (pour entrer) / variable (pour manger)", tip: "Les étals à l'avant sont à prix touristiques. Allez au fond du marché, là où s'approvisionnent les restaurants — vrais prix et meilleurs produits." },
            { name: "Les Ramblas", description: "La promenade piétonne la plus connue de Barcelone, 1,2 km depuis la Plaça de Catalunya jusqu'au port. La Font de Canaletes, les étals de fleurs et la mosaïque de Miró incrustée dans le trottoir.", price: "Gratuit", tip: "Les Ramblas comptent beaucoup de pickpockets — portez votre sac à dos devant vous et ne gardez rien de valeur dans vos poches. Traversez-les pour les voir, pas pour vous y attarder." },
            { name: "El Born et le Mercat de Santa Caterina", description: "Le quartier le plus tendance près du Barri Gòtic, avec le Palais de la Musique de Domènech i Montaner, des boutiques de design et la meilleure scène de tapas de Barcelone.", price: "Gratuit (Palau de la Música 20€)", tip: "Le Palau de la Música est le seul bâtiment moderniste classé UNESCO encore utilisé activement. Achetez un billet pour un concert — c'est la meilleure façon de le voir." },
          ],
        },
        {
          theme: "Barceloneta et la Méditerranée",
          activities: [
            { name: "Barceloneta — la plage urbaine de Barcelone", description: "La plage la plus populaire de Barcelone, 1,1 km de sable face à la Méditerranée, avec les gratte-ciel du Port Olímpic en arrière-plan. Accessible en métro depuis n'importe où en ville.", price: "Gratuit", tip: "À 10h, l'eau est calme. À partir de 14h, la brise marine se lève généralement et crée des vagues idéales pour le bodysurf." },
            { name: "Marché aux poissons de Barceloneta", description: "Le quartier de Barceloneta conserve encore ses ruelles de pêcheurs du XVIIIe siècle. Les restaurants de la Carrer del Mar et de Marbella servent la paella et l'arròs negre les plus authentiques.", price: "20-35€", tip: "Réservez une table à l'avance en haute saison. La véritable paella barcelonaise se fait aux fruits de mer, pas au poulet — l'arròs negre à l'alioli est le plat signature." },
            { name: "Port Olímpic et la Vila Olímpica", description: "Le quartier construit pour les Jeux olympiques de 1992 qui a transformé le front de mer de Barcelone. Le poisson doré de Frank Gehry et les tours de communication sont des icônes urbaines.", price: "Gratuit", tip: "La promenade en bord de mer de Barceloneta jusqu'au Forum (7 km) est la meilleure balade à vélo de Barcelone. Il y a des stations Bicing tout le long du parcours." },
            { name: "Château de Montjuïc au coucher du soleil", description: "La forteresse du XVIIe siècle au sommet de la colline de Montjuïc offre la meilleure vue panoramique sur Barcelone, le port et la mer. Le téléphérique monte depuis Barceloneta.", price: "Château 9€ / Téléphérique 12€", tip: "Le jardin de cactus de Montjuïc est gratuit, et la vue sur le port depuis là-bas est tout aussi bonne que depuis le château." },
          ],
        },
        {
          theme: "Montserrat — la montagne sacrée de Catalogne",
          activities: [
            { name: "Train vers Montserrat", description: "Cette montagne rocheuse à la forme unique, à 60 km de Barcelone, abrite le monastère bénédictin le plus visité d'Espagne et l'image romane de la Vierge de Montserrat.", price: "36€ (train + funiculaire à crémaillère + funiculaire)", tip: "Le premier funiculaire à crémaillère part à 9h20. L'Escolania de Montserrat (le plus ancien chœur d'enfants d'Europe, datant du XIIIe siècle) chante à 13h — ne le manquez pas." },
            { name: "Sant Joan — la randonnée avec les vues", description: "Le sentier vers l'ermitage de Sant Joan (une montée de 45 minutes) se termine par le meilleur panorama sur la montagne et, par temps clair, la Méditerranée à 50 km.", price: "Gratuit (inclus avec le funiculaire)", tip: "Le funiculaire de Sant Joan monte jusqu'au départ du sentier. Redescendre à pied par l'itinéraire 5 prend 2 heures." },
            { name: "Basilique de Montserrat et la Moreneta", description: "La Vierge de Montserrat, une sculpture romane du XIIe siècle, préside la basilique. Les files pour la toucher se forment dès le matin — arrivez avant 11h pour éviter l'attente.", price: "Gratuit (basilique)", tip: "Le marché sur la place du monastère vend les meilleurs fromages, charcuteries et la fameuse liqueur de Montserrat (El Montserrat), à des prix de couvent." },
            { name: "Retour, et après-midi à Gràcia ou dans l'Eixample", description: "De retour à Barcelone, profitez de la dernière lumière du jour avec une promenade dans l'Eixample (les pâtés de maisons octogonaux de Cerdà) ou un vermouth à Gràcia.", price: "Vermouth 3-5€", tip: "Le vermouth catalan se boit avant le déjeuner du dimanche ou au coucher du soleil, avec des olives et des patatas bravas. C'est un rituel, pas juste une boisson." },
          ],
        },
        {
          theme: "MNAC, Poble Sec et un adieu méditerranéen",
          activities: [
            { name: "MNAC — Musée national d'art de Catalogne", description: "Le palais néo-byzantin construit pour l'Exposition universelle de 1929 abrite la collection d'art roman pyrénéen la plus importante au monde, ainsi que le modernisme catalan.", price: "12€", tip: "Les vues sur la ville depuis la terrasse du MNAC sont gratuites (pas besoin de payer l'entrée). Accessible par les marches de l'Avinguda de la Reina Maria Cristina." },
            { name: "Poble Sec — le quartier qui mange bien", description: "Au pied de Montjuïc, Poble Sec possède la plus forte concentration de restaurants créatifs au mètre carré de Barcelone, à des prix de quartier.", price: "15-25€", tip: "La Carrer de Blai est la rue des pintxos de Barcelone — de petites tapas sur pain à 1,50€ chacune. Parfait pour le déjeuner." },
            { name: "Fondation Joan Miró", description: "Le musée dédié à l'artiste le plus ludique du XXe siècle, dans un bâtiment de Josep Lluís Sert sur Montjuïc. Les sculptures du jardin extérieur sont visibles depuis les terrasses.", price: "14€", tip: "La mosaïque de Miró sur les Ramblas (incrustée dans le sol à l'intersection avec la Carrer del Carme) est gratuite et vaut la photo." },
            { name: "Bunkers del Carmel — la vue ultime de Barcelone", description: "Les ruines des bunkers de la guerre civile sur le Turó de la Rovira offrent la vue à 360° la plus spectaculaire sur Barcelone, avec chaque monument reconnaissable.", price: "Gratuit", tip: "Les habitants viennent au coucher du soleil avec des bières et un pique-nique. C'est l'activité la plus locale de la ville — pas de frais, pas de guides, pas de groupes touristiques organisés." },
          ],
        },
      ],
    },
    de: {
      city: "Barcelona",
      country: "Spanien",
      heroTitle: "5 Tage in Barcelona: Gaudí, Mittelmeerstrände und eine Stadt, die niemals stillsteht",
      heroSubtitle: "Die Reiseroute, die die Sagrada Família mit dem Viertel Gràcia, den Barri Gòtic mit Barceloneta verbindet.",
      bestMonths: "Mai und Juni, September und Oktober",
      budget: "80-140€/Tag",
      travelTips: [
        "Die T-Casual (10 Metro-/Busfahrten) ist günstiger als Einzelfahrten — gültig im gesamten Ballungsraum",
        "Städtische Museen sind am ersten Sonntag des Monats kostenlos — und sonntagnachmittags",
        "Apotheken in Spanien haben ein leuchtendes grünes Kreuz und haben im Wechsel 24 Stunden geöffnet",
        "Buchen Sie die Sagrada Família Wochen im Voraus in der Hochsaison (Juli-August)",
        "Spanische Zeitpläne verschieben sich um etwa 2 Stunden gegenüber Nordeuropa — um 22 Uhr zu Abend zu essen ist völlig normal",
      ],
      days: [
        {
          theme: "Gaudí — das Barcelona, das einem den Atem raubt",
          activities: [
            { name: "Sagrada Família", description: "Antoni Gaudís Meisterwerk befindet sich seit 140 Jahren im Bau. Das Hauptschiff, die 18 Glockentürme und die Fassaden der Geburt und der Passion sind mit nichts anderem in der Architektur vergleichbar.", price: "26€ (mit Türmen 36€)", tip: "Buchen Sie Ihr Ticket für den frühen Morgen. Die Geburtsfassade (Osten) erhält das Morgenlicht — die Passionsfassade (Westen) das Licht des Sonnenuntergangs." },
            { name: "Casa Batlló oder Casa Milà (La Pedrera)", description: "Die Casa Batlló hat die fotogensten Drachenschuppen. Die Casa Milà hat das surreale Dach mit steinernen Kriegern und die besten Ausblicke auf das Eixample.", price: "35-45€", tip: "Die Casa Batlló bietet eine nächtliche Projektions-Show auf ihrer Fassade (45€) — lohnender als der Tagesbesuch, wenn Sie ein Erlebnis suchen." },
            { name: "Park Güell", description: "Gaudís Stadtpark, mit seiner Mosaikterrasse, dem Säulenwald und den Lebkuchen-Häusern. Er bietet einen 360°-Blick auf Barcelona und das Mittelmeer.", price: "10€ (monumentale Zone)", tip: "Der Zugang zum Park ist kostenlos — nur die monumentale Zone (die Terrasse und der Säulensaal) erfordert ein Ticket. Online buchen." },
            { name: "Viertel Gràcia bei Sonnenuntergang", description: "Barcelonas bohemienhaftestes, lokalstes Viertel, mit lebendigen Plätzen, Restaurants ohne touristische Preise und unabhängigen Läden. Die Plaça del Sol ist der Treffpunkt.", price: "Kostenlos (Spaziergang)", tip: "Das Festa Major von Gràcia im August verwandelt jede Straße in eine Kunstinstallation. Es ist das spektakulärste Nachbarschaftsfest Spaniens." },
          ],
        },
        {
          theme: "Barri Gòtic und die Ramblas",
          activities: [
            { name: "Barri Gòtic — das mittelalterliche Herz", description: "Barcelonas mittelalterliche Altstadt verbirgt den Pont del Bisbe, die gotische Kathedrale, den römischen Augustustempel (1. Jahrhundert v. Chr.) und die Plätze rund um Sant Felip Neri.", price: "Kostenlos", tip: "Die Plaça de Sant Felip Neri trägt noch immer Granatsplitter aus dem Bürgerkrieg. Es ist die melancholischste, authentischste Ecke des Barri Gòtic." },
            { name: "La Boqueria", description: "Spaniens berühmtester Markt, seit 1836 geöffnet, mit Hunderten von Ständen mit exotischen Früchten, Meeresfrüchten, Wurstwaren und frischen Tapas.", price: "Kostenlos (Eintritt) / variabel (Essen)", tip: "Die Stände vorne haben touristische Preise. Gehen Sie an das Ende des Marktes, wo Restaurants einkaufen — echte Preise und bessere Produkte." },
            { name: "Las Ramblas", description: "Barcelonas bekannteste Fußgängerpromenade, 1,2 km von der Plaça de Catalunya bis zum Hafen. Die Font de Canaletes, die Blumenstände und Mirós Mosaik im Pflaster.", price: "Kostenlos", tip: "Auf den Ramblas gibt es viele Taschendiebe — tragen Sie Ihren Rucksack vorne und bewahren Sie nichts Wertvolles in den Taschen auf. Gehen Sie hindurch, um sie zu sehen, nicht um zu verweilen." },
            { name: "El Born und der Mercat de Santa Caterina", description: "Das angesagteste Viertel neben dem Barri Gòtic, mit Domènech i Montaners Musikpalast, Designläden und Barcelonas bester Tapas-Szene.", price: "Kostenlos (Palau de la Música 20€)", tip: "Der Palau de la Música ist das einzige noch aktiv genutzte UNESCO-Weltkulturerbe-Gebäude des Modernisme. Kaufen Sie ein Ticket für ein Konzert — das ist die beste Art, ihn zu sehen." },
          ],
        },
        {
          theme: "Barceloneta und das Mittelmeer",
          activities: [
            { name: "Barceloneta — Barcelonas Stadtstrand", description: "Barcelonas beliebtester Strand, 1,1 km Sand gegenüber dem Mittelmeer, mit den Wolkenkratzern des Port Olímpic im Hintergrund. Von überall in der Stadt mit der Metro erreichbar.", price: "Kostenlos", tip: "Um 10 Uhr ist das Wasser ruhig. Ab 14 Uhr frischt normalerweise die Meeresbrise auf und erzeugt Wellen, die gut zum Bodysurfen sind." },
            { name: "Fischmarkt von Barceloneta", description: "Das Viertel Barceloneta bewahrt noch immer seine Fischerviertel aus dem 18. Jahrhundert. Die Restaurants an der Carrer del Mar und Marbella servieren die authentischste Paella und Arròs negre.", price: "20-35€", tip: "Reservieren Sie in der Hochsaison im Voraus einen Tisch. Echte Barcelona-Paella wird mit Meeresfrüchten gemacht, nicht mit Huhn — Arròs negre mit Alioli ist das Signature-Gericht." },
            { name: "Port Olímpic und die Vila Olímpica", description: "Das für die Olympischen Spiele 1992 erbaute Viertel, das Barcelonas Küstenlinie verwandelte. Frank Gehrys goldener Fisch und die Kommunikationstürme sind urbane Wahrzeichen.", price: "Kostenlos", tip: "Die Uferpromenade von Barceloneta bis zum Forum (7 km) ist Barcelonas beste Fahrradtour. Es gibt Bicing-Stationen entlang der gesamten Strecke." },
            { name: "Burg Montjuïc bei Sonnenuntergang", description: "Die Festung aus dem 17. Jahrhundert auf dem Montjuïc-Hügel bietet den besten Panoramablick auf Barcelona, den Hafen und das Meer. Die Seilbahn fährt von Barceloneta aus hinauf.", price: "Burg 9€ / Seilbahn 12€", tip: "Der Kaktusgarten von Montjuïc ist kostenlos, und der Blick auf den Hafen von dort ist genauso gut wie von der Burg." },
          ],
        },
        {
          theme: "Montserrat — Kataloniens heiliger Berg",
          activities: [
            { name: "Zug nach Montserrat", description: "Dieser einzigartig geformte Felsenberg, 60 km von Barcelona entfernt, beherbergt Spaniens meistbesuchtes Benediktinerkloster und das romanische Bild der Jungfrau von Montserrat.", price: "36€ (Zug + Zahnradbahn + Standseilbahn)", tip: "Die erste Zahnradbahn fährt um 9:20 Uhr ab. Die Escolania de Montserrat (Europas ältester Kinderchor, aus dem 13. Jahrhundert) singt um 13 Uhr — verpassen Sie es nicht." },
            { name: "Sant Joan — die Wanderung mit Aussicht", description: "Der Weg zur Einsiedelei Sant Joan (ein 45-minütiger Aufstieg) endet mit dem besten Panorama auf den Berg und, an klaren Tagen, dem 50 km entfernten Mittelmeer.", price: "Kostenlos (in der Standseilbahn inbegriffen)", tip: "Die Standseilbahn von Sant Joan fährt bis zum Ausgangspunkt des Weges. Der Abstieg zu Fuß über Route 5 dauert 2 Stunden." },
            { name: "Basilika von Montserrat und die Moreneta", description: "Die Jungfrau von Montserrat, eine romanische Schnitzerei aus dem 12. Jahrhundert, thront in der Basilika. Schlangen, um sie zu berühren, bilden sich schon morgens — kommen Sie vor 11 Uhr, um die Wartezeit zu vermeiden.", price: "Kostenlos (Basilika)", tip: "Der Markt auf dem Klosterplatz verkauft die besten Käsesorten, Wurstwaren und den berühmten Montserrat-Likör (El Montserrat), zu Klosterpreisen." },
            { name: "Rückkehr, und Nachmittag in Gràcia oder im Eixample", description: "Zurück in Barcelona, nutzen Sie das letzte Tageslicht für einen Spaziergang durch das Eixample (Cerdàs achteckige Straßenblöcke) oder einen Vermouth in Gràcia.", price: "Vermouth 3-5€", tip: "Katalanischer Vermouth wird vor dem Sonntagsmittagessen oder bei Sonnenuntergang getrunken, mit Oliven und Patatas Bravas. Es ist ein Ritual, kein bloßes Getränk." },
          ],
        },
        {
          theme: "MNAC, Poble Sec und ein mediterraner Abschied",
          activities: [
            { name: "MNAC — Nationales Kunstmuseum von Katalonien", description: "Der neobyzantinische Palast, für die Weltausstellung 1929 erbaut, beherbergt die weltweit wichtigste Sammlung pyrenäischer romanischer Kunst sowie den katalanischen Modernisme.", price: "12€", tip: "Die Stadtausblicke von der MNAC-Terrasse sind kostenlos (kein Eintritt nötig). Erreichbar über die Treppen der Avinguda de la Reina Maria Cristina." },
            { name: "Poble Sec — das Viertel, das gut isst", description: "Am Fuß des Montjuïc hat Poble Sec die höchste Konzentration an kreativen Restaurants pro Quadratmeter in Barcelona, zu Nachbarschaftspreisen.", price: "15-25€", tip: "Die Carrer de Blai ist Barcelonas Pintxos-Straße — kleine Tapas auf Brot für je 1,50€. Perfekt für die Mittagszeit." },
            { name: "Fundació Joan Miró", description: "Das Museum, das dem verspieltesten Künstler des 20. Jahrhunderts gewidmet ist, in einem Gebäude von Josep Lluís Sert auf dem Montjuïc. Die Skulpturen im Außengarten sind von den Terrassen aus sichtbar.", price: "14€", tip: "Mirós Mosaik auf den Ramblas (im Boden an der Kreuzung mit der Carrer del Carme eingelassen) ist kostenlos und das Foto wert." },
            { name: "Bunkers del Carmel — Barcelonas ultimativer Ausblick", description: "Die Ruinen der Bürgerkriegsbunker auf dem Turó de la Rovira bieten den spektakulärsten 360°-Blick auf Barcelona, mit jedem erkennbaren Wahrzeichen.", price: "Kostenlos", tip: "Einheimische kommen bei Sonnenuntergang mit Bier und Picknick. Es ist die lokalste Aktivität der Stadt — keine Gebühr, keine Guides, keine organisierten Reisegruppen." },
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
    fr: {
      city: "Tokyo",
      country: "Japon",
      heroTitle: "5 jours à Tokyo : la ville qui a redéfini ce qu'une ville peut être",
      heroSubtitle: "Shinjuku, Shibuya, Asakusa et les coins où le Japon ancien côtoie le futur proche.",
      bestMonths: "Mars-avril (fleurs de cerisier) et octobre-novembre",
      budget: "15 000-25 000¥/jour (100-165 USD)",
      travelTips: [
        "La carte IC (Suica ou Pasmo) fonctionne dans tous les métros et trains, et même pour les achats en supérette",
        "7-Eleven, Lawson et FamilyMart sont bien plus que des supérettes — ils ont d'excellents plats chauds 24h/24",
        "Les courbettes sont un signe de respect — rendez-les avec la même profondeur que celle reçue",
        "Le liquide reste roi au Japon — ayez toujours 10 000-20 000¥ en billets",
        "Google Maps fonctionne parfaitement à Tokyo et indique le quai exact du métro à utiliser",
      ],
      days: [
        {
          theme: "Shinjuku : la mégalopole dans sa forme la plus pure",
          activities: [
            { name: "Sanctuaire Meiji — un sanctuaire dans la forêt", description: "En plein cœur de Tokyo, une forêt de 70 hectares entoure le sanctuaire shinto dédié à l'empereur Meiji. Le passage de l'agitation d'Harajuku au silence de la forêt est immédiat.", price: "Gratuit", tip: "Arrivez avant 9h pour voir le rituel matinal d'ouverture des prêtres (kagura). Le chemin de gravier de 700m vers le sanctuaire est une expérience en soi." },
            { name: "Harajuku et la rue Takeshita", description: "La rue de la mode alternative japonaise, avec des boutiques de cosplay, de mode lolita et les crêpes les plus créatives du monde. La sous-culture japonaise à son plus visible.", price: "Gratuit (promenade)", tip: "Le dimanche, des danseurs rockabilly habillés à la mode des années 1950 se rassemblent sur le pont Jingu — le côté le plus inattendu du Japon." },
            { name: "Shinjuku — le quartier qui ne dort jamais", description: "La zone avec le plus grand nombre de trains par jour au monde. Le Tokyo Metropolitan Government Building (plateforme d'observation gratuite), Kabukicho, Golden Gai et le parc Shinjuku Gyoen.", price: "Plateforme d'observation gratuite / Gyoen 500¥", tip: "La plateforme d'observation du Tokyo Metropolitan Government Building (45e étage, gratuit) offre l'une des meilleures vues de la ville, sans frais." },
            { name: "Golden Gai — les bars miniatures", description: "200 minuscules bars de 5 à 15 places chacun, entassés dans un labyrinthe de ruelles de Shinjuku. Chacun avec son propre thème, sa musique et un propriétaire qui est aussi le barman.", price: "600-1 500¥ par verre", tip: "Certains bars facturent un droit d'entrée de 500-1 000¥ — demandez avant d'entrer. L'expérience vaut plus que la boisson elle-même." },
          ],
        },
        {
          theme: "Le carrefour de Shibuya et le Tokyo contemporain",
          activities: [
            { name: "Carrefour de Shibuya au lever du soleil", description: "Le carrefour piéton le plus fréquenté au monde, avec jusqu'à 3 000 personnes traversant à chaque cycle de feu. Tôt le matin ou au lever du soleil, avant l'heure de pointe, c'est un carrefour complètement différent.", price: "Gratuit", tip: "La meilleure vue aérienne du carrefour est depuis le Starbucks au 2e étage du 2-1 Dogenzaka, ou depuis le bar Sky+1. Le carrefour vu d'en haut est la photo la plus emblématique de Tokyo." },
            { name: "Daikanyama et Nakameguro", description: "Les deux quartiers les plus branchés de Tokyo pour les créatifs locaux : boutiques de mode, cafés indépendants et le canal Meguro bordé de cerisiers en fleurs au printemps.", price: "Gratuit (promenade)", tip: "Tsutaya Books à Daikanyama est la plus belle librairie du monde — 3 bâtiments en bois avec un café intégré, ouverte 24h/24." },
            { name: "Omotesando — l'avenue de l'architecture", description: "Le boulevard de Tokyo où chaque bâtiment porte la signature d'un architecte : Zaha Hadid (Chanel), Sou Fujimoto, Kengo Kuma et l'Omotesando Hills de Tadao Ando.", price: "Gratuit", tip: "Le musée Nezu (1 300¥) au bout d'Omotesando abrite le jardin de bambous le plus paisible qui soit, à seulement 3 minutes de l'un des Starbucks les plus fréquentés au monde." },
            { name: "Ramen à Shibuya", description: "Tokyo possède les meilleurs bols de ramen au monde. Essayez Ichiran (cabines individuelles — le seul restaurant où manger seul a son propre protocole) ou Fuunji (tsukemen légendaire).", price: "900-1 500¥", tip: "Les distributeurs à l'entrée des ramen-ya vous demandent de choisir avant de vous asseoir. Le menu a des photos — pointez simplement le numéro si vous ne lisez pas les kanjis." },
          ],
        },
        {
          theme: "Asakusa et le Tokyo historique",
          activities: [
            { name: "Senso-ji au lever du soleil", description: "Le temple bouddhiste le plus visité au monde, fondé en 628 apr. J.-C. Le Kaminarimon (Porte du Tonnerre) et la rue Nakamise-dori de boutiques traditionnelles mènent au pavillon principal.", price: "Gratuit", tip: "À 8h, le temple a peu de visiteurs, et les moines accomplissent les rituels matinaux. Les tirages de fortune (omikuji) sont gratuits — pliez le papier et attachez-le si c'est un mauvais présage." },
            { name: "Skytree Tokyo", description: "La tour de télévision la plus haute du monde (634m), avec deux plateformes d'observation. Une vue à 360° sur Tokyo, le mont Fuji par temps clair et Asakusa à ses pieds.", price: "2 100¥ (plateforme 350m) / 3 100¥ (avec le sommet)", tip: "Le meilleur moment est au lever du soleil (ouvre à 8h) ou au coucher. Le vendredi soir, un éclairage bleu spécial est proposé." },
            { name: "Akihabara — le quartier du futur", description: "Le quartier de l'électronique, des jeux vidéo, des mangas et des animes. Des gratte-ciel couverts d'écrans LED, des boutiques de 7 étages pleines de figurines de collection et des maid cafés.", price: "Gratuit (promenade)", tip: "Un maid café est une expérience culturelle typiquement japonaise — des filles déguisées en femmes de chambre servent le thé en jouant avec vous. 1 000-2 000¥ par personne." },
            { name: "Ueno — musées et parc des cerisiers en fleurs", description: "Le parc Ueno est le lieu le plus célèbre de Tokyo pour le hanami (pique-nique sous les cerisiers en fleurs). Le Musée national de Tokyo et le zoo s'y trouvent aussi.", price: "Parc gratuit / Musée 1 000¥", tip: "Pendant la saison des cerisiers (fin mars-avril), Ueno est l'endroit le plus bondé de Tokyo. Le hanami nocturne (yozakura), avec les fleurs illuminées, est extraordinaire." },
          ],
        },
        {
          theme: "Tsukiji, Ginza et la baie de Tokyo",
          activities: [
            { name: "Marché extérieur de Tsukiji", description: "Le marché aux poissons le plus célèbre au monde, dans sa version marché extérieur (le marché intérieur a déménagé à Toyosu). Prenez un petit-déjeuner de sushi ou de donburi au thon à 7h aux côtés des poissonniers.", price: "1 500-3 000¥ (petit-déjeuner)", tip: "Dai Sushi et Sushi Dai sont les plus célèbres — comptez 45-90 minutes d'attente pour le comptoir de 8 places. Le sushi à 7h, tout juste débarqué, est d'un autre niveau." },
            { name: "Ginza — les Champs-Élysées de Tokyo", description: "Le quartier de luxe le plus exclusif d'Asie : Chanel, Louis Vuitton, l'Apple Store, et les grands magasins japonais Mitsukoshi et Isetan avec leurs bentos impeccables.", price: "Gratuit (promenade)", tip: "Les galeries d'art contemporain aux étages supérieurs des bâtiments de Ginza sont gratuites et présentent le meilleur de l'art japonais contemporain." },
            { name: "teamLab Borderless ou teamLab Planets", description: "Le musée d'art numérique immersif le plus innovant au monde, où les installations de lumière et de son réagissent aux mouvements des visiteurs.", price: "3 200¥", tip: "Réservez votre billet en ligne des mois à l'avance — il s'épuise constamment. teamLab Planets à Toyosu propose les installations aquatiques et le jardin de fleurs numérique." },
            { name: "Odaiba — la ville artificielle dans la baie", description: "L'île artificielle de la baie de Tokyo, siège de Fuji TV, avec une réplique miniature de la Statue de la Liberté et les meilleures vues nocturnes du Rainbow Bridge illuminé.", price: "Gratuit (promenade)", tip: "Le train sans conducteur Yurikamome traversant le Rainbow Bridge au crépuscule est l'un des trajets de transport public les plus spectaculaires au monde." },
          ],
        },
        {
          theme: "Kamakura ou Nikko — le Japon au-delà de Tokyo",
          activities: [
            { name: "Train vers Kamakura (1h depuis Tokyo)", description: "L'ancienne capitale impériale du Japon médiéval, avec un Grand Bouddha en plein air de 13 mètres, 65 temples et la mer visible depuis les collines. Une petite ville parfaite.", price: "Train 940¥ (aller-retour)", tip: "Le JR Pass ne couvre pas la ligne Enoden de Kamakura — prenez une carte Suica pour le trajet." },
            { name: "Grand Bouddha de Kamakura (Kotoku-in)", description: "La statue en bronze de 1252 du Bouddha Amida, haute de 13,35 mètres, a été témoin de tout le Japon médiéval. Vous pouvez entrer dans l'intérieur creux de la statue.", price: "300¥", tip: "Entrez dans le Bouddha (20¥ supplémentaires) — c'est l'une des rares statues géantes du Japon dans laquelle on peut pénétrer." },
            { name: "Plage de Kamakura", description: "Les plages de Kamakura et Enoshima font face au Pacifique, avec le mont Fuji visible en arrière-plan par temps clair. Surprenant d'avoir une plage de surf à seulement 1 heure de Tokyo.", price: "Gratuit", tip: "La vue sur le mont Fuji depuis la plage de Shichirigahama (ligne Enoden), avec les vagues de surf au premier plan, est une image emblématique du Japon." },
            { name: "Enoshima — l'île sacrée", description: "L'île reliée par un pont, avec le sanctuaire Benzaiten, des grottes côtières et la meilleure vue panoramique sur le Fuji depuis la tour Sea Candle.", price: "Tour 500¥", tip: "Les takoyaki (boulettes de poulpe) des stands sur le pont d'Enoshima sont le snack de l'après-midi parfait avant de retourner à Tokyo." },
          ],
        },
      ],
    },
    de: {
      city: "Tokio",
      country: "Japan",
      heroTitle: "5 Tage in Tokio: die Stadt, die neu definierte, was eine Stadt sein kann",
      heroSubtitle: "Shinjuku, Shibuya, Asakusa und die Ecken, in denen altes Japan neben der nahen Zukunft lebt.",
      bestMonths: "März-April (Kirschblüte) und Oktober-November",
      budget: "¥15.000-25.000/Tag (USD 100-165)",
      travelTips: [
        "Die IC-Karte (Suica oder Pasmo) funktioniert in jeder U-Bahn und jedem Zug, und sogar für Einkäufe in Convenience Stores",
        "7-Eleven, Lawson und FamilyMart sind viel mehr als Convenience Stores — sie haben rund um die Uhr ausgezeichnetes warmes Essen",
        "Verbeugungen sind ein Zeichen des Respekts — erwidern Sie sie in der gleichen Tiefe, wie Sie sie erhalten",
        "Bargeld ist in Japan immer noch König — tragen Sie immer ¥10.000-20.000 in Scheinen bei sich",
        "Google Maps funktioniert in Tokio perfekt und zeigt Ihnen den genauen U-Bahn-Bahnsteig an",
      ],
      days: [
        {
          theme: "Shinjuku: die Megalopole in ihrer reinsten Form",
          activities: [
            { name: "Meiji-Schrein — ein Heiligtum im Wald", description: "Direkt im Herzen Tokios umgibt ein 70 Hektar großer Wald den Shinto-Schrein, der Kaiser Meiji gewidmet ist. Der Übergang vom Trubel Harajukus zur Stille des Waldes ist unmittelbar.", price: "Kostenlos", tip: "Kommen Sie vor 9 Uhr, um das morgendliche Öffnungsritual der Priester (Kagura) zu sehen. Der 700m lange Kiesweg zum Schrein ist selbst schon ein Erlebnis." },
            { name: "Harajuku und die Takeshita-Straße", description: "Die Straße der alternativen japanischen Mode, mit Cosplay-Läden, Lolita-Mode und den kreativsten Crêpes der Welt. Die japanische Subkultur an ihrer sichtbarsten Stelle.", price: "Kostenlos (Spaziergang)", tip: "Sonntags versammeln sich Rockabilly-Tänzer im Stil der 1950er auf der Jingu-Brücke — die unerwartetste Seite Japans." },
            { name: "Shinjuku — das Viertel, das niemals schläft", description: "Das Gebiet mit den meisten Zügen pro Tag der Welt. Das Tokyo Metropolitan Government Building (kostenlose Aussichtsplattform), Kabukicho, Golden Gai und der Shinjuku-Gyoen-Park.", price: "Aussichtsplattform kostenlos / Gyoen ¥500", tip: "Die Aussichtsplattform des Tokyo Metropolitan Government Building (45. Stock, kostenlos) bietet einen der besten Ausblicke auf die Stadt, ohne Kosten." },
            { name: "Golden Gai — die Miniaturbars", description: "200 winzige Bars mit je 5 bis 15 Plätzen, in einem Labyrinth von Gassen in Shinjuku zusammengedrängt. Jede mit eigenem Thema, eigener Musik und einem Besitzer, der auch der Barkeeper ist.", price: "¥600-1.500 pro Getränk", tip: "Manche Bars verlangen eine Sitzgebühr von ¥500-1.000 — fragen Sie, bevor Sie hineingehen. Das Erlebnis ist mehr wert als das Getränk." },
          ],
        },
        {
          theme: "Die Kreuzung von Shibuya und das zeitgenössische Tokio",
          activities: [
            { name: "Shibuya-Kreuzung bei Sonnenaufgang", description: "Die belebteste Fußgängerkreuzung der Welt, mit bis zu 3.000 Menschen, die bei jedem Ampelzyklus überqueren. Am frühen Morgen oder bei Sonnenaufgang, vor dem Ansturm, ist es eine völlig andere Kreuzung.", price: "Kostenlos", tip: "Der beste Blick von oben auf die Kreuzung ist vom Starbucks im 2. Stock der 2-1 Dogenzaka oder von der Sky+1-Bar aus. Die Kreuzung von oben ist Tokios ikonischstes Foto." },
            { name: "Daikanyama und Nakameguro", description: "Die zwei angesagtesten Viertel Tokios für lokale Kreative: Modeboutiquen, unabhängige Cafés und der Meguro-Kanal, gesäumt von Kirschbäumen, die im Frühling blühen.", price: "Kostenlos (Spaziergang)", tip: "Tsutaya Books in Daikanyama ist die schönste Buchhandlung der Welt — 3 Holzgebäude mit integriertem Café, 24 Stunden geöffnet." },
            { name: "Omotesando — die Allee der Architektur", description: "Tokios Boulevard, wo jedes Gebäude die Handschrift eines Architekten trägt: Zaha Hadid (Chanel), Sou Fujimoto, Kengo Kuma und Tadao Andos Omotesando Hills.", price: "Kostenlos", tip: "Das Nezu-Museum (¥1.300) am Ende von Omotesando hat den friedlichsten Bambusgarten, den man sich vorstellen kann, nur 3 Minuten von einem der geschäftigsten Starbucks der Welt entfernt." },
            { name: "Ramen in Shibuya", description: "Tokio hat die besten Ramen-Schüsseln der Welt. Probieren Sie Ichiran (Einzelkabinen — das einzige Restaurant, in dem allein zu essen ein eigenes Protokoll hat) oder Fuunji (legendäres Tsukemen).", price: "¥900-1.500", tip: "Die Ticketautomaten am Eingang der Ramen-Läden verlangen, dass Sie wählen, bevor Sie sich setzen. Die Speisekarte hat Fotos — zeigen Sie einfach auf die Nummer, wenn Sie keine Kanji lesen können." },
          ],
        },
        {
          theme: "Asakusa und das historische Tokio",
          activities: [
            { name: "Senso-ji bei Sonnenaufgang", description: "Der meistbesuchte buddhistische Tempel der Welt, im Jahr 628 n. Chr. gegründet. Das Kaminarimon (Donnertor) und die Straße Nakamise-dori mit traditionellen Läden führen zur Haupthalle.", price: "Kostenlos", tip: "Um 8 Uhr hat der Tempel wenige Besucher, und die Mönche vollziehen die Morgenrituale. Glücksorakel (Omikuji) sind kostenlos — falten Sie das Papier und binden Sie es fest, wenn es Unglück bedeutet." },
            { name: "Skytree Tokio", description: "Der höchste Fernsehturm der Welt (634m), mit zwei Aussichtsplattformen. Ein 360°-Blick auf Tokio, den Fuji an klaren Tagen und Asakusa zu seinen Füßen.", price: "¥2.100 (350m-Plattform) / ¥3.100 (mit Gipfel)", tip: "Die beste Zeit ist bei Sonnenaufgang (öffnet um 8 Uhr) oder Sonnenuntergang. Freitagabends gibt es eine besondere blaue Beleuchtung." },
            { name: "Akihabara — das Viertel der Zukunft", description: "Das Viertel für Elektronik, Videospiele, Manga und Anime. Wolkenkratzer bedeckt mit LED-Bildschirmen, siebenstöckige Läden voller Sammelfiguren und Maid-Cafés.", price: "Kostenlos (Spaziergang)", tip: "Ein Maid-Café ist ein einzigartig japanisches kulturelles Erlebnis — als Dienstmädchen verkleidete Mädchen servieren Tee, während sie mit Ihnen spielen. ¥1.000-2.000 pro Person." },
            { name: "Ueno — Museen und Kirschblütenpark", description: "Der Ueno-Park ist Tokios berühmtester Ort für Hanami (Picknicken unter den Kirschblüten). Das Tokyo National Museum und der Zoo befinden sich beide hier.", price: "Park kostenlos / Museum ¥1.000", tip: "Während der Kirschblütensaison (Ende März-April) ist Ueno Tokios überfüllteste Stelle. Nächtliches Hanami (Yozakura), mit den beleuchteten Blüten, ist außergewöhnlich." },
          ],
        },
        {
          theme: "Tsukiji, Ginza und die Bucht von Tokio",
          activities: [
            { name: "Äußerer Markt von Tsukiji", description: "Der berühmteste Fischmarkt der Welt, in seiner Form als äußerer Markt (der innere Markt zog nach Toyosu um). Frühstücken Sie um 7 Uhr Sushi oder Thunfisch-Donburi neben den Fischhändlern.", price: "¥1.500-3.000 (Frühstück)", tip: "Dai Sushi und Sushi Dai sind die berühmtesten — rechnen Sie mit 45-90 Minuten Wartezeit für die 8-Plätze-Theke. Sushi um 7 Uhr, frisch vom Boot, ist auf einem anderen Niveau." },
            { name: "Ginza — Tokios Champs-Élysées", description: "Asiens exklusivstes Luxusviertel: Chanel, Louis Vuitton, der Apple Store, und die japanischen Kaufhäuser Mitsukoshi und Isetan mit ihren makellosen Bento-Boxen.", price: "Kostenlos (Spaziergang)", tip: "Die zeitgenössischen Kunstgalerien in den oberen Stockwerken von Ginzas Gebäuden sind kostenlos und zeigen das Beste zeitgenössischer japanischer Kunst." },
            { name: "teamLab Borderless oder teamLab Planets", description: "Das innovativste immersive digitale Kunstmuseum der Welt, in dem Licht- und Klanginstallationen auf die Bewegungen der Besucher reagieren.", price: "¥3.200", tip: "Buchen Sie Ihr Ticket Monate im Voraus online — es ist ständig ausverkauft. teamLab Planets in Toyosu hat die Wasserinstallationen und den digitalen Blumengarten." },
            { name: "Odaiba — die künstliche Stadt in der Bucht", description: "Die künstliche Insel in der Bucht von Tokio, Heimat von Fuji TV, einer Miniatur-Freiheitsstatue und den besten nächtlichen Ausblicken auf die beleuchtete Rainbow Bridge.", price: "Kostenlos (Spaziergang)", tip: "Der fahrerlose Yurikamome-Zug, der bei Dämmerung die Rainbow Bridge überquert, ist eine der spektakulärsten öffentlichen Verkehrsfahrten der Welt." },
          ],
        },
        {
          theme: "Kamakura oder Nikko — Japan jenseits von Tokio",
          activities: [
            { name: "Zug nach Kamakura (1h von Tokio)", description: "Die ehemalige kaiserliche Hauptstadt des mittelalterlichen Japan, mit einem 13 Meter hohen Großen Buddha im Freien, 65 Tempeln und dem von den Hügeln sichtbaren Meer. Eine perfekte kleine Stadt.", price: "Zug ¥940 (hin und zurück)", tip: "Der JR Pass deckt Kamakuras Enoden-Linie nicht ab — besorgen Sie sich eine Suica-Karte für die Fahrt." },
            { name: "Großer Buddha von Kamakura (Kotoku-in)", description: "Die 1252 gegossene Bronzestatue des Amida-Buddha, 13,35 Meter hoch, hat das gesamte mittelalterliche Japan miterlebt. Sie können das hohle Innere der Statue betreten.", price: "¥300", tip: "Gehen Sie in den Buddha hinein (zusätzlich ¥20) — es ist eine der wenigen Riesenstatuen Japans, die man betreten kann." },
            { name: "Strand von Kamakura", description: "Die Strände von Kamakura und Enoshima liegen am Pazifik, mit dem Fuji an klaren Tagen im Hintergrund sichtbar. Überraschend, einen Surfstrand nur 1 Stunde von Tokio entfernt zu haben.", price: "Kostenlos", tip: "Der Blick auf den Fuji vom Strand Shichirigahama (Enoden-Linie), mit Surfwellen im Vordergrund, ist ein ikonisches Bild Japans." },
            { name: "Enoshima — die heilige Insel", description: "Die durch eine Brücke verbundene Insel, mit dem Benzaiten-Schrein, Küstenhöhlen und dem besten Panoramablick auf den Fuji vom Sea-Candle-Turm aus.", price: "Turm ¥500", tip: "Die Takoyaki (Oktopusbällchen) von den Ständen auf der Enoshima-Brücke sind der perfekte Nachmittagssnack, bevor Sie nach Tokio zurückkehren." },
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
    fr: {
      city: "New York",
      country: "États-Unis",
      heroTitle: "5 jours à New York : l'itinéraire pour une première fois parfaite",
      heroSubtitle: "Le pont de Brooklyn, Central Park, le MoMA et Harlem — sans perdre de temps sur ce qui n'en vaut pas la peine.",
      bestMonths: "Septembre à novembre et avril à juin",
      budget: "150-280 USD/jour",
      travelTips: [
        "Chargez une MetroCard ou utilisez OMNY (paiement sans contact) — 2,90 USD par trajet quelle que soit la distance",
        "Le métro fonctionne 24h/24 mais il est lent la nuit, et il y a de fréquents détournements le week-end",
        "Laissez toujours un pourboire de 18-22% au restaurant — c'est socialement obligatoire et fait partie du salaire des employés",
        "Le CityPASS fait économiser 40% si vous visitez 4+ attractions payantes sur 9 jours consécutifs",
        "Téléchargez l'application NYC Ferry — le ferry de l'East River est un transport public bon marché avec des vues spectaculaires",
      ],
      days: [
        {
          theme: "Manhattan central : Times Square, Central Park et le Met",
          activities: [
            { name: "Central Park au lever du soleil", description: "340 hectares de parc au cœur de Manhattan. La fontaine Bethesda, le Bow Bridge et les vues sur la skyline depuis la Great Lawn sont les endroits les plus photogéniques.", price: "Gratuit", tip: "Louez un vélo dans le parc pour couvrir plus de terrain. Le dimanche, la boucle extérieure est fermée aux voitures." },
            { name: "Le Metropolitan Museum of Art (The Met)", description: "Le plus grand musée d'Amérique du Nord, avec plus de 2 millions d'objets. Les collections égyptienne, grecque et d'armures médiévales sont incontournables même si vous n'avez que 2 heures.", price: "30 USD (suggéré — prix libre pour les résidents de New York)", tip: "Le toit-terrasse du Met est ouvert de mai à octobre avec des vues spectaculaires sur Central Park. Séparé du musée mais inclus avec le billet." },
            { name: "Upper West Side et Columbus Circle", description: "Le quartier résidentiel le plus typiquement new-yorkais de Manhattan, avec ses brownstones, ses cafés indépendants et le marché gastronomique du Time Warner Center.", price: "15-25 USD (déjeuner)", tip: "Gray's Papaya sur Broadway sert les hot-dogs les plus emblématiques de New York à toute heure — la façon dont les New-Yorkais prennent leur petit-déjeuner depuis 1973." },
            { name: "Times Square", description: "Le carrefour le plus célèbre au monde, avec 26 000 m² d'écrans LED. Écrasant de jour, magique au crépuscule quand les lumières éclipsent le soleil.", price: "Gratuit", tip: "Si possible, ne mangez ni n'achetez rien à Times Square — tout coûte le double. Utilisez-le juste pour les photos et passez votre chemin." },
          ],
        },
        {
          theme: "Brooklyn : le pont, DUMBO et Williamsburg",
          activities: [
            { name: "Pont de Brooklyn au lever du soleil", description: "Traverser le pont à pied depuis Manhattan jusqu'à Brooklyn prend 30 minutes. Les vues sur la skyline au lever du soleil, avec l'East River en contrebas, offrent les meilleures photos de New York.", price: "Gratuit", tip: "Partez de la station Chambers St à Manhattan. Le pont se remplit de cyclistes rapides — restez sur la voie piétonne." },
            { name: "DUMBO — Down Under the Manhattan Bridge Overpass", description: "Le quartier avec la photo la plus célèbre de New York : l'intersection de Washington St, avec l'Empire State Building en arrière-plan et le pont de Manhattan encadrant la scène.", price: "Gratuit", tip: "La photo classique se prend sur Washington St en regardant vers le pont de Manhattan. À 9h il n'y a presque personne — à midi, des dizaines de personnes attendent leur tour." },
            { name: "Promenade de Brooklyn Heights", description: "La passerelle surélevée au-dessus de la FDR Drive offrant la meilleure vue sur la skyline de Lower Manhattan depuis Brooklyn. Les habitants viennent ici le week-end avec leur café.", price: "Gratuit", tip: "Continuez à marcher jusqu'à Brooklyn Bridge Park, où vous pourrez vous asseoir sur l'herbe face à la skyline." },
            { name: "Williamsburg : brunch et culture", description: "Le quartier hipster de Brooklyn, avec les meilleurs brunchs de New York, de l'art de rue, des boutiques vintage et un front de mer sur l'East River avec vue sur Midtown Manhattan.", price: "20-35 USD", tip: "Smorgasburg à Williamsburg (dimanches, avril-octobre) est le meilleur marché de street food de New York — 100 vendeurs locaux." },
          ],
        },
        {
          theme: "Lower Manhattan : histoire, Ground Zero et la Statue",
          activities: [
            { name: "Mémorial et musée du 11-Septembre", description: "Les deux bassins réfléchissants où se dressaient les Tours jumelles, avec les noms des 2 977 victimes gravés dans le bronze. Un lieu de mémoire essentiel.", price: "Mémorial gratuit / Musée 33 USD", tip: "Le mémorial extérieur est toujours accessible et ne nécessite pas de billet. Le musée est émotionnellement intense — prévoyez du temps pour l'assimiler." },
            { name: "Ferry de Staten Island", description: "Le ferry de Staten Island part toutes les 30 minutes depuis Whitehall Terminal. La traversée de 25 minutes offre des vues directes sur la Statue de la Liberté — entièrement gratuite.", price: "Gratuit", tip: "La meilleure vue sur la Statue est du côté droit du ferry en direction de Staten Island. Pas besoin de débarquer — reprenez simplement le ferry suivant pour le retour." },
            { name: "Wall Street et le Charging Bull", description: "Le centre financier mondial, avec la Bourse de New York, la célèbre sculpture du taureau et Fearless Girl. Le contraste entre l'architecture néoclassique et les gratte-ciel est unique au monde.", price: "Gratuit", tip: "La NYSE n'est pas ouverte au public. Le musée de la Réserve fédérale de New York (gratuit) montre la plus grande réserve d'or au monde." },
            { name: "One World Observatory", description: "L'observatoire du plus haut bâtiment de l'hémisphère occidental, à 381 mètres. La montée en ascenseur dure 47 secondes, avec un écran immersif racontant l'histoire de New York.", price: "46 USD", tip: "Cela vaut plus que l'Empire State (moins de monde, vues tout aussi impressionnantes). Achetez votre billet en ligne." },
          ],
        },
        {
          theme: "Art et design : MoMA, la High Line et Chelsea",
          activities: [
            { name: "MoMA — Museum of Modern Art", description: "La collection d'art du XXe siècle la plus importante au monde : La Nuit étoilée de Van Gogh, Guernica (reproduction), Dalí et Warhol. Le bâtiment lui-même est une œuvre de design.", price: "30 USD", tip: "Réservez votre billet en ligne. Le vendredi de 17h à 21h, l'entrée est à prix libre — très fréquenté mais bon marché." },
            { name: "High Line", description: "L'ancienne voie de chemin de fer surélevée transformée en parc urbain au-dessus de Chelsea. 2,3 km de parc linéaire avec de l'art public, des vues sur l'Hudson et les meilleurs food trucks de la ville.", price: "Gratuit", tip: "Commencez à Gansevoort St (l'extrémité sud) et terminez à Hudson Yards. Voir le Vessel depuis le sol est gratuit." },
            { name: "Chelsea Market", description: "Le marché gastronomique installé dans l'ancienne usine Oreo au cœur de Chelsea. Des dizaines d'étals proposant les meilleures options culinaires à prix raisonnables.", price: "15-30 USD", tip: "Les lobster rolls de The Lobster Place sont légendaires. Arrivez avant 15h pour trouver une table." },
            { name: "Empire State Building la nuit", description: "Le gratte-ciel le plus emblématique de New York, illuminé de différentes couleurs pour les événements et jours fériés. La plateforme du 86e étage offre des vues à 360° sur la ville illuminée.", price: "44 USD", tip: "Le deuxième observatoire (86e étage, en plein air) vaut plus la peine que le 102e étage. Arrivez 1 heure avant la fermeture pour éviter l'attente." },
          ],
        },
        {
          theme: "Harlem : la culture qui a fait New York",
          activities: [
            { name: "Dimanche gospel à Harlem", description: "Le dimanche, les églises de Harlem organisent des services gospel avec des chœurs live de premier ordre. L'Abyssinian Baptist Church est la plus célèbre — émouvante même si vous n'êtes pas croyant.", price: "Don volontaire", tip: "Allez-y le dimanche matin. Habillez-vous de façon formelle — c'est un office religieux, pas un spectacle touristique. Soyez respectueux." },
            { name: "Cuisine afro-américaine à Harlem", description: "Sylvia's Restaurant est une institution culinaire de Harlem depuis 1962 : poulet frit, mac and cheese et tarte à la patate douce qui font partie du patrimoine culturel new-yorkais.", price: "20-35 USD", tip: "Le Red Rooster de Marcus Samuelsson est la version moderne de la cuisine soul de Harlem — réservation essentielle." },
            { name: "Apollo Theater", description: "Le théâtre où James Brown, Ella Fitzgerald, Billie Holiday et Michael Jackson ont fait leurs débuts. L'Amateur Night a toujours lieu le mercredi — le public le plus exigeant et le plus honnête au monde.", price: "Façade gratuite / visites guidées 18 USD", tip: "Si votre visite coïncide avec l'Amateur Night (mercredi), achetez votre billet à l'avance. La soirée la plus authentique de New York." },
            { name: "The Cloisters — l'art médiéval au-dessus de l'Hudson", description: "L'antenne médiévale du Met, installée dans un authentique cloître européen reconstruit au-dessus de l'Hudson avec vue sur le New Jersey. Les tapisseries de la licorne sont hors du commun.", price: "30 USD (inclus avec le billet du Met du jour 1)", tip: "Arrivez en fin de journée quand la lumière du coucher de soleil traverse les vitraux médiévaux. Le moins connu des grands musées de New York." },
          ],
        },
      ],
    },
    de: {
      city: "New York",
      country: "Vereinigte Staaten",
      heroTitle: "5 Tage in New York: die Reiseroute für ein perfektes erstes Mal",
      heroSubtitle: "Brooklyn Bridge, Central Park, MoMA und Harlem — ohne Zeit mit dem zu verschwenden, was es nicht wert ist.",
      bestMonths: "September bis November und April bis Juni",
      budget: "USD 150-280/Tag",
      travelTips: [
        "Laden Sie eine MetroCard auf oder nutzen Sie OMNY (kontaktlose Zahlung) — USD 2,90 pro Fahrt unabhängig von der Entfernung",
        "Die U-Bahn fährt rund um die Uhr, ist aber nachts langsam, und am Wochenende gibt es häufige Umleitungen",
        "Geben Sie in Restaurants immer 18-22% Trinkgeld — es ist sozial verpflichtend und Teil des Lohns der Angestellten",
        "Der CityPASS spart 40%, wenn Sie 4+ kostenpflichtige Attraktionen innerhalb von 9 aufeinanderfolgenden Tagen besuchen",
        "Laden Sie die NYC-Ferry-App herunter — die East-River-Fähre ist günstiger öffentlicher Nahverkehr mit spektakulären Ausblicken",
      ],
      days: [
        {
          theme: "Zentral-Manhattan: Times Square, Central Park und das Met",
          activities: [
            { name: "Central Park bei Sonnenaufgang", description: "340 Hektar Park im Herzen Manhattans. Der Bethesda-Brunnen, die Bow Bridge und die Skyline-Ausblicke von der Great Lawn sind die fotogensten Orte.", price: "Kostenlos", tip: "Mieten Sie ein Fahrrad im Park, um mehr Strecke zurückzulegen. Sonntags ist die äußere Runde für Autos gesperrt." },
            { name: "Das Metropolitan Museum of Art (The Met)", description: "Das größte Museum Nordamerikas, mit mehr als 2 Millionen Objekten. Die ägyptische, griechische und mittelalterliche Rüstungssammlung sind Pflichtbesuche, selbst wenn Sie nur 2 Stunden haben.", price: "USD 30 (empfohlen — freier Preis für New Yorker Einwohner)", tip: "Das Dach des Met ist von Mai bis Oktober geöffnet, mit spektakulären Ausblicken auf den Central Park. Getrennt vom Museum, aber im Eintritt inbegriffen." },
            { name: "die Upper West Side und der Columbus Circle", description: "Manhattans typischstes New Yorker Wohnviertel, mit Brownstones, unabhängigen Cafés und dem Feinkostmarkt des Time Warner Center.", price: "USD 15-25 (Mittagessen)", tip: "Gray's Papaya am Broadway serviert NYCs ikonischste Hot Dogs zu jeder Tageszeit — so frühstücken New Yorker seit 1973." },
            { name: "Times Square", description: "Die berühmteste Kreuzung der Welt, mit 26.000 m² LED-Bildschirmen. Überwältigend tagsüber, magisch bei Dämmerung, wenn die Lichter die Sonne übertreffen.", price: "Kostenlos", tip: "Essen oder kaufen Sie, wenn möglich, nichts am Times Square — alles kostet doppelt so viel. Nutzen Sie ihn nur für Fotos und ziehen Sie weiter." },
          ],
        },
        {
          theme: "Brooklyn: die Brücke, DUMBO und Williamsburg",
          activities: [
            { name: "Brooklyn Bridge bei Sonnenaufgang", description: "Die Brücke von Manhattan nach Brooklyn zu Fuß zu überqueren dauert 30 Minuten. Die Skyline-Ausblicke bei Sonnenaufgang, mit dem East River darunter, ergeben die besten Fotos in NYC.", price: "Kostenlos", tip: "Starten Sie an der Chambers-St-Station in Manhattan. Die Brücke füllt sich mit schnellen Radfahrern — bleiben Sie auf dem Fußgängerweg." },
            { name: "DUMBO — Down Under the Manhattan Bridge Overpass", description: "Das Viertel mit NYCs berühmtestem Foto: die Kreuzung der Washington St, mit dem Empire State Building im Hintergrund und der Manhattan Bridge, die die Szene einrahmt.", price: "Kostenlos", tip: "Das klassische Foto entsteht auf der Washington St mit Blick zur Manhattan Bridge. Um 9 Uhr ist fast niemand da — bis Mittag warten Dutzende auf ihre Runde." },
            { name: "Brooklyn Heights Promenade", description: "Der erhöhte Weg über dem FDR Drive mit dem besten Blick auf die Skyline von Lower Manhattan von Brooklyn aus. Einheimische kommen am Wochenende mit Kaffee hierher.", price: "Kostenlos", tip: "Gehen Sie weiter zum Brooklyn Bridge Park, wo Sie sich auf den Rasen mit Blick auf die Skyline setzen können." },
            { name: "Williamsburg: Brunch und Kultur", description: "Brooklyns Hipster-Viertel, mit NYCs besten Brunch-Orten, Straßenkunst, Vintage-Läden und einer East-River-Uferpromenade mit Blick auf Midtown Manhattan.", price: "USD 20-35", tip: "Smorgasburg in Williamsburg (sonntags, April-Oktober) ist NYCs bester Street-Food-Markt — 100 lokale Anbieter." },
          ],
        },
        {
          theme: "Lower Manhattan: Geschichte, Ground Zero und die Statue",
          activities: [
            { name: "9/11 Memorial & Museum", description: "Die zwei reflektierenden Becken, wo einst die Zwillingstürme standen, mit den in Bronze eingravierten Namen der 2.977 Opfer. Ein wesentlicher Ort des Gedenkens.", price: "Denkmal kostenlos / Museum USD 33", tip: "Das Außendenkmal ist immer zugänglich und benötigt kein Ticket. Das Museum ist emotional intensiv — nehmen Sie sich Zeit, es zu verarbeiten." },
            { name: "Staten Island Ferry", description: "Die Staten Island Ferry fährt alle 30 Minuten vom Whitehall Terminal ab. Die 25-minütige Überfahrt bietet direkte Ausblicke auf die Freiheitsstatue — völlig kostenlos.", price: "Kostenlos", tip: "Der beste Blick auf Lady Liberty ist von der rechten Seite der Fähre Richtung Staten Island. Sie müssen nicht aussteigen — fahren Sie einfach mit der nächsten zurück." },
            { name: "Wall Street und der Charging Bull", description: "Das Finanzzentrum der Welt, mit der New Yorker Börse, der berühmten Bullenskulptur und Fearless Girl. Der Kontrast zwischen neoklassizistischer Architektur und Wolkenkratzern ist einzigartig.", price: "Kostenlos", tip: "Die NYSE ist nicht für die Öffentlichkeit zugänglich. Das Museum der Federal Reserve Bank of NY (kostenlos) zeigt den größten Goldtresor der Welt." },
            { name: "One World Observatory", description: "Das Observatorium des höchsten Gebäudes der westlichen Hemisphäre, mit 381 Metern. Die Aufzugsfahrt nach oben dauert 47 Sekunden, mit einem immersiven Bildschirm, der NYCs Geschichte zeigt.", price: "USD 46", tip: "Lohnt sich mehr als das Empire State (weniger überlaufen, genauso beeindruckende Ausblicke). Kaufen Sie Ihr Ticket online." },
          ],
        },
        {
          theme: "Kunst und Design: MoMA, die High Line und Chelsea",
          activities: [
            { name: "MoMA — Museum of Modern Art", description: "Die weltweit wichtigste Sammlung des 20. Jahrhunderts: Van Goghs Sternennacht, Guernica (Reproduktion), Dalí und Warhol. Das Gebäude selbst ist ein Designwerk.", price: "USD 30", tip: "Buchen Sie Ihr Ticket online. Freitags von 17 bis 21 Uhr ist der Eintritt zum freien Preis — sehr überlaufen, aber günstig." },
            { name: "High Line", description: "Die erhöhte Zugstrecke, umgewandelt in einen Stadtpark über Chelsea. 2,3 km linearer Park mit öffentlicher Kunst, Hudson-River-Ausblicken und den besten Food Trucks der Stadt.", price: "Kostenlos", tip: "Beginnen Sie an der Gansevoort St (dem südlichen Ende) und enden Sie bei Hudson Yards. Das Vessel vom Boden aus zu sehen ist kostenlos." },
            { name: "Chelsea Market", description: "Der Feinkostmarkt in der ehemaligen Oreo-Fabrik im Herzen von Chelsea. Dutzende Stände mit den besten kulinarischen Optionen zu vernünftigen Preisen.", price: "USD 15-30", tip: "Die Lobster Rolls bei The Lobster Place sind legendär. Kommen Sie vor 15 Uhr, um einen Tisch zu finden." },
            { name: "Empire State Building bei Nacht", description: "NYCs ikonischster Wolkenkratzer, für Events und Feiertage in verschiedenen Farben beleuchtet. Die Plattform im 86. Stock bietet 360°-Ausblicke auf die beleuchtete Stadt.", price: "USD 44", tip: "Das zweite Observatorium (86. Stock, im Freien) lohnt sich mehr als der 102. Stock. Kommen Sie 1 Stunde vor Schließung, um die Wartezeit zu vermeiden." },
          ],
        },
        {
          theme: "Harlem: die Kultur, die New York geprägt hat",
          activities: [
            { name: "Gospel-Sonntag in Harlem", description: "Sonntags halten Harlems Kirchen Gospel-Gottesdienste mit erstklassigen Live-Chören ab. Die Abyssinian Baptist Church ist die berühmteste — bewegend, auch wenn man nicht gläubig ist.", price: "Freiwillige Spende", tip: "Gehen Sie am Sonntagmorgen. Kleiden Sie sich formell — es ist ein Gottesdienst, keine Touristenshow. Seien Sie respektvoll." },
            { name: "Afroamerikanische Küche in Harlem", description: "Sylvia's Restaurant ist seit 1962 Harlems kulinarische Institution: Brathähnchen, Mac and Cheese und Süßkartoffelkuchen, die Teil des kulturellen Erbes New Yorks sind.", price: "USD 20-35", tip: "Marcus Samuelssons Red Rooster ist die moderne Interpretation der Harlem-Soul-Food — Reservierung unerlässlich." },
            { name: "Apollo Theater", description: "Das Theater, in dem James Brown, Ella Fitzgerald, Billie Holiday und Michael Jackson ihre Karriere begannen. Die Amateur Night findet noch immer mittwochs statt — das anspruchsvollste, ehrlichste Publikum der Welt.", price: "Fassade kostenlos / geführte Touren USD 18", tip: "Wenn Ihr Besuch mit der Amateur Night (Mittwoch) zusammenfällt, kaufen Sie Ihr Ticket im Voraus. Der authentischste Abend in NYC." },
            { name: "The Cloisters — mittelalterliche Kunst über dem Hudson", description: "Der mittelalterliche Ableger des Met, in einem authentischen europäischen Kreuzgang untergebracht, über dem Hudson mit Blick auf New Jersey wiederaufgebaut. Die Einhorn-Wandteppiche sind außergewöhnlich.", price: "USD 30 (im Met-Ticket von Tag 1 inbegriffen)", tip: "Kommen Sie am Ende des Tages, wenn das Sonnenuntergangslicht durch die mittelalterlichen Glasfenster fällt. Das am wenigsten bekannte der großen Museen New Yorks." },
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
