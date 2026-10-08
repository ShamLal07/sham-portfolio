export interface Project {
  slug: string;
  title: string;
  platform: "WordPress" | "Shopify" | "React / Next.js" | "Wix" | "Webflow" | "HubSpot" | "Other" | "Figma";
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
  featured?: boolean;
  liveUrl?: string;
}

export const FEATURED_PROJECTS_SLUGS = [
  "iron-shield-roofing",
  "summer-fridays",
  "itsbot-ai",
  "shope-luxurie",
  "sensei-farms",
  "open-envoy",
];

export const PROJECTS: Project[] = [
  // 1. Featured WordPress
  {
    slug: "iron-shield-roofing",
    title: "Iron Shield Roofing",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Roofing & Construction",
    shortDesc: "Professional roofing website with service pages, custom design and responsive layout.",
    overview: "Designed and developed a robust, conversion-focused commercial and residential roofing website. The client required a professional brand presence to highlight service areas, materials, emergency repairs, and seamless quote requests.",
    challenge: "Organizing extensive roofing services (commercial, residential, inspections, maintenance) into an approachable structure while keeping quote calls-to-action prominent on every device.",
    approach: "Created a modern architectural visual direction with high-contrast sections, structured service card grids, and streamlined contact touchpoints across all pages.",
    implementationDetails: [
      "Crafted custom modular page templates in WordPress with reusable blocks",
      "Built clean service detail pages with localized inquiry triggers",
      "Optimized layout responsiveness for on-site mobile visitors and desktop estimators",
      "Integrated fast-loading contact forms with email notifications"
    ],
    outcome: "Delivered a clean, authoritative website that establishes trust and makes it effortless for property owners to request consultations.",
    image: "/projects/iron-shield.jpg",
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },

  // 2. Featured Shopify
  {
    slug: "summer-fridays",
    title: "Summer Fridays",
    platform: "Shopify",
    category: "Shopify",
    role: "Frontend / Storefront",
    industry: "Skincare & Beauty E-commerce",
    shortDesc: "E-commerce storefront with clean design and smooth user experience.",
    overview: "Implemented a refined, minimalist beauty e-commerce storefront tailored for a modern skincare line. Focused on presenting products with editorial warmth and an intuitive buying journey.",
    challenge: "Ensuring high-resolution product photography and promotional sections rendered smoothly on mobile browsers without lagging or layout shifts.",
    approach: "Customized Shopify Liquid templates and modern CSS to construct clean product grids, collection filters, and a friction-free slide-out bag.",
    implementationDetails: [
      "Custom Shopify Liquid section development for reusable promotional banners",
      "Responsive product detail pages with variant selectors and ingredient tabs",
      "Touch-friendly mobile navigation and sticky add-to-bag controls",
      "Optimized asset loading with responsive image srcsets and clean typography"
    ],
    outcome: "A polished, responsive storefront that highlights product benefits and provides a frictionless customer experience.",
    image: "/projects/summer-fridays.jpg",
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },

  // 3. Featured React / Next.js
  {
    slug: "itsbot-ai",
    title: "ItsBot.ai",
    platform: "React / Next.js",
    category: "React / Next.js",
    role: "Frontend Development",
    industry: "AI & Developer Tools",
    shortDesc: "Modern platform with clean UI and responsive frontend.",
    overview: "Built the frontend interface for an artificial intelligence developer platform, incorporating interactive agent demos, code snippets, and API documentation overviews.",
    challenge: "Creating an engaging tech interface that balances technical clarity for developers with accessibility for product managers.",
    approach: "Developed reusable React components with Tailwind CSS, emphasizing crisp dark surfaces, accessible typography, and interactive snippet blocks.",
    implementationDetails: [
      "Constructed modular React component library with responsive layouts",
      "Interactive code preview and message simulation components",
      "Clean feature grid showcase highlighting agent capabilities and SDKs",
      "Smooth micro-interactions and transitions for improved user engagement"
    ],
    outcome: "A high-precision developer-focused frontend that showcases modern AI tooling in an organized, intuitive layout.",
    image: "/projects/itsbot-ai.jpg",
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },

  // 4. Featured Wix
  {
    slug: "shope-luxurie",
    title: "Shope Luxurie",
    platform: "Wix",
    category: "Wix",
    role: "Design + Development",
    industry: "Luxury Fashion & Accessories",
    shortDesc: "Stylish e-commerce website built on Wix with custom design and layout.",
    overview: "Designed and configured a high-fashion boutique storefront on Wix Studio, creating an editorial layout that feels closer to an independent lookbook than a template store.",
    challenge: "Achieving a bespoke, high-end agency look using Wix while maintaining easy catalog management for the store owner.",
    approach: "Designed bespoke typographic scales, generous white space, and structured editorial banners, then configured Wix e-commerce capabilities to match.",
    implementationDetails: [
      "Custom responsive layout tailored across desktop, tablet, and smartphone screens",
      "Curated product catalog grids, lookbooks, and collection categories",
      "Streamlined checkout flow and mobile-optimized navigation menu",
      "Clean typography and subtle border accents reflecting luxury branding"
    ],
    outcome: "An elegant, easily manageable online boutique that elevates brand perception and simplifies customer purchasing.",
    image: "/projects/shope-luxurie.jpg",
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },

  // 5. Featured Webflow
  {
    slug: "sensei-farms",
    title: "Sensei Farms",
    platform: "Webflow",
    category: "Webflow",
    role: "Design + Development",
    industry: "Agriculture & Sustainable Food",
    shortDesc: "Modern website with clean visuals and smooth animations.",
    overview: "Crafted a vibrant, story-driven digital presence for a sustainable farm operation. The site highlights hydroponic produce, environmental values, and retail availability.",
    challenge: "Translating sustainable farming narratives and fresh produce photography into an engaging, lightweight Webflow experience.",
    approach: "Structured clean editorial layouts with earthy tones, organic visual accents, and subtle scroll-triggered interactions.",
    implementationDetails: [
      "Built responsive Webflow pages with clean CMS structure for seasonal produce",
      "Designed interactive story sections illustrating sustainable farming methods",
      "Implemented smooth micro-animations on cards and hover states",
      "Rigorous mobile testing ensuring flawless touch experience on all devices"
    ],
    outcome: "An inspiring, organic brand experience that clearly tells the sustainability story and drives wholesale and retail inquiries.",
    image: "/projects/sensei-farms.jpg",
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },

  // 6. Featured HubSpot
  {
    slug: "open-envoy",
    title: "OpenEnvoy",
    platform: "HubSpot",
    category: "HubSpot",
    role: "CMS Development",
    industry: "Enterprise SaaS & Fintech",
    shortDesc: "Business website built on HubSpot CMS with dynamic pages.",
    overview: "Engineered responsive landing pages and dynamic modules on HubSpot CMS for an enterprise accounts payable automation platform.",
    challenge: "Creating flexible, marketing-friendly page templates that non-technical marketing teams can update rapidly while adhering strictly to design guidelines.",
    approach: "Developed custom HubL modules with editable fields, clean styling controls, and responsive grid layouts.",
    implementationDetails: [
      "Built reusable HubSpot CMS modules for feature comparisons, metrics, and pricing cards",
      "Integrated HubSpot form modules with custom CSS for pixel-accurate styling",
      "Maintained fast Core Web Vitals through lightweight markup and asset optimization",
      "Ensured full cross-browser compatibility across corporate IT environments"
    ],
    outcome: "A flexible, high-converting CMS setup enabling the marketing team to deploy new campaigns and landing pages without developer intervention.",
    image: "/projects/openenvoy.jpg",
    featured: true,
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },

  // Additional WordPress Projects
  {
    slug: "established-canadian",
    title: "Established Canadian",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Immigration & Legal Advisory",
    shortDesc: "Immigration and visa consulting website with structured pathways and service booking.",
    overview: "Built an authoritative legal consulting platform guiding individuals and families through immigration pathways to Canada.",
    challenge: "Presenting complex regulatory immigration criteria in a clear, trustworthy layout with straightforward consultation booking.",
    approach: "Designed structured service cards, informative FAQ panels, and prominent inquiry forms backed by WordPress CMS.",
    implementationDetails: [
      "Custom WordPress layout with distinct category templates for visas and permits",
      "Client assessment questionnaire and contact forms integration",
      "Clear typography and trust indicators tailored for international applicants",
      "Mobile-optimized consultation appointment triggers"
    ],
    outcome: "Delivered a reassuring, user-friendly platform that simplified consultation requests for international clients.",
    image: "/projects/established-canadian.jpg",
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },
  {
    slug: "asian-pilot",
    title: "Asian Pilot",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Aviation & Career Training",
    shortDesc: "Aviation training and cadet pilot program information portal.",
    overview: "Designed and developed an aviation career portal outlining pilot training programs, commercial requirements, and cadet selection steps.",
    challenge: "Consolidating extensive syllabus and licensing requirements into an engaging visual layout.",
    approach: "Implemented modern hero sections, interactive training roadmaps, and clear application guidelines on WordPress.",
    implementationDetails: [
      "Custom page layouts highlighting cadet training pipelines and fleet specs",
      "Integrated inquiry triggers for aspiring aviators",
      "Responsive design tested across tablet and mobile viewports"
    ],
    outcome: "A clear, professional web presence facilitating candidate admissions and inquiries.",
    image: "/projects/creative-agency.jpg"
  },
  {
    slug: "capital-claims-australia",
    title: "Capital Claims Australia",
    platform: "WordPress",
    category: "WordPress",
    role: "Frontend / WordPress",
    industry: "Property Depreciation & Finance",
    shortDesc: "Australian tax depreciation and property claims service platform.",
    overview: "Developed responsive layouts and calculator interfaces for an Australian property tax depreciation consulting firm.",
    challenge: "Ensuring calculators and quote request forms worked flawlessly across mobile devices.",
    approach: "Built clean custom sections with ACF on WordPress, focusing on fast load times and clean forms.",
    implementationDetails: [
      "ACF-driven service pages and customer testimonials",
      "Custom quote estimation interface with clean form validation",
      "On-page SEO optimization and responsive styling"
    ],
    outcome: "A fast, professional financial website with high clarity on property claim services.",
    image: "/projects/fintech-ui.jpg"
  },
  {
    slug: "drehpunkt-pflege",
    title: "Drehpunkt Pflege",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Healthcare & Care Services",
    shortDesc: "German healthcare and nursing advisory website with accessible typography.",
    overview: "Designed and built a compassionate, highly accessible website for a German healthcare and home care assistance provider.",
    challenge: "Creating an accessible, warm design that is easy for senior citizens and family members to read and navigate.",
    approach: "Prioritized large readable fonts, calm color contrasts, clear service descriptions, and simple phone contact methods.",
    implementationDetails: [
      "Accessible high-contrast typography and intuitive navigation",
      "WordPress page structure for easy content updates by staff",
      "Direct click-to-call integration and straightforward consultation forms"
    ],
    outcome: "An accessible, reassuring digital presence facilitating care consultations.",
    image: "/projects/saas-dashboard.jpg"
  },
  {
    slug: "entiva-media-labs",
    title: "Entiva Media Labs",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Digital Media & Production",
    shortDesc: "Creative media production portfolio with video showcases and services.",
    overview: "Developed a modern media production agency website showcasing creative campaigns, showreels, and client services.",
    challenge: "Embedding video media efficiently without slowing down initial page rendering.",
    approach: "Designed dark aesthetic surfaces with lazy-loaded video embeds and responsive media galleries.",
    implementationDetails: [
      "Custom WordPress theme components for video case studies",
      "Optimized media loading and responsive grid displays",
      "Project inquiry forms and contact section"
    ],
    outcome: "An engaging creative portfolio that highlights media work smoothly across all screens.",
    image: "/projects/creative-agency.jpg"
  },
  {
    slug: "mgi-access",
    title: "MGI Access",
    platform: "WordPress",
    category: "WordPress",
    role: "Frontend Development",
    industry: "Industrial & Safety Systems",
    shortDesc: "Industrial access, safety scaffolding, and height solutions corporate site.",
    overview: "Built responsive company website showcasing industrial safety, scaffolding, and commercial access solutions.",
    challenge: "Structuring industrial project case studies and safety certification details clearly.",
    approach: "Engineered clean WordPress templates with product category filtering and equipment specifications.",
    implementationDetails: [
      "Responsive service matrices and project gallery",
      "Inquiry and quote submission forms",
      "Cross-browser testing across mobile and desktop"
    ],
    outcome: "A robust corporate website presenting industrial solutions clearly to commercial contractors.",
    image: "/projects/iron-shield.jpg"
  },
  {
    slug: "monvi",
    title: "Monvi",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Lifestyle & Apparel",
    shortDesc: "Modern lifestyle and sustainable brand presentation website.",
    overview: "Crafted a clean, minimalist brand showcase for Monvi, emphasizing sustainable materials and aesthetic craftsmanship.",
    challenge: "Creating an uncluttered, premium brand experience within WordPress.",
    approach: "Used minimal monochrome styling, generous margins, and subtle interactive hover details.",
    implementationDetails: [
      "Minimalist lookbook layouts and brand narrative pages",
      "Integrated newsletter signup and contact inquiries",
      "Optimized performance and mobile typography"
    ],
    outcome: "A clean, modern brand site that lets products and craftsmanship speak for themselves.",
    image: "/projects/luxury-store.jpg"
  },
  {
    slug: "x-factor-lab-quiz",
    title: "X-Factor Lab Quiz",
    platform: "WordPress",
    category: "WordPress",
    role: "Frontend Development",
    industry: "Interactive Marketing & Assessments",
    shortDesc: "Interactive multi-step quiz and lead qualification funnel.",
    overview: "Built an interactive step-by-step assessment quiz on WordPress to evaluate candidate profiles and provide personalized feedback.",
    challenge: "Delivering an animated, multi-step quiz flow that keeps users engaged without page reloads.",
    approach: "Built responsive custom JavaScript step transitions integrated with WordPress backend lead capture.",
    implementationDetails: [
      "Multi-step progress indicator and animated question transitions",
      "Conditional score calculation and personalized recommendations screen",
      "Mobile-friendly touch options and form validation"
    ],
    outcome: "An engaging interactive quiz funnel that improved user completion and lead accuracy.",
    image: "/projects/saas-dashboard.jpg"
  },
  {
    slug: "itsbot-ai-blog",
    title: "ItsBot.ai Blog",
    platform: "WordPress",
    category: "WordPress",
    role: "CMS Development",
    industry: "Developer Content & AI",
    shortDesc: "Editorial technical blog with syntax highlighting and categories.",
    overview: "Implemented a clean technical blog on WordPress for the ItsBot.ai platform to publish product updates and developer tutorials.",
    challenge: "Formatting code blocks, documentation callouts, and article categories seamlessly.",
    approach: "Customized WordPress theme with clean typography, reading time indicators, and structured tags.",
    implementationDetails: [
      "Syntax-highlighted code blocks and custom editorial callout styles",
      "Categorized articles with responsive sidebar and search",
      "SEO metadata and social sharing integration"
    ],
    outcome: "A readable, professional tech blog that supports continuous content publishing.",
    image: "/projects/itsbot-ai.jpg"
  },
  {
    slug: "uvaacha-studio",
    title: "Uvaacha Studio",
    platform: "WordPress",
    category: "WordPress",
    role: "Design + Development",
    industry: "Creative Arts & Design",
    shortDesc: "Artistic studio portfolio showcasing creative design collections.",
    overview: "Designed and built an artistic portfolio showcasing visual identity, print design, and brand styling for Uvaacha Studio.",
    challenge: "Translating distinctive artistic visual identities into a functional, fast-loading website.",
    approach: "Minimalist portfolio grids with custom typography and curated project showcases.",
    implementationDetails: [
      "Custom responsive image galleries with lightbox previews",
      "Studio introduction, services, and inquiry form",
      "Smooth layout transitions across screen sizes"
    ],
    outcome: "A visual showcase that authentically represents the studio's aesthetic standards.",
    image: "/projects/creative-agency.jpg"
  },

  // Additional Shopify Projects
  {
    slug: "runge-cph",
    title: "Runge CPH",
    platform: "Shopify",
    category: "Shopify",
    role: "Shopify Development",
    industry: "Nordic Living & Furniture",
    shortDesc: "Minimalist Scandinavian home decor and furniture Shopify store.",
    overview: "Developed a Scandinavian design storefront in Shopify, featuring warm natural tones, curated collections, and responsive product grids.",
    challenge: "Presenting detailed furniture dimensions and variant options without cluttering product pages.",
    approach: "Crafted custom Liquid sections with tabbed specifications, collection filters, and clean cart drawers.",
    implementationDetails: [
      "Custom Shopify Liquid section templates for collection storytelling",
      "Interactive product variant switcher and material swatch displays",
      "Mobile-first responsive drawer cart and quick view modals",
      "Optimized image loading for large high-resolution room settings"
    ],
    outcome: "A tranquil, high-converting Nordic shopping experience that highlights design quality.",
    image: "/projects/runge-cph.jpg",
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },
  {
    slug: "himalayan-education",
    title: "Himalayan Education",
    platform: "Shopify",
    category: "Shopify",
    role: "Storefront Development",
    industry: "Books & Educational Supplies",
    shortDesc: "Educational bookstore and learning kit e-commerce platform.",
    overview: "Configured and customized a comprehensive educational bookstore on Shopify, organizing titles by grade and curriculum.",
    challenge: "Structuring extensive catalogs with multiple categories, authors, and age groups.",
    approach: "Implemented dynamic search, category mega-navigation, and bulk school order inquiries.",
    implementationDetails: [
      "Custom collection templates with multi-faceted filtering",
      "Bulk ordering inquiry form for educational institutions",
      "Mobile-optimized catalog navigation and quick cart"
    ],
    outcome: "A well-organized online bookstore enabling educators and parents to find resources quickly.",
    image: "/projects/todemy.jpg"
  },
  {
    slug: "genie",
    title: "Genie",
    platform: "Shopify",
    category: "Shopify",
    role: "Frontend / Storefront",
    industry: "Smart Home & Consumer Tech",
    shortDesc: "Modern consumer electronics and smart gadget e-commerce store.",
    overview: "Engineered a high-energy consumer tech storefront showcasing smart gadgets and innovative lifestyle electronics.",
    challenge: "Highlighting product feature animations and technical specifications on compact mobile screens.",
    approach: "Built modular product feature rows, comparison tables, and customer review sections.",
    implementationDetails: [
      "Custom Liquid feature highlight sections with interactive tabs",
      "Sticky mobile buy bar for improved product checkout accessibility",
      "Fast checkout flow with localized currency handling"
    ],
    outcome: "A dynamic tech storefront that clearly communicates product value and boosts conversion.",
    image: "/projects/saas-dashboard.jpg"
  },
  {
    slug: "baikal-tea",
    title: "Baikal Tea",
    platform: "Shopify",
    category: "Shopify",
    role: "Design + Development",
    industry: "Artisanal Beverages & Wellness",
    shortDesc: "Specialty tea and herbal wellness collection online boutique.",
    overview: "Designed and built an artisanal tea e-commerce boutique focused on natural ingredients, brewing guides, and subscription options.",
    challenge: "Balancing educational brewing guides with direct e-commerce product purchasing.",
    approach: "Blended lifestyle storytelling with clear product cards, flavor profile tags, and bundle options.",
    implementationDetails: [
      "Flavor notes tag system and brewing instruction tabs on product pages",
      "Custom bundle selection and cart upsell recommendations",
      "Clean warm earthy visual aesthetic matching natural tea ingredients"
    ],
    outcome: "A calming, attractive storefront that educates consumers and drives repeat orders.",
    image: "/projects/sensei-farms.jpg"
  },

  // Additional React / Next.js Projects
  {
    slug: "todemy",
    title: "Todemy",
    platform: "React / Next.js",
    category: "React / Next.js",
    role: "Frontend Development",
    industry: "EdTech & Online Learning",
    shortDesc: "Modern platform with course directory, interactive lessons and clean UI.",
    overview: "Developed the frontend architecture for Todemy, an interactive digital learning platform with courses, search filters, and progress tracking.",
    challenge: "Building a responsive course catalog with client-side filtering by category, level, and rating without lag.",
    approach: "Structured modular React components, typed state management, and optimized render performance.",
    implementationDetails: [
      "Dynamic course filtering and search query integration",
      "Course curriculum preview and instructor profile widgets",
      "Responsive layout optimized across tablets and laptops"
    ],
    outcome: "A responsive, modern learning platform that makes discovering and taking courses effortless.",
    image: "/projects/todemy.jpg",
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },
  {
    slug: "canterbury",
    title: "Canterbury",
    platform: "React / Next.js",
    category: "React / Next.js",
    role: "Frontend Development",
    industry: "Higher Education Portal",
    shortDesc: "Institutional university portal and course information web app.",
    overview: "Built the responsive frontend for an educational institution portal providing program directories, campus updates, and admissions steps.",
    challenge: "Managing dense institutional information architectures cleanly across varying screen sizes.",
    approach: "Created a component-driven interface with clear accordion modules, breadcrumb hierarchies, and accessible typography.",
    implementationDetails: [
      "Modular course lookup and department breakdown components",
      "Accessible navigation complying with web accessibility standards",
      "Responsive admissions checklist and application portals"
    ],
    outcome: "A structured, clean academic portal that students and parents can navigate with ease.",
    image: "/projects/established-canadian.jpg"
  },
  {
    slug: "scholars",
    title: "Scholars",
    platform: "React / Next.js",
    category: "React / Next.js",
    role: "Frontend Development",
    industry: "Student Fellowship & Scholarships",
    shortDesc: "Scholarship search and student grant application portal.",
    overview: "Developed an intuitive web application helping students discover and apply for scholarships and academic grants.",
    challenge: "Guiding students through eligibility criteria and document submission requirements.",
    approach: "Engineered clean multi-step forms, eligibility filter badges, and deadline reminders.",
    implementationDetails: [
      "Search filters for academic field, funding amount, and deadlines",
      "Clear eligibility checklist with visual indicators",
      "Mobile-friendly application review interface"
    ],
    outcome: "A simplified student portal that reduces confusion during the scholarship search process.",
    image: "/projects/creative-agency.jpg"
  },
  {
    slug: "buildermatch",
    title: "Buildermatch",
    platform: "React / Next.js",
    category: "React / Next.js",
    role: "Frontend Development",
    industry: "Construction Marketplace",
    shortDesc: "Homeowner and verified contractor matchmaking platform interface.",
    overview: "Built the frontend interface connecting homeowners planning renovations with vetted local construction contractors.",
    challenge: "Designing project specification forms that gather detailed project scopes without overwhelming the user.",
    approach: "Created step-by-step interactive questionnaire cards with clear progress indicators and contractor profile views.",
    implementationDetails: [
      "Step-by-step renovation scope builder with photo upload fields",
      "Contractor profile cards with verified badges and past work galleries",
      "Responsive layout for mobile on-site access"
    ],
    outcome: "A clean matching experience that bridges the gap between clients and contractors.",
    image: "/projects/iron-shield.jpg"
  },

  // Additional Wix Projects
  {
    slug: "gc-photobooth",
    title: "GC Photobooth",
    platform: "Wix",
    category: "Wix",
    role: "Design + Development",
    industry: "Events & Entertainment",
    shortDesc: "Party and event photo booth rental website with package booking.",
    overview: "Designed and built an energetic, celebratory rental website for a photo booth company serving weddings, parties, and corporate events.",
    challenge: "Presenting package tiers, print backdrop options, and instant date availability inquiry.",
    approach: "Used high-contrast festive visuals, sample photo galleries, and clear pricing tables with inquiry triggers.",
    implementationDetails: [
      "Package comparison table for weddings, corporate, and private parties",
      "Interactive backdrop and template selector showcase",
      "Direct date inquiry and booking request integration"
    ],
    outcome: "A fun, clear event site that converted visitors into scheduled rental bookings.",
    image: "/projects/shope-luxurie.jpg"
  },

  // Additional HubSpot Projects
  {
    slug: "pinwheel",
    title: "Pinwheel",
    platform: "HubSpot",
    category: "HubSpot",
    role: "CMS Development",
    industry: "Fintech & API Infrastructure",
    shortDesc: "Fintech data connectivity platform landing pages and developer hub.",
    overview: "Constructed dynamic CMS landing pages and feature hubs on HubSpot for a financial data API infrastructure provider.",
    challenge: "Combining technical API messaging with corporate financial credibility.",
    approach: "Created modular HubSpot templates featuring code preview components, compliance badges, and clean lead magnets.",
    implementationDetails: [
      "Custom HubL modules for API endpoint demos and interactive code snippets",
      "High-converting demo request forms linked with sales pipelines",
      "Performance optimization for fast loading across global traffic"
    ],
    outcome: "A flexible CMS environment that allows rapid rollout of targeted solution pages.",
    image: "/projects/pinwheel.jpg",
    liveUrl: "https://drive.google.com/file/d/1z0V5Ms3hnpMtQ2jbnFL_yHjpsgPBXtg8/view?usp=sharing"
  },
  {
    slug: "topleft-team",
    title: "Topleft Team",
    platform: "HubSpot",
    category: "HubSpot",
    role: "CMS Development",
    industry: "IT Project Management & Agile Tools",
    shortDesc: "Agile project visualization tool for MSPs and tech teams.",
    overview: "Developed HubSpot CMS templates for a software vendor providing Kanban and Agile boards for managed service providers.",
    challenge: "Presenting complex software workflow integrations (ConnectWise, Autotask) in an easily digestible layout.",
    approach: "Designed structured workflow diagrams, feature matrices, and free trial trigger blocks.",
    implementationDetails: [
      "Custom HubSpot modules for feature highlights and software walkthroughs",
      "Integration with HubSpot landing page workflows and webinars",
      "Tested and refined for cross-device responsiveness"
    ],
    outcome: "Clean, consistent marketing pages that explain software capabilities clearly.",
    image: "/projects/openenvoy.jpg"
  },
  {
    slug: "funded-club",
    title: "Funded Club",
    platform: "HubSpot",
    category: "HubSpot",
    role: "CMS Development",
    industry: "Venture Capital & Startup Funding",
    shortDesc: "Startup advisory and investor network landing page ecosystem.",
    overview: "Built responsive HubSpot CMS landing pages for a startup network providing fundraising mentorship and investor introductions.",
    challenge: "Creating distinct paths for early-stage founders seeking capital and angel investors evaluating deal flow.",
    approach: "Built dual-audience landing pages with tailored forms, video pitches, and success story carousels.",
    implementationDetails: [
      "Dual persona pathway modules (Founders vs. Investors)",
      "HubSpot lead capture forms with automatic segment tagging",
      "Clean, modern venture-style typographic layout"
    ],
    outcome: "A professional funding portal with clear routing for founders and investors.",
    image: "/projects/fintech-ui.jpg"
  },

  // Other Projects (Webflow / Custom)
  {
    slug: "hungry-bite-pizza",
    title: "Hungry Bite Pizza",
    platform: "Other",
    category: "Other",
    role: "Design + Development",
    industry: "Food & Restaurant",
    shortDesc: "Restaurant website with mouth-watering menu and local ordering details.",
    overview: "Designed and implemented an inviting local restaurant website featuring appetizers, specialty pizzas, and delivery options.",
    challenge: "Displaying menu items with prices, dietary tags, and toppings clearly on mobile phones.",
    approach: "Built a responsive food menu with category tabs, mouth-watering food photography, and direct phone ordering buttons.",
    implementationDetails: [
      "Mobile-friendly categorized menu layout with dietary icons",
      "Location map, opening hours, and direct call-to-order buttons",
      "Fast load performance for customers searching while on the go"
    ],
    outcome: "A vibrant local restaurant site that makes viewing menus and placing orders quick and easy.",
    image: "/projects/creative-agency.jpg"
  },
  {
    slug: "louvenirs",
    title: "Louvenirs",
    platform: "Other",
    category: "Other",
    role: "Design + Development",
    industry: "Artisanal Keepsakes & Gifts",
    shortDesc: "Bespoke gift shop portfolio showcasing handcrafted souvenirs.",
    overview: "Created a charming online showcase for a boutique specializing in artisanal keepsakes and handcrafted commemorative gifts.",
    challenge: "Capturing the delicate craftsmanship and sentimental value of handcrafted goods.",
    approach: "Used soft warm backgrounds, elegant serif accents, and high-detail product close-ups.",
    implementationDetails: [
      "Artisanal product catalog layout and custom ordering guide",
      "Inquiry and custom engraving request forms",
      "Responsive layout for smooth mobile browsing"
    ],
    outcome: "A warm, personal digital storefront that highlights artisanal gift craftsmanship.",
    image: "/projects/luxury-store.jpg"
  },
  {
    slug: "eminence-technology",
    title: "Eminence Technology",
    platform: "Other",
    category: "Other",
    role: "Frontend Development",
    industry: "Digital Agency & Technology",
    shortDesc: "Agency services and case study website showcasing frontend capabilities.",
    overview: "Collaborated on building responsive web solutions, e-commerce storefronts, and client case study pages for an IT agency.",
    challenge: "Developing scalable, reusable UI components for diverse client projects.",
    approach: "Implemented modular frontend code with clean responsive styles and cross-browser testing.",
    implementationDetails: [
      "Pixel-accurate frontend implementation from Figma designs",
      "Responsive testing across multiple browser engines and mobile devices",
      "Code cleanup and performance optimization"
    ],
    outcome: "Consistent, robust web deliverables delivered within project timelines.",
    image: "/projects/saas-dashboard.jpg"
  },

  // Figma UI/UX Design Projects
  {
    slug: "austin-reed",
    title: "Austin Reed",
    platform: "Figma",
    category: "Figma",
    role: "Web Design (Figma)",
    industry: "Heritage Menswear & Fashion",
    shortDesc: "Bespoke menswear digital redesign concept in Figma.",
    overview: "Crafted a comprehensive design system and responsive website concept in Figma for a classic tailoring and heritage menswear label.",
    challenge: "Balancing timeless British tailoring heritage with contemporary digital e-commerce usability.",
    approach: "Developed an elegant typographic hierarchy, subtle grid alignments, and modular product detail page components in Figma.",
    implementationDetails: [
      "Full Figma design system with components, tokens, and auto-layout",
      "Desktop, tablet, and mobile responsive screen mockups",
      "Interactive prototyping of category browsing and lookbook flows"
    ],
    outcome: "A refined visual system that honors brand heritage while modernizing the shopping experience.",
    image: "/projects/luxury-store.jpg"
  },
  {
    slug: "website-ui-ux-design",
    title: "Website UI/UX Design",
    platform: "Figma",
    category: "Figma",
    role: "UI/UX Design",
    industry: "Creative Services",
    shortDesc: "Modern responsive web concepts and design systems created in Figma.",
    overview: "Curated collection of responsive website UI/UX designs created in Figma, covering marketing layouts, service grids, and landing pages.",
    challenge: "Designing versatile design systems that translate smoothly into frontend code without friction.",
    approach: "Built systematic Figma components with auto-layout, clear typography scales, and developer-ready handoff specs.",
    implementationDetails: [
      "Component library with consistent spacing, colors, and button states",
      "Responsive wireframes and high-fidelity screen designs",
      "Handoff documentation with layout specs for frontend developers"
    ],
    outcome: "Production-ready Figma files designed with practical frontend implementation in mind.",
    image: "/projects/creative-agency.jpg"
  },
  {
    slug: "web-app-design",
    title: "Web App Design",
    platform: "Figma",
    category: "Figma",
    role: "Web App Design",
    industry: "SaaS & Productivity",
    shortDesc: "Productivity dashboard and task management interface designed in Figma.",
    overview: "Designed an intuitive SaaS web application interface in Figma, focusing on dashboard clarity, metrics visualization, and task management.",
    challenge: "Organizing multiple data tables, activity feeds, and filtering controls without cluttering the user view.",
    approach: "Designed a modular dashboard grid with collapsible sidebars, clean card containers, and intuitive status colors.",
    implementationDetails: [
      "Dashboard widget components with light and dark mode explorations",
      "Data table layouts with sort and filter controls",
      "Interactive prototype showcasing task creation and status updates"
    ],
    outcome: "A clean, efficient web app interface tailored for everyday business productivity.",
    image: "/projects/saas-dashboard.jpg"
  },
  {
    slug: "web-app-design-concept",
    title: "Web App Design Concept",
    platform: "Figma",
    category: "Figma",
    role: "Product Concept",
    industry: "Digital Utilities",
    shortDesc: "Exploratory product concept and user experience workflow in Figma.",
    overview: "Explored interface concepts for a modern collaborative tool, wireframing user journeys from onboarding to daily task completion.",
    challenge: "Simplifying multi-step team workflows into a friction-free visual experience.",
    approach: "Iterated through wireframes to prototype clear micro-steps, contextual help, and clean visual milestones.",
    implementationDetails: [
      "User journey maps and interactive Figma prototype flows",
      "Minimalist cards and typography hierarchy",
      "Tested usability workflows for quick user actions"
    ],
    outcome: "An inspiring concept that validates practical user workflows and clean aesthetics.",
    image: "/projects/fintech-ui.jpg"
  },
  {
    slug: "unisphere",
    title: "Unisphere",
    platform: "Figma",
    category: "Figma",
    role: "UI/UX Design Concept",
    industry: "Global Collaboration & Cloud",
    shortDesc: "Global network platform visual identity and web design concept.",
    overview: "Designed a clean concept interface for a global collaboration platform, emphasizing connected teams, real-time sync, and international reach.",
    challenge: "Visualizing global connectivity and cloud infrastructure in a modern, human-centric way.",
    approach: "Blended clean geometric layouts with subtle gradient accents and structured feature showcases.",
    implementationDetails: [
      "Hero section and interactive feature matrix designed in Figma",
      "Responsive screen variations for desktop and mobile viewports",
      "Clean visual iconography and layout spacing"
    ],
    outcome: "A polished concept showcasing international digital collaboration.",
    image: "/projects/creative-agency.jpg"
  }
];

export const FILTER_CATEGORIES = [
  "All",
  "WordPress",
  "Shopify",
  "React / Next.js",
  "Wix",
  "Webflow",
  "HubSpot",
  "Other",
] as const;
