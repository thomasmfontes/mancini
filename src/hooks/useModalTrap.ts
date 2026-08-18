"use client";

import { useEffect, useRef } from "react";

interface UseModalTrapOptions {
  isOpen: boolean;
  onClose: () => void;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
}

export function useModalTrap({ isOpen, onClose, initialFocusRef }: UseModalTrapOptions) {
  const dialogRef = useRef<HTMLElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    previousFocusRef.current = document.activeElement as HTMLElement;

    const focusableSelector =
      'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const frame = window.requestAnimationFrame(() => {
      if (initialFocusRef?.current) {
        initialFocusRef.current.focus();
      } else if (dialogRef.current) {
        const firstFocusable = dialogRef.current.querySelector<HTMLElement>(focusableSelector);
        firstFocusable?.focus();
      }
    });

    const handleKeys = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector));
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.classList.add("modal-is-open");
    window.addEventListener("keydown", handleKeys);

    return () => {
      window.cancelAnimationFrame(frame);
      document.body.classList.remove("modal-is-open");
      window.removeEventListener("keydown", handleKeys);
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose, initialFocusRef]);

  return { dialogRef };
}
