"use client";

import React, { FormEvent, useEffect, useRef } from "react";
import { RESERVATION_PHONE } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { useModalTrap } from "../../hooks/useModalTrap";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  sent: boolean;
  reservationLink: string;
  party: number;
  todayDate: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function ReservationModal({
  isOpen,
  onClose,
  sent,
  reservationLink,
  party,
  todayDate,
  onSubmit,
}: ReservationModalProps) {
  const { t, language } = useLanguage();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);

  const { dialogRef } = useModalTrap({
    isOpen,
    onClose,
    initialFocusRef: firstFieldRef,
  });

  useEffect(() => {
    if (sent) {
      successRef.current?.focus();
    }
  }, [sent]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <section
        className="reservation-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="reservation-title"
        ref={dialogRef}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          aria-label={language === "pt" ? "Fechar reserva" : "Close modal"}
        >
          ×
        </button>

        {!sent ? (
          <>
            <p className="eyebrow">{t.nav.reserve}</p>
            <h2 id="reservation-title">{t.modal.title}</h2>
            <p>{t.modal.subtitle}</p>
            <form onSubmit={onSubmit}>
              <label>
                {t.modal.nameLabel}
                <input
                  ref={firstFieldRef}
                  name="name"
                  required
                  autoComplete="name"
                  placeholder={t.modal.namePlaceholder}
                />
              </label>
              <div className="form-row">
                <label>
                  {t.modal.dateLabel}
                  <input name="date" required type="date" min={todayDate} />
                </label>
                <label>
                  {t.modal.timeLabel}
                  <select name="time" defaultValue="20:00">
                    <option>12:00</option>
                    <option>13:30</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:30</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  {t.modal.partyLabel}
                  <select name="guests" defaultValue={party}>
                    {Array.from({ length: 12 }, (_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  {t.modal.phoneLabel}
                  <input
                    name="phone"
                    required
                    type="tel"
                    autoComplete="tel"
                    placeholder={t.modal.phonePlaceholder}
                  />
                </label>
              </div>
              <label>
                {t.modal.emailLabel}
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  placeholder={t.modal.emailPlaceholder}
                />
              </label>
              <button className="button button-wine" type="submit">
                {t.modal.submitButton}
              </button>
            </form>
          </>
        ) : (
          <div className="success-state">
            <span aria-hidden="true">✓</span>
            <p className="eyebrow">{language === "pt" ? "Solicitação pronta" : "Request Ready"}</p>
            <h2 ref={successRef} tabIndex={-1}>
              {language === "pt" ? "Último passo" : "Final Step"}
            </h2>
            <p>
              {language === "pt"
                ? "Abra seu aplicativo de e-mail e envie a mensagem preparada. A reserva será confirmada após o retorno da equipe."
                : "Open your email app and send the prepared message. Your reservation will be confirmed once our team replies."}
            </p>
            <a className="button button-wine" href={reservationLink}>
              {language === "pt" ? "Abrir e-mail preenchido" : "Open prepared email"}
            </a>
            <a href="tel:+551132556599">
              {language === "pt" ? `ou ligue ${RESERVATION_PHONE}` : `or call ${RESERVATION_PHONE}`}
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
