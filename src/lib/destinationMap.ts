// src/lib/destinationMap.ts

export type DestinationEntry = {
  priority: number
  keywords: string[]
  images: string[]
}

export const destinationMap: DestinationEntry[] = [

  {
    priority: 1,
    keywords: ["colosseum", "coliseo"],
    images: [
      "Italy/Rome-Colosseum1",
      "Italy/Rome-Colosseum2",
      "Italy/Rome-Colosseum3"
    ]
  },

  {
    priority: 1,
    keywords: ["trevi", "fontana di trevi"],
    images: [
      "Italy/Rome-Fontana-di-Trevi1",
      "Italy/Rome-Fontana-di-Trevi2",
      "Italy/Rome-Fontana-di-Trevi3"
    ]
  },

  {
    priority: 1,
    keywords: ["pantheon", "panteon"],
    images: [
      "Italy/Rome-Pantheon1"
    ]
  },

  {
    priority: 1,
    keywords: ["vatican", "vaticano"],
    images: [
      "Italy/Vatican-Exterior1",
      "Italy/Vatican-Exterior2",
      "Italy/Vatican-Exterior3",
      "Italy/Vatican-Exterior4",
      "Italy/Vatican-Interior1",
      "Italy/Vatican-Interior2",
      "Italy/Basilica-San-Pietro1"
    ]
  },

  {
    priority: 1,
    keywords: ["florence", "firenze"],
    images: [
      "Italy/Florence-Duomo1",
      "Italy/Florence-Exterior1",
      "Italy/Florence-Ponte-Vecchio1",
      "Italy/Florence-Ponte-Vecchio2"
    ]
  },

  {
    priority: 1,
    keywords: ["pisa"],
    images: [
      "Italy/Pisa-tower1",
      "Italy/Pisa-tower2"
    ]
  },

  {
    priority: 1,
    keywords: ["venice", "venezia"],
    images: [
      "Italy/Venice-Gondola1",
      "Italy/Venice-Gondola2",
      "Italy/Venice-Gondola3",
      "Italy/Venice-Gondola4",
      "Italy/Venice-Piazza-San-Marco"
    ]
  },

  {
    priority: 1,
    keywords: ["tuscany", "toscana"],
    images: [
      "Italy/Toscana-Winery1",
      "Italy/Toscane1"
    ]
  },

  {
    priority: 1,
    keywords: ["amalfi", "amalfitana"],
    images: [
      "Italy/Costa-Amalfitana1"
    ]
  }

]