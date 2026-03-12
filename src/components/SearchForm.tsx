/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { GeocoderAutocomplete } from "@geoapify/geocoder-autocomplete";

export default function SearchForm() {

  const [destination, setDestination] = useState("");
  const [itinerary, setItinerary] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const autocomplete = new GeocoderAutocomplete(
      document.getElementById("autocomplete") as HTMLElement,
      process.env.NEXT_PUBLIC_GEOAPIFY_KEY as string,
      {
        type: "city"
      }
    );

    autocomplete.on("select", (location: any) => {

      const city = location.properties.city;
      const country = location.properties.country;

      setDestination(`${city}, ${country}`);

    });

  }, []);

  async function generateTrip() {

    if (!destination) return;

    setLoading(true);

    try {

      const res = await fetch("/api/generate-itinerary", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          destination: destination
        })
      });

      const data = await res.json();

      setItinerary(data);

    } catch (error) {

      console.error("Error generating itinerary:", error);

    } finally {

      setLoading(false);

    }

  }

  return (

    <div className="max-w-5xl mx-auto p-6">

      <div className="text-center mb-14">

        <h1 className="text-4xl font-bold text-black">
          Global Home Assist
        </h1>

        <p className="text-gray-500 mt-2">
          AI Powered Travel Planner
        </p>

      </div>

      <div className="flex gap-3 mb-14">

        <div
          id="autocomplete"
          className="w-full"
        ></div>

        <button
          onClick={generateTrip}
          disabled={loading}
          className="bg-black text-white px-6 rounded-lg shadow hover:bg-gray-800 disabled:bg-gray-400"
        >
          {loading ? "Generating..." : "Generate"}
        </button>

      </div>

      {itinerary && itinerary.days && (

        <div className="space-y-14">

          {itinerary.days.map((day: any, index: number) => (

            <div key={index}>

              <h2 className="text-2xl font-semibold mb-8 text-black">
                Day {day.day}
              </h2>

              <div className="space-y-6">

                {day.places.map((place: any, i: number) => (

                  <div
                    key={i}
                    className="flex bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                  >

                    <div className="flex-1 p-6">

                      <h3 className="text-xl font-semibold text-black mb-2">
                        {place.name}
                      </h3>

                      <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">

                        {place.category && (
                          <span className="bg-gray-100 px-2 py-1 rounded">
                            {place.category}
                          </span>
                        )}

                        {place.duration && (
                          <span className="bg-gray-100 px-2 py-1 rounded">
                            {place.duration}
                          </span>
                        )}

                        {place.bestTime && (
                          <span className="bg-gray-100 px-2 py-1 rounded">
                            {place.bestTime}
                          </span>
                        )}

                      </div>

                      <p className="text-gray-600 text-sm mb-3">
                        {place.description}
                      </p>

                      {place.tags && (
                        <div className="flex flex-wrap gap-2 mb-3">

                          {place.tags.map((tag: any, t: number) => (
                            <span
                              key={t}
                              className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded"
                            >
                              {tag}
                            </span>
                          ))}

                        </div>
                      )}

                      {place.tip && (
                        <p className="text-xs text-gray-500 italic mb-3">
                          Tip: {place.tip}
                        </p>
                      )}

                      {place.price && (
                        <p className="text-sm text-gray-700 mb-3">
                          💰 Entry: {place.price}
                        </p>
                      )}

                      <div className="flex items-center gap-4 mt-2">

                        {place.bookingLink && (
                          <a
                            href={place.bookingLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                          >
                            Book tickets
                          </a>
                        )}

                        {place.officialLink && (
                          <a
                            href={place.officialLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-gray-400 hover:text-gray-600"
                          >
                            official website
                          </a>
                        )}

                      </div>

                    </div>

                    {place.image && (
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-48 object-cover"
                      />
                    )}

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

}