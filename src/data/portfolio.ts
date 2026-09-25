export interface Project {
  slug: string;
  title: string;
  desc: string;
  cat: string[];
  tech: string[];
  year: string;
  placeholder: boolean;
  tone: number;
  image?: string;
  overview?: string;
  challenge?: string;
  approach?: string;
  uxProcess?: string;
  visualDesign?: string;
  build?: string;
  responsive?: string;
  learnings?: string;
  liveUrl?: string;
}

export interface Service {
  icon: string;
  name: string;
  lead: string;
  items: string[];
  tags: string[];
  moreDetail: string;
  bestFor: string;
}

export interface TechItem {
  name: string;
  level: "strong" | "mid" | "grow" | "tool";
}

export interface TechGroup {
  group: string;
  desc: string;
  items: TechItem[];
}

export interface Experience {
  role: string;
  org: string;
  place: string;
  dates: string;
  pts: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
}

export interface Insight {
  slug: string;
  cat: string;
  title: string;
  desc: string;
  date?: string;
  readTime?: string;
  body?: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  prefix: "Around " | "₹" | "Starting from ";
  desc: string;
  features: string[];
  featured: boolean;
}

/* Constants & Social Links */
export const BRAND_NAME = "ShamWeb Creative";
export const AGENCY_TAGLINE = "Boutique Digital Product Studio & Full-Stack Creative Agency";
export const FOUNDER_NAME = "Sham Lal";
export const SITE_URL = "https://shamwebcreative.com";
export const EMAIL = "shamwebcreative@gmail.com";
export const PHONE = "+91-7876525326";
export const GITHUB = "https://github.com/ShamLal07";
export const PORTFOLIO_PDF = "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing";
export const LOCATION = "Chandigarh / Mohali, India";
export const FORM_ENDPOINT = ""; // set to Formspree or custom API route if desired

