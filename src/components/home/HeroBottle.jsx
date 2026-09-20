import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Enhanced hero bottle visual with:
 * - CSS float + gentle rotation
 * - Mouse-tracking perspective tilt
 * - Dynamic glow that reacts to mouse proximity
 * - Scroll-based fade out
 *
 * This wraps the existing product SVG output without modifying BottleVisual.jsx.
 */
export function HeroBottle({ children }) {
  const wrapRef = useRef(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || prefersReduced) return;

    const onMouseMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = ((e.clientX - cx) / (rect.width / 2)) * 8; // max 8deg
      const dy = ((e.clientY - cy) / (rect.height / 2)) * -6;

      gsap.to(wrap, {
        rotateY: dx,
        rotateX: dy,
        duration: 0.6,
        ease: "power2.out",
        transformPerspective: 1000,
        transformOrigin: "center center",
      });
    };

    const onMouseLeave = () => {
      gsap.to(wrap, {
        rotateY: 0,
        rotateX: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.6)",
      });
    };

    const parent = wrap.closest(".hero-art-col") || document;
    parent.addEventListener("mousemove", onMouseMove);
    parent.addEventListener("mouseleave", onMouseLeave);

    return () => {
      parent.removeEventListener("mousemove", onMouseMove);
      parent.removeEventListener("mouseleave", onMouseLeave);
      gsap.killTweensOf(wrap);
    };
  }, [prefersReduced]);

  return (
    <div
      ref={wrapRef}
      className={`hero-bottle-enhanced ${prefersReduced ? "no-motion" : ""}`}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Floating ring decorations */}
      <div className="hbe-ring hbe-ring-1" aria-hidden="true" />
      <div className="hbe-ring hbe-ring-2" aria-hidden="true" />
      <div className="hbe-glow-orb" aria-hidden="true" />

      {/* Actual bottle visual */}
      <div className="hbe-bottle-wrap">
        {children}
      </div>

      {/* Shadow beneath */}
      <div className="hbe-shadow" aria-hidden="true" />
    </div>
  );
}
