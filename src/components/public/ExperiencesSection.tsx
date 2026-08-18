"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { brand, DELIVERY_URL, RESERVATION_EMAIL, streetArchive } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";

export function ExperiencesSection() {
  const { t, language } = useLanguage();

  return (
    <section className="experiences section" id="experiencias">
      <div className="section-heading split-heading compact">
        <div>
          <p className="eyebrow">{t.experiences.badge}</p>
          <h2>
            {language === "pt" ? (
              <>
                Mais motivos para
                <br />
                <em>celebrar.</em>
              </>
            ) : (
              <>
                More reasons to
                <br />
                <em>celebrate.</em>
              </>
            )}
          </h2>
        </div>
        <p>{t.experiences.lead}</p>
      </div>
      <div
        className="experience-grid"
        role="region"
        aria-label="Experiências da Famiglia Mancini"
        tabIndex={0}
      >
        <article className="experience-card event-experience">
          <img
            src={streetArchive[4].src}
            width="1800"
            height="1200"
            alt="Celebração na Rua Avanhandava"
            loading="lazy"
            decoding="async"
          />
          <div>
            <span>{language === "pt" ? "Eventos" : "Events"}</span>
            <h3>
              {language === "pt"
                ? "Faça seu evento na Avanhandava"
                : "Host your private event at Avanhandava"}
            </h3>
            <p>
              {language === "pt"
                ? "Celebre momentos especiais em um dos endereços mais charmosos de São Paulo. Seja casamento, aniversário, confraternização ou eventos corporativos, o Grupo Mancini conta com o ambiente ideal para a sua ocasião."
                : "Celebrate memorable moments at one of São Paulo's most charming landmarks. Weddings, birthdays, and corporate dinners tailored with authentic Italian flavor."}
            </p>
            <a href={`mailto:${RESERVATION_EMAIL}?subject=Evento na Avanhandava`}>
              {language === "pt" ? "Planejar evento" : "Plan an event"}
            </a>
          </div>
        </article>
        <article className="experience-card gift-experience">
          <img
            src={brand.gift}
            width="620"
            height="500"
            alt="Gift Card Famiglia Mancini"
            loading="lazy"
            decoding="async"
          />
          <div>
            <span>Gift Card</span>
            <h3>
              {language === "pt"
                ? "Presenteie com uma experiência"
                : "Gift an unforgettable dining experience"}
            </h3>
            <p>
              {language === "pt"
                ? "Com o Gift Card Famiglia Mancini, você oferece momentos especiais em nossos restaurantes. Escolha o valor e surpreenda alguém com uma experiência inesquecível na Rua Avanhandava."
                : "With the Famiglia Mancini Gift Card, share joyous moments in our restaurants. Surprise family, friends, or associates with Italian hospitality."}
            </p>
            <a href={`mailto:${RESERVATION_EMAIL}?subject=Gift Card Famiglia Mancini`}>
              {language === "pt" ? "Quero presentear" : "Purchase a gift card"}
            </a>
          </div>
        </article>
        <article className="experience-card delivery-experience">
          <div className="delivery-logos">
            <img
              src={brand.delivery}
              width="331"
              height="140"
              alt="Delivery Famiglia Mancini"
              loading="lazy"
              decoding="async"
            />
            <img
              src={brand.keeta}
              width="150"
              height="144"
              alt="Keeta"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div>
            <span>Delivery</span>
            <h3>
              {language === "pt"
                ? "Deguste nossas pizzas em casa"
                : "Enjoy our artisanal pizzas at home"}
            </h3>
            <p>{language === "pt" ? "Diariamente, das 18h às 23h." : "Daily, from 6:00 PM to 11:00 PM."}</p>
            <a href={DELIVERY_URL} target="_blank" rel="noreferrer">
              {language === "pt" ? "Pedir pela Keeta" : "Order on Keeta"}
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
