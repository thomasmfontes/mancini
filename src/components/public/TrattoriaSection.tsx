"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { brand, famigliaArchive, MENU_URL } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { GalleryRail } from "../ui/GalleryRail";

export function TrattoriaSection() {
  const { t, language } = useLanguage();

  return (
    <section className="trattoria section" id="trattoria">
      <div className="section-heading split-heading">
        <div>
          <p className="eyebrow">{t.trattoria.badge}</p>
          <h2>
            {language === "pt" ? (
              <>
                A fartura é parte
                <br />
                do <em>ritual.</em>
              </>
            ) : (
              <>
                Abundance is part
                <br />
                of the <em>ritual.</em>
              </>
            )}
          </h2>
        </div>
        <div className="section-intro">
          <img
            src={brand.medallion}
            width="206"
            height="203"
            alt="Logo medalhão Famiglia Mancini"
            loading="lazy"
            decoding="async"
          />
          <p>{t.trattoria.lead}</p>
        </div>
      </div>
      <div className="antipasti-callout">
        <span>{t.trattoria.antipastiBannerTitle}</span>
        <strong>{language === "pt" ? "Mais de 70 opções" : "Over 70 Selections"}</strong>
        <small>{t.trattoria.antipastiBannerSubtitle}</small>
        <a href={MENU_URL} target="_blank" rel="noreferrer">
          {t.trattoria.buttonMenu}
        </a>
      </div>
      <div className="archive-heading">
        <span>{language === "pt" ? "Acervo gastronômico" : "Gastronomic collection"}</span>
        <small>{language === "pt" ? "Navegue pelo acervo" : "Browse gallery"}</small>
      </div>
      <GalleryRail images={famigliaArchive} label="Galeria gastronômica da Famiglia Mancini" />
      <div className="contact-line">
        <span>
          <small>{t.visit.addressTitle}</small>R. Avanhandava, 81
        </span>
        <a href="tel:+551132564320">
          <small>{language === "pt" ? "Telefone da casa" : "House phone"}</small>(11) 3256-4320
        </a>
        <a href={MENU_URL} target="_blank" rel="noreferrer">
          <small>{language === "pt" ? "Cardápio" : "Menu"}</small>
          {language === "pt" ? "Abrir PDF" : "Open PDF"}
        </a>
      </div>
    </section>
  );
}
