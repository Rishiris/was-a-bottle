import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Cinematic bottle story section — NO GSAP PINNING.
 *
 * Uses CSS `position: sticky` on the inner panel instead of GSAP pin.
 * This creates ZERO extra DOM elements, so there are no white-background
 * spacer divs to flash through.
 *
 * The outer section is tall (500vh), fully dark-backgrounded.
 * The inner panel sticks to the top and frame text switches via scroll progress.
 */

const FRAMES = [
  {
    label: "01 / DISCOVERY",
    headline: "Every bottle deserves\na second life.",
    sub: "Rescued from bars, wineries, and distilleries — before the landfill claims them.",
    emoji: "🍾",
    accent: "#52b788",
  },
  {
    label: "02 / WORKSHOP",
    headline: "The studio\ncomes alive.",
    sub: "Each bottle is cleaned, measured, and scored with diamond-wheel cutters.",
    emoji: "⚡",
    accent: "#f4a228",
  },
  {
    label: "03 / CUTTING",
    headline: "Precision at\nevery edge.",
    sub: "Tungsten-carbide scoring. Water-jet separation. Diamond-belt polishing.",
    emoji: "💎",
    accent: "#4a90e2",
  },
  {
    label: "04 / TRANSFORMATION",
    headline: "Glass becomes\nsomething new.",
    sub: "Wiring, canopy fitting, filament threading — each piece assembled by hand.",
    emoji: "✨",
    accent: "#52b788",
  },
  {
    label: "05 / ART",
    headline: "Handcrafted\nwith purpose.",
    sub: "What was a bottle is now light, memory, and intention — ready for your home.",
    emoji: "🕯️",
    accent: "#f4a228",
  },
];

export function BottleStorySection() {
  const sectionRef = useRef(null);
  const [activeFrame, setActiveFrame] = useState(0);
  const [progress, setProgress] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight - window.innerHeight;
      // How far we've scrolled INTO the section (0 → sectionH)
      const scrolled = Math.max(0, -rect.top);
      const pct = Math.min(1, scrolled / sectionH);

      setProgress(pct);
      const frameIndex = Math.min(
        FRAMES.length - 1,
        Math.floor(pct * FRAMES.length)
      );
      setActiveFrame(frameIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bottleRotation = prefersReduced ? 0 : activeFrame * 25;
  const bottleScale = 1 + activeFrame * 0.04;

  return (
    /**
     * Outer section: tall enough for scroll travel, SOLID dark background.
     * CSS sticky on inner panel — zero GSAP spacer divs, zero white flash.
     */
    <section
      ref={sectionRef}
      className="bottle-story-section"
      aria-label="The Bottle's Journey"
    >
      {/* Sticky panel — stays in view while outer section scrolls */}
      <div className="bottle-story-pin">
        <div className="bss-layout">

          {/* LEFT — Animated bottle visual */}
          <div className="bss-visual-col">
            <div className="bss-bottle-stage">
              {/* Spark particles */}
              <div className="bss-sparks" aria-hidden="true">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`bss-spark bss-spark-${i + 1}`} />
                ))}
              </div>

              {/* Bottle SVG */}
              <div
                className="bss-bottle-visual"
                style={{
                  transform: `rotate(${bottleRotation}deg) scale(${bottleScale})`,
                  transition: "transform 0.8s cubic-bezier(0.22,1,0.36,1)",
                }}
              >
                <svg viewBox="0 0 160 400" className="bss-bottle-svg">
                  <defs>
                    <linearGradient id="bss-glass-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#a8c0a0" stopOpacity="0.7" />
                      <stop offset="50%" stopColor="#52b788" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#1a3a2b" stopOpacity="0.2" />
                    </linearGradient>
                    <radialGradient id="bss-glow" cx="50%" cy="55%" r="60%">
                      <stop offset="0%" stopColor="#f4a228" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#52b788" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  <circle cx="80" cy="220" r="120" fill="url(#bss-glow)" className="bss-ambient-glow" />
                  <line x1="80" y1="0" x2="80" y2="70" stroke="#b89355" strokeWidth="2.5" strokeDasharray="5,3" />
                  <rect x="68" y="65" width="24" height="12" rx="3" fill="#c99f53" />

                  <path
                    d="M66 78 H94 L98 108 C98 118 110 126 110 150 V310 C110 328 96 340 80 340 C64 340 50 328 50 310 V150 C50 126 62 118 62 108 Z"
                    fill="url(#bss-glass-grad)"
                    stroke="#c3dac0"
                    strokeWidth="2"
                  />
                  <path
                    d="M58 155 V305 C58 316 62 328 68 334"
                    fill="none"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  <g className="bss-filament">
                    <line x1="80" y1="78" x2="80" y2="170" stroke="#b89355" strokeWidth="1.5" />
                    <path
                      d="M70 180 Q80 165 90 180 Q100 195 90 210 Q80 225 70 210 Q60 195 70 180 Z"
                      fill="none"
                      stroke="#f4a228"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      className="bss-filament-path"
                    />
                    <circle cx="80" cy="195" r="4" fill="#f4a228" className="bss-filament-bulb" />
                  </g>
                </svg>

                <div className="bss-polish-ring" aria-hidden="true" />
              </div>
              <div className="bss-stage-orb" aria-hidden="true" />
            </div>
          </div>

          {/* RIGHT — Story frames, CSS opacity transitions */}
          <div className="bss-content-col">
            {FRAMES.map((frame, i) => (
              <div
                key={i}
                className="bss-frame"
                aria-hidden={i !== activeFrame}
                style={{
                  opacity: i === activeFrame ? 1 : 0,
                  transform: i === activeFrame
                    ? "translateY(0)"
                    : i < activeFrame ? "translateY(-24px)" : "translateY(24px)",
                  transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22,1,0.36,1)",
                  position: i === 0 ? "relative" : "absolute",
                  top: i === 0 ? "auto" : "50%",
                  marginTop: i === 0 ? 0 : "-150px",
                  pointerEvents: i === activeFrame ? "auto" : "none",
                  "--frame-accent": frame.accent,
                }}
              >
                <div className="bss-frame-label mono">{frame.label}</div>
                <div className="bss-frame-emoji" aria-hidden="true">{frame.emoji}</div>
                <h2 className="bss-frame-headline">
                  {frame.headline.split("\n").map((line, j) => (
                    <React.Fragment key={j}>
                      {line}
                      {j < frame.headline.split("\n").length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
                <p className="bss-frame-sub">{frame.sub}</p>
                <div className="bss-frame-accent-line" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll progress bar */}
        <div className="bss-progress-bar" aria-hidden="true">
          <div
            className="bss-progress-fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}
