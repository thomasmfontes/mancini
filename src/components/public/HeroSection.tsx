"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { brand, MENU_URL, RESERVATION_PHONE, streetArchive } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import type { ServiceStatus } from "../../types";

interface HeroSectionProps {
  service: ServiceStatus;
  onOpenReservation: () => void;
}

export function HeroSection({ service, onOpenReservation }: HeroSectionProps) {
  const { t, language } = useLanguage();

  return (
    <section className="hero" id="inicio">
      <img
        className="hero-photo"
        src={streetArchive[0].src}
        width="1800"
        height="1200"
        alt="Salão da Famiglia Mancini preparado para receber"
        fetchPriority="high"
      />
      <div className="hero-overlay" />

      <img
        className="hero-character"
        src={brand.pulcinella}
        width="272"
        height="439"
        alt="Pulcinella, personagem histórico da Famiglia Mancini"
      />

      <div className="hero-copy">
        <p className="eyebrow light">BENVENUTTI! · {t.hero.tagline.toUpperCase()}</p>
        <h1>
          {language === "pt" ? (
            <>
              A noite começa na <em>Avanhandava.</em>
            </>
          ) : (
            <>
              The night begins at <em>Avanhandava.</em>
            </>
          )}
        </h1>
        <p>{t.hero.subtitle}</p>
        <div className="hero-actions">
          <button className="button button-gold" type="button" onClick={onOpenReservation}>
            {t.hero.ctaReserve}
          </button>
          <a className="button button-outline" href="#atendimento">
            {t.hero.ctaStatus}
          </a>
          <a className="text-link light" href={MENU_URL} target="_blank" rel="noreferrer">
            {t.hero.ctaMenu}
          </a>
        </div>
      </div>

      <div className="hero-facts" aria-label="Informações rápidas">
        <div className="hero-facts-inner">
          <div>
            <small>{t.service.liveStatusTitle}</small>
            <strong>
              <i className={service.isOpen ? "status-dot" : "status-dot closed"} />
              {service.isOpen
                ? `${language === "pt" ? "Aberto até" : "Open until"} ${service.closingLabel}`
                : language === "pt"
                  ? "Fechado agora"
                  : "Closed now"}
            </strong>
          </div>
          <div>
            <small>{t.visit.addressTitle}</small>
            <strong>R. Avanhandava, 81</strong>
          </div>
          <div>
            <small>{t.footer.reservationsTitle}</small>
            <a href="tel:+551132556599">{RESERVATION_PHONE}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
