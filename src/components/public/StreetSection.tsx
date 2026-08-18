"use client";

import React from "react";
import { streetArchive } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { GalleryRail } from "../ui/GalleryRail";

export function StreetSection() {
  const { t, language } = useLanguage();

  return (
    <section className="street section" id="avanhandava">
      <div className="street-copy">
        <p className="eyebrow light">Rua Avanhandava · {t.street.badge}</p>
        <h2>
          {language === "pt" ? (
            <>
              A rua que
              <br />
              virou <em>destino.</em>
            </>
          ) : (
            <>
              The street that
              <br />
              became a <em>destination.</em>
            </>
          )}
        </h2>
        <div className="street-narrative">
          <p className="street-lead">{t.street.lead}</p>
          <p>{t.street.paragraph}</p>
        </div>
      </div>
      <GalleryRail
        images={streetArchive}
        label="Galeria de ambientes e eventos na Rua Avanhandava"
        tone="dark"
      />
    </section>
  );
}
