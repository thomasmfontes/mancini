"use client";

import { KeyboardEvent as ReactKeyboardEvent, useEffect, useRef, useState } from "react";

export function useMobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        window.requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    const closeOnDesktop = () => {
      if (window.innerWidth > 980) setMenuOpen(false);
    };

    const focusFrame = window.requestAnimationFrame(() => {
      if (!menuRef.current) return;
      menuRef.current.scrollTop = 0;
      menuRef.current.querySelector<HTMLAnchorElement>('a[href^="#"]')?.focus({ preventScroll: true });
    });

    document.body.classList.add("menu-is-open");
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.classList.remove("menu-is-open");
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [menuOpen]);

  function closeMenuFromKeyboard(event: ReactKeyboardEvent<HTMLAnchorElement>) {
    if (event.key === "Enter" || event.key === " ") {
      setMenuOpen(false);
    }
  }

  const openMenu = () => setMenuOpen(true);
  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return {
    menuOpen,
    setMenuOpen,
    openMenu,
    closeMenu,
    toggleMenu,
    menuRef,
    menuButtonRef,
    closeMenuFromKeyboard,
  };
}
