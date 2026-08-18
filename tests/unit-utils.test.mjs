import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateServiceStatus,
  saoPauloParts,
} from "../src/utils/date-utils.ts";
import {
  buildReservationMailtoLink,
  validateReservationForm,
} from "../src/utils/reservation-utils.ts";
import { generateRestaurantSchema } from "../src/utils/seo-utils.ts";

test("saoPauloParts extrai corretamente os componentes de data em SP", () => {
  const fixedDate = new Date("2026-05-15T18:30:00Z");
  const parts = saoPauloParts(fixedDate);
  assert.ok(parts.year);
  assert.ok(parts.month);
  assert.ok(parts.day);
  assert.ok(parts.hour);
  assert.ok(parts.minute);
});

test("calculateServiceStatus calcula corretamente anos de história e status", () => {
  const mondayLunch = new Date("2026-08-17T15:00:00Z"); // 12:00 in SP (UTC-3)
  const status = calculateServiceStatus(mondayLunch);
  assert.equal(typeof status.isOpen, "boolean");
  assert.ok(status.years >= 45);
  assert.match(status.today, /^\d{4}-\d{2}-\d{2}$/);
});

test("buildReservationMailtoLink formata corpo do e-mail perfeitamente", () => {
  const formData = {
    name: "Maria Silva",
    date: "2026-09-20",
    time: "20:30",
    guests: "4",
    phone: "(11) 98765-4321",
    email: "maria@exemplo.com",
  };

  const link = buildReservationMailtoLink(formData);
  assert.match(link, /^mailto:reservas@famigliamancini\.com\.br\?subject=/);
  assert.match(link, /Maria%20Silva/);
  assert.match(link, /2026-09-20/);
  assert.match(link, /20%3A30/);
  assert.match(link, /maria%40exemplo\.com/);
});

test("validateReservationForm valida campos obrigatórios", () => {
  const validResult = validateReservationForm({
    name: "João Rossi",
    date: "2026-10-10",
    time: "19:00",
    guests: 2,
    phone: "(11) 91234-5678",
    email: "joao@rossi.com",
  });
  assert.equal(validResult.isValid, true);
  assert.equal(Object.keys(validResult.errors).length, 0);

  const invalidResult = validateReservationForm({
    name: "",
    date: "",
    time: "",
    guests: 2,
    phone: "",
    email: "email-invalido",
  });
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.email);
});

test("generateRestaurantSchema produz Schema.org válido", () => {
  const schema = generateRestaurantSchema();
  assert.equal(schema["@context"], "https://schema.org");
  assert.ok(Array.isArray(schema["@graph"]));
  const mainRestaurant = schema["@graph"].find((item) => item.name.includes("Trattoria"));
  assert.ok(mainRestaurant);
  assert.equal(mainRestaurant.address.streetAddress, "Rua Avanhandava, 81");
  assert.equal(mainRestaurant.address.addressLocality, "São Paulo");
});
