import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { CATEGORIES, PRODUCTS, PROCESS_STEPS, REVIEWS_LIST } from "../data/products";
import { ProductVisual } from "../components/BottleVisual";
import { HeroBottle } from "../components/home/HeroBottle";
import { BottleStorySection } from "../components/home/BottleStorySection";
import { HorizontalScroll } from "../components/home/HorizontalScroll";
import { SustainabilityStats } from "../components/home/SustainabilityStats";
import { TestimonialsCarousel } from "../components/home/TestimonialsCarousel";
import { FinalCTA } from "../components/home/FinalCTA";
import { GiftSetsSection } from "../components/home/GiftSetsSection";
import { ScrollIndicator } from "../components/animations/ScrollIndicator";
import { useSectionReveal } from "../hooks/useSectionReveal";
import { useMagneticHover } from "../hooks/useMagneticHover";
import { useTextReveal } from "../hooks/useTextReveal";
import { useReducedMotion } from "../hooks/useReducedMotion";
import {
  Sparkles, ArrowRight, Star, ShieldCheck, Leaf,
  Flame, Sun, Moon, ShoppingBag, Eye, Calculator
} from "lucide-react";

// ── Reusable reveal wrapper ──────────────────────────────────────────────────
function RevealOnScroll({ children, className = "", delay = 0, y = 30 }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal-wrapper ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Stagger card wrapper ─────────────────────────────────────────────────────
function StaggerItem({ children, index = 0, className = "" }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.05 });
  const delay = index * 0.1;
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ── Animated process step icon ───────────────────────────────────────────────
const PROCESS_ICONS = ["🍾", "✂️", "💎", "✨", "🕯️"];

function ProcessCard({ step, index }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="process-card process-card-animated"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
    >
      <div className={`process-icon-anim ${isVisible ? "icon-animate" : ""}`} aria-hidden="true">
        {PROCESS_ICONS[index] || "⚡"}
      </div>
      <span className="step-num mono">{step.n}</span>
      <h3>{step.title}</h3>
      <p>{step.body}</p>
      <div className="step-detail-pill mono">{step.detail}</div>
    </div>
  );
}

// ── Premium product card ─────────────────────────────────────────────────────
function PremiumProductCard({ product, index, onQuickView, onAddToCart, onNavigate }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.05 });
  const cardRef = useRef(null);
  const prefersReduced = useReducedMotion();

  // 3D tilt on hover
  const onMouseMove = (e) => {
    if (prefersReduced) return;
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    card.style.transform = `perspective(1000px) rotateX(${y}deg) rotateY(${x}deg) translateY(-6px) scale(1.02)`;
    card.style.boxShadow = "0 24px 60px rgba(13,35,24,0.2), 0 8px 24px rgba(13,35,24,0.12)";
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = "";
    cardRef.current.style.boxShadow = "";
  };

  return (
    <div
      ref={ref}
      className="product-card premium-product-card"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.12}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${index * 0.12}s`,
      }}
    >
      <div
        ref={cardRef}
        className="ppc-inner"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ transition: "transform 0.15s ease, box-shadow 0.15s ease" }}
      >
        <div className="product-card-visual">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="product-visual-img"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
            />
          ) : (
            <ProductVisual product={product} isLit={true} size="card" />
          )}

          <div className="product-card-actions-overlay ppc-overlay">
            <button
              className="card-action-btn"
              onClick={() => onQuickView(product)}
              title="Quick Preview"
            >
              <Eye size={18} /> Quick View
            </button>

            <button
              className="card-action-btn solid"
              onClick={() => onAddToCart(product, 1)}
              title="Add to Cart"
            >
              <ShoppingBag size={18} /> Add to Cart
            </button>
          </div>

          {product.isNew && <span className="card-badge new-badge mono">NEW</span>}
          {product.isBestseller && <span className="card-badge bestseller-badge mono">BEST SELLER</span>}
        </div>

        <div className="product-card-info">
          <div className="card-provenance-pill mono">{product.bottleType} Bottle</div>

          <h3
            onClick={() => onNavigate("pdp", product.id)}
            className="product-title-link"
          >
            {product.name}
          </h3>

          <p className="card-prov-text">{product.provenance}</p>

          <div className="card-price-row">
            <span className="card-price">${product.price}</span>
            <div className="card-rating">
              <Star size={14} fill="#e7a33e" color="#e7a33e" />
              <span>{product.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Category card with entrance animation ────────────────────────────────────
function CategoryCard({ cat, index, onClick }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.05 });
  return (
    <div
      ref={ref}
      className="category-card"
      onClick={onClick}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.95)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.08}s`,
      }}
    >
      <div className="cat-card-top">
        <span className="cat-icon-badge">✨</span>
        <span className="cat-arrow">↗</span>
      </div>
      <h3>{cat.name}</h3>
      <p>{cat.tag}</p>
    </div>
  );
}

