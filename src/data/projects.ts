export interface Project {
  slug: string;
  title: string;
  platform: "WordPress" | "Shopify" | "React / Next.js" | "Wix" | "Webflow" | "HubSpot" | "HTML / Web" | "Other" | "Figma";
  category: string;
  role: string;
  industry: string;
  shortDesc: string;
  overview: string;
  challenge: string;
  approach: string;
  implementationDetails: string[];
  outcome: string;
  image: string;
  tags?: string[];
  featured?: boolean;
  liveUrl?: string;
}

export const FEATURED_PROJECTS_SLUGS = [
  "sensei-farms",
  "summer-fridays",
  "entiva-media",
  "openenvoy",
  "gc-photobooth",
  "hungry-bite-pizza",
];

export const PROJECTS: Project[] = [
  // 1. WordPress: Entiva Media Labs
  {
    slug: "entiva-media",
    title: "Entiva Media Labs",
    platform: "WordPress",
    category: "WordPress",
    role: "Web Design & WordPress Development",
    industry: "Digital Marketing & AI Production",
    shortDesc: "AI-powered 360° marketing agency website with interactive appointment scheduling and custom animations.",
    overview: "Designed and built a modern, responsive agency website for Entiva Media Labs, an innovative agency providing AI-driven 360° marketing, commercial video production, and digital growth services.",
    challenge: "Organizing multi-tier marketing services, dynamic calendar booking with appointment slots, and interactive media embeds without impacting load performance.",
    approach: "Created custom WordPress sections with Elementor & ACF, dynamic slot booking integration, responsive service grids, and lightweight CSS for optimal speed.",
    implementationDetails: [
      "Custom interactive calendar & appointment slot booking system",
      "Responsive service showcase covering AI marketing, branding, and video production",
      "High-conversion call-to-actions with country-detected phone inputs"
    ],
    outcome: "A sleek, high-performing corporate presence generating qualified inbound client leads.",
    image: "/projects/entiva-media.jpg",
    tags: ["WordPress", "Web Design", "Elementor", "Responsive"],
    featured: true,
    liveUrl: "https://entivamedialabs.com/",
  },

  // 2. WordPress: Uvaacha Studio
  {
    slug: "uvaacha-studio",
    title: "Uvaacha Studio",
    platform: "WordPress",
    category: "WordPress",
    role: "UI/UX Design & WordPress Development",
    industry: "Architecture & Interior Design",
    shortDesc: "Minimalist architectural studio website with high-resolution project galleries and editorial aesthetics.",
    overview: "Developed an elegant portfolio showcase for Uvaacha Studio, a premier architectural and interior design studio celebrating spatial aesthetics and material authenticity.",
    challenge: "Balancing full-bleed architectural photography and project documentation with crisp typography and fast page loads.",
    approach: "Crafted custom WordPress templates featuring masonry galleries, smooth scroll interactions, and responsive portfolio case studies.",
    implementationDetails: [
      "Masonry grid portfolio with high-resolution architectural photography",
      "Editorial typography layout emphasizing design philosophy and projects",
      "Mobile-optimized touch navigation and inquiry contact forms"
    ],
    outcome: "A refined visual showcase establishing strong brand authority in contemporary architectural design.",
    image: "/projects/uvaacha-studio.jpg",
    tags: ["WordPress", "Architecture", "Minimalist", "Portfolio"],
    featured: true,
    liveUrl: "https://uvaachastudio.com/",
  },

  // 3. WordPress: Capital Claims Australia
  {
    slug: "capital-claims",
    title: "Capital Claims Australia",
    platform: "WordPress",
    category: "WordPress",
    role: "Frontend & WordPress Development",
    industry: "Property Finance & Tax Depreciation",
    shortDesc: "Australian property tax depreciation platform with instant estimate calculators and quote request forms.",
    overview: "Developed responsive layouts and client calculators for Capital Claims Tax Depreciation, one of Australia’s leading quantity surveying and tax consulting firms.",
    challenge: "Simplifying complex financial depreciation formulas into intuitive, responsive quote estimators for property investors.",
    approach: "Built custom ACF-driven service templates, mobile-first quote estimation interfaces, and comprehensive educational resource hubs.",
    implementationDetails: [
      "Custom property depreciation quote estimation calculator",
      "ACF-powered landing pages for residential and commercial property investors",
      "Fast-loading, SEO-optimized structure adhering to Australian financial compliance"
    ],
    outcome: "Significantly streamlined investor quote submissions and increased mobile conversion rates.",
    image: "/projects/capital-claims.jpg",
    tags: ["WordPress", "Fintech", "ACF", "Australia"],
    featured: false,
    liveUrl: "https://www.capitalclaims.com.au/",
  },

  // 4. WordPress: Drehpunkt Pflege
  {
    slug: "drehpunkt-pflege",
    title: "Drehpunkt Pflege",
    platform: "WordPress",
    category: "WordPress",
    role: "Design & WordPress Development",
    industry: "Healthcare & Care Advisory",
    shortDesc: "Austrian healthcare and nursing advisory website built with accessible typography and clean consultation flows.",
    overview: "Designed and built a warm, accessible website for Drehpunkt Pflege, an Austrian nursing and home care advisory service.",
    challenge: "Creating an intuitive, senior-friendly interface that feels reassuring and makes requesting care consultations effortless.",
    approach: "Prioritized generous typography, clear color contrast, straightforward navigation, and direct click-to-call mobile triggers.",
    implementationDetails: [
      "High-accessibility layout with legible German typography and calm aesthetics",
      "Straightforward care consultation booking and inquiry forms",
      "Responsive design optimized for smartphones, tablets, and desktops"
    ],
    outcome: "A comforting digital hub facilitating family and patient care advisory inquiries.",
    image: "/projects/drehpunkt-pflege.jpg",
    tags: ["WordPress", "Healthcare", "Accessibility", "Austria"],
    featured: false,
    liveUrl: "https://drehpunkt-pflege.at/",
  },

  // 5. HTML / Web Design: Hungry Bite Pizza (Menu Card Design Website HTML)
  {
    slug: "hungry-bite-pizza",
    title: "Hungry Bite Pizza",
    platform: "HTML / Web",
    category: "HTML / Web",
    role: "Website & Menu Card Design",
    industry: "Restaurant & Food Service",
    shortDesc: "Canadian pizza restaurant website featuring interactive menu card layouts, deals showcase, and online ordering.",
    overview: "Designed and coded a fast, vibrant website and digital menu card system for Hungry Bite Pizza in Canada, showcasing signature pizzas, chicken wings, and combo deals.",
    challenge: "Displaying extensive menu categories (specialty pizzas, crust options, sides) with clear pricing and high-appeal visual cards on mobile devices.",
    approach: "Built clean semantic HTML5, CSS3, and JavaScript menu cards with tabbed categories, promotional banner highlights, and direct ordering links.",
    implementationDetails: [
      "Interactive menu card showcase with categorized pizza and side items",
      "Special deals & combo card banners with instant call-to-order triggers",
      "Lightweight, responsive mobile layout for rapid roadside and takeout browsing"
    ],
    outcome: "Boosted takeout order volume with a fast, mouth-watering digital menu experience.",
    image: "/projects/hungry-bite-pizza.jpg",
    tags: ["HTML / Web", "Menu Card Design", "CSS3", "Restaurant"],
    featured: true,
    liveUrl: "https://www.hungrybitepizza.ca/",
  },

  // 6. Shopify: Genie.pk
  {
    slug: "genie-pk",
    title: "Genie.pk",
    platform: "Shopify",
    category: "Shopify",
    role: "E-Commerce & Shopify Storefront",
    industry: "Electronics & Consumer Goods",
    shortDesc: "High-volume Pakistani e-commerce storefront with smart product collections and flash sale mechanics.",
    overview: "Developed a high-converting Shopify store for Genie.pk, offering smart gadgets, electronics, mobile accessories, and trending consumer goods.",
    challenge: "Managing large multi-category catalogs with lightning-fast search, flash discounts, and local payment integration (COD + digital).",
    approach: "Customized Shopify liquid templates with sticky cart drawers, urgent flash-sale banners, and rapid product recommendation carousels.",
    implementationDetails: [
      "Dynamic flash deal countdowns and promotional banner sections",
      "AJAX quick-add-to-cart and slide-out cart drawer for frictionless checkout",
      "Cash on Delivery (COD) and local courier tracking integration"
    ],
    outcome: "Enhanced customer journey, delivering high conversion rates during seasonal shopping campaigns.",
    image: "/projects/genie-pk.jpg",
    tags: ["Shopify", "E-Commerce", "Liquid", "Electronics"],
    featured: false,
    liveUrl: "https://genie.pk/",
  },

  // 7. Shopify: Summer Fridays
  {
    slug: "summer-fridays",
    title: "Summer Fridays",
    platform: "Shopify",
    category: "Shopify",
    role: "Shopify Storefront Development",
    industry: "Beauty & Luxury Skincare",
    shortDesc: "Iconic luxury skincare storefront with custom bundle builders, shade finders, and seamless mobile commerce.",
    overview: "Implemented bespoke Shopify storefront features for Summer Fridays, the globally celebrated clean skincare and beauty brand founded by Marianna Hewitt & Lauren Ireland.",
    challenge: "Delivering a clean, editorial beauty aesthetic while maintaining fast mobile page speeds across global traffic spikes.",
    approach: "Architected custom Liquid sections, interactive skincare routine builders, micro-interactions, and subscription replenishment workflows.",
    implementationDetails: [
      "Interactive routine builder and custom skincare bundle engine",
      "Sticky mobile add-to-bag with shade variant selectors",
      "Seamless loyalty rewards integration and Klaviyo customer journey hooks"
    ],
    outcome: "An effortless, luxury shopping experience that scales flawlessly across worldwide product launches.",
    image: "/projects/summer-fridays.jpg",
    tags: ["Shopify", "Luxury Beauty", "Liquid", "E-Commerce"],
    featured: true,
    liveUrl: "https://summerfridays.com/",
  },

  // 8. Shopify: Baikal Tea
  {
    slug: "baikal-tea",
    title: "Baikal Tea",
    platform: "Shopify",
    category: "Shopify",
    role: "Shopify Storefront & Brand Design",
    industry: "Organic Wellness & Herbal Beverage",
    shortDesc: "Organic Siberian herbal tea brand storefront featuring wild harvest storytelling and subscription plans.",
    overview: "Crafted a natural, nature-inspired Shopify storefront for Baikal Tea, specializing in wild-harvested Chaga and organic herbal blends from Lake Baikal.",
    challenge: "Communicating the unique origin, health benefits, and sustainability certifications while driving multi-pack purchases.",
    approach: "Designed organic earthy textures, benefit matrices, brewing guide tabs, and automated recurring subscription deliveries.",
    implementationDetails: [
      "Interactive brewing guide and botanical ingredient breakdown",
      "ReCharge subscription integration for recurring tea deliveries",
      "Clean product page layout with customer review carousels and bundle savings"
    ],
    outcome: "Elevated the brand's premium positioning and grew monthly recurring subscriber revenue.",
    image: "/projects/baikal-tea.jpg",
    tags: ["Shopify", "Organic Wellness", "Subscriptions", "E-Commerce"],
    featured: false,
    liveUrl: "https://baikaltea.com/",
  },

  // 9. Wix: GC Photo Booth
  {
    slug: "gc-photobooth",
    title: "GC Photo Booth",
    platform: "Wix",
    category: "Wix",
    role: "UI/UX Design & Wix Development",
    industry: "Events & Luxury Entertainment",
    shortDesc: "Modern photo booth rental website with package tier comparisons, backdrop selectors, and online booking.",
    overview: "Designed and built an engaging event rental experience for GC Photo Booth, serving weddings, brand activations, and corporate galas.",
    challenge: "Presenting dynamic rental packages, print template styles, and backdrop options in a clean, interactive booking flow.",
    approach: "Implemented high-contrast dark aesthetics, live event galleries, transparent pricing matrices, and instant date inquiry forms.",
    implementationDetails: [
      "Interactive package comparison for weddings, corporate, and private parties",
      "Digital backdrop and print template visualizer",
      "Direct date availability inquiry and booking automation"
    ],
    outcome: "Converted website visitors into high-value scheduled event bookings with zero booking friction.",
    image: "/projects/gc-photobooth.jpg",
    tags: ["Wix", "UI/UX Design", "Events", "Booking"],
    featured: true,
    liveUrl: "https://www.gcphotobooth.com/",
  },

  // 10. Wix: Shop Eluxurie
  {
    slug: "shope-luxurie",
    title: "Shop Eluxurie",
    platform: "Wix",
    category: "Wix",
    role: "Wix Storefront & Luxury Design",
    industry: "Fashion & Luxury Consignment",
    shortDesc: "Vintage fur coats and designer handbag boutique with authenticated consignment and curated collections.",
    overview: "Created a boutique digital storefront for Eluxurie Atelier, specializing in vintage luxury fur coats, designer accessories, and couture consignment.",
    challenge: "Presenting one-of-a-kind vintage items with authenticity verification details, condition grades, and high-fashion aesthetics.",
    approach: "Developed sleek editorial product lookbooks, zoomable garment photography, and streamlined checkout workflows.",
    implementationDetails: [
      "High-fashion visual catalog with authenticity certification details",
      "Custom sizing guides and condition grading breakdown for vintage garments",
      "Mobile-optimized shopping cart with secure consignment inquiries"
    ],
    outcome: "A sophisticated luxury consignment storefront that attracts discerning international collectors.",
    image: "/projects/shope-luxurie.jpg",
    tags: ["Wix", "Luxury Fashion", "E-Commerce", "Consignment"],
    featured: false,
    liveUrl: "http://shopeluxurie.com/",
  },

  // 11. HubSpot: OpenEnvoy
  {
    slug: "openenvoy",
    title: "OpenEnvoy",
    platform: "HubSpot",
    category: "HubSpot",
    role: "HubSpot CMS & Frontend Engineering",
    industry: "Fintech & SaaS Automation",
    shortDesc: "Enterprise AP automation and fraud prevention platform built with modular HubSpot CMS templates.",
    overview: "Engineered responsive landing pages, interactive product calculators, and resource hubs on HubSpot CMS for OpenEnvoy, an autonomous finance automation platform.",
    challenge: "Creating reusable, high-speed CMS modules that marketing teams can easily configure for webinars, case studies, and enterprise campaigns.",
    approach: "Built custom HubSpot HubL modules with atomic design tokens, interactive ROI savings calculators, and streamlined demo booking gates.",
    implementationDetails: [
      "Custom HubL modules for enterprise feature matrices and ROI calculator",
      "HubSpot form workflows with lead scoring and CRM synchronization",
      "Interactive compliance and security documentation center"
    ],
    outcome: "Empowered the marketing team to deploy high-converting campaign pages in minutes while boosting enterprise demo requests.",
    image: "/projects/openenvoy.jpg",
    tags: ["HubSpot", "Fintech", "SaaS", "HubL"],
    featured: true,
    liveUrl: "https://www.openenvoy.com/",
  },

  // 12. HubSpot: Pinwheel Phones
  {
    slug: "pinwheel",
    title: "Pinwheel Phones",
    platform: "HubSpot",
    category: "HubSpot",
    role: "HubSpot CMS & Landing Page Development",
    industry: "Parental Tech & Mobile Devices",
    shortDesc: "Kid-safe smartphone platform featuring age-based device selectors, carrier compatibility guides, and parent portals.",
    overview: "Developed conversion-focused landing pages and interactive comparison tools on HubSpot for Pinwheel, the leading phone designed specifically for kids and teens.",
    challenge: "Educating concerned parents on parental controls, cellular carrier options, and app whitelists through an accessible, trustworthy layout.",
    approach: "Created interactive device comparison sliders, carrier compatibility checkers, and customer testimonial video showcases.",
    implementationDetails: [
      "Interactive smartphone comparison tool across device models and age tiers",
      "Cellular network compatibility selector for seamless onboarding",
      "Optimized HubSpot landing pages with parent trust badges and reviews"
    ],
    outcome: "Significantly increased parent sign-ups and reduced pre-sale customer support inquiries.",
    image: "/projects/pinwheel.jpg",
    tags: ["HubSpot", "Parental Tech", "Mobile", "CRO"],
    featured: false,
    liveUrl: "https://www.pinwheel.com/",
  },

  // 13. HubSpot: Funded.club
  {
    slug: "funded-club",
    title: "Funded.club",
    platform: "HubSpot",
    category: "HubSpot",
    role: "HubSpot CMS & Growth Design",
    industry: "Startup Recruiting & Talent Acquisition",
    shortDesc: "Fixed-fee startup recruitment platform featuring transparent pricing calculators and candidate delivery timelines.",
    overview: "Built the marketing website and client portal on HubSpot CMS for Funded.club, a global recruiting firm helping venture-backed startups hire top talent on flat fees.",
    challenge: "Disrupting traditional recruitment agency percentage models with crystal-clear pricing transparency and rapid candidate turnaround metrics.",
    approach: "Built interactive fee comparison calculators, verified founder case studies, and automated client consultation booking workflows.",
    implementationDetails: [
      "Fixed-fee vs. percentage recruitment cost savings calculator",
      "Embedded HubSpot meeting scheduler for instant founder consultations",
      "Filterable case study directory highlighting successful startup placements"
    ],
    outcome: "Doubled founder consultation bookings and positioned Funded.club as the go-to recruiter for Seed and Series A startups.",
    image: "/projects/funded-club.jpg",
    tags: ["HubSpot", "Recruitment", "Startups", "Pricing Calculator"],
    featured: false,
    liveUrl: "https://funded.club/",
  },

  // 14. Webflow: Sensei Farms
  {
    slug: "sensei-farms",
    title: "Sensei Farms",
    platform: "Webflow",
    category: "Webflow",
    role: "Webflow Development & Interactive Design",
    industry: "AgTech & Sustainable Agriculture",
    shortDesc: "High-aesthetic sustainable hydroponic farming website with bespoke Webflow interactions and location finders.",
    overview: "Developed an immersive, modern Webflow website for Sensei Farms, an indoor AgTech company founded by Larry Ellison and Dr. David Agus delivering fresh, clean greens.",
    challenge: "Conveying cutting-edge agricultural science through a natural, organic aesthetic with fluid Webflow micro-interactions and store locators.",
    approach: "Crafted bespoke Webflow interactions, smooth scroll narratives, interactive farm tours, and an interactive grocery store locator.",
    implementationDetails: [
      "Bespoke Webflow micro-interactions and fluid scroll transitions",
      "Interactive store locator connecting consumers to local grocers and chefs",
      "CMS-driven product directory detailing hydroponic produce and sustainability metrics"
    ],
    outcome: "Created a captivating brand experience that elevated Sensei Farms’ retail footprint across major markets.",
    image: "/projects/sensei-farms.jpg",
    tags: ["Webflow", "AgTech", "Interactive Design", "Sustainability"],
    featured: true,
    liveUrl: "https://www.senseifarms.com/",
  },
];

export const FILTER_CATEGORIES = [
  "All",
  "WordPress",
  "Shopify",
  "Webflow",
  "Wix",
  "HubSpot",
  "HTML / Web",
] as const;
