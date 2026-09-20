import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Package, Gift, Sparkles } from "lucide-react";
import { GIFT_SETS } from "../../data/products";
import { useSectionReveal } from "../../hooks/useSectionReveal";
import { useReducedMotion } from "../../hooks/useReducedMotion";

/**
 * Gift Sets feature section for the homepage.
 * Displays the 3 curated gift bundles with hover animations,
 * price, includes list, and CTAs.
 */

const GIFT_ICONS = ["🎁", "💍", "🌿"];
const GIFT_ACCENT_COLORS = ["#52b788", "#e7a33e", "#4a90e2"];

function GiftSetCard({ giftSet, index, onNavigate, onAddToCart }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.1 });
  const cardRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const accent = GIFT_ACCENT_COLORS[index % GIFT_ACCENT_COLORS.length];

  const onMouseMove = (e) => {
    if (prefersReduced) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px)`;
    card.style.boxShadow = `0 28px 60px rgba(13,35,24,0.25), 0 0 40px ${accent}22`;
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
    cardRef.current.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      className="gift-set-card-wrapper"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.15}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.15}s`,
      }}
    >
      <div
        ref={cardRef}
        className="gift-set-card"
        style={{ "--gs-accent": accent, transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Card visual top */}
        <div className="gs-card-visual">
          <div className="gs-visual-orb" style={{ background: `radial-gradient(circle, ${accent}33, transparent 70%)` }} />
          <div className="gs-icon-wrap">
            <span className="gs-icon">{GIFT_ICONS[index]}</span>
          </div>

          {/* SVG bottle illustration */}
          <svg viewBox="0 0 120 220" className="gs-bottle-svg">
            <defs>
              <linearGradient id={`gs-grad-${giftSet.id}`} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor={accent} stopOpacity="0.65" />
                <stop offset="100%" stopColor="#1a3a2b" stopOpacity="0.2" />
              </linearGradient>
              <radialGradient id={`gs-glow-${giftSet.id}`} cx="50%" cy="55%" r="55%">
                <stop offset="0%" stopColor={accent} stopOpacity="0.5" />
                <stop offset="100%" stopColor={accent} stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="130" r="80" fill={`url(#gs-glow-${giftSet.id})`} />
            <path
              d="M50 40 H70 L74 60 C74 68 82 72 82 86 V175 C82 186 74 194 60 194 C46 194 38 186 38 175 V86 C38 72 46 68 46 60 Z"
              fill={`url(#gs-grad-${giftSet.id})`}
              stroke={accent}
              strokeWidth="1.5"
              strokeOpacity="0.5"
            />
            <path
              d="M44 95 V170 C44 178 47 186 51 190"
              fill="none"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* gift bow */}
            <path d="M52 40 Q60 32 68 40" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
            <circle cx="60" cy="40" r="3" fill={accent} opacity="0.9" />
          </svg>

          {/* Badges */}
          {giftSet.isBestseller && (
            <span className="gs-badge gs-badge-best mono">BESTSELLER</span>
          )}
          {giftSet.isNew && (
            <span className="gs-badge gs-badge-new mono">NEW</span>
          )}
        </div>

        {/* Card info */}
        <div className="gs-card-body">
          <div className="gs-category-tag mono">
            <Gift size={12} /> {giftSet.tag}
          </div>

          <h3 className="gs-card-name">{giftSet.name}</h3>
          <p className="gs-card-desc">{giftSet.description.slice(0, 100)}…</p>

          {/* What's included */}
          <div className="gs-includes-list">
            <div className="gs-includes-label mono">
              <Package size={12} /> INCLUDES:
            </div>
            {giftSet.includes.slice(0, 3).map((item, i) => (
              <div key={i} className="gs-include-item">
                <span className="gs-include-dot" style={{ background: accent }} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Price & rating */}
          <div className="gs-price-row">
            <div className="gs-price font-serif">${giftSet.price}</div>
            <div className="gs-rating">
              <Star size={13} fill="#e7a33e" color="#e7a33e" />
              <span>{giftSet.rating}</span>
              <span className="gs-review-count mono">({giftSet.reviewCount})</span>
            </div>
          </div>

          {/* CTA */}
          <div className="gs-card-actions">
            <button
              className="btn btn-solid gs-cta-btn"
              style={{ background: `linear-gradient(135deg, ${accent}, #2d5a3d)` }}
              onClick={() => onAddToCart && onAddToCart(giftSet, 1)}
            >
              <Gift size={15} /> Add to Cart
            </button>
            <button
              className="btn btn-ghost gs-details-btn"
              onClick={() => onNavigate && onNavigate("pdp", giftSet.id)}
            >
              Details <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GiftSetsSection({ onNavigate, onAddToCart }) {
  const { ref: headerRef, isVisible: headerVisible } = useSectionReveal({ threshold: 0.2 });

  return (
    <section className="gift-sets-section section-padding" aria-label="Gift Sets">
      <div className="section-container">

        {/* Section Header */}
        <div
          ref={headerRef}
          className="section-header-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="eyebrow mono">
            <Sparkles size={14} style={{ display: "inline", marginRight: "6px" }} />
            CURATED ECO GIFTS
          </div>
          <h2>Gift sets that mean something</h2>
          <p className="section-subtitle">
            Beautifully curated bundles made from upcycled glass — thoughtfully assembled,
            zero-plastic packaged, and ready to gift.
          </p>
        </div>

        {/* Gift Set Cards */}
        <div className="gift-sets-grid">
          {GIFT_SETS.map((gs, i) => (
            <GiftSetCard
              key={gs.id}
              giftSet={gs}
              index={i}
              onNavigate={onNavigate}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="gift-sets-bottom-cta"
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          <button
            className="btn btn-ghost"
            onClick={() => onNavigate && onNavigate("gift-sets")}
          >
            View All Gift Sets <ArrowRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
