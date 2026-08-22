import type { BlogPost, ContentSection } from "./blogPosts";

// English overlay for blogPosts.ts, same fallback-to-Spanish philosophy as
// destinationPagesI18n.ts / baliI18n.ts. Sections are merged by index;
// structural fields (destination/city/country on "cta", emoji on "callout")
// always come from the Spanish base, only prose fields are overlaid.

type ContentSectionI18n =
  | { type: "intro"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; heading?: string; items: string[] }
  | { type: "callout"; text: string }
  | { type: "tip"; title: string; text: string }
  | { type: "cta"; text: string };

interface BlogPostI18nEntry {
  title: string;
  excerpt: string;
  categoryLabel: string;
  sections: ContentSectionI18n[];
}

export const blogPostsI18n: Partial<Record<string, Record<"en", BlogPostI18nEntry>>> = {
  "planificar-viaje-con-ia": {
    en: {
      title: "The algorithm that plans trips better than any travel agency (and it's free)",
      excerpt: "For decades, planning a trip meant the same thing: hours on Google, agency commissions, or generic itineraries that don't know you. Artificial intelligence changed the rules of the game.",
      categoryLabel: "Technology",
      sections: [
        { type: "intro", text: "For decades, planning a trip meant the same thing: spending hours on Google, paying agency commissions, or trusting generic itineraries that don't know you. Artificial intelligence changed the rules of the game, and most travelers still haven't found out." },
        { type: "h2", text: "Why generic itineraries ruin trips" },
        { type: "p", text: "If you've ever searched \"what to see in Rome in 3 days\" and got back the Colosseum, the Vatican, and the Trevi Fountain in that exact order... welcome to the problem. That itinerary exists on 50,000 blogs, and none of them know if you're a foodie, if you hate crowds, or if you're traveling with a 5-year-old." },
        { type: "p", text: "Generic itineraries are like recipes that aren't adapted to your diet: they work for the average person, but almost nobody is average. The result is a trip that feels more like a to-do list than an experience." },
        { type: "h2", text: "What AI can do that a travel agent can't" },
        { type: "p", text: "A good travel agent has intuition and experience. But they also have 20 clients at once, a supplier catalog with commercial deals, and probably never set foot in the neighborhood that would actually suit you best. It's not their fault — it's the limit of the model." },
        { type: "p", text: "An AI trained on millions of reviews, real itineraries, and geographic data can do something different: optimize a route considering opening hours, your pace, the likely weather, and your specific preferences, all at once." },
        { type: "list", items: [
          "Geographically optimized routes so you don't waste time on unnecessary transfers",
          "Real opening hours for each attraction (not Wikipedia's from 2021)",
          "Visit-time estimates based on real traveler data",
          "Suggestions tailored to trip type: family, solo, couple, business, adventure",
          "Alerts for attractions that require advance booking",
        ] },
        { type: "h2", text: "What AI still can't do (honesty above all)" },
        { type: "p", text: "Not everything is perfect. AI has no sense of smell, doesn't know if a particular restaurant had a bad week, and can make mistakes in poorly documented destinations. The key is to use it as a smart starting point, not an infallible oracle." },
        { type: "callout", text: "AI is the best co-pilot there is for planning a trip. You're the pilot. Use it to build a solid base and adjust based on your own instinct." },
        { type: "h2", text: "How it works in practice" },
        { type: "p", text: "Global Home Assist's tool uses artificial intelligence to generate fully personalized itineraries. You tell it the destination, the number of days, and the type of trip, and in under 30 seconds you get a detailed plan with real places, current photos, interactive maps, and optimized routes." },
        { type: "p", text: "Each activity includes a time estimate, the best time to visit, whether it needs advance booking, and reservation options. No hidden commissions. No mandatory sign-up. No 20-question form like the agencies use." },
        { type: "h2", text: "How it's different from other online planners" },
        { type: "p", text: "There are many online trip planners, but most run on templates. Google Trips lets you save places. ToursByLocals connects you with local guides. But none of them actually optimize the full route considering your trip type, your pace, and your preferences." },
        { type: "p", text: "Global Home Assist is different because the algorithm understands your context: if you're traveling with family, it won't generate an itinerary of 10 churches in one day. If you're traveling solo and like adventure, it'll prioritize activities with other travelers. If your budget is tight, it separates options: the essentials vs. what's worth it if there's money to spare." },
        { type: "p", text: "The data it uses isn't generic: it's specific to 2026. Updated prices, real opening hours (not Wikipedia from 2018), likely weather for the dates you picked, and recommendations based on millions of real travelers' itineraries." },
        { type: "h2", text: "The future of trip planning (it's here now)" },
        { type: "p", text: "Five years ago, using AI to plan a trip was science fiction. Today, it's standard. Travel agencies that don't evolve are disappearing. Smart travelers are already using AI tools. Most people still don't know it." },
        { type: "p", text: "The competitive advantage of learning to use AI now is huge: while others are still opening 50 tabs, you have a complete, optimized, personalized itinerary in 30 seconds. Try it once and you won't go back to planning a trip the old way." },
        { type: "tip", title: "Usage tip", text: "Specify the type of trip (leisure, adventure, romantic, business, family) and the exact number of days. The more information you give it, the more precise and useful the result will be." },
        { type: "cta", text: "Try it now — your next itinerary in 30 seconds →" },
      ],
    },
  },
  "viaje-europa-presupuesto-real": {
    en: {
      title: "How to travel 7 days in Europe on €700 without lying to yourself",
      excerpt: "Every week a new article promises 'Europe for €30/day.' Most of them ignore the flight, count the most uncomfortable hostel in the neighborhood, and tend to be outdated. This article doesn't do that.",
      categoryLabel: "Budget",
      sections: [
        { type: "intro", text: "Every week a new article promises 'Europe for €30/day.' Most of them ignore the flight, count the most uncomfortable hostel in the neighborhood, and tend to be two years out of date. This article doesn't do that." },
        { type: "h2", text: "The real breakdown of a 7-day European trip (2026)" },
        { type: "p", text: "Let's use Madrid–Barcelona–Lisbon as an example, one of the most popular circuits. These are the real numbers for 2026, without softening or inflating them:" },
        { type: "list", heading: "Approximate costs per person in mid-season", items: [
          "Round-trip flight from Latin America: €350–550 (realistic average: €420)",
          "7 nights' accommodation (comfortable hostel or well-located Airbnb): €180–280",
          "Local transport between cities (buses/trains): €80–120",
          "Food (€25–40/day including one restaurant dinner): €175–280",
          "Attractions and museums: €60–100",
          "Estimated TOTAL: €715–1,170 per person",
        ] },
        { type: "p", text: "Can you bring it down? Yes, with effort. To €30/day total? No. With €700 you can have a genuinely good trip if you optimize the right variables." },
        { type: "h2", text: "Where it IS worth spending" },
        { type: "p", text: "The flight and the mattress are not where you save. An uncomfortable flight ruins your first days' energy. A terrible bed ruins the sleep of the whole trip. Invest there and cut elsewhere." },
        { type: "list", items: [
          "A well-located boutique hostel is always worth more than a cheap hotel 45 minutes from the center",
          "The night train (when it exists) saves you a hotel night and a transfer — double savings",
          "Advance tickets for the Vatican, Uffizi, or Sagrada Família cost the same but save you 2–3 hours of queuing",
          "Full travel insurance: €30–60 for 7 days, and it avoids €8,000 disasters",
        ] },
        { type: "h2", text: "Where it's NOT worth spending" },
        { type: "p", text: "Organized bus tours with headsets. Hotel-run excursions. Restaurants with an English menu and photos on the menu (a universal sign of tourist pricing). The 'official airport taxi' when there's a metro or bus available." },
        { type: "callout", text: "European public transport is, in general, excellent, frequent, and safe. Madrid's metro, Barcelona's bus, Lisbon's Metropolitano — all of them are better options than a car for getting around a city." },
        { type: "h2", text: "The European city that gives you the most for your money in 2026" },
        { type: "p", text: "Lisbon wins by a landslide. Hostel prices comparable to Madrid but with fewer tourists in the residential areas, delicious and cheaper food, and a cultural scene many still haven't discovered. Prague, Krakow, and Belgrade are also among Europe's best value-for-money right now." },
        { type: "p", text: "Paris and Amsterdam remain expensive. Beautiful, absolutely. Cheap, not at all. If your budget is tight, prioritize Central and Eastern Europe or the Iberian Peninsula." },
        { type: "h2", text: "The timing trick nobody explains well" },
        { type: "p", text: "It's not just 'avoid summer.' It's understanding that traveling in shoulder season (April–May, September–October) doesn't just cut prices by 20–40% — it also improves the experience. Shorter lines, pleasant weather, more relaxed locals, cities that still feel like cities." },
        { type: "h2", text: "Real spending comparison by country (2026)" },
        { type: "p", text: "Not all of Europe costs the same. Here's the real breakdown of what you'd spend per day in 2026 (not including the flight):" },
        { type: "list", heading: "Average daily cost (hostel + food + one attraction)", items: [
          "Portugal (Lisbon, Porto): €35–50/day — Europe's best value",
          "Spain (Madrid, Barcelona): €45–65/day — Good ratio, very accessible",
          "Italy (Rome, Florence): €50–75/day — More expensive but justified by the attractions",
          "France (Paris, Lyon): €60–90/day — Expensive, especially Paris",
          "Germany (Berlin, Munich): €40–60/day — Surprisingly cheap",
          "Eastern Europe (Prague, Budapest): €30–45/day — Among the cheapest",
          "Switzerland, Norway, Denmark: €80–150/day — Avoid if your budget is tight",
        ] },
        { type: "h2", text: "The tricks that actually work (not the ones you see on social media)" },
        { type: "p", text: "There are plenty of traveler 'life hacks' that don't work: 'fly midweek' (sometimes it's more expensive), 'sleep at the airport' (uncomfortable and exhausting), 'eat only from supermarkets' (boring). Here are the tricks that DO work:" },
        { type: "list", items: [
          "Travel with just a backpack — avoid $25–50 per-flight baggage fees",
          "Buy a Eurail Pass if you're visiting 3+ countries — often cheaper than individual tickets",
          "Eat out at midday, cook or eat cheap at night — set lunch menu: €7–12, home-cooked dinner: €5–8",
          "Stay 10 minutes from the center, not IN the center — saves 30–50% on accommodation",
          "Late-hour museum visits: many offer free entry after 5pm on certain days",
          "Offline Google Maps — download the maps before you travel, saves roaming and data",
        ] },
        { type: "tip", title: "Flight protip", text: "Tuesdays and Wednesdays between 11pm and midnight tend to show the lowest prices on flight search engines. Dynamic pricing algorithms tend to update downward in those windows. It's not an absolute guarantee, but it's worth checking." },
        { type: "cta", text: "Plan your European itinerary free with AI →" },
      ],
    },
  },
  "dubai-guia-honesta-viajero": {
    en: {
      title: "Dubai unfiltered: what Instagram doesn't show you",
      excerpt: "Dubai is the most photographed city in the world and, probably, the most misunderstood. It's not just a giant mall with artificial palm trees. The truth is more interesting than either extreme.",
      categoryLabel: "Destinations",
      sections: [
        { type: "intro", text: "Dubai is the most photographed city in the world and, probably, the most misunderstood. It's not just a giant mall with artificial palm trees. Nor is it the endless-glamour paradise Instagram promises. The truth is in between, and it's more interesting than either extreme." },
        { type: "h2", text: "The Dubai that existed before the skyscrapers" },
        { type: "p", text: "There's a part of Dubai that existed before oil, before the Burj Khalifa, before the floating hotels. It's called Deira, and it's a less-than-AED-1 (~$0.27) abra (wooden boat) ride away. That's where the gold, spice, and textile souks are, where prices are negotiated and nothing about the atmosphere is artificial." },
        { type: "p", text: "If you do Dubai without setting foot in Deira, you've done half the trip. It's the part most full-day tours skip because there's no commission to earn there." },
        { type: "h2", text: "Is the Burj Khalifa worth it, or is it a trap?" },
        { type: "p", text: "Honest answer: it depends on how you do it. Entry to floor 124 costs AED 145 (~$40) if bought in advance. If bought same-day: AED 300 or more. Floor 148 (At the Top Sky) tops $100." },
        { type: "p", text: "The view is genuinely impressive. But if you're going up, go at night and buy in advance at least 2 days ahead. The Burj as a photo from below, on the other hand, is free and almost as iconic." },
        { type: "callout", text: "Dubai Frame at sunset can easily compete with the view from the Burj Khalifa. And it costs a fifth of the price. The skyline angle from there is different — and the glass frame is, in itself, impressive architecture." },
        { type: "h2", text: "Eating in Dubai without paying airport prices" },
        { type: "p", text: "The Dubai Mall has restaurants charging AED 100+ (~$28) a plate. Ten minutes' walk in any direction outside the mall you'll find Indian, Pakistani, Lebanese, and Ethiopian food that gives you twice the food for a third of the price." },
        { type: "list", heading: "Real price reference in local areas", items: [
          "Chicken mandi in Al Karama: AED 15 (~$4)",
          "Corner shawarma in Bur Dubai: AED 8 (~$2)",
          "Fresh falafel in Deira: AED 5 (~$1.5)",
          "Manoushe (Lebanese flatbread with cheese and herbs): AED 6 (~$1.6)",
          "Burger at the mall food court: AED 65+ (~$18)",
        ] },
        { type: "p", text: "Al Karama and Bur Dubai are the neighborhoods where residents eat. That's where the real food is, made by people who've lived in Dubai for decades." },
        { type: "h2", text: "How to get around Dubai without losing your mind" },
        { type: "p", text: "Dubai's metro is modern, air-conditioned, and much cheaper than any taxi. It connects most of the tourist attractions along Sheikh Zayed Road. The catch: Deira and Bur Dubai require combining metro with a taxi or a walk from the station." },
        { type: "tip", title: "Nol Card: keep it simple", text: "Buy a Nol Card (rechargeable transport card) at any metro station. AED 25 for the card includes AED 19 of starting credit. It works on metro, bus, and tram. It saves time and avoids paying a tourist fare on every trip." },
        { type: "h2", text: "When to go (and when definitely not to go)" },
        { type: "p", text: "November to March: perfect weather, between 20–28°C. Accommodation prices rise but the experience justifies it. This is the window for the big events and the Dubai Shopping Festival." },
        { type: "p", text: "June to September: 40–45°C with humidity on the coast. Many travelers love the 'challenge'; most prefer to avoid it. If you go in summer, you'll live from air conditioning to air conditioning — perfectly valid if price is your priority, since hotels drop up to 60%." },
        { type: "cta", text: "Generate your personalized Dubai itinerary →" },
      ],
    },
  },
  "roma-48-horas-itinerario": {
    en: {
      title: "Rome in 48 hours: the itinerary that Romans approve of",
      excerpt: "Every blog has a Rome guide. Most of them have the same copied itinerary. This one assumes you already know Rome exists and want to know how not to waste 48 hours queuing to see the Sistine Chapel.",
      categoryLabel: "Guides",
      sections: [
        { type: "intro", text: "Every travel blog has a Rome guide. Most of them have the same itinerary, copied and re-copied. We wrote this article assuming you already know Rome exists and want to know how not to waste 48 hours being yet another person queuing for 3 hours to see the Sistine Chapel." },
        { type: "h2", text: "The two rules of Rome (without which nothing works)" },
        { type: "p", text: "Rule 1: Everything you want to see requires advance booking. The Colosseum, the Vatican Museums, the Capitoline Museums — all of them have online booking systems, and same-day tickets sell out or triple in price. Don't improvise in Rome, especially April through October." },
        { type: "p", text: "Rule 2: Rome is a city for walking, not for making transport decisions every hour. Choose accommodation in the historic center and you'll save time, money, and frustration. It doesn't matter if it's €30 more a night: the metro costs you time you won't get back." },
        { type: "h2", text: "Day 1: Roman Forum, Colosseum, and Trastevere" },
        { type: "p", text: "Start at 8am at the Roman Forum. Get there before the tour groups arrive and walk through it slowly for 90 minutes — it's where Rome really speaks to you. The Colosseum is 200 meters away and included on the same combined ticket (€16–22 depending on the rate). Book it at least 3 days in advance." },
        { type: "p", text: "For lunch, move away from the immediate radius around the Colosseum. The trattorias in the Aventino or Testaccio area have better prices and quality. In the afternoon, cross the Tiber into Trastevere. The neighborhood is made for wandering with no destination — it's the only part of the trip where you don't need an itinerary." },
        { type: "callout", text: "Pizza al taglio for lunch: €4–6 for two generous slices. The golden rule: look for the one with a line of locals eating standing up, not tourists sitting down waiting for a menu." },
        { type: "h2", text: "Day 2: The Vatican without the queue drama" },
        { type: "p", text: "The classic mistake is arriving at St. Peter's Square at 10am and finding 2,000 people waiting. There's only one solution: an early-entry ticket to the Vatican Museums for 8am, Monday to Saturday. You get 2 hours before the first organized tour group arrives." },
        { type: "p", text: "The museums are gigantic — 7km of galleries. If you only have 2–3 hours, prioritize the Gallery of Maps (the most visually impressive), the Sistine Chapel, and St. Peter's Basilica. Leave the rest for another visit." },
        { type: "tip", title: "The Vatican's secret exit", text: "The Vatican Museums have a direct exit into St. Peter's Basilica without going back to the main square. It's not always signposted — ask any Vatican guard. It saves you 20 minutes of walking and a bit of crowd." },
        { type: "h2", text: "Navona, the Pantheon, and the Trevi Fountain (order matters)" },
        { type: "p", text: "Trevi Fountain: go before 8am or after 10pm. The rest of the time there are literally 500 people pushing each other for the same photo at the same angle. At night it's lit up and there's far fewer people — a completely different experience." },
        { type: "p", text: "Piazza Navona and the Pantheon are a 10-minute walk from each other and perfect for the last afternoon. The Pantheon costs €5 (yes, they recently put a price on it) and is 2,000 years old. It's one of the best-preserved buildings from the Roman world. Let the price put that in perspective." },
        { type: "h2", text: "The mistake 90% of tourists make in Rome" },
        { type: "p", text: "Trying to see everything. Rome has enough for 2 weeks of relaxed travel. In 48 hours, less is more. Three places experienced well and with time are worth infinitely more than twelve places seen at a run. Resist the temptation to add 'a quick visit' to everything that appears on the map." },
        { type: "cta", text: "Generate your personalized Rome itinerary →" },
      ],
    },
  },
  "barcelona-vs-madrid-cual-elegir": {
    en: {
      title: "Barcelona vs Madrid: the drama-free guide to choosing well",
      excerpt: "This is the debate that most divides travelers headed to Spain. Both cities have devoted fans and fierce detractors. We don't have a side — we have data.",
      categoryLabel: "Destinations",
      sections: [
        { type: "intro", text: "This is the debate that most divides travelers visiting Spain for the first time. Both cities have devoted fans and passionate detractors. We don't have a side — we have data, and we've traveled to both." },
        { type: "h2", text: "If you're a foodie" },
        { type: "p", text: "Madrid wins on hearty inland cuisine: meat, offal, stews, and the whole universe of classic tapas. The taverns of La Latina, cocido madrileño, callos a la madrileña, and the San Miguel market are one of a kind. The calamari sandwich in front of the Royal Palace at noon is a cultural experience in itself." },
        { type: "p", text: "Barcelona wins on light Mediterranean cuisine, fresh seafood, and the new Catalan gastronomy that blended French technique with local ingredients. La Boqueria is completely overrun (avoid it), but El Ninot or the Mercat de l'Abaceria are more genuine versions of the same idea." },
        { type: "callout", text: "For classic bar tapas: Madrid. For innovative gastronomic experiences and seafood: Barcelona. For both in depth: plan at least 4 days in each." },
        { type: "h2", text: "If architecture matters to you" },
        { type: "p", text: "Barcelona, no contest. The Sagrada Família, Casa Batlló, Park Güell, the Palau de la Música Catalana, the Mies van der Rohe Pavilion — no city has a comparable density of iconic, singular architecture in such a small radius." },
        { type: "p", text: "Madrid has the Art Triangle (Prado, Reina Sofía, Thyssen-Bornemisza), one of the world's most important museum concentrations, and magnificent boulevard architecture. But it doesn't give you that constant \"what is that?\" feeling walking down the street that Barcelona does." },
        { type: "h2", text: "If you're looking for nightlife" },
        { type: "p", text: "Both cities go to bed late — very late. Madrid has a reputation for never sleeping, and the reputation is earned: Madrid's night starts when other European cities have already put up the closed sign. The Malasaña and Chueca neighborhoods have a unique early-hours energy." },
        { type: "p", text: "Barcelona has internationally renowned clubs (Razzmatazz, Input, Pacha) and an established electronic scene. The neighborhood vibe in Raval and El Born at 2am is also hard to beat — more cosmopolitan, more mixed." },
        { type: "h2", text: "If you only have 3 days to pick one" },
        { type: "p", text: "Barcelona. The density of visual and architectural experiences per square kilometer is greater. You can do Gaudí on day 1, the Gothic Quarter plus Barceloneta on day 2, and Gràcia plus El Born on day 3, and come away with a well-rounded trip." },
        { type: "p", text: "Madrid in 3 days feels incomplete because the city is best enjoyed at the slow pace of tapas and wandering rather than a packed itinerary. Madrid needs time — and rewards you with more time." },
        { type: "h2", text: "The verdict (even if you don't like it)" },
        { type: "p", text: "There's no single right answer. But for someone who's never been to Spain: Barcelona first, for its architectural and visual uniqueness. Madrid afterward, with more time and a willingness to dig into culture and traditional gastronomy." },
        { type: "p", text: "And if you have 10 days: do both. The Madrid–Barcelona AVE takes 2:30 and connects them perfectly. Not choosing between them is the best possible decision." },
        { type: "tip", title: "The perfect combo for 10 days", text: "Fly into Barcelona first, finish in Madrid (or the other way around). Many airlines let you fly into and out of different cities with no significant surcharge — search for it as an 'open-jaw flight' in any search engine." },
        { type: "cta", text: "Generate your Barcelona or Madrid itinerary with AI →" },
      ],
    },
  },
  "errores-comunes-al-viajar": {
    en: {
      title: "The 7 mistakes that ruin a trip (and how to avoid them)",
      excerpt: "After analyzing thousands of itineraries and traveler reviews, there are 7 mistakes that show up again and again. They're not the obvious ones. They're the subtlest — and the most devastating.",
      categoryLabel: "Tips",
      sections: [
        { type: "intro", text: "After analyzing thousands of itineraries and traveler reviews from around the world, there are 7 mistakes that show up again and again. They're not the obvious ones — nobody forgets their passport twice. They're the subtle ones: the ones that destroy a trip that seemed well planned." },
        { type: "h2", text: "Mistake #1: Planning too much (or too little)" },
        { type: "p", text: "An hour-by-hour itinerary generates anxiety and leaves no room for the best moments of any trip: the accidental ones. The unnamed café with the best croissant in the neighborhood. The street festival that wasn't in any blog. The conversation with a local that changes the day's plan." },
        { type: "p", text: "But zero planning generates chaos: unnecessary expenses, sold-out attractions, and the feeling of having wasted time and money. The sweet spot: define each day's 2–3 non-negotiable priorities and leave the rest open." },
        { type: "h2", text: "Mistake #2: Optimizing for hotel price instead of location" },
        { type: "p", text: "The hotel that's €30 cheaper but 45 minutes from the center costs you exactly that in daily transport. Plus 1.5 hours of your day. Every day. On a 7-day trip, that's more than 10 hours lost in transfers and €210 extra in transport." },
        { type: "p", text: "Accommodation location is the variable with the biggest impact on a short trip's experience. Not on price — on experience. Prioritize it." },
        { type: "h2", text: "Mistake #3: Ignoring local public transport" },
        { type: "p", text: "In nearly every city in the developed world, public transport is faster, cheaper, and more reliable than taxis or rideshares at peak hours. Tokyo's metro, London's Tube, Mexico City's metro — all of them are better options than a car most of the time in a city." },
        { type: "callout", text: "Download Citymapper before arriving in any city. It's more accurate than Google Maps for local public transport, works offline, and gives you options with real times, not estimates." },
        { type: "h2", text: "Mistake #4: Underestimating real time at major attractions" },
        { type: "p", text: "\"The Louvre in 2 hours\" is an inside joke among Paris tour guides. The Louvre has 35,000 works across 73,000m². In 2 hours you'll walk a lot, see little, and leave frustrated. Either pick 3–4 specific rooms with intent (e.g., Denon Wing + Mona Lisa + Greek sculpture), or set aside half a day." },
        { type: "p", text: "This mistake multiplies frustration down the line: you arrive tired to the next thing, you don't have time for what follows, and you end the day not having really enjoyed either. Always estimate more time than you think you'll need at major museums." },
        { type: "h2", text: "Mistake #5: Not having a weather plan B" },
        { type: "p", text: "Rain in Tokyo, a heat wave in Bangkok, or a windy day in Santorini can ruin an entire day of outdoor itinerary. Having a mental \"weather plan B\" list — second-tier museums, covered markets, well-reviewed cafés, neighborhoods to explore under a roof — is worth gold." },
        { type: "h2", text: "Mistake #6: Going without travel insurance" },
        { type: "p", text: "We don't mention it because \"it has to be mentioned.\" We mention it because we know the story of the person who skipped it and had to pay $8,000 for an ER visit in the US for appendicitis. Or the $3,500 for a replacement flight after a cancellation. Travel insurance costs €30–80 for a week in Europe. It's the smartest expense of the trip." },
        { type: "tip", title: "What to make sure you cover", text: "Medical expenses (minimum €100,000 of coverage), flight cancellation and delay, lost luggage. The rest — extreme sports, flexible cancellation — is optional depending on your travel profile." },
        { type: "h2", text: "Mistake #7: Planning with fragmented, outdated information" },
        { type: "p", text: "Planning with 15 open tabs of contradictory blogs, forum posts from 2019, and undated reviews is the slowest and least reliable way to put together a trip. The result is usually a generic itinerary, with old information, that doesn't reflect your real preferences." },
        { type: "p", text: "In 2026, there are AI tools that process all that information and hand you a personalized itinerary in seconds. It's not about the AI thinking for you — it's about having a smart starting point you can adjust, instead of building everything from scratch with fragmented information." },
        { type: "cta", text: "Start with a smart itinerary — generate it free in 30 seconds →" },
      ],
    },
  },
  "tokio-guia-primer-viaje": {
    en: {
      title: "Tokyo for the traveler who's never been to Asia: the guide we wish we'd had",
      excerpt: "Japan is the destination that intimidates the most before you go and wins you over the most afterward. Tokyo isn't hard — it's different. This guide exists to make that difference an advantage, not an obstacle.",
      categoryLabel: "Guides",
      sections: [
        { type: "intro", text: "Japan is the destination that intimidates the most before you go and wins you over the most afterward. Not because it's dangerous or hard — but because it's radically different from everything you know. This guide exists to make that difference an advantage, not an obstacle." },
        { type: "h2", text: "What nobody tells you before your first trip to Tokyo" },
        { type: "p", text: "Tokyo has 14 million people and a lower crime rate than most European cities. You can leave your phone on a café table and come back to find it. That's not a myth — it's the norm. Pre-trip fear tends to be inversely proportional to how comfortable you'll feel once you arrive." },
        { type: "p", text: "The real challenge isn't safety: it's the transport system. Tokyo has the most complex metro network in the world, with 13 lines and multiple operators. But it also has the best app for navigating it (Google Maps works perfectly) and the trains are punctual to the minute." },
        { type: "h2", text: "Transport: the Suica Card that changes everything" },
        { type: "p", text: "The first thing you do when you leave the airport: buy a Suica Card (rechargeable transport card) at any station machine. Load ¥2000 (~$13 USD) to start. It works on the metro, JR trains, buses, and even at convenience stores like 7-Eleven and FamilyMart." },
        { type: "callout", text: "Google Maps in Tokyo is extraordinarily accurate. Enter the address or place name in Japanese (copy it from a search) and it gives you the exact route with transfers, platform, and walking time. You don't need to understand the system — just follow the instructions." },
        { type: "h2", text: "The 5 neighborhoods that define Tokyo" },
        { type: "list", items: [
          "Shibuya — The world's most famous pedestrian crossing and the city's most intense energy. Unmissable at night.",
          "Shinjuku — The central hub with Golden Gai (tiny bar alleys) and the Metropolitan Government skyscrapers (free view from the 45th floor).",
          "Asakusa — Historic Tokyo. Senso-ji temple, rickshaws, and Nakamise-dori for no-nonsense souvenirs.",
          "Harajuku — Takeshita Street with the world's most extreme fashion. Right next to Meiji Shrine, total contrast.",
          "Yanaka — The neighborhood that survived WWII bombing. 1950s streets, a historic cemetery, cats, and no tourists.",
        ] },
        { type: "h2", text: "Eating in Tokyo: the country with the most Michelin stars in the world" },
        { type: "p", text: "Tokyo has more Michelin-starred restaurants than Paris, Lyon, and New York combined. But the fact that matters most to most travelers is another one: cheap food in Japan is exceptional. A ramen at a nameless spot runs ¥800–1200 (~$5–8). Sushi at Tsukiji Outer Market at 7am is better than 90% of sushi restaurants in the rest of the world." },
        { type: "tip", title: "Convenience store = real food", text: "Japanese 7-Eleven, Lawson, and FamilyMart are a different category of convenience store. The onigiri (stuffed rice triangles), tamago sandwiches, and matcha latte from Family Mart are genuinely good. Having breakfast there is a local experience, not a compromise." },
        { type: "h2", text: "What to see in 5 days: order matters" },
        { type: "list", heading: "Recommended itinerary", items: [
          "Day 1: Asakusa + Ueno (jet lag, slow walk, Senso-ji temple, Ameyoko market)",
          "Day 2: Shibuya + Harajuku + Omotesando (the crossing at night, Meiji Shrine early)",
          "Day 3: Shinjuku, full day (Tokyo Govt Building free at 6pm, Golden Gai at night)",
          "Day 4: Akihabara + Yanaka + Ueno (pop culture, historic neighborhood, museums)",
          "Day 5: Fuji-Q Highland or a Nikko day trip (weather permitting)",
        ] },
        { type: "h2", text: "The most common mistake: underestimating distances" },
        { type: "p", text: "Tokyo is enormous. Seeing Asakusa and Shibuya \"the same day\" sounds logical on the map, but each is a 40-minute metro ride. Adding Harajuku and Shinjuku to the same day is doable. Adding Akihabara is already too much to enjoy well. Fewer neighborhoods per day, more depth in each one." },
        { type: "cta", text: "Generate your personalized Tokyo itinerary →" },
      ],
    },
  },
  "bali-guia-honesta-2026": {
    en: {
      title: "Bali in 2026: what influencers don't show you (and what's actually worth it)",
      excerpt: "Bali has a perception problem: half the photos you see are real but require a 2-hour line and heavy editing. The other half of the island, the part that matters, almost nobody photographs.",
      categoryLabel: "Destinations",
      sections: [
        { type: "intro", text: "Bali has a perception problem: half the photos you see on Instagram are real, but require a 2-hour line, perfect lighting, and heavy editing. The other half of the island — the part that really matters — almost nobody photographs." },
        { type: "h2", text: "The Bali that exists before Instagram" },
        { type: "p", text: "Bali has 4 million people still practicing a unique version of Balinese Hinduism, with daily ceremonies, offerings on every corner, and temples that are actively in use. This Bali needs no filters and is walkable from any hotel. It's the part most tourists walk right past because they're in line for the swing-over-the-abyss photo." },
        { type: "h2", text: "The overrated attractions (with honesty)" },
        { type: "list", items: [
          "Lempuyang Temple gates ('Gates of Heaven'): the photo is real, the line is 2–3 hours, and there's a piece of glass underneath creating the reflection. Decide for yourself if it's worth it.",
          "Ubud Swing ('Bali Swing'): $35–50 USD for 15 minutes. The photo is pretty. The value, debatable.",
          "Tegalalang Rice Terraces: gorgeous, but in 2026 they charge IDR 50,000 entry and there are vendors every 5 meters. Still worth it — get there at 7am.",
          "Ubud Monkey Forest: the monkeys are aggressive around food and bags. Zip everything up and don't bring snacks.",
        ] },
        { type: "h2", text: "What's actually worth it (and almost nobody mentions)" },
        { type: "p", text: "Tirta Empul temple in Tampaksiring: Balinese devotees come to purify themselves in the sacred baths. You can take part (with a sarong, lent at the entrance). It's one of Bali's most authentic experiences and isn't on most tourist itineraries." },
        { type: "p", text: "Sidemen Valley: Bali's least-visited valley, with rice fields as good as Tegalalang but without the tourist infrastructure. Spending a night in Sidemen is, for many, the best memory of the trip." },
        { type: "callout", text: "Renting a scooter in Bali (~IDR 60,000/day = $4 USD) opens up destinations that are impossible by taxi. The only condition: you've ridden a scooter before. Mountain roads aren't the place to learn." },
        { type: "h2", text: "Where to stay: the trip's most important decision" },
        { type: "p", text: "Canggu is the digital nomad base and has the island's best café and surf scene, but it's lost some authenticity. Ubud is the cultural center — surrounded by nature, with cooking and yoga classes. Seminyak is the most comfortable option for families. Nusa Penida (a nearby island) is for those seeking pure nature who don't mind limited infrastructure." },
        { type: "tip", title: "Bali's seasons", text: "May to September: dry season, ideal. July and August are peak tourism (prices 30–50% higher). October to April: rainy season — the rain is heavy but short, usually in the afternoon. Still very visitable, and prices drop considerably." },
        { type: "h2", text: "Real budget for 7 days in Bali (2026)" },
        { type: "list", heading: "Estimate per person, mid-season (2026)", items: [
          "Flight from Europe or LATAM: $400–700 (the biggest expense of the trip)",
          "7 nights' accommodation (private villa or comfortable guesthouse): $150–350",
          "Food (local warung to tourist restaurant): $15–30/day",
          "Local transport (scooter or Gojek taxi app): $5–10/day",
          "Tickets and activities: $80–150 total",
          "Estimated TOTAL: $900–1,500 per person",
        ] },
        { type: "cta", text: "Generate your personalized Bali itinerary →" },
      ],
    },
  },
  "bali-desde-espana-guia-vuelos-presupuesto-visado": {
    en: {
      title: "Bali from Spain: flights, budget in euros, and visa (2026 guide)",
      excerpt: "There's no direct flight from Spain to Bali, so the trip starts with a routing decision and ends up longer and more expensive than it looks in the first search. This guide solves that: real routes, a euro budget, and the visa for Spanish citizens.",
      categoryLabel: "Destinations",
      sections: [
        { type: "intro", text: "Bali is one of the most-searched destinations from Spain, and also one with the least specific information for Spanish travelers. The reason is simple: there's no direct flight, the trip is 18 to 24 real hours of travel, and almost all the Spanish-language information about Bali is written for a generic reader, not someone flying out of Madrid or Barcelona. This guide fills those gaps." },
        { type: "h2", text: "How to get there: no direct flight — these are the real routes" },
        { type: "p", text: "No airline flies direct between Spain and Denpasar (DPS), Bali's airport. Every option has at least one layover, and the route you choose changes the price and total trip length quite a bit." },
        { type: "list", heading: "Most common layover routes from Madrid or Barcelona", items: [
          "Qatar Airways via Doha — one of the fastest connections with well-rated service; typical layover of 2-4 hours",
          "Turkish Airlines via Istanbul — usually among the cheapest options, with more weekly frequencies",
          "Emirates via Dubai — a good option if you prefer flying overnight on the long leg",
          "KLM via Amsterdam (with an additional layover in Singapore or Kuala Lumpur) — useful if you already have miles or prefer connecting legs with European airlines",
        ] },
        { type: "callout", text: "Count on 18 to 24 hours of door-to-door travel depending on the layover, and a round-trip price that ranges between €600 and €950 in mid-season, and considerably more in July-August. Booking 3-4 months ahead is where the price difference is most noticeable." },
        { type: "h2", text: "Budget in euros for a trip from Spain" },
        { type: "p", text: "Since the flight itself is already a big investment, most Spanish travelers stay between 10 and 14 days to make the trip worth it. Here's what that usually costs, per person:" },
        { type: "list", heading: "Estimate for 12 days, mid-season", items: [
          "Round-trip flight with layover: €600-950",
          "Accommodation (villa with shared pool or comfortable guesthouse): €350-600 for the 12 nights",
          "Food (from local warung to tourist restaurant): €12-25/day",
          "Local transport (rented scooter or Gojek/Grab): €4-9/day",
          "Tickets, activities, and excursions: €100-180 total",
          "Estimated TOTAL: €1,200-1,900 per person, flight included",
        ] },
        { type: "h2", text: "Visa for Spanish citizens" },
        { type: "p", text: "Spanish citizens traveling to Indonesia for tourism can generally arrange entry permission on arrival (visa on arrival) for short stays, with a cost and duration that Indonesia updates fairly often. Since this policy changes, don't treat it as final just from reading this guide: confirm the current requirement on Indonesia's official immigration website or at the consulate before buying your ticket, and carry a passport valid for at least 6 months plus proof of an onward ticket out of the country, which is usually requested on entry." },
        { type: "h2", text: "The time difference and how not to lose the first 2 days" },
        { type: "p", text: "Bali is on GMT+8 year-round (Indonesia doesn't observe daylight saving). Spain is on GMT+1 in winter and GMT+2 in summer, so the real difference is 6 hours in European winter and 7 in summer. It's not brutal jet lag, but it's enough to lose half a day if you don't plan for it: flights usually arrive in Bali in the afternoon/evening local time — the recommendation is not to schedule anything demanding for the first full day, and let your body adjust with natural light and local meal times from the very first moment." },
        { type: "h2", text: "When to go, with the Spanish calendar in mind" },
        { type: "p", text: "There's a useful coincidence here: Bali's dry season (May to September) overlaps almost completely with the European summer, so if you travel during July or August holidays the weather will cooperate — at the cost of higher prices and more tourists. If your job or studies give you flexibility, May-June or September have the same dry weather with far fewer people and better flight and accommodation prices. Easter and Christmas fall in the rainy season (October to April), which in Bali doesn't mean rain all day, but heavy, short downpours, usually in the afternoon — the trip is still very enjoyable, and prices drop noticeably." },
        { type: "tip", title: "A detail that saves time", text: "Indonesia uses the same plug type (type C/F) and voltage (230V) as Spain, so you won't need a power adapter — a small detail that's appreciated on such a long trip." },
        { type: "cta", text: "Generate your personalized Bali itinerary →" },
      ],
    },
  },
};

export function localizeBlogPost(post: BlogPost, language: string): BlogPost {
  if (language !== "en") return post;
  const overlay = blogPostsI18n[post.slug]?.en;
  if (!overlay) return post;

  return {
    ...post,
    title: overlay.title ?? post.title,
    excerpt: overlay.excerpt ?? post.excerpt,
    categoryLabel: overlay.categoryLabel ?? post.categoryLabel,
    sections: post.sections.map((section, i) => {
      const os = overlay.sections[i];
      if (!os || os.type !== section.type) return section;
      switch (section.type) {
        case "intro":
        case "h2":
        case "h3":
        case "p":
          return { ...section, text: (os as { text: string }).text ?? section.text };
        case "list": {
          const o = os as { heading?: string; items: string[] };
          return { ...section, heading: o.heading ?? section.heading, items: o.items ?? section.items };
        }
        case "callout":
          return { ...section, text: (os as { text: string }).text ?? section.text };
        case "tip": {
          const o = os as { title: string; text: string };
          return { ...section, title: o.title ?? section.title, text: o.text ?? section.text };
        }
        case "cta":
          return { ...section, text: (os as { text: string }).text ?? section.text };
        default:
          return section;
      }
    }) as ContentSection[],
  };
}