export const PROJECTS: Project[] = [
  {
    slug: "nexus-ai-analytics",
    title: "Nexus AI — Next-Gen Analytics Platform",
    desc: "A futuristic data intelligence platform featuring real-time telemetry, model inference tracking, and glassmorphic telemetry dashboards.",
    cat: ["Web Design", "UI/UX", "Next.js"],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Data Viz"],
    year: "2025",
    placeholder: false,
    tone: 0,
    image: "/projects/saas-dashboard.jpg",
    overview: "Architected and engineered the end-to-end design system and frontend interface for an enterprise AI analytics suite.",
    challenge: "Organizing multi-layer machine learning metrics and inference data without cluttering critical decision-making views.",
    approach: "Designed high-contrast, dark-mode data hierarchies in Figma, implementing luminous amber indicators for rapid anomaly scanning.",
    uxProcess: "Wireframed customizable modular dashboard widgets, conducting usability stress tests for large data densities.",
    visualDesign: "Sleek obsidian surfaces, glowing amber accents, and clean micro-interactions providing instant cognitive clarity.",
    build: "Constructed with modern Next.js App Router, memoized rendering loops, and optimized SVG telemetry charts.",
    responsive: "Pixel-perfect adaptation across ultra-wide monitors, laptops, and mobile tablet views.",
    learnings: "Optimized virtualized data tables achieved consistent 60fps rendering under heavy loads."
  },
  {
    slug: "maison-dor-luxury",
    title: "Maison D'Or — Haute Horlogerie & Jewelry",
    desc: "An ultra-premium luxury storefront offering an editorial shopping experience, bespoke typography, and high-conversion drawer checkout.",
    cat: ["E-commerce", "Shopify", "UI/UX"],
    tech: ["Shopify", "Liquid", "Custom CSS", "Figma"],
    year: "2025",
    placeholder: false,
    tone: 1,
    image: "/projects/luxury-store.jpg",
    overview: "Built a boutique luxury e-commerce experience designed to showcase high-value timepieces and fine jewelry collections.",
    challenge: "Balancing ultra-high-resolution luxury product imagery with sub-second page load times and mobile checkout fluidity.",
    approach: "Devised custom Shopify Liquid sections with zero heavy third-party app bloat to maximize Core Web Vitals.",
    uxProcess: "Integrated an instant slide-over mini-bag, one-click currency localization, and seamless touch gestures.",
    visualDesign: "Editorial luxury typography paired with champagne gold accents on deep obsidian backdrops.",
    build: "Handcrafted Liquid snippets, responsive modern CSS grids, and lazy-loaded image optimization.",
    responsive: "Engineered mobile-first for flawless shopping across iPhone, iPad, and desktop viewports.",
    learnings: "Custom Liquid architecture reduced total page weight by 58% compared to standard themes."
  },
  {
    slug: "aura-3d-creative-studio",
    title: "Aura Creative — Immersive 3D Digital Studio",
    desc: "An award-winning agency portfolio showcasing real-time 3D interactive visuals, kinetic typography, and fluid page transitions.",
    cat: ["Web Design", "3D Motion", "Custom Code"],
    tech: ["React.js", "Three.js / WebGL", "GSAP", "Tailwind CSS"],
    year: "2024",
    placeholder: false,
    tone: 2,
    image: "/projects/creative-agency.jpg",
    overview: "Designed and developed an immersive digital experience for an avant-garde CGI and interactive production house.",
    challenge: "Delivering cinematic 3D motion and smooth WebGL canvas rendering without sacrificing battery life or mobile performance.",
    approach: "Designed visual storyboards in Figma and optimized geometry meshes for lightning-fast GPU rendering.",
    uxProcess: "Crafted intuitive scroll-linked camera paths and frictionless case-study navigation.",
    visualDesign: "Iridescent glass refraction, gold neon lighting, and bold uppercase brutalist typographic scales.",
    build: "Leveraged GSAP timelines synchronized with GPU-accelerated canvas layers.",
    responsive: "Dynamic resolution scaling ensures buttery smooth 60fps animations across all mobile browsers.",
    learnings: "Decoupling scroll calculations from render loops yielded silky smooth 120Hz display support."
  },
  {
    slug: "astro-trade-terminal",
    title: "Astro Trade — Global Financial Terminal",
    desc: "A high-performance trading dashboard with real-time stock and cryptocurrency order books, live charts, and portfolio telemetry.",
    cat: ["Custom Code", "Fintech", "UI/UX"],
    tech: ["React.js", "TypeScript", "WebSocket", "Tailwind CSS"],
    year: "2024",
    placeholder: false,
    tone: 1,
    image: "/projects/fintech-ui.jpg",
    overview: "Developed a comprehensive trading cockpit engineered for institutional and professional retail market participants.",
    challenge: "Rendering streaming financial data, live candlestick fluctuations, and order book executions with microsecond latency.",
    approach: "Streamlined component lifecycles and designed high-contrast neon status gauges for critical trade signals.",
    uxProcess: "Conducted extensive trader interviews to structure single-screen key command layouts and watchlists.",
    visualDesign: "Deep slate aesthetic with luminous emerald greens and warm amber indicators for optimal readability.",
    build: "Engineered with React hooks, WebSockets, and memoized canvas charting engines.",
    responsive: "Responsive collapsible drawer panels and multi-column dock layouts for single or multi-screen setups.",
    learnings: "Offloading canvas charting to web workers eliminated UI main-thread jank entirely."
  },
  {
    slug: "velvet-couture-store",
    title: "Velvet Couture — Custom WordPress & WooCommerce",
    desc: "A bespoke WooCommerce fashion storefront featuring tailored Advanced Custom Fields, custom product filters, and rapid checkout.",
    cat: ["E-commerce", "WordPress"],
    tech: ["WordPress", "WooCommerce", "ACF", "SCSS"],
    year: "2024",
    placeholder: false,
    tone: 2,
    image: "/projects/luxury-store.jpg",
    overview: "Full-cycle design and custom theme build for an independent fashion atelier seeking complete content autonomy.",
    challenge: "Creating an easily maintainable CMS backend for non-technical boutique staff while retaining a bespoke agency aesthetic.",
    approach: "Created a flexible modular block system utilizing ACF Pro and native WooCommerce hooks.",
    uxProcess: "Engineered effortless attribute filtering by size, collection, and fabric type.",
    visualDesign: "Editorial lookbook layout with high-impact typography and expansive negative space.",
    build: "Custom PHP theme without reliance on heavy page-builders, delivering clean semantic HTML.",
    responsive: "Tested across hundreds of viewport sizes to guarantee flawless responsiveness.",
    learnings: "Custom ACF block systems reduced content publishing times for the client by 70%."
  },
  {
    slug: "pulse-cloud-platform",
    title: "Pulse Cloud — Enterprise Cloud Infrastructure",
    desc: "An intuitive infrastructure management console with server health monitors, load balancer metrics, and deployment pipelines.",
    cat: ["Custom Code", "Web Design", "Next.js"],
    tech: ["Next.js", "React.js", "Tailwind CSS", "REST API"],
    year: "2024",
    placeholder: false,
    tone: 0,
    image: "/projects/saas-dashboard.jpg",
    overview: "Engineered a high-density web dashboard for DevOps teams monitoring distributed Kubernetes clusters and edge nodes.",
    challenge: "Visualizing complex multi-region server clusters and automated scaling policies cleanly.",
    approach: "Designed intuitive visual health matrixes and streamlined navigation hierarchies.",
    uxProcess: "User journey mapping for critical alert resolution workflows.",
    visualDesign: "Dark cybernetic aesthetic with crisp typography and subtle border glows.",
    build: "Next.js App Router with server-side rendered initial states for instantaneous loading.",
    responsive: "Full responsiveness allowing on-call engineers to triage infrastructure from mobile phones.",
    learnings: "Component-driven design architecture expedited cross-team feature rollouts."
  }
];

