import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Page loader — SVG bottle outline draws itself, fills with light, then fades out.
 * Calls onComplete() when finished so the app can mount.
 */
export function PageLoader({ onComplete }) {
  const overlayRef = useRef(null);
  const pathRef = useRef(null);
  const fillRef = useRef(null);
  const percentRef = useRef(null);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const path = pathRef.current;
    const fill = fillRef.current;
    const overlay = overlayRef.current;

    if (!path || !fill || !overlay) return;

    // Measure path length for stroke-dashoffset animation
    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 1,
    });
    gsap.set(fill, { opacity: 0 });

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.7,
          ease: "power2.inOut",
          onComplete,
        });
      },
    });

    // 1. Draw the bottle outline
    tl.to(path, {
      strokeDashoffset: 0,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate() {
        const prog = 1 - this.targets()[0].getAttribute("stroke-dashoffset") / length;
        setPct(Math.round(prog * 80));
      },
    })
      // 2. Fill bottle with glow
      .to(
        fill,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          onUpdate() {
            const prog = 0.8 + this.progress() * 0.2;
            setPct(Math.round(prog * 100));
          },
        },
        "-=0.2"
      )
      // 3. Brief pause
      .to({}, { duration: 0.4 });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="page-loader-overlay" aria-label="Loading">
      <div className="page-loader-inner">
        <svg
          viewBox="0 0 120 300"
          className="loader-bottle-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="loader-glow" cx="50%" cy="60%" r="60%">
              <stop offset="0%" stopColor="#f4a228" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#52b788" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1a3a2b" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Bottle fill (appears after draw) */}
          <path
            ref={fillRef}
            d="M52 38 H68 L72 58 C72 68 82 74 82 94 V248 C82 262 72 272 60 272 C48 272 38 262 38 248 V94 C38 74 48 68 48 58 Z"
            fill="url(#loader-glow)"
            stroke="none"
            opacity="0"
          />

          {/* Bottle outline (drawn by stroke-dashoffset) */}
          <path
            ref={pathRef}
            d="M52 38 H68 L72 58 C72 68 82 74 82 94 V248 C82 262 72 272 60 272 C48 272 38 262 38 248 V94 C38 74 48 68 48 58 Z M55 38 V28 H65 V38"
            fill="none"
            stroke="#52b788"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0"
          />

          {/* Neck highlight */}
          <line x1="54" y1="44" x2="54" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>

        <div className="loader-pct-row">
          <span ref={percentRef} className="loader-pct mono">{pct}%</span>
          <span className="loader-label mono">Crafting Experience</span>
        </div>
      </div>
    </div>
  );
}
