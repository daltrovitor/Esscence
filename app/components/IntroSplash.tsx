// Hello World
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { PRX_LOGO_DATA } from "../data/logoPartsData";
import EssenceRoyalleLogo from "./EssenceRoyalleLogo";

interface IntroSplashProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Splash Screen de Introdução Cinética com Física Baseada em cubic-bezier(0.16, 1, 0.3, 1)
 * Metodologia ViraWeb de fatiamento SVG transparente com Base64 Data URIs:
 * Cadência de 0.6s (600ms) por elemento:
 * 0.0s: Símbolo/Emblema PRX
 * 0.6s: Letra P
 * 1.2s: Letra R
 * 1.8s: Letra X
 * 2.4s: Aliança Estratégica: Essence Royalle × Rafael Molina × PRX
 * ~1.0s: Respiro para apreciação da marca unificada
 * Encerramento suave com fade-out (opacity: 0, scale: 1.05, pointer-events-none).
 */
export default function IntroSplash({ isOpen, onClose }: IntroSplashProps) {
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSkip = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => {
      onClose();
      setIsFadingOut(false);
      setStep(0);
    }, 600);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    setStep(0);
    setIsFadingOut(false);

    const timers: NodeJS.Timeout[] = [];

    // Cadência estrita a cada 0.6s (600ms)
    const t1 = setTimeout(() => setStep(1), 600);
    const t2 = setTimeout(() => setStep(2), 1200);
    const t3 = setTimeout(() => setStep(3), 1800);
    const t4 = setTimeout(() => setStep(4), 2400);
    const t5 = setTimeout(() => setStep(5), 3500);
    const t6 = setTimeout(() => {
      handleSkip();
    }, 4500);

    timers.push(t1, t2, t3, t4, t5, t6);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleSkip]);

  if (!isOpen) return null;

  const prxEmblem = PRX_LOGO_DATA.parts.find((p) => p.id === "emblem")!;
  const prxP = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-p")!;
  const prxR = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-r")!;
  const prxX = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-x")!;
  const prxSubtitle = PRX_LOGO_DATA.parts.find((p) => p.id === "subtitle")!;

  const transitionPhysics =
    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)";

  const emblemActive = step >= 0;
  const pActive = step >= 1;
  const rActive = step >= 2;
  const xActive = step >= 3;
  const allianceActive = step >= 4;

  return (
    <aside
      aria-label="Apresentação animada da marca PRX LAB × Essence Royalle"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 select-none ${
        isFadingOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Botão de Pular Introdução */}
      <button
        type="button"
        onClick={handleSkip}
        className="absolute top-6 right-6 z-20 flex items-center gap-2 px-3.5 py-2 text-xs font-mono text-zinc-400 hover:text-zinc-900 border border-zinc-200/80 hover:border-zinc-400 bg-white/90 backdrop-blur-xs rounded-sm transition-all duration-150 cursor-pointer"
        title="Pular apresentação (Esc / Enter / Espaço)"
        aria-label="Pular apresentação inicial"
      >
        <span>Pular introdução</span>
        <span aria-hidden="true" className="text-zinc-300">→</span>
      </button>

      {/* Container Central com Composição de Logos */}
      <div className="relative flex flex-col items-center justify-center max-w-2xl px-6 text-center">
        {/* Badge do Projeto */}
        <div
          style={{
            opacity: emblemActive ? 1 : 0,
            transform: emblemActive ? "translateY(0)" : "translateY(-20px)",
            transition: transitionPhysics,
          }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-amber-200/60 bg-amber-50/50 text-[11px] font-mono uppercase tracking-widest text-[#B48328]"
        >
          <span>PRX LAB</span>
          <span className="text-amber-300">•</span>
          <span>Cocriação Gen Z</span>
        </div>

        {/* Logo PRX com Animação Fatiada */}
        <div className="relative w-56 sm:w-72 md:w-80 h-auto">
          <svg
            viewBox={PRX_LOGO_DATA.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto overflow-visible select-none"
            role="img"
            aria-label="PRX Logo"
          >
            {/* 1. Emblema X (Entra em t=0s) */}
            <g
              id="part-emblem"
              style={{
                transform: emblemActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: emblemActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxEmblem.href}
                x={prxEmblem.x}
                y={prxEmblem.y}
                width={prxEmblem.w}
                height={prxEmblem.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 2. Letra P (Entra em t=0.6s) */}
            <g
              id="part-p"
              style={{
                transform: pActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: pActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxP.href}
                x={prxP.x}
                y={prxP.y}
                width={prxP.w}
                height={prxP.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 3. Letra R (Entra em t=1.2s) */}
            <g
              id="part-r"
              style={{
                transform: rActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: rActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxR.href}
                x={prxR.x}
                y={prxR.y}
                width={prxR.w}
                height={prxR.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 4. Letra X (Entra em t=1.8s) */}
            <g
              id="part-x"
              style={{
                transform: xActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: xActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxX.href}
                x={prxX.x}
                y={prxX.y}
                width={prxX.w}
                height={prxX.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 5. Subtítulo Institucional (Entra em t=2.4s) */}
            <g
              id="part-subtitle"
              style={{
                transform: allianceActive ? "translateY(0px)" : "translateY(-60px)",
                opacity: allianceActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxSubtitle.href}
                x={prxSubtitle.x}
                y={prxSubtitle.y}
                width={prxSubtitle.w}
                height={prxSubtitle.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </svg>
        </div>

        {/* Revelação da Aliança Comercial com Essence Royalle & Rafael Molina (surge em t=2.4s) */}
        <div
          style={{
            transform: allianceActive ? "translateY(0px)" : "translateY(30px)",
            opacity: allianceActive ? 1 : 0,
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
          }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 px-5 py-2.5 border border-zinc-200 bg-zinc-50/90 rounded-sm shadow-xs">
            <span className="text-xs font-mono font-semibold tracking-wider text-[#B48328] uppercase">
              ESSENCE ROYALLE
            </span>
            <span className="text-zinc-300">×</span>
            <span className="text-xs font-mono font-medium tracking-wider text-zinc-700 uppercase">
              RAFAEL MOLINA
            </span>
            <span className="text-zinc-300">×</span>
            <span className="text-xs font-mono font-medium tracking-wider text-[#0B67FF] uppercase">
              PRX
            </span>
            <span className="text-zinc-300">|</span>
            {/* Logo Essence Royalle em SVG com Medalhão */}
            <div className="w-8 h-8">
              <EssenceRoyalleLogo size="sm" className="w-8 h-8" />
            </div>
          </div>

          <p className="mt-3 text-xs sm:text-sm text-zinc-500 font-normal max-w-md">
            A próxima geração não quer apenas consumir uma marca. Quer fazer parte dela.
          </p>
        </div>

        {/* Indicador de Atalho */}
        <div
          style={{
            opacity: allianceActive ? 1 : 0,
            transition: "opacity 0.6s ease-in 0.2s",
          }}
          className="mt-6 flex items-center gap-1.5 text-[11px] font-mono text-zinc-400"
        >
          <kbd className="px-1.5 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-500 text-[10px]">
            ESC
          </kbd>
          <span>para avançar para a proposta comercial</span>
        </div>
      </div>
    </aside>
  );
}