export const FILTERS = ["All", "Web Design", "UI/UX", "WordPress", "Shopify", "Custom Code", "E-commerce"];

export const SERVICES: Service[] = [
  {
    icon: "i-pen",
    name: "UI/UX Architecture & Product Design",
    lead: "User-centric digital interfaces designed in Figma with obsessive attention to user psychology, typography, and conversion.",
    items: [
      "User research, wireframing and user journey mapping",
      "Pro-level interface design in Figma and Adobe XD",
      "Scalable atomic design systems and component libraries",
      "Pixel-perfect developer handoff with complete design tokens"
    ],
    tags: ["Figma", "Adobe XD", "Design Systems", "Prototyping"],
    moreDetail: "Every project starts with the user flow and business objective. Structure and wireframes are validated before visual styling begins, ensuring that interfaces are not merely attractive, but intuitively functional and high-converting.",
    bestFor: "Startups, SaaS platforms, and digital brands that demand an elite digital presence that converts visitors into loyal customers."
  },
  {
    icon: "i-layout",
    name: "Web Design & Digital Brand Experience",
    lead: "Modern, high-impact business websites and conversion-focused landing pages with unforgettable visual storytelling.",
    items: [
      "Bespoke visual identity and digital brand systems",
      "High-converting landing pages and marketing sites",
      "Fluid, responsive layouts for mobile, tablet, and desktop",
      "Modern typographic hierarchy and micro-interactions"
    ],
    tags: ["Brand Identity", "Figma", "Responsive Web", "Visual Strategy"],
    moreDetail: "We build websites with clear hierarchy, magnetic visuals, and an obvious call to action. Spacing, color psychology, and modern typography are calibrated to hold attention and elevate your brand credibility.",
    bestFor: "Companies seeking to reposition their brand at the top of their market and outshine competitors."
  },
  {
    icon: "i-code",
    name: "Figma to Code & Next.js Development",
    lead: "Designs transformed into blazing-fast, cross-browser, accessible code with modern React, Next.js, and clean CSS.",
    items: [
      "Pixel-perfect translation from Figma/XD to code",
      "Next.js App Router, React.js, and TypeScript architectures",
      "Tailwind CSS, Bootstrap 5, Shadcn, and Vanilla CSS",
      "Zero-layout-shift performance and accessibility compliance"
    ],
    tags: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    moreDetail: "What is designed in Figma is translated line by line into responsive, performant, clean code. Zero guesswork, zero handoff friction, and full cross-browser testing across all modern screen resolutions.",
    bestFor: "Tech companies and agencies requiring precision engineering and sub-second load times."
  },
  {
    icon: "i-box",
    name: "WordPress & CMS Architecture",
    lead: "Dynamic, scalable CMS platforms with Advanced Custom Fields (ACF) that non-technical teams can manage effortlessly.",
    items: [
      "Custom ACF blocks and dynamic content modeling",
      "Lightweight, custom theme builds without heavy bloated plugins",
      "Corporate business and editorial content publishing sites",
      "WooCommerce customization for digital and physical stores"
    ],
    tags: ["WordPress", "ACF Pro", "Elementor", "WooCommerce", "PHP"],
    moreDetail: "We build structured WordPress architectures that eliminate reliance on brittle visual builders. Your team receives an intuitive, custom-tailored editing dashboard where updating text, imagery, and products is effortless.",
    bestFor: "Enterprises, media outlets, and businesses requiring flexible content publishing and total editorial control."
  },
  {
    icon: "i-cart",
    name: "Shopify E-Commerce Development",
    lead: "High-converting online storefronts optimized for effortless browsing, swift checkout, and high average order values.",
    items: [
      "Bespoke Shopify Liquid theme engineering",
      "High-speed product page layouts and cart drawers",
      "Conversion rate optimization (CRO) and checkout refinement",
      "Seamless integration with marketing and analytics stacks"
    ],
    tags: ["Shopify", "Liquid", "E-commerce CRO", "Theme Architecture"],
    moreDetail: "We engineer customized Shopify storefronts using clean Liquid templates. By eliminating unnecessary third-party plugins, we ensure blazing fast mobile load times and a seamless purchasing experience.",
    bestFor: "Direct-to-consumer (D2C) brands and retail stores ready to scale their digital sales."
  },
  {
    icon: "i-rocket",
    name: "2D/3D Motion & Interactive Animation",
    lead: "Kinetic animations, smooth scroll interactions, and micro-interactions that breathe life into digital experiences.",
    items: [
      "Interactive 2D & 3D WebGL / Three.js canvas effects",
      "Scroll-triggered animations with GSAP and Framer Motion",
      "Kinetic SVG illustrations and micro-interaction design",
      "Performance-tuned motion that never causes lag or battery drain"
    ],
    tags: ["GSAP", "Three.js", "Framer Motion", "2D/3D Animation"],
    moreDetail: "Motion should elevate content, not distract from it. We design purposeful kinetic effects, scroll-linked animations, and interactive cues that guide the user's eye and leave a lasting impression.",
    bestFor: "Visionary brands looking to stand out with an award-winning, interactive digital presence."
  },
  {
    icon: "i-globe",
    name: "Technical SEO, SMO & AIO Optimization",
    lead: "Deep on-page optimization, Schema.org structured data, and search engine readiness for human searchers and AI engines.",
    items: [
      "Comprehensive on-page technical SEO & structured data (JSON-LD)",
      "OpenGraph and Twitter SMO cards for maximum social click-through",
      "AIO (Artificial Intelligence Optimization) for LLM & AI overview citation",
      "Core Web Vitals optimization and image compression"
    ],
    tags: ["Technical SEO", "AIO Search", "Schema.org", "Core Web Vitals"],
    moreDetail: "Search engines and AI overview engines demand clean semantic HTML, fast loading speeds, and structured schema graphs. We build SEO directly into the code foundation of every project.",
    bestFor: "Any business that wants organic discoverability across Google, Bing, ChatGPT, and modern search engines."
  }
];

