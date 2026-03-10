// src/lib/getDestinationImages.ts

import { normalizeText } from "./utils"
import { destinationMap } from "./destinationMap"

export function getDestinationImages(text: string): string[] {

  const normalized = normalizeText(text)

  if (!normalized) {
    return ["Generic-Travel"]
  }

  for (const destination of destinationMap) {
    for (const keyword of destination.keywords) {
      if (normalized.includes(keyword)) {
        return destination.images
      }
    }
  }

  return ["Generic-Travel"]
}