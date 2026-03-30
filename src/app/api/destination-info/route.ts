import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { city, country, province, nationality, language, latitude, longitude } = await req.json();

    const languageLabel =
      language === "es" ? "Spanish" :
      language === "fr" ? "French" :
      language === "it" ? "Italian" :
      language === "de" ? "German" :
      language === "pt" ? "Portuguese" :
      "English";

    // Clima real desde Open-Meteo (gratis, sin key)
    let weather = null;
    try {
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode,windspeed_10m,relative_humidity_2m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=3`
      );
      const weatherData = await weatherRes.json();
      weather = {
        current: {
          temp: Math.round(weatherData.current?.temperature_2m ?? 0),
          humidity: weatherData.current?.relative_humidity_2m ?? 0,
          windspeed: Math.round(weatherData.current?.windspeed_10m ?? 0),
          code: weatherData.current?.weathercode ?? 0,
        },
        forecast: (weatherData.daily?.time ?? []).slice(0, 3).map((date: string, i: number) => ({
          date,
          max: Math.round(weatherData.daily.temperature_2m_max[i]),
          min: Math.round(weatherData.daily.temperature_2m_min[i]),
          code: weatherData.daily.weathercode[i],
        })),
      };
    } catch (e) {
      console.error("Weather error:", e);
    }

    const cityFull = `${city}${province ? `, ${province}` : ""}`;

    // Info estática via OpenAI
    const prompt = `
You are a travel assistant. Provide practical destination info for a ${nationality} traveler visiting ${cityFull}, ${country}.
Write ALL text in ${languageLabel}.
Return ONLY valid JSON. No explanations, no markdown.

{
  "travel_advisory": {
    "level": "Normal",
    "security_alerts": [],
    "health_alerts": [],
    "recommendation": "Brief overall recommendation for travelers"
  },
  "currency": {
    "local_currency": "Currency name",
    "symbol": "$",
    "exchange_tip": "Short tip about exchanging money"
  },
  "exchange_offices": [
    { "name": "Exchange office name", "address": "Address or area", "tip": "Short tip" }
  ],
  "consulate": {
    "country": "${nationality}",
    "name": "Embassy or consulate name",
    "address": "Full address",
    "phone": "+XX XXX XXX XXX",
    "website": "https://example.com",
    "note": "Short note"
  },
  "hospitals": [
    { "name": "Hospital name", "address": "Address", "phone": "+XX XXX XXX XXX", "type": "Public/Private" }
  ],
  "police": [
    { "name": "Police station name", "address": "Address", "phone": "+XX XXX XXX XXX" }
  ],
  "emergency_numbers": {
    "general": "XXX",
    "police": "XXX",
    "ambulance": "XXX",
    "fire": "XXX"
  },
  "useful_tips": [
    "Short practical tip 1",
    "Short practical tip 2",
    "Short practical tip 3"
  ]
}

Rules:
- CRITICAL LOCATION ACCURACY: All data (hospitals, police stations, exchange_offices) MUST be physically located within ${cityFull}, ${country}. Do NOT use data from nearby cities, the provincial/regional capital, or other cities in ${country}. If you are not certain a specific hospital or police station is in ${cityFull}, use a generic but accurate description (e.g. "Central police station of ${city}") rather than inventing addresses from another city.
- emergency_numbers: Use the REAL official emergency numbers for ${country}. Examples: Argentina → general 911, police 101, ambulance 107, fire 100. Chile → general 133/131, police 133, ambulance 131, fire 132. Brazil → general 190/192, police 190, ambulance 192, fire 193. EU countries → general 112. USA/Canada → general 911. Always use the country-specific numbers, never default to 112 for non-EU countries.
- travel_advisory.level: one of "Normal", "Precaución", "Alerta", "Crítico" based on actual current safety situation for ${country}/${city}. Use your knowledge of ongoing conflicts, civil unrest, terrorism risk, and crime levels.
- travel_advisory.security_alerts: array of 0–3 concise alerts about active conflicts, terrorism, civil unrest, crime, or political instability relevant to ${cityFull}, ${country}. Empty array if none. Be factual and specific (e.g. "Active armed conflict in border regions", "High petty crime in tourist areas").
- travel_advisory.health_alerts: array of 0–2 concise alerts about active disease outbreaks, endemic health risks, or required vaccinations relevant to ${country}. Empty array if none. Be factual (e.g. "Malaria risk in rural areas — prophylaxis recommended", "Yellow fever vaccination required for entry").
- travel_advisory.recommendation: 1–2 sentences summarizing the overall safety and health situation for a tourist.
- exchange_offices: 2 entries max, located in ${cityFull}
- hospitals: 2 entries max, real hospitals in ${cityFull}
- police: 1 entry, located in ${cityFull}
- useful_tips: 3 tips about safety, health, local customs
- Return ONLY the JSON object
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 1400,
      response_format: { type: "json_object" },
    });

    let text = completion.choices[0].message.content || "{}";
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();
    const info = JSON.parse(text);

    return Response.json({ weather, ...info });

  } catch (error) {
    console.error("Destination info error:", error);
    return Response.json({ error: "Error fetching destination info" }, { status: 500 });
  }
}
