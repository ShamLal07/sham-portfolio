export interface Project {
  slug: string;
  title: string;
  platform: "WordPress" | "Shopify" | "Next.js" | "React / Next.js" | "Wix" | "Webflow" | "HubSpot" | "HTML / Web" | "Other" | "Figma";
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
  "benjamin-heating",
  "josh-bridges",
  "ohm-fitness",
  "topleft",
  "workfully",
  "alerteefy",
  "mgi-access",
  "xfactor-quiz",
  "itsbot-ai-blog",
  "aquoz",
  "hyundai-heat-pumps",
  "equity-pulse",
  "aethrion-lindos",
  "hopp-worldwide",
  "magdent-med",
];

export const PROJECTS: Project[] = [
  // =========================================================================
  // 1. HubSpot: TopLeft
  // =========================================================================
  {
    slug: "topleft",
    title: "TopLeft",
    platform: "HubSpot",
    category: "HubSpot",
    role: "HubSpot CMS Engineering & UI/UX",
    industry: "SaaS & Agile Project Management for MSPs",
    shortDesc: "Visual Kanban and agile project management platform for MSPs built on HubSpot CMS with PSA software integrations.",
    overview: "Engineered high-converting marketing landing pages, interactive product feature tours, and integration showcases on HubSpot CMS for TopLeft, the leading visual Kanban board platform built specifically for MSPs and IT service providers.",
    challenge: "Communicating seamless two-way synchronization with MSP systems like ConnectWise, Autotask, and HaloPSA while driving high-intent demo bookings.",
    approach: "Built custom modular HubL components, interactive Kanban board workflow previews, comparison matrices, and automated HubSpot demo scheduling funnels.",
    implementationDetails: [
      "Custom HubL modules for interactive Kanban board feature tours and PSA integration tabs",
      "HubSpot meeting scheduler integration capturing company size and current PSA tool",
      "High-speed, responsive typography and responsive layouts tuned for IT decision-makers"
    ],
    outcome: "Increased qualified demo conversions by 38% and established clear product authority among global MSP leaders.",
    image: "/projects/topleft.jpg",
    tags: ["HubSpot", "SaaS", "HubL", "IT Services", "Kanban"],
    featured: true,
    liveUrl: "https://www.topleft.team/",
  },

  // =========================================================================
  // 2. HubSpot: Workfully
  // =========================================================================
  {
    slug: "workfully",
    title: "Workfully",
    platform: "HubSpot",
    category: "HubSpot",
    role: "HubSpot CMS Development & Conversion Design",
    industry: "AI-Native Recruiting & Global Talent",
    shortDesc: "AI-native global recruiting platform built with custom HubSpot CMS modules, candidate search portals, and enterprise inquiry flows.",
    overview: "Developed conversion-focused landing pages and interactive employer experiences on HubSpot CMS for Workfully, an AI-native recruiting marketplace connecting high-growth tech companies with elite global talent.",
    challenge: "Balancing an editorial, human-centric aesthetic with cutting-edge AI recruitment metrics, recruiter networks, and multi-tier enterprise lead captures.",
    approach: "Engineered bespoke HubSpot templates with fluid micro-interactions, live search input simulators, recruiter tier showcases, and automated CRM lead scoring.",
    implementationDetails: [
      "Bespoke HubSpot HubL sections showcasing AI talent search and recruiter specialization tiers",
      "Frictionless 'Post a Job' and 'Book a Demo' conversion funnels synchronized with HubSpot CRM",
      "Ultra-responsive mobile layouts with dark editorial styling and fast asset optimization"
    ],
    outcome: "Elevated brand prestige and drove a 45% increase in inbound enterprise hiring inquiries.",
    image: "/projects/workfully.jpg",
    tags: ["HubSpot", "AI Recruitment", "HubL", "Global Talent", "SaaS"],
    featured: true,
    liveUrl: "https://workfully.com/",
  },

  // =========================================================================
  // 3. Next.js: Alerteefy
  // =========================================================================
  {
    slug: "alerteefy",
    title: "Alerteefy",
    platform: "Next.js",
    category: "Next.js",
    role: "Frontend Engineering & Next.js",
    industry: "Connected Vehicle Tech & IoT SaaS",
    shortDesc: "Real-time smart vehicle safety and instant parking alert notification platform with QR vehicle safety tags.",
    overview: "Engineered a high-performance Next.js marketing and driver onboarding platform for Alerteefy, an innovative vehicle safety ecosystem enabling drivers to stay notified of parking emergencies and vehicle safety issues.",
    challenge: "Presenting complex QR vehicle safety workflows and dual-audience (drivers vs fleet operators) onboarding in an intuitive, tech-forward interface.",
    approach: "Designed high-contrast dark mode ergonomics with neon accents, interactive feature walkthroughs, and fast responsive mobile layouts.",
    implementationDetails: [
      "Interactive QR safety tag workflow visualizer with instant notification previews",
      "Next.js App Router architecture with responsive touch ergonomics and rapid load times",
      "Conversion-optimized call-to-actions for individual vehicle owners and fleet partnerships"
    ],
    outcome: "Created an authoritative tech presence that significantly accelerated early driver registration and fleet inquiries.",
    image: "/projects/alerteefy.jpg",
    tags: ["Next.js", "React", "Vehicle Tech", "SaaS", "Tailwind CSS"],
    featured: true,
    liveUrl: "https://alerteefy.com/",
  },

  // =========================================================================
  // 2. WordPress: MGI Access (Elementor)
  // =========================================================================
  {
    slug: "mgi-access",
    title: "MGI Access",
    platform: "WordPress",
    category: "WordPress",
    role: "WordPress & Elementor Development",
    industry: "Industrial Scaffolding & Height Safety",
    shortDesc: "Industrial access, scaffolding, and commercial height safety engineering website engineered with custom Elementor templates.",
    overview: "Constructed an authoritative, high-performance WordPress & Elementor website for MGI Access, a premier contractor for industrial scaffolding, facade access, and height safety engineering.",
    challenge: "Organizing extensive technical equipment specs, Australian safety compliance certifications, and multi-sector project galleries into a streamlined commercial quote funnel.",
    approach: "Developed bespoke Elementor sections with optimized CSS, interactive project portfolios, and multi-step safety quote request forms.",
    implementationDetails: [
      "Custom Elementor theme architecture tuned for sub-second mobile page loads",
      "Modular scaffolding equipment matrices and Australian safety standards verification",
      "Commercial quotation form with project location detectors and file attachment support"
    ],
    outcome: "A solid commercial digital presence consistently generating qualified construction contract tenders.",
    image: "/projects/mgi-access.jpg",
    tags: ["WordPress", "Elementor", "Construction", "B2B", "Responsive"],
    featured: true,
    liveUrl: "https://mgiaccess.com/",
  },

  // =========================================================================
  // 3. WordPress: X-Factor Lab Quiz (Gutenberg)
  // =========================================================================
  {
    slug: "xfactor-quiz",
    title: "X-Factor Lab Quiz",
    platform: "WordPress",
    category: "WordPress",
    role: "Gutenberg Development & Quiz Engine",
    industry: "EdTech & Talent Diagnostics",
    shortDesc: "Interactive diagnostic skills assessment and archetype quiz platform engineered with custom Gutenberg blocks.",
    overview: "Engineered an interactive multi-step diagnostic assessment quiz application on WordPress using custom Gutenberg blocks for X-Factor Lab, testing candidates' creative strengths and leadership archetypes.",
    challenge: "Delivering instantaneous multi-step quiz transitions, client-side score calculations, and personalized result generation without page reloads.",
    approach: "Developed custom Gutenberg blocks with React, seamless step progression, animated progress indicators, and automated email score delivery.",
    implementationDetails: [
      "Custom React Gutenberg blocks for interactive questions and instant validation",
      "Dynamic scoring algorithm calculating percentile feedback upon quiz completion",
      "Automated result reporting and CRM webhook dispatch for lead nurturing"
    ],
    outcome: "Achieved an 82% quiz completion rate with high social shareability and qualified candidate lead capture.",
    image: "/projects/xfactor-quiz.jpg",
    tags: ["WordPress", "Gutenberg", "Interactive Quiz", "React", "EdTech"],
    featured: true,
    liveUrl: "https://quiz.x-factor-lab.com/",
  },

  // =========================================================================
  // 4. WordPress: ItsBot AI Blog (Custom Blog Site)
  // =========================================================================
  {
    slug: "itsbot-ai-blog",
    title: "ItsBot AI Editorial",
    platform: "WordPress",
    category: "WordPress",
    role: "Custom WordPress Blog Architecture",
    industry: "Artificial Intelligence & SaaS",
    shortDesc: "High-speed custom WordPress publication and knowledge hub engineered for a conversational AI platform.",
    overview: "Architected and deployed a custom WordPress editorial blog platform for ItsBot AI, delivering in-depth articles on conversational AI, automation workflows, and customer experience technology.",
    challenge: "Creating a clean, modern Medium-style reading experience with newsletter captures, related post recommendations, and lightning-fast page delivery.",
    approach: "Built lightweight custom WordPress templates, estimated reading time counters, sticky social sharing, and structured schema markup.",
    implementationDetails: [
      "Custom editorial WordPress layout optimized for reader retention and readability",
      "Automated reading time calculation, author bios, and category filtering",
      "Integrated email newsletter lead captures and related AI insights"
    ],
    outcome: "Substantially increased organic search traffic and reader time-on-page across core AI topics.",
    image: "/projects/itsbot-ai-blog.jpg",
    tags: ["WordPress", "Custom Blog", "AI & SaaS", "Editorial", "Clean Code"],
    featured: true,
    liveUrl: "https://itsbot.ai/blog/",
  },

  // =========================================================================
  // 5. Next.js: Aquoz Australia
  // =========================================================================
  {
    slug: "aquoz",
    title: "Aquoz Australia",
    platform: "Next.js",
    category: "Next.js",
    role: "Full-Stack / Next.js Web Development",
    industry: "Clean Tech & Hydration Systems",
    shortDesc: "Australian premium whole-house water filtration and commercial hydration systems platform with quote builders.",
    overview: "Developed a modern, clean digital storefront and commercial quote platform for Aquoz Australia, providing sustainable filtered drinking water solutions for homes and businesses across Australia.",
    challenge: "Showcasing multi-tier filtration technology (Whole House vs Undersink RO) and Australian certification standards with intuitive inquiry funnels.",
    approach: "Designed clean aquatic-inspired aesthetics, interactive product specification sheets, and fast quote request forms.",
    implementationDetails: [
      "Interactive water filtration equipment selector and commercial quote generator",
      "Fast static-generation architecture with responsive touch ergonomics",
      "Australian WaterMark and NSF compliance documentation integration"
    ],
    outcome: "Delivered an informative commercial platform driving steady inbound consumer and B2B quote inquiries.",
    image: "/projects/aquoz.jpg",
    tags: ["Next.js", "Clean Tech", "Australia", "B2B Solutions", "E-Commerce"],
    featured: true,
    liveUrl: "https://www.aquoz.com.au/",
  },

  // =========================================================================
  // 6. Next.js: Hyundai Heat Pumps
  // =========================================================================
  {
    slug: "hyundai-heat-pumps",
    title: "Hyundai Heat Pumps",
    platform: "Next.js",
    category: "Next.js",
    role: "Frontend Engineering & Next.js",
    industry: "Renewable Energy & Climate Solutions",
    shortDesc: "Official Indian digital platform for Hyundai commercial and residential eco-friendly heat pump water heating systems.",
    overview: "Developed the authoritative web presence for Hyundai Heat Pumps India, presenting energy-efficient heat pump solutions for luxury villas, hotels, hospitals, and industrial facilities.",
    challenge: "Explaining heat pump thermodynamics, energy-saving metrics, and product sizing recommendations in a simple, persuasive visual format.",
    approach: "Created technical specification matrices, power-saving comparison sliders, and quick dealer/distributor inquiry mechanisms.",
    implementationDetails: [
      "Energy savings calculator comparing heat pumps against traditional water heaters",
      "Comprehensive product series breakdown (Domestic, Commercial, Swimming Pool)",
      "Nationwide dealership and institutional project inquiry pipeline"
    ],
    outcome: "Established a trusted, high-impact digital presence driving major residential and commercial energy project leads.",
    image: "/projects/hyundai-heat-pumps.jpg",
    tags: ["Next.js", "Clean Energy", "HVAC", "Enterprise", "React"],
    featured: true,
    liveUrl: "https://hyundaiheatpumps.co.in/",
  },

  // =========================================================================
  // 7. Next.js: Equity Pulse Australia
  // =========================================================================
  {
    slug: "equity-pulse",
    title: "Equity Pulse",
    platform: "Next.js",
    category: "Next.js",
    role: "Fintech Web Design & Next.js Development",
    industry: "Property Investment & Equity Analytics",
    shortDesc: "Australian property market analytics platform empowering homeowners and investors to track real equity and suburb growth.",
    overview: "Built a modern financial technology platform for Equity Pulse Australia, delivering real-time property market insights, equity calculators, and suburb trend indicators for property owners.",
    challenge: "Displaying data-heavy property market indices and suburb growth metrics without overwhelming the user experience.",
    approach: "Engineered high-clarity data dashboards, interactive equity estimation tools, and mobile-friendly investment reports.",
    implementationDetails: [
      "Interactive home equity and market growth calculation engine",
      "Dynamic suburb analytics cards with live market movement indicators",
      "High-security lead capture with instant investment report generation"
    ],
    outcome: "Empowered Australian homeowners to uncover hidden property equity and take informed investment actions.",
    image: "/projects/equity-pulse.jpg",
    tags: ["Next.js", "Fintech", "Property Tech", "Australia", "Analytics"],
    featured: true,
    liveUrl: "https://equitypulse.com.au/",
  },

  // =========================================================================
  // 8. Next.js: Aethrion Lindos
  // =========================================================================
  {
    slug: "aethrion-lindos",
    title: "Aethrion Lindos",
    platform: "Next.js",
    category: "Next.js",
    role: "Luxury Web Design & Development",
    industry: "Luxury Hospitality & Boutique Villa",
    shortDesc: "Boutique Mediterranean luxury villa website in Rhodes, Greece featuring direct booking and immersive photo galleries.",
    overview: "Designed an exquisite, Mediterranean-inspired hospitality website for Aethrion Lindos, a luxury boutique residence nestled in the historic village of Lindos, Rhodes.",
    challenge: "Capturing the authentic Greek island sunlight, architectural heritage, and tranquil luxury through digital storytelling while driving direct bookings.",
    approach: "Crafted editorial visual compositions, seamless multilingual layout support, full-bleed imagery, and integrated booking engine triggers.",
    implementationDetails: [
      "Immersive gallery showcase highlighting Aegean architecture and panoramic views",
      "Direct reservation engine integration bypassing third-party OTA commission fees",
      "Localized Rhodes travel guide and concierge amenity showcase"
    ],
    outcome: "Substantially increased direct guest reservations and elevated the property's worldwide boutique prestige.",
    image: "/projects/aethrion-lindos.jpg",
    tags: ["Next.js", "Luxury Hospitality", "Boutique Hotel", "Greece", "UI/UX"],
    featured: true,
    liveUrl: "https://www.aethrionlindos.com/",
  },

  // =========================================================================
  // 9. Next.js: Hopp Worldwide
  // =========================================================================
  {
    slug: "hopp-worldwide",
    title: "Hopp Worldwide",
    platform: "Next.js",
    category: "Next.js",
    role: "Global Mobility Web Platform",
    industry: "Global Chauffeur & Corporate Travel",
    shortDesc: "Worldwide premium chauffeur and executive airport transfer service platform operating in 500+ cities globally.",
    overview: "Architected an international corporate travel and luxury chauffeur booking platform for Hopp Worldwide, serving executive clients, private aviation passengers, and corporate travel managers globally.",
    challenge: "Facilitating multi-currency executive bookings, fleet category selection (First Class, Business Van, EV), and global airport concierge options.",
    approach: "Built an intuitive 3-step booking flow, live fleet tier visualizer, corporate account inquiry systems, and multilingual readiness.",
    implementationDetails: [
      "Global airport transfer and point-to-point chauffeur reservation flow",
      "Executive fleet showcase detailing passenger capacity and luggage specifications",
      "Corporate partnership portal with automated SLA tracking and support"
    ],
    outcome: "Streamlined global reservation management across 500+ metropolitan destinations.",
    image: "/projects/hopp-worldwide.jpg",
    tags: ["Next.js", "Mobility", "Corporate Travel", "Global Logistics"],
    featured: true,
    liveUrl: "https://www.hoppworldwide.com/",
  },

  // =========================================================================
  // 10. Next.js: Magdent Med
  // =========================================================================
  {
    slug: "magdent-med",
    title: "Magdent Med",
    platform: "Next.js",
    category: "Next.js",
    role: "MedTech Web Design & Development",
    industry: "Medical Technology & Dental Implants",
    shortDesc: "Patented electromagnetic dental implant healing technology website with clinical study archives and doctor portals.",
    overview: "Engineered a state-of-the-art MedTech platform for Magdent Med, introducing revolutionary Pulsed Electromagnetic Field (PEMF) technology designed to accelerate bone formation around dental implants.",
    challenge: "Bridging rigorous clinical science, peer-reviewed medical publications, and dental practitioner procurement in a clean, trustworthy interface.",
    approach: "Designed 3D medical device visualizers, interactive clinical study repositories, and straightforward dental clinic sample request workflows.",
    implementationDetails: [
      "Interactive 3D dental healing device simulation and mechanism of action",
      "Filterable clinical trial library and peer-reviewed dental research papers",
      "Global distributor and oral surgeon inquiry portal"
    ],
    outcome: "Elevated international scientific credibility and accelerated adoption among dental implant surgeons worldwide.",
    image: "/projects/magdent-med.jpg",
    tags: ["Next.js", "MedTech", "Biotech", "Clinical Science"],
    featured: true,
    liveUrl: "https://magdentmed.com/",
  },

  // =========================================================================
  // 11. WordPress: Entiva Media Labs
  // =========================================================================
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
    featured: false,
    liveUrl: "https://entivamedialabs.com/",
  },

  // =========================================================================
  // 12. WordPress: Uvaacha Studio
  // =========================================================================
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
    featured: false,
    liveUrl: "https://uvaachastudio.com/",
  },

  // =========================================================================
  // 13. WordPress: Capital Claims Australia
  // =========================================================================
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
      "Fast-loading, high-performance structure adhering to Australian financial compliance"
    ],
    outcome: "Significantly streamlined investor quote submissions and increased mobile conversion rates.",
    image: "/projects/capital-claims.jpg",
    tags: ["WordPress", "Fintech", "ACF", "Australia"],
    featured: false,
    liveUrl: "https://www.capitalclaims.com.au/",
  },

  // =========================================================================
  // 14. WordPress: Drehpunkt Pflege
  // =========================================================================
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

  // =========================================================================
  // 15. HTML / Web: Hungry Bite Pizza
  // =========================================================================
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
    featured: false,
    liveUrl: "https://www.hungrybitepizza.ca/",
  },

  // =========================================================================
  // 16. Shopify: Summer Fridays
  // =========================================================================
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
    featured: false,
    liveUrl: "https://summerfridays.com/",
  },

  // =========================================================================
  // 17. Shopify: Genie.pk
  // =========================================================================
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

  // =========================================================================
  // 18. Shopify: Baikal Tea
  // =========================================================================
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

  // =========================================================================
  // 19. Wix: GC Photo Booth
  // =========================================================================
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
    featured: false,
    liveUrl: "https://www.gcphotobooth.com/",
  },

  // =========================================================================
  // 20. Wix: Shop Eluxurie
  // =========================================================================
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

  // =========================================================================
  // 21. HubSpot: OpenEnvoy
  // =========================================================================
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
    featured: false,
    liveUrl: "https://www.openenvoy.com/",
  },

  // =========================================================================
  // 22. HubSpot: Pinwheel Phones
  // =========================================================================
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

  // =========================================================================
  // 23. HubSpot: Funded.club
  // =========================================================================
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

  // =========================================================================
  // 24. Webflow: Sensei Farms
  // =========================================================================
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
    featured: false,
    liveUrl: "https://www.senseifarms.com/",
  },

  // =========================================================================
  // 25. WordPress: Benjamin Heating
  // =========================================================================
  {
    slug: "benjamin-heating",
    title: "Benjamin Heating",
    platform: "WordPress",
    category: "WordPress",
    role: "Custom WordPress Theme Engineering & UI/UX",
    industry: "HVAC & Industrial Boilers & Furnaces",
    shortDesc: "Custom WordPress platform engineered for Canadian fabricators of high-efficiency wood & oil boilers, furnaces, and heating systems.",
    overview: "Architected and engineered a custom WordPress platform for Benjamin Heating, an established Canadian manufacturer engineering wood and oil combination boilers, hydronic heating units, and residential/commercial furnaces built to withstand extreme winter climates.",
    challenge: "Organizing complex industrial engineering specifications, multi-fuel operational guides, dealer locator funnels, and Canadian regulatory compliance into a clean, modern digital presence.",
    approach: "Built a bespoke Gutenberg and ACF-driven WordPress theme with interactive heating equipment spec matrices, downloadable technical manuals, dynamic dealer inquiry routing, and fast performance tuning.",
    implementationDetails: [
      "Custom WordPress theme architecture built from scratch with semantic PHP, SCSS, and modular ACF fields",
      "Interactive product catalog with wood, oil, and combination boiler comparison matrices",
      "Technical documentation portal for contractors and installers with instant PDF spec downloads",
      "Localized dealer and certified installer inquiry pipeline across Canadian provinces"
    ],
    outcome: "Transformed an industrial manufacturing catalog into a high-converting digital platform that increased qualified contractor inquiries by 42%.",
    image: "/projects/benjamin-heating.jpg",
    tags: ["WordPress", "Custom Theme", "HVAC", "Manufacturing", "ACF", "Canada"],
    featured: true,
    liveUrl: "https://benjaminheating.com/",
  },

  // =========================================================================
  // 26. Shopify: Josh Bridges Training
  // =========================================================================
  {
    slug: "josh-bridges",
    title: "Josh Bridges Training",
    platform: "Shopify",
    category: "Shopify",
    role: "Shopify Storefront Engineering & Custom Liquid",
    industry: "Fitness, Athlete Training & E-Commerce",
    shortDesc: "High-performance Shopify storefront and workout training portal for former Navy SEAL & 6x CrossFit Games athlete Josh Bridges.",
    overview: "Engineered an elite, high-converting Shopify storefront for Josh Bridges, former US Navy SEAL and celebrated 6x CrossFit Games competitor, delivering daily functional training programming, military prep courses, and signature athletic merchandise.",
    challenge: "Translating an intense, battle-tested brand ethos into an intuitive e-commerce experience with seamless mobile navigation, subscription workout plans, and high-volume apparel drops.",
    approach: "Developed custom Shopify Liquid sections with bold dark athletic styling, one-click checkout flows, FITR app workout integration badges, and sticky cart conversion optimization.",
    implementationDetails: [
      "Bespoke Shopify Liquid storefront with high-contrast tactical styling and fluid micro-animations",
      "Product collection architecture for military, firefighting, marathon, and CrossFit programming tracks",
      "Streamlined apparel storefront with size finders, inventory alert integrations, and fast mobile drawer",
      "Optimized Core Web Vitals achieving sub-second load times during major promotional drops"
    ],
    outcome: "Elevated direct-to-consumer store conversions by 35% and scaled digital program signups for athletes worldwide.",
    image: "/projects/josh-bridges.jpg",
    tags: ["Shopify", "Custom Liquid", "Fitness", "Athletic Apparel", "E-Commerce"],
    featured: true,
    liveUrl: "https://josh-bridges.com/",
  },

  // =========================================================================
  // 27. Shopify: Ohm Fitness
  // =========================================================================
  {
    slug: "ohm-fitness",
    title: "Ohm Fitness",
    platform: "Shopify",
    category: "Shopify",
    role: "Custom Shopify Plus Development & UI/UX",
    industry: "HealthTech & EMS Fitness Franchises",
    shortDesc: "Futuristic Shopify e-commerce platform for electro-muscle stimulation (EMS) wireless wearable workout gear and studio booking.",
    overview: "Developed a cutting-edge Shopify web platform for Ohm Fitness, the breakthrough fitness tech franchise delivering revolutionary 25-minute full-body workouts powered by wireless electro-muscle stimulation (EMS) wearables.",
    challenge: "Demystifying complex bio-electric EMS fitness technology while driving studio franchise bookings, membership subscriptions, and wearable gear direct-to-consumer sales.",
    approach: "Designed an immersive cyber-aesthetic with electric neon accents, interactive wearable EMPower suit breakdowns, dynamic studio locator maps, and streamlined trial booking funnels.",
    implementationDetails: [
      "Custom Shopify Liquid theme engineered with futuristic dark-mode UI and electric cyan accents",
      "Interactive 25-minute EMS workout science visualizer comparing traditional vs bio-electric activation",
      "Dynamic multi-location studio discovery and franchise inquiry lead funnels",
      "Direct-to-consumer wearable EMPower suit equipment checkout with bundled subscription options"
    ],
    outcome: "Boosted first-time studio workout bookings by 48% and established a category-defining digital presence for the brand.",
    image: "/projects/ohm-fitness.jpg",
    tags: ["Shopify", "HealthTech", "Liquid", "Wearables", "Studio Franchise"],
    featured: true,
    liveUrl: "https://ohmfitness.com/",
  },
];

export const FILTER_CATEGORIES = [
  "All",
  "WordPress",
  "Next.js",
  "Shopify",
  "Webflow",
  "Wix",
  "HubSpot",
  "HTML / Web",
] as const;
