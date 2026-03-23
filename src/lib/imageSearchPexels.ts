/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Reject photos whose alt text describes a portrait or a small group of people
 * as the main subject. Crowds at landmarks (gentíos) are fine.
 */
const PERSON_ALT_PATTERN = /\b(portrait|headshot|selfie|close.?up of (a |the )?(man|woman|person|girl|boy|people)|smiling (man|woman|person|couple)|posing (man|woman|couple)|a (man|woman) (standing|sitting|holding|wearing|looking)|couple (standing|sitting|posing)|two people|three people|four people)\b/i;

export async function searchImagePexels(query: string) {
  try {
    const apiKey = process.env.PEXELS_API_KEY || "";
    if (!apiKey) {
      console.error("Pexels API key is missing");
      return "/placeholder.jpg";
    }
    const res = await fetch(
      `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=8`,
      {
        headers: {
          Authorization: apiKey
        }
      }
    );
    const data = await res.json();
    if (!data.photos || data.photos.length === 0) {
      return "/placeholder.jpg";
    }

    // Prefer photos that don't depict a portrait or small group of people
    const safePhoto = data.photos.find(
      (p: any) => !PERSON_ALT_PATTERN.test(p.alt ?? "")
    ) ?? data.photos[0];

    return safePhoto.src.medium;
  } catch {
    return "/placeholder.jpg";
  }
}
