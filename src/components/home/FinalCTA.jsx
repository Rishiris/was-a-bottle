import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Pen, Star, Clock, Package } from "lucide-react";
import { useMagneticHover } from "../../hooks/useMagneticHover";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Custom Engraving CTA section — replaces the old BYOB "heirloom" section.
 * - Laser-engraving themed SVG visual
 * - Highlights the custom laser engraving service
 * - CTA navigates to Engraved Products in the shop
 */
export function FinalCTA({ onNavigate }) {
  const sectionRef = useRef(null);
  const glowRef = useRef(null);
  const magneticRef = useMagneticHover(0.4);
  const { ref: revealRef, isVisible } = useSectionReveal({ threshold: 0.3 });
  const prefersReduced = useReducedMotion();

  // Combine refs
  const setRef = (el) => {
    sectionRef.current = el;
    revealRef.current = el;
  };

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow || prefersReduced) return;

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(244,162,40,0.22) 0%, rgba(82,183,136,0.1) 40%, transparent 70%)`;
    };

    section.addEventListener("mousemove", onMouseMove);
    return () => section.removeEventListener("mousemove", onMouseMove);
  }, [prefersReduced]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section ref={setRef} className="final-cta-section" aria-label="Custom Engraving CTA">
      {/* Mouse-reactive glow layer */}
      <div ref={glowRef} className="final-cta-glow" aria-hidden="true" />

      {/* Ambient orbs */}
      <div className="final-cta-orb final-cta-orb-1" aria-hidden="true" />
      <div className="final-cta-orb final-cta-orb-2" aria-hidden="true" />

      <div className="section-container final-cta-inner">

        {/* Laser Engraving Visual */}
        <div className="final-cta-visual" aria-hidden="true">
          <div className="final-cta-bottle-wrap">
            <svg viewBox="0 0 200 500" className="final-cta-bottle-svg">
              <defs>
                <radialGradient id="fcta-glow" cx="50%" cy="60%" r="60%">
                  <stop offset="0%" stopColor="#f4a228" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#52b788" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#1a3a2b" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="fcta-glass" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a8c0a0" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#52b788" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#1a3a2b" stopOpacity="0.2" />
                </linearGradient>
                {/* Laser beam gradient */}
                <linearGradient id="fcta-laser" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f4a228" stopOpacity="0" />
                  <stop offset="50%" stopColor="#f4a228" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                </linearGradient>
              </defs>

              {/* Glow aura */}
              <circle cx="100" cy="300" r="160" fill="url(#fcta-glow)" opacity="0.7" />

              {/* Bottle body */}
              <path
                d="M84 100 H116 L122 138 C122 150 138 160 138 188 V400 C138 424 122 440 100 440 C78 440 62 424 62 400 V188 C62 160 78 150 78 138 Z"
                fill="url(#fcta-glass)"
                stroke="#c3dac0"
                strokeWidth="2.5"
              />

              {/* Glass highlight */}
              <path
                d="M70 190 V395 C70 408 76 426 84 434"
                fill="none"
                stroke="rgba(255,255,255,0.4)"
                strokeWidth="2"
                strokeLinecap="round"
              />

              {/* Engraving text lines on glass */}
              <text
                x="100"
                y="270"
                textAnchor="middle"
                fontSize="9"
                fill="rgba(255,255,255,0.7)"
                fontFamily="monospace"
                letterSpacing="2"
                className="fcta-engrave-text"
              >
                JAMES & SOFIA
              </text>
              <text
                x="100"
                y="288"
                textAnchor="middle"
                fontSize="7"
                fill="rgba(255,255,255,0.5)"
                fontFamily="monospace"
                letterSpacing="1"
                className="fcta-engrave-text"
              >
                EST. 12.06.2024
              </text>

              {/* Engraving lines decoration */}
              <line x1="78" y1="295" x2="122" y2="295" stroke="rgba(244,162,40,0.4)" strokeWidth="0.8" />
              <line x1="82" y1="258" x2="118" y2="258" stroke="rgba(244,162,40,0.4)" strokeWidth="0.8" />

              {/* Laser beam animation */}
              <line
                x1="138"
                y1="270"
                x2="200"
                y2="240"
                stroke="url(#fcta-laser)"
                strokeWidth="2"
                opacity="0.9"
                className="final-cta-filament"
              />
              {/* Laser tip dot */}
              <circle cx="139" cy="270" r="4" fill="#f4a228" opacity="0.95" className="final-cta-filament-dot" />
              {/* Laser source */}
              <rect x="190" y="228" width="16" height="26" rx="4" fill="#2d5a3d" stroke="#52b788" strokeWidth="1.5" />
              <rect x="193" y="232" width="10" height="6" rx="2" fill="#f4a228" opacity="0.8" />
            </svg>
          </div>

          {/* Rotating ring */}
          <div className="final-cta-spin-ring" aria-hidden="true" />
        </div>

        {/* Text content */}
        <motion.div
          className="final-cta-content"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="eyebrow mono">
            CUSTOM LASER ENGRAVING
          </motion.div>

          <motion.h2 variants={itemVariants} className="final-cta-headline">
            Make it yours.<br />
            <em>Engraved in glass, forever.</em>
          </motion.h2>

          <motion.p variants={itemVariants} className="final-cta-sub">
            Add names, dates, coordinates, or a personal message — permanently laser-etched
            into any of our upcycled glass pieces. Perfect for weddings, milestones, and gifts
            that last a lifetime.
          </motion.p>

          {/* Engraving feature pills */}
          <motion.div variants={itemVariants} className="final-cta-features">
            <div className="fcta-feature-pill">
              <Pen size={14} />
              <span>Any Text or Date</span>
            </div>
            <div className="fcta-feature-pill">
              <Clock size={14} />
              <span>Ready in 48 Hours</span>
            </div>
            <div className="fcta-feature-pill">
              <Package size={14} />
              <span>Gift Boxed</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="final-cta-btns">
            <button
              ref={magneticRef}
              className="btn btn-solid final-cta-primary"
              onClick={() => onNavigate("shop")}
              data-cursor-expand="true"
            >
              Shop Engraved Products <ArrowRight size={16} />
            </button>

            <button
              className="btn btn-ghost"
              onClick={() => onNavigate("gift-sets")}
            >
              View Gift Sets →
            </button>
          </motion.div>

          {/* Trust signals */}
          <motion.div variants={itemVariants} className="final-cta-trust">
            <span>🌿 100% Eco Packaging</span>
            <span>💎 Diamond-Polished Finish</span>
            <span><Star size={12} style={{ display: "inline", color: "#e7a33e" }} /> 4.9 Star Rating</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
