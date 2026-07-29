import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Building2, Send, CheckCircle2, Award, Sparkles } from "lucide-react";

export function WholesalePage() {
  const { showToast } = useCart();
  const [unitsCount, setUnitsCount] = useState(50);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    venueType: "Hotel & Resort",
    message: ""
  });

  // Wholesale tiered pricing calculation
  const unitCostEstimate = unitsCount >= 200 ? 38 : unitsCount >= 50 ? 46 : 54;
  const totalEstimate = unitsCount * unitCostEstimate;

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Wholesale inquiry submitted! Our team will contact you within 24 hours.");
    setFormData({ name: "", business: "", email: "", venueType: "Hotel & Resort", message: "" });
  };

  return (
    <div className="page-wholesale section-padding">
      <div className="section-container">
        {/* Banner */}
        <div className="wholesale-banner">
          <div className="eyebrow mono">
            <Building2 size={14} /> HOSPITALITY & COMMERCIAL PARTNERSHIPS
          </div>
          <h1>Custom Eco Glassware & Lighting for Bars, Hotels, and Restaurants</h1>
          <p>
            We supply boutique hotels, Michelin-starred bistros, and luxury resorts with custom upcycled lighting fixtures and co-branded drinking sets made from reclaimed spirit bottles.
          </p>
        </div>

        {/* Wholesale Estimator & Benefits Grid */}
        <div className="wholesale-grid">
          {/* Interactive Calculator */}
          <div className="wholesale-calc-card">
            <h3>Interactive Wholesale Estimator</h3>
            <p>Slide to estimate commercial volume discounts:</p>

            <div className="calc-slider-group">
              <div className="slider-header mono">
                <span>PROJECT VOLUME:</span>
                <span>{unitsCount} UNITS</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={unitsCount}
                onChange={(e) => setUnitsCount(parseInt(e.target.value))}
                className="wholesale-range-slider"
              />
            </div>

            <div className="calc-result-rows">
              <div className="row">
                <span>Volume Tier:</span>
                <span className="mono">{unitsCount >= 200 ? "TIER 3 (40% OFF)" : unitsCount >= 50 ? "TIER 2 (25% OFF)" : "TIER 1 (15% OFF)"}</span>
              </div>
              <div className="row">
                <span>Est. Unit Price:</span>
                <span className="mono">${unitCostEstimate}.00 / unit</span>
              </div>
              <div className="row total">
                <span>Est. Project Total:</span>
                <span className="price font-serif">${totalEstimate.toLocaleString()}.00</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="wholesale-form-card">
            <h3>Request Commercial Quote</h3>
            <form onSubmit={handleSubmit} className="wholesale-form">
              <div className="field-group">
                <label>Contact Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Jean-Luc Picard"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="field-group">
                <label>Business / Venue Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. St. Regis Bistro & Bar"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                />
              </div>

              <div className="field-group">
                <label>Commercial Email</label>
                <input
                  type="email"
                  required
                  placeholder="j.picard@stregis.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="field-group">
                <label>Property Type</label>
                <select
                  value={formData.venueType}
                  onChange={(e) => setFormData({ ...formData, venueType: e.target.value })}
                >
                  <option value="Hotel & Resort">Hotel & Resort</option>
                  <option value="Restaurant & Bar">Restaurant & Bar</option>
                  <option value="Corporate Gifting">Corporate Gifting</option>
                  <option value="Interior Design Firm">Interior Design Firm</option>
                </select>
              </div>

              <div className="field-group">
                <label>Project Scope & Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your lighting layout, preferred glass tints, or custom logo engraving..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className="btn btn-solid submit-wholesale-btn">
                Submit Quote Request <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
