// src/lib/utils.ts

// ===============================
// NORMALIZADOR UNIVERSAL
// ===============================

export function normalizeText(text: string): string {
  if (!text || typeof text !== "string") return ""

  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // elimina tildes
    .replace(/[^\w\s]/gi, "")       // elimina símbolos
    .replace(/\s+/g, " ")           // colapsa espacios múltiples
    .trim()
}