import type { ServiceStatus } from "../types/mancini.ts";

/**
 * Extracts date and time components using the America/Sao_Paulo timezone.
 */
export function saoPauloParts(date: Date): Record<string, string> {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  return Object.fromEntries(parts.map((part) => [part.type, part.value]));
}

/**
 * Calculates current real-time service status for Famiglia Mancini in São Paulo.
 */
export function calculateServiceStatus(clock: Date = new Date()): ServiceStatus {
  const parts = saoPauloParts(clock);
  const weekdayIndex: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  const day = weekdayIndex[parts.weekday] ?? 0;
  const hour = Number(parts.hour) + Number(parts.minute) / 60;
  const closingHour = day >= 4 && day <= 6 ? 24 : 23;
  const isOpen = hour >= 11.5 && hour < closingHour;
  const years = Number(parts.year) - 1980 - (Number(parts.month) < 5 ? 1 : 0);

  return {
    isOpen,
    years,
    closingLabel: closingHour === 24 ? "00h" : "23h",
    time: `${parts.hour}:${parts.minute}`,
    today: `${parts.year}-${parts.month}-${parts.day}`,
  };
}
