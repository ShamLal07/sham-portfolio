export interface ServiceItem {
  number: string;
  title: string;
  badge?: string;
  description: string;
  deliverables: string[];
  platforms: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Frontend Development",
    badge: "Frontend Development",
    description: "Modern, responsive and interactive websites using the latest technologies.",
    deliverables: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js / Next.js",
      "Tailwind CSS / Bootstrap",
      "Pixel-perfect & smooth UI"
    ],
    platforms: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "Tailwind CSS"]
  },
  {
    number: "02",
    title: "Full Stack Development",
    badge: "Full Stack Development",
    description: "End-to-end web applications with clean architecture and scalable solutions.",
    deliverables: [
      "React / Next.js (Frontend)",
      "Node.js / Express.js (Backend)",
      "MongoDB / PostgreSQL",
      "REST APIs & Authentication"
    ],
    platforms: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    number: "03",
    title: "Custom Web Applications",
    badge: "Custom Web Applications",
    description: "Tailored web apps built for your unique business needs, workflows and goals.",
    deliverables: [
      "SaaS Platforms & Web Apps",
      "Admin Panels & Custom Dashboards",
      "CRM & Booking Portals",
      "Third-Party API Integrations"
    ],
    platforms: ["SaaS", "Next.js", "Dashboards", "REST APIs", "Auth0 / Supabase"]
  },
  {
    number: "04",
    title: "UI / UX Design",
    badge: "UI / UX Design",
    description: "User-centered interface design that looks great and feels intuitive to navigate.",
    deliverables: [
      "Wireframes & Interactive Prototypes",
      "User Flows & Journey Mapping",
      "Modern & Minimalist Design Systems",
      "Figma Handoff Ready for Code"
    ],
    platforms: ["Figma", "Design Systems", "Prototypes", "Wireframing", "User Testing"]
  },
  {
    number: "05",
    title: "CMS & E-Commerce Development",
    badge: "CMS & E-Commerce",
    description: "Custom storefronts and content-managed platforms that clients can easily update.",
    deliverables: [
      "Custom WordPress & WooCommerce",
      "Shopify Stores & Liquid Theme Edits",
      "Webflow & Framer Development",
      "HubSpot & Wix Custom Modules"
    ],
    platforms: ["WordPress", "Shopify", "Webflow", "Wix", "HubSpot", "WooCommerce"]
  },
  {
    number: "06",
    title: "Website Improvements & Speed",
    badge: "Improvements & Speed",
    description: "Performance optimization, bug fixes, modern redesigns, and Core Web Vitals tuning.",
    deliverables: [
      "Core Web Vitals & 90+ PageSpeed",
      "Mobile & Responsive Fixes",
      "Conversion Rate Optimization (CRO)",
      "Technical SEO & Clean Code Refactor"
    ],
    platforms: ["PageSpeed", "SEO Audit", "Core Web Vitals", "Cross-Browser", "Analytics"]
  }
];

export interface ProcessStep {
  number: string;
  name: string;
  summary: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    name: "Discover",
    summary: "Understanding your project goals, audience, and scope.",
    description:
      "Every project starts with clarity. We discuss your objectives, existing brand assets, target audience, and must-have functionality to map out a clear scope before designing or writing code."
  },
  {
    number: "02",
    name: "Wireframe & Design",
    summary: "Creating the structure, page layout, and visual direction.",
    description:
      "Next, I outline the layout structure and interface design in Figma. You get an interactive visual preview so we can refine typography, spacing, and mobile hierarchy together."
  },
  {
    number: "03",
    name: "Build & Implement",
    summary: "Turning agreed designs into clean, responsive code.",
    description:
      "Once approved, I develop the site cleanly in WordPress, Shopify, Webflow, or Next.js. The code is modular, semantic, and easy for your team to manage after launch."
  },
  {
    number: "04",
    name: "Test & Review",
    summary: "Checking devices, performance, speed, and usability.",
    description:
      "I test across mobile, tablet, and desktop devices to verify responsive layouts, cross-browser compatibility, form submissions, and Core Web Vitals performance."
  },
  {
    number: "05",
    name: "Launch & Support",
    summary: "Deploying to your domain and providing handover guidance.",
    description:
      "When everything is approved, I connect your custom domain, set up SSL, test live forms, and walk you through how to edit content easily going forward."
  }
];

export interface WhyWorkWithMeItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export const WHY_WORK_WITH_ME: WhyWorkWithMeItem[] = [
  {
    number: "01",
    title: "Design + Development Together",
    subtitle: "Both visual and technical sides stay connected",
    description:
      "I understand both the visual design and implementation sides of websites. What is designed in Figma is what gets built in code — with zero handoff friction or misinterpretation."
  },
  {
    number: "02",
    title: "Platform Flexibility",
    subtitle: "Stack chosen to match project needs",
    description:
      "I work with the CMS or frontend stack that fits the project — whether WordPress, Shopify, React/Next.js, Webflow, Wix, or HubSpot CMS — rather than forcing every project into the same tool."
  },
  {
    number: "03",
    title: "Mobile-First Responsiveness",
    subtitle: "Clean viewing on every screen size",
    description:
      "Every layout is planned for fluid responsiveness across phones, tablets, and wide monitors. Media queries, fluid typography, and touch interactions are tested on real devices."
  },
  {
    number: "04",
    title: "Maintainable Handoff",
    subtitle: "Easy for clients to update independently",
    description:
      "I build with client maintenance in mind. Custom fields, reusable blocks, and clear CMS structure mean you don't need a developer for every text edit or image change."
  }
];

export const TOOLS_PLATFORMS = [
  { name: "Figma", category: "Design" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "Webflow", category: "CMS" },
  { name: "Wix / Velo", category: "CMS" },
  { name: "HubSpot CMS", category: "CMS" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "JavaScript (ES6+)", category: "Frontend" },
  { name: "HTML5 / CSS3", category: "Frontend" },
  { name: "Git / GitHub", category: "Dev Tools" }
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Sham took our Figma concepts and turned them into a pixel-perfect, responsive WordPress website ahead of schedule. The communication was prompt and the code was exceptionally clean.",
    author: "David Miller",
    role: "Founder",
    company: "Creative Studio, UK"
  },
  {
    quote:
      "Our Shopify store's mobile conversion improved significantly after Sham redesigned the product pages and checkout flow. Highly recommend his design-to-code execution.",
    author: "Elena Rostova",
    role: "Operations Director",
    company: "NairobiBabes, Kenya"
  },
  {
    quote:
      "Working with Sham was effortless. He immediately understood our brand aesthetics and delivered a modern Next.js website that loads instantly. True professional.",
    author: "Marcus Chen",
    role: "Head of Marketing",
    company: "TechVentures, Singapore"
  }
];
