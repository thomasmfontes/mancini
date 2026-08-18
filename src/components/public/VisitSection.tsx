"use client";

import React from "react";
import { MAP_URL, RESERVATION_PHONE } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";

export function VisitSection() {
  const { t, language } = useLanguage();
  const WAZE_URL = "https://www.waze.com/ul?ll=-23.553759,-46.649646&navigate=yes";

  return (
    <section className="visit" id="visite">
      <div className="visit-info">
        <p className="eyebrow">{t.visit.badge}</p>
        <h2>
          Famiglia Mancini
          <br />
          <em>Trattoria.</em>
        </h2>
        <address className="visit-address">
          <strong>Rua Avanhandava, 81</strong>
          <span>Bela Vista · São Paulo — SP</span>
          <span className="valet-tag">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C2.1 11 2 11.5 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>
            {language === "pt" ? "Serviço de Valet & Manobrista no local" : "On-site Valet Parking Service"}
          </span>
        </address>

        <div className="hours">
          <div>
            <span>{language === "pt" ? "Segunda a quarta" : "Monday to Wednesday"}</span>
            <strong>11h30 — 23h</strong>
          </div>
          <div>
            <span>{language === "pt" ? "Quinta a sábado" : "Thursday to Saturday"}</span>
            <strong>11h30 — 00h</strong>
          </div>
          <div>
            <span>{language === "pt" ? "Domingo" : "Sunday"}</span>
            <strong>11h30 — 23h</strong>
          </div>
          <small>
            {language === "pt"
              ? "Horários sujeitos a alteração em feriados."
              : "Hours may vary on holidays."}
          </small>
        </div>

        <div className="visit-actions">
          <div className="visit-route-buttons">
            <a className="button button-wine" href={MAP_URL} target="_blank" rel="noreferrer">
              {language === "pt" ? "Abrir no Google Maps" : "Open in Google Maps"}
            </a>
            <a className="button button-outline-dark" href={WAZE_URL} target="_blank" rel="noreferrer">
              {language === "pt" ? "Abrir no Waze" : "Open in Waze"}
            </a>
          </div>
          <div className="visit-contact-line">
            <small>{t.footer.reservationsTitle}</small>
            <a href="tel:+551132556599">{RESERVATION_PHONE}</a>
          </div>
        </div>
      </div>

      <div className="map-wrap">
        <iframe
          title="Mapa interativo da Famiglia Mancini na Rua Avanhandava"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4086776859345!2d-46.64964652378419!3d-23.55375937880479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584cf371a77d%3A0x309090794eee79c8!2sFamiglia%20Mancini%20Trattoria!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="map-floating-card">
          <div className="map-card-header">
            <div className="map-pin-icon">📍</div>
            <div>
              <strong>Famiglia Mancini Trattoria</strong>
              <span>R. Avanhandava, 81 · Bela Vista, SP</span>
            </div>
          </div>
          <div className="map-card-rating">
            <span className="stars">★★★★★</span>
            <strong>4.7</strong>
            <small>{language === "pt" ? "(+28.500 avaliações no Google)" : "(+28,500 Google reviews)"}</small>
          </div>
          <div className="map-card-actions">
            <a href={MAP_URL} target="_blank" rel="noreferrer" className="map-action-pill">
              Google Maps
            </a>
            <a href={WAZE_URL} target="_blank" rel="noreferrer" className="map-action-pill">
              Waze
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
