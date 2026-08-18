"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, Translations, translations } from "../constants/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
  t: translations.pt,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("mancini_lang") as Language | null;
      if (savedLang === "pt" || savedLang === "en") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore localStorage error
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en-US";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("mancini_lang", lang);
    } catch {
      // Ignore localStorage errors
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
