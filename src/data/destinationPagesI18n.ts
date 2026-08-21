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
