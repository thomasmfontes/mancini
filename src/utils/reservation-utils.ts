import { RESERVATION_EMAIL } from "../constants/mancini-data.ts";
import type { ReservationFormData } from "../types/mancini.ts";

/**
 * Builds the pre-formatted mailto URL for table reservations.
 */
export function buildReservationMailtoLink(formData: ReservationFormData): string {
  const subject = "Solicitação de reserva — Famiglia Mancini";
  const body = [
    "Olá, equipe Famiglia Mancini!",
    "",
    "Gostaria de solicitar uma reserva com as seguintes preferências:",
    `Nome: ${formData.name}`,
    `Data: ${formData.date}`,
    `Horário: ${formData.time}`,
    `Pessoas: ${formData.guests}`,
    `Telefone: ${formData.phone}`,
    `E-mail: ${formData.email}`,
    "",
    "Aguardo a confirmação de disponibilidade. Obrigado!",
  ].join("\n");

  return `mailto:${RESERVATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Validates reservation form fields.
 */
export function validateReservationForm(formData: ReservationFormData): {
  isValid: boolean;
  errors: Partial<Record<keyof ReservationFormData, string>>;
} {
  const errors: Partial<Record<keyof ReservationFormData, string>> = {};

  if (!formData.name || formData.name.trim().length < 2) {
    errors.name = "Nome é obrigatório (mínimo 2 caracteres).";
  }

  if (!formData.date) {
    errors.date = "Data é obrigatória.";
  }

  if (!formData.time) {
    errors.time = "Horário é obrigatório.";
  }

  if (!formData.phone || formData.phone.trim().length < 8) {
    errors.phone = "Telefone para contato é obrigatório.";
  }

  if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "E-mail válido é obrigatório.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
