"use client";

/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useGalleryRail } from "../../hooks/useGalleryRail";
import type { ArchiveImage } from "../../types";

interface GalleryRailProps {
  images: ArchiveImage[];
  label: string;
  tone?: "light" | "dark";
  showControls?: boolean;
}

export function GalleryRail({
  images,
  label,
  tone = "light",
  showControls = false,
}: GalleryRailProps) {
  const { railRef, railLimits, scrollProgress, isDragging, moveRail, dragHandlers } =
    useGalleryRail(images.length);

  return (
    <div className={`rail-shell ${tone} ${isDragging ? "is-dragging" : ""}`}>
      <div
        className={`archive-rail ${tone}`}
        role="region"
        aria-label={label}
        tabIndex={0}
        ref={railRef}
        {...dragHandlers}
      >
        {images.map((image, index) => (
          <figure className="archive-card" key={image.src}>
            <img
              src={image.src}
              alt={image.alt}
              width="1500"
              height="1050"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>

      {showControls && (
        <div className="rail-controls" aria-label={`Controles de ${label}`}>
          <button
            type="button"
            onClick={() => moveRail(-1)}
            disabled={!railLimits.canPrevious}
            aria-label={`Anterior em ${label}`}
          >
            ‹
          </button>
          <button
            type="button"
            onClick={() => moveRail(1)}
            disabled={!railLimits.canNext}
            aria-label={`Próximo em ${label}`}
          >
            ›
          </button>
        </div>
      )}

      <div className="rail-progress-container" aria-hidden="true">
        <div className="rail-progress-track">
          <div
            className="rail-progress-bar"
            style={{
              width: `${Math.max(16, ((1 / images.length) + (1 - 1 / images.length) * scrollProgress) * 100)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
