"use client";

import { useEffect, useMemo, useState } from "react";
import type { ServiceStatus } from "../types";
import { calculateServiceStatus } from "../utils";

/**
 * Hook to manage real-time São Paulo restaurant status and party size.
 */
export function useRealtimeService(initialPartySize = 2) {
  const [party, setParty] = useState(initialPartySize);
  const [clock, setClock] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => {
      setClock(new Date());
    }, 30000);
    return () => window.clearInterval(id);
  }, []);

  const service: ServiceStatus = useMemo(() => {
    return calculateServiceStatus(clock);
  }, [clock]);

  const incrementParty = () => setParty((prev) => Math.min(12, prev + 1));
  const decrementParty = () => setParty((prev) => Math.max(1, prev - 1));

  return {
    party,
    setParty,
    incrementParty,
    decrementParty,
    service,
    clock,
  };
}
