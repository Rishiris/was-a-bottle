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
  { id: "Gift Sets", name: "Gift Sets", tag: "Curated eco gifts & bundles", icon: "gift" },
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
    image: "/images/products/lighting/bordeaux-pendant-main.png",
    images: {
      main: "/images/products/lighting/bordeaux-pendant-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Hand-separated from a classic heavy-punched Bordeaux wine bottle. Edge diamond-sanded to a soft touch, wired with twisted hemp fabric cord and a vintage spiral LED filament bulb that casts dynamic caustics across your walls.",
    articles: [
      {
        title: "The Story Behind the Bottle",
        body: "Every Bordeaux pendant begins its second life at a restaurant bar — rescued before it ever reaches a landfill. Each salvaged Cabernet Sauvignon bottle is handpicked by our team in New Delhi for its shoulder weight, glass density, and that unmistakable deep sage-green tint that turns golden under warm filament light. Sandy Chugh, co-founder of Was A Bottle, first discovered the magic of these bottles back in 2013 when furnishing their restaurant on a tight budget: 'We cut one bottle, held a bulb inside, and the whole room changed colour. We knew then that this was something special.'"
      },
      {
        title: "The Craft: Diamond Wheel to Silk Touch",
        body: "The Bordeaux pendant passes through six pairs of hands before it ships. First, our glass cutter scores the shoulder with a tungsten-carbide wheel to a depth of 0.3mm. A controlled thermal shock — alternating hot and cold water — splits the glass cleanly along the score line. The raw edge then moves to four stages of wet-belt diamond sanding: 80, 220, 400, and finally 1,200 grit. The last pass leaves an edge so smooth it feels like polished stone. Our electricians then fit a solid brass E26 socket, route 6ft of hand-twisted hemp cord, and attach a hand-hammered ceiling canopy."
      },
      {
        title: "Living With the Light",
        body: "Hang it solo above a reading chair, or group three at staggered heights above a kitchen island for a curated gallery effect. The sage-green glass filters incandescent and warm-LED light into golden caustic patterns — shifting ripples of colour that dance across walls as the bulb heats. Interior designers consistently note that the Bordeaux pendant works across styles: Scandinavian minimalism, industrial loft, and bohemian eclectic alike. Pair with a warm 2200K Edison bulb (included) for the full amber-sage experience."
      }
    ],
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
    image: "/images/products/lighting/bourbon-chandelier-main.png",
    images: {
      main: "/images/products/lighting/bourbon-chandelier-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Three heavy square amber bourbon bottles suspended at staggered heights from a circular matte black steel fixture. Creates an intimate, warm speakeasy mood — reminiscent of a Kentucky distillery tasting room.",
    articles: [
      {
        title: "From Distillery Floor to Dining Room Ceiling",
        body: "These bourbon bottles were born to hold the finest small-batch whiskey in America — and now they hold something equally precious: light. We source our bottles directly from craft distilleries in Kentucky who previously had no sustainable outlet for their post-run glass. Each bottle is a minimum 750ml square-shoulder bourbon vessel, chosen for its exceptionally thick amber glass that glows deeply orange under filament light. The trio chandelier was inspired by speakeasy lighting from the 1920s — three levels, three stories, one fixture."
      },
      {
        title: "Installation Guide & Design Notes",
        body: "The chandelier ships with a 12\" diameter matte black circular canopy that conceals all wiring in the ceiling junction box. Each of the three bottle drops is pre-wired with individual dimmer-compatible circuits, so you can set each bottle to a different brightness for a layered, atmospheric effect. Recommended ceiling height: 9ft and above. Our electricians have pre-adjusted the drops to 36\", 42\", and 48\" respectively, though the braided steel cables allow custom adjustment to any height. Installation takes approximately 45 minutes with basic electrical knowledge."
      },
      {
        title: "The Speakeasy Effect: Pairing with Interiors",
        body: "Interior photographers love this chandelier above all others in our collection. The amber glow it casts is reminiscent of candlelight — warm, flattering, and timeless. Style it above a dark-stained dining table with leather seating for maximum drama. Or hang it in a home bar alcove with exposed brick for a true distillery-tasting-room aesthetic. The matte black fixture grounds the warmth of the amber glass and prevents the look from feeling too rustic."
      }
    ],
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
    image: "/images/products/lighting/gin-sconce-main.png",
    images: {
      main: "/images/products/lighting/gin-sconce-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Striking electric blue tint captured from premium gin bottles. Mounted on a raw brushed copper wall bracket for ambient accent lighting that throws sapphire patterns across your walls at night.",
    articles: [
      {
        title: "Why Gin Bottles Make the Best Wall Sconces",
        body: "London Dry Gin bottles have a unique characteristic that wine and whiskey bottles simply cannot replicate: that intense cobalt blue glass, developed historically to block UV light and preserve botanical flavour. When backlit with even a modest 4W E12 bulb, the cobalt casts patterns that are almost oceanic — cool blue ripples that shift as the bulb warms. Our artisan discovered this by accident, placing an empty Bombay Sapphire bottle on a sunny windowsill. 'The entire floor turned blue,' he recalls. 'That was the beginning of the sconce.'"
      },
      {
        title: "Copper & Cobalt: A Material Study",
        body: "The wall mounting bracket is machined from raw copper rod and left un-lacquered so it develops a natural verdigris patina over time — a living, ageing material that complements the timeless cobalt glass. The bottle is secured with a hand-bent copper saddle that cradles the bottle's shoulder without adhesive, allowing the glass to be removed and cleaned easily. Behind the saddle sits a hardwired back-plate with a flush junction box connection that works with any standard wall switch."
      }
    ],
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
    image: "/images/products/glassware/lowball-glasses-main.png",
    images: {
      main: "/images/products/glassware/lowball-glasses-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "The classic punt at the base of wine bottles makes the ultimate heavy, satisfying coasterless base. Triple-beveled and flame-polished for a soft rim. Each glass in the set carries a unique provenance — no two are identical.",
    articles: [
      {
        title: "The Punt: Nature's Perfect Glass Base",
        body: "The punt — that deep indentation at the base of a wine bottle — has existed since glassblowers discovered it adds structural rigidity to hand-blown glass. When we cut wine bottles horizontally through their body, the punt becomes the base of a tumbler with a naturally weighted, self-righting bottom that never needs a coaster. The sage-green glass of our Cabernet and Bordeaux sourced bottles gives each tumbler a unique faint tint that shifts between green and clear depending on the angle of light."
      },
      {
        title: "How We Achieve a Food-Safe, Lip-Safe Rim",
        body: "The raw cut edge of bottle glass is microscopically serrated — sharp enough to cut skin on contact. Getting from that raw edge to the silky smooth rim you'll press against your lips requires four distinct stages. We begin with a 60-grit wet diamond belt to remove major irregularities. Next, 120-grit smooths the bevelled angle. 400-grit brings the surface to a satin finish. Finally, a propane flame-polish melts the silica surface just enough to remove any remaining micro-abrasions and give the rim a polished glass appearance. The entire process takes 22 minutes per glass."
      },
      {
        title: "The Eco Arithmetic: What You're Actually Saving",
        body: "A set of 4 Artisan Lowball Glasses prevents approximately 1.8 kg of glass from reaching a landfill. That sounds modest — but global glass production requires melting raw materials at 1,700°C, a process that emits approximately 500 grams of CO2 per kilogram of glass produced. By choosing these tumblers over factory-new glassware, you avoid the creation of 900 grams of CO2 and the extraction of the raw silica sand, limestone, and soda ash that new glass requires."
      }
    ],
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
    image: "/images/products/glassware/highball-glasses-main.png",
    images: {
      main: "/images/products/glassware/highball-glasses-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Sleek, ultra-clear highball glasses salvaged from tall mineral water bottles. Extremely durable and perfectly weighted. The natural taper of the original bottle creates an ergonomic grip unlike any factory glass.",
    articles: [
      {
        title: "Why Mineral Water Bottles Make Superior Drinking Glasses",
        body: "Premium European mineral water bottles — Perrier, San Pellegrino, Badoit — are made from unusually thick, lead-free glass specifically engineered to retain carbonation under pressure. This means they start life significantly stronger than standard glass, and that structural advantage carries over into our highball tumblers. The result is a glass that feels exceptionally solid in hand, doesn't ring hollow when tapped, and resists chipping at the rim far better than standard cut glass."
      },
      {
        title: "The Perfect Gin & Tonic Glass",
        body: "Mixologists across London, Mumbai, and New York have independently arrived at the same conclusion about highball glasses: a large vessel with a tall, straight profile is the optimal shape for aromatic cocktails. The extra headspace above the liquid allows botanical aromas to concentrate before reaching your nose. These 16 oz tumblers provide that generous volume while the clear glass lets you see every layer of your drink — ice, garnish, and spirit. The natural taper of the original water bottle also creates a subtle grip point about 2 inches from the base."
      }
    ],
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
    image: "/images/products/planters/succulent-planter-main.png",
    images: {
      main: "/images/products/planters/succulent-planter-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Cut horizontally into two nesting halves. The top holds your plant in organic soil, while cotton wicking rope draws water up from the bottom reservoir as needed — a self-regulating system that prevents both overwatering and drought.",
    articles: [
      {
        title: "Sub-Irrigation: The Science of the Self-Watering Planter",
        body: "The self-watering planter works on the principle of capillary action — the same force that draws water up through a plant's roots from the soil. A natural cotton wick threads through a hole in the bottle's centre cut, connecting the water reservoir in the lower half to the soil in the upper section. Water is drawn up only as the plant's roots demand it, which means the plant never sits in waterlogged soil. Succulents, herbs, and trailing pothos all thrive in this system, with watering intervals extending to 2–3 weeks in most climates."
      },
      {
        title: "The Burgundy Bottle: A Brief Natural History",
        body: "The Burgundy wine bottle is one of the oldest standardised glass forms in the world, with its sloping shoulders and heavy punt tracing back to the 17th-century glass workshops of northern France. The emerald-green colour — applied during manufacture using iron and chromium oxides — is not merely aesthetic: it filters UV light that would otherwise oxidise and spoil the wine inside. In our planter, that same UV-filtering property makes the glass an excellent vessel for photosensitive plant roots, protecting delicate root systems from light stress."
      },
      {
        title: "Care Guide: Making Your Planter Thrive",
        body: "Fill the lower reservoir with filtered or rainwater up to the wick insertion point. Place your succulent or herb in well-draining soil in the upper section, ensuring the wick passes through the soil to the root zone. Position in bright indirect light — succulents prefer a south or east-facing windowsill. Refill the reservoir when you can no longer see water through the glass. Most users find a monthly top-up sufficient. Avoid direct strong sunlight through the glass as it can create a lens effect that scorches roots."
      }
    ],
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
    image: "/images/products/planters/hanging-terrarium-main.png",
    images: {
      main: "/images/products/planters/hanging-terrarium-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Top-scored bottle shells suspended by natural macrame jute. Perfect for air plants, trailing pothos, or propagation roots. Each bottle retains its original shoulder curvature, creating an organic hanging sculpture.",
    articles: [
      {
        title: "Olive Oil Bottles and the Art of Terrariums",
        body: "Italian artisanal olive oil and balsamic vinegar bottles are some of the most beautiful glass forms in the world — elegant, elongated, with gentle flared shoulders and unusually clear glass that allows total visibility into the miniature world you create inside. We cut the tops off these bottles just below the shoulder, invert the top section as a removable lid, and package them with natural jute macrame cord pre-knotted for hanging. Air plants, tillandsia, and propagating cuttings flourish in the enclosed micro-climate these terrariums create."
      }
    ],
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
    image: "/images/products/platters/cheese-platter-main.png",
    images: {
      main: "/images/products/platters/cheese-platter-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Fired in a glass kiln at 1,450°F until flattened into a unique serving dish retaining the bottle's raised cork neck motif. Includes a stainless steel spreader knife tied with jute. No two platters are identical — each slumps in a subtly different way.",
    articles: [
      {
        title: "Glass Slumping: An Ancient Technique, a Modern Application",
        body: "Glass slumping is one of the oldest recorded glass-forming techniques, used by Roman artisans over 2,000 years ago to press molten glass over stone and ceramic moulds. At Was A Bottle, we revive this technique to transform whole wine bottles into flat serving platters. The bottle is placed horizontally in a fibre ceramic kiln and slowly brought to 1,450°F — just below the glass's full melting point. At this temperature, gravity causes the bottle to gently sag and spread onto the kiln shelf below. The result retains the bottle's original raised text, punt impression, and embossed details as permanent reliefs in the flat surface."
      },
      {
        title: "Why Chianti Bottles?",
        body: "Vintage Chianti bottles from the Tuscany region are traditionally wrapped in a wicker basket — the iconic fiasco shape — but the glass itself is a heavy, dark amber vessel with unusually thick walls that slump beautifully and evenly in the kiln. The amber glass, coloured by iron sulphides added during manufacture, becomes translucent amber when slumped flat, allowing light through in a way that transforms the platter into a piece of art even when not in use. Place it on a window ledge and it glows like stained glass."
      },
      {
        title: "Food Safety & Care",
        body: "All our slumped glass platters are tested to EN 1186 standards for heavy metal migration — meaning the glass is certified safe for direct food contact. The surface, having been heat-treated above the glass transition temperature, is chemically inert and non-porous: bacteria cannot penetrate or colonise the surface. To clean, hand-wash with warm soapy water. Do not place in a dishwasher as repeated thermal cycling can cause stress fractures. Store flat or vertically in a padded rack."
      }
    ],
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
    image: "/images/products/candles/hurricane-tealight-main.png",
    images: {
      main: "/images/products/candles/hurricane-tealight-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "The top necks of amber glass bottles act as chimneys that funnel heat while shielding tea light flames from drafts. Creates a soothing golden ambient light that's perfect for outdoor tables, mantelpieces, and bathroom windowsills.",
    articles: [
      {
        title: "The Physics of a Bottle Tea Light Holder",
        body: "A standard tea light placed under glass burns with approximately 30% more luminosity and 50% longer than one exposed to open air. The glass dome created by an inverted bottle top restricts oxygen flow just enough to steady the flame while the narrow neck acts as a chimney, drawing warm air upward and pulling fresh oxygen in from the base. The amber glass then filters the flame's light into warm golden tones, eliminating the cold blue-white flicker of an unshielded tea light. The result is a steady, warm, architectural flame."
      }
    ],
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
    image: "/images/products/candles/wild-fig-candle-main.png",
    images: {
      main: "/images/products/candles/wild-fig-candle-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Heavy dark green glass vessel filled with non-GMO soy wax infused with essential oils of Mediterranean wild fig, cedarwood, and sweet amber. Features a crackling FSC wooden wick. Once the wax burns down, your champagne bottle transforms into a drinking vessel.",
    articles: [
      {
        title: "Why Champagne Bottles?",
        body: "Champagne bottles are engineered to withstand 90 PSI of internal pressure — six times the pressure of a standard car tyre. This means the glass is significantly thicker and heavier than any other wine bottle category, with walls up to 5mm thick at the base. This density makes them exceptional candle vessels: they retain heat evenly, preventing tunnelling through the wax, and their thermal mass means the glass stays cooler on the outside than a thin-walled vessel. The distinctive tapered shoulder also means the bottle stands beautifully on any surface."
      },
      {
        title: "Our Fragrance Philosophy: Wild Fig & Cedar",
        body: "Sandy Chugh spent three months working with a Grasse-based perfumer to develop the Wild Fig & Cedar scent profile. Wild fig (ficus carica) essential oil is extracted from the leaves and unripe fruit — not the common synthetic fig that smells of soap. The result is green, slightly milky, and resinous. This is anchored by Atlas cedarwood from the Moroccan Atlas Mountains — warm, woody, with a slight pencil-shaving quality that grounds the lightness of the fig. A base note of sweet amber resin extends the scent into the room long after the flame is extinguished."
      },
      {
        title: "From Candle to Drinking Glass: The Second Life",
        body: "Once your candle has burned to within 1cm of the base, place the bottle in the freezer for 2 hours. The remaining wax will contract and pop out cleanly. Wash with hot soapy water to remove any residue, and you have a beautiful 10 oz drinking glass — a champagne flute base with a wide-mouthed opening that works perfectly for cocktails, juices, or simply holding your toothbrushes. Every Was A Bottle candle is designed to have this second life built in."
      }
    ],
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
    image: null, // TODO: awaiting image generation quota reset
    images: {
      main: null, // /images/products/candles/vanilla-bourbon-candle-main.png
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Warm amber vessel overflowing with notes of Madagascar vanilla bean, oak barrel smoke, and toasted nutmeg. The original whiskey bottle retains ghost aromas of its previous life — amplifying the smoked character of the fragrance.",
    articles: [
      {
        title: "Ghost Aromas: Why Whiskey Bottles Make Perfect Candle Vessels",
        body: "A bourbon bottle that has held aged rye whiskey for three years absorbs trace compounds into the glass itself — fusel alcohols, vanillin from oak tannins, caramel esters from the charred barrel. These compounds are present in parts-per-billion concentrations embedded in the porous surface layer of the glass. When our soy wax candle heats the glass during burning, these ghost aromas are gently released, adding a whisper of authenticity to the Smoked Vanilla & Bourbon fragrance blend. It is, in the most literal sense, a candle that smells of its own history."
      }
    ],
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
    image: null, // TODO: awaiting image generation quota reset
    images: {
      main: null, // /images/products/vases/soliflore-vase-main.png
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Tall, elegant taper white wine bottle cut high on the shoulder. Perfectly showcases a single monstera leaf, tulip, or dried pampas stem. The narrow 2.4\" opening holds stems upright without a frog or wire.",
    articles: [
      {
        title: "The Japanese Art of Soliflore: One Stem, One Story",
        body: "Soliflore — literally 'single flower' in French, rooted in the Japanese Ikebana philosophy of negative space — is the practice of displaying a single stem in a way that draws the eye to its natural form without distraction. The narrow neck of a Riesling wine bottle is geometrically near-perfect for this purpose: wide enough to accept most single stems, narrow enough to hold them upright without support, and tall enough that a long-stemmed rose or monstera leaf can express its full architectural quality."
      }
    ],
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
    image: null, // TODO: awaiting image generation quota reset
    images: {
      main: null, // /images/products/jewellery/seaglass-earrings-main.png
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Tiny diamond-shaped shards sculpted from cobalt gin bottles, tumbled in eco-friendly water sanders until velvety smooth, and mounted on 925 sterling silver hooks. Light catches the cobalt glass like a shard of Mediterranean ocean.",
    articles: [
      {
        title: "How We Make Glass Wearable: The Tumbling Process",
        body: "Raw glass shards are sharp enough to cut through leather gloves. Transforming them into wearable jewellery requires a 72-hour water tumbling process in which the shards are placed in a rotating barrel with progressively finer grades of ceramic tumbling media — first silicon carbide, then aluminium oxide, and finally cerium oxide polish. By the end, the surface of each cobalt shard has been worn to a matte, frosted finish that scatters light softly rather than reflecting it harshly. Vashu Chugh designed the earring templates using hand-cut cardboard shapes, selecting only shards that naturally match the intended silhouette."
      }
    ],
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
    image: "/images/products/custom/engraved-decanter-main.png",
    images: {
      main: "/images/products/custom/engraved-decanter-main.png",
      angle: null,
      detail: null,
      lifestyle: null,
    },
    description: "Our master laser technician precision engraves your chosen initials, wedding date, or custom family crest into the side of an upcycled heavy decanter and matching tumblers. Each line is cut to a depth of 0.15mm using a 30W CO2 laser guided by computer-controlled servo motors.",
    articles: [
      {
        title: "The Laser Engraving Process: Precision at 0.15mm",
        body: "Was A Bottle's laser engraving studio uses a 30-watt CO2 laser with a spot size of 0.1mm — narrow enough to engrave individual letters at 8pt font without losing legibility. The laser removes a surface layer of glass 0.15mm deep, creating a frosted, matte-white engraving that contrasts dramatically against the clear or tinted glass surface. The process is guided by computer-controlled servo motors with a positional accuracy of ±0.02mm — this is what allows our technician to engrave a wedding date in script font across the curve of a decanter without any distortion."
      },
      {
        title: "What to Engrave: Ideas from Our Customers",
        body: "The most popular engravings in our studio: family surnames and founding years ('The Sharma Family Est. 1987'), wedding dates in Roman numerals, geographic coordinates of meaningful places, monograms in serif or script fonts, Tolkien or literary quotes, and children's handwriting traced digitally and engraved as-is. Corporate clients engrave hotel logos, wine-list branding, and hospitality room numbers. We've engraved a periodic table of elements across a set of 12 tumblers, the constellations as they appeared on a couple's wedding night, and a complete sonnet across six decanter faces."
      },
      {
        title: "Gifting: The Most Personal Gift Possible",
        body: "An engraved glass object occupies a unique space in the gift hierarchy — it is simultaneously functional, beautiful, and irreplaceable. Unlike a piece of jewellery that sits in a drawer, a decanter set is used weekly, displayed prominently, and noticed by every guest. The provenance story (that this was once a whisky bottle, now your heirloom) creates a narrative that every recipient finds compelling. For weddings, we recommend ordering 6 weeks in advance to allow for design proof approval, engraving, quality check, and eco-packaged shipping."
      }
    ],
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

export const GIFT_SETS = [
  {
    id: "gs-001",
    name: "Artisan Eco Gifting Bundle",
    category: "Gift Sets",
    price: 98,
    rating: 5.0,
    reviewCount: 34,
    tag: "Pendant light + tumbler set + candle",
    provenance: "Mixed reclaimed Bordeaux & Champagne bottles",
    bottleType: "Wine",
    glassTint: "Sage",
    dimensions: "Gift box: 14\" × 10\" × 8\"",
    inStock: true,
    isBestseller: true,
    isNew: false,
    lightGlowColor: "#52b788",
    includes: [
      "1 × Bordeaux Mini Pendant Light (E12)",
      "2 × Artisan Lowball Tumblers (Sage)",
      "1 × Wild Fig Soy Bottle Candle",
      "Recycled Kraft Gift Box + Ribbon"
    ],
    description: "Our most popular curated bundle — a complete eco home experience gifted in one beautiful recycled Kraft box. Perfect for housewarmings, birthdays, and holidays.",
    specifications: [
      "Everything arrives assembled & gift-ready",
      "Custom handwritten gift note included",
      "100% plastic-free eco packaging",
      "Free engraving on tumblers (up to 20 chars)"
    ],
    reviews: [
      { id: "gs-r1", user: "Priya M.", rating: 5, date: "1 week ago", comment: "My friend absolutely loved it. The packaging alone was gift-worthy!" }
    ]
  },
  {
    id: "gs-002",
    name: "Wedding Toast Keepsake Set",
    category: "Gift Sets",
    price: 145,
    rating: 5.0,
    reviewCount: 28,
    tag: "Engraved decanter + 2 champagne flutes",
    provenance: "Vintage Champagne & heavy crystal scotch decanters",
    bottleType: "Champagne",
    glassTint: "Clear",
    dimensions: "Decanter 750ml + 2 × 8 oz flutes",
    inStock: true,
    isBestseller: true,
    isNew: true,
    lightGlowColor: "#e7a33e",
    includes: [
      "1 × Engraved Crystal Decanter (750ml)",
      "2 × Diamond-Polished Champagne Flutes",
      "Laser-engraved names & date (complimentary)",
      "Velvet-lined gift box"
    ],
    description: "Celebrate love and milestones with this heirloom-quality set. Each piece is laser-engraved with names and the wedding date — a keepsake that lasts generations.",
    specifications: [
      "Complimentary custom laser engraving included",
      "Flutes: 8 oz, flame-polished rim",
      "Velvet-lined presentation box",
      "Food-safe lead-free glass"
    ],
    reviews: [
      { id: "gs-r2", user: "James & Sofia", rating: 5, date: "2 weeks ago", comment: "Our names engraved perfectly. This sits proudly on our mantle." }
    ]
  },
  {
    id: "gs-003",
    name: "Candle & Glass Duo — Spa Edition",
    category: "Gift Sets",
    price: 62,
    rating: 4.9,
    reviewCount: 19,
    tag: "Soy candle + highball glass + bath salts",
    provenance: "Emerald Champagne & clear mineral water bottles",
    bottleType: "Champagne",
    glassTint: "Emerald",
    dimensions: "Gift pouch: 10\" × 7\"",
    inStock: true,
    isBestseller: false,
    isNew: true,
    lightGlowColor: "#4a90e2",
    includes: [
      "1 × Wild Fig & Cedar Soy Candle (Emerald)",
      "1 × Highball Cocktail Glass (Clear)",
      "1 × Himalayan Bath Salt sachet",
      "Linen drawstring gift bag"
    ],
    description: "The perfect self-care and wellness gift. Warm candlelight, a beautiful glass, and mineral bath salts — all in a linen drawstring bag made from organic cotton.",
    specifications: [
      "60+ hour candle burn time",
      "FSC certified crackling wood wick",
      "Linen bag made from 100% organic cotton",
      "Vegan & cruelty-free"
    ],
    reviews: [
      { id: "gs-r3", user: "Neha S.", rating: 5, date: "3 days ago", comment: "Gifted this to my sister. She cried happy tears. So thoughtful!" }
    ]
  }
];

// Merge gift sets into PRODUCTS so shop page & search work
export const ALL_PRODUCTS = [...PRODUCTS, ...GIFT_SETS];

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
