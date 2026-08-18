"use client";

import React from "react";
import { RESERVATION_EMAIL, RESERVATION_PHONE } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import type { ServiceStatus } from "../../types";

interface ServiceSectionProps {
  service: ServiceStatus;
  party: number;
  onIncrementParty: () => void;
  onDecrementParty: () => void;
  onOpenReservation: () => void;
}

export function ServiceSection({
  service,
  party,
  onIncrementParty,
  onDecrementParty,
  onOpenReservation,
}: ServiceSectionProps) {
  const { t, language } = useLanguage();

  return (
    <section className="service section" id="atendimento">
      <div className="section-heading service-heading">
        <p className="eyebrow">{t.service.badge}</p>
        <h2>
          {language === "pt" ? (
            <>
              Seu lugar
              <br />
              <em>à mesa.</em>
            </>
          ) : (
            <>
              Your place
              <br />
              at the <em>table.</em>
            </>
          )}
        </h2>
        <p>{t.service.lead}</p>
      </div>
      <div className="service-grid">
        <article className="status-card" aria-live="polite">
          <div className="card-top">
            <span>
              <i className={service.isOpen ? "status-dot" : "status-dot closed"} />
              {language === "pt" ? "AGORA EM SÃO PAULO" : "NOW IN SÃO PAULO"}
            </span>
            <small>
              {language === "pt" ? "Atualizado às" : "Updated at"} {service.time}
            </small>
          </div>
          <div className="status-card-body">
            <div className="status-overview">
              <span>{t.service.liveStatusTitle}</span>
              <strong>
                {service.isOpen
                  ? language === "pt"
                    ? "Aberto"
                    : "Open"
                  : language === "pt"
                    ? "Fechado"
                    : "Closed"}
              </strong>
              <p>
                {service.isOpen
                  ? `${language === "pt" ? "Atendimento até" : "Service until"} ${service.closingLabel}. ${language === "pt" ? "A espera varia ao longo da noite; confirme com a equipe antes de vir." : "Wait time varies through the evening; please confirm with our staff."}`
                  : language === "pt"
                    ? "A casa abre às 11h30. Você já pode preparar sua solicitação de reserva."
                    : "Doors open at 11:30 AM. You can submit your reservation request in advance."}
              </p>
            </div>
            <div className="queue-panel">
              <label htmlFor="party-size">{t.service.partySizeLabel}</label>
              <div className="party-selector" id="party-size">
                <button
                  type="button"
                  onClick={onDecrementParty}
                  aria-label={language === "pt" ? "Diminuir número de pessoas" : "Decrease party size"}
                >
                  −
                </button>
                <strong>
                  {party}
                  <small>
                    {party === 1
                      ? language === "pt"
                        ? " pessoa"
                        : " guest"
                      : language === "pt"
                        ? " pessoas"
                        : " guests"}
                  </small>
                </strong>
                <button
                  type="button"
                  onClick={onIncrementParty}
                  aria-label={language === "pt" ? "Aumentar número de pessoas" : "Increase party size"}
                >
                  +
                </button>
              </div>
              <a className="button button-gold" href="tel:+551132556599">
                {language === "pt" ? "Ligar e consultar" : "Call front desk"}
              </a>
              <p className="honesty-note">{t.service.queueAdvice}</p>
            </div>
          </div>
        </article>
        <article className="reservation-card">
          <span>{t.service.directReservationTitle}</span>
          <h3>{language === "pt" ? "Prepare sua solicitação." : "Plan your experience."}</h3>
          <p>{t.service.directReservationSubtitle}</p>
          <button className="button button-gold" type="button" onClick={onOpenReservation}>
            {t.hero.ctaReserve}
          </button>
          <div className="reservation-direct">
            <a href={`mailto:${RESERVATION_EMAIL}`}>{RESERVATION_EMAIL}</a>
            <a href="tel:+551132556599">{RESERVATION_PHONE}</a>
          </div>
        </article>
      </div>
    </section>
  );
}
