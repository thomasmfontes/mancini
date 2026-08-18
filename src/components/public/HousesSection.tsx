"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { houses } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { GalleryRail } from "../ui/GalleryRail";

export function HousesSection() {
  const { t, language } = useLanguage();

  return (
    <section className="houses section" id="casas">
      <div className="section-heading houses-heading">
        <p className="eyebrow light">{t.houses.badge}</p>
        <h2>
          {language === "pt" ? (
            <>
              Três experiências.
              <br />
              <em>Uma Famiglia.</em>
            </>
          ) : (
            <>
              Three experiences.
              <br />
              <em>One Famiglia.</em>
            </>
          )}
        </h2>
      </div>
      {houses.map((house, index) => (
        <article className="house-profile" id={house.id} key={house.id}>
          <div className="house-summary">
            <span className="house-index">0{index + 2}</span>
            <img
              src={house.logo}
              width="500"
              height="252"
              alt={house.name}
              loading="lazy"
              decoding="async"
            />
            <p className="house-since">{house.since}</p>
            <h3>{house.name}</h3>
            <p>
              {house.id === "ristorante"
                ? t.houses.ristoranteDesc
                : house.id === "pizzaria"
                  ? t.houses.pizzeriaDesc
                  : house.description}
            </p>
            <div className="house-links">
              <a href={house.phoneHref}>{house.phone}</a>
              <a href={house.menu} target="_blank" rel="noreferrer">
                {t.houses.buttonMenuPdf}
              </a>
            </div>
            <address>{house.address}</address>
          </div>
          <GalleryRail images={house.archive} label={`Galeria de ${house.name}`} tone="dark" />
        </article>
      ))}
    </section>
  );
}