export const TECH_GROUPS: TechGroup[] = [
  {
    group: "Design & Creative Direction",
    desc: "Where digital vision transforms into visual reality.",
    items: [
      { name: "Figma (Pro Architecture)", level: "strong" },
      { name: "Adobe Photoshop", level: "strong" },
      { name: "Adobe XD", level: "strong" },
      { name: "Design Systems & Tokens", level: "strong" }
    ]
  },
  {
    group: "Frontend & Web Architecture",
    desc: "Modern technologies shipping high-performance digital products.",
    items: [
      { name: "Next.js (App Router)", level: "strong" },
      { name: "React.js", level: "strong" },
      { name: "TypeScript", level: "strong" },
      { name: "HTML5 & Semantic SEO", level: "strong" },
      { name: "CSS3 & Modern Layouts", level: "strong" },
      { name: "JavaScript (ES6+)", level: "strong" }
    ]
  },
  {
    group: "CMS & E-Commerce Platforms",
    desc: "Scalable content management and revenue-generating storefronts.",
    items: [
      { name: "Shopify (Liquid Theme Dev)", level: "strong" },
      { name: "WordPress (ACF Pro)", level: "strong" },
      { name: "WooCommerce", level: "strong" },
      { name: "Webflow", level: "strong" },
      { name: "HubSpot Dynamic Pages", level: "mid" },
      { name: "Wix Studio", level: "mid" }
    ]
  },
  {
    group: "Styling & UI Frameworks",
    desc: "Responsive, cohesive, accessible user interfaces.",
    items: [
      { name: "Tailwind CSS", level: "strong" },
      { name: "Shadcn UI", level: "strong" },
      { name: "Bootstrap 5", level: "strong" },
      { name: "Material UI", level: "mid" },
      { name: "SCSS / Sass", level: "strong" }
    ]
  },
  {
    group: "2D/3D Motion & Animation",
    desc: "Kinetic animations that captivate and convert.",
    items: [
      { name: "GSAP (ScrollTrigger)", level: "strong" },
      { name: "Framer Motion", level: "strong" },
      { name: "Three.js & WebGL", level: "mid" },
      { name: "CSS Keyframe Motion", level: "strong" }
    ]
  },
  {
    group: "SEO, Performance & AIO",
    desc: "Discoverability for modern search engines and AI assistants.",
    items: [
      { name: "Technical On-Page SEO", level: "strong" },
      { name: "Schema.org (JSON-LD)", level: "strong" },
      { name: "Core Web Vitals & Speed", level: "strong" },
      { name: "AIO (AI Search Optimization)", level: "strong" }
    ]
  },
  {
    group: "AI-Augmented Engineering",
    desc: "Accelerating ideation, code optimization, and rapid delivery.",
    items: [
      { name: "Cursor AI", level: "tool" },
      { name: "Claude 3.7", level: "tool" },
      { name: "ChatGPT 4o", level: "tool" },
      { name: "Gemini Pro", level: "tool" },
      { name: "Midjourney / FLUX", level: "tool" }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Founder & Lead Creative Technologist",
    org: "ShamWeb Creative",
    place: "Chandigarh / Mohali",
    dates: "2020 – Present",
    pts: [
      "Operating as a full-cycle, boutique digital studio delivering high-impact websites and e-commerce platforms.",
      "Delivering bespoke UI/UX architecture, 2D/3D interactive animations, and custom Shopify/WordPress implementations.",
      "Direct client engagement, technical scoping, design systems, and production engineering with zero agency overhead."
    ]
  },
  {
    role: "Senior Frontend Developer",
    org: "Eminence Technology",
    place: "Mohali",
    dates: "Aug 2025 – Present",
    pts: [
      "Leading frontend architecture across enterprise Shopify and bespoke web platforms.",
      "Crafting responsive, high-performance web products utilizing Next.js, React, and Shopify Liquid.",
      "Translating complex Figma mockups into pixel-perfect, accessible UI components.",
      "Guiding junior developers and streamlining client requirement specifications."
    ]
  },
  {
    role: "Frontend Developer & UI Specialist",
    org: "Web Forte Technologies Private Limited",
    place: "Chandigarh",
    dates: "May 2024 – Jul 2025",
    pts: [
      "Engineered cross-browser web applications utilizing modern HTML5, CSS3, JavaScript, and Bootstrap.",
      "Developed custom WordPress (ACF Pro) and Webflow dynamic CMS architectures.",
      "Executed on-page technical SEO, structured data markup, and Core Web Vitals performance tuning."
    ]
  },
  {
    role: "Web & UI/UX Designer",
    org: "Vqcodes Software Solutions LLP",
    place: "Mohali",
    dates: "Nov 2022 – Aug 2023",
    pts: [
      "Designed and developed responsive client websites utilizing modern CSS, Figma, and Adobe Photoshop.",
      "Spearheaded user research and front-end interface implementation for multiple brand initiatives."
    ]
  },
  {
    role: "Web & Graphic Designer",
    org: "Bepoj Technology Pvt. Ltd",
    place: "Banikhet, Dalhousie",
    dates: "Jun 2022 – Nov 2022",
    pts: [
      "Created digital brand assets, web page layouts, and marketing graphics.",
      "Assisted senior developers with frontend CSS and responsive layout verification."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Lovely Professional University (LPU)",
    period: "2024 – Present"
  },
  {
    degree: "12th (Non-Medical)",
    institution: "H.P.B.O.S.E, Dharamshala",
    period: "2020 · 70%"
  },
  {
    degree: "10th",
    institution: "H.P.B.O.S.E, Dharamshala",
    period: "2018 · 75%"
  }
];

export const INSIGHTS: Insight[] = [
  {
    slug: "design-systems-performance",
    cat: "UI/UX & Code",
    title: "Why Unified Design-to-Code Eliminates 80% of Agency Bottlenecks",
    desc: "How a boutique creative engineering studio bridges the gap between Figma mockups and 60fps web execution.",
    date: "Sep 2026",
    readTime: "4 min read",
    body: [
      "In traditional agencies, a design passes through account managers, UI designers, and separate developers. With every handoff, design fidelity decays and technical compromises multiply.",
      "When a principal creative technologist conceptualizes the UX in Figma and writes the Next.js and CSS code, what is signed off is exactly what executes live in the browser."
    ]
  },
  {
    slug: "modern-wordpress-acf-vs-bloat",
    cat: "WordPress",
    title: "Building Clean, Lightning-Fast WordPress Sites with ACF Pro",
    desc: "Why custom field modeling beats bloated multi-plugin page builders every single time.",
    date: "Aug 2026",
    readTime: "5 min read",
    body: [
      "Modern businesses need CMS flexibility without sacrificing sub-second load times. Bloated page builders inject thousands of unnecessary DOM nodes.",
      "By architecting custom ACF blocks and clean semantic PHP, editors get an intuitive dashboard while end users experience instant page speeds."
    ]
  },
  {
    slug: "shopify-liquid-cro-secrets",
    cat: "Shopify",
    title: "Liquid Optimization: Driving High-Conversion Luxury Storefronts",
    desc: "How custom Shopify Liquid templates elevate average order value and mobile checkout speed.",
    date: "Jul 2026",
    readTime: "6 min read",
    body: [
      "Mobile shoppers abandon carts when pages stutter or take longer than 2 seconds to render.",
      "Custom Shopify theme development decouples heavy client scripts, creating an editorial, app-like purchasing flow that directly drives revenue."
    ]
  }
];

export const FAQ: [string, string][] = [
  [
    "Do you collaborate with international companies and startups?",
    "Yes. ShamWeb Creative operates globally. We partner with clients across North America, Europe, the Middle East, and Asia. Communication is streamlined via video conferences, Slack/Teams, and scheduled project milestones."
  ],
  [
    "What makes a boutique studio different from traditional creative agencies?",
    "Traditional agencies have heavy overheads, layers of account managers, and endless handoffs where your vision gets diluted. With ShamWeb Creative, you collaborate directly with a senior creative technologist who handles both design and code. You get agency-grade results at double the speed with zero bureaucratic lag."
  ],
  [
    "What do you need from us to begin a project?",
    "A brief summary of your business, project goals, brand assets (if available), and reference websites you admire. We conduct a structured discovery session to refine your scope and roadmap before any design work begins."
  ],
  [
    "Do you handle both design and complete development?",
    "Yes. We provide complete end-to-end execution: brand strategy, Figma UX/UI architecture, 2D/3D motion, frontend development in Next.js/React, and custom CMS integration in Shopify or WordPress."
  ],
  [
    "Can our internal team easily manage content after launch?",
    "Absolutely. Every website is built with an intuitive, streamlined content dashboard (ACF Pro on WordPress, native Shopify sections, or headless CMS), allowing your team to update copy, images, and products without touching code."
  ],
  [
    "Are websites optimized for mobile and search engines?",
    "Every build is responsive by default, tested across dozens of devices, and built with technical on-page SEO, Schema.org structured data, and Core Web Vitals optimization."
  ],
  [
    "What is your project turnaround time?",
    "Turnaround depends on project scope. A high-converting landing page typically launches within 7–10 days, while custom enterprise platforms and e-commerce stores take 3–5 weeks."
  ],
  [
    "How are project investments structured?",
    "We provide fixed-cost project pricing based on transparent deliverables, as well as ongoing monthly retainer arrangements for continuous design and engineering partnership."
  ]
];

export const PROCESS: [string, string][] = [
  [
    "Discovery & Strategy",
    "We define your business objectives, target audience, conversion paths, and technical requirements to establish a clear architectural roadmap."
  ],
  [
    "UX Architecture",
    "We map the page hierarchies and user journeys, crafting wireframes in Figma to validate usability and structure prior to visual design."
  ],
  [
    "Visual & Motion Design",
    "Bespoke typography, color psychology, 2D/3D motion, and responsive component libraries are crafted with obsessive attention to detail."
  ],
  [
    "Precision Engineering",
    "The approved design is transformed into clean, blazing-fast, semantic code using Next.js, React, modern CSS, or custom Shopify/WordPress."
  ],
  [
    "CMS & Systems Integration",
    "Content structures, payment gateways, analytics tracking, and marketing tools are connected so your team has effortless control."
  ],
  [
    "Launch & SEO Readiness",
    "Comprehensive speed optimization, cross-browser audits, technical on-page SEO, and Schema.org structured data are verified before public launch."
  ]
];

export const WORKFLOW: [string, string, string][] = [
  ["i-bulb", "Strategy", "Objectives & user journey"],
  ["i-frame", "UX Architecture", "Structure & wireframes"],
  ["i-pen", "Visual Design", "Typography, color & 3D"],
  ["i-code", "Precision Build", "Next.js & responsive code"],
  ["i-box", "CMS Integration", "Shopify & WordPress"],
  ["i-rocket", "Launch & SEO", "Testing, schema & deploy"]
];

export const EVERY_PROJECT: [string, string][] = [
  [
    "Responsive by default",
    "Every layout is rigorously tested across desktop, tablet, and mobile displays for flawless fluidity."
  ],
  [
    "Technical SEO & AIO Basics",
    "Semantic headings, OpenGraph social cards, and Schema.org structured data are woven into the codebase."
  ],
  [
    "Extreme Performance Care",
    "Assets are compressed and lazy-loaded, ensuring sub-second rendering and high Google Lighthouse scores."
  ],
  [
    "Autonomous Content Management",
    "CMS setups engineered so non-technical team members can publish articles, products, and pages effortlessly."
  ],
  [
    "Complete Handoff & Training",
    "Full asset documentation, walk-through tutorials, and ongoing post-launch technical support."
  ]
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter Launch",
    price: "₹15,000",
    prefix: "Around ",
    desc: "Ideal for startups and growing businesses requiring a high-converting, modern landing page or small website.",
    features: [
      "Custom UI/UX design in Figma",
      "Full responsive mobile-first build",
      "Technical on-page SEO & Schema",
      "Contact form & analytics setup"
    ],
    featured: false
  },
  {
    name: "Business Growth",
    price: "₹30,000",
    prefix: "Around ",
    desc: "Complete digital presence with multiple custom pages, CMS integration, and tailored visual brand elements.",
    features: [
      "Comprehensive multi-page architecture",
      "WordPress (ACF) or Shopify CMS setup",
      "Interactive micro-animations & motion",
      "Advanced on-page SEO & social cards",
      "Priority launch timeline"
    ],
    featured: true
  },
  {
    name: "Enterprise & Custom",
    price: "₹50,000+",
    prefix: "Starting from ",
    desc: "Full-scale custom digital products, advanced WebGL/3D motion, complex e-commerce, and bespoke web apps.",
    features: [
      "Bespoke UI/UX design system",
      "Next.js / React full-stack build",
      "Custom 2D/3D animations & interactions",
      "Complex e-commerce or API integrations",
      "Dedicated ongoing retainer support"
    ],
    featured: false
  }
];

export const MARQUEE_TECH = [
  "Figma UI/UX",
  "Next.js 16",
  "React.js",
  "TypeScript",
  "Shopify Liquid",
  "WordPress ACF",
  "Tailwind CSS",
  "GSAP Motion",
  "Three.js 3D",
  "Technical SEO",
  "AIO Optimization",
  "WooCommerce",
  "Webflow",
  "HTML5/CSS3",
  "GraphQL",
  "Supabase"
];
