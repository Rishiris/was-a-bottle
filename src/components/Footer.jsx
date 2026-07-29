import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Send, Leaf, Recycle, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const { navigateTo, showToast } = useCart();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      showToast("Thank you for subscribing! Use promo code GREENGLOW for 15% off.");
      setEmail("");
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top-banner">
          <div className="footer-headline">
            <h3>Sustainable, planet-friendly, handcrafted by glass artisans.</h3>
            <p>Join over 25,000 homeowners making circular decor standard.</p>
          </div>

          <form className="footer-newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email for 15% off..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email address"
            />
            <button type="submit" className="newsletter-submit-btn">
              Subscribe <Send size={16} />
            </button>
          </form>
        </div>

        {/* Eco Trust Badges */}
        <div className="footer-eco-badges">
          <div className="eco-badge-card">
            <Recycle size={28} className="badge-icon" />
            <div>
              <h5>50,000+ Bottles Saved</h5>
              <p>Diverted directly from municipal landfills</p>
            </div>
          </div>

          <div className="eco-badge-card">
            <Leaf size={28} className="badge-icon" />
            <div>
              <h5>Plastic-Free Shipping</h5>
              <p>Recycled cardboard & water-activated tape</p>
            </div>
          </div>

          <div className="eco-badge-card">
            <ShieldCheck size={28} className="badge-icon" />
            <div>
              <h5>UL Electric Certified</h5>
              <p>Hand-wired to rigorous electrical safety codes</p>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-col brand-col">
            <div className="wordmark-btn" onClick={() => navigateTo("home")}>
              <span className="wordmark-was">was a</span>
              <span className="wordmark-bottle">Bottle</span>
            </div>
            <p className="footer-mission">
              Every lamp, glass tumbler, and planter started life as discarded glass. We cut, diamond-polish, and illuminate waste into heirlooms.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="mono">SHOP</h4>
            <button onClick={() => navigateTo("shop")}>All Collection</button>
            <button onClick={() => navigateTo("shop")}>Pendant Lighting</button>
            <button onClick={() => navigateTo("shop")}>Drinkware & Tumblers</button>
            <button onClick={() => navigateTo("shop")}>Soy Wax Candles</button>
            <button onClick={() => navigateTo("byob")}>BYOB Custom Studio</button>
          </div>

          <div className="footer-col">
            <h4 className="mono">COMPANY</h4>
            <button onClick={() => navigateTo("story")}>Our Circular Story</button>
            <button onClick={() => navigateTo("wholesale")}>Wholesale & Hotels</button>
            <button onClick={() => navigateTo("story")}>Landfill Impact Report</button>
            <button onClick={() => navigateTo("byob")}>Custom Laser Engraving</button>
          </div>

          <div className="footer-col">
            <h4 className="mono">CONTACT & SUPPORT</h4>
            <a href="mailto:hello@wasabottle.com" className="footer-contact-link">hello@wasabottle.com</a>
            <p className="support-hours">Mon–Fri: 9am – 5pm PST</p>
            <div className="social-tags">
              <span>Instagram</span>
              <span>Pinterest</span>
              <span>TikTok</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal */}
        <div className="footer-bottom-bar">
          <span>© 2014–2026 WAS A BOTTLE LLC. All rights reserved.</span>
          <div className="legal-links">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sustainability Certifications</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
