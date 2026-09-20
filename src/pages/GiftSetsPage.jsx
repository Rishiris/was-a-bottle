import React from "react";
import { useCart } from "../context/CartContext";
import { GIFT_SETS } from "../data/products";
import { GiftSetsSection } from "../components/home/GiftSetsSection";
import { ArrowRight, Gift, Sparkles, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export function GiftSetsPage() {
  const { navigateTo, addToCart } = useCart();

  return (
    <div className="page-gift-sets">
      {/* Page Hero Banner */}
      <section className="gift-sets-hero-banner">
        <div className="gs-hero-orb gs-hero-orb-a" aria-hidden="true" />
        <div className="gs-hero-orb gs-hero-orb-b" aria-hidden="true" />
        <div className="section-container">
          <div className="gs-hero-content">
            <div className="eyebrow mono">
              <Sparkles size={14} style={{ display: "inline", marginRight: "6px" }} />
              CURATED ECO GIFT SETS
            </div>
            <h1>The gift of<br /><em>reclaimed glass.</em></h1>
            <p className="gs-hero-sub">
              Every set is assembled by hand, packed in 100% recycled Kraft materials,
              and made from genuinely upcycled glass bottles. Gifts that carry a story.
            </p>
            <div className="gs-hero-badges">
              <span><ShieldCheck size={14} /> Plastic-Free Packaging</span>
              <span><Truck size={14} /> Carbon Neutral Shipping</span>
              <span><RefreshCw size={14} /> 30-Day Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Sets Grid */}
      <GiftSetsSection onNavigate={navigateTo} onAddToCart={addToCart} />

      {/* Custom Engraving Callout */}
      <section className="section-padding gs-engraving-callout">
        <div className="section-container">
          <div className="gs-engrave-card">
            <div className="gs-engrave-icon">✦</div>
            <div className="gs-engrave-body">
              <div className="eyebrow mono">FREE WITH EVERY GIFT SET</div>
              <h2>Add custom laser engraving</h2>
              <p>
                Include names, a date, or a short personal message — permanently laser-etched
                into the glass during checkout. No extra charge on gift sets.
              </p>
              <button className="btn btn-solid" onClick={() => navigateTo("shop")}>
                Browse All Engraved Products <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
