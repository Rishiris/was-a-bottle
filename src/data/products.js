export const CATEGORIES = [
  { id: "all", name: "All Products", tag: "Complete collection", icon: "sparkles" },
  { id: "Lighting", name: "Lighting", tag: "Pendants & chandeliers", icon: "bulb" },
  { id: "Drinkware & Sets", name: "Drinkware & Sets", tag: "Cut, polished, sipped from", icon: "glass" },
  { id: "Planters & Pots", name: "Planters & Pots", tag: "Succulents in salvaged glass", icon: "planter" },
  { id: "Platters & Plates", name: "Platters & Plates", tag: "Flat-cut serveware", icon: "platter" },
  { id: "Tea Light Holders", name: "Tea Light Holders", tag: "Small glow, big charm", icon: "candle" },
  { id: "Eco Candles", name: "Eco Candles", tag: "Soy wax, bottle vessel", icon: "flame" },
  { id: "Flower Vases", name: "Flower Vases", tag: "One stem or a whole bunch", icon: "vase" },
  { id: "Jewellery", name: "Jewellery", tag: "Glass, wearable", icon: "gem" },
  { id: "Engraved Products", name: "Engraved Products", tag: "Your names, our glass", icon: "engrave" },
];

export const PRODUCTS = [
  // --- LIGHTING ---
  {
    id: "wab-101",
    name: "The Bordeaux Filament Pendant Light",
    category: "Lighting",
    price: 88,
    rating: 4.9,
    reviewCount: 38,
    tag: "Warm amber glow with vintage brass socket",
    provenance: "Salvaged Cabernet Sauvignon bottles from Napa Valley Estate",
    bottleType: "Wine",
    glassTint: "Sage",
    dimensions: "D 3.2\" × H 11.5\"",
    inStock: true,
    isBestseller: true,
    isNew: false,
    lightGlowColor: "#f5a623",
    description: "Hand-separated from a classic heavy-punched Bordeaux wine bottle. Edge diamond-sanded to a soft touch, wired with twisted hemp fabric cord and a vintage spiral LED filament bulb that casts dynamic caustics across your walls.",
    specifications: [
      "Standard E26 base (LED Edison bulb included)",
      "6ft adjustable braided hemp cord",
      "Solid brass ceiling canopy included",
      "Hand-polished diamond smooth rim"
    ],
    reviews: [
      { id: "r1", user: "Eleanor V.", rating: 5, date: "2 days ago", comment: "Suspended 3 of these above our kitchen island. The emerald sage tint when illuminated is mesmerizing!" },
      { id: "r2", user: "Marcus T.", rating: 5, date: "1 week ago", comment: "Outstanding craft. You can feel the weight of authentic thick wine bottle glass." }
    ]
  },
  {
    id: "wab-102",
    name: "Amber Bourbon Chandelier Trio",
    category: "Lighting",
    price: 240,
    rating: 5.0,
    reviewCount: 14,
    tag: "3-pendant staggered canopy light",
    provenance: "Reclaimed Small-Batch Bourbon bottles from Kentucky Distilleries",
    bottleType: "Whiskey",
    glassTint: "Amber",
    dimensions: "Canopy 12\" dia, drops up to 48\"",
    inStock: true,
    isBestseller: true,
    isNew: true,
    lightGlowColor: "#ff9000",
    description: "Three heavy square amber bourbon bottles suspended at staggered heights from a circular matte black steel fixture. Creates an intimate, warm speakeasy mood.",
    specifications: [
      "3 × Warm Dimmable LED Edison Bulbs included",
      "Matte black circular ceiling plate",
      "UL-listed electrical components",
      "Custom height adjustment hardware"
    ],
    reviews: [
      { id: "r3", user: "David K.", rating: 5, date: "3 weeks ago", comment: "Installed in our dining room. Everyone asks where we bought it!" }
    ]
  },
  {
    id: "wab-103",
    name: "Gin Botanical Wall Sconce",
    category: "Lighting",
    price: 95,
    rating: 4.8,
    reviewCount: 22,
    tag: "Cobalt blue glass wall fixture",
    provenance: "Discarded London Dry Gin bottles from local cocktail bars",
    bottleType: "Gin",
    glassTint: "Cobalt",
    dimensions: "W 5\" × H 14\" × D 6.5\"",
    inStock: true,
    isBestseller: false,
    isNew: true,
    lightGlowColor: "#4a90e2",
    description: "Striking electric blue tint captured from premium gin bottles. Mounted on a raw brushed copper wall bracket for ambient accent lighting.",
    specifications: [
      "Hardwired wall sconce",
      "Brushed copper mounting plate",
      "E12 candelabra LED bulb included"
    ],
    reviews: [
      { id: "r4", user: "Sarah L.", rating: 5, date: "1 month ago", comment: "The blue light reflections in the hallway are breathtaking at night." }
    ]
  },

  // --- DRINKWARE & SETS ---
  {
    id: "wab-201",
    name: "Artisan Lowball Glass Set of 4",
    category: "Drinkware & Sets",
    price: 48,
    rating: 4.9,
    reviewCount: 65,
    tag: "Heavy-bottomed whiskey tumblers",
    provenance: "Upcycled craft beer & wine punts",
    bottleType: "Wine",
    glassTint: "Sage",
    dimensions: "12 oz capacity each",
    inStock: true,
    isBestseller: true,
    isNew: false,
    description: "The classic punt at the base of wine bottles makes the ultimate heavy, satisfying coasterless base. Triple-beveled and flame-polished for a soft rim.",
    specifications: [
      "100% Dishwasher safe",
      "Beveled smooth rim",
      "Set of 4 matching sage green glasses"
    ],
    reviews: [
      { id: "r5", user: "Julian M.", rating: 5, date: "4 days ago", comment: "So substantial in hand. Perfect for an Old Fashioned!" }
    ]
  },
  {
    id: "wab-202",
    name: "Highball Cocktail Glasses (Set of 4)",
    category: "Drinkware & Sets",
    price: 52,
    rating: 4.7,
    reviewCount: 19,
    tag: "Tall 16 oz recycled drinking glasses",
    provenance: "Clear mineral water and soda syphon bottles",
    bottleType: "Champagne",
    glassTint: "Clear",
    dimensions: "H 6.2\" × D 2.8\", 16 oz",
    inStock: true,
    isBestseller: false,
    isNew: false,
    description: "Sleek, ultra-clear highball glasses salvaged from tall mineral water bottles. Extremely durable and perfectly weighted.",
    specifications: [
      "Flame-polished lip",
      "Food-safe lead-free glass",
      "16 oz liquid capacity"
    ],
    reviews: [
      { id: "r6", user: "Hannah R.", rating: 5, date: "2 weeks ago", comment: "Great eco gift for my sister's new apartment." }
    ]
  },

  // --- PLANTERS & POTS ---
  {
    id: "wab-301",
    name: "Self-Watering Wine Bottle Succulent Planter",
    category: "Planters & Pots",
    price: 36,
    rating: 4.8,
    reviewCount: 41,
    tag: "Sub-irrigation indoor planter",
    provenance: "Champagne & Burgundy glass bottles",
    bottleType: "Wine",
    glassTint: "Emerald",
    dimensions: "D 3.5\" × H 7\"",
    inStock: true,
    isBestseller: true,
    isNew: false,
    description: "Cut horizontally into two nesting halves. The top holds your plant in organic soil, while cotton wicking rope draws water up from the bottom reservoir as needed.",
    specifications: [
      "Includes organic hemp wicking rope",
      "Removable top section for easy refilling",
      "Ideal for succulents, herbs, and ivy"
    ],
    reviews: [
      { id: "r7", user: "Chloe B.", rating: 5, date: "5 days ago", comment: "My basil plant thrives in this! Never overwater again." }
    ]
  },
  {
    id: "wab-302",
    name: "Hanging Terrarium Trio",
    category: "Planters & Pots",
    price: 64,
    rating: 4.9,
    reviewCount: 12,
    tag: "Jute cord suspended glass pods",
    provenance: "Olive oil and artisanal vinegar bottles",
    bottleType: "Wine",
    glassTint: "Clear",
    dimensions: "Set of 3, 8\" height each",
    inStock: true,
    isBestseller: false,
    isNew: true,
    description: "Top-scored bottle shells suspended by natural macrame jute. Perfect for air plants, trailing pothos, or propagation roots.",
    specifications: [
      "Set of 3 hanging glass planters",
      "Includes natural jute cords",
      "Air plant starter specimen included free"
    ],
    reviews: []
  },

  // --- PLATTERS & PLATES ---
  {
    id: "wab-401",
    name: "Slumped Wine Bottle Cheese Platter",
    category: "Platters & Plates",
    price: 34,
    rating: 4.9,
    reviewCount: 53,
    tag: "Kiln-melted serving board with cheese knife",
    provenance: "Vintage Italian Chianti & Barolo bottles",
    bottleType: "Wine",
    glassTint: "Amber",
    dimensions: "L 12\" × W 5\" × H 1.2\"",
    inStock: true,
    isBestseller: true,
    isNew: false,
    description: "Fired in a glass kiln at 1,450°F until flattened into a unique serving dish retaining the bottle's raised cork neck motif. Includes a stainless steel spreader knife tied with jute.",
    specifications: [
      "Food-safe kiln-formed glass",
      "Includes stainless steel spreader knife",
      "Rubber non-slip feet on underside"
    ],
    reviews: [
      { id: "r8", user: "Gareth P.", rating: 5, date: "1 week ago", comment: "Sensational conversation piece at wine and cheese night!" }
    ]
  },

  // --- TEA LIGHT HOLDERS ---
  {
    id: "wab-501",
    name: "Glow Hurricane Tea Light Trio",
    category: "Tea Light Holders",
    price: 32,
    rating: 4.8,
    reviewCount: 29,
    tag: "Wind-protected candlelight domes",
    provenance: "Mixed craft brewery bottles",
    bottleType: "Beer",
    glassTint: "Amber",
    dimensions: "Set of 3, H 4.5\" each",
    inStock: true,
    isBestseller: false,
    isNew: false,
    description: "The top necks of amber glass bottles act as chimneys that funnel heat while shielding tea light flames from drafts. Creates a soothing golden ambient light.",
    specifications: [
      "Set of 3 glass shades + 3 wood bases",
      "3 soy tea lights included",
      "Suitable for outdoor patio use"
    ],
    reviews: []
  },

  // --- ECO CANDLES ---
  {
    id: "wab-601",
    name: "Wild Fig & Cedar Soy Bottle Candle",
    category: "Eco Candles",
    price: 28,
    rating: 4.9,
    reviewCount: 77,
    tag: "Hand-poured 100% natural soy wax",
    provenance: "French Champagne bottles from wedding events",
    bottleType: "Champagne",
    glassTint: "Emerald",
    dimensions: "10 oz, 60 hr burn time",
    inStock: true,
    isBestseller: true,
    isNew: false,
    description: "Heavy dark green glass vessel filled with non-GMO soy wax infused with essential oils of Mediterranean wild fig, cedarwood, and sweet amber. Features a crackling FSC wooden wick.",
    specifications: [
      "60+ Hour Burn Time",
      "FSC Certified crackling wood wick",
      "Reusable drinking glass vessel once wax burns down"
    ],
    reviews: [
      { id: "r9", user: "Maya S.", rating: 5, date: "3 days ago", comment: "Smells incredible and the wooden wick crackles like a little fireplace!" }
    ]
  },
  {
    id: "wab-602",
    name: "Smoked Vanilla & Bourbon Soy Vessel",
    category: "Eco Candles",
    price: 30,
    rating: 5.0,
    reviewCount: 31,
    tag: "Bourbon bottle vessel with cork top",
    provenance: "Oak-aged Rye Whiskey bottles",
    bottleType: "Whiskey",
    glassTint: "Amber",
    dimensions: "12 oz, 70 hr burn time",
    inStock: true,
    isBestseller: false,
    isNew: true,
    description: "Warm amber vessel overflowing with notes of Madagascar vanilla bean, oak barrel smoke, and toasted nutmeg.",
    specifications: [
      "Organic soy & coconut wax blend",
      "Double cotton wick",
      "Includes natural cork lid cover"
    ],
    reviews: []
  },

  // --- FLOWER VASES ---
  {
    id: "wab-701",
    name: "The Single-Stem Soliflore Vase",
    category: "Flower Vases",
    price: 26,
    rating: 4.7,
    reviewCount: 16,
    tag: "Slender stem vase with cork pedestal",
    provenance: "Riesling & Alsace white wine bottles",
    bottleType: "Wine",
    glassTint: "Sage",
    dimensions: "H 11\" × D 2.4\"",
    inStock: true,
    isBestseller: false,
    isNew: false,
    description: "Tall, elegant taper white wine bottle cut high on the shoulder. Perfectly showcases a single monstera leaf, tulip, or dried pampas stem.",
    specifications: [
      "Hand-polished narrow opening",
      "Cork bottom protector",
      "Subtle olive-green clarity"
    ],
    reviews: []
  },

  // --- JEWELLERY ---
  {
    id: "wab-801",
    name: "Sea-Glass Cut Drop Earrings",
    category: "Jewellery",
    price: 42,
    rating: 4.9,
    reviewCount: 24,
    tag: "Tumbled bottle glass & Sterling Silver",
    provenance: "Bombay Sapphire Gin & Perrier bottles",
    bottleType: "Gin",
    glassTint: "Cobalt",
    dimensions: "Drop length 1.5\"",
    inStock: true,
    isBestseller: false,
    isNew: true,
    description: "Tiny diamond-shaped shards sculpted from cobalt gin bottles, tumbled in eco-friendly water sanders until velvety smooth, and mounted on 925 sterling silver hooks.",
    specifications: [
      ".925 Sterling Silver ear hooks",
      "Tumbled matte sea-glass finish",
      "Hypoallergenic and ultra lightweight"
    ],
    reviews: []
  },

  // --- ENGRAVED PRODUCTS ---
  {
    id: "wab-901",
    name: "Custom Laser-Engraved Decanter & Glass Set",
    category: "Engraved Products",
    price: 110,
    rating: 5.0,
    reviewCount: 46,
    tag: "Personalized monogrammed bottle decanter + 2 glasses",
    provenance: "Heavy crystal-clear scotch whisky decanters",
    bottleType: "Whiskey",
    glassTint: "Clear",
    dimensions: "Decanter 750ml, Tumblers 10 oz",
    inStock: true,
    isBestseller: true,
    isNew: false,
    description: "Our master laser technician precision engraves your chosen initials, wedding date, or custom family crest into the side of an upcycled heavy decanter and matching tumblers.",
    specifications: [
      "Custom text/date laser engraving included",
      "Ground glass airtight stopper",
      "Includes gift box & eco packaging"
    ],
    reviews: [
      { id: "r10", user: "Nigel K.", rating: 5, date: "Yesterday", comment: "Ordered for my father's 60th birthday. The engraving precision is flawless!" }
    ]
  }
];

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Collect & Divert",
    body: "Bottles arrive daily from partner restaurants, bars, and your BYOB mail-ins. Every bottle saved avoids landfill waste.",
    detail: "Over 50,000 bottles saved to date."
  },
  {
    n: "02",
    title: "Precision Cut",
    body: "Each glass vessel is diamond-scored and separated using thermal shock tension. No two raw edges are identical.",
    detail: "Handmade accuracy to within 1mm."
  },
  {
    n: "03",
    title: "Multi-Stage Polish",
    body: "Edges pass through 4 grit levels of wet diamond sanding and flame edging until satiny smooth and 100% food-safe.",
    detail: "Ultra-smooth tactile touch guaranteed."
  },
  {
    n: "04",
    title: "Wire & Illuminate",
    body: "UL-tested electrical brass sockets, hemp cords, or natural soy wax are fitted to transform bottle glass into pure ambient light.",
    detail: "Built to illuminate for generations."
  }
];

export const REVIEWS_LIST = [
  {
    id: 1,
    author: "Elena Rostova",
    role: "Interior Designer, NYC",
    quote: "Was A Bottle proves that sustainability doesn't mean compromising on luxury. The Bordeaux pendants are the centerpiece of our eco-bistro project.",
    rating: 5,
    verified: true
  },
  {
    id: 2,
    author: "Liam O'Connor",
    role: "Homeowner & BYOB Customer",
    quote: "I sent in the champagne bottle from our wedding night. They turned it into a table lamp that sits on our nightstand. Best keepsake ever.",
    rating: 5,
    verified: true
  },
  {
    id: 3,
    author: "Sophia Sterling",
    role: "Hospitality Buyer",
    quote: "Ordered 40 custom engraved tumbler sets for our boutique hotel bar. Fast shipping, plastic-free packaging, and incredible craftsmanship.",
    rating: 5,
    verified: true
  }
];
