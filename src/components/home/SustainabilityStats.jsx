import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

/**
 * Animated sustainability statistics:
 * - Numbers count upward when section enters viewport
 * - Floating leaves animate in the background
 * - Background gradient slowly shifts
 */
const STATS = [
  { value: 50000, label: "Bottles Diverted", suffix: "+", prefix: "" },
  { value: 22500, label: "kg Waste Prevented", suffix: " kg", prefix: "" },
  { value: 42500, label: "kg CO₂ Avoided", suffix: " kg", prefix: "" },
  { value: 100, label: "Plastic-Free", suffix: "%", prefix: "" },
];

function CountUp({ to, suffix = "", prefix = "", duration = 2, trigger = false }) {
  const [val, setVal] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!trigger) return;

    if (prefersReduced) {
      setVal(to);
      return;
    }

    const start = Date.now();
    const end = start + duration * 1000;

    const tick = () => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [trigger, to, duration, prefersReduced]);

  return (
    <span className="sus-stat-number font-serif">
      {prefix}{val.toLocaleString()}{suffix}
    </span>
  );
}

export function SustainabilityStats() {
  const sectionRef = useRef(null);
  const [triggered, setTriggered] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Floating leaves
  const LEAVES = ["🌿", "🍃", "🌱", "🍀", "🌾"];

  return (
    <section ref={sectionRef} className="sustainability-stats-section section-padding">
      {/* Background gradient shift */}
      <div className="sus-bg-orb sus-orb-1" aria-hidden="true" />
      <div className="sus-bg-orb sus-orb-2" aria-hidden="true" />

      {/* Floating leaves */}
      <div className="sus-leaves" aria-hidden="true">
        {LEAVES.map((leaf, i) => (
          <span key={i} className={`sus-leaf sus-leaf-${i + 1}`}>{leaf}</span>
        ))}
      </div>

      <div className="section-container">
        <div className="section-header-center">
          <div className="eyebrow mono">OUR IMPACT</div>
          <h2>Every purchase is a vote for the planet</h2>
          <p className="section-subtitle">
            Real numbers. Real impact. Every bottle we upcycle keeps glass out of landfill and carbon out of the atmosphere.
          </p>
        </div>

        <div className="sus-stats-grid">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="sus-stat-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <CountUp
                to={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                duration={2.2 + i * 0.3}
                trigger={triggered}
              />
              <span className="sus-stat-label mono">{stat.label}</span>
              <div className="sus-stat-underline" />
            </div>
          ))}
        </div>

        {/* Earth / globe visual */}
        <div className="sus-earth-wrap" aria-hidden="true">
          <div className="sus-earth">
            <div className="sus-earth-ring" />
            <span className="sus-earth-emoji">🌍</span>
          </div>
        </div>
      </div>
    </section>
  );
}
