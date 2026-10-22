export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  platforms: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Website Design",
    description: "Modern responsive website design focused on clarity, usability and conversion.",
    deliverables: [
      "Responsive wireframes and visual design in Figma",
      "Clean visual hierarchy with structured typography and white space",
      "Desktop, tablet, and mobile interface design",
      "Interactive prototypes and developer-ready design files"
    ],
    platforms: ["Figma", "Photoshop", "Responsive Systems"]
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Pixel-accurate responsive frontend implementation from designs.",
    deliverables: [
      "Pixel-perfect translation of approved design mockups",
      "Semantic HTML5, modern CSS3, and JavaScript",
      "React.js and Next.js component-based architectures",
      "Responsive testing across all modern browsers and screen sizes"
    ],
    platforms: ["React.js", "Next.js", "Tailwind CSS", "HTML/CSS/JS"]
  },
  {
    number: "03",
    title: "WordPress Development",
    description: "Custom WordPress websites, Elementor, ACF, dynamic pages and reusable sections.",
    deliverables: [
      "Custom page templates and reusable section modules",
      "Advanced Custom Fields (ACF) for clean client content editing",
      "Elementor and block-based implementations",
      "Fast page load times and mobile optimization"
    ],
    platforms: ["WordPress", "ACF", "Elementor", "WooCommerce"]
  },
  {
    number: "04",
    title: "Shopify Development",
    description: "Theme customization, Liquid sections, product pages and storefront implementation.",
    deliverables: [
      "Custom Shopify Liquid section development and theme adjustments",
      "Product detail pages, variant selectors, and collection filters",
      "Mobile-optimized drawer carts and streamlined navigation",
      "Integration with payment gateways and essential apps without bloat"
    ],
    platforms: ["Shopify", "Liquid", "E-commerce", "Responsive Storefronts"]
  },
  {
    number: "05",
    title: "CMS & Website Development",
    description: "Webflow, Wix and HubSpot CMS development depending on project requirements.",
    deliverables: [
      "Webflow responsive builds with CMS collections and smooth interactions",
      "HubSpot CMS custom modules, templates, and dynamic landing pages",
      "Wix Studio custom layouts and e-commerce configurations",
      "Client training and handoff documentation for self-management"
    ],
    platforms: ["Webflow", "HubSpot CMS", "Wix", "CMS Collections"]
  },
  {
    number: "06",
    title: "Website Improvements",
    description: "Responsive fixes, performance improvements, UI refinements, SEO basics and ongoing website support.",
    deliverables: [
      "Cross-browser and mobile responsive bug fixes",
      "Speed optimization: image compression, lazy loading, and asset cleanup",
      "On-page SEO essentials: meta tags, heading structure, alt text, and URLs",
      "Ongoing UI refinements and continuous site updates"
    ],
    platforms: ["Performance", "Core Web Vitals", "On-Page SEO", "Maintenance"]
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
    summary: "Understand the business, audience and project requirements.",
    description: "We clarify your business goals, target audience, content structure, and technical requirements before writing a line of code or designing a screen."
  },
  {
    number: "02",
    name: "Design",
    summary: "Create or interpret the visual direction and responsive layouts.",
    description: "I craft clean, purposeful layouts in Figma for desktop, tablet, and mobile, ensuring typography, spacing, and visual hierarchy support your message."
  },
  {
    number: "03",
    name: "Build",
    summary: "Develop the frontend and integrate the required CMS or platform.",
    description: "I implement pixel-accurate code and integrate your chosen CMS (WordPress, Shopify, Webflow, HubSpot, or React) so your site matches the design."
  },
  {
    number: "04",
    name: "Refine",
    summary: "Responsive testing, browser testing, performance and UI refinement.",
    description: "Comprehensive testing across multiple device viewports, touchscreens, and browsers, optimizing speed, Core Web Vitals, and on-page SEO essentials."
  },
  {
    number: "05",
    name: "Launch",
    summary: "Final QA, deployment and handover.",
    description: "Final checklist review, domain configuration, analytics verification, and clear walkthrough instructions so you can easily manage content moving forward."
  }
];

export interface ValueProp {
  title: string;
  tagline: string;
  description: string;
}

export const WHY_WORK_WITH_ME: ValueProp[] = [
  {
    title: "Design + Development",
    tagline: "Both visual and technical sides stay connected",
    description: "I understand both the visual design and implementation sides of websites. What is designed in Figma is what gets built in code — with zero handoff friction or misinterpretation."
  },
  {
    title: "Platform Flexibility",
    tagline: "Stack chosen to match project needs",
    description: "I can work with the CMS or frontend stack that fits the project — whether WordPress, Shopify, React/Next.js, Webflow, Wix, or HubSpot CMS — rather than forcing every project into the same tool."
  },
  {
    title: "Responsive First",
    tagline: "Tested across every viewport and device",
    description: "Websites are designed and built with desktop, tablet, and mobile experiences in mind from day one, ensuring buttons, text, and layout adapt gracefully."
  },
  {
    title: "Client Collaboration",
    tagline: "Clear communication and plain-language updates",
    description: "Comfortable understanding requirements, coordinating changes, and communicating clearly during projects so you always know where things stand."
  }
];

export interface PlatformTool {
  name: string;
  category: string;
  iconName?: string;
}

export const TOOLS_PLATFORMS: PlatformTool[] = [
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-commerce" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Wix", category: "CMS / Builder" },
  { name: "Webflow", category: "Visual CMS" },
  { name: "HubSpot", category: "CMS" },
  { name: "Figma", category: "UI Design" },
  { name: "HTML / CSS / JS", category: "Frontend Core" },
  { name: "Tailwind CSS", category: "Styling" }
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Sham delivered exactly what we needed — a clean, responsive website that looks great and works perfectly. He's easy to work with, understands requirements well, and always keeps communication clear.",
    author: "Sarah Mitchell",
    role: "Founder",
    company: "Summer Fridays"
  },
  {
    quote: "Working with Sham on our roofing service website was seamless. He translated our business offerings into clear, structured pages and got our quote requests flowing smoothly.",
    author: "David Vance",
    role: "Managing Director",
    company: "Iron Shield Roofing"
  },
  {
    quote: "Sham has a rare ability to understand design aesthetics and immediately build them into clean code. He's reliable, responsive, and delivers on time.",
    author: "Mark R.",
    role: "Product Lead",
    company: "ItsBot.ai"
  }
];
