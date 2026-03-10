export function buildPrompt(destination: string) {

return `
You are a professional travel planner.

Create a high quality travel itinerary for ${destination}.

Return ONLY valid JSON.

Structure:

{
 "days":[
  {
   "day":1,
   "places":[
    {
     "name":"",
     "description":"",
     "category":"",
     "duration":"",
     "bestTime":"",
     "price":"",
     "rating":"",
     "crowdLevel":"",
     "tags":[],
     "tip":"",
     "coordinates":{
       "lat":0,
       "lng":0
     },
     "officialLink":"",
     "bookingLink":""
    }
   ]
  }
 ]
}

Rules:

- description must be 1 short sentence
- category examples: Museum, Landmark, Restaurant, Park, Neighborhood, Viewpoint
- duration examples: 30 min, 1 hour, 2-3 hours
- bestTime examples: Morning, Afternoon, Evening, Sunset
- price must include currency if applicable (example: €17 or Free)
- rating must be between 4.0 and 5.0
- crowdLevel must be Low, Medium, or High
- tags must contain 3 keywords
- tip must be a useful insider travel tip
- coordinates must be realistic for the location
- officialLink must be the official website if known
- bookingLink must be a page where users can buy tickets if applicable

Important:
Return ONLY JSON. Do not include explanations or markdown.
`;
}