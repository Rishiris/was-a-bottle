import React from "react";
import { useCart } from "../context/CartContext";
import { Leaf, Award, Recycle, ShieldCheck, Heart, ArrowRight } from "lucide-react";

export function OurStoryPage() {
  const { navigateTo } = useCart();

  return (
    <div className="page-story section-padding">
      <div className="section-container">
        {/* Story Hero Banner */}
        <div className="story-hero-banner">
          <div className="eyebrow mono"><Leaf size={14} /> OUR CIRCULAR ECONOMY MISSION</div>
          <h1>Over 50,000 bottles saved. Zero glass wasted.</h1>
          <p className="story-lede">
            Founded in 2014, Was A Bottle began with a single question: Why should a glass bottle that took thousands of years to forge end up in a trash dump after 45 minutes of dinner?
          </p>
        </div>

        {/* Narrative & Timeline Grid */}
        <div className="story-narrative-grid">
          <div className="story-text-col">
            <h2>The Craft Behind The Light</h2>
            <p>
              Every year, over 28 billion glass bottles are thrown into American landfills. Glass takes over 1 million years to decompose, yet it is one of the most durable, beautiful materials on Earth.
            </p>
            <p>
              We partner directly with local Pacific Northwest wineries, craft cocktail lounges, and eco-minded hospitality groups. Our team hand-collects bottles, scores them using precision diamond blades, stress-relieves the glass in specialized kilns, and sands every rim to a silken finish.
            </p>

            <div className="story-values-list">
              <div className="value-card">
                <Recycle size={24} className="val-icon" />
                <div>
                  <h4>100% Upcycled Material</h4>
                  <p>Every vessel is genuine reclaimed bottle glass, never newly molded factory stock.</p>
                </div>
              </div>

              <div className="value-card">
                <ShieldCheck size={24} className="val-icon" />
                <div>
                  <h4>UL Safety Tested</h4>
                  <p>Our lighting components meet North American UL and ETL electrical safety standards.</p>
                </div>
              </div>

              <div className="value-card">
                <Heart size={24} className="val-icon" />
                <div>
                  <h4>Made by Human Hands</h4>
                  <p>Crafted in our solar-powered glass studio in Portland, Oregon.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="story-impact-col">
            <div className="impact-counter-card">
              <span className="mono eyebrow">LANDFILL STATS & MILESTONES</span>

              <div className="impact-big-stat">
                <span className="num font-serif">52,840</span>
                <span className="label mono">BOTTLES DIVERTED SINCE 2014</span>
              </div>

              <div className="impact-stat-divider" />

              <div className="impact-big-stat">
                <span className="num font-serif">23,778 kg</span>
                <span className="label mono">SOLID GLASS RECYCLED</span>
              </div>

              <div className="impact-stat-divider" />

              <div className="impact-big-stat">
                <span className="num font-serif">44,914 kg</span>
                <span className="label mono">CO2 REDUCTION METRIC</span>
              </div>

              <button className="btn btn-solid story-cta-btn" onClick={() => navigateTo("shop")}>
                Explore Upcycled Collection <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
