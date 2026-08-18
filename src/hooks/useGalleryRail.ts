"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export function useGalleryRail(itemCount: number) {
  const railRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [railLimits, setRailLimits] = useState({ canPrevious: false, canNext: true });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{ startX: number; scrollLeft: number }>({ startX: 0, scrollLeft: 0 });

  const updateProgress = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    const maxScroll = Math.max(1, rail.scrollWidth - rail.clientWidth);
    const progress = Math.min(1, Math.max(0, rail.scrollLeft / maxScroll));
    setScrollProgress(progress);
    setRailLimits({
      canPrevious: rail.scrollLeft > 4,
      canNext: rail.scrollLeft < maxScroll - 4,
    });
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    updateProgress();
    rail.addEventListener("scroll", updateProgress, { passive: true });

    const observer = new ResizeObserver(updateProgress);
    observer.observe(rail);

    return () => {
      rail.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, [itemCount, updateProgress]);

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail) return;
    setIsDragging(true);
    dragStartRef.current = {
      startX: e.pageX - rail.offsetLeft,
      scrollLeft: rail.scrollLeft,
    };
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rail = railRef.current;
    if (!rail) return;
    e.preventDefault();
    const x = e.pageX - rail.offsetLeft;
    const walk = (x - dragStartRef.current.startX) * 1.5;
    rail.scrollLeft = dragStartRef.current.scrollLeft - walk;
  };

  const onMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  function moveRail(direction: -1 | 1) {
    const rail = railRef.current;
    const card = rail?.querySelector<HTMLElement>(".archive-card");
    if (!rail || !card) return;

    const gap = Number.parseFloat(window.getComputedStyle(rail).columnGap) || 14;
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    rail.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior });
  }

  return {
    railRef,
    railLimits,
    scrollProgress,
    isDragging,
    moveRail,
    dragHandlers: {
      onMouseDown,
      onMouseMove,
      onMouseUp: onMouseUpOrLeave,
      onMouseLeave: onMouseUpOrLeave,
    },
  };
}
