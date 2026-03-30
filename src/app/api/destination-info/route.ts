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

    // Cuando ciudad y provincia tienen el mismo nombre (ej: "Santa Fe", "Santa Fe")
    // el modelo puede confundirlos. Siempre usamos las coordenadas como ancla de verdad.
    const cityIsProvince = province && city.trim().toLowerCase() === province.trim().toLowerCase();
    const cityFull = `${city}${province && !cityIsProvince ? `, ${province}` : ""}`;

    // Info estática via OpenAI
    const prompt = `
You are a travel assistant. Provide practical destination info for a ${nationality} traveler.

TARGET CITY (selected via GPS autocomplete — treat this as ground truth):
  City: ${city}
  ${province ? `Province/State: ${province}` : ""}
  Country: ${country}
  GPS coordinates: ${latitude}, ${longitude}
${cityIsProvince ? `
IMPORTANT DISAMBIGUATION: The city name "${city}" is the same as the province name "${province}".
You must provide information ONLY for the CITY of ${city} (the urban municipality at coordinates ${latitude},${longitude}), NOT for the province of ${province} as a whole.
The city of ${city} and the province of ${province} are DIFFERENT things — the city is a single municipality within the province.
` : ""}
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
- CRITICAL LOCATION ACCURACY: All data (hospitals, police stations, exchange_offices) MUST be physically located in the urban area of ${city}, ${country}, near GPS coordinates ${latitude},${longitude}. The GPS coordinates are the definitive reference — any place that is not within the city at those coordinates is WRONG. Do NOT use data from nearby cities or other cities in the same province/region.
- If you are not certain a specific hospital or institution is in the city of ${city} (not just anywhere in the province), describe it generically rather than inventing a wrong address.
- emergency_numbers: Use the REAL official emergency numbers for ${country}. Argentina → 911 (general), 101 (police), 107 (ambulance), 100 (fire). Chile → 133 (police), 131 (ambulance), 132 (fire). Brazil → 190 (police), 192 (ambulance), 193 (fire). EU countries → 112. USA/Canada → 911. Never default to 112 for non-EU countries.
- travel_advisory.level: one of "Normal", "Precaución", "Alerta", "Crítico".
- travel_advisory.security_alerts: 0–3 factual alerts specific to ${city}, ${country}. Empty array if none.
- travel_advisory.health_alerts: 0–2 factual alerts. Empty array if none.
- travel_advisory.recommendation: 1–2 sentences for a tourist.
- exchange_offices: 2 entries max, in the city of ${city}
- hospitals: 2 entries max, in the city of ${city}
- police: 1 entry, in the city of ${city}
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
