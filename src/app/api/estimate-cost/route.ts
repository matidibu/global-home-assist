import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  try {
    const { city, country, province, days, style, travelers, language } = await req.json();

    if (!city || !country || !days || !style) {
      return Response.json({ error: "Faltan datos para estimar el costo." }, { status: 400 });
    }

    const languageLabel =
      language === "es" ? "Spanish" :
      language === "fr" ? "French" :
      language === "it" ? "Italian" :
      language === "de" ? "German" :
      language === "pt" ? "Portuguese" :
      "English";

    const cityFull = province ? `${city}, ${province}, ${country}` : `${city}, ${country}`;
    const styleLabel =
      style === "mochilero" ? "backpacker/budget" :
      style === "confort" ? "comfort/upscale" :
      "mid-range";
    const travelerCount = Number(travelers) > 0 ? Number(travelers) : 1;

    const prompt = `
You are a travel budgeting expert. Estimate a realistic travel budget for a trip to ${cityFull}.

Trip details:
  Duration: ${days} days
  Travelers: ${travelerCount} ${travelerCount === 1 ? "person" : "people"}
  Style: ${styleLabel}

Write ALL text in ${languageLabel}.
Return ONLY valid JSON. No explanations, no markdown.

{
  "categories": {
    "alojamiento": { "range": "$X–Y", "note": "Short note on typical options at this style" },
    "comida": { "range": "$X–Y", "note": "Short note" },
    "transporte_local": { "range": "$X–Y", "note": "Short note" },
    "actividades": { "range": "$X–Y", "note": "Short note" }
  },
  "total_estimate": { "range": "$X–Y", "per_day_per_person": "$X–Y" },
  "saving_tips": ["Tip 1 specific to ${city}", "Tip 2", "Tip 3"]
}

Rules:
- All figures in USD, for the FULL trip (${days} days, ${travelerCount} traveler(s) combined), except per_day_per_person which is per person per day.
- Ranges must be realistic and specific to ${city}, ${country} at a ${styleLabel} level — not generic global averages.
- CRITICAL: prices vary constantly due to inflation and seasonality — give ranges, never a single exact number, and do not claim precision you don't have.
- saving_tips: 3 concrete, destination-specific tips (not generic "book in advance" filler).
- Return ONLY the JSON object.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
      max_tokens: 1200,
      response_format: { type: "json_object" },
    });

    let text = completion.choices[0].message.content || "{}";
    text = text.replace(/```json/g, "").replace(/```/g, "").trim();

    let estimate;
    try {
      estimate = JSON.parse(text);
    } catch (parseErr) {
      console.error("[estimate-cost] JSON parse failed:", text.substring(0, 200));
      return Response.json({ error: "No se pudo estimar el costo. Intenta de nuevo." }, { status: 500 });
    }

    return Response.json(estimate);

  } catch (error) {
    const msg = error instanceof Error ? error.message : "Error desconocido";
    console.error("[estimate-cost]", msg);
    return Response.json({ error: "No se pudo estimar el costo. Intenta de nuevo más tarde." }, { status: 500 });
  }
}