// ── Main HomePage ─────────────────────────────────────────────────────────────
export function HomePage() {
  const { navigateTo, addToCart, setQuickViewProduct } = useCart();
  const [heroLit, setHeroLit] = useState(true);
  const [calculatorBottles, setCalculatorBottles] = useState(6);
  const prefersReduced = useReducedMotion();

  // Hero headline text reveal
  const h1Ref = useTextReveal(true, { stagger: 0.05, delay: 0.3, duration: 0.8, y: 50 });
  const kickerRef = useTextReveal(true, { stagger: 0.04, delay: 0.1, duration: 0.6, y: 20 });
  const ledeRef = useTextReveal(true, { stagger: 0.03, delay: 0.5, duration: 0.7, y: 30 });

  // Magnetic CTA refs
  const cta1Ref = useMagneticHover(0.35);
  const cta2Ref = useMagneticHover(0.35);

  const bestSellers = PRODUCTS.filter((p) => p.isBestseller);

  // Impact calculations
  const kgWasteSaved = (calculatorBottles * 0.45).toFixed(1);
  const co2OffsetKg = (calculatorBottles * 0.85).toFixed(1);
  const hoursIlluminated = (calculatorBottles * 2500).toLocaleString();

  // Trust counters with animation
  const trustRef = useRef(null);
  const [trustVisible, setTrustVisible] = useState(false);

  useEffect(() => {
    const el = trustRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTrustVisible(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="page-home">

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 1 — HERO                                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="hero-section">
        {/* Ambient floating particles */}
        <div className="hero-particle p1" aria-hidden="true">🍃</div>
        <div className="hero-particle p2" aria-hidden="true">🌿</div>
        <div className="hero-particle p3" aria-hidden="true">✦</div>
        <div className="hero-particle p4" aria-hidden="true">🍀</div>
        <div className="hero-particle p5" aria-hidden="true">◆</div>

        {/* Extra ambient orbs */}
        <div className="hero-extra-orb hero-orb-a" aria-hidden="true" />
        <div className="hero-extra-orb hero-orb-b" aria-hidden="true" />
        <div className="hero-extra-orb hero-orb-c" aria-hidden="true" />

        <div className="hero-container">
          <div className="hero-content-col">

            <div ref={kickerRef} className="hero-kicker mono">
              <Leaf size={14} className="leaf-inline" /> Recycled Glass, Reimagined
            </div>

            <h1 ref={h1Ref}>
              It was a bottle.
              <br />
              Now it's <em>art.</em>
            </h1>

            <p ref={ledeRef} className="hero-lede">
              Every pendant, tumbler, planter, candle, and vase here started life as something
              destined for a landfill. We cut, diamond-polish, and wire it by hand into warm,
              architectural pieces for your home.
            </p>

            <motion.div
              className="hero-ctas"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                ref={cta1Ref}
                className="btn btn-solid hero-cta-primary"
                onClick={() => navigateTo("shop")}
                data-cursor-expand="true"
              >
                Shop The Collection <ArrowRight size={16} />
              </button>

              <button
                ref={cta2Ref}
                className="btn btn-ghost"
                onClick={() => navigateTo("gift-sets")}
                data-cursor-expand="true"
              >
                🎁 Explore Gift Sets
              </button>
            </motion.div>

            {/* Trust row with count-up */}
            <motion.div
              ref={trustRef}
              className="hero-trust-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {[
                { num: "50k+", label: "BOTTLES DIVERTED" },
                { num: "100%", label: "HAND POLISHED" },
                { num: "4.9★", label: "CUSTOMER RATING" },
              ].map((t, i) => (
                <div key={i} className="trust-item">
                  <span className="trust-num font-serif">{t.num}</span>
                  <span className="trust-label mono">{t.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <ScrollIndicator label="Scroll to explore" />
          </div>

          {/* Interactive Hero Art — wrapped in HeroBottle for 3D tilt */}
          <div className="hero-art-col">
            <div className="hero-interactive-card">
              <div className="hero-art-stage">
                <HeroBottle>
                  <ProductVisual product={PRODUCTS[0]} isLit={heroLit} size="hero" />
                </HeroBottle>
              </div>

              <div className="hero-switch-bar">
                <button
                  className={`hero-toggle-btn ${heroLit ? "active-glow" : ""}`}
                  onClick={() => setHeroLit(!heroLit)}
                >
                  {heroLit ? <Sun size={16} /> : <Moon size={16} />}
                  <span>{heroLit ? "Filament Glowing (Click to Dim)" : "Glass Off (Click to Glow)"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* TICKER MARQUEE                                          */}
      {/* ═══════════════════════════════════════════════════════ */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[
            "HANDCRAFTED ONE BOTTLE AT A TIME",
            "CUSTOM LASER ENGRAVING AVAILABLE",
            "WHOLESALE & HOSPITALITY ORDERS WELCOME",
            "GIFT SETS — ZERO-PLASTIC PACKAGED",
            "100% PLASTIC-FREE ECO SHIPPING",
            "HANDCRAFTED ONE BOTTLE AT A TIME",
            "CUSTOM LASER ENGRAVING AVAILABLE",
            "WHOLESALE & HOSPITALITY ORDERS WELCOME",
          ].map((item, idx) => (
            <span key={idx} className="ticker-item mono">
              {item} <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 2 — BOTTLE STORY (Pinned Cinematic)            */}
      {/* ═══════════════════════════════════════════════════════ */}
      <BottleStorySection />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 3 — CATEGORY GRID                              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding category-section">
        <div className="section-container">
          <RevealOnScroll>
            <div className="section-header-flex">
              <div>
                <div className="eyebrow mono">SHOP BY CATEGORY</div>
                <h2>Nine ways to give glass a second act</h2>
              </div>
              <button className="btn btn-ghost" onClick={() => navigateTo("shop")}>
                View All Products →
              </button>
            </div>
          </RevealOnScroll>

          <div className="category-cards-grid">
            {CATEGORIES.filter((c) => c.id !== "all").map((cat, i) => (
              <CategoryCard
                key={cat.id}
                cat={cat}
                index={i}
                onClick={() => navigateTo("shop", null, cat.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 4 — HORIZONTAL PRODUCT GALLERY                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <HorizontalScroll products={PRODUCTS.slice(0, 6)} onNavigate={navigateTo} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 5 — FEATURED BEST SELLERS                      */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding bestsellers-section">
        <div className="section-container">
          <RevealOnScroll>
            <div className="section-header-center">
              <div className="eyebrow mono">MOST LOVED PIECES</div>
              <h2>Best Sellers in Eco Glassware &amp; Lighting</h2>
              <p className="section-subtitle">
                Discovered in cocktail bars and estate wineries, crafted into functional everyday heirlooms.
              </p>
            </div>
          </RevealOnScroll>

          <div className="products-grid">
            {bestSellers.map((product, i) => (
              <PremiumProductCard
                key={product.id}
                product={product}
                index={i}
                onQuickView={setQuickViewProduct}
                onAddToCart={addToCart}
                onNavigate={navigateTo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 5b — GIFT SETS FEATURE                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      <GiftSetsSection onNavigate={navigateTo} onAddToCart={addToCart} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 6 — SUSTAINABILITY STATS                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <SustainabilityStats />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 7 — INTERACTIVE IMPACT CALCULATOR              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding impact-calc-section">
        <div className="section-container">
          <RevealOnScroll>
            <div className="impact-calc-grid">
              <div className="calc-info-col">
                <div className="eyebrow mono"><Calculator size={14} /> YOUR CIRCULAR IMPACT</div>
                <h2>Calculate your eco footprint reduction</h2>
                <p>
                  Adjust the slider to see how choosing upcycled bottle decor prevents
                  industrial glass smelting and landfill accumulation.
                </p>

                <div className="calc-slider-box">
                  <label className="slider-label">
                    <span>Number of Upcycled Items:</span>
                    <span className="slider-value mono">{calculatorBottles} Items</span>
                  </label>

                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={calculatorBottles}
                    onChange={(e) => setCalculatorBottles(parseInt(e.target.value))}
                    className="impact-range-slider"
                  />
                </div>
              </div>

              <div className="calc-metrics-col">
                <div className="metric-box">
                  <span className="metric-number font-serif">{kgWasteSaved} kg</span>
                  <span className="metric-label mono">Solid Glass Waste Prevented</span>
                </div>

                <div className="metric-box">
                  <span className="metric-number font-serif">{co2OffsetKg} kg</span>
                  <span className="metric-label mono">CO2 Emissions Avoided</span>
                </div>

                <div className="metric-box">
                  <span className="metric-number font-serif">{hoursIlluminated} hrs</span>
                  <span className="metric-label mono">Warm LED Illumination</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 8 — HANDCRAFTED PROCESS                        */}
      {/* ═══════════════════════════════════════════════════════ */}
      <section className="section-padding process-section">
        <div className="section-container">
          <RevealOnScroll>
            <div className="section-header-center">
              <div className="eyebrow mono">HOW IT'S MADE</div>
              <h2>From recycling bin to heirloom lighting</h2>
            </div>
          </RevealOnScroll>

          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <ProcessCard key={step.n} step={step} index={i} />
            ))}
          </div>
        </div>
      </section>


      {/* SECTION 10 — TESTIMONIALS CAROUSEL                     */}
      {/* ═══════════════════════════════════════════════════════ */}
      <TestimonialsCarousel reviews={REVIEWS_LIST} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* SECTION 11 — FINAL CTA                                 */}
      {/* ═══════════════════════════════════════════════════════ */}
      <FinalCTA onNavigate={navigateTo} />

    </div>
  );
}
