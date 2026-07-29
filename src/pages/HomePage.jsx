import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { CATEGORIES, PRODUCTS, PROCESS_STEPS, REVIEWS_LIST } from "../data/products";
import { ProductVisual } from "../components/BottleVisual";
import { Sparkles, ArrowRight, Star, ShieldCheck, Leaf, Flame, Sun, Moon, ShoppingBag, Eye, Calculator } from "lucide-react";

export function HomePage() {
  const { navigateTo, addToCart, setQuickViewProduct } = useCart();
  const [heroLit, setHeroLit] = useState(true);
  const [calculatorBottles, setCalculatorBottles] = useState(6);

  const bestSellers = PRODUCTS.filter((p) => p.isBestseller);

  // Impact calculations
  const kgWasteSaved = (calculatorBottles * 0.45).toFixed(1);
  const co2OffsetKg = (calculatorBottles * 0.85).toFixed(1);
  const hoursIlluminated = (calculatorBottles * 2500).toLocaleString();

  return (
    <div className="page-home">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content-col">
            <div className="hero-kicker mono">
              <Leaf size={14} className="leaf-inline" /> Recycled Glass, Reimagined
            </div>

            <h1>
              It was a bottle.
              <br />
              Now it's <em>light.</em>
            </h1>

            <p className="hero-lede">
              Every pendant, tumbler, and planter here started life as something destined for a landfill. We cut, diamond-polish, and wire it by hand into warm, architectural lighting and home decor.
            </p>

            <div className="hero-ctas">
              <button className="btn btn-solid" onClick={() => navigateTo("shop")}>
                Shop The Collection <ArrowRight size={16} />
              </button>

              <button className="btn btn-ghost" onClick={() => navigateTo("byob")}>
                Send Your Bottle →
              </button>
            </div>

            <div className="hero-trust-row">
              <div className="trust-item">
                <span className="trust-num font-serif">50k+</span>
                <span className="trust-label mono">BOTTLES DIVERTED</span>
              </div>
              <div className="trust-item">
                <span className="trust-num font-serif">100%</span>
                <span className="trust-label mono">HAND POLISHED</span>
              </div>
              <div className="trust-item">
                <span className="trust-num font-serif">4.9★</span>
                <span className="trust-label mono">CUSTOMER RATING</span>
              </div>
            </div>
          </div>

          {/* Interactive Hero Art */}
          <div className="hero-art-col">
            <div className="hero-interactive-card">
              <div className="hero-art-stage">
                <ProductVisual product={PRODUCTS[0]} isLit={heroLit} size="hero" />
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

      {/* TICKER MARQUEE */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          {[
            "HANDCRAFTED ONE BOTTLE AT A TIME",
            "CUSTOM LASER ENGRAVING AVAILABLE",
            "WHOLESALE & HOSPITALITY ORDERS WELCOME",
            "SEND YOUR OWN BOTTLE — WE'LL MAKE IT GLOW",
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

      {/* CATEGORY GRID */}
      <section className="section-padding category-section">
        <div className="section-container">
          <div className="section-header-flex">
            <div>
              <div className="eyebrow mono">SHOP BY CATEGORY</div>
              <h2>Nine ways to give glass a second act</h2>
            </div>
            <button className="btn btn-ghost" onClick={() => navigateTo("shop")}>
              View All Products →
            </button>
          </div>

          <div className="category-cards-grid">
            {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
              <div
                key={cat.id}
                className="category-card"
                onClick={() => navigateTo("shop")}
              >
                <div className="cat-card-top">
                  <span className="cat-icon-badge">✨</span>
                  <span className="cat-arrow">↗</span>
                </div>
                <h3>{cat.name}</h3>
                <p>{cat.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED BEST SELLERS */}
      <section className="section-padding bestsellers-section">
        <div className="section-container">
          <div className="section-header-center">
            <div className="eyebrow mono">MOST LOVED PIECES</div>
            <h2>Best Sellers in Eco Glassware & Lighting</h2>
            <p className="section-subtitle">
              Discovered in cocktail bars and estate wineries, crafted into functional everyday heirlooms.
            </p>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-card-visual">
                  <ProductVisual product={product} isLit={true} size="card" />

                  <div className="product-card-actions-overlay">
                    <button
                      className="card-action-btn"
                      onClick={() => setQuickViewProduct(product)}
                      title="Quick Preview"
                    >
                      <Eye size={18} /> Quick View
                    </button>

                    <button
                      className="card-action-btn solid"
                      onClick={() => addToCart(product, 1)}
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

                  <h3 onClick={() => navigateTo("pdp", product.id)} className="product-title-link">
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
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE IMPACT CALCULATOR */}
      <section className="section-padding impact-calc-section">
        <div className="section-container">
          <div className="impact-calc-grid">
            <div className="calc-info-col">
              <div className="eyebrow mono"><Calculator size={14} /> YOUR CIRCULAR IMPACT</div>
              <h2>Calculate your eco footprint reduction</h2>
              <p>
                Adjust the slider to see how choosing upcycled bottle decor prevents industrial glass smelting and landfill accumulation.
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
        </div>
      </section>

      {/* HANDCRAFTED PROCESS */}
      <section className="section-padding process-section">
        <div className="section-container">
          <div className="section-header-center">
            <div className="eyebrow mono">HOW IT'S MADE</div>
            <h2>From recycling bin to heirloom lighting</h2>
          </div>

          <div className="process-grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="process-card">
                <span className="step-num mono">{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <div className="step-detail-pill mono">{step.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BYOB FEATURE BANNER */}
      <section className="byob-banner-section">
        <div className="section-container">
          <div className="byob-card-inner">
            <div className="byob-content">
              <div className="eyebrow mono">BYOB — BRING YOUR OWN BOTTLE</div>
              <h2>Have a special bottle with a memory attached?</h2>
              <p>
                A wedding toast, a milestone celebration, or a rare vintage bottle — mail it to our studio. We will diamond-cut, engrave, and wire it into a custom lamp or tumbler set made specifically from your bottle.
              </p>
              <button className="btn btn-solid" onClick={() => navigateTo("byob")}>
                Launch Custom BYOB Studio <ArrowRight size={16} />
              </button>
            </div>

            <div className="byob-visual-accent">
              <div className="glowing-ring r1" />
              <div className="glowing-ring r2" />
              <span className="byob-art-text mono">YOUR BOTTLE<br />OUR CRAFT</span>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="section-padding reviews-section">
        <div className="section-container">
          <div className="section-header-center">
            <div className="eyebrow mono">VERIFIED FEEDBACK</div>
            <h2>What our eco decor community says</h2>
          </div>

          <div className="reviews-cards-grid">
            {REVIEWS_LIST.map((rev) => (
              <div key={rev.id} className="review-card">
                <div className="stars-row">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#e7a33e" color="#e7a33e" />
                  ))}
                </div>
                <p className="review-quote">"{rev.quote}"</p>
                <div className="review-author-info">
                  <strong>{rev.author}</strong>
                  <span className="author-role">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
