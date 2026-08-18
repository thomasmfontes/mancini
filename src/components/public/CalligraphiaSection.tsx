"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { artArchive } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";

export function CalligraphiaSection() {
  const { t, language } = useLanguage();

  return (
    <section className="calligraphia section" id="calligraphia">
      <div className="calligraphia-copy">
        <p className="eyebrow">{t.calligraphia.badge}</p>
        <h2>{t.calligraphia.title}</h2>
        <p className="calligraphia-lead">
          {language === "pt" ? "Loja de arte e galeria." : "Art gallery and boutique."}
        </p>
        <p>{t.calligraphia.paragraph}</p>
        <div className="contact-line vertical">
          <span>
            <small>{t.visit.addressTitle}</small>R. Avanhandava, 40
          </span>
          <a href="tel:+551131516477">
            <small>{language === "pt" ? "Telefone" : "Phone"}</small>(11) 3151-6477
          </a>
        </div>
      </div>
      <div
        className="art-mosaic"
        role="region"
        aria-label="Galeria virtual Calligraphia"
        tabIndex={0}
      >
        {artArchive.map((image, index) => (
          <figure key={image.src}>
            <img
              src={image.src}
              width="900"
              height="1200"
              alt={image.alt}
              loading="lazy"
              decoding="async"
            />
            <figcaption>0{index + 1}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
