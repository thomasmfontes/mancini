"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { brand } from "../../constants";
import { useLanguage } from "../../context/LanguageContext";
import { LanguageSelector } from "../ui/LanguageSelector";

interface SiteHeaderProps {
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onOpenReservation: () => void;
  menuRef: React.RefObject<HTMLElement | null>;
  menuButtonRef: React.RefObject<HTMLButtonElement | null>;
  onKeyDownNav?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
}

export function SiteHeader({
  menuOpen,
  onToggleMenu,
  onCloseMenu,
  onOpenReservation,
  menuRef,
  menuButtonRef,
  onKeyDownNav,
}: SiteHeaderProps) {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.heritage, href: "#historia" },
    { label: t.nav.trattoria, href: "#trattoria" },
    { label: t.nav.houses, href: "#casas" },
    { label: t.nav.street, href: "#avanhandava" },
    { label: t.nav.service, href: "#atendimento" },
    { label: t.nav.visit, href: "#visite" },
  ];

  return (
    <header className="site-header">
      <a
        className="brand-logo"
        href="#inicio"
        aria-label="Famiglia Mancini — início"
        onClick={onCloseMenu}
      >
        <img src={brand.logo} width="202" height="73" alt="Famiglia Mancini" />
      </a>

      <button
        className={menuOpen ? "menu-scrim open" : "menu-scrim"}
        type="button"
        aria-label="Fechar menu"
        aria-hidden={!menuOpen}
        tabIndex={-1}
        onClick={onCloseMenu}
      />

      <nav
        className={menuOpen ? "nav-links open" : "nav-links"}
        aria-label="Navegação principal"
        id="site-navigation"
        ref={menuRef}
      >
        <div className="mobile-menu-meta">
          <span>Navegação</span>
          <small>Rua Avanhandava, 81</small>
        </div>

        {navItems.map(({ label, href }) => (
          <a
            href={href}
            key={href}
            onClick={onCloseMenu}
            onKeyDown={onKeyDownNav}
          >
            {label}
          </a>
        ))}

        <button
          className="mobile-reserve"
          type="button"
          onClick={() => {
            onCloseMenu();
            onOpenReservation();
          }}
        >
          {t.hero.ctaReserve}
        </button>

        <div className="mobile-menu-lang">
          <LanguageSelector className="mobile-lang-switch" />
        </div>
      </nav>

      <div className="header-actions">
        <LanguageSelector className="desktop-lang-switch" />

        <button
          className="header-cta"
          type="button"
          onClick={onOpenReservation}
        >
          {t.nav.reserve}
        </button>

        <button
          ref={menuButtonRef}
          className={menuOpen ? "menu-toggle open" : "menu-toggle"}
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={onToggleMenu}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
