// Hello World
"use client";

import React from "react";
import { ESSENCE_ROYALLE_DATA } from "../data/essenceLogoData";

export interface EssenceRoyalleLogoProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  separateParts?: boolean;
  onClick?: () => void;
}

/**
 * Componente SVG vetorial e fatiado da Essence Royalle com fidelidade 100% fotográfica e geométrica.
 * Apresenta o medalhão botânico em esmeralda pura, tipografia serifada nobre e aro em ouro nobre/champanhe.
 */
export default function EssenceRoyalleLogo({
  className = "",
  size = "md",
  separateParts = false,
  onClick,
}: EssenceRoyalleLogoProps) {
  const { viewBox, fullDataUrl, sealDataUrl, textDataUrl } = ESSENCE_ROYALLE_DATA;

  const sizeClass =
    size === "xs"
      ? "w-8 h-8"
      : size === "sm"
      ? "w-12 h-12"
      : size === "lg"
      ? "w-28 h-28 sm:w-36 sm:h-36"
      : size === "xl"
      ? "w-40 h-40 sm:w-48 sm:h-48"
      : "w-16 h-16 sm:w-20 sm:h-20";

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center shrink-0 ${
        onClick ? "cursor-pointer transition-transform duration-200 hover:scale-105" : ""
      }`}
    >
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`select-none drop-shadow-xs ${sizeClass} ${className}`}
        role="img"
        aria-label="Essence Royalle"
      >
        <defs>
          <linearGradient id="essenceGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C59B27" />
            <stop offset="35%" stopColor="#E6C875" />
            <stop offset="70%" stopColor="#B48328" />
            <stop offset="100%" stopColor="#8F6414" />
          </linearGradient>
        </defs>

        {separateParts ? (
          <>
            <circle
              id="essence-part-ring"
              cx="75"
              cy="75"
              r="72"
              stroke="url(#essenceGoldGradient)"
              strokeWidth="2.5"
              fill="#ffffff"
            />
            <g id="essence-part-seal">
              <image
                href={sealDataUrl}
                x="15"
                y="10"
                width="120"
                height="85"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
            <g id="essence-part-text">
              <image
                href={textDataUrl}
                x="10"
                y="82"
                width="130"
                height="45"
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </>
        ) : (
          <g id="essence-full-logo">
            <image
              href={fullDataUrl}
              x="0"
              y="0"
              width="150"
              height="150"
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
