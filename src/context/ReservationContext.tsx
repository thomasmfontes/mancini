"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

interface ReservationContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined);

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ReservationContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservationContext() {
  const context = useContext(ReservationContext);
  if (!context) {
    throw new Error("useReservationContext must be used within a ReservationProvider");
  }
  return context;
}
