"use client";

import React from "react";
import { RESERVATION_PHONE } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";

interface MobileActionBarProps {
  onOpenReservation: () => void;
}

export function MobileActionBar({ onOpenReservation }: MobileActionBarProps) {
  const { t } = useLanguage();

  return (
    <nav className="mobile-action-bar" aria-label="Ações rápidas">
      <button type="button" onClick={onOpenReservation}>
        {t.mobileBar.reserve}
      </button>
      <a href="tel:+551132556599" aria-label={`Ligar para reservas no número ${RESERVATION_PHONE}`}>
        {t.mobileBar.call}
      </a>
    </nav>
  );
}
