export interface ServiceCapability {
  title: string;
  description: string;
  points: string[];
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  slug: string;
  category: "web-dev" | "ecommerce" | "strategy-growth";
  categoryLabel: string;
  title: string;
  tagline: string;
  shortDesc: string;
  heroDesc: string;
  brandName: string;
  brandColor: string;
  iconBg: string;
  iconBorder: string;
  deliveryTime: string;
  pricingEstimate: string;
  deliverables: string[];
  capabilities: ServiceCapability[];
  techStack: string[];
  matchingPlatforms: string[]; // matches platform in projects.ts
  faqs: ServiceFAQ[];
}

export const ALL_SERVICES_CATALOG: ServiceDetail[] = [
  // =========================================================================
  // 1. Custom WordPress Development
  // =========================================================================
  {
    id: "wordpress",
    slug: "wordpress",
    category: "web-dev",
    categoryLabel: "Web Development & CMS",
    title: "Custom WordPress Development",
    tagline: "High-Performance, Scalable & Bespoke WordPress Platforms",
    shortDesc: "Build powerful, fast, and easy-to-manage WordPress and custom CMS platforms.",
    heroDesc: "Turn your design vision into an ultra-fast, secure, and editor-friendly WordPress website. Whether using custom block architecture (Gutenberg), Elementor Pro, or pure bespoke PHP templates with Advanced Custom Fields (ACF), every site is hand-coded for speed, security, and effortless daily updates.",
    brandName: "WordPress",
    brandColor: "#21759B",
    iconBg: "bg-[#21759B]/10 hover:bg-[#21759B]/20",
    iconBorder: "border-[#21759B]/30 hover:border-[#21759B]/60",
    deliveryTime: "3 to 10 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Custom theme development & Elementor/Gutenberg",
      "Plugin integration & bespoke functionality",
      "Core Web Vitals & speed performance tuning",
      "Advanced Custom Fields (ACF) client editing suite",
    ],
    capabilities: [
      {
        title: "Bespoke Theme & Block Architecture",
        description: "Zero bloated third-party theme junk. Clean, lightweight templates engineered specifically around your brand and content structure.",
        points: ["Custom Gutenberg block development", "Lightweight PHP/CSS architecture", "Dynamic custom post types & ACF taxonomy"],
      },
      {
        title: "Elementor Pro & Page Builder Mastery",
        description: "Pixel-perfect visual design builds with optimized asset loading, custom CSS enhancements, and responsive breakpoints.",
        points: ["Clean element hierarchy", "No unnecessary plugin bloat", "Global design tokens & typography styling"],
      },
      {
        title: "Core Web Vitals & 90+ PageSpeed",
        description: "Enterprise speed tuning that passes Google Core Web Vitals with green scores, improving search rank and visitor retention.",
        points: ["Server-level caching & Redis setup", "Asset minification & lazy loading", "WebP image conversion & critical CSS"],
      },
      {
        title: "Bulletproof Security & Hardening",
        description: "Proactive security architecture protecting your site, database, and customer data against vulnerabilities and brute-force bots.",
        points: ["Two-factor authentication & login shielding", "Custom database prefixing & file locks", "Automated off-site cloud backups"],
      },
      {
        title: "Seamless Third-Party API Integration",
        description: "Connect your WordPress platform with CRMs, payment gateways, marketing tools, and internal automation workflows.",
        points: ["HubSpot, Mailchimp & Klaviyo sync", "Stripe, PayPal & Razorpay gateways", "Zapier & Webhook event triggers"],
      },
      {
        title: "Easy Client Handoff & Documentation",
        description: "Manage your site without writing a single line of code. You get full visual controls and a personalized handover walkthrough.",
        points: ["Intuitive admin dashboard customization", "Recorded video tutorial training", "30 days complimentary post-launch support"],
      },
    ],
    techStack: ["WordPress", "PHP 8.2", "Gutenberg", "Elementor Pro", "ACF Pro", "MySQL", "Tailwind CSS", "Redis"],
    matchingPlatforms: ["WordPress"],
    faqs: [
      {
        question: "Can my team edit text, images, and pages easily without calling a developer?",
        answer: "Yes, 100%. I architect every WordPress site with native Gutenberg blocks or Advanced Custom Fields so you can update copy, swap photos, or create new landing pages with intuitive visual controls.",
      },
      {
        question: "Will my custom WordPress website load fast and pass Google Core Web Vitals?",
        answer: "Absolutely. I follow strict performance guidelines: minified CSS/JS, asynchronous script loading, modern WebP image compression, and database query optimization to ensure 90+ PageSpeed scores.",
      },
      {
        question: "Do you build custom plugins or modify existing plugins?",
        answer: "Both. Whenever a standard plugin satisfies 90% of your requirement, I extend it cleanly using WordPress hooks and filters. If your workflow requires unique functionality, I engineer a bespoke lightweight plugin.",
      },
      {
        question: "Can you redesign or migrate my existing WordPress website without losing search rankings?",
        answer: "Yes. I implement full URL mapping, 301 redirect architecture, metadata preservation, and XML sitemap synchronization so your existing Google keyword rankings and organic traffic remain intact.",
      },
    ],
  },

  // =========================================================================
  // 2. E-Commerce & Shopify
  // =========================================================================
  {
    id: "shopify",
    slug: "shopify",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    title: "Shopify Store Development & CRO",
    tagline: "High-Converting, Brand-Tailored Shopify & Shopify Plus Solutions",
    shortDesc: "End-to-end e-commerce store architecture and scalable conversion solutions.",
    heroDesc: "Build or scale an e-commerce storefront that captures attention and maximizes checkout conversions. From custom Liquid theme modifications to frictionless checkout flows, app integrations, and conversion rate optimization (CRO), I build Shopify stores engineered for high return on ad spend (ROAS).",
    brandName: "Shopify",
    brandColor: "#95BF47",
    iconBg: "bg-[#95BF47]/10 hover:bg-[#95BF47]/20",
    iconBorder: "border-[#95BF47]/30 hover:border-[#95BF47]/60",
    deliveryTime: "5 to 14 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Custom Shopify & Liquid theme development",
      "Seamless payment gateway & multi-currency setup",
      "Custom checkout funnels & conversion rate optimization",
      "Klaviyo, inventory & private app integrations",
    ],
    capabilities: [
      {
        title: "Custom Shopify 2.0 Theme Architecture",
        description: "Bespoke Liquid section development giving your marketing team dynamic drag-and-drop control over every single page template.",
        points: ["Shopify Online Store 2.0 sections", "Modular reusable blocks", "Mobile-first checkout UX"],
      },
      {
        title: "Conversion Rate Optimization (CRO)",
        description: "Proven UX architecture that eliminates cart friction, enhances trust badges, and lifts average order value (AOV).",
        points: ["Sticky add-to-cart & slide-out carts", "Product bundle & upsell mechanics", "One-click express checkout pathways"],
      },
      {
        title: "Speed Tuning & Asset Optimization",
        description: "Minimizing external script drag and optimizing Shopify asset pipelines for rapid mobile loading under 1.5 seconds.",
        points: ["App script consolidation & cleanup", "Responsive WebP/AVIF image delivery", "Instant page prefetching techniques"],
      },
      {
        title: "Multi-Currency & Global Localization",
        description: "Expand your global footprint with automated geo-location, international currencies, tax calculation, and localized checkout.",
        points: ["Shopify Markets configuration", "Multi-language translation ready", "Local payment methods (Apple Pay, Klarna)"],
      },
      {
        title: "Custom Shopify Apps & API Webhooks",
        description: "Custom backend automations, ERP data sync, private warehouse endpoints, and tailored subscription models.",
        points: ["Recharge & Bold Subscriptions setup", "Klaviyo e-commerce flow syncing", "Custom Storefront API queries"],
      },
      {
        title: "Platform Migration to Shopify",
        description: "Zero-stress migration of your catalog, customer history, order records, and search rankings from WooCommerce or Magento.",
        points: ["Complete product & SKU data transfer", "301 URL redirect rule mapping", "Preserved organic search equity"],
      },
    ],
    techStack: ["Shopify 2.0", "Liquid", "Shopify CLI", "Tailwind CSS", "JavaScript", "Klaviyo", "GraphQL Storefront API"],
    matchingPlatforms: ["Shopify"],
    faqs: [
      {
        question: "Can you customize a pre-purchased Shopify theme or do you build custom Liquid themes?",
        answer: "I do both. I can heavily customize your existing Shopify theme (Dawn, Prestige, Impulse) with bespoke sections, or build a 100% custom Liquid theme tailored precisely to your brand guidelines.",
      },
      {
        question: "How do you help increase our store's Average Order Value (AOV)?",
        answer: "By implementing high-converting upsell drawers, product bundles, cross-sell recommendation engines, free shipping progress bars, and high-trust social proof widgets directly in the purchase funnel.",
      },
      {
        question: "Will my store be optimized for mobile phone shoppers?",
        answer: "Yes. Over 75% of e-commerce traffic is mobile. Every button, sticky cart bar, product image slider, and checkout input is engineered with thumb-friendly ergonomics.",
      },
    ],
  },

  // =========================================================================
  // 3. WooCommerce Development
  // =========================================================================
  {
    id: "woocommerce",
    slug: "woocommerce",
    category: "ecommerce",
    categoryLabel: "E-Commerce",
    title: "WooCommerce Custom Stores & Checkout",
    tagline: "Total Ownership, Scalable Architecture & Friction-Free Checkout",
    shortDesc: "Scalable B2B and B2C WooCommerce stores with zero monthly platform fees.",
    heroDesc: "Unlock 100% ownership of your store and customer data without being trapped by monthly platform taxes. I build custom WooCommerce solutions with high-speed caching, customized checkout steps, and seamless payment integrations.",
    brandName: "WooCommerce",
    brandColor: "#7F54B3",
    iconBg: "bg-[#7F54B3]/10 hover:bg-[#7F54B3]/20",
    iconBorder: "border-[#7F54B3]/30 hover:border-[#7F54B3]/60",
    deliveryTime: "5 to 12 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Custom WooCommerce templates & product catalogs",
      "Single-page streamlined checkout & express pay",
      "Wholesale / B2B custom pricing & tiered discounts",
      "Subscriptions, booking & automated shipping APIs",
    ],
    capabilities: [
      {
        title: "Optimized Single-Page Checkout",
        description: "Replace the standard clunky WooCommerce checkout with an ultra-clean, 1-step checkout that reduces cart abandonment.",
        points: ["Stripe Elements & Apple Pay / Google Pay", "Auto-address lookup & validation", "Frictionless guest checkout flow"],
      },
      {
        title: "B2B Wholesale & Custom Pricing Logic",
        description: "Tailored customer role pricing, minimum order quantities, tax exemptions, and custom quote request forms.",
        points: ["Tiered volume discounting", "Private client portals & pricing", "Invoice & net-30 payment terms"],
      },
      {
        title: "Database Scaling & High-Traffic Caching",
        description: "Ensure your store doesn't crash during flash sales or heavy seasonal ad traffic.",
        points: ["Object caching via Redis", "Database table indexing for fast search", "Decoupled admin & cart sessions"],
      },
      {
        title: "Recurring Subscriptions & Memberships",
        description: "Build predictable recurring revenue with automated subscription billing, recurring orders, and member content gating.",
        points: ["WooCommerce Subscriptions setup", "Customer self-service portal", "Automated dunning & failed payment retry"],
      },
      {
        title: "Inventory & ERP Multi-Channel Sync",
        description: "Keep your warehouse, inventory, and accounting software in real-time sync with automatic webhook dispatching.",
        points: ["ShipStation & DHL/FedEx shipping APIs", "QuickBooks & Xero auto-invoicing", "Multi-warehouse stock allocation"],
      },
      {
        title: "Custom Product Builders & Calculators",
        description: "Interactive visual configurators for custom apparel, engraving, measurement calculation, and bundle builders.",
        points: ["Live price calculator based on inputs", "Dynamic preview canvas rendering", "Custom order metadata logging"],
      },
    ],
    techStack: ["WordPress", "WooCommerce", "PHP 8.2", "Stripe API", "Redis", "MySQL", "Tailwind CSS"],
    matchingPlatforms: ["WordPress"],
    faqs: [
      {
        question: "Why choose WooCommerce over Shopify?",
        answer: "WooCommerce gives you 100% ownership with zero transaction cut taken by the platform, infinite customizability, open-source database access, and the ability to integrate any custom backend workflow you desire.",
      },
      {
        question: "Can WooCommerce handle thousands of products and high traffic?",
        answer: "Yes, when architected properly with Redis object caching, high-performance database indexing, and an optimized server environment (LiteSpeed or Nginx), WooCommerce easily handles high order volumes.",
      },
    ],
  },

  // =========================================================================
  // 4. Webflow Design & Development
  // =========================================================================
  {
    id: "webflow",
    slug: "webflow",
    category: "web-dev",
    categoryLabel: "Web Development & CMS",
    title: "Webflow Design & Development",
    tagline: "Pixel-Perfect, Dynamic Animations & Enterprise Visual CMS",
    shortDesc: "Tailored Webflow sites featuring fluid micro-interactions and scalable CMS collections.",
    heroDesc: "Experience the ultimate fusion of visual design and enterprise-grade performance. I build bespoke Webflow websites with client-first class architectures, interactive GSAP-level micro-animations, and dynamic CMS collections tailored for marketing teams.",
    brandName: "Webflow",
    brandColor: "#146EF5",
    iconBg: "bg-[#146EF5]/10 hover:bg-[#146EF5]/20",
    iconBorder: "border-[#146EF5]/30 hover:border-[#146EF5]/60",
    deliveryTime: "4 to 10 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Client-First style system & modular class structure",
      "Rich scroll-triggered animations & micro-interactions",
      "Dynamic Webflow CMS collections & filter systems",
      "Custom JavaScript integrations & API webhooks",
    ],
    capabilities: [
      {
        title: "Client-First (Relume / Finsweet) System",
        description: "Clean, consistent naming and scalable CSS architecture that ensures any team member can easily update the site.",
        points: ["Global typography & spacing system", "Reusable component library", "Zero redundant styling overrides"],
      },
      {
        title: "Scroll-Driven & Interactive Micro-Animations",
        description: "Engage users with smooth hover states, parallax movement, custom cursors, and fluid page transitions.",
        points: ["Webflow Interactions 2.0 mastery", "GSAP & Lottie animation embedding", "Hardware-accelerated rendering"],
      },
      {
        title: "Dynamic CMS Architecture",
        description: "Organized CMS collections for blogs, case studies, team members, and job boards with advanced multi-reference logic.",
        points: ["Custom search & faceted filtering (Finsweet CMS)", "Automated category pagination", "Instant CMS template generation"],
      },
      {
        title: "Custom Code & Third-Party Integrations",
        description: "Break past Webflow's default boundaries with custom JavaScript, dynamic calculators, and secure webhooks.",
        points: ["Make.com & Zapier lead ingestion", "HubSpot & Airtable database linking", "Memberstack & Wized web app setup"],
      },
      {
        title: "Clean Semantic Code & High Performance",
        description: "High-performing search-friendly architecture built directly into the Webflow DOM with clean headings and automated schema.",
        points: ["OpenGraph cards & dynamic meta titles", "Fast CDN hosting on AWS / Fastly", "Clean W3C valid semantic HTML5"],
      },
      {
        title: "Figma to Webflow Pixel-Accuracy",
        description: "100% faithful translation of approved Figma files into responsive Webflow code across all desktop and mobile viewports.",
        points: ["Precise typography scaling", "Fluid clamp() sizing", "Zero responsive layout distortion"],
      },
    ],
    techStack: ["Webflow", "Client-First", "Finsweet Attributes", "GSAP", "JavaScript", "Lottie", "HTML5"],
    matchingPlatforms: ["Webflow"],
    faqs: [
      {
        question: "Can I edit and publish blog posts and case studies without touching the design?",
        answer: "Yes! Webflow CMS includes an ultra-intuitive Editor view where you can write articles, upload project photos, and publish changes in real-time without fear of breaking layout styles.",
      },
      {
        question: "Do you build according to the Client-First naming convention?",
        answer: "Yes, I strictly follow Finsweet Client-First standards, ensuring your project remains clean, organized, and easily scalable for your internal design and marketing teams.",
      },
    ],
  },

  // =========================================================================
  // 5. Wix & Wix Studio Development
  // =========================================================================
  {
    id: "wix-studio",
    slug: "wix-studio",
    category: "web-dev",
    categoryLabel: "Web Development & CMS",
    title: "Wix & Wix Studio Development",
    tagline: "Bespoke Responsive Layouts & Velo Full-Stack Logic",
    shortDesc: "Next-generation Wix Studio responsive websites with custom Velo scripting.",
    heroDesc: "Elevate your brand with Wix Studio's state-of-the-art responsive design capabilities. I design and code sophisticated, responsive layouts with custom Velo (JavaScript) business logic, dynamic databases, and automated customer interaction funnels.",
    brandName: "Wix Studio",
    brandColor: "#0F172A",
    iconBg: "bg-white/10 hover:bg-white/20",
    iconBorder: "border-white/25 hover:border-white/50",
    deliveryTime: "3 to 8 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Wix Studio fluid responsive breakpoint architecture",
      "Velo custom JavaScript & backend APIs",
      "Dynamic CMS collections & custom booking systems",
      "Payment gateway & automated client notification flows",
    ],
    capabilities: [
      {
        title: "Fluid Breakpoint Responsive Design",
        description: "No more broken mobile views. Pixel-perfect responsiveness using CSS grid, flexbox, and proportional fluid scaling.",
        points: ["Custom proportional scale styling", "Tailored mobile layout hierarchy", "Fluid typography across screen sizes"],
      },
      {
        title: "Velo Full-Stack Custom Code",
        description: "Bespoke frontend interactions and server-side functions that go far beyond standard visual drag-and-drop elements.",
        points: ["Custom database queries & filtering", "Third-party REST API integration", "Custom event handlers and triggers"],
      },
      {
        title: "Automated Bookings & Portals",
        description: "Streamline client bookings, dynamic appointment calendars, member areas, and automated SMS/email reminders.",
        points: ["Wix Bookings customization", "Custom member dashboards", "Secure customer payment processing"],
      },
      {
        title: "E-Commerce & Digital Downloads",
        description: "Sell physical goods, digital assets, or service packages with seamless cart checkout and coupon management.",
        points: ["Inventory tracking & low stock alerts", "Automated order receipts & invoices", "Multi-payment gateway support"],
      },
      {
        title: "Speed Tuning & Clean Structure",
        description: "Optimized canonical tags, structured data, fast image delivery, and Google Search Console index configuration.",
        points: ["Custom meta tags for dynamic items", "Automated XML sitemap submission", "Clean Core Web Vitals diagnostics"],
      },
      {
        title: "Complete Site Redesign & Upgrades",
        description: "Upgrade your outdated classic Wix site to the modern, lightning-fast Wix Studio engine with zero downtime.",
        points: ["Fresh modern luxury design aesthetics", "Cleaned database collections", "Enhanced mobile user experience"],
      },
    ],
    techStack: ["Wix Studio", "Velo (JavaScript)", "Wix CMS", "Wix Bookings", "Wix Stores", "REST APIs"],
    matchingPlatforms: ["Wix"],
    faqs: [
      {
        question: "What is the difference between classic Wix and Wix Studio?",
        answer: "Wix Studio is built for agencies and modern brands, offering proportional fluid scaling, advanced CSS grid, custom breakpoints, and full-stack Velo coding for total creative and technical freedom.",
      },
      {
        question: "Can we integrate custom APIs and external databases with Wix Studio?",
        answer: "Yes, using Velo by Wix, I can write backend server-side modules that securely fetch data from external APIs and sync records with your external CRM or database.",
      },
    ],
  },

  // =========================================================================
  // 6. HubSpot CMS & Marketing Portals
  // =========================================================================
  {
    id: "hubspot",
    slug: "hubspot",
    category: "web-dev",
    categoryLabel: "Web Development & CMS",
    title: "HubSpot CMS & Marketing Portals",
    tagline: "High-Converting HubL Modules & Automated Inbound Lead Funnels",
    shortDesc: "Engineered HubSpot CMS websites and modular landing pages built for B2B scale.",
    heroDesc: "Transform your HubSpot portal into an inbound revenue engine. I engineer custom HubL modules, high-converting SaaS landing pages, interactive product feature tours, and automated meeting scheduling funnels that sync directly into your HubSpot CRM.",
    brandName: "HubSpot",
    brandColor: "#FF7A59",
    iconBg: "bg-[#FF7A59]/10 hover:bg-[#FF7A59]/20",
    iconBorder: "border-[#FF7A59]/30 hover:border-[#FF7A59]/60",
    deliveryTime: "4 to 10 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Custom HubL modular components & page templates",
      "HubSpot meeting scheduler & smart form integration",
      "Dynamic HubDB databases & interactive filtering",
      "Clean B2B responsive UX tuned for decision-makers",
    ],
    capabilities: [
      {
        title: "Custom HubL Modular Component Architecture",
        description: "Drag-and-drop modules coded in HubL, HTML, and CSS that your marketing team can re-arrange without coding.",
        points: ["Custom fields & repeater fields", "Global header and footer modules", "Brand token style controls"],
      },
      {
        title: "HubDB Dynamic Content Portals",
        description: "Scale resource libraries, partner directories, case study hubs, and customer catalogs using lightweight HubDB tables.",
        points: ["Dynamic category & tag filtering", "Auto-generating detail pages", "Real-time search functionality"],
      },
      {
        title: "High-Converting Demo & Lead Funnels",
        description: "Frictionless form flows capturing company size, role, and industry, directly triggering targeted email workflows.",
        points: ["Smart forms with progressive profiling", "Embedded calendar meeting scheduling", "Automated lifecycle stage routing"],
      },
      {
        title: "Interactive Product Feature Tours",
        description: "Engage B2B buyers with interactive tabs, Kanban board previews, video modal walk-throughs, and feature grids.",
        points: ["Lightweight vanilla JavaScript logic", "Zero external dependency bloat", "Mobile-optimized touch carousels"],
      },
      {
        title: "HubSpot Marketplace Theme Customization",
        description: "Heavily enhance an existing theme with custom CSS, bespoke templates, and polished responsive typography.",
        points: ["CSS overrides & cleanup", "Speed optimization & minification", "Cross-browser testing (Chrome, Safari, Edge)"],
      },
      {
        title: "CRM Lifecycle Tracking & Analytics",
        description: "Set up precision tracking so your sales team knows exactly which pages prospects visited before booking a call.",
        points: ["HubSpot tracking code & UTM mapping", "Event-based goal triggers", "Google Analytics 4 & Tag Manager sync"],
      },
    ],
    techStack: ["HubSpot CMS", "HubL", "HubDB", "HTML5", "CSS3 / Sass", "JavaScript", "HubSpot CRM"],
    matchingPlatforms: ["HubSpot"],
    faqs: [
      {
        question: "Can your modules be edited easily by our marketing team in the HubSpot page editor?",
        answer: "Yes, every custom HubL module I create features clear field definitions, toggle switches, text areas, and image pickers so non-technical team members can edit content seamlessly.",
      },
      {
        question: "How does HubSpot CMS help our B2B sales team close more deals?",
        answer: "By syncing smart form submissions, calendar bookings, and visitor browsing history directly into HubSpot CRM contacts, your sales reps get instant context on every lead's specific interests.",
      },
    ],
  },

  // =========================================================================
  // 7. Full-Stack Next.js & React Web Apps
  // =========================================================================
  {
    id: "fullstack-apps",
    slug: "fullstack-apps",
    category: "web-dev",
    categoryLabel: "Web Development & CMS",
    title: "Full-Stack Next.js & React Web Apps",
    tagline: "Lightning-Fast SSR, Cloud Databases & Modern Enterprise Architecture",
    shortDesc: "End-to-end modern web applications and scalable cloud-hosted business solutions.",
    heroDesc: "Build cutting-edge digital products, customer dashboards, and interactive SaaS web apps. Utilizing Next.js (App Router), React, TypeScript, Tailwind CSS, and cloud databases (Supabase, PostgreSQL, MongoDB), I engineer rock-solid web applications built for speed, scale, and clean maintainability.",
    brandName: "Next.js & React",
    brandColor: "#00D8FF",
    iconBg: "bg-[#00D8FF]/10 hover:bg-[#00D8FF]/20",
    iconBorder: "border-[#00D8FF]/30 hover:border-[#00D8FF]/60",
    deliveryTime: "7 to 20 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Custom Next.js App Router & React full-stack app",
      "RESTful & GraphQL API routes, auth & database sync",
      "Scalable Vercel/Node cloud deployment & SSG/SSR",
      "Responsive luxury UI with smooth state transitions",
    ],
    capabilities: [
      {
        title: "Server-Side Rendering (SSR) & Static Generation",
        description: "Achieve instant sub-second page loads and top performance with hybrid server/client component architecture.",
        points: ["Next.js App Router & React Server Components", "Incremental Static Regeneration (ISR)", "Edge caching & CDN asset delivery"],
      },
      {
        title: "Secure Authentication & User Management",
        description: "Implement modern login pathways with email magic links, OAuth social logins, and role-based access control (RBAC).",
        points: ["NextAuth.js / Supabase Auth integration", "JWT token handling & session security", "Protected admin & user dashboard routes"],
      },
      {
        title: "Relational & Document Database Architecture",
        description: "Clean data modeling, efficient indexing, and type-safe database queries that scale smoothly under heavy load.",
        points: ["PostgreSQL, Supabase & MongoDB", "Prisma ORM & Drizzle ORM typing", "Automated database migrations"],
      },
      {
        title: "API Development & Third-Party Integration",
        description: "Build secure RESTful endpoints and integrate external webhook flows (Stripe billing, OpenAI, Twilio, SendGrid).",
        points: ["Stripe Checkout & subscription webhooks", "AI LLM API integrations (OpenAI / Gemini)", "Automated transactional email triggers"],
      },
      {
        title: "Modern Design System & Component Library",
        description: "Modular, accessible UI components coded in TypeScript and styled with clean Tailwind CSS utilities.",
        points: ["Accessible ARIA keyboard navigation", "Framer Motion layout animations", "Dark mode / Light mode dynamic toggling"],
      },
      {
        title: "CI/CD Deployment & Monitoring",
        description: "Automated git-based deployments to Vercel, AWS, or digital cloud environments with zero-downtime rollouts.",
        points: ["GitHub Actions workflow pipelines", "Environment variable protection", "Error logging via Sentry & Vercel Analytics"],
      },
    ],
    techStack: ["Next.js 14+", "React 18+", "TypeScript", "Tailwind CSS", "Supabase", "Node.js", "Prisma", "Vercel"],
    matchingPlatforms: ["Next.js", "React / Next.js"],
    faqs: [
      {
        question: "Why choose Next.js over traditional WordPress or single-page React apps?",
        answer: "Next.js offers the best of both worlds: extreme client-side reactivity combined with instant server-side rendering for search indexing and lightning-fast page loading.",
      },
      {
        question: "Can you build both the frontend user interface and backend database logic?",
        answer: "Yes, I provide complete end-to-end full-stack engineering: designing the UI, building the React components, writing API endpoints, and setting up the database with secure auth.",
      },
    ],
  },

  // =========================================================================
  // 8. Modern Frontend & Interactive UI
  // =========================================================================
  {
    id: "frontend-development",
    slug: "frontend-development",
    category: "web-dev",
    categoryLabel: "Web Development & CMS",
    title: "Modern Frontend & Interactive UI",
    tagline: "Pixel-Accurate, Micro-Animated & Fluid Responsive Code",
    shortDesc: "Clean, modular HTML5, CSS3, JavaScript and Tailwind frontend development.",
    heroDesc: "Convert complex visual designs into flawless, responsive frontend code that loads instantaneously. Focusing on semantic HTML5, modern Tailwind CSS, smooth micro-interactions, and accessible UI patterns that feel alive on every device.",
    brandName: "Frontend Tech",
    brandColor: "#38BDF8",
    iconBg: "bg-[#38BDF8]/10 hover:bg-[#38BDF8]/20",
    iconBorder: "border-[#38BDF8]/30 hover:border-[#38BDF8]/60",
    deliveryTime: "3 to 7 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Semantic, accessible HTML5 & modern CSS3/Tailwind",
      "Pixel-perfect fidelity to Figma/Adobe XD designs",
      "Smooth hardware-accelerated animations & transitions",
      "Universal cross-browser & mobile device testing",
    ],
    capabilities: [
      {
        title: "Pixel-Perfect Design-to-Code Translation",
        description: "Every margin, line height, color hex, and button radius matched identically to your Figma designs.",
        points: ["Figma inspect accuracy", "Fluid typography clamp() scaling", "Clean semantic structure"],
      },
      {
        title: "Tailwind CSS & Modern Utility Styling",
        description: "Scalable, zero-runtime CSS with modern design tokens, cohesive color palettes, and tiny bundle sizes.",
        points: ["Custom tailwind config tokens", "Extracted reusable UI components", "No bloated unused stylesheets"],
      },
      {
        title: "Interactive Micro-Animations & Motion",
        description: "Subtle hover states, glowing card borders, accordion reveals, and scroll-triggered animations.",
        points: ["Framer Motion & CSS transitions", "Scroll-triggered entrance animations", "Smooth mobile drawer menus"],
      },
      {
        title: "Responsive Mobile-First Architecture",
        description: "Rigorous testing across real mobile phones, tablets, laptops, and ultra-wide desktop monitors.",
        points: ["Touch-optimized click targets (48px+)", "Fluid flexbox and grid layouts", "Zero horizontal scroll bugs"],
      },
      {
        title: "Accessibility (WCAG 2.1) & Semantic Markup",
        description: "Ensure your website is accessible to all users and easily understood by modern browsers and crawlers.",
        points: ["Proper heading hierarchy (H1-H4)", "Descriptive ARIA labels & alt tags", "Keyboard focus trap & navigation"],
      },
      {
        title: "Performance & Sub-Second Loading",
        description: "Aggressive optimization of DOM elements, font loading, and critical rendering path assets.",
        points: ["Self-hosted Google font preloading", "Inline SVG vector rendering", "Zero render-blocking scripts"],
      },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript (ES6+)", "Tailwind CSS", "Framer Motion", "Figma", "Git"],
    matchingPlatforms: ["HTML / Web", "React / Next.js"],
    faqs: [
      {
        question: "Can you convert our Figma or Adobe XD files into clean HTML/Tailwind?",
        answer: "Yes, this is one of my primary specialties. I convert Figma designs into pixel-perfect, clean, modular code that matches your design 1-to-1.",
      },
      {
        question: "Will the code be easy for our internal developers to integrate with backend systems?",
        answer: "Yes. The code is structured logically with semantic tags, modular components, and clear comments, making backend integration smooth and painless.",
      },
    ],
  },

  // =========================================================================
  // 9. UI/UX Design & Figma Prototyping
  // =========================================================================
  {
    id: "ui-ux",
    slug: "ui-ux",
    category: "strategy-growth",
    categoryLabel: "Design, Speed & Growth",
    title: "UI/UX Design & Figma Prototyping",
    tagline: "User-Centered Wireframes, Luxury Obsidian UI & Interactive Prototypes",
    shortDesc: "User-centered design systems and digital interfaces that turn visitors into loyal customers.",
    heroDesc: "Eliminate guesswork and create digital products that users love. Utilizing Figma, I design modern, clean design systems, user journey maps, wireframes, and clickable prototypes that bridge visual luxury with friction-free conversion mechanics.",
    brandName: "Figma",
    brandColor: "#A259FF",
    iconBg: "bg-[#A259FF]/10 hover:bg-[#A259FF]/20",
    iconBorder: "border-[#A259FF]/30 hover:border-[#A259FF]/60",
    deliveryTime: "4 to 12 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Interactive Figma wireframes & prototypes",
      "Modern, luxury clean dark/light design systems",
      "User journey mapping & friction-free checkout flows",
      "Developer-ready design tokens & handoff documentation",
    ],
    capabilities: [
      {
        title: "Interactive Clickable Prototypes",
        description: "Experience your entire website or web app flow before a single line of code is written.",
        points: ["Realistic button click & hover states", "Multi-step onboarding transitions", "Interactive mobile drawer and modal previews"],
      },
      {
        title: "Design Systems & Token Libraries",
        description: "Scalable typography scales, harmonious HSL color palettes, elevation shadows, and reusable component libraries.",
        points: ["Auto-layout 5.0 responsive components", "Variants and interactive state mapping", "Exportable Tailwind CSS tokens"],
      },
      {
        title: "Luxury Dark & Light Mode Aesthetics",
        description: "Modern, sophisticated glassmorphic surfaces, subtle ambient glows, and clean obsidian backgrounds.",
        points: ["High-contrast accessible readability", "Curated visual hierarchy", "Zero generic visual templates"],
      },
      {
        title: "User Journey & Friction-Free UX Mapping",
        description: "Identify and eliminate conversion drop-off points in signup flows, navigation trees, and checkout funnels.",
        points: ["Simplified 3-step checkout funnels", "Clear visual calls-to-action (CTAs)", "Thumb-zone mobile ergonomics"],
      },
      {
        title: "Mobile App & Responsive Web Layouts",
        description: "Dedicated artboards designed specifically for 375px mobile screens, 768px tablets, and 1440px desktop screens.",
        points: ["Mobile-first information hierarchy", "Responsive grid layout systems", "Touch-friendly interface targets"],
      },
      {
        title: "Developer-Ready Handoff",
        description: "As both a designer and developer, my Figma files are structured logically for clean, zero-friction implementation.",
        points: ["Clean layer naming & grouping", "Asset export presets (SVG, WebP)", "CSS inspection properties included"],
      },
    ],
    techStack: ["Figma", "Auto Layout", "Design Tokens", "Wireframing", "Prototyping", "Tailwind CSS"],
    matchingPlatforms: ["Figma", "HTML / Web", "React / Next.js"],
    faqs: [
      {
        question: "Why is it beneficial that you do both UI/UX Design in Figma and coding in Next.js/WordPress?",
        answer: "Because traditional designers often create impractical concepts that are impossible or too expensive to code. I design with full knowledge of technical feasibility, CSS constraints, and performance.",
      },
      {
        question: "Do I get the source Figma file with full ownership?",
        answer: "Yes, upon project completion you receive 100% ownership of the original Figma file with all components, vector assets, and design tokens.",
      },
    ],
  },

  // =========================================================================
  // 15. Speed & Core Web Vitals Optimization
  // =========================================================================
  {
    id: "speed-optimization",
    slug: "speed-optimization",
    category: "strategy-growth",
    categoryLabel: "Design, Speed & Growth",
    title: "Speed & Core Web Vitals (90+ Score)",
    tagline: "Sub-Second Load Times, 90+ PageSpeed Scores & Zero Lag",
    shortDesc: "Aggressive speed engineering, database tuning, and Core Web Vitals compliance.",
    heroDesc: "A slow website kills your sales and tanks your Google rankings. I optimize slow, bloated websites to load in under 1 second, passing Google's Core Web Vitals (LCP, FID/INP, CLS) with flying colors across both mobile and desktop devices.",
    brandName: "PageSpeed",
    brandColor: "#10B981",
    iconBg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    iconBorder: "border-emerald-500/30 hover:border-emerald-500/60",
    deliveryTime: "2 to 5 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "90+ Google PageSpeed mobile & desktop scores",
      "Sub-1-second Largest Contentful Paint (LCP)",
      "Zero Cumulative Layout Shift (CLS < 0.1)",
      "Database cleanup, asset minification & server Redis caching",
    ],
    capabilities: [
      {
        title: "Asset Minification & Script Deferral",
        description: "Eliminate render-blocking CSS and JavaScript by deferring non-critical scripts and inlining critical above-the-fold CSS.",
        points: ["Async & defer attribute tagging", "Tree-shaking unused code", "Minified production bundles"],
      },
      {
        title: "Next-Gen Image & Video Compression",
        description: "Convert heavy JPG/PNG images into modern lightweight WebP and AVIF formats with responsive srcset delivery.",
        points: ["Lossless 70%+ file size reduction", "Native lazy loading implementation", "Explicit width/height tags preventing CLS"],
      },
      {
        title: "Server Caching & Redis Object Acceleration",
        description: "Implement high-speed server-side page caching and Redis object caching so pages serve directly from memory.",
        points: ["Server-level LiteSpeed / Nginx caching", "Redis database query caching", "Bypass caching for cart/checkout pages"],
      },
      {
        title: "Font Optimization & Preloading",
        description: "Stop layout shifting and flash-of-unstyled-text (FOUT) with self-hosted Google Fonts and preconnect tags.",
        points: ["WOFF2 format conversion", "Font-display: swap implementation", "Elimination of external Google font calls"],
      },
      {
        title: "Database Query Optimization & Table Cleanup",
        description: "Clean up bloated wp_options, orphaned post revisions, transient cache records, and unneeded database overhead.",
        points: ["Automatic database optimization cron", "Query monitor bottleneck inspection", "Post revision limits"],
      },
      {
        title: "Cloudflare CDN & Edge Routing",
        description: "Distribute your website assets across 300+ global edge servers so visitors worldwide experience instant loading.",
        points: ["Cloudflare Page Rules & APO setup", "Brotli compression enablement", "DDoS mitigation and bot shielding"],
      },
    ],
    techStack: ["Google PageSpeed Insights", "GTmetrix", "Redis", "Cloudflare", "WebP", "Nginx / LiteSpeed"],
    matchingPlatforms: ["WordPress", "Shopify", "Next.js"],
    faqs: [
      {
        question: "Can you guarantee a 90+ score on Google PageSpeed Insights?",
        answer: "Yes, for virtually all custom sites and clean CMS builds, I achieve 90+ mobile and 95+ desktop PageSpeed scores, resolving all Core Web Vitals warnings.",
      },
      {
        question: "Will speed optimization break any of my current website functionality?",
        answer: "No. I optimize in a staging environment and thoroughly test every form, modal, tracking pixel, and checkout gateway to ensure 100% functionality remains intact.",
      },
    ],
  },

  // =========================================================================
  // 16. Website Migration & Replatforming
  // =========================================================================
  {
    id: "website-migration",
    slug: "website-migration",
    category: "strategy-growth",
    categoryLabel: "Design, Speed & Growth",
    title: "Website Migration & Platform Switching",
    tagline: "Zero Downtime, 100% Ranking Preservation & Clean Data Transfer",
    shortDesc: "Risk-free website migrations between WordPress, Shopify, Webflow, and Next.js.",
    heroDesc: "Switch to a better, faster platform without losing your valuable search visibility, customer accounts, or order history. I execute seamless migrations between CMS platforms (Wix to WordPress, Shopify to Next.js, WordPress to Webflow) with zero downtime and total integrity preservation.",
    brandName: "Migration Cloud",
    brandColor: "#6366F1",
    iconBg: "bg-indigo-500/10 hover:bg-indigo-500/20",
    iconBorder: "border-indigo-500/30 hover:border-indigo-500/60",
    deliveryTime: "4 to 10 Days",
    pricingEstimate: "Custom Project Based",
    deliverables: [
      "Zero-downtime DNS cutover and server deployment",
      "100% 301 redirect mapping preventing 404 errors",
      "Full database, customer & blog post transfer",
      "Metadata, canonical & structure preservation",
    ],
    capabilities: [
      {
        title: "Comprehensive Pre-Migration Crawl",
        description: "Catalogue every existing URL, title tag, H1, meta description, and image asset to ensure nothing gets lost.",
        points: ["Full Screaming Frog site inventory", "Google Analytics top-traffic URL list", "Backlink target URL mapping"],
      },
      {
        title: "Exact 1-to-1 301 Redirect Architecture",
        description: "Map every old URL to its corresponding new destination so search engine crawlers and users experience zero broken links.",
        points: ["Regex pattern-matching rules", "Server-level Nginx/Apache redirects", "Zero redirect chains or loops"],
      },
      {
        title: "Content & Media Library Transfer",
        description: "Migrate hundreds of blog posts, categories, tags, images, and author profiles cleanly into the new CMS.",
        points: ["Image URL rewrites", "Custom field data mapping", "Formatted typography cleanup"],
      },
      {
        title: "Customer & E-Commerce Data Import",
        description: "Safely transfer customer profiles, purchase history, order statuses, and product catalog SKU variants.",
        points: ["Password reset workflows", "Inventory and price validation", "Tax and shipping rate synchronization"],
      },
      {
        title: "Zero-Downtime DNS Cutover",
        description: "Switch your domain nameservers smoothly with pre-configured low TTL records so your business never goes offline.",
        points: ["SSL certificate pre-provisioning", "Low TTL DNS propagation", "Instant fallback backup snapshot"],
      },
      {
        title: "Post-Launch Quality Audit & Search Console Health",
        description: "Immediate live audit to verify indexing, sitemap submissions, and Google Search Console crawl status.",
        points: ["Immediate 404 error log inspection", "New XML sitemap submission", "Traffic monitoring over 30 days"],
      },
    ],
    techStack: ["WordPress", "Shopify", "Webflow", "Next.js", "Screaming Frog", "Cloudflare", "MySQL"],
    matchingPlatforms: ["WordPress", "Shopify", "Webflow", "Wix"],
    faqs: [
      {
        question: "Will our website lose Google keyword rankings during migration?",
        answer: "When executed properly with comprehensive 301 redirects, identical metadata preservation, and schema alignment, rankings are preserved and often increase due to improved speed and mobile usability on the new platform.",
      },
      {
        question: "Will our website experience downtime while the migration takes place?",
        answer: "Zero downtime. We build and test the new website completely on a private staging server. The final DNS switchover takes only minutes while your old site continues running smoothly.",
      },
    ],
  },

  // =========================================================================
  // Website Support & Maintenance
  // =========================================================================
  {
    id: "maintenance",
    slug: "maintenance",
    category: "strategy-growth",
    categoryLabel: "Design, Speed & Growth",
    title: "Support, Maintenance & 24/7 Security",
    tagline: "24/7 Uptime Monitoring, Emergency Fixes & Proactive Updates",
    shortDesc: "Get found, get traffic, and ensure your website runs 24/7 without downtime.",
    heroDesc: "Never worry about website crashes, plugin update errors, or security vulnerabilities again. My monthly support and maintenance package includes 24/7 uptime monitoring, weekly CMS/theme updates on staging, automated cloud backups, speed tuning, and dedicated priority emergency response.",
    brandName: "Cyber Shield",
    brandColor: "#10B981",
    iconBg: "bg-emerald-500/10 hover:bg-emerald-500/20",
    iconBorder: "border-emerald-500/30 hover:border-emerald-500/60",
    deliveryTime: "Ongoing Monthly Care",
    pricingEstimate: "Monthly Retainer Available",
    deliverables: [
      "24/7 technical assistance, uptime & security monitoring",
      "Regular CMS, theme, database & plugin updates",
      "Continuous speed audits & ongoing performance tuning",
      "Automated daily off-site cloud backups",
    ],
    capabilities: [
      {
        title: "24/7 Real-Time Uptime Monitoring",
        description: "Continuous pinging of your server every 60 seconds with instant SMS/email alerts and immediate triage if downtime occurs.",
        points: ["60-second ping interval checks", "Global check locations", "Immediate emergency incident response"],
      },
      {
        title: "Safe Staging Plugin & Core Updates",
        description: "Never break your live site with a bad plugin update. All updates are tested on staging before deployment to production.",
        points: ["Weekly CMS, theme, and plugin updates", "Visual regression testing before push", "Zero live website disruption"],
      },
      {
        title: "Automated Daily Off-Site Cloud Backups",
        description: "Your entire website and database backed up daily to encrypted Amazon S3 or Google Cloud storage.",
        points: ["30-day snapshot retention history", "One-click instant site restoration", "Database and file integrity validation"],
      },
      {
        title: "Malware Scanning & Security Hardening",
        description: "Daily automated file integrity scans, firewall rule enforcement, and brute-force bot IP blocking.",
        points: ["Web Application Firewall (WAF) setup", "Malware cleanup guarantee", "Two-factor admin login shielding"],
      },
      {
        title: "Dedicated Monthly Developer Hours",
        description: "Use your included monthly hours for new feature additions, banner updates, layout tweaks, or speed tune-ups.",
        points: ["Priority turnaround within 24 hours", "Roll-over unused time options", "Direct Slack / WhatsApp developer channel"],
      },
      {
        title: "Monthly Performance & Health Reports",
        description: "Executive PDF summary outlining uptime percentage, security threats blocked, updates completed, and PageSpeed metrics.",
        points: ["Transparent work log audit", "Speed benchmark comparisons", "Proactive recommendations for growth"],
      },
    ],
    techStack: ["UptimeRobot", "Cloudflare WAF", "Amazon S3", "WP CLI", "Git", "Security Shield"],
    matchingPlatforms: ["WordPress", "Shopify", "Next.js", "Webflow"],
    faqs: [
      {
        question: "What happens if our website experiences an issue or crashes over the weekend?",
        answer: "My 24/7 automated monitoring alerts me instantly. Under the maintenance retainer, emergency downtime issues are triaged and resolved with top priority regardless of the day.",
      },
      {
        question: "Can I use my monthly maintenance hours for adding new pages or features?",
        answer: "Yes, absolutely! Your monthly allocated developer hours can be used for new section layouts, blog posting, banner swaps, or speed enhancements.",
      },
    ],
  },
];

export const SERVICE_CATEGORIES = [
  { id: "all", label: "All Services" },
  { id: "web-dev", label: "Web Development & CMS" },
  { id: "ecommerce", label: "E-Commerce" },
  { id: "strategy-growth", label: "Design, Speed & Growth" },
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return ALL_SERVICES_CATALOG.find((s) => s.slug.toLowerCase() === slug.toLowerCase() || s.id.toLowerCase() === slug.toLowerCase());
}
