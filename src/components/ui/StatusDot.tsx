import React from "react";

interface StatusDotProps {
  isOpen: boolean;
  className?: string;
}

export function StatusDot({ isOpen, className = "" }: StatusDotProps) {
  return (
    <i
      className={`status-dot ${!isOpen ? "closed" : ""} ${className}`.trim()}
      aria-hidden="true"
    />
  );
}
