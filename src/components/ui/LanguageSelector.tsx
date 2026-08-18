"use client";

import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function LanguageSelector({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`lang-switch-wrapper ${className}`}
      role="group"
      aria-label="Selecionar idioma / Select language"
    >
      <Globe className="lang-icon" aria-hidden="true" />
      <button
        type="button"
        onClick={() => setLanguage("pt")}
        className={`lang-btn ${language === "pt" ? "active" : ""}`}
        aria-pressed={language === "pt"}
        aria-label="Português"
      >
        PT
      </button>
      <span className="lang-divider" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`lang-btn ${language === "en" ? "active" : ""}`}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  );
}
