export interface Itinerary {
  destination: string
  country: string
  trip_duration_days: number
  summary: string
  days: DayPlan[]
}

export interface DayPlan {
  day: number
  theme: string
  activities: Activity[]
}

export interface Activity {
  place_name: string
  short_description: string
  category: string

  location: {
    address: string
    latitude: number
    longitude: number
  }

  visit: {
    recommended_duration: string
    best_time_to_visit: string
    time_slot_type: "morning" | "afternoon" | "evening"
  }

  tickets: {
    required: boolean
    price_estimate: string
    official_website: string
  }

  booking: {
    getyourguide: string
    viator: string
  }

  media: {
    image_url: string
  }

  tips: string[]
}