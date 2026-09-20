import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { useSectionReveal } from "../hooks/useSectionReveal";
import {
  Leaf, Award, Recycle, ShieldCheck, Heart, ArrowRight,
  Zap, Globe, Users, Star, Package, Clock
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   OUR STORY PAGE — Real brand content for Was A Bottle
   Founded April 2013 by Sandy Chugh & Vashu Chugh, New Delhi
───────────────────────────────────────────────────────────── */

function RevealSection({ children, delay = 0 }) {
  const { ref, isVisible } = useSectionReveal({ threshold: 0.15 });
  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

const TIMELINE = [
  {
    year: "April 2013",
    icon: "🍽️",
    title: "A Restaurant, a Tight Budget, and a Happy Accident",
    body: "Sandy and Vashu Chugh are setting up a restaurant on a busy high street in New Delhi. Budget is tight. Instead of buying glassware, they grab empty wine and liquor bottles from the bar, score them with a glass cutter, and shape them into tumblers and pendant lights. The restaurant's customers don't just notice — they ask where they can buy them."
  },
  {
    year: "Late 2013",
    icon: "📰",
    title: "Media Attention & The Pivot Decision",
    body: "The upcycled glassware and lighting at their restaurant becomes a media story. Press coverage pours in. The founders realise the restaurant was just the proving ground — the real business is the bottles. When the restaurant closes, the decision is made: Was A Bottle becomes a full-time pursuit."
  },
  {
    year: "2014",
    icon: "🏭",
    title: "Building the Studio & Hiring Craftsmen",
    body: "A team of skilled glass cutters, electricians, and woodworkers is assembled in New Delhi. Each person is trained in Was A Bottle's multi-stage diamond sanding and thermal shock techniques. Sandy's hospitality background informs every detail — quality, durability, and the customer's experience with the product come first."
  },
  {
    year: "2016",
    icon: "🌍",
    title: "Going Global",
    body: "The first international wholesale order arrives — a boutique hotel in London requests 40 custom pendant lights. A B2B hospitality line launches, serving hotels, restaurants, and retail chains who want curated sustainable decor that tells a story. The custom laser engraving service begins, adding personalised products to the range."
  },
  {
    year: "2019",
    icon: "🏆",
    title: "50,000 Bottles Diverted",
    body: "A significant milestone: the team calculates that 50,000 glass bottles have been saved from landfill since the studio opened. At an average of 450 grams per bottle, that is 22,500 kg of glass diverted — glass that would otherwise take over one million years to decompose."
  },
  {
    year: "Today",
    icon: "✨",
    title: "Art, Craft, and a Circular Future",
    body: "Was A Bottle today employs a team of dedicated artisans creating lighting, drinkware, planters, platters, candles, jewellery, and engraved heirlooms from post-consumer glass. Every product still passes through the same hands-on process Sandy and Vashu began in that New Delhi restaurant in 2013."
  }
];

const VALUES = [
  {
    icon: <Recycle size={28} />,
    color: "#52b788",
    title: "100% Post-Consumer Glass",
    body: "Every piece we make starts with a bottle that was on its way to a landfill. We never use newly manufactured glass stock. Each product is genuinely upcycled — cut, sanded, fired, or laser-engraved from rescued glass."
  },
  {
    icon: <Heart size={28} />,
    color: "#e7a33e",
    title: "Handcrafted by Real People",
    body: "Our studio employs skilled glass artisans, electricians, and woodworkers in New Delhi. Each piece passes through six to eight pairs of hands before it ships. We believe in the human mark — every slight variation in a tumbler or pendant is a signature, not a flaw."
  },
  {
    icon: <Globe size={28} />,
    color: "#4a90e2",
    title: "Minimal Carbon Footprint",
    body: "Manufacturing new glass requires heating raw silica sand to 1,700°C — an enormously energy-intensive process. By upcycling existing glass, we eliminate that energy cost entirely. Our packaging is 100% recycled kraft paper with zero plastic components."
  },
  {
    icon: <Award size={28} />,
    color: "#e07b54",
    title: "Precision Craft Standards",
    body: "A rim that is anything less than perfectly smooth never ships. Our four-stage diamond sanding process (60 → 120 → 400 → 1200 grit) and propane flame-polish gives every drinking edge a silky finish that rivals luxury glass brands. Our electrical components are UL-listed and safety tested."
  },
  {
    icon: <Users size={28} />,
    color: "#b590ca",
    title: "B2B & Hospitality Expertise",
    body: "Was A Bottle supplies bespoke collections to boutique hotels, restaurant groups, and retail chains worldwide. Our hospitality team manages custom volume orders, branded engraving, and coordinated design schemes for entire F&B spaces."
  },
  {
    icon: <Zap size={28} />,
    color: "#52b788",
    title: "The Second Life Promise",
    body: "Every product is designed with its next life in mind. Our candles become drinking glasses. Our platters become wall art. Our pendants outlive their bulbs by decades. We believe a good material object should never need to be discarded."
  }
];

const IMPACT_STATS = [
  { num: "50,000+", label: "Bottles Rescued from Landfill", sub: "And counting" },
  { num: "22,500 kg", label: "Glass Diverted", sub: "Since 2013" },
  { num: "11,250 kg", label: "CO₂ Avoided", sub: "vs. new glass production" },
  { num: "2013", label: "Founded in New Delhi", sub: "By Sandy & Vashu Chugh" },
];

const PROCESS_STEPS = [
  {
    n: "01",
    icon: "🍾",
    title: "Source",
    body: "Bottles are collected from restaurants, bars, hotels, and distilleries. Each is assessed for glass thickness, tint quality, and structural integrity. Cracked or unsuitable bottles are returned for conventional recycling."
  },
  {
    n: "02",
    icon: "💎",
    title: "Score & Separate",
    body: "A tungsten-carbide scoring wheel creates a precise 0.3mm groove around the circumference. Alternating hot and cold water creates thermal stress that separates the glass cleanly along this line."
  },
  {
    n: "03",
    icon: "🔧",
    title: "Sand & Polish",
    body: "Four stages of wet diamond belt sanding (60 → 120 → 400 → 1200 grit) bring the raw edge to near-perfect smoothness. A propane flame-polish fuses any remaining microscopic irregularities."
  },
  {
    n: "04",
    icon: "⚡",
    title: "Craft & Wire",
    body: "Lighting pieces are fitted with UL-listed E26 or E12 sockets, hand-twisted hemp or cotton braided cords, and solid brass or matte black ceiling hardware. Candles are poured and wicked. Platters are kiln-fired."
  },
  {
    n: "05",
    icon: "📦",
    title: "Pack & Ship",
    body: "Each product is individually wrapped in recycled kraft tissue, placed in an unbleached kraft box, and sealed with compostable tape. Zero plastic is used anywhere in our packaging chain."
  }
];

export function OurStoryPage() {
  const { navigateTo } = useCart();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="page-story">

      {/* ── HERO ── */}
      <section className="story-hero-section">
        <div className="story-hero-orb story-hero-orb-a" />
        <div className="story-hero-orb story-hero-orb-b" />
        <div className="section-container">
          <RevealSection>
            <div className="eyebrow mono">
              <Leaf size={14} style={{ display: "inline", marginRight: 6 }} />
              FOUNDED APRIL 2013 · NEW DELHI, INDIA
            </div>
            <h1 className="story-hero-h1">
              It was a restaurant.<br />
              Then it was a <em>revolution.</em>
            </h1>
            <p className="story-hero-lede">
              Was A Bottle began with a tight budget, an empty bar, and a glass cutter.
              What started as a practical solution to furnish a restaurant in New Delhi became
              a global movement to give every glass bottle a second life worth living.
            </p>
            <div className="story-hero-founders">
              <div className="founder-chip">
                <span className="founder-emoji">👨‍💼</span>
                <div>
                  <div className="founder-name">Sandy Chugh</div>
                  <div className="founder-role mono">Co-founder · Hospitality & Operations</div>
                </div>
              </div>
              <div className="founder-chip">
                <span className="founder-emoji">👩‍🎨</span>
                <div>
                  <div className="founder-name">Vashu Chugh</div>
                  <div className="founder-role mono">Co-founder · MBA · Design Lead</div>
                </div>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── WORKSHOP IMAGE BANNER ── */}
      <section className="story-workshop-banner">
        <img
          src="/images/workshop.png"
          alt="Was A Bottle artisan cutting glass bottles in the New Delhi studio"
          className="story-workshop-img"
          loading="lazy"
        />
        <div className="story-workshop-overlay">
          <blockquote className="story-pullquote">
            "We cut one bottle, held a bulb inside,<br />and the whole room changed colour."
            <cite>— Sandy Chugh, Co-founder</cite>
          </blockquote>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="story-impact-strip section-padding">
        <div className="section-container">
          <div className="story-impact-grid">
            {IMPACT_STATS.map((s, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className="story-impact-card">
                  <div className="impact-num font-serif">{s.num}</div>
                  <div className="impact-label">{s.label}</div>
                  <div className="impact-sub mono">{s.sub}</div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGIN STORY ── */}
      <section className="section-padding story-origin-section">
        <div className="section-container">
          <div className="story-origin-grid">
            <RevealSection>
              <div className="eyebrow mono">THE ORIGIN</div>
              <h2>It started with a budget problem.</h2>
              <p>
                In April 2013, Sandy and Vashu Chugh were fitting out their new restaurant on a busy high street
                in New Delhi. Glassware was expensive. The bar was full of empty wine, gin, vodka, and beer
                bottles destined for the bin.
              </p>
              <p>
                Sandy — who had worked across ten F&B outlets in his career — knew exactly how much good glass
                was being wasted every night. Vashu, with her design background and MBA, saw something else:
                a product. They bought a glass cutter, watched some videos, and started cutting.
              </p>
              <p>
                The restaurant opened with tumblers made from wine bottle bases, pendants wired through
                inverted gin bottles, and platters slumped flat in a borrowed kiln. Customers didn't just
                appreciate the sustainability story — they wanted to take the glasses home. The restaurant
                became a showroom for something much bigger.
              </p>
              <p>
                When the restaurant eventually closed, there was no question what to do next. Was A Bottle
                became a full-time studio, hiring glass cutters, electricians, and woodworkers. Twelve years
                later, every piece still passes through the same hands-on process that started in that kitchen.
              </p>
              <button className="btn btn-solid" onClick={() => navigateTo("shop")} style={{ marginTop: "1.5rem" }}>
                Shop the Collection <ArrowRight size={16} />
              </button>
            </RevealSection>

            <RevealSection delay={0.15}>
              <div className="story-origin-stats-stack">
                <div className="origin-stat-card">
                  <Clock size={20} color="#52b788" />
                  <div>
                    <div className="origin-stat-num font-serif">12+ Years</div>
                    <div className="origin-stat-label mono">of upcycling glass</div>
                  </div>
                </div>
                <div className="origin-stat-card">
                  <Package size={20} color="#e7a33e" />
                  <div>
                    <div className="origin-stat-num font-serif">9 Categories</div>
                    <div className="origin-stat-label mono">of handcrafted products</div>
                  </div>
                </div>
                <div className="origin-stat-card">
                  <Star size={20} color="#4a90e2" />
                  <div>
                    <div className="origin-stat-num font-serif">4.9★</div>
                    <div className="origin-stat-label mono">average customer rating</div>
                  </div>
                </div>
                <div className="origin-stat-card">
                  <Globe size={20} color="#b590ca" />
                  <div>
                    <div className="origin-stat-num font-serif">Global</div>
                    <div className="origin-stat-label mono">hospitality & retail clients</div>
                  </div>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="section-padding story-timeline-section">
        <div className="section-container">
          <RevealSection>
            <div className="section-header-center">
              <div className="eyebrow mono">OUR JOURNEY</div>
              <h2>Twelve years in the making</h2>
            </div>
          </RevealSection>

          <div className="story-timeline">
            {TIMELINE.map((item, i) => (
              <RevealSection key={i} delay={i * 0.1}>
                <div className={`timeline-item ${i % 2 === 0 ? "timeline-left" : "timeline-right"}`}>
                  <div className="timeline-connector">
                    <div className="timeline-dot">
                      <span>{item.icon}</span>
                    </div>
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-year mono">{item.year}</div>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-body">{item.body}</p>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE PROCESS ── */}
      <section className="section-padding story-process-section">
        <div className="section-container">
          <RevealSection>
            <div className="section-header-center">
              <div className="eyebrow mono">THE CRAFT</div>
              <h2>From bottle to heirloom — five steps</h2>
              <p className="section-subtitle">
                Every Was A Bottle product follows the same five-stage process developed in 2013
                and refined over 50,000 pieces.
              </p>
            </div>
          </RevealSection>

          <div className="story-process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <RevealSection key={i} delay={i * 0.08}>
                <div className="process-step-card">
                  <div className="process-step-num mono">{step.n}</div>
                  <div className="process-step-icon">{step.icon}</div>
                  <h3 className="process-step-title">{step.title}</h3>
                  <p className="process-step-body">{step.body}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-padding story-values-section">
        <div className="section-container">
          <RevealSection>
            <div className="section-header-center">
              <div className="eyebrow mono">WHAT WE STAND FOR</div>
              <h2>Six commitments we never compromise on</h2>
            </div>
          </RevealSection>

          <div className="story-values-grid">
            {VALUES.map((v, i) => (
              <RevealSection key={i} delay={i * 0.07}>
                <div className="story-value-card" style={{ "--val-color": v.color }}>
                  <div className="val-icon-wrap" style={{ color: v.color }}>
                    {v.icon}
                  </div>
                  <h3 className="val-title">{v.title}</h3>
                  <p className="val-body">{v.body}</p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ── */}
      <section className="story-closing-cta section-padding">
        <div className="section-container">
          <RevealSection>
            <div className="story-closing-inner">
              <div className="eyebrow mono">JOIN THE MOVEMENT</div>
              <h2>Every bottle you buy is a bottle<br /><em>not</em> in a landfill.</h2>
              <p>
                When you choose a Was A Bottle product, you're funding the livelihoods of skilled
                artisans in New Delhi, reducing demand for energy-intensive new glass production,
                and owning a piece of craft that will outlast any mass-produced alternative.
              </p>
              <div className="story-closing-btns">
                <button className="btn btn-solid" onClick={() => navigateTo("shop")}>
                  Explore the Collection <ArrowRight size={16} />
                </button>
                <button className="btn btn-ghost" onClick={() => navigateTo("gift-sets")}>
                  🎁 Browse Gift Sets
                </button>
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

    </div>
  );
}
