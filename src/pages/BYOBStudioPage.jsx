import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Sparkles, ArrowRight, ShieldCheck, Tag, Package, Check, HelpCircle } from "lucide-react";

export function BYOBStudioPage() {
  const { addToCart, navigateTo } = useCart();

  const [step, setStep] = useState(1);
  const [bottleType, setBottleType] = useState("Wine");
  const [bottleNote, setBottleNote] = useState("");
  const [productType, setProductType] = useState("Pendant Lamp");
  const [finish, setFinish] = useState("Twisted Hemp Cord & Brass");
  const [engravingText, setEngravingText] = useState("");

  const bottleTypes = [
    { id: "Wine", label: "750ml Wine Bottle", desc: "Bordeaux, Pinot Noir, Champagne" },
    { id: "Whiskey", label: "Bourbon / Whiskey", desc: "Square or rounded heavy glass" },
    { id: "Gin", label: "Gin or Tequila", desc: "Cobalt blue, emerald, or embossed" },
    { id: "Custom", label: "Other / Special Vessel", desc: "Perfume, decanter, vintage jar" },
  ];

  const productTransformations = [
    { id: "Pendant Lamp", label: "Pendant Light Fixture", basePrice: 95, desc: "Scored shoulder, fitted with E26 socket & Edison bulb" },
    { id: "Tumbler Set", label: "Lowball Tumblers (Set of 2)", basePrice: 42, desc: "Punt base tumblers, diamond edge polished" },
    { id: "Soy Candle", label: "Artisan Soy Wax Candle", basePrice: 34, desc: "Filled with 100% natural soy wax & wood wick" },
    { id: "Planter Vase", label: "Self-Watering Planter", basePrice: 38, desc: "Split horizontal planter with wicking cord" },
  ];

  const hardwareFinishes = [
    "Twisted Hemp Cord & Brass",
    "Braided Black Linen & Matte Black",
    "Raw Copper Wire & Copper Canopy",
    "Brushed Nickel & Silver Wire",
  ];

  const currentTransformation = productTransformations.find((t) => t.id === productType) || productTransformations[0];
  const engravingCost = engravingText.trim() ? 15 : 0;
  const totalPrice = currentTransformation.basePrice + engravingCost;

  const handleCompleteBYOB = () => {
    const customItem = {
      id: `byob-${Date.now()}`,
      name: `BYOB Custom: ${productType} (${bottleType} Bottle)`,
      category: "BYOB Custom",
      price: totalPrice,
      provenance: `Customer Mail-in Bottle (${bottleType}) - Note: "${bottleNote || 'Standard mail-in'}"`,
      bottleType,
      glassTint: "Customer Choice",
      dimensions: "Custom",
      inStock: true,
      description: `Custom ${productType} transformation using hardware finish: ${finish}.`
    };

    addToCart(customItem, 1, engravingText);
  };

  return (
    <div className="page-byob section-padding">
      <div className="section-container">
        {/* Studio Header */}
        <div className="byob-header-banner">
          <div className="eyebrow mono">
            <Sparkles size={14} /> INTERACTIVE BOTTLE CUSTOMIZER
          </div>
          <h1>BYOB — Bring Your Own Bottle Studio</h1>
          <p>
            Send us a bottle from a wedding, milestone, or special night out. We'll diamond-cut, hand-polish, and wire it into a custom fixture built specifically for you.
          </p>
        </div>

        {/* Progress Tracker */}
        <div className="byob-steps-tracker">
          {[
            { num: 1, label: "1. Select Bottle" },
            { num: 2, label: "2. Transformation" },
            { num: 3, label: "3. Hardware & Finish" },
            { num: 4, label: "4. Engraving & Review" },
          ].map((s) => (
            <div
              key={s.num}
              className={`step-tracker-item ${step === s.num ? "active" : ""} ${
                step > s.num ? "completed" : ""
              }`}
              onClick={() => setStep(s.num)}
            >
              <span className="step-num mono">{s.num}</span>
              <span className="step-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Studio Workspace Grid */}
        <div className="byob-workspace-grid">
          {/* Configuration Controls */}
          <div className="byob-controls-panel">
            {step === 1 && (
              <div className="byob-step-box">
                <h3>Step 1: What type of bottle are you sending us?</h3>
                <p className="step-desc">
                  We accept wine, liquor, champagne, and spirit bottles of all shapes and sizes.
                </p>

                <div className="options-grid">
                  {bottleTypes.map((b) => (
                    <div
                      key={b.id}
                      className={`option-card ${bottleType === b.id ? "selected" : ""}`}
                      onClick={() => setBottleType(b.id)}
                    >
                      <h4>{b.label}</h4>
                      <p>{b.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="custom-note-field">
                  <label className="mono">BOTTLE DETAILS / MEMORY NOTE (OPTIONAL):</label>
                  <input
                    type="text"
                    placeholder="e.g. 2018 Veuve Clicquot from wedding night"
                    value={bottleNote}
                    onChange={(e) => setBottleNote(e.target.value)}
                  />
                </div>

                <button className="btn btn-solid next-step-btn" onClick={() => setStep(2)}>
                  Continue to Transformation →
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="byob-step-box">
                <h3>Step 2: How would you like us to transform it?</h3>
                <p className="step-desc">Select the final product function for your glass vessel.</p>

                <div className="options-grid">
                  {productTransformations.map((p) => (
                    <div
                      key={p.id}
                      className={`option-card ${productType === p.id ? "selected" : ""}`}
                      onClick={() => setProductType(p.id)}
                    >
                      <div className="card-top-flex">
                        <h4>{p.label}</h4>
                        <span className="option-price mono">${p.basePrice}</span>
                      </div>
                      <p>{p.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="button-row">
                  <button className="btn btn-ghost" onClick={() => setStep(1)}>
                    ← Back
                  </button>
                  <button className="btn btn-solid" onClick={() => setStep(3)}>
                    Continue to Hardware →
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="byob-step-box">
                <h3>Step 3: Choose Hardware & Cord Finish</h3>
                <p className="step-desc">Match your home's fixture accents.</p>

                <div className="options-grid">
                  {hardwareFinishes.map((f) => (
                    <div
                      key={f}
                      className={`option-card ${finish === f ? "selected" : ""}`}
                      onClick={() => setFinish(f)}
                    >
                      <h4>{f}</h4>
                    </div>
                  ))}
                </div>

                <div className="button-row">
                  <button className="btn btn-ghost" onClick={() => setStep(2)}>
                    ← Back
                  </button>
                  <button className="btn btn-solid" onClick={() => setStep(4)}>
                    Continue to Engraving →
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="byob-step-box">
                <h3>Step 4: Custom Laser Engraving & Final Review</h3>
                <p className="step-desc">
                  Add permanent laser-etched text (names, dates, coordinates).
                </p>

                <div className="engraving-input-box">
                  <label className="mono">LASER ENGRAVED TEXT (+$15.00):</label>
                  <input
                    type="text"
                    maxLength={35}
                    placeholder="e.g. R & M • July 14, 2026"
                    value={engravingText}
                    onChange={(e) => setEngravingText(e.target.value)}
                  />
                </div>

                <div className="button-row">
                  <button className="btn btn-ghost" onClick={() => setStep(3)}>
                    ← Back
                  </button>
                  <button className="btn btn-solid complete-order-btn" onClick={handleCompleteBYOB}>
                    Order Custom Transformation — ${totalPrice.toFixed(2)}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Live Preview Summary Column */}
          <div className="byob-summary-panel">
            <div className="summary-card-inner">
              <span className="summary-eyebrow mono">LIVE CUSTOMIZATION SPEC</span>

              <h3>{productType}</h3>
              <p className="summary-sub">From your {bottleType} Bottle</p>

              <div className="summary-specs-list">
                <div className="summary-spec-row">
                  <span className="label">Bottle Type:</span>
                  <span className="val">{bottleType}</span>
                </div>
                <div className="summary-spec-row">
                  <span className="label">Transformation:</span>
                  <span className="val">{productType}</span>
                </div>
                <div className="summary-spec-row">
                  <span className="label">Hardware Finish:</span>
                  <span className="val">{finish}</span>
                </div>
                {engravingText && (
                  <div className="summary-spec-row">
                    <span className="label">Engraving:</span>
                    <span className="val">"{engravingText}" (+$15)</span>
                  </div>
                )}
              </div>

              <div className="summary-price-total">
                <span>Estimated Price:</span>
                <span className="price font-serif">${totalPrice.toFixed(2)}</span>
              </div>

              <div className="byob-instructions-box">
                <Package size={18} className="box-icon" />
                <div>
                  <h5>How shipping your bottle works:</h5>
                  <p>
                    After placing your order, we will email you a prepaid, padded shipping kit with protective bubble sleeve to safely mail your bottle to our studio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
