"use client";

import { FormEvent, useState } from "react";
import {
  CalligraphiaSection,
  ExperiencesSection,
  HeritageSection,
  HeroSection,
  HousesSection,
  MobileActionBar,
  ReservationModal,
  ServiceSection,
  SiteFooter,
  SiteHeader,
  StreetSection,
  TrattoriaSection,
  VisitSection,
} from "../src/components";
import { LanguageProvider } from "../src/context";
import { useMobileMenu, useRealtimeService } from "../src/hooks";
import { reservationService } from "../src/services";

function ManciniContent() {
  const {
    menuOpen,
    toggleMenu,
    closeMenu,
    menuRef,
    menuButtonRef,
    closeMenuFromKeyboard,
  } = useMobileMenu();

  const { party, incrementParty, decrementParty, service } = useRealtimeService(2);

  const [reserveOpen, setReserveOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [reservationLink, setReservationLink] = useState("");

  function openReservation() {
    setSent(false);
    setReserveOpen(true);
  }

  function closeReservation() {
    setReserveOpen(false);
    setSent(false);
  }

  function handleReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const link = reservationService.createReservationMailto({
      name: String(form.get("name") ?? ""),
      date: String(form.get("date") ?? ""),
      time: String(form.get("time") ?? ""),
      guests: String(form.get("guests") ?? party),
      phone: String(form.get("phone") ?? ""),
      email: String(form.get("email") ?? ""),
    });
    setReservationLink(link);
    setSent(true);
  }

  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>

      <SiteHeader
        menuOpen={menuOpen}
        onToggleMenu={toggleMenu}
        onCloseMenu={closeMenu}
        onOpenReservation={openReservation}
        menuRef={menuRef}
        menuButtonRef={menuButtonRef}
        onKeyDownNav={closeMenuFromKeyboard}
      />

      <div id="conteudo">
        <HeroSection service={service} onOpenReservation={openReservation} />
        <HeritageSection years={service.years} />
        <TrattoriaSection />
        <HousesSection />
        <StreetSection />
        <ServiceSection
          service={service}
          party={party}
          onIncrementParty={incrementParty}
          onDecrementParty={decrementParty}
          onOpenReservation={openReservation}
        />
        <ExperiencesSection />
        <CalligraphiaSection />
        <VisitSection />
      </div>

      <SiteFooter />

      <MobileActionBar onOpenReservation={openReservation} />

      <ReservationModal
        isOpen={reserveOpen}
        onClose={closeReservation}
        sent={sent}
        reservationLink={reservationLink}
        party={party}
        todayDate={service.today}
        onSubmit={handleReservation}
      />
    </main>
  );
}

export default function Home() {
  return (
    <LanguageProvider>
      <ManciniContent />
    </LanguageProvider>
  );
}
