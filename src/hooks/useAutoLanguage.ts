"use client";

import { useState, useEffect } from "react";

const SUPPORTED_LANGUAGES = ["es", "en", "fr", "it", "de", "pt"];

// Always starts as "es" to match SSR output (navigator.language isn't
// available on the server), then corrects to the real browser language
// after mount — same hydration-safe pattern used in SearchForm.tsx.
export function useAutoLanguage() {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (browserLang && browserLang !== "es" && SUPPORTED_LANGUAGES.includes(browserLang)) {
      setLanguage(browserLang);
    }
  }, []);

  return [language, setLanguage] as const;
}
