import type { ReservationFormData } from "../types";
import { buildReservationMailtoLink, validateReservationForm } from "../utils";

export const reservationService = {
  createReservationMailto(data: ReservationFormData): string {
    return buildReservationMailtoLink(data);
  },

  validate(data: ReservationFormData) {
    return validateReservationForm(data);
  },
};
