"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { brand } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";

interface HeritageSectionProps {
  years: number;
}

export function HeritageSection({ years }: HeritageSectionProps) {
  const { t, language } = useLanguage();

  return (
    <section className="heritage section" id="historia">
      <div className="heritage-poster">
        <img
          src={brand.poster}
          width="1800"
          height="824"
          alt="Cartaz ilustrado da Rua Avanhandava e das casas Mancini"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="heritage-copy">
        <p className="eyebrow">{t.heritage.badge}</p>
        <h2>{t.heritage.title}</h2>
        <p className="lead">{t.heritage.lead}</p>
        <p>{t.heritage.paragraph}</p>
        <div className="heritage-numbers">
          <div>
            <strong>1980</strong>
            <span>{language === "pt" ? "o começo de tudo" : "where it all began"}</span>
          </div>
          <div>
            <strong>
              {years} {t.heritage.statYearsSuffix}
            </strong>
            <span>{language === "pt" ? "de histórias à mesa" : "of dining memories"}</span>
          </div>
          <div>
            <strong>{t.heritage.statGuestsValue}</strong>
            <span>{language === "pt" ? "de pessoas recebidas" : "guests welcomed"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
