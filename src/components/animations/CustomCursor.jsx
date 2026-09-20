import React, { useEffect, useRef, useState } from "react";

/**
 * Premium custom cursor — small circle that follows the mouse with lerp lag.
 * Expands when hovering over interactive elements.
 * Hidden on touch devices.
 */
export function CustomCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);

  useEffect(() => {
    // Don't show on touch devices
    if (window.matchMedia("(hover: none)").matches) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Detect hover over interactive elements
    const onMouseOver = (e) => {
      const el = e.target.closest("button, a, [data-cursor-expand]");
      setExpanded(!!el);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseover", onMouseOver);

    // Smooth lerp animation loop
    const lerp = (a, b, t) => a + (b - a) * t;

    const loop = () => {
      current.current.x = lerp(current.current.x, pos.current.x, 0.12);
      current.current.y = lerp(current.current.y, pos.current.y, 0.12);

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px) translate(-50%, -50%)`;
      }

      // Dot follows more tightly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(loop);
    };

    rafId.current = requestAnimationFrame(loop);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseover", onMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* Lagging circle */}
      <div
        ref={cursorRef}
        className={`custom-cursor-ring ${visible ? "cursor-visible" : ""} ${expanded ? "cursor-expanded" : ""}`}
        aria-hidden="true"
      />
      {/* Instant dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${visible ? "cursor-visible" : ""}`}
        aria-hidden="true"
      />
    </>
  );
}
